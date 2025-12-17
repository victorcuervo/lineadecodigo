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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTPLT2O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoky%2B%2BmdzEjmdGfwP7%2FAGQPXiQObwTGTQzvwCAiYv1bAiAg8V9qkYzY2QpVLLd48ym2G50HQSLHN0cnbNhy%2F2F8Fyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMV5fKPhiEulKEAlNSKtwDvlD26%2FYznenlMcyIR4lJ88qAPszxQahdDviL%2BDh9HE16xK35uhCyCeBTFJl2AgSijEpVaod5lASCElf4V%2B5q4ExjJw88YIFrfsNi8df0j7Bf0Q2AvTNBiYBn7Y0cXY21pxrQactWZhlcY2LO27vwgT0HLkcNbkiZrUFqkNbRKaUCmgfKMlCUlaP3m%2BSxrisD6pFXcDpAxFZUUJVpX3WNljRy58vM8UnK680%2BP5xznKR49yJVoszrEU99kG%2B1F6p1dRK09t4yKw%2BoT11R5rlcgMTYU6bFA9SWLVLT0WvTDGvi7GprQVCDvrdkxZ%2F5MYEnuBssNkQ0YjOJ1nucZOH03jlgW55kmguPotms%2Bxp7EOeHLlT4k79o%2FVJ3baSoJd0uNi1hH%2B1jSMKBrAaou6IrA2ossIvVQKpD6y%2BFn98IyZrj%2F9%2B5OV0oB9BidcXlWBR8nyenmmh%2FyYX%2FjKZMZVXvEeH%2FUwM5jSXYa4MSDgtudrCNrwSVBMQOSxYh6AAYbqpKZXPDHtu3ri%2B%2FWUjtj0XNe%2BiJsuXR2VcXLXrLNiZm1qOtVoMtRYIWsV6Bd7SJk2DJwt9nQwSuof6P%2BK97J4n2wA1q7bv2r%2Fn1FLXyzeWW%2BF6iK%2BaD0vS%2B7i7fouIw67KIygY6pgETnmSxb%2BvvyxWsslJ%2FV09CM28dVdGLgzOfsM3bTs%2BZvUS0ubozT87TTq%2BtHkjbk8qd1x%2Fr82UQb7Srv96ZQWyxWDwGMoGI6jKIxOB%2BewvOnwF7P7p%2FbbXHTvV%2BKYIJ1GK8m6Gm2%2BG7k36aCZEiHBAAaFLw6J%2BdQEphKwWixlzxbO5zmKzNcGcXkuu3LhXqJtvDI%2BUkxYugMOz5ZP4PoRLXAL02bMss&X-Amz-Signature=6d524946315d358c214ee68b224930ccd14064b87f96e33408da899659fd2b25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSTPLT2O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoky%2B%2BmdzEjmdGfwP7%2FAGQPXiQObwTGTQzvwCAiYv1bAiAg8V9qkYzY2QpVLLd48ym2G50HQSLHN0cnbNhy%2F2F8Fyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMV5fKPhiEulKEAlNSKtwDvlD26%2FYznenlMcyIR4lJ88qAPszxQahdDviL%2BDh9HE16xK35uhCyCeBTFJl2AgSijEpVaod5lASCElf4V%2B5q4ExjJw88YIFrfsNi8df0j7Bf0Q2AvTNBiYBn7Y0cXY21pxrQactWZhlcY2LO27vwgT0HLkcNbkiZrUFqkNbRKaUCmgfKMlCUlaP3m%2BSxrisD6pFXcDpAxFZUUJVpX3WNljRy58vM8UnK680%2BP5xznKR49yJVoszrEU99kG%2B1F6p1dRK09t4yKw%2BoT11R5rlcgMTYU6bFA9SWLVLT0WvTDGvi7GprQVCDvrdkxZ%2F5MYEnuBssNkQ0YjOJ1nucZOH03jlgW55kmguPotms%2Bxp7EOeHLlT4k79o%2FVJ3baSoJd0uNi1hH%2B1jSMKBrAaou6IrA2ossIvVQKpD6y%2BFn98IyZrj%2F9%2B5OV0oB9BidcXlWBR8nyenmmh%2FyYX%2FjKZMZVXvEeH%2FUwM5jSXYa4MSDgtudrCNrwSVBMQOSxYh6AAYbqpKZXPDHtu3ri%2B%2FWUjtj0XNe%2BiJsuXR2VcXLXrLNiZm1qOtVoMtRYIWsV6Bd7SJk2DJwt9nQwSuof6P%2BK97J4n2wA1q7bv2r%2Fn1FLXyzeWW%2BF6iK%2BaD0vS%2B7i7fouIw67KIygY6pgETnmSxb%2BvvyxWsslJ%2FV09CM28dVdGLgzOfsM3bTs%2BZvUS0ubozT87TTq%2BtHkjbk8qd1x%2Fr82UQb7Srv96ZQWyxWDwGMoGI6jKIxOB%2BewvOnwF7P7p%2FbbXHTvV%2BKYIJ1GK8m6Gm2%2BG7k36aCZEiHBAAaFLw6J%2BdQEphKwWixlzxbO5zmKzNcGcXkuu3LhXqJtvDI%2BUkxYugMOz5ZP4PoRLXAL02bMss&X-Amz-Signature=2d804e77678b348bff2b8b9cb7f93857ef9abacbe3dd8024bf82807a1f306d5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

