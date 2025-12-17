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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636FBANLY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoVGNO2BCIsRe%2FPDRSscYT4TiYQRuNwssxmG6b1Oi9fAiEAxweTiYrT4zg0RqGQ0bUSAn9W6SwPr8o48KvJf7X0P2Aq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMuLyH88r7b4NKaDpyrcAzxhJ2uM3Ta11nfzyA5MJbbRG3o8eEaAJCbDRgfWQbP53JGvFoQbTJpgDk4pqlnqlWaYVzVVs6NpqpdVIYZF6qu6qmfFykj3XycPJh%2BrxFl3AL1j5RkxrluaBH690hF9T7cFeqdLne1zLRFcVJXiBtKIKV%2FSWKgAChthsayKfFsSaNX73lgAZUM1EKRGeOeqiTolnbHs1QaTcxH9VHbbT6FieINAOFdY0%2BRwiLUYhD%2FYjklN9x130KG36sYpXpUyotHyVMOuM%2BTcNWDnG5xuWx9MtkNzz8zVeAymffu%2FH7yLGQl7CkyolC2piCcMK%2FpPCDBuZFQotLUu63oZu%2FPY5aOmlwI8dRflc9m4TAAb2r8RiXf2ETLlZnvnj9VoZpBid0oKg7o2Xl5CqnYG810hRoCd3kqhKCVtpICpuJ0v%2FVw9iTOEiyAnvibhHtaKTIoU7Q2XBstANK3KHld0XpDbNnGmYcF2076mTkMCSvztbnedJKkw%2FaDVhRiqQn1YG2s6PFHJ9I2QZ2alYH9CNx5Da9PQ%2F%2F4Q2kS71AeOlJ03lA40d8HjM3yYpNIjF0fZkZEF8yFf3RDkShmPdiJeQxMnJi%2B%2B4Muoe4Bnxku8M2YH8tqQ773tH%2BymiGoemjgrMNiqisoGOqUBfpF3lfl24m5NHn8rJcxe3zr%2BSafqf8jPt2cN%2F2tVJqPUchDlHnI83TGr9k0HqMUQUKCa7fHoXFSUnfWe3I185EMWBenQtjgkaFMs%2Bt24nFBrkfw1S7u9btTRI4rbQ5t%2FFkxxfkud02WzFud7kChNrZmmWQa8paJbd7EgxkWKfo4KJBvKV2c4oj%2FgRcAZgSFS%2B%2B11qH0UX9xSGwYWIKZz1IUpbgFb&X-Amz-Signature=f2b82735e41014445ca8a6157d3669e5d0244e9e62fbc470e76a28ba2ce3885b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636FBANLY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoVGNO2BCIsRe%2FPDRSscYT4TiYQRuNwssxmG6b1Oi9fAiEAxweTiYrT4zg0RqGQ0bUSAn9W6SwPr8o48KvJf7X0P2Aq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDMuLyH88r7b4NKaDpyrcAzxhJ2uM3Ta11nfzyA5MJbbRG3o8eEaAJCbDRgfWQbP53JGvFoQbTJpgDk4pqlnqlWaYVzVVs6NpqpdVIYZF6qu6qmfFykj3XycPJh%2BrxFl3AL1j5RkxrluaBH690hF9T7cFeqdLne1zLRFcVJXiBtKIKV%2FSWKgAChthsayKfFsSaNX73lgAZUM1EKRGeOeqiTolnbHs1QaTcxH9VHbbT6FieINAOFdY0%2BRwiLUYhD%2FYjklN9x130KG36sYpXpUyotHyVMOuM%2BTcNWDnG5xuWx9MtkNzz8zVeAymffu%2FH7yLGQl7CkyolC2piCcMK%2FpPCDBuZFQotLUu63oZu%2FPY5aOmlwI8dRflc9m4TAAb2r8RiXf2ETLlZnvnj9VoZpBid0oKg7o2Xl5CqnYG810hRoCd3kqhKCVtpICpuJ0v%2FVw9iTOEiyAnvibhHtaKTIoU7Q2XBstANK3KHld0XpDbNnGmYcF2076mTkMCSvztbnedJKkw%2FaDVhRiqQn1YG2s6PFHJ9I2QZ2alYH9CNx5Da9PQ%2F%2F4Q2kS71AeOlJ03lA40d8HjM3yYpNIjF0fZkZEF8yFf3RDkShmPdiJeQxMnJi%2B%2B4Muoe4Bnxku8M2YH8tqQ773tH%2BymiGoemjgrMNiqisoGOqUBfpF3lfl24m5NHn8rJcxe3zr%2BSafqf8jPt2cN%2F2tVJqPUchDlHnI83TGr9k0HqMUQUKCa7fHoXFSUnfWe3I185EMWBenQtjgkaFMs%2Bt24nFBrkfw1S7u9btTRI4rbQ5t%2FFkxxfkud02WzFud7kChNrZmmWQa8paJbd7EgxkWKfo4KJBvKV2c4oj%2FgRcAZgSFS%2B%2B11qH0UX9xSGwYWIKZz1IUpbgFb&X-Amz-Signature=9d11c6a7c61694bdfa3559cdc0b35124a3ac0e9bb04b864facd6d88f8e02dc6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

