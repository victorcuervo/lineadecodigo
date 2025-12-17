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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGOOZU5E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfqi0VlAyuy90AKsjZPu0O3vnF6dNriIshYZnxtwFBsQIgESzfYJbFiiC3pszwFcnHSt0T8JPPu3OjdMh4iED6qWkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDM7dQuffKGPNx9FYMSrcA%2BS3l3%2BGYbJG3JUBb%2Bg%2FYVZi9uwRy3wCr9zN2NGSul%2FYxOEH7KB1XcLyxHzc1dx6jvf9XEbbFonhYc79yzIBlI4dtjWyFH1bsOv6tG25GUmFU3oUxL11Z98GYwB0qYm5Fv8kzollUMtA7BbxGeb6xcRUN7i8qIzmqmViLRrrZdWZZcuzOqgqLUOlZuntp6nIgSB6qspXcJ67bHwM18lRusl%2FtzEy6wS%2BPa95B8kR4p%2Bf683SBQ0A93Mpk85nQU1ZO2X2%2FmzN6%2F8hKZHGiK6fy5lc2benXA4JZVbgqoiLKdzvVtwhbe8Es9pvuIXHOPymJRAERVVQ6H64gJ0K2IMbQjbB4cIlH0ygFFrxMmZn6MmlY%2FBAZDUvvr0Xo%2FXaQEb8Zx9t3VeXGt%2BUYCZagq1S1HwSiZ6wVoINWQex%2F%2Bxlp9sppvu7b1GqyBnqIvlOa11bZivUvBYvKGfCYmjpb%2BQHu5X%2Flin4kRi43GyKwn1tAoenT%2BX0qBYcDybq2n95NXpEg6SDJUiVktPjwDVmuHiSUsMwECostCvX9cA5zVoFOHoznUCMCz8fl3tAPV%2FBYJnYOfI9ULikGx3XVP47z%2B3WsF%2B63wtNZhOvre8YpI%2BG6tNMUFvHb%2BX9Rw7gglR0MIiPisoGOqUBihbwcyLz5Dm3WWdHjiUeP1dJewmnrNgZJbDps3lE5nLvO6osFx16u2Xj40DlnlGPMqFkCI1oZ%2ForgsfXxZi2XK2pK16ZCuJO9bEUI66lGuc7Uj0MddMHjqjU4zzlKVVTAByPdhY9128bS3QXegv1t8GZXAnxrgI6d6GlPjRq3MuH5OObkqmIQbV%2BxxZQ4f6bHs%2FhaHqNl2rQl7RtB%2BzuBfJna8G3&X-Amz-Signature=0d4b9d6b9526653ee58a360a3f562125fc66590684f40977c4ec9b659787b4d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGOOZU5E%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfqi0VlAyuy90AKsjZPu0O3vnF6dNriIshYZnxtwFBsQIgESzfYJbFiiC3pszwFcnHSt0T8JPPu3OjdMh4iED6qWkq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDM7dQuffKGPNx9FYMSrcA%2BS3l3%2BGYbJG3JUBb%2Bg%2FYVZi9uwRy3wCr9zN2NGSul%2FYxOEH7KB1XcLyxHzc1dx6jvf9XEbbFonhYc79yzIBlI4dtjWyFH1bsOv6tG25GUmFU3oUxL11Z98GYwB0qYm5Fv8kzollUMtA7BbxGeb6xcRUN7i8qIzmqmViLRrrZdWZZcuzOqgqLUOlZuntp6nIgSB6qspXcJ67bHwM18lRusl%2FtzEy6wS%2BPa95B8kR4p%2Bf683SBQ0A93Mpk85nQU1ZO2X2%2FmzN6%2F8hKZHGiK6fy5lc2benXA4JZVbgqoiLKdzvVtwhbe8Es9pvuIXHOPymJRAERVVQ6H64gJ0K2IMbQjbB4cIlH0ygFFrxMmZn6MmlY%2FBAZDUvvr0Xo%2FXaQEb8Zx9t3VeXGt%2BUYCZagq1S1HwSiZ6wVoINWQex%2F%2Bxlp9sppvu7b1GqyBnqIvlOa11bZivUvBYvKGfCYmjpb%2BQHu5X%2Flin4kRi43GyKwn1tAoenT%2BX0qBYcDybq2n95NXpEg6SDJUiVktPjwDVmuHiSUsMwECostCvX9cA5zVoFOHoznUCMCz8fl3tAPV%2FBYJnYOfI9ULikGx3XVP47z%2B3WsF%2B63wtNZhOvre8YpI%2BG6tNMUFvHb%2BX9Rw7gglR0MIiPisoGOqUBihbwcyLz5Dm3WWdHjiUeP1dJewmnrNgZJbDps3lE5nLvO6osFx16u2Xj40DlnlGPMqFkCI1oZ%2ForgsfXxZi2XK2pK16ZCuJO9bEUI66lGuc7Uj0MddMHjqjU4zzlKVVTAByPdhY9128bS3QXegv1t8GZXAnxrgI6d6GlPjRq3MuH5OObkqmIQbV%2BxxZQ4f6bHs%2FhaHqNl2rQl7RtB%2BzuBfJna8G3&X-Amz-Signature=66be4a59b2f7f2de748e13b37f39b3a8439b7fa3e381a94e9b2c8330e85886db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

