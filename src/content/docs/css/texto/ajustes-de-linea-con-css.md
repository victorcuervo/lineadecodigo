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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM2RCIEG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgnjnAaLJ9gMILw9GwLWmGyiEBIaqypV%2BelB9kyKehdwIga5%2Fj0tNf0bKQ9eVJAjahcB%2BispILibUfDbmy3HvaWUYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKQ%2BEw3fCuv7xWfeircA4RVEcAGQxJF9L17556sQuIFddPoXstnNADpZM2F9orHU2ba5p2UKCXAyN%2B%2BNxdmzQGsdIgzxrCw9cKq0K06NYNakNoo40qwYAoA2L3gXn7ff9f2ECTWCi1%2BC%2FBuVH2FDJToidbQuDFJlcFuqj1SmcIRPHHCK9aKHorBRYbY9XxRiFS9QsIN9NFIkLiWin%2Fm%2BLfUSdrSW%2BR7rhVzjF4SUc2WAY%2FgIotwxpDHeJZwIxR5tXLpUa6yqpMX2bfXyXfDDDI2QklKh%2BBoHQMVSjNblQ5qsHJU14GDNxUutKB08%2F86dRuf69ZRgWuJuHB9scPRv4ecmvsfvSTw%2FanB4z97yMZgyFwHeaAbMq7G0Upv2Ysx043InTfDO7inO1AyLoPPqRhZrl56eDiVd1HfiEQZEayofX0ARF08MPoGSCUIJYD0zY13UGsBewkgzOvmhLaIE9Jm7V86aHeDYpwRKF3GCcTfUhyUyG3%2BoSqMUR6gMJn8reH%2F9RjMP2MZxQXBu2wXQNVxJgWkGxzhi7ZxKOlpK4LD%2BvpY9GenHnBVr19iXTBAIgwY7B26SlMfFxAI3xeCfnSvVR7FzuBPKvX9tribCun4F%2FWo80PpJY5NI4RmqDUOJ%2BNbQEMFmSATzDLuMM6LjMoGOqUBAZja8c9RNt5D4bKXO3k1KMSO%2BTwC8W2777txnw4yBWJVA9vDQ1c%2FpotNklgQkseFg1bqanq7Pxb9esgKbhmyk4nXM2yZeQN4x0OhFRYiZQG0iGDwrAH5SVD6aZx65t3Ka4FIxuiIVo54RpDMQm6xdX9BiOzaFTY7A350Znzg42JXVEkUFYPy%2BsxWDaEvK6C%2FeHe72VP2uOwRqC0IqOsKVhHzon2a&X-Amz-Signature=3ee6197be71352f48c91eae0aef4817cd75a5e96893d7d4a500d88d1a7731788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM2RCIEG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T194340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgnjnAaLJ9gMILw9GwLWmGyiEBIaqypV%2BelB9kyKehdwIga5%2Fj0tNf0bKQ9eVJAjahcB%2BispILibUfDbmy3HvaWUYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKQ%2BEw3fCuv7xWfeircA4RVEcAGQxJF9L17556sQuIFddPoXstnNADpZM2F9orHU2ba5p2UKCXAyN%2B%2BNxdmzQGsdIgzxrCw9cKq0K06NYNakNoo40qwYAoA2L3gXn7ff9f2ECTWCi1%2BC%2FBuVH2FDJToidbQuDFJlcFuqj1SmcIRPHHCK9aKHorBRYbY9XxRiFS9QsIN9NFIkLiWin%2Fm%2BLfUSdrSW%2BR7rhVzjF4SUc2WAY%2FgIotwxpDHeJZwIxR5tXLpUa6yqpMX2bfXyXfDDDI2QklKh%2BBoHQMVSjNblQ5qsHJU14GDNxUutKB08%2F86dRuf69ZRgWuJuHB9scPRv4ecmvsfvSTw%2FanB4z97yMZgyFwHeaAbMq7G0Upv2Ysx043InTfDO7inO1AyLoPPqRhZrl56eDiVd1HfiEQZEayofX0ARF08MPoGSCUIJYD0zY13UGsBewkgzOvmhLaIE9Jm7V86aHeDYpwRKF3GCcTfUhyUyG3%2BoSqMUR6gMJn8reH%2F9RjMP2MZxQXBu2wXQNVxJgWkGxzhi7ZxKOlpK4LD%2BvpY9GenHnBVr19iXTBAIgwY7B26SlMfFxAI3xeCfnSvVR7FzuBPKvX9tribCun4F%2FWo80PpJY5NI4RmqDUOJ%2BNbQEMFmSATzDLuMM6LjMoGOqUBAZja8c9RNt5D4bKXO3k1KMSO%2BTwC8W2777txnw4yBWJVA9vDQ1c%2FpotNklgQkseFg1bqanq7Pxb9esgKbhmyk4nXM2yZeQN4x0OhFRYiZQG0iGDwrAH5SVD6aZx65t3Ka4FIxuiIVo54RpDMQm6xdX9BiOzaFTY7A350Znzg42JXVEkUFYPy%2BsxWDaEvK6C%2FeHe72VP2uOwRqC0IqOsKVhHzon2a&X-Amz-Signature=0260e70f15c61958e2f64dd392ca8c68acc149b7c1587591f94e8e3470d2c72f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

