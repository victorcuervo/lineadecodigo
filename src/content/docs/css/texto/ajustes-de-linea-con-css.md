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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D6D6PHR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8gSwMG50CRCccEcWBgTXvwYsSsKT64uF6f659ZUrUYQIgawuHdZi%2FWM5HGdy%2B845FtGtmVa69%2Fpnp%2Fll%2F6wdwBdcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMHTMGnmzJb7nKVs8CrcAzkLO%2FYkJC95%2FQmHWoOIf4EjKhRzB5sQrCCypGFKj3zGR9HftqdIVacrlTxbeL60mg5XvcaZZ1lIeLFqCIpv0JwL6xYKfCwT%2FFc%2FX5RpkdiztcwiJ4pEvvYFN4%2F6F4ps8ySvTII4n8G05YqqqzMIiAuBuLhv%2BeonK7yDHuHMsesI%2B3Df7xh%2BI3kEUB6xr5VEU6Yw%2FwEaDqgqlltnJ9htoXNmBu4ZOZpMTR%2FcfGJmiuWJnGd7clSJTavzmQ1ePpp56bf%2FWeg7wHI2%2B56sfgcRHOPFOgxHCskJPzlv4YCDuESLOmQnG0WcNWaYgx6PQqxuTMpt6cPp79Pa%2BHjXeMorOK7brc6TbpLT2s7OrMSntl%2BaeG2Ge4sUYSdX0w4pfjev9Yn0%2FsWPgGDI4FIPQKt2iA%2FK%2FRIT0t%2BbhHQyXjO%2BsCbizuH00uamWKIkioGg3VTM3nRmMBlRFqBkRSPSSbKfpUhveoSidb8TUUGIq01OBIXNUdOMap%2FLm3ZF8UCeV6m9hbsSouyq7ps0WngzkNOiKpTrGBlVrDocKd9Qidy14dqEkCrCgpfWbymmnZby%2FoVDtFR5QjpN931c91wiTrdNcMeIqZ9Z%2FrcazpD0IdlJyMOdBSF1cngPr12eLUgAMIuPisoGOqUB28hd0hNhE4mcOsYHVlKVorDEDbFevtgXwiTaKtzehbLPCVKGiN1X5Wvhl%2B2IQxnR6671vR37lnWiYrZ%2B3WchRJi5fMq%2BRgT44yh5g3epwJ6UYodDeuUUNzqaDWUt8BBbrm%2F%2BngmnQfaZd8iSISBY77mh5oYsimRQ7s9aaVjqsUUk4S0PmVUOPtRURmJwgAqazttszQxlliJ%2B%2FGTHRzTjY%2BFGwMjg&X-Amz-Signature=88f004f7ddcde4285f9d138de3ba0ae9e943b37a0b1c660301209f0325f18b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D6D6PHR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8gSwMG50CRCccEcWBgTXvwYsSsKT64uF6f659ZUrUYQIgawuHdZi%2FWM5HGdy%2B845FtGtmVa69%2Fpnp%2Fll%2F6wdwBdcq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMHTMGnmzJb7nKVs8CrcAzkLO%2FYkJC95%2FQmHWoOIf4EjKhRzB5sQrCCypGFKj3zGR9HftqdIVacrlTxbeL60mg5XvcaZZ1lIeLFqCIpv0JwL6xYKfCwT%2FFc%2FX5RpkdiztcwiJ4pEvvYFN4%2F6F4ps8ySvTII4n8G05YqqqzMIiAuBuLhv%2BeonK7yDHuHMsesI%2B3Df7xh%2BI3kEUB6xr5VEU6Yw%2FwEaDqgqlltnJ9htoXNmBu4ZOZpMTR%2FcfGJmiuWJnGd7clSJTavzmQ1ePpp56bf%2FWeg7wHI2%2B56sfgcRHOPFOgxHCskJPzlv4YCDuESLOmQnG0WcNWaYgx6PQqxuTMpt6cPp79Pa%2BHjXeMorOK7brc6TbpLT2s7OrMSntl%2BaeG2Ge4sUYSdX0w4pfjev9Yn0%2FsWPgGDI4FIPQKt2iA%2FK%2FRIT0t%2BbhHQyXjO%2BsCbizuH00uamWKIkioGg3VTM3nRmMBlRFqBkRSPSSbKfpUhveoSidb8TUUGIq01OBIXNUdOMap%2FLm3ZF8UCeV6m9hbsSouyq7ps0WngzkNOiKpTrGBlVrDocKd9Qidy14dqEkCrCgpfWbymmnZby%2FoVDtFR5QjpN931c91wiTrdNcMeIqZ9Z%2FrcazpD0IdlJyMOdBSF1cngPr12eLUgAMIuPisoGOqUB28hd0hNhE4mcOsYHVlKVorDEDbFevtgXwiTaKtzehbLPCVKGiN1X5Wvhl%2B2IQxnR6671vR37lnWiYrZ%2B3WchRJi5fMq%2BRgT44yh5g3epwJ6UYodDeuUUNzqaDWUt8BBbrm%2F%2BngmnQfaZd8iSISBY77mh5oYsimRQ7s9aaVjqsUUk4S0PmVUOPtRURmJwgAqazttszQxlliJ%2B%2FGTHRzTjY%2BFGwMjg&X-Amz-Signature=063666b831729a2bd877d7f827b3eb460f388fa161d43f28acf8a3944fbeb94d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

