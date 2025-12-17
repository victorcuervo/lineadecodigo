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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TGHTPHB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy0C%2B4dDIsHfjsj4RBHgGjt9mCQbVbhzZiD%2FIR3YpaswIhAKLEG3Q%2FmvfKx0ELpUn%2Bfq3U5FURdz4Z%2BXksl1SVOO2TKv8DCHgQABoMNjM3NDIzMTgzODA1IgyJZCMSHEU5WRMjndgq3AOqOFp8i4CkoB2rg2Rw8bZ%2BskPMJ%2FItjIggOlOqZB5%2FsWI9jd9ByhtCuwJaoF6i2ed6ZD79zPbcIpjNn8UnTY69vSyT5qaf%2BZaoqvcE1O7BNH0QRmRvNrqFBoiXn4IwqluuigQ9enptJZIeD8ZM0kJqu8umUoVqvJZ5KWOnuD7b5r8mKLbiVQcTp4tQkCO%2FnVitHgboU1WQzKu5JyHR3MWcZW4JbQMgAIlWr1Mza9kgi6D0gtvKdB0FqRoYRjioEiyOFXcWf%2FOUEUKcuw5dlcszY1N%2BPCH8cujBClfgVZ4I6xrhhqCJAB0pVrEdwBMC8DxFp8e9KOh8JcKP7ii1HfGvhVpAmNXXz8HzOD5Q3tiY3WYJchaRIghf5DA8%2BoRIT%2F71M4co11npkY6uatiAkGy7aRK979tdzW6oXtx7EoNOuU99YhbGSBfNiuuGjcHXgVapWYQhhaGOEalqvFPrgt5gjyMTbcxoJ0i7uOIZJ2npzMhFM6gGq99M%2F%2BQvpMKdqis6VDyM7S34L835og9QagFPi8KHGP0DSqG%2Bm%2BAxKsgfXu5wtvLFlKANjKh0WZPt88T14V%2BoxNv8GcTj9Ob0wnKRulJcT3omC8IHbDNXraWKVoyIItiuFXWAkJno1jDDnYnKBjqkAYa7RU70%2FTW7SssrYL3NG%2F9YmJuXMh4bW4YkDkXQNxSJfJzGWmenS0ktGxE5VRfMMXMHsro7PXyHs3R9c017jP7eFDk29VxVhApbfyAY1ES0JZ%2BHJmm7XbEQRO89n9jBrSyTq6LASFJPWFi9WUBHyZgTL1t%2BpCkTSg9vgepBqIr2DroiNu8O4gTazlFbcSAMG0tMA1tgarvF4iDy1p2G41B5Idsn&X-Amz-Signature=2407e7d0f345ae959262d637f104acccc65c2f8a090576b61082c80650b693be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TGHTPHB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy0C%2B4dDIsHfjsj4RBHgGjt9mCQbVbhzZiD%2FIR3YpaswIhAKLEG3Q%2FmvfKx0ELpUn%2Bfq3U5FURdz4Z%2BXksl1SVOO2TKv8DCHgQABoMNjM3NDIzMTgzODA1IgyJZCMSHEU5WRMjndgq3AOqOFp8i4CkoB2rg2Rw8bZ%2BskPMJ%2FItjIggOlOqZB5%2FsWI9jd9ByhtCuwJaoF6i2ed6ZD79zPbcIpjNn8UnTY69vSyT5qaf%2BZaoqvcE1O7BNH0QRmRvNrqFBoiXn4IwqluuigQ9enptJZIeD8ZM0kJqu8umUoVqvJZ5KWOnuD7b5r8mKLbiVQcTp4tQkCO%2FnVitHgboU1WQzKu5JyHR3MWcZW4JbQMgAIlWr1Mza9kgi6D0gtvKdB0FqRoYRjioEiyOFXcWf%2FOUEUKcuw5dlcszY1N%2BPCH8cujBClfgVZ4I6xrhhqCJAB0pVrEdwBMC8DxFp8e9KOh8JcKP7ii1HfGvhVpAmNXXz8HzOD5Q3tiY3WYJchaRIghf5DA8%2BoRIT%2F71M4co11npkY6uatiAkGy7aRK979tdzW6oXtx7EoNOuU99YhbGSBfNiuuGjcHXgVapWYQhhaGOEalqvFPrgt5gjyMTbcxoJ0i7uOIZJ2npzMhFM6gGq99M%2F%2BQvpMKdqis6VDyM7S34L835og9QagFPi8KHGP0DSqG%2Bm%2BAxKsgfXu5wtvLFlKANjKh0WZPt88T14V%2BoxNv8GcTj9Ob0wnKRulJcT3omC8IHbDNXraWKVoyIItiuFXWAkJno1jDDnYnKBjqkAYa7RU70%2FTW7SssrYL3NG%2F9YmJuXMh4bW4YkDkXQNxSJfJzGWmenS0ktGxE5VRfMMXMHsro7PXyHs3R9c017jP7eFDk29VxVhApbfyAY1ES0JZ%2BHJmm7XbEQRO89n9jBrSyTq6LASFJPWFi9WUBHyZgTL1t%2BpCkTSg9vgepBqIr2DroiNu8O4gTazlFbcSAMG0tMA1tgarvF4iDy1p2G41B5Idsn&X-Amz-Signature=7ff44c37de2f9cc92d989554229bbb92d0e5019c749b935ae648e19ca31343bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

