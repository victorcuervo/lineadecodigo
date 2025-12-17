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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A7QE4U5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmIlOV%2FJ117RsvV%2FCUQPw2PZcp5B0NZ9EBcbig7xY1bwIgFFjw%2BbNedtSbiOWUGpeW0bdrXxuN%2B0H6srwYFY1rd1gq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPBU%2FAKBM1WQpqe%2FACrcAzsT0zvpRGL4Tfw4xkzuRZmsn%2BGP%2BKvBC5Oc3598zkQleitafY3AN0O5Dc4%2B3FzxQE5WDARswy8iwDUUrFyAunG0VXHQ%2BcqaSHIIFiOXuCsQJpdtjcKYroGLJZuw7PGzi%2BucmgE5%2FF%2FYHZ2grhA0kwzJYDqezyYr5Sb8JS%2F2RzN2Ju4QG3BLq2rG6GJ3GdvOAncjrVY9Stb%2FaRn%2FebzemmA0GykLx6aXthK6o5iPTi1Qo8EV2Rd7rqZyL3CElsoRK278batxtHcRkmQIZxGRDastETQ55iMxtSoa5t%2BImLB2oeGhAX4%2FRxij4ipgdR1LnGk6uJJrSvLh8kKaydlBaI%2BURy%2Fm6loqYnFBfqrv%2FrY5Gr5uW8dgS7UL%2FGR8XmM%2Bk6MjRS04OKNtjVk2x93XbKoriMBSCADthYS4jHMqZlGplUrqEgZFYAaBu5xJQcserWnCjjTjA5rpTOYxgmvw69Vg0yHLI2BdZDok7bEf4bWwp87pboKnH8m%2Fvty7bwL5I0JL5nxVDPkD9aVOdhqh0ubPlVTHEJvoBNQ8USU7ogiL3QfPsz1Ahc9%2FaTCClmowyY4TgENhSI9VQjW4rZd1EHdKT18JAN%2Bds35aqb7%2Bucpqqq%2Fb%2BB18xQq%2BtlN0MM63icoGOqUBo2pqsQvRNwpoU0bVCC%2B8Agu0PAGh%2BkCM6yj0bXj%2FHF7XzNioAcQgVnzbOJ7BqHrM7fhyfc5q01zPzKBl1967zmO1i10qYds2LLoS1a8SuRkzTBUGT8HbRyUJpyRbRgDGpkJ69hBruojx1wKhVYRzRo7Fx1tnioX0pncsqgiVr%2FTmdYvGK7aYas3GUjP940AaJ3bX6%2FEdfDGLHqfuuz4G%2BxVf3K80&X-Amz-Signature=c2d9b9e8692f1ecc4bf0518ea49498c7a4a5724ebe306e62355947f5e62f4bb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A7QE4U5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmIlOV%2FJ117RsvV%2FCUQPw2PZcp5B0NZ9EBcbig7xY1bwIgFFjw%2BbNedtSbiOWUGpeW0bdrXxuN%2B0H6srwYFY1rd1gq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDPBU%2FAKBM1WQpqe%2FACrcAzsT0zvpRGL4Tfw4xkzuRZmsn%2BGP%2BKvBC5Oc3598zkQleitafY3AN0O5Dc4%2B3FzxQE5WDARswy8iwDUUrFyAunG0VXHQ%2BcqaSHIIFiOXuCsQJpdtjcKYroGLJZuw7PGzi%2BucmgE5%2FF%2FYHZ2grhA0kwzJYDqezyYr5Sb8JS%2F2RzN2Ju4QG3BLq2rG6GJ3GdvOAncjrVY9Stb%2FaRn%2FebzemmA0GykLx6aXthK6o5iPTi1Qo8EV2Rd7rqZyL3CElsoRK278batxtHcRkmQIZxGRDastETQ55iMxtSoa5t%2BImLB2oeGhAX4%2FRxij4ipgdR1LnGk6uJJrSvLh8kKaydlBaI%2BURy%2Fm6loqYnFBfqrv%2FrY5Gr5uW8dgS7UL%2FGR8XmM%2Bk6MjRS04OKNtjVk2x93XbKoriMBSCADthYS4jHMqZlGplUrqEgZFYAaBu5xJQcserWnCjjTjA5rpTOYxgmvw69Vg0yHLI2BdZDok7bEf4bWwp87pboKnH8m%2Fvty7bwL5I0JL5nxVDPkD9aVOdhqh0ubPlVTHEJvoBNQ8USU7ogiL3QfPsz1Ahc9%2FaTCClmowyY4TgENhSI9VQjW4rZd1EHdKT18JAN%2Bds35aqb7%2Bucpqqq%2Fb%2BB18xQq%2BtlN0MM63icoGOqUBo2pqsQvRNwpoU0bVCC%2B8Agu0PAGh%2BkCM6yj0bXj%2FHF7XzNioAcQgVnzbOJ7BqHrM7fhyfc5q01zPzKBl1967zmO1i10qYds2LLoS1a8SuRkzTBUGT8HbRyUJpyRbRgDGpkJ69hBruojx1wKhVYRzRo7Fx1tnioX0pncsqgiVr%2FTmdYvGK7aYas3GUjP940AaJ3bX6%2FEdfDGLHqfuuz4G%2BxVf3K80&X-Amz-Signature=2d38685a38cf3fdc29845bbd3a0de7950d3c693f077ebd9d05d6da73fc07feb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

