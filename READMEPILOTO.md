1. RESUMEN DEL PROYECTO
CRIPTO es una plataforma virtual que permite a nuestros usuarios cifrar y descifrar textos secretos mediante el sistema de encriptado de desplazamiento Caesar, bastante facil de usar.

2. DISEÑO FINAL DEL PROYECTO


3. LAS NECESIDADES DEL USUARIO Y EL OBJETIVO DEL PRODUCTO
Los usuarios y los objetivos en relación con el producto
Antes de consolidar la idea del proyecto se solicitó la opinión de tres personas, dos de género femenino y uno masculíno de entre 18 a 19 años de edad. Les dimos la siguiente incognita a responder: Si tuviera una herramienta para el cifrado de textos, ¿Qué uso le daría? 
Las respuestas proporcionadas fueron:

-Guardar textos privados
-Contraseñas
-Escribir por mensajes secretos

Fue gracias a estas opiniones que decidí que mi proyecto consistiría en la elaboración de una aplicación que permita el cifrado y descifrado de textos que puedan incluir anotaciones privadas o secretas para el archivo de un block personal o cualquier uso similar.

Luego de realizar el segundo prototipo se solicitó feedback a tres personas, dos varones y una mujer entre 19 y 35 años de edad, en relación a la necesidad de confidencialidad de la información y su relación con la tecnología. Los comentarios recibidos fueron los siguientes:

"Es importante cambiar la contraseña regularmente porque abundan los hackers, solo que a veces olvido mi contraseña y sería genial una aplicación que me ayude a recordarla fácilmente".
"Usualmente guardo mis anotaciones en el correo electrónico porque tengo miendo a que alguien vaya a leer mis notas personales si lo archivo en la computadora, porque lo comparto con mis hermanas".
"Ahora no tengo información muy confidencial, pero si lo llegara a tener sin duda lo encriptaría, pero para crear contraseñas creo que sí me sería de utilidad".
Gracias a las opiniones recibidas, se decide crear una aplicación destinada a usuarios entre 18 y 35 años de edad que necesiten encontrar un espacio seguro y privado que proporcione cualidades confidenciales a su información digital dentro de las nuevas tecnologías de almacenamiento de archivos personales.

Así se creó My Secret, una aplicación con la que el usuario podrá cifrar y descifrar rápidamente textos confidenciales como por ejemplo:

Diarios personales
Mensajes o cartas electrónicas
Así también, otros servicios que permite My Secret es la creación de:

Claves secretas
Códigos de seguridad
4. Imagen del primer prototipo en papel
El primer prototipo en papel que realicé mostraba los espacios destinados para el título de la aplicación, un subtítulo con el concepto básico e intrucciones, el botón de offset, las casillas de texto y los botones de cifrado y descifrado.

image

5. Resumen del primer feedback
Luego de mostrar el primer prototipo en papel a mis compañeras e indicar la utilidad de la aplicación que pensaba crear para el proyecto, recibí las siguientes sugerencias:

"El casillero offset no debería ser tan grande".
"Es necesario un botón que permita borrar la información ingresada".
6. Imagen del prototipo final
image

7. Hacker edition y aclaraciones del método de cifrado
Para el desarrollo del proyecto se tomó como base principal una de las técnicas criptográfica más usadas: el cifrado César. Conocida también como cifrado por desplazamiento y sustitución debido a que una letra de un texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

Así también, para los fines del proyecto se consideró conveniente el adicionar el cifrado y descifrado de algunos caracteres no alfabéticos y para ello se tomó como referencia sus ubicaciones en código ASCII.

Finalmente, el algoritmo permite cifrar y descifrar caracteres alfabéticos en mayúsculas y minúsculas; números;algunos caracteres especiales no alfabéticos y el caracter número 32 en el código ASCII que representa el espacio. En caso se intente cifrar algún caracter no incluido, el resultado arrojará el mismo valor.

Por ejemplo, si usamos un desplazamiento (offset) de 3 posiciones:

La letra A se cifra como D.
La palabra amor se cifra como dpru.
La palabra valentía se cifra como ¡Ydohqwíd$.
Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
Caracteres no alfabéticos sin cifrar: ! " # $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @
Caracteres no alfabéticos cifrados: $ % & ' ( ) * + , - . / 0 1 2 3 4 5 6 7 8 9 : ; < = > ? @ ! "
OBJETIVOS:
Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto.

UX
 Diseñar la aplicación pensando y entendiendo al usuario
 Crear prototipos para obtener feedback e iterar
 Aplicar los principios de diseño visual
HTML y CSS
 Uso correcto de HTML semántico
 Uso de selectores de CSS
 Construir tu aplicación respetando el diseño realizado (maquetación).
DOM
 Uso de selectores de nodos del DOM
 Manejo de eventos del DOM
 Manipulación dinámica del DOM
Javascript
 Manipulación de strings
 Uso de condicionales
 Uso de bucles
 Uso de funciones
 Datos atómicos y estructurados
 Utilizar ES Modules (import | export).
Testing
 Testeo de tus funciones
Git y GitHub
 Comandos de git (add | commit | pull | status | push).
 Manejo de repositorios de GitHub (clone | fork | gh-pages).
Buenas prácticas de desarrollo
 Organizar y dividir el código en módulos (Modularización).
 Uso de identificadores descriptivos (Nomenclatura | Semántica).
 Uso de linter para seguir buenas prácticas (ESLINT).