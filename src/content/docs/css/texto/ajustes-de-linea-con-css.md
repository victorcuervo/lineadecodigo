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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMWZ2U7N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8VR%2FvjQuRSgYoZkARceIJj6rKrHyDv6i3SSHyXAGcFAiANGLy9%2FeLSRO05XvVPg2nDc6GEcN3TvB36syCJ%2FozbDSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMwoxpe3GLFJhgPP7WKtwDP3KAH0F5Y9GWpIkT3JT71ctdljrbUBqe%2FbdqyH%2Brc8nihhj9hACZDOxWgmQDZDl3P%2BSs5tzxVw3wso1wysSBU%2BIGfvouBAJ9S7Qyv%2FBSjXyTLqU9X1YLsDisMZAcfNgJ7XOe0HZdd7UTnsfOT%2FrHKS1K6e6CE%2BvMBFlzKs1zMQeb%2FKLx7JtT%2FD7lBVn%2Ff5VGNd%2BwE%2FwnZQzhaNjvMD4LZGZcYVo2TWCdxokUxbNtaiOrP28s0ATufjoBwcS9n9b6%2FlK2MDEPKlEdzNPYgstj61TJ2R93obv8dS4Z8hfUqM6wok4tLahPvPdCjQZ7i7cgpnag6VwCAGaoagHS%2BLhcxIOh24FmdmKXX4awKCRkFkweSXp1pKtvMgOX2J%2FwEjk7CZ2Miwk%2B8Vmv%2FjipsiRJ7n6g0acJZHlXNfnLE6zpiXDa7qq%2BJJAj%2F1sHd63G%2BSn3rVzVWzsou9WIiTxk5v98fajhjXJUo29fgZrhJMy9fph8i5TbmfWS7QRKG5FKJeJiJc07EHbBVC6cQI47fVbbh%2BVTv%2Fn2vZsvl1cdS30TJyfJedxqcSvjLev48%2B4%2F15larbmw0q0dCokyl7S%2FwkdLbehiDVpYid5fQT%2BaNcPSlBGmk1XdswEyDjpONAkwgZ2JygY6pgGXkGdQ6XsoJUHwBXWQ6ocZkVW5PhDEYXNu2DQ13GfRAN%2BTvH1uvMLSei1nxTgbqI3Oz0aIYfSL3U0Lj8nPPb6fJasC8hVFQRUM6S7V%2BQHMnblMOjG%2FUv0KGB6KAnjW%2B3SQ1VSs9IrcxhE9NAzDFwOZvWKez1PPumTSlUeldPHnJGkvBney6s1tF2baC8mhyTpZ6CfzE0Z6jrJcMtgKS7EWnZSQxv%2Fb&X-Amz-Signature=8a8a38f167615ad61d83aab656672398c8db12840deff26e136a282495382247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMWZ2U7N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8VR%2FvjQuRSgYoZkARceIJj6rKrHyDv6i3SSHyXAGcFAiANGLy9%2FeLSRO05XvVPg2nDc6GEcN3TvB36syCJ%2FozbDSr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMwoxpe3GLFJhgPP7WKtwDP3KAH0F5Y9GWpIkT3JT71ctdljrbUBqe%2FbdqyH%2Brc8nihhj9hACZDOxWgmQDZDl3P%2BSs5tzxVw3wso1wysSBU%2BIGfvouBAJ9S7Qyv%2FBSjXyTLqU9X1YLsDisMZAcfNgJ7XOe0HZdd7UTnsfOT%2FrHKS1K6e6CE%2BvMBFlzKs1zMQeb%2FKLx7JtT%2FD7lBVn%2Ff5VGNd%2BwE%2FwnZQzhaNjvMD4LZGZcYVo2TWCdxokUxbNtaiOrP28s0ATufjoBwcS9n9b6%2FlK2MDEPKlEdzNPYgstj61TJ2R93obv8dS4Z8hfUqM6wok4tLahPvPdCjQZ7i7cgpnag6VwCAGaoagHS%2BLhcxIOh24FmdmKXX4awKCRkFkweSXp1pKtvMgOX2J%2FwEjk7CZ2Miwk%2B8Vmv%2FjipsiRJ7n6g0acJZHlXNfnLE6zpiXDa7qq%2BJJAj%2F1sHd63G%2BSn3rVzVWzsou9WIiTxk5v98fajhjXJUo29fgZrhJMy9fph8i5TbmfWS7QRKG5FKJeJiJc07EHbBVC6cQI47fVbbh%2BVTv%2Fn2vZsvl1cdS30TJyfJedxqcSvjLev48%2B4%2F15larbmw0q0dCokyl7S%2FwkdLbehiDVpYid5fQT%2BaNcPSlBGmk1XdswEyDjpONAkwgZ2JygY6pgGXkGdQ6XsoJUHwBXWQ6ocZkVW5PhDEYXNu2DQ13GfRAN%2BTvH1uvMLSei1nxTgbqI3Oz0aIYfSL3U0Lj8nPPb6fJasC8hVFQRUM6S7V%2BQHMnblMOjG%2FUv0KGB6KAnjW%2B3SQ1VSs9IrcxhE9NAzDFwOZvWKez1PPumTSlUeldPHnJGkvBney6s1tF2baC8mhyTpZ6CfzE0Z6jrJcMtgKS7EWnZSQxv%2Fb&X-Amz-Signature=d0d33da1561e1a9a77a0307e2a546e01bae261006dd593496a277b90b27625f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

