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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z2ED3PL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8SrTwtDQI0cFK9XoypoMFKH1jHqn8Yzt3Xl3kT972zAiEApMyGtAO%2FXGLk1jFa%2BUw5UkUCqW78Jjc5BSB0IPQBjSwq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOT5ESw%2FLcitg43d6yrcAwa7MgeLuy07rkuZ0gabI8qqfIv6wxueLaRkLsQcoQzE4o9BOZdFmwlewjwv4AU4Tx7jPPD%2B%2FQGqT7F2LSIkUGNFzPPJOsKqVJ%2FGOKtayUiQ%2FknTjfmvQpwBmSSL9BGWtCX7W54RIhTp2Vz0d%2BQe127e3XRys2egdTCYeMYVPVXw7nl1c33cfF5hwwwUnLkOn6XrXTnAbvUxnac9084lzgy2%2BVbHntofD0ISjhW7s77a2ES3CrJ%2FbSE9ls5hNrAbo3gefjy7FeX8eARhZExaWHNbpnTeSPz6%2B%2B21GzyxI9xUEFeQOboI5%2FWQB3Gkyuoj1AiBRkPMbmTEp37825zZTtUfjSDQD%2BD6LxbFItisSYPdJn3braRGTDrqSu7KnxrLX%2FApVnbslrmVLd1kQWgdEbRed6EQoZ7AgvCkAdu2G9MpZeLfnQLPocSD9tT6rmbyoFEzLPJJD2%2BBpZzQao%2Bt9By8Ji1Sfme6JQd34BLHLUEfIgiYyvMAUGHDOan9Wofyeq1oGkwCyM4lcuPxkcCQKXQzcOL8Qp0fJ8ZnMPgn1E7ST4mtF91WhQd%2F9bn4cQ7uCjjaz%2BywmuSDOWktbjOuDNqMZ89YwRe%2FALHvG4D0F2vnjRyWPw7RGpbsdUiDMOaWiMoGOqUBuzeUFuNFPpE5L0HJN3XC4nPeaMTcu0uSriogRLOpNYFC1L6Rfx010EasL1U81hL9YtBRO79Vbp9gy27j6iQxA4VgK9BIKHckwUtvlJe4aCmCTS58RSgXt8X9JVaRK%2BnOGlZBnIi628J1L0C0mkwE%2B82S2PMaSOf2CpXH2ID7avePZMQVJ9pjN84uQfjEPGcg4fzi0ZFDxhB%2B3cW1zafLcR%2FMOt72&X-Amz-Signature=c653a1b39e133ddf449487d4c5c7d00c7207656c6b66747bc66702d2d66bf593&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z2ED3PL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA8SrTwtDQI0cFK9XoypoMFKH1jHqn8Yzt3Xl3kT972zAiEApMyGtAO%2FXGLk1jFa%2BUw5UkUCqW78Jjc5BSB0IPQBjSwq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOT5ESw%2FLcitg43d6yrcAwa7MgeLuy07rkuZ0gabI8qqfIv6wxueLaRkLsQcoQzE4o9BOZdFmwlewjwv4AU4Tx7jPPD%2B%2FQGqT7F2LSIkUGNFzPPJOsKqVJ%2FGOKtayUiQ%2FknTjfmvQpwBmSSL9BGWtCX7W54RIhTp2Vz0d%2BQe127e3XRys2egdTCYeMYVPVXw7nl1c33cfF5hwwwUnLkOn6XrXTnAbvUxnac9084lzgy2%2BVbHntofD0ISjhW7s77a2ES3CrJ%2FbSE9ls5hNrAbo3gefjy7FeX8eARhZExaWHNbpnTeSPz6%2B%2B21GzyxI9xUEFeQOboI5%2FWQB3Gkyuoj1AiBRkPMbmTEp37825zZTtUfjSDQD%2BD6LxbFItisSYPdJn3braRGTDrqSu7KnxrLX%2FApVnbslrmVLd1kQWgdEbRed6EQoZ7AgvCkAdu2G9MpZeLfnQLPocSD9tT6rmbyoFEzLPJJD2%2BBpZzQao%2Bt9By8Ji1Sfme6JQd34BLHLUEfIgiYyvMAUGHDOan9Wofyeq1oGkwCyM4lcuPxkcCQKXQzcOL8Qp0fJ8ZnMPgn1E7ST4mtF91WhQd%2F9bn4cQ7uCjjaz%2BywmuSDOWktbjOuDNqMZ89YwRe%2FALHvG4D0F2vnjRyWPw7RGpbsdUiDMOaWiMoGOqUBuzeUFuNFPpE5L0HJN3XC4nPeaMTcu0uSriogRLOpNYFC1L6Rfx010EasL1U81hL9YtBRO79Vbp9gy27j6iQxA4VgK9BIKHckwUtvlJe4aCmCTS58RSgXt8X9JVaRK%2BnOGlZBnIi628J1L0C0mkwE%2B82S2PMaSOf2CpXH2ID7avePZMQVJ9pjN84uQfjEPGcg4fzi0ZFDxhB%2B3cW1zafLcR%2FMOt72&X-Amz-Signature=87aa27fa28fc75cb7a50cabb866e92a9e74b8d0be23f78e88e7ddf72fa1109b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

