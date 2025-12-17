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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2N2COOZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9yuGNoI%2FBE%2FcdoWOPtMO46AObTJQc3poN0CA82f6fdQIgbwcCEZsYHXcwRNw1f4DR9lmIOL%2FShp5U8Wl4AJGJTEYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDF5Ka30MfJjNZZEZCCrcA7YsO0DAFJseiBmJSvi2MbARmjqNvnwfSg1Tbg%2BfCu9yrHVphutisWJxWkoqQRdvBcsLU6rZwkpPlpG6cvu%2BfyD2%2FbxTWyZ2Pkb9uPiP1eE1GBYl1Bwx5YrKVleAtt8CFlr7hwpcFq4uuE6hwU0d27IASoK%2BlbkJH1Ix5xcKT2fIK97GeE87jktlrES1f%2FYKRxt8N0L%2Fi2cp1kAlXSnKDda84txhBPXao%2Fmow5D3E8FzNfsiR3FSYe23SaEB0xVvSO155L5sE4FULAOy5g3hlj15IPOfmyAFzx5a5K8YOUTIJGLOTy09RwM%2BOerCKYPUaZ%2FXGdbZznPnIYl6SyQzebZCersYGvMMojS9nWPP%2F%2FTBqCMcW%2B1KOe4zGUjKBpdleEZLUudEAfvunSXK%2FULDNCCPPn2R832j81PAyw%2Fd6hMjrjseKO3BxzJxlyKa4kEgZidmIAorSfmK2KKNGaB%2Bzo%2BeN%2BMFDbp9jFC77JWMAl102LRnx1xUX8EvRtzaphYZi5CnGH7tGtM0BRokjmiKL%2FcDDd80qfweFLB8IllrnUT9hHSxV0ijp9hkzTgfMNIrTImj05wcJPBhiX%2FjrH2lCaW%2F9D5Rrsso6yCEfSawv7h341KRhf4xR9qSXUaVMMzwicoGOqUBxkF4qoe5FNTy8D7cN6dWSQTXUqSk1Rg6lcasq%2BnsC6ou6pi8XNm1hhdbCsaWz1v64WSoE4CF2%2F%2F4MmqHFX6fY7KZVO98metzw%2FmciVsOmAe0C7gLDn2v6Mp25t19Xmd99KY3SoeFhjzu3zsriY5H2FiJiSnnecnzBVDvl%2BwfeObLo5vm1JQf%2B7nfRqbJeXYgTkGHDtpZYfUCdV6Rtgqip2WJQ%2FC7&X-Amz-Signature=20da8b4a53653862e88d670319878ce27a6456e766c06e011fc4a64b97324d13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2N2COOZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9yuGNoI%2FBE%2FcdoWOPtMO46AObTJQc3poN0CA82f6fdQIgbwcCEZsYHXcwRNw1f4DR9lmIOL%2FShp5U8Wl4AJGJTEYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDF5Ka30MfJjNZZEZCCrcA7YsO0DAFJseiBmJSvi2MbARmjqNvnwfSg1Tbg%2BfCu9yrHVphutisWJxWkoqQRdvBcsLU6rZwkpPlpG6cvu%2BfyD2%2FbxTWyZ2Pkb9uPiP1eE1GBYl1Bwx5YrKVleAtt8CFlr7hwpcFq4uuE6hwU0d27IASoK%2BlbkJH1Ix5xcKT2fIK97GeE87jktlrES1f%2FYKRxt8N0L%2Fi2cp1kAlXSnKDda84txhBPXao%2Fmow5D3E8FzNfsiR3FSYe23SaEB0xVvSO155L5sE4FULAOy5g3hlj15IPOfmyAFzx5a5K8YOUTIJGLOTy09RwM%2BOerCKYPUaZ%2FXGdbZznPnIYl6SyQzebZCersYGvMMojS9nWPP%2F%2FTBqCMcW%2B1KOe4zGUjKBpdleEZLUudEAfvunSXK%2FULDNCCPPn2R832j81PAyw%2Fd6hMjrjseKO3BxzJxlyKa4kEgZidmIAorSfmK2KKNGaB%2Bzo%2BeN%2BMFDbp9jFC77JWMAl102LRnx1xUX8EvRtzaphYZi5CnGH7tGtM0BRokjmiKL%2FcDDd80qfweFLB8IllrnUT9hHSxV0ijp9hkzTgfMNIrTImj05wcJPBhiX%2FjrH2lCaW%2F9D5Rrsso6yCEfSawv7h341KRhf4xR9qSXUaVMMzwicoGOqUBxkF4qoe5FNTy8D7cN6dWSQTXUqSk1Rg6lcasq%2BnsC6ou6pi8XNm1hhdbCsaWz1v64WSoE4CF2%2F%2F4MmqHFX6fY7KZVO98metzw%2FmciVsOmAe0C7gLDn2v6Mp25t19Xmd99KY3SoeFhjzu3zsriY5H2FiJiSnnecnzBVDvl%2BwfeObLo5vm1JQf%2B7nfRqbJeXYgTkGHDtpZYfUCdV6Rtgqip2WJQ%2FC7&X-Amz-Signature=6abff4692c3973bdd2261de217eade5a35563e30e3002b80b7991624e02f234a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

