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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636HNNUGH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICe3MvrQJZhRK4oBipFxsMx2bUzr9GoXjpIt%2FjhOdc1DAiEAlsPMNUckpmWgjw1Q9a0FnLWKwEnNY4%2FVKAb2elAsrQUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsTOGrVxrTXDW3bdCrcAysEBV%2F1C2Ta6ifg2PJLt64b0%2B6tIPzra5FNTm%2FXu5a3juCLpE0YxJHVbuXHBQEemtywjxGUBj3YBxlR0PRNzzVqs9rJhFBsmJkCbHEHyZ1nxPtjAnqHTuGYnTofxaeO5zpafZd%2FYqvzOh5vEPbOhfVWEieCOD1lVapkI6c3CZpHcdH5EaxD2wgpZ2ZGefpb9SOcITOU56Jny9XdCHdWwOf6NC0MO5EqmL2%2BS9c3Lh5kJyhTPdYGNKt6%2FCJDXhaFUtJ8u0PUWlltjsHdz%2BV2ddMKJ7Qq95PeItjbqklMjgoGPjs2fMfzJEmDZt0UxL%2BqSrxtULGLPfr9CgN7VhDBgiKyYdTHRefkXYhqKylhiUv5jh%2B563gIJ3BLN5lGeKTd1t0C0MxcYaT5bxLRJisitgtwglZm3w3EKPrwy2JkiuEtxZgbUaMivDaXTUHYxMxp%2BqzfeJnxAe7LOytuB9rGGpuiW832zjGQS%2BLpx5WVD9h6z5GfqNvz7eEUgrLATw7bOfTumhBdAl6GrxfFa76ghtHGLlAIUiFCf2sp%2FwdM1vGniH%2B7f7k6XFrGpBnUpk4OSDmAAW5VulMCIAfMYF%2ByU5EfFhup7HZsPY5Cb85SXXCAbX2kAoeB7gtAO%2BUFMLKAi8oGOqUB1Z15N1CSBtoSW2ZTHy0clj5HOGFHTbUbY3Wpmxsp6N01QYvue2qI4GnnbkyDxTJAj%2FGb0L7LbCOxkc4aIp9YDzBKR6%2BS1JMZfJ0oZP2iQj00pEpF4t%2F1Tp7tB%2BlacMKXIsou5ArcPnpyJTR4tDj4ILcWhGXfAJQ%2FUXywhex5%2FuUOsWfGheFoAQ%2Fc6PV%2FTmKjUnAN9r6oyPg9qwsncXqYBQApqmbB&X-Amz-Signature=185efe4a046596ab92cadba43c994e6f0523ee78af71b32483c45de1d934ba35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636HNNUGH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICe3MvrQJZhRK4oBipFxsMx2bUzr9GoXjpIt%2FjhOdc1DAiEAlsPMNUckpmWgjw1Q9a0FnLWKwEnNY4%2FVKAb2elAsrQUqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOsTOGrVxrTXDW3bdCrcAysEBV%2F1C2Ta6ifg2PJLt64b0%2B6tIPzra5FNTm%2FXu5a3juCLpE0YxJHVbuXHBQEemtywjxGUBj3YBxlR0PRNzzVqs9rJhFBsmJkCbHEHyZ1nxPtjAnqHTuGYnTofxaeO5zpafZd%2FYqvzOh5vEPbOhfVWEieCOD1lVapkI6c3CZpHcdH5EaxD2wgpZ2ZGefpb9SOcITOU56Jny9XdCHdWwOf6NC0MO5EqmL2%2BS9c3Lh5kJyhTPdYGNKt6%2FCJDXhaFUtJ8u0PUWlltjsHdz%2BV2ddMKJ7Qq95PeItjbqklMjgoGPjs2fMfzJEmDZt0UxL%2BqSrxtULGLPfr9CgN7VhDBgiKyYdTHRefkXYhqKylhiUv5jh%2B563gIJ3BLN5lGeKTd1t0C0MxcYaT5bxLRJisitgtwglZm3w3EKPrwy2JkiuEtxZgbUaMivDaXTUHYxMxp%2BqzfeJnxAe7LOytuB9rGGpuiW832zjGQS%2BLpx5WVD9h6z5GfqNvz7eEUgrLATw7bOfTumhBdAl6GrxfFa76ghtHGLlAIUiFCf2sp%2FwdM1vGniH%2B7f7k6XFrGpBnUpk4OSDmAAW5VulMCIAfMYF%2ByU5EfFhup7HZsPY5Cb85SXXCAbX2kAoeB7gtAO%2BUFMLKAi8oGOqUB1Z15N1CSBtoSW2ZTHy0clj5HOGFHTbUbY3Wpmxsp6N01QYvue2qI4GnnbkyDxTJAj%2FGb0L7LbCOxkc4aIp9YDzBKR6%2BS1JMZfJ0oZP2iQj00pEpF4t%2F1Tp7tB%2BlacMKXIsou5ArcPnpyJTR4tDj4ILcWhGXfAJQ%2FUXywhex5%2FuUOsWfGheFoAQ%2Fc6PV%2FTmKjUnAN9r6oyPg9qwsncXqYBQApqmbB&X-Amz-Signature=6a7bf0f72ed0251840b3286dd0cc6a99b4b2945d5c1e7402cf7009e57a0b6e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

