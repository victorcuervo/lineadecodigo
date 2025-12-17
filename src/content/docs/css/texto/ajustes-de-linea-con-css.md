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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWR25O54%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7U06bH8emlU9OanXgMoM9TJbURdosklCl%2FezRj%2B5HzQIgXgH%2BKLcGAJ6hgDAomeSpw%2Fph4Vm05Yfju3LJLYCXZYUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbY5vHY%2Bg2UymjIyircAyMtHYN95ZyH3g5Nd4UUBnSG%2BJvXrfr1BovEpyqKkTuARFzlJrsXVfmGprmCKc2ETWvfvDPzgnPD1b%2Bt7cTyssDFE%2FLoC76NFqo6CMgCoDnRkQPQJb7wqyT2UzRk6JG%2FNrmKIzXwmlEzgX9gILrqSeVoei1daD72iIRhBDbXOX2u%2BioQ3kOQ2aXq%2F88J%2F10TbuqGJipi6GOesZ2eh5rWMehfaByqXFeWlOK4pj6JMn3%2BzbXi%2F58UpzALUgeU887SLROa7Efs%2F7bHvX%2BWWfqG8dbs%2FFbSZai1RnkkUEYhneoIsBc7ECBKGniiEH1ojltFX%2B7yuOvPmR2Pb2vqKtvtU%2FOzZKulPI4i8qeLgtVqPu0ZuodjrytyNcubzIgcnYWzLHPU417A%2FiQPTVKSMeE9%2B%2BYj41lLZjzb4pDPGtLDFS0jbd%2BHf4ed1JntbCZMe81eDngJh3lENq6phSypGU1JY3M3urT8gh%2B5G7uKcZnS2bYhYThrzZA4tZC7wGyNeyJeq8ZoF0UXqX3mDLCVkElRHd3zNiH2mss5rzvP2JeNuB0IHMtVVmaQuxjQPYab0ziMg60DoBfUVeqZVS5fJf8649IjPD%2Bg2jPQYIc5SrU6K7VbJMXwjKM%2B1V7SfdSNMKmfi8oGOqUBLhjsiNV4Fm22%2B4z2vgElBJUGrgX7SAgShqGPHq%2BX2ZhoXHqGUXUrtmWPTObaYu7sU6sEvwZMmyL1GksYPORLy6YRiXNlbUZRUn%2FyZArAVKmQm5bS6t9SJHx9yMfEYxd9CpKhBw%2BK3sczWeraK%2F6hibN6sT%2FkGjZAmdG0X%2FcBR4rcEdvCp0ZV6SORM4kXsv6UTQcvdBV8%2FwRQX3vXf2GOqLUBKfHJ&X-Amz-Signature=4bd524c36a05c37b09706541750a06c27054c35d0cb0bade1b6676fd815fd065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWR25O54%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T172422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7U06bH8emlU9OanXgMoM9TJbURdosklCl%2FezRj%2B5HzQIgXgH%2BKLcGAJ6hgDAomeSpw%2Fph4Vm05Yfju3LJLYCXZYUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDbY5vHY%2Bg2UymjIyircAyMtHYN95ZyH3g5Nd4UUBnSG%2BJvXrfr1BovEpyqKkTuARFzlJrsXVfmGprmCKc2ETWvfvDPzgnPD1b%2Bt7cTyssDFE%2FLoC76NFqo6CMgCoDnRkQPQJb7wqyT2UzRk6JG%2FNrmKIzXwmlEzgX9gILrqSeVoei1daD72iIRhBDbXOX2u%2BioQ3kOQ2aXq%2F88J%2F10TbuqGJipi6GOesZ2eh5rWMehfaByqXFeWlOK4pj6JMn3%2BzbXi%2F58UpzALUgeU887SLROa7Efs%2F7bHvX%2BWWfqG8dbs%2FFbSZai1RnkkUEYhneoIsBc7ECBKGniiEH1ojltFX%2B7yuOvPmR2Pb2vqKtvtU%2FOzZKulPI4i8qeLgtVqPu0ZuodjrytyNcubzIgcnYWzLHPU417A%2FiQPTVKSMeE9%2B%2BYj41lLZjzb4pDPGtLDFS0jbd%2BHf4ed1JntbCZMe81eDngJh3lENq6phSypGU1JY3M3urT8gh%2B5G7uKcZnS2bYhYThrzZA4tZC7wGyNeyJeq8ZoF0UXqX3mDLCVkElRHd3zNiH2mss5rzvP2JeNuB0IHMtVVmaQuxjQPYab0ziMg60DoBfUVeqZVS5fJf8649IjPD%2Bg2jPQYIc5SrU6K7VbJMXwjKM%2B1V7SfdSNMKmfi8oGOqUBLhjsiNV4Fm22%2B4z2vgElBJUGrgX7SAgShqGPHq%2BX2ZhoXHqGUXUrtmWPTObaYu7sU6sEvwZMmyL1GksYPORLy6YRiXNlbUZRUn%2FyZArAVKmQm5bS6t9SJHx9yMfEYxd9CpKhBw%2BK3sczWeraK%2F6hibN6sT%2FkGjZAmdG0X%2FcBR4rcEdvCp0ZV6SORM4kXsv6UTQcvdBV8%2FwRQX3vXf2GOqLUBKfHJ&X-Amz-Signature=48c2e69098877c1833a6f4e3dcc86af659e00404910873c2fbd6bffa91e8c20c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

