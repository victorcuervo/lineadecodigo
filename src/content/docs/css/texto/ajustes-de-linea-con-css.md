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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZTWYYO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTwlIXijtEdAeo2BnPtw7XP%2FGIDgqTjSeiVv9xzXGKHAiEA%2BBnrvaeB6QJe92DjblTstbVGUjT4xNoKBuEwC3wJv5Uq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHHvlQ6AgmWiaXxzLyrcAzAUnoXDVA9SxKxrM3YjsVkUcugRgDX3fXO5ytqJW9eZWm7xGXtxdPXxc828yqSprn0ZeQFjUrfijqmZxOU7fxzwsqQ8ml9nvJgnYSLM4LUbwpprTxa4F5qqiGjhaHvcUwi8DsGhYdV8OXDmpvKGaOYyFqXwpmf65MC1mSgHcnMhFgDvxPSytuiRd9Vq9l0dbqAMCUzXUKvpQwHkY5Tr87XjrfutRG7JyiH21GU99OKvrSIJjhvaEIlElQ%2FgUzoqbPb0VFGyub7xQhjEo6NhIELQKmQiov1NdmcG%2FYnP6PHMAxtr8RW1IRc5B30niWE0IrSXoPsy49wX92zrIoozjBBTJZ%2FrQ%2FV%2Bi6rC%2FSah1%2FMDN1Jzicvhq6HDpHwHTAeXVkN8Qdb5rf6Y92lcHzslXwhHpsZiXdL%2BjECMnPIP8yYZLq2jt%2Fwy%2F1vBn8v7ULQZEnrseUCl09%2FKMs4xJLGTRuGvC9RyYc86SY9LJXaWt7GzlR5tRfKVQQgiIEq7yuEnACns5hnP9%2F8UeYJJROzS%2BlCvPoVtFhOrpZcDsa18EHOnNcsgELZPbOewfcN4Mgljxn4m2aGbXdlrcdMxXhljuJ8sHiYa4%2FQINQxsyAIIQsEw2zHjARh4apurPkE5MPzOiMoGOqUBU9GqSMdKnmHAIxbS%2BG1xDooJO9Qo%2Fpi1m0cranMGIj2hP2eHHuK21EhGxKqXIsOySmjhsp9rrD2hNKYNkb%2FPutjpighBFPP%2BSfzxVBmKHAQ8Su%2Bk%2FJsxef8LX4i0sfm7aaMdHOCsdu7AFRd3ViiyIf3dpjkyM5dtSdFvwKhP0Wvwezq0A3z0YROJoktIZzoDFh43X0xg5q3BPBpUYWN9SOOMoqiR&X-Amz-Signature=cb6cfdc0c4e49f8628f002d16b65de2bf8127360e530d33e65cc231edda1c635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPZTWYYO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTwlIXijtEdAeo2BnPtw7XP%2FGIDgqTjSeiVv9xzXGKHAiEA%2BBnrvaeB6QJe92DjblTstbVGUjT4xNoKBuEwC3wJv5Uq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDHHvlQ6AgmWiaXxzLyrcAzAUnoXDVA9SxKxrM3YjsVkUcugRgDX3fXO5ytqJW9eZWm7xGXtxdPXxc828yqSprn0ZeQFjUrfijqmZxOU7fxzwsqQ8ml9nvJgnYSLM4LUbwpprTxa4F5qqiGjhaHvcUwi8DsGhYdV8OXDmpvKGaOYyFqXwpmf65MC1mSgHcnMhFgDvxPSytuiRd9Vq9l0dbqAMCUzXUKvpQwHkY5Tr87XjrfutRG7JyiH21GU99OKvrSIJjhvaEIlElQ%2FgUzoqbPb0VFGyub7xQhjEo6NhIELQKmQiov1NdmcG%2FYnP6PHMAxtr8RW1IRc5B30niWE0IrSXoPsy49wX92zrIoozjBBTJZ%2FrQ%2FV%2Bi6rC%2FSah1%2FMDN1Jzicvhq6HDpHwHTAeXVkN8Qdb5rf6Y92lcHzslXwhHpsZiXdL%2BjECMnPIP8yYZLq2jt%2Fwy%2F1vBn8v7ULQZEnrseUCl09%2FKMs4xJLGTRuGvC9RyYc86SY9LJXaWt7GzlR5tRfKVQQgiIEq7yuEnACns5hnP9%2F8UeYJJROzS%2BlCvPoVtFhOrpZcDsa18EHOnNcsgELZPbOewfcN4Mgljxn4m2aGbXdlrcdMxXhljuJ8sHiYa4%2FQINQxsyAIIQsEw2zHjARh4apurPkE5MPzOiMoGOqUBU9GqSMdKnmHAIxbS%2BG1xDooJO9Qo%2Fpi1m0cranMGIj2hP2eHHuK21EhGxKqXIsOySmjhsp9rrD2hNKYNkb%2FPutjpighBFPP%2BSfzxVBmKHAQ8Su%2Bk%2FJsxef8LX4i0sfm7aaMdHOCsdu7AFRd3ViiyIf3dpjkyM5dtSdFvwKhP0Wvwezq0A3z0YROJoktIZzoDFh43X0xg5q3BPBpUYWN9SOOMoqiR&X-Amz-Signature=7698b03e6832741e020ea291aed5ea190cadbd316719edfe525ea900cdcbd5da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

