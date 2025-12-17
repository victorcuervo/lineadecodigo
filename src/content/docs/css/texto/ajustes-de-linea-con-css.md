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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637MIIUDK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2WgwxRxM8YYV%2FwCv3bR6DHGht55Tt%2FDD6sAY%2FP0PdhAIhAJ28zvXpfZ1z1fLziMQwd9fHlsWwIl23pMGadnAltqwyKv8DCHQQABoMNjM3NDIzMTgzODA1IgyWC2uYarNXn%2B%2BoPiAq3AOBLd4gUippEq0JhNky0N1oEGToA4mLuLz7bqqwRLy8YtSSUSRfIqzAOLZOw5RdLzW3eGRd%2FpWjT%2Bqm3efAPzs8ovvFHnkP0d1AUNqPVOb1jcQAfUNXu4rT%2BGgL1PaFbR7Z1LARZrjZFfN3VvRgkptNZRPCtWc03W%2BnEOGn9txN9BnorsU3MeXcXi8fBqiJ3uE4iH7zz357AdFdaZBaSw%2FEFzked49ZjL%2FS%2FQkjVG5Fr4uLmSpBavKD40vTYM3vRsBdDjARDFo69WJtbqEC2j2A9vd28eqvlxK4lRsLJ2qE%2BIO7fNXFYUAVdF4L2iZ9cAjOvGhpqBf2fUIudTD%2FO4hR9EtUOZjWVEWbkH3n6F4nCNZHh%2FZDk%2BvviZcfPrhW0O6xyBrRuL%2BVVRZa1HLAKRd9i6v0DlY76%2B09eoRuGMGuJOUi7292onaxwgbTxZmBdMh%2FJZvy1RsNQ5k6fwjgi5JM5nh3Ui%2FHiucY2yi8B%2F1cKfPkhk11zVxIvRgMGsevZSXPchtGs%2FiiEP5NOrVEbU3lEEY1d6UVY8iRyl290UR3VtO9KSZZB24by1oXd3d6B%2FCtczkatnGSAm8zvgxMX4Ogm2gQ3ywT2V%2FdFft%2FbTz2sRJ9N7o4rM3z3RIWUTCHs4jKBjqkAcfoB3Voicy1qNOtovFOXN72q8QYH12mZ7ax%2BQhTHssyf1TAZfWUVj2eAmTskSgPQCtxh2%2B9sk83c1ASrhPFqRsovMQgnkFfRCJcEsWfAcJAmRJSfBUYfldmQwXKCCqrZVcYEL4j6%2FtqT19B4V%2FNxvv2KEo004eCo9VSKr3cq2QGmRISnjUlpdpjQzSZrXnzkRrI7Rst00sLOvVXAxvAsKq2MfGg&X-Amz-Signature=1fff6a537b9b32d1f99138a0164759ddae5195a5b012444a60d887abf55e52b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637MIIUDK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2WgwxRxM8YYV%2FwCv3bR6DHGht55Tt%2FDD6sAY%2FP0PdhAIhAJ28zvXpfZ1z1fLziMQwd9fHlsWwIl23pMGadnAltqwyKv8DCHQQABoMNjM3NDIzMTgzODA1IgyWC2uYarNXn%2B%2BoPiAq3AOBLd4gUippEq0JhNky0N1oEGToA4mLuLz7bqqwRLy8YtSSUSRfIqzAOLZOw5RdLzW3eGRd%2FpWjT%2Bqm3efAPzs8ovvFHnkP0d1AUNqPVOb1jcQAfUNXu4rT%2BGgL1PaFbR7Z1LARZrjZFfN3VvRgkptNZRPCtWc03W%2BnEOGn9txN9BnorsU3MeXcXi8fBqiJ3uE4iH7zz357AdFdaZBaSw%2FEFzked49ZjL%2FS%2FQkjVG5Fr4uLmSpBavKD40vTYM3vRsBdDjARDFo69WJtbqEC2j2A9vd28eqvlxK4lRsLJ2qE%2BIO7fNXFYUAVdF4L2iZ9cAjOvGhpqBf2fUIudTD%2FO4hR9EtUOZjWVEWbkH3n6F4nCNZHh%2FZDk%2BvviZcfPrhW0O6xyBrRuL%2BVVRZa1HLAKRd9i6v0DlY76%2B09eoRuGMGuJOUi7292onaxwgbTxZmBdMh%2FJZvy1RsNQ5k6fwjgi5JM5nh3Ui%2FHiucY2yi8B%2F1cKfPkhk11zVxIvRgMGsevZSXPchtGs%2FiiEP5NOrVEbU3lEEY1d6UVY8iRyl290UR3VtO9KSZZB24by1oXd3d6B%2FCtczkatnGSAm8zvgxMX4Ogm2gQ3ywT2V%2FdFft%2FbTz2sRJ9N7o4rM3z3RIWUTCHs4jKBjqkAcfoB3Voicy1qNOtovFOXN72q8QYH12mZ7ax%2BQhTHssyf1TAZfWUVj2eAmTskSgPQCtxh2%2B9sk83c1ASrhPFqRsovMQgnkFfRCJcEsWfAcJAmRJSfBUYfldmQwXKCCqrZVcYEL4j6%2FtqT19B4V%2FNxvv2KEo004eCo9VSKr3cq2QGmRISnjUlpdpjQzSZrXnzkRrI7Rst00sLOvVXAxvAsKq2MfGg&X-Amz-Signature=c1e9d392cc9230947b623ae492a7fa40b46c9993b3688f3eff8ecb4139e34abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

