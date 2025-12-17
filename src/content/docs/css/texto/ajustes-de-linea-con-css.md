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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCBZTWAH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB%2BoKdYnGTZV5RaVgZdO31hv1XOCKTn%2FUNlsfgUqoDCQIhAMEC2XHQs47s%2BU%2F7GAY3UFOsriCmsSZ7FL9JBcgzl%2FQEKv8DCHsQABoMNjM3NDIzMTgzODA1IgzbAPOC%2FGxuEFtHgsIq3ANLEM7VsdDSbHmJ7VbG2drWhsHiyF2fYX5wPyTGKCU9oaEKPi0n3jlYhVVEcdip8C2dC4MB6hybIofZyQPu2MNVXCQQY0EXTHNPozcA2l1wuSsgksS%2FhyXKVLGUaddOWRfLzA8CGJC2vXcqDp9S9CUkNcthfheous0aJWK477kNqKPGhRCzq%2FbLj0Jf5XFvzLPWREeKmznTR6ArhSALwtWUGBXgCBHNrO%2BPElSqEcAkmW6t53y1S5e55YuKpH5NQS8vaMQTz%2FF%2F9MO93CqHBKMgpSvYk08E9Y1zVLd%2FWmeufYKN5kZgcHHrqpskWSksXuMVjJyGlCIfBMebJ6eCs9oJU9Uk8buUtu1SwNHy36JQ6ORNk9MueoRzE6ShUwFz1UlKtYddE5QWdAztS%2FSHldmy4y2VZiYm9IS3%2BGrRv2TKgIKHrisJM2xmGrAQDfUhE66I0ZhKoeCiY2OUfn%2FnIBNTRIxqE836BU%2FlcAtNENWBDrbQtINJxl0nS0kbw2xXk3rANtuhXLOPVDYwZtxtOkH3wGF0Wl%2B2SFqbA%2FnFv7hluqTf%2FXjuslnMnymA1Ux%2B7ofvNAUiZoADz8qZwQdSh4eIPGgCX0hf3fKTPjLCVtPQVtP8K56XKF9K29rEHTDo74nKBjqkAeLLaetyQ3MHagCayF0PhnnQG1i29Dbi6XAk%2FtkWyUAxf0%2BIuWA0%2FsfAr%2BqEn64wGLZ%2FNu%2FkmNijH%2BhB3JYes1qzmfMsVnztKJxrSwBwt17xsEwrWIpCGM0EjCjb7QO1O6cyzshTvt9GE1WBiiHPF4foCtQYqqXRKTkbLhXskLlyXU9jUnQpBjyTIyKqg5%2BGJ5ru3pvBPDk%2BoauTRYGXB99gm9pR&X-Amz-Signature=d18fb7a448b66d581bddf87023ea198e1e06627cfda9a767ed03ac2eb34b22a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCBZTWAH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCB%2BoKdYnGTZV5RaVgZdO31hv1XOCKTn%2FUNlsfgUqoDCQIhAMEC2XHQs47s%2BU%2F7GAY3UFOsriCmsSZ7FL9JBcgzl%2FQEKv8DCHsQABoMNjM3NDIzMTgzODA1IgzbAPOC%2FGxuEFtHgsIq3ANLEM7VsdDSbHmJ7VbG2drWhsHiyF2fYX5wPyTGKCU9oaEKPi0n3jlYhVVEcdip8C2dC4MB6hybIofZyQPu2MNVXCQQY0EXTHNPozcA2l1wuSsgksS%2FhyXKVLGUaddOWRfLzA8CGJC2vXcqDp9S9CUkNcthfheous0aJWK477kNqKPGhRCzq%2FbLj0Jf5XFvzLPWREeKmznTR6ArhSALwtWUGBXgCBHNrO%2BPElSqEcAkmW6t53y1S5e55YuKpH5NQS8vaMQTz%2FF%2F9MO93CqHBKMgpSvYk08E9Y1zVLd%2FWmeufYKN5kZgcHHrqpskWSksXuMVjJyGlCIfBMebJ6eCs9oJU9Uk8buUtu1SwNHy36JQ6ORNk9MueoRzE6ShUwFz1UlKtYddE5QWdAztS%2FSHldmy4y2VZiYm9IS3%2BGrRv2TKgIKHrisJM2xmGrAQDfUhE66I0ZhKoeCiY2OUfn%2FnIBNTRIxqE836BU%2FlcAtNENWBDrbQtINJxl0nS0kbw2xXk3rANtuhXLOPVDYwZtxtOkH3wGF0Wl%2B2SFqbA%2FnFv7hluqTf%2FXjuslnMnymA1Ux%2B7ofvNAUiZoADz8qZwQdSh4eIPGgCX0hf3fKTPjLCVtPQVtP8K56XKF9K29rEHTDo74nKBjqkAeLLaetyQ3MHagCayF0PhnnQG1i29Dbi6XAk%2FtkWyUAxf0%2BIuWA0%2FsfAr%2BqEn64wGLZ%2FNu%2FkmNijH%2BhB3JYes1qzmfMsVnztKJxrSwBwt17xsEwrWIpCGM0EjCjb7QO1O6cyzshTvt9GE1WBiiHPF4foCtQYqqXRKTkbLhXskLlyXU9jUnQpBjyTIyKqg5%2BGJ5ru3pvBPDk%2BoauTRYGXB99gm9pR&X-Amz-Signature=0b5bddea54ebaab9b908743d1762de9bd18f2d0132d605e0f70a85c2fa5fa565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

