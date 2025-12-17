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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRH36CZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyXKStBGTzwY7xCy6j82MBMiwP7GW4%2FoiEwm3O3%2BJbuAiEA7VXD8Ya5noNa36ke3oUjV3Yyix5SkSsY2PO2EJPE3nUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQiWyJXoBJHE3e%2FHyrcA8ZYXCRZ06YMaO4sfe4PuoA1od3xaRWvBuAAM3RFYaqPq7bg57sQd9kPZCuFCeWMNfgsyKgn6v27Kwf%2BBhSkDfUkFPsjOKg4GK%2FyLWbXKcqXwOBz3QeOJt89vvl3dgM32YQYjuvv3LSdFymaWLIk0OZbzwvwu%2F%2B4YhijNJfsKj9hzd8bcz65zCsp7yrjS5s1FKyb9%2BlnX%2B2mcbP5BD4h67s6Rw1wBQtu3iFhLUVpGkCClyM%2BxL6HwHsFLpORWYG%2B1nIrnNiHn9EXc2pBv3Z5RRx5HrmV%2By4sI4mG9%2FL%2BBlsjGkUhOvgBbt3tkzp7ggoT1kQQZeQ5EIF9lB%2FuCDVkF7uQJwiXPi2lfAQO4mW5GaONKo41m5C4IowmEYMXtG%2FQ1r3EcZnLAyuqHyRV5odzmctjQiAI1CtHiO%2FiyfCehC6rnxwyaS4b1%2BUvzglo9KJv1CCXWfhUvdsoP16%2Bp8HyvThnIcRNhaa%2BHhd%2BxfshRCKTVtWiHXneFq5JCIuVLawI604342ul6rCIJMVm9%2ByTHiic%2BLahUnpH7WyLNhIgvJobTmHhzci0rPSlE6Hk4ICwBcBsw%2B8xbh7NRpxlMIr6NrjPS0L5%2FBvUxpLVduVxpliSMdnamR%2BUU%2FNkI6%2B6MIGfi8oGOqUBiz8kYsUyh%2FWrluBs05CNx00PNvBj5d2fhucwnYheBQgAUQQ9Uxgbo5%2BRXuxEGOHvR%2FL0euBfaIro1tKCQ3GPpqmqKhbVk%2Ftvq8MLc7u%2FD4lOBmDh1gRZZsWLm%2BsRjs7kF3RNs%2BZP9ZnVcS7kGKI51fiZOuEQKF8TT9fAKpVX5KhAlm7RiucxnGSZf%2Bmd0KRoVds5cw%2F4iWhwoKLbTcVrZddaPe0m&X-Amz-Signature=305b05619405facf91d1735518b18aca8b07b15bacb6e733cae0a4d024f9d14c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZRH36CZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFyXKStBGTzwY7xCy6j82MBMiwP7GW4%2FoiEwm3O3%2BJbuAiEA7VXD8Ya5noNa36ke3oUjV3Yyix5SkSsY2PO2EJPE3nUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLQiWyJXoBJHE3e%2FHyrcA8ZYXCRZ06YMaO4sfe4PuoA1od3xaRWvBuAAM3RFYaqPq7bg57sQd9kPZCuFCeWMNfgsyKgn6v27Kwf%2BBhSkDfUkFPsjOKg4GK%2FyLWbXKcqXwOBz3QeOJt89vvl3dgM32YQYjuvv3LSdFymaWLIk0OZbzwvwu%2F%2B4YhijNJfsKj9hzd8bcz65zCsp7yrjS5s1FKyb9%2BlnX%2B2mcbP5BD4h67s6Rw1wBQtu3iFhLUVpGkCClyM%2BxL6HwHsFLpORWYG%2B1nIrnNiHn9EXc2pBv3Z5RRx5HrmV%2By4sI4mG9%2FL%2BBlsjGkUhOvgBbt3tkzp7ggoT1kQQZeQ5EIF9lB%2FuCDVkF7uQJwiXPi2lfAQO4mW5GaONKo41m5C4IowmEYMXtG%2FQ1r3EcZnLAyuqHyRV5odzmctjQiAI1CtHiO%2FiyfCehC6rnxwyaS4b1%2BUvzglo9KJv1CCXWfhUvdsoP16%2Bp8HyvThnIcRNhaa%2BHhd%2BxfshRCKTVtWiHXneFq5JCIuVLawI604342ul6rCIJMVm9%2ByTHiic%2BLahUnpH7WyLNhIgvJobTmHhzci0rPSlE6Hk4ICwBcBsw%2B8xbh7NRpxlMIr6NrjPS0L5%2FBvUxpLVduVxpliSMdnamR%2BUU%2FNkI6%2B6MIGfi8oGOqUBiz8kYsUyh%2FWrluBs05CNx00PNvBj5d2fhucwnYheBQgAUQQ9Uxgbo5%2BRXuxEGOHvR%2FL0euBfaIro1tKCQ3GPpqmqKhbVk%2Ftvq8MLc7u%2FD4lOBmDh1gRZZsWLm%2BsRjs7kF3RNs%2BZP9ZnVcS7kGKI51fiZOuEQKF8TT9fAKpVX5KhAlm7RiucxnGSZf%2Bmd0KRoVds5cw%2F4iWhwoKLbTcVrZddaPe0m&X-Amz-Signature=56fa8e71a1617eb8e4625441b5516e05e1bbf866e3debf9a309105c3f2ffcef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

