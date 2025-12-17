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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FAGXE6X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdyVvOH4vm9MJB0RExIwMU6HUG6LFsD%2BQX%2FaykTIL20AiEA8IxKhzO%2BrsBNyXkBD6yXW4%2FZSQjiHlNo%2FmhiG05Nx5wq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPguhm8X437AVp9eIyrcA3vdFbt622hXPtiu%2BpmW6Tobvc7VUNo4MNDEiL%2B%2F0y4ZWHhdQUR%2FWqzEX%2FKXpmZGvHF%2FcxGouZNR7dVQY6O8kXplqZD8Q6eNTbp0nA2aTUAMoTA2iez3oQIDb6idJ7wIQZHgzQNu5t%2FB487dTu2ipGJwb8BGVXpYnPxuUUJQXKRoiPqLmR0MLmb6ljPTL%2BH3iMlrMd3Tzmskn5Py%2Bu3B6qXXXT3%2FhtoBv9abg59u1xGx%2F2%2B%2FFzoaMDy8%2B1uGnMB7dBLhlhoN9AAbfci95GWWK2W7C7SXmt3FQjUTWp6gFKRllLe6Q4OrEydwEbA8go29DuN1pMjyEmyHNVua2wq8YYvTCct%2B0Oc%2F6P8mYCGVx5OAp6tPfBtUowsH2yEfTpf%2FRuwmn71IHWTQVcNHMBtH3ZLHA9ypbM2w6O8IeMwNDYsxQq0Ka35SIyo7i8ZJoYObtXSa9AEzXSppBrptlsjIu9icdVKZpdMGUARB1P4PAFSkIGyiT%2BRm%2FxcES7IvbqQpFNvtVqZzXat1sQMYsTU6mT5FDbUZRslt%2Btl3s%2BS5N1AhCOMN4k5NkwEzwW%2Fh2O27UlZ1HxGFIAPOV75mDiLD9r4nh2jtZRMuf%2BZV0vrw8UuLouHNjfCGU2XKbSyIMJaCicoGOqUBmVECxkrP3SZDwFnZI0eo2ajPgbh1Ozil1wWveit1iEapxumXueVdxDqgk28qEjIIJGLuLPbPMvjjqtnoD9LiidldPOUjIs%2F3aFFdU00yK%2FrfSy6spHePT1yoqfA22vLZccS9fGC4ynUMY5E45qVHRN5UEUluAdHFVyOUvlU1FmRzZW%2Bbf2%2FfRbSwhLthpNDzQ8J26imnr1np664W%2Bm99izr153tz&X-Amz-Signature=4a4ff6869b7e20df687ae72fe41211c9617f824240faaec1e493e419c33da651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FAGXE6X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdyVvOH4vm9MJB0RExIwMU6HUG6LFsD%2BQX%2FaykTIL20AiEA8IxKhzO%2BrsBNyXkBD6yXW4%2FZSQjiHlNo%2FmhiG05Nx5wq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPguhm8X437AVp9eIyrcA3vdFbt622hXPtiu%2BpmW6Tobvc7VUNo4MNDEiL%2B%2F0y4ZWHhdQUR%2FWqzEX%2FKXpmZGvHF%2FcxGouZNR7dVQY6O8kXplqZD8Q6eNTbp0nA2aTUAMoTA2iez3oQIDb6idJ7wIQZHgzQNu5t%2FB487dTu2ipGJwb8BGVXpYnPxuUUJQXKRoiPqLmR0MLmb6ljPTL%2BH3iMlrMd3Tzmskn5Py%2Bu3B6qXXXT3%2FhtoBv9abg59u1xGx%2F2%2B%2FFzoaMDy8%2B1uGnMB7dBLhlhoN9AAbfci95GWWK2W7C7SXmt3FQjUTWp6gFKRllLe6Q4OrEydwEbA8go29DuN1pMjyEmyHNVua2wq8YYvTCct%2B0Oc%2F6P8mYCGVx5OAp6tPfBtUowsH2yEfTpf%2FRuwmn71IHWTQVcNHMBtH3ZLHA9ypbM2w6O8IeMwNDYsxQq0Ka35SIyo7i8ZJoYObtXSa9AEzXSppBrptlsjIu9icdVKZpdMGUARB1P4PAFSkIGyiT%2BRm%2FxcES7IvbqQpFNvtVqZzXat1sQMYsTU6mT5FDbUZRslt%2Btl3s%2BS5N1AhCOMN4k5NkwEzwW%2Fh2O27UlZ1HxGFIAPOV75mDiLD9r4nh2jtZRMuf%2BZV0vrw8UuLouHNjfCGU2XKbSyIMJaCicoGOqUBmVECxkrP3SZDwFnZI0eo2ajPgbh1Ozil1wWveit1iEapxumXueVdxDqgk28qEjIIJGLuLPbPMvjjqtnoD9LiidldPOUjIs%2F3aFFdU00yK%2FrfSy6spHePT1yoqfA22vLZccS9fGC4ynUMY5E45qVHRN5UEUluAdHFVyOUvlU1FmRzZW%2Bbf2%2FfRbSwhLthpNDzQ8J26imnr1np664W%2Bm99izr153tz&X-Amz-Signature=a0592b65ae2f716c51c3ddfc6cf8cd5f10fd58e58a07ca77ad028f7cbd4e5645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

