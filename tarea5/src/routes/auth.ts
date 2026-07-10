import { Router, Request, Response } from "express";
import { User } from "../models/user";
import { HTTPStatus } from "../config/components";
import { hashPassword, comparePassword } from "../utils/bcrypt";
import { generateToken, verifyToken } from "../utils/jwt";
import { authMiddleware } from "../middlewares/auth";

const router = Router();

//Registro
router.post("/register", (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  //Validacion de campos require
  if (!name || !email || !password) {
    res
      .status(HTTPStatus.BAD_REQUEST)
      .send("Nombre, Email y Contraseña requeridos");
    return;
  }



  //Verificar si el email ya existe
  User.findOne({ email })
    .then((userExists) => {
      if (userExists) {
        res.status(HTTPStatus.CONFLICT).send("Email ya registrado");
        return;
      }
      
      //Largo contraseña
      if (password.length < 8) {
          res.status(HTTPStatus.BAD_REQUEST).send("La contraseña debe tener mínimo 8 caracteres");
          return;
      }   

      //Hasheamos contraseña
      return hashPassword(password)
        .then((passwordHashed: string) => {
          //Crear usuario
          return User.create({
            name,
            email,
            password: passwordHashed,
          });
        })
        .then((newUser) => {
          res.status(HTTPStatus.OK).send({
            message: "Usuario registrado correctamente!",
            user: {
              id: newUser._id,
              name: newUser.name,
              email: newUser.email,
              role: newUser.role,
            },
          });
        });
    })
    .catch(() => {
      res
        .status(HTTPStatus.INTERNAL_SERVER_ERROR)
        .send("Error al intentar registrar usuario");
    });
});

//Login
router.post("/login", (req: Request, res: Response) => {
  const { email, password } = req.body;

  //Validacion campos require
  if (!email || !password) {
    res.status(HTTPStatus.BAD_REQUEST).send("Email y Contraseña requeridas");
    return;
  }

  //Verrificar que usuario exista
  User.findOne({ email })
    .then((user) => {
      if (!user) {
        res.status(HTTPStatus.NOT_FOUND).send("Usuario no encontrado");
        return;
      }

      //Comparamos contraseña
      return comparePassword(password, user.password)
        .then((passwordMatch: boolean) => {
          if (!passwordMatch) {
            res.status(HTTPStatus.UNAUTHORIZED).send("Contraseña incorrecta");
            return;
          }

          //JWT
          const token = generateToken({ id: String(user._id), email: user.email, role: user.role });

          //Respuesta con Token
          res.status(HTTPStatus.OK).json({ token });
        });
    })
    .catch(() => {
      res
        .status(HTTPStatus.INTERNAL_SERVER_ERROR)
        .send("Error al iniciar sesion");
    });
});

//Verificar sesión
router.get("/me", authMiddleware, (req: Request, res: Response) => {
    res.status(HTTPStatus.OK).send({
        message: "Usuario autenticado",
        user: {
            id: req.user?.id,
            email: req.user?.email,
            role: req.user?.role
        }
    });
});

export default router;
