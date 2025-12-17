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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHFC6OJG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG92MAQ8ed9XY5PnmlIn4ueIZA2MpqPM60Y30KTQ26IrAiEAzB4uyBPb%2F003RRyNtELkGJbTTs7uCdyNlxCgBYECOYwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BqBBxBN7q00mZJjircA3IzXbi2eboIKJ0f3SGLVkCTHcPA6sTbiPm4vrvdp8cIfEBIlCb7LUOTE%2F1x5kyu3hjBCkAplGdWjOmLbGDoKQQNdJ99qjdWkJDoxewApHB3AMoa17%2Bl7T%2FvcCg8ZwVXp%2BsuDAjkjrQYCQbXxQh9D1keC7C%2BuXj1nqhee6Nj3kF%2BCTtuhCMoBfP8RzwOeIWbLh9%2B%2BCJNQDFEPSpRiulLSX0uTnxtNVt6O3zLNE3OifxNDiKxxIzjvBDXGNV8tUOqjAGWHzzaq2d%2BCL1UXbtANcElV7W%2BihBqCJUkyvZf8IT%2F%2Fg%2FpYRNC4tv5N9DME2qCKWVi7mOIF%2BJdsbkjct3ryT%2FSdJDJjY43er%2B71HO0JMLrKQ0fyd9AJxy86Ia4Z1ncp5A7VSffgjWYfdHO1nQTfLSQkW6cM6ZKgDXUNpwCKIhCcrZ4jVyBCH95yI4VC5PVcDxcspB3mgLQaHgs8lkUuQjUXh%2Bdmt7uLWTen7Bwtc%2FVhj2zZX%2B70PW0Va%2BdzIbsSzAAXmFuizjo5c3%2FqH%2FyYFLppDMfZOo98Y53%2FZR2O3DpET%2FHK43RrFhxIDQsppOJF84tPhX7jogBfss9iZxjBgAfwr1G3fDamGjnc1Pefvb0VO8XeClKvpo9ityeMJ%2Bgi8oGOqUB%2FfZhRruNOh7cMkDLteAuzzB%2BbKWPs%2F9Kay%2FzPZvWXz5sUNiSpRp3eR3NEWjhV%2FjQ4BGPeTbyLZd1rkT8LMsvDJlRzPlR9ph3MamnWQxcjpJjDLjq0LS5tNGQbvUD5AKzU6zrYtgyJ%2BTosSGeppSXa0RZZXbwK3dhCANYB3iOPQl1SJORZKsBIzzYf0Xl2vL0a%2FZdUocDpHwGT2FEF9D5c%2FYzLUea&X-Amz-Signature=14b31803dfb452050fb1d369fae9e920380f7828ca57cc46f2ba5f7b284c3788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHFC6OJG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG92MAQ8ed9XY5PnmlIn4ueIZA2MpqPM60Y30KTQ26IrAiEAzB4uyBPb%2F003RRyNtELkGJbTTs7uCdyNlxCgBYECOYwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BqBBxBN7q00mZJjircA3IzXbi2eboIKJ0f3SGLVkCTHcPA6sTbiPm4vrvdp8cIfEBIlCb7LUOTE%2F1x5kyu3hjBCkAplGdWjOmLbGDoKQQNdJ99qjdWkJDoxewApHB3AMoa17%2Bl7T%2FvcCg8ZwVXp%2BsuDAjkjrQYCQbXxQh9D1keC7C%2BuXj1nqhee6Nj3kF%2BCTtuhCMoBfP8RzwOeIWbLh9%2B%2BCJNQDFEPSpRiulLSX0uTnxtNVt6O3zLNE3OifxNDiKxxIzjvBDXGNV8tUOqjAGWHzzaq2d%2BCL1UXbtANcElV7W%2BihBqCJUkyvZf8IT%2F%2Fg%2FpYRNC4tv5N9DME2qCKWVi7mOIF%2BJdsbkjct3ryT%2FSdJDJjY43er%2B71HO0JMLrKQ0fyd9AJxy86Ia4Z1ncp5A7VSffgjWYfdHO1nQTfLSQkW6cM6ZKgDXUNpwCKIhCcrZ4jVyBCH95yI4VC5PVcDxcspB3mgLQaHgs8lkUuQjUXh%2Bdmt7uLWTen7Bwtc%2FVhj2zZX%2B70PW0Va%2BdzIbsSzAAXmFuizjo5c3%2FqH%2FyYFLppDMfZOo98Y53%2FZR2O3DpET%2FHK43RrFhxIDQsppOJF84tPhX7jogBfss9iZxjBgAfwr1G3fDamGjnc1Pefvb0VO8XeClKvpo9ityeMJ%2Bgi8oGOqUB%2FfZhRruNOh7cMkDLteAuzzB%2BbKWPs%2F9Kay%2FzPZvWXz5sUNiSpRp3eR3NEWjhV%2FjQ4BGPeTbyLZd1rkT8LMsvDJlRzPlR9ph3MamnWQxcjpJjDLjq0LS5tNGQbvUD5AKzU6zrYtgyJ%2BTosSGeppSXa0RZZXbwK3dhCANYB3iOPQl1SJORZKsBIzzYf0Xl2vL0a%2FZdUocDpHwGT2FEF9D5c%2FYzLUea&X-Amz-Signature=bb1fff3ea700822b4f7cafc9c14b946218741fc8432cd9459f63643a6bae1e53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

