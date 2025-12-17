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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DDWZ3LN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpTWc7Nlj30iGJ52vf6aX9zB2sTpa%2BldLChsxSN%2FihMwIhANNPbuzMY3lyjhOimsBoonhNIrsTSQg9pPdUUbHUIFJTKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwP6GjkAfw3%2BRfYuQq3AMk3vKy%2FPeR47lY1fAfdmt4%2BDMJz7oSKvv59UIHYMJ3cRU4ao2srOnl4xwacdqcrC7EQLdTJB%2BY8hO6rCxGviOFAoXYTXO52s61wvFumI9t8J1QvWfhLU2tbnuhPms8A4%2BuirjsuZHf3dkeXuWSl6uFkQzZujiXvEf8WHZ0C%2FlCXDZLI8Yht62z3%2B0RxQwGHkB0GMDj70hjq%2BqUh%2BuXP2DwB0vpC4v%2BNIfIaQp%2F%2BtlSs9ykJBI%2FWTkh01ifYvyGChRZvadOjQ%2FkHC%2Fdx245p%2BjC6TljwwD0RgGogcRqefUg3JzhM7t0DiQnJAI7gy7v%2BOPQKONkrMhlJcNLmvq%2BxqFRmt8igcTQJlaMIwDp8N8TEOMKkF4LetxD36BLfF2A9Dp4dT7f9hNe%2BBvezHmAVzg%2B3%2F94cEp48E4F1x19bkrx3UFn2iO%2BnUXhVlu%2FxAcg9bew5ZWcJgotGs1SoTvW7aqtZGAZ82j8ypj%2BE4k7bjJLAhLyMGfy6sOmBpef4iuVK1MHXfhk634Ws1ectsgTgEuSX6AjZX0LNHhCJxAepwpz0R185FFGYEU8WnlAosfpvSV7GoFPFzAIVreIp5OhTXqgzlNQvY2g42YBx9V6CGCE95cTkL9443a9WYkJwTCMgYvKBjqkAbiMU5SyXrKCIoHH7TVp%2BeXmwNL1c8xlr4VfPuAYAoMLQhDTgXcOfI2nHPYdH70itD8hKBaHCd%2F6tGbcSBHRW%2Bg5fjUdSWQO%2BsBjB2LpiEGAFdhwma3vfsBMM3Vp%2FDFQRoq6M%2BY1ZqnVbT0QgmNXyy4AowT7H2XzdUsl0ImXBOBXQWBEQ5QK3OLJzKm0Vcl3LwQAhpjQ9kA2uB9F5nmNOGVbNz2W&X-Amz-Signature=fe51f34bc87b0898e0906af697a125d0737c6d20e1f1254427729bb62c4f92a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DDWZ3LN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpTWc7Nlj30iGJ52vf6aX9zB2sTpa%2BldLChsxSN%2FihMwIhANNPbuzMY3lyjhOimsBoonhNIrsTSQg9pPdUUbHUIFJTKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwP6GjkAfw3%2BRfYuQq3AMk3vKy%2FPeR47lY1fAfdmt4%2BDMJz7oSKvv59UIHYMJ3cRU4ao2srOnl4xwacdqcrC7EQLdTJB%2BY8hO6rCxGviOFAoXYTXO52s61wvFumI9t8J1QvWfhLU2tbnuhPms8A4%2BuirjsuZHf3dkeXuWSl6uFkQzZujiXvEf8WHZ0C%2FlCXDZLI8Yht62z3%2B0RxQwGHkB0GMDj70hjq%2BqUh%2BuXP2DwB0vpC4v%2BNIfIaQp%2F%2BtlSs9ykJBI%2FWTkh01ifYvyGChRZvadOjQ%2FkHC%2Fdx245p%2BjC6TljwwD0RgGogcRqefUg3JzhM7t0DiQnJAI7gy7v%2BOPQKONkrMhlJcNLmvq%2BxqFRmt8igcTQJlaMIwDp8N8TEOMKkF4LetxD36BLfF2A9Dp4dT7f9hNe%2BBvezHmAVzg%2B3%2F94cEp48E4F1x19bkrx3UFn2iO%2BnUXhVlu%2FxAcg9bew5ZWcJgotGs1SoTvW7aqtZGAZ82j8ypj%2BE4k7bjJLAhLyMGfy6sOmBpef4iuVK1MHXfhk634Ws1ectsgTgEuSX6AjZX0LNHhCJxAepwpz0R185FFGYEU8WnlAosfpvSV7GoFPFzAIVreIp5OhTXqgzlNQvY2g42YBx9V6CGCE95cTkL9443a9WYkJwTCMgYvKBjqkAbiMU5SyXrKCIoHH7TVp%2BeXmwNL1c8xlr4VfPuAYAoMLQhDTgXcOfI2nHPYdH70itD8hKBaHCd%2F6tGbcSBHRW%2Bg5fjUdSWQO%2BsBjB2LpiEGAFdhwma3vfsBMM3Vp%2FDFQRoq6M%2BY1ZqnVbT0QgmNXyy4AowT7H2XzdUsl0ImXBOBXQWBEQ5QK3OLJzKm0Vcl3LwQAhpjQ9kA2uB9F5nmNOGVbNz2W&X-Amz-Signature=0d766dd68306eece762e8d710fdcaed1982ac2555029bff082551ae5eb4cac65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

