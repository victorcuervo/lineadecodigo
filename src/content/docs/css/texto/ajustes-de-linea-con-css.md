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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ORHZP3U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYFVoIcO8QIhiRoYGIvGb%2BcckWe9HZ90TH%2BPo60ZmvOAiEAnBA6OYQTm4X%2F1sL8Zlfz1%2FP%2BgVZM7SVLrirRS8oaOo8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEmv3TkCSzoi1dThDyrcAx%2F7r%2BdCsN72Nlgr9ybcklPTv%2FL%2FPEXh8jRg8dz7j3%2BeOtbsNrjb7CEjPNw0fV03%2B1b06KUjh2zPTsNFe57g5rqy%2FAPDNPqQPJvJ00Lkg%2BnCb92WzhNsGg%2FyhKaU1H50%2BFrxJIgt4jCma6cpJINpZHG8ga40REXyjCJ%2B0DKhtn6GGbENnLI8RjfiJpJtUMgLFQkEwWg9%2F7vN7GLFjxJBWuDFlgydJh9pI7wiVnTYjDbqZRaFKopZs47dypXEKYRPbnRqv10gmuq39ctfeIy5op2eIYDG2cK47o9FZ5IhjlYKKB0vnSP5SXWpEAigG0h%2BnSA3qdPbj240eSai4%2FY4XhyG2umtV%2BnXzFQxG8RLNusz84Rb%2BofaQ3ZqKnHC5cSObnCDCrDt%2BunprUuLh7lrmGuJw%2BwQ%2Ft9STGlBKJPKdGsXaAba2aj%2B90h3R1Hwuf0L4X9HXkxF7Cs2EW4KZ4%2FEfsRr2whkyLo2z9ddQYnPYq7S%2BnDc%2FwGK2RV1A7k9BumZYuxBAo%2BLZNP3ZCOZTJ3CampBlPlyIEreqLsS70m%2FjupCgO2tt%2Fom6FxTVKNYrWH9xXoDu9pmAtSUiQ2ObANK2s4HxC9r1ANsX%2FOPy0Q1Tu9JB1ENkEksMHUR5l7aMJ%2BqisoGOqUBtOJHnqakFoIVubSQ55CmtMAXaZ5K2Tj6hq4kn58t9S%2FAi4bS9AOYhaKLd3Ez5OklAr6J8Fx41D78a%2FxvWFwZURaic5L3XgswJispxo81kdxKj99MmJpQL0OqEubk9FDBsU%2FrIZkD7TfKE0vmvrWhcthnOqaR2U6YdNuk%2F5Np98vj0HcYDXNWn6f3Ygixoy%2F0DdR3WbI5YtnYrLiJSijMweSj0qtf&X-Amz-Signature=9d0ab6e080499344d398ce82f91e346341aaf380589bf4ad6323cac74c04aeb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ORHZP3U%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEYFVoIcO8QIhiRoYGIvGb%2BcckWe9HZ90TH%2BPo60ZmvOAiEAnBA6OYQTm4X%2F1sL8Zlfz1%2FP%2BgVZM7SVLrirRS8oaOo8q%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEmv3TkCSzoi1dThDyrcAx%2F7r%2BdCsN72Nlgr9ybcklPTv%2FL%2FPEXh8jRg8dz7j3%2BeOtbsNrjb7CEjPNw0fV03%2B1b06KUjh2zPTsNFe57g5rqy%2FAPDNPqQPJvJ00Lkg%2BnCb92WzhNsGg%2FyhKaU1H50%2BFrxJIgt4jCma6cpJINpZHG8ga40REXyjCJ%2B0DKhtn6GGbENnLI8RjfiJpJtUMgLFQkEwWg9%2F7vN7GLFjxJBWuDFlgydJh9pI7wiVnTYjDbqZRaFKopZs47dypXEKYRPbnRqv10gmuq39ctfeIy5op2eIYDG2cK47o9FZ5IhjlYKKB0vnSP5SXWpEAigG0h%2BnSA3qdPbj240eSai4%2FY4XhyG2umtV%2BnXzFQxG8RLNusz84Rb%2BofaQ3ZqKnHC5cSObnCDCrDt%2BunprUuLh7lrmGuJw%2BwQ%2Ft9STGlBKJPKdGsXaAba2aj%2B90h3R1Hwuf0L4X9HXkxF7Cs2EW4KZ4%2FEfsRr2whkyLo2z9ddQYnPYq7S%2BnDc%2FwGK2RV1A7k9BumZYuxBAo%2BLZNP3ZCOZTJ3CampBlPlyIEreqLsS70m%2FjupCgO2tt%2Fom6FxTVKNYrWH9xXoDu9pmAtSUiQ2ObANK2s4HxC9r1ANsX%2FOPy0Q1Tu9JB1ENkEksMHUR5l7aMJ%2BqisoGOqUBtOJHnqakFoIVubSQ55CmtMAXaZ5K2Tj6hq4kn58t9S%2FAi4bS9AOYhaKLd3Ez5OklAr6J8Fx41D78a%2FxvWFwZURaic5L3XgswJispxo81kdxKj99MmJpQL0OqEubk9FDBsU%2FrIZkD7TfKE0vmvrWhcthnOqaR2U6YdNuk%2F5Np98vj0HcYDXNWn6f3Ygixoy%2F0DdR3WbI5YtnYrLiJSijMweSj0qtf&X-Amz-Signature=d62ca26c3b1f04d34769122b2360d64bba94fa54744a1549762b503e9a00ae46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

