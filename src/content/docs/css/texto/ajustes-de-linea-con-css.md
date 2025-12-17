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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZHS5VH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiLLyf35R0OFOoagHFRLMlJnK44drUO4Nb5TyqS1EnuQIhAL35eomgczjjRKrIMmbxdeorpE46o3%2F9XQP4LZX92IrhKv8DCH0QABoMNjM3NDIzMTgzODA1IgywouvU3ZPW0qfsvkcq3APb27vozTBkDdKP4neX%2BxjEG8BFDZK6dSEBtcVDQjT%2Bb7B6EfjDC5Sygo4IrkJO2HO2Xr1YuO9J0eZOqEWGmJcWGUtH8kLTPCejSK1xOI%2FHFN%2BfZdYwhFek3ZiCJTT2P1EYHopdEvcE8kGiGwtNHWPeaH4z3f2XiWBiNVbteHd1ymc7U4RW8ypoV4wg6rwqBUKN32qIjwK3g8%2BcYDlCQJfYQ3uuCa2i%2F4pUjo9PeYQ823mFNlBKSvTeNYFPbTDr1cy7VSNAtoCyFUjG9rheG2JEoHzSq2IQz7F617UdVfpVD247VeE8IVTCyndtDiPigouRN75UUlo9ZrZOMtd5F4xOVAMFMBu5U2WVTgCQMkZ3J%2BI4JU%2FYPDf9qmd6SbCxa8cprZSOhmWTNCr1r2MkT5%2BUu6UTxVHDzFoC6LkhFsCIZmbAed13O8cFcBQYRlkJ4eCaVI155yeabAvstISVWRsvEZcruLfIXfnknZIWjXvXFKjQWGpKKxRsIIEgqyKy5LmO4xP%2FhU4TFsi%2BHXbRuLKT%2FrF12DlpIBEyTEq0hvey%2BTQfSHJktnqwfh9VAJK2sFK0ktGjOoK1A1gSqd%2BxseDlOIFuDChip3wEkNvfEMhHGxYv85lSF9Rfzz%2F%2BMDCYq4rKBjqkAU%2BO%2FtnLzNXCuEPtxWJ1WbpPrNDDv22ST5KggcQJYwolCAj94mPUi%2BriAhpmJixh%2Ffwxs9YrhpGdDp%2B7AhNxAVQjxI1RqOa96D8wskEtMJbJx%2FXgPprcwGOJjU9K4uI2LYcH%2BrdGRGEOjgfuHcE1I0y9hkCzMff1BJrQ8T0EdH7sBCJBsrNy9a%2Bj9MVfLYrqvwvnvPUpZpUAEhAdT5mb0HBcj4%2BB&X-Amz-Signature=1f0717853b8c88b4c2b9d78814da05317079cadf25131f5462fdd233d06b88b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZHS5VH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiLLyf35R0OFOoagHFRLMlJnK44drUO4Nb5TyqS1EnuQIhAL35eomgczjjRKrIMmbxdeorpE46o3%2F9XQP4LZX92IrhKv8DCH0QABoMNjM3NDIzMTgzODA1IgywouvU3ZPW0qfsvkcq3APb27vozTBkDdKP4neX%2BxjEG8BFDZK6dSEBtcVDQjT%2Bb7B6EfjDC5Sygo4IrkJO2HO2Xr1YuO9J0eZOqEWGmJcWGUtH8kLTPCejSK1xOI%2FHFN%2BfZdYwhFek3ZiCJTT2P1EYHopdEvcE8kGiGwtNHWPeaH4z3f2XiWBiNVbteHd1ymc7U4RW8ypoV4wg6rwqBUKN32qIjwK3g8%2BcYDlCQJfYQ3uuCa2i%2F4pUjo9PeYQ823mFNlBKSvTeNYFPbTDr1cy7VSNAtoCyFUjG9rheG2JEoHzSq2IQz7F617UdVfpVD247VeE8IVTCyndtDiPigouRN75UUlo9ZrZOMtd5F4xOVAMFMBu5U2WVTgCQMkZ3J%2BI4JU%2FYPDf9qmd6SbCxa8cprZSOhmWTNCr1r2MkT5%2BUu6UTxVHDzFoC6LkhFsCIZmbAed13O8cFcBQYRlkJ4eCaVI155yeabAvstISVWRsvEZcruLfIXfnknZIWjXvXFKjQWGpKKxRsIIEgqyKy5LmO4xP%2FhU4TFsi%2BHXbRuLKT%2FrF12DlpIBEyTEq0hvey%2BTQfSHJktnqwfh9VAJK2sFK0ktGjOoK1A1gSqd%2BxseDlOIFuDChip3wEkNvfEMhHGxYv85lSF9Rfzz%2F%2BMDCYq4rKBjqkAU%2BO%2FtnLzNXCuEPtxWJ1WbpPrNDDv22ST5KggcQJYwolCAj94mPUi%2BriAhpmJixh%2Ffwxs9YrhpGdDp%2B7AhNxAVQjxI1RqOa96D8wskEtMJbJx%2FXgPprcwGOJjU9K4uI2LYcH%2BrdGRGEOjgfuHcE1I0y9hkCzMff1BJrQ8T0EdH7sBCJBsrNy9a%2Bj9MVfLYrqvwvnvPUpZpUAEhAdT5mb0HBcj4%2BB&X-Amz-Signature=af705731f3b407ab9800348eb8423b8137401f88b0072130f72c6ea112b66a3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

