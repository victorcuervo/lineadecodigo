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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GXVTIH7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtw88%2F03NL0ftbhTIg4NQnPUk2sEdBFU8jmg%2FZUA49uAIgE0ZgK7pViERXJUL3W9aKWnzWh8RU9C3bpCZUX60BRfYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDP5kHmghJjFG4tbNXCrcA65rdkzZlCMyRFBJkc1hX1qX2%2FW27uhlFpAOeCTFUqbLYOPjoEdDTkSWwpYR9YzB3E11t1rgwdFREUOLUXWf0kIjJUOlUyQrhQOMzY7hojtGfMByA20ZIKlwdNHFt2NIPhnqL5vwwhP24fwxLXX4IyMKXof61B0H7%2BBUlSzGy6k8IlRAo8%2Bpda4mqb853idyjO%2Bmenlk43grBYe4i%2Bg%2Bc1r%2B2Y42Q0Rl0gN8JlNJ8f3QMptQniv66HWFlnydxOByfrdeOWSsOUzC1OQwaGH5%2Ffr5MoUVaNd7Ywod9I7KSox3KFEz6FxPqny6rskP9%2FycY0n%2BD1D1WwcePQpDD60Qb34prt3PWu%2F2AaqFvmw18XU2SEYYgijqZ5GBGZoI14Ue9vDrrg%2BTj%2BaxL%2FOQNnh2Fefh%2Fy0z5UCyiPniAs%2FFTtyroPFylnqKYGzL8euTnl%2Fnc0CMC1KsZp8%2B9cV%2FxvNBWyyVsY%2BCVGrK18A6J8AA77gTCJF31xa81vPco9IrHQkIyhuqmXLm3vdRNEAWFUZJkFUmEngmt9ru4e6zbHRU6%2FPcZsG05AIrs95GZLDWlEX%2FuAmvQFdmuGe19GUDe5pe5yPtL6nTdfhf4Q7t2wO6t5AgsgpKOsx3GD0kr3o3MLiXiMoGOqUBFUHpVWKLzsNvHgQlXHgT7C43HBohDkBbgHr3eImapjy2PaTGjzkd3stLI5tJ7SyXIJwxFiyiBwsFcYfKQ3fHnPq%2FhcHA4eoN4jOnDFQ79M5iuhhm9o%2BpBl0kdD2R4J71sXX12QmeDo0RcDQBkkO7ED1Eq5fO3Fs2E9nXssqG5so%2FAT8M2i%2BEFH%2FvRv5c6DD1W%2FWPQEL0P3lwrhI2%2FvN1jTS8q1%2BX&X-Amz-Signature=31f15651c07fe3836d79a8838f2dc741fddf48a3dc486de6d598c78a9c32d9f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GXVTIH7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtw88%2F03NL0ftbhTIg4NQnPUk2sEdBFU8jmg%2FZUA49uAIgE0ZgK7pViERXJUL3W9aKWnzWh8RU9C3bpCZUX60BRfYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDP5kHmghJjFG4tbNXCrcA65rdkzZlCMyRFBJkc1hX1qX2%2FW27uhlFpAOeCTFUqbLYOPjoEdDTkSWwpYR9YzB3E11t1rgwdFREUOLUXWf0kIjJUOlUyQrhQOMzY7hojtGfMByA20ZIKlwdNHFt2NIPhnqL5vwwhP24fwxLXX4IyMKXof61B0H7%2BBUlSzGy6k8IlRAo8%2Bpda4mqb853idyjO%2Bmenlk43grBYe4i%2Bg%2Bc1r%2B2Y42Q0Rl0gN8JlNJ8f3QMptQniv66HWFlnydxOByfrdeOWSsOUzC1OQwaGH5%2Ffr5MoUVaNd7Ywod9I7KSox3KFEz6FxPqny6rskP9%2FycY0n%2BD1D1WwcePQpDD60Qb34prt3PWu%2F2AaqFvmw18XU2SEYYgijqZ5GBGZoI14Ue9vDrrg%2BTj%2BaxL%2FOQNnh2Fefh%2Fy0z5UCyiPniAs%2FFTtyroPFylnqKYGzL8euTnl%2Fnc0CMC1KsZp8%2B9cV%2FxvNBWyyVsY%2BCVGrK18A6J8AA77gTCJF31xa81vPco9IrHQkIyhuqmXLm3vdRNEAWFUZJkFUmEngmt9ru4e6zbHRU6%2FPcZsG05AIrs95GZLDWlEX%2FuAmvQFdmuGe19GUDe5pe5yPtL6nTdfhf4Q7t2wO6t5AgsgpKOsx3GD0kr3o3MLiXiMoGOqUBFUHpVWKLzsNvHgQlXHgT7C43HBohDkBbgHr3eImapjy2PaTGjzkd3stLI5tJ7SyXIJwxFiyiBwsFcYfKQ3fHnPq%2FhcHA4eoN4jOnDFQ79M5iuhhm9o%2BpBl0kdD2R4J71sXX12QmeDo0RcDQBkkO7ED1Eq5fO3Fs2E9nXssqG5so%2FAT8M2i%2BEFH%2FvRv5c6DD1W%2FWPQEL0P3lwrhI2%2FvN1jTS8q1%2BX&X-Amz-Signature=f97b9c65aa7e13ba15bd28dea066364674084eef32771d2a335e84a52d0b0999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

