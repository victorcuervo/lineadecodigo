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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H5Y4HAU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmqmLNpDV113dlA10jmbaWhHePjutcZTwYiC582UTV%2FAiEA9Z0wJMwW0iU1hGYnQWxlvu2NFzwGS%2FZCOrIa9Ic2yG8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOXQC3MpdL1aL8j1LSrcA9X9199AlHB032miF0H7h2yoFA213V%2F3E8Z4Ls3GgnpD807Zp4Hovb2Vbi1lXum7%2FqHmxixuTcTg5KSh%2F8DZEi6OXYq2Zygt%2Baup%2F1x1ewF0GLmqyMPJTrgH3dYSKnYMdd9lb%2FMKT3cKxepbftv9zswWSnnp0ed%2Fsqcs14lXkq2349FpDxY32uq6Y3WPlxxOI0MkLn6cmPhFH%2FiwIOFw7o5ZbO7cLyfNrL13XEZT58V%2FAT%2BOiFeSyn8ljii%2Fhz1C0OEHb9z6s6%2FLQQWoLQeVqvImKrLbZXlp6sqK0JCZI7UBfc5QHM1bZy%2Fo%2F1C48BVeJmI3GIdq04iix8bzwRs48EZH%2FxhhKNK4VDvDMnQ5DCeeucoLVay%2Fys3uTKW9iq9r1xO0SocU15QmP1Egr6vdkM2FIz5RzVSPgIkm31UIII%2FYB4ndZbltMae6YCPO6aBOcyWNzbcW1grvMV3YUXtI9%2FFSacm3wGDkbfN09rfNlvlRPCzEMF4NlK%2BVMwdUaU9S%2F0%2FgpizTWEKM0s%2FjYD0Vnd8LPv2Ki0cVW4BtS6jV%2BN3vA82PW8j0hjaSEapfyeMBx5UX92UOzbNywmjmf9Q8xrueBgLO%2B1BY1L9L2vpONg02PHJ1uBdRkxmcairBMKyXiMoGOqUBRgNOfpFzgzw7Q1BWBBe1R8NRa8QqTfUTPfMqko5CQ%2BC9zynkkKbhlgv%2BDgwSfHY5191%2BPnxiFGt76XRMcHPxRPNz7jnPrJC2iFsUfHRh3S7bnNyYj00iF39HIcH658wsj2a2c3yqV6akjxlakBgDIkWEFPrX62hkjGYUxiHW%2FbP19lRWvU5tWmVH90Ou1qiUOQclPH9CPJuUZpMCy8MJEExR2QFS&X-Amz-Signature=58e79e86f8907f7bb074a2fad4c4167c64efe1692a128679426021cd08c01559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H5Y4HAU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmqmLNpDV113dlA10jmbaWhHePjutcZTwYiC582UTV%2FAiEA9Z0wJMwW0iU1hGYnQWxlvu2NFzwGS%2FZCOrIa9Ic2yG8q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDOXQC3MpdL1aL8j1LSrcA9X9199AlHB032miF0H7h2yoFA213V%2F3E8Z4Ls3GgnpD807Zp4Hovb2Vbi1lXum7%2FqHmxixuTcTg5KSh%2F8DZEi6OXYq2Zygt%2Baup%2F1x1ewF0GLmqyMPJTrgH3dYSKnYMdd9lb%2FMKT3cKxepbftv9zswWSnnp0ed%2Fsqcs14lXkq2349FpDxY32uq6Y3WPlxxOI0MkLn6cmPhFH%2FiwIOFw7o5ZbO7cLyfNrL13XEZT58V%2FAT%2BOiFeSyn8ljii%2Fhz1C0OEHb9z6s6%2FLQQWoLQeVqvImKrLbZXlp6sqK0JCZI7UBfc5QHM1bZy%2Fo%2F1C48BVeJmI3GIdq04iix8bzwRs48EZH%2FxhhKNK4VDvDMnQ5DCeeucoLVay%2Fys3uTKW9iq9r1xO0SocU15QmP1Egr6vdkM2FIz5RzVSPgIkm31UIII%2FYB4ndZbltMae6YCPO6aBOcyWNzbcW1grvMV3YUXtI9%2FFSacm3wGDkbfN09rfNlvlRPCzEMF4NlK%2BVMwdUaU9S%2F0%2FgpizTWEKM0s%2FjYD0Vnd8LPv2Ki0cVW4BtS6jV%2BN3vA82PW8j0hjaSEapfyeMBx5UX92UOzbNywmjmf9Q8xrueBgLO%2B1BY1L9L2vpONg02PHJ1uBdRkxmcairBMKyXiMoGOqUBRgNOfpFzgzw7Q1BWBBe1R8NRa8QqTfUTPfMqko5CQ%2BC9zynkkKbhlgv%2BDgwSfHY5191%2BPnxiFGt76XRMcHPxRPNz7jnPrJC2iFsUfHRh3S7bnNyYj00iF39HIcH658wsj2a2c3yqV6akjxlakBgDIkWEFPrX62hkjGYUxiHW%2FbP19lRWvU5tWmVH90Ou1qiUOQclPH9CPJuUZpMCy8MJEExR2QFS&X-Amz-Signature=ce4f9dae4a137d8c8d9d16cb112c2eb8c13f5be19c6a1abe1dafd8e09c9513e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

