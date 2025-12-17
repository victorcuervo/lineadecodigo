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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BN3UOB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAl2hVnYeavd3TOucqmWX4oI1tZBZ%2F3HvsR18UOoA%2F61AiEAp2WIO%2BXKPjhW5jVHRkaqGbvdlBuKfjYZoV9GcSCcaKkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDK3U2U3GKu440qBEJCrcA6zKsKfH0VyXnFEykHyy61jWU1TENEe0m%2BDrDk3hX0qfczhZT5YUXiBtf7bliPs6KCgF78cDIxB2rJRFKroTeC6Y6AjfCFoH0YMxQsUk1%2FfJUlkg%2FernaPol%2FHb1W63%2F024XnM4sd7lS%2Bf5jecy5BojHxUWWGp37I48NK3W7d1l9G7qzAi92WbzTkAXWlG0e0LtlDHSO%2FCJzIPwxlbGlGteJ53I1g%2BSvu%2BFUizgLLk92OcJw%2BVib5velQDj809%2BUbBapbQpaOHat%2BHyzMokUk8E%2FXwI7Bfmm7G%2B%2FNAkThKAZGOUmsdjk%2BSdOw%2FHlmoLLCCsU5aZswiVaTp3vx7I2wTzXsvLfAtHudRBArOXeWKFydA009YDBkEgp6xdlP1YM7eaNKd7qPdFHT0Z58VriuyipZQm%2BPbJTNwwU9KcOyo03rMpgHjEU8mW3WCX1U%2FLILOyeoMGHHVA%2FF4bQpJZ4tln1SmXwmB3CBo2Q6dH5fhm9pn5ilU2U%2BedothEgUFGqhjjvuqCata6f0idh%2B2mp8WN%2FLqGyYfjrJR8SyVVm7159mJLYWaioXioNmCQFxctxGeORScKeCScfU3QyiWIYvGWqeZnMSeQGnlU5%2BP2XlFdLrcf40TwXrOUG0PyTMIerisoGOqUBnthCE6V7Y8JlblL4tMmwIL4p1dRkG5GMnA1vi6s1A7YyjIaiWADC%2B4y01H4ORwFVYe%2BsF%2B4nxLHpjIBg9rZimj679vrj0MYzjfM8BBYP0SlxAGCjShTX%2BEE38v%2FRO8CYBD5ACaieztU9mJ7mAlnEbfi6H8rG9s3JjV6e0U9fA%2BtixFhTDMv663Tw7A0A3bIUp79bpVjUBSJnIiMYgSvQBJUB5xdp&X-Amz-Signature=a35d2076d47882e18ce7675d5536afb991970632c3bd7f47a04033a10ecf84a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2BN3UOB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAl2hVnYeavd3TOucqmWX4oI1tZBZ%2F3HvsR18UOoA%2F61AiEAp2WIO%2BXKPjhW5jVHRkaqGbvdlBuKfjYZoV9GcSCcaKkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDK3U2U3GKu440qBEJCrcA6zKsKfH0VyXnFEykHyy61jWU1TENEe0m%2BDrDk3hX0qfczhZT5YUXiBtf7bliPs6KCgF78cDIxB2rJRFKroTeC6Y6AjfCFoH0YMxQsUk1%2FfJUlkg%2FernaPol%2FHb1W63%2F024XnM4sd7lS%2Bf5jecy5BojHxUWWGp37I48NK3W7d1l9G7qzAi92WbzTkAXWlG0e0LtlDHSO%2FCJzIPwxlbGlGteJ53I1g%2BSvu%2BFUizgLLk92OcJw%2BVib5velQDj809%2BUbBapbQpaOHat%2BHyzMokUk8E%2FXwI7Bfmm7G%2B%2FNAkThKAZGOUmsdjk%2BSdOw%2FHlmoLLCCsU5aZswiVaTp3vx7I2wTzXsvLfAtHudRBArOXeWKFydA009YDBkEgp6xdlP1YM7eaNKd7qPdFHT0Z58VriuyipZQm%2BPbJTNwwU9KcOyo03rMpgHjEU8mW3WCX1U%2FLILOyeoMGHHVA%2FF4bQpJZ4tln1SmXwmB3CBo2Q6dH5fhm9pn5ilU2U%2BedothEgUFGqhjjvuqCata6f0idh%2B2mp8WN%2FLqGyYfjrJR8SyVVm7159mJLYWaioXioNmCQFxctxGeORScKeCScfU3QyiWIYvGWqeZnMSeQGnlU5%2BP2XlFdLrcf40TwXrOUG0PyTMIerisoGOqUBnthCE6V7Y8JlblL4tMmwIL4p1dRkG5GMnA1vi6s1A7YyjIaiWADC%2B4y01H4ORwFVYe%2BsF%2B4nxLHpjIBg9rZimj679vrj0MYzjfM8BBYP0SlxAGCjShTX%2BEE38v%2FRO8CYBD5ACaieztU9mJ7mAlnEbfi6H8rG9s3JjV6e0U9fA%2BtixFhTDMv663Tw7A0A3bIUp79bpVjUBSJnIiMYgSvQBJUB5xdp&X-Amz-Signature=8eba19cb378b9e315953fd677281c331bdf334ef41e4d399ef7eaa9c04efe4cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

