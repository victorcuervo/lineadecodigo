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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZ25JAD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARf%2B8ZqKfzCKH3k9I4rpvlGseguJRiom0x5FHdNQy2yAiBZRM6yOXaZcyF3OeSQ61ysC1zoJGhikDIy0D96Ymc1Myr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMeyDD3R6ALiwcgIuAKtwD%2FlU84%2F98zTMQE7kIgm%2B3JGZKXmOoqYImH8Ek3uq5KrsUeeeoF%2FMH2snrXIDwc2alT%2F%2Fn5tI%2BEfQvOOzO2%2BmvReOf3ppZUliDrYzJmh7TVONDYerfw5S3euJ%2FsHzLowQiysBCjEONXO6%2FLVBEmM%2FVNUNkdaa8qB0NjdRD9YN9KJxb2Z6iZa6GRpB91%2FMN9YWnYyu1ZOjJipQ3wfQ81qH559gGE538THdb4FCy7hLIXUQ3ycwK8mJ%2FTpp5CVwAJu4g1B8mstK6aUerGDGomssmr0HntM%2FT%2FwQLXyaTzoHrMmYUNGzlBueefPByaMumjTGgpGcZc%2FBz44dhc9WsOPtUD6jwbqe1g%2Fv7EX8pRF5VQAuVVAv5DwQHl8sjqRgd3bwS7pn6MBcL%2BdhFMkTQEUPsGlax0Q%2FM1H756o1aRXstKUo7yNNOqOkttyZEL2h1GFlZtH4FP7R1MxulV0KS3sI2uTNjnfpFR94%2Bmi9%2B4OY8gzoJOiOEipKnmSgUr%2Bz4C2lGTevCc6ymATxVl45FuKpcNG%2Bt2iHihVCx53AmiwAjXLeIwpZS%2Fs8k%2Bcpbnd6Vt40ViVvMtztUKIjuWcrCMGigdCLy2KFSndVReIzAoXFDZvzfVe4dGrrwqMTSCQIwwbKIygY6pgGuVd%2BL%2B8OZlpArfcxXVNNO%2B5lvmz9Q7a6Slv4Gl3pNypPZOZvc9KbKy7GN3DSEdhcumSnjeZ6K2a3D4WPx%2F7BrijCz74dHaLkaIzZXhDafRG%2BSDNRu5TI7ZXpD0uwJqUbhKuY%2FkZaN65J31mg8uTpccOA9kjbIqt8cO2wSMBKlYyjRlH8hZ%2FVebmz4Y2qa%2FHKcFgoy3hESHPxnGEynHZ%2Feik4%2B5spn&X-Amz-Signature=2fe352c0bef880790b498d536de9f0781f04fc0783d3b2f97b02d57846794786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXZ25JAD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIARf%2B8ZqKfzCKH3k9I4rpvlGseguJRiom0x5FHdNQy2yAiBZRM6yOXaZcyF3OeSQ61ysC1zoJGhikDIy0D96Ymc1Myr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMeyDD3R6ALiwcgIuAKtwD%2FlU84%2F98zTMQE7kIgm%2B3JGZKXmOoqYImH8Ek3uq5KrsUeeeoF%2FMH2snrXIDwc2alT%2F%2Fn5tI%2BEfQvOOzO2%2BmvReOf3ppZUliDrYzJmh7TVONDYerfw5S3euJ%2FsHzLowQiysBCjEONXO6%2FLVBEmM%2FVNUNkdaa8qB0NjdRD9YN9KJxb2Z6iZa6GRpB91%2FMN9YWnYyu1ZOjJipQ3wfQ81qH559gGE538THdb4FCy7hLIXUQ3ycwK8mJ%2FTpp5CVwAJu4g1B8mstK6aUerGDGomssmr0HntM%2FT%2FwQLXyaTzoHrMmYUNGzlBueefPByaMumjTGgpGcZc%2FBz44dhc9WsOPtUD6jwbqe1g%2Fv7EX8pRF5VQAuVVAv5DwQHl8sjqRgd3bwS7pn6MBcL%2BdhFMkTQEUPsGlax0Q%2FM1H756o1aRXstKUo7yNNOqOkttyZEL2h1GFlZtH4FP7R1MxulV0KS3sI2uTNjnfpFR94%2Bmi9%2B4OY8gzoJOiOEipKnmSgUr%2Bz4C2lGTevCc6ymATxVl45FuKpcNG%2Bt2iHihVCx53AmiwAjXLeIwpZS%2Fs8k%2Bcpbnd6Vt40ViVvMtztUKIjuWcrCMGigdCLy2KFSndVReIzAoXFDZvzfVe4dGrrwqMTSCQIwwbKIygY6pgGuVd%2BL%2B8OZlpArfcxXVNNO%2B5lvmz9Q7a6Slv4Gl3pNypPZOZvc9KbKy7GN3DSEdhcumSnjeZ6K2a3D4WPx%2F7BrijCz74dHaLkaIzZXhDafRG%2BSDNRu5TI7ZXpD0uwJqUbhKuY%2FkZaN65J31mg8uTpccOA9kjbIqt8cO2wSMBKlYyjRlH8hZ%2FVebmz4Y2qa%2FHKcFgoy3hESHPxnGEynHZ%2Feik4%2B5spn&X-Amz-Signature=8f854e1551262cc20017c91fc43c4c109e9eacade51a776eab3961e5927ed0d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

