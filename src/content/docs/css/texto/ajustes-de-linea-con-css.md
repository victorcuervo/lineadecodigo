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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDAD6CXV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjhS8qIJiih6yYmQ%2Fc5mLGSD4Lz6vQRok%2Bj%2BcxTHcNcgIgcp%2BSyC5MsLP%2FUKhgxIdaUMM9iDXW12qJyEilOQWfhwwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJx4uRBb0aq73on3aircA%2BdhHST14KJHgqC7gXwnJInI2sdoAHwbhOhO6qnqt%2F4OZ%2BtfC4%2BSy%2Br0W%2BsUmwsY3wAlV2%2BN%2B%2FQPPTLrq6foqWxpai3TNpVmCMQgKYYeDsyJF3bdsHb78g8a7n%2FnMD5q0FPfsLurlcS%2BVXDJ6Wa55%2FjegtNwtLLip%2FGW5W8I%2BAmbuPXwYM7zUTvl385wG9e6XCDBejgVpYk9Mr1jWg2urQZdMkp4vOJVRmwZKzdJX2voO%2FrZdD3eHP5I2cy8THktzZzB0GMlV%2BAbtDpH6qDc6rdsNzBJ3PDMQ3%2BEt3yg2nhHX%2FbNtekYapM1dfS3YuFC9D5Zn2CKWXJhkz22IlcWw%2BwTvTg21vZm2dxQDYUDyjlPC6xpZL8uqbemKJv%2FR3F0DEeTVi3EaDU6w1X5V0EXkwUmvm%2BAok%2BKHg2Vxfl3Q8%2BOEgy6KbyN2MNJib33pc68wJYrm6ayTt26i3wqNdM4qCFMEzbnDyGRYcBzdZLViDxZpMl8axh7y1TtW6efxHM6bXXTsBP3BoNyuG%2F0vd7TaDFxmAq5rFo9VVHbldegLZOHKxSi9bJ%2FJrkqOZO24LDQARThLhH5AGGaOb3gOhUgmTpF4f5%2FdbSaAdl2eFTJZbTVv6CUNodDBD2%2BJXjDMP2OisoGOqUBoscQ%2FjTwlhhbDkAldaTG6LA3D2YCnpKARmO9LEeLBlDhE30ngFa2gfIEWEEKbqYL2B8ObgQEtMoqv8m%2F%2Ble8WXj7Tp45i8uvUeLEzeHq%2B7550m5%2B9c%2F20vgySqmuj9a7GvAPTdUIG67JSXnBl500sVdMpyJBTesXWwTOC7ZC%2BfQJbChr1F4RcpNvzDu5QumfATkjuhOI4ZJ5s7W8l%2FuQW9Bv7kI3&X-Amz-Signature=680bec8a28a4ee9fc45fe0f67d5b5c4848749aa74df02fccef09bf12574782fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDAD6CXV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjhS8qIJiih6yYmQ%2Fc5mLGSD4Lz6vQRok%2Bj%2BcxTHcNcgIgcp%2BSyC5MsLP%2FUKhgxIdaUMM9iDXW12qJyEilOQWfhwwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDJx4uRBb0aq73on3aircA%2BdhHST14KJHgqC7gXwnJInI2sdoAHwbhOhO6qnqt%2F4OZ%2BtfC4%2BSy%2Br0W%2BsUmwsY3wAlV2%2BN%2B%2FQPPTLrq6foqWxpai3TNpVmCMQgKYYeDsyJF3bdsHb78g8a7n%2FnMD5q0FPfsLurlcS%2BVXDJ6Wa55%2FjegtNwtLLip%2FGW5W8I%2BAmbuPXwYM7zUTvl385wG9e6XCDBejgVpYk9Mr1jWg2urQZdMkp4vOJVRmwZKzdJX2voO%2FrZdD3eHP5I2cy8THktzZzB0GMlV%2BAbtDpH6qDc6rdsNzBJ3PDMQ3%2BEt3yg2nhHX%2FbNtekYapM1dfS3YuFC9D5Zn2CKWXJhkz22IlcWw%2BwTvTg21vZm2dxQDYUDyjlPC6xpZL8uqbemKJv%2FR3F0DEeTVi3EaDU6w1X5V0EXkwUmvm%2BAok%2BKHg2Vxfl3Q8%2BOEgy6KbyN2MNJib33pc68wJYrm6ayTt26i3wqNdM4qCFMEzbnDyGRYcBzdZLViDxZpMl8axh7y1TtW6efxHM6bXXTsBP3BoNyuG%2F0vd7TaDFxmAq5rFo9VVHbldegLZOHKxSi9bJ%2FJrkqOZO24LDQARThLhH5AGGaOb3gOhUgmTpF4f5%2FdbSaAdl2eFTJZbTVv6CUNodDBD2%2BJXjDMP2OisoGOqUBoscQ%2FjTwlhhbDkAldaTG6LA3D2YCnpKARmO9LEeLBlDhE30ngFa2gfIEWEEKbqYL2B8ObgQEtMoqv8m%2F%2Ble8WXj7Tp45i8uvUeLEzeHq%2B7550m5%2B9c%2F20vgySqmuj9a7GvAPTdUIG67JSXnBl500sVdMpyJBTesXWwTOC7ZC%2BfQJbChr1F4RcpNvzDu5QumfATkjuhOI4ZJ5s7W8l%2FuQW9Bv7kI3&X-Amz-Signature=c629b27368c1c0d83f87fdc90f7fc8301bb97d59a2e3ae720d42e5187ce8b0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

