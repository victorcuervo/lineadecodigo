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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIEQK6MU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL0hBustRs%2BuBftzTZV43hsgCryHPyh%2BWSaQk0lc59OwIhAOTRngxbInmu0Y5SnBbU8bXrq1VIoOP05i1cAwrK0aj9KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyo8z%2BXL5bH9f6S96Uq3AP1XlaP1yf8i8AWz77jMcP3g%2BcYLY0LWevLgjBRYwQDMP9G1utTrapsLclvf3c3sAF%2BUscvFDuQBqsm1c1lUq4y7Jolc2q0h35TqrjSrxahFVooYuLDa%2BEO7tUinQwwYtFGep5RLHT0YsZ%2BO50%2B9nMezNsyfrRbTCKXcxXeuoWc7QrO9I5REaqERbalnwhVmsJhmZaJSjCm7cMgiEKzZF9uxklJZpN5ZATg6YKAUXO9icdiuTfizabou8dWLbvujzZupCb8%2F6r3gqQzOWaJ0Ete12tX0wDq88pBIt%2BY5ewXyKJ1k1T6b4i7956s6SoiQbQIKG3TIMd8A90Gy%2BJntQVV%2FTO7QC%2B2glp%2BUo%2BmZ1ZMjH1Ts%2B5PwiKgnDLiWvxLOL8RTra5l3g1qm%2BNLDrbrKuMKVkHBdEnIFfhjX97OhhHWYePMaK%2BSJ3kIk%2Fzl4DqcUd6vdwWVjkg%2BR1UaYoY9RGe6guq%2BaphmxtgyZQBPgcrIb4v1toSZ1VL2RCCMHvkZpBMJc2B4xTrmqkDlIOzQQj8P5JYNNDUfLvBdmGEk%2F%2BLbD46yNraLwdLGFPHFGK4gFZlkh5%2F33UIIIQuNVnOAV54r4W5M0gwRE0gv9RfTPmhpxgrKdyM5uH6uwmy6TDZgIvKBjqkAZfD5YCswYWio%2FPv5uaBBvZj9Z7JnGcwUHWuz9FwTP%2BT1mBkrjT6HsABRJgEyEnCVYZ%2BjhfXJNTXkUcir6eXMqH%2Bw9RY%2Fx1e5oGHe1tLzFOTs%2FZ7CZmyaAHFr63xwXEF7etDF1Vgdx7PGk8YS6URPUYxGjEE4%2BcmqF7v562eJsY%2F74f5hSc08Z3oo%2B5MEvgcyfjqqo4WPJTz87kNGWOfWR0KAbhV&X-Amz-Signature=784ccb4d4ad6ff062e909358663a68adb522e814b7bc5d3a43400a414c246338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIEQK6MU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDL0hBustRs%2BuBftzTZV43hsgCryHPyh%2BWSaQk0lc59OwIhAOTRngxbInmu0Y5SnBbU8bXrq1VIoOP05i1cAwrK0aj9KogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyo8z%2BXL5bH9f6S96Uq3AP1XlaP1yf8i8AWz77jMcP3g%2BcYLY0LWevLgjBRYwQDMP9G1utTrapsLclvf3c3sAF%2BUscvFDuQBqsm1c1lUq4y7Jolc2q0h35TqrjSrxahFVooYuLDa%2BEO7tUinQwwYtFGep5RLHT0YsZ%2BO50%2B9nMezNsyfrRbTCKXcxXeuoWc7QrO9I5REaqERbalnwhVmsJhmZaJSjCm7cMgiEKzZF9uxklJZpN5ZATg6YKAUXO9icdiuTfizabou8dWLbvujzZupCb8%2F6r3gqQzOWaJ0Ete12tX0wDq88pBIt%2BY5ewXyKJ1k1T6b4i7956s6SoiQbQIKG3TIMd8A90Gy%2BJntQVV%2FTO7QC%2B2glp%2BUo%2BmZ1ZMjH1Ts%2B5PwiKgnDLiWvxLOL8RTra5l3g1qm%2BNLDrbrKuMKVkHBdEnIFfhjX97OhhHWYePMaK%2BSJ3kIk%2Fzl4DqcUd6vdwWVjkg%2BR1UaYoY9RGe6guq%2BaphmxtgyZQBPgcrIb4v1toSZ1VL2RCCMHvkZpBMJc2B4xTrmqkDlIOzQQj8P5JYNNDUfLvBdmGEk%2F%2BLbD46yNraLwdLGFPHFGK4gFZlkh5%2F33UIIIQuNVnOAV54r4W5M0gwRE0gv9RfTPmhpxgrKdyM5uH6uwmy6TDZgIvKBjqkAZfD5YCswYWio%2FPv5uaBBvZj9Z7JnGcwUHWuz9FwTP%2BT1mBkrjT6HsABRJgEyEnCVYZ%2BjhfXJNTXkUcir6eXMqH%2Bw9RY%2Fx1e5oGHe1tLzFOTs%2FZ7CZmyaAHFr63xwXEF7etDF1Vgdx7PGk8YS6URPUYxGjEE4%2BcmqF7v562eJsY%2F74f5hSc08Z3oo%2B5MEvgcyfjqqo4WPJTz87kNGWOfWR0KAbhV&X-Amz-Signature=96b0ac8946cdd0852b3c5191c6b6794bd7fcf37ffad5a7a305618ddfeaa7abf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

