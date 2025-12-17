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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5QAKXM3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZ0GCNATKZOIPBsSYLXutteyJ4CiApjbPD6ce%2BGyb2IAiB4jYcPTkj15Ga3CmdOaPds7rB7TgLe0%2F9QUw8NgFPlOyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMUyZm31uuo6aF9xXgKtwDudUITHpbRsEC1sq7S8niO%2BK2QxVkF8vGdhUwuF%2F1dl7dR5%2BHEaukuUkL47rWu0BRlEo5mn7NjKtNPht1XqRxs%2FwQgJvohsebRkVKWXTiQ7eFCT44oUdYpwT6wHiQkTwJpB4qjaD81ZvcoiBC3ay%2F%2BKiZpxMT7fxT3eVeYCUTFlm08lDp7fFyWwAaWil62EV%2FvqidOuJrTIMb9sPJgLbSmhSZd6cfiYCLa%2FFoqVbGpTDZSgvDsMQFmtMyKsldliuEg3VaYRnSSQKIkwMuNZZCy9elTriCSP2CCxL0qygCt%2FEDRhIhZSUbXxIv%2FEBXEUD5MmedI5oSEW1Ho%2BKtZKpPgXtM%2FqAcPZjV3KuxOsQmo%2B63Zdquw%2Fgdi9KN%2FS5oWh%2Bgs%2FHDXK450TvSiQ8l799E7zl1IedOE8R66gQ%2FHCAew1e43WXghdiESZd%2Fr9q0Y%2FomOO%2B9CrFkUY3kDEVj3RkGYMLC7tpOolQRpIFc%2BD9j2jHPWreFHuV8KwQ4juVGuUfeomCMtbHPxSIuFG%2BYVg0XqcJU9hcarYiwsZfkjARlNUS764oY7Q%2FkEPVF%2Bk0mWaZyytrnSpxxn8upPqWmv6inkAmx2g18iTddMRxNeYCwViUpWG1SRfECCVjzlKEwhOGKygY6pgEEDrM4uqEFkshL5eS7BRNk5rUtoBriU6sRgccKEhLfoyoeZKG1nCbnDO53x0d2pIBXcIu2hE%2BCIlPBL5RSl4aDg88IiP7bDB9LlWozBp5zctXNNuWb7LVOOJDq8caw5us1Z0ZXwAhl3bYqzDex2QvHkGWGwNJ8Gqkzhp9U2o4aTj6iQKPQxiGIfiIKq%2FEeBK83pkPd8vtFUgwBlKf9t0aOrJ7LLKcd&X-Amz-Signature=38179b3b463461c4531f58927774e0b832480b47143bf8911d7b6850abfb8f6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5QAKXM3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T143654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZ0GCNATKZOIPBsSYLXutteyJ4CiApjbPD6ce%2BGyb2IAiB4jYcPTkj15Ga3CmdOaPds7rB7TgLe0%2F9QUw8NgFPlOyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMUyZm31uuo6aF9xXgKtwDudUITHpbRsEC1sq7S8niO%2BK2QxVkF8vGdhUwuF%2F1dl7dR5%2BHEaukuUkL47rWu0BRlEo5mn7NjKtNPht1XqRxs%2FwQgJvohsebRkVKWXTiQ7eFCT44oUdYpwT6wHiQkTwJpB4qjaD81ZvcoiBC3ay%2F%2BKiZpxMT7fxT3eVeYCUTFlm08lDp7fFyWwAaWil62EV%2FvqidOuJrTIMb9sPJgLbSmhSZd6cfiYCLa%2FFoqVbGpTDZSgvDsMQFmtMyKsldliuEg3VaYRnSSQKIkwMuNZZCy9elTriCSP2CCxL0qygCt%2FEDRhIhZSUbXxIv%2FEBXEUD5MmedI5oSEW1Ho%2BKtZKpPgXtM%2FqAcPZjV3KuxOsQmo%2B63Zdquw%2Fgdi9KN%2FS5oWh%2Bgs%2FHDXK450TvSiQ8l799E7zl1IedOE8R66gQ%2FHCAew1e43WXghdiESZd%2Fr9q0Y%2FomOO%2B9CrFkUY3kDEVj3RkGYMLC7tpOolQRpIFc%2BD9j2jHPWreFHuV8KwQ4juVGuUfeomCMtbHPxSIuFG%2BYVg0XqcJU9hcarYiwsZfkjARlNUS764oY7Q%2FkEPVF%2Bk0mWaZyytrnSpxxn8upPqWmv6inkAmx2g18iTddMRxNeYCwViUpWG1SRfECCVjzlKEwhOGKygY6pgEEDrM4uqEFkshL5eS7BRNk5rUtoBriU6sRgccKEhLfoyoeZKG1nCbnDO53x0d2pIBXcIu2hE%2BCIlPBL5RSl4aDg88IiP7bDB9LlWozBp5zctXNNuWb7LVOOJDq8caw5us1Z0ZXwAhl3bYqzDex2QvHkGWGwNJ8Gqkzhp9U2o4aTj6iQKPQxiGIfiIKq%2FEeBK83pkPd8vtFUgwBlKf9t0aOrJ7LLKcd&X-Amz-Signature=072753b2bd758fa61edb3ff63f5863def55bb40e29bb4d9fdb1a2be6e1c5b9ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

