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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVJQ4VI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2sq%2FtdOSvQhoPBTgs5FXjI6H8gBUJA8AV9FPcW5HF1AiEAmGGf6AFnjOok8o78mn137GLuKEWOJtcQeIgTY%2FpTPJkqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMUE2jfVVv9NufCjyrcA20J6W5GKLkJXvyjNPs7wFOsJsgY%2FCau97GCYuB386WBeImoxgcJfxYbh8yRZjEqdw4dBN3JPWW2iMw6tL1W9a%2Bf5RQgVCOz4mHODjls2L1TRm9Q1BroQHo3Tls7PQtAO%2BACwnE5Rop1fFcJWHNbpmgH4%2B7i0lEMa6ghDSjA2G48M1snkLA4DkpcTybDTJVC4OAkO8EV%2BGP%2BWAzcjF514pQ%2BfqOMz7dvLfSsUR3axOZjrhWypWNgcjlUglbtfO4Kf5mUPRNZc8doECoW9pj%2FNhts%2BTxNu36rqi42GLX%2F2G3Dc3EH8uZDTVd7v1IWUZV43ARLJyAfjTz5dnP3OzaY12gvmTTHeHkAYzre5gfouhU%2FpcMdYIYdPcZybkNYQ%2FxOE96vz%2B%2FAMtk576h9IBgsY9c8XU6jfe%2BkrjEpPGTmM2OjPA1hc%2BJCNSCyJVPUR1vB6BIGvtftkTL5ubcDkW57oUNpn6RcrBomF9ekyFU1iXoDmC%2BWiNzscGYqnM6vsXiTMKFmGiAXMA%2FFuDzK5Yv4oRQN8LPmeyH0uthHgVgvQjwm%2FUT13Ij1RA9%2FeYcljJvjhmhAcRXxZno3y621yxnxdVrrFCrqlj7JFxTwvKxh3n9fvkzHu7lLIc4iN5cSMM2Ai8oGOqUBqE3IwlihGprPNRG79jJ5pdP7UyZ4zYT5sjJBhq1Hi%2Fm2WdxOTkIdQYSpIn2MN2yLYxl%2FpB%2BjLVz%2F2Un%2B1D18BHlcvQesL%2BJz7TDngbC6aAtnJpAeHw3wWJ2iJ6%2B4ssKfZvugqq56wCbxnk2mw%2FX2emuMhMxieyGme8AnANVDtAH3IIlSecO4pfJDVhtGuNYcUQd7w%2Bn9fv%2ByEcb%2FXdARxJVDPDiv&X-Amz-Signature=cc1a1191a0c4c2d17a9f97214b73910c838d9d0d2d7f23562fe95fd8d7895914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGVJQ4VI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2sq%2FtdOSvQhoPBTgs5FXjI6H8gBUJA8AV9FPcW5HF1AiEAmGGf6AFnjOok8o78mn137GLuKEWOJtcQeIgTY%2FpTPJkqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMUE2jfVVv9NufCjyrcA20J6W5GKLkJXvyjNPs7wFOsJsgY%2FCau97GCYuB386WBeImoxgcJfxYbh8yRZjEqdw4dBN3JPWW2iMw6tL1W9a%2Bf5RQgVCOz4mHODjls2L1TRm9Q1BroQHo3Tls7PQtAO%2BACwnE5Rop1fFcJWHNbpmgH4%2B7i0lEMa6ghDSjA2G48M1snkLA4DkpcTybDTJVC4OAkO8EV%2BGP%2BWAzcjF514pQ%2BfqOMz7dvLfSsUR3axOZjrhWypWNgcjlUglbtfO4Kf5mUPRNZc8doECoW9pj%2FNhts%2BTxNu36rqi42GLX%2F2G3Dc3EH8uZDTVd7v1IWUZV43ARLJyAfjTz5dnP3OzaY12gvmTTHeHkAYzre5gfouhU%2FpcMdYIYdPcZybkNYQ%2FxOE96vz%2B%2FAMtk576h9IBgsY9c8XU6jfe%2BkrjEpPGTmM2OjPA1hc%2BJCNSCyJVPUR1vB6BIGvtftkTL5ubcDkW57oUNpn6RcrBomF9ekyFU1iXoDmC%2BWiNzscGYqnM6vsXiTMKFmGiAXMA%2FFuDzK5Yv4oRQN8LPmeyH0uthHgVgvQjwm%2FUT13Ij1RA9%2FeYcljJvjhmhAcRXxZno3y621yxnxdVrrFCrqlj7JFxTwvKxh3n9fvkzHu7lLIc4iN5cSMM2Ai8oGOqUBqE3IwlihGprPNRG79jJ5pdP7UyZ4zYT5sjJBhq1Hi%2Fm2WdxOTkIdQYSpIn2MN2yLYxl%2FpB%2BjLVz%2F2Un%2B1D18BHlcvQesL%2BJz7TDngbC6aAtnJpAeHw3wWJ2iJ6%2B4ssKfZvugqq56wCbxnk2mw%2FX2emuMhMxieyGme8AnANVDtAH3IIlSecO4pfJDVhtGuNYcUQd7w%2Bn9fv%2ByEcb%2FXdARxJVDPDiv&X-Amz-Signature=39251d4c0d6b808777a5fb412cb0c4a44b808201a7f3ddbc6448dec4bcf35e28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

