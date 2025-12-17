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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KFF2IET%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSVxfpEDJsPQAkV6ciAg9WRYK9cBKxaGrO0pyGj1CaxgIhANs%2FOhuxuiw5NuJM6AEpjwSqZTd%2Bk%2BINLFOd%2BN1svNU4Kv8DCHoQABoMNjM3NDIzMTgzODA1Igw%2FXmsVQZW01pi3e%2BQq3AMpEdj7o1oO%2B%2BWtNcbeQiRyZFKllFX3RhKN7lcPVW97Jcrsst%2B0e5AWMHQiS2HscsqKedPxKcjYchtenlCH%2FtJogAMBRvn3aEqQGt8Lut51%2FiOydu1t0rqXtIcDDKEL%2Bndh%2FEgs4pk%2FtUiBzMaZqmT6uxv75fNCu9jzxtKoxpy3kPO%2B5mQcQB9diYzU%2BH0Jq%2BYAUiIDshVlKPqddoE7C1qCyBKJsNh8vtfy1L7%2BsntWsB6%2BNjx%2FdwuFsjgrp8fE1ND00Jl7YYt%2FlvOebKoe6IgmMRqZLSUQQct%2BQ3HsE%2FY8UEmhVS%2BqtUyPUJN5hMISLxs1VCrrZRcCknsuHDS7Zc%2BFL4Prty1xKfK%2B%2Fh0B78KBkNC1i39d7lKe%2F6fM2MTjKntVPbi7OQ9cQAiRAXX0KHHyMnAikyu61v8auk2axe3lawKQ7Mtq69ki2eeJo5ePoZTWmlT%2BRguFiemL2gA4iSd78QaIzTpnravQ5H59hEIPUQz97W%2FNa6XiEEFeK3bIfoD4P6295P7nM%2Fnciin3AMNM73nOXDxWDwtzTZWxoJh2tKAznZCvbTEA4TMB9ssFWoTX2xSLF4d57BJMesOHVhxFgv8uPp5rtoMi7bZ22d%2FJpVDVYU7HILKFdwr6njCq0onKBjqkAdHwF2beU48R2oOGde0%2B8xzQTPArbRc%2FJy6Q3Q5XW9Z%2BEf51gwnqRCZ8WHrOKpSdcy9vUHwdAd%2BAa%2F5BL5XXrDZpORvZR8BgnHUcQIkEPxHgX9PTJgLB82T6MLpSa5w2kThELZ9cETSl5O3Llvb4a2rJW%2BbbydetkE%2BC9SIs%2FtwcouAEGh4wl0uz1lgS3JeVqY%2Fmu3jwUPUpv7lNO4Sn7aZjS5ei&X-Amz-Signature=568de06ee25a60a5541fd4d01eda88d9a89b807a7b17ef8841472a699d40f669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KFF2IET%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSVxfpEDJsPQAkV6ciAg9WRYK9cBKxaGrO0pyGj1CaxgIhANs%2FOhuxuiw5NuJM6AEpjwSqZTd%2Bk%2BINLFOd%2BN1svNU4Kv8DCHoQABoMNjM3NDIzMTgzODA1Igw%2FXmsVQZW01pi3e%2BQq3AMpEdj7o1oO%2B%2BWtNcbeQiRyZFKllFX3RhKN7lcPVW97Jcrsst%2B0e5AWMHQiS2HscsqKedPxKcjYchtenlCH%2FtJogAMBRvn3aEqQGt8Lut51%2FiOydu1t0rqXtIcDDKEL%2Bndh%2FEgs4pk%2FtUiBzMaZqmT6uxv75fNCu9jzxtKoxpy3kPO%2B5mQcQB9diYzU%2BH0Jq%2BYAUiIDshVlKPqddoE7C1qCyBKJsNh8vtfy1L7%2BsntWsB6%2BNjx%2FdwuFsjgrp8fE1ND00Jl7YYt%2FlvOebKoe6IgmMRqZLSUQQct%2BQ3HsE%2FY8UEmhVS%2BqtUyPUJN5hMISLxs1VCrrZRcCknsuHDS7Zc%2BFL4Prty1xKfK%2B%2Fh0B78KBkNC1i39d7lKe%2F6fM2MTjKntVPbi7OQ9cQAiRAXX0KHHyMnAikyu61v8auk2axe3lawKQ7Mtq69ki2eeJo5ePoZTWmlT%2BRguFiemL2gA4iSd78QaIzTpnravQ5H59hEIPUQz97W%2FNa6XiEEFeK3bIfoD4P6295P7nM%2Fnciin3AMNM73nOXDxWDwtzTZWxoJh2tKAznZCvbTEA4TMB9ssFWoTX2xSLF4d57BJMesOHVhxFgv8uPp5rtoMi7bZ22d%2FJpVDVYU7HILKFdwr6njCq0onKBjqkAdHwF2beU48R2oOGde0%2B8xzQTPArbRc%2FJy6Q3Q5XW9Z%2BEf51gwnqRCZ8WHrOKpSdcy9vUHwdAd%2BAa%2F5BL5XXrDZpORvZR8BgnHUcQIkEPxHgX9PTJgLB82T6MLpSa5w2kThELZ9cETSl5O3Llvb4a2rJW%2BbbydetkE%2BC9SIs%2FtwcouAEGh4wl0uz1lgS3JeVqY%2Fmu3jwUPUpv7lNO4Sn7aZjS5ei&X-Amz-Signature=a19e2473d66d5dbdffab27a1629eb9e8359e5547bd98003ac055e96baa9aa7b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

