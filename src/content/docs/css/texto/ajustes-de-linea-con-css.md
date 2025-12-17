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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGVYON2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEEmowpHuZOW4s1d0TOTlOU16bb6WQhbf7pp5vByaFNAiBfyjzrWkkIVXIhOSMutSD%2BBVXbptvyjyiqKq3QTDnVVyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMj4yecpxuW2HTjlprKtwD2rhgJ2cH3Y2NBb%2FkWOSoaHZ1fufwFlGqZgy9Tv0ifw%2BQ3s%2FcReXEAkeLDnl5yCeO8gMgRQ90fM8mhLNtLIXXekZWzCemqW7%2F%2BHdRanCyfPMFq4Uq9Oesg3dHzGcBEjoqoV3vs5sbiC4val1A8a51rzh%2FjKYYjsp37I%2F0kxbhZUM00UdrVB90ayQ6IOQYODjDfM8ztlyIksW6qgamcoFkMcvkjlhnTH%2Bvzn%2FKc43GqNNrdr%2F4jF7BGuJJgqUQGULd1yoXC6JmYj0Q2d639qg8DvyhE02yXWpOVTtsy3hcF0l6daTXCVgDhYiPE05z%2FlrQXNm5FueMJysUHZSUP73496z4X8e%2BB2l91j%2B9piPQYnLNpmBqTqKA2IhFAq2n%2F4eCdQ%2FASjYrGxdEK%2Flj2%2FQs7umpujC8jV5kkECPGsqlGqQqmNWy98pOTXG8ag%2BDMHVARPRK9VaksonPlhvXwHjpSTByjwMbaeo44uAD6iJGA72TccN%2Bq%2FePMZrF0eNr9msYgod638bdJFm6zXrMUK%2B3hHf9btKDvoQ7UX8%2BIEOcQ6%2F4DSh%2Fd2u%2FSURojEwXNaRgdvkJDCVN0XPGxYCDRS3McLp7FsDtccBvjqTHZgH2NEywtf3Ct39ilL%2BqA50wwMaKygY6pgE0kxTnH9lRNdqJdj7IFGI5l1%2B%2BHH9VA4wH0ORUmRwZwFIB9bWrtQC1F2Y%2Fy4l72oHLClS%2FuCoTRUTbHctQJRnDYKZj8dBLloAlHH7n3BVgBDn5yHnhT%2B%2BeZ9BdMQyvSh%2BfE9Y64QoOml2rwaomHzS5Mgj%2FcWhLFZRMBPrIHhsUElo2zN8gJXi33i1%2F%2BTz4lqLLXG0wWUfoc5TTnIFD7Zl0zMHb6Pfy&X-Amz-Signature=5d169f629ce01de3141ef87dd3238bdba7fb773fc09c540eb5a733bbc3a37b19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRGVYON2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEEmowpHuZOW4s1d0TOTlOU16bb6WQhbf7pp5vByaFNAiBfyjzrWkkIVXIhOSMutSD%2BBVXbptvyjyiqKq3QTDnVVyr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMj4yecpxuW2HTjlprKtwD2rhgJ2cH3Y2NBb%2FkWOSoaHZ1fufwFlGqZgy9Tv0ifw%2BQ3s%2FcReXEAkeLDnl5yCeO8gMgRQ90fM8mhLNtLIXXekZWzCemqW7%2F%2BHdRanCyfPMFq4Uq9Oesg3dHzGcBEjoqoV3vs5sbiC4val1A8a51rzh%2FjKYYjsp37I%2F0kxbhZUM00UdrVB90ayQ6IOQYODjDfM8ztlyIksW6qgamcoFkMcvkjlhnTH%2Bvzn%2FKc43GqNNrdr%2F4jF7BGuJJgqUQGULd1yoXC6JmYj0Q2d639qg8DvyhE02yXWpOVTtsy3hcF0l6daTXCVgDhYiPE05z%2FlrQXNm5FueMJysUHZSUP73496z4X8e%2BB2l91j%2B9piPQYnLNpmBqTqKA2IhFAq2n%2F4eCdQ%2FASjYrGxdEK%2Flj2%2FQs7umpujC8jV5kkECPGsqlGqQqmNWy98pOTXG8ag%2BDMHVARPRK9VaksonPlhvXwHjpSTByjwMbaeo44uAD6iJGA72TccN%2Bq%2FePMZrF0eNr9msYgod638bdJFm6zXrMUK%2B3hHf9btKDvoQ7UX8%2BIEOcQ6%2F4DSh%2Fd2u%2FSURojEwXNaRgdvkJDCVN0XPGxYCDRS3McLp7FsDtccBvjqTHZgH2NEywtf3Ct39ilL%2BqA50wwMaKygY6pgE0kxTnH9lRNdqJdj7IFGI5l1%2B%2BHH9VA4wH0ORUmRwZwFIB9bWrtQC1F2Y%2Fy4l72oHLClS%2FuCoTRUTbHctQJRnDYKZj8dBLloAlHH7n3BVgBDn5yHnhT%2B%2BeZ9BdMQyvSh%2BfE9Y64QoOml2rwaomHzS5Mgj%2FcWhLFZRMBPrIHhsUElo2zN8gJXi33i1%2F%2BTz4lqLLXG0wWUfoc5TTnIFD7Zl0zMHb6Pfy&X-Amz-Signature=80f026d99e06eea4b94c33c7d4e5e06f3ad57ac2ef972ef62ab01fae6c31ad8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

