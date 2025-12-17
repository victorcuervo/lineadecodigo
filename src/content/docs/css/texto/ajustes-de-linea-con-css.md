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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672WGJCXA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeP9y9m64UWgikiw0%2FdcmXlw7BRW1uAx7LZm7qsNfUdQIhAIaRDDdZP%2BBXNzs47MC8aTAJdwuFTwl%2BMAQ%2BLQHUT2xFKv8DCHkQABoMNjM3NDIzMTgzODA1IgzCXQZqp2%2Fu1qBdwHMq3AOt9R%2BcnV2GIP5gXNUo5y56J3G2ISXZ6ziHwizQXTbpg9aZ1KBXccpmODAGkg%2Bdk4XIcRS7yCcPUgU14vPjFjlh%2B34UBa%2BtvN0AgiQhCXkIEWpZiDHbLNLmK4FIQ9wyufxPP2HvMSzLZp9wf1Vf4IEErvliMt9wd%2B26XR%2BZzXUghYM2juYh%2BYIQvWVcFwuX%2BcoCCbmU4OO4plnbZ8ZVWWNF%2FVK82OEuH2lCgxuOpjWC88flXHMkDqfZBQbTQNt1Xq2WdRrtTNjIedsVheq7nqIQeCOLdvB8Z9HKHTqZy1%2Bd9e1RVwID2D%2BogmBBIqMTHDKe9z0fNEFU%2BVD81S4jRW9cX9A6CB9Y5ER3Wj5IFfvd7rDN3Df6a4vmST%2FqW%2FxgjOhBx4TclTwC6rZ8tAGVpRLso%2FMMQoHyR1cWtzzEeJs3blPFwSFXLdVtI5ZeDZrAXySR5zENFDA69rYjttEGDdOlFvU7wOSkH%2FGHZ%2FfhG4htc4GNhn6fhCkoI8uHRwSdSiRsk83KYSrLytgtuMq2y%2BYmNNLjl%2FT%2FSr1ueZ6KWhKGhtAZe8ZrESwqUb1j7gb%2Fnq7rFC%2FNITDPeSFVMniD35jo%2BziviEXTTuIMgT6bI%2B2DPIKwQBUgp2V83fHd1zCC0onKBjqkAbbifm8ZJ6aJSbCgF3NMZ7%2BkySpQtgu6sHq1UFPG0IcP9b8yIj%2Fka0zNBz2QLtDQCQCalbjll4yYgp%2BCLxVdpDtac%2BSbGE5%2BnBeGXlwpZatNhLfnJ9WyD361nBVFeYrmwRxtzv1FdfEAJsLBG0OuFT9gRZofPqFxopONhvXYFUeG7VIcDbS6nkifGRd9qQDdIvwoQCxHstz2Hi896eMdjwVourEJ&X-Amz-Signature=263f0a459059e4dca448e6711a4bd418b2985b25ebed55bd3de217fad1096757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672WGJCXA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeP9y9m64UWgikiw0%2FdcmXlw7BRW1uAx7LZm7qsNfUdQIhAIaRDDdZP%2BBXNzs47MC8aTAJdwuFTwl%2BMAQ%2BLQHUT2xFKv8DCHkQABoMNjM3NDIzMTgzODA1IgzCXQZqp2%2Fu1qBdwHMq3AOt9R%2BcnV2GIP5gXNUo5y56J3G2ISXZ6ziHwizQXTbpg9aZ1KBXccpmODAGkg%2Bdk4XIcRS7yCcPUgU14vPjFjlh%2B34UBa%2BtvN0AgiQhCXkIEWpZiDHbLNLmK4FIQ9wyufxPP2HvMSzLZp9wf1Vf4IEErvliMt9wd%2B26XR%2BZzXUghYM2juYh%2BYIQvWVcFwuX%2BcoCCbmU4OO4plnbZ8ZVWWNF%2FVK82OEuH2lCgxuOpjWC88flXHMkDqfZBQbTQNt1Xq2WdRrtTNjIedsVheq7nqIQeCOLdvB8Z9HKHTqZy1%2Bd9e1RVwID2D%2BogmBBIqMTHDKe9z0fNEFU%2BVD81S4jRW9cX9A6CB9Y5ER3Wj5IFfvd7rDN3Df6a4vmST%2FqW%2FxgjOhBx4TclTwC6rZ8tAGVpRLso%2FMMQoHyR1cWtzzEeJs3blPFwSFXLdVtI5ZeDZrAXySR5zENFDA69rYjttEGDdOlFvU7wOSkH%2FGHZ%2FfhG4htc4GNhn6fhCkoI8uHRwSdSiRsk83KYSrLytgtuMq2y%2BYmNNLjl%2FT%2FSr1ueZ6KWhKGhtAZe8ZrESwqUb1j7gb%2Fnq7rFC%2FNITDPeSFVMniD35jo%2BziviEXTTuIMgT6bI%2B2DPIKwQBUgp2V83fHd1zCC0onKBjqkAbbifm8ZJ6aJSbCgF3NMZ7%2BkySpQtgu6sHq1UFPG0IcP9b8yIj%2Fka0zNBz2QLtDQCQCalbjll4yYgp%2BCLxVdpDtac%2BSbGE5%2BnBeGXlwpZatNhLfnJ9WyD361nBVFeYrmwRxtzv1FdfEAJsLBG0OuFT9gRZofPqFxopONhvXYFUeG7VIcDbS6nkifGRd9qQDdIvwoQCxHstz2Hi896eMdjwVourEJ&X-Amz-Signature=5c37e852f19e236f4e78d3f3a1500345710006c8ec7f9b38c371824e1046a5eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

