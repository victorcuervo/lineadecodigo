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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YON5DLL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzCV20W8zVk26ZBP0UwirlgkGd%2Fzr%2BPiaYhxutEjy1cwIgWX%2BVLt2uCv5Wd5W1Cn3DsAk6RWNDYl2zbgomPV4d9moq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGDEJmhOvn8AtQobTyrcA%2B1zoeMEtCQVyMZ7ZAOVfeSB5UgIxOtiBUAIvg3t9GJiIAb5BaoJMf5y4L6y%2B10CXsy94XwSpuVdrtjNE24au%2FSVjkfch%2ByzMO397gIND3YI0gUYmKo%2FT%2BkT2BsPuYtbftmgi5YsQa1KMq6smTfzoQ8EBlh%2BUdAw3vA8zkKD%2Fg1YKaC3mm7gt%2FWHP1Zbj1kelcsGvXSKImGbO%2Bj9eCQQVh3Xi6cVvVB07f4hn0L0y0HC3ycS7hPeATrM8Qs9skRW9TFw685PSe85obwjs10V3J6KZKbgkpIXP12Q02tOiQD%2B8MaYeeqbiqfpGWXnmZFJxpgFGMgooksRk2T%2BG0p5SGJhZ0E%2FzhE5%2FXcCiV%2FUo%2BAJBqVthbt3ZKqvorebeigEwftjsEVlk%2BNuACAWgnp8rTQERgxSqwrV3hBkqlDATetngCSNEGKy7pFhltwSdtzJqA8MVyLKJbyxMhpvFsoZc7cF9SPLnicSuFjbUZPOLzUZyKi5E6xW3JBYRubddi2skO1YZrNKLuNzW8yj0N16VIpYN00nDdCaBLcXxFt6ll6qSFk%2B3cKom8okSJxHuQNJuLKN7%2B3JCNPyC20C53WOtHcbYj38sPj%2BDzcA4z%2BtLgkGukTqiI3Op2Is1JKMMPnwicoGOqUB9LD5Kfxny5MaBPB1UhR4YA%2BmiGH52EF8RCxJpCT4XHAs0Dax8CU7wBcwZk9cWJhew6loc3PYii8uQq4qN%2Fj1WtYPe%2F8cwzihER1s5B6Pal7uKAAUaWr%2BMlgylPOvS5AwgXn03QrIvyYt2mNNdon5jp%2BJU4wqU9HAT7nj1fA81TRfADqaDRWqolwTJjqRuT3y45HlMih1wrdn8eqUsUlENciOTtkD&X-Amz-Signature=3677df961c8c7ebf5c44a604ff670fe77a0c5a7e436c38a600979da3f43518e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YON5DLL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzCV20W8zVk26ZBP0UwirlgkGd%2Fzr%2BPiaYhxutEjy1cwIgWX%2BVLt2uCv5Wd5W1Cn3DsAk6RWNDYl2zbgomPV4d9moq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDGDEJmhOvn8AtQobTyrcA%2B1zoeMEtCQVyMZ7ZAOVfeSB5UgIxOtiBUAIvg3t9GJiIAb5BaoJMf5y4L6y%2B10CXsy94XwSpuVdrtjNE24au%2FSVjkfch%2ByzMO397gIND3YI0gUYmKo%2FT%2BkT2BsPuYtbftmgi5YsQa1KMq6smTfzoQ8EBlh%2BUdAw3vA8zkKD%2Fg1YKaC3mm7gt%2FWHP1Zbj1kelcsGvXSKImGbO%2Bj9eCQQVh3Xi6cVvVB07f4hn0L0y0HC3ycS7hPeATrM8Qs9skRW9TFw685PSe85obwjs10V3J6KZKbgkpIXP12Q02tOiQD%2B8MaYeeqbiqfpGWXnmZFJxpgFGMgooksRk2T%2BG0p5SGJhZ0E%2FzhE5%2FXcCiV%2FUo%2BAJBqVthbt3ZKqvorebeigEwftjsEVlk%2BNuACAWgnp8rTQERgxSqwrV3hBkqlDATetngCSNEGKy7pFhltwSdtzJqA8MVyLKJbyxMhpvFsoZc7cF9SPLnicSuFjbUZPOLzUZyKi5E6xW3JBYRubddi2skO1YZrNKLuNzW8yj0N16VIpYN00nDdCaBLcXxFt6ll6qSFk%2B3cKom8okSJxHuQNJuLKN7%2B3JCNPyC20C53WOtHcbYj38sPj%2BDzcA4z%2BtLgkGukTqiI3Op2Is1JKMMPnwicoGOqUB9LD5Kfxny5MaBPB1UhR4YA%2BmiGH52EF8RCxJpCT4XHAs0Dax8CU7wBcwZk9cWJhew6loc3PYii8uQq4qN%2Fj1WtYPe%2F8cwzihER1s5B6Pal7uKAAUaWr%2BMlgylPOvS5AwgXn03QrIvyYt2mNNdon5jp%2BJU4wqU9HAT7nj1fA81TRfADqaDRWqolwTJjqRuT3y45HlMih1wrdn8eqUsUlENciOTtkD&X-Amz-Signature=8ac661d45ecf79fc00d00cb35a7d78b1ff43154ba2afda28264ea97f9913701b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

