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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PEV74NQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG8X9rsWTpw1g6tRnB%2FqDyBJTZgGUDMsi2YBDqGmAxTAiBCLCLuJYwBIoOxT4opceOevDOvA3nmzyZiseeM%2BGOKySr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMTxdH7AD0LsU4TVYWKtwDVhTrI8Qce4SW3m0dmHwcxI6y3IH21Wbhoh66Xld7p8bZ%2FCx%2FwkLOVuSH2wgZyDUpnz5ze7FqUbkJ2e%2BZ6rOspwitecolgMwB28KeoAeO2wTI2hepmkMKcdkvqJE28so5XHKqa%2F6k9bthbIXxSvMgTcN%2FxhyNttZrZpnt2yPsF%2FBBUiwCAPR9%2BCothjBfDAv45qIpDUsAcgUy8IX7ElWSGFilqHeAuG2RQksfi591KOlFugwUB3wHnDVDuKMtyNsukhCEakww8AEowtIsjYTHr52BBlYDIyN%2Fr8Foq8RvmWiP0kKiF15ylcEdN39OOyQtUSeUcLwUEk3D93TsHV2TbtIV4w7u1WkoLuFrQIZJ0NoRq3934od%2FxupKP%2BgWA5inR%2FsK1oPLSbN9waUYAniGjn3W0vH1qv8kYIHS8Td%2B9CRg3gvdjqZVNrTeL2z5sCvKBfrrChXFt3nqdJa6HQxq0FwLeVtuqOBKguyrD59kKi7Is%2FNKg7aSFxEuKsjJQodHngxanGKvQR%2BpCn1Yx2xpYZe1R90Ms3RS8oJWKb8lW0MtMAhksRFdyhcUmsOMMX8KlntlskNGK4RKEWNRkM%2FbvsKUrQUsRBv%2B7ycRR9tIF93q0MCR9jXKDNjBBRYwj7iJygY6pgE%2FrZBTHjTaQgH7RDZIwo9Y6N3dZP6eJFbMa1Nt8RALS8g0vHHemQHeBYJP2LxeVGKOrXDgum%2FK9e1rCAJJWbSKtV%2Bru27H5p4HjrU%2BWN3gCMADz031NvvO2pwCXT9WtWtAN1%2B0IsMTiIAuPwbWXoS2jTeshgC4ShC9Mr28JsrqB4yytuEYq7Q2s6UsqBEzplBTHt1KrbFo4T0ZH1NhU8cKJQADK%2BM0&X-Amz-Signature=859c4d90e52bc5dac2f0320905a58ee9f1791390ab59f1d623b9e07beff927d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PEV74NQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG8X9rsWTpw1g6tRnB%2FqDyBJTZgGUDMsi2YBDqGmAxTAiBCLCLuJYwBIoOxT4opceOevDOvA3nmzyZiseeM%2BGOKySr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMTxdH7AD0LsU4TVYWKtwDVhTrI8Qce4SW3m0dmHwcxI6y3IH21Wbhoh66Xld7p8bZ%2FCx%2FwkLOVuSH2wgZyDUpnz5ze7FqUbkJ2e%2BZ6rOspwitecolgMwB28KeoAeO2wTI2hepmkMKcdkvqJE28so5XHKqa%2F6k9bthbIXxSvMgTcN%2FxhyNttZrZpnt2yPsF%2FBBUiwCAPR9%2BCothjBfDAv45qIpDUsAcgUy8IX7ElWSGFilqHeAuG2RQksfi591KOlFugwUB3wHnDVDuKMtyNsukhCEakww8AEowtIsjYTHr52BBlYDIyN%2Fr8Foq8RvmWiP0kKiF15ylcEdN39OOyQtUSeUcLwUEk3D93TsHV2TbtIV4w7u1WkoLuFrQIZJ0NoRq3934od%2FxupKP%2BgWA5inR%2FsK1oPLSbN9waUYAniGjn3W0vH1qv8kYIHS8Td%2B9CRg3gvdjqZVNrTeL2z5sCvKBfrrChXFt3nqdJa6HQxq0FwLeVtuqOBKguyrD59kKi7Is%2FNKg7aSFxEuKsjJQodHngxanGKvQR%2BpCn1Yx2xpYZe1R90Ms3RS8oJWKb8lW0MtMAhksRFdyhcUmsOMMX8KlntlskNGK4RKEWNRkM%2FbvsKUrQUsRBv%2B7ycRR9tIF93q0MCR9jXKDNjBBRYwj7iJygY6pgE%2FrZBTHjTaQgH7RDZIwo9Y6N3dZP6eJFbMa1Nt8RALS8g0vHHemQHeBYJP2LxeVGKOrXDgum%2FK9e1rCAJJWbSKtV%2Bru27H5p4HjrU%2BWN3gCMADz031NvvO2pwCXT9WtWtAN1%2B0IsMTiIAuPwbWXoS2jTeshgC4ShC9Mr28JsrqB4yytuEYq7Q2s6UsqBEzplBTHt1KrbFo4T0ZH1NhU8cKJQADK%2BM0&X-Amz-Signature=bca1e6445401875c2b07cfe2f0853dcace8f0514c03fc6fada7de72d59be2962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

