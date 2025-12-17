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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHZ7N4BS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMftEEMMxaZd%2F3tj%2B9g8AayV8CiM7otTW%2FpK0X2BiuuQIgYRY1FRWVWqoIJv2evMfLPRgb9p99Iq0Vp14D3irb4H4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNvhjrzAO3BBy8ImNircA7ujY4aCxBpuimUUVv3Na1%2FKjZB1YKZ9O57T9ZlVMeADyUsJ3QPtF92XL81L13d6BSAN72Vr2B8yG2BapiLbS0NObaNB0uA6hSLIdngLWJMdTN01zv6wIwVCwMrWgo13MkU%2FYqZv8BI0kN09%2FNGvqIKopBfdl%2F7pVsraD1efWQ3AfPKHzfXpu0XkAzxyFVGnY300V7aTvOJCdgv8gynfY2MQhwKM3ARRfJ9H82AQ3RIVps8qAf9JKLY4MFEN42sWcjXHd3ab5LrxTMOGFBbh4bHLcu64BxTH8LrLXTpDwjLPXuxwdASmxzsj7%2BAjfeL8Wp%2BnhGixGI4lxqHRm2pbKJvcMrAA302Jmv1aa1QKI43GHGJxB%2FOLgrbw4KA2Qb1PLfPvtKkD%2FvVBfU0vjTGN%2Br65GUgaHC%2BVuKL%2BEdgtLNdbytRXTb9j%2BdYcjKmS41CTbipSm8b8yE7mIhBaIR4UZP450fwBLznCzBY4M9B7Lwmg6K%2BddR%2FuzBDGeHuG4gIKZ%2F%2F3q2R6%2FvRsSB8btiR1FATE2BNKhXNIDikifPGQBTW7zU4m3qJMiMa3b9px1v86Tz01tqpgl2FPFkn3jeSfND1g%2FZUTmRWVZbvpdqY3K6hh7MVJtmTps6O%2FnkRtMKvvicoGOqUBg5LXaxJ3ZM8G4kRzjTIjcmIpM%2B4Nuat%2FmjgxRyQsC5rdQo7O1aEz9MrJ26r2tsqYtO1jmvZQdfI44WBiAAxAeGj5URMDj3zGV8dfd8AoPWZCBP47dzI%2Bte51VpXzdtnQxQ9fU60%2BUU%2BR1oRM01BawnDrdlsqp18imwR0XksN%2F4PnxoQ%2FrYAtKvfFYzmLxYCk6xgPLI1OMkr8A4PMGXsWV6jGcdHM&X-Amz-Signature=7f439023ac51502155aa547edbb582d5f1ba06f1d2752d9a7a9a1ce9bda3c563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHZ7N4BS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCMftEEMMxaZd%2F3tj%2B9g8AayV8CiM7otTW%2FpK0X2BiuuQIgYRY1FRWVWqoIJv2evMfLPRgb9p99Iq0Vp14D3irb4H4q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDNvhjrzAO3BBy8ImNircA7ujY4aCxBpuimUUVv3Na1%2FKjZB1YKZ9O57T9ZlVMeADyUsJ3QPtF92XL81L13d6BSAN72Vr2B8yG2BapiLbS0NObaNB0uA6hSLIdngLWJMdTN01zv6wIwVCwMrWgo13MkU%2FYqZv8BI0kN09%2FNGvqIKopBfdl%2F7pVsraD1efWQ3AfPKHzfXpu0XkAzxyFVGnY300V7aTvOJCdgv8gynfY2MQhwKM3ARRfJ9H82AQ3RIVps8qAf9JKLY4MFEN42sWcjXHd3ab5LrxTMOGFBbh4bHLcu64BxTH8LrLXTpDwjLPXuxwdASmxzsj7%2BAjfeL8Wp%2BnhGixGI4lxqHRm2pbKJvcMrAA302Jmv1aa1QKI43GHGJxB%2FOLgrbw4KA2Qb1PLfPvtKkD%2FvVBfU0vjTGN%2Br65GUgaHC%2BVuKL%2BEdgtLNdbytRXTb9j%2BdYcjKmS41CTbipSm8b8yE7mIhBaIR4UZP450fwBLznCzBY4M9B7Lwmg6K%2BddR%2FuzBDGeHuG4gIKZ%2F%2F3q2R6%2FvRsSB8btiR1FATE2BNKhXNIDikifPGQBTW7zU4m3qJMiMa3b9px1v86Tz01tqpgl2FPFkn3jeSfND1g%2FZUTmRWVZbvpdqY3K6hh7MVJtmTps6O%2FnkRtMKvvicoGOqUBg5LXaxJ3ZM8G4kRzjTIjcmIpM%2B4Nuat%2FmjgxRyQsC5rdQo7O1aEz9MrJ26r2tsqYtO1jmvZQdfI44WBiAAxAeGj5URMDj3zGV8dfd8AoPWZCBP47dzI%2Bte51VpXzdtnQxQ9fU60%2BUU%2BR1oRM01BawnDrdlsqp18imwR0XksN%2F4PnxoQ%2FrYAtKvfFYzmLxYCk6xgPLI1OMkr8A4PMGXsWV6jGcdHM&X-Amz-Signature=57f720c90b000fded63437198b58ea18c23118719e736717fea892d2cca7f43c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

