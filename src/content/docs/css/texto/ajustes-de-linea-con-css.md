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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N7GBYMO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FJsc73ubtdGopTT6ao9ZMiy6woTvBXrL1QFuxhXsn8gIgBedUi9%2FTF%2B63I2W9MT4ioAR6VPTcPSxJKrPySJYHP4gq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFG8vTqONzoirg81fircA%2BIQAT96%2FXsMOs4pSPdsNzV6Q%2B5uPNTtHUsYtK6cvdDwlxIj%2FUdJf5woZTp5bLZUQ29mY%2FT55VWzh7aidPQK3SQgu9oNaNA2uUQeQ3jJl8onLZt1FwsFekb79s0f00YD1Ix6wzCs0%2FTFs8NUmv5%2BL8VbA3SWfYC5wng35qE1UFekkXN26hAAMsYUKYmjvQYnyAvB8QFdx%2Fmfn1MRTMvK6ByxpnOSYgbvaC7HxsmCKhI9moagbCTFBebVfscOtg%2BqE0mx2jLjDPsM3Eb8unfc5BuzoX51DACLtuV4pu1Mupk1HyqInYhsTCTsxxER8rrm0crIgPik2m9CCp478imY94phoNs4Xkcq%2BYUl91Xn2%2B3M1PeIlC%2B9Q9GMwUjfcF1QkgcR8iVyGsjseZBwn1TlV1x4cyl27gB9Bbv93ulIQOUQEEgteX5mjhSa63p0Lwy5E%2FdAo7IYgohKtaAPOezbidyA%2FhJsc6s%2BloD2RKpYcoh5Dy6VcswgVnyW6MYQFudqD3DJgli2dzSfTEZ8N%2B242pw4AKa5SB%2FHlOKuX7oTUjdp4FyvgOgpoAmD1Ds9eD4I8nq2SAPsmwymJGmmo2A%2FAEQ%2FvIkHtTRW5c37y5kily%2Bf2iydpExXWm4DHlmvMOiqisoGOqUBp%2FlXVypzB1OGNu5qyoN77OCZPdinuj0WAW%2F081%2B%2F33vhWbhMH%2FF3Xo4LYH%2BFFIHBUFxaYnHQ9zz8W9NUjda63qcSmEpM8hQ7mGxupKtoZbk99G85JO4JZW3HgqSUgNj2WYNBqMp8KTurpYavMzkBgWtIVFh1FAlWyLDjVmCWz5dXzjWpQU1fb%2BhAPIjE3ti1SUvPiuAm7cHDEhpEntYMbxWwvExS&X-Amz-Signature=af06af3f45f5864d507e6ab84daaed95e13a305038b59a44c35620a3df8ad7a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N7GBYMO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2FJsc73ubtdGopTT6ao9ZMiy6woTvBXrL1QFuxhXsn8gIgBedUi9%2FTF%2B63I2W9MT4ioAR6VPTcPSxJKrPySJYHP4gq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFG8vTqONzoirg81fircA%2BIQAT96%2FXsMOs4pSPdsNzV6Q%2B5uPNTtHUsYtK6cvdDwlxIj%2FUdJf5woZTp5bLZUQ29mY%2FT55VWzh7aidPQK3SQgu9oNaNA2uUQeQ3jJl8onLZt1FwsFekb79s0f00YD1Ix6wzCs0%2FTFs8NUmv5%2BL8VbA3SWfYC5wng35qE1UFekkXN26hAAMsYUKYmjvQYnyAvB8QFdx%2Fmfn1MRTMvK6ByxpnOSYgbvaC7HxsmCKhI9moagbCTFBebVfscOtg%2BqE0mx2jLjDPsM3Eb8unfc5BuzoX51DACLtuV4pu1Mupk1HyqInYhsTCTsxxER8rrm0crIgPik2m9CCp478imY94phoNs4Xkcq%2BYUl91Xn2%2B3M1PeIlC%2B9Q9GMwUjfcF1QkgcR8iVyGsjseZBwn1TlV1x4cyl27gB9Bbv93ulIQOUQEEgteX5mjhSa63p0Lwy5E%2FdAo7IYgohKtaAPOezbidyA%2FhJsc6s%2BloD2RKpYcoh5Dy6VcswgVnyW6MYQFudqD3DJgli2dzSfTEZ8N%2B242pw4AKa5SB%2FHlOKuX7oTUjdp4FyvgOgpoAmD1Ds9eD4I8nq2SAPsmwymJGmmo2A%2FAEQ%2FvIkHtTRW5c37y5kily%2Bf2iydpExXWm4DHlmvMOiqisoGOqUBp%2FlXVypzB1OGNu5qyoN77OCZPdinuj0WAW%2F081%2B%2F33vhWbhMH%2FF3Xo4LYH%2BFFIHBUFxaYnHQ9zz8W9NUjda63qcSmEpM8hQ7mGxupKtoZbk99G85JO4JZW3HgqSUgNj2WYNBqMp8KTurpYavMzkBgWtIVFh1FAlWyLDjVmCWz5dXzjWpQU1fb%2BhAPIjE3ti1SUvPiuAm7cHDEhpEntYMbxWwvExS&X-Amz-Signature=368e7ab6192a3d27bd3d20c763afac4473b4d2f199daed62a2ba6752c2e9a820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

