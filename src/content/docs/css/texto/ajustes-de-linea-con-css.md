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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBJU2MHY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe4DKc1Xj1y3RTC3%2Fgo%2Btu6Hi3lGHabFM%2Bgy7ZQXNUBAIhAL1PL0VnyPuIKxLTI0DJjCpw1eYjIOhuF4%2BFeWufJYT5KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq3j1SXzk2ZsOWaxgq3AO0m5A0uqSpF3AUAOO8pLKGWkG9Y8xLVwJAhJBIEtYOCvmF7jNXWoaKk65Pyy9Fzktd%2Fxzjx8ZjKAAhRrusmE140XOFp0yejAioBNPQZMF7JozxuV8sTPTgQOHDSOZXC6anW80ODXePNP0Ol9PwrGlMEJCs%2B7o1RAXybbhAjFoEQkGD3qTlDlozklT6yvutsfdIeKfTFjdI2yuTsSAOfB90IYW7pa75TUMNJ80OQT%2BHWgVMQOfUqZRkb7zB%2BvB1O3GVltn3fsYdUjQ%2BxXoRn4dRli7FtIOuVgjpGVg%2B3swoivbcJ%2F8UvC%2FEe8A8rmD0HHUUEAkTIaqM01J3eK9HfUykDFxRemCIKThnHigfI%2B8sX9qFaijbBiQNPn1EVurX2Pn4GEdvP0vp%2FAGx%2B6oBAWkSd%2FvZmHeQDiOx8sQddOZubhHH5iRgLchoXaDNgjibJTJXcHGe%2BBlmi%2Ff8PCumNfw3IvWMUDFg5z327qbchWPM7Mgd8xjXn033xkFRHV%2BkTid326ffBhUl7DPH%2FJV5gH34PhKfsNrYd0kMFUJkg1NmZOEVfeQhsHXbyjmVBD5yjIe05g8VSal6Co1d%2BcLrzg%2BNca%2FzIuvZq5i1cl0PZVV4YhThPgujyp6K9T9BQjDY%2F4rKBjqkAcu2Id9bo46p%2B9ZAyA9BicNaEawlm2Kmd7Teoo%2BhTQi1alva4u4pNbila60fXm0JNJL4gPqzfi4lEH9VVdftA7Jr65puZ8mYvg9GXotQ1oPZ%2FSLTt2fI%2F2DyoBLlvS0isukgBXuDzw4%2BzU8mIYQh%2FqHomjZJW4mBzXrDmnIU1TPZps%2BZpoCwKDvVjEyF0cgj750ZMoLb8k5fVf6YaHk96Lv91ukB&X-Amz-Signature=60f711871b8527541702a33d8674afbee76ca9103ad248cd6a8229fd9a6f6ae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBJU2MHY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDe4DKc1Xj1y3RTC3%2Fgo%2Btu6Hi3lGHabFM%2Bgy7ZQXNUBAIhAL1PL0VnyPuIKxLTI0DJjCpw1eYjIOhuF4%2BFeWufJYT5KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxq3j1SXzk2ZsOWaxgq3AO0m5A0uqSpF3AUAOO8pLKGWkG9Y8xLVwJAhJBIEtYOCvmF7jNXWoaKk65Pyy9Fzktd%2Fxzjx8ZjKAAhRrusmE140XOFp0yejAioBNPQZMF7JozxuV8sTPTgQOHDSOZXC6anW80ODXePNP0Ol9PwrGlMEJCs%2B7o1RAXybbhAjFoEQkGD3qTlDlozklT6yvutsfdIeKfTFjdI2yuTsSAOfB90IYW7pa75TUMNJ80OQT%2BHWgVMQOfUqZRkb7zB%2BvB1O3GVltn3fsYdUjQ%2BxXoRn4dRli7FtIOuVgjpGVg%2B3swoivbcJ%2F8UvC%2FEe8A8rmD0HHUUEAkTIaqM01J3eK9HfUykDFxRemCIKThnHigfI%2B8sX9qFaijbBiQNPn1EVurX2Pn4GEdvP0vp%2FAGx%2B6oBAWkSd%2FvZmHeQDiOx8sQddOZubhHH5iRgLchoXaDNgjibJTJXcHGe%2BBlmi%2Ff8PCumNfw3IvWMUDFg5z327qbchWPM7Mgd8xjXn033xkFRHV%2BkTid326ffBhUl7DPH%2FJV5gH34PhKfsNrYd0kMFUJkg1NmZOEVfeQhsHXbyjmVBD5yjIe05g8VSal6Co1d%2BcLrzg%2BNca%2FzIuvZq5i1cl0PZVV4YhThPgujyp6K9T9BQjDY%2F4rKBjqkAcu2Id9bo46p%2B9ZAyA9BicNaEawlm2Kmd7Teoo%2BhTQi1alva4u4pNbila60fXm0JNJL4gPqzfi4lEH9VVdftA7Jr65puZ8mYvg9GXotQ1oPZ%2FSLTt2fI%2F2DyoBLlvS0isukgBXuDzw4%2BzU8mIYQh%2FqHomjZJW4mBzXrDmnIU1TPZps%2BZpoCwKDvVjEyF0cgj750ZMoLb8k5fVf6YaHk96Lv91ukB&X-Amz-Signature=6cbb75f80c528a79e2ba56d6e68f5f8f9cbb74f7f09905fc214332352887ff97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

