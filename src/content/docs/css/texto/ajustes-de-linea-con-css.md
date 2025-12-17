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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYR3BQWE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQ%2F%2B1XvWgxE0ENDYtW2cfpFjw4%2BiGUzQmaJ6x7uMrXEAiEAumKR0Z71jkCzScR6lkIfXozR34jfnVkDQnqQYJYjdfkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKdx8aWIqb8xOe2sryrcA6MdEYbsMsM8thGV4ItcwzjZju6LcTtwyInk7y9E%2FgV4OQGGdkDyu0KxiQwN5Tg2SKh6%2FBQGIw%2BfYCw7dhIG0upiWu6LPZv61Bzgody%2BY9srIooQP%2Bg%2FTlk4VpCaHwCt9d1rjJ9dnZ5HlIGuI4bC3X1eag5yALgV0y57S6oK8qYzL0elFWaAxuTpKDBT9XnRNquQXZi%2Fop5XDv7BzQ35iVFAltq8CArKSJmKOnCd53K1dU5ExHG%2BT%2FvgbzHBHjzWVzZA5Kdtpis5KjGDCYtjkUKAn0u6YsxZ1LPBg9AQt1c30V3D%2BZbWICZLQfa7IyG7hanP1PadMyE7ziTPYYFA5CYRlw8I9%2FAD%2FdcP0DHbQwiA%2FlMaIYoYKtbe5088ZIPgzZTQZ9hjsOzvRfOJnC4dCdrir7sgeyB7xsbiMsIcSktC%2FgoKe5yhelHkttU6GnzZZ1BoVAXQsr6F1nSuQSSyukmmDRlh6rE7%2BnVNCuJS%2FqyMzcdrkPup4hqRkMsjkfLFUxwx2g2z34D%2F1BasLG%2FMh8nsA6M4%2Fe0BrYaRr%2Ft4cgUuxRvs%2BNYz2RUzplG3X5Lu9E9d1wpeDtJ5F%2BLIcc3x4388nU%2B2fuTK2QmWytWmZVForQaoalutWCRqT1CaMNGViMoGOqUB0nyRUjkoiDO0bcIA7Ez5jQ%2BqwnmnkpLso0wWQhYM%2FfXy79wZ0drCfNpYNz1rCy690rgGKAw85SMIVtH0Kt4q84IBRQAacEIa3iAeYjk6%2BL5s9xDBWwvRGgddStQEE%2FP%2FcQJkfj6ptiU8RIlk2s4M3hmIcmYS%2FGc3prrXt%2BJP6tck2GLofezQc6wYDLujDc9YM5do2tkvkKawyJbgnjskCLocmeHH&X-Amz-Signature=d997716c17c70a1ecd1278bb5291647600bcd367a097c6756c23751c49c15e9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYR3BQWE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQ%2F%2B1XvWgxE0ENDYtW2cfpFjw4%2BiGUzQmaJ6x7uMrXEAiEAumKR0Z71jkCzScR6lkIfXozR34jfnVkDQnqQYJYjdfkq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKdx8aWIqb8xOe2sryrcA6MdEYbsMsM8thGV4ItcwzjZju6LcTtwyInk7y9E%2FgV4OQGGdkDyu0KxiQwN5Tg2SKh6%2FBQGIw%2BfYCw7dhIG0upiWu6LPZv61Bzgody%2BY9srIooQP%2Bg%2FTlk4VpCaHwCt9d1rjJ9dnZ5HlIGuI4bC3X1eag5yALgV0y57S6oK8qYzL0elFWaAxuTpKDBT9XnRNquQXZi%2Fop5XDv7BzQ35iVFAltq8CArKSJmKOnCd53K1dU5ExHG%2BT%2FvgbzHBHjzWVzZA5Kdtpis5KjGDCYtjkUKAn0u6YsxZ1LPBg9AQt1c30V3D%2BZbWICZLQfa7IyG7hanP1PadMyE7ziTPYYFA5CYRlw8I9%2FAD%2FdcP0DHbQwiA%2FlMaIYoYKtbe5088ZIPgzZTQZ9hjsOzvRfOJnC4dCdrir7sgeyB7xsbiMsIcSktC%2FgoKe5yhelHkttU6GnzZZ1BoVAXQsr6F1nSuQSSyukmmDRlh6rE7%2BnVNCuJS%2FqyMzcdrkPup4hqRkMsjkfLFUxwx2g2z34D%2F1BasLG%2FMh8nsA6M4%2Fe0BrYaRr%2Ft4cgUuxRvs%2BNYz2RUzplG3X5Lu9E9d1wpeDtJ5F%2BLIcc3x4388nU%2B2fuTK2QmWytWmZVForQaoalutWCRqT1CaMNGViMoGOqUB0nyRUjkoiDO0bcIA7Ez5jQ%2BqwnmnkpLso0wWQhYM%2FfXy79wZ0drCfNpYNz1rCy690rgGKAw85SMIVtH0Kt4q84IBRQAacEIa3iAeYjk6%2BL5s9xDBWwvRGgddStQEE%2FP%2FcQJkfj6ptiU8RIlk2s4M3hmIcmYS%2FGc3prrXt%2BJP6tck2GLofezQc6wYDLujDc9YM5do2tkvkKawyJbgnjskCLocmeHH&X-Amz-Signature=03a656cdf74aa6568e2caecd72b75ec47ca9b2d3f687ff77eef41b1ea4ab000e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

