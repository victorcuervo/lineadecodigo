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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ2DHT7G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3lCY9Vn23v4G3bn7lgkDbkAZbWzuzL1lnZbCXorzVRgIgeYN31tshNU9UC4VMaO6c0T1bB3Qy1GqRJKtZyeKDs6Qq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAbDr0YFuiso%2FHS%2BpCrcAx8ltD8vg%2F%2FaPuj6B%2BGbSuIF4jNhSLQL5wHHv1ioZbXNQa437gdJ2v7KjYUKdMF77a%2BeY7qLgQDdL%2Bu6x24UoW8aayhB1%2B%2Fxgf8e1mCTnoySV6FLMk5K7hYS9cIggppddVhIjc%2FDMpDGMixd1eBS8muxA4N0qiFrlW8qGZvUVxyNSuuBxR%2B9BSWOgOODTN4vTDZxmRILLKXEsdLJMhS4z1GfMbWDst5m26LDYtSE4AsRZzKfv1H8wZKRHFnPyA%2BoqLCvF8y3oeUJ7vksO9YX1mvzFyx5NKZHotXAFHPNY7LZaU4RKBXckGvyen9tPrKnI%2BhHZbSdQz9x%2F6WrCYkf8Ux0auFfX5ppRtj7Sd8EiPeza8iUhlA31QEpKDBbSXetL9ckDs6YUYq%2FUm9qVgj3X2l0CjlBorQpWTKrOh3qoiRc2FJpVc3jppmtPZ8EESYrUk7tU0nFIeQRNkk%2FDsfZ8xtc%2FI9026TnacUI9QMsVJF9WVXYwBmkmqxlKbs9pct4ynfcuc1LAzQc1a1DEi0VlzIT6SipBC9Z7moUv1PJnnfgdDhrm%2BFZ87MPfHOFxtG2C%2Fn9fRhzjwVdE50uAHvyKZIH9TgSBfXdyzcDibnddu78GB0iBKf6qIk0dQ2AMLveh8oGOqUBRCf2ZB4O9ztjb63YHH1uT5f1zuHStx2h6ketfCT7x160T%2Bv597DK0%2F2JO5Rv4KQCBech7Z6An8D0zOgaSAtidl%2BNN6SXU8VeFoFhEohaJj%2BxBiOzt9dtaYbkwXnsechbgUq3bVlYSRnDMyTkgRbv2IL6iq%2Fj6uU26XZMzG9ydXsY9H%2BPeB7YJautcYhhiA9X1Qdkvaa4nX8YnuxiFsLOZ41cg0As&X-Amz-Signature=0ebe5bc85fae621e7874f1b8d6ad071597fefbef9740bf45cdeea48aba05251f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ2DHT7G%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T001236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3lCY9Vn23v4G3bn7lgkDbkAZbWzuzL1lnZbCXorzVRgIgeYN31tshNU9UC4VMaO6c0T1bB3Qy1GqRJKtZyeKDs6Qq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDAbDr0YFuiso%2FHS%2BpCrcAx8ltD8vg%2F%2FaPuj6B%2BGbSuIF4jNhSLQL5wHHv1ioZbXNQa437gdJ2v7KjYUKdMF77a%2BeY7qLgQDdL%2Bu6x24UoW8aayhB1%2B%2Fxgf8e1mCTnoySV6FLMk5K7hYS9cIggppddVhIjc%2FDMpDGMixd1eBS8muxA4N0qiFrlW8qGZvUVxyNSuuBxR%2B9BSWOgOODTN4vTDZxmRILLKXEsdLJMhS4z1GfMbWDst5m26LDYtSE4AsRZzKfv1H8wZKRHFnPyA%2BoqLCvF8y3oeUJ7vksO9YX1mvzFyx5NKZHotXAFHPNY7LZaU4RKBXckGvyen9tPrKnI%2BhHZbSdQz9x%2F6WrCYkf8Ux0auFfX5ppRtj7Sd8EiPeza8iUhlA31QEpKDBbSXetL9ckDs6YUYq%2FUm9qVgj3X2l0CjlBorQpWTKrOh3qoiRc2FJpVc3jppmtPZ8EESYrUk7tU0nFIeQRNkk%2FDsfZ8xtc%2FI9026TnacUI9QMsVJF9WVXYwBmkmqxlKbs9pct4ynfcuc1LAzQc1a1DEi0VlzIT6SipBC9Z7moUv1PJnnfgdDhrm%2BFZ87MPfHOFxtG2C%2Fn9fRhzjwVdE50uAHvyKZIH9TgSBfXdyzcDibnddu78GB0iBKf6qIk0dQ2AMLveh8oGOqUBRCf2ZB4O9ztjb63YHH1uT5f1zuHStx2h6ketfCT7x160T%2Bv597DK0%2F2JO5Rv4KQCBech7Z6An8D0zOgaSAtidl%2BNN6SXU8VeFoFhEohaJj%2BxBiOzt9dtaYbkwXnsechbgUq3bVlYSRnDMyTkgRbv2IL6iq%2Fj6uU26XZMzG9ydXsY9H%2BPeB7YJautcYhhiA9X1Qdkvaa4nX8YnuxiFsLOZ41cg0As&X-Amz-Signature=a75284a70f3b8501de92ec49776e5236568bae0c7be8a84bdf4c66887714b3fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

