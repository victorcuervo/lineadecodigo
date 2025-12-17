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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBNZNAEC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXaL1%2FPaB1sZCPbCHMkSiW%2BaqF8ggJpJaYHq08uJq%2F7AiBw9a%2FhpE31smeNWGcJYgihh%2FEfu2iNimi78gLH9aAXZSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2TSde%2F1Arhoj4bWYKtwDVvM8IDL6PjHUjUvIc3HtJlqOObuEUhKBD%2F5WO4c9BybcAuxMk7qaL96OXjXvX5M4jsGXqkv0ZyPx5eIxZbj8SAPhhTJP8FBZmhsGQYT2DuQjMQO5GKkZbDZQOu1kJPFCSoe6VhjfFt8zt7xDSeqmaaXer07inm1haLLFOIoOpDrvCshcVYNMGQLluHcReR7wMl3Nz4c0c9Kc1%2BT%2BkDpjeVJQ0%2FzVCX5MHX%2FaMAjLjvfahYUbAKFOi2uyLtQTKI6Eg5ZBf5R5783maG3DyC4ro%2FI5ww%2Fnk3yDnFjOvHmn%2FKz4jPBH9kxmlKgbKiVxvcBBn1jqwGi1YUPMVdxTF9v4aIDoL4vdnFa03uQIDOoOYXjnw5W46WbGU5Z8NvRf1h5uxbDOmjn8e0l0gk9EFMXAZgup2KCxZtyrhLg7OuBKcLCx2QO9qCwDyVMYXearUuBFPjh7rv2ct0j4E66Z6FqD8NhXkEH1K52PfKgGtSmosREJG13Jm6I2lunQpeao0HZZ6EDcBd1yCY1AFNc1W9P4wQndS8mHAo0cBiAK9e4QRZcFT00AQYqH60dUvzFRxFOdgyG6V4PqIWbFwnL%2Fzxdzwkt0ehUGiMud%2BDJmiaZvDtDeRcytTLelcRjS5UUwy56LygY6pgEbO0H2cFPAG%2FejKmG7v0HS83r%2Fbi5TuGmHeOF9fGRsocJBIrcyt0zVCq65B5sNaFq7jhWQycPt25hq3Zx0S5hgfKMbaFwnn7ZKJ6VC%2FRqKi4z%2FRI9hTUH4se9ubmvdW2%2FTALC7ryJBCMZAbdu0GDcOPbIdDu1rNeNKMwQRTTIAMNIjW%2Fqr8V1Uj18Dpl7EshtPq5fwn1G11d8qzS%2BGHowxiz5wEEHa&X-Amz-Signature=3caff8e236ca95e8be3afe887d7c7a2b7964b269ab05868dff8d4a193be7e30c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBNZNAEC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXaL1%2FPaB1sZCPbCHMkSiW%2BaqF8ggJpJaYHq08uJq%2F7AiBw9a%2FhpE31smeNWGcJYgihh%2FEfu2iNimi78gLH9aAXZSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2TSde%2F1Arhoj4bWYKtwDVvM8IDL6PjHUjUvIc3HtJlqOObuEUhKBD%2F5WO4c9BybcAuxMk7qaL96OXjXvX5M4jsGXqkv0ZyPx5eIxZbj8SAPhhTJP8FBZmhsGQYT2DuQjMQO5GKkZbDZQOu1kJPFCSoe6VhjfFt8zt7xDSeqmaaXer07inm1haLLFOIoOpDrvCshcVYNMGQLluHcReR7wMl3Nz4c0c9Kc1%2BT%2BkDpjeVJQ0%2FzVCX5MHX%2FaMAjLjvfahYUbAKFOi2uyLtQTKI6Eg5ZBf5R5783maG3DyC4ro%2FI5ww%2Fnk3yDnFjOvHmn%2FKz4jPBH9kxmlKgbKiVxvcBBn1jqwGi1YUPMVdxTF9v4aIDoL4vdnFa03uQIDOoOYXjnw5W46WbGU5Z8NvRf1h5uxbDOmjn8e0l0gk9EFMXAZgup2KCxZtyrhLg7OuBKcLCx2QO9qCwDyVMYXearUuBFPjh7rv2ct0j4E66Z6FqD8NhXkEH1K52PfKgGtSmosREJG13Jm6I2lunQpeao0HZZ6EDcBd1yCY1AFNc1W9P4wQndS8mHAo0cBiAK9e4QRZcFT00AQYqH60dUvzFRxFOdgyG6V4PqIWbFwnL%2Fzxdzwkt0ehUGiMud%2BDJmiaZvDtDeRcytTLelcRjS5UUwy56LygY6pgEbO0H2cFPAG%2FejKmG7v0HS83r%2Fbi5TuGmHeOF9fGRsocJBIrcyt0zVCq65B5sNaFq7jhWQycPt25hq3Zx0S5hgfKMbaFwnn7ZKJ6VC%2FRqKi4z%2FRI9hTUH4se9ubmvdW2%2FTALC7ryJBCMZAbdu0GDcOPbIdDu1rNeNKMwQRTTIAMNIjW%2Fqr8V1Uj18Dpl7EshtPq5fwn1G11d8qzS%2BGHowxiz5wEEHa&X-Amz-Signature=df2845244ce9b0a6e2983886b016b8dae80a31cef14cadbfb668bfe381da9acc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

