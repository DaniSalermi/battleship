# BATTLESHIP

Este proyecto forma parte de nuestro programa de formación profesional con Laboratoria.
Se trata de recrear el juego Battleship (Batalla naval) con la finalidad de poner a prueba nuestros conocimientos en base de datos y desarrollo web.
El proyecto se hizo con mentores de la empresa **Concrete**, los cuales nos ayudaron con procesos de desarrollo y toma de decisiones.

## ¿Qué es?

El juego es para dos personas. Consiste en que en un tablero cada jugador coloca un conjunto de barcos, ocultando su posición del contrincante. Luego, por turnos, van anunciando una posición del tablero y el enemigo informa si le han dado a uno de sus barcos o no. El juego termina cuando un jugador ha conseguido hundir todos los barcos del otro.

## Objetivo del proyecto

En este proyecto debemos crear una nueva versión, agregándole algún giro para actualizarlo y hacerlo más atractivo para las nuevas generaciones. También, no estuvimos atada a hacer este juego sobre barcos, se puede hacer con el tema que más nos guste, siempre y cuando el modo de juego sea parecido.

También el juego debe ser para dos jugadores, para lograrlo debimos pensar en cómo estructurar la información, estado de la aplicación y cómo guardarlos en alguna base de datos como **Firebase** o **MongoDB Stitch**.

# Benchmark

Para decidir el diseño del juego realizamos una encuesta con la que obtuvimos los siguientes resultados:
[Resultados en Excel para las encuestas realizadas](https://docs.google.com/spreadsheets/d/1KY9iYAr8QNgLxvZPv3h2Mk3GTh5oVtOAkYtt7900S1E/edit?usp=sharing)

### Pregunta 1: ¿Haz jugado Battleship (Batalla naval)?

<a href="https://ibb.co/4Yg6hXW"><img src="https://i.ibb.co/jWZcnQh/Pregunta-1.png" alt="Pregunta-1" border="0"></a>

### Pregunta 2: En que plataforma es más probable que juegues al Battleship?

<a href="https://ibb.co/FhLDP57"><img src="https://i.ibb.co/Prv6ScC/Pregunta-2.png" alt="Pregunta-2" border="0"></a>

### Pregunta 3: Que temática te gustaría que tenga el juego? Si es otro, especificar.

<a href="https://ibb.co/CVwQ66D"><img src="https://i.ibb.co/ygNqpp7/Pregunta-3.png" alt="Pregunta-3" border="0"></a>

### Pregunta 4: ¿Te gustaría que el juego tenga puntuación?

<a href="https://ibb.co/Kx5LjLP"><img src="https://i.ibb.co/ZzfY6Yj/Pregunta-4.png" alt="Pregunta-4" border="0"></a>

### Pregunta 5: ¿De que tamaño te gustaría que fuera el tablero? Si es otro, especificar.

<a href="https://ibb.co/m0bP1k1"><img src="https://i.ibb.co/kJ5Pkjk/Pregunta-5.png" alt="Pregunta-5" border="0"></a><br /><a target='_blank' href='https://es.imgbb.com/'>free image upload</a><br />

## Conclusiones

Con base en los resultados obtenidos decidimos desarrollar una PWA (Progressive web app) aplicando los conocimientos obtenidos previamente en el framework Angular, la cantidad de encuestados fue de 35, de los cuales 23 si conocían el juego previamente, y fueron los que nos ayudaron a tomar las siguientes decisiones:

1.  Realizar una PWA ya que es más probable que el juego se juege en dispositivos móviles y computadoras.
2.  En cuanto a la temática del juego, los usuario prefieren algo relacionado con zombies o piratas, decidimos hacerlo con el tema de zombies para darle otro aire al juego, y hacerlo llmativo.
3.  Por decisión unánime los usuarios prefieren tener una puntuación.
4.  El tamaño preferido de los usuarios es una grilla de 10x10.
