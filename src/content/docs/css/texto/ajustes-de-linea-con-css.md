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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD4S4Y7Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlaVCfjY%2B%2BrJC4ozRG2ehfr6vPTh98fnB6VjGdTTSiFAiB8vVpfFulxHMNoArYOHfRpy4RTFdn8vCiPypGKtvqiCCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGbspmxWv5lmY41gKtwD6rAW83%2Bs241tkDQw4WKfycn3Xg6ybmalLUpHTWPyRTgozFKx7HCH3VdAeceY3qpPx%2Fb8GumtsQoP99k%2FESrggVYTiJXx0sTvL5sGCEs70D313vvxgbr4lB%2Bw2HWBv7I%2F1hhnf9ETOBH3S6qWy%2F0QDyffCCcrENSZ47y0x3yGTC3ppBqrbn29MMVAOgJH581TX2Ycka3mG%2F7Ujomxl%2BcIePb7dYp8bfrh%2FvDfP2W3lGnRL%2Bcoxelr2ejId1HsG%2FXC%2FdCLSn%2Fo6bd5IrQe1p798OcTPwpi5gDIFSSQ7fZzQrDBge2kxaR3%2BIK%2B3dk2XGU8nlPJt45n6jggAt8hrLwOijPjPBPVagMekezrMtbSAmKFqudY4vN5Mi6dI%2FvKfMoBp88uvWeAvNXc0I0N4YIu4nrstlBHq1Mf3AuOzkrzUJM59M9KoBJajUwoF5LMAm6cuw5yDzRwbk1Cu4hNs%2FQyiECGeROd16Hmlhyeix0HGyDGB%2Bi08%2BmWrXFORJ%2FENohfWXeGZo%2FLWsP5ZFOrT6rkt9lI89OpPP52GF9wWuHM9RajoPKtYhY94dRsaosmqR4Yz4nvLXtWSVYKsLBAlKoHRTNxRFCY4mLaSdQ8JoKmjcvDapjd0bxWZUIQZsUw8K2MygY6pgFABCGK%2B42E39SWaM9vdgQABKcv1%2FDRjEqVpnSl9jHJ6tmcM1fy%2BKqN6v4ZZmraX55Z7SIexLpvLZXWHfTMOTTYiD7d%2BmLOICB0ThW04Cc2ZTUV9qI6qOykRcQokgQ6JKm2NSohDYLCoxxYP0Ak1syLnBUHZScR7l9KREymx1oNCdH2Y6q0XouofjJ2y4AxDgs65cqT0oRoVXsJMQJYKnhiRAJRYh%2Fe&X-Amz-Signature=f7b997b2c2ef9cfe59934eadcc27c84359360f745ace8513abc914c79035259d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD4S4Y7Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T213804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDlaVCfjY%2B%2BrJC4ozRG2ehfr6vPTh98fnB6VjGdTTSiFAiB8vVpfFulxHMNoArYOHfRpy4RTFdn8vCiPypGKtvqiCCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrGbspmxWv5lmY41gKtwD6rAW83%2Bs241tkDQw4WKfycn3Xg6ybmalLUpHTWPyRTgozFKx7HCH3VdAeceY3qpPx%2Fb8GumtsQoP99k%2FESrggVYTiJXx0sTvL5sGCEs70D313vvxgbr4lB%2Bw2HWBv7I%2F1hhnf9ETOBH3S6qWy%2F0QDyffCCcrENSZ47y0x3yGTC3ppBqrbn29MMVAOgJH581TX2Ycka3mG%2F7Ujomxl%2BcIePb7dYp8bfrh%2FvDfP2W3lGnRL%2Bcoxelr2ejId1HsG%2FXC%2FdCLSn%2Fo6bd5IrQe1p798OcTPwpi5gDIFSSQ7fZzQrDBge2kxaR3%2BIK%2B3dk2XGU8nlPJt45n6jggAt8hrLwOijPjPBPVagMekezrMtbSAmKFqudY4vN5Mi6dI%2FvKfMoBp88uvWeAvNXc0I0N4YIu4nrstlBHq1Mf3AuOzkrzUJM59M9KoBJajUwoF5LMAm6cuw5yDzRwbk1Cu4hNs%2FQyiECGeROd16Hmlhyeix0HGyDGB%2Bi08%2BmWrXFORJ%2FENohfWXeGZo%2FLWsP5ZFOrT6rkt9lI89OpPP52GF9wWuHM9RajoPKtYhY94dRsaosmqR4Yz4nvLXtWSVYKsLBAlKoHRTNxRFCY4mLaSdQ8JoKmjcvDapjd0bxWZUIQZsUw8K2MygY6pgFABCGK%2B42E39SWaM9vdgQABKcv1%2FDRjEqVpnSl9jHJ6tmcM1fy%2BKqN6v4ZZmraX55Z7SIexLpvLZXWHfTMOTTYiD7d%2BmLOICB0ThW04Cc2ZTUV9qI6qOykRcQokgQ6JKm2NSohDYLCoxxYP0Ak1syLnBUHZScR7l9KREymx1oNCdH2Y6q0XouofjJ2y4AxDgs65cqT0oRoVXsJMQJYKnhiRAJRYh%2Fe&X-Amz-Signature=53145df7c5172cf6cf900935975b16506199ba62cde199deadc743d013720406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

