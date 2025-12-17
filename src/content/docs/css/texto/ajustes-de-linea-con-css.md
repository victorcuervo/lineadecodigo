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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQFLKUIA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpJz%2BviQNaqKfDgR%2F34tHfwRTlGvBqNgsuQK0QFemFtAiEAh%2BLM2vYHVv9QWrCjEK7hFaynbbIJkeCVWZ%2BawnH2Sfwq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDNOAyrKGQWIaNZl4cSrcA5B7qOmHnT7hyqTceHdbHm9LvRZGvU2nyb8V5l69V7uK4FCeOh5wYIY%2B3M%2B%2BgKCzpMSDY5r4evfK1P%2FP0QLbiv10M%2F8xBw%2BA37jwEBRdFss%2BeJOlyRCtmrQdVuhH%2F2b%2Fa0bu2mDip6W%2B0LAdzwjTpdgI1U4KhzxKti622iUZdB7eWFdAGzYVaM3SLlNhablcNNdpR%2BE1He%2BOjfi1OOMvDfysbsahuSxiDB%2BMrEGKbE77t%2F0FXo9NLyHLjUeO04Y9%2BRg4Bj9cCH1oOrsRtKLCYPGkvM1WkXbSfgOgCcdV0H3TPfeFGT%2BOAbdku%2BH9YQm8HZZgRnxHtsXq3qvig4ryICB41z5dcyCgSdzqiCxORZcQChJMSMJR92Fa2mz7zk6xE0alCCI3dMjDWXEPE472JNZpTE7DX0fko9uJwZZnHO6jmSLKOyH2vufEQfncl79JMzJh%2F307teoHF92VtD5X6ixEsiHMzVpdRepryR5kkU4iDS191dPO5%2F5x1uF066c0nvS7nmONPzZ6elRdbraekAXeUH7uz7mZy8WNy9knDSA%2BCRgRQst4rpqrsNWTCGEXD%2Bf4BtLSYqBC2AAYOZyZwiQH%2FeG2sBHXgrX9ylYhudUgt6IKgN%2FhxKpgGxsqMLyyiMoGOqUBgnR8tsNmzeVAGgKTpyZ91m1VUx1WasRMBUasosOlsxgPyVOulpc8C80EzNsIgjegY1IN%2B2xN%2Fzxs5Egv5F9sBsfE0CqO%2Fcj%2FBysoJ%2BUXcqESZi0U0eolp0nNOGCUB56jgWeX6hWs7qipAl%2BCbhubo41QO7fVVjXYqs2U4hv1O%2Bma%2BbyReAZBbon6%2BHXjohRcZpxyBzv%2BHEabGTi%2FsUe8Wfjy8C58&X-Amz-Signature=e16b03f30ea7bdc259817f307340e38481a33ead2c83ac80bd900c13bf98af6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQFLKUIA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpJz%2BviQNaqKfDgR%2F34tHfwRTlGvBqNgsuQK0QFemFtAiEAh%2BLM2vYHVv9QWrCjEK7hFaynbbIJkeCVWZ%2BawnH2Sfwq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDNOAyrKGQWIaNZl4cSrcA5B7qOmHnT7hyqTceHdbHm9LvRZGvU2nyb8V5l69V7uK4FCeOh5wYIY%2B3M%2B%2BgKCzpMSDY5r4evfK1P%2FP0QLbiv10M%2F8xBw%2BA37jwEBRdFss%2BeJOlyRCtmrQdVuhH%2F2b%2Fa0bu2mDip6W%2B0LAdzwjTpdgI1U4KhzxKti622iUZdB7eWFdAGzYVaM3SLlNhablcNNdpR%2BE1He%2BOjfi1OOMvDfysbsahuSxiDB%2BMrEGKbE77t%2F0FXo9NLyHLjUeO04Y9%2BRg4Bj9cCH1oOrsRtKLCYPGkvM1WkXbSfgOgCcdV0H3TPfeFGT%2BOAbdku%2BH9YQm8HZZgRnxHtsXq3qvig4ryICB41z5dcyCgSdzqiCxORZcQChJMSMJR92Fa2mz7zk6xE0alCCI3dMjDWXEPE472JNZpTE7DX0fko9uJwZZnHO6jmSLKOyH2vufEQfncl79JMzJh%2F307teoHF92VtD5X6ixEsiHMzVpdRepryR5kkU4iDS191dPO5%2F5x1uF066c0nvS7nmONPzZ6elRdbraekAXeUH7uz7mZy8WNy9knDSA%2BCRgRQst4rpqrsNWTCGEXD%2Bf4BtLSYqBC2AAYOZyZwiQH%2FeG2sBHXgrX9ylYhudUgt6IKgN%2FhxKpgGxsqMLyyiMoGOqUBgnR8tsNmzeVAGgKTpyZ91m1VUx1WasRMBUasosOlsxgPyVOulpc8C80EzNsIgjegY1IN%2B2xN%2Fzxs5Egv5F9sBsfE0CqO%2Fcj%2FBysoJ%2BUXcqESZi0U0eolp0nNOGCUB56jgWeX6hWs7qipAl%2BCbhubo41QO7fVVjXYqs2U4hv1O%2Bma%2BbyReAZBbon6%2BHXjohRcZpxyBzv%2BHEabGTi%2FsUe8Wfjy8C58&X-Amz-Signature=12073f78d001d23c7908b65fcf2aa7cc52986334d6dc4661c472e9fceae1826d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

