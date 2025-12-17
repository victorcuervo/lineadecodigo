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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B55XCT5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDijhLfSI8XK7H4DIR%2FvrAgii%2B%2FlDua9qm0qHxc5xImvwIhAISDpcLxt1hUkR6tlc0oJ4pZAjRFM6Xeh74dHFgHjewpKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQcklF7OFnqmYhA5Uq3APLm3cLFMLinN%2F43fDmWnxdwqgDEQzUto9NfXBPTRxt0dYhZw6sTgvA5X4ZF%2Fj%2FUC3mVy%2FkxMBVdIPz1HC4LA%2BCqT9R8y08bMd9BzlUK6GgnA%2Bu7U2upoZ1%2F0%2FO4KeOJh6fAG8K4b9s%2FLcX7rq1txcx2dpmZoMyNBcVWV9KkSLKBCvsQBLaF8pGYXh134qIW5Y0qvrQ%2FsPOQCoWs2qhV4f6hX9ZDMRUqjyR%2BWPiHhqIdVysbJDrHtiPSk94va2x%2F8n%2B%2F%2BjOEPlRsi4qikBzWCis%2B6h1sai6nRVXX9xJe1yFzGnGapztJBCKiF8MnnRTzw%2BvuuYv%2ByrIP7tSa4rNBLrvbkQKxuAawRoaPvKZm4QDNyHzqGtuF9hoUggF2F8jdAZ%2FONby9AavftknIUqHxfgDot8AiTvpoJul6ffZpQjC52O1Nh8k3J9%2BcAj0J%2Br2LGmtuaG6mgKQ%2BA3Xthq1%2BNtWvGsKAMlk2gq57Dj%2Fr0QIrIT%2FLGqCCCXGUP6qcfiePuEhMdkxOi8LmGf9RD%2BrHSJEnlLUg%2F4w1%2F2PHx3V%2FoCLgn5v1iZypUmObNTOePHjnQwudGcqDWztJgUGKTXUaRfTVDVxBkU6NXm1IrdcnDRopo9ESQVot34OCdFDljCUrozKBjqkAZAipVWxjEiyay9Y3zus5ur3C6nXvVxjq0VHNDEl5v3L1i1NZe4vdkq23iwyBujcmxghp%2FO%2B1IZFABOwwDDT33X%2FDgKZ8zGvA2oWCf2bUhtY9Q5J49ebq2I0hGxIsIb7sr7Ss83QaxzybgItKnYLzg7jqzMOlFa1EyZSVZWxZ8lA8FrPzFzk2zKBJuM%2BHxR8Cuiy4tRJL8Yd8GE7z2B51YjJrwnI&X-Amz-Signature=1bacbe48e652fe5aaeff079d0e1fe0e6d61e513f12c82ab4e110d3565d173736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B55XCT5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDijhLfSI8XK7H4DIR%2FvrAgii%2B%2FlDua9qm0qHxc5xImvwIhAISDpcLxt1hUkR6tlc0oJ4pZAjRFM6Xeh74dHFgHjewpKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQcklF7OFnqmYhA5Uq3APLm3cLFMLinN%2F43fDmWnxdwqgDEQzUto9NfXBPTRxt0dYhZw6sTgvA5X4ZF%2Fj%2FUC3mVy%2FkxMBVdIPz1HC4LA%2BCqT9R8y08bMd9BzlUK6GgnA%2Bu7U2upoZ1%2F0%2FO4KeOJh6fAG8K4b9s%2FLcX7rq1txcx2dpmZoMyNBcVWV9KkSLKBCvsQBLaF8pGYXh134qIW5Y0qvrQ%2FsPOQCoWs2qhV4f6hX9ZDMRUqjyR%2BWPiHhqIdVysbJDrHtiPSk94va2x%2F8n%2B%2F%2BjOEPlRsi4qikBzWCis%2B6h1sai6nRVXX9xJe1yFzGnGapztJBCKiF8MnnRTzw%2BvuuYv%2ByrIP7tSa4rNBLrvbkQKxuAawRoaPvKZm4QDNyHzqGtuF9hoUggF2F8jdAZ%2FONby9AavftknIUqHxfgDot8AiTvpoJul6ffZpQjC52O1Nh8k3J9%2BcAj0J%2Br2LGmtuaG6mgKQ%2BA3Xthq1%2BNtWvGsKAMlk2gq57Dj%2Fr0QIrIT%2FLGqCCCXGUP6qcfiePuEhMdkxOi8LmGf9RD%2BrHSJEnlLUg%2F4w1%2F2PHx3V%2FoCLgn5v1iZypUmObNTOePHjnQwudGcqDWztJgUGKTXUaRfTVDVxBkU6NXm1IrdcnDRopo9ESQVot34OCdFDljCUrozKBjqkAZAipVWxjEiyay9Y3zus5ur3C6nXvVxjq0VHNDEl5v3L1i1NZe4vdkq23iwyBujcmxghp%2FO%2B1IZFABOwwDDT33X%2FDgKZ8zGvA2oWCf2bUhtY9Q5J49ebq2I0hGxIsIb7sr7Ss83QaxzybgItKnYLzg7jqzMOlFa1EyZSVZWxZ8lA8FrPzFzk2zKBJuM%2BHxR8Cuiy4tRJL8Yd8GE7z2B51YjJrwnI&X-Amz-Signature=b702fbe7769e32a002ded734cf41da40aa939a66c9cdd6354c5c9044838a689c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

