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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVDVWWJN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FPMkFUi4PHTlTJBwCGcdsp8sRM7T%2FvZAaerQTw5dxDAiEAsZ0cRAgYFK5GpaMIsqGR%2FNODKl8ZnnkaOhdPQaBKxboq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB9Kw5W4GaEzM8y7jCrcA0On5ZwAEmlpdEN5tluuYq5O%2BT5wKzvYq%2BtyZnRjsDCNl682sYfAbELPOoIdZVYJMyoUgoXYva0%2B5zZamG5c2fqi0zoeYiGIIrwzVgg%2B9spXOvZHUNT6As9%2BvcW4CAFsQPALrcprAAFa8pPwtB3ODch9b8sWtmyBC44u5Rt6mGkiZ%2F1IzJjHVoa9BjWFcPCfdS%2FM4C%2BTrF%2BSR4HFyf8azZUlUL3nMAVcQ%2FS9D7QqA0HGp1ILGcxwWcXFsXeyiiH840FM5mNviOrmyXvdgsVtBDOsSUIF7f2MS98GhYWxI52tCzKaGwlCqpKsVgfLZKtgvBTa7mxvfu35%2FWHFjVaDaAwK7XDymiM%2FWgQgQbuKBrJ3V%2FIBRiLOZ1Dgv%2BYPAkDtljcodIW8%2Fs8B2%2FxEVnIASHHA0iPqfDhlPCoZEPGwnI%2Frt4YLjTWx9urZWNQx%2B0GL%2BBax3ofec7HhR91h3oNw5zNp2lrogiVI2GQNAHtAKjZEPFdYrrTuAytKaryyn%2B2V4g%2BHO58QUCNzks0FLa%2FXHEaLd5JoW0ANvhbevCEnhCtK1CNToz2POmi4hIHa5ATpagrA%2F3chHHp0wXR9wdqorMYsk6Pwcjh9JGJ8h2J3uY3MlyVr7WMdeUYLi9lUMP7eh8oGOqUByKpzDP38h06BEK1PhGXZ7%2F%2BBv2iboxwdK4o0qUKrTjfP6HplgEfHVoJLDDTupfYVeBBr14BavlkHi8Dt%2FFUrAUW4HjEwzieJV7VLMH%2FH5mcsdtRXgQvAEXLR8QF69T4JrQtnwdzI4SgWKh0RxK2IAZtu0CTH1%2Fuq%2BFdq27RrrHlSNHihTZKpVKuG9vVqefgI17dp%2F6MUAKxjamRRN0EuWqXC%2Fz3P&X-Amz-Signature=e63bb07170021472a43208de1b2e02efe4d577df90960c9a894132218af281ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVDVWWJN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA%2FPMkFUi4PHTlTJBwCGcdsp8sRM7T%2FvZAaerQTw5dxDAiEAsZ0cRAgYFK5GpaMIsqGR%2FNODKl8ZnnkaOhdPQaBKxboq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDB9Kw5W4GaEzM8y7jCrcA0On5ZwAEmlpdEN5tluuYq5O%2BT5wKzvYq%2BtyZnRjsDCNl682sYfAbELPOoIdZVYJMyoUgoXYva0%2B5zZamG5c2fqi0zoeYiGIIrwzVgg%2B9spXOvZHUNT6As9%2BvcW4CAFsQPALrcprAAFa8pPwtB3ODch9b8sWtmyBC44u5Rt6mGkiZ%2F1IzJjHVoa9BjWFcPCfdS%2FM4C%2BTrF%2BSR4HFyf8azZUlUL3nMAVcQ%2FS9D7QqA0HGp1ILGcxwWcXFsXeyiiH840FM5mNviOrmyXvdgsVtBDOsSUIF7f2MS98GhYWxI52tCzKaGwlCqpKsVgfLZKtgvBTa7mxvfu35%2FWHFjVaDaAwK7XDymiM%2FWgQgQbuKBrJ3V%2FIBRiLOZ1Dgv%2BYPAkDtljcodIW8%2Fs8B2%2FxEVnIASHHA0iPqfDhlPCoZEPGwnI%2Frt4YLjTWx9urZWNQx%2B0GL%2BBax3ofec7HhR91h3oNw5zNp2lrogiVI2GQNAHtAKjZEPFdYrrTuAytKaryyn%2B2V4g%2BHO58QUCNzks0FLa%2FXHEaLd5JoW0ANvhbevCEnhCtK1CNToz2POmi4hIHa5ATpagrA%2F3chHHp0wXR9wdqorMYsk6Pwcjh9JGJ8h2J3uY3MlyVr7WMdeUYLi9lUMP7eh8oGOqUByKpzDP38h06BEK1PhGXZ7%2F%2BBv2iboxwdK4o0qUKrTjfP6HplgEfHVoJLDDTupfYVeBBr14BavlkHi8Dt%2FFUrAUW4HjEwzieJV7VLMH%2FH5mcsdtRXgQvAEXLR8QF69T4JrQtnwdzI4SgWKh0RxK2IAZtu0CTH1%2Fuq%2BFdq27RrrHlSNHihTZKpVKuG9vVqefgI17dp%2F6MUAKxjamRRN0EuWqXC%2Fz3P&X-Amz-Signature=14932ec314e5e2ac336a133540f13af23ae258fad2654f1feffd1bd264c11ca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

