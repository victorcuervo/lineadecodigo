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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7D3EM5C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvzgrrqcJtz25VL5ER%2FRQnzPRJKg7FjKIXH6aKr6qZFgIhAK1kZNiiXNgLKQHHpK%2FoaEJbsufVNBbn7HhyAh6Is1SnKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxl7Y6WeJEXd5KiswUq3AObfIwRSlPITldPi91wpxKYjodKuUDLJLO%2Fak6trkByCxMJmH2kjg6IYmm8vsVTEkhYUZJcn84gneo5rfBXEEmdp8weYnAlGoKSdeyB0snL5kZ8eh%2BaHGsjveRGXcd3ePnQ4x%2FX77rFBruB50FSdqZgRJ79OHu9KzITq78kZhN4LBk0sYLiUSZqQH9VV873jXPZXPDp8VkUcwQv2KTShDAMxKezaqmERtOWkNGH1NXzRG8Jn6q4D4ZHDvoWgY2ufKw5uX5eoqBkx5cYn%2BY9Dte4lSu%2Ff98H2sp6w%2Fm63ErzXh6FlH3MepQCc9i38tQTF8J1B4SarPtxP6X3io1xkWufyTAtrCl8J9XSSijBOL%2B86EcZZUBUsMkYVi6cFnEmeoyg0mWNptLQbIJbA1QrGzk1BTAM02uffMiwfJhCcPHjGJcw0l6joTWsqXA5hj0Geccbcl4%2F4C6JJTo0IZhB6DCOBB7J5cgireyp0%2FzvgyYjaTVvV7jE%2FjHO%2FKBq3h43G0VX3njH1VUqf%2Ff5nU8pagomQRhLjuvq4OzluFRIvNN6WhzlGjMrJ0eTV9VjC1dSSwPsL2zC39%2FiSGB1UvsOGt%2FrhDmUPHJDm%2BKXI98caemUxez4XSwFxdUo365ArDC7oIvKBjqkAaOjiB1zLAXXCaehvCbFUYOKIrkb50lifo7BWz3nqtzepz5GteGRtbzL33JrAB6Tul6HelJw8ASzJxCr0TrgQqm6v1l67e7%2B2KcCoORYDwP%2FFuhHHQ4xr4lpvzyFF51gp2aYB0gNBkl8NzAECNF7rYFdu7bZ%2F7K9qLHqZYDnGtzvZnP9BlcrHZ2%2BpQwzEsu3pyM3%2F3OvUlV14iuMxKZmKv1%2FyTjL&X-Amz-Signature=0024a23a40947793460a6639aacf3b55a537d7129198aa729120cbf4729cca9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7D3EM5C%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvzgrrqcJtz25VL5ER%2FRQnzPRJKg7FjKIXH6aKr6qZFgIhAK1kZNiiXNgLKQHHpK%2FoaEJbsufVNBbn7HhyAh6Is1SnKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxl7Y6WeJEXd5KiswUq3AObfIwRSlPITldPi91wpxKYjodKuUDLJLO%2Fak6trkByCxMJmH2kjg6IYmm8vsVTEkhYUZJcn84gneo5rfBXEEmdp8weYnAlGoKSdeyB0snL5kZ8eh%2BaHGsjveRGXcd3ePnQ4x%2FX77rFBruB50FSdqZgRJ79OHu9KzITq78kZhN4LBk0sYLiUSZqQH9VV873jXPZXPDp8VkUcwQv2KTShDAMxKezaqmERtOWkNGH1NXzRG8Jn6q4D4ZHDvoWgY2ufKw5uX5eoqBkx5cYn%2BY9Dte4lSu%2Ff98H2sp6w%2Fm63ErzXh6FlH3MepQCc9i38tQTF8J1B4SarPtxP6X3io1xkWufyTAtrCl8J9XSSijBOL%2B86EcZZUBUsMkYVi6cFnEmeoyg0mWNptLQbIJbA1QrGzk1BTAM02uffMiwfJhCcPHjGJcw0l6joTWsqXA5hj0Geccbcl4%2F4C6JJTo0IZhB6DCOBB7J5cgireyp0%2FzvgyYjaTVvV7jE%2FjHO%2FKBq3h43G0VX3njH1VUqf%2Ff5nU8pagomQRhLjuvq4OzluFRIvNN6WhzlGjMrJ0eTV9VjC1dSSwPsL2zC39%2FiSGB1UvsOGt%2FrhDmUPHJDm%2BKXI98caemUxez4XSwFxdUo365ArDC7oIvKBjqkAaOjiB1zLAXXCaehvCbFUYOKIrkb50lifo7BWz3nqtzepz5GteGRtbzL33JrAB6Tul6HelJw8ASzJxCr0TrgQqm6v1l67e7%2B2KcCoORYDwP%2FFuhHHQ4xr4lpvzyFF51gp2aYB0gNBkl8NzAECNF7rYFdu7bZ%2F7K9qLHqZYDnGtzvZnP9BlcrHZ2%2BpQwzEsu3pyM3%2F3OvUlV14iuMxKZmKv1%2FyTjL&X-Amz-Signature=0551eb0404d9a2e22116b9437a8db96daffad55f4aafbb9f7108f9566675f341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

