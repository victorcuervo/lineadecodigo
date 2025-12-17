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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MACTT3T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMDm4yHtmr%2BR6oWmOkcEBEhs1S4KdeM7e2vKRTHSbm5AiEAoyDGQNKAmMickJwTdp9Fy53uou2T%2Fu6OHhZLeEuZwQwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAydNIYvJS2k85Zq9ircAxntXQZtabBtyc7RkQD1itFS4F3VaKGjF7dIvX65X4eXMjlbRot0kWuUhJclXRb%2FtvAy4u6aRA8X4ztQ3li5W8GOMGCSFs9dR4my03nKrsWikGZk39%2FRQ8tHQaPGagatksrh1p%2BCC2K2oz93t3nkypVKoDulZCvjWQnc89g%2BVmB%2BPFoKQQ4SG4gr5wMNSp9vnl%2BN%2FmL%2Fl6%2FkZccRNyp290nEvk77gEbGxLOrpOzw5oDX8bATE88w%2BEdI85v89nokH7063TN%2FDXDRfGSv%2BHk9mAp9fkK9U6ewkoy3CM2iCW5ys6Co2tzalAR6R1baYi%2FufaN6EInS4ZsFw7KdlhWvIfv3X48rcVGO1IQYB6pNkJOUBxeT2Lbd8TkxyyYPqrKnZkhtHq1wxAfOrHGqmu1Kfk02MYD%2FQ7aTa1DqwnztWSti9CvFCBzL1eRbXzptyrbQ7o7sX0Co%2FZIv05te%2B3EDlpHQzZbAWd%2FKEU7UHwxNgUQ8asbIudOyfEj33P0RXNRQrZJKVC2%2BIRGa8QEH8uUcDD31JkhHeEBwJ83L1wZmInKonD6%2B83%2F88c85%2BHzdSS2qsZ0%2FuNObhPGlljoOvuegoH24DKnbEnVT4MwRMaSBKuryoIuCQI24y%2FStBc%2FJMLifi8oGOqUBzgf8a4xEVB%2BpNftHP1tX3AuIevmNJPgc7hqNwfbnxbbUyd5jsfXpVfFDOhsua0y%2B%2FrpwnB6B0992v9WxK8lkkNQ6I2mOgi7prmtp30LeT5a9SwgH%2BgkLqQOAMweFbil%2Fei8rwQR4g0z8IbeI5coKtI4U%2B7ahxoedtv2Y8pfTtysqXnt8Yr6n2DwYLqm36NzRMfXWIxkC1EU7H%2F0mLyW2o8rWpKLB&X-Amz-Signature=4d162d4d3470d396fe125dc2f57d1443fa5b40ec8ee5b101cda18721761dc6d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MACTT3T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T160425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMDm4yHtmr%2BR6oWmOkcEBEhs1S4KdeM7e2vKRTHSbm5AiEAoyDGQNKAmMickJwTdp9Fy53uou2T%2Fu6OHhZLeEuZwQwqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAydNIYvJS2k85Zq9ircAxntXQZtabBtyc7RkQD1itFS4F3VaKGjF7dIvX65X4eXMjlbRot0kWuUhJclXRb%2FtvAy4u6aRA8X4ztQ3li5W8GOMGCSFs9dR4my03nKrsWikGZk39%2FRQ8tHQaPGagatksrh1p%2BCC2K2oz93t3nkypVKoDulZCvjWQnc89g%2BVmB%2BPFoKQQ4SG4gr5wMNSp9vnl%2BN%2FmL%2Fl6%2FkZccRNyp290nEvk77gEbGxLOrpOzw5oDX8bATE88w%2BEdI85v89nokH7063TN%2FDXDRfGSv%2BHk9mAp9fkK9U6ewkoy3CM2iCW5ys6Co2tzalAR6R1baYi%2FufaN6EInS4ZsFw7KdlhWvIfv3X48rcVGO1IQYB6pNkJOUBxeT2Lbd8TkxyyYPqrKnZkhtHq1wxAfOrHGqmu1Kfk02MYD%2FQ7aTa1DqwnztWSti9CvFCBzL1eRbXzptyrbQ7o7sX0Co%2FZIv05te%2B3EDlpHQzZbAWd%2FKEU7UHwxNgUQ8asbIudOyfEj33P0RXNRQrZJKVC2%2BIRGa8QEH8uUcDD31JkhHeEBwJ83L1wZmInKonD6%2B83%2F88c85%2BHzdSS2qsZ0%2FuNObhPGlljoOvuegoH24DKnbEnVT4MwRMaSBKuryoIuCQI24y%2FStBc%2FJMLifi8oGOqUBzgf8a4xEVB%2BpNftHP1tX3AuIevmNJPgc7hqNwfbnxbbUyd5jsfXpVfFDOhsua0y%2B%2FrpwnB6B0992v9WxK8lkkNQ6I2mOgi7prmtp30LeT5a9SwgH%2BgkLqQOAMweFbil%2Fei8rwQR4g0z8IbeI5coKtI4U%2B7ahxoedtv2Y8pfTtysqXnt8Yr6n2DwYLqm36NzRMfXWIxkC1EU7H%2F0mLyW2o8rWpKLB&X-Amz-Signature=2b8778a7ecaaf0cf3d8e1abaa81ca799bba4f942b8c4b1c3a4a53bc70131fb15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

