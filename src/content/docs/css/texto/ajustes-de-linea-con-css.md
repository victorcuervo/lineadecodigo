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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7LQSC2F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEM8UCjd%2BFWxRaQUCT63QNzMpt7DTGcqLvc2jpll4xNIAiA8yB5aApXHX7hycROG8%2FPSX37CCRenU1G0cm8LUbdhCyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM%2BYblOnZXMlqXcpOFKtwDh2nHJHNgs2VjeNQO3M1jtPdP3F7TSlK%2Bl7BvILknQ93dQ1vxtUiAwlhGqIeWpP9zQa3jA3cnEuprEG1KYX8f9iQ0Yuk6o9ejpidr1uOEKUIk6Lv7IBv0fbui036aR62JDoriCzvFGTAt6e%2FjP%2BdXFAComYTdCkqKV%2Bo4G3UKSvl47BisciluykMiCnVh%2BfKsQVag%2FcjmjxIMlCwWVyz%2BQgKLHm191JqbMu8AG8SfI%2BCBl2RM22FjKA0QvonOn2ATPJpU7R4L6WVGmRWRX9ZqjzuTTNcK934k1XVwF0FRG25oUDVyEzkVL3dNqKlNy05gJkHUav7KG6gz4dzyv8ZmXDqQn1DsgCWWK8z4hloy3zsVPAcslx7Sv9jmPavB4cadn0eMCVIpKymoyPsx8%2Bs34LGp5XBqVlMTFfdiQ2yZbBnWGMenFsR%2Bh0eMTmjLz3cKdqYNX%2FW8hZnz%2FBv7lHG2vfn1V7P65CJh3droGfd7MEeBFG3zKhKjhUwQneVOJD7BPDpxeQbef4NvSL66y9qA0sOahzB4tECVxF5hJQ4XE1Te%2BIhcLlSwESMlJJ4HccZb5GXp8EqnkDfEX6aZ7SrLMEZ2750IX6qVWKkwLetBoYQaQjtQt43E8DSXYdwwkOmIygY6pgHm0DSDEydE8s92q2IdXCdFIEv6V0gFPoHOS%2F80sIKKfuef%2BWOlBs%2F3gGU%2B0ymXDCrzP36P0AMdlgzLD4y5jVitQbmjxFLCmuBrwOapQ6IeUQoi0twOcbYLHMSTT%2BcQrBu4CNqLn68A63hmyzaOYrlbQDJqKfCcb09Jz18w%2BBHkzCOm5rZgBJ1cpwH7E9kgpHOua3Iw7X9myF8u9qe5OHwKHia7o9Gt&X-Amz-Signature=1e044f6459037ab92d40b3a54bf7d321b35eb49362211cf1e47a62499dbbc2d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7LQSC2F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T050110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEM8UCjd%2BFWxRaQUCT63QNzMpt7DTGcqLvc2jpll4xNIAiA8yB5aApXHX7hycROG8%2FPSX37CCRenU1G0cm8LUbdhCyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIM%2BYblOnZXMlqXcpOFKtwDh2nHJHNgs2VjeNQO3M1jtPdP3F7TSlK%2Bl7BvILknQ93dQ1vxtUiAwlhGqIeWpP9zQa3jA3cnEuprEG1KYX8f9iQ0Yuk6o9ejpidr1uOEKUIk6Lv7IBv0fbui036aR62JDoriCzvFGTAt6e%2FjP%2BdXFAComYTdCkqKV%2Bo4G3UKSvl47BisciluykMiCnVh%2BfKsQVag%2FcjmjxIMlCwWVyz%2BQgKLHm191JqbMu8AG8SfI%2BCBl2RM22FjKA0QvonOn2ATPJpU7R4L6WVGmRWRX9ZqjzuTTNcK934k1XVwF0FRG25oUDVyEzkVL3dNqKlNy05gJkHUav7KG6gz4dzyv8ZmXDqQn1DsgCWWK8z4hloy3zsVPAcslx7Sv9jmPavB4cadn0eMCVIpKymoyPsx8%2Bs34LGp5XBqVlMTFfdiQ2yZbBnWGMenFsR%2Bh0eMTmjLz3cKdqYNX%2FW8hZnz%2FBv7lHG2vfn1V7P65CJh3droGfd7MEeBFG3zKhKjhUwQneVOJD7BPDpxeQbef4NvSL66y9qA0sOahzB4tECVxF5hJQ4XE1Te%2BIhcLlSwESMlJJ4HccZb5GXp8EqnkDfEX6aZ7SrLMEZ2750IX6qVWKkwLetBoYQaQjtQt43E8DSXYdwwkOmIygY6pgHm0DSDEydE8s92q2IdXCdFIEv6V0gFPoHOS%2F80sIKKfuef%2BWOlBs%2F3gGU%2B0ymXDCrzP36P0AMdlgzLD4y5jVitQbmjxFLCmuBrwOapQ6IeUQoi0twOcbYLHMSTT%2BcQrBu4CNqLn68A63hmyzaOYrlbQDJqKfCcb09Jz18w%2BBHkzCOm5rZgBJ1cpwH7E9kgpHOua3Iw7X9myF8u9qe5OHwKHia7o9Gt&X-Amz-Signature=d5a73643c71b77d7e128db5517cf151b460498e06c3612eeee7cceeadf7827c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

