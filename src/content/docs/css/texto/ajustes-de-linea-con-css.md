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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7W2L6CZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWtWnPNolhMywXOKV0y4dNgkln7U9yOjjPjTSr1HUfjwIgZpoABM9Z0AZp0EQ%2FO3xrxnF9pBt5n8K0mPrakAPoOjUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMHTD%2FjaIZWqM1eC9ircAxs0v85hPgS96M8XVCysX1IEwb5ZzJPukz9XL3hiI11kCVs6bpzT7OexU8%2B%2FbvJplSf6ndSLrNd5COVJc9O2hEhjI%2FcVmmZ%2BFXGOQsj7bP00LwZenKKfvlC%2B%2FsU%2FH%2B3XbWpoh%2BLrIkMp22tUBjwBVzxQq94v%2BFrzaOTWyaQl2u7QbTGquisA2FIfjtuxvon6L3o26SfduZjO31BAcTL%2F%2BDKbSnv19YrPc7woxb87g3eiTne%2BEf24P4s3xgry4pky2SLbHUezV4tIUW0w9elraKw6IwSK4kYzsgiLqSxHfNWJ5V3JkcXembnc6mY4dpGIl1F1DVPeavTkPuie91lEerfWO8YIPYkKpDptXc60MTWhk3kS54wwpIaQ1XbWr0Yao0Ox0VJ96Tf5sF2evCt8rvxe8pzqrIHIN1U2cJokbNt9n0ZjbXEoBx2boqSavnxreFh83Vkd606%2FxpsbYiUg0ANZ3xJtmSI6uzzIS4xDvQbvCTZ6pz7oJgxqDA605PxPobigzTJ%2Fcxc784IjXjKh2mBd%2BklbKs6OAbykpV13JbAnWGhM4XZhvgYgjku6FRppuVrUmoKu5IDTLR5gIkN2VAa4a6QFSwZwGnJGpp5yfsxUpd3di0Rk%2FdYFYxUhMJvpiMoGOqUB94PSVOn7ltkZ5Rq3GiG3fWKw3om2iAUvjKDb3A47sh%2BX%2BybuDB7cZqNqMeWacQL5e90p5xNNvZyjuZ%2Boo7bK%2Bv2OKXFh64rwys8WMjL1Hp3tB3JeQm9k6VX7dZFrV5EGR6SWJqtTr8MvYLtYImPr4u1mFGef0sigH6lCp12ZhfwFTWwLTHJt0mxhjqkN7kNLPEBR%2FjbGJMohV5fqXb6cXimUpV5E&X-Amz-Signature=f8c7a26686eeebbcf7dfd06738f6956f68615008166bdebfc8bfa698115a6d77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7W2L6CZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWtWnPNolhMywXOKV0y4dNgkln7U9yOjjPjTSr1HUfjwIgZpoABM9Z0AZp0EQ%2FO3xrxnF9pBt5n8K0mPrakAPoOjUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDMHTD%2FjaIZWqM1eC9ircAxs0v85hPgS96M8XVCysX1IEwb5ZzJPukz9XL3hiI11kCVs6bpzT7OexU8%2B%2FbvJplSf6ndSLrNd5COVJc9O2hEhjI%2FcVmmZ%2BFXGOQsj7bP00LwZenKKfvlC%2B%2FsU%2FH%2B3XbWpoh%2BLrIkMp22tUBjwBVzxQq94v%2BFrzaOTWyaQl2u7QbTGquisA2FIfjtuxvon6L3o26SfduZjO31BAcTL%2F%2BDKbSnv19YrPc7woxb87g3eiTne%2BEf24P4s3xgry4pky2SLbHUezV4tIUW0w9elraKw6IwSK4kYzsgiLqSxHfNWJ5V3JkcXembnc6mY4dpGIl1F1DVPeavTkPuie91lEerfWO8YIPYkKpDptXc60MTWhk3kS54wwpIaQ1XbWr0Yao0Ox0VJ96Tf5sF2evCt8rvxe8pzqrIHIN1U2cJokbNt9n0ZjbXEoBx2boqSavnxreFh83Vkd606%2FxpsbYiUg0ANZ3xJtmSI6uzzIS4xDvQbvCTZ6pz7oJgxqDA605PxPobigzTJ%2Fcxc784IjXjKh2mBd%2BklbKs6OAbykpV13JbAnWGhM4XZhvgYgjku6FRppuVrUmoKu5IDTLR5gIkN2VAa4a6QFSwZwGnJGpp5yfsxUpd3di0Rk%2FdYFYxUhMJvpiMoGOqUB94PSVOn7ltkZ5Rq3GiG3fWKw3om2iAUvjKDb3A47sh%2BX%2BybuDB7cZqNqMeWacQL5e90p5xNNvZyjuZ%2Boo7bK%2Bv2OKXFh64rwys8WMjL1Hp3tB3JeQm9k6VX7dZFrV5EGR6SWJqtTr8MvYLtYImPr4u1mFGef0sigH6lCp12ZhfwFTWwLTHJt0mxhjqkN7kNLPEBR%2FjbGJMohV5fqXb6cXimUpV5E&X-Amz-Signature=3617a943e1e58b4057e80b59b4e6d35383e0db32594b823f7996388b8d4df6c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

