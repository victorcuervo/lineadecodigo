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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCP3YFEH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF4CNhoebguofEsB1ZXbsIs4n2y6prcv0sBhYfYOZzAwIgde39xHLLXl%2FN6mNXXP8gqm5VDjA3tlRuCaDgwXQ%2BV5Aq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLh9yfmYzOFu13r1UCrcA56A04geRb0cMRakJDvnpbf9BJGIxIbh8PpOBRjEwzVVXKwSKxIUYLEuPSacNn2QDJ3QZdoatf33VPyoS%2FE8ltYaSFci%2BHrw25CoM4ESxgA3F%2FdSa41ro5ZNF6IAeRd3EIuAQFYoJuBa1HCU9%2FVp6%2BSewz62DQQ7ER6gFMBeezuSkyBOFZx6YwM9rgx6w7sK7NZPBOnVLypG%2F%2FyZ5m0lhHu2Z8Ahfbd05qgELqwpAXBeV4vhLBpzO9kgANQCuGbIUiO%2FbA0vcZky0kUcHt0blDNkvmCru3yl8qbxFlGGY%2FcUXgA1RQgE%2BmK2aizH5Oi5uSPOuIYD6NV87J0BhkshwdfnX3OoXf8r4%2FtxDQiXBlNqeBEGsGfoUpMvj13Kc7yyo2t5pFGCwktdjT%2FN%2B0p2UtefHwe6l9Hfk403%2FB4lYDdc5poBEIIq2PDRjYNaEwEJwtda7P9Kr01uVJsrR6gKW65wVjbbs3b2m%2BpX7pJlzVR%2Fwd6WV6p8JtHyIaFL7mFbKzx0FagV67tCM7PNMKkAlXYScnjrb2HjPbMKWrM5tKmb1%2BJZG2SSOK7SKhjBzq6A5uipGb53ND50io5uD9bfbEbYhNI4sUgea2%2Fnon9JO0D65c6dhHlHWhsiSyDxMPDhisoGOqUBVLlvOqsLwxpkXlCSVLFRc%2FTp0whOnRZ0RMbRG%2BLzLUOtKQU0I2j92SeDkkm2WfZ6Dv%2FO5c8QnomrDRsJuQg8u7oW5b6BCiN9ocvjqXNar0O2JyArlanrS9xrzHtDYs0n5%2Fwbh1OfVrKWWOx0SDBSZbOSG6Wnxt%2FIpZ26mv7zsiHPOXEFuSJ6Xy8O8zCDPImn9YsfzN2bjwbYs8MpuPGYDoVDaO7z&X-Amz-Signature=560b0877f2f25e17b0af6094c9f1569e384a2c79c0c6f2938c7d57eb245bae4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCP3YFEH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF4CNhoebguofEsB1ZXbsIs4n2y6prcv0sBhYfYOZzAwIgde39xHLLXl%2FN6mNXXP8gqm5VDjA3tlRuCaDgwXQ%2BV5Aq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDLh9yfmYzOFu13r1UCrcA56A04geRb0cMRakJDvnpbf9BJGIxIbh8PpOBRjEwzVVXKwSKxIUYLEuPSacNn2QDJ3QZdoatf33VPyoS%2FE8ltYaSFci%2BHrw25CoM4ESxgA3F%2FdSa41ro5ZNF6IAeRd3EIuAQFYoJuBa1HCU9%2FVp6%2BSewz62DQQ7ER6gFMBeezuSkyBOFZx6YwM9rgx6w7sK7NZPBOnVLypG%2F%2FyZ5m0lhHu2Z8Ahfbd05qgELqwpAXBeV4vhLBpzO9kgANQCuGbIUiO%2FbA0vcZky0kUcHt0blDNkvmCru3yl8qbxFlGGY%2FcUXgA1RQgE%2BmK2aizH5Oi5uSPOuIYD6NV87J0BhkshwdfnX3OoXf8r4%2FtxDQiXBlNqeBEGsGfoUpMvj13Kc7yyo2t5pFGCwktdjT%2FN%2B0p2UtefHwe6l9Hfk403%2FB4lYDdc5poBEIIq2PDRjYNaEwEJwtda7P9Kr01uVJsrR6gKW65wVjbbs3b2m%2BpX7pJlzVR%2Fwd6WV6p8JtHyIaFL7mFbKzx0FagV67tCM7PNMKkAlXYScnjrb2HjPbMKWrM5tKmb1%2BJZG2SSOK7SKhjBzq6A5uipGb53ND50io5uD9bfbEbYhNI4sUgea2%2Fnon9JO0D65c6dhHlHWhsiSyDxMPDhisoGOqUBVLlvOqsLwxpkXlCSVLFRc%2FTp0whOnRZ0RMbRG%2BLzLUOtKQU0I2j92SeDkkm2WfZ6Dv%2FO5c8QnomrDRsJuQg8u7oW5b6BCiN9ocvjqXNar0O2JyArlanrS9xrzHtDYs0n5%2Fwbh1OfVrKWWOx0SDBSZbOSG6Wnxt%2FIpZ26mv7zsiHPOXEFuSJ6Xy8O8zCDPImn9YsfzN2bjwbYs8MpuPGYDoVDaO7z&X-Amz-Signature=148e74f6d95641c5fda7878cc78dc79f7b4bbb2105d4315850e3ab11f516ac70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

