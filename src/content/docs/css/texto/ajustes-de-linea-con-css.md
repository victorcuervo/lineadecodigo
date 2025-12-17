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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MSKPZHE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8nBnSurz7ftk8S%2F9e3Sz%2BUHTAMiAJfWHET8lgHebz7AiA4X6FAIX2qX9oCeoLTEBi%2BesMHw7mDjlBuhv7p%2FA2Opir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMo7Uzkc2ayjRgScW6KtwD0igryk1M48%2BoNagDliq49UhxUDfjlbaMAAoj%2F9CbYZObsUGSYQZ3%2BJmpM3vVUqRp4V3Jr%2Fdh1v8%2Fd7ktHk21PNXs9glYYJWVjrZgoMgSPiZIeQa6eer9%2BgT5iLxCshTs%2F7vDzxP1N48W0ktVNRLRc%2B3kXozmu%2BxuDszalXvrzEtlIO55IDkujq27ioTZmV1NYnthuC1o4XiSGd%2FU%2FuMOchS4n5Pe%2FPF34LfD1o3dSY6KTYJJfMLQ65pzv46eFayGgzp0HdmlWy4ujjLtCFxpkeFCibNu0nNHt0YSsAjc6ZWnX3kEM%2B1MJ9Ua%2F%2FYvgL6ygqQzjkFLFiwKi3e7u8E8uQj%2F0i2yaP9sutxOgjxxQlq9SnfUgVehiIi3jKGFBfCWIqApBXtO4QmenUWIlHLfIfriD5LbVfQS037Gx2cDAOFaxx5WaHTXRH9rGdaPYYPt8ZpW8vtjUgIHV9qqLI342hssc1bhWGk3at%2BHj%2FS5731DNA5aZkP6yfvg3EixgY1QKaaOUS9knFiZvih2JOE82hFyEnjdAGgiX3Cj%2BcDAPtN7zvistc%2Fh%2B%2FyzmxA4YGJT%2BLgX8ei92uMAJLmJ15VqGaILwI9QKtosc1%2B1xf5q7oJck3zHi2u3MGe1w48wnu%2BJygY6pgGqSYraksCSGwnX8dTRIsf6FfPgG4Ce2oYj2d7eSQAfRi9ElOi8vnnRNYKSkQVvvlkfaRZLkN3f0Ci7BikksCgI5UarZ44YpSokEOFzCoVRJeRGwdwymJk8lLZfGoaiLRpWDSUKoH1XVlJUE24BrS%2BunTgK%2BB5WfvI8QM%2B2ZDvMY8NKcpA5mjW4an4EmdyRdUc6hQlE8vAG%2BpMzcA5%2BLKJFSgQNR5bt&X-Amz-Signature=491ff14366f5cc699074b3148dcdd7df6dd528d0a921bb19e45ad5ceadccc86b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MSKPZHE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID8nBnSurz7ftk8S%2F9e3Sz%2BUHTAMiAJfWHET8lgHebz7AiA4X6FAIX2qX9oCeoLTEBi%2BesMHw7mDjlBuhv7p%2FA2Opir%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMo7Uzkc2ayjRgScW6KtwD0igryk1M48%2BoNagDliq49UhxUDfjlbaMAAoj%2F9CbYZObsUGSYQZ3%2BJmpM3vVUqRp4V3Jr%2Fdh1v8%2Fd7ktHk21PNXs9glYYJWVjrZgoMgSPiZIeQa6eer9%2BgT5iLxCshTs%2F7vDzxP1N48W0ktVNRLRc%2B3kXozmu%2BxuDszalXvrzEtlIO55IDkujq27ioTZmV1NYnthuC1o4XiSGd%2FU%2FuMOchS4n5Pe%2FPF34LfD1o3dSY6KTYJJfMLQ65pzv46eFayGgzp0HdmlWy4ujjLtCFxpkeFCibNu0nNHt0YSsAjc6ZWnX3kEM%2B1MJ9Ua%2F%2FYvgL6ygqQzjkFLFiwKi3e7u8E8uQj%2F0i2yaP9sutxOgjxxQlq9SnfUgVehiIi3jKGFBfCWIqApBXtO4QmenUWIlHLfIfriD5LbVfQS037Gx2cDAOFaxx5WaHTXRH9rGdaPYYPt8ZpW8vtjUgIHV9qqLI342hssc1bhWGk3at%2BHj%2FS5731DNA5aZkP6yfvg3EixgY1QKaaOUS9knFiZvih2JOE82hFyEnjdAGgiX3Cj%2BcDAPtN7zvistc%2Fh%2B%2FyzmxA4YGJT%2BLgX8ei92uMAJLmJ15VqGaILwI9QKtosc1%2B1xf5q7oJck3zHi2u3MGe1w48wnu%2BJygY6pgGqSYraksCSGwnX8dTRIsf6FfPgG4Ce2oYj2d7eSQAfRi9ElOi8vnnRNYKSkQVvvlkfaRZLkN3f0Ci7BikksCgI5UarZ44YpSokEOFzCoVRJeRGwdwymJk8lLZfGoaiLRpWDSUKoH1XVlJUE24BrS%2BunTgK%2BB5WfvI8QM%2B2ZDvMY8NKcpA5mjW4an4EmdyRdUc6hQlE8vAG%2BpMzcA5%2BLKJFSgQNR5bt&X-Amz-Signature=4afe96d4c6440cab0bf5323f726253f16efc0dd089f9d834cdd370ff7cbe4184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

