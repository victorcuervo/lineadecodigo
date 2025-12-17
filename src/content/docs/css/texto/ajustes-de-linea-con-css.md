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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5E7YIU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuwMV3VP6PesRVqQb0cWpZ71Xk%2BCL7oSYXF1BnPw0w8AIhAJM1ljPHFHD3XvnxB6%2BzRPM5pFqT%2BwReHaO4%2F%2BnmeIr1Kv8DCHoQABoMNjM3NDIzMTgzODA1Igzguinf9Av2e%2BZK9CQq3AOGeHn2lQQ61ZLS2K77iyBrZ2OML%2FZp5Bd71eS2KYV4wZ%2BMDJlkdeewN9tYJnTqyDGhNniguT0nDOePgjZPQrzlaLu9Cwg6WNMrIhM%2F1POkbl5hD1GwhyQKwAr%2BfDylNrJJOE63Di7Zcwds%2BEmI%2F5thSbt7OxsjebsiKlM%2Fgza%2FA8e0WehSIrXMOBMs%2FGIMCTH0ApPu%2FaSoS%2BNUhDUY8%2FEcscQkgFoNewwCAQC3HdGr%2BkObdJPx3pQfarTEuxlPvlkTpw8ZtNQcRRENWIC3hMbGDkxB7zxDxPi43f9drYEGXjMToJuTTf%2FFj%2BxWP7FIOtKBlPsJnY8oW1CZKk6mLigItQWM9kB7K9%2B3TDTx9DeW87r6B6NrhtfAAyQYlT4NYAh2bxfrJKhdCR6ds1rzoPFB%2Ft96FftP1Rb1SA90o6AZTv1zVNBEEHMLIzRtMAK4JGT1EsaCClikQDrP36gLI9jAraLLUXROkDGQyOUzsEKa2F1RgK6tRIDaBJV5zaRZO1ViDGQNGrC9QtlqhFDJvtttMPZELDztUXnV%2F2XdVC87lAGEStk8PuqbJ%2BjU1p%2Bd00tgoWi6iRmq%2FPvHw%2B5A%2FH4tL5UwtjvQjbz7BBbe5Kzktr2LUXUPWi2W%2BQG8oTCA04nKBjqkAU4PAw%2FTGclJzHeWdO2KYgfJndDTWS8g3P%2FdKTu8agPjk1pYp9NyPJTGEqQOomTCkPX8GTuyujuDdkpvFuZ8gqQmLm35sRyoOGEsCTUvhOcEnhCpKDoQInctzc8O3WzA30m6GFiSXm5p8ryDSRlxerlDDhRowB1VftR2prnld57UR2Eoi1AeEv3wf25kuMzMIXrLNeH54rquinTzrF4akcC3hGD8&X-Amz-Signature=7ceacb231359145ee916fb8dd712495905d8adf10d50fe94fe1d8a2601234bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5E7YIU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuwMV3VP6PesRVqQb0cWpZ71Xk%2BCL7oSYXF1BnPw0w8AIhAJM1ljPHFHD3XvnxB6%2BzRPM5pFqT%2BwReHaO4%2F%2BnmeIr1Kv8DCHoQABoMNjM3NDIzMTgzODA1Igzguinf9Av2e%2BZK9CQq3AOGeHn2lQQ61ZLS2K77iyBrZ2OML%2FZp5Bd71eS2KYV4wZ%2BMDJlkdeewN9tYJnTqyDGhNniguT0nDOePgjZPQrzlaLu9Cwg6WNMrIhM%2F1POkbl5hD1GwhyQKwAr%2BfDylNrJJOE63Di7Zcwds%2BEmI%2F5thSbt7OxsjebsiKlM%2Fgza%2FA8e0WehSIrXMOBMs%2FGIMCTH0ApPu%2FaSoS%2BNUhDUY8%2FEcscQkgFoNewwCAQC3HdGr%2BkObdJPx3pQfarTEuxlPvlkTpw8ZtNQcRRENWIC3hMbGDkxB7zxDxPi43f9drYEGXjMToJuTTf%2FFj%2BxWP7FIOtKBlPsJnY8oW1CZKk6mLigItQWM9kB7K9%2B3TDTx9DeW87r6B6NrhtfAAyQYlT4NYAh2bxfrJKhdCR6ds1rzoPFB%2Ft96FftP1Rb1SA90o6AZTv1zVNBEEHMLIzRtMAK4JGT1EsaCClikQDrP36gLI9jAraLLUXROkDGQyOUzsEKa2F1RgK6tRIDaBJV5zaRZO1ViDGQNGrC9QtlqhFDJvtttMPZELDztUXnV%2F2XdVC87lAGEStk8PuqbJ%2BjU1p%2Bd00tgoWi6iRmq%2FPvHw%2B5A%2FH4tL5UwtjvQjbz7BBbe5Kzktr2LUXUPWi2W%2BQG8oTCA04nKBjqkAU4PAw%2FTGclJzHeWdO2KYgfJndDTWS8g3P%2FdKTu8agPjk1pYp9NyPJTGEqQOomTCkPX8GTuyujuDdkpvFuZ8gqQmLm35sRyoOGEsCTUvhOcEnhCpKDoQInctzc8O3WzA30m6GFiSXm5p8ryDSRlxerlDDhRowB1VftR2prnld57UR2Eoi1AeEv3wf25kuMzMIXrLNeH54rquinTzrF4akcC3hGD8&X-Amz-Signature=5fd5ff2dff914eeff7a09a1b885f52c8e9de7bc3c55e9c8f3d400e2684f071e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

