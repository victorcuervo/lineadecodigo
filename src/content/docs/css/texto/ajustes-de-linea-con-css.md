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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PUW6QQL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAK3M3%2BcSvktd1IEyQu1C5fJWBONdsGB1My5gAtetyuAIgOucRrd%2Ft%2BQwbQhnnrhw3h9J5T0P6wrPTsbY1iby7DcwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKELJ8WgSaqitk%2BdxyrcA65YPRM7KptEbPuYhhL1GfMRMHrw%2F5hvY9ltGSmaR4Ea%2FPxTMw7CMLR22iodRzlDsUxEZZMmudnMQ%2BhNjkvWL3GuaAjpzS7boyKez2I%2BjWqfrSpise6hN76FPjFDDBQWDBoC9bB5fEhQDLdnfde5nrmktAw7P%2BZgt2uxEUlhwoo4YvhnuZUy12tK9jF72HMVpSObboFtkyineO30vbR3NuNXZ4uFLIzfloIRP9OqX9Df4PkxJVxkDjfnJ5JzHDVAIIU1UNmiA26RTmDjnljLCcVihHZt1mXAmTi4C0m01CqEavd50FVIL7To5%2FRug6QzCPsckDoGZmvOLFO5shzhEbQAQbTHli0Z%2FKHZ5AElhnY6VljYhdNuqggYA6mx52K%2FIL%2B0AR%2FPaCj0eVNL%2B9GWqCa1lEhzMwPZ%2FCgWWsZ3WiPE1XsSCS1JDvZNANGssHr5ccR1e2sLu7m23syy%2BldB1sO167JaHCkbFcttuZ9xPfwCiijPZL0WBdrg4EDH5seezDMwM5uKXEbaew5peqDXqBlf8dygec7E2WQautx5kJSIim%2FvLaa5hby52xeCpin%2FOpvbVnYW0ESRY0hkkiUljL7Q8UbFd%2Fi4QywnAe%2FK6L6lB%2FFfaG7Gk%2FLthmFRMKegi8oGOqUB8rpY5ftag3FAyF%2F4%2FRQvGmhn0kOtonAiJXQ%2FZdwSB9vtrUwdNCyjYpSctLRTj5TRKcgBurtQEncxEISx%2Blp7xwgRMftgOUWGCwMUiawNIwS24ckh12e1yaPKyPwHp31XvzGbFN2h3h7uQWbL3xt0jmxcsGErIfyMJcv2r%2BzB7oILZjUpZacNuSUPO%2FufNJrEvq1e1PGXmbf%2BiFTTbbytNovSfthU&X-Amz-Signature=523177deb028e16fc06590f24e565a3e51b0b2c3d1c71af33094061d895f349b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667PUW6QQL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T175348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAK3M3%2BcSvktd1IEyQu1C5fJWBONdsGB1My5gAtetyuAIgOucRrd%2Ft%2BQwbQhnnrhw3h9J5T0P6wrPTsbY1iby7DcwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKELJ8WgSaqitk%2BdxyrcA65YPRM7KptEbPuYhhL1GfMRMHrw%2F5hvY9ltGSmaR4Ea%2FPxTMw7CMLR22iodRzlDsUxEZZMmudnMQ%2BhNjkvWL3GuaAjpzS7boyKez2I%2BjWqfrSpise6hN76FPjFDDBQWDBoC9bB5fEhQDLdnfde5nrmktAw7P%2BZgt2uxEUlhwoo4YvhnuZUy12tK9jF72HMVpSObboFtkyineO30vbR3NuNXZ4uFLIzfloIRP9OqX9Df4PkxJVxkDjfnJ5JzHDVAIIU1UNmiA26RTmDjnljLCcVihHZt1mXAmTi4C0m01CqEavd50FVIL7To5%2FRug6QzCPsckDoGZmvOLFO5shzhEbQAQbTHli0Z%2FKHZ5AElhnY6VljYhdNuqggYA6mx52K%2FIL%2B0AR%2FPaCj0eVNL%2B9GWqCa1lEhzMwPZ%2FCgWWsZ3WiPE1XsSCS1JDvZNANGssHr5ccR1e2sLu7m23syy%2BldB1sO167JaHCkbFcttuZ9xPfwCiijPZL0WBdrg4EDH5seezDMwM5uKXEbaew5peqDXqBlf8dygec7E2WQautx5kJSIim%2FvLaa5hby52xeCpin%2FOpvbVnYW0ESRY0hkkiUljL7Q8UbFd%2Fi4QywnAe%2FK6L6lB%2FFfaG7Gk%2FLthmFRMKegi8oGOqUB8rpY5ftag3FAyF%2F4%2FRQvGmhn0kOtonAiJXQ%2FZdwSB9vtrUwdNCyjYpSctLRTj5TRKcgBurtQEncxEISx%2Blp7xwgRMftgOUWGCwMUiawNIwS24ckh12e1yaPKyPwHp31XvzGbFN2h3h7uQWbL3xt0jmxcsGErIfyMJcv2r%2BzB7oILZjUpZacNuSUPO%2FufNJrEvq1e1PGXmbf%2BiFTTbbytNovSfthU&X-Amz-Signature=14ee08c938413e5efa2a9a6a79cfae8b5c85426fa56b7d4d02ba211afde879cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

