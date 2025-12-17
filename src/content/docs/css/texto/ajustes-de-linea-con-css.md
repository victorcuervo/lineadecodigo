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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UURSOHBI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJpV24uX3Maicd7Z%2F30XMkMYqHkPijxFlpa%2Bf1yMuQPAiA7%2FUblrFzu7w1rWAmaPVeXvhoZb2QT5Y3PpCg6tDK1gir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMexBw9mHqCC3mINUoKtwDownIB4oIPCpXFygiugeJoqk03uKuiTzl2AuwGyHgzXqzDBSELXP0mRzWrtKA1%2F6K96dd2fhg27PV1fuRdCQkmugWEu%2BUByF%2FFV06%2BKTkN669%2FjNL7%2BceFleWpNh42JsF8BkeDXFascZbCV1lU8wzb6h%2BTnygupEWzGE0tHyxZBOWbKgwz5RovdW8byxq8c8Ma%2BJUG7pwoOIVtDtLrtse3BgD6Zpnw%2FhtqnwfAluyNm61gt9HAFBG5s2VA7Yc5hIfD%2Fx4RsO8gUv1Rky9jb129SG8mqRlo7PbbhhPbhQQ4E7CAmK73deLKYBCcQLnDydBQlxTnqbEPUwcnHK8Fb%2FFzqBZ2hdmeTknr052x3Ei1NCslgjjQ%2BQAbiQIYoWCdcAR%2Fkwcge5ZfmLPeHYQZ%2FDYYVfEXUuz4ES3kGvS055dzKyxRzWSr2IR%2BSEXfucqypiOM7J9yl24W%2BMDKZjbanwnBZrOj1L9vOdEEbomSEWQnMVAWfb0bzmznwHC9JYmEJ1LfmSlUQETuQSwjX%2FtoVV8pmi5GWea%2B6n%2BDDkmWeMZxulj%2FKjjyI5zY9jp7nacHqxMMotqkuIw3Dk4J3K0ZDPynFA%2BD1XAjmUDRsgOkh3%2F4%2FAOZHBHXvT5B1LL624wno%2BKygY6pgHvSwSse69lNvklDkCe4mg6hwzyDBz30jZNh9zMi9nkroY5j3%2BvDY4Bo1NWGyznqBRHuULX9gYW2a4s%2FvMGLannIJ5IWbAY12gAn%2BS6k%2F3t6pFBzEQ1DeoWVI67%2Ba4eOMPK%2BTQMOxnBQcHYdkNt1RljboAU065TmcgmFD3%2BBdpaT9oVUs%2Fa60BoZYeQlrg1GimHLO2MaRLO71OlAiCeiGbULRzJf77H&X-Amz-Signature=79da6af64dad273c6bac15c3a4f3d6a931bfceecd5258ffc9ae7e8b8bdac31ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UURSOHBI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJpV24uX3Maicd7Z%2F30XMkMYqHkPijxFlpa%2Bf1yMuQPAiA7%2FUblrFzu7w1rWAmaPVeXvhoZb2QT5Y3PpCg6tDK1gir%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMexBw9mHqCC3mINUoKtwDownIB4oIPCpXFygiugeJoqk03uKuiTzl2AuwGyHgzXqzDBSELXP0mRzWrtKA1%2F6K96dd2fhg27PV1fuRdCQkmugWEu%2BUByF%2FFV06%2BKTkN669%2FjNL7%2BceFleWpNh42JsF8BkeDXFascZbCV1lU8wzb6h%2BTnygupEWzGE0tHyxZBOWbKgwz5RovdW8byxq8c8Ma%2BJUG7pwoOIVtDtLrtse3BgD6Zpnw%2FhtqnwfAluyNm61gt9HAFBG5s2VA7Yc5hIfD%2Fx4RsO8gUv1Rky9jb129SG8mqRlo7PbbhhPbhQQ4E7CAmK73deLKYBCcQLnDydBQlxTnqbEPUwcnHK8Fb%2FFzqBZ2hdmeTknr052x3Ei1NCslgjjQ%2BQAbiQIYoWCdcAR%2Fkwcge5ZfmLPeHYQZ%2FDYYVfEXUuz4ES3kGvS055dzKyxRzWSr2IR%2BSEXfucqypiOM7J9yl24W%2BMDKZjbanwnBZrOj1L9vOdEEbomSEWQnMVAWfb0bzmznwHC9JYmEJ1LfmSlUQETuQSwjX%2FtoVV8pmi5GWea%2B6n%2BDDkmWeMZxulj%2FKjjyI5zY9jp7nacHqxMMotqkuIw3Dk4J3K0ZDPynFA%2BD1XAjmUDRsgOkh3%2F4%2FAOZHBHXvT5B1LL624wno%2BKygY6pgHvSwSse69lNvklDkCe4mg6hwzyDBz30jZNh9zMi9nkroY5j3%2BvDY4Bo1NWGyznqBRHuULX9gYW2a4s%2FvMGLannIJ5IWbAY12gAn%2BS6k%2F3t6pFBzEQ1DeoWVI67%2Ba4eOMPK%2BTQMOxnBQcHYdkNt1RljboAU065TmcgmFD3%2BBdpaT9oVUs%2Fa60BoZYeQlrg1GimHLO2MaRLO71OlAiCeiGbULRzJf77H&X-Amz-Signature=cd73cb2b4c73520fda36aa9827469bcf019120ccb10f19bea2cce8d31bef5948&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

