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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6NAP37X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw%2BYDDzYUKbITSMvw%2Bzafap2xAY1o2m%2Bu3Y7nb8gnAqQIgHO22ySjGoIYjGG0RR3UjlBSL40Ev1VPSHn1s671v480q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCuyX%2Fr%2BPzh8c5%2Fu%2BCrcA5QEZ32T6%2BBS9LqQ%2F6kBRnWYaOcniU5HmwJw6bhzz0SdCknXQWQ0Uv2DBnU%2Fz8WdefLaoip9oIj9vrAuz6FVi%2FkVakEQviQ5FtqJr8BYsWathi75QmVfPfJsCHmx%2BdHm6iS8FCyDgNUMyVdGqijWvuGYdfgwAaCZ7tRw2D%2Bq4ad3DW9y7yRkWexWkhUqvprDaMRMk0bwQKnmknm7xX9L%2B4OX%2F0tlvYWcLoSZBhTdT%2B9eLCSQF2D1X1F8igWbwehXYZmYJ0Dk2ih7nSF393hcOJwji49P7zu8myrhOtZik%2BbHD70qVafrYgcPgGdfpnU2SAEwHTsG3aUrjjoBjDRxbOhHivHTCvYl3VBj2M9J9Zbw44bICCH8bwOjEPQ9MVs%2B49D81jWgXY7QypgXIUDwphdaCbTOkEnOl0VgObqF%2FZEVOkcgSN5rhTCBlU9%2FdoAdWxFERtY%2Ft5BGKOAuyg6PL7w0nLoxV9lH3hXGiNZL2CWK8P5EDh5E95qIl1sqpxKJjvYKHvyrGy6LjrycjV%2F3sbPmvokaXKlp1eLJxszC1M%2BUjziBjnkmatCo9LBYbcDBe3PCMF9TlbBpHCPnYsfs8DwGILQlvwN2iIMp3aObGpYhOV%2BT8Xz%2Fb8y7vUTtMPGXiMoGOqUBNb%2BAuvJ2K6Nn3sLeSAZWio8XnRdCFTz9XBNbgj9HaFRjuSt83YZnB8JDC9YIvGpuaDlBetW0Qbs%2BsZwVWK%2FAN897NCkty0jYyWZJ4LzaDkPuuKLpF1YglMsOmwoFbim3vedsY%2BFpEalnCTz6LExC5KdimaxfU%2BBKET2k1%2B51eU1DrorVC3wR5BL2nMQFXqLsvnetMVFt3opRyjOlx1Nfpg7maHsI&X-Amz-Signature=e007131c06b44b2528a24fe6f4d6eb91ec8ef255af75ca140f64992f01f435e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6NAP37X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw%2BYDDzYUKbITSMvw%2Bzafap2xAY1o2m%2Bu3Y7nb8gnAqQIgHO22ySjGoIYjGG0RR3UjlBSL40Ev1VPSHn1s671v480q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDCuyX%2Fr%2BPzh8c5%2Fu%2BCrcA5QEZ32T6%2BBS9LqQ%2F6kBRnWYaOcniU5HmwJw6bhzz0SdCknXQWQ0Uv2DBnU%2Fz8WdefLaoip9oIj9vrAuz6FVi%2FkVakEQviQ5FtqJr8BYsWathi75QmVfPfJsCHmx%2BdHm6iS8FCyDgNUMyVdGqijWvuGYdfgwAaCZ7tRw2D%2Bq4ad3DW9y7yRkWexWkhUqvprDaMRMk0bwQKnmknm7xX9L%2B4OX%2F0tlvYWcLoSZBhTdT%2B9eLCSQF2D1X1F8igWbwehXYZmYJ0Dk2ih7nSF393hcOJwji49P7zu8myrhOtZik%2BbHD70qVafrYgcPgGdfpnU2SAEwHTsG3aUrjjoBjDRxbOhHivHTCvYl3VBj2M9J9Zbw44bICCH8bwOjEPQ9MVs%2B49D81jWgXY7QypgXIUDwphdaCbTOkEnOl0VgObqF%2FZEVOkcgSN5rhTCBlU9%2FdoAdWxFERtY%2Ft5BGKOAuyg6PL7w0nLoxV9lH3hXGiNZL2CWK8P5EDh5E95qIl1sqpxKJjvYKHvyrGy6LjrycjV%2F3sbPmvokaXKlp1eLJxszC1M%2BUjziBjnkmatCo9LBYbcDBe3PCMF9TlbBpHCPnYsfs8DwGILQlvwN2iIMp3aObGpYhOV%2BT8Xz%2Fb8y7vUTtMPGXiMoGOqUBNb%2BAuvJ2K6Nn3sLeSAZWio8XnRdCFTz9XBNbgj9HaFRjuSt83YZnB8JDC9YIvGpuaDlBetW0Qbs%2BsZwVWK%2FAN897NCkty0jYyWZJ4LzaDkPuuKLpF1YglMsOmwoFbim3vedsY%2BFpEalnCTz6LExC5KdimaxfU%2BBKET2k1%2B51eU1DrorVC3wR5BL2nMQFXqLsvnetMVFt3opRyjOlx1Nfpg7maHsI&X-Amz-Signature=1a521ca04b7edd66b38cf6d68e46469a13d513672c58c81ae2aba83e8f3e1632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

