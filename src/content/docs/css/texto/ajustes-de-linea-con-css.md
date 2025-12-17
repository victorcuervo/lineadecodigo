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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVV35ZG6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjM2oU8mdubvIHHzvbVz02enk3BzbQi36JIVlPg3N%2BtwIgKxGxXNsbLdX7bHdi8HgpdXR8Go%2F%2FFdD1YD7%2Fy%2FLldswq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPQtlWKdjYdFQwTCWSrcAwcbuOrAxqoyeg0F8YAVckcAV9dIMYtob1W61vwmZ07SKcolVhfjseqdH%2F0jgtevPfWV2lnjO0xw5q%2FBEgYwtz9Ve3oWHUqnqBk%2BBNic%2BiY3Dz7%2FhgaWnhkwp2wzURdp7CWGU0bd0W6mn%2BdYlXIkyKrFq%2F7ai0qFESKCnoMSq%2BGp2yGsEuhiIFMGtqjZVcgAHp0WAPoJoi7x34aqAl4wtxXncNmwgDzt8Tbe5B98oP8raWqKjyDhTHBoy9pM3ISaj0KOTvmVwxZo%2B0m9TM7MtrvTjZeHTGTwOKAMLLYCLrJCRn3ssbIz812XAzcQhkOJn%2FcE4%2BgjJfz3tjEug%2BP5muxrXEObQrQQ1SoRHRqewZ9cN922Lga8Sw4PphGxx1UZ3DQlMj83y6Oic5NHOg10rt0PlBbxbRYM5Kh1sZ67V%2B2XZkcjkmqyKWjeLdxUCWbFrLx63Msw%2FgQrUbZp9vkRmUEcLR2gX5do8zi6WyRVgq59jiOnWGB5j%2Ffn4WqmLS1S9uokO7qJ8AETMncIg7sYV6Ohk04PhYNH135jrjabSuCB8h8%2FXHTbYhsim%2FLnOejf1lVb%2Fi16sxoNptqMwn%2BWhpLP3adwRWn1ydBJ7lTrKXognu4TEDjbyfEBhsYYMJSPisoGOqUBh1y%2F8ShQT4%2Bd1J3LdW8CHVJjWy4HkMdVGy1Xhh%2B2aQ7PpEp45jepFqaQ49P4fVvxZCbNJWOt7PfcyEDo8p6bgZ%2Bd6Tot44oGVbxEaMouaKRrrXF6P%2F4AyLtPkoggsTuKGCOxTvAe2gUa06bvAGd2nhNJ877VEf2qfujEEa7H8RjGackW1iHMjV1wk814dDc19DlKjHR3mmgA%2F2iFSw%2BjGT%2B%2B77oC&X-Amz-Signature=7dde39bee96032e3e57190a526de823d29c9acbb551250ff1346a699728c32d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVV35ZG6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjM2oU8mdubvIHHzvbVz02enk3BzbQi36JIVlPg3N%2BtwIgKxGxXNsbLdX7bHdi8HgpdXR8Go%2F%2FFdD1YD7%2Fy%2FLldswq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPQtlWKdjYdFQwTCWSrcAwcbuOrAxqoyeg0F8YAVckcAV9dIMYtob1W61vwmZ07SKcolVhfjseqdH%2F0jgtevPfWV2lnjO0xw5q%2FBEgYwtz9Ve3oWHUqnqBk%2BBNic%2BiY3Dz7%2FhgaWnhkwp2wzURdp7CWGU0bd0W6mn%2BdYlXIkyKrFq%2F7ai0qFESKCnoMSq%2BGp2yGsEuhiIFMGtqjZVcgAHp0WAPoJoi7x34aqAl4wtxXncNmwgDzt8Tbe5B98oP8raWqKjyDhTHBoy9pM3ISaj0KOTvmVwxZo%2B0m9TM7MtrvTjZeHTGTwOKAMLLYCLrJCRn3ssbIz812XAzcQhkOJn%2FcE4%2BgjJfz3tjEug%2BP5muxrXEObQrQQ1SoRHRqewZ9cN922Lga8Sw4PphGxx1UZ3DQlMj83y6Oic5NHOg10rt0PlBbxbRYM5Kh1sZ67V%2B2XZkcjkmqyKWjeLdxUCWbFrLx63Msw%2FgQrUbZp9vkRmUEcLR2gX5do8zi6WyRVgq59jiOnWGB5j%2Ffn4WqmLS1S9uokO7qJ8AETMncIg7sYV6Ohk04PhYNH135jrjabSuCB8h8%2FXHTbYhsim%2FLnOejf1lVb%2Fi16sxoNptqMwn%2BWhpLP3adwRWn1ydBJ7lTrKXognu4TEDjbyfEBhsYYMJSPisoGOqUBh1y%2F8ShQT4%2Bd1J3LdW8CHVJjWy4HkMdVGy1Xhh%2B2aQ7PpEp45jepFqaQ49P4fVvxZCbNJWOt7PfcyEDo8p6bgZ%2Bd6Tot44oGVbxEaMouaKRrrXF6P%2F4AyLtPkoggsTuKGCOxTvAe2gUa06bvAGd2nhNJ877VEf2qfujEEa7H8RjGackW1iHMjV1wk814dDc19DlKjHR3mmgA%2F2iFSw%2BjGT%2B%2B77oC&X-Amz-Signature=427a9f4713c0b9ae7f48a6f3ef4c7abb4ee15906d451a7f7547130c716a17be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

