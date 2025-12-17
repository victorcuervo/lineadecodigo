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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NMYA6JX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEnGC%2Fbo9d7gk%2BHaFjLMQBrRE8Umr8cgRFH91tokCvfAIhAKxFy4XbMqsO5I%2BOtASkRAi%2F6yCeX52wNn2JPL1b7EIgKv8DCHcQABoMNjM3NDIzMTgzODA1IgwSrvKfDzSnXkjaVocq3APboCqayBPBdzlyAdyxkJ8UT%2Ft19D3RFX2zWjKW952Hty87fcXrB3%2Frt%2FD6XgrM4tVHwFM1QWFoBv7TEP6jjMp8HqWtOM6M%2Bsdg%2BZwG%2FgvXZJBUghJJG5PTYw046KCAPWxoXLviD0W0RLs2%2BY%2Bu9KRA31XPiU7Vce%2FRRJu3aDNCJx1RgR3Pp44bOBP7fA0TuK33Z86ggyxDL5gnWWogKyupCZkSCNulQm1og1p7mOwI%2FYaQl4qzU%2FIRCrmYkFVVqYOU3HEsBW3Lee0xxiKzAF8HIQ0PREXxzlo95%2Bwz%2BNx07Id6GSJa%2Ff3aIs8m29k9mFJrl2034G37o4JpivYK7GYJ%2B5ZfedDECa9F5M3K0U8xEQj3Qt7%2B0TZ0gUCwP26oAGTrZGW52eUdt4O%2FgGO%2F%2FRRgUAy1zuQ7rq5pTdvoUkrSzJKTDSKGzwHZOxCpeQuW7IL31IU%2BtWhtx7DrrNyBtZ7xmg3U%2BCO%2FiJaoTo%2FYSv%2B0Gc0ff7J7izveHLaaTu4Hv0t9st4G8W3UIpPxcwP861Li%2BjHGhGdgh3Hh4U%2F8EAMVBoYPMCMZrcJfyNo4XhX927H9Mw7wb1YHQwnYgbFC9jyukbhiWJy0YsCXTp20AaHqE47fivIrgo37JZFKeTCWgonKBjqkAffhAocDYPOjUkbkicHTdpP4sMFnjtAUcM%2BplKLxbicyTKDh2hTMRLEJVslP7Eu7441JV8j1s4WKqjsvt1O3DYBCCHpiZ9k1nVPshA5by5sj7ya1Nxyf7lEUfPiki0HXDxb0gEgbDJkhdsr84dnDN38eFQ49fQZRn3L6kg1CDQOvsv3ZM%2FwzN9Omd1bYub%2F6Vkd%2B6ZXrK3FFXbloJYJGASSy7A%2Ft&X-Amz-Signature=566676e3be6b624e2c0972db020db0647b1a4ae7b27b1ee83348714c8be85104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NMYA6JX%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEnGC%2Fbo9d7gk%2BHaFjLMQBrRE8Umr8cgRFH91tokCvfAIhAKxFy4XbMqsO5I%2BOtASkRAi%2F6yCeX52wNn2JPL1b7EIgKv8DCHcQABoMNjM3NDIzMTgzODA1IgwSrvKfDzSnXkjaVocq3APboCqayBPBdzlyAdyxkJ8UT%2Ft19D3RFX2zWjKW952Hty87fcXrB3%2Frt%2FD6XgrM4tVHwFM1QWFoBv7TEP6jjMp8HqWtOM6M%2Bsdg%2BZwG%2FgvXZJBUghJJG5PTYw046KCAPWxoXLviD0W0RLs2%2BY%2Bu9KRA31XPiU7Vce%2FRRJu3aDNCJx1RgR3Pp44bOBP7fA0TuK33Z86ggyxDL5gnWWogKyupCZkSCNulQm1og1p7mOwI%2FYaQl4qzU%2FIRCrmYkFVVqYOU3HEsBW3Lee0xxiKzAF8HIQ0PREXxzlo95%2Bwz%2BNx07Id6GSJa%2Ff3aIs8m29k9mFJrl2034G37o4JpivYK7GYJ%2B5ZfedDECa9F5M3K0U8xEQj3Qt7%2B0TZ0gUCwP26oAGTrZGW52eUdt4O%2FgGO%2F%2FRRgUAy1zuQ7rq5pTdvoUkrSzJKTDSKGzwHZOxCpeQuW7IL31IU%2BtWhtx7DrrNyBtZ7xmg3U%2BCO%2FiJaoTo%2FYSv%2B0Gc0ff7J7izveHLaaTu4Hv0t9st4G8W3UIpPxcwP861Li%2BjHGhGdgh3Hh4U%2F8EAMVBoYPMCMZrcJfyNo4XhX927H9Mw7wb1YHQwnYgbFC9jyukbhiWJy0YsCXTp20AaHqE47fivIrgo37JZFKeTCWgonKBjqkAffhAocDYPOjUkbkicHTdpP4sMFnjtAUcM%2BplKLxbicyTKDh2hTMRLEJVslP7Eu7441JV8j1s4WKqjsvt1O3DYBCCHpiZ9k1nVPshA5by5sj7ya1Nxyf7lEUfPiki0HXDxb0gEgbDJkhdsr84dnDN38eFQ49fQZRn3L6kg1CDQOvsv3ZM%2FwzN9Omd1bYub%2F6Vkd%2B6ZXrK3FFXbloJYJGASSy7A%2Ft&X-Amz-Signature=8c46e7092194619f1734b8e25eae225597a70a3b17007d5bf2ecad4a2054a3a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

