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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLY4B3KI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvU8ikQN2nY5cQH%2FGOlxrXPZ86NZvLqfWOVR7mIDjCRAiEAmN3KuB3LGbdbBxIQ75yo5wvjrLoinP1RH1zLWwyPygwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFt%2B4ngL2NXxf7XbjyrcA48liCxXONuww50Z942WiGxjB0HrB0TDYv7o%2FHEnbfLuh%2F7LDEGhsnr3yCADSOWZwdljZ3cQvTc0CarbyHchF8pqpCPnGXjP1QH7Av%2FD4AH721YDbAzaL2LlJJKSZuzTtkYi6EdPGmWjNTzAIeXnzVkjVKau3R8jVDVi9ct1qCGoq%2F3sIk9qPfd4a52I7WwQ8sj%2FOZPeY6%2BBXMzRR3d1HmOpqov2LP4fmlaNC30PmXmZZUQe8Q6e7hYYCaU9fO%2FBfFwuJTUbnkJfi486TLPq2rUEER99Z4jEF3OkMLiTerJiuTW092AdANHgQf%2ByCqMuW7znyoU9Fyu2ZN3EUj%2Bh0GicGZRrR0Z%2F8wyXwUT9Bg2IVhWeFcEsq0U0iU7WHtbfucSu6ZgffD69WXNoeHJf9jCHBT0s15lP8ke9ZQPXq%2Fog12ZHa0Ce2m5KdY2Dg8QOwZBL2dcbk97j5V2qvLmNaWLl6ITvjISUIjoh6dxOvYnIhp%2BqEIxopXj5U%2F7SFL%2BbWYFBHNahQrFTFiCkoMxGEuWpkLseC8KR6j6k1QCq0QJU0xI4QIrJm9h2Q%2BScGXDyOhsr%2FIJm7k%2FouVMWNID9aIKsJyBTK2doHx3WC%2FJHa23eJ%2FdhNXKznXoooKUaMJuCicoGOqUBxerH4q6CcohAkWYD%2F6H4DBI86YPveJMzuXPzrc5iUJH1Y3B%2B46nw8%2BWy0RuTHWEeb9wrJiT3P2hDweQM17JoEgvCoSBamRsQmdDzG7LPWdCVJjHV67qN8IW6XOxTtmGUtUznCEQ9w23BzmdLCsBP8dr1%2FaG%2B%2Bed%2FVbjPNnNks5gT6ZDfSuhsaZC%2F3dRx%2BFyEHfaSbdYbAXzp9ofB4EgAjaI%2B9DY3&X-Amz-Signature=58921c468786a35f1264af99d29b4baa0cad473a585bfde24ce6cbec0ef15ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLY4B3KI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvU8ikQN2nY5cQH%2FGOlxrXPZ86NZvLqfWOVR7mIDjCRAiEAmN3KuB3LGbdbBxIQ75yo5wvjrLoinP1RH1zLWwyPygwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDFt%2B4ngL2NXxf7XbjyrcA48liCxXONuww50Z942WiGxjB0HrB0TDYv7o%2FHEnbfLuh%2F7LDEGhsnr3yCADSOWZwdljZ3cQvTc0CarbyHchF8pqpCPnGXjP1QH7Av%2FD4AH721YDbAzaL2LlJJKSZuzTtkYi6EdPGmWjNTzAIeXnzVkjVKau3R8jVDVi9ct1qCGoq%2F3sIk9qPfd4a52I7WwQ8sj%2FOZPeY6%2BBXMzRR3d1HmOpqov2LP4fmlaNC30PmXmZZUQe8Q6e7hYYCaU9fO%2FBfFwuJTUbnkJfi486TLPq2rUEER99Z4jEF3OkMLiTerJiuTW092AdANHgQf%2ByCqMuW7znyoU9Fyu2ZN3EUj%2Bh0GicGZRrR0Z%2F8wyXwUT9Bg2IVhWeFcEsq0U0iU7WHtbfucSu6ZgffD69WXNoeHJf9jCHBT0s15lP8ke9ZQPXq%2Fog12ZHa0Ce2m5KdY2Dg8QOwZBL2dcbk97j5V2qvLmNaWLl6ITvjISUIjoh6dxOvYnIhp%2BqEIxopXj5U%2F7SFL%2BbWYFBHNahQrFTFiCkoMxGEuWpkLseC8KR6j6k1QCq0QJU0xI4QIrJm9h2Q%2BScGXDyOhsr%2FIJm7k%2FouVMWNID9aIKsJyBTK2doHx3WC%2FJHa23eJ%2FdhNXKznXoooKUaMJuCicoGOqUBxerH4q6CcohAkWYD%2F6H4DBI86YPveJMzuXPzrc5iUJH1Y3B%2B46nw8%2BWy0RuTHWEeb9wrJiT3P2hDweQM17JoEgvCoSBamRsQmdDzG7LPWdCVJjHV67qN8IW6XOxTtmGUtUznCEQ9w23BzmdLCsBP8dr1%2FaG%2B%2Bed%2FVbjPNnNks5gT6ZDfSuhsaZC%2F3dRx%2BFyEHfaSbdYbAXzp9ofB4EgAjaI%2B9DY3&X-Amz-Signature=3479cde20871a49a7dbf5df4f7d51d733b5f19019463dfe8529dae98f1c9ab47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

