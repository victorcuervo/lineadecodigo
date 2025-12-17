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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4I7YSKV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5ooUjDepzlC1yWGsHODD8YZ6zUIemOfy86xBZHnJpegIgGtQF2nBTEmiFyeKnI8h%2FMKRKc0b%2FEfBWHy5oEdM8S1sq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFSn1BjsIKokaiSUaSrcAwgA4dR7fGPV68i2IBE%2BmUYmmXBoThgO3o9SALNkSSc5cqA58O5T8lspquGvNRC0Qf16I9%2B7W8UnlW5DN4kMGeW7aO1Eg0VyU4vcezUcnj8jeLNwdOeQKTXoKI%2FZkxbpnOODCTol898tCMz5AsA%2FA914Jdx9ApLmMinnVM8%2BaCDFQedcMAdjKrj69eKPQq4VzDsMbpB1i0GLSLW2tlfWRC3yP5JDduR2HGK4cbmMkgjG8L%2FhjnYG4YS9pt5hnw%2B1NA4Qj2ZSYlrdHSBJOHEkg3pQsKCmxJN1BOZEUbRrqI2RQR2eGT41ZSlY1ekfP%2Fku8X1cbW2wrpKKiTrVnGFOOiO3xjrsAMjQdkNEr8eiYSr2LT1Or5W3roACfvw6LO3goRG2gR9kSTuxw%2FBZJYK%2FRMArCQIN4ZaCz2abCrCp7GFgejWRRvJdpCYNvgU%2FVsyLUttBxcKfDvradzM6Aqyhrd7AHuuEmEZLIjHsjW7DoRPNa7CyRYRNbxkUGGeT%2BC54TozzACjdSHWueR3J5uHTi2BYmvw0BuqRiw0aP%2FJEikaJcpPa6577mgUT3RQjBB5%2BRWY%2FoS9qt33%2BTLtVIHIBTkKyosq%2BcKK5Hk30NhDLYUONmzI1RdpuAZb3cQ1lMNXOiMoGOqUBd8ST6HA7L3ycStVRq%2FQ0RLHzfHoUqm6suQKyBQyBw9X9bzPF27fnqqfDl3GzgDkjqak7Q92QszSVbwPkGTgNZA%2FnPqJa2VVvJZKT6KipIVFWj1N53%2FWn0ZpUfJt9iupmG8R39IZSo2FjLuIXZCJGFw3qoqF7aAYLKobJoPXWiBIJ8MxFcFxehDQ4UM7Su4jcmhKwO436GYEgf6A4HwAQZYzWjWw4&X-Amz-Signature=8adfb2d49150154da762b0b024ac64df2951bdf9f7e83e2cd790777d33d265c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4I7YSKV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5ooUjDepzlC1yWGsHODD8YZ6zUIemOfy86xBZHnJpegIgGtQF2nBTEmiFyeKnI8h%2FMKRKc0b%2FEfBWHy5oEdM8S1sq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFSn1BjsIKokaiSUaSrcAwgA4dR7fGPV68i2IBE%2BmUYmmXBoThgO3o9SALNkSSc5cqA58O5T8lspquGvNRC0Qf16I9%2B7W8UnlW5DN4kMGeW7aO1Eg0VyU4vcezUcnj8jeLNwdOeQKTXoKI%2FZkxbpnOODCTol898tCMz5AsA%2FA914Jdx9ApLmMinnVM8%2BaCDFQedcMAdjKrj69eKPQq4VzDsMbpB1i0GLSLW2tlfWRC3yP5JDduR2HGK4cbmMkgjG8L%2FhjnYG4YS9pt5hnw%2B1NA4Qj2ZSYlrdHSBJOHEkg3pQsKCmxJN1BOZEUbRrqI2RQR2eGT41ZSlY1ekfP%2Fku8X1cbW2wrpKKiTrVnGFOOiO3xjrsAMjQdkNEr8eiYSr2LT1Or5W3roACfvw6LO3goRG2gR9kSTuxw%2FBZJYK%2FRMArCQIN4ZaCz2abCrCp7GFgejWRRvJdpCYNvgU%2FVsyLUttBxcKfDvradzM6Aqyhrd7AHuuEmEZLIjHsjW7DoRPNa7CyRYRNbxkUGGeT%2BC54TozzACjdSHWueR3J5uHTi2BYmvw0BuqRiw0aP%2FJEikaJcpPa6577mgUT3RQjBB5%2BRWY%2FoS9qt33%2BTLtVIHIBTkKyosq%2BcKK5Hk30NhDLYUONmzI1RdpuAZb3cQ1lMNXOiMoGOqUBd8ST6HA7L3ycStVRq%2FQ0RLHzfHoUqm6suQKyBQyBw9X9bzPF27fnqqfDl3GzgDkjqak7Q92QszSVbwPkGTgNZA%2FnPqJa2VVvJZKT6KipIVFWj1N53%2FWn0ZpUfJt9iupmG8R39IZSo2FjLuIXZCJGFw3qoqF7aAYLKobJoPXWiBIJ8MxFcFxehDQ4UM7Su4jcmhKwO436GYEgf6A4HwAQZYzWjWw4&X-Amz-Signature=2b747fb75a47b4888cac005baee58a15f02e0ebcf2f7bf8fa52de656eabde232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

