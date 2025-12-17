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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EZFK7LM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtoLQz%2FhF1HsE%2BIIUtAyO%2BOy8Xgff7eNolMIfK%2FvY%2BWgIgLjzk6UjitadIS6btmNS6B3WkLrry8GDOVEuctDR6Y%2F4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGm59wFgaefQ1qJGhircA3hFnkQRN%2F7wGxktngYcsDF8VTVxezIry9%2BVS3rLSVMh3NAgUrDeBNBP8IhywDS37o4TIdwxweXrSq8zzrlygEfNU2wV48ET0aITjWmRfOh5wqSWEaaaXyuRJOI2uovlMY8lgxycf5u3%2FmERQy9hWj1AoI%2BGFPjib2lvZ1SS5hgz4f7V7d%2FLKcYzHQne93uGmN2LLLDvt%2F7vP2YMemucx9DOHNNjIaYOhhkF2swR3oPEkwLQunCsim0jtyzFWFBH0Q5dqIGB8PjqBRUAOaYF%2B2RW71hVkYXOhL%2F7CxN34U8peEY3Ix9w2VDpFMOWQcu5geHBw5mZ0R4hOQQN3EZJ29%2BG9in0wiTLuf4SRjUCHcgRBTIJ2lyR1Imj6s%2BDHPT9nucEN4EXj9ogkiseE0fTvnS%2Fxok0PWjuIkfNXyQ5%2FQRSUfguabl06DTZivBxlHOY%2B6oYol9OexA2oz3AMGpxsNqummW4D9lWp0MmK%2FIphLDrCois8az8aoJm75jDcqcOivWvsetT0Ph8ERGk3X96w8pM8IdGdTyTMm6K%2BzwRB3lhooQFWLHISeWwfjDkiMeHon2FW0X7if1hMeVnTigc3E7bsjg0at1LgSK3mM%2F0C8uhO8ZT%2BzQbqXoE5RC%2BMKufi8oGOqUBWgMCbL%2Fseclw0hFs9yaF3jLAhk0mtr1s3ngrVTHFiITEOp3wd4gicufl1%2FSSGvD2I8ah0%2FL7h4WwJot45sPieYx0tljCu%2BQpT0PqDNElZILtuG8CEC%2BRGXH9OrZmdt3Gt9B%2BRKjO7YnVQgOXqQn7ytzHNJgMdz%2Bqe%2F4ywReSGUayR3I2sM01bVk19le2X9l4EuApjIfVpXqDBy1zKy9fKuqEG15G&X-Amz-Signature=6ead87d7d5c6f7956ab508043974d48d20d4e3ce6c649ff4cd85ca1f329c8a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EZFK7LM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtoLQz%2FhF1HsE%2BIIUtAyO%2BOy8Xgff7eNolMIfK%2FvY%2BWgIgLjzk6UjitadIS6btmNS6B3WkLrry8GDOVEuctDR6Y%2F4qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGm59wFgaefQ1qJGhircA3hFnkQRN%2F7wGxktngYcsDF8VTVxezIry9%2BVS3rLSVMh3NAgUrDeBNBP8IhywDS37o4TIdwxweXrSq8zzrlygEfNU2wV48ET0aITjWmRfOh5wqSWEaaaXyuRJOI2uovlMY8lgxycf5u3%2FmERQy9hWj1AoI%2BGFPjib2lvZ1SS5hgz4f7V7d%2FLKcYzHQne93uGmN2LLLDvt%2F7vP2YMemucx9DOHNNjIaYOhhkF2swR3oPEkwLQunCsim0jtyzFWFBH0Q5dqIGB8PjqBRUAOaYF%2B2RW71hVkYXOhL%2F7CxN34U8peEY3Ix9w2VDpFMOWQcu5geHBw5mZ0R4hOQQN3EZJ29%2BG9in0wiTLuf4SRjUCHcgRBTIJ2lyR1Imj6s%2BDHPT9nucEN4EXj9ogkiseE0fTvnS%2Fxok0PWjuIkfNXyQ5%2FQRSUfguabl06DTZivBxlHOY%2B6oYol9OexA2oz3AMGpxsNqummW4D9lWp0MmK%2FIphLDrCois8az8aoJm75jDcqcOivWvsetT0Ph8ERGk3X96w8pM8IdGdTyTMm6K%2BzwRB3lhooQFWLHISeWwfjDkiMeHon2FW0X7if1hMeVnTigc3E7bsjg0at1LgSK3mM%2F0C8uhO8ZT%2BzQbqXoE5RC%2BMKufi8oGOqUBWgMCbL%2Fseclw0hFs9yaF3jLAhk0mtr1s3ngrVTHFiITEOp3wd4gicufl1%2FSSGvD2I8ah0%2FL7h4WwJot45sPieYx0tljCu%2BQpT0PqDNElZILtuG8CEC%2BRGXH9OrZmdt3Gt9B%2BRKjO7YnVQgOXqQn7ytzHNJgMdz%2Bqe%2F4ywReSGUayR3I2sM01bVk19le2X9l4EuApjIfVpXqDBy1zKy9fKuqEG15G&X-Amz-Signature=699b5c28567def1339564651eb56523c05730f79eb250cec3a3052d23803b0b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

