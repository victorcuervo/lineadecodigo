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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQOGBWJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUKdhU6KtRIKwBYMS%2B0xMR7Oe2weYNhk%2BmDeIrjmL%2BtQIgBwmRtO7KiAAW7X2NjLLXDof4%2Bw%2FkBcKeZriceHCH4Zoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDNaGE3xwdVD95Hj3uyrcA06NXxhFjCMiFFnTjHGKLbXxOr54XBkt6akuJPO889yObVYkKJK1kEW8EvjiGtYspzZ8ABBnWlyVNSfhy9YK3vpjKQyE2dh3z7HAp%2BNPQCPyx%2FFaTfQ2i3lVAHMFWzVmWd4xEjc9o6tnLNEjtun5hTIJ4XvsjnM8RDA5YrXkjMBLptDxASuA%2BPDZrLnBDC%2FCY1AKgPGw4EqY3%2Ba5lB9B%2FYECiYddoa9UlseN5UKWiiyKX1DwIOGPqQiMMUjtx7CshrXcFjWjz87PehMTqZPtuEdz4AOtbBwQR1FM57d6c%2FuKXCTQLb1%2B4IXU4taULiPOwjSEj%2BqIMXBk9yzIblAvouJLlhaYZbFSYHaXw%2FxzBCRHNSeuptMGWzpbNpMFTrvrz7Q8T0UrnqiCPkRTlULI25Y14VFQ8d%2FkIO6ZqxeMgQlWdpg5uV2Zm9CFoEbyKckqQ2gO8xtFgIrOm5ydb4GVt2b5yeD1D%2F6d%2Fim9F6kCUrUwrXuWZV1jJGqgFhRyKC%2BemtU8uoSIsN4meP3wIuK7VQM8fmePZhLXkX452Yl4%2BoM3NEZzHimHhP46Dj199J0Zts%2BD76dojx9Lq6On3XKy8vEeNRr9yyRukv08ucP26WNStEMwgYNFbrB0Sb38MMOxiMoGOqUBudxOt8i%2Bkf0MIp68nvbPRAH06mnpQ%2F0uGR%2BNq08moIWUlMGTRL8jPxkzwd16wbOYxvkVbUPOGTz4Kbm3O5lXdrpI0JYoV%2BcoKThI536IXce77u1TEbLOU1byuJgfPRfLd0sYbTDl6%2B8oz%2BE8HXbFdIUuAdthDlt585sGHvW3OdgiRGfUg2%2B6%2BRNkaauce8XOptiaSBykJ5dFQZXKrRtgW4JJcQoY&X-Amz-Signature=08cdb86c277405c31a1b05e354a882863e636a0527c0cbea50c2e38d9c11bc50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQOGBWJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUKdhU6KtRIKwBYMS%2B0xMR7Oe2weYNhk%2BmDeIrjmL%2BtQIgBwmRtO7KiAAW7X2NjLLXDof4%2Bw%2FkBcKeZriceHCH4Zoq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDNaGE3xwdVD95Hj3uyrcA06NXxhFjCMiFFnTjHGKLbXxOr54XBkt6akuJPO889yObVYkKJK1kEW8EvjiGtYspzZ8ABBnWlyVNSfhy9YK3vpjKQyE2dh3z7HAp%2BNPQCPyx%2FFaTfQ2i3lVAHMFWzVmWd4xEjc9o6tnLNEjtun5hTIJ4XvsjnM8RDA5YrXkjMBLptDxASuA%2BPDZrLnBDC%2FCY1AKgPGw4EqY3%2Ba5lB9B%2FYECiYddoa9UlseN5UKWiiyKX1DwIOGPqQiMMUjtx7CshrXcFjWjz87PehMTqZPtuEdz4AOtbBwQR1FM57d6c%2FuKXCTQLb1%2B4IXU4taULiPOwjSEj%2BqIMXBk9yzIblAvouJLlhaYZbFSYHaXw%2FxzBCRHNSeuptMGWzpbNpMFTrvrz7Q8T0UrnqiCPkRTlULI25Y14VFQ8d%2FkIO6ZqxeMgQlWdpg5uV2Zm9CFoEbyKckqQ2gO8xtFgIrOm5ydb4GVt2b5yeD1D%2F6d%2Fim9F6kCUrUwrXuWZV1jJGqgFhRyKC%2BemtU8uoSIsN4meP3wIuK7VQM8fmePZhLXkX452Yl4%2BoM3NEZzHimHhP46Dj199J0Zts%2BD76dojx9Lq6On3XKy8vEeNRr9yyRukv08ucP26WNStEMwgYNFbrB0Sb38MMOxiMoGOqUBudxOt8i%2Bkf0MIp68nvbPRAH06mnpQ%2F0uGR%2BNq08moIWUlMGTRL8jPxkzwd16wbOYxvkVbUPOGTz4Kbm3O5lXdrpI0JYoV%2BcoKThI536IXce77u1TEbLOU1byuJgfPRfLd0sYbTDl6%2B8oz%2BE8HXbFdIUuAdthDlt585sGHvW3OdgiRGfUg2%2B6%2BRNkaauce8XOptiaSBykJ5dFQZXKrRtgW4JJcQoY&X-Amz-Signature=2da718a1237f9cca7d00a824407191e7bcc77164a1370406e9cad1c284d169a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

