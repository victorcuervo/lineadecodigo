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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWSSTQU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaqYFUr60jD5E97HGkplC79La2iulmO8C7ff4E5h6irAiEAg3uQqJuwJf4%2Bk6ZcRQFXTmRcsapoazvvfUlFxHhgIy8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEclkjuoZkXUQWczGCrcA9vK9FFQMDl2PyJZqpelF7iYHQ7B2UZw0fYxF4h%2FM0K2Zvbj00a5HP7IiOfWT8FcQI7Apg2ENZxJmKjgbRU1XOCcjaVZFL3HDIW4JNvSqKYeicJh0V%2BFKKH72ZkYBHK94Fl45trU1%2By1MPWWRb8UpJ3Avs1hMdecoPQ5i5MX7BFtIF%2FVLSpUZAAwU2R6kjGam3gboS3Ndr9AETbpRN%2F1uV%2Bwu1uq0rh7eRmzOzjY3%2FUEaLcy%2F8c0VQrq2SuHNYeGSbDSQCixN6ueglCz9K%2Fw354LhPvLfShyxTL32E0xCghjC8Ess6wqFQFRz2vlTX4gfEKSAYK2v5y9K6GtQvhVKlANxkzaTdChRtO19xkiia%2BKygquMidKUd6%2FalCtGSgZ18AFhsTjEg9O073MKssL7B39W7XjCaEiA9pnXRWna3DF6boawWnLWQk93YBW7UdZJupJ6KhDD0pEIGpa%2BXK12k8%2BPn%2BYxdc29mIMF3CEiKYY7z7ZAKCQFHBVbDHUTGjPkHAujsYQx1SZm9jtmOm95zuvSBP1bwvVMm0l%2FgCeK1jpOmGsyD3XedOlf0DrgF86GYxcezZpvX2Z5PczFL0ovon1uz5yzaCbS9OP5r3i%2F%2FyoDFdMACALC8QSV1BXMI7GisoGOqUBc%2BMH4sLXgSiA9eS9alSOT%2F8RioBZxKlj1mEp8yDhGIHAOE0q8W3kqeBUUAe%2FPRNtjpvXABZGFJKYTd%2F9trsWJw62SojgrlYF6PvgWAYEfTmgjqqrWnitYCQuzn%2BvH7grOmdNbaOuzDj7MVBP9Ap90wqlVMYvkYCHRfpjNGAywRP8F62Kk5sRdTHkfmFuUp4C7WKEPWEEt32yPt6QPGa5ASJP2CDO&X-Amz-Signature=ecbfeae1e42bcbe3c63502a48d638a314aea3aeef1a6fe29177a63d14e3c5c06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWSSTQU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaqYFUr60jD5E97HGkplC79La2iulmO8C7ff4E5h6irAiEAg3uQqJuwJf4%2Bk6ZcRQFXTmRcsapoazvvfUlFxHhgIy8q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEclkjuoZkXUQWczGCrcA9vK9FFQMDl2PyJZqpelF7iYHQ7B2UZw0fYxF4h%2FM0K2Zvbj00a5HP7IiOfWT8FcQI7Apg2ENZxJmKjgbRU1XOCcjaVZFL3HDIW4JNvSqKYeicJh0V%2BFKKH72ZkYBHK94Fl45trU1%2By1MPWWRb8UpJ3Avs1hMdecoPQ5i5MX7BFtIF%2FVLSpUZAAwU2R6kjGam3gboS3Ndr9AETbpRN%2F1uV%2Bwu1uq0rh7eRmzOzjY3%2FUEaLcy%2F8c0VQrq2SuHNYeGSbDSQCixN6ueglCz9K%2Fw354LhPvLfShyxTL32E0xCghjC8Ess6wqFQFRz2vlTX4gfEKSAYK2v5y9K6GtQvhVKlANxkzaTdChRtO19xkiia%2BKygquMidKUd6%2FalCtGSgZ18AFhsTjEg9O073MKssL7B39W7XjCaEiA9pnXRWna3DF6boawWnLWQk93YBW7UdZJupJ6KhDD0pEIGpa%2BXK12k8%2BPn%2BYxdc29mIMF3CEiKYY7z7ZAKCQFHBVbDHUTGjPkHAujsYQx1SZm9jtmOm95zuvSBP1bwvVMm0l%2FgCeK1jpOmGsyD3XedOlf0DrgF86GYxcezZpvX2Z5PczFL0ovon1uz5yzaCbS9OP5r3i%2F%2FyoDFdMACALC8QSV1BXMI7GisoGOqUBc%2BMH4sLXgSiA9eS9alSOT%2F8RioBZxKlj1mEp8yDhGIHAOE0q8W3kqeBUUAe%2FPRNtjpvXABZGFJKYTd%2F9trsWJw62SojgrlYF6PvgWAYEfTmgjqqrWnitYCQuzn%2BvH7grOmdNbaOuzDj7MVBP9Ap90wqlVMYvkYCHRfpjNGAywRP8F62Kk5sRdTHkfmFuUp4C7WKEPWEEt32yPt6QPGa5ASJP2CDO&X-Amz-Signature=85783c79138b95ed2baf76afbf87769cb67456ad0b5fce1a3053d38d2d87923d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

