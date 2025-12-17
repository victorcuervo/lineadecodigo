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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEOGMZ6K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6lbz9%2BO0zhAxCHE%2FlHaq3Q%2BneCbLqWp%2F0rKvLBnPo2AiALH6N%2FJE5a9gVJCpC10%2FkvGEX5GFDWWQguPIrjkbp4kiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fiha55YTa6VzeViPKtwDU%2B1ZxTxtKO9Uj56IXQyBsMB0xcypcoXvCufalYMyZ9MT7itZi6IvBlbtqal0w2YtP3M0A9FpbuHOXrRLSE1G3pBZrTFtnD%2FMSKbZjDqz7xbzqv2NFw9C5%2BCIQVc%2FKX9c5k61MULLeLN8HNlVQSlbzyH5785H6nR%2FOJQEq3nbnpTFgLwqK2Q2ypbB3pAhI9UEYAzkcpx6G6YgJwImH2YtVGWR0YGu%2BmigTX6RXwsaC3dDXmGdtsAk8TkUIhOqqt3BVFTnKI7su3nDeORyK6FDjJTj6caoHwRWGlc31%2FPcZ%2Fwmbhw%2FIZ0%2BmcmIpWlP5gcJG5sMJlFw%2BFncOt4IykQAIQYI7Ce%2B8aO1RmUv2Pj29qjuPgYLX8oP0p%2BtRWqHhofIi20dIboGTxrskkJblDbcuWZe3UR%2B%2F0DCCiifiXWB0oYzZZcxvi2MRckrj%2BEiq5obXBmDt4iHbyj%2BI5Z0NfhXp%2BFjle6UvWl%2FII5tZylA4eb6EusKq97dxanOYjAbcOhlXQlGz3kEI%2F4xSJRF4sYYysjp1CbMhg906gnxF2XXFLZUfxKpItztligMbLhEYo42E2rrQTvZXIZlpxdilQ0uYk%2BzjA%2BpcKK14xHg2Z9%2FmgqV09SSsa1jGnr4eWIw256LygY6pgEqn4LfY4ZatQFFil4079mAIwhY38hnCOJqV6vkrbEL0B3YU%2BcPwTxa64proKWbfHvemZ3DhT9yU3RNJMUncBc56%2Fa1GX0cUgrYEh%2FALt6AznJnpupJ1la9U%2F0EkjmktlSLaXv5amdyDoBqlEhBE7%2Fr2P378s%2FY0Cu8G%2BbL6C6mbhIbRnI3RuHnx%2BDmPsQshhr9o%2FPYZIO9C8jWddjNPvIOJRysFYUH&X-Amz-Signature=9c1ff5c906d492b0a5bf94f34f8d1b0bf4f763806ce7c8a0e113217ff8c0bc78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEOGMZ6K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6lbz9%2BO0zhAxCHE%2FlHaq3Q%2BneCbLqWp%2F0rKvLBnPo2AiALH6N%2FJE5a9gVJCpC10%2FkvGEX5GFDWWQguPIrjkbp4kiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fiha55YTa6VzeViPKtwDU%2B1ZxTxtKO9Uj56IXQyBsMB0xcypcoXvCufalYMyZ9MT7itZi6IvBlbtqal0w2YtP3M0A9FpbuHOXrRLSE1G3pBZrTFtnD%2FMSKbZjDqz7xbzqv2NFw9C5%2BCIQVc%2FKX9c5k61MULLeLN8HNlVQSlbzyH5785H6nR%2FOJQEq3nbnpTFgLwqK2Q2ypbB3pAhI9UEYAzkcpx6G6YgJwImH2YtVGWR0YGu%2BmigTX6RXwsaC3dDXmGdtsAk8TkUIhOqqt3BVFTnKI7su3nDeORyK6FDjJTj6caoHwRWGlc31%2FPcZ%2Fwmbhw%2FIZ0%2BmcmIpWlP5gcJG5sMJlFw%2BFncOt4IykQAIQYI7Ce%2B8aO1RmUv2Pj29qjuPgYLX8oP0p%2BtRWqHhofIi20dIboGTxrskkJblDbcuWZe3UR%2B%2F0DCCiifiXWB0oYzZZcxvi2MRckrj%2BEiq5obXBmDt4iHbyj%2BI5Z0NfhXp%2BFjle6UvWl%2FII5tZylA4eb6EusKq97dxanOYjAbcOhlXQlGz3kEI%2F4xSJRF4sYYysjp1CbMhg906gnxF2XXFLZUfxKpItztligMbLhEYo42E2rrQTvZXIZlpxdilQ0uYk%2BzjA%2BpcKK14xHg2Z9%2FmgqV09SSsa1jGnr4eWIw256LygY6pgEqn4LfY4ZatQFFil4079mAIwhY38hnCOJqV6vkrbEL0B3YU%2BcPwTxa64proKWbfHvemZ3DhT9yU3RNJMUncBc56%2Fa1GX0cUgrYEh%2FALt6AznJnpupJ1la9U%2F0EkjmktlSLaXv5amdyDoBqlEhBE7%2Fr2P378s%2FY0Cu8G%2BbL6C6mbhIbRnI3RuHnx%2BDmPsQshhr9o%2FPYZIO9C8jWddjNPvIOJRysFYUH&X-Amz-Signature=acaa5b6f6b9b1b68c2d17cbe1ce1ccdc7c018404a1f2edde23f5e97f4ba54828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

