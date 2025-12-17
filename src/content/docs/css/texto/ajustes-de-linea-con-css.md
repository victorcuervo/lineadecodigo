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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JTA5DE2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BMsRdcO6uE0X%2F8AVq2wpaKvpsJcxgp5XkKkvH8K%2BubQIgGBwiTOSOIEAOBQmX%2BMYro0BoyP5pA3XqkoKH46tOjuQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMNFlWcSMXgmLZUJMSrcAxNTvV8xzQFaqqXJ3myhcFykhZleWZnz4JDSd2ssvbXdg2Z%2FBA5uj4zszxYtTYPWWt6c456kzzza5dOzfqaunsD7hJmbIb5HIlOtYQ50YIoeJXiXYfOmYRLbI32GFlOT%2FbsmxD72a0rxfAvvhCU7RjHmX2xu4WhodRnMlKixJQT%2Fw4f1N3pPklqIfbcGPRAq7vIOSDfPfyhvrLdRCfyVClLdAyU1kosGTGVBbUrNscxHnyqyXq8oAE0cdorqk%2FCXMIydYWjwbeX3sRjVc%2BXo%2Fqsqv9P%2Bq5g%2F9mXHeEWKBUcqYAzxD7oi31kQxBYBQEXjTQwrL3i0yftuIVBx2aouzHYCKvpAsvRffs%2BcyQ1CocbM4%2FTX7Snup4E9c6evViTjSxlxqhU2SRXBqprZu7KEkSE1svkEgPyLpjN%2BSTly2LymlKln0WVgJudT6EGSLR9TXulrJjL4Y7iQjE6uGJT3tIy61I4c9CcVUi7WbdeFzwyjM9pzJVvdwpmVzRd05bDHJISnyjgbK7rD0uUQnbB08WqV5dPPRzanMzAdFost4aaamD4q5YXXVNcocfYknxINioCJw%2FhER0hBqlfoFb66AoFFfGLe%2FESxhb7fxiEHg9nwqTrk%2F%2FM8uClTTZB0MPeOisoGOqUBXQxVZlM1%2FRcpY4nsFDFOeRdLqhgbFSORyEvlYwH5DZufVVoJLNhSt15VrbLa02Pohfhr4o1zPN0FIo3kIkTisa6JZUZvSAI%2F8qNojF4UO2ZItAVrtQSwavC%2Fg6VLAhmswjb%2BKj9tFuVZqd9Z%2Fp6gn%2FB7%2BA%2B4uWnCn1eTP%2FmpQbbscSQywuhuwxlYzsd%2BSJAS00SwhrsCAB4KVJ1haMW%2B16Q8vm9p&X-Amz-Signature=697ec2ce52c6d33b683b452a0746d47af0a145abc41e073e82a2938ac309879e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JTA5DE2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BMsRdcO6uE0X%2F8AVq2wpaKvpsJcxgp5XkKkvH8K%2BubQIgGBwiTOSOIEAOBQmX%2BMYro0BoyP5pA3XqkoKH46tOjuQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDMNFlWcSMXgmLZUJMSrcAxNTvV8xzQFaqqXJ3myhcFykhZleWZnz4JDSd2ssvbXdg2Z%2FBA5uj4zszxYtTYPWWt6c456kzzza5dOzfqaunsD7hJmbIb5HIlOtYQ50YIoeJXiXYfOmYRLbI32GFlOT%2FbsmxD72a0rxfAvvhCU7RjHmX2xu4WhodRnMlKixJQT%2Fw4f1N3pPklqIfbcGPRAq7vIOSDfPfyhvrLdRCfyVClLdAyU1kosGTGVBbUrNscxHnyqyXq8oAE0cdorqk%2FCXMIydYWjwbeX3sRjVc%2BXo%2Fqsqv9P%2Bq5g%2F9mXHeEWKBUcqYAzxD7oi31kQxBYBQEXjTQwrL3i0yftuIVBx2aouzHYCKvpAsvRffs%2BcyQ1CocbM4%2FTX7Snup4E9c6evViTjSxlxqhU2SRXBqprZu7KEkSE1svkEgPyLpjN%2BSTly2LymlKln0WVgJudT6EGSLR9TXulrJjL4Y7iQjE6uGJT3tIy61I4c9CcVUi7WbdeFzwyjM9pzJVvdwpmVzRd05bDHJISnyjgbK7rD0uUQnbB08WqV5dPPRzanMzAdFost4aaamD4q5YXXVNcocfYknxINioCJw%2FhER0hBqlfoFb66AoFFfGLe%2FESxhb7fxiEHg9nwqTrk%2F%2FM8uClTTZB0MPeOisoGOqUBXQxVZlM1%2FRcpY4nsFDFOeRdLqhgbFSORyEvlYwH5DZufVVoJLNhSt15VrbLa02Pohfhr4o1zPN0FIo3kIkTisa6JZUZvSAI%2F8qNojF4UO2ZItAVrtQSwavC%2Fg6VLAhmswjb%2BKj9tFuVZqd9Z%2Fp6gn%2FB7%2BA%2B4uWnCn1eTP%2FmpQbbscSQywuhuwxlYzsd%2BSJAS00SwhrsCAB4KVJ1haMW%2B16Q8vm9p&X-Amz-Signature=084a5ae46e4610d6f213915f329bb766f413a9c60f59341280ef1ee73416743d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

