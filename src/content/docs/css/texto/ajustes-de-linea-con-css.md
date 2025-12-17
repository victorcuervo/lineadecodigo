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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DTNFK6P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZAX17W0KWklafbxRsEQGzsCUP3oLnGdVqJB8MG9XgXAiBck6fwbRzI%2Ffq6djq7fKV5yDQ8TXSE0hh6wjDQyhpRrSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHE8MbHioRn1uxocQKtwDOXTN3bqiqbfaqDYiMA511YfZ1W8lpWF0ccBhPH9UbD%2BgOLnryXHdjz7BP%2B5Xci7vB%2Fb%2F%2Fm6h5tf6Gz%2Fkxu6kIRgm4yvVBbz2GqTWvpywKzBsDQlLIGYZDD20wGbrdq8RGa7XomYz%2BzlW2uHafKeEb%2FO%2Biur4ofk9X2CDrnEgYs%2BMmYs7HIiJMpEoDFVlwM5WSMiZYckqSv0LI9RGhe6dNViC%2BNLPJkAiUKGjSL9hpGrHh84C3j1BhuEnmJrqtWoOixaqVFEriRwBUkaD%2BObHjghzgJPwXKt5qwre16RU4bZ83zUyunOs7k9ZLTz8Ei%2BR%2FWnnQWYfBCkX812mJi45KAr9a0gnda9SFl1ZNl%2FjfdzHDNFFUXRnu0GTffEWDYTTBAh3%2FuU5Y4%2BRFWN4mPepKAHe75nEz%2F7a0fjIV5AODKvKec0muf%2B2FxkBuX%2BVvRygxd1MZFiKezVDhxuaLVU6DKUUshFH8RZviWN2NkTFlFylp8x%2B%2Bdab1ObQ%2FjuH0gmYbDJgnlP%2BntNpDoYEvohvctYpeBkAMnkT%2Fqd8XH2mvfeFih5aogXmDFvadjO8CmtSIMkoVnJ6ybe%2BLvOAfsBzJtF4orabkU5BdzsUHIQS0yv%2BeZv1ZuXMEuIScX0wp66MygY6pgGbK%2FJWW6WFdgoBihnqgWaRhA2QbrmKfn%2B9VjMj8%2BdOalNfhyi5xtVIIC8P2qzNs4wYlD1Dos9dqHNMZ%2FEwsSZ3hcITInKiF3U2AR2t9LCFtjANSchyniHqoP9w9HLcxB4SkJfWQa8w7D2vuUXHfcfg38eda0TpUD2hW%2FTKR8YgDWrEW%2FwDzcoDzvGYDMxLHQoUKv9EoFBCl9zLDG1hHW6ws70SLOAR&X-Amz-Signature=a5e6ca04136d479695dca475a4b814a6ac07bfc08d5cea2aac3cbf3ddf90f4ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DTNFK6P%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAZAX17W0KWklafbxRsEQGzsCUP3oLnGdVqJB8MG9XgXAiBck6fwbRzI%2Ffq6djq7fKV5yDQ8TXSE0hh6wjDQyhpRrSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHE8MbHioRn1uxocQKtwDOXTN3bqiqbfaqDYiMA511YfZ1W8lpWF0ccBhPH9UbD%2BgOLnryXHdjz7BP%2B5Xci7vB%2Fb%2F%2Fm6h5tf6Gz%2Fkxu6kIRgm4yvVBbz2GqTWvpywKzBsDQlLIGYZDD20wGbrdq8RGa7XomYz%2BzlW2uHafKeEb%2FO%2Biur4ofk9X2CDrnEgYs%2BMmYs7HIiJMpEoDFVlwM5WSMiZYckqSv0LI9RGhe6dNViC%2BNLPJkAiUKGjSL9hpGrHh84C3j1BhuEnmJrqtWoOixaqVFEriRwBUkaD%2BObHjghzgJPwXKt5qwre16RU4bZ83zUyunOs7k9ZLTz8Ei%2BR%2FWnnQWYfBCkX812mJi45KAr9a0gnda9SFl1ZNl%2FjfdzHDNFFUXRnu0GTffEWDYTTBAh3%2FuU5Y4%2BRFWN4mPepKAHe75nEz%2F7a0fjIV5AODKvKec0muf%2B2FxkBuX%2BVvRygxd1MZFiKezVDhxuaLVU6DKUUshFH8RZviWN2NkTFlFylp8x%2B%2Bdab1ObQ%2FjuH0gmYbDJgnlP%2BntNpDoYEvohvctYpeBkAMnkT%2Fqd8XH2mvfeFih5aogXmDFvadjO8CmtSIMkoVnJ6ybe%2BLvOAfsBzJtF4orabkU5BdzsUHIQS0yv%2BeZv1ZuXMEuIScX0wp66MygY6pgGbK%2FJWW6WFdgoBihnqgWaRhA2QbrmKfn%2B9VjMj8%2BdOalNfhyi5xtVIIC8P2qzNs4wYlD1Dos9dqHNMZ%2FEwsSZ3hcITInKiF3U2AR2t9LCFtjANSchyniHqoP9w9HLcxB4SkJfWQa8w7D2vuUXHfcfg38eda0TpUD2hW%2FTKR8YgDWrEW%2FwDzcoDzvGYDMxLHQoUKv9EoFBCl9zLDG1hHW6ws70SLOAR&X-Amz-Signature=d64c1d0d64dc20ae26816c3613d9e0a2e0db3fe201be34374e35f537a0209f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

