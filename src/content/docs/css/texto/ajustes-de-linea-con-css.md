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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JKW6QLJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9pCLoQT1fbtJEMM15%2BTpoAy7qVY5CK%2FLy9GVdH0iQZAIhAOxW5jajAJf9IPvZ9xz196VriLec6U6P9ZItiG5fY6e9KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxic27XRvfgMpqzBoq3ANxoJIQhvgGHozSCppTp26rHqxHW5UB9NaqsKrH8nE6i76mlcRLkR34%2FkhzuTekwbyNrKBj3JStbtuA2E36l2PWOXbkv4zGIaUPExjjpwCWkXZtHo8yEp7sur1pgVbVWNyB7q8TMroSq4jS8d3msFtFs%2B%2BhigUCBbmmTlz0cYAl7fNSVHoSsbtvGHbuYiYar9IpBFklywBynolyLhkHBH%2B5Wtt4NVkjXRwc%2BcwtTY37YL%2BPYmhlAQTWmM%2FaMnm8E0MM26j82rGH43RTm4mDD05e8%2FIgQP8LmZpGlqQc8EFPbgArJh7ut2%2FftkTc3SjZVXayl12udBaYa%2FlwkIICI%2F9xfFVvnHNR1q8xPkYkT5B1scPZmpcMjG%2Fn8l2C7A65zqWHipQvYWODpQ30fPD7n0LwyFcJtofGhXpJmXwKz%2FQ%2FAQB9iKh8OveJGC6osrVSm7QI%2BvpjP4pqEKDPA20Ja6EXx9j9jz0jlP0QhDfMe1Z%2F%2FftY3pI7fVT39b6BYK1JotBaDd5Yw7306d44%2FhkZXbxM1hwKzIyLl2LcGq1%2Bs0EiFABfVLqSbyJIcNigYHDIjGU%2FU%2F8wmYO%2BGb4u7N1MJnCyNYaywMMdedadkBLuHvKNJ00lkSXZoj%2BdHvlbGzDKnovKBjqkAXF06rOS%2BlbssETyXxnCuTtoIwBuXaDgaVukMzjHfK%2F3tAjDArmhLraX8E%2FQCrj6CFvxkhJvblVcwQ3VSH%2F7qUqZpNrVB3Q4TQoDFb1HHY%2Fw8jbshDLPXv%2F9%2BMdN4wNbIAV8wfvlX4CCnefaGZ43BIp1A70MXInOEuIvb09PnfEVCvvsfwIoU3V%2FX0%2FQnIAVb1mtkEH7kyEbZ1yoTtYHNmGZbT4Y&X-Amz-Signature=0355a17505054b18696d654ba67fe0c93e2e04ff7896e16efae4d79c6f6dfc5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JKW6QLJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9pCLoQT1fbtJEMM15%2BTpoAy7qVY5CK%2FLy9GVdH0iQZAIhAOxW5jajAJf9IPvZ9xz196VriLec6U6P9ZItiG5fY6e9KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxic27XRvfgMpqzBoq3ANxoJIQhvgGHozSCppTp26rHqxHW5UB9NaqsKrH8nE6i76mlcRLkR34%2FkhzuTekwbyNrKBj3JStbtuA2E36l2PWOXbkv4zGIaUPExjjpwCWkXZtHo8yEp7sur1pgVbVWNyB7q8TMroSq4jS8d3msFtFs%2B%2BhigUCBbmmTlz0cYAl7fNSVHoSsbtvGHbuYiYar9IpBFklywBynolyLhkHBH%2B5Wtt4NVkjXRwc%2BcwtTY37YL%2BPYmhlAQTWmM%2FaMnm8E0MM26j82rGH43RTm4mDD05e8%2FIgQP8LmZpGlqQc8EFPbgArJh7ut2%2FftkTc3SjZVXayl12udBaYa%2FlwkIICI%2F9xfFVvnHNR1q8xPkYkT5B1scPZmpcMjG%2Fn8l2C7A65zqWHipQvYWODpQ30fPD7n0LwyFcJtofGhXpJmXwKz%2FQ%2FAQB9iKh8OveJGC6osrVSm7QI%2BvpjP4pqEKDPA20Ja6EXx9j9jz0jlP0QhDfMe1Z%2F%2FftY3pI7fVT39b6BYK1JotBaDd5Yw7306d44%2FhkZXbxM1hwKzIyLl2LcGq1%2Bs0EiFABfVLqSbyJIcNigYHDIjGU%2FU%2F8wmYO%2BGb4u7N1MJnCyNYaywMMdedadkBLuHvKNJ00lkSXZoj%2BdHvlbGzDKnovKBjqkAXF06rOS%2BlbssETyXxnCuTtoIwBuXaDgaVukMzjHfK%2F3tAjDArmhLraX8E%2FQCrj6CFvxkhJvblVcwQ3VSH%2F7qUqZpNrVB3Q4TQoDFb1HHY%2Fw8jbshDLPXv%2F9%2BMdN4wNbIAV8wfvlX4CCnefaGZ43BIp1A70MXInOEuIvb09PnfEVCvvsfwIoU3V%2FX0%2FQnIAVb1mtkEH7kyEbZ1yoTtYHNmGZbT4Y&X-Amz-Signature=6f44ae4bbc3be39e12885f07665f99cccb013309b7273939cc7c296148f0fcd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

