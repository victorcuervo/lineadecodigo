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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5JIWDMI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9UgRQQMQwlb2lmcDqjntXh5gxIrNf2MUu3TfTwABiowIgc5UMeW7a6PLJ6pg2GyOUUf45IBJv6AK%2F1ovXeO9O8agq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJbhMSR8AiqG%2BXn4wircA3Hhk7pYufLEyh7N%2B2%2FVto9VBukQVVcNDB7wk8CLqsYgW73bqM0Tv2FLXlI2K8klYyoBccCC0jW9jCh96oElLpN%2FPauZ4Z79gkOnQi8NQCQ%2B%2FUHrHHAb3hHXX2XTa1Ce%2FMYXflRGgzzuiy%2BK22BSkaiHZF46sYnvc%2FQKAx%2F2Zpynhu3jVBA7UMZXnEY3FniS%2Bz5v6jL%2Bc4BPf19dehP2Fx66WCjurAKdoydmInJ%2B%2B90TLDjwrgiFRF2xmnP8w%2BXw8RZCuH8dzpAGDWlUMNzmf5Bs%2BgwYMIOBU1QiuLqfNgJa9D0iw%2B1WUP34QPtn6%2FXDa5pnbdN89wzq70KOeR7l37teXj0U8Od6irZvNNbVbOSXLYb3sP5L3YEsoVWaKD1KCXLZ5bTAYicCP4W6u5cPksgvPs1pWuBDBJI7sAPm3ac%2BKdjg4ji1uaw7nrOZlrYToU8sZPsO87CY3xirLgQ5OMf8Txq8Sp%2FkvHhxPvA5x2I%2BhshFi5cwUv8Sm7PfNbufAVfBhg%2Fp7WLFMHKj70QeS5dx0jHEE2Vut3mZmDgnkTOYAJfE4XDfQVeBl6YN9Zwv49MmzaJvx2k2aLm8%2Fq7Hr7Stgjx2TQAjCQGBAxjVBfUDvsf3zhGoFvq7z4N2MLneh8oGOqUB0ErEV7j36GbJCXILAFa4ExM0jt1cH8M6Xo4TYROehBoNa74Y29jlWokBhkpx90l%2BCfYLJABcID0zdh8M1IrzHI8GdkwknVL4gFQCtxI5%2B3fuQyW8Bbc4ZGUCGWjXKVdjifpQKY%2BkvlxFnaDfaM%2BdYKUtcO%2F2uWtKNH4zW6gd3PpKrBH%2B8txTOFXg6wP9cm%2FWiaiYnfiyQr9MPsg11OHVbsgE7X2u&X-Amz-Signature=a9959f7beed41a6875159cdfdb714008953f26cff98987c3842045731060d916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5JIWDMI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9UgRQQMQwlb2lmcDqjntXh5gxIrNf2MUu3TfTwABiowIgc5UMeW7a6PLJ6pg2GyOUUf45IBJv6AK%2F1ovXeO9O8agq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJbhMSR8AiqG%2BXn4wircA3Hhk7pYufLEyh7N%2B2%2FVto9VBukQVVcNDB7wk8CLqsYgW73bqM0Tv2FLXlI2K8klYyoBccCC0jW9jCh96oElLpN%2FPauZ4Z79gkOnQi8NQCQ%2B%2FUHrHHAb3hHXX2XTa1Ce%2FMYXflRGgzzuiy%2BK22BSkaiHZF46sYnvc%2FQKAx%2F2Zpynhu3jVBA7UMZXnEY3FniS%2Bz5v6jL%2Bc4BPf19dehP2Fx66WCjurAKdoydmInJ%2B%2B90TLDjwrgiFRF2xmnP8w%2BXw8RZCuH8dzpAGDWlUMNzmf5Bs%2BgwYMIOBU1QiuLqfNgJa9D0iw%2B1WUP34QPtn6%2FXDa5pnbdN89wzq70KOeR7l37teXj0U8Od6irZvNNbVbOSXLYb3sP5L3YEsoVWaKD1KCXLZ5bTAYicCP4W6u5cPksgvPs1pWuBDBJI7sAPm3ac%2BKdjg4ji1uaw7nrOZlrYToU8sZPsO87CY3xirLgQ5OMf8Txq8Sp%2FkvHhxPvA5x2I%2BhshFi5cwUv8Sm7PfNbufAVfBhg%2Fp7WLFMHKj70QeS5dx0jHEE2Vut3mZmDgnkTOYAJfE4XDfQVeBl6YN9Zwv49MmzaJvx2k2aLm8%2Fq7Hr7Stgjx2TQAjCQGBAxjVBfUDvsf3zhGoFvq7z4N2MLneh8oGOqUB0ErEV7j36GbJCXILAFa4ExM0jt1cH8M6Xo4TYROehBoNa74Y29jlWokBhkpx90l%2BCfYLJABcID0zdh8M1IrzHI8GdkwknVL4gFQCtxI5%2B3fuQyW8Bbc4ZGUCGWjXKVdjifpQKY%2BkvlxFnaDfaM%2BdYKUtcO%2F2uWtKNH4zW6gd3PpKrBH%2B8txTOFXg6wP9cm%2FWiaiYnfiyQr9MPsg11OHVbsgE7X2u&X-Amz-Signature=33556e45ab19511ec17ff4b4a54589371d66e83e32e9fdc81e546ca3fe43dde4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

