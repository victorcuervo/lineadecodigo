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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQIPTZD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUtqjkcDK1TLvtEeO172bc27jds3xlVjtp4LtKPd9qxAiEArZyf7KBhFFmX4GRz7XYm9Qh%2F96zoiO5V2kLOeItyM4Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLBDUluGyk0ui6sJoyrcA4NNm4d7b5VezeSl5dwt%2FcNjSiYHVZlifzH8tGq4zhykUyDi0ItyFDh7NI%2F8L7lytS%2Bc3Iv2zSQ7pfJYepeqXHAPRf1cB06S5mRmMKjxrKbghPIqMAKDUTgDMi0hLqbgnnQsUOh4tPvza9Epq38IpRYi3tEellKHTTO3rIvYWvg%2FFhw2dZ1re9s42KR0Qta1EjAGkGURtLLpDG24mxqgDRiXl5NF3bPH4%2FEiFkwfiMbNJ2j%2F8S%2BQg9NsFmrYnnqWvJvUxYruV4KkyGAtTh3UfL8jKmXEdN1X%2BoZmiH8O88KJoK%2B7OJ2Ktotm5yR%2BNsGwZmuCtvxUKlGzbNlVNWo3G5qMNN8hPDABax5I7mx5JfdoxlkwCeBUUQm%2F9TpXarTRVSMefzaAgKgQ4R%2BaqrihL3YnUaiUQf%2BRB9VuIJ9%2BgoNgv4SxKXeUwEiaviIe4x5PajDk1SQaulyaaw%2FGzYKgw5Fnw5Q5Hk8sOIRMo7uE4G7Amp31hqVlFAZa70bIuIwEENUWEolaWwy2Qvi%2B8eIPrmAs0M%2F1ZQ4m%2B151wjdVaKMKTfAz%2FuxUcctxfz6Zptk0zr9ozTqOXCiuLozsiqDdrlKTRlZPZQ04uZGk5dis34S4JQLwJBUA9OY0ki0WMIffh8oGOqUBBbznBf%2BV8fgk7R5uzs7Aq9DARZkmrldBjxd4sngw%2BkI%2BIBAlmhA8wIuOkf2gHVuZKe6c4tidVEKdj1t64MfhnIJE%2FvWmPKt24vkQ8qKwupy9SDm0tnPulCO%2FZg98YG5iZxEh4C56BWIFOMu2CINNQzgz%2Bca5v4cBCF%2FqScDcHT%2BV7rbyeOd7nfgcDjqO9qo7XNZLtjzj7E9mUW45O8yaaTqy0vLw&X-Amz-Signature=8e37f5182463e7e4699c912e89451cb985d70a8f81e8a37773ec37506b2773de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQIPTZD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T004745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHUtqjkcDK1TLvtEeO172bc27jds3xlVjtp4LtKPd9qxAiEArZyf7KBhFFmX4GRz7XYm9Qh%2F96zoiO5V2kLOeItyM4Aq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLBDUluGyk0ui6sJoyrcA4NNm4d7b5VezeSl5dwt%2FcNjSiYHVZlifzH8tGq4zhykUyDi0ItyFDh7NI%2F8L7lytS%2Bc3Iv2zSQ7pfJYepeqXHAPRf1cB06S5mRmMKjxrKbghPIqMAKDUTgDMi0hLqbgnnQsUOh4tPvza9Epq38IpRYi3tEellKHTTO3rIvYWvg%2FFhw2dZ1re9s42KR0Qta1EjAGkGURtLLpDG24mxqgDRiXl5NF3bPH4%2FEiFkwfiMbNJ2j%2F8S%2BQg9NsFmrYnnqWvJvUxYruV4KkyGAtTh3UfL8jKmXEdN1X%2BoZmiH8O88KJoK%2B7OJ2Ktotm5yR%2BNsGwZmuCtvxUKlGzbNlVNWo3G5qMNN8hPDABax5I7mx5JfdoxlkwCeBUUQm%2F9TpXarTRVSMefzaAgKgQ4R%2BaqrihL3YnUaiUQf%2BRB9VuIJ9%2BgoNgv4SxKXeUwEiaviIe4x5PajDk1SQaulyaaw%2FGzYKgw5Fnw5Q5Hk8sOIRMo7uE4G7Amp31hqVlFAZa70bIuIwEENUWEolaWwy2Qvi%2B8eIPrmAs0M%2F1ZQ4m%2B151wjdVaKMKTfAz%2FuxUcctxfz6Zptk0zr9ozTqOXCiuLozsiqDdrlKTRlZPZQ04uZGk5dis34S4JQLwJBUA9OY0ki0WMIffh8oGOqUBBbznBf%2BV8fgk7R5uzs7Aq9DARZkmrldBjxd4sngw%2BkI%2BIBAlmhA8wIuOkf2gHVuZKe6c4tidVEKdj1t64MfhnIJE%2FvWmPKt24vkQ8qKwupy9SDm0tnPulCO%2FZg98YG5iZxEh4C56BWIFOMu2CINNQzgz%2Bca5v4cBCF%2FqScDcHT%2BV7rbyeOd7nfgcDjqO9qo7XNZLtjzj7E9mUW45O8yaaTqy0vLw&X-Amz-Signature=0b0a7d3d2964ced5e898c281a00a9c250d5ef78ce43f8ddccd789f7a3158f316&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

