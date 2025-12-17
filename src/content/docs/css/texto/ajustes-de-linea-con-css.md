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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT6XPLN7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkiLAHVKwISyZWizeLotlVCmWFcZiq5s%2FnkwW3808dWgIhAM9lYk%2B1ZUFnuof51V%2FOCdppQEQ2n6FZimHpYBXL0tsQKv8DCH0QABoMNjM3NDIzMTgzODA1IgwO9WEneKjrfI1SMrYq3ANli3EmsmzrWroFwozYtcCbQ7wBDW4NS%2F%2Blua99BujVUtbxVoQqrIAYQAicA1Ae2CLo7YP2wl%2Bg0HZaQYF1fu2yDtBZ0GJPWF0egyUhkZ7cRjnraTfRCD%2BcBkPv%2Bn8JpuXAi%2F8aY%2FiT%2FVW22ztawalLTsGMAxRKSqUMw%2BTOIYSv9Xej%2BBHAOcQeknqrQNGxNNBOpi7qB4dPIe8o7Q%2FIJDhb7XMT2gQuaazKZw5iu%2FoXe5MPdB5QNQ4XPRckJk1%2FWNptDhFsr%2BPI7TsfXVmepXgNGO6pPT%2FtILMc9I4iOYQW%2BbG%2Bg7uDLPtOg4lefB57d1ssRtKi0g6JzLwPzAtSWhAy30iMcC7bWmRnj4Xhs8kjKD7FJqKN2iULKUerk4w4HAXmyaYCgZMcBEOXhCRIZKS%2BUBVPk3dgkOVjlVVCP4m2ueXzeTtGCqNUCiXrTM4Yz%2FG3Ib7l%2FJiXPpam%2FUWRY1iMIzv%2BhYDeyxNRa29xEMVLiw7KI2H6evzmgDZU8du6j264uup1bv%2BtEBhL88vytwIk7uFpZ1UrZ9GJZkyv24pqZ%2FrOSinRHR%2FAgewT7RN4LlrIVwgIlwD6643EuQM4X6%2FoQ26iBE2pT8%2BgtSnsuF%2B6yyzN9jbOqAgpaIvoOjCxqorKBjqkARcexGZGbUvvdrvrhQUS%2FF5hp%2B%2FJ5tQ55K5O6M1xcuQOqyGEIO1qvuf6ItJmj9J1a%2FtBHxViqp5%2FEoYbqjjw14Xcb8fpdiHjRArPjCPwUng1Fang1nbnM2G%2BkPWSZUtjdRc%2BwiXz36i%2FEzcYtdtEM54hb9M9h0QEkuUTrJNswgOLTD7urFm7fUVYgEVZkxCF332MHwNfB67XtQ99WUBjWirk9SU5&X-Amz-Signature=c86e5c0f01f2e2a382d08c9e4081fad33fa3cdd6af632e54cec4f8eb5e1ef956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT6XPLN7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T114539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkiLAHVKwISyZWizeLotlVCmWFcZiq5s%2FnkwW3808dWgIhAM9lYk%2B1ZUFnuof51V%2FOCdppQEQ2n6FZimHpYBXL0tsQKv8DCH0QABoMNjM3NDIzMTgzODA1IgwO9WEneKjrfI1SMrYq3ANli3EmsmzrWroFwozYtcCbQ7wBDW4NS%2F%2Blua99BujVUtbxVoQqrIAYQAicA1Ae2CLo7YP2wl%2Bg0HZaQYF1fu2yDtBZ0GJPWF0egyUhkZ7cRjnraTfRCD%2BcBkPv%2Bn8JpuXAi%2F8aY%2FiT%2FVW22ztawalLTsGMAxRKSqUMw%2BTOIYSv9Xej%2BBHAOcQeknqrQNGxNNBOpi7qB4dPIe8o7Q%2FIJDhb7XMT2gQuaazKZw5iu%2FoXe5MPdB5QNQ4XPRckJk1%2FWNptDhFsr%2BPI7TsfXVmepXgNGO6pPT%2FtILMc9I4iOYQW%2BbG%2Bg7uDLPtOg4lefB57d1ssRtKi0g6JzLwPzAtSWhAy30iMcC7bWmRnj4Xhs8kjKD7FJqKN2iULKUerk4w4HAXmyaYCgZMcBEOXhCRIZKS%2BUBVPk3dgkOVjlVVCP4m2ueXzeTtGCqNUCiXrTM4Yz%2FG3Ib7l%2FJiXPpam%2FUWRY1iMIzv%2BhYDeyxNRa29xEMVLiw7KI2H6evzmgDZU8du6j264uup1bv%2BtEBhL88vytwIk7uFpZ1UrZ9GJZkyv24pqZ%2FrOSinRHR%2FAgewT7RN4LlrIVwgIlwD6643EuQM4X6%2FoQ26iBE2pT8%2BgtSnsuF%2B6yyzN9jbOqAgpaIvoOjCxqorKBjqkARcexGZGbUvvdrvrhQUS%2FF5hp%2B%2FJ5tQ55K5O6M1xcuQOqyGEIO1qvuf6ItJmj9J1a%2FtBHxViqp5%2FEoYbqjjw14Xcb8fpdiHjRArPjCPwUng1Fang1nbnM2G%2BkPWSZUtjdRc%2BwiXz36i%2FEzcYtdtEM54hb9M9h0QEkuUTrJNswgOLTD7urFm7fUVYgEVZkxCF332MHwNfB67XtQ99WUBjWirk9SU5&X-Amz-Signature=3df5fdb4ac0644bb0901cf9ad2c8d9f67f0fe7bf37dd4a77061b7786c55a09bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

