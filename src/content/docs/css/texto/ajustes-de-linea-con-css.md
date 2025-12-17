---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHLMPJN6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzP%2F0Lc%2Bay7WNfOdRYrFiPhiLNg8ZJ0rJkP1PzS5GW5AiEAkdzu2CXGvl4mfT%2FZ%2FX63omAc0sxBSY1QZ8G5VbKGlZcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBXjxxKtXmfvHS4NYircA3zH1SzgXLlt%2B%2BEX60F1xz01y091UIuX2Wwtn6XNHxa5kCYdeDoz5R4YpJIeIbeN6%2BfKAG0HXBjklXtz1G9aAeyJDkA5fL73n0l33kd6fLJ2HxoXFVgi%2FDAZGGQGkM9cE1iYtaLQt42jEkViNqhNclqIXRQWukxS3vmu159pgY7EbBpBARMltf0D29gMtr%2FnACsTZ9D9ZqOhsJxqrIa1shmaeNRzjlJYpnGa4OdHGjgZH%2BiBb%2Fn5rxh0xmRTzmot3Pmva1CW0mjl7UandwjNHnasugOk8WdxCGObYnGJauKqMwY%2FV%2Bklo2l8w2VH9H6Q8nzNjYe7jAvppuNlfXD6yeOrjcfz4kZRrZH1pJdV1jmym4XNr6Ko64V9yKtsMFLKSjoLQGCWubneA4uTZwwXGouN5C3%2B2wlpD46GQRXD3PM7kd68hfiD%2FZHulIBRwb9kyC9mNGrVn229Ncsymw7Pq%2BlK7NZ%2BYlj3hBIW6Fnpj11Unr%2B4bMozv8aKTvo2ar4i4b4j1nOaJ%2BLs%2FKLYPtBH9%2FlKR7IfWaXxzkFPxzN9tFyWwfn6Lgn3K79ySLg3jh0clLGhdpXTPLfmh1BBsJK1kCrf9ilI7bk3NJMz2OuEkmPnEGEqzGB3c0L1b29uMMGdicoGOqUBQl4l0%2F1d6Ty%2BU7nXHbgUTeIrOTaXb%2Bus1Yje69ziLltG14LSjZbTUXvbW7T%2F2YZiNs2TYv7uyqTLEk1Nf6QkDS2nEACCtV%2BkzNoHmNnAMORZ8CuJ41y5ji6JYzM5zTN7QTH6n7PaQQ0JWipSQAAf6uptxUgDaUgmfKLuGK4xVqelGZysdaNqPLYLKD7%2BrrUBGgkogzMJnZwmpGdxwET3262Xc2Tw&X-Amz-Signature=68a724ae47b99204aafe5269adbe5228b97135c4015a04f4d9c63657bd770aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHLMPJN6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T071636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzP%2F0Lc%2Bay7WNfOdRYrFiPhiLNg8ZJ0rJkP1PzS5GW5AiEAkdzu2CXGvl4mfT%2FZ%2FX63omAc0sxBSY1QZ8G5VbKGlZcq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBXjxxKtXmfvHS4NYircA3zH1SzgXLlt%2B%2BEX60F1xz01y091UIuX2Wwtn6XNHxa5kCYdeDoz5R4YpJIeIbeN6%2BfKAG0HXBjklXtz1G9aAeyJDkA5fL73n0l33kd6fLJ2HxoXFVgi%2FDAZGGQGkM9cE1iYtaLQt42jEkViNqhNclqIXRQWukxS3vmu159pgY7EbBpBARMltf0D29gMtr%2FnACsTZ9D9ZqOhsJxqrIa1shmaeNRzjlJYpnGa4OdHGjgZH%2BiBb%2Fn5rxh0xmRTzmot3Pmva1CW0mjl7UandwjNHnasugOk8WdxCGObYnGJauKqMwY%2FV%2Bklo2l8w2VH9H6Q8nzNjYe7jAvppuNlfXD6yeOrjcfz4kZRrZH1pJdV1jmym4XNr6Ko64V9yKtsMFLKSjoLQGCWubneA4uTZwwXGouN5C3%2B2wlpD46GQRXD3PM7kd68hfiD%2FZHulIBRwb9kyC9mNGrVn229Ncsymw7Pq%2BlK7NZ%2BYlj3hBIW6Fnpj11Unr%2B4bMozv8aKTvo2ar4i4b4j1nOaJ%2BLs%2FKLYPtBH9%2FlKR7IfWaXxzkFPxzN9tFyWwfn6Lgn3K79ySLg3jh0clLGhdpXTPLfmh1BBsJK1kCrf9ilI7bk3NJMz2OuEkmPnEGEqzGB3c0L1b29uMMGdicoGOqUBQl4l0%2F1d6Ty%2BU7nXHbgUTeIrOTaXb%2Bus1Yje69ziLltG14LSjZbTUXvbW7T%2F2YZiNs2TYv7uyqTLEk1Nf6QkDS2nEACCtV%2BkzNoHmNnAMORZ8CuJ41y5ji6JYzM5zTN7QTH6n7PaQQ0JWipSQAAf6uptxUgDaUgmfKLuGK4xVqelGZysdaNqPLYLKD7%2BrrUBGgkogzMJnZwmpGdxwET3262Xc2Tw&X-Amz-Signature=bdf517e01c9aa186af81312f64cca21b127878595e55fa3410181f5c02be859d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

