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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLEH5CQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5fvGhAA2CVQr%2BmvvxIGDgHUg2HRkwBOVBd2je6ojZDAIhAPn38aexGLWXkF0eQ1yoPUonvge4hCLxXUQ%2Fh1ftLg4tKv8DCHYQABoMNjM3NDIzMTgzODA1Igz2TrpDqk52uyb7lvEq3AP7gMWuf8QhCbCXmgPD6mzlZTQguCTTBpWXio5z8n6dXqnvuRK3thxHGT0Y2KxYqangH5Muj%2FDLgpnVP57JJNO%2FG%2FRxVmfQ2y0fLJGJBzz1p5%2B%2F54S9JRQcdcx%2B7IceCNP%2BCGgUl2Zs12N8%2BbjCEbGZFPRlwSV%2Bbaevtr7YCbsNNwJNAbHg%2FfF%2BBtZgIgSENv3%2BVg76C064STMoDM%2BQdNJ2cj7VJ4QrHF4GQxodqJUj5aCpzMrou5OQYiCmjHvG32BZ801vuAX6Iho3%2B9fJfYWleXfSJ9WCyCRSoyA77g5R3kRjdYGXL39MVj15DfNl7n4qwZa8LRkNBLpb0FTIhDGirQh2IAU2fw41ZaYWPsAqYSDsxQ3%2BWa6PeyTTV%2F%2FSM4uMt1iFCH2178z94jsoB5kW2aA7EYOKQ%2FM1KQPSeSSdSi2SjdCdUIzPHmPZNNOp%2BMMrABIc5%2BpYhG5XoXuq6iLMP1AhiF0KK%2F%2FnwAyD2UtGN1J6fkofFUl7l1%2F7hX1sbI0JwlsnzZap7LDyA1cR9OQMqI0M7DnI%2FJGjW7y7C55LO958xz%2F7bOYPrTrW7c4plYiQ3ZQtxvCdtMrTJ7hvUSfumbgrIzUsdW5WYs9evG%2BzCJxqXywJq19UCtYnsjCT6YjKBjqkAXFUCEeck%2B2CLhqvjhxCR6T78EKu%2BCz6kJ6CAnCLiN2z034jfDqjCLQDedqadcjxZlVUUrjZ6i0SErLqg5rxhz129Yyp4iKA%2BVUNgzO%2F1%2Bu2LiFk9m7tkP0GtvN%2BMu4TT4nhtX4vYn4EkaAV8p4jyu7CKtJeEO9t4L7CYWHuE%2FwfpB%2FuUPLzVC1RQRLk5jLqgsNOiDFwOK3SkLz3AYChGOROmMHd&X-Amz-Signature=dc1ac9d7a1d495fdd4d9bc28ae8cc9b9542ade3a109186fda0a1cd3860bc65be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMLEH5CQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5fvGhAA2CVQr%2BmvvxIGDgHUg2HRkwBOVBd2je6ojZDAIhAPn38aexGLWXkF0eQ1yoPUonvge4hCLxXUQ%2Fh1ftLg4tKv8DCHYQABoMNjM3NDIzMTgzODA1Igz2TrpDqk52uyb7lvEq3AP7gMWuf8QhCbCXmgPD6mzlZTQguCTTBpWXio5z8n6dXqnvuRK3thxHGT0Y2KxYqangH5Muj%2FDLgpnVP57JJNO%2FG%2FRxVmfQ2y0fLJGJBzz1p5%2B%2F54S9JRQcdcx%2B7IceCNP%2BCGgUl2Zs12N8%2BbjCEbGZFPRlwSV%2Bbaevtr7YCbsNNwJNAbHg%2FfF%2BBtZgIgSENv3%2BVg76C064STMoDM%2BQdNJ2cj7VJ4QrHF4GQxodqJUj5aCpzMrou5OQYiCmjHvG32BZ801vuAX6Iho3%2B9fJfYWleXfSJ9WCyCRSoyA77g5R3kRjdYGXL39MVj15DfNl7n4qwZa8LRkNBLpb0FTIhDGirQh2IAU2fw41ZaYWPsAqYSDsxQ3%2BWa6PeyTTV%2F%2FSM4uMt1iFCH2178z94jsoB5kW2aA7EYOKQ%2FM1KQPSeSSdSi2SjdCdUIzPHmPZNNOp%2BMMrABIc5%2BpYhG5XoXuq6iLMP1AhiF0KK%2F%2FnwAyD2UtGN1J6fkofFUl7l1%2F7hX1sbI0JwlsnzZap7LDyA1cR9OQMqI0M7DnI%2FJGjW7y7C55LO958xz%2F7bOYPrTrW7c4plYiQ3ZQtxvCdtMrTJ7hvUSfumbgrIzUsdW5WYs9evG%2BzCJxqXywJq19UCtYnsjCT6YjKBjqkAXFUCEeck%2B2CLhqvjhxCR6T78EKu%2BCz6kJ6CAnCLiN2z034jfDqjCLQDedqadcjxZlVUUrjZ6i0SErLqg5rxhz129Yyp4iKA%2BVUNgzO%2F1%2Bu2LiFk9m7tkP0GtvN%2BMu4TT4nhtX4vYn4EkaAV8p4jyu7CKtJeEO9t4L7CYWHuE%2FwfpB%2FuUPLzVC1RQRLk5jLqgsNOiDFwOK3SkLz3AYChGOROmMHd&X-Amz-Signature=6f63ae78f2d3045c947d71ca343cf8e943a0d7443ce55f22bda669d02224bdbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

