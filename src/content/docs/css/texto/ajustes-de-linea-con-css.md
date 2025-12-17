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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635EFDIM2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXGj2kEApBwqOLN0LX3qvGOFcLbBkU1ksyoMXRF0vUTgIgS9pbBDKLZw1bLOZjTELu2jragYRGDFmajDXiILwI70kqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkd%2BV3DjRA3gTnYoyrcA80EPnNVnGsDgK9SDS3Gxhg%2FEvo6W0Nt25zMhhjn01ez%2FAHl5Jps7EZJiEkJUPSOzZjvl2GJlzx6qFUsgAv9atHUYyI3A7vnhtlFt7QSozFz%2BMB3uYswA4l%2FpmFpx9LCf%2FQEuNuMoEOw5Ao6Twb67K7uWgKexZ6oV2CJos5QeShzXz%2B5FqeQPPmp5XiVumSko1%2F8vQEvjopCjbATvhMI4djUOMLIQFRdkQxeh9gWrjSwAh0Xbu%2BW3pCQ38e6mcHYxVsHb3FyZxPdcrBK4fS%2BlKnJEfb7Nb93POi4K6X8%2FHGchiR7EmD6GKTmx7r4LErKQzyXJ0PqC2c6y0vvcQ5YnEr49CyaMlv2jfpVD3AEro91qt5aRI%2FxnkT94OlbsYx3Wcx3s7U9Kuy4mraqLZH1RgLNRwu5Lp36XaN%2BoQ78PrSSAb3K7ozTdqcuj46FliXplvD7bVaqdWVLA4ffUWj4iqpg80%2BK2M7WFsGRpBys4j%2FVnT2FchrRnF4py7NJzRovSc%2FQLaJZSLClOh6rPU5%2B2%2Ff0%2BSztb8rzQAS%2BeAmz4s4iV%2F9upbuFpxlmAIEE0mjPDDtHuJkVI8QHonybY4ehtjPOG7X2BmFmXD4zL1t%2BX5cJr7YCjgSqxBu4bGDCMPv%2FisoGOqUBGsfKXCRHYKki8dMqCO5HfQhyfG8zaJwAuhMTjAMiwEprDlyHP1iyw7aqoT50VFTiiP2jDJaXdvrEg7m5q3Am6StlTp97rZejw%2B1vB2E289lZsdshG1nWL%2B%2B41c6ScoT5JtmZyx8kMT%2B%2BPXLhdBbvIHyXTDZW869r2Z0HmLdXmdQUkr%2FIOf%2Fh051vR7wfQA4bSLCn9TdkiWFh%2FD8m60sx9iew2FJf&X-Amz-Signature=e8704a8871258fa7fe7faca56ae3a0c0b92faa681ff110b6171d1a4db16f367c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635EFDIM2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXGj2kEApBwqOLN0LX3qvGOFcLbBkU1ksyoMXRF0vUTgIgS9pbBDKLZw1bLOZjTELu2jragYRGDFmajDXiILwI70kqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGkd%2BV3DjRA3gTnYoyrcA80EPnNVnGsDgK9SDS3Gxhg%2FEvo6W0Nt25zMhhjn01ez%2FAHl5Jps7EZJiEkJUPSOzZjvl2GJlzx6qFUsgAv9atHUYyI3A7vnhtlFt7QSozFz%2BMB3uYswA4l%2FpmFpx9LCf%2FQEuNuMoEOw5Ao6Twb67K7uWgKexZ6oV2CJos5QeShzXz%2B5FqeQPPmp5XiVumSko1%2F8vQEvjopCjbATvhMI4djUOMLIQFRdkQxeh9gWrjSwAh0Xbu%2BW3pCQ38e6mcHYxVsHb3FyZxPdcrBK4fS%2BlKnJEfb7Nb93POi4K6X8%2FHGchiR7EmD6GKTmx7r4LErKQzyXJ0PqC2c6y0vvcQ5YnEr49CyaMlv2jfpVD3AEro91qt5aRI%2FxnkT94OlbsYx3Wcx3s7U9Kuy4mraqLZH1RgLNRwu5Lp36XaN%2BoQ78PrSSAb3K7ozTdqcuj46FliXplvD7bVaqdWVLA4ffUWj4iqpg80%2BK2M7WFsGRpBys4j%2FVnT2FchrRnF4py7NJzRovSc%2FQLaJZSLClOh6rPU5%2B2%2Ff0%2BSztb8rzQAS%2BeAmz4s4iV%2F9upbuFpxlmAIEE0mjPDDtHuJkVI8QHonybY4ehtjPOG7X2BmFmXD4zL1t%2BX5cJr7YCjgSqxBu4bGDCMPv%2FisoGOqUBGsfKXCRHYKki8dMqCO5HfQhyfG8zaJwAuhMTjAMiwEprDlyHP1iyw7aqoT50VFTiiP2jDJaXdvrEg7m5q3Am6StlTp97rZejw%2B1vB2E289lZsdshG1nWL%2B%2B41c6ScoT5JtmZyx8kMT%2B%2BPXLhdBbvIHyXTDZW869r2Z0HmLdXmdQUkr%2FIOf%2Fh051vR7wfQA4bSLCn9TdkiWFh%2FD8m60sx9iew2FJf&X-Amz-Signature=ae4b84b31841ea9a25a720d52aea098acae7d1668d312dccd1902d6a78b16a43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

