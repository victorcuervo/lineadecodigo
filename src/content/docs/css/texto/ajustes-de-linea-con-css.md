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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSXE4VHB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAoJrRsFScmcOqJE25kr4gJLbLmRzSr%2Bg459U9F2qcTQIhAPOLGPF1hQd4P%2FMZgQrxSgVttT1fYQ4Xo2%2FvaJI2Gc96Kv8DCHgQABoMNjM3NDIzMTgzODA1Igzb4HHV%2FbG3tINeHdgq3APVsfwmeixcmBtZDfJFvGNHSweJSqT7RspuLVHtIXY1q0sKT1bdHpdjrqTJbFpJx0Bl7GujdceZqZr%2BX1tnC3APwfgYtQktoek5PcXLSc7vkOKobdbI7TtJonpWbEoAy5SLrpMHNjqc6d0%2Baq1ydWUUZxHd5m26OBuDIzBeHnCtnF5%2BCrHetdorGO8VaeJ7wmGopy5aH2j5MII9kH%2FDjwWXDqfMi5hvVqBu9dJlWbQygfjlD4y9rara9U%2F91fJ5ewc4xRNT0RzMNAn7AJOKax9Xwy%2BzxVXfH2STzOEx27N4NvjF42TTy6%2B9U8uFSCIc%2FuHK9FN80qIJhXsyL6hWcpPOo%2BPfrQoi5IUhaFURpLVn9Mwk1QuiMa4x%2BxsNZTevx2Kx1BiOwnGZpq1W0yG1tfwL1tgB8y31UI0hv%2Bb5fR9e9KKWALSlKhb%2F4mDOU5JALSWePWysZ9XaxlgrMYZ%2BWDpULRrT4UulUMoEP7PQsngl7rR8OPZbUroz9Gld%2B5Xjn0tas5ARx%2B33K%2BBnsowUFSvASu9KhfoNlTagUDjWBn3RwcJaEmOY49J24hVGZtcclXovLxqBj1T6yJsXlO5GvMSlZNYsGXpKgruYQxvZEZ5FHDpGnj0MuUZ17y3F%2BzCrnInKBjqkAXi7139ztSIit8O6cWHbYYOTLZsFWifaYzR%2B7I1nnjJ9k%2FfYew803cc18jdQ1d1%2FEiTyfFIRmsLQlYtmPOtJmkCmCvXgwc%2BpCYUhagpiCnNCS7FPZAZz8gA0Dem6S8UW%2BjHFKCLifW0BNZMGLivdsoLFBFPA3UTUFEDR7S5G61rmyuYl%2FJGM1QjlhOkMuiFJzPpqca%2B6zoO4Kcp1u%2FpvAi1zwV9Z&X-Amz-Signature=a58c7f2d22ee7a4a2acf8aae1360c6b46270323a409599a1c19d328ca430de85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSXE4VHB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T070458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAoJrRsFScmcOqJE25kr4gJLbLmRzSr%2Bg459U9F2qcTQIhAPOLGPF1hQd4P%2FMZgQrxSgVttT1fYQ4Xo2%2FvaJI2Gc96Kv8DCHgQABoMNjM3NDIzMTgzODA1Igzb4HHV%2FbG3tINeHdgq3APVsfwmeixcmBtZDfJFvGNHSweJSqT7RspuLVHtIXY1q0sKT1bdHpdjrqTJbFpJx0Bl7GujdceZqZr%2BX1tnC3APwfgYtQktoek5PcXLSc7vkOKobdbI7TtJonpWbEoAy5SLrpMHNjqc6d0%2Baq1ydWUUZxHd5m26OBuDIzBeHnCtnF5%2BCrHetdorGO8VaeJ7wmGopy5aH2j5MII9kH%2FDjwWXDqfMi5hvVqBu9dJlWbQygfjlD4y9rara9U%2F91fJ5ewc4xRNT0RzMNAn7AJOKax9Xwy%2BzxVXfH2STzOEx27N4NvjF42TTy6%2B9U8uFSCIc%2FuHK9FN80qIJhXsyL6hWcpPOo%2BPfrQoi5IUhaFURpLVn9Mwk1QuiMa4x%2BxsNZTevx2Kx1BiOwnGZpq1W0yG1tfwL1tgB8y31UI0hv%2Bb5fR9e9KKWALSlKhb%2F4mDOU5JALSWePWysZ9XaxlgrMYZ%2BWDpULRrT4UulUMoEP7PQsngl7rR8OPZbUroz9Gld%2B5Xjn0tas5ARx%2B33K%2BBnsowUFSvASu9KhfoNlTagUDjWBn3RwcJaEmOY49J24hVGZtcclXovLxqBj1T6yJsXlO5GvMSlZNYsGXpKgruYQxvZEZ5FHDpGnj0MuUZ17y3F%2BzCrnInKBjqkAXi7139ztSIit8O6cWHbYYOTLZsFWifaYzR%2B7I1nnjJ9k%2FfYew803cc18jdQ1d1%2FEiTyfFIRmsLQlYtmPOtJmkCmCvXgwc%2BpCYUhagpiCnNCS7FPZAZz8gA0Dem6S8UW%2BjHFKCLifW0BNZMGLivdsoLFBFPA3UTUFEDR7S5G61rmyuYl%2FJGM1QjlhOkMuiFJzPpqca%2B6zoO4Kcp1u%2FpvAi1zwV9Z&X-Amz-Signature=16f0579f7ca728d809b1e2cda80575abd9ad0c29b3e5748350061e079d45227d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

