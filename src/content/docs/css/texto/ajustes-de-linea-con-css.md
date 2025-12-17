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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHEFHZPU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTyNnNoQzA8wZMvoRrAfasN62BPkaiS%2FNzFkaHsPo4AAiAtTFiyv3hAWICWgbLvqf3ac%2F1hFL7lBJaEyZtkPQPDDSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYNyzxbWQeDi13aQwKtwDz%2BscQDqdBfupHaK6DS271aauuygU8PSOgLVGtI2DK3aMy86Rfdi9z3qoK2YHj3FHWLyEs6NHocAUBr23Zw%2FwsKQnWb4fOJKJdaHWq4wGU9mOE0sl%2F2EPHjAidcT0lhXKm%2BhEOF5v2AL4%2BfOgJvzjsweMrfslldixPk8gCK9SMSdGJZQgkbquPW6S7u7IsIbeZMIiIERRtgUAIK7PdGQooVnuXyONNki49V26OPJUScVpYQJaIt5bnKY1MkyjWJ8E7CcM7J%2Bj3vv6mBbU0XGnz56YX9749KYcUpEZuLb3pjmTj6N0j66CqWdctS3EKqDwNZxCreg4PJP0k%2FleX0wMxYB8LSCQp8Ulnhdj9So%2FrFmG8eviMPQ3nkdzCaD9fs0SXXUIbV5a0DwVrdFSfGL3jocglCzDIO9fg2yxxvIhGaGjCFJ7TEWlHE5LQ138J4a2qyzIh%2FOfqosHMgbwpKF7NM7Atci641mp9nXl1IxPF52aainbOnm32ebJXTy4Tzxz8eOas2BSx35tDmmGElYaSvYo6VN6VdeFS874ytu%2F4s1RdPVfU%2BFnDWzGnYzFDAGQwyv8eMSPIUOfi5nIts1RzhAImn62EnAn7h%2FWySRg1ropsFYZanHJXljQVWQw0p6LygY6pgHNsp%2F%2Fh0pLxZBhpQi8ogLsQmLTWK2GGC3yu0eWoqb4yUGJH4A9KTXliq%2F9NAhrF%2BSu8rxMR7AoMuap4qQ6m0LuACAj3KTa8ap%2F36wOKl5EfOruV1VkIjxOXwZeMDsi807DPc69GlbCkiPtFen5ey%2BWrZsUVw%2B5VxXfIoE%2Brmh9SNfqJSISomnjtpmzH594tNboe5DYLlOSPrDDXUeoOJA%2FCPEeGPWD&X-Amz-Signature=5d200e485cf9f4a55290862fca74823c7509b813c08fb17a8b865ffb3c6c1960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHEFHZPU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTyNnNoQzA8wZMvoRrAfasN62BPkaiS%2FNzFkaHsPo4AAiAtTFiyv3hAWICWgbLvqf3ac%2F1hFL7lBJaEyZtkPQPDDSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYNyzxbWQeDi13aQwKtwDz%2BscQDqdBfupHaK6DS271aauuygU8PSOgLVGtI2DK3aMy86Rfdi9z3qoK2YHj3FHWLyEs6NHocAUBr23Zw%2FwsKQnWb4fOJKJdaHWq4wGU9mOE0sl%2F2EPHjAidcT0lhXKm%2BhEOF5v2AL4%2BfOgJvzjsweMrfslldixPk8gCK9SMSdGJZQgkbquPW6S7u7IsIbeZMIiIERRtgUAIK7PdGQooVnuXyONNki49V26OPJUScVpYQJaIt5bnKY1MkyjWJ8E7CcM7J%2Bj3vv6mBbU0XGnz56YX9749KYcUpEZuLb3pjmTj6N0j66CqWdctS3EKqDwNZxCreg4PJP0k%2FleX0wMxYB8LSCQp8Ulnhdj9So%2FrFmG8eviMPQ3nkdzCaD9fs0SXXUIbV5a0DwVrdFSfGL3jocglCzDIO9fg2yxxvIhGaGjCFJ7TEWlHE5LQ138J4a2qyzIh%2FOfqosHMgbwpKF7NM7Atci641mp9nXl1IxPF52aainbOnm32ebJXTy4Tzxz8eOas2BSx35tDmmGElYaSvYo6VN6VdeFS874ytu%2F4s1RdPVfU%2BFnDWzGnYzFDAGQwyv8eMSPIUOfi5nIts1RzhAImn62EnAn7h%2FWySRg1ropsFYZanHJXljQVWQw0p6LygY6pgHNsp%2F%2Fh0pLxZBhpQi8ogLsQmLTWK2GGC3yu0eWoqb4yUGJH4A9KTXliq%2F9NAhrF%2BSu8rxMR7AoMuap4qQ6m0LuACAj3KTa8ap%2F36wOKl5EfOruV1VkIjxOXwZeMDsi807DPc69GlbCkiPtFen5ey%2BWrZsUVw%2B5VxXfIoE%2Brmh9SNfqJSISomnjtpmzH594tNboe5DYLlOSPrDDXUeoOJA%2FCPEeGPWD&X-Amz-Signature=35af01426418c121338311786b363ef9cf2736f94bfa0aa93d331e86abb1e4a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

