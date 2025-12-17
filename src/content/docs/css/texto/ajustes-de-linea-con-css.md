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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEAUDKEJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGY7SdM%2Bj4IsrbRaPTwvPD9LJ3bEgfbJ6Tx7U%2FwriFxiAiBNiT9VD9wT3lSsKXjPSMcO6pKFpJPZIdS1EY7%2Flf4kMyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMJNrlWDoSVeVGWbdWKtwDwW%2Fq0KrdfMCDLs%2B7r3Z8YtdzYxrnX2Pd%2FIImpwmKDuEbFWHtJ5wlvNV96SrGjq0gGy%2BLn8fLNggMsnLN8IT29sXWdgRlwl7h8KmeFPG%2Fi04UGqBKBX132Txfmig1PXi4PoRKQV6%2FWFVCmc4ICiugS9NQLqiZaFzicQkGRuWKVmFjeoS4XwPtWoORiD8pU4SrfeyynKTOC9LxukIo3tHe9iOAZMkRhLv08mcIQSQBKGcbw%2FM8USzFQSyfsGjM5j9InEDfyms1eJTZ%2BHfxWVH7sUmvhpuWWyjH3wRk3OYeTjHBS6BulsM389Ekp694nWUpYS%2F%2FLiHYUiZ3c%2B7LXMB0sN0FdlfC%2FDcVdueRFkcexZQtC4x2PsRcGaVZAq9H%2BHTGGQC3pKlJZUksrcTXFWEbNLdnYODXTI7sbS6OnzzPtKOwHIjFIUb%2BI9OmNONheRHvMiqak0%2B082sKc%2FtZR%2FtEu06hkq2vAAR%2BcAGX9hnlwo2m1TVJtW7tYRCd5UmmJFLJmtSEDNU%2F3AN%2BUteS39WqvusAAnwj%2BmdOKvpfnZzvJsRdwfJCMeO5QuhixoOPxZg5vMNNm9fqtjSOTq0nS0uKCRkGBPPJTDDsriq9oFJ%2FBT5XQD6fhGphk8LhB9Ew96qKygY6pgEemDIuaoAl2N%2FKPQp2XWrMSMAXTsFtK%2BVplNXvfYyUy04VQ9B9oorfpVYLO8gtog0ldcS7s0T4col0L3QIe4onQA%2FyPSCZTWdRISiUcm80J%2FlZ%2FiiOD12CN8CdaPrJWKVmVFbeKseZm10D%2B%2Bm4VSTTsC4vkS413JOoUBBwbwa%2BDT9ZZlODvzOM%2F0gyXfYUExuhfJK%2BjgMCnuZpFiCYHySBw7Mv2%2BhU&X-Amz-Signature=c8d36841417de5d4e9ab4c0954829a6bef988bf5ab04a5d315bf6418dedd2f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEAUDKEJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGY7SdM%2Bj4IsrbRaPTwvPD9LJ3bEgfbJ6Tx7U%2FwriFxiAiBNiT9VD9wT3lSsKXjPSMcO6pKFpJPZIdS1EY7%2Flf4kMyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMJNrlWDoSVeVGWbdWKtwDwW%2Fq0KrdfMCDLs%2B7r3Z8YtdzYxrnX2Pd%2FIImpwmKDuEbFWHtJ5wlvNV96SrGjq0gGy%2BLn8fLNggMsnLN8IT29sXWdgRlwl7h8KmeFPG%2Fi04UGqBKBX132Txfmig1PXi4PoRKQV6%2FWFVCmc4ICiugS9NQLqiZaFzicQkGRuWKVmFjeoS4XwPtWoORiD8pU4SrfeyynKTOC9LxukIo3tHe9iOAZMkRhLv08mcIQSQBKGcbw%2FM8USzFQSyfsGjM5j9InEDfyms1eJTZ%2BHfxWVH7sUmvhpuWWyjH3wRk3OYeTjHBS6BulsM389Ekp694nWUpYS%2F%2FLiHYUiZ3c%2B7LXMB0sN0FdlfC%2FDcVdueRFkcexZQtC4x2PsRcGaVZAq9H%2BHTGGQC3pKlJZUksrcTXFWEbNLdnYODXTI7sbS6OnzzPtKOwHIjFIUb%2BI9OmNONheRHvMiqak0%2B082sKc%2FtZR%2FtEu06hkq2vAAR%2BcAGX9hnlwo2m1TVJtW7tYRCd5UmmJFLJmtSEDNU%2F3AN%2BUteS39WqvusAAnwj%2BmdOKvpfnZzvJsRdwfJCMeO5QuhixoOPxZg5vMNNm9fqtjSOTq0nS0uKCRkGBPPJTDDsriq9oFJ%2FBT5XQD6fhGphk8LhB9Ew96qKygY6pgEemDIuaoAl2N%2FKPQp2XWrMSMAXTsFtK%2BVplNXvfYyUy04VQ9B9oorfpVYLO8gtog0ldcS7s0T4col0L3QIe4onQA%2FyPSCZTWdRISiUcm80J%2FlZ%2FiiOD12CN8CdaPrJWKVmVFbeKseZm10D%2B%2Bm4VSTTsC4vkS413JOoUBBwbwa%2BDT9ZZlODvzOM%2F0gyXfYUExuhfJK%2BjgMCnuZpFiCYHySBw7Mv2%2BhU&X-Amz-Signature=2a676b4ae12a2e0206958a17241d7ec7d5c92ebb94c109e9897ec8389c242a07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

