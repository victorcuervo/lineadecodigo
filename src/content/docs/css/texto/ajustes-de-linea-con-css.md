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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ6SGSZO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpdw%2F2PxRtpVnwOEo5N%2FbWK0DrXSRZoD6%2BRnZE6CuxbwIhAKHEzF14r%2FF3207hc248hlhMbQFyohn8qb6z%2BZKXoMN2KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFYl9j%2Fk1uju%2FhYzwq3AO1ASVDKALJMHueJgBCmRx2hR4K4u7b7Bw8QICoGvtJCihYV0RKd7x%2BTU4lFQoaw4qoC6%2FJZda8GO4ci9Lj1TD6zdQcU94LsPyJo89Tws7uc03ZL7%2FoKHMVrUPquV4N%2BxhGdEK8ZfIhP7%2FUDCEiE7hfrze4EhmKMonCnvTd8hDv4yd2f21BLf4gwgBUnUkm8PNCDJyX3m7FTdIFTXwlxOiMoYlxZ9PBCuWDVG43S072TE%2B4OkHFGKU8oQl3ntskFycRrLWc78PnVHb9S6Mp08FgnJoCh0OSJ3twIP%2BImKOTPT0pLiq3b%2FL65H1ZgS0Vw%2FIE%2Be1uaAmrteNFzf%2FO4MYN45M6F8V1n3JkEKOU0XDGGyb3gTv384shF2zc1FgilhGTI%2Bvioc%2Bj6zW%2FDFNDFYpafNWe3T4EHH4wYdhmh1dXOFrDVE8LMiB0ktlIFqxuSRwuCQEEYNbKjagfwmv9rIz3e%2BYmDwaajJjiAViRb38xekWANL6sqVu7kLbvfjiJP%2BXAu2hnJ%2FQKpgdGaz1C6lck9GufpoHHPcT6znUOhe94SZi%2BSfF1b%2BCjm0wQ848Z9aT8m3FL4zqQXCJPKoCSyktjP0WNT8n48wz%2B3x2nUrgBDrVFQKCzN4C6BSmjGDDNi4zKBjqkAW06ueTmwh00oOrEEcY1RYQ29s2tQIlz8j3EM1Mh4h2nMElNTgct6%2FwzXzpKc8z2qsW2Zy3ETftMn7nmaTkPV2SWmCrqtmo%2FNOvf9BaKAJu6pR4vW%2BVkJjzop8ESllY%2BJBOtpq5orFT62RDiHazR1RW5jy9jRiJ98YGPGN4YgTUQ%2FiZJfOW%2FC486Tvf8RBp5CTV6t5lQuQzoUzWaMP%2BzDMnGJZCV&X-Amz-Signature=fb4ea0170891b3cfb031e1aad3d7e2deb4a734ee599a9a9d3d95d08711e95d89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQ6SGSZO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpdw%2F2PxRtpVnwOEo5N%2FbWK0DrXSRZoD6%2BRnZE6CuxbwIhAKHEzF14r%2FF3207hc248hlhMbQFyohn8qb6z%2BZKXoMN2KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFYl9j%2Fk1uju%2FhYzwq3AO1ASVDKALJMHueJgBCmRx2hR4K4u7b7Bw8QICoGvtJCihYV0RKd7x%2BTU4lFQoaw4qoC6%2FJZda8GO4ci9Lj1TD6zdQcU94LsPyJo89Tws7uc03ZL7%2FoKHMVrUPquV4N%2BxhGdEK8ZfIhP7%2FUDCEiE7hfrze4EhmKMonCnvTd8hDv4yd2f21BLf4gwgBUnUkm8PNCDJyX3m7FTdIFTXwlxOiMoYlxZ9PBCuWDVG43S072TE%2B4OkHFGKU8oQl3ntskFycRrLWc78PnVHb9S6Mp08FgnJoCh0OSJ3twIP%2BImKOTPT0pLiq3b%2FL65H1ZgS0Vw%2FIE%2Be1uaAmrteNFzf%2FO4MYN45M6F8V1n3JkEKOU0XDGGyb3gTv384shF2zc1FgilhGTI%2Bvioc%2Bj6zW%2FDFNDFYpafNWe3T4EHH4wYdhmh1dXOFrDVE8LMiB0ktlIFqxuSRwuCQEEYNbKjagfwmv9rIz3e%2BYmDwaajJjiAViRb38xekWANL6sqVu7kLbvfjiJP%2BXAu2hnJ%2FQKpgdGaz1C6lck9GufpoHHPcT6znUOhe94SZi%2BSfF1b%2BCjm0wQ848Z9aT8m3FL4zqQXCJPKoCSyktjP0WNT8n48wz%2B3x2nUrgBDrVFQKCzN4C6BSmjGDDNi4zKBjqkAW06ueTmwh00oOrEEcY1RYQ29s2tQIlz8j3EM1Mh4h2nMElNTgct6%2FwzXzpKc8z2qsW2Zy3ETftMn7nmaTkPV2SWmCrqtmo%2FNOvf9BaKAJu6pR4vW%2BVkJjzop8ESllY%2BJBOtpq5orFT62RDiHazR1RW5jy9jRiJ98YGPGN4YgTUQ%2FiZJfOW%2FC486Tvf8RBp5CTV6t5lQuQzoUzWaMP%2BzDMnGJZCV&X-Amz-Signature=2955188f110ce404905ca2ae1c6fdd516f981333a062e835e308c78b52c1d36a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

