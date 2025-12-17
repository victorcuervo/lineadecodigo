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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JIBB5LP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7W5e%2Fpd1IUtxHXbFYjFxbLXtf%2B7WR9TgoThvDHnh2uwIgS2EUdQzRI%2BeyQRkMor7CYr8gz6sBNpZvfWgR3SM8KT0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzDEwqCRVVmpZbgrircA%2B4hPLlUOucV2yRktKvfpxQ%2BU3H%2BzyI09uwNGneGo60duGmBfvbJ%2FbvQemxHxYnTHxkO4e6fZKQQmgc0fmYZiZlCq3AXAxbrZeVPOiIGRcSki5fV%2BSPMfOUpFd132llViF%2BF1E5U%2FqMGzLhDvZDnrrHIU87SFWVZIHgWoWAB5yyNR0SnxhwErabPWo8bvfAAGbelVMYMmTxn6qABuuLwbzIuML41a04gO2%2BTlTNxJOoXWalQPXqF0Kc0sTLQ5cdCEvp%2B5aewRg43agpVS%2Ft6w%2FSw1h5WROJPAE8%2F92QLmx3l7dPdpsOt6fuwl%2FKtX68pTRT4Ag3%2Fd6cGLsar2lwP0YD1plv2f%2FRGUm1h3wb2OiPtuczfUhlZQNC6TdkK9D662m0a6mwr7La1Xc71o3R8RCQZM0rr6UEKHvyIfNFgTZYg2PodOjwjjY8gMOOSiz7WJhkw97%2BzKjpc7uSE%2FuWQge5Uq%2F1askfWzOSwrYUoueMBJUotnw%2BjDJr7%2Fo0HVicLFO%2BG911fPS8f16XJcdbFTzg%2BJFUAc9v6u1g3K0a4DQEt73XrmB0g3qjAIzhksKJPTOw%2BTfHAjVnz5YsQxt4oO%2BsUPbigGp84%2BnvhHlcp4AKPIpeVgKY0rPQrTSpgMMeAi8oGOqUBrnyPUX6ZYWDKiLkZeZoZm2d%2Fx0sbn6i5K9vUfctqsozEGQm%2F1qyDgkdtEGGHxKmfkcqLbJn0Cz2wB4q1wOrcqwcrYQbHC2GerxNjQ%2B6xlJCsOyyAiV%2FouG%2FWdO5cn02GHssTUr3%2B0zwfB68UHJGIDrF%2BAgrpR3KM4g5R3Lzf1tuwi8zlhFtgyUCy8KbNA%2Fk0z1ZPSMPki7isRbU73y6mYbkVwNno&X-Amz-Signature=50a13ebdc6d06cfa831021604703480fef38b767ddfef0fd6e12ef18cb3a0570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JIBB5LP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7W5e%2Fpd1IUtxHXbFYjFxbLXtf%2B7WR9TgoThvDHnh2uwIgS2EUdQzRI%2BeyQRkMor7CYr8gz6sBNpZvfWgR3SM8KT0qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzDEwqCRVVmpZbgrircA%2B4hPLlUOucV2yRktKvfpxQ%2BU3H%2BzyI09uwNGneGo60duGmBfvbJ%2FbvQemxHxYnTHxkO4e6fZKQQmgc0fmYZiZlCq3AXAxbrZeVPOiIGRcSki5fV%2BSPMfOUpFd132llViF%2BF1E5U%2FqMGzLhDvZDnrrHIU87SFWVZIHgWoWAB5yyNR0SnxhwErabPWo8bvfAAGbelVMYMmTxn6qABuuLwbzIuML41a04gO2%2BTlTNxJOoXWalQPXqF0Kc0sTLQ5cdCEvp%2B5aewRg43agpVS%2Ft6w%2FSw1h5WROJPAE8%2F92QLmx3l7dPdpsOt6fuwl%2FKtX68pTRT4Ag3%2Fd6cGLsar2lwP0YD1plv2f%2FRGUm1h3wb2OiPtuczfUhlZQNC6TdkK9D662m0a6mwr7La1Xc71o3R8RCQZM0rr6UEKHvyIfNFgTZYg2PodOjwjjY8gMOOSiz7WJhkw97%2BzKjpc7uSE%2FuWQge5Uq%2F1askfWzOSwrYUoueMBJUotnw%2BjDJr7%2Fo0HVicLFO%2BG911fPS8f16XJcdbFTzg%2BJFUAc9v6u1g3K0a4DQEt73XrmB0g3qjAIzhksKJPTOw%2BTfHAjVnz5YsQxt4oO%2BsUPbigGp84%2BnvhHlcp4AKPIpeVgKY0rPQrTSpgMMeAi8oGOqUBrnyPUX6ZYWDKiLkZeZoZm2d%2Fx0sbn6i5K9vUfctqsozEGQm%2F1qyDgkdtEGGHxKmfkcqLbJn0Cz2wB4q1wOrcqwcrYQbHC2GerxNjQ%2B6xlJCsOyyAiV%2FouG%2FWdO5cn02GHssTUr3%2B0zwfB68UHJGIDrF%2BAgrpR3KM4g5R3Lzf1tuwi8zlhFtgyUCy8KbNA%2Fk0z1ZPSMPki7isRbU73y6mYbkVwNno&X-Amz-Signature=3c9a0457ee1a38615b0f2073637663cbe1852926d58e1f0d18ef6933a8f7bb8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

