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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQU6LJ4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQGYtVA8InX8wgY0XK1nZ52k56B%2BdDAYPVYYOVFLky1AIgaDJLTy90oD3oTEcjAwLzQeH8lsy%2FkwMJgb1bo8Os%2Fbsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMHOOHciwHz9YwuQISrcA7ONNIb3eTupzZ%2BDldkCd4m4BPDGTBBAaJX6F%2BbjVMM77%2BHw1EtJfgCOPsMGJyUnpMLjSLacUw3UnUQqXBPv4HQaVymSqsHpUUrfI9Bmo7OCSGLSqaELwTYNF806rlbEpdHWn70l4ZihKBz2%2BR70kU4mH0IwRZz92Uz9274aWShrXpCHzexpLOqobQwCYxhuhBmBXGjbOaCWkCYOScSRD0JWKEio%2FGQb%2Bfx0u8YSHwM0z0AuC62HxLpmj%2FQFJ2xg6GabJVxif2CYKvQXWNfDKeRyQikGg0ZXyjzw7%2BeMNuPUeU4i%2Bo%2BUGy1BACD%2BI6%2B3giXgRzt3ypP%2F8dko13z1bh44LEVAOtndBg6jd7wJmPu3XmfK3vxD6URY2bK4EO7Jr%2FbDkFeznsoiaUpHkilMErqdZE3eCNElTjwdwJaz%2FurtWQ1c9hgYdVavs6TIYT7ohGZ4Roe%2Ba9o3ob7l%2Ffxenixx7elc8knDGitB0IRiM2KKqFu5AQmPSTm2gvJjzUBXmx6T8e8%2FcY0dROCsPGnuxC4WiFbzjzDCJKosJ1IvzTgRG22BpLBN7aVdebyoOfJgU19BzCiUr0emNeo20hAe4f6diPqnovJJ4xkMvGr18NtF8ityFRTYOLF%2BvqowMJ7RicoGOqUB0vf3ZyInGIFqSrg9PTk8QPJsSW67fURuGw4qXz4IZO5wS%2FCtW7HOilgH2aCJVhyzIBNebnO9fMIVQp%2FEfm%2FNslYHKajoxGCmZ813S2TnIXOrfN9M%2FuHTsrCJxxetrP0H7co5zNd%2FDyKq44R6XKOt2mgwoS3OeAGLLMVrJYFjNeuW3N7BDW0P0ZhqRPoiRRlTR3Boay%2BXeqQvBYo3qlfKjP7fEdL8&X-Amz-Signature=38fd5861ee66c822038378ecbc8e4761c01b72b3322ad1fd07fd9ae2d01258e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AQU6LJ4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T085906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQGYtVA8InX8wgY0XK1nZ52k56B%2BdDAYPVYYOVFLky1AIgaDJLTy90oD3oTEcjAwLzQeH8lsy%2FkwMJgb1bo8Os%2Fbsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDMHOOHciwHz9YwuQISrcA7ONNIb3eTupzZ%2BDldkCd4m4BPDGTBBAaJX6F%2BbjVMM77%2BHw1EtJfgCOPsMGJyUnpMLjSLacUw3UnUQqXBPv4HQaVymSqsHpUUrfI9Bmo7OCSGLSqaELwTYNF806rlbEpdHWn70l4ZihKBz2%2BR70kU4mH0IwRZz92Uz9274aWShrXpCHzexpLOqobQwCYxhuhBmBXGjbOaCWkCYOScSRD0JWKEio%2FGQb%2Bfx0u8YSHwM0z0AuC62HxLpmj%2FQFJ2xg6GabJVxif2CYKvQXWNfDKeRyQikGg0ZXyjzw7%2BeMNuPUeU4i%2Bo%2BUGy1BACD%2BI6%2B3giXgRzt3ypP%2F8dko13z1bh44LEVAOtndBg6jd7wJmPu3XmfK3vxD6URY2bK4EO7Jr%2FbDkFeznsoiaUpHkilMErqdZE3eCNElTjwdwJaz%2FurtWQ1c9hgYdVavs6TIYT7ohGZ4Roe%2Ba9o3ob7l%2Ffxenixx7elc8knDGitB0IRiM2KKqFu5AQmPSTm2gvJjzUBXmx6T8e8%2FcY0dROCsPGnuxC4WiFbzjzDCJKosJ1IvzTgRG22BpLBN7aVdebyoOfJgU19BzCiUr0emNeo20hAe4f6diPqnovJJ4xkMvGr18NtF8ityFRTYOLF%2BvqowMJ7RicoGOqUB0vf3ZyInGIFqSrg9PTk8QPJsSW67fURuGw4qXz4IZO5wS%2FCtW7HOilgH2aCJVhyzIBNebnO9fMIVQp%2FEfm%2FNslYHKajoxGCmZ813S2TnIXOrfN9M%2FuHTsrCJxxetrP0H7co5zNd%2FDyKq44R6XKOt2mgwoS3OeAGLLMVrJYFjNeuW3N7BDW0P0ZhqRPoiRRlTR3Boay%2BXeqQvBYo3qlfKjP7fEdL8&X-Amz-Signature=8ca67964daef1b3f7e7322eafab282d477134e629c01cce00b136183c7fb79d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

