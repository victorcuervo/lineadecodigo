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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL6I4YQN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5OAj3kqFI5nUZmiy13ZH4iobPA7nxArBdi3%2B%2B5aXXVAiBMTWd7fG27nBa6Wlg7eUmlUix77ulz4GwmqvwJ6NYLDSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ1E0VnII%2Fb3l3gFxKtwD85Xt9PfQIHZitffVHRN0z9z5oLbPCyIP%2B%2FI0y0YxuRao7bvD0kf1wuFVnv8GChSu5YCzTA4b0NlQLPxX7EtgfFQVua3iXlwEPdoe8CXfa%2FCspqOruJUP0kko5jlxUfu1qOQWOf3KyF6ksgkaAbLEV%2BU2PUxiFw9qpF1AHhJ4AAZPTaHmXaNW%2FIHaLaMEWeA5zlIlXXyscfye%2FRIhsgdwSZ65%2F0fEmb0815wcStAr7d7OLt1nQXtrtyoElcv84NYaaqY4kOWFK9Yyc3GJ1J5fw7m60RHd%2F6E5nDBERRM3KLg2GnBsQqPBRks%2Bk3SsiohL8qWLyaXWnfh5zdmSvJMRpBWKATb%2Bq7MD03njybF7A7h2TTZTS28hCZEboeGcr7ROhXbK2v5gGsPE4npevh12OEyDHs2fRRAwzlPxOLpV0DbOopIrr4O9nfp6WKnKXM%2BrfEPVTd9ej4ZcEm3JhGfsdXiZnFh7wd5aZbbX5NX9sVdzPoygQ0mVL%2BFVHUB5rh8wCxNvx%2F4FeSk8UlBg1Acz5P%2Flx%2FId0uLIAbduSjlFMeLcScCwfjPD8cW0SxPVEtkwtuKhjUJMe1MI%2BXSD4UWGzeHUF0T7oaYfI3xyv%2BiuZdIefExLlMu3nHUkOqcwu5%2BLygY6pgHgX0h2uq%2FM0ycAReADLwvd6T531zVYdSIlWIFdIgJJSPzBwaGKepL81X07%2FcsonAkKbAZ9ehyYS4Entl7XVs%2BF8to5rljKDO4nEbRa45AiJMK3Xrwahbjpi66EQRpFzfaoIS1C4l5BjHvUTlI1y6kjJG%2FPBE3kEpsbFFZ86V5KJjkX9SxasN1ac8bxG6bOpr%2FAmkT6TxD1Ww9i4SQXnPMgW0mAhYCv&X-Amz-Signature=1bd8075b4919dbcc07fb59fa8e05627a3f85f45066595d0a8f7f00c4f8972930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL6I4YQN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T155445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC5OAj3kqFI5nUZmiy13ZH4iobPA7nxArBdi3%2B%2B5aXXVAiBMTWd7fG27nBa6Wlg7eUmlUix77ulz4GwmqvwJ6NYLDSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZ1E0VnII%2Fb3l3gFxKtwD85Xt9PfQIHZitffVHRN0z9z5oLbPCyIP%2B%2FI0y0YxuRao7bvD0kf1wuFVnv8GChSu5YCzTA4b0NlQLPxX7EtgfFQVua3iXlwEPdoe8CXfa%2FCspqOruJUP0kko5jlxUfu1qOQWOf3KyF6ksgkaAbLEV%2BU2PUxiFw9qpF1AHhJ4AAZPTaHmXaNW%2FIHaLaMEWeA5zlIlXXyscfye%2FRIhsgdwSZ65%2F0fEmb0815wcStAr7d7OLt1nQXtrtyoElcv84NYaaqY4kOWFK9Yyc3GJ1J5fw7m60RHd%2F6E5nDBERRM3KLg2GnBsQqPBRks%2Bk3SsiohL8qWLyaXWnfh5zdmSvJMRpBWKATb%2Bq7MD03njybF7A7h2TTZTS28hCZEboeGcr7ROhXbK2v5gGsPE4npevh12OEyDHs2fRRAwzlPxOLpV0DbOopIrr4O9nfp6WKnKXM%2BrfEPVTd9ej4ZcEm3JhGfsdXiZnFh7wd5aZbbX5NX9sVdzPoygQ0mVL%2BFVHUB5rh8wCxNvx%2F4FeSk8UlBg1Acz5P%2Flx%2FId0uLIAbduSjlFMeLcScCwfjPD8cW0SxPVEtkwtuKhjUJMe1MI%2BXSD4UWGzeHUF0T7oaYfI3xyv%2BiuZdIefExLlMu3nHUkOqcwu5%2BLygY6pgHgX0h2uq%2FM0ycAReADLwvd6T531zVYdSIlWIFdIgJJSPzBwaGKepL81X07%2FcsonAkKbAZ9ehyYS4Entl7XVs%2BF8to5rljKDO4nEbRa45AiJMK3Xrwahbjpi66EQRpFzfaoIS1C4l5BjHvUTlI1y6kjJG%2FPBE3kEpsbFFZ86V5KJjkX9SxasN1ac8bxG6bOpr%2FAmkT6TxD1Ww9i4SQXnPMgW0mAhYCv&X-Amz-Signature=c2fea12a7dc8b01b38bc89053609508d6bceb8302934941e636523fcdb881d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

