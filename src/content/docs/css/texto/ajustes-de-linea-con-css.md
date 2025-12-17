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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCIXTAJT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2WmoZ%2Ffi%2Fo3UAqiZv0xB%2B0HjYfR9NOZWEUOWmpPK3oAiAcFnQzq6QgQ1500RZyq0SLa83k2DPNN6yQYG2gjjPtgyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMxGQK6r6zZRBKgRL%2FKtwDUM3fDEPoykrD6m2I09WcpS4QlSkmpSmHKjn8nEXFVnoGBujd3s4f%2B5IdfjZEYpV%2Ff5nsjTKeJz8EzVvfi1fcdYWxHWOIHU8ABH%2Fw082tzuYZuX6ZKm9BbaCXIdm9OEBVC8le4tphXTPlQ1gUbX1B1F21q0YnMzpeS3QkyWBzq4eNNfHHquLIDrsSgyZUH1dVP7GuTqsGIeVAuajvlFns6t4t5boHFGeo05O0GDT%2FhAAGBt2my4mYFxlviB8qu88KIhsm8WvoPab1eOIvD92aVbmDBGXkXR3jL5WV1ScaWDavjZKJ8MdzdkXD9UBKXAoUW3forKqc7N%2FXWsPPZa1w5b7cMnTXT78y2r6D5IZpBEpXKQyJZibgo1Nb4T9t50mYKttnvoeHf3FcFyz7phvqp%2FZgs%2BflrS%2BKsxuQXcSgKK4j8PDnWQnUpc7h%2F07rMU6t%2BxniB2M%2BvTDZhqYgiqQMn0yRRyp7X%2F%2FU5TGrkKYW7LN8DOHcaR8CZI%2B8e0TNQMNSc8bC%2FPXs9Xu6dc26n3WXGXgscwaKsRR2JXgS2kUfS6Pptplm3NJ98KFcAJRUk7oUKb0MkjkR8ImPnJ9waHKvq9k1CDFUXJcXIgfKpchPaQXU%2FyFPk7wYIeeETHkw%2FrKIygY6pgGoQjx5oYHxjll7ApmvdYrkleAavQuZcsmsVg5NeDp8iamnczOWKcMdYapYrUtEfrIJKAH4yJSfg7pBQ0fPRCHgtgqbgT63cgBNQZYjtc9wXvKCl74WZ72SAuy7K0l1II%2BygtTjdKVT%2BUWf43QYATNm%2B%2BYxTlxUdosj7NZNoXElij8Ip0erg1LA1oBDzFRvw4dt3sSaI6s4OzAehw5fN4unW98%2B1QTf&X-Amz-Signature=21b44a5c6b4042c9e37b03f2af26690472d9e6b9eeae867cc8cfa00cca4b61ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCIXTAJT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA2WmoZ%2Ffi%2Fo3UAqiZv0xB%2B0HjYfR9NOZWEUOWmpPK3oAiAcFnQzq6QgQ1500RZyq0SLa83k2DPNN6yQYG2gjjPtgyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMxGQK6r6zZRBKgRL%2FKtwDUM3fDEPoykrD6m2I09WcpS4QlSkmpSmHKjn8nEXFVnoGBujd3s4f%2B5IdfjZEYpV%2Ff5nsjTKeJz8EzVvfi1fcdYWxHWOIHU8ABH%2Fw082tzuYZuX6ZKm9BbaCXIdm9OEBVC8le4tphXTPlQ1gUbX1B1F21q0YnMzpeS3QkyWBzq4eNNfHHquLIDrsSgyZUH1dVP7GuTqsGIeVAuajvlFns6t4t5boHFGeo05O0GDT%2FhAAGBt2my4mYFxlviB8qu88KIhsm8WvoPab1eOIvD92aVbmDBGXkXR3jL5WV1ScaWDavjZKJ8MdzdkXD9UBKXAoUW3forKqc7N%2FXWsPPZa1w5b7cMnTXT78y2r6D5IZpBEpXKQyJZibgo1Nb4T9t50mYKttnvoeHf3FcFyz7phvqp%2FZgs%2BflrS%2BKsxuQXcSgKK4j8PDnWQnUpc7h%2F07rMU6t%2BxniB2M%2BvTDZhqYgiqQMn0yRRyp7X%2F%2FU5TGrkKYW7LN8DOHcaR8CZI%2B8e0TNQMNSc8bC%2FPXs9Xu6dc26n3WXGXgscwaKsRR2JXgS2kUfS6Pptplm3NJ98KFcAJRUk7oUKb0MkjkR8ImPnJ9waHKvq9k1CDFUXJcXIgfKpchPaQXU%2FyFPk7wYIeeETHkw%2FrKIygY6pgGoQjx5oYHxjll7ApmvdYrkleAavQuZcsmsVg5NeDp8iamnczOWKcMdYapYrUtEfrIJKAH4yJSfg7pBQ0fPRCHgtgqbgT63cgBNQZYjtc9wXvKCl74WZ72SAuy7K0l1II%2BygtTjdKVT%2BUWf43QYATNm%2B%2BYxTlxUdosj7NZNoXElij8Ip0erg1LA1oBDzFRvw4dt3sSaI6s4OzAehw5fN4unW98%2B1QTf&X-Amz-Signature=6e7682c9298fba63614a70d270960f6c987420b12be087771e352b4d72f2f1ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

