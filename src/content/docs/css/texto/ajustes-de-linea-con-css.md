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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3G7WLNV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbYe8Ahe98jPdBho8xxPeU6g6KaeS4T5neohgFTkOq8AiEAtEFKfo6xbClC8TrbO7okzryPG7GyUS0uCr2yLbAiJjMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDcTpJtW8vLAyop1CSrcA8N8ykHqRPr5A6OW%2BAtCMATXbObRJsnAQ7%2FVEoBj91nPQPSe%2FrhrpMLOnTdUSgV0AETmZttbDi%2BdrMHLHOpb8NEAM5moQ%2BN8LFP%2FGKawK4Cwy5n%2FIkSc9pAwelpeiwwOokSYCwWAJIueP2ErS6nIuif29p3bq5QQRC%2FIMT7n5nmVNYO7GLULz2ViHTMzcxJI72FblkkN1hVcIGhYhdsO7HKZApv1N8JE%2Bw3FXc6mLV70oH9vQIEdfiD15VubzXP5Fae6yIRCkNbzTruFSD0GSCDiLHdCuFblBCDAcr2aZ5cCIMoKpOysqD1Xg3%2Bbrby%2FpFODCGZt9ABmI05AMjFZm39pBNKqHxWiIk51JoiE0AXxKt7EyXlWjUMRLQO5tCPYW6OefirsJL%2FkRjppa%2FCZGqlviqzFw0O1E9KttAnaGuoU2yrm%2Fb2G1coWd%2BKV14wPLb8gs%2FRImNupVBATOz%2BZ%2B7xl2I%2BtDTm9gO%2F6Q3m9frMd1ZhG5OYjQNhXKsYBaXHVww%2BznBmsU9LKrAhe5UPNQHrhRZCcnqchNu89WYo4NVDhOXghJKzXUCvDF8p9tNTHAvhNTWNImNkb1l98SHcVSHuK%2BKvL5VXWisV99AKt%2F6MVFDDf4H4Gg9xEELTmMJ7piMoGOqUBfOHSmDI4wVNagHlJBIfEsR4hPcnCq3juKtkt12vMBkIzX%2FmHTnrLhC2sKKlcZwXmPsoQHyLrZeqeKmyT2vX8zynjWbsMXhe4ZQg77Ga5MiuMYUQ8ULMESCP5ScfsNmqOasYzDd9yA4n6ZuaW6Tzk2Mn7Ih9QC7Tx160JhvtcwbXlgWWswAcuJmDDakEvUYytJ9lw2FK4cbTXa3rLZ4rfcSIaov31&X-Amz-Signature=fc17b94416d5d82e511cb25f44269287478802b1ca6efc881b40cdeace7408af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3G7WLNV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFbYe8Ahe98jPdBho8xxPeU6g6KaeS4T5neohgFTkOq8AiEAtEFKfo6xbClC8TrbO7okzryPG7GyUS0uCr2yLbAiJjMq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDDcTpJtW8vLAyop1CSrcA8N8ykHqRPr5A6OW%2BAtCMATXbObRJsnAQ7%2FVEoBj91nPQPSe%2FrhrpMLOnTdUSgV0AETmZttbDi%2BdrMHLHOpb8NEAM5moQ%2BN8LFP%2FGKawK4Cwy5n%2FIkSc9pAwelpeiwwOokSYCwWAJIueP2ErS6nIuif29p3bq5QQRC%2FIMT7n5nmVNYO7GLULz2ViHTMzcxJI72FblkkN1hVcIGhYhdsO7HKZApv1N8JE%2Bw3FXc6mLV70oH9vQIEdfiD15VubzXP5Fae6yIRCkNbzTruFSD0GSCDiLHdCuFblBCDAcr2aZ5cCIMoKpOysqD1Xg3%2Bbrby%2FpFODCGZt9ABmI05AMjFZm39pBNKqHxWiIk51JoiE0AXxKt7EyXlWjUMRLQO5tCPYW6OefirsJL%2FkRjppa%2FCZGqlviqzFw0O1E9KttAnaGuoU2yrm%2Fb2G1coWd%2BKV14wPLb8gs%2FRImNupVBATOz%2BZ%2B7xl2I%2BtDTm9gO%2F6Q3m9frMd1ZhG5OYjQNhXKsYBaXHVww%2BznBmsU9LKrAhe5UPNQHrhRZCcnqchNu89WYo4NVDhOXghJKzXUCvDF8p9tNTHAvhNTWNImNkb1l98SHcVSHuK%2BKvL5VXWisV99AKt%2F6MVFDDf4H4Gg9xEELTmMJ7piMoGOqUBfOHSmDI4wVNagHlJBIfEsR4hPcnCq3juKtkt12vMBkIzX%2FmHTnrLhC2sKKlcZwXmPsoQHyLrZeqeKmyT2vX8zynjWbsMXhe4ZQg77Ga5MiuMYUQ8ULMESCP5ScfsNmqOasYzDd9yA4n6ZuaW6Tzk2Mn7Ih9QC7Tx160JhvtcwbXlgWWswAcuJmDDakEvUYytJ9lw2FK4cbTXa3rLZ4rfcSIaov31&X-Amz-Signature=4e4b8a6445f3f9b381985c601443d865ff999df3e6b708cc468b20cae946c187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

