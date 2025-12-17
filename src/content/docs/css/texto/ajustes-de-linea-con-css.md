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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AODZ3UH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEALZQGSKWfWWKKC%2FO9RnGqQjlnqW7JvtiXo5DJzeMG9AiEA4GSpClERToYG2ArpvOQSGtHZNpwDludzdwzBIg8RhIYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMPI3ShJ3aYGjVJEvyrcA49wKCon3hxfNXX4%2BA2EX2DS440rK29oJTu8G9KaKJFIqhxXDVNQlTtQbEAkQVO24T%2BNKSEKKYseUEz83HW6YzSDfvk0RuJA%2F%2Bo2yfAet4gWfzsvcjSTn4Up1WlULRall5ZYqVSu8MlarmR9m5R%2F94Zf2oUyG6cUbISyEltAedKB0FEMHI%2BaTg%2FIhGjL2LnHaYgWNAExERUMiuSlAtKmNj7m%2FZ3KxNLNj6Atw6YaKgiQinf0Mn6oS2C1wyanPorBM6A059cd2pZNx8gGtyHoq%2BbNJy4DQxnIlBouBI5uCi93k%2FFxGJGUQxapoMnOoCjkdzT4st%2BAGxt3acRvon%2FKTidgsMwJT%2FV1HUe6gP9ojdTsNoNjU3%2BQhY33r8f1KyB5OurXsD%2FRGvHkhbqszJAEBjzDqGA2%2FjTPW1je28Vqb%2B6RZ4b4NsJuOTb8tIMSu8xRQtMzOiu51rJr9Vloh6pecpQ9zEijBzZlL6S%2F9DvMuQvjfkjYjcl3Lfgqj4Or66vfHHYqJ3o1zp8cifxllwUJHjEyVNZYq7cPMCrMYQwFoH7fOeE%2BC04Af7JgOSfwJCpUrgGMeHx%2BL5008RgZhxjdJdWQWxA6DNFpfEqOzEChTOabCudF%2FLlEonqDHOA9MKLGisoGOqUBB4QBZ8Jp2lXebDev4nmGqmUOaJKHTjdshuCMyYlqvPE3b%2FvU9fYJHbAQYLX%2ByEI6rlWWvUSTNleUktKt2qAF%2B4E8Z3y4m%2BWcavJbH4H1uE5vPAn%2BIoucUtE1B7BEoJQm7jblYxNiUfKhjkMKQtxFmihbWfSfItvBvNPTIoTLoRjdOrhWFoNByJAxab5xFvg1dYBqho0zENr29C010Htpw8mSdSWk&X-Amz-Signature=88b550564f60dfe810c00fa6f25a9516ed121aa62a33e96beb054cb180daf40a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AODZ3UH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEALZQGSKWfWWKKC%2FO9RnGqQjlnqW7JvtiXo5DJzeMG9AiEA4GSpClERToYG2ArpvOQSGtHZNpwDludzdwzBIg8RhIYq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMPI3ShJ3aYGjVJEvyrcA49wKCon3hxfNXX4%2BA2EX2DS440rK29oJTu8G9KaKJFIqhxXDVNQlTtQbEAkQVO24T%2BNKSEKKYseUEz83HW6YzSDfvk0RuJA%2F%2Bo2yfAet4gWfzsvcjSTn4Up1WlULRall5ZYqVSu8MlarmR9m5R%2F94Zf2oUyG6cUbISyEltAedKB0FEMHI%2BaTg%2FIhGjL2LnHaYgWNAExERUMiuSlAtKmNj7m%2FZ3KxNLNj6Atw6YaKgiQinf0Mn6oS2C1wyanPorBM6A059cd2pZNx8gGtyHoq%2BbNJy4DQxnIlBouBI5uCi93k%2FFxGJGUQxapoMnOoCjkdzT4st%2BAGxt3acRvon%2FKTidgsMwJT%2FV1HUe6gP9ojdTsNoNjU3%2BQhY33r8f1KyB5OurXsD%2FRGvHkhbqszJAEBjzDqGA2%2FjTPW1je28Vqb%2B6RZ4b4NsJuOTb8tIMSu8xRQtMzOiu51rJr9Vloh6pecpQ9zEijBzZlL6S%2F9DvMuQvjfkjYjcl3Lfgqj4Or66vfHHYqJ3o1zp8cifxllwUJHjEyVNZYq7cPMCrMYQwFoH7fOeE%2BC04Af7JgOSfwJCpUrgGMeHx%2BL5008RgZhxjdJdWQWxA6DNFpfEqOzEChTOabCudF%2FLlEonqDHOA9MKLGisoGOqUBB4QBZ8Jp2lXebDev4nmGqmUOaJKHTjdshuCMyYlqvPE3b%2FvU9fYJHbAQYLX%2ByEI6rlWWvUSTNleUktKt2qAF%2B4E8Z3y4m%2BWcavJbH4H1uE5vPAn%2BIoucUtE1B7BEoJQm7jblYxNiUfKhjkMKQtxFmihbWfSfItvBvNPTIoTLoRjdOrhWFoNByJAxab5xFvg1dYBqho0zENr29C010Htpw8mSdSWk&X-Amz-Signature=93d4fc946a8514acb5908aaa6896ffa2bf138b9d8eb554a433af1a3c8da00d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

