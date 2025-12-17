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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYLEB3Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFeGJ4SW4LEhGDiomMdRxR6%2FxgoIVSuwBGAx3uAO4Vj%2BAiEA9OTuYl3v28uQuE30q391r8B1qNcdKEndobH2tFxQE4Qq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDK8K97IMSf96HlHc3SrcA83Mb6RJycwP3IMbW35vzcpwTb%2F4udYM6jI3xPjhW3jqSpiSIQrkR8ir3KkSyzDzXrkm7bABjojIhNTXzydHwhxUPR8meeieCAx8OVnXizv5CF5SWa%2Bz9xJlofYur4i2mCy%2FNBeIAyUKhr2PLbb4zcLjGW62r%2BiS2IBo20PD4cqU9Vu8yL2qg4Bx1HqXfEQAHtYOgVZsWmbiRzjCbadux3HPFyfahgVpsLcHM2vP1O6ve30QqLIusudK6%2FT7425NVkwPRUM9u2Pw%2B7rjy7mHNI%2Bg2hIjdVnuGQojGVuHTAds0bGCNPpvULETUoSzOqjSl1QaTrhvXVEJT%2B2dVYmLM6huQD%2FxwqPmv4jS%2BWjdRMWqeDONW8VNjUEoJlTuVgCHx0UQ05H8mVEqHQSQAFzZLswW3vJYlh08qaP0CS0htQ3qc%2FEkAHAYE5SRpYrQ%2F4GfTWLNJ1R5dI%2Bdp9W%2BzqlJpYW5FbWYBi9vHgp7ALFseeot6QuL6nnNt1%2BjGtrhbcBhzl4M%2FuxlhahhI0BS3od9CQU1t1AtyrR%2FNfnMjBLn6Nwg2dVyVy76EAjUWd%2BTZRUQ1rQp6ivHy7dAhgvtI9lJV%2BHMFRg2cJQ1oSCwd893e67Ic4jjv0mNu30%2B2cKdMNKCicoGOqUBRPdtXgrHE37Lb46YjcpMT4oiJFdejE7BXnEBgH5dmUTEDgkyG36Fb%2BkI8Z6Tb2RA62JcRYLt82h8V3MX56VXwc%2FVAfRkK5VK9c0K4hktcHqKQw%2BOCBsFh7kdVDdaYSivuOVz1fniACscB6i4YvoGWsFF4dn5ZdrPFkMHwyZNsgeb2OzDtWsQihs6gIhvaCpfKVN4uEJmSuI8KnR3nLJ4t6PQo5TE&X-Amz-Signature=e9b56f236f57ca14e2e4e01b2ca82967bbbab45bc10028a48611989948df77f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RYLEB3Q%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFeGJ4SW4LEhGDiomMdRxR6%2FxgoIVSuwBGAx3uAO4Vj%2BAiEA9OTuYl3v28uQuE30q391r8B1qNcdKEndobH2tFxQE4Qq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDK8K97IMSf96HlHc3SrcA83Mb6RJycwP3IMbW35vzcpwTb%2F4udYM6jI3xPjhW3jqSpiSIQrkR8ir3KkSyzDzXrkm7bABjojIhNTXzydHwhxUPR8meeieCAx8OVnXizv5CF5SWa%2Bz9xJlofYur4i2mCy%2FNBeIAyUKhr2PLbb4zcLjGW62r%2BiS2IBo20PD4cqU9Vu8yL2qg4Bx1HqXfEQAHtYOgVZsWmbiRzjCbadux3HPFyfahgVpsLcHM2vP1O6ve30QqLIusudK6%2FT7425NVkwPRUM9u2Pw%2B7rjy7mHNI%2Bg2hIjdVnuGQojGVuHTAds0bGCNPpvULETUoSzOqjSl1QaTrhvXVEJT%2B2dVYmLM6huQD%2FxwqPmv4jS%2BWjdRMWqeDONW8VNjUEoJlTuVgCHx0UQ05H8mVEqHQSQAFzZLswW3vJYlh08qaP0CS0htQ3qc%2FEkAHAYE5SRpYrQ%2F4GfTWLNJ1R5dI%2Bdp9W%2BzqlJpYW5FbWYBi9vHgp7ALFseeot6QuL6nnNt1%2BjGtrhbcBhzl4M%2FuxlhahhI0BS3od9CQU1t1AtyrR%2FNfnMjBLn6Nwg2dVyVy76EAjUWd%2BTZRUQ1rQp6ivHy7dAhgvtI9lJV%2BHMFRg2cJQ1oSCwd893e67Ic4jjv0mNu30%2B2cKdMNKCicoGOqUBRPdtXgrHE37Lb46YjcpMT4oiJFdejE7BXnEBgH5dmUTEDgkyG36Fb%2BkI8Z6Tb2RA62JcRYLt82h8V3MX56VXwc%2FVAfRkK5VK9c0K4hktcHqKQw%2BOCBsFh7kdVDdaYSivuOVz1fniACscB6i4YvoGWsFF4dn5ZdrPFkMHwyZNsgeb2OzDtWsQihs6gIhvaCpfKVN4uEJmSuI8KnR3nLJ4t6PQo5TE&X-Amz-Signature=0f460ae343c69453828ccc6170f692317fb48b7a0b16342fd0451b3b330c846b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

