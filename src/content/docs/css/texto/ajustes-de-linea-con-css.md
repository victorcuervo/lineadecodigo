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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YELNHXUX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQxsu0%2Bz39hBLzr8TpPTg1Hguo9G79cYsa6EltHzRdRAIgb8nVT2kuP53fzVb1d4K7EuO58%2BWWM721KVK5XgOpJAMq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEP6E0Wm5MK3pb0zPSrcAxsqzum%2Bz3n5PRaCJMPs45L%2F8JhVVSvWyVz74cjMyi6L%2F0ndUqJlaEL7FTwugaw%2FNVOS2sdjouU2ky2XeaQu48bmQGobaKJiqkNHMD9FEvMMjZAJGo9IGJN%2FQJOGsTNbMeZqMMFQWlCRC3fl7He%2Fy%2Fnnb42BsNoWMDDxh8cxZoKtJHQB1YHDD1cGEN%2BXyT0k0MExzTj8EIl1%2B3lDpmQNf8Z6lMhISgamlSp%2Fhgif1aigMPmlSJV6W31SD9e4eQTdsGp9zT%2FaQbuZ65SxGmQSb%2B%2BSQiWgzn8csR1fwpKToZ6Al7uDrEeecBF3r29dU4m9FCaQiLz0k97u9mJh1hfRhm1E%2B4VH%2F%2FR21wXAFvCCgbJPCdixLKzxPROXgepUWjRVD28alRSCXPPeWgLQvmF9kjRp3QACbZ1MAhycuapGCFg1M8qVRinqLHCRRrbUDurjtJvhA9UGT8X84z%2Bl7k87H0XhbUq8P0h46L27r2Pe3OvoxocunJhE1zMTdqg5On493tGru%2BBt5q7h%2BYpBnkJ%2F15fUTVYmWlgihb4XZ3NwarVgiN9YJfty23t%2Fw5ybjjaZ1RpvVJf0tn4jFGQ3qy6JeYT1Zoho%2BV%2FtTVzTywS5HSlqB62Uu7RiUvWITMDfML2qisoGOqUBbjmvvkeEe6DQCniDzOrHwljbjX2Izd1lUM09THVl6iHGKZ%2FXPxA1FjwMLoHnI%2Bd1VX7PyuE0%2BjkuzYFYCn1qHbpddyfOe7BIVPJtYjJZrwDR7EhPrJooGN1AM2%2BIg2RQvfe9Xtgl2DuenHLSQGcfua2Wosa9doZEZCr%2FSxLseS133r6M4GDMUZjWQeS29qa4DOHfCGrKf9Ii1SZfRWKeZnWw7Ljg&X-Amz-Signature=605927de52ca47cc5ce2ffaa8c82d80c29d7df0e750620a3595352ab43624afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YELNHXUX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQxsu0%2Bz39hBLzr8TpPTg1Hguo9G79cYsa6EltHzRdRAIgb8nVT2kuP53fzVb1d4K7EuO58%2BWWM721KVK5XgOpJAMq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEP6E0Wm5MK3pb0zPSrcAxsqzum%2Bz3n5PRaCJMPs45L%2F8JhVVSvWyVz74cjMyi6L%2F0ndUqJlaEL7FTwugaw%2FNVOS2sdjouU2ky2XeaQu48bmQGobaKJiqkNHMD9FEvMMjZAJGo9IGJN%2FQJOGsTNbMeZqMMFQWlCRC3fl7He%2Fy%2Fnnb42BsNoWMDDxh8cxZoKtJHQB1YHDD1cGEN%2BXyT0k0MExzTj8EIl1%2B3lDpmQNf8Z6lMhISgamlSp%2Fhgif1aigMPmlSJV6W31SD9e4eQTdsGp9zT%2FaQbuZ65SxGmQSb%2B%2BSQiWgzn8csR1fwpKToZ6Al7uDrEeecBF3r29dU4m9FCaQiLz0k97u9mJh1hfRhm1E%2B4VH%2F%2FR21wXAFvCCgbJPCdixLKzxPROXgepUWjRVD28alRSCXPPeWgLQvmF9kjRp3QACbZ1MAhycuapGCFg1M8qVRinqLHCRRrbUDurjtJvhA9UGT8X84z%2Bl7k87H0XhbUq8P0h46L27r2Pe3OvoxocunJhE1zMTdqg5On493tGru%2BBt5q7h%2BYpBnkJ%2F15fUTVYmWlgihb4XZ3NwarVgiN9YJfty23t%2Fw5ybjjaZ1RpvVJf0tn4jFGQ3qy6JeYT1Zoho%2BV%2FtTVzTywS5HSlqB62Uu7RiUvWITMDfML2qisoGOqUBbjmvvkeEe6DQCniDzOrHwljbjX2Izd1lUM09THVl6iHGKZ%2FXPxA1FjwMLoHnI%2Bd1VX7PyuE0%2BjkuzYFYCn1qHbpddyfOe7BIVPJtYjJZrwDR7EhPrJooGN1AM2%2BIg2RQvfe9Xtgl2DuenHLSQGcfua2Wosa9doZEZCr%2FSxLseS133r6M4GDMUZjWQeS29qa4DOHfCGrKf9Ii1SZfRWKeZnWw7Ljg&X-Amz-Signature=0d56049cd6f3acce68c39aef2a5fdcf3723cf4c9d087b4a326cdd7ecd0828417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

