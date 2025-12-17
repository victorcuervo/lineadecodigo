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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMGTWAP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhlYX5mJaU03IleuuNPLS9SmIS3icgsSfHxBWHYEk2%2BgIhAMP69QMRHddpXM3juTYUX781EEBi%2BEwSFX4FIfYK78fEKv8DCHgQABoMNjM3NDIzMTgzODA1IgwntZosQYIolniKfsAq3APISeRHyBDL9zjCcPNf%2FUthkRT1%2F15Mvw3xFW2m7osOPvl6u%2FHpkodHCXWi%2Frxvt%2FlB06xUJeUdjLbFjvVlJ6k9v0FZeBWTqne3j906oLuspXN%2B0diQCBrpB03Lbd%2BbkC8NgaDYrvHkw1a71i8M463UqxMWSdLoUIxGSSHypdOUMlZmq2ycqX4UhG%2BlhlnKMWNuw4OO%2FAQeTgRDkOo6uUdkOuBybPsZJVTJ4g%2B3z%2FefKRcAoLCs4MJ%2FP9GV42bx6J1S7gi5d%2FfIKGqdUhORio%2B6sYfmUSfbOW27Jh9pB6o1K7Fdul6AFTvJeOQOecyqWduBGGafuhaFb%2FT1cXFlfhy0TulNuJgneG2V5N3gwZjPNKdVfr2SWwDAecnGYadSInfqxZ7DO0AS5TiZj1voGkCv7xajtP3FRX8%2FnYeqgj9pq1Ax%2F1PciQC%2FCz3xyPI9X%2FZTc%2FMYbtUtj%2FTKjk60fE8dWumK63zmTnkphtWxpP%2BtLQYzRJR1lOjMRZvkLrildvcf0x9t8ZbQbsLkgwRJc7S0Tn%2B0uIBs%2B6M3h3tNirmA9jh7lRasDMCePkxFtu5o%2F%2Bu%2FIBuDRuG3ycmQqKRzfMSpqujqawhL2WRhZjZ1amknweEqbxqlrugqVSSTpDDDnYnKBjqkAZ5eMYyOY2mwpux0zFLj9JwgPit%2F2KpfDXA0oo%2BKWOc18VZiPv%2FWfl%2FYwjTUWcCGQr8t%2BBsxjxMGLe8b0zl1tZvL8sfDrub4qNZxw3q3UeWngfT379X%2Bj45V173qO9K%2Bb28oK9xo4QJRxZtNkBK5%2BvkMPFPLqAkUBE9vm01zaVv%2Bg3w6WWy%2FJHRSVSTg6MvKtWYrS2Cq75nz2e5oQ6Ja1I5o42pJ&X-Amz-Signature=c4b8bd2f889f2d49e90a0b19025e8bfc1e1e87d42fa082831f0155eda5ce7959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KMGTWAP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhlYX5mJaU03IleuuNPLS9SmIS3icgsSfHxBWHYEk2%2BgIhAMP69QMRHddpXM3juTYUX781EEBi%2BEwSFX4FIfYK78fEKv8DCHgQABoMNjM3NDIzMTgzODA1IgwntZosQYIolniKfsAq3APISeRHyBDL9zjCcPNf%2FUthkRT1%2F15Mvw3xFW2m7osOPvl6u%2FHpkodHCXWi%2Frxvt%2FlB06xUJeUdjLbFjvVlJ6k9v0FZeBWTqne3j906oLuspXN%2B0diQCBrpB03Lbd%2BbkC8NgaDYrvHkw1a71i8M463UqxMWSdLoUIxGSSHypdOUMlZmq2ycqX4UhG%2BlhlnKMWNuw4OO%2FAQeTgRDkOo6uUdkOuBybPsZJVTJ4g%2B3z%2FefKRcAoLCs4MJ%2FP9GV42bx6J1S7gi5d%2FfIKGqdUhORio%2B6sYfmUSfbOW27Jh9pB6o1K7Fdul6AFTvJeOQOecyqWduBGGafuhaFb%2FT1cXFlfhy0TulNuJgneG2V5N3gwZjPNKdVfr2SWwDAecnGYadSInfqxZ7DO0AS5TiZj1voGkCv7xajtP3FRX8%2FnYeqgj9pq1Ax%2F1PciQC%2FCz3xyPI9X%2FZTc%2FMYbtUtj%2FTKjk60fE8dWumK63zmTnkphtWxpP%2BtLQYzRJR1lOjMRZvkLrildvcf0x9t8ZbQbsLkgwRJc7S0Tn%2B0uIBs%2B6M3h3tNirmA9jh7lRasDMCePkxFtu5o%2F%2Bu%2FIBuDRuG3ycmQqKRzfMSpqujqawhL2WRhZjZ1amknweEqbxqlrugqVSSTpDDDnYnKBjqkAZ5eMYyOY2mwpux0zFLj9JwgPit%2F2KpfDXA0oo%2BKWOc18VZiPv%2FWfl%2FYwjTUWcCGQr8t%2BBsxjxMGLe8b0zl1tZvL8sfDrub4qNZxw3q3UeWngfT379X%2Bj45V173qO9K%2Bb28oK9xo4QJRxZtNkBK5%2BvkMPFPLqAkUBE9vm01zaVv%2Bg3w6WWy%2FJHRSVSTg6MvKtWYrS2Cq75nz2e5oQ6Ja1I5o42pJ&X-Amz-Signature=81f059882e4fcc931f3e82fcf776e2458f5c14b8e08e805afbc2530d4c0f174c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

