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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFVLBO3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEG%2FPXWB7aZRC1WenmHgXiu42sfR1JtRJqgRvedWYvqAiAP%2BwgApLqqDqmCvZ84VwWkhneIve7vEUOdHcDQ70ZsvCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMPP1M0A5zTX%2BWxN4sKtwDIANZ0l8P2kCYclKtw7mEJRCIBaiLB%2FjiTw%2FjRJaUdknv4aO2IEz0B968cOmZ2%2BOtk%2BNykwyEx3bH0UjzqTNiHOFv1YVxv6VwyJoe%2BoBLAV4XCkLs1%2FDvTtCOwTCm3Bqtt900hPvVwLQzUuFouFCvlJxlQYwllmm%2B1cExrlke89J8v6jYkZcsI5S4rZ8mOhDxyPcnBx7VO1aSHBsG4YkY5bad2KbbqOCQ1%2Fp9%2B6%2FiakvvWygZ%2FK2fDE%2FXrIVcC%2Fy0AT5Xh2KJCmIQGa7KkvrT49IWtalFCiRcbgjNTCtCB4vataVxMkg7DNlisD7B2XTRpysBrcjlPXm4VBasCry%2FOLrT97IrgsXZtVbtR7ej79zwQNWgthYcP4mG47zYhgaCfnSzwoj7aCS0FdqdEa%2B9cMIcy0cUSF2WcWlAIzrrTTZ5%2Bp02KQxn8DZTxK9v65Qr%2B68KdXGVm2vyzd%2FSpsfDE2zlt2js4Gnx1ZJIDdGX73SQnczg0y2CYWU1aUzmkKgt9eBql3B%2Fu9aZBTxVxEdOIdQeGz3w%2BAE9DdhbetdD6kDC%2BDLmYV4NcTZ4I123TRDTBFkYe26lk2%2F0FRJqhOCuRgcb2zSVmhPtMrRSNECEcEEP5VIdD0Mv6iFDP5Uwh8%2BIygY6pgEEHfjRCq6%2B%2FpzDlkIMlGe4Xu%2FUVSjMDpNitq8qXAb9aEIgQaCxXu0LH7udmS7O5Ju%2Boj00%2BFrZV7VkjMBUvz9svmAPzRNSu9E3dr5MMVMzbRg7%2BAe9%2FC7%2FSxzBcyBgifs%2BsbY1siwdWZpTnDMdl8hMwG8lH0nGJzBT2MC0bu5%2F4BYi5PuaJX9g3ssdWrGUg0OOJBvpQDniU8YZDr8VW5mZ2Im9Mm0v&X-Amz-Signature=38d59859f148e4227fff146c32b083e3c351ed6ae35c1f23cf8cecf9828a5c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKFVLBO3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEG%2FPXWB7aZRC1WenmHgXiu42sfR1JtRJqgRvedWYvqAiAP%2BwgApLqqDqmCvZ84VwWkhneIve7vEUOdHcDQ70ZsvCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMPP1M0A5zTX%2BWxN4sKtwDIANZ0l8P2kCYclKtw7mEJRCIBaiLB%2FjiTw%2FjRJaUdknv4aO2IEz0B968cOmZ2%2BOtk%2BNykwyEx3bH0UjzqTNiHOFv1YVxv6VwyJoe%2BoBLAV4XCkLs1%2FDvTtCOwTCm3Bqtt900hPvVwLQzUuFouFCvlJxlQYwllmm%2B1cExrlke89J8v6jYkZcsI5S4rZ8mOhDxyPcnBx7VO1aSHBsG4YkY5bad2KbbqOCQ1%2Fp9%2B6%2FiakvvWygZ%2FK2fDE%2FXrIVcC%2Fy0AT5Xh2KJCmIQGa7KkvrT49IWtalFCiRcbgjNTCtCB4vataVxMkg7DNlisD7B2XTRpysBrcjlPXm4VBasCry%2FOLrT97IrgsXZtVbtR7ej79zwQNWgthYcP4mG47zYhgaCfnSzwoj7aCS0FdqdEa%2B9cMIcy0cUSF2WcWlAIzrrTTZ5%2Bp02KQxn8DZTxK9v65Qr%2B68KdXGVm2vyzd%2FSpsfDE2zlt2js4Gnx1ZJIDdGX73SQnczg0y2CYWU1aUzmkKgt9eBql3B%2Fu9aZBTxVxEdOIdQeGz3w%2BAE9DdhbetdD6kDC%2BDLmYV4NcTZ4I123TRDTBFkYe26lk2%2F0FRJqhOCuRgcb2zSVmhPtMrRSNECEcEEP5VIdD0Mv6iFDP5Uwh8%2BIygY6pgEEHfjRCq6%2B%2FpzDlkIMlGe4Xu%2FUVSjMDpNitq8qXAb9aEIgQaCxXu0LH7udmS7O5Ju%2Boj00%2BFrZV7VkjMBUvz9svmAPzRNSu9E3dr5MMVMzbRg7%2BAe9%2FC7%2FSxzBcyBgifs%2BsbY1siwdWZpTnDMdl8hMwG8lH0nGJzBT2MC0bu5%2F4BYi5PuaJX9g3ssdWrGUg0OOJBvpQDniU8YZDr8VW5mZ2Im9Mm0v&X-Amz-Signature=32935be329f03aa534c60450ea4a922cbb80f23ad7c611bc7537b5e6900e295e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

