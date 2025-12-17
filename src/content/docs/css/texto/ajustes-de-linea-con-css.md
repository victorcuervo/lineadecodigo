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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCTNXHU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCK6lVyqmlB3WZGm12IPpaDW%2Fzl7DlDkkcRdtBhZtuUQIgVcDzEir9oYCEt61UTc6riG7Us6T%2F%2B5o%2BWFXAKvMWr0kq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDN9TqguKT2iDxT%2B7KSrcA4CLVLTXJ8H%2BVkTmUnDV9G65lEopOM%2BxSsSmlBjoT5TzrLFeRziILKk89Xo1jC4HuVjzHokXG5f0TawxitSv7Mya9yjtON0Y%2FYI1vEpvbXi1Niv65zvQdZpgYqwu2SI1PGKCy%2F7WM673gEDrcdBqLbqJ9djIOoT9YU6z8unYl29RlQrKzSLu737uIw5T7Kj4axwtSO%2F1QoSJpgAEiX37HpdnTcgrkTSg%2FnyQSzzfJyDI%2FHRB2Ye4thSv1eu4l0YeFl3jMfyQOVNptS%2B4VAsFNbgPGx1oE1Flzk7X3yqMSN32vVIzF8QTFcUXFOOUkJcRu1kIu670VR3S6SgHZowVmPQkGpJpe063yUWVsS15hqL8yQBji%2BuAhmYSTnkcposB4ep3st65q9KkFOf%2Fpa1hgmMwZfy4MkS1PrIabZLlikmnV06MKvXb%2B2VJKrdRKAd0yU4p2GmzMzHAWTSl%2FXqgLknm55hJZpTLdSmeBM9nKnarj9v9sezEeId2mrEObmLe22IClwISoTS9wQ%2FHzZ%2BTNziMo%2Bl%2BiWaVzQTN0V%2F9GoUSHao9eSvgZQrck3HagkrlJ6gqD1nDmhikCXEvu3PGZWLV75njLVrZHuV7Vq2lMgmWLtxENQyb%2Bkx%2FNjB6MN3OiMoGOqUBFcNpbO0x0f9DSkn3mkF17BlFrNvdSOf%2BDQXHRG7as4DThtYf06VGepyDmnp1udq08142xAC%2BUq%2BPCbNUw6j2m4EIOkYvLs5s6KIkg8Pfe9swl768C5STTVIMfywaRXowBwYUNEC%2FS%2B6i1D2M5F4zg%2BP3gSDoPWkLmK0ahgX6uy%2BLSJ11kcbqwPbHbby%2FpUFH%2FcKSfZKXpK%2F5t0fQ%2Bk4A779KdDmH&X-Amz-Signature=306349f12f9def75aed35340359e79fbd525c843e4afca541a9c71a984f5688a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QCTNXHU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCK6lVyqmlB3WZGm12IPpaDW%2Fzl7DlDkkcRdtBhZtuUQIgVcDzEir9oYCEt61UTc6riG7Us6T%2F%2B5o%2BWFXAKvMWr0kq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDN9TqguKT2iDxT%2B7KSrcA4CLVLTXJ8H%2BVkTmUnDV9G65lEopOM%2BxSsSmlBjoT5TzrLFeRziILKk89Xo1jC4HuVjzHokXG5f0TawxitSv7Mya9yjtON0Y%2FYI1vEpvbXi1Niv65zvQdZpgYqwu2SI1PGKCy%2F7WM673gEDrcdBqLbqJ9djIOoT9YU6z8unYl29RlQrKzSLu737uIw5T7Kj4axwtSO%2F1QoSJpgAEiX37HpdnTcgrkTSg%2FnyQSzzfJyDI%2FHRB2Ye4thSv1eu4l0YeFl3jMfyQOVNptS%2B4VAsFNbgPGx1oE1Flzk7X3yqMSN32vVIzF8QTFcUXFOOUkJcRu1kIu670VR3S6SgHZowVmPQkGpJpe063yUWVsS15hqL8yQBji%2BuAhmYSTnkcposB4ep3st65q9KkFOf%2Fpa1hgmMwZfy4MkS1PrIabZLlikmnV06MKvXb%2B2VJKrdRKAd0yU4p2GmzMzHAWTSl%2FXqgLknm55hJZpTLdSmeBM9nKnarj9v9sezEeId2mrEObmLe22IClwISoTS9wQ%2FHzZ%2BTNziMo%2Bl%2BiWaVzQTN0V%2F9GoUSHao9eSvgZQrck3HagkrlJ6gqD1nDmhikCXEvu3PGZWLV75njLVrZHuV7Vq2lMgmWLtxENQyb%2Bkx%2FNjB6MN3OiMoGOqUBFcNpbO0x0f9DSkn3mkF17BlFrNvdSOf%2BDQXHRG7as4DThtYf06VGepyDmnp1udq08142xAC%2BUq%2BPCbNUw6j2m4EIOkYvLs5s6KIkg8Pfe9swl768C5STTVIMfywaRXowBwYUNEC%2FS%2B6i1D2M5F4zg%2BP3gSDoPWkLmK0ahgX6uy%2BLSJ11kcbqwPbHbby%2FpUFH%2FcKSfZKXpK%2F5t0fQ%2Bk4A779KdDmH&X-Amz-Signature=bf20240b0d848d10c1262852020d8c771a20cf94ae55812d43dabea426863ebf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

