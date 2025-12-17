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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7CXU5C4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfEGczhYB2zIJvnelYNhAxl7M22JJbSW2qvfcmZ2dY2AiALey7hObgTqJwuuAwn5UPATneQAG4u0Zxp7%2FjZYj4TZyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMogWwNK6x42p8TV1xKtwDhFPkL0D224EEacrX9qpLv8uDFCFo5OCbGAzI5NWkigFKtQd6GhU0ENSeQum%2BpjKwmbn%2F3V7AM6uCkX4cgB6lTX9KC126PuuDVF9eqNzY0Ngt3PD03FRKWXyhCi8DUc%2BmUTr5zSuKIj3qBRRiR4CCFvC%2BYY3HB%2F72GZ0OL%2F6fBnZuPVYPedQq0rnjFDalB3Cgh27lnVE3oimgN4NQuHYolZYLEX2168D4qQnEWx4Lnhv1gd6x8Ed8LEt5KmsLfOU4RIwJxtY2HYO1xFvelXOHiN0MT9YOrjHKPGIKlGA67fRj01t8UZOYe4ZwLrxyZN9EgTroBDc74q2qNfjCKOINTYXnYVJQWrFRq%2Bs%2BWGIbGTBnd6gT7T2Sgv2A6DCMUEhA4Qt8kkVX1zuzO73BwEptNrF%2BPk4%2FcpNQWvXHSqff5mbdRqQor0iTVYnRYhTCubIKJO4LOMb%2BFBydrF8X6yValsaiANCvuo63sYhZM8mCei7VpakucLjnUVU00K2o254ULzNuMnQ2CcJMqFlK7lT%2B1uEExT%2FdAVdbKIl78MAQAsX4RXYttG2PQrReNWpvDslaWg7QT%2B2P5AxSeCoHCNfuTwkF4gt1yXny2I6KLR49YNc%2FNt3zn%2FLCKF8PGpYwyJWIygY6pgFh%2BfrYcTaxwAkMg%2BdhIPdC2fzWpgUBgeyrfyQ3E%2FmBrdnnK1NBzFsUkEh5G2PKGdWYF8vvqg9wA62y1qFIdr7ZQeP0S6VBGXvWes3%2FLXEO1rwkYHFycWU56E9wWFPeL6Gu98%2Be16jQ%2B8ezlsE%2B0V24j13bMLWZfEE0OnUM5gsswD1C9GCr2CDR9GFWx4wyHTa%2FqVb6bEFJF1fXo4FISDEX0k2b37e%2B&X-Amz-Signature=441aa77ee5c0b661b139b1a3c434f2b0fad534bded5c0c028db03d2400185aa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7CXU5C4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfEGczhYB2zIJvnelYNhAxl7M22JJbSW2qvfcmZ2dY2AiALey7hObgTqJwuuAwn5UPATneQAG4u0Zxp7%2FjZYj4TZyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMogWwNK6x42p8TV1xKtwDhFPkL0D224EEacrX9qpLv8uDFCFo5OCbGAzI5NWkigFKtQd6GhU0ENSeQum%2BpjKwmbn%2F3V7AM6uCkX4cgB6lTX9KC126PuuDVF9eqNzY0Ngt3PD03FRKWXyhCi8DUc%2BmUTr5zSuKIj3qBRRiR4CCFvC%2BYY3HB%2F72GZ0OL%2F6fBnZuPVYPedQq0rnjFDalB3Cgh27lnVE3oimgN4NQuHYolZYLEX2168D4qQnEWx4Lnhv1gd6x8Ed8LEt5KmsLfOU4RIwJxtY2HYO1xFvelXOHiN0MT9YOrjHKPGIKlGA67fRj01t8UZOYe4ZwLrxyZN9EgTroBDc74q2qNfjCKOINTYXnYVJQWrFRq%2Bs%2BWGIbGTBnd6gT7T2Sgv2A6DCMUEhA4Qt8kkVX1zuzO73BwEptNrF%2BPk4%2FcpNQWvXHSqff5mbdRqQor0iTVYnRYhTCubIKJO4LOMb%2BFBydrF8X6yValsaiANCvuo63sYhZM8mCei7VpakucLjnUVU00K2o254ULzNuMnQ2CcJMqFlK7lT%2B1uEExT%2FdAVdbKIl78MAQAsX4RXYttG2PQrReNWpvDslaWg7QT%2B2P5AxSeCoHCNfuTwkF4gt1yXny2I6KLR49YNc%2FNt3zn%2FLCKF8PGpYwyJWIygY6pgFh%2BfrYcTaxwAkMg%2BdhIPdC2fzWpgUBgeyrfyQ3E%2FmBrdnnK1NBzFsUkEh5G2PKGdWYF8vvqg9wA62y1qFIdr7ZQeP0S6VBGXvWes3%2FLXEO1rwkYHFycWU56E9wWFPeL6Gu98%2Be16jQ%2B8ezlsE%2B0V24j13bMLWZfEE0OnUM5gsswD1C9GCr2CDR9GFWx4wyHTa%2FqVb6bEFJF1fXo4FISDEX0k2b37e%2B&X-Amz-Signature=807d6f77b5804c66936d4aa2f1b5974c2e6e58bdda2d9f8a724f6e9c2413256c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

