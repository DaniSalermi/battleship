<a href="https://imgbb.com/"><img src="https://i.ibb.co/0X1NK2v/battlezombie-home-mockup.png" alt="battlezombie-home-mockup" border="0"></a>

# BATTLESHIP

Este proyecto forma parte de nuestro programa de formación profesional con Laboratoria.
Se trata de recrear el juego Battleship (Batalla naval) con la finalidad de poner a prueba nuestros conocimientos en base de datos y desarrollo web.
El proyecto se hizo con mentores de la empresa **Concrete**, los cuales nos ayudaron con procesos de desarrollo y toma de decisiones.

## ¿Qué es?

El juego es para dos personas. Consiste en que en un tablero cada jugador coloca un conjunto de barcos, ocultando su posición del contrincante. Luego, por turnos, van anunciando una posición del tablero y el enemigo informa si le han dado a uno de sus barcos o no. El juego termina cuando un jugador ha conseguido hundir todos los barcos del otro.

## Objetivo del proyecto

En este proyecto debemos crear una nueva versión, agregándole algún giro para actualizarlo y hacerlo más atractivo para las nuevas generaciones. También, no estuvimos atada a hacer este juego sobre barcos, se puede hacer con el tema que más nos guste, siempre y cuando el modo de juego sea parecido.

También el juego debe ser para dos jugadores, para lograrlo debimos pensar en cómo estructurar la información, estado de la aplicación y cómo guardarlos en alguna base de datos como **Firebase** o **MongoDB Stitch**.

# Estudio de usuarios

