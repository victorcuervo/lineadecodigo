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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNA27RZI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw0OCvR4aEnet11mYHg3ILgiRe%2Bzz%2B51JoqhHefsJM4wIgfeMrr9EjIp3GRCydLCy9l3Vmes62B5Nh42koGoN6poMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ5FoqvPCp5O%2FoMqyrcAxkMewD0sPhPtl2%2B%2BnFS2fGYkTuB6hd0t%2BDZAYG1Dnr3Y22q4H38zdKo31AcmEb47j5klOStMIw4cVM7%2B%2BIPoVt7cma55EX8ExzzVa6GNQuIaEOX3ItKVL%2BziDPtldPJmRRZXmX%2BMd%2FSZV73ci73oLqBCfCxTpMtf3OcjSm3X9o4GOaupWU2UXtfsOgkllCIcDQMdb80XsTbU98vujACiZAhX%2BoKp3Mf6VNyr7o%2Br4vgQxrGArKpY6BIsabAToVH2812SnXkXyATsqCRpdrvZQsb%2FATC8zBesY1CLpsuUZO6GqhVIvNhIW0mT%2F3qeeHD%2FH7aKFA1rMbvzRvVtI4UVXpEyW5G1pvsTeFg56Y8F1Dk%2Bqp%2FhldsT8a2B%2BSnTShLu43%2FhtUkho8BDBtiR%2B9HNzfzqpUpd2qbpts%2FMb4%2FSy3iydapfEkziveSqE2fENwxp9r0yPH%2F3nWeKV0h7v85kYfOSbxV0hfHBrUqAb2pZnBIPj%2Bs6zh2IYJZbAHvQNX75a2E%2Fdd9y82c%2BJKj4hKXD4yfOdWldUwZhYH5DlPLFanlxzAvo5VRfYU4UgETrOgusCXba7VlQxD3qva%2F%2B2zeKBu1w61X6CAUz37fekJpbGjhfAYeSM7t4CBcyJtIMPGei8oGOqUByhGg1eVJI2FEgKqbMy5Xyzs0qdF4NUo9KHG%2FBYECkszr2MH35Av7XBvim92KnS0lx6wfCMwTyEbxhwx2RVBYTCFotG5K0SCiP7D5lp3%2FOsIp4iIYIE1K6A3zGJ0lJwN2dzhR4qGESd27GS5ebmod%2BK16QCNpY%2FW3ur%2FqkhVms8pFPGz0KPgFLUjFzwI3e0vBw0eFsm9YTsaLuDF0MkdtMteVytN9&X-Amz-Signature=18e32f427044a24fbee467f9d34b34750308024fe0f0111e5cf57619ad810af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNA27RZI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw0OCvR4aEnet11mYHg3ILgiRe%2Bzz%2B51JoqhHefsJM4wIgfeMrr9EjIp3GRCydLCy9l3Vmes62B5Nh42koGoN6poMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZ5FoqvPCp5O%2FoMqyrcAxkMewD0sPhPtl2%2B%2BnFS2fGYkTuB6hd0t%2BDZAYG1Dnr3Y22q4H38zdKo31AcmEb47j5klOStMIw4cVM7%2B%2BIPoVt7cma55EX8ExzzVa6GNQuIaEOX3ItKVL%2BziDPtldPJmRRZXmX%2BMd%2FSZV73ci73oLqBCfCxTpMtf3OcjSm3X9o4GOaupWU2UXtfsOgkllCIcDQMdb80XsTbU98vujACiZAhX%2BoKp3Mf6VNyr7o%2Br4vgQxrGArKpY6BIsabAToVH2812SnXkXyATsqCRpdrvZQsb%2FATC8zBesY1CLpsuUZO6GqhVIvNhIW0mT%2F3qeeHD%2FH7aKFA1rMbvzRvVtI4UVXpEyW5G1pvsTeFg56Y8F1Dk%2Bqp%2FhldsT8a2B%2BSnTShLu43%2FhtUkho8BDBtiR%2B9HNzfzqpUpd2qbpts%2FMb4%2FSy3iydapfEkziveSqE2fENwxp9r0yPH%2F3nWeKV0h7v85kYfOSbxV0hfHBrUqAb2pZnBIPj%2Bs6zh2IYJZbAHvQNX75a2E%2Fdd9y82c%2BJKj4hKXD4yfOdWldUwZhYH5DlPLFanlxzAvo5VRfYU4UgETrOgusCXba7VlQxD3qva%2F%2B2zeKBu1w61X6CAUz37fekJpbGjhfAYeSM7t4CBcyJtIMPGei8oGOqUByhGg1eVJI2FEgKqbMy5Xyzs0qdF4NUo9KHG%2FBYECkszr2MH35Av7XBvim92KnS0lx6wfCMwTyEbxhwx2RVBYTCFotG5K0SCiP7D5lp3%2FOsIp4iIYIE1K6A3zGJ0lJwN2dzhR4qGESd27GS5ebmod%2BK16QCNpY%2FW3ur%2FqkhVms8pFPGz0KPgFLUjFzwI3e0vBw0eFsm9YTsaLuDF0MkdtMteVytN9&X-Amz-Signature=cd96aa0e5746a1b3f12bc1db837c522fa936b1b70bed3b65b831afa28e32a22e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

