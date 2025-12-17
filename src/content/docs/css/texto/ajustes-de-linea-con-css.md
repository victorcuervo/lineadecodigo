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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNJGHPXL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAwsjQAVo4kiLmA9%2FzC6pPUjgdz%2BDpmbc6tkv9ZyUY2QIgQ%2FCrmhc7jnh4zprogTXeAoGhNJhXi4HRnHDYdmaKsHcq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJR8dvnbdr1j80X0DyrcA7CgBjxLMSEbLfme%2FclH%2FEmgd9%2Flu9lpgTkalX3VdIjXb75zcb6K7ElFchnFnDY7Z7WdH89Fr%2FA%2BHut3tj3iPEDu8Zv03te4GcbiqmZLlbi80AKKsaTdmJojdLBUCC0iAK2onky0f3OYp%2B8s7IyxP%2BmVr0VAEuup2PMWG1XVa7um9l1g11N81Qe7GseV0petJP2EWR9BdHdTgII3mOBq%2FPyAQqVW2prt9CZxcqE%2BLMsFh6fJK39GgWuUHajEQNpFNqlo4SFgwMoYzijsVjKgwjVzRz%2FhwyaRwf2WVADNL02uJVz1eInadEKmcSsq4HoyykBe%2FoQb0cmZjCRqIR9F0A9VbKGSGmEp%2B%2BcVL3bmZ%2F1WhqZ0oFKwmjqyI4PljslqBvBgECZXiYus4%2BkgkSjP8cb5SGYQP9d4KhB83LLrKJLhwBjeuXJkMmyYCQ6HAiOWjBz3OKjmvg1xthXVP00x%2FdxWQiL0bpQuYAt4m7dY7A8tKTsAdmdctvTZeV8L92o9KykWSVEDmi4TQ1FFNY9I99vLU3hDfDA%2FGJCtJ79xvg6VgwKsLe25U4fm9Pdy6qZUiNkjv%2BNOXw3H2G2zUYC9noMjxbdKY3FlFUC4Kh8ZeVRYFu0yAVdx0VgqT5vsMIHRicoGOqUB85Ii5hFn%2BTIaPJfnGvm8hJNQmw%2FwdybKKWjDj9fgqf%2BoUJr5n0Gx97kCw2z3hgkGvTQT2HtqpiAqrPU%2BdzNkUmYBzxDe2U8hwGrFhOdpX%2BEYFYalOMoOqwgOI2pOiJC83YiHsj58Ic42Bgd2tMbxWQz7gD3Oj%2B6TKMrUIPlTzlHEnlPiLbt5te9o2Tmgy7tOtngj1DoNPCfkK8OinyG3vRGLxTvv&X-Amz-Signature=625ba6a8de5f96decb045114821b09efa76ac9e6eab23694ef8a00aeb92000c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNJGHPXL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAwsjQAVo4kiLmA9%2FzC6pPUjgdz%2BDpmbc6tkv9ZyUY2QIgQ%2FCrmhc7jnh4zprogTXeAoGhNJhXi4HRnHDYdmaKsHcq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJR8dvnbdr1j80X0DyrcA7CgBjxLMSEbLfme%2FclH%2FEmgd9%2Flu9lpgTkalX3VdIjXb75zcb6K7ElFchnFnDY7Z7WdH89Fr%2FA%2BHut3tj3iPEDu8Zv03te4GcbiqmZLlbi80AKKsaTdmJojdLBUCC0iAK2onky0f3OYp%2B8s7IyxP%2BmVr0VAEuup2PMWG1XVa7um9l1g11N81Qe7GseV0petJP2EWR9BdHdTgII3mOBq%2FPyAQqVW2prt9CZxcqE%2BLMsFh6fJK39GgWuUHajEQNpFNqlo4SFgwMoYzijsVjKgwjVzRz%2FhwyaRwf2WVADNL02uJVz1eInadEKmcSsq4HoyykBe%2FoQb0cmZjCRqIR9F0A9VbKGSGmEp%2B%2BcVL3bmZ%2F1WhqZ0oFKwmjqyI4PljslqBvBgECZXiYus4%2BkgkSjP8cb5SGYQP9d4KhB83LLrKJLhwBjeuXJkMmyYCQ6HAiOWjBz3OKjmvg1xthXVP00x%2FdxWQiL0bpQuYAt4m7dY7A8tKTsAdmdctvTZeV8L92o9KykWSVEDmi4TQ1FFNY9I99vLU3hDfDA%2FGJCtJ79xvg6VgwKsLe25U4fm9Pdy6qZUiNkjv%2BNOXw3H2G2zUYC9noMjxbdKY3FlFUC4Kh8ZeVRYFu0yAVdx0VgqT5vsMIHRicoGOqUB85Ii5hFn%2BTIaPJfnGvm8hJNQmw%2FwdybKKWjDj9fgqf%2BoUJr5n0Gx97kCw2z3hgkGvTQT2HtqpiAqrPU%2BdzNkUmYBzxDe2U8hwGrFhOdpX%2BEYFYalOMoOqwgOI2pOiJC83YiHsj58Ic42Bgd2tMbxWQz7gD3Oj%2B6TKMrUIPlTzlHEnlPiLbt5te9o2Tmgy7tOtngj1DoNPCfkK8OinyG3vRGLxTvv&X-Amz-Signature=bdd3d65bdad86b277c44fbf94889bc0aa0cc4e4a113e8c4b9f2768ea372e5d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

