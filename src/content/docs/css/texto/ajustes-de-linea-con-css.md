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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVY37LOR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN6UbPgu8pJU35RavC7HfW7z2w4vXEqU1q07RQLD3vIAIgbbkIP6i2%2Bum2GQ2Vbo7jdP31FxpAT1wJsw%2BX%2BIscxqsq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDB3Gp11pZn6RxWjBRCrcA2cYwZp%2FkvFDvKj80z3WTIA7HHOd1pTUOA5Kl4nhe6c7SoOgUd54Nxfttzk4dYaTwtuAoa%2BC36GSwbXHBywO4P8pbJBwuBYV0kCttjaZvQuzDc%2BO%2FPqBdzx7rEgj3IXSzwgTOwn9hYEZyvnq4zsr7iGmu7yXyRvS%2BCGkqS%2B0mSvIcVBDOSXYXwjD7EDw%2BP8cB%2B10wgwgbmEJcxRyIqVwLq9dRVg3UTq8YRgxlG%2F%2BSewwiKkeyJ%2Bn2DMeaNr2qGG3WbLThTGFsLlW6KUOIg6nK%2BBBqAUylHKyaCIU9scqgV3hb2D5ErX56cMaiDRspfis49h%2F0Jm8pOiMywvLqqLaGItVpU%2Fmwi%2BpB7u0K2u9dvYEAgtmov%2BoZTTfw8kIkTSvpsvAk4hli4V7vW2801uFwHZVIHB6LYj40VhGRvUu7QFeRc0GJ0DxxbeRX03w1PiKS3xkbyOOEcgutDOV0v9Hsn6ZqG%2BKnQ%2FMrUADgnIjSy%2BisP4TCBlhGPhAMS6QuXGvkyMmuTQ2XOuIOWuu6A9YWzxQau4zTNFTdHsvU3aFFjKra2Z80vUuNWgfMHckpbynXcZoXjLl%2B80qrJbKvQ9IwQantqCBb5wNmKDbYM5BBc5xw9R8SAhdwB79DVDpMPWOisoGOqUBTg3isTQZE9iK65%2FOkup5w0ZRqiPf2OOfQURpfJfclms238RDENvPOQLIXbZdxMR4e3lu%2Fgk3UKUPwMBuANAGN0dYVqDSthr20xVJ4U1mkT7lRjt0H%2FV%2BgSMhToyyZNNYhv5Aj0Az%2Bo0eGuGNL%2FgColW%2F45MjvKAp562xwh6bgfiy4GmAOHFWbUV8UGPSvB3dZTWYU0YZyv4NjXVWOVNk3lowgjqH&X-Amz-Signature=41ae390f5e7a291881808c90d0b66742bdeab5f848b327b9ce30186e97663e53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVY37LOR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCN6UbPgu8pJU35RavC7HfW7z2w4vXEqU1q07RQLD3vIAIgbbkIP6i2%2Bum2GQ2Vbo7jdP31FxpAT1wJsw%2BX%2BIscxqsq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDB3Gp11pZn6RxWjBRCrcA2cYwZp%2FkvFDvKj80z3WTIA7HHOd1pTUOA5Kl4nhe6c7SoOgUd54Nxfttzk4dYaTwtuAoa%2BC36GSwbXHBywO4P8pbJBwuBYV0kCttjaZvQuzDc%2BO%2FPqBdzx7rEgj3IXSzwgTOwn9hYEZyvnq4zsr7iGmu7yXyRvS%2BCGkqS%2B0mSvIcVBDOSXYXwjD7EDw%2BP8cB%2B10wgwgbmEJcxRyIqVwLq9dRVg3UTq8YRgxlG%2F%2BSewwiKkeyJ%2Bn2DMeaNr2qGG3WbLThTGFsLlW6KUOIg6nK%2BBBqAUylHKyaCIU9scqgV3hb2D5ErX56cMaiDRspfis49h%2F0Jm8pOiMywvLqqLaGItVpU%2Fmwi%2BpB7u0K2u9dvYEAgtmov%2BoZTTfw8kIkTSvpsvAk4hli4V7vW2801uFwHZVIHB6LYj40VhGRvUu7QFeRc0GJ0DxxbeRX03w1PiKS3xkbyOOEcgutDOV0v9Hsn6ZqG%2BKnQ%2FMrUADgnIjSy%2BisP4TCBlhGPhAMS6QuXGvkyMmuTQ2XOuIOWuu6A9YWzxQau4zTNFTdHsvU3aFFjKra2Z80vUuNWgfMHckpbynXcZoXjLl%2B80qrJbKvQ9IwQantqCBb5wNmKDbYM5BBc5xw9R8SAhdwB79DVDpMPWOisoGOqUBTg3isTQZE9iK65%2FOkup5w0ZRqiPf2OOfQURpfJfclms238RDENvPOQLIXbZdxMR4e3lu%2Fgk3UKUPwMBuANAGN0dYVqDSthr20xVJ4U1mkT7lRjt0H%2FV%2BgSMhToyyZNNYhv5Aj0Az%2Bo0eGuGNL%2FgColW%2F45MjvKAp562xwh6bgfiy4GmAOHFWbUV8UGPSvB3dZTWYU0YZyv4NjXVWOVNk3lowgjqH&X-Amz-Signature=6d2da90b7df2119402f345611bd7a6f03e79eda62777646cf9cf07039521e53a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

