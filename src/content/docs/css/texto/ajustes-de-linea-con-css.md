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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ONJ7RK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnFNq4vBLx7quBDIZad%2BKJiNtdp%2BgJuLGLwi8oZ3k1XwIgBe4JQGoDWk5gx8EWmdbdTTsogl3AR%2BaOYogI9JIh3e4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOupTkDo93Vj2acNdyrcA9zE6uN2udKCGzBRSxuVbiW81wTUD3lJgU9SEREtQbVR%2FDlpK96KG%2FKyhkgBn5RRPLLz0OPJrCyZMZtVKu2RBSTrAEy519O33PwsIQ6A4mwksdavvCznavRLAg8pDEW8XfEXGx482aAnZjiNkU%2Flm78Z08IkhQw94IRaXYBpKxIevHCtjvEmLZXxMzC%2FZ7GGvmUGa3bkGHPh0HZGA4e46YMXgvLIGAEhxelYu4UzowK%2BfZJMEu3OLBJZ3dFXDjLFriJwMCinVNv7g2YYsj1vjpWqtKIeS9seV6O15yBSE236rAOPxZJQhGBr7W0nZqSOrKK2zmG2iTBA2mB18Lq6G4lS9Od2kUHXI7hFfK6vZGfY4%2BuumZ6484aiOZ8fgnbB4iuwaqGkfGCldAZg5ZNxtupC2iwD83IIsk5UnZIjFmU1vayaVOR5cgOuETYEyBOCzsj5jHiKhWmnILdhKM%2FiISe79x58Ka0e7u1hpKfuolwu5QvlVCnU8WcvJuqgA47D5xqHCiX8aBOO79h5F2mxdv8XHkm7xIItJPm9zm5gYgvKQGzAHFpaNvaMEs6oTTUQ02Uuu5Xr7dyI3N2Z6JiEs0yQP98%2BK7Y%2FZ2s3OrY6wmzYaKDr877uK5VpAy73MIzOiMoGOqUB8Eal7f4Oi4NK6R7ItMYP7WDZMSkxLlk%2FVh127ShjEILU9BhK6yViJH0cn0rd7xeKTEdTIj94I5g3bo3y87eQhijVqdyNSp%2BpOu1CpgFWOBl2pMHHEMpGw1iLt2rZLXi6P9BQ2DtUZEsA9eHGl6xOJM9UNicF24xunXYoELN312Dgt6JzC1gU7FBIyGXKruyIzkG%2BoENoiNhGkMSyyg5zH%2FFG6Wdd&X-Amz-Signature=0af5affee89909394cffa66519e1b36cf014b4225cfb81837112b112e2def90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625ONJ7RK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnFNq4vBLx7quBDIZad%2BKJiNtdp%2BgJuLGLwi8oZ3k1XwIgBe4JQGoDWk5gx8EWmdbdTTsogl3AR%2BaOYogI9JIh3e4q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOupTkDo93Vj2acNdyrcA9zE6uN2udKCGzBRSxuVbiW81wTUD3lJgU9SEREtQbVR%2FDlpK96KG%2FKyhkgBn5RRPLLz0OPJrCyZMZtVKu2RBSTrAEy519O33PwsIQ6A4mwksdavvCznavRLAg8pDEW8XfEXGx482aAnZjiNkU%2Flm78Z08IkhQw94IRaXYBpKxIevHCtjvEmLZXxMzC%2FZ7GGvmUGa3bkGHPh0HZGA4e46YMXgvLIGAEhxelYu4UzowK%2BfZJMEu3OLBJZ3dFXDjLFriJwMCinVNv7g2YYsj1vjpWqtKIeS9seV6O15yBSE236rAOPxZJQhGBr7W0nZqSOrKK2zmG2iTBA2mB18Lq6G4lS9Od2kUHXI7hFfK6vZGfY4%2BuumZ6484aiOZ8fgnbB4iuwaqGkfGCldAZg5ZNxtupC2iwD83IIsk5UnZIjFmU1vayaVOR5cgOuETYEyBOCzsj5jHiKhWmnILdhKM%2FiISe79x58Ka0e7u1hpKfuolwu5QvlVCnU8WcvJuqgA47D5xqHCiX8aBOO79h5F2mxdv8XHkm7xIItJPm9zm5gYgvKQGzAHFpaNvaMEs6oTTUQ02Uuu5Xr7dyI3N2Z6JiEs0yQP98%2BK7Y%2FZ2s3OrY6wmzYaKDr877uK5VpAy73MIzOiMoGOqUB8Eal7f4Oi4NK6R7ItMYP7WDZMSkxLlk%2FVh127ShjEILU9BhK6yViJH0cn0rd7xeKTEdTIj94I5g3bo3y87eQhijVqdyNSp%2BpOu1CpgFWOBl2pMHHEMpGw1iLt2rZLXi6P9BQ2DtUZEsA9eHGl6xOJM9UNicF24xunXYoELN312Dgt6JzC1gU7FBIyGXKruyIzkG%2BoENoiNhGkMSyyg5zH%2FFG6Wdd&X-Amz-Signature=555f5d3e387c1fd21d5482a774fa0bee479e32f12fb466cb434da4f4f961ccc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

