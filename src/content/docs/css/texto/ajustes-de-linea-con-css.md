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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOKAFPP5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFflVh0DFb6qU%2FNaNS1bhdWFwkjF0WIsnacEuvY5UnfZAiA67cr6%2BLa9rxgR%2Bv0y4l4gHwXjNxZ6BtyW4BljKX0tvir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM8ehdSLWh6mZF1RiLKtwDC6LNavJ1pfg%2BhaOOZJiLfbE4eycDEaIHoN4umybjJJpTTMZsXnJwO7%2F4Dx8leWjQD596t6Ga42QiDI0YLZGDs3xjmikHXwSDcTRV00NHMCd%2BjpJvWdWqyHERXzSbBAL2crA%2BGGCQrBa0EfYhRb6yw6tOCV5JZVjlD92T9SMSA3P18QH0T0q7jPvL6zEQUX1K%2B25kqjRXMckHdXwawRLTb26f3xgZN%2F4Vlg%2B1fWKthmrQ65oQuFdhpZdWGv882ml0NzfKsriAtnii9fO6AahPz3DMpEdIVe36yrExybO%2FJZHL1iuMbjZCqa%2BRCy24Lf9GnL8h8C0tPy10ep3TxHsOXPHS%2BI22c%2FCLjcFa6C0WUf76odVG7gJrwngRBdeG3CWaaklBVLQ%2F7RMTdsRJTBzOAKM1Oe9%2Fn3N5x1qFBdO9vGRXMY3Rv1%2BCQyJ09JZkscIkoXsJtHrfBmACu0E6CwUpjG69mckTKQW%2FRgXStvOGQRfqYMHaDVnp0rLGPN1W5dWy%2Bwbo4hL1UsiGzNFauAN%2F9hY3pRPZQIjR%2Fyc7lxnXi1fDy%2BHQm8UopM%2BvRwbIbkwdf0wKiUirR4jptw8pyjsEqNi7BI1yQU8qMI%2FOjh3dRPUgk8NDmOZy1PVXK9kw1aqKygY6pgEKMKRtM3pWvhMnPHR%2Fcv6v2F2gIHUBDCzT8xg4s6o2N2zMuujOYxTmjH%2FBf%2FKfIrTJTvDCvcYMAAge%2BAZ1RTkQ5Sq1t1SucBtXvPYeIobRpkHE7itRg0RZ%2BC8JfSad8P%2FJjlYSn5QKXt%2FtjM082NE87YOGXBzch2mvFAJUMhFpW4%2B68s8WDyC%2FrbFFmQWfecHmBdpI4XNWJub1p3lXn%2BKMHVVS7SwP&X-Amz-Signature=309b91178b94ba81e6ea72f53074656362f99e3058f6f0233a60b5f42fd47ad4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOKAFPP5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFflVh0DFb6qU%2FNaNS1bhdWFwkjF0WIsnacEuvY5UnfZAiA67cr6%2BLa9rxgR%2Bv0y4l4gHwXjNxZ6BtyW4BljKX0tvir%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM8ehdSLWh6mZF1RiLKtwDC6LNavJ1pfg%2BhaOOZJiLfbE4eycDEaIHoN4umybjJJpTTMZsXnJwO7%2F4Dx8leWjQD596t6Ga42QiDI0YLZGDs3xjmikHXwSDcTRV00NHMCd%2BjpJvWdWqyHERXzSbBAL2crA%2BGGCQrBa0EfYhRb6yw6tOCV5JZVjlD92T9SMSA3P18QH0T0q7jPvL6zEQUX1K%2B25kqjRXMckHdXwawRLTb26f3xgZN%2F4Vlg%2B1fWKthmrQ65oQuFdhpZdWGv882ml0NzfKsriAtnii9fO6AahPz3DMpEdIVe36yrExybO%2FJZHL1iuMbjZCqa%2BRCy24Lf9GnL8h8C0tPy10ep3TxHsOXPHS%2BI22c%2FCLjcFa6C0WUf76odVG7gJrwngRBdeG3CWaaklBVLQ%2F7RMTdsRJTBzOAKM1Oe9%2Fn3N5x1qFBdO9vGRXMY3Rv1%2BCQyJ09JZkscIkoXsJtHrfBmACu0E6CwUpjG69mckTKQW%2FRgXStvOGQRfqYMHaDVnp0rLGPN1W5dWy%2Bwbo4hL1UsiGzNFauAN%2F9hY3pRPZQIjR%2Fyc7lxnXi1fDy%2BHQm8UopM%2BvRwbIbkwdf0wKiUirR4jptw8pyjsEqNi7BI1yQU8qMI%2FOjh3dRPUgk8NDmOZy1PVXK9kw1aqKygY6pgEKMKRtM3pWvhMnPHR%2Fcv6v2F2gIHUBDCzT8xg4s6o2N2zMuujOYxTmjH%2FBf%2FKfIrTJTvDCvcYMAAge%2BAZ1RTkQ5Sq1t1SucBtXvPYeIobRpkHE7itRg0RZ%2BC8JfSad8P%2FJjlYSn5QKXt%2FtjM082NE87YOGXBzch2mvFAJUMhFpW4%2B68s8WDyC%2FrbFFmQWfecHmBdpI4XNWJub1p3lXn%2BKMHVVS7SwP&X-Amz-Signature=9987cd5d8158d91bb98c7e40cca4f9b2712173d655cea4dfb8cb5c090516db31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

