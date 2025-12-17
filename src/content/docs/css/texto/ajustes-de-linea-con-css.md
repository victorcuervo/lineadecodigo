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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GNK3PCW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgOdc4UZHYod99T5VJD%2F8zyK%2BKl1FCZao2gI2sOZRZUAiB6eTLwqqSdX2YMbwWOy%2Fh%2Bqjt4EW%2FrBJIhqu6Ej6DY1CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM27HghjWTDfHfIgQ4KtwDk5Sg9iRPDdP%2FPjcVhq9sZ2FL9U9r3XsPlDcq%2BmbjaSxZttN7U5AR5bEoKAwyFsQi%2BY7R%2FDyvdiAug5o9JQUiexud1IaKsSwtM%2FEdQt%2FJEP9jo7n9LaTlHS89Odlf7oR6mg2EFx%2F1ZWn%2BfuvlMX1OinXw%2F%2FISJIZ0eZ84X3L58DkJACl5o58vRauQpHq1tEh9qrVZYyTTbggCHpLT5YKV2b%2BeRH4TAeLV7kZJqx6SSv9yAdqXtMs7KoI%2F8nA9hVYgMq%2FIX51KGKRCLzIuYaCn3jpiHlLXqgBbKQxdL%2BlZA%2BTp5qfeOthIMlWVEy1GNfQeR2SdazNVebUVkeC0SmcUJCReRtEfZj1deb%2BmKdBDiwSCNEAOBOW4PjY01xwWDDuPKTSxWDVlUXyr1ekaDZMArznEEdcvyrEBh%2BN6RJJREuKp0s0TMNojXNMsff0S1dUqDb0dNYokYUAhLo10iPR0YvGzEfQhlBMCK9uLcKBTWo2XtvH%2BH4gLyMJ%2BnLqmlVqsQqWanubhv81hCAdAh0iUgzYLNRw%2BvxgxxilpxSoe0jWvLShU1w%2B%2FyLtV5NEfplefmf0PlSPL2MJyysBA6TL9im8Na%2BOkROjrYHkhLg1iMzJEZLFX1LF%2Fs3KPW%2F4w05%2BLygY6pgFtK4ItizEwsFhH%2Fz4sq7sCUF417GydTc4M8FYPFv5hCpqY1BQ%2BAsWRMm%2FUREH6jIPuZCY1w4I%2F%2BPPBb6RokDYOBZeq7XwiqrCzm7%2FserpRXLSpkznhGEAypI72v%2BqZaTXPHArI%2BkeRd0hRMJn9ed4paHWiurohSf5DMuB9xfxV%2FnZjSoD11EvFJwggql0NcgCNi1igNWlSm782vVAupuvf16ZmLHV0&X-Amz-Signature=36cd58a22982c74250a66d5930c982d745d2100593ac52c743511e7c92cd114d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GNK3PCW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGgOdc4UZHYod99T5VJD%2F8zyK%2BKl1FCZao2gI2sOZRZUAiB6eTLwqqSdX2YMbwWOy%2Fh%2Bqjt4EW%2FrBJIhqu6Ej6DY1CqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM27HghjWTDfHfIgQ4KtwDk5Sg9iRPDdP%2FPjcVhq9sZ2FL9U9r3XsPlDcq%2BmbjaSxZttN7U5AR5bEoKAwyFsQi%2BY7R%2FDyvdiAug5o9JQUiexud1IaKsSwtM%2FEdQt%2FJEP9jo7n9LaTlHS89Odlf7oR6mg2EFx%2F1ZWn%2BfuvlMX1OinXw%2F%2FISJIZ0eZ84X3L58DkJACl5o58vRauQpHq1tEh9qrVZYyTTbggCHpLT5YKV2b%2BeRH4TAeLV7kZJqx6SSv9yAdqXtMs7KoI%2F8nA9hVYgMq%2FIX51KGKRCLzIuYaCn3jpiHlLXqgBbKQxdL%2BlZA%2BTp5qfeOthIMlWVEy1GNfQeR2SdazNVebUVkeC0SmcUJCReRtEfZj1deb%2BmKdBDiwSCNEAOBOW4PjY01xwWDDuPKTSxWDVlUXyr1ekaDZMArznEEdcvyrEBh%2BN6RJJREuKp0s0TMNojXNMsff0S1dUqDb0dNYokYUAhLo10iPR0YvGzEfQhlBMCK9uLcKBTWo2XtvH%2BH4gLyMJ%2BnLqmlVqsQqWanubhv81hCAdAh0iUgzYLNRw%2BvxgxxilpxSoe0jWvLShU1w%2B%2FyLtV5NEfplefmf0PlSPL2MJyysBA6TL9im8Na%2BOkROjrYHkhLg1iMzJEZLFX1LF%2Fs3KPW%2F4w05%2BLygY6pgFtK4ItizEwsFhH%2Fz4sq7sCUF417GydTc4M8FYPFv5hCpqY1BQ%2BAsWRMm%2FUREH6jIPuZCY1w4I%2F%2BPPBb6RokDYOBZeq7XwiqrCzm7%2FserpRXLSpkznhGEAypI72v%2BqZaTXPHArI%2BkeRd0hRMJn9ed4paHWiurohSf5DMuB9xfxV%2FnZjSoD11EvFJwggql0NcgCNi1igNWlSm782vVAupuvf16ZmLHV0&X-Amz-Signature=efa7442403fed4973d4e8928223fe6520bd6b167097ef4fe13720bd9354dc843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

