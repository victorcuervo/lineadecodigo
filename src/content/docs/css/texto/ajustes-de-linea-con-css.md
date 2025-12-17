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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5OZ66XV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5uys8U%2FnzLUgvCUGepqf64750GBMQkiB%2FROmPjSYYMQIgGZZmqGoahz2vKsqXVl1vWE3dXZ0ZXwZc5x%2Bz%2BkQtIDEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGDg4dxTdrRceitwDircAwbWwd6k9tgn2B6QaT8Enjyjn1VNcCas49D3Npw70I5WJ%2BXHy7PYrzgNVXEkXS4Df%2FHrKeXKOSYDJiFKCOPGLaM%2FTZqdF5yarsjXPyUHiWbbhjX85JyfJKt3MlG8%2FaQtcMsfWCfRIbhLQQqgma%2FHP9bVyTujjy%2BUPSgrQXdXsJhJDUMKGrHKoyxhAVqAQWo0E1LJdMlhjZKhBpHN79w3MzOcL3pRC0%2FM0DYObw9bgZAVekMiNAOb8z1MKsU7KYrC8hy%2FW0reOAHXFYU%2Fi5jdJNP94A0hJXQmGWeRLI8GDeeYW7APPHPhMs90xlDgJayHkCM2WEr2jZnAAVvUn8h0Qa8VWcLk2DJhwjDpwPa2maqUPF7YCZJxBwomMkU%2Bdsn%2FCoUKws%2BVyBP67f4QqWPx8xsEbWENjk78s4L4XhRZliDxYXWyL%2FO8lIBVEOZvMVisdyKbvjyIOtaFOOZ1GsGlaUF%2FIpDu4b4K1YmLPQAEPlSF7xRkjXHve%2FhnR3UEeG71y8j2Y5pDClMX5j3TfNdkdgdQkdX%2FMLjdUC%2B60YuZnrNHcFPS2HG7sMw1JQNoOyIdJzxWoCH5CSd78y0WHYqc5%2Bvv6B9AbCZ5KULrHtw4X0Noim%2FYVpTFIgPdRQqPMNOyiMoGOqUBotiqXpa17ep5ItGV7EzIItoPq8MaT4T4i72hRRi%2F5QQ0BTbJMPvy5zaZIlUKMVvIXpUNEfpGnR3bMXgGKW35t0REcv0zDb4NOVoF0mlShkr5wZDR6NDowoREvi8a3cdjga%2FpL9AAuRCiFxGV9AaX0LgMez%2FjiS3egNKfZb0lKp5Y2y0hEalvBSwGBVDZdjLYhD8rkknzfcvE%2FzfVNtF%2BpltElLsB&X-Amz-Signature=84d59dfb75ce4d02b3c45db504655f043cc0b8fef80c2747bf9c9f9bdc8c45b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5OZ66XV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5uys8U%2FnzLUgvCUGepqf64750GBMQkiB%2FROmPjSYYMQIgGZZmqGoahz2vKsqXVl1vWE3dXZ0ZXwZc5x%2Bz%2BkQtIDEq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGDg4dxTdrRceitwDircAwbWwd6k9tgn2B6QaT8Enjyjn1VNcCas49D3Npw70I5WJ%2BXHy7PYrzgNVXEkXS4Df%2FHrKeXKOSYDJiFKCOPGLaM%2FTZqdF5yarsjXPyUHiWbbhjX85JyfJKt3MlG8%2FaQtcMsfWCfRIbhLQQqgma%2FHP9bVyTujjy%2BUPSgrQXdXsJhJDUMKGrHKoyxhAVqAQWo0E1LJdMlhjZKhBpHN79w3MzOcL3pRC0%2FM0DYObw9bgZAVekMiNAOb8z1MKsU7KYrC8hy%2FW0reOAHXFYU%2Fi5jdJNP94A0hJXQmGWeRLI8GDeeYW7APPHPhMs90xlDgJayHkCM2WEr2jZnAAVvUn8h0Qa8VWcLk2DJhwjDpwPa2maqUPF7YCZJxBwomMkU%2Bdsn%2FCoUKws%2BVyBP67f4QqWPx8xsEbWENjk78s4L4XhRZliDxYXWyL%2FO8lIBVEOZvMVisdyKbvjyIOtaFOOZ1GsGlaUF%2FIpDu4b4K1YmLPQAEPlSF7xRkjXHve%2FhnR3UEeG71y8j2Y5pDClMX5j3TfNdkdgdQkdX%2FMLjdUC%2B60YuZnrNHcFPS2HG7sMw1JQNoOyIdJzxWoCH5CSd78y0WHYqc5%2Bvv6B9AbCZ5KULrHtw4X0Noim%2FYVpTFIgPdRQqPMNOyiMoGOqUBotiqXpa17ep5ItGV7EzIItoPq8MaT4T4i72hRRi%2F5QQ0BTbJMPvy5zaZIlUKMVvIXpUNEfpGnR3bMXgGKW35t0REcv0zDb4NOVoF0mlShkr5wZDR6NDowoREvi8a3cdjga%2FpL9AAuRCiFxGV9AaX0LgMez%2FjiS3egNKfZb0lKp5Y2y0hEalvBSwGBVDZdjLYhD8rkknzfcvE%2FzfVNtF%2BpltElLsB&X-Amz-Signature=38fa3fd98a7a54c9f7c5e339ad9d73279754e460be24e84befe8c22ce027194e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

