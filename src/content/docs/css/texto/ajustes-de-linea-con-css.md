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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOU6X3AF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBriC31Zg8mWQ6PFS11qSuOlCeVlxipLzGR8oig%2Fdg7QIgSs%2B7fxxmlgvm%2FCA4FJrwkLDnFj8l7WUjuQpSieFL9BkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeELwGrSkEBiIwfhSrcA1vpinY3gLnBwWt00QzhnMi3Mq%2FcBdiH5b9yJa1R5zCEHWV5D9yvtK7oGuOSCnL3oggCwVhSY0lK8XFMQlXv6aWqdVbW%2BUleOuFX%2FJTrGrvUtghwXvk%2FCJlF9OblD7nOAo1%2BHBlC9wA6BJ67dKOT4ZkUpr7ypVhyNRq2HVhaIn9Kx%2B%2BhQe7SO98k0fUmtXBrPFJ8npBrEacYE89q6QIXrH3CktwZqzvXLZzwhhjmJ94TKTzekXX6LUkoA4IXCvJOrIWYYqdFIMPKiUR%2Fw9rxvjQz8bxGedSzOyMdclHd4TM51R2Vswk5JqbjZURx%2BJnQsS%2Bpoxf%2FM3qI%2BMd6NBW6KIy2auxlhS%2FJ7ZgC9FhXqjoGKjVu6u99mNL9vquX7bY70RkbqPvrS%2BdzXjIW%2B7w2Evpqd3cVOn8f%2BC3DZEFEUCn%2F0yPaKi5P82MPfEDJ603RlQ%2BiJS20a1nQOyXWirpsG0%2BUt4p2BO2E8%2BAg%2FvVz%2FGbJ9h971qjCu4MC3AJUWRJjY8%2BQ36GXPc0hsct2k8I5bdku1poTSC7hVt2MtzX2eF86SeZX1RH97y7mGaw3MqYtXQxcnp07biR%2BrDJj4t%2Fx551z%2B5ZSF2Ym%2BngQHt9P33MAuF3sAymJvzNJXlG7MMSLjMoGOqUBzfsUiVQk%2FAa6D2f77Fn3TPwL1mAYy7LL8n%2FXhjiIGt9EMEOj1DA5IQtzgEGV8y6ETmyiZcSHaC1I%2FcOZK8Kfa%2F1zMWR%2BMNMivjthJo%2FEAj5Mxr3CHusVhMYM1ZIMG0d0D8UfrLMVkWPsmoGpvB1gobJ5P%2FrrJOaojCqyMAUyokPtfhVPOWm%2FoUuVR2qs4yHUJ7LPy1fOccqstWbdBe8i8nKTDYh9&X-Amz-Signature=cd2b7177a34d0ca9d6216cf437cd774a816e1babd1a64406f8e6149b2b5dac77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOU6X3AF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBriC31Zg8mWQ6PFS11qSuOlCeVlxipLzGR8oig%2Fdg7QIgSs%2B7fxxmlgvm%2FCA4FJrwkLDnFj8l7WUjuQpSieFL9BkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeELwGrSkEBiIwfhSrcA1vpinY3gLnBwWt00QzhnMi3Mq%2FcBdiH5b9yJa1R5zCEHWV5D9yvtK7oGuOSCnL3oggCwVhSY0lK8XFMQlXv6aWqdVbW%2BUleOuFX%2FJTrGrvUtghwXvk%2FCJlF9OblD7nOAo1%2BHBlC9wA6BJ67dKOT4ZkUpr7ypVhyNRq2HVhaIn9Kx%2B%2BhQe7SO98k0fUmtXBrPFJ8npBrEacYE89q6QIXrH3CktwZqzvXLZzwhhjmJ94TKTzekXX6LUkoA4IXCvJOrIWYYqdFIMPKiUR%2Fw9rxvjQz8bxGedSzOyMdclHd4TM51R2Vswk5JqbjZURx%2BJnQsS%2Bpoxf%2FM3qI%2BMd6NBW6KIy2auxlhS%2FJ7ZgC9FhXqjoGKjVu6u99mNL9vquX7bY70RkbqPvrS%2BdzXjIW%2B7w2Evpqd3cVOn8f%2BC3DZEFEUCn%2F0yPaKi5P82MPfEDJ603RlQ%2BiJS20a1nQOyXWirpsG0%2BUt4p2BO2E8%2BAg%2FvVz%2FGbJ9h971qjCu4MC3AJUWRJjY8%2BQ36GXPc0hsct2k8I5bdku1poTSC7hVt2MtzX2eF86SeZX1RH97y7mGaw3MqYtXQxcnp07biR%2BrDJj4t%2Fx551z%2B5ZSF2Ym%2BngQHt9P33MAuF3sAymJvzNJXlG7MMSLjMoGOqUBzfsUiVQk%2FAa6D2f77Fn3TPwL1mAYy7LL8n%2FXhjiIGt9EMEOj1DA5IQtzgEGV8y6ETmyiZcSHaC1I%2FcOZK8Kfa%2F1zMWR%2BMNMivjthJo%2FEAj5Mxr3CHusVhMYM1ZIMG0d0D8UfrLMVkWPsmoGpvB1gobJ5P%2FrrJOaojCqyMAUyokPtfhVPOWm%2FoUuVR2qs4yHUJ7LPy1fOccqstWbdBe8i8nKTDYh9&X-Amz-Signature=cff10aa702ee0ef4571aa5a6daf7b172c5d7ec3f3c4fb1d9193fd92528be0c61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

