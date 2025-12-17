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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZMIEDO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFnWanUO6la9VrpRp65M8oZdIpjHADfSsgU6O4nJckGAIgOb3e4VuA9l5X51YX%2BzB06P6kp1pZ%2Bmqa9tzjNOpVTSAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGNsmPwd2oLoHg1DnyrcA1aJlsk1%2FriYcwEZGSZXBWNPezSN43gNkhcmH%2F0%2BOKiB1sBZOYs2oAufIbTXW%2FDHQtXFv2wd%2BIa%2BMFnv6krmE0Ivue5LrNliCc%2FDQZznynN8IfBLT%2FIXbklchjwMkeORQzvlNRUT2S0cAoFEPej325kwjLVjKep8A4ya5YYaWfnRCXmMGQgBoYuK1wX%2FsdPNHRHmfzbanbEhApJ73N7a668EKyCL2xIB1Ny37UXm%2F1bsWhQ73bo7KKEcC%2B8f4hXRaQF8lAmMgefQlrXsFL6MZDZMqiC6vBSX8UILVGqJ7KRLsGPUJnLlVB691HEasmb3EudNH6m%2FtYup7FFRQMoN4CnYO1WHyptN5kVXfIAioHSNRPEgEzQY8cwLwze1%2Fls1TMFYH%2BBX5TKnfPzYGhK2DdcBwtvQrzLTSQMmBMAa1s48gFsU7fx1b34yEupcUZHaqgQNhljkrOp%2FemxPXczSdznZ4Nt838u4%2F95tTo%2BcnFCQi8kojTN25Nn42cqz71dR%2FoXd1YvrwUBvTOZMnmz01f%2BbawBUiiDBIsHb4iozDxOoXvMDqcU9j2g%2BbBt51LoEjAQjYBXPTa6%2BkKMjeflM7q4pVkjcmm5fi3F5%2ByMf0p1GMCqZaX%2F8uPsysiu%2FMKrSicoGOqUBAoI%2BJLdS4tRxN%2FZyuNfN6wURgTWg8FR9A7inG4%2BgvhGo0kD%2BeyqvachXwnNjPgR7bS8%2Fi1MMs8BZolibEYeAzsK2hrdq3EhlIgKS855znowcurhCe%2BjrYUKjJg6Ov5%2B2%2F9SUQvOohSFs%2Fn7bMukBWPQvoJBM5%2FPucwX%2B9gAY%2FA0qjidc7vGhPuVP2TLqt2jRQt94Qy4Eib%2FAUSrF5C4lAO6nCOcZ&X-Amz-Signature=476ad8ea159f1d63fb34280f035128b338180d9f2d04d8d8f760980f5d50854c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USZMIEDO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFnWanUO6la9VrpRp65M8oZdIpjHADfSsgU6O4nJckGAIgOb3e4VuA9l5X51YX%2BzB06P6kp1pZ%2Bmqa9tzjNOpVTSAq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGNsmPwd2oLoHg1DnyrcA1aJlsk1%2FriYcwEZGSZXBWNPezSN43gNkhcmH%2F0%2BOKiB1sBZOYs2oAufIbTXW%2FDHQtXFv2wd%2BIa%2BMFnv6krmE0Ivue5LrNliCc%2FDQZznynN8IfBLT%2FIXbklchjwMkeORQzvlNRUT2S0cAoFEPej325kwjLVjKep8A4ya5YYaWfnRCXmMGQgBoYuK1wX%2FsdPNHRHmfzbanbEhApJ73N7a668EKyCL2xIB1Ny37UXm%2F1bsWhQ73bo7KKEcC%2B8f4hXRaQF8lAmMgefQlrXsFL6MZDZMqiC6vBSX8UILVGqJ7KRLsGPUJnLlVB691HEasmb3EudNH6m%2FtYup7FFRQMoN4CnYO1WHyptN5kVXfIAioHSNRPEgEzQY8cwLwze1%2Fls1TMFYH%2BBX5TKnfPzYGhK2DdcBwtvQrzLTSQMmBMAa1s48gFsU7fx1b34yEupcUZHaqgQNhljkrOp%2FemxPXczSdznZ4Nt838u4%2F95tTo%2BcnFCQi8kojTN25Nn42cqz71dR%2FoXd1YvrwUBvTOZMnmz01f%2BbawBUiiDBIsHb4iozDxOoXvMDqcU9j2g%2BbBt51LoEjAQjYBXPTa6%2BkKMjeflM7q4pVkjcmm5fi3F5%2ByMf0p1GMCqZaX%2F8uPsysiu%2FMKrSicoGOqUBAoI%2BJLdS4tRxN%2FZyuNfN6wURgTWg8FR9A7inG4%2BgvhGo0kD%2BeyqvachXwnNjPgR7bS8%2Fi1MMs8BZolibEYeAzsK2hrdq3EhlIgKS855znowcurhCe%2BjrYUKjJg6Ov5%2B2%2F9SUQvOohSFs%2Fn7bMukBWPQvoJBM5%2FPucwX%2B9gAY%2FA0qjidc7vGhPuVP2TLqt2jRQt94Qy4Eib%2FAUSrF5C4lAO6nCOcZ&X-Amz-Signature=bab002d5b03a765165433ddbc7f81e3feaa8d8ee8ca0231745b6b98c12a930f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

