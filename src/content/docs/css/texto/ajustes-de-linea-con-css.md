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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O25FWJV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1k2fQCoPwTjfEOTMT4rDcLAuZ2ad4ZJYEFfw5HZCvzAiADq5XAd737SBaz%2B0tFfjFsF11RcWtxUxGMGaLIEStFsSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMcWAQydk8wik%2FbG8fKtwDo0PAZaKZUUTfphjqWF2ryF6lQArLAorNyBUWnBx3dTvCU0eqMHgWEwpqfTgkFKKRF%2BBVF8nZ1t3sZONJsm8sBWkZ67guV8sUH%2FtfNoNqx2xsOjmoegqn47dl5eAbEnTG0Ap30o94LX9jGb13FcxhC6No8yxV%2FhtXuzBHwXA1GFuasEkxwfpsdke8zYKfqu60WPRXoR3a%2FJd1cB0bPzKB6dMOTRUmbiBXYRuLYgxa7iQ2BJ51Eh8fanoGaw4K8Y3Ax3NO7Ou6X%2FbdTA9mNAlnF%2BUbedmn9r65HS1q9%2FPmCBvTGpvA4aMCjf%2F61lC9Lt8VCjSLLedybVN113NRGR4czSV54OK09b1TxFU1zDYO3cc2YyiOqc6DxH0%2BErx0WQOZOu6uNalwF0GsFMI3Hv62UomIZ1ZITzQ1c9kCOIV%2BRyZmudt8h1ASO2Dcut%2BNmI7qnz%2Fiq9C%2F7MnEPb1ugTxPXrn7tIwMqf%2B00mZ7zmjMUUA4LzEVTMRdtYpxSrzRgg17VRopRyBjf5g4Kp%2B8f8ED%2FIvrMu8oWBJce%2FKlmxlqLT07oKDAbGhXZOrcR0U%2FsR3lU%2F4Ya%2FV7MMR3F0i4yfS6flDTLufF2%2BOiBt%2F3OjN%2B89r16inbXvqDgIGM7TgwiLeJygY6pgGZGGKLTlIJUL8Iq1gn14G9f6oiLLAGkxBsNYhaiJMegCDsRE%2Bj6mfVomJ02IycrYOwdCdy2iDIaL3IF1SeVk69DamQvUHVNAsxSF0Umx2IeYVwkldkjcV417My%2FjjrweiK8LTrISXPZtlWE6TPbojO0iNcJzzDpI1l%2Faj9yM0WNhQSp%2B63a5aNVi2nvQOUze0MOGyxKC5wgHUoeeG8RkVJGvZxu7Bm&X-Amz-Signature=a95b9fdb7d5cd3ad24c3697399eb62240c0531eb42f63283800f4a047e810e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O25FWJV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1k2fQCoPwTjfEOTMT4rDcLAuZ2ad4ZJYEFfw5HZCvzAiADq5XAd737SBaz%2B0tFfjFsF11RcWtxUxGMGaLIEStFsSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMcWAQydk8wik%2FbG8fKtwDo0PAZaKZUUTfphjqWF2ryF6lQArLAorNyBUWnBx3dTvCU0eqMHgWEwpqfTgkFKKRF%2BBVF8nZ1t3sZONJsm8sBWkZ67guV8sUH%2FtfNoNqx2xsOjmoegqn47dl5eAbEnTG0Ap30o94LX9jGb13FcxhC6No8yxV%2FhtXuzBHwXA1GFuasEkxwfpsdke8zYKfqu60WPRXoR3a%2FJd1cB0bPzKB6dMOTRUmbiBXYRuLYgxa7iQ2BJ51Eh8fanoGaw4K8Y3Ax3NO7Ou6X%2FbdTA9mNAlnF%2BUbedmn9r65HS1q9%2FPmCBvTGpvA4aMCjf%2F61lC9Lt8VCjSLLedybVN113NRGR4czSV54OK09b1TxFU1zDYO3cc2YyiOqc6DxH0%2BErx0WQOZOu6uNalwF0GsFMI3Hv62UomIZ1ZITzQ1c9kCOIV%2BRyZmudt8h1ASO2Dcut%2BNmI7qnz%2Fiq9C%2F7MnEPb1ugTxPXrn7tIwMqf%2B00mZ7zmjMUUA4LzEVTMRdtYpxSrzRgg17VRopRyBjf5g4Kp%2B8f8ED%2FIvrMu8oWBJce%2FKlmxlqLT07oKDAbGhXZOrcR0U%2FsR3lU%2F4Ya%2FV7MMR3F0i4yfS6flDTLufF2%2BOiBt%2F3OjN%2B89r16inbXvqDgIGM7TgwiLeJygY6pgGZGGKLTlIJUL8Iq1gn14G9f6oiLLAGkxBsNYhaiJMegCDsRE%2Bj6mfVomJ02IycrYOwdCdy2iDIaL3IF1SeVk69DamQvUHVNAsxSF0Umx2IeYVwkldkjcV417My%2FjjrweiK8LTrISXPZtlWE6TPbojO0iNcJzzDpI1l%2Faj9yM0WNhQSp%2B63a5aNVi2nvQOUze0MOGyxKC5wgHUoeeG8RkVJGvZxu7Bm&X-Amz-Signature=04b4ae2e3e2ae88f3fcf6474ad6b9f791ffd294af463a765310be0dcdf98e92f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

