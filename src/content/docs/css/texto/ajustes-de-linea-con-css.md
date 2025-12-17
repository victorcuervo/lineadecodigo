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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQMNO3AZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXdTtXxZZqX8wITfd7V7Y0uh6dmyUIm%2Fk%2BkZp3rThf9gIgH%2FYq7i5OPoeT2OpfWgvfgk1wOBX8GHG9C%2BKLZeEGHjMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrWWdiEu2YwVTPOnircA53OkLuf5PLzZSHOrgcqn%2F66YN78x%2B%2By86hzFITutI8WLsY60pnYVTh%2B2XWdTJh5juJWCB5Q2030Hi7pTY1fbjmZS4NXFQDdyysqF6s9EbWiTDX9ya6OByjKXp7NmexIET1%2BcroK93qfeDpwtN%2BOyCyB%2BTzpbDCA15qmcBfprCv8f8WnSIliI%2F0ucJMn56HBhykV7JdCl8VnuZbDOMI%2FehwsLE9vR%2FhuiPfgY1PAo8KgXmHmnZdgcCUdLL3Uh0qInTZDiVCQXogcRqupZdqEeNgzCWf%2FfFW0kK2inlAWQcx8GoSt6EOx9MpwG2rLog5aKD3A4SfV7f7tXONmwMjWva54fctQkj3hN%2BvrK32CeyINo22j3%2FSkPuymQBs2LWHhDrDvTA%2Fwt67l%2Bdowmyj6ntKssPVNhkpoEDoa%2BHsjoqLugZo64ulYejYq%2F9Y%2BlEbipCBWuSU6cKQjqhCdCv3km6w52aOARqNLdPXiXn2MkVyWXgweFQc4wlAvzgeXKK8OqZeXPtv%2FuZc5tdTXAnRQAwxx0r2hH7aYuUxfmF6Fz1TUif0Jd53U7OdXMMbjLqlIsa%2BI9Bufj3PhRoe6VIsJcI62SAeG7kOZ8nwF0tWNpW3%2BPd4LM%2Fr3MKk0hR5XMKCfi8oGOqUBA8J0Q5kguIe6WkByyUg8M%2BnhYmDM3atxxquTvdUFUukuNuOcfsVqfIrqO32h5fkymFH9HxNr%2BHz5C1bY4cq00YR8zfOmiVSovtLyQ7aSqpXKpUmd0S5JKrVMsMhfQ1FA7Ptr1e9zbhOFDmexOx4SC3IEmYRcq6MGNtyggkrshNE1xZ3Owp0zO21zY0P3NCv9rV18MjMkyk7smQDncCUAgvple2c6&X-Amz-Signature=a7d004502b6d9e8ba96a4051e9a6efa42a84199a129d2294d133838d79b33c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQMNO3AZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXdTtXxZZqX8wITfd7V7Y0uh6dmyUIm%2Fk%2BkZp3rThf9gIgH%2FYq7i5OPoeT2OpfWgvfgk1wOBX8GHG9C%2BKLZeEGHjMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLrWWdiEu2YwVTPOnircA53OkLuf5PLzZSHOrgcqn%2F66YN78x%2B%2By86hzFITutI8WLsY60pnYVTh%2B2XWdTJh5juJWCB5Q2030Hi7pTY1fbjmZS4NXFQDdyysqF6s9EbWiTDX9ya6OByjKXp7NmexIET1%2BcroK93qfeDpwtN%2BOyCyB%2BTzpbDCA15qmcBfprCv8f8WnSIliI%2F0ucJMn56HBhykV7JdCl8VnuZbDOMI%2FehwsLE9vR%2FhuiPfgY1PAo8KgXmHmnZdgcCUdLL3Uh0qInTZDiVCQXogcRqupZdqEeNgzCWf%2FfFW0kK2inlAWQcx8GoSt6EOx9MpwG2rLog5aKD3A4SfV7f7tXONmwMjWva54fctQkj3hN%2BvrK32CeyINo22j3%2FSkPuymQBs2LWHhDrDvTA%2Fwt67l%2Bdowmyj6ntKssPVNhkpoEDoa%2BHsjoqLugZo64ulYejYq%2F9Y%2BlEbipCBWuSU6cKQjqhCdCv3km6w52aOARqNLdPXiXn2MkVyWXgweFQc4wlAvzgeXKK8OqZeXPtv%2FuZc5tdTXAnRQAwxx0r2hH7aYuUxfmF6Fz1TUif0Jd53U7OdXMMbjLqlIsa%2BI9Bufj3PhRoe6VIsJcI62SAeG7kOZ8nwF0tWNpW3%2BPd4LM%2Fr3MKk0hR5XMKCfi8oGOqUBA8J0Q5kguIe6WkByyUg8M%2BnhYmDM3atxxquTvdUFUukuNuOcfsVqfIrqO32h5fkymFH9HxNr%2BHz5C1bY4cq00YR8zfOmiVSovtLyQ7aSqpXKpUmd0S5JKrVMsMhfQ1FA7Ptr1e9zbhOFDmexOx4SC3IEmYRcq6MGNtyggkrshNE1xZ3Owp0zO21zY0P3NCv9rV18MjMkyk7smQDncCUAgvple2c6&X-Amz-Signature=5d73d3d4ddab4594f7ee24e8439e9619d5d6e152f1e2d96a41b6aabb4981dcd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

