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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXQE7JJF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyUa3O5u5kBocfxRhYBGFpsxuNMkJdnne7M5Nf4aWrnAIgHgY2%2BOsIuAD%2FZFIJSifMsNyZ3rtEdzUhdzVzLNvB8nwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCewOnshs6nVO4HYiircA7XIzKnlG6OilgEfj4g8nwwPuL9Jj%2F9jHViDvEo0MBbiqwDnQsIyJtraSmSQn4lxwSgjaIsEaWxrLt4E%2Fdunld4xaSvfIFMvbRiqR9MgvCnTNTo4YpLzATFJtuVfQ1rbZf3cjovyZBI%2FJph4%2FaeoAErMmhVYcEk0rb8%2BaEKteE4nZIiAEAOlmip08pl5T6jtD%2FfA4Y4A6fxu0FJirsttLdULtebOijJqQjRPZN4GFJmBarUwiWfOREgSD0gmdAIa30O7k5H7f8zNO4ZHxbxvKAhgAnl1ZzbrSYRrCFPUU%2Fepr1COVPd1NXUdb%2FWVgFCI6jP4v3Sz%2F3J7joihbj%2B%2FXyhA8iZXYKGyHIvkIyoUQZfyF9%2FnsdJsH0NokxNtxXRJihDd53l9VrlbtkRl5Egdk0lINCYj7KNB04qWkN5%2BZ7bD4YABgKqKAZ67frfv45o%2Bly8AETw0Q4YOJ2fjwcbPsiFa5315bax0Myq2%2BLLhpo%2Fj6sBGUTnBmVlwfet9hhvMT0P9R1XuQQZPxYTKKC%2Bq%2FLKjR8a3JW7FRVLXpPe77KDaRRxzgvUGiXkL84q9vIe0Vvb04Gbagp%2BD9T8PyxdnusRzPiwqhz7lkeNF7T4AgnNC3xUQUG2698sYWCUkMO7piMoGOqUBVlEEGeVd%2BT38PWwQQCHiaLTJtL1UOXn0CDJdj9ceHysxiGOw7jlAkrQR8kVFpQ8zk4vBECkzPKxTYP%2Bh%2FQCUvuKNxCnosd%2FrYIaPlOJcwskuOOzQbcFd9MGkVJl%2F2UTqLsMVkNENixOxzfSxgxChirUPAp5CypY%2B9KD90aST8UWHAy2EYEsQ92gOEEmuFTHAQykEmm4EQg8fzWQHJ7iqbSempWpD&X-Amz-Signature=423111d2c06e86115c75ea1c021f1a2101474bb413145a2fb4d9c37dde8a1dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXQE7JJF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyUa3O5u5kBocfxRhYBGFpsxuNMkJdnne7M5Nf4aWrnAIgHgY2%2BOsIuAD%2FZFIJSifMsNyZ3rtEdzUhdzVzLNvB8nwq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDCewOnshs6nVO4HYiircA7XIzKnlG6OilgEfj4g8nwwPuL9Jj%2F9jHViDvEo0MBbiqwDnQsIyJtraSmSQn4lxwSgjaIsEaWxrLt4E%2Fdunld4xaSvfIFMvbRiqR9MgvCnTNTo4YpLzATFJtuVfQ1rbZf3cjovyZBI%2FJph4%2FaeoAErMmhVYcEk0rb8%2BaEKteE4nZIiAEAOlmip08pl5T6jtD%2FfA4Y4A6fxu0FJirsttLdULtebOijJqQjRPZN4GFJmBarUwiWfOREgSD0gmdAIa30O7k5H7f8zNO4ZHxbxvKAhgAnl1ZzbrSYRrCFPUU%2Fepr1COVPd1NXUdb%2FWVgFCI6jP4v3Sz%2F3J7joihbj%2B%2FXyhA8iZXYKGyHIvkIyoUQZfyF9%2FnsdJsH0NokxNtxXRJihDd53l9VrlbtkRl5Egdk0lINCYj7KNB04qWkN5%2BZ7bD4YABgKqKAZ67frfv45o%2Bly8AETw0Q4YOJ2fjwcbPsiFa5315bax0Myq2%2BLLhpo%2Fj6sBGUTnBmVlwfet9hhvMT0P9R1XuQQZPxYTKKC%2Bq%2FLKjR8a3JW7FRVLXpPe77KDaRRxzgvUGiXkL84q9vIe0Vvb04Gbagp%2BD9T8PyxdnusRzPiwqhz7lkeNF7T4AgnNC3xUQUG2698sYWCUkMO7piMoGOqUBVlEEGeVd%2BT38PWwQQCHiaLTJtL1UOXn0CDJdj9ceHysxiGOw7jlAkrQR8kVFpQ8zk4vBECkzPKxTYP%2Bh%2FQCUvuKNxCnosd%2FrYIaPlOJcwskuOOzQbcFd9MGkVJl%2F2UTqLsMVkNENixOxzfSxgxChirUPAp5CypY%2B9KD90aST8UWHAy2EYEsQ92gOEEmuFTHAQykEmm4EQg8fzWQHJ7iqbSempWpD&X-Amz-Signature=7e4ab954a148504e1f776517d91a726b0461e38066e1fc31f0e86a7fc9ce3bda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

