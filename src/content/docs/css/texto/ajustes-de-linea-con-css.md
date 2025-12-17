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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QKCTBU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiXXU%2BO2GXfwlDMXpu4Jw%2FIWR9AOursCqj1jj7ZHjACAIhAO%2FUwrbH83hwJnYmGHko1taxW5p7DwkihZovUwM63ZRrKv8DCHIQABoMNjM3NDIzMTgzODA1IgyY79fH064A4C8R4WYq3AMt6tThkVr3HLQur7KN%2BbFYAdMFuCHXpuXkGY8oAMWZ6twF8GCd7f7G3SewOe6G4YdG9VJ8McaZ6waVpWxVLEusdXDoAT2W%2FA3T61NZUEC5Q%2BcwosTI0cXn651xLMqgPrrSVowcmsfscteeBY%2B7USwLjCuH25Fi6x3PcDKHBTqTfD%2FrizGMOQOegVeZ4FUXAxkRNyNc6drH7MEXN2C6HZYq4oPp19NYaPJCd3eUsHWfPzx6h%2F1t%2BzjeQGqDYMMBiu6r5DJhfgBuTX7t8vVdktoFt3txVuOwyf%2Fgf%2FXAMW6ociS7flU3A5tn%2FK0exYu%2B0oBFGNf2r93irkyGBfBYRwNau0%2FuCmD2ghkne7P1x38xQ%2BbdUQFKjnNyrpmsnYHWrk3HtP7naSnaIYTCAbUbW2O1YI8%2Bufqpj4v1l0yBgnIGIFkeCXINQ4waK1q2UuTvmcnmAID8RG1zCl2LnjtqhpO4vqNq0B%2Ft1K0SBU1P6K%2Bg1v6XeZ4fqQLMIcI%2FArdmX7HF4JyFsZ4STfKBLLMOxJkutmbpN%2BnKlWXJ1PY6eJ8yikxXJ0t9ZwJjRfyvXA4fYpvNvSUGIIzVmmiuOkxm2BjCO5SdChPYSlf%2Bt7PTpdIMJ5c00Nso4HH4fhEBEjCg%2B4fKBjqkAYuPHU2ZJhWjWWTZPeZNwNt8%2FzyRfKVOnUP21ahQT39OtezoWgBlYrmyKyGfIta9zH8TBU%2FxLj%2Fi%2BFCoLAJhu5dVSaeOxrLawRdOqnFpsMEL7OBhYXZ85XK5QYXAa7Rj8zoPXWpguXtBD5DfQjyVe22TApYm9gYxwFxmjAXSq2CYTIb84QeAuJVXBBn3U95z7CIi1fxORlYPN%2FB4JUqO0cano6Tg&X-Amz-Signature=ed0408fee9d616cbb5b1cd07f69d864bc167f969cbed3689d8120a852ffd160c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5QKCTBU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiXXU%2BO2GXfwlDMXpu4Jw%2FIWR9AOursCqj1jj7ZHjACAIhAO%2FUwrbH83hwJnYmGHko1taxW5p7DwkihZovUwM63ZRrKv8DCHIQABoMNjM3NDIzMTgzODA1IgyY79fH064A4C8R4WYq3AMt6tThkVr3HLQur7KN%2BbFYAdMFuCHXpuXkGY8oAMWZ6twF8GCd7f7G3SewOe6G4YdG9VJ8McaZ6waVpWxVLEusdXDoAT2W%2FA3T61NZUEC5Q%2BcwosTI0cXn651xLMqgPrrSVowcmsfscteeBY%2B7USwLjCuH25Fi6x3PcDKHBTqTfD%2FrizGMOQOegVeZ4FUXAxkRNyNc6drH7MEXN2C6HZYq4oPp19NYaPJCd3eUsHWfPzx6h%2F1t%2BzjeQGqDYMMBiu6r5DJhfgBuTX7t8vVdktoFt3txVuOwyf%2Fgf%2FXAMW6ociS7flU3A5tn%2FK0exYu%2B0oBFGNf2r93irkyGBfBYRwNau0%2FuCmD2ghkne7P1x38xQ%2BbdUQFKjnNyrpmsnYHWrk3HtP7naSnaIYTCAbUbW2O1YI8%2Bufqpj4v1l0yBgnIGIFkeCXINQ4waK1q2UuTvmcnmAID8RG1zCl2LnjtqhpO4vqNq0B%2Ft1K0SBU1P6K%2Bg1v6XeZ4fqQLMIcI%2FArdmX7HF4JyFsZ4STfKBLLMOxJkutmbpN%2BnKlWXJ1PY6eJ8yikxXJ0t9ZwJjRfyvXA4fYpvNvSUGIIzVmmiuOkxm2BjCO5SdChPYSlf%2Bt7PTpdIMJ5c00Nso4HH4fhEBEjCg%2B4fKBjqkAYuPHU2ZJhWjWWTZPeZNwNt8%2FzyRfKVOnUP21ahQT39OtezoWgBlYrmyKyGfIta9zH8TBU%2FxLj%2Fi%2BFCoLAJhu5dVSaeOxrLawRdOqnFpsMEL7OBhYXZ85XK5QYXAa7Rj8zoPXWpguXtBD5DfQjyVe22TApYm9gYxwFxmjAXSq2CYTIb84QeAuJVXBBn3U95z7CIi1fxORlYPN%2FB4JUqO0cano6Tg&X-Amz-Signature=aa56e047a967a6cc83db9358e62627c673bbd64379fb4c8212f4b64415e25aea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

