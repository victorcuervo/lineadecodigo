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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUVDRFUO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F1ASoV5GCPVvc%2Brx6tB%2B%2BUCsGDkgb%2Bm227XXGTpkbBAiEAo0Yiq3s%2F5On4VaR23BWCnwVR8aWU9b6NXOrIRKaTFKQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgQNoKXxJ3B%2BSbZWSrcAzDi1aMofwpxEJUzoMcAu9fVxaQGEpCfRfSzUlZ0N4YurLLPcfX6PMfQ4jUz8SC1jqlO0sKQxY8nWK17LaGndmOjxehckKmxr23wBvP7WYOLOYz3JB0oZEoogOnO%2B45EXw%2BfJrO9VctryXhaendrBl%2FmckcdP6klkLYwzU4iZyLfQglMLhsPRIBkKjoh7eedXGsXdjqAcrg5T1SZvepb0cMho4Ya%2BJY39Vavt0ZiuZfpjtHB4Pspf5FLfUwug9%2BEuP3tQKrg0MVXDcNntGKlJSA32wkcp7BOJa7BS%2FRkLue0aycGBzspMcxKiUnVPmxPvGsph7VA%2FRuZfCqydHi7pONHN7fxoIuJmlc4zeRt5o0%2BvUVEVJ%2BtQxLsrGg%2F%2BCuHIPmamaxku1qTFWsRMmuMc3c3Ot19a8BoIuFIVuUaAwozHcCeTajLZHAm3jkI4ojQOKctmmwc7Z57jDAMjkI2dThdh4CKTBTEFtZCJk367n%2F3Mw50oaD5SGx56jFmRGPT%2BjQZ%2F7gT062VEMgd4S5OMpaWWk1MFWsGtc5%2FOXOtAjKxbO04bdk2FXhy3NKvCRUel3pzUi1xXhsaYNl8t3AnAKCr9hTGjPtnR1Viu605t1W3cLxPirYxZVmDlF6zMJ6Ai8oGOqUB%2FMxA%2Fu5zCHtTBobErol%2FC7Lxsc9uBkdcwShwSP2KDqJXd%2BSzHNY%2FSTiPbxFHUwI2jjJr9Tln0BYSp9oqvyZrTEBzTlpQcXYUkydq1VCb4fav9gwrD5vw89N2NphFg1I8PNyOd7P2qlLNmSOOsMqi1JMCYdsXXMYmVJOaLKTbyCvEZY0QS3nq5K%2F9K19v3kDh9TXZWZ3JlxkXr23fzG3xalMEyzGE&X-Amz-Signature=7c974adbe7269dc9eea4549263a8a93b5818d633380792530fe8d6bc75f2532a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUVDRFUO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2F1ASoV5GCPVvc%2Brx6tB%2B%2BUCsGDkgb%2Bm227XXGTpkbBAiEAo0Yiq3s%2F5On4VaR23BWCnwVR8aWU9b6NXOrIRKaTFKQqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgQNoKXxJ3B%2BSbZWSrcAzDi1aMofwpxEJUzoMcAu9fVxaQGEpCfRfSzUlZ0N4YurLLPcfX6PMfQ4jUz8SC1jqlO0sKQxY8nWK17LaGndmOjxehckKmxr23wBvP7WYOLOYz3JB0oZEoogOnO%2B45EXw%2BfJrO9VctryXhaendrBl%2FmckcdP6klkLYwzU4iZyLfQglMLhsPRIBkKjoh7eedXGsXdjqAcrg5T1SZvepb0cMho4Ya%2BJY39Vavt0ZiuZfpjtHB4Pspf5FLfUwug9%2BEuP3tQKrg0MVXDcNntGKlJSA32wkcp7BOJa7BS%2FRkLue0aycGBzspMcxKiUnVPmxPvGsph7VA%2FRuZfCqydHi7pONHN7fxoIuJmlc4zeRt5o0%2BvUVEVJ%2BtQxLsrGg%2F%2BCuHIPmamaxku1qTFWsRMmuMc3c3Ot19a8BoIuFIVuUaAwozHcCeTajLZHAm3jkI4ojQOKctmmwc7Z57jDAMjkI2dThdh4CKTBTEFtZCJk367n%2F3Mw50oaD5SGx56jFmRGPT%2BjQZ%2F7gT062VEMgd4S5OMpaWWk1MFWsGtc5%2FOXOtAjKxbO04bdk2FXhy3NKvCRUel3pzUi1xXhsaYNl8t3AnAKCr9hTGjPtnR1Viu605t1W3cLxPirYxZVmDlF6zMJ6Ai8oGOqUB%2FMxA%2Fu5zCHtTBobErol%2FC7Lxsc9uBkdcwShwSP2KDqJXd%2BSzHNY%2FSTiPbxFHUwI2jjJr9Tln0BYSp9oqvyZrTEBzTlpQcXYUkydq1VCb4fav9gwrD5vw89N2NphFg1I8PNyOd7P2qlLNmSOOsMqi1JMCYdsXXMYmVJOaLKTbyCvEZY0QS3nq5K%2F9K19v3kDh9TXZWZ3JlxkXr23fzG3xalMEyzGE&X-Amz-Signature=767169f9f4096226d935ca0dcb14110dcf64663160e46ce80803193a083ffdff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

