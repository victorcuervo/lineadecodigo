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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB5JWWIK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYWlIogU9mSJHdRc7fOZ6Tjfsg4R3Om8%2Fk7np564ZUNgIgY%2FUr7wZK7L4g%2BBCvKdWuxwYosoeXAjMNzM78aArx2zUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOS%2B0xqvOvYQ2WpgircA1qf93ldFNOTLnqnHPxvg11ChzgHiMUa9CmumyLg7OLAFngcN9ZyUpwPY1eWen%2B8CrAh5Okb06UO8o7s5yYbHVc0nAjrQd82qRmnxXIQDhP02UYYeJ2YS4qZIXXUI30EG0g2THfAUp5o2U5kIUqDRSecSVaNgemIUriYNiAL7VTtSAAYszQtTigSPOEJ6LLgvB5gh4iXz0wyadR6NswYB0%2BAGmGlTHFRafpNRHt998I181Pd%2FQ4ItY2rPFuEOhmp%2BFU%2Bt9ThVTaG61FtqE%2BPI%2FJ6WqFH14ansWeL7DGI16NDErTfXF%2B17g%2B40EoAfUGUUe3w2tTBwwAMekNvI3gJuzATFQ1fbsjV5FcScISv5V3aV4TzcFLpc4RPQmHne8eqFugrAyq2UVWP7rZBDdERY%2BGgPqFmr%2Fi6CAepvqOyNQ%2FGHmT2ZYHe1xWHi8p7ZCHrE0nDdVqljH7qNkdYMwYujEka8GzB82Fx9m%2BdWPaWjQhT8cZgStuDoOV4NqqiVsQuoLaaNw9FAlxij0ofh0yrD5sjRRrlg4ihuAoV24vFQFazl07ZzX7EbZeJw3X1mClXeZbHRH45sU23DffwXkJDKG8lapSi5K4IdFQhheQ1I1HLt67DMwG8PqF9OO8lMKiujMoGOqUBbHBWr9LW24bGDUM1HAAwdDp2xCJCTbwDn8vj9cTtBmuaJAJc1N%2FRiKFLwl4VH%2BRIfNIc%2FoVGhH9fXFgwHri21NBj7sGGxII6Jp96p57wqsart6SJJYozhgiy3DljPpVZx30Y%2F7hp5ZdCFWrvxSOJlDy4WTSTXv2NPAe1fRaPpO3phlfjbge9g8XojkuhwF5Ev%2FWJl5RKJ2pNZ6Dbj4V0CXeAfjAG&X-Amz-Signature=d7fedd4bcfd89385079db26664bbe42ea83f11b62c10931c8aa2f4208acd0c39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB5JWWIK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYWlIogU9mSJHdRc7fOZ6Tjfsg4R3Om8%2Fk7np564ZUNgIgY%2FUr7wZK7L4g%2BBCvKdWuxwYosoeXAjMNzM78aArx2zUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOS%2B0xqvOvYQ2WpgircA1qf93ldFNOTLnqnHPxvg11ChzgHiMUa9CmumyLg7OLAFngcN9ZyUpwPY1eWen%2B8CrAh5Okb06UO8o7s5yYbHVc0nAjrQd82qRmnxXIQDhP02UYYeJ2YS4qZIXXUI30EG0g2THfAUp5o2U5kIUqDRSecSVaNgemIUriYNiAL7VTtSAAYszQtTigSPOEJ6LLgvB5gh4iXz0wyadR6NswYB0%2BAGmGlTHFRafpNRHt998I181Pd%2FQ4ItY2rPFuEOhmp%2BFU%2Bt9ThVTaG61FtqE%2BPI%2FJ6WqFH14ansWeL7DGI16NDErTfXF%2B17g%2B40EoAfUGUUe3w2tTBwwAMekNvI3gJuzATFQ1fbsjV5FcScISv5V3aV4TzcFLpc4RPQmHne8eqFugrAyq2UVWP7rZBDdERY%2BGgPqFmr%2Fi6CAepvqOyNQ%2FGHmT2ZYHe1xWHi8p7ZCHrE0nDdVqljH7qNkdYMwYujEka8GzB82Fx9m%2BdWPaWjQhT8cZgStuDoOV4NqqiVsQuoLaaNw9FAlxij0ofh0yrD5sjRRrlg4ihuAoV24vFQFazl07ZzX7EbZeJw3X1mClXeZbHRH45sU23DffwXkJDKG8lapSi5K4IdFQhheQ1I1HLt67DMwG8PqF9OO8lMKiujMoGOqUBbHBWr9LW24bGDUM1HAAwdDp2xCJCTbwDn8vj9cTtBmuaJAJc1N%2FRiKFLwl4VH%2BRIfNIc%2FoVGhH9fXFgwHri21NBj7sGGxII6Jp96p57wqsart6SJJYozhgiy3DljPpVZx30Y%2F7hp5ZdCFWrvxSOJlDy4WTSTXv2NPAe1fRaPpO3phlfjbge9g8XojkuhwF5Ev%2FWJl5RKJ2pNZ6Dbj4V0CXeAfjAG&X-Amz-Signature=ec53c6654500ffff820c028e7d5f9d11a753b616d65c87896eb792bcdf2c92c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

