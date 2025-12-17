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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVRD7F7H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQhg40DxAAi1d3ty0UK%2BUssiYbFPQQIJZnDyJw44v0XAIhAKxt9SIeFL6JZhiDDFwsIHm0GPpoqNtFSzR%2FSbLT6ho8Kv8DCHIQABoMNjM3NDIzMTgzODA1Igye61ohMlpBcvXxOSsq3AMxCuWgGSpdrM1fXdkvDIFJlVWYyd4BWS6XpiTocxB9JbiUoIN2F6zfIJPYktV90vscnkqvyp7cYw3k5Zr6Z7LjE4ygHR7qOMbJuIK2S0VfmUZAP0X3ubEY7Ue8qjhO2ACTwxjd%2FvOXEhrhzT5PAm6sDIkN89yVos0REStMCc3fpZsvV1V03CHYmqV2vU8MbkzvAjB0xSyy6koosnK01dDXZYqdm7EcJLMF2xELtpFvDsCeMvb8kuym6apBOispE9qtZEdoFXACAZhNO8E5NHDFfVjzZqvc%2FQDlc4r1VXjdRFlwHRUzxnCRvQttvB2vj4TlUgmn%2FDLDxGH0nWUCZcW9zQXZQnvRhK7pwBJHAhaQtnMOGmkZckMfvBYupu7vpaB7vYvzU3TkFNwOe8cig1VtTkxMeBUNCbVDZ3Jj9rXUtQdywecx78LZm6rsj%2Fy8T8bkPCELrZqlKyYyaCjxQHFBDhQMVIQ%2FgONxHUDCZOBof5Z9IANBOO2T2LQaTY19r0oupn5GCSZPnzQ%2BKK1fe8hotbSWwH3LkzEsspCwDhey%2BUkeOANKZXx0DLXlbkKcGZpimuLEofLnpYaVGGmt8iji9H0mUTg3xE9vGWe50HFczpiqOSQai4%2BSE%2FT9AzCd%2B4fKBjqkAVCysSr%2F3GK4SEIt0AXgTHrmORHEBnmPiGycHcAI2morjzJ7MtQpE2CNpyU607lclDebexaWT9uYVnmnTHnmCHKFTnx0yCBAepYAO%2BxUPD23Q8NHKz0p4nRaZswFeDQamX8yRA9QENjY3BSjI%2BMTLbZeAfwn4rXtlJGgXzxSvdzI2OMIbyag5nnoZ9W1q0X6GTPs9siW8XY8uvqZPThKivlY8LoA&X-Amz-Signature=77177ed245db5a364f6a13cbf06409da1dd6faf3369f90d9d196b3f7e73a9c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVRD7F7H%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQhg40DxAAi1d3ty0UK%2BUssiYbFPQQIJZnDyJw44v0XAIhAKxt9SIeFL6JZhiDDFwsIHm0GPpoqNtFSzR%2FSbLT6ho8Kv8DCHIQABoMNjM3NDIzMTgzODA1Igye61ohMlpBcvXxOSsq3AMxCuWgGSpdrM1fXdkvDIFJlVWYyd4BWS6XpiTocxB9JbiUoIN2F6zfIJPYktV90vscnkqvyp7cYw3k5Zr6Z7LjE4ygHR7qOMbJuIK2S0VfmUZAP0X3ubEY7Ue8qjhO2ACTwxjd%2FvOXEhrhzT5PAm6sDIkN89yVos0REStMCc3fpZsvV1V03CHYmqV2vU8MbkzvAjB0xSyy6koosnK01dDXZYqdm7EcJLMF2xELtpFvDsCeMvb8kuym6apBOispE9qtZEdoFXACAZhNO8E5NHDFfVjzZqvc%2FQDlc4r1VXjdRFlwHRUzxnCRvQttvB2vj4TlUgmn%2FDLDxGH0nWUCZcW9zQXZQnvRhK7pwBJHAhaQtnMOGmkZckMfvBYupu7vpaB7vYvzU3TkFNwOe8cig1VtTkxMeBUNCbVDZ3Jj9rXUtQdywecx78LZm6rsj%2Fy8T8bkPCELrZqlKyYyaCjxQHFBDhQMVIQ%2FgONxHUDCZOBof5Z9IANBOO2T2LQaTY19r0oupn5GCSZPnzQ%2BKK1fe8hotbSWwH3LkzEsspCwDhey%2BUkeOANKZXx0DLXlbkKcGZpimuLEofLnpYaVGGmt8iji9H0mUTg3xE9vGWe50HFczpiqOSQai4%2BSE%2FT9AzCd%2B4fKBjqkAVCysSr%2F3GK4SEIt0AXgTHrmORHEBnmPiGycHcAI2morjzJ7MtQpE2CNpyU607lclDebexaWT9uYVnmnTHnmCHKFTnx0yCBAepYAO%2BxUPD23Q8NHKz0p4nRaZswFeDQamX8yRA9QENjY3BSjI%2BMTLbZeAfwn4rXtlJGgXzxSvdzI2OMIbyag5nnoZ9W1q0X6GTPs9siW8XY8uvqZPThKivlY8LoA&X-Amz-Signature=f3d241e816c9d459f4f0ae8e4fc84a55f0e98944806813c5b93b9c7ee23b387c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

