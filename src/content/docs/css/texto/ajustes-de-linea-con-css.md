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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672AZSNFK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAw%2FwQ%2B6YUW76I%2BxQDVzFbbwgpq1nc068L%2BAAO%2FxP%2Ft4AiEA1hge%2BDVmXYXDi1m%2FRQmW1dbOrGyCFlpCndXg6%2Ba34tgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMG67ef9Hi6o4sbCDCrcA56VfHmEcZNJX0Qx0W%2FXBGDtvuARlwYe2ItfvJwfd6IBIkdL%2BElW0ez1P26sGbk964n5imJ8fMgVKsmQBrd02dBZEtY0gLXRGDbKQmwQO6ikrC89inSLpTbXIn0WzxLkxppQSQnMuRR5gZLHxsZOtM4SZ5PaRY1t5jc7sh5Orh9krzX1hGcy55nDSd8sfZeVB4%2Bvds4yXYsjU4Zp6rixA7j2YjeRqHF5IS%2FMtXx6Iw%2BOgeRYVsZwLIEc%2Bk9%2BIDcsDM%2Fb%2BFaH5yBGIjJYE8uo2zpTh3O1M57krGZuR7b4eh7bfwHbLnCSbmWTZXdvcRYS7CVddIBvHNohHADBeC5ixqd%2BwJD3K4ILaRIRsumWdhzGx76GSMTaziW4RU5lpFDDey6W1Mm9GoTCKZic9bJHeViCeE3xe7%2BJUCBLhq7SWGMigwgaz1%2BABSHxTEyDGFar4Lcra6AOUwkm%2BeX6J3CERtAS9XkNsDJ8p0HdrFicfUdPWiO1DxdrmajqZQqbO1gLuRnAQe%2B7x%2FFz0hLfURV2ddtuoTsTonvCNjpysY7TZwxp430QobowMb5K33aEng9c6%2BJpa6VKonly5rZMYgwUrQ9advKTLUxw%2FI5uHYd5LPNB%2BJBItc2zPno5ueMXMKiujMoGOqUB69IgPk9KbI9XhBd8tmMSPFb7ykIXO%2BFIyCV6qp1MndUkM60pMzuQkY459eoBevH4wiloh%2FMK5Ye6aerJa0JkSuFyCBIdqUe3tU0iUoGop9ufMxp9d8P34QJH%2Fw97KL2P0Q7JPqC8vXfnH58Viy0xRU1cedB2vhDrWbKRD4x4cR7CWpZdb%2FI3UUvctzwPi1C%2FjwSpXjWD56ratSDWFx0iHa32PQPy&X-Amz-Signature=4fb87d614fdce318148cb81adb7646197c2b9af95f4a64edd6c4dc6c8c3a0a8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672AZSNFK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAw%2FwQ%2B6YUW76I%2BxQDVzFbbwgpq1nc068L%2BAAO%2FxP%2Ft4AiEA1hge%2BDVmXYXDi1m%2FRQmW1dbOrGyCFlpCndXg6%2Ba34tgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMG67ef9Hi6o4sbCDCrcA56VfHmEcZNJX0Qx0W%2FXBGDtvuARlwYe2ItfvJwfd6IBIkdL%2BElW0ez1P26sGbk964n5imJ8fMgVKsmQBrd02dBZEtY0gLXRGDbKQmwQO6ikrC89inSLpTbXIn0WzxLkxppQSQnMuRR5gZLHxsZOtM4SZ5PaRY1t5jc7sh5Orh9krzX1hGcy55nDSd8sfZeVB4%2Bvds4yXYsjU4Zp6rixA7j2YjeRqHF5IS%2FMtXx6Iw%2BOgeRYVsZwLIEc%2Bk9%2BIDcsDM%2Fb%2BFaH5yBGIjJYE8uo2zpTh3O1M57krGZuR7b4eh7bfwHbLnCSbmWTZXdvcRYS7CVddIBvHNohHADBeC5ixqd%2BwJD3K4ILaRIRsumWdhzGx76GSMTaziW4RU5lpFDDey6W1Mm9GoTCKZic9bJHeViCeE3xe7%2BJUCBLhq7SWGMigwgaz1%2BABSHxTEyDGFar4Lcra6AOUwkm%2BeX6J3CERtAS9XkNsDJ8p0HdrFicfUdPWiO1DxdrmajqZQqbO1gLuRnAQe%2B7x%2FFz0hLfURV2ddtuoTsTonvCNjpysY7TZwxp430QobowMb5K33aEng9c6%2BJpa6VKonly5rZMYgwUrQ9advKTLUxw%2FI5uHYd5LPNB%2BJBItc2zPno5ueMXMKiujMoGOqUB69IgPk9KbI9XhBd8tmMSPFb7ykIXO%2BFIyCV6qp1MndUkM60pMzuQkY459eoBevH4wiloh%2FMK5Ye6aerJa0JkSuFyCBIdqUe3tU0iUoGop9ufMxp9d8P34QJH%2Fw97KL2P0Q7JPqC8vXfnH58Viy0xRU1cedB2vhDrWbKRD4x4cR7CWpZdb%2FI3UUvctzwPi1C%2FjwSpXjWD56ratSDWFx0iHa32PQPy&X-Amz-Signature=11a3cf2d61ac6ec8d44221332e55bff1357c99ecc36859a1cd0580de85c1187c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

