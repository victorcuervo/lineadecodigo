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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOB5FNZB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzjj5mp%2FPzpLXc4G6Dw941J16H%2FMCcrHsEDn%2BKUBCF9AiBWI4cVGvBPktM70WHmbKjIKStFaM11TRB%2F%2FUbZV%2B%2F2Ayr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMTIoeKNOqT6k9886PKtwD2YdsbeIXzfD%2FrhnE%2Fi4038rD7B33CxVGpFooU5%2Fe4TMEsfFUabpIwGZYDTE012WtciVMhZj2snyZKQTxIMTTlk5jE6KiruWso3EgW721w%2FaNIxtRvOqV11uFLXe%2FZwd9NoECE20dcta6Jh1EnyYrD4HVSYRMUO%2BDz3FTfXHs%2BRtH37EonWwsozjq2ekP6GfDGIgUjY5I6e2Ttp5r%2F6RjwcpppKme413ABx7xBJIvXgJrEOUu5irIXlMf3jKRbEFM%2Bu0soYgKi21%2FVgwp9SJvw%2BKFpvWrdGH%2Frj0uIQXA8Dq7kyoSANi1dqWEpYPP6B2QCN2eKQSuR606DbBK13gvetxiUziTbveSatisTNvE81Sz9HJmxgJwmczGa%2BDTQaLw%2FovgiRi6AE3dNL9X9Or1LcPVnYs9jCF3xKAM9x5LoTOBFCdKeDFq2INDn5t8dXiNAxU9J0MeQ7zoIEpnK0HXworCmb6ggyDx7dsSHJ74kdZ2S2tSkt41ccGYirKFMdIoWNa9F8ceu2jrsX9GRww8l%2Bwe%2FuLEbq6nbaPcWOpCIhffQBTX%2BMl9NIQDCehLet9taEEPrqoGf4MOLyPrRkCDrksRTl4JXcjjjSHxuR3Dpl7k8tJ5MnSQP3M%2Fd6YwteGKygY6pgGhYNict81ytF2jPx0TdVBVGeSbtTifi0kCckrLyDIrU4eLoHq25VNFi3sPLMSn3GF3YzQl9vUNz0Xx0Pqwvrz%2FzVAleR26vQvMVg20Vytn8cnfcQSWPv6oercZoI9JVpExZaXRnn%2BeiPdX86X34VLW2q1wEYpleprIPI9cPjoFO85udOw%2BOEvTZYoP7Ib4Ys1eOFzlowBfZzTWU5m%2BDulCERmFSS%2B1&X-Amz-Signature=3e09bb9da5b380fb76786838f0345af1968f7c742fec1eddc0fd7570d54909d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOB5FNZB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzjj5mp%2FPzpLXc4G6Dw941J16H%2FMCcrHsEDn%2BKUBCF9AiBWI4cVGvBPktM70WHmbKjIKStFaM11TRB%2F%2FUbZV%2B%2F2Ayr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMTIoeKNOqT6k9886PKtwD2YdsbeIXzfD%2FrhnE%2Fi4038rD7B33CxVGpFooU5%2Fe4TMEsfFUabpIwGZYDTE012WtciVMhZj2snyZKQTxIMTTlk5jE6KiruWso3EgW721w%2FaNIxtRvOqV11uFLXe%2FZwd9NoECE20dcta6Jh1EnyYrD4HVSYRMUO%2BDz3FTfXHs%2BRtH37EonWwsozjq2ekP6GfDGIgUjY5I6e2Ttp5r%2F6RjwcpppKme413ABx7xBJIvXgJrEOUu5irIXlMf3jKRbEFM%2Bu0soYgKi21%2FVgwp9SJvw%2BKFpvWrdGH%2Frj0uIQXA8Dq7kyoSANi1dqWEpYPP6B2QCN2eKQSuR606DbBK13gvetxiUziTbveSatisTNvE81Sz9HJmxgJwmczGa%2BDTQaLw%2FovgiRi6AE3dNL9X9Or1LcPVnYs9jCF3xKAM9x5LoTOBFCdKeDFq2INDn5t8dXiNAxU9J0MeQ7zoIEpnK0HXworCmb6ggyDx7dsSHJ74kdZ2S2tSkt41ccGYirKFMdIoWNa9F8ceu2jrsX9GRww8l%2Bwe%2FuLEbq6nbaPcWOpCIhffQBTX%2BMl9NIQDCehLet9taEEPrqoGf4MOLyPrRkCDrksRTl4JXcjjjSHxuR3Dpl7k8tJ5MnSQP3M%2Fd6YwteGKygY6pgGhYNict81ytF2jPx0TdVBVGeSbtTifi0kCckrLyDIrU4eLoHq25VNFi3sPLMSn3GF3YzQl9vUNz0Xx0Pqwvrz%2FzVAleR26vQvMVg20Vytn8cnfcQSWPv6oercZoI9JVpExZaXRnn%2BeiPdX86X34VLW2q1wEYpleprIPI9cPjoFO85udOw%2BOEvTZYoP7Ib4Ys1eOFzlowBfZzTWU5m%2BDulCERmFSS%2B1&X-Amz-Signature=84f3aa969ad13953e9fce9c4250a306da1b5cdb5c8a58c1aaea050450af684f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

