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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5CJP34%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlu%2BFPjj%2BB8M2Me92zd3%2BEcuy4KbRZUIu67yJp%2B%2BMK5AiAy%2BvktPKhB4c5MGmCg4RQNWEwr6aba375a721K1GIAuCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMbHTYBZKd4F9r16wxKtwD8xAaICDsmHrlCD5pqaR27H6FFjzfRTRqcYhqQmXnuf%2FGIR5UNp41cDzmdOc%2BkFlBqsSYsTwgoAdoJ6bowpSGx34f3QpIuNJxHyjMKfaj7XhpEhjrBsQdq3hU2Mji40a5dCmkxgH3CjXIFuJaX0U1dCu3%2FWBXawEW0IZ6JPijncYsa2ljDU14SC2%2BcIbOSuG1o5KhxlXa%2FNjYlXzvdKq%2B8va17kdzkQhK0BROfEFhqZjY8ydMRRAZb4FHMrZ9Snc%2FP7HJ6VGHzCwXZsEgKpnAa5inYn9b0LtfNeDYYswQZ9KaztsNPw9dLs646gGI%2F2gebFj4FJvzf2yszgsfCVLnVJnm5f2CQhB19UXdX6sb73Lc7Sldwh%2BPim10iq1Lb6aOcJfIWTEBIJAsfGVOw%2FPGb5jFcsY4AmzJDNpzBPGdNAi1tORAT0MfNSw0J6KHoE8rhULWT280WBYqMWown0YpiN7kjfhUL2XGVldc%2BInj8zt3EQP2a2r2manLn%2BNGgdxOp0yHoolmvZCRyIOBerijoqrlh4hz5DBOzdVq7ZWUYo4ls2qZoodV8NvqKbtaWrqyv0N3%2BcraZeHgH%2BLz1loSNiRndGZ5qQxiTVHm097JrE1TAZomf1SHy%2BJ2Zxcw452JygY6pgHO1vilkx1g3wZ6NVbhOMgfmThp2SMqhHo%2BknRM4s6%2BDSVmKCCwNnAeo4e%2F8dsKdiDjgmWZm5BmN9xHH1%2BN%2BRayAyP6LLYXOu43niSaYFDUnR9vM%2FK06uimjWuY2Sh%2BN9xaMfvz%2B72WQdxgczyR2wf9INAFL8A6uIHurkHE8Ml%2BjtH91JxqvflYyL%2BaxneaVjLzRblmYSB4LJIjNAbT8apqjBwhyyzE&X-Amz-Signature=44b7d9d02f7e09c7704742ca76a517c4c020ddeed2a703494aa10d49633a0077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5CJP34%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlu%2BFPjj%2BB8M2Me92zd3%2BEcuy4KbRZUIu67yJp%2B%2BMK5AiAy%2BvktPKhB4c5MGmCg4RQNWEwr6aba375a721K1GIAuCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMbHTYBZKd4F9r16wxKtwD8xAaICDsmHrlCD5pqaR27H6FFjzfRTRqcYhqQmXnuf%2FGIR5UNp41cDzmdOc%2BkFlBqsSYsTwgoAdoJ6bowpSGx34f3QpIuNJxHyjMKfaj7XhpEhjrBsQdq3hU2Mji40a5dCmkxgH3CjXIFuJaX0U1dCu3%2FWBXawEW0IZ6JPijncYsa2ljDU14SC2%2BcIbOSuG1o5KhxlXa%2FNjYlXzvdKq%2B8va17kdzkQhK0BROfEFhqZjY8ydMRRAZb4FHMrZ9Snc%2FP7HJ6VGHzCwXZsEgKpnAa5inYn9b0LtfNeDYYswQZ9KaztsNPw9dLs646gGI%2F2gebFj4FJvzf2yszgsfCVLnVJnm5f2CQhB19UXdX6sb73Lc7Sldwh%2BPim10iq1Lb6aOcJfIWTEBIJAsfGVOw%2FPGb5jFcsY4AmzJDNpzBPGdNAi1tORAT0MfNSw0J6KHoE8rhULWT280WBYqMWown0YpiN7kjfhUL2XGVldc%2BInj8zt3EQP2a2r2manLn%2BNGgdxOp0yHoolmvZCRyIOBerijoqrlh4hz5DBOzdVq7ZWUYo4ls2qZoodV8NvqKbtaWrqyv0N3%2BcraZeHgH%2BLz1loSNiRndGZ5qQxiTVHm097JrE1TAZomf1SHy%2BJ2Zxcw452JygY6pgHO1vilkx1g3wZ6NVbhOMgfmThp2SMqhHo%2BknRM4s6%2BDSVmKCCwNnAeo4e%2F8dsKdiDjgmWZm5BmN9xHH1%2BN%2BRayAyP6LLYXOu43niSaYFDUnR9vM%2FK06uimjWuY2Sh%2BN9xaMfvz%2B72WQdxgczyR2wf9INAFL8A6uIHurkHE8Ml%2BjtH91JxqvflYyL%2BaxneaVjLzRblmYSB4LJIjNAbT8apqjBwhyyzE&X-Amz-Signature=c41cc427e503b6c02a62d993d4fd29a5518b20eadc97c54d860b0577296c2fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

