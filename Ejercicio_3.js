const Logger = (function() {
    let nivel = "";
    let output = "";

    const niveles = {
        info: 1,
        warn: 2,
        error: 3
    };

    function enviarMensaje(type, message){ 
        if(output === "consola"){
            console.log(`[${type.toUpperCase()}]: ${message}`);
        } else {
            const fs = require("fs");
            fs.appendFileSync("logger.txt", `[${type.toUpperCase()}]: ${message}\n`);
        }
    }

    return {
        configurar: function(options){
            nivel = options.nivel;
            output = options.output;
        },
        info: function(message){
            if(niveles[nivel] <= niveles["info"]){
                enviarMensaje("info", message);
            }
        },
         warn: function(message) {
            if (niveles[nivel] <= niveles["warn"]) {
                enviarMensaje("warn", message);
            }
        },

        error: function(message) {
            if (niveles[nivel] <= niveles["error"]) {
                enviarMensaje("error", message);
            }
        }
    }
})(); // el () ejecuta el modulo automaticamente, por lo que existe solo una instancia de logger


//Errores
Logger.configurar({ nivel: "error", output: "consola" });
Logger.info("mensaje de info"); 
Logger.warn("mensaje de warn"); 
Logger.error("mensaje de error"); 

//Todos
/*Logger.configurar({ nivel: "info", output: "consola" });
Logger.info("mensaje de info"); 
Logger.warn("mensaje de warn"); 
Logger.error("mensaje de error"); 

//En archivo (warn y error)
Logger.configurar({ nivel: "warn", output: "archivo" });
Logger.info("mensaje de info"); 
Logger.warn("mensaje de warn"); 
Logger.error("mensaje de error"); 
*/