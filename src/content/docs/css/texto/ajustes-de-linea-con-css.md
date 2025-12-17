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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV5ADIQT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW%2FPrkeZ2o2IBWGVqVY2uEGi9ERvpegcyyaGJycvCV8wIgR9bJUQzG6tumJwwZAggbogdlVC9G4pRnCfk7amb%2FPs4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPGnnuAwa0buP3GFFSrcAyz8xnQebEMPhCWCC%2FVlmTGl2PDIgLdHuxiFWgMe3KHG1q0a8U%2FYcr9a6OglKJi0EN9UY06uVYyOfjy1KspRVCSED7XViVHHr88KFddELeKNMXkeMHXLYM%2FPdNJA1%2F%2FrVErDhRcCtEGgUmLO%2FYMF8EFFXEYTWhhhRiveoDte4996AIlDsjmriuQDu5kf1uwis9aT2ETrlTvNBxGqOdi3J73uU2rTf8bXlC%2BK1EufIhX5O5Y%2Ffxs6vShhT9ovxBXimIApIX8NRTx8pnNXlLYrKHC9DiKhpn2ovDQu0F5weWKzIY4zhLkCCZ85nkLokgO0M15mCB9sHd4yC1eaU8YHdd6Uv8BXSU6d7L51Gqv7sdipZYRZMmxmpPki2YpMdwwJbS7HxZL0RudsPwGDOWKa54%2FlpkEcVAo9ZvzA5eE9aK2AaDOmNIbfDkYkeSsVp2v5v8SOhlmW8XCH5MAuxq%2F9O0BKYfQ2JFA8g3cOHaZiBEdeppDSexS2WYrNvOcNLJZ4mrPM1jxqOXaWgDVnyf0h8LIAY7nb1%2Bl3u4ghyQ%2Bey0KUoAEyKDw7vwJzuXc4EE8ngzZEw0Cpkz89dHG1lHf%2FRO0RF7BQuYsr5ck%2BIfi1QB9euLluHAWbq%2FDuqCZ9MMadicoGOqUBisMNfOu0mG540miGba%2B%2BruA7DrEZ7FPH7nPYvHXLK1js18hf8BvaCTvXnEOu40p6uqbJTSfYyArDbI6eEChjfrUo66Zyvjmk8UVFw5NEqHPVMNWWEi1HDbcNwfTLzAKiFXqNo8dvc6CJUptridka%2F9nL7k5rlzH%2F0FRdaviytrAhO5T3wlz%2BM4z%2FRAMEKocnkKd7QUX4FF2DXXeAuVuysG3PRrDy&X-Amz-Signature=c7390d51b3517cf812130b2da78d913d343e0386e1b2452be1d1dfc2ab37467d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV5ADIQT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDW%2FPrkeZ2o2IBWGVqVY2uEGi9ERvpegcyyaGJycvCV8wIgR9bJUQzG6tumJwwZAggbogdlVC9G4pRnCfk7amb%2FPs4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPGnnuAwa0buP3GFFSrcAyz8xnQebEMPhCWCC%2FVlmTGl2PDIgLdHuxiFWgMe3KHG1q0a8U%2FYcr9a6OglKJi0EN9UY06uVYyOfjy1KspRVCSED7XViVHHr88KFddELeKNMXkeMHXLYM%2FPdNJA1%2F%2FrVErDhRcCtEGgUmLO%2FYMF8EFFXEYTWhhhRiveoDte4996AIlDsjmriuQDu5kf1uwis9aT2ETrlTvNBxGqOdi3J73uU2rTf8bXlC%2BK1EufIhX5O5Y%2Ffxs6vShhT9ovxBXimIApIX8NRTx8pnNXlLYrKHC9DiKhpn2ovDQu0F5weWKzIY4zhLkCCZ85nkLokgO0M15mCB9sHd4yC1eaU8YHdd6Uv8BXSU6d7L51Gqv7sdipZYRZMmxmpPki2YpMdwwJbS7HxZL0RudsPwGDOWKa54%2FlpkEcVAo9ZvzA5eE9aK2AaDOmNIbfDkYkeSsVp2v5v8SOhlmW8XCH5MAuxq%2F9O0BKYfQ2JFA8g3cOHaZiBEdeppDSexS2WYrNvOcNLJZ4mrPM1jxqOXaWgDVnyf0h8LIAY7nb1%2Bl3u4ghyQ%2Bey0KUoAEyKDw7vwJzuXc4EE8ngzZEw0Cpkz89dHG1lHf%2FRO0RF7BQuYsr5ck%2BIfi1QB9euLluHAWbq%2FDuqCZ9MMadicoGOqUBisMNfOu0mG540miGba%2B%2BruA7DrEZ7FPH7nPYvHXLK1js18hf8BvaCTvXnEOu40p6uqbJTSfYyArDbI6eEChjfrUo66Zyvjmk8UVFw5NEqHPVMNWWEi1HDbcNwfTLzAKiFXqNo8dvc6CJUptridka%2F9nL7k5rlzH%2F0FRdaviytrAhO5T3wlz%2BM4z%2FRAMEKocnkKd7QUX4FF2DXXeAuVuysG3PRrDy&X-Amz-Signature=ddaa7f41847d15fa94687b370d1b52ba0ed4ef1f88d1bda2599bbc2fe97f8e64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

