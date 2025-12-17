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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJRLBJYH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9CVL8sMiIvclSWleAMssaE3bw7I6qZ2BK5ztRwrha%2FQIhAN80N5LSzTVJvKhtp%2Bk39Q22oMdLj4sZnMM1CW%2FSvvb9KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzATaSA33SPbOBwusq3AOnOxM8wdU3HFV9fg2pGQdZVhEIcsd0FNWFUWL%2BqZSsjO%2Fx6dqyi174rDOnrinzeRhfnivkK3iQHqFAxdmFb5EBG5Qmp04ZP34U5L18Pcogu1HbxSmcnDmetOz5a69mhgEXLTvrdYj%2FjDDhot5aJahk2BsVpKi9WQTyU%2BYLMbDURzP4lykeXSH9C0rNMb%2BMTsoD8WR97TsJce2px1NqvtQgBZoJtvM31%2FHF5iIo1oGEZX42BlLvDr6WHBproBAwDEMZOq%2FDANO2o0fOGEapsvHYMCYFO3Xm%2FFKlHNb7pQfBAoqscC7CAxP8sR86yNJF%2BI2uPY2sYZjZBs5zcKECSfQWxR3t6B8TwgwaqOEufXjoPdzUJKmj7Uxf7FKqu1o8zq0rcX0%2BGkfyRSE%2Bg9snnWoX67rE9PRanFX8LT54N%2FnVWPAFVmI5PI9zE9UAij5jZOb0AB4PNHiyjrju0waUjabPbVcEFRQmHvu6G5GKpklPGTItG4MAGAxv41qQFCNo%2FlNAp%2FgY6TSnVdTAtuacCdRM6Wq0hfi8e42N83g519YVBcXWQX0SPD1xjk1iXQVEbwtMOCxtge95fmKkFqHbXhRMgu6r%2BvBS%2FYHoQeWnyDNJb%2Bz6AWUdu1037aAfEDCbn4vKBjqkAakyFbf3GLLjzm9l2eArZ8%2FZo8JIcNJc%2BpE2lTjx%2B3wSnQhgIMQjW3Cq7iw1vHX6wSs3Irccpk39xQqZVy6QBQbA0NPHOQEQ%2BGYcp577gP9Ah2D8C6tdqll2zVPQKE0lqsHnSWVDOO0lqCQuL1MGuSMCmWa63z%2FQvX3hRnZMwN7K1mPPxSEaTAhoFxZ6lggn4CFi4eChfft3%2B5Y3kZVRIJnbFh4Z&X-Amz-Signature=15773ee46f4db73ed2650b0ef5fd9fe9bc549003214227bd1ca8a84c24ef321e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJRLBJYH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9CVL8sMiIvclSWleAMssaE3bw7I6qZ2BK5ztRwrha%2FQIhAN80N5LSzTVJvKhtp%2Bk39Q22oMdLj4sZnMM1CW%2FSvvb9KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyzATaSA33SPbOBwusq3AOnOxM8wdU3HFV9fg2pGQdZVhEIcsd0FNWFUWL%2BqZSsjO%2Fx6dqyi174rDOnrinzeRhfnivkK3iQHqFAxdmFb5EBG5Qmp04ZP34U5L18Pcogu1HbxSmcnDmetOz5a69mhgEXLTvrdYj%2FjDDhot5aJahk2BsVpKi9WQTyU%2BYLMbDURzP4lykeXSH9C0rNMb%2BMTsoD8WR97TsJce2px1NqvtQgBZoJtvM31%2FHF5iIo1oGEZX42BlLvDr6WHBproBAwDEMZOq%2FDANO2o0fOGEapsvHYMCYFO3Xm%2FFKlHNb7pQfBAoqscC7CAxP8sR86yNJF%2BI2uPY2sYZjZBs5zcKECSfQWxR3t6B8TwgwaqOEufXjoPdzUJKmj7Uxf7FKqu1o8zq0rcX0%2BGkfyRSE%2Bg9snnWoX67rE9PRanFX8LT54N%2FnVWPAFVmI5PI9zE9UAij5jZOb0AB4PNHiyjrju0waUjabPbVcEFRQmHvu6G5GKpklPGTItG4MAGAxv41qQFCNo%2FlNAp%2FgY6TSnVdTAtuacCdRM6Wq0hfi8e42N83g519YVBcXWQX0SPD1xjk1iXQVEbwtMOCxtge95fmKkFqHbXhRMgu6r%2BvBS%2FYHoQeWnyDNJb%2Bz6AWUdu1037aAfEDCbn4vKBjqkAakyFbf3GLLjzm9l2eArZ8%2FZo8JIcNJc%2BpE2lTjx%2B3wSnQhgIMQjW3Cq7iw1vHX6wSs3Irccpk39xQqZVy6QBQbA0NPHOQEQ%2BGYcp577gP9Ah2D8C6tdqll2zVPQKE0lqsHnSWVDOO0lqCQuL1MGuSMCmWa63z%2FQvX3hRnZMwN7K1mPPxSEaTAhoFxZ6lggn4CFi4eChfft3%2B5Y3kZVRIJnbFh4Z&X-Amz-Signature=df419ca9d2367cf2bc8a2efc598834f5748f0576d2434e4bb45c9d7a185b86fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

