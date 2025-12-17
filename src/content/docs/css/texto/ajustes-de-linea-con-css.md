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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV52Y6MG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7UXEmetnyvBotsTlKFsVbHp%2FUHi2KJeENtGrGf%2F13OAiEAoQjBGGHZU8r4KyVgCkzKqLw1QcXH59eeZicvZYjtaNoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcbVzNqPf07OUtziCrcA8xdwRP1byuGt%2BPuT3JHvSRrWL15hTgI2ITD9rVEO1nHvfIlzho4Uy7WqyiEKrHxIiKzHZq6AWzOYmpkwAo%2Fh4Xt4SoFPir0ke%2B42AvHAy1C9BBLXXN4EnDqwzs0zMGuPUSXJ31Pt1QOpxVqKP599%2FDDxwBhYWDzjmhFRW3E1kH9mqkhkj4tIQh%2F8MthzbyK0UBy8fZ4lPHwWXzJZqIJryC7dKY%2FPqC2T6M9OxKAyOKfJyRSzDoFzfo1skpr7BnYTKmw1S2acckr3z%2FLZyUW9yhQ4jZLjyDch%2BI6VCRZ6GhCH89Yl9AYr6mYnfRAo%2FZOF0u1zEBzoyvDtUf03Jq6AJeLUh9n3f%2BZ6CVnuSjI0vZgX8DwYeQPgicfDuoXt61Q6Gg7E5T5j9FbXZYF4a7oa4Zp4a19dTi0Tfkip%2FI8VtdQKBl91ElZ1lj3fwuS9MnTeF4tmFap7wq52OyKyoEiuCmafOvcXpSYu5bUKZKBRwXx0GNd22xGsEP3o4T64lAS1uAlEeqUDx25U5uUzjNkJZ0idXftrr42fQpWBEoZodEOlmROfgmUUFRk3sLTI5wo0SKTjJr%2BazxrVs9fYP%2BIXBR38r5bjjxhkrGbD3KjqiOtuyxqpEp6jqdint0cMKSBi8oGOqUBVhRW%2BtBsYKh%2BqxB437kqg5mqWGL%2FARY6tLNB5ZWA4ClOg%2FlzkXDCrx2ygQOH8Gi0JEEd%2FQFxob8LCbtniYI0YYlVytGOfFKxZcDxK%2BRmpBUCHZXp6XRRbQ0SY8VOb9FWoCFDyunYDiiCJg5XY8ilkxMUfm0K66f%2BZoFT2BxygF%2By5oOZTVGOkaotatlpDUIRhdrxiT2QTO0sxhJ2IXIb3Qh5R7MW&X-Amz-Signature=8cc758c4743bd8ec5bba292b7a91fdc9f06bf2843200a8d0a42f95bf21937952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV52Y6MG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID7UXEmetnyvBotsTlKFsVbHp%2FUHi2KJeENtGrGf%2F13OAiEAoQjBGGHZU8r4KyVgCkzKqLw1QcXH59eeZicvZYjtaNoqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNcbVzNqPf07OUtziCrcA8xdwRP1byuGt%2BPuT3JHvSRrWL15hTgI2ITD9rVEO1nHvfIlzho4Uy7WqyiEKrHxIiKzHZq6AWzOYmpkwAo%2Fh4Xt4SoFPir0ke%2B42AvHAy1C9BBLXXN4EnDqwzs0zMGuPUSXJ31Pt1QOpxVqKP599%2FDDxwBhYWDzjmhFRW3E1kH9mqkhkj4tIQh%2F8MthzbyK0UBy8fZ4lPHwWXzJZqIJryC7dKY%2FPqC2T6M9OxKAyOKfJyRSzDoFzfo1skpr7BnYTKmw1S2acckr3z%2FLZyUW9yhQ4jZLjyDch%2BI6VCRZ6GhCH89Yl9AYr6mYnfRAo%2FZOF0u1zEBzoyvDtUf03Jq6AJeLUh9n3f%2BZ6CVnuSjI0vZgX8DwYeQPgicfDuoXt61Q6Gg7E5T5j9FbXZYF4a7oa4Zp4a19dTi0Tfkip%2FI8VtdQKBl91ElZ1lj3fwuS9MnTeF4tmFap7wq52OyKyoEiuCmafOvcXpSYu5bUKZKBRwXx0GNd22xGsEP3o4T64lAS1uAlEeqUDx25U5uUzjNkJZ0idXftrr42fQpWBEoZodEOlmROfgmUUFRk3sLTI5wo0SKTjJr%2BazxrVs9fYP%2BIXBR38r5bjjxhkrGbD3KjqiOtuyxqpEp6jqdint0cMKSBi8oGOqUBVhRW%2BtBsYKh%2BqxB437kqg5mqWGL%2FARY6tLNB5ZWA4ClOg%2FlzkXDCrx2ygQOH8Gi0JEEd%2FQFxob8LCbtniYI0YYlVytGOfFKxZcDxK%2BRmpBUCHZXp6XRRbQ0SY8VOb9FWoCFDyunYDiiCJg5XY8ilkxMUfm0K66f%2BZoFT2BxygF%2By5oOZTVGOkaotatlpDUIRhdrxiT2QTO0sxhJ2IXIb3Qh5R7MW&X-Amz-Signature=7377339f87da742741a306e595958751373d9e98b4828246d819bd9a5b220481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

