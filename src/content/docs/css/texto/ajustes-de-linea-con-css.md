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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JT6BRUH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwv3BTQw2SSxWl6dgJuRk7S%2FHR8lWJJj1GCzoJgabh5QIgZ17vY7ZcdhNgAiV4N19m7c0GA58qe7W7CUO2cnSLF6Qq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBeTevVSJHm98FCwMircAybiU4H20rg%2FLljULUSalgK1%2FN9xQ3mj%2BEIHRWr2Q1%2B0%2BIqMs%2Fm4y6db7i0fE9Sl2Zl93T0x7QANDs7PmMNWI2VWBsc8o%2BDD8qXHlqMzFdkrQxpsboP42%2FtdOEViK6nX2WD3q8YfyfIQsFL0gxGfXJ3oe%2BLguzgBMVw7XlqPatW%2Fr%2FSGSYziIiNxXVf5j3S3VdTL6i%2BNRFjtE39M3mXP5emlyk8SK84quEiHeQU7UQwVqw%2FuZr98KFxdaH4THPy03LagBhVchyX3ss5iXA8n6MVpksihyplCFnAYAOSUvJBNHbuhd3uK1sd5QjmgudvNFNlnTQWisSRVVocj8k0i9KHLdoFzK%2BPcn8oX5zpTeqK%2F1Z6h75BsyF2R4ttR1oCbfxolIV5ZQGXJo%2FWol7wu2aihsRgNms1uaq5utC5WLubgfXPQ59iBR%2F5Uwy%2BsrZ%2BswZGP3qfZ0xTdgQz0C0CQVE5eo2DUVIGrgj68dKHKHHAp%2BApupeqcyc5GyOIjCaFIYYqwwIs85qwHVISf%2BmQVQRbzfSS7kMaMTDPvT4os9cMn%2BxFACZk54ayiudEBvUtT8mPNKURO4TWfJzEmbxrcrYhPMiP90RnhoJAICpQxH3HX7%2BaiZmsD5Hz0p2iiMOmdicoGOqUBt6wAnfy82UVJxshpFY3A0C%2Fe%2BTxvBVt4PlP%2FjQVTPkP6DSOwvLQBneO5OgFNeeHWRTUJxMTAj31vSAnGSqymrJo%2FfTdf45%2FhM8N7aZjHTPn0WZ8cXHOAGfdRXhxmfV%2F4UvXf7GU911aPbobRN%2FnEyOMVkOwTd%2B5yaqc73PWvB4%2B1yDaO6JiozOckgPjAPLx5g3jbn3dnszNkyb9nprcO42%2FLJ9o1&X-Amz-Signature=5e23c6f10407e102660ce103bd885ac4dcdbee9fee498eb9e7b509f4e6c7a982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JT6BRUH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwv3BTQw2SSxWl6dgJuRk7S%2FHR8lWJJj1GCzoJgabh5QIgZ17vY7ZcdhNgAiV4N19m7c0GA58qe7W7CUO2cnSLF6Qq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBeTevVSJHm98FCwMircAybiU4H20rg%2FLljULUSalgK1%2FN9xQ3mj%2BEIHRWr2Q1%2B0%2BIqMs%2Fm4y6db7i0fE9Sl2Zl93T0x7QANDs7PmMNWI2VWBsc8o%2BDD8qXHlqMzFdkrQxpsboP42%2FtdOEViK6nX2WD3q8YfyfIQsFL0gxGfXJ3oe%2BLguzgBMVw7XlqPatW%2Fr%2FSGSYziIiNxXVf5j3S3VdTL6i%2BNRFjtE39M3mXP5emlyk8SK84quEiHeQU7UQwVqw%2FuZr98KFxdaH4THPy03LagBhVchyX3ss5iXA8n6MVpksihyplCFnAYAOSUvJBNHbuhd3uK1sd5QjmgudvNFNlnTQWisSRVVocj8k0i9KHLdoFzK%2BPcn8oX5zpTeqK%2F1Z6h75BsyF2R4ttR1oCbfxolIV5ZQGXJo%2FWol7wu2aihsRgNms1uaq5utC5WLubgfXPQ59iBR%2F5Uwy%2BsrZ%2BswZGP3qfZ0xTdgQz0C0CQVE5eo2DUVIGrgj68dKHKHHAp%2BApupeqcyc5GyOIjCaFIYYqwwIs85qwHVISf%2BmQVQRbzfSS7kMaMTDPvT4os9cMn%2BxFACZk54ayiudEBvUtT8mPNKURO4TWfJzEmbxrcrYhPMiP90RnhoJAICpQxH3HX7%2BaiZmsD5Hz0p2iiMOmdicoGOqUBt6wAnfy82UVJxshpFY3A0C%2Fe%2BTxvBVt4PlP%2FjQVTPkP6DSOwvLQBneO5OgFNeeHWRTUJxMTAj31vSAnGSqymrJo%2FfTdf45%2FhM8N7aZjHTPn0WZ8cXHOAGfdRXhxmfV%2F4UvXf7GU911aPbobRN%2FnEyOMVkOwTd%2B5yaqc73PWvB4%2B1yDaO6JiozOckgPjAPLx5g3jbn3dnszNkyb9nprcO42%2FLJ9o1&X-Amz-Signature=9956cb873ece14ed953b486c634887b8590df01071caa1861764f3e2c802ea07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

