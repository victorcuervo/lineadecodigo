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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIW4QCZA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUZ5hmjY1w932eXwEjOAt1vTWTRQZK51OMVxAIFGlloAiA6pc%2FUaGz6iGzFt8is%2BxzkObIXyR1sUC54vrpLCTXSjSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMewg8mvXknYfNBa5gKtwDesMH5ev2%2BOVdL4W7F6r1M%2Bp0gjMRJqQxkJpoyG51WXW5ouxvVpaO8MTG9jGJjvymde4bWuuTTRMfqIHd8e%2FRA4LKsNWrPRldbE2wXScXP9HRWj3NDC%2FVEaKOsaBWjI8Wros2be3R6moVnPowXzXQC%2F2JM97EFn9B%2Bp%2FkglNn7ufBuNOg6cFlBwQizD%2BnvzwIZLeXWirB5I7NIwRchTYmrcVaL9eHqPJawZ4c6j8jMGuxKhQnk8sILpZKIiw560nRT8VuDEU5eCncDk%2BczvT%2FmMRELAmF8lqxYgfduaMmP50b%2BDTgQfyHGAI7txBjTkOvJleLIWPleHtKxhIcgFcZ5hnB5Ks%2BYehuSHCLoKIgws5GlRWcFMwaBCGkv8nadUgQNSrMI94V9N%2Bke8L%2FxTUtu8IxKuaGZf14Q59tIwdX2dBhSl%2BIwIXLBQSvH20OTFMvGn%2BKesujpDbKx7bHgzFnu3hjpoQ2iPqitp9%2FQ6gs67pXXSPYp8RQxFRRgNVPF1WCRF5BIK8lgbgVafMks3hukwdtFGT0ml3tbgvEfMOQCBV5%2FKhxkeiTLhKrvEWyB7Cd9NQTNI4VhnBcwvwtsAVxy1nS9maY5bbNvBoWJOoK2WIdReb4xu1%2BZijmAXIwq4uMygY6pgFsed9pHkrsK1vtNUpu1Kq7A4Ta7JXSYpNuvos6VqN5U2IoidCkMH2I%2FoicxWSdYoVUQKnEfAtVFz%2BDQEEdLj%2FkE9gr8eA%2FNmzvQGdcaoXmtmniitbZGqRfEFSmkBnaeuLXWEN2C5TIcREVmKEJbZiQYOsrVQWPBMzhcM8I2HG9LX7BdRTL%2Bn3IIh5LKqpRMkwjaiBXb5cQzjeq2qd4njy9mzngBuk3&X-Amz-Signature=c0422f3b3b593957f82c9d3733b4b449f7ea4692c0e8ed1109b58941ede02f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIW4QCZA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHUZ5hmjY1w932eXwEjOAt1vTWTRQZK51OMVxAIFGlloAiA6pc%2FUaGz6iGzFt8is%2BxzkObIXyR1sUC54vrpLCTXSjSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMewg8mvXknYfNBa5gKtwDesMH5ev2%2BOVdL4W7F6r1M%2Bp0gjMRJqQxkJpoyG51WXW5ouxvVpaO8MTG9jGJjvymde4bWuuTTRMfqIHd8e%2FRA4LKsNWrPRldbE2wXScXP9HRWj3NDC%2FVEaKOsaBWjI8Wros2be3R6moVnPowXzXQC%2F2JM97EFn9B%2Bp%2FkglNn7ufBuNOg6cFlBwQizD%2BnvzwIZLeXWirB5I7NIwRchTYmrcVaL9eHqPJawZ4c6j8jMGuxKhQnk8sILpZKIiw560nRT8VuDEU5eCncDk%2BczvT%2FmMRELAmF8lqxYgfduaMmP50b%2BDTgQfyHGAI7txBjTkOvJleLIWPleHtKxhIcgFcZ5hnB5Ks%2BYehuSHCLoKIgws5GlRWcFMwaBCGkv8nadUgQNSrMI94V9N%2Bke8L%2FxTUtu8IxKuaGZf14Q59tIwdX2dBhSl%2BIwIXLBQSvH20OTFMvGn%2BKesujpDbKx7bHgzFnu3hjpoQ2iPqitp9%2FQ6gs67pXXSPYp8RQxFRRgNVPF1WCRF5BIK8lgbgVafMks3hukwdtFGT0ml3tbgvEfMOQCBV5%2FKhxkeiTLhKrvEWyB7Cd9NQTNI4VhnBcwvwtsAVxy1nS9maY5bbNvBoWJOoK2WIdReb4xu1%2BZijmAXIwq4uMygY6pgFsed9pHkrsK1vtNUpu1Kq7A4Ta7JXSYpNuvos6VqN5U2IoidCkMH2I%2FoicxWSdYoVUQKnEfAtVFz%2BDQEEdLj%2FkE9gr8eA%2FNmzvQGdcaoXmtmniitbZGqRfEFSmkBnaeuLXWEN2C5TIcREVmKEJbZiQYOsrVQWPBMzhcM8I2HG9LX7BdRTL%2Bn3IIh5LKqpRMkwjaiBXb5cQzjeq2qd4njy9mzngBuk3&X-Amz-Signature=962205033012c3faa71b3bd2121a1575f493c9d246bc956be785aa05dee3b496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

