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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXOWMWHZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChLPk82CPBNQvwhJ9v3uIu8bbka%2FjJ4nAwGKRD%2BAN5YwIgNuPN%2FMkpBJItTX72P7%2BLCS5Abi3kmJ%2FqBwqfic5YJ3Aq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMrmeYj5LSRHhqCnYyrcA2jXpqxeU%2FzV0vhGSAdRHosKFfAi8eNVIAil%2FjZs1AsDvZMeY5G%2BJoEG%2BzB0YxGBhsDEkz8tRSXWZ8PrKxK0fLJk09leeB%2FubbAPtT63mK4v6V67ZWWy1cse2kHqQru2YvsBQEQOYJQoYSoqEm5O2ek%2BpK7VqD5x%2Bv%2BUfkln6QKqvJe0nplhyhMOkWk5CVf%2FyRU0Fdj8A9DNUhFkwBe%2BlJa5D5i5LJfJZk9D2kiP7ux%2BL0KryyQ8DxUSvlzkydCt7Ens0DqRg%2FDYxAjTrpKgypn0mmAiEfVXtI6XObu55JuE68NcEZn3LIt%2F6WzNHTidv6JtXGJNabXL%2BKjk9gfx%2FPQUD5HUaojdzSqHzAukJ4KJQfzF%2FeQ61E02Od%2FAA0JtQ9K%2FI5UXUCSz6SVOj6ejljCJZNlMZxadsEkF9kJ3COqN9PffUvccWUfCqDxHLqzZFClVXsdKVU0aBq253KPKWFS5Vrx%2F6KO%2FblukNGqOOk21rJDVNYDF6y4lRsEV38l12e4%2FtxXvhWnexThRbWe7UqPx6z3cWt6S3z37OJ7CBBhXRo9f6VrAEpsgPhtXFJ93oN0Y0NQcdarhBjnvyqi5QE2Er%2FjR%2FY0WfdZXAsBytMU467WvOhqujlcTXW%2BtMNGdicoGOqUBttaZNSXt0XloNlr6bwrJgkmbaAOnCX5rlDV6nj6XExmKtsyza7UUFJR%2BRXyqHb%2BWmqYRQuHexRSLTV5nfk06rWfSGZu29h9LCJGWjrWIQbh5VB%2BGLJX%2F%2Br2rXDT2QO%2BCW5Rpj4T290eqiAd%2BcFYLCFe7sAQhNAoyX3wzYiWW25s46uQpXb3%2BPMSwAjtT6ju6NLpXpoqZafZxSw2wQqI8cKMIAXzX&X-Amz-Signature=f4e5a916d0a30fdfa15406455c96f4ced141239ce1352984291f8bf0b9c7c9d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXOWMWHZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChLPk82CPBNQvwhJ9v3uIu8bbka%2FjJ4nAwGKRD%2BAN5YwIgNuPN%2FMkpBJItTX72P7%2BLCS5Abi3kmJ%2FqBwqfic5YJ3Aq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDMrmeYj5LSRHhqCnYyrcA2jXpqxeU%2FzV0vhGSAdRHosKFfAi8eNVIAil%2FjZs1AsDvZMeY5G%2BJoEG%2BzB0YxGBhsDEkz8tRSXWZ8PrKxK0fLJk09leeB%2FubbAPtT63mK4v6V67ZWWy1cse2kHqQru2YvsBQEQOYJQoYSoqEm5O2ek%2BpK7VqD5x%2Bv%2BUfkln6QKqvJe0nplhyhMOkWk5CVf%2FyRU0Fdj8A9DNUhFkwBe%2BlJa5D5i5LJfJZk9D2kiP7ux%2BL0KryyQ8DxUSvlzkydCt7Ens0DqRg%2FDYxAjTrpKgypn0mmAiEfVXtI6XObu55JuE68NcEZn3LIt%2F6WzNHTidv6JtXGJNabXL%2BKjk9gfx%2FPQUD5HUaojdzSqHzAukJ4KJQfzF%2FeQ61E02Od%2FAA0JtQ9K%2FI5UXUCSz6SVOj6ejljCJZNlMZxadsEkF9kJ3COqN9PffUvccWUfCqDxHLqzZFClVXsdKVU0aBq253KPKWFS5Vrx%2F6KO%2FblukNGqOOk21rJDVNYDF6y4lRsEV38l12e4%2FtxXvhWnexThRbWe7UqPx6z3cWt6S3z37OJ7CBBhXRo9f6VrAEpsgPhtXFJ93oN0Y0NQcdarhBjnvyqi5QE2Er%2FjR%2FY0WfdZXAsBytMU467WvOhqujlcTXW%2BtMNGdicoGOqUBttaZNSXt0XloNlr6bwrJgkmbaAOnCX5rlDV6nj6XExmKtsyza7UUFJR%2BRXyqHb%2BWmqYRQuHexRSLTV5nfk06rWfSGZu29h9LCJGWjrWIQbh5VB%2BGLJX%2F%2Br2rXDT2QO%2BCW5Rpj4T290eqiAd%2BcFYLCFe7sAQhNAoyX3wzYiWW25s46uQpXb3%2BPMSwAjtT6ju6NLpXpoqZafZxSw2wQqI8cKMIAXzX&X-Amz-Signature=6bba0c192fdd999de4321b607fc9eda3a851fa0c496b0655cd179c94119a9127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

