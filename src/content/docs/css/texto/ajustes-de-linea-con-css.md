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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXKFCD5U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMzJZOTIm5pISFpvn36oWM4oQdHHS0yAwcXi32PUTyAAiAeri3vVVvJJXp9kY85fOb9on9XxwiVTd%2FjdQle7CVtvSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzujQoXl092iIy5AzKtwDNdswNGWk2H6t07VgMfuVUo11M3Qpo9ffu8MQd4KE%2BH3dp%2FHE2vB0OpjIvXqpiWProlOIVqutQAfcPb%2FwTPe0bR9tm8Nxr82AkqMuGqgomPKNw1bbCj1hCYDEjUOCvCC3VNiVYCeqrhOsuab5AH0W%2BCAGWEOsXIs1y3UT%2FyGV554tUFKooonOHIweljBC1Mzi4WbVWIDcwca3E0VNvDBIygRbKyZEShz6cSz5DRcrwe%2Bwxi65Ob2CN46eSNlzGtHAIHPwCoUJOUC43IrRm44aNue%2F1MfN7HehaoJFxCDVp9Tal9NVDir3UMDnjgk9AnG996KayFPGOitSTfkPN0kAPHCh0T5MEfgsGmWK%2FCqJeEnS3Yo3WbxQr3zGnVbLseMeZdy5Ri1qtCzppUFViQY6Dq4rIRgzs96Nkzi183Kofr7jskDbGNIqcqgGPHURS24CV6hvcsxbyMvU6QSGQhw9puJyoZCVu%2BnxHz0AkY%2FQ5ltjdCpG5pdhdl9EZrB3V2DQM6bQ%2FTgf4SdWAlG6OG8adBfiMp0wKZhqyDdd106HKg%2FiK8mSgWT4Giu06l68f0t0Cn39%2BJOU8U4%2B5%2FZPWNIpDtHl%2FDLdhbv5bW%2FmY5qjttK42lZ0LFtd9DUDlEEwzJ6LygY6pgGbzbYCuyuySMTaDr5Cf2cfPU1QVlB86wCrIdX%2B7DDDKwzec5CJr8W9mZ977WMPbPoILsZgm7pYS5m4lpg2NQK8aaRtP%2BfKQx%2BKRVaa99jyGzNWa3D9oy44qU7lVw%2BdeE%2B1jyhvQEcNipvjLAZOIeCIjD480Sf60PFq5mIRsYuRDwxjLLQPxGLWTs%2BOoUlyAErLmMqZf0KWpzcvIam0fzx%2FEN8HEZr1&X-Amz-Signature=ddb84ee1bbafe0ec21d5216399db48e236199c6366a1bd3c16a703104c0e4f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXKFCD5U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMzJZOTIm5pISFpvn36oWM4oQdHHS0yAwcXi32PUTyAAiAeri3vVVvJJXp9kY85fOb9on9XxwiVTd%2FjdQle7CVtvSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzujQoXl092iIy5AzKtwDNdswNGWk2H6t07VgMfuVUo11M3Qpo9ffu8MQd4KE%2BH3dp%2FHE2vB0OpjIvXqpiWProlOIVqutQAfcPb%2FwTPe0bR9tm8Nxr82AkqMuGqgomPKNw1bbCj1hCYDEjUOCvCC3VNiVYCeqrhOsuab5AH0W%2BCAGWEOsXIs1y3UT%2FyGV554tUFKooonOHIweljBC1Mzi4WbVWIDcwca3E0VNvDBIygRbKyZEShz6cSz5DRcrwe%2Bwxi65Ob2CN46eSNlzGtHAIHPwCoUJOUC43IrRm44aNue%2F1MfN7HehaoJFxCDVp9Tal9NVDir3UMDnjgk9AnG996KayFPGOitSTfkPN0kAPHCh0T5MEfgsGmWK%2FCqJeEnS3Yo3WbxQr3zGnVbLseMeZdy5Ri1qtCzppUFViQY6Dq4rIRgzs96Nkzi183Kofr7jskDbGNIqcqgGPHURS24CV6hvcsxbyMvU6QSGQhw9puJyoZCVu%2BnxHz0AkY%2FQ5ltjdCpG5pdhdl9EZrB3V2DQM6bQ%2FTgf4SdWAlG6OG8adBfiMp0wKZhqyDdd106HKg%2FiK8mSgWT4Giu06l68f0t0Cn39%2BJOU8U4%2B5%2FZPWNIpDtHl%2FDLdhbv5bW%2FmY5qjttK42lZ0LFtd9DUDlEEwzJ6LygY6pgGbzbYCuyuySMTaDr5Cf2cfPU1QVlB86wCrIdX%2B7DDDKwzec5CJr8W9mZ977WMPbPoILsZgm7pYS5m4lpg2NQK8aaRtP%2BfKQx%2BKRVaa99jyGzNWa3D9oy44qU7lVw%2BdeE%2B1jyhvQEcNipvjLAZOIeCIjD480Sf60PFq5mIRsYuRDwxjLLQPxGLWTs%2BOoUlyAErLmMqZf0KWpzcvIam0fzx%2FEN8HEZr1&X-Amz-Signature=aacd7c9f44edaabc6557176128918e6b82fb25ebeb5260b1148699f8ad4c292b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

