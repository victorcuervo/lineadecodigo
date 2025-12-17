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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5QH4KAP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBH%2F6xHtfmZWZQvAdMmGJuuexo01M8ZuUwqC6JnXlvHqAiEAgONQI8SF8g1FzKxPy3xwRJY1hW2VfoHcGAsz%2BQ69fYgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn34Gfx9cZZKCwEUyrcA8e44q28ZfZqKpblzoVSl34A7lu9ky7vkwyK9p13%2B5K1YebWbXuMz9qhEi4%2FScSVeGVH7ltLZ%2F1pdQ%2FUoNIqbrI9YxfLQs9oznodzpNy1Hv91TGECFghovIlvY4AMf2RYudGRmSler61vuu%2Fq%2FvegOi7IbqZW3uNHt9cNvE6ImQkI35EuIzJugVlw%2F1zvzwM1Pgp0v9BGCWioAFaACilbUAfXov9wnze3OgCeDiaxT%2FqK9lZDvBcfiKHpfAGELxeItTXfjnUotBZKjWFhKSkDg4SX0QlskW2V9FSLTMs3dqirKf%2FVFXzL%2FlMzgHCiEyRBKENkkqhke0x71ZHWCw1US%2FUuls8%2B4fUZLYgKPt0n7QDL1W1nDbF7AmyyeVrtMhiwrlsOyjMRdmpTUJbhz1RZ89koTw%2Bism73Ybp9ACqD3BgQlhJnVMkW%2FU30rxnWgx0CDW5b4zgwoqqRvt8wXPhwiGxuUglxu%2F6v4uMPO6uWX%2FsHOY8OOPTiWg1L%2FnOwd1T19B4ktN8DQZoSxMr7R%2BFCokc4%2BfdHE2oIoNMR0R3AIotp%2Bv99OGa9sLEehOC8DEahf8EF8885gFd%2FeAvFM0sjr5ithIvlWaRlUO3ouncAkFpOMCModYqeMvcfIFcMLOAi8oGOqUBmcL2Hhr8Z%2BYzcfput5saXt8L2Q4TIPZCz6BZVi%2FSJuKkHx9S5wPmlEZu9nPBTF3YFMfl3oIBoj3CCLvLji37mwb5wJ62fbzVcClSHQEkSfx2eEh76JCS4IHFLwt8q1B5xsXBygmZXmjT5%2FH8lLwsH%2BwBUuR4GO9uBvWxzd49U%2BzpPSr4KB%2FOI%2B1PqyzMlMTpHyDkumxHfYxsPKRQoYh6YK7YKNn7&X-Amz-Signature=641d306285c07c4ab641775902239d6e3158021f9f70732b54e12308c2e8e07f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5QH4KAP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T153659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBH%2F6xHtfmZWZQvAdMmGJuuexo01M8ZuUwqC6JnXlvHqAiEAgONQI8SF8g1FzKxPy3xwRJY1hW2VfoHcGAsz%2BQ69fYgqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn34Gfx9cZZKCwEUyrcA8e44q28ZfZqKpblzoVSl34A7lu9ky7vkwyK9p13%2B5K1YebWbXuMz9qhEi4%2FScSVeGVH7ltLZ%2F1pdQ%2FUoNIqbrI9YxfLQs9oznodzpNy1Hv91TGECFghovIlvY4AMf2RYudGRmSler61vuu%2Fq%2FvegOi7IbqZW3uNHt9cNvE6ImQkI35EuIzJugVlw%2F1zvzwM1Pgp0v9BGCWioAFaACilbUAfXov9wnze3OgCeDiaxT%2FqK9lZDvBcfiKHpfAGELxeItTXfjnUotBZKjWFhKSkDg4SX0QlskW2V9FSLTMs3dqirKf%2FVFXzL%2FlMzgHCiEyRBKENkkqhke0x71ZHWCw1US%2FUuls8%2B4fUZLYgKPt0n7QDL1W1nDbF7AmyyeVrtMhiwrlsOyjMRdmpTUJbhz1RZ89koTw%2Bism73Ybp9ACqD3BgQlhJnVMkW%2FU30rxnWgx0CDW5b4zgwoqqRvt8wXPhwiGxuUglxu%2F6v4uMPO6uWX%2FsHOY8OOPTiWg1L%2FnOwd1T19B4ktN8DQZoSxMr7R%2BFCokc4%2BfdHE2oIoNMR0R3AIotp%2Bv99OGa9sLEehOC8DEahf8EF8885gFd%2FeAvFM0sjr5ithIvlWaRlUO3ouncAkFpOMCModYqeMvcfIFcMLOAi8oGOqUBmcL2Hhr8Z%2BYzcfput5saXt8L2Q4TIPZCz6BZVi%2FSJuKkHx9S5wPmlEZu9nPBTF3YFMfl3oIBoj3CCLvLji37mwb5wJ62fbzVcClSHQEkSfx2eEh76JCS4IHFLwt8q1B5xsXBygmZXmjT5%2FH8lLwsH%2BwBUuR4GO9uBvWxzd49U%2BzpPSr4KB%2FOI%2B1PqyzMlMTpHyDkumxHfYxsPKRQoYh6YK7YKNn7&X-Amz-Signature=7aec2140024c6409794fd453ee409a80737693276af3df389396dd041f99bc4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

