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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7NENWMC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC45e0fS4taPSV0Nd2rKf4YZYNLI4NWl0PQicYvGY8ETQIhAOVl%2BJPX2dkNNrjaMKjBc4ns7VpJAS6oDIMEn2YmzvGVKv8DCH0QABoMNjM3NDIzMTgzODA1IgzMobz3ml7o%2BG7uCqQq3ANf8y3Gg03Wq5ufbp%2Fz0OwXJdiYWXtr%2FSKku36hY8z5VAxPQzCPohFpGxtDJHR6mYMMOn6AWdqkuIuyQNXwWqhUF7Pje08FIkqcyMSRYsSEWpqYi35JYrKl0N%2FoeIlLyYIUJ2XAQm%2FHWN8UknanG70i70e8c0XhuOnYRh6hWSfAZyJdqakuje523XuZFdfL8gGtnMG0HUnjCK%2BNyl7YXCnU%2B22K0QaTU1c10amyP%2B6KkSfRKSeVMVFp91ayW8iWCXIQkbs%2Bq0TSRvJd54%2FDEYHUrn4moIN53QoR%2BSb022s1gvfUPR2ECUa0D1NMp9ynoEIYQTw3VsFRixIhtDHkZN1fCUOZ9ksrvr6zK3hUbeLjTeNDRSNH6ohGop48M8RmwK3y1RvYq%2BM0tjGDg5lGWQSmhmCiWCBOsPGHZ4PM24MTN9c1AN2jzZtLvVtkWVaTFYryFGvuLFnBhveTvKjPbG%2BDDkRyU1Jg9pTMzSc61TB%2BsfGZLUgTziQIdVcZd5qYxGmXchya223FKvYdkaJ5Mx9iM0DT4fWfi6AEpRRpmc9GJk%2FWWr%2BgVrXYLl4x05iSVAOMa%2FyCete0IJEIXmlmmh1%2FmV1riz19emvP88%2FygHwTA4J3RpI0SnbZ3eOTBzC6q4rKBjqkAUyDDcdx0m0UfVv0R43B%2B6mLAFvJguylvxCpCdp3FfgJWUDgq9Qp2a9AhvH2EzKDjF0ZLi1XnXdBdwr0zfZUKyhkgRp28dar9KvXb6T8VUck7%2FWr%2B0JMMFsCjOID4W04kOAmtGYJ3LbMVJ%2Bk1udKOfijOLLTdBMN8S0PvKvuvFk3cHXJ6dDIkOXX5biA6DiFnxcEZuSnaflcVpBUz4Cy7CZuPona&X-Amz-Signature=a3909ccd6d3a6a7b3f1f9c35403fdfdf04c4d8e32bb9ec441653dbbb5649537c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7NENWMC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC45e0fS4taPSV0Nd2rKf4YZYNLI4NWl0PQicYvGY8ETQIhAOVl%2BJPX2dkNNrjaMKjBc4ns7VpJAS6oDIMEn2YmzvGVKv8DCH0QABoMNjM3NDIzMTgzODA1IgzMobz3ml7o%2BG7uCqQq3ANf8y3Gg03Wq5ufbp%2Fz0OwXJdiYWXtr%2FSKku36hY8z5VAxPQzCPohFpGxtDJHR6mYMMOn6AWdqkuIuyQNXwWqhUF7Pje08FIkqcyMSRYsSEWpqYi35JYrKl0N%2FoeIlLyYIUJ2XAQm%2FHWN8UknanG70i70e8c0XhuOnYRh6hWSfAZyJdqakuje523XuZFdfL8gGtnMG0HUnjCK%2BNyl7YXCnU%2B22K0QaTU1c10amyP%2B6KkSfRKSeVMVFp91ayW8iWCXIQkbs%2Bq0TSRvJd54%2FDEYHUrn4moIN53QoR%2BSb022s1gvfUPR2ECUa0D1NMp9ynoEIYQTw3VsFRixIhtDHkZN1fCUOZ9ksrvr6zK3hUbeLjTeNDRSNH6ohGop48M8RmwK3y1RvYq%2BM0tjGDg5lGWQSmhmCiWCBOsPGHZ4PM24MTN9c1AN2jzZtLvVtkWVaTFYryFGvuLFnBhveTvKjPbG%2BDDkRyU1Jg9pTMzSc61TB%2BsfGZLUgTziQIdVcZd5qYxGmXchya223FKvYdkaJ5Mx9iM0DT4fWfi6AEpRRpmc9GJk%2FWWr%2BgVrXYLl4x05iSVAOMa%2FyCete0IJEIXmlmmh1%2FmV1riz19emvP88%2FygHwTA4J3RpI0SnbZ3eOTBzC6q4rKBjqkAUyDDcdx0m0UfVv0R43B%2B6mLAFvJguylvxCpCdp3FfgJWUDgq9Qp2a9AhvH2EzKDjF0ZLi1XnXdBdwr0zfZUKyhkgRp28dar9KvXb6T8VUck7%2FWr%2B0JMMFsCjOID4W04kOAmtGYJ3LbMVJ%2Bk1udKOfijOLLTdBMN8S0PvKvuvFk3cHXJ6dDIkOXX5biA6DiFnxcEZuSnaflcVpBUz4Cy7CZuPona&X-Amz-Signature=e4a0ed3b839a13ca33e0b178903083effa1e97880cd27dbb56cbe57133bcee56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

