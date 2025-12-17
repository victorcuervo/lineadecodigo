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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZF7Q6MF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvlx5M5mVwReoYpCUS4qpDu8XqLKaRaNnO%2Bb2DDVR0LgIhANQJScjjTPdQmUIEQEMuoRiMzZMGGy0R19T6n68heT6NKv8DCHkQABoMNjM3NDIzMTgzODA1IgwC%2Bv2vbL8l3QgnoYsq3AMthcf2hmmMJVypRq0%2BUjAiFUwYERFqc79sXABozeXA%2BK6iEcwPdej91N9Iv7SzxVRWlSgh%2FDKB09naJwpdZvdLXuCuUvWwTZJVI9wcpUTI1QpFcBK9lYQTAdtAgwN%2BDyqFwLfYDl0LtACdtZFKBO4pwCIO9pX0mEV0kXSt2Oy3BPd2fLAbCZZuuyQJA9ydmUCv%2FelmqVTRC0nu8VA7N2ky9n6624RcBD1RNAPAYPGcGtVMMCbIzxq5TWfq4ERXLGJRON9WWu1J2eQChLuQInORHi%2FdKMMAZT%2FdWynAkPlXW1Hxs%2FRgUpGBEzYWgla740bVTHSiRYrAulksPoe2O4T7nBj%2FXawIuCw928BeF4NF%2FQ8Jal%2FcIyGUkCQX1AOdsFKJOzq5EFNRKNnQgG0CFV8s%2BgKNSlJ%2FO567rj2dwXTA0hxbatRe1741q0191G6lXUqiPI2WmZZGfOQTeLtIJFO3EW6o7Z3Sy06U5sIeDWtfMAryrx%2FxdvW6BP9ZnJZVroNyNdzFN5YuDQq1bqCcXs0jH1sfXL%2F01m7AwANqaxwgr0NNgDSXogtL9F0C4D1b0rudaHk8FobRp400vC3feiyp6LyYK%2Bx%2Bd94DYRpr4VpZVojlOKCWn1hlJhlE%2BjCvuInKBjqkAWWbRy2ByvwM2br%2FlE9b3OIydDnio7FJ8tXvzj659kZXUUHaDyte%2F1lslYHl3%2FbEGLN4Wrk%2FpIXy1Cs4JKqvwo9b%2BTYH4ZM4oQAd1K2FzMlQTK33YPTYuyIPUZph6An1YbF3j5URgEBr9QHWg7t94mQddRYt1FZSiHvDPyTHf7IwqV3xUVLmpEmVaytvLrvcFg8iHtOVCK71w1O5fmoBVL1Si1wN&X-Amz-Signature=6a5855b8a01c85519dc6578551d8e706f68178fb99b19aca478b2c4ce19dcc81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZF7Q6MF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCvlx5M5mVwReoYpCUS4qpDu8XqLKaRaNnO%2Bb2DDVR0LgIhANQJScjjTPdQmUIEQEMuoRiMzZMGGy0R19T6n68heT6NKv8DCHkQABoMNjM3NDIzMTgzODA1IgwC%2Bv2vbL8l3QgnoYsq3AMthcf2hmmMJVypRq0%2BUjAiFUwYERFqc79sXABozeXA%2BK6iEcwPdej91N9Iv7SzxVRWlSgh%2FDKB09naJwpdZvdLXuCuUvWwTZJVI9wcpUTI1QpFcBK9lYQTAdtAgwN%2BDyqFwLfYDl0LtACdtZFKBO4pwCIO9pX0mEV0kXSt2Oy3BPd2fLAbCZZuuyQJA9ydmUCv%2FelmqVTRC0nu8VA7N2ky9n6624RcBD1RNAPAYPGcGtVMMCbIzxq5TWfq4ERXLGJRON9WWu1J2eQChLuQInORHi%2FdKMMAZT%2FdWynAkPlXW1Hxs%2FRgUpGBEzYWgla740bVTHSiRYrAulksPoe2O4T7nBj%2FXawIuCw928BeF4NF%2FQ8Jal%2FcIyGUkCQX1AOdsFKJOzq5EFNRKNnQgG0CFV8s%2BgKNSlJ%2FO567rj2dwXTA0hxbatRe1741q0191G6lXUqiPI2WmZZGfOQTeLtIJFO3EW6o7Z3Sy06U5sIeDWtfMAryrx%2FxdvW6BP9ZnJZVroNyNdzFN5YuDQq1bqCcXs0jH1sfXL%2F01m7AwANqaxwgr0NNgDSXogtL9F0C4D1b0rudaHk8FobRp400vC3feiyp6LyYK%2Bx%2Bd94DYRpr4VpZVojlOKCWn1hlJhlE%2BjCvuInKBjqkAWWbRy2ByvwM2br%2FlE9b3OIydDnio7FJ8tXvzj659kZXUUHaDyte%2F1lslYHl3%2FbEGLN4Wrk%2FpIXy1Cs4JKqvwo9b%2BTYH4ZM4oQAd1K2FzMlQTK33YPTYuyIPUZph6An1YbF3j5URgEBr9QHWg7t94mQddRYt1FZSiHvDPyTHf7IwqV3xUVLmpEmVaytvLrvcFg8iHtOVCK71w1O5fmoBVL1Si1wN&X-Amz-Signature=a9234829a828899a36d42d786db2ab2ab05ff2c4b704bb06c6fbae929c402a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

