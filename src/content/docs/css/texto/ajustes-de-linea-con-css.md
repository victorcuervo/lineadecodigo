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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI2QCJIM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC15C3tWdgVonuHM4XFR2gm97nR5UEHAuAzmVqtlmVL%2BwIhAINPll%2BVeqliuRx0ceROY6dSBcXhWRsTOanb5HbMXuL5Kv8DCHUQABoMNjM3NDIzMTgzODA1Igzm7SZ6qV2QqW0%2FvDEq3AMgSlD%2B4K4cSpcRRpGKI%2BFuVUrB6%2FPRoF0RSHSNY9UnVwUKQ2edZ42nSYP3x3Ooy6%2FTnzWtHjWoQOXnypSRAzXY%2F7oQMNGgGhOwbS5NAMeY7LCekYKSfLlqi5TjegjGhSPj0UoADOysG1KQCkrK8XVykDEhO80s2HeXF20BLxJpZgSmH6Cnb%2ByCoz%2BoMt77dBeF%2FvVYFXjoupzQE0REyZh4A%2B9m7FKzldmAanF%2Fnqxs0rkO6gFHjNYKW3sQDxHqo6zpJdczgelGDQNvPu8Ze%2FebyaE%2F6MrabNGQETSiRoggiZxdiKgkedsP%2FHLdfaBnWEFOEplnVR2%2BB38ypyCHZfO4qdTnjxcfAxxTEamG7mj%2BGE1LsMHFfkvQ8wwwmvgyPjcAXP8EUf9ftzD9z7hGzeBq9ix9W92V2%2FBAMdIiN8bCiIxXtUv135NzneTYhk4Q8dOShWu9%2FWL6v0rsmcqxRQr0OkDY49sKAbo1Iruufx6MySyCEuXbw0k7CD40crt%2F7nBBxCS3jSkO5qRo1nHe%2FsQAtcrj89UltcqpeqvEGhjl%2FszXBbBKELdA85qvtFuG9n2TQWdP5MtvysxG6db0izoQTTHY%2Ff8jwyfFYPJtzZCMSDD%2FJvCLeLCwuGy8YDCfz4jKBjqkAVlaIeQ5ANhNGDG%2FwMP%2BVENPQkt8YN5yIpBpZB4cxsSLN0qOz64ofpw6dd2szen5ddOZJom%2FuNWw5jMhB%2B2xQqgynwG6u8Z8eCJt4nHcDOBR3XQ7QGmOGRqotvvUy8is%2BWlgzgTS%2FuOglwdi%2BpxJXb%2FPdamSbBDme4uwBE8t6UzcA8LENoKPyebVvyO5hGjEUsBVkWuQ7XfwQktQN64%2FPpZJiv4I&X-Amz-Signature=61e3a67389619a2b691a18398e01d15cd6a34eb783e5bd1f130aa177eedfaa8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI2QCJIM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC15C3tWdgVonuHM4XFR2gm97nR5UEHAuAzmVqtlmVL%2BwIhAINPll%2BVeqliuRx0ceROY6dSBcXhWRsTOanb5HbMXuL5Kv8DCHUQABoMNjM3NDIzMTgzODA1Igzm7SZ6qV2QqW0%2FvDEq3AMgSlD%2B4K4cSpcRRpGKI%2BFuVUrB6%2FPRoF0RSHSNY9UnVwUKQ2edZ42nSYP3x3Ooy6%2FTnzWtHjWoQOXnypSRAzXY%2F7oQMNGgGhOwbS5NAMeY7LCekYKSfLlqi5TjegjGhSPj0UoADOysG1KQCkrK8XVykDEhO80s2HeXF20BLxJpZgSmH6Cnb%2ByCoz%2BoMt77dBeF%2FvVYFXjoupzQE0REyZh4A%2B9m7FKzldmAanF%2Fnqxs0rkO6gFHjNYKW3sQDxHqo6zpJdczgelGDQNvPu8Ze%2FebyaE%2F6MrabNGQETSiRoggiZxdiKgkedsP%2FHLdfaBnWEFOEplnVR2%2BB38ypyCHZfO4qdTnjxcfAxxTEamG7mj%2BGE1LsMHFfkvQ8wwwmvgyPjcAXP8EUf9ftzD9z7hGzeBq9ix9W92V2%2FBAMdIiN8bCiIxXtUv135NzneTYhk4Q8dOShWu9%2FWL6v0rsmcqxRQr0OkDY49sKAbo1Iruufx6MySyCEuXbw0k7CD40crt%2F7nBBxCS3jSkO5qRo1nHe%2FsQAtcrj89UltcqpeqvEGhjl%2FszXBbBKELdA85qvtFuG9n2TQWdP5MtvysxG6db0izoQTTHY%2Ff8jwyfFYPJtzZCMSDD%2FJvCLeLCwuGy8YDCfz4jKBjqkAVlaIeQ5ANhNGDG%2FwMP%2BVENPQkt8YN5yIpBpZB4cxsSLN0qOz64ofpw6dd2szen5ddOZJom%2FuNWw5jMhB%2B2xQqgynwG6u8Z8eCJt4nHcDOBR3XQ7QGmOGRqotvvUy8is%2BWlgzgTS%2FuOglwdi%2BpxJXb%2FPdamSbBDme4uwBE8t6UzcA8LENoKPyebVvyO5hGjEUsBVkWuQ7XfwQktQN64%2FPpZJiv4I&X-Amz-Signature=5aeef824d1e6081040d2aa2e9702d57d383eedae9415a0432b1d617a11299938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

