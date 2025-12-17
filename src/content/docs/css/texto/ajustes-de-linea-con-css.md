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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3K3CRP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4FuGr7LZ2ZoBFRa%2FiOgDCMNJdSJ8ORAV4hxl6XnqtyQIhAJaViFXxsz0xBMWJ8tBwfWRqF1k1T09c30NnodyWwkxWKv8DCHsQABoMNjM3NDIzMTgzODA1Igxe%2BSa5r5ixN1CYMVQq3AN%2FnhIQKthKv6Juo76PSSxecECr9Nip5M6flgzaJjaD%2Bqhrx29A5%2F9QTRb03JRZnfbZ7aqZwIsrC7uYjhXYB9HPeyqAsqnSlca2h%2BH2Ea6eBhfvQkvPOwG9beSXPAQpmIpVyQXLjRYQ8fsLU%2BjdeizzsvjWFsEag%2FHSXNwfLP45%2B%2Fc0nNENFuLN6UsT9Pfb0dF9rpXO4Hy0Q%2F7qzTZktnKvX3iNT6EghnnWVe4Jp6eZ%2BgGuLzzlTuoK1vN8X0C1jBOzrUkJZK6IufoXDHiHKxweUWDPMhT3r%2FwDUCPSHOvcMQS%2FJTgPFFR9B9OYye%2F3ZogcpEmjhBeR0dhD1EwBx65c%2FffX8yx2xmrxphDGajOXkvwHAaEZNJOuuom4N2JKfV%2FA%2F7T7Q3Tyz%2F7YQDj%2ByJe%2Bz10BaSLWZYEqJnpjl0yOG%2BAjsmPyC3RoWXHGF%2F3KlAWpaOaU1n6rNJvLIiUTSDXvApFcI%2B42U35TV0eyQS%2FshCWgzzXg4W8DOIkMi4n%2FB0EJR66%2B%2FeGCqMTjPrfIkfTh4O5IsgwalkOvi5z%2FdFMCUatJJjSh9BpFlzOso9uQTIhPf1THfonLeYksxypuvqRRH0GPf7zp%2FlQpv3E9%2BldztjAt1l3aMtF%2BCAwQITCQ8InKBjqkAW8eXvrxRVJeCO%2Bl6VWr6aCVhf2lmMDR36gY5J%2BiGTLerfWwkxQBCG4F4VxOaXBf5XFw7mczGtfAwaXUM7fADydNbkirzoki042F7OBLrWP6ht4NqoUL8eR6cXxii7W1ujTNWEsyukKzPCTNAWi7xS9YUw4b%2F8Y%2Brz56YDddWrwzRK0nwSYDsI6BRUkDq%2FyBJTpfwcn9dEAAI3KfT9jvDx0a2Rm3&X-Amz-Signature=7c0c803630128ece678ed60515ef47d918352894e7727716b8bc4145fc992829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3K3CRP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4FuGr7LZ2ZoBFRa%2FiOgDCMNJdSJ8ORAV4hxl6XnqtyQIhAJaViFXxsz0xBMWJ8tBwfWRqF1k1T09c30NnodyWwkxWKv8DCHsQABoMNjM3NDIzMTgzODA1Igxe%2BSa5r5ixN1CYMVQq3AN%2FnhIQKthKv6Juo76PSSxecECr9Nip5M6flgzaJjaD%2Bqhrx29A5%2F9QTRb03JRZnfbZ7aqZwIsrC7uYjhXYB9HPeyqAsqnSlca2h%2BH2Ea6eBhfvQkvPOwG9beSXPAQpmIpVyQXLjRYQ8fsLU%2BjdeizzsvjWFsEag%2FHSXNwfLP45%2B%2Fc0nNENFuLN6UsT9Pfb0dF9rpXO4Hy0Q%2F7qzTZktnKvX3iNT6EghnnWVe4Jp6eZ%2BgGuLzzlTuoK1vN8X0C1jBOzrUkJZK6IufoXDHiHKxweUWDPMhT3r%2FwDUCPSHOvcMQS%2FJTgPFFR9B9OYye%2F3ZogcpEmjhBeR0dhD1EwBx65c%2FffX8yx2xmrxphDGajOXkvwHAaEZNJOuuom4N2JKfV%2FA%2F7T7Q3Tyz%2F7YQDj%2ByJe%2Bz10BaSLWZYEqJnpjl0yOG%2BAjsmPyC3RoWXHGF%2F3KlAWpaOaU1n6rNJvLIiUTSDXvApFcI%2B42U35TV0eyQS%2FshCWgzzXg4W8DOIkMi4n%2FB0EJR66%2B%2FeGCqMTjPrfIkfTh4O5IsgwalkOvi5z%2FdFMCUatJJjSh9BpFlzOso9uQTIhPf1THfonLeYksxypuvqRRH0GPf7zp%2FlQpv3E9%2BldztjAt1l3aMtF%2BCAwQITCQ8InKBjqkAW8eXvrxRVJeCO%2Bl6VWr6aCVhf2lmMDR36gY5J%2BiGTLerfWwkxQBCG4F4VxOaXBf5XFw7mczGtfAwaXUM7fADydNbkirzoki042F7OBLrWP6ht4NqoUL8eR6cXxii7W1ujTNWEsyukKzPCTNAWi7xS9YUw4b%2F8Y%2Brz56YDddWrwzRK0nwSYDsI6BRUkDq%2FyBJTpfwcn9dEAAI3KfT9jvDx0a2Rm3&X-Amz-Signature=94579b5e1b5c511950185e0ee6127f60198db5d4f038182b402af03e3b8c34c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

