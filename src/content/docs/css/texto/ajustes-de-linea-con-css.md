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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BF2ON64%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8gVGwA8y4dxGWHcrFSqqX%2F7OPHvJwIuneFBYdf7QXSwIhAOwuQCykgvtCtdIeUaXxNOi2BXabSW4xdZaZqkm0mZq3KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzsa%2BAgTCUB0xB0u30q3AMFqB1CRPQ0gzR7TwSI0ys64HRwtb5zu8N%2F3C61WGT2QmyUpSctotf%2BHvfyn6cqLr47QdhZetMQ6jiVc5JdfuAiGL%2BuR2GJavQnldfOa8HpaLx%2Fw9cYRNqMEscrUN65MaBmJNuHPB%2FRkbGzcogONxZJV8%2Fz78mxIhqWsgKr33y306Zgck%2BT3W9GO6sYc7hZvl%2BTjY7byXyZO2ASSXM4l7kJm%2BVhbrjxfc5AkWPvpQMCXiziaoQAWEDl7JXKDcEJ43PemMCxf%2BXA%2FOeUhJBJkMHiJeZAk%2F5lVNCPP6ZbJWcZz%2BJCsnNSO0ggFXwOYm%2FX7wVFukZzNnFI2f54dLq2bFJaNFebcmSCOFug4qS8czJpixlVhNpKRdqFKWzEzi6nPuNbKo0OpMJjMFEblgSJMZEaYoy6jhXtBU2WTbzNeOq4bRBFnLCsZMDtTewCjS0%2BoWn9UNg0JsXvvkgZgkt5N66v%2FyUMZOYFz1j6U3yxBavaMElv%2B%2BG6pZ%2FiHHht0NHGoWZlhawl91L97tFO7HxbQCF%2B5nkSCBjAaYu3d%2FmgWv3pdCy1OQaaIWI%2BgcJIWmde7RSOLVLKZnJJ3J7ww2V%2BwW4nI0qH6QRetp9UcdhsH8VWntT8V34XZu6bv3uroTDNoIvKBjqkAbmQGig%2FU97G3D%2FAD0kR9h6%2B9QgEXqMKkB8c6oHu7I3ToItPyewXgSRqfZyk1PpH1mnlmNh27BrWLRvJ4oe7dibaAD4W%2BCKntm7e0MomwTkckBGUU2wC9o1o5A%2FfPjP9XQNitDIVh0x4%2FHcTZTx743tMTWJdsGHkJ05RrZJi5aISPuQ3qZ6CYZ%2FNQOuFa4t5BUE1dUrWkfRsLQXY4TBE1R1pwbcT&X-Amz-Signature=53012e8d82afdd813ad3aeb5c6ee59bfbe041eaa98cb5af31853b957f5c9db7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BF2ON64%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8gVGwA8y4dxGWHcrFSqqX%2F7OPHvJwIuneFBYdf7QXSwIhAOwuQCykgvtCtdIeUaXxNOi2BXabSW4xdZaZqkm0mZq3KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzsa%2BAgTCUB0xB0u30q3AMFqB1CRPQ0gzR7TwSI0ys64HRwtb5zu8N%2F3C61WGT2QmyUpSctotf%2BHvfyn6cqLr47QdhZetMQ6jiVc5JdfuAiGL%2BuR2GJavQnldfOa8HpaLx%2Fw9cYRNqMEscrUN65MaBmJNuHPB%2FRkbGzcogONxZJV8%2Fz78mxIhqWsgKr33y306Zgck%2BT3W9GO6sYc7hZvl%2BTjY7byXyZO2ASSXM4l7kJm%2BVhbrjxfc5AkWPvpQMCXiziaoQAWEDl7JXKDcEJ43PemMCxf%2BXA%2FOeUhJBJkMHiJeZAk%2F5lVNCPP6ZbJWcZz%2BJCsnNSO0ggFXwOYm%2FX7wVFukZzNnFI2f54dLq2bFJaNFebcmSCOFug4qS8czJpixlVhNpKRdqFKWzEzi6nPuNbKo0OpMJjMFEblgSJMZEaYoy6jhXtBU2WTbzNeOq4bRBFnLCsZMDtTewCjS0%2BoWn9UNg0JsXvvkgZgkt5N66v%2FyUMZOYFz1j6U3yxBavaMElv%2B%2BG6pZ%2FiHHht0NHGoWZlhawl91L97tFO7HxbQCF%2B5nkSCBjAaYu3d%2FmgWv3pdCy1OQaaIWI%2BgcJIWmde7RSOLVLKZnJJ3J7ww2V%2BwW4nI0qH6QRetp9UcdhsH8VWntT8V34XZu6bv3uroTDNoIvKBjqkAbmQGig%2FU97G3D%2FAD0kR9h6%2B9QgEXqMKkB8c6oHu7I3ToItPyewXgSRqfZyk1PpH1mnlmNh27BrWLRvJ4oe7dibaAD4W%2BCKntm7e0MomwTkckBGUU2wC9o1o5A%2FfPjP9XQNitDIVh0x4%2FHcTZTx743tMTWJdsGHkJ05RrZJi5aISPuQ3qZ6CYZ%2FNQOuFa4t5BUE1dUrWkfRsLQXY4TBE1R1pwbcT&X-Amz-Signature=28275e23e2d17b239a9c8476d1903e79e08845c308d436c54f39402b76b18caf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

