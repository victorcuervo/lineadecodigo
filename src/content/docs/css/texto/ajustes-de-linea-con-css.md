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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYNOSD3V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMjqkGnUjpAIDhMbApYCpBH4aFHzXtkNnrmTES3f%2Bi%2BAiEAto0X2wsX6JbeE6cdSRthy47cZKGEqKUk9zPkZuTF1Akq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPsAuqoEBrc4FGw1qSrcA1qUOsooXbfS3f6SoKq0GpN9eqGDJRfGQaRIe5dCVzp2Ik0OD2w1s7X6LNlIQa7mieVTOM9TJRscToTWlrZjk79MPC22m4STOK9odV%2FU4vXMl0BErMj%2BMnu1LORutG%2BEROlRYEY1ASeN%2BT3khPCdGzOYBoGsQF1ReKyc9HvhZvcWQUOyfPQKA7kvnE9eKkxwQ0UlcLiuxAXz7zV1I8RyHfe5LdSdB5YPYlSnewupHG%2FcphWULTbKODxdu%2FAAag8wnO5E9RJfEnpkP1VTB%2B3AAKRglzp9IFjOfRo3VTkKbCbIcpnRuHA8IRq8X7%2BK5PXrqbtRYAlYaQrOMceHYVFRFIalh8AN1pPBNuSztWyylOLOYd6Jjdni04UV9FUjecBbXIVCZlQYXA5VqdSyVPVPsCkqOf1yiv%2FRbUOqpKGHVIyQfmyjFlYRwWtm5CJblSJMXWWgvGRWP5ofSZgkY%2Bjfp9kvDLoiV%2BJ6iF2WeTd6%2FWy4ixMOTfbcewbTil9n%2FdxuoxvQ6oNvFzcpOlxwJaEejW3CmK4gXuOHngFpVGMyCZcf7tNnt1h0xo4CHsNv8wi6%2BIRyRMCaPdcWCh5HcfD%2BvF9ajOPMOUx4%2BND3rQkvDYi7ELnWaVVBtFXJAslTMK2XiMoGOqUBuNfRksK7T2rAHL6yMRfC8uAAeK6aNgM1ObV5YfG8JvcWHPnktVLq7zA0ZITl40A73qWuYNnH6CDkj2HPM8H46p0Dia%2Fwc%2BAmN6%2Fzsxnva3UohYocgry9b6WJsuw5wc0Sxyg9HV4vJcAxCk%2F5mCkHg4FD4zKC7x2u%2BO8kkcYJfCgG1zKrkiynSzQvYh3RhFw%2BVhH1FtGrCLSOp6ZMzoPDqTiCFY6a&X-Amz-Signature=a54c3b565799d2cdedfd91ff293fbe5c23a56c9bf598c58bcde3210bb9edc9b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYNOSD3V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMjqkGnUjpAIDhMbApYCpBH4aFHzXtkNnrmTES3f%2Bi%2BAiEAto0X2wsX6JbeE6cdSRthy47cZKGEqKUk9zPkZuTF1Akq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDPsAuqoEBrc4FGw1qSrcA1qUOsooXbfS3f6SoKq0GpN9eqGDJRfGQaRIe5dCVzp2Ik0OD2w1s7X6LNlIQa7mieVTOM9TJRscToTWlrZjk79MPC22m4STOK9odV%2FU4vXMl0BErMj%2BMnu1LORutG%2BEROlRYEY1ASeN%2BT3khPCdGzOYBoGsQF1ReKyc9HvhZvcWQUOyfPQKA7kvnE9eKkxwQ0UlcLiuxAXz7zV1I8RyHfe5LdSdB5YPYlSnewupHG%2FcphWULTbKODxdu%2FAAag8wnO5E9RJfEnpkP1VTB%2B3AAKRglzp9IFjOfRo3VTkKbCbIcpnRuHA8IRq8X7%2BK5PXrqbtRYAlYaQrOMceHYVFRFIalh8AN1pPBNuSztWyylOLOYd6Jjdni04UV9FUjecBbXIVCZlQYXA5VqdSyVPVPsCkqOf1yiv%2FRbUOqpKGHVIyQfmyjFlYRwWtm5CJblSJMXWWgvGRWP5ofSZgkY%2Bjfp9kvDLoiV%2BJ6iF2WeTd6%2FWy4ixMOTfbcewbTil9n%2FdxuoxvQ6oNvFzcpOlxwJaEejW3CmK4gXuOHngFpVGMyCZcf7tNnt1h0xo4CHsNv8wi6%2BIRyRMCaPdcWCh5HcfD%2BvF9ajOPMOUx4%2BND3rQkvDYi7ELnWaVVBtFXJAslTMK2XiMoGOqUBuNfRksK7T2rAHL6yMRfC8uAAeK6aNgM1ObV5YfG8JvcWHPnktVLq7zA0ZITl40A73qWuYNnH6CDkj2HPM8H46p0Dia%2Fwc%2BAmN6%2Fzsxnva3UohYocgry9b6WJsuw5wc0Sxyg9HV4vJcAxCk%2F5mCkHg4FD4zKC7x2u%2BO8kkcYJfCgG1zKrkiynSzQvYh3RhFw%2BVhH1FtGrCLSOp6ZMzoPDqTiCFY6a&X-Amz-Signature=fd5ccfeeb40b5869c3bc9744ca917f1eb64a0a7dc78ee756dcb5f001b4a04b31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

