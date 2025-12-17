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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVRLRZRP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfFXfaVLrFijsbaUnlELRIrpcGblfID%2BGit7S%2BirR5vAiEA4iL4h2IFM3QG34q4pbfOL%2FSuvIUgNIsFA4%2FefaopLNsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8vw43dcG2iJxdoQSrcA2y7I0SzH7KDLvyNxXyuXb%2BZgKLQvI5YNOWhpXoVDHCZSgfYCWbXRq%2BDn9LF63rApsYUL8%2F%2FwbNcLbIgViYF2MTA183NIwPU6gUZZNuyJKa71A4DPT6XGqLePeFdze78%2F3g%2FxqdQU4jvgOntn78XXmLVW5IYtICVstMUbE%2Bo%2B9SDij72yt2MpkgE5aq5G65%2FotagvYBW8gajYzppAUA42JSHGU2pYh9%2BPy7Ucvjzxc6AEuMWvQP%2Fxomepp7gd%2F%2FkHCyP889%2B7l0BnxBVhVhyTdfNusveXShHtAVjK5zAUZ977olwBkv211cQfbD6fgeXrGJapCOCGjE6j0WjqklhmceaMWve7r0PoHl8FBjlht22FcBdOpDvT7KfzUFe6M9lPBA431d%2F6xjE6%2F4LiMI%2BXFCC397xHP7sE23%2BEeyXxmbqfrCjQt5M9wtv692kXc%2Fzc9iJd8wO%2BhrI9sqEqX5vyoDLEMptDCg9yyS2mIsY62RJaNBM0%2Fo%2FYCrxjDM91qN57%2BmCR9gUju6I%2F6yZ6bsdxXlNGB5TfO5OeZlsLzYt6TaJH4baUknLO5439A66sM03QME2vBNLkZmOLt9tNVaLCHoeNPRR3VjnVey9e%2FeHA2RlGzem5xHb%2F9TYeTocMIWAi8oGOqUBEDUGcd19LqXDtjNAOSyRTbuM2MxzQP3a0MSO%2BaCrhgsF%2BwiPzqQHehQkV8EOJK%2BeSXB50qscHCJTsVC%2BQeaN8GJgB4bxOsYHw2t8drIeU0GaEATVwbGx3YOFu%2Fxt3isq0xySH3eGeLhdFjFZ6ZiRhtTKo8cxV2A9Fxl6oiPrZ1mnT15o3mdlJWeLmBzfnMVOu%2FJvL5ySRstYPXYmaOO1HlLxbozL&X-Amz-Signature=bf226f82cc0ba1c779d27878221f4e0983a0dbac6822716117ede0e0453197b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVRLRZRP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfFXfaVLrFijsbaUnlELRIrpcGblfID%2BGit7S%2BirR5vAiEA4iL4h2IFM3QG34q4pbfOL%2FSuvIUgNIsFA4%2FefaopLNsqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8vw43dcG2iJxdoQSrcA2y7I0SzH7KDLvyNxXyuXb%2BZgKLQvI5YNOWhpXoVDHCZSgfYCWbXRq%2BDn9LF63rApsYUL8%2F%2FwbNcLbIgViYF2MTA183NIwPU6gUZZNuyJKa71A4DPT6XGqLePeFdze78%2F3g%2FxqdQU4jvgOntn78XXmLVW5IYtICVstMUbE%2Bo%2B9SDij72yt2MpkgE5aq5G65%2FotagvYBW8gajYzppAUA42JSHGU2pYh9%2BPy7Ucvjzxc6AEuMWvQP%2Fxomepp7gd%2F%2FkHCyP889%2B7l0BnxBVhVhyTdfNusveXShHtAVjK5zAUZ977olwBkv211cQfbD6fgeXrGJapCOCGjE6j0WjqklhmceaMWve7r0PoHl8FBjlht22FcBdOpDvT7KfzUFe6M9lPBA431d%2F6xjE6%2F4LiMI%2BXFCC397xHP7sE23%2BEeyXxmbqfrCjQt5M9wtv692kXc%2Fzc9iJd8wO%2BhrI9sqEqX5vyoDLEMptDCg9yyS2mIsY62RJaNBM0%2Fo%2FYCrxjDM91qN57%2BmCR9gUju6I%2F6yZ6bsdxXlNGB5TfO5OeZlsLzYt6TaJH4baUknLO5439A66sM03QME2vBNLkZmOLt9tNVaLCHoeNPRR3VjnVey9e%2FeHA2RlGzem5xHb%2F9TYeTocMIWAi8oGOqUBEDUGcd19LqXDtjNAOSyRTbuM2MxzQP3a0MSO%2BaCrhgsF%2BwiPzqQHehQkV8EOJK%2BeSXB50qscHCJTsVC%2BQeaN8GJgB4bxOsYHw2t8drIeU0GaEATVwbGx3YOFu%2Fxt3isq0xySH3eGeLhdFjFZ6ZiRhtTKo8cxV2A9Fxl6oiPrZ1mnT15o3mdlJWeLmBzfnMVOu%2FJvL5ySRstYPXYmaOO1HlLxbozL&X-Amz-Signature=6e70a001649b9f6f4c41111e609c1438c8d15857eef7d287e4046a695ca24525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

