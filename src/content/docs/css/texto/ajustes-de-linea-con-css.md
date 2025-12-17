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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI7G63MY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoPa2kLsZk%2FvjBc9k7jPBr1gVou%2Fr%2FA911u8eqftvT9gIgIxCsCmxR0L3yCuvo4uen9NlaXd%2B%2FZ2Jc%2FJOwl4Jq%2BiQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG03xJUeTO7vN8WLRCrcA7QT%2BGnlaM%2B6nY2uGJkZUhqTRMEvQKU0QmckjEGtBv9RpoO85ndAtb96GgbBf4iayE5NvtK%2B7hkOJTcQnPbng%2B5fbsCTN0SPbbeeE6i%2FBWAW8tPTAc2eZAwXLlqnc2Ug6gWtGWqU0u5WbluHjsMqyzq8AClOE5zP86szlSYk68j2JYk9lE2OIARJZfKr0liBnMkLAIqFGWfuANgf1KvQmpdjRbP3pwkoybqnd0JnTJZbeLmJa6%2FxK6iU4HlmQIWDcHBxuFsWmr7KJHqSzI1skpHV5PSYesZptY%2BPn8V6zkrtRl14zW4Xcwnjbw%2FzViI9220HPB%2FCWT%2Fc5vf0yS%2BTIfzevbqBiUkHBnwZ4RXTZmUz3Tvwf83dvP64X2NUNapPWuv0xfSGyPgP4lLk%2FOAq11dlexYGQmIgWAEMH6PkJ224SVru6oR2%2FKBC1rUmqLJDLR%2Bgr65hmxPkqbWLI8UaMBF8yIgn5NMAMmV3IY%2FqibupFaSMiyCQFapf3%2F0jsHWJkXGyAPs%2F50O9uAaLZlafjujcj2b8g3XrUYvQ%2BWYH9M%2Bpvl0sxB6UDwVg3sa3eg8%2FUQ63RKHHzYmT3%2Fz9J8tWzRim9D8FCYiOJS8FdrP9IKhzocAyFNIEdYh9BxLwMJafi8oGOqUBrheMRH%2FbC0X6deCqv3%2Be%2FFoK4nnWyUxTwJNwJS5kvRWkBat0YJjFu%2BmRHWONUXRPoc2PGLmVPEmwzlCD%2F2KXBX4O%2BukLdMWPQ0y%2BEEz8OGETyrGMh%2BB2Q0wM%2B69NSfVTjpqIyjpFJ2C54Et8cowKWzaxBuaLqlCEur0R3wK6hyn3ufPKpKqfP2tZcd7mw%2FUqcQ%2Flj8dkYT%2FhuzMl247rWqJgdnPD&X-Amz-Signature=5d58db939ee9c57bcc7b9ea412539907e374f172e6f600ddd81b893db935404f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI7G63MY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoPa2kLsZk%2FvjBc9k7jPBr1gVou%2Fr%2FA911u8eqftvT9gIgIxCsCmxR0L3yCuvo4uen9NlaXd%2B%2FZ2Jc%2FJOwl4Jq%2BiQqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG03xJUeTO7vN8WLRCrcA7QT%2BGnlaM%2B6nY2uGJkZUhqTRMEvQKU0QmckjEGtBv9RpoO85ndAtb96GgbBf4iayE5NvtK%2B7hkOJTcQnPbng%2B5fbsCTN0SPbbeeE6i%2FBWAW8tPTAc2eZAwXLlqnc2Ug6gWtGWqU0u5WbluHjsMqyzq8AClOE5zP86szlSYk68j2JYk9lE2OIARJZfKr0liBnMkLAIqFGWfuANgf1KvQmpdjRbP3pwkoybqnd0JnTJZbeLmJa6%2FxK6iU4HlmQIWDcHBxuFsWmr7KJHqSzI1skpHV5PSYesZptY%2BPn8V6zkrtRl14zW4Xcwnjbw%2FzViI9220HPB%2FCWT%2Fc5vf0yS%2BTIfzevbqBiUkHBnwZ4RXTZmUz3Tvwf83dvP64X2NUNapPWuv0xfSGyPgP4lLk%2FOAq11dlexYGQmIgWAEMH6PkJ224SVru6oR2%2FKBC1rUmqLJDLR%2Bgr65hmxPkqbWLI8UaMBF8yIgn5NMAMmV3IY%2FqibupFaSMiyCQFapf3%2F0jsHWJkXGyAPs%2F50O9uAaLZlafjujcj2b8g3XrUYvQ%2BWYH9M%2Bpvl0sxB6UDwVg3sa3eg8%2FUQ63RKHHzYmT3%2Fz9J8tWzRim9D8FCYiOJS8FdrP9IKhzocAyFNIEdYh9BxLwMJafi8oGOqUBrheMRH%2FbC0X6deCqv3%2Be%2FFoK4nnWyUxTwJNwJS5kvRWkBat0YJjFu%2BmRHWONUXRPoc2PGLmVPEmwzlCD%2F2KXBX4O%2BukLdMWPQ0y%2BEEz8OGETyrGMh%2BB2Q0wM%2B69NSfVTjpqIyjpFJ2C54Et8cowKWzaxBuaLqlCEur0R3wK6hyn3ufPKpKqfP2tZcd7mw%2FUqcQ%2Flj8dkYT%2FhuzMl247rWqJgdnPD&X-Amz-Signature=023450435bff73557ee0b01602d6190bd5390bc4a3c486bfb1801962ecab8c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