Para decidir el diseño del juego realizamos una encuesta con la que obtuvimos los siguientes resultados:
[Resultados en Excel para las encuestas realizadas](https://docs.google.com/spreadsheets/d/1KY9iYAr8QNgLxvZPv3h2Mk3GTh5oVtOAkYtt7900S1E/edit?usp=sharing)

### Pregunta 1: ¿Haz jugado Battleship (Batalla naval)?

<a href="https://ibb.co/4Yg6hXW"><img src="https://i.ibb.co/jWZcnQh/Pregunta-1.png" alt="Pregunta-1"></a>

### Pregunta 2: En que plataforma es más probable que juegues al Battleship?

<a href="https://ibb.co/FhLDP57"><img src="https://i.ibb.co/Prv6ScC/Pregunta-2.png" alt="Pregunta-2"></a>

### Pregunta 3: Que temática te gustaría que tenga el juego? Si es otro, especificar.

<a href="https://ibb.co/CVwQ66D"><img src="https://i.ibb.co/ygNqpp7/Pregunta-3.png" alt="Pregunta-3"></a>

### Pregunta 4: ¿Te gustaría que el juego tenga puntuación?

<a href="https://ibb.co/Kx5LjLP"><img src="https://i.ibb.co/ZzfY6Yj/Pregunta-4.png" alt="Pregunta-4"></a>

### Pregunta 5: ¿De que tamaño te gustaría que fuera el tablero? Si es otro, especificar.

<a href="https://ibb.co/m0bP1k1"><img src="https://i.ibb.co/kJ5Pkjk/Pregunta-5.png" alt="Pregunta-5"></a><br /><a target='_blank' href='https://es.imgbb.com/'>free image upload</a><br />

## Conclusiones

Con base en los resultados obtenidos decidimos desarrollar una PWA (Progressive web app) aplicando los conocimientos obtenidos previamente en el framework Angular, la cantidad de encuestados fue de 35, de los cuales 23 si conocían el juego previamente, y fueron los que nos ayudaron a tomar las siguientes decisiones:

1.  Realizar una PWA ya que es más probable que el juego se juege en dispositivos móviles y computadoras.
2.  En cuanto a la temática del juego, los usuario prefieren algo relacionado con zombies o piratas, decidimos hacerlo con el tema de zombies para darle otro aire al juego, y hacerlo llmativo.
3.  Por decisión unánime los usuarios prefieren tener una puntuación.
4.  El tamaño preferido de los usuarios es una grilla de 10x10.

# Benchmark

Posterior al estudio de usuarios, realizamos una investigación para conocer sobre plataformas web y aplicaciones móviles del juego Battleship.

## Plataformas web

- [Batalla Naval](http://es.battleship-game.org/): Este juego tiene una interfaz que a pesar de ser simple, se entiende a la perfección los pasos a realizar para poder jugar a la batalla naval.

<a href="https://ibb.co/LkKPd3L"><img src="https://i.ibb.co/SsSxwzh/Batalla-naval-web.png" alt="Batalla-naval-web"></a>
<a href="https://ibb.co/QYksnv0"><img src="https://i.ibb.co/tYzycpR/Batalla-naval-web2.png" alt="Batalla-naval-web2"></a>

- [Battleship](https://www.fandejuegos.com/juego/battleship): Esta plataforma fue poco amigable, tiene sonidos que aturden y la interfaz es incómoda, el juego se hace muy largo debido a las animaciones que son muchas y ruidosas.

<a href="https://ibb.co/PQS2Mgh"><img src="https://i.ibb.co/NS40rKj/Batalla-naval-web2-1.png" alt="Batalla-naval-web2-1"></a>
<a href="https://ibb.co/Mpytw4y"><img src="https://i.ibb.co/S0DMY8D/Batalla-naval-web2-2.png" alt="Batalla-naval-web2-2"></a>
<a href="https://ibb.co/1ZN69yj"><img src="https://i.ibb.co/fMWvC6L/Batalla-naval-web2-3.png" alt="Batalla-naval-web2-3"></a><br /><a target='_blank' href='https://es.imgbb.com/'>subir fotos internet</a><br />

## Aplicaciones móviles

- Fleet Battle: la primera aplicación que conseguimos y nos llamó la atención fue Fleet Battle. Es bastante intuitiva, tiene muchas opciones para el usuario, lleva una puntuación para los jugadores, y permite jugar contra la computadora, así como contra un amigo u online.

<a href="https://ibb.co/z85K5S3"><img src="https://i.ibb.co/vsB2BJN/IMG-1501.png" alt="IMG-1501"  height=500px></a> <a href="https://ibb.co/bPKcLkb"><img src="https://i.ibb.co/vHj0mSX/IMG-1500.png" alt="IMG-1500"  height=500px></a> <a href="https://ibb.co/f4GYWM5"><img src="https://i.ibb.co/BqKVJLx/IMG-1502.png" alt="IMG-1502"  height=500px></a> <a href="https://ibb.co/dmzTx80"><img src="https://i.ibb.co/3RL3Qgy/IMG-1509.png" alt="IMG-1509"  height=500px></a>

- Sea Battle 2: esta aplicación se caracteriza por ser bastante amigable, tiene una interfaz cómoda y fácil de ver. Nos gustó porque es muy simple de usar.

<a href="https://ibb.co/16Y85yt"><img src="https://i.ibb.co/vYCZGy6/IMG-1511.png" alt="IMG-1511"  height=500px></a> <a href="https://ibb.co/spTpXhr"><img src="https://i.ibb.co/zW3Wt1w/IMG-1510.png" alt="IMG-1510"  height=500px></a><br/>

- Acorazado Ultra: de todas las aplicaciones que probamos esta fue la que menos nos gustó, las animaciones hacen que sea poco entretenido de jugar, ya que tarda mucho. También la vista es poco amigable y fue incómodo de jugar.

<a target='_blank' href='https://es.imgbb.com/'>subir fotos internet</a><br /><a href="https://ibb.co/Sn9sGjK"><img src="https://i.ibb.co/swMmzfF/IMG-1513.png" alt="IMG-1513"  width=500px></a>
<a href="https://ibb.co/92BNBMP"><img src="https://i.ibb.co/S0HPHLS/IMG-1512.png" alt="IMG-1512"  width=500px></a>

# Flujo de la aplicación

Una vez que establecimos los requerimientos del los usuario y realizamos el benchamark de las aplicaciones tanto para web como para móvil, diseñamos el flujo del usuario dentro de la aplicación, para facilitar la toma de decisiones dentro del código.

<a href="https://ibb.co/ZXhw7gv"><img src="https://i.ibb.co/QQ6qtHh/Flujo-de-la-aplicaci-n.png" alt="Flujo-de-la-aplicaci-n" ></a><br /><a target='_blank' href='https://es.imgbb.com/'></a><br />
