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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHMTQIY6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtgh6Ec6kBpDFLh00Z5JpdyeYl7Uge3xthTP3xsKuRlAiEA%2F942RI0h63OBOmZJlkwe%2FU35rUauufBsP1LeZRzhyhYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLfCjNF%2Bj8OBPQEBESrcA7wQYpucEHxl07yC5W5B8OAjCgJoRVomblANL%2Fn1tM2tw3NmGly1t%2Baw8UfVicpFQzJTPu%2F2ybvrb91TdjtLItZtYHJgiP%2FJHMxVoPGhCcw2ZVrDvYFs4SRpLo3Fb05Q0FbNdoOtySoVNppEMx3b7OLGtbkxSWy%2FEVEDJx4JWvMXt11QUrHck4AkzdCJw3%2FWz0dEEib9BJDF2%2BrzYQqJ6%2F9YdW1ZBG38yoPNJDO6vBrvwEnN2vqZqTwHFu3TKlEaDE44YAKHv3w6OTUwc%2Bn2T5Vg8tJ05XLfzz9du1LxgpFBQ7ZCZeQJEzagmCzQOwBACM4YteEh5cecGX76h1GKnlKEhSuNjUiSOfXiSJlQFXKDP1W%2BMT8RLE41K0NmMemJJosAJWKGYbGY3ibHMd1ar0Vjw6E3aIqdzG1A9vRFnehHX3Yu9mC%2FdSU3%2BwY3y2BZHH%2BXzdzCOFf8hkll6mxmW4dK17OPaSp7BR7a%2BhOE%2BAkKAXFe2giD6NeWuPg0TqXQ7cRZBYAc%2BCFHbJ0AJHJjh4tMkUQmzTBX8pH638BRBAhPwlGUUs3v1YU9NCugGqjJrtcvbUe5VkJLrCMGlYQUlrsnj%2BCqLGG9tiGGHPqYDpOVmFHNcgJ6jkIP0vghMPiXiMoGOqUBsh88joX6mi%2ByEMAOfR%2FSpW5tbI8bXGAQo%2BK7QLKZDertVL9kyLWNp3gUTWagkYUytZ7Wd2FFbRJciCIStA3zQuZq%2BLIJt5HFTJGhiVzNaMYlvLCQcogASTchLp9kxGtWhVjDY8kRvTbMbfDxOCf7Xmys3t2EWjc90PIIz8d8N6sHLL58D%2Fga4k%2BLRXSXIarTLYndH8iK2XmgRaf9%2FJ0%2F5e87l7h0&X-Amz-Signature=b436befb88440885cc1454c6685f04fa17121ad043ce1915c988c9e6503feb30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHMTQIY6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEtgh6Ec6kBpDFLh00Z5JpdyeYl7Uge3xthTP3xsKuRlAiEA%2F942RI0h63OBOmZJlkwe%2FU35rUauufBsP1LeZRzhyhYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLfCjNF%2Bj8OBPQEBESrcA7wQYpucEHxl07yC5W5B8OAjCgJoRVomblANL%2Fn1tM2tw3NmGly1t%2Baw8UfVicpFQzJTPu%2F2ybvrb91TdjtLItZtYHJgiP%2FJHMxVoPGhCcw2ZVrDvYFs4SRpLo3Fb05Q0FbNdoOtySoVNppEMx3b7OLGtbkxSWy%2FEVEDJx4JWvMXt11QUrHck4AkzdCJw3%2FWz0dEEib9BJDF2%2BrzYQqJ6%2F9YdW1ZBG38yoPNJDO6vBrvwEnN2vqZqTwHFu3TKlEaDE44YAKHv3w6OTUwc%2Bn2T5Vg8tJ05XLfzz9du1LxgpFBQ7ZCZeQJEzagmCzQOwBACM4YteEh5cecGX76h1GKnlKEhSuNjUiSOfXiSJlQFXKDP1W%2BMT8RLE41K0NmMemJJosAJWKGYbGY3ibHMd1ar0Vjw6E3aIqdzG1A9vRFnehHX3Yu9mC%2FdSU3%2BwY3y2BZHH%2BXzdzCOFf8hkll6mxmW4dK17OPaSp7BR7a%2BhOE%2BAkKAXFe2giD6NeWuPg0TqXQ7cRZBYAc%2BCFHbJ0AJHJjh4tMkUQmzTBX8pH638BRBAhPwlGUUs3v1YU9NCugGqjJrtcvbUe5VkJLrCMGlYQUlrsnj%2BCqLGG9tiGGHPqYDpOVmFHNcgJ6jkIP0vghMPiXiMoGOqUBsh88joX6mi%2ByEMAOfR%2FSpW5tbI8bXGAQo%2BK7QLKZDertVL9kyLWNp3gUTWagkYUytZ7Wd2FFbRJciCIStA3zQuZq%2BLIJt5HFTJGhiVzNaMYlvLCQcogASTchLp9kxGtWhVjDY8kRvTbMbfDxOCf7Xmys3t2EWjc90PIIz8d8N6sHLL58D%2Fga4k%2BLRXSXIarTLYndH8iK2XmgRaf9%2FJ0%2F5e87l7h0&X-Amz-Signature=0de4784302c44ce7e0279be90660d2530415ec87e8bdba5afae458e4ccfb5271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

