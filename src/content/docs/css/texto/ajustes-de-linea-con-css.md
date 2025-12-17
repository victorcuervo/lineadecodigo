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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHY5C3Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyxowV2HT5%2FNkcFmWA8E%2BElvaX0zl3uf5j47qcmrFa%2BAIhAMad90ikgljWqUKg7uQxzn2asq7qpIRdjEt9KQLsWpZuKv8DCHwQABoMNjM3NDIzMTgzODA1IgwhiYxaOYGstEJKH04q3ANIO9t78mdTa3mFP%2FdQZunlX7KIOuMHEmnFyWt%2FRI7K88uz9zwFhL1FOv6ePu8TqDxIRyK50nS0GLQBBNOuCw6VcJn0z1sulnZDoRfUCkRegC0IPiWTN%2FvsgpIfhWVYCRWHdD52ztQodD7XiDqoBpzQgkuON5qeQn4ARUGBi6%2BC%2BzpYneGpUhXf6f%2Fg%2BbrEaMFrvn7BM2VlK17WtLA7c6S2r0AWy9G7JsvwhabLUYMSF%2F%2FyTBl%2Fc8Ls%2Fu6Vrzj49jsNPywn1rgDhX6zToHiAPFUVDqNuGGUj%2BWIrIys%2FGCEXcRkLx7FCwRrRi0BclVKghbIzmkvJ4ZiX4buHciPxoz%2FI6F5K2IrUerd4x0m8QY2mceMzKqKJ1UCXRQgDVrNR0fVHTrIV0gFpVHObmJZtVsIe%2B5ffD3BiK%2BTPfQXx5DmyOcUtO12wqBIEr3zGCBW1GHjlGM5DsPC%2B2Y%2BHM2vRUkhBIo2HHTr%2FlnZ7KJrl72zJggkekr7OnYH6DxldFZ%2Bsfqi1KZ5zFegiOWMTtBNJeSDRGqHadFuAfwrwCpo2pwn%2FmwQlnYxLFkLToFh%2F65dLiAcnkPztJioK0jce%2FSO9qMBQRsoohxNML%2BKqMspbsPdzOQaQEzw9O4SzxuvEzCpj4rKBjqkAa%2BIyHR%2BEHut7Rsw1SwmXWlKTPzzYjaJ0FSjxC62JpCRg0r6%2B%2FCfhTfloFLCV5tYDIf0m9R6c3Oj1TaUC2foPNNZfooOyvnT%2F9ZxC%2FRt9LtALbNwTaS8KYl3tA0XOl3w45CfOc%2FXboRHt9peHoFkv%2FEBm%2FNqgNI47hfTgwcIgZIU38E%2BA78eFy4KFkhT8W4c5J2lutBq3%2F0kr7w%2FnYkD4LAPMUYO&X-Amz-Signature=a80d5405cdd45ab63c3d6bd64eab40ba82909f8954de8596516beff65f79bc22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHY5C3Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyxowV2HT5%2FNkcFmWA8E%2BElvaX0zl3uf5j47qcmrFa%2BAIhAMad90ikgljWqUKg7uQxzn2asq7qpIRdjEt9KQLsWpZuKv8DCHwQABoMNjM3NDIzMTgzODA1IgwhiYxaOYGstEJKH04q3ANIO9t78mdTa3mFP%2FdQZunlX7KIOuMHEmnFyWt%2FRI7K88uz9zwFhL1FOv6ePu8TqDxIRyK50nS0GLQBBNOuCw6VcJn0z1sulnZDoRfUCkRegC0IPiWTN%2FvsgpIfhWVYCRWHdD52ztQodD7XiDqoBpzQgkuON5qeQn4ARUGBi6%2BC%2BzpYneGpUhXf6f%2Fg%2BbrEaMFrvn7BM2VlK17WtLA7c6S2r0AWy9G7JsvwhabLUYMSF%2F%2FyTBl%2Fc8Ls%2Fu6Vrzj49jsNPywn1rgDhX6zToHiAPFUVDqNuGGUj%2BWIrIys%2FGCEXcRkLx7FCwRrRi0BclVKghbIzmkvJ4ZiX4buHciPxoz%2FI6F5K2IrUerd4x0m8QY2mceMzKqKJ1UCXRQgDVrNR0fVHTrIV0gFpVHObmJZtVsIe%2B5ffD3BiK%2BTPfQXx5DmyOcUtO12wqBIEr3zGCBW1GHjlGM5DsPC%2B2Y%2BHM2vRUkhBIo2HHTr%2FlnZ7KJrl72zJggkekr7OnYH6DxldFZ%2Bsfqi1KZ5zFegiOWMTtBNJeSDRGqHadFuAfwrwCpo2pwn%2FmwQlnYxLFkLToFh%2F65dLiAcnkPztJioK0jce%2FSO9qMBQRsoohxNML%2BKqMspbsPdzOQaQEzw9O4SzxuvEzCpj4rKBjqkAa%2BIyHR%2BEHut7Rsw1SwmXWlKTPzzYjaJ0FSjxC62JpCRg0r6%2B%2FCfhTfloFLCV5tYDIf0m9R6c3Oj1TaUC2foPNNZfooOyvnT%2F9ZxC%2FRt9LtALbNwTaS8KYl3tA0XOl3w45CfOc%2FXboRHt9peHoFkv%2FEBm%2FNqgNI47hfTgwcIgZIU38E%2BA78eFy4KFkhT8W4c5J2lutBq3%2F0kr7w%2FnYkD4LAPMUYO&X-Amz-Signature=153d6b005f5f710f322b759208c3befa456dfc5c4d9419dbaf6e944b74409215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

