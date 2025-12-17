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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3L3PMP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXg741L5ZDMqHwnlP9mD1rQoS0gRQ0w%2Bl8jvIE4LN1UAiEAsEFwVKt41iF1AyRYUf%2B6CKOxf3OrhDHGoKsLi0iScNMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDN%2B2ztbKv91z%2FkhH8ircAx8YVl5K2NAsFUTGVNfYHaIcRaGsiUKdz5PobVcywd%2BpWNOPTBcdMOQGvfYUm77BpylIY4q4XRpvpW33iOAGk7SaeGKh5RsxMMUao01MOIdTjHe%2BNCs1Dh5u8IJkSmzZhtwL4HVqa4atRIlbOW6H4w4qhIuFJ7G2OapSnLqUAbirUzbE2Pc0fTue%2FO80vDdewuPxjLPBdGtKPeFdaeXwnjDE7eoaxFQYncWia%2B00phgOV4mwo1GyRM4%2Bx6%2BbXu7BUzekYz87GvhMQFpHGToHB3ktoW5hDkHEbDebasjx0tZHJmitMxRDmEsjhkSDMdF8V4X3xTKfgqVHbFNuGDcRI7SrDEJuVA6dzigPAC5UEWqEJ15gQLagwIMwHO9NOc9jx42BBF2S8qItVv7K07f6dNrKce7%2B2bZPfWbFihsdvXsBTuji5u0JEbMZyV%2FL84tCmNI0c%2BHrnsurG4jq54P1iTJF65mRN7PzD2s2jg3HakzE%2BCtkigWNSQYbzCCkZqZWPTk%2BwQaKo9eubfUOFB6Q9ot0YYwpb8YYbvo%2FD4AWI6yAVJ6PiW3VEjv5AOzvN3NzQqPtCHYdd7TaqmzVrKtYoIHgXYFXxFbYtrjRZSMPLgUxIcPWDi3rX6fWbwUvMO7vicoGOqUBokCPquGJxBeD8j7MlK2iCSJOMLhp4jGJcBv0ulkhznxSXVGVqg5JtGJERAly6UbZuztj1O9FqXxDRW4a5G8JBp%2F%2BhyUUIfyHJ9cqjxru22YfTjw9FseFKY79xYJBfbrcg2L8wuxm8zYbsismX0istkVFoYhT3IYQT6YAA6a4QDKe4I0Wcsx2deMScMez0yrDLTQekMjJl0LYxM46pIik7zYZYUjQ&X-Amz-Signature=d64658f311c6bfd0d72a5f86f39184f11c23ac5df8d0e2449b46051473bed561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3L3PMP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFXg741L5ZDMqHwnlP9mD1rQoS0gRQ0w%2Bl8jvIE4LN1UAiEAsEFwVKt41iF1AyRYUf%2B6CKOxf3OrhDHGoKsLi0iScNMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDN%2B2ztbKv91z%2FkhH8ircAx8YVl5K2NAsFUTGVNfYHaIcRaGsiUKdz5PobVcywd%2BpWNOPTBcdMOQGvfYUm77BpylIY4q4XRpvpW33iOAGk7SaeGKh5RsxMMUao01MOIdTjHe%2BNCs1Dh5u8IJkSmzZhtwL4HVqa4atRIlbOW6H4w4qhIuFJ7G2OapSnLqUAbirUzbE2Pc0fTue%2FO80vDdewuPxjLPBdGtKPeFdaeXwnjDE7eoaxFQYncWia%2B00phgOV4mwo1GyRM4%2Bx6%2BbXu7BUzekYz87GvhMQFpHGToHB3ktoW5hDkHEbDebasjx0tZHJmitMxRDmEsjhkSDMdF8V4X3xTKfgqVHbFNuGDcRI7SrDEJuVA6dzigPAC5UEWqEJ15gQLagwIMwHO9NOc9jx42BBF2S8qItVv7K07f6dNrKce7%2B2bZPfWbFihsdvXsBTuji5u0JEbMZyV%2FL84tCmNI0c%2BHrnsurG4jq54P1iTJF65mRN7PzD2s2jg3HakzE%2BCtkigWNSQYbzCCkZqZWPTk%2BwQaKo9eubfUOFB6Q9ot0YYwpb8YYbvo%2FD4AWI6yAVJ6PiW3VEjv5AOzvN3NzQqPtCHYdd7TaqmzVrKtYoIHgXYFXxFbYtrjRZSMPLgUxIcPWDi3rX6fWbwUvMO7vicoGOqUBokCPquGJxBeD8j7MlK2iCSJOMLhp4jGJcBv0ulkhznxSXVGVqg5JtGJERAly6UbZuztj1O9FqXxDRW4a5G8JBp%2F%2BhyUUIfyHJ9cqjxru22YfTjw9FseFKY79xYJBfbrcg2L8wuxm8zYbsismX0istkVFoYhT3IYQT6YAA6a4QDKe4I0Wcsx2deMScMez0yrDLTQekMjJl0LYxM46pIik7zYZYUjQ&X-Amz-Signature=f2141520d0d68c16aa18d6e1a6948fc576041302c42c31ec9a675d64358326a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

