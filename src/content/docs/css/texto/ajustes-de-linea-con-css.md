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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIVHFLFC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXLhk3f1TTgfIjGAOE%2BWk0fUsBGv8csbizACyNOE%2BAtwIgRyvHnCi%2FDJSwxWZm9IfUw2SMUtyQuAkXqFEEVQWtSr0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKXMOJbmzh25efjd6CrcA1MNeGZk8xjeXXGLgLxD9Upb2IChynItFHIrV06lVY2G%2FOu72h0xG8rTPQhVtK6YXZdDVB5dIRqbgnFXX7AiH7PvfXafG7aUN%2B1OEANik5I7plI%2FCyxD%2F8NJwrKPDX1%2FrFM4K5SvZV8JbfoqDd42b%2FdKG%2BzbCUWvi26IVg47PO0Xxknh%2FeSh%2BcLPlruiAC4%2BWO2OG%2B2jM9jXxTme1knihckHRoSzdICU%2FRJE6roiy2N6FrjMhHoTZ%2BLm3B%2FMMKN9qmWdei6QjXuc3lMJGL3%2FxhtFUXnawAW%2FjYuNAPMHKycxZz0Sj%2B0f5Fne03aOlBUn%2FA07uJ6%2FKWOjPkUIGvt%2BqgR1mECeUoE4C%2Fh4T4TdzusgS8OJ5foQ3%2BD2CmoWI2VtACYwGVtMeITMXDJ9etSyOkDuYMXwvP2b%2FwtCbWq14EJh6R%2BlFvD9PQl%2FNjjx1Ne0RoWJ0z53WIbAnp%2FeZp%2F5VLql5mj7vUeUsi8%2BMj5C5x0khqX92HDh5CVY3NNPIpjOkotX3w%2F0LNHe%2FP7e0qu4D0ObK95ACs0%2F0E1TQLtJrwAuvtbbyRX46ea25DMFuncns0T1JkvBPvL9AtXuQsxdZFCERgGlj821ACPEewZROiWPh8qk0kBCT0ccE%2BqSMO7eh8oGOqUBHmOvW26xza071IfoU6Om2VzHMnOO2iw5aYd8YXyuAMKCTm1qvFZcNfzuYJ1d5LcScu8bLOcv16aGIpA5ApkpINeqFHTsALEz2O7tDvVdlUv1ylDvNCMTqmYhzqZbNd8z1DfZ09cdJhQiTX5aNi7zhgvir4U3b8lbNrFLTLXYiTN6uB470yq8ZtCyV1kgyJ0atNFeYeZ60pMcRNQUnSSz1WSIS6Ii&X-Amz-Signature=59accbea0459ea7e55325193ed6b7bd53a65f3f87b5cb195a077f5a8301216c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIVHFLFC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXLhk3f1TTgfIjGAOE%2BWk0fUsBGv8csbizACyNOE%2BAtwIgRyvHnCi%2FDJSwxWZm9IfUw2SMUtyQuAkXqFEEVQWtSr0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKXMOJbmzh25efjd6CrcA1MNeGZk8xjeXXGLgLxD9Upb2IChynItFHIrV06lVY2G%2FOu72h0xG8rTPQhVtK6YXZdDVB5dIRqbgnFXX7AiH7PvfXafG7aUN%2B1OEANik5I7plI%2FCyxD%2F8NJwrKPDX1%2FrFM4K5SvZV8JbfoqDd42b%2FdKG%2BzbCUWvi26IVg47PO0Xxknh%2FeSh%2BcLPlruiAC4%2BWO2OG%2B2jM9jXxTme1knihckHRoSzdICU%2FRJE6roiy2N6FrjMhHoTZ%2BLm3B%2FMMKN9qmWdei6QjXuc3lMJGL3%2FxhtFUXnawAW%2FjYuNAPMHKycxZz0Sj%2B0f5Fne03aOlBUn%2FA07uJ6%2FKWOjPkUIGvt%2BqgR1mECeUoE4C%2Fh4T4TdzusgS8OJ5foQ3%2BD2CmoWI2VtACYwGVtMeITMXDJ9etSyOkDuYMXwvP2b%2FwtCbWq14EJh6R%2BlFvD9PQl%2FNjjx1Ne0RoWJ0z53WIbAnp%2FeZp%2F5VLql5mj7vUeUsi8%2BMj5C5x0khqX92HDh5CVY3NNPIpjOkotX3w%2F0LNHe%2FP7e0qu4D0ObK95ACs0%2F0E1TQLtJrwAuvtbbyRX46ea25DMFuncns0T1JkvBPvL9AtXuQsxdZFCERgGlj821ACPEewZROiWPh8qk0kBCT0ccE%2BqSMO7eh8oGOqUBHmOvW26xza071IfoU6Om2VzHMnOO2iw5aYd8YXyuAMKCTm1qvFZcNfzuYJ1d5LcScu8bLOcv16aGIpA5ApkpINeqFHTsALEz2O7tDvVdlUv1ylDvNCMTqmYhzqZbNd8z1DfZ09cdJhQiTX5aNi7zhgvir4U3b8lbNrFLTLXYiTN6uB470yq8ZtCyV1kgyJ0atNFeYeZ60pMcRNQUnSSz1WSIS6Ii&X-Amz-Signature=eaa8cba9324e8730d27bebc9eb5a83b7abce80d0da69707945f95558be3c445f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

