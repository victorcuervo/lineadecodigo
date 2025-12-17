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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RINFN7R6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXjheyJNH9VU8EH1l7350my5ZmBc7%2FYihaPJxs89tgDAiArVjRWvE%2Fq%2BWADzQAEOBYQbXbYuYcsZgtCw6kBsgd6hSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMuPxRRjpq7%2FE4yo9jKtwDaZC8KYElLXFlC4rUtbqTJAhknQ%2FBnT7t21yT4cHaTc29S04EpVg3hfSDr4kb%2Bq06BVjq0%2FSz8m%2Fpi8%2BbV%2FLz28yJAGmI%2BrE6LR%2FASrwTiJnQDSLC%2B6XfJzA8N0A0Z90pkBYyLZz0vEqZ9Unz3vqSkZUuskw0DdhNS5WKP5naUk3yHzrsEUj%2FJ4gA%2BFLYyeaxRGIyd8N96kB%2Bjn9FK7wj07Uk2w5lJbKB4ElkpOWvlRut27mpyc%2FISq4pvyEw%2BxLhhgHWSjWU7BQuCnIDIgHsXovmKVzCHb1Vu0Nad3CBiaf7iKKe2H5u7Oc3u2yVfT5m3cJLlM3tMW5ZSwLXsmx0zUOH0OvetUF6O3R1Sw13K0%2BdTLwlFocsnEBP3qybo2WQrLuclWHbSREuGhOckF%2FrCcF5k9%2FxYrT0N2kwAeonLNmLkYrsOVmlGE7WCoJt1zgLgrghUurufNl5S%2B1cDikxmuJ8ztHiNV%2FmxnfuAglTbybWzmsWgeE6fmRXjCDUDETaE297EttScDYnFK6VsG2a9%2FU0vAVx7oFVTcad%2Fp%2Fzh8SmHjWSEw%2B24%2BejsoiOevLFI0F8SBffY3umAGuoB8Odth%2BWX8yH7A99QMsA1TOjcL3w5oPey8aw1Ag%2BSc0wno%2BKygY6pgH9hwM0ZM9PBIyVz6NnN6FhBpVw6GQOCH6qNe%2F4Yz5S6FbAQzOJrf6VrFZDHL7pGD5GFo9K8I7%2BkmcJFIOAaeVgtAXDW1162AjEomvG1MTuVGOdHjBNh19ST6N6FYE3TaC5F5XzpLKRzoSO0CEeNMCjRd1iS7i8MB%2FfMJDxRsRKJGW5UTl9%2FpiP5BBbOrZXbQ4Y9aQz6RJ623bqRVevQ1TC%2FNeKUe8%2B&X-Amz-Signature=d81268c2c7c92e1cfa0964b94f7fc6d2758fe2c8542f4a24bacecaaf784f3219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RINFN7R6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXjheyJNH9VU8EH1l7350my5ZmBc7%2FYihaPJxs89tgDAiArVjRWvE%2Fq%2BWADzQAEOBYQbXbYuYcsZgtCw6kBsgd6hSr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMuPxRRjpq7%2FE4yo9jKtwDaZC8KYElLXFlC4rUtbqTJAhknQ%2FBnT7t21yT4cHaTc29S04EpVg3hfSDr4kb%2Bq06BVjq0%2FSz8m%2Fpi8%2BbV%2FLz28yJAGmI%2BrE6LR%2FASrwTiJnQDSLC%2B6XfJzA8N0A0Z90pkBYyLZz0vEqZ9Unz3vqSkZUuskw0DdhNS5WKP5naUk3yHzrsEUj%2FJ4gA%2BFLYyeaxRGIyd8N96kB%2Bjn9FK7wj07Uk2w5lJbKB4ElkpOWvlRut27mpyc%2FISq4pvyEw%2BxLhhgHWSjWU7BQuCnIDIgHsXovmKVzCHb1Vu0Nad3CBiaf7iKKe2H5u7Oc3u2yVfT5m3cJLlM3tMW5ZSwLXsmx0zUOH0OvetUF6O3R1Sw13K0%2BdTLwlFocsnEBP3qybo2WQrLuclWHbSREuGhOckF%2FrCcF5k9%2FxYrT0N2kwAeonLNmLkYrsOVmlGE7WCoJt1zgLgrghUurufNl5S%2B1cDikxmuJ8ztHiNV%2FmxnfuAglTbybWzmsWgeE6fmRXjCDUDETaE297EttScDYnFK6VsG2a9%2FU0vAVx7oFVTcad%2Fp%2Fzh8SmHjWSEw%2B24%2BejsoiOevLFI0F8SBffY3umAGuoB8Odth%2BWX8yH7A99QMsA1TOjcL3w5oPey8aw1Ag%2BSc0wno%2BKygY6pgH9hwM0ZM9PBIyVz6NnN6FhBpVw6GQOCH6qNe%2F4Yz5S6FbAQzOJrf6VrFZDHL7pGD5GFo9K8I7%2BkmcJFIOAaeVgtAXDW1162AjEomvG1MTuVGOdHjBNh19ST6N6FYE3TaC5F5XzpLKRzoSO0CEeNMCjRd1iS7i8MB%2FfMJDxRsRKJGW5UTl9%2FpiP5BBbOrZXbQ4Y9aQz6RJ623bqRVevQ1TC%2FNeKUe8%2B&X-Amz-Signature=eb3603fa47589488c39222441c3e643446e9b5f6c2eac6f19745bffe0b6de706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

