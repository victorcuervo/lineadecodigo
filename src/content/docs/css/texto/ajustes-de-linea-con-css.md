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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IINLPQ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlXGCAjP8K%2BuoIn9zatBR9l6rsEz7sR54vfZHBoVSE3QIhANjgSJDe%2F%2Fgk3hR3nHxr7Pkb4NIZl58kRuTENpXxIpwaKv8DCHcQABoMNjM3NDIzMTgzODA1IgzvcxMMCxFIU30D4F4q3AN0zvpgTxRZdOCdpftnlNADQQ%2FWPif36St0X2w9dREatBrDVcCvRzUhvNS6t3nxFHQF%2BWVf77GisF9kA%2BRR7poQE645MOl7e%2F9xd1pIDF0CVhbwaM2gEDkZVhk3eVADoYuJFP%2FiEbfUOgW6AAVv4YFpSFyKk6JqVK434Guf62wONHD0pnJVcKuvYgHrvqHqbHDVMGe0pYzbYX7iJOKygljeRz%2FCgkZ8UC6FR2%2F1uEZqz2LD7na%2FjbFh2HjaDUJMuFWiz2x610YTo3ND3w3AompLDgi7u1Bxke%2FWa1yRO19C1Y%2FZr1ywcizWX21%2FhPmGALLY20lpg%2FzcZ6YMdmUnYWNxUjWkhY41Q%2BswgVLKnF3ZObYFeIxB1%2Bmer4RlZVoHI%2FdBDKmsArHVv8484%2BozTD3KXF48fFEY52kmCHzPTPpK2qkZU4JMvBuay8Ps8w10TqrEayQYupl3YaF3gpJqDxTL29ZzuDTF8xkd19D3Q%2BhqNAQG%2FgZ3hxJpatkN7YGZQ8%2B3XaslN64t14YK4KmHl6gy%2FvzvNOyu50qmW2jEBFQ003fYE8sYUL1RAbKgfW37xV6NfTvjiKQj9rnLa6tPFevZgmn5Gv5MuatQBbn7AQwI26MGA1e%2FLIWwqSkNmzCYg4nKBjqkAcylWDbfUU7S6fXdraNJkviAINUkSr%2FfQmpnnt66A9QsNUkkleMivZjHmoS3ImCfuf22BjYBokPSKKGY3KNysE0MToUalgEI68k6ZrTIolwIq%2BLs37lQt2dEjI9jz91wnzBWovNyG6GqUuMvMZ4fcgDipj%2BJIG5fr1Cjj6RgRvS%2BD2duEBbBq1MC8HhjfyYNdYvNH3MnqP2VHhlTuNoZA3AJoIRy&X-Amz-Signature=8be00e29cf6682c69273b0c2b3ee1e0a4fa6d68a328694682c20b792e3058970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IINLPQ7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDlXGCAjP8K%2BuoIn9zatBR9l6rsEz7sR54vfZHBoVSE3QIhANjgSJDe%2F%2Fgk3hR3nHxr7Pkb4NIZl58kRuTENpXxIpwaKv8DCHcQABoMNjM3NDIzMTgzODA1IgzvcxMMCxFIU30D4F4q3AN0zvpgTxRZdOCdpftnlNADQQ%2FWPif36St0X2w9dREatBrDVcCvRzUhvNS6t3nxFHQF%2BWVf77GisF9kA%2BRR7poQE645MOl7e%2F9xd1pIDF0CVhbwaM2gEDkZVhk3eVADoYuJFP%2FiEbfUOgW6AAVv4YFpSFyKk6JqVK434Guf62wONHD0pnJVcKuvYgHrvqHqbHDVMGe0pYzbYX7iJOKygljeRz%2FCgkZ8UC6FR2%2F1uEZqz2LD7na%2FjbFh2HjaDUJMuFWiz2x610YTo3ND3w3AompLDgi7u1Bxke%2FWa1yRO19C1Y%2FZr1ywcizWX21%2FhPmGALLY20lpg%2FzcZ6YMdmUnYWNxUjWkhY41Q%2BswgVLKnF3ZObYFeIxB1%2Bmer4RlZVoHI%2FdBDKmsArHVv8484%2BozTD3KXF48fFEY52kmCHzPTPpK2qkZU4JMvBuay8Ps8w10TqrEayQYupl3YaF3gpJqDxTL29ZzuDTF8xkd19D3Q%2BhqNAQG%2FgZ3hxJpatkN7YGZQ8%2B3XaslN64t14YK4KmHl6gy%2FvzvNOyu50qmW2jEBFQ003fYE8sYUL1RAbKgfW37xV6NfTvjiKQj9rnLa6tPFevZgmn5Gv5MuatQBbn7AQwI26MGA1e%2FLIWwqSkNmzCYg4nKBjqkAcylWDbfUU7S6fXdraNJkviAINUkSr%2FfQmpnnt66A9QsNUkkleMivZjHmoS3ImCfuf22BjYBokPSKKGY3KNysE0MToUalgEI68k6ZrTIolwIq%2BLs37lQt2dEjI9jz91wnzBWovNyG6GqUuMvMZ4fcgDipj%2BJIG5fr1Cjj6RgRvS%2BD2duEBbBq1MC8HhjfyYNdYvNH3MnqP2VHhlTuNoZA3AJoIRy&X-Amz-Signature=61c8b45a8e70634aa6abc4f371bc0198cf4b66ac18844afd63390061f01e0b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

