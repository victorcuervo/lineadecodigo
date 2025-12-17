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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXTMJDNY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDe89WxvcHJxdtHLaggnFBmEBQvKAY0J1LPrrC0attNUAiEAzp4UZ11YVC73eXlI35TkUORM%2Fwva7yvcRBDvoRz%2BFjMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDELQfc87q0sZ1mHOZSrcA5XD6%2B9Pcbhy%2FxJoaIXRlzRQcK7a3%2Begk1gjX3JGDcYVmy4%2BgWLAVF%2ByhVwi3%2FpjqdCLseYtO9QG3EqIuOfvTzhQA%2BzegH1HlqoDz80xo73PQPpqwPoemya3ssFf%2BfocK18fGD46UoHNNBCn73RZSvtyhhG3dQPb0KbGfTdKAd5WaDAsP%2F5%2BrJuOAAISkhBLRlpi3jzZ0V9RxUiDlJ35l%2F8ZlgSBDQTTUuZryKL7E41rJFMyFiNVCAZSPLoyjppa7E%2FkDlUOaSPFNRaaK%2Bdm3wLdfurn3nMuuZ%2F3jsoH%2FUbWZ1PFRFhXfXu%2BFZuDlX%2FWiaXLUEX%2FqbqrJudw0JmW0d2zwfsxsrMc3pK39cK5gxJWk0zIbM%2BgAvm7lObM%2BeU%2FZ7cMaN%2FdfAz1Md21HP7hB92tYBEmhpxYN0KnqHIbs1NSGCNl1hCmOXxb5bDKKh3J9Ho83sbZzuS5If2G5WXxCI0BCJqC7wXDeVPSEUi361jDJgT2j%2FR4dU5t6PWQDmKI%2FTGVlXBz%2FA2xCXuT8ZPw6qrVHjnvIWRXyP2bfNl8GUWowPRfC2OWnbUR8fVxZOTh%2B%2FqOnFtDD3vwCq9%2Fo7gXXBeaDxNMkFH%2BlFG5wd6iwLHv0uKgs8d%2BZR4J%2FNLOMPGViMoGOqUB696K30EBfpnMVBKN8mxV4o6xOMKfNdVJ8f1i7vWCjFArZZUAJ0dnJWD1m8L10qvfFgf6djCCKd7Jsyvpr4tptPgu8%2F50ghTlyUNs9wk9UaNJkejJL6MCDhLmKg9MgqUiZVONQ1pquBwqKDxZ6xW1hKQoejdKvC59%2F8NL156t0MQtAnp0Q1O6gKljm8robybDDnOrf0LcOhVt%2FrIx0bwVw4VXQH6U&X-Amz-Signature=a54f5be0aa7d9cc5e9cfc166a0666e78a1b0e551ab9c25f522aa28bedc96b67d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXTMJDNY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDe89WxvcHJxdtHLaggnFBmEBQvKAY0J1LPrrC0attNUAiEAzp4UZ11YVC73eXlI35TkUORM%2Fwva7yvcRBDvoRz%2BFjMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDELQfc87q0sZ1mHOZSrcA5XD6%2B9Pcbhy%2FxJoaIXRlzRQcK7a3%2Begk1gjX3JGDcYVmy4%2BgWLAVF%2ByhVwi3%2FpjqdCLseYtO9QG3EqIuOfvTzhQA%2BzegH1HlqoDz80xo73PQPpqwPoemya3ssFf%2BfocK18fGD46UoHNNBCn73RZSvtyhhG3dQPb0KbGfTdKAd5WaDAsP%2F5%2BrJuOAAISkhBLRlpi3jzZ0V9RxUiDlJ35l%2F8ZlgSBDQTTUuZryKL7E41rJFMyFiNVCAZSPLoyjppa7E%2FkDlUOaSPFNRaaK%2Bdm3wLdfurn3nMuuZ%2F3jsoH%2FUbWZ1PFRFhXfXu%2BFZuDlX%2FWiaXLUEX%2FqbqrJudw0JmW0d2zwfsxsrMc3pK39cK5gxJWk0zIbM%2BgAvm7lObM%2BeU%2FZ7cMaN%2FdfAz1Md21HP7hB92tYBEmhpxYN0KnqHIbs1NSGCNl1hCmOXxb5bDKKh3J9Ho83sbZzuS5If2G5WXxCI0BCJqC7wXDeVPSEUi361jDJgT2j%2FR4dU5t6PWQDmKI%2FTGVlXBz%2FA2xCXuT8ZPw6qrVHjnvIWRXyP2bfNl8GUWowPRfC2OWnbUR8fVxZOTh%2B%2FqOnFtDD3vwCq9%2Fo7gXXBeaDxNMkFH%2BlFG5wd6iwLHv0uKgs8d%2BZR4J%2FNLOMPGViMoGOqUB696K30EBfpnMVBKN8mxV4o6xOMKfNdVJ8f1i7vWCjFArZZUAJ0dnJWD1m8L10qvfFgf6djCCKd7Jsyvpr4tptPgu8%2F50ghTlyUNs9wk9UaNJkejJL6MCDhLmKg9MgqUiZVONQ1pquBwqKDxZ6xW1hKQoejdKvC59%2F8NL156t0MQtAnp0Q1O6gKljm8robybDDnOrf0LcOhVt%2FrIx0bwVw4VXQH6U&X-Amz-Signature=e99f9d43b65000f85a6f48a72f5afacc9b778e388df17fd0821229e9965aacf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

