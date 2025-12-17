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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AWCW42J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxv0bUgduiUQKGFTMNIkFBuCun2pwTipnP5YRFgPGJ0AIgPfaBTnimrusbJTnfMuViLQ1B2uM79CvKU0mIZm2At3Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIHczM4rVPa1ke%2FsdyrcAwPoaUD4uzUP1pIAWQ5Etcs97TDGSPfsrQi4FLKr98nXCP0wQ6%2FJD8eoQDmuOA%2BmdGKT4XiUpleLn9bvP%2BVuPogMuN2pPVdKbrXXCxojqsvheGOHHMMI%2BGO2455PnMcX9eNzgC0XstoqHAqoG0TACwgLfqVkUya5B3YRH7fYqujbdmBmfs4%2BGLdYhUTXEdZpr6KCd8W6hmehBMzM4oNvXdDFfErSOMxugx0%2B67ujv1ZWxQLP7rhnWFAhXqgtE%2Ff9txjwuiVGIWITrbJH88c9y9%2FwL2Q%2F3GZFPQzdEH8qqAEKmRkww7LyOy3yE%2Fgq4OeZUblt36SFXLbnt7%2FrLsbYyfNxOwvoKFR73%2BTqg0eqoZRsmBxKyYD%2FpCAgpZfmT8Kv0LfBQW20q8xt9XXK%2BTV8ACzXb5qSYbd6MstXPjFR%2F1fuqpt7SUPcDQ%2B6VTP1t6m7Wiah0icDe249aS9VkDJP2DzoXnNEOqPZXex83ZcJLDUnNc2QQ%2B26R4bAiyw7U4fs266JOJqEVRmSCasz8n7PAihGzvqhoityUhSLrQXI3mCvFxtLS8KFCL8JVfovMI6oITRCHe%2B91lPYNhcU13PX1LFVuV%2FAjGtVk66Zr83YuPcxkUwbTItb6OIt4gOvMJ2DicoGOqUBMmT1mh7hDo5rrfIuzlo5WDNhHiWJZICKgLe%2FldcZZPinuK%2BfyxSCoGZa45wbFUGeztEhX0hhNdpAeyq4vhQUnE4igwHCsT3c1tpv1SGbVn02GCcmq4Ib%2F4cue7fpnvzGptdIeGsiQ39EaYHOp6qEQBpO8%2B8O85w3wBYALrvmLyiXekbHAcAtkwtBGl2q4XUCpGzZEUvnlLpKgI7h3mYpB86ayvkP&X-Amz-Signature=958895b030f3f1da6e3f1dd71ab6827fb564d9796fa4bb6119cbbd201c004f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AWCW42J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061438Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxv0bUgduiUQKGFTMNIkFBuCun2pwTipnP5YRFgPGJ0AIgPfaBTnimrusbJTnfMuViLQ1B2uM79CvKU0mIZm2At3Iq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDIHczM4rVPa1ke%2FsdyrcAwPoaUD4uzUP1pIAWQ5Etcs97TDGSPfsrQi4FLKr98nXCP0wQ6%2FJD8eoQDmuOA%2BmdGKT4XiUpleLn9bvP%2BVuPogMuN2pPVdKbrXXCxojqsvheGOHHMMI%2BGO2455PnMcX9eNzgC0XstoqHAqoG0TACwgLfqVkUya5B3YRH7fYqujbdmBmfs4%2BGLdYhUTXEdZpr6KCd8W6hmehBMzM4oNvXdDFfErSOMxugx0%2B67ujv1ZWxQLP7rhnWFAhXqgtE%2Ff9txjwuiVGIWITrbJH88c9y9%2FwL2Q%2F3GZFPQzdEH8qqAEKmRkww7LyOy3yE%2Fgq4OeZUblt36SFXLbnt7%2FrLsbYyfNxOwvoKFR73%2BTqg0eqoZRsmBxKyYD%2FpCAgpZfmT8Kv0LfBQW20q8xt9XXK%2BTV8ACzXb5qSYbd6MstXPjFR%2F1fuqpt7SUPcDQ%2B6VTP1t6m7Wiah0icDe249aS9VkDJP2DzoXnNEOqPZXex83ZcJLDUnNc2QQ%2B26R4bAiyw7U4fs266JOJqEVRmSCasz8n7PAihGzvqhoityUhSLrQXI3mCvFxtLS8KFCL8JVfovMI6oITRCHe%2B91lPYNhcU13PX1LFVuV%2FAjGtVk66Zr83YuPcxkUwbTItb6OIt4gOvMJ2DicoGOqUBMmT1mh7hDo5rrfIuzlo5WDNhHiWJZICKgLe%2FldcZZPinuK%2BfyxSCoGZa45wbFUGeztEhX0hhNdpAeyq4vhQUnE4igwHCsT3c1tpv1SGbVn02GCcmq4Ib%2F4cue7fpnvzGptdIeGsiQ39EaYHOp6qEQBpO8%2B8O85w3wBYALrvmLyiXekbHAcAtkwtBGl2q4XUCpGzZEUvnlLpKgI7h3mYpB86ayvkP&X-Amz-Signature=92771df835cab1af4bf1131864eb0fe6a358cec3da13b1559509d41719b439f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

