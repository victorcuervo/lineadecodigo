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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2EO3YMU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9cGPYeuAuAZ7qx5tbhQtOhgIcPrRELjzQ5BDGWkxEpAiAkV%2BT4F9aNvmcgpzprbKjBaVDABc9SFXlWmZjT8tHFcCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMgPCgKZyjhyimaLAGKtwDkO7OMMcR2Eps%2F4nqToMaI7Bo5Fpxdlox33AYia0KN1dL278FqqUVJCU9LRrrGKNwYFnOHJ8CGL8pJonIpxSHonu7OK6W0z5GahALUg32m19nopHtwQKbNXR1a%2FnfWVmS1XacMqPC64XJJrbfq8BR87oQDqdKgzzkgUmYvbkSWw3z%2BkotAQ%2BLfDaIId7PnEGjExT6esUxWwz7DmdP7HgyyWx9ZSQkefEFewvULsUw6AxvWQbaIrB%2FkGfOZuVfUI7xvS4IicCEyAWbKyciVfhU4QA8RbdOHs5q54F8KEzCxA%2BTK2gDHdN22BSKyJZ9Dq%2Fqq21cpKZkPZsm%2B9q2PuVXXi8qGaCqBx1m07BSgQGUS2jyOogFONeEb8CEyNdaTD7caAoPH45T%2FN%2BDydP6inG6yaZknq0rm%2BhUbaLuG7lRgRHWkHPxJy1ryvu%2B05NUldzMCrVcVGIPNItPo%2BNkH0xSkPy3Q%2BeIv0eW2nqEx6rX9fA5u2rtvKnSCphX4mb%2FP%2BQbnjm4vc4dnhpvoh8eHOeM2XZ9HhRSVixaYFJkNc%2Fzxi5T%2FFnLPvi%2Fu1KuDgJrmC9T60TYhKAAFZokyoAi2OjB3SN031vVm%2F0cJtT7ILCv8Tps4v%2BlqRAzwXhxrcgwxM6IygY6pgFayuGJKrFtXG6q4Akpaj1QUuQNJ9y8dMg6Sh%2BfxheQqx3%2FgGqANIcwnLnjg6MDWjoiya0mdpHv9GSWNqlPzTF1Ouj0H8RtZy0I0sRGM9ShhBlHR8ydcygHjQrNgmMdeudZ9vB03J4wfEXgTu4Plsigl76fFdJYRmQjRepg2Egm9ij2nwSGzYx7jRlCUUUGhQoHuiJ4rM0046OA7cEazgIlBiuskkhQ&X-Amz-Signature=e733350020e076a398f974d02fe452878a1f884edd37e564d3dbaf2918e2006c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2EO3YMU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9cGPYeuAuAZ7qx5tbhQtOhgIcPrRELjzQ5BDGWkxEpAiAkV%2BT4F9aNvmcgpzprbKjBaVDABc9SFXlWmZjT8tHFcCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMgPCgKZyjhyimaLAGKtwDkO7OMMcR2Eps%2F4nqToMaI7Bo5Fpxdlox33AYia0KN1dL278FqqUVJCU9LRrrGKNwYFnOHJ8CGL8pJonIpxSHonu7OK6W0z5GahALUg32m19nopHtwQKbNXR1a%2FnfWVmS1XacMqPC64XJJrbfq8BR87oQDqdKgzzkgUmYvbkSWw3z%2BkotAQ%2BLfDaIId7PnEGjExT6esUxWwz7DmdP7HgyyWx9ZSQkefEFewvULsUw6AxvWQbaIrB%2FkGfOZuVfUI7xvS4IicCEyAWbKyciVfhU4QA8RbdOHs5q54F8KEzCxA%2BTK2gDHdN22BSKyJZ9Dq%2Fqq21cpKZkPZsm%2B9q2PuVXXi8qGaCqBx1m07BSgQGUS2jyOogFONeEb8CEyNdaTD7caAoPH45T%2FN%2BDydP6inG6yaZknq0rm%2BhUbaLuG7lRgRHWkHPxJy1ryvu%2B05NUldzMCrVcVGIPNItPo%2BNkH0xSkPy3Q%2BeIv0eW2nqEx6rX9fA5u2rtvKnSCphX4mb%2FP%2BQbnjm4vc4dnhpvoh8eHOeM2XZ9HhRSVixaYFJkNc%2Fzxi5T%2FFnLPvi%2Fu1KuDgJrmC9T60TYhKAAFZokyoAi2OjB3SN031vVm%2F0cJtT7ILCv8Tps4v%2BlqRAzwXhxrcgwxM6IygY6pgFayuGJKrFtXG6q4Akpaj1QUuQNJ9y8dMg6Sh%2BfxheQqx3%2FgGqANIcwnLnjg6MDWjoiya0mdpHv9GSWNqlPzTF1Ouj0H8RtZy0I0sRGM9ShhBlHR8ydcygHjQrNgmMdeudZ9vB03J4wfEXgTu4Plsigl76fFdJYRmQjRepg2Egm9ij2nwSGzYx7jRlCUUUGhQoHuiJ4rM0046OA7cEazgIlBiuskkhQ&X-Amz-Signature=f3e65fccff6b4558499091097d53194c9a76564ceff3f32fd2f01482d4c8173f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

