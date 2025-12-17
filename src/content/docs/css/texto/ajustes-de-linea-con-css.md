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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XOKHJCC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHPIjxFu%2B%2F0uyUCTjeWXFpAaUsv0Bmaj3QHhNXTeaZxgIgR8TkVp5uMe52dG4dKyTz3oVT9yDy0Pba4nBxZtMsAIwqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJj5BZ9oHoerNRuwCrcA0hCknyw%2FYm9XK04PLBHO%2FTq%2FPGZ4%2BkzciijzZiW9O6dAo5zVdVDvc8Ehw3WK7fISyME5tAZVTpou1nyaY4R8EsB%2FG20%2Fn2oEHx7Qwpr9xy%2FF5Fa9c9YW7XzY5uXBToMzw%2B9fGlNWrrtyfsFWi2WtHzvfQlkiIuNgp59CIAc4Lid1EjKAZ8Ws%2FZiY5os6sQ6%2FEWd6S2AK%2FL0KToXS03s9P6hTv2o7mQrqUU0dIvmYDHHU7bjnBse5vnZKbMbZaSIWlQrVSAhAUlecwFCg09%2BpZcb8J768ytNu%2FqbI%2FK2ETP2UrQX%2BBJwLgC5UOz4Q20Cl%2F7EKcJkv0gqzYCQWflM06haOTsx4MzfPs8bRUZNcKF2hVHJlK%2ByGZ%2FDdyXQdf0uo45CA9XKIFQ9YIqwOUSX9mScTduPnM65jN4WO%2BQsU9EVjx%2FXUCkNIGZbtgAoG7CAGIi0pKo9erBo4T8h6dKskZIG9gpuD0YTz7cJSXO%2BTZv6XhaU1c0%2F7NdIhLybfu6LHW1lVf%2BjevtBqHXhrgMRzOPTRws4LeapZiJoZGxlYBWkS%2Bp4YJ0NafSgoNmSy0dXth2KiZYBmBJ3m06bMflYBWH21N9AlPo2iGkXywO1lXEKoZDJW026k1CDzJiKMNiBi8oGOqUBdY9%2F6EvSg7uslFhH2R7f53ic7m78SVFxq2VKQx5aJQDzVnO0o%2Bekwn88qhSoUdhRM7itSq8%2FffFUMs6Ui5rvO7U1crhI3xRRgR9K3UdlWOe3hWlYOa3Gm9gdFm9lo5ZvriswK61Bl1sKNd8kcBRWDOFQzP%2BGzdbOzevEkMZTX22dOweAXrnMstc9Su5%2BgVrfK%2B95T6jZR4lTq9GrV98E2MQlBP9L&X-Amz-Signature=18e500f894cd34eff9d84b4dbacf761c7ab450af7d348a3e2b07016d584d1d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XOKHJCC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T144557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCHPIjxFu%2B%2F0uyUCTjeWXFpAaUsv0Bmaj3QHhNXTeaZxgIgR8TkVp5uMe52dG4dKyTz3oVT9yDy0Pba4nBxZtMsAIwqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPJj5BZ9oHoerNRuwCrcA0hCknyw%2FYm9XK04PLBHO%2FTq%2FPGZ4%2BkzciijzZiW9O6dAo5zVdVDvc8Ehw3WK7fISyME5tAZVTpou1nyaY4R8EsB%2FG20%2Fn2oEHx7Qwpr9xy%2FF5Fa9c9YW7XzY5uXBToMzw%2B9fGlNWrrtyfsFWi2WtHzvfQlkiIuNgp59CIAc4Lid1EjKAZ8Ws%2FZiY5os6sQ6%2FEWd6S2AK%2FL0KToXS03s9P6hTv2o7mQrqUU0dIvmYDHHU7bjnBse5vnZKbMbZaSIWlQrVSAhAUlecwFCg09%2BpZcb8J768ytNu%2FqbI%2FK2ETP2UrQX%2BBJwLgC5UOz4Q20Cl%2F7EKcJkv0gqzYCQWflM06haOTsx4MzfPs8bRUZNcKF2hVHJlK%2ByGZ%2FDdyXQdf0uo45CA9XKIFQ9YIqwOUSX9mScTduPnM65jN4WO%2BQsU9EVjx%2FXUCkNIGZbtgAoG7CAGIi0pKo9erBo4T8h6dKskZIG9gpuD0YTz7cJSXO%2BTZv6XhaU1c0%2F7NdIhLybfu6LHW1lVf%2BjevtBqHXhrgMRzOPTRws4LeapZiJoZGxlYBWkS%2Bp4YJ0NafSgoNmSy0dXth2KiZYBmBJ3m06bMflYBWH21N9AlPo2iGkXywO1lXEKoZDJW026k1CDzJiKMNiBi8oGOqUBdY9%2F6EvSg7uslFhH2R7f53ic7m78SVFxq2VKQx5aJQDzVnO0o%2Bekwn88qhSoUdhRM7itSq8%2FffFUMs6Ui5rvO7U1crhI3xRRgR9K3UdlWOe3hWlYOa3Gm9gdFm9lo5ZvriswK61Bl1sKNd8kcBRWDOFQzP%2BGzdbOzevEkMZTX22dOweAXrnMstc9Su5%2BgVrfK%2B95T6jZR4lTq9GrV98E2MQlBP9L&X-Amz-Signature=bc913ec28d32b0e357080cdeda0edb796452cc5bc1cf88ec117badf9768cba98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

