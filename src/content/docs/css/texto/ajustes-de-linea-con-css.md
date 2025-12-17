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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPSMAF4L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx8xbVywNkjGgsGCWOCWFrOfiZXCxCYXz%2Bh%2FarElUIkgIgTU6z0tajJlPyrUOXJGwg%2Br4qLqVVbIyflEKiTCugWQIq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDH%2FPHT1ktRJ1Y2%2FM8ircA6XUCfoz9b0s5vBiUFIAKD0PpsDRgrAsA%2FO7VFVwWoLkKddWvAYqjoHRzPODgJHIiKSNJac1aoKitUlFDFeuaqt2nM9uDa8dl%2FZ14WwM9pipn7IZ%2FJlbws3ijt3b00zBSoHfDwJhhWQ0%2Flvd1ZuaObUn96OZqBf8HFeOU6bey%2FRAOOiV0OmTqymg25KowbpOcgRPjfx2W7ozrVE4KV%2BJdIfMQ%2BFhmEq3oQjixPx0NQjkejnc53O3iLace2PrKNuFD%2BE%2F%2F6uoOlaeOFl9sfVDYsUBcvamUfXWq1puRgIQb7Oe91mvyUWvTcciabnvTXBuEXC1qbUh3417ZP5FIy1IFAS9Y%2FALlk0qw9PjskP90zZ0OiYhp5KL0CkqCIc%2FaLpurX%2Fywfk02CJcUaGVgDHQKY0fHt%2B%2FC5SjkFG8OpmLHPv4Ijo0RCKiXjB%2BQ%2Fhqa1dTBsvCNa0Pr4KVMYG9tXPRUybC2NO4diMyHJdea%2FyIU8Pe8UnsthhYEXoBEteBU1GWVfC%2BfJyNm1m%2BcN%2F1RHr1G4yCQWBXUJ1pOFrllzlMJbNtAecf0CRgOUFWcS4B0o4rQwUJfqKDJTTMEKW4ncei19nEl3q%2Bm3rHOFP%2BDlkHnBHzgszEAbG4O6ew53iWMNzpiMoGOqUBkpjcgUu8gPE%2Bh8GQNltA%2BKFvfsu3d1b6JgycJCPaYW%2BFXNgahyeihURPSK4CwAyCy7wBsRE1KHFbwqQNXrTbUez6b2%2BUIxLWLGp4p2z%2B6O5LegLmpJrnjL%2FVVt1av2kCsz8mvKRwwhIL4IgfYReJ%2Fcy87a4yCS5XuRRW8l%2BBIt%2FhlDFTZMn4E2pOgDu5N9xX6Cl4w%2F3cv1bto5g7106LNcGHbATD&X-Amz-Signature=ae0951abc6c87ff137d94f86286989ec18634a39bdcef7e408e3dfe51b3e490e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPSMAF4L%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx8xbVywNkjGgsGCWOCWFrOfiZXCxCYXz%2Bh%2FarElUIkgIgTU6z0tajJlPyrUOXJGwg%2Br4qLqVVbIyflEKiTCugWQIq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDH%2FPHT1ktRJ1Y2%2FM8ircA6XUCfoz9b0s5vBiUFIAKD0PpsDRgrAsA%2FO7VFVwWoLkKddWvAYqjoHRzPODgJHIiKSNJac1aoKitUlFDFeuaqt2nM9uDa8dl%2FZ14WwM9pipn7IZ%2FJlbws3ijt3b00zBSoHfDwJhhWQ0%2Flvd1ZuaObUn96OZqBf8HFeOU6bey%2FRAOOiV0OmTqymg25KowbpOcgRPjfx2W7ozrVE4KV%2BJdIfMQ%2BFhmEq3oQjixPx0NQjkejnc53O3iLace2PrKNuFD%2BE%2F%2F6uoOlaeOFl9sfVDYsUBcvamUfXWq1puRgIQb7Oe91mvyUWvTcciabnvTXBuEXC1qbUh3417ZP5FIy1IFAS9Y%2FALlk0qw9PjskP90zZ0OiYhp5KL0CkqCIc%2FaLpurX%2Fywfk02CJcUaGVgDHQKY0fHt%2B%2FC5SjkFG8OpmLHPv4Ijo0RCKiXjB%2BQ%2Fhqa1dTBsvCNa0Pr4KVMYG9tXPRUybC2NO4diMyHJdea%2FyIU8Pe8UnsthhYEXoBEteBU1GWVfC%2BfJyNm1m%2BcN%2F1RHr1G4yCQWBXUJ1pOFrllzlMJbNtAecf0CRgOUFWcS4B0o4rQwUJfqKDJTTMEKW4ncei19nEl3q%2Bm3rHOFP%2BDlkHnBHzgszEAbG4O6ew53iWMNzpiMoGOqUBkpjcgUu8gPE%2Bh8GQNltA%2BKFvfsu3d1b6JgycJCPaYW%2BFXNgahyeihURPSK4CwAyCy7wBsRE1KHFbwqQNXrTbUez6b2%2BUIxLWLGp4p2z%2B6O5LegLmpJrnjL%2FVVt1av2kCsz8mvKRwwhIL4IgfYReJ%2Fcy87a4yCS5XuRRW8l%2BBIt%2FhlDFTZMn4E2pOgDu5N9xX6Cl4w%2F3cv1bto5g7106LNcGHbATD&X-Amz-Signature=9787ead6adcb87e9e3e00201ed0bf8259f3fec5d3cfc4689e891d88982cba63d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

