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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAZDM74O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXpdsOQFTXxEPfO0GN%2FrgjlHCYkdMj1ToYALU1yMUK0AiEAjB9QsFaWJ6FtKhpYg00algFBlDObDKn6qAJKYwx4t8wq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHfGOvzv0lqQZbfecircA6TM3Z7n%2B09Ia1%2FmK0U52qra7EBi0YO966T3F%2B8e6aTtZ7Nb0BC%2Bapx0emQ4Nynb2DrNbBgm20GDP0AlXfDBljrWEE%2B3BA%2BJd2vcKUHsBLUDgeqcL9RuN%2FLglBJgq5BMjxvp%2BV3bEfWiZOt3G%2BFUsXOKk7DXvkITkxI3sB0BpJXzw3ImDgVQTD3UvdjR3PO7IOX7S%2B8gHMhluwuk54h1Cr2xBHF4Q2VOECzDbVBqEVLYigESs1%2BynbHOdAcGNGr4BUujxgZSox4a9WpjbKd0wJP4S4mj3UU73l8e9vgnPTwFFClhZ%2FqCmXVPewDNc6VCRQHknTj68ORJAEymW46iwKaHZaJ9CsOuRZEBbv6zjsUck95HeyNPsMD2pV5xhhEW3BsVYSHkviMnSkG0iT3Ce8LDKSgPcXiszrge4blR8%2FozHqCMG4ylh8%2Bgn%2F3%2B%2Bi8kYmqVmvTqD8KzLbd1Z4KwiMZjTPyAs%2BjhOGmCJf8HadPSShBKhYpKMVQH%2BEb3FKL0FuyjCWp4DoLoFZbeSkBZH9737PN06fUarF7qTB6Bn5f7%2BOgzkshMYF9OORFqH88WWjPVa2R5Zx8nWvfTvEbFLSWBPDOOZCV3%2FBwzLARSC8AdcE%2BE2gF5k%2FNJvb3UML3GisoGOqUBLOYo82UqBxxaTi1tAuGGEPcGiSJadX6CW0%2F5xmuArF9FKjuDd0nzZRcMiDQdW%2F5p38n%2FLkVPKytYYywAtRbX61%2F4jqrL23IrAypVqlkkWSxjnYcAJ5gfEIp3WqqfB7IUlFpKVJ47bjX1jMsK8tyqcU%2BFSjQYwTTztT8dOLdmbfQEE8yMSPhrp3MpewZuaktgYLEqczTVNm%2BSYKBAB3AhAUrpy4F9&X-Amz-Signature=0d08a3bd2cb3fc172105e1f9be510d0e5c4a408a6fb3042ace42ddd2969a8422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAZDM74O%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXpdsOQFTXxEPfO0GN%2FrgjlHCYkdMj1ToYALU1yMUK0AiEAjB9QsFaWJ6FtKhpYg00algFBlDObDKn6qAJKYwx4t8wq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDHfGOvzv0lqQZbfecircA6TM3Z7n%2B09Ia1%2FmK0U52qra7EBi0YO966T3F%2B8e6aTtZ7Nb0BC%2Bapx0emQ4Nynb2DrNbBgm20GDP0AlXfDBljrWEE%2B3BA%2BJd2vcKUHsBLUDgeqcL9RuN%2FLglBJgq5BMjxvp%2BV3bEfWiZOt3G%2BFUsXOKk7DXvkITkxI3sB0BpJXzw3ImDgVQTD3UvdjR3PO7IOX7S%2B8gHMhluwuk54h1Cr2xBHF4Q2VOECzDbVBqEVLYigESs1%2BynbHOdAcGNGr4BUujxgZSox4a9WpjbKd0wJP4S4mj3UU73l8e9vgnPTwFFClhZ%2FqCmXVPewDNc6VCRQHknTj68ORJAEymW46iwKaHZaJ9CsOuRZEBbv6zjsUck95HeyNPsMD2pV5xhhEW3BsVYSHkviMnSkG0iT3Ce8LDKSgPcXiszrge4blR8%2FozHqCMG4ylh8%2Bgn%2F3%2B%2Bi8kYmqVmvTqD8KzLbd1Z4KwiMZjTPyAs%2BjhOGmCJf8HadPSShBKhYpKMVQH%2BEb3FKL0FuyjCWp4DoLoFZbeSkBZH9737PN06fUarF7qTB6Bn5f7%2BOgzkshMYF9OORFqH88WWjPVa2R5Zx8nWvfTvEbFLSWBPDOOZCV3%2FBwzLARSC8AdcE%2BE2gF5k%2FNJvb3UML3GisoGOqUBLOYo82UqBxxaTi1tAuGGEPcGiSJadX6CW0%2F5xmuArF9FKjuDd0nzZRcMiDQdW%2F5p38n%2FLkVPKytYYywAtRbX61%2F4jqrL23IrAypVqlkkWSxjnYcAJ5gfEIp3WqqfB7IUlFpKVJ47bjX1jMsK8tyqcU%2BFSjQYwTTztT8dOLdmbfQEE8yMSPhrp3MpewZuaktgYLEqczTVNm%2BSYKBAB3AhAUrpy4F9&X-Amz-Signature=1737330b15b14a4b2b47d622e21c8589e4850fb9565538fdcc68e1b8d5c3673f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

