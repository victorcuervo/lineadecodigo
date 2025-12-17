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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSHADNJE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgstYX7DwKCGUeptYwqo%2FAruRlOO%2BNhmI4m7pEsJ%2FAxQIhAOCn54MVzz6Feh4dBUkXLQQe12RHOf2DYGGuB1au4SeEKv8DCH8QABoMNjM3NDIzMTgzODA1Igz5gYkE0hwhPPbMAsAq3AMDCo5kV3HWdUPaOkBgH3DmdR56EcGRhNuUMzxRrfFql43ckJQApxqGCsaMPCVtkC4Ab5Yy8n%2BHZPQVEIn4ga7ivcRpCSQRyOvJGxf5tl9I4QyI8T42lwEPP2uKmDRlXix2hC9v%2BAOcfcMVZw12UxxVYCItXF69gB3y%2Bb6yquhaNGyRkKOcoevysSJlpRfAYdmtPU5%2Fm%2FVW41BAOnReVi4OU%2BLWbFoRf8aENxdbI8Vkp8YpKelhg16JpYYo%2FRCXUc39xYOySbexGqbXGc45ORFL0WLSTDoA3%2FPd7wVtI0cKY%2FLb4FTmPAahEw1fQdhE%2B30BQSolAI5VFjIYG19UIl11mRJkmtz9usSMlA6Ki89UR3DxmlBUTG%2BrhJu983kJ1JILBsndqj1yO9U2eK7sKMCUMvbEznw6fecmn6m6CE232r5oxK%2BbM0AVO%2Bes0K0MiUdGtlpTfjYzjNp3WbchyVxj2d3%2FlWSipTu8tSuG060scRF3mFbu1jArQR0yRS%2FKGVmFSxUU0YGsC1KdQVdGN1CppO1SHnhD0J9bp%2BiiqpQCB64Yv3vPQRIgZCmM8g%2FYU8HsCssOKK%2BwMgPp5l4J%2Bq6kHNxWlhjELlmMa%2B%2B5HAxALvaCN5270Zm%2Bq%2FAoXzDc4YrKBjqkAcstk7BUR%2BWM4WNla1i6TCUXwDPEGvHJvjtu7MsL1pB6MbpGrhRj8phrQXm9zXRVn1PHRk1JAWh9K5wwsQRiTA8Frvsu0JM9zFrULpkggXDKEC7r4hjz8U4KZVqsryWiDxLG4isGLaIlhV%2BKm%2BFJkDYf2o6hPGD51MTshAG7dJuWky0CWoG2H3yP5%2BJbEoG1M4iV1KtC3i66pl8qDygVKpK3ojI4&X-Amz-Signature=3a2b5017e692619f661b1ab604f24d2e41a7ef6a5f2ceb4b2e0c9bf021a9970f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSHADNJE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgstYX7DwKCGUeptYwqo%2FAruRlOO%2BNhmI4m7pEsJ%2FAxQIhAOCn54MVzz6Feh4dBUkXLQQe12RHOf2DYGGuB1au4SeEKv8DCH8QABoMNjM3NDIzMTgzODA1Igz5gYkE0hwhPPbMAsAq3AMDCo5kV3HWdUPaOkBgH3DmdR56EcGRhNuUMzxRrfFql43ckJQApxqGCsaMPCVtkC4Ab5Yy8n%2BHZPQVEIn4ga7ivcRpCSQRyOvJGxf5tl9I4QyI8T42lwEPP2uKmDRlXix2hC9v%2BAOcfcMVZw12UxxVYCItXF69gB3y%2Bb6yquhaNGyRkKOcoevysSJlpRfAYdmtPU5%2Fm%2FVW41BAOnReVi4OU%2BLWbFoRf8aENxdbI8Vkp8YpKelhg16JpYYo%2FRCXUc39xYOySbexGqbXGc45ORFL0WLSTDoA3%2FPd7wVtI0cKY%2FLb4FTmPAahEw1fQdhE%2B30BQSolAI5VFjIYG19UIl11mRJkmtz9usSMlA6Ki89UR3DxmlBUTG%2BrhJu983kJ1JILBsndqj1yO9U2eK7sKMCUMvbEznw6fecmn6m6CE232r5oxK%2BbM0AVO%2Bes0K0MiUdGtlpTfjYzjNp3WbchyVxj2d3%2FlWSipTu8tSuG060scRF3mFbu1jArQR0yRS%2FKGVmFSxUU0YGsC1KdQVdGN1CppO1SHnhD0J9bp%2BiiqpQCB64Yv3vPQRIgZCmM8g%2FYU8HsCssOKK%2BwMgPp5l4J%2Bq6kHNxWlhjELlmMa%2B%2B5HAxALvaCN5270Zm%2Bq%2FAoXzDc4YrKBjqkAcstk7BUR%2BWM4WNla1i6TCUXwDPEGvHJvjtu7MsL1pB6MbpGrhRj8phrQXm9zXRVn1PHRk1JAWh9K5wwsQRiTA8Frvsu0JM9zFrULpkggXDKEC7r4hjz8U4KZVqsryWiDxLG4isGLaIlhV%2BKm%2BFJkDYf2o6hPGD51MTshAG7dJuWky0CWoG2H3yP5%2BJbEoG1M4iV1KtC3i66pl8qDygVKpK3ojI4&X-Amz-Signature=c2a28e3ff6bad728ddc3026fae237625af757998b31e1be1b743b6a47d753bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

