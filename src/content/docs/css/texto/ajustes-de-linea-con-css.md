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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q44HJCKX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfQzsd%2BgudSMcIsyldzcgyeb23V%2Bo5NelEs45kxaemwgIhAO7P%2FP4gM6Ee6pwOBNxKErGmkmp9hF55lePuJMIAUHQaKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuBjo4dzHw3dX4Kgcq3AOZ6YqTW5zb4VjlPnksmCnyAe0%2Bf1caheyMtV1A7eG6qkh7h1KM7ZQPjNGi2sBATD03ylupf6%2BaaazAY3dsL6mHqE4dAYO8p6VjRp4kuNucoDYkf29Tb9SUmoGuSvyr6YFE0w6z0QiJhZLrbhKfPA%2FrUFCAX79K%2BnGcgO8VEnmSXcjQCUodEJqOc9Ju%2FXc2mlqeyy1AR5rEVtf%2FoePZAkDbSolUrbTKG9kSHKZn%2BNprGkjM0DWywikgSAndN1osQ9kzhcRTDpxZP1hcVNHBtDK%2F1ZAaYshAB%2BOUcXrW0VY8F7vLpKyuGvdn8RXAA6j5iDAtkp2hE4yy3yM%2FXHV036fLV%2Fh5CH6Nt8jDhLL4i1Hyuzw9a9QyzSksyoOi7kXmHy7Vd6QHldiMebyFE6cYSjZDQVe0P5M6vOCngJxH4bjtnqWjar%2FAoFc5jSHM8I1iYzVvA7TGRBCdmrPjUHWqSmn2Tirmudxtfb993NeYzEs4luIBhrUCQC1PIE3LjIY1jWnPGRZ1n9beALKvZqqiLzvWo2cPBfN6KlZBTrCrQBQMKUInkcr9cQLNMvEaAt9v1jMJpn%2BSFB2zIVJIeJ0xYr6RY2wokLvvGODlg3P%2BijV2T%2FYD79mxpefpzuOBRTD%2BnovKBjqkAYv9p6Vx2Sjlr0XgnfN7IiB2e61DF07%2Fr%2FY3npv8o9AGawPKN7ETpnDw2rk1xbexRU%2BaG6Y%2BUVUo5G7vY5k5OopMC1uxQ%2BHqNp2ZjlpevcnA8%2BAromTZMebC31etAv6EZR%2BNKFYXuhBXsrUIE0F7PtA%2BiFs8PcJ%2F7zzPgna0mM6lGlHXHRPbKHF5mYC0fsR9jGr7K7yWR5ccQA%2FgGXGjR3Uur1sn&X-Amz-Signature=c090e9c8745e61aafc955f3431139e984e29585c90029bbbd1b3901a7929a464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q44HJCKX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfQzsd%2BgudSMcIsyldzcgyeb23V%2Bo5NelEs45kxaemwgIhAO7P%2FP4gM6Ee6pwOBNxKErGmkmp9hF55lePuJMIAUHQaKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxuBjo4dzHw3dX4Kgcq3AOZ6YqTW5zb4VjlPnksmCnyAe0%2Bf1caheyMtV1A7eG6qkh7h1KM7ZQPjNGi2sBATD03ylupf6%2BaaazAY3dsL6mHqE4dAYO8p6VjRp4kuNucoDYkf29Tb9SUmoGuSvyr6YFE0w6z0QiJhZLrbhKfPA%2FrUFCAX79K%2BnGcgO8VEnmSXcjQCUodEJqOc9Ju%2FXc2mlqeyy1AR5rEVtf%2FoePZAkDbSolUrbTKG9kSHKZn%2BNprGkjM0DWywikgSAndN1osQ9kzhcRTDpxZP1hcVNHBtDK%2F1ZAaYshAB%2BOUcXrW0VY8F7vLpKyuGvdn8RXAA6j5iDAtkp2hE4yy3yM%2FXHV036fLV%2Fh5CH6Nt8jDhLL4i1Hyuzw9a9QyzSksyoOi7kXmHy7Vd6QHldiMebyFE6cYSjZDQVe0P5M6vOCngJxH4bjtnqWjar%2FAoFc5jSHM8I1iYzVvA7TGRBCdmrPjUHWqSmn2Tirmudxtfb993NeYzEs4luIBhrUCQC1PIE3LjIY1jWnPGRZ1n9beALKvZqqiLzvWo2cPBfN6KlZBTrCrQBQMKUInkcr9cQLNMvEaAt9v1jMJpn%2BSFB2zIVJIeJ0xYr6RY2wokLvvGODlg3P%2BijV2T%2FYD79mxpefpzuOBRTD%2BnovKBjqkAYv9p6Vx2Sjlr0XgnfN7IiB2e61DF07%2Fr%2FY3npv8o9AGawPKN7ETpnDw2rk1xbexRU%2BaG6Y%2BUVUo5G7vY5k5OopMC1uxQ%2BHqNp2ZjlpevcnA8%2BAromTZMebC31etAv6EZR%2BNKFYXuhBXsrUIE0F7PtA%2BiFs8PcJ%2F7zzPgna0mM6lGlHXHRPbKHF5mYC0fsR9jGr7K7yWR5ccQA%2FgGXGjR3Uur1sn&X-Amz-Signature=b6fe9f22a2131e8d96074c9abd5aee90c204d9d273d814514bf231143493d0d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

