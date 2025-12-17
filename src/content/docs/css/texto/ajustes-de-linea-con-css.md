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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X72B3US%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKbtmNcsfKxyA2DjZCirUwqh9wKVt316ekAElnkTw95AiEA3vgi1l19rH7CX0ZiMu%2FZCMVjeJLxh5dLPKzd7mvDl5Iq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPnpmY5yzPn0Cq%2Bh8ircA3tzIUrIymVKYLj32TPxfrkUDflmUzOCnBxL2CEmFCC0GWk3cq3BdIIfBg3PGv6%2BKvFkmubTkGxYHQKtIKi9S2y2rr8fuz4s5HmefExbsTd22hYfVuvmbIraQglhstNgkoJXFPJxOkGIghiSzTN2XIMqdkVMfKRwUTtfaEBI2J6Jblz5tWVnoyh302Cp21QtNZLu46tHz2AqHbfMEvDp8EjB5gUpW%2F8M486DNH9ISrs9yZaw6Oz41rzymHFlaqv0gX2vBzPjbn8A6MPEaRecijOiDZLP%2FghqYyb30bnvoGjgUYewnvCK46tOvDl22oyPjmC%2B7KhEHbiYQBfcY7F5%2BxOlzzhcW2NuBWXlFApMUMM3NajwLWOdBu%2B3CgdlZqvFfHFqzUfz31YvmOu%2F%2BJsSjyMLDX2l3rxtDP5jAcHuElKEhJ%2FWCTU1TOLVK89O87NuDGy7epBzgIyXH0vSQ%2FCYhtjrihbfz2zkPWiPp4EBsnTq0GKZ5udg9Tl1cOylJOv%2F0%2Fa8BYVlU2NpXHRL0tR48KW3O3qiiJ8DYYLgvqVw53sdzcCPdylFqugnvmCZDfOMB%2Fo16L%2FZJLdjm%2FtVpye%2FU7BcC6gVTkqlwLxK6Es1Fxi7EZtuwVzqEI%2F%2FPSJCMI6PisoGOqUBkPRQsV3Ul2Ydsx2mlj%2F093I9PtpLAUawGcNDH%2F%2Fx7cL3mFGGMlxk1Za4x13zn%2Bl1HwlaFyJYtmSs02RI8oU89skhbq0FZjtTM5TyvQ7qOIc1RBoSPgu%2FQjiIyV9GhQKOK%2Fj%2BMgASxsiYyzzWkm2NLrqO4IOuge%2BOXbjSv8JmeBfR3HtCbYKfWjE4%2BfJQmf%2BUhAxXTl3%2ByUSgmvAWhfz3%2B3yk0kea&X-Amz-Signature=e4fdcfcd37c3cb42119499493e895843a6269db7a783144931e40c33b4e36a4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X72B3US%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDKbtmNcsfKxyA2DjZCirUwqh9wKVt316ekAElnkTw95AiEA3vgi1l19rH7CX0ZiMu%2FZCMVjeJLxh5dLPKzd7mvDl5Iq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDPnpmY5yzPn0Cq%2Bh8ircA3tzIUrIymVKYLj32TPxfrkUDflmUzOCnBxL2CEmFCC0GWk3cq3BdIIfBg3PGv6%2BKvFkmubTkGxYHQKtIKi9S2y2rr8fuz4s5HmefExbsTd22hYfVuvmbIraQglhstNgkoJXFPJxOkGIghiSzTN2XIMqdkVMfKRwUTtfaEBI2J6Jblz5tWVnoyh302Cp21QtNZLu46tHz2AqHbfMEvDp8EjB5gUpW%2F8M486DNH9ISrs9yZaw6Oz41rzymHFlaqv0gX2vBzPjbn8A6MPEaRecijOiDZLP%2FghqYyb30bnvoGjgUYewnvCK46tOvDl22oyPjmC%2B7KhEHbiYQBfcY7F5%2BxOlzzhcW2NuBWXlFApMUMM3NajwLWOdBu%2B3CgdlZqvFfHFqzUfz31YvmOu%2F%2BJsSjyMLDX2l3rxtDP5jAcHuElKEhJ%2FWCTU1TOLVK89O87NuDGy7epBzgIyXH0vSQ%2FCYhtjrihbfz2zkPWiPp4EBsnTq0GKZ5udg9Tl1cOylJOv%2F0%2Fa8BYVlU2NpXHRL0tR48KW3O3qiiJ8DYYLgvqVw53sdzcCPdylFqugnvmCZDfOMB%2Fo16L%2FZJLdjm%2FtVpye%2FU7BcC6gVTkqlwLxK6Es1Fxi7EZtuwVzqEI%2F%2FPSJCMI6PisoGOqUBkPRQsV3Ul2Ydsx2mlj%2F093I9PtpLAUawGcNDH%2F%2Fx7cL3mFGGMlxk1Za4x13zn%2Bl1HwlaFyJYtmSs02RI8oU89skhbq0FZjtTM5TyvQ7qOIc1RBoSPgu%2FQjiIyV9GhQKOK%2Fj%2BMgASxsiYyzzWkm2NLrqO4IOuge%2BOXbjSv8JmeBfR3HtCbYKfWjE4%2BfJQmf%2BUhAxXTl3%2ByUSgmvAWhfz3%2B3yk0kea&X-Amz-Signature=885eff442886ab9d4152d63e1d41c781380be57dfb4454dc4c9ae8d067ff98d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

