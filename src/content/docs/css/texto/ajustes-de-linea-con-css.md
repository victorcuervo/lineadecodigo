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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A62DCGW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBseGyBS%2F0Qb4tuaj0DeVZ62QlMwJLluDw6Mtc11MPrcAiEAlF5Kw4i08J%2F%2FBrvsufdVCimCjXQRyhm13XRTIqOfOasqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmGgx8w0C0Z6%2Bu1GyrcA0qLfsdgqH1Bf5fLY2JRA2Hk503UgHxdsWLy8Wr0%2BfhfePsNxp83d%2FvM0BjGaVRRQ2nFcPjdj8zgaOIQ1rxJoP0x%2FTvXegYozNdwp70SRoxsfdLif4V6wTurQ9nVliGuqNUR1MK6ZiEzeCcj6j4dilvrQrJmiOGvmv%2FdzfKHBEBacoTU3XB7kGwOTuaE8GA5wU%2B0nvm7J1VDhKixC2cw%2Bn2fnA1bvXHgbUB3uzzX2lbDNBCOJcI30OYD1hIt67Vq1B67sfaSxv6bhE2bePem4tFW3iPiBKPjzytOqyKmZ2GtkUKYfTTdvPckH9uY0ZH2DwL4xvKz9%2B1sFT478UiSvHkHlwQNnk9JpO%2BB%2FtPDEJyXuebAT4cP1loT4f88fSH7itqepu8m9dmFCN03H7tZpDj2KDOd3dI3ljgpssyx0iHSHGjYUcd%2FKlPVIJE%2BMzqZx9FEY96%2FDwlf3k3aaMLASVVEFA0XFWFWmKIbUQNpvzRskRWVV3FQM%2FZv79uYflRl47kXu9WRGa%2FufaBuONnko8yHtrj3XWutTIEelnhkz4PMR9jIL%2BI4Pvja4Y2gBpAEQUX5THV6yji31WEbRRnv2pxm3tHNUn%2F1QYbbSkjzAR4VUb60WbsiPAElta0%2BMJafi8oGOqUBvsBOcSTnQ0ghrEn8fvT48CsZ5%2FbPDaNfz08db5DaduEiaIDq47783LWKTq6JITbR2MTUwavZvwC4%2ByG%2BpqQRFBzccEuLv2ixKpeiO613l%2FDuvTl3xyXn%2F9Y89GRrwWQUeoc7Ia5wxLk14cMtwLTFa3kW4PsN0gQFGOLPSy81Oyvcp2gIR9G143RGs6PHjCJueOiXDbegEbKpEjz%2BC5YL3BTe0tjq&X-Amz-Signature=fdbfac5801729d8a1f9f7a5439c0a6993347de661e723860cbff0a2d87e03f38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A62DCGW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBseGyBS%2F0Qb4tuaj0DeVZ62QlMwJLluDw6Mtc11MPrcAiEAlF5Kw4i08J%2F%2FBrvsufdVCimCjXQRyhm13XRTIqOfOasqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmGgx8w0C0Z6%2Bu1GyrcA0qLfsdgqH1Bf5fLY2JRA2Hk503UgHxdsWLy8Wr0%2BfhfePsNxp83d%2FvM0BjGaVRRQ2nFcPjdj8zgaOIQ1rxJoP0x%2FTvXegYozNdwp70SRoxsfdLif4V6wTurQ9nVliGuqNUR1MK6ZiEzeCcj6j4dilvrQrJmiOGvmv%2FdzfKHBEBacoTU3XB7kGwOTuaE8GA5wU%2B0nvm7J1VDhKixC2cw%2Bn2fnA1bvXHgbUB3uzzX2lbDNBCOJcI30OYD1hIt67Vq1B67sfaSxv6bhE2bePem4tFW3iPiBKPjzytOqyKmZ2GtkUKYfTTdvPckH9uY0ZH2DwL4xvKz9%2B1sFT478UiSvHkHlwQNnk9JpO%2BB%2FtPDEJyXuebAT4cP1loT4f88fSH7itqepu8m9dmFCN03H7tZpDj2KDOd3dI3ljgpssyx0iHSHGjYUcd%2FKlPVIJE%2BMzqZx9FEY96%2FDwlf3k3aaMLASVVEFA0XFWFWmKIbUQNpvzRskRWVV3FQM%2FZv79uYflRl47kXu9WRGa%2FufaBuONnko8yHtrj3XWutTIEelnhkz4PMR9jIL%2BI4Pvja4Y2gBpAEQUX5THV6yji31WEbRRnv2pxm3tHNUn%2F1QYbbSkjzAR4VUb60WbsiPAElta0%2BMJafi8oGOqUBvsBOcSTnQ0ghrEn8fvT48CsZ5%2FbPDaNfz08db5DaduEiaIDq47783LWKTq6JITbR2MTUwavZvwC4%2ByG%2BpqQRFBzccEuLv2ixKpeiO613l%2FDuvTl3xyXn%2F9Y89GRrwWQUeoc7Ia5wxLk14cMtwLTFa3kW4PsN0gQFGOLPSy81Oyvcp2gIR9G143RGs6PHjCJueOiXDbegEbKpEjz%2BC5YL3BTe0tjq&X-Amz-Signature=e3375beb2f632e1f5cd22d07315e8904218739b501f5cc171c82234fdaef1699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

