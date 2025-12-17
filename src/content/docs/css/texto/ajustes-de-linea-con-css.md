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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X52ACNQW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFadhN2p2yR9BQlAWKUBoBwl2IXvcyCGMiQZjUemdoItAiEA54PhG3F5tMdwCsse5m9iPWdwy%2FR9AwHZu%2BCkU60lmNEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoIk9kWw8KZ9T8dISrcA78OCZ04Du6%2FKRodfywaH7jdr3PByyv%2FK%2FaTDvJue4Yz%2BckESymEaBSBY3o4pzugoXS%2BBHGOpt09dmjJK7%2BCdjO2s%2BB4aELvsKssw0pEjClZP%2BjjtUmSMHIUON%2F8q6MPnQQRWOWUH7%2BtSA3H22mS0%2FXyKnfi6Ip21sNVpLi3ZTlv4jLe1IreI9GFKa%2BddT5dT2nnhc2dOsLVuyZN0CSAtbAhtOKfYt%2Bo%2FNlJM0%2Fn1RJoV%2BZHLtNfoOsnHbqXXB5COe5JjSupYVZBAA2W87vmZfx0MvtM3KH3yuRMweoTMaWQ0NzzgWMi6kjiVKLxKghd78a88ZYzXmMrxdKDQtwY1fjZibO0JhLrjF0RvkoG22acwmfXpQAL1DpBBKJf1XLNwUkRErnOF7UlCI7KFy5rK8IUeYfmsgtU5GUXK2ldgzlzhorMLtYB2JtwAYMImh5Wz8xEkYAhAZl%2BylA1Ldkmjk9F6J1jtjBmZU6SmZ9q32LbaL2eg6IBPJm06uHFqURyyGP1lv005q36smWUrY9RrwyoScvtWqTJuUiPBhXBmnw0R5cr3ShxhEk89d9gM4TI8Y%2F155MZzsy%2Be4yEfFs0Wgx1ribJvHootsTi%2FT%2FnoNZj4kklQs3IuHLj25K%2BMOz%2FisoGOqUBEJaaq7pB1JzOkqClh1kO6JFYNW68Up7ZoRG4qO%2BtvGKwXvOSLxHqldqquH%2BzCtJq1PzxWq1Zq3HLJSVhuxP7ud4sezPATvpnLqiJmE7sZvQ8B%2BJAX81smG9RG3Of7CG8f0cTmcECDQtaDRnneo3FFk7MNzueSsQoFaXtOgk7jL%2FZWzRlQc5QLX3OYeeBfJigsqtGsrb1%2FCr0W0AhOGdGmBYroUTR&X-Amz-Signature=8f887c6a0c3ed2250330f4b8bb49beaaa879bcf7739b454c80999725379b8ddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X52ACNQW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFadhN2p2yR9BQlAWKUBoBwl2IXvcyCGMiQZjUemdoItAiEA54PhG3F5tMdwCsse5m9iPWdwy%2FR9AwHZu%2BCkU60lmNEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoIk9kWw8KZ9T8dISrcA78OCZ04Du6%2FKRodfywaH7jdr3PByyv%2FK%2FaTDvJue4Yz%2BckESymEaBSBY3o4pzugoXS%2BBHGOpt09dmjJK7%2BCdjO2s%2BB4aELvsKssw0pEjClZP%2BjjtUmSMHIUON%2F8q6MPnQQRWOWUH7%2BtSA3H22mS0%2FXyKnfi6Ip21sNVpLi3ZTlv4jLe1IreI9GFKa%2BddT5dT2nnhc2dOsLVuyZN0CSAtbAhtOKfYt%2Bo%2FNlJM0%2Fn1RJoV%2BZHLtNfoOsnHbqXXB5COe5JjSupYVZBAA2W87vmZfx0MvtM3KH3yuRMweoTMaWQ0NzzgWMi6kjiVKLxKghd78a88ZYzXmMrxdKDQtwY1fjZibO0JhLrjF0RvkoG22acwmfXpQAL1DpBBKJf1XLNwUkRErnOF7UlCI7KFy5rK8IUeYfmsgtU5GUXK2ldgzlzhorMLtYB2JtwAYMImh5Wz8xEkYAhAZl%2BylA1Ldkmjk9F6J1jtjBmZU6SmZ9q32LbaL2eg6IBPJm06uHFqURyyGP1lv005q36smWUrY9RrwyoScvtWqTJuUiPBhXBmnw0R5cr3ShxhEk89d9gM4TI8Y%2F155MZzsy%2Be4yEfFs0Wgx1ribJvHootsTi%2FT%2FnoNZj4kklQs3IuHLj25K%2BMOz%2FisoGOqUBEJaaq7pB1JzOkqClh1kO6JFYNW68Up7ZoRG4qO%2BtvGKwXvOSLxHqldqquH%2BzCtJq1PzxWq1Zq3HLJSVhuxP7ud4sezPATvpnLqiJmE7sZvQ8B%2BJAX81smG9RG3Of7CG8f0cTmcECDQtaDRnneo3FFk7MNzueSsQoFaXtOgk7jL%2FZWzRlQc5QLX3OYeeBfJigsqtGsrb1%2FCr0W0AhOGdGmBYroUTR&X-Amz-Signature=7bbfb98a9676be6b4f32b218fd85d538cd3bd5e0bb1345e175466264631ef571&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

