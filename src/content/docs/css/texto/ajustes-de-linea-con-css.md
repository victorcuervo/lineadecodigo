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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CUZJDG3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNC1sa0pX6gJOESelFVJ8JUhmUAcJ7XiQKtGrqjmegQgIhAK4kb0oaSkXyo4DRjmb4Dcdbhy4U63oW28RpUUiCC%2B8zKv8DCHYQABoMNjM3NDIzMTgzODA1IgyCDuzMJfiyyNFfsf8q3ANBHKZmFewnhKkO6sATmAEfiGMr%2F32KkqXwk%2FxEZSJwv0amds2PpnzorUvuHcdnZAKWyM%2FyzGTGA7XY6QNm9OfXQ0o%2FkRFCXvRwkiBJvTw0WcLDQVmDVcRAYZB%2FJ1czqyIgn9HTByqrDGOSJBsEOKMR8GjL3wqNN28DNv9qKtvhvDBIMWiyeitNhJ2l97NTCeHi5ILS%2BssIoMX9ohsg64%2BK8MoGbWvAsYe95NL6mxCg2bQFtQpqbOE10yN%2FW%2Fx88b7%2Fn%2B%2BsFcFQLsriKNHpvz%2BvCdnXeQgQrZZgIwP1AX%2FCLEqHmXg946eOycPNFWZFvd0wz1eCPheVMMb68rFWU3q7%2BqZrqaS0%2F%2Fy8Fw4GqNpAwiq9VPxb8LDhwUBaErSWxrylTRnIEqT6zjtaQeWptuBL1HzOsgJtGhTJplV9EVfKOOVq3gVHY1Sgblf5HkgmuhJQaevDuh0t999GJB1sl865v%2Bz755ZQvuRHqI1OT9%2F5h%2BofigJpYMPvyE9l90oLCaj2HjpRN1Wt1h4Sm6UZ4SunuUbhj0gkjRYVVJ%2FBigTyCfixxvi%2B6mNDWJygFm3%2B9TRktqQGDLWqxYMbGVO3b7gCdRRRl4dbsyfsWie3AL8hRiKlAnqkS7Grwb%2BuvjCR6YjKBjqkARw7nLXSLR0T3xYPMlFrrllboMLn7%2FiDRO7pPXQXs1EpZdY6JXI8lpRm6hdv%2FEahAJQPaQMNZyV4PWUMGqd0IrVK7CQD9CEleoARX%2BQFI9e9POrKX2kJ48jQfnTsba705Vw4GnPdL1CA9maSXzH3R%2F3D4ZkS%2Fqo0i5sAiP9AHlwAH%2BkanZz%2FXcMv2NfU%2Fow8vDEJs1ESnjoYu6SP4QWLyxWqNw5s&X-Amz-Signature=71c462085eeebd87aeab96693cdcfc0883b00a19e84ae2056697209e482afa85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CUZJDG3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNC1sa0pX6gJOESelFVJ8JUhmUAcJ7XiQKtGrqjmegQgIhAK4kb0oaSkXyo4DRjmb4Dcdbhy4U63oW28RpUUiCC%2B8zKv8DCHYQABoMNjM3NDIzMTgzODA1IgyCDuzMJfiyyNFfsf8q3ANBHKZmFewnhKkO6sATmAEfiGMr%2F32KkqXwk%2FxEZSJwv0amds2PpnzorUvuHcdnZAKWyM%2FyzGTGA7XY6QNm9OfXQ0o%2FkRFCXvRwkiBJvTw0WcLDQVmDVcRAYZB%2FJ1czqyIgn9HTByqrDGOSJBsEOKMR8GjL3wqNN28DNv9qKtvhvDBIMWiyeitNhJ2l97NTCeHi5ILS%2BssIoMX9ohsg64%2BK8MoGbWvAsYe95NL6mxCg2bQFtQpqbOE10yN%2FW%2Fx88b7%2Fn%2B%2BsFcFQLsriKNHpvz%2BvCdnXeQgQrZZgIwP1AX%2FCLEqHmXg946eOycPNFWZFvd0wz1eCPheVMMb68rFWU3q7%2BqZrqaS0%2F%2Fy8Fw4GqNpAwiq9VPxb8LDhwUBaErSWxrylTRnIEqT6zjtaQeWptuBL1HzOsgJtGhTJplV9EVfKOOVq3gVHY1Sgblf5HkgmuhJQaevDuh0t999GJB1sl865v%2Bz755ZQvuRHqI1OT9%2F5h%2BofigJpYMPvyE9l90oLCaj2HjpRN1Wt1h4Sm6UZ4SunuUbhj0gkjRYVVJ%2FBigTyCfixxvi%2B6mNDWJygFm3%2B9TRktqQGDLWqxYMbGVO3b7gCdRRRl4dbsyfsWie3AL8hRiKlAnqkS7Grwb%2BuvjCR6YjKBjqkARw7nLXSLR0T3xYPMlFrrllboMLn7%2FiDRO7pPXQXs1EpZdY6JXI8lpRm6hdv%2FEahAJQPaQMNZyV4PWUMGqd0IrVK7CQD9CEleoARX%2BQFI9e9POrKX2kJ48jQfnTsba705Vw4GnPdL1CA9maSXzH3R%2F3D4ZkS%2Fqo0i5sAiP9AHlwAH%2BkanZz%2FXcMv2NfU%2Fow8vDEJs1ESnjoYu6SP4QWLyxWqNw5s&X-Amz-Signature=a30db985bc0ef8d44c7dee65fc67e73e42a5e938b820685a4d85f9d0d6c5a6bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

