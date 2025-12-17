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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF7PBHHU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9DkOteQDxJfJzHeeo9o%2BfsTt6ep%2BUJvRhqXVc%2FvlYjAIhAJDCCJ%2B5TFkHuwXUR2ykbHsI9fGXkmN7%2FfZSoVjg%2FyKcKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSY6ZXKgMdT0DfFvsq3AMhNJ9EcKAb5re9VrFUbtQ3zWCKq0scgV%2FwjDRyMejzUQtLbBhxujGJ1hJlxVIg2Ww82Smt50jm4%2FFK7CJ5YgLNVygrplKBFAtSdl05zcg%2BoFUW4BSIL2vcd27uKEwrJC%2Fd1ZG%2FAs%2BXLu36%2FgHZvcDK2m4Z8kU1OzSUDPruXlCgeMnM16rKiRD9URkL9JVa7aulGYW0gJRcIWbV2SGfsr%2BgYDG9u56xyZhCZU01hRQUWQcSEVolXbCu1fP%2BEKyN6%2BA3vNGrUpgNHYjJFmi1fTPUDZtQoA%2B%2FAc7FL2h87LbAKGiy0JnBgeru3%2FrpIqtvyH4%2FvTsELb%2FoVjRk0YNCltGyZDmPi6aesm3So4EAkNS8SMH5OpNytuChOF9t1S2Tyh9TjXcAfPD1eHGsEYTiJd0Hlkdr7mO4TTu3E7YXC%2FrhvIbZSL7eLyYAbo1gx1MpNiNoiV9XggkWVZR1lA6MgUomus3aFOhBNvO6fsJAeHuVtDudOfjlh7ubxspvfKYOzSEl%2FudbI69eKr2RgopnY8NRCvuLFV6qqtDsTJDqCdJ6HS%2F50gknqi%2FJPiDgXgYvfFlIIH71o7e0E%2B9XbTBIjkMeI75maKKmAiglC6bo2OLkK9Le%2Bw70gTI0Rt%2BD8DCnn4vKBjqkAVSZjsz3wWBLW4otyll9LxXOT8lZlE2OsSB3aZNqPAy4cyEvR65S%2FXYJeULzx78bFy5qwoU6sBVn%2FG5KAiw%2FdCNiRsaaFVJmGwAGyPGozfSp4LF8zor%2FyfPLdkHONaVd4pxebWv%2BRTcAZ6IYP2dWrAAFgFQnTg9Eu%2Bo9jht2meh9tA6rn23sbqcRomUnDCewMbNA18QXA6OAXD2YXRYyJBy2SeTa&X-Amz-Signature=9dd94a9a0ef134ab05497e356eec395f536228681a140ca481dcdc909486811c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF7PBHHU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T192318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9DkOteQDxJfJzHeeo9o%2BfsTt6ep%2BUJvRhqXVc%2FvlYjAIhAJDCCJ%2B5TFkHuwXUR2ykbHsI9fGXkmN7%2FfZSoVjg%2FyKcKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSY6ZXKgMdT0DfFvsq3AMhNJ9EcKAb5re9VrFUbtQ3zWCKq0scgV%2FwjDRyMejzUQtLbBhxujGJ1hJlxVIg2Ww82Smt50jm4%2FFK7CJ5YgLNVygrplKBFAtSdl05zcg%2BoFUW4BSIL2vcd27uKEwrJC%2Fd1ZG%2FAs%2BXLu36%2FgHZvcDK2m4Z8kU1OzSUDPruXlCgeMnM16rKiRD9URkL9JVa7aulGYW0gJRcIWbV2SGfsr%2BgYDG9u56xyZhCZU01hRQUWQcSEVolXbCu1fP%2BEKyN6%2BA3vNGrUpgNHYjJFmi1fTPUDZtQoA%2B%2FAc7FL2h87LbAKGiy0JnBgeru3%2FrpIqtvyH4%2FvTsELb%2FoVjRk0YNCltGyZDmPi6aesm3So4EAkNS8SMH5OpNytuChOF9t1S2Tyh9TjXcAfPD1eHGsEYTiJd0Hlkdr7mO4TTu3E7YXC%2FrhvIbZSL7eLyYAbo1gx1MpNiNoiV9XggkWVZR1lA6MgUomus3aFOhBNvO6fsJAeHuVtDudOfjlh7ubxspvfKYOzSEl%2FudbI69eKr2RgopnY8NRCvuLFV6qqtDsTJDqCdJ6HS%2F50gknqi%2FJPiDgXgYvfFlIIH71o7e0E%2B9XbTBIjkMeI75maKKmAiglC6bo2OLkK9Le%2Bw70gTI0Rt%2BD8DCnn4vKBjqkAVSZjsz3wWBLW4otyll9LxXOT8lZlE2OsSB3aZNqPAy4cyEvR65S%2FXYJeULzx78bFy5qwoU6sBVn%2FG5KAiw%2FdCNiRsaaFVJmGwAGyPGozfSp4LF8zor%2FyfPLdkHONaVd4pxebWv%2BRTcAZ6IYP2dWrAAFgFQnTg9Eu%2Bo9jht2meh9tA6rn23sbqcRomUnDCewMbNA18QXA6OAXD2YXRYyJBy2SeTa&X-Amz-Signature=4244ba56518231f8c6bdfcdce0f36946afcce83a1b53777fd86adfa523546f16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

