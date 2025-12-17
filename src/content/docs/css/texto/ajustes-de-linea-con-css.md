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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IQ3ZDX5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ4022w0FqJ6CV6FDFUwO%2BLYwK6JBC5gsupegZXiX%2BQgIgWd9zr6446T5MBSYOmlIHkNPhGmTCIt%2FpcQ0hTq6bXqYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBUo8Qxh2OE1Ot51CircA1u9mbTwdEleycC0tVjj%2BBYxKtsFqNrkvqhaGN5DOKsmGHsOB4%2BQXDBwi0gxvKWy2S61S2yIn67LUldOZ%2BFlwiM8fLfeJEC2C0nuX9fmk3q%2FgdvfDBFJPYkE91YjbsioKAeeQjoBVfOpf%2FzuABUqKMgYd5%2FfQ7KhoAtTs9KRdhKR6wPZOGv5wBy9HjocenJV2vMkODf3n30leEsdYhsp8UZV4uqYvRaxtp%2BL86XS5WfbCclcsc0u1CYsl3lDw%2FNrgRPbHBl3IfBWby7MzRYYlYQMPd8rMzPQUeIYRvKgQhNMp77VrDpMn0cvK3mzbHwvTYjct4fEtR7046CXWo0vkBGXQipCNMxY8esCQZt5sgzOi7ANZ5Yp5xv3Qr5BHDggVdT2vhJGFnvnx0hv9iETb57aV8iTvSotB6k4DSK1ngyVh%2FqLMVOhpP9umo0qncfnCplvzB2zUg3RDG8AkFNXGL25lxh02HTJrktimUPzdEv2GmKlDfeAZSgXGKWzpG0s8JQjEstnG1oejSc6RPBkhjMxlhoDbuXyVdLuuMa3Jli6tcUIQuUZ0xXprqz5LGHxEqk%2FGTbU0sxPs8KLol%2FMoOajh7CZhU3bJ%2F9ma%2BkXBgqShRVmuENwTC0WwW7WMNuCicoGOqUBm8JzCRMHqvIzLenobpZfExCTa3W8JAykLtBD%2Fvzv0OKTcr7rn%2BsXlBUExdJd3T3cW7M3bYi7ZcElGViDB4CYkK0Qf2ofBflZSXZ0j6BvlTx%2BuR77tYJXBujzcJl9P05Q2549wfG76xYhL4K%2FS8W7bJ718cm8RIg8DUId7UC0MBXb6BJ1hwv1xQmc9y5a%2FToLXdCXjfGBdxOPT7UH05lCNHrR3M9q&X-Amz-Signature=f8102f156abb9ec0da53a3938a4e28ef5b74e0eb84dd8df7cd2ab08e48e82fd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IQ3ZDX5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ4022w0FqJ6CV6FDFUwO%2BLYwK6JBC5gsupegZXiX%2BQgIgWd9zr6446T5MBSYOmlIHkNPhGmTCIt%2FpcQ0hTq6bXqYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBUo8Qxh2OE1Ot51CircA1u9mbTwdEleycC0tVjj%2BBYxKtsFqNrkvqhaGN5DOKsmGHsOB4%2BQXDBwi0gxvKWy2S61S2yIn67LUldOZ%2BFlwiM8fLfeJEC2C0nuX9fmk3q%2FgdvfDBFJPYkE91YjbsioKAeeQjoBVfOpf%2FzuABUqKMgYd5%2FfQ7KhoAtTs9KRdhKR6wPZOGv5wBy9HjocenJV2vMkODf3n30leEsdYhsp8UZV4uqYvRaxtp%2BL86XS5WfbCclcsc0u1CYsl3lDw%2FNrgRPbHBl3IfBWby7MzRYYlYQMPd8rMzPQUeIYRvKgQhNMp77VrDpMn0cvK3mzbHwvTYjct4fEtR7046CXWo0vkBGXQipCNMxY8esCQZt5sgzOi7ANZ5Yp5xv3Qr5BHDggVdT2vhJGFnvnx0hv9iETb57aV8iTvSotB6k4DSK1ngyVh%2FqLMVOhpP9umo0qncfnCplvzB2zUg3RDG8AkFNXGL25lxh02HTJrktimUPzdEv2GmKlDfeAZSgXGKWzpG0s8JQjEstnG1oejSc6RPBkhjMxlhoDbuXyVdLuuMa3Jli6tcUIQuUZ0xXprqz5LGHxEqk%2FGTbU0sxPs8KLol%2FMoOajh7CZhU3bJ%2F9ma%2BkXBgqShRVmuENwTC0WwW7WMNuCicoGOqUBm8JzCRMHqvIzLenobpZfExCTa3W8JAykLtBD%2Fvzv0OKTcr7rn%2BsXlBUExdJd3T3cW7M3bYi7ZcElGViDB4CYkK0Qf2ofBflZSXZ0j6BvlTx%2BuR77tYJXBujzcJl9P05Q2549wfG76xYhL4K%2FS8W7bJ718cm8RIg8DUId7UC0MBXb6BJ1hwv1xQmc9y5a%2FToLXdCXjfGBdxOPT7UH05lCNHrR3M9q&X-Amz-Signature=2db9c0e0fe4afab93fc57736a854a269da0ab2511eadc3a0bd98f05d119f6a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

