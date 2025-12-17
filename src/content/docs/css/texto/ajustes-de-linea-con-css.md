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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GOYEKRA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqQssPlFIH1q8%2Bu0uUW%2FjqXzrjmphBObevgadlU5Lg%2FQIgCyEYVyLxMH47VS1BMzejen0rD3TqIAqUNpJEeOVon%2BQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFNuJh7xhDyMJBFmFircA7ucGUccg5WnVj1Pg7Z%2B%2FMnqNB94kGY6%2Bgt4ydRgTDOPTfAm2XXSmlGGg0p3zpunFJ1beYDRVB2lBBV7NoJsZUV%2BA9SOlfcJqxjYTYYtC1aXvS41YWvWjR6xj5ef9pKH%2BYWKupgWRW2DZjGOVOb4P7t2oNwCDLkTgRgLD8aWcSHmQt9Vb6IQLX%2BOZSwourSx5qvJeL8racOTYv3mTTOCTOStYm%2F1vev8Wsq37mHWVab9yx4CLe%2Fr5NXtCxz4cXWoINfd30YYxRI26mkE1Jy%2FFSZfPKmfe%2FpDVlPnhZ1bZjVKLBrQAaLKqass9yWK0NBHNffeeUV7FrnuaICZfk9gl9MSOG5fzY1CrYBq7NQhVC8RrYFD5UUx3Z%2FHLNtZwNxBvRdHeQx1bQLgcWAJ5Ntuown6QcnetCfHq%2FbZv0I7596EQsEGMXkIrPRY%2BV74G5%2BKLlTVGOJG6fESNqaNydWIb%2FSRvFzofJOQtM1ZlY8nwcQHq3DWep9yQaU3FvQd1K6Qc1Ehk9t8JgwiZV1HsrFNeMAytRC%2FaVBnNQ%2BHLcwTtiC08OEYOrynmLU%2F7p9Oq0rgMV8P8N5%2BAThLd8vBpU84W1UY%2BOpXFk0li8S2TZPjbtaH%2BGOx%2Bwl%2FbcavDhwjMPOdicoGOqUBft5q1y4Lb7q0rS0%2FY%2BAPMsRxXbi8Rpr3rFm9j%2B%2BG9GYG0WuS33TBkSbUBr7sQlxL%2BDM6d19LFwngepjDmpaBgWUFhDVzgmoTuedvPlARTW5RMAr0Nj9gDe%2FWp%2BoGy8aQ8gEoHFcSsHpvZU2XvVUHPhDCVR74iEKwDM7YkRtbgEgHTx7GnybQasiZQHxVUy9ZkOSSCQLbFutmwo5Co5bL2MwXqDOV&X-Amz-Signature=9bcd1cd1d7c8d093137d58c201873a9c1be4c7df0c9626870ac6a415818fb251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GOYEKRA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqQssPlFIH1q8%2Bu0uUW%2FjqXzrjmphBObevgadlU5Lg%2FQIgCyEYVyLxMH47VS1BMzejen0rD3TqIAqUNpJEeOVon%2BQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDFNuJh7xhDyMJBFmFircA7ucGUccg5WnVj1Pg7Z%2B%2FMnqNB94kGY6%2Bgt4ydRgTDOPTfAm2XXSmlGGg0p3zpunFJ1beYDRVB2lBBV7NoJsZUV%2BA9SOlfcJqxjYTYYtC1aXvS41YWvWjR6xj5ef9pKH%2BYWKupgWRW2DZjGOVOb4P7t2oNwCDLkTgRgLD8aWcSHmQt9Vb6IQLX%2BOZSwourSx5qvJeL8racOTYv3mTTOCTOStYm%2F1vev8Wsq37mHWVab9yx4CLe%2Fr5NXtCxz4cXWoINfd30YYxRI26mkE1Jy%2FFSZfPKmfe%2FpDVlPnhZ1bZjVKLBrQAaLKqass9yWK0NBHNffeeUV7FrnuaICZfk9gl9MSOG5fzY1CrYBq7NQhVC8RrYFD5UUx3Z%2FHLNtZwNxBvRdHeQx1bQLgcWAJ5Ntuown6QcnetCfHq%2FbZv0I7596EQsEGMXkIrPRY%2BV74G5%2BKLlTVGOJG6fESNqaNydWIb%2FSRvFzofJOQtM1ZlY8nwcQHq3DWep9yQaU3FvQd1K6Qc1Ehk9t8JgwiZV1HsrFNeMAytRC%2FaVBnNQ%2BHLcwTtiC08OEYOrynmLU%2F7p9Oq0rgMV8P8N5%2BAThLd8vBpU84W1UY%2BOpXFk0li8S2TZPjbtaH%2BGOx%2Bwl%2FbcavDhwjMPOdicoGOqUBft5q1y4Lb7q0rS0%2FY%2BAPMsRxXbi8Rpr3rFm9j%2B%2BG9GYG0WuS33TBkSbUBr7sQlxL%2BDM6d19LFwngepjDmpaBgWUFhDVzgmoTuedvPlARTW5RMAr0Nj9gDe%2FWp%2BoGy8aQ8gEoHFcSsHpvZU2XvVUHPhDCVR74iEKwDM7YkRtbgEgHTx7GnybQasiZQHxVUy9ZkOSSCQLbFutmwo5Co5bL2MwXqDOV&X-Amz-Signature=0810e8f4e327b60453e3573560edb925f9ccbf59a275ad1772cae67f69ecf57f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

