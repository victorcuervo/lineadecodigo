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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAPC3D3I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlch9lDYx3h5gUkZFohymTPh4u7LI5fuUbbtnqPr8cAAiEAvlrNVw8%2FOV%2By3d22Pao4hFAMLxkNVEKZt5wKWlcv5hUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPbSjTJe35YQlY%2BlGCrcA0vVAmCRclBELEdSGFWNU69f%2FssM6JuepYRguLPRDcR7jcY0ntu0tRqFC4zUT%2BfcPQ6aJIWTkNtK3%2F1BG7ouODKz7pc7JF%2FdcD3%2FWV4yZAoaehkgQ6fDmbMufmMdnYplJ7OJqK9RDDibggy8IgFkWWa0WWOB85nvZCuFi2eca2gmLftSyNzhTwx0l3QjCKkSSxwIIl22ExGhAU7CMIpsXXr9PleXs08It0spRKByrsw%2FyaVSn72ckStr3u%2BBSlCKOAFEd1nwxqQdfQujc27iPuK4qkDNJ4tIXcTSYQ8aNPvHSipBHwjsgBFw64K5m7Fpm3oUp2wKRmFCP8SbGZLvlb5rUkD950XCfCu0EMnXYCtnVV2tI9wqxzIKFXv9Q1kgKPoQ96%2BdzJrJ88UEUjJkBi8Qb1AfgZP6%2FjjvzxvGICRg8utjEy9EGhp4XfYaP6p%2Ba%2B9CxKgWv2bETLxyiZcVBUe4wWinHMjVBXfpn4fb9ZgWi0FP68tG72EwGT9ApQyNcn9Itbej21%2FJtPKzdL5cR5t9G1CO5zOVoOVx%2BqATqKLaNEyBPlOe9Il3eCdaSQwP%2BigBYAE3zdpn%2BSAwCcH2r%2BO0X1mo0sVHc%2FIZt2p56DYDJv1G6WAetKIriSPQMOPpiMoGOqUByU5QVZynYocVT2dz252qXqs7PuvrI4gYgCl1UoLLxj7KbFDNh6Xtq1dcgpMoPyX2%2Becf3bZ85acHkqI0ENBz0Gth2%2FyA6LPYtwZSQcaLjIcZQ99nyjPGvKC2G3Xn9e7sCSbU5fgbFtRR4n0J6WidrdyVOMimHwuaSFL1ylz%2BOvi0QPNe4UCghhnz1YfWUSYpnjQlpSIa05FKg2ilANRNjRvf45Jl&X-Amz-Signature=57c066085ebecf2b4d428f25271f353308832c17a8c665e7af926b84354a6c60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAPC3D3I%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFlch9lDYx3h5gUkZFohymTPh4u7LI5fuUbbtnqPr8cAAiEAvlrNVw8%2FOV%2By3d22Pao4hFAMLxkNVEKZt5wKWlcv5hUq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDPbSjTJe35YQlY%2BlGCrcA0vVAmCRclBELEdSGFWNU69f%2FssM6JuepYRguLPRDcR7jcY0ntu0tRqFC4zUT%2BfcPQ6aJIWTkNtK3%2F1BG7ouODKz7pc7JF%2FdcD3%2FWV4yZAoaehkgQ6fDmbMufmMdnYplJ7OJqK9RDDibggy8IgFkWWa0WWOB85nvZCuFi2eca2gmLftSyNzhTwx0l3QjCKkSSxwIIl22ExGhAU7CMIpsXXr9PleXs08It0spRKByrsw%2FyaVSn72ckStr3u%2BBSlCKOAFEd1nwxqQdfQujc27iPuK4qkDNJ4tIXcTSYQ8aNPvHSipBHwjsgBFw64K5m7Fpm3oUp2wKRmFCP8SbGZLvlb5rUkD950XCfCu0EMnXYCtnVV2tI9wqxzIKFXv9Q1kgKPoQ96%2BdzJrJ88UEUjJkBi8Qb1AfgZP6%2FjjvzxvGICRg8utjEy9EGhp4XfYaP6p%2Ba%2B9CxKgWv2bETLxyiZcVBUe4wWinHMjVBXfpn4fb9ZgWi0FP68tG72EwGT9ApQyNcn9Itbej21%2FJtPKzdL5cR5t9G1CO5zOVoOVx%2BqATqKLaNEyBPlOe9Il3eCdaSQwP%2BigBYAE3zdpn%2BSAwCcH2r%2BO0X1mo0sVHc%2FIZt2p56DYDJv1G6WAetKIriSPQMOPpiMoGOqUByU5QVZynYocVT2dz252qXqs7PuvrI4gYgCl1UoLLxj7KbFDNh6Xtq1dcgpMoPyX2%2Becf3bZ85acHkqI0ENBz0Gth2%2FyA6LPYtwZSQcaLjIcZQ99nyjPGvKC2G3Xn9e7sCSbU5fgbFtRR4n0J6WidrdyVOMimHwuaSFL1ylz%2BOvi0QPNe4UCghhnz1YfWUSYpnjQlpSIa05FKg2ilANRNjRvf45Jl&X-Amz-Signature=68f3acf6d0a2929982a2cca339101b2dba748c4f81a77e375ec94433b7b9b071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

