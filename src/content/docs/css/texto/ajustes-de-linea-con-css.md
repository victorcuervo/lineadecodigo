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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674UKBAH5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOQiWfCSjQsNsOGTmVToSJubV0ADxkf4atnfTb%2BMfOwgIgQZ%2BExf7My0dGvy9RGf8jWUWdk70v9pFC%2FV9TQjSzUGgq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPLPdcz9A9zKYu9C%2FircA10JfilV%2F7aY09rRl5GSxK4yfV3d0eMtOzimy147uUrcl0qfwP1X%2FMaejDZWtQOa%2B%2FdZny9whk2OSEkUlNLiFAajHS2wEPJ9bWlwDtGMA3hrE5YfVomuIPRLE23UCoV2GN%2FwDcyaBAVACoKzdWriTsqi75F%2Bkp7s%2B7RhL%2BKKWSFnVt7cAQD1BvXUTLodUH4sDO8MXfDXfi3%2B9g%2FD01jg2pnRNWddCzOk0r94bTWcxKPt%2BGkmfDr6MC%2FbqvJnoZHcvlYmTy%2BRsidRRwhQKmnSoUcfspMH5pCzFdU1MigevCTjeZ9kXeUn%2BWoNNPiPYpT1us7L362w%2Br%2Bns3RGXhMTvqjUkBgkoNz7qSlD9A7%2BUm7JG3%2FYLYdFuml4HNhOdln%2BOmnJsfL85VdHp7rLdU%2F8BS68myKLDK9%2FpxsB332pLF25sCMDnkJNuWlwhieds5eH8RhGBxZknUEpVFBZ1Bmz9%2BTDVif7tXN8MMZO3OT4TIyS9vkYCLbh4zoxJKrxtPe7OHq118grx%2BZlA1rASAFCwWZZZiZxitLHD20ru8F6NFaq%2BRuz3iCIvDUx164B2GYvCeukAmuEFQC7OyzuWSuMFt0pTTGQSMT%2BxHzreT%2BPr1RStTrCb0j81a15PsdfMPaxiMoGOqUB5zlKpRqktKs6MFa%2B2%2FoIL5l28LduFfvGBkoi82FNTUY%2Bp0uYTu4OluI%2BbhFuHUvB3pT9CRdOIEKTp2v8oDpJghfyE3N2jfQITl%2BTA3FAKDcA9jxp99tkiw2smCm92fDdu9ECSlZ8gb3VzX77Ag7FlyVCPd%2BCEKu9nwIeOA2tGXs6lY%2FMdG0phcj008FgUNoAdykF2WFugCEHr%2B46afjWNkGbNCT%2B&X-Amz-Signature=a3c1af0d105755b48c8d153350f427983a4d4cac23cdb1493f78b78975483ea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674UKBAH5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOQiWfCSjQsNsOGTmVToSJubV0ADxkf4atnfTb%2BMfOwgIgQZ%2BExf7My0dGvy9RGf8jWUWdk70v9pFC%2FV9TQjSzUGgq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDPLPdcz9A9zKYu9C%2FircA10JfilV%2F7aY09rRl5GSxK4yfV3d0eMtOzimy147uUrcl0qfwP1X%2FMaejDZWtQOa%2B%2FdZny9whk2OSEkUlNLiFAajHS2wEPJ9bWlwDtGMA3hrE5YfVomuIPRLE23UCoV2GN%2FwDcyaBAVACoKzdWriTsqi75F%2Bkp7s%2B7RhL%2BKKWSFnVt7cAQD1BvXUTLodUH4sDO8MXfDXfi3%2B9g%2FD01jg2pnRNWddCzOk0r94bTWcxKPt%2BGkmfDr6MC%2FbqvJnoZHcvlYmTy%2BRsidRRwhQKmnSoUcfspMH5pCzFdU1MigevCTjeZ9kXeUn%2BWoNNPiPYpT1us7L362w%2Br%2Bns3RGXhMTvqjUkBgkoNz7qSlD9A7%2BUm7JG3%2FYLYdFuml4HNhOdln%2BOmnJsfL85VdHp7rLdU%2F8BS68myKLDK9%2FpxsB332pLF25sCMDnkJNuWlwhieds5eH8RhGBxZknUEpVFBZ1Bmz9%2BTDVif7tXN8MMZO3OT4TIyS9vkYCLbh4zoxJKrxtPe7OHq118grx%2BZlA1rASAFCwWZZZiZxitLHD20ru8F6NFaq%2BRuz3iCIvDUx164B2GYvCeukAmuEFQC7OyzuWSuMFt0pTTGQSMT%2BxHzreT%2BPr1RStTrCb0j81a15PsdfMPaxiMoGOqUB5zlKpRqktKs6MFa%2B2%2FoIL5l28LduFfvGBkoi82FNTUY%2Bp0uYTu4OluI%2BbhFuHUvB3pT9CRdOIEKTp2v8oDpJghfyE3N2jfQITl%2BTA3FAKDcA9jxp99tkiw2smCm92fDdu9ECSlZ8gb3VzX77Ag7FlyVCPd%2BCEKu9nwIeOA2tGXs6lY%2FMdG0phcj008FgUNoAdykF2WFugCEHr%2B46afjWNkGbNCT%2B&X-Amz-Signature=f94fbbbd3d7750d2ceb76612470056296df4afc277cbea948270041021dcacf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

