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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKSWEVXJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmCFXR%2FbFtKD9eFLmkf%2Ft13PXIl9840X6HkXqKrbz3UAiEArA8PiY0bPTHmsoUzHmkWm0D28DA7KtkpW5xg%2BZ6l6c0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBEzV86EV1lDpcTrqSrcA4T1jIBOzo56JX6urK8%2Bp55rbN4GNFB%2FSeCMLaSbDv7005F73ILfbNHDS%2BoGWzpSAck%2Fl1nGT73ShWhQyiwOegTAq1%2BpoutppipeL0AEZD4rZwZ1XkpGw2AcEk0tL7oedK%2BfZNsTSY1m85zsi1kmCCCWKe%2BmrJGRS9PJvizDUdlHiuHJk06wd4ID%2BoCTjL2cKx2vhRIeRD%2BCmN72IzFoyQ4SxtMcn1nf5fTKMd4XoK4vzwLCmtCmNXAsO2gGj%2BzHXXL2kKTSAq4ssoismyxQ3S4PaiOooS2zKQqevQGE06KJ8a%2BUOc3TqQ8QigMmCIhH7CHHKdiS2loN1QOvoSeP8m%2F9TWRYg8MtHxyhEfLAmIPfq8llfd4Qi7gOYrXtoW7ycAoxQSmHhPM0FQQRjm6br9UGCLMieAz7d11JC0Z8TuzFci4uD2G%2FnT9n06rX5a9cDCix5O2Uk8rXh%2B7xYH9itdb3EmnNHzeARDNR3tnrr0wmU%2FsUThsvJcYAOiVQ8%2BRTSFxsnOjZt%2BkcAr%2FHLthx8KxslBCid69TXIfkiuIid5%2FPqFHBK6Ytx9pTDvfMSrdq7WzXXRca3kPLO%2FpgOiEwGTOx6b9Ca06LkYycIoBP5LTA6x9HWuIayZc%2FJsipMK7GisoGOqUBDoFOPdpH7Zf1lqeYL7S6Aj4uuwhB2rvKKr8Xp0%2F3GdQr%2Bl8Yo9FbcwtgfRVqkAQzjm%2BgGGffVuh9bLZfdqDLhmWcqs0Aq%2Fa4zWtIoFuAl1QrZs5KDwhPKoB6rQLHF52gvOw3MbXOwxzgbsGgfV9ws9ZeyazV26bTb1aX%2FvFQUa9etnfAtP%2Fz9eySUpYzJhu%2FHOhZ%2F8wfAaj2bfCTCOic1jC8IO0m&X-Amz-Signature=5b3b6b31ef114d36cb6bdbfa36587c032ede948e1f31ed0ae1a06265cb5be7ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKSWEVXJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T131437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmCFXR%2FbFtKD9eFLmkf%2Ft13PXIl9840X6HkXqKrbz3UAiEArA8PiY0bPTHmsoUzHmkWm0D28DA7KtkpW5xg%2BZ6l6c0q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDBEzV86EV1lDpcTrqSrcA4T1jIBOzo56JX6urK8%2Bp55rbN4GNFB%2FSeCMLaSbDv7005F73ILfbNHDS%2BoGWzpSAck%2Fl1nGT73ShWhQyiwOegTAq1%2BpoutppipeL0AEZD4rZwZ1XkpGw2AcEk0tL7oedK%2BfZNsTSY1m85zsi1kmCCCWKe%2BmrJGRS9PJvizDUdlHiuHJk06wd4ID%2BoCTjL2cKx2vhRIeRD%2BCmN72IzFoyQ4SxtMcn1nf5fTKMd4XoK4vzwLCmtCmNXAsO2gGj%2BzHXXL2kKTSAq4ssoismyxQ3S4PaiOooS2zKQqevQGE06KJ8a%2BUOc3TqQ8QigMmCIhH7CHHKdiS2loN1QOvoSeP8m%2F9TWRYg8MtHxyhEfLAmIPfq8llfd4Qi7gOYrXtoW7ycAoxQSmHhPM0FQQRjm6br9UGCLMieAz7d11JC0Z8TuzFci4uD2G%2FnT9n06rX5a9cDCix5O2Uk8rXh%2B7xYH9itdb3EmnNHzeARDNR3tnrr0wmU%2FsUThsvJcYAOiVQ8%2BRTSFxsnOjZt%2BkcAr%2FHLthx8KxslBCid69TXIfkiuIid5%2FPqFHBK6Ytx9pTDvfMSrdq7WzXXRca3kPLO%2FpgOiEwGTOx6b9Ca06LkYycIoBP5LTA6x9HWuIayZc%2FJsipMK7GisoGOqUBDoFOPdpH7Zf1lqeYL7S6Aj4uuwhB2rvKKr8Xp0%2F3GdQr%2Bl8Yo9FbcwtgfRVqkAQzjm%2BgGGffVuh9bLZfdqDLhmWcqs0Aq%2Fa4zWtIoFuAl1QrZs5KDwhPKoB6rQLHF52gvOw3MbXOwxzgbsGgfV9ws9ZeyazV26bTb1aX%2FvFQUa9etnfAtP%2Fz9eySUpYzJhu%2FHOhZ%2F8wfAaj2bfCTCOic1jC8IO0m&X-Amz-Signature=ab6ac3ed9c2030cb150097dd3e428fd25e65869c9cf498cf3c5cdd457fbf8fd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

