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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZGUJ5CZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFP56rB%2FPr%2Bn9VvsLsNbFwCqgyIWEhavXjTMLCO6qGQcAiASn87X%2BGbs4%2BVCxizaUdbt2k%2BBmSn3lYfNgMWSe1CkZSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMBzfQvBqfX2120ljSKtwDeDDVQg0Oj5KiE5nyi0isbS8HiAMTzqv4cSrNz205gAWe1z%2FDG%2FMwawljyY2%2Byi%2F3ZGqpCtXl%2FSLC6kYJiCg2nWymf5xP6zV3o37Uohr06LU2rDzUWTa7c1%2BUz%2BMMb0b0u0WCw2WEkyvsEg%2Fld5NXjZq0FcF2QTAlcPAExxK4k0meKlLy9VPGu%2F03L3A28pu6q8GnuRwJ0bwxTvG6WrOdkvvBMFyU3TM7Co61pIVhR7JtYyy7C4HqkskYnhQDyPyaCvQJB6n0NQiDqeLzUxfd8ovQqXGeh6BE1fWVB0KRajJZPu%2BJn5BvRY%2B5xujhxK9Gk7hebbBhs%2Fv10Trd2WaeZWrnwrSY5v01RDVeEC%2FVZLNk2xl73mx97Q9%2BrKfDaJoAeMipvsC7h02AKMnbUPsxLLRue60KkxTKfMdyLa4oWYGC137KyfTLL8ebj0IJW0EZb30P5%2BUK6VkyNrAFA5b9WjSoATu14NSOUmTz7niNyEMtnFJHdolcWChm4xW%2Fu%2BluZ2r3zZTmxEulzOcfxGcbolZ89Y%2BcVSPGylNt6HUL6nN0fd%2Fdhy33M0odNwk25WaMawXDwA4rBr7O9Au%2B3C00eh6rXM9xdypHd1FC7bKuja%2FKqC4b1LHage6vQIgwweGKygY6pgEDhFkeiMb0ucCoNMVvlvAUxJ07ifHfhaOvHhLZF58Hi2Gt1fxm%2Blr3VKY1nskmLT%2Fir9x%2BJIQe9xvzkrZvpNrfYhOXRilYn4IXUm1fCKacj315txhYRbzwxgyGksa37nNONTP%2B8TVvPY9G2Zv1icFEDyOT7ZzWenAxmL0bHJKQ6bT1VH1jAaLkD%2FL%2F684A2tnaosxTWG%2BwDALYymDsdYniVbPbqqnW&X-Amz-Signature=339d984dc1a53912fc390239338025d6a9b7785ad97bb365cebdd62eee8db1fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZGUJ5CZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T142120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFP56rB%2FPr%2Bn9VvsLsNbFwCqgyIWEhavXjTMLCO6qGQcAiASn87X%2BGbs4%2BVCxizaUdbt2k%2BBmSn3lYfNgMWSe1CkZSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMBzfQvBqfX2120ljSKtwDeDDVQg0Oj5KiE5nyi0isbS8HiAMTzqv4cSrNz205gAWe1z%2FDG%2FMwawljyY2%2Byi%2F3ZGqpCtXl%2FSLC6kYJiCg2nWymf5xP6zV3o37Uohr06LU2rDzUWTa7c1%2BUz%2BMMb0b0u0WCw2WEkyvsEg%2Fld5NXjZq0FcF2QTAlcPAExxK4k0meKlLy9VPGu%2F03L3A28pu6q8GnuRwJ0bwxTvG6WrOdkvvBMFyU3TM7Co61pIVhR7JtYyy7C4HqkskYnhQDyPyaCvQJB6n0NQiDqeLzUxfd8ovQqXGeh6BE1fWVB0KRajJZPu%2BJn5BvRY%2B5xujhxK9Gk7hebbBhs%2Fv10Trd2WaeZWrnwrSY5v01RDVeEC%2FVZLNk2xl73mx97Q9%2BrKfDaJoAeMipvsC7h02AKMnbUPsxLLRue60KkxTKfMdyLa4oWYGC137KyfTLL8ebj0IJW0EZb30P5%2BUK6VkyNrAFA5b9WjSoATu14NSOUmTz7niNyEMtnFJHdolcWChm4xW%2Fu%2BluZ2r3zZTmxEulzOcfxGcbolZ89Y%2BcVSPGylNt6HUL6nN0fd%2Fdhy33M0odNwk25WaMawXDwA4rBr7O9Au%2B3C00eh6rXM9xdypHd1FC7bKuja%2FKqC4b1LHage6vQIgwweGKygY6pgEDhFkeiMb0ucCoNMVvlvAUxJ07ifHfhaOvHhLZF58Hi2Gt1fxm%2Blr3VKY1nskmLT%2Fir9x%2BJIQe9xvzkrZvpNrfYhOXRilYn4IXUm1fCKacj315txhYRbzwxgyGksa37nNONTP%2B8TVvPY9G2Zv1icFEDyOT7ZzWenAxmL0bHJKQ6bT1VH1jAaLkD%2FL%2F684A2tnaosxTWG%2BwDALYymDsdYniVbPbqqnW&X-Amz-Signature=a2c78ee5f022ae0722b48b471a57d90dff4d7d1f410eb60ec55455378c0ce6d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

