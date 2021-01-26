1. RESUMEN DEL PROYECTO
CRIPTO es una plataforma virtual que permite a nuestros usuarios cifrar y descifrar textos secretos mediante el sistema de encriptado de desplazamiento Caesar, bastante facil de usar.

2. DISEÑO FINAL DEL PROYECTO

![Sin título](https://user-images.githubusercontent.com/77282012/105870335-2abb1880-5fc6-11eb-8e73-d9642b4cab61.png)

3. LAS NECESIDADES DEL USUARIO Y EL OBJETIVO DEL PRODUCTO
Los usuarios y los objetivos en relación con el producto
Antes de consolidar la idea del proyecto se solicitó la opinión de tres personas, dos de género femenino y uno masculíno de entre 18 a 19 años de edad. Les dimos la siguiente incognita a responder: Si tuviera una herramienta para el cifrado de textos, ¿Qué uso le daría?
Las respuestas proporcionadas fueron:

-Guardar textos privados
-Contraseñas
-Escribir por mensajes secretos

Fue gracias a estas opiniones que decidí que mi proyecto consistiría en la elaboración de una aplicación que permita el cifrado y descifrado de textos que puedan incluir anotaciones privadas o secretas para el archivo de un block privado o cualquier uso similar.

Luego de realizar el segundo prototipo se solicitó feedback a cuatro personas, dos varones y dos mujeres entre 19 y 21 años de edad, en relación a la necesidad de confidencialidad de la información y su relación con la tecnología. Los comentarios recibidos fueron los siguientes:

"Es importante cambiar la contraseña regularmente porque abundan los hackers, solo que a veces olvido mi contraseña y sería genial una aplicación que me ayude a recordarla fácilmente".
"Usualmente guardo mis anotaciones en el correo electrónico porque tengo miendo a que alguien vaya a leer mis notas privadas".
"Ahora no tengo información muy confidencial, pero si lo llegara a tener sin duda lo encriptaría".
"Me gustaría mantener en privado conversaciones con otros, existen muchos espias por internet"
Gracias a las opiniones recibidas, se decidí crear una aplicación destinada a usuarios entre 18 y 28 años de edad que necesiten encontrar un espacio seguro y privado que proporcione cualidades confidenciales y con la información digital dentro de las nuevas tecnologías de almacenamiento de archivos personales.

Así se creó Cripto, una aplicación con la que el usuario podrá cifrar y descifrar rápidamente textos confidenciales como por ejemplo:

Blocks privados
Mensajes o cartas electrónicas
Así también, otros servicios que permite Cripto es la creación de:

Claves secretas
Códigos de seguridad

4. Imagen del primer prototipo en papel ( Junto al primer diseño de Nombre y logo)

![IMG_20210125_110617](https://user-images.githubusercontent.com/77282012/105852283-43b9ce80-5fb2-11eb-90ef-741bbd0402d8.jpg)

5. Imagen del primer prototipo en Figma (Junto al primer diseño de Nombre y logo)

![Captura](https://user-images.githubusercontent.com/77282012/105870276-19720c00-5fc6-11eb-9172-9af046ce35a4.JPG)


6. Resumen del primer feedback
Luego de mostrar el primer prototipo de Figma a mis compañeras e indicar la utilidad de la aplicación que pensaba crear para el proyecto, recibí las siguientes sugerencias:

"El casillero de desplazamiento no debería ser tan grande".
"El texto de ayuda está muy largo"
"Es necesario que los botones resalten más".

7. Imagen del prototipo final
![Sin título](https://user-images.githubusercontent.com/77282012/105871217-14fa2300-5fc7-11eb-8bf6-66ee09b49ba7.png)

7. Hacker edition y aclaraciones del método de cifrado
Para el desarrollo del proyecto se tomó como base principal el uso del cifrado César. Conocida también como cifrado por desplazamiento y sustitución debido a que una letra de un texto original es reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.

Así también, para los fines del proyecto se consideró conveniente el adicionar el cifrado y descifrado de algunos caracteres no alfabéticos y para ello se tomó como referencia sus ubicaciones en código ASCII.

Finalmente, el algoritmo permite cifrar y descifrar caracteres alfabéticos en mayúsculas y minúsculas; números;algunos caracteres especiales no alfabéticos y el caracter número 32 en el código ASCII que representa el espacio. En caso se intente cifrar algún caracter no incluido, el resultado arrojará el mismo valor.

Por ejemplo, si usamos un desplazamiento (offset) de 3 posiciones:

La letra A se cifra como D.
La palabra amor se cifra como dpru.
La palabra valentía se cifra como ¡Ydohqwíd$.
Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

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