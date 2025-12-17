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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THLU7TZ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhqU6WKPmJdgYB7ztThAfqk3GHaGzhh7ORazSmfJp13AiBk7mQLucFAuYy8Cx9P9DY9b1lhXpYWkcSKf46PrHfY5CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIRqQgkerQBWR%2BmLqKtwDzMvnR5JIqgKm3LvlB4bb1lxinf3Xs%2FrIn6Y2ac289EOr3n6JnPVOlnZLAy9zj2TnU7oQAG4HG2EocXLwBlQ4xP8NEf4of5E7emYYoHYaUBYiU33O9%2F85O%2F1IbLhS5Kvmrr5pMpZ18A0q8cKShD8T7NLOpPayz%2F%2B6lHQepJkqPKJOAmvqpZYDCVcOJlromA9ymyKncfw5inghhEvytM%2F1bFkGVfGYiAXci%2BzSnO1Rhkl5ZJYm8IKiX0nfLx%2BJsKuc1TUe0aEsO0qWzQDiJcK6tPKzDlDz%2BUybKk%2BteoeIgMlRi4bG%2Fgvjt44A1GBMyj8u%2FSCEU1JVGbQjTVZrJGWfdJbgtD%2B8WS3GkEpQdpRb41DHDIT9%2FvVySXbZy8oplJ8gsknWdAgvFi7wYw2MZnhtGrJ7MiondfcMdWiec1sVi%2Bi85sEJfmGfBce%2FMY6c8YY%2FbnwNx6WsZmupCvtAxaXrDmRU6x4itTrtjw37Hw2CrU88DzMOeJc%2F5R1h6lJq%2Fqppz90PxSJFtp4V2mojxY8jsEUcOTqibq5i3KPWNkNly1TRn8N0BPwxyoAQIJUoFsyh5LPAjVdhw3d9LYpg%2BDuvtm7zpOYHccNkjGr%2BCobO1xJJ%2FiUc2Zs1ybfXJUww76CLygY6pgEMQCK7yy8MMnpKA1oeyis9TGsnhp%2BBlEAfd5Oc7yf91VnUwnA6y4aMladMPV%2BVIvGYyZEKdy1ILJ%2BRQ%2Bjaf44O3xNe4PMscNKDlHPqvXmDPfNe0QYpZQbBw8mjkqV5%2FE%2B99n900gAt5Xl06NURzxzFTJdHV3P4BgCdtJ1waQVt2GN%2Fiva6CwxFL9qDA4yQCrgmISfJkVxPIrPDvtaE5WA2A%2BWb%2FGq%2F&X-Amz-Signature=2165a025ab4e155ea70763bda88eea43d4ef371864611d70ba370e982bed76bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THLU7TZ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhqU6WKPmJdgYB7ztThAfqk3GHaGzhh7ORazSmfJp13AiBk7mQLucFAuYy8Cx9P9DY9b1lhXpYWkcSKf46PrHfY5CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIRqQgkerQBWR%2BmLqKtwDzMvnR5JIqgKm3LvlB4bb1lxinf3Xs%2FrIn6Y2ac289EOr3n6JnPVOlnZLAy9zj2TnU7oQAG4HG2EocXLwBlQ4xP8NEf4of5E7emYYoHYaUBYiU33O9%2F85O%2F1IbLhS5Kvmrr5pMpZ18A0q8cKShD8T7NLOpPayz%2F%2B6lHQepJkqPKJOAmvqpZYDCVcOJlromA9ymyKncfw5inghhEvytM%2F1bFkGVfGYiAXci%2BzSnO1Rhkl5ZJYm8IKiX0nfLx%2BJsKuc1TUe0aEsO0qWzQDiJcK6tPKzDlDz%2BUybKk%2BteoeIgMlRi4bG%2Fgvjt44A1GBMyj8u%2FSCEU1JVGbQjTVZrJGWfdJbgtD%2B8WS3GkEpQdpRb41DHDIT9%2FvVySXbZy8oplJ8gsknWdAgvFi7wYw2MZnhtGrJ7MiondfcMdWiec1sVi%2Bi85sEJfmGfBce%2FMY6c8YY%2FbnwNx6WsZmupCvtAxaXrDmRU6x4itTrtjw37Hw2CrU88DzMOeJc%2F5R1h6lJq%2Fqppz90PxSJFtp4V2mojxY8jsEUcOTqibq5i3KPWNkNly1TRn8N0BPwxyoAQIJUoFsyh5LPAjVdhw3d9LYpg%2BDuvtm7zpOYHccNkjGr%2BCobO1xJJ%2FiUc2Zs1ybfXJUww76CLygY6pgEMQCK7yy8MMnpKA1oeyis9TGsnhp%2BBlEAfd5Oc7yf91VnUwnA6y4aMladMPV%2BVIvGYyZEKdy1ILJ%2BRQ%2Bjaf44O3xNe4PMscNKDlHPqvXmDPfNe0QYpZQbBw8mjkqV5%2FE%2B99n900gAt5Xl06NURzxzFTJdHV3P4BgCdtJ1waQVt2GN%2Fiva6CwxFL9qDA4yQCrgmISfJkVxPIrPDvtaE5WA2A%2BWb%2FGq%2F&X-Amz-Signature=af3463be9aaf75ff3239f5fe226853d18b94012c5a7780800710ba1ebf16c7fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

