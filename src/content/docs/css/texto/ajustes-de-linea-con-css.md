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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGIHY7VY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWOZjrjkbxjSQmSKXLmA65svoN4w3jfBCl4iGQArgN7AIgdAQ0uboxudih5sZQbF9sfFsE3lBXxM1pw%2Fars%2Fn2Ktoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPbnqgCfIOnSZmCrhircA%2FC93ex8x532layU1EGIZ4jy374NW20OLOhyk8OEgHpI5BKQJBkM9eljcSobQELO2%2BB4nNQOMPahzjPuc9eQKHQv3%2B9MUqFQoDTZy7DPjiApTYzTOw8O6hhYRbppehjkuObvhs5%2B1ogNr6cLC0r4XiFICGjLq3O1hXi2cJg725mNNHJSCoSg03Ob386F0fDa3NuIoEEC0PToifkciY0KTyASeJWYVBTkzZT837zIQ4sg0wErw%2Fc3KRkHqeuvQ5cBmo%2F8L5r4LL%2Fz96QbBo9v%2Fwo7R7%2Bc3gTCjc9UXy0S0SOK9b9Vz%2BrWKF39%2Bdvb%2B7dTSzYyUppfSEv0Ort7S%2Fst3kA6qkEvRsxj0z%2FQXD0mT0SlAY5vgnaIkLempV3R%2F%2Fb1nm8NHGHzk8nX3yQqvE254LrPPZ5TV1dR4TIm1%2BWezrfQmyQDNh8Piwg8jl6R0iN9usT44FZSbVhEnGSwQ%2Fgksj0hNjg9C4fidN73SsebsLkrcpVohXebCu9K9CvK%2FhOmhhD%2Fg3KFe0TvttwrqC4fXiNW6j7%2FFoz5QhUW%2BT9sSLLO39k5Byqm%2FVnSDu66%2FICCfZXXvDqWxJ7e2TB36J6j9igtjOy0zP7PFQKZ6PZbgnJriDJGjxAD1v5HX8jUMJb7h8oGOqUBJZPxR0nMrtQt23yPKh4o1UbGJZ75%2BgVBZOzR2cgtBjXY99pa9QMm1DUnLWGWgQwJ%2Fs4kWds5yLYhSf77zt2%2BoU3W%2BYKZADBGXrVi%2BjxK6DDQtaJWG2E0cC7MBWMnBVwhQyhJnemJfF2%2BUy%2BB3LVqfCaJpvNP3WmV2N0u5JnGp5ByHiiJzzra%2FA%2BDB2phyMw2%2BJuaVpJKPo%2FbNbS6tiCP3P5jaOeF&X-Amz-Signature=05158d1ac167833d9dd8f5b93307a8f018695417afc229931c39642555127f59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGIHY7VY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWOZjrjkbxjSQmSKXLmA65svoN4w3jfBCl4iGQArgN7AIgdAQ0uboxudih5sZQbF9sfFsE3lBXxM1pw%2Fars%2Fn2Ktoq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPbnqgCfIOnSZmCrhircA%2FC93ex8x532layU1EGIZ4jy374NW20OLOhyk8OEgHpI5BKQJBkM9eljcSobQELO2%2BB4nNQOMPahzjPuc9eQKHQv3%2B9MUqFQoDTZy7DPjiApTYzTOw8O6hhYRbppehjkuObvhs5%2B1ogNr6cLC0r4XiFICGjLq3O1hXi2cJg725mNNHJSCoSg03Ob386F0fDa3NuIoEEC0PToifkciY0KTyASeJWYVBTkzZT837zIQ4sg0wErw%2Fc3KRkHqeuvQ5cBmo%2F8L5r4LL%2Fz96QbBo9v%2Fwo7R7%2Bc3gTCjc9UXy0S0SOK9b9Vz%2BrWKF39%2Bdvb%2B7dTSzYyUppfSEv0Ort7S%2Fst3kA6qkEvRsxj0z%2FQXD0mT0SlAY5vgnaIkLempV3R%2F%2Fb1nm8NHGHzk8nX3yQqvE254LrPPZ5TV1dR4TIm1%2BWezrfQmyQDNh8Piwg8jl6R0iN9usT44FZSbVhEnGSwQ%2Fgksj0hNjg9C4fidN73SsebsLkrcpVohXebCu9K9CvK%2FhOmhhD%2Fg3KFe0TvttwrqC4fXiNW6j7%2FFoz5QhUW%2BT9sSLLO39k5Byqm%2FVnSDu66%2FICCfZXXvDqWxJ7e2TB36J6j9igtjOy0zP7PFQKZ6PZbgnJriDJGjxAD1v5HX8jUMJb7h8oGOqUBJZPxR0nMrtQt23yPKh4o1UbGJZ75%2BgVBZOzR2cgtBjXY99pa9QMm1DUnLWGWgQwJ%2Fs4kWds5yLYhSf77zt2%2BoU3W%2BYKZADBGXrVi%2BjxK6DDQtaJWG2E0cC7MBWMnBVwhQyhJnemJfF2%2BUy%2BB3LVqfCaJpvNP3WmV2N0u5JnGp5ByHiiJzzra%2FA%2BDB2phyMw2%2BJuaVpJKPo%2FbNbS6tiCP3P5jaOeF&X-Amz-Signature=740d95abb6875767584b955520ae736c1134b220c288590de03b8e63af6e7ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

