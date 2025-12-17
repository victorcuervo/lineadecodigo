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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHER5WON%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDupmwnMVsbq2XSK6j7QqyxEQ4FhVqJepewtKZ%2F%2Bgen4AIhAP0HaS4yNDwN4PNbsZh%2Fy3WlYVpDY7IlVuSnAH3QJSvEKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTt9cd2uXUVasSAAIq3ANwc2K%2F%2BJmQr2DOptFiGxag0G00n5SVuQvb9e1Dl5nzRjSxzU%2BMx2IruKzI9FiDplzdOVbfgkHIKBraolBqAk90rBu%2BnJEtdLBOnGTatBZAIKT0ySXHyfwPIWGZfw2jiR5w2Kz38FugjFReb7IS5Up6YQAhRvdIlXLRjHXi26%2Fv%2FRdwhrtc0zDCrQ5BIC1i9jGBi8JzweBTIh4WtBeOJzcgigoPr%2FWRwj2GcoOztvi0a72wEa3jqWLlOBZE0i9J70zdnCP0n1OND3WtU5YiEdZfVDp7jQ3chPulSiUKfTzm1jRIBbwtLHipCLczwnr%2B9aOmPYHCV5r2d8zzvwZGytLZStly55pv70AP3ClG6mCWWgMwZeIK7JNOCNLr33C%2FZSwiIs7YoUqPXn197wCD13XQwQWzR551DkHX2OtvJks2Id3NrGFdq0i5Ma0HZtQ1aaAGHqvLh03dAipqPLnylvLlU0g4hdE7FaRMsvjRlREi5U4VH3J7eaYqBsK1oyEqgBa2G09A0xHLhP13SUZSIs3C1HwTSbkVBGktMP9BPoWgXbAdQMq6Y5zMv7TP%2FFIR2mFihgwKPGjDr9yQ81N%2Bv8JMyH96Bi%2FsmhcPxeHzwVgWJS039xHJE9JRxzioXzDcoIvKBjqkAfAHuTRRZ4YB8l%2BdtGo9jww%2FmCq%2Bb9ZTSYhIpwiDEGph8mQMl7ZnFlAxvF49uKgJQPZMtEbDccM%2ByDXx0rSRGX%2FwEr5rhGQLsGrqaePl93YNUvRrxOjrGKYz4HaHcaNwFi3JAJ20wPLhli4y52mLvtbsCcb3mMJZw%2FEO4Sy6RMB6Fg8d6yjzx9aZEfpLYdxcuezubru%2BU1Q%2Bc2UzqyK%2FzCvgZOy%2B&X-Amz-Signature=1cdf41be1e8cc3dd6be32c27b0b1dd269a307b3ceca2b69e0ea19ec16d059576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHER5WON%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T171119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDupmwnMVsbq2XSK6j7QqyxEQ4FhVqJepewtKZ%2F%2Bgen4AIhAP0HaS4yNDwN4PNbsZh%2Fy3WlYVpDY7IlVuSnAH3QJSvEKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzTt9cd2uXUVasSAAIq3ANwc2K%2F%2BJmQr2DOptFiGxag0G00n5SVuQvb9e1Dl5nzRjSxzU%2BMx2IruKzI9FiDplzdOVbfgkHIKBraolBqAk90rBu%2BnJEtdLBOnGTatBZAIKT0ySXHyfwPIWGZfw2jiR5w2Kz38FugjFReb7IS5Up6YQAhRvdIlXLRjHXi26%2Fv%2FRdwhrtc0zDCrQ5BIC1i9jGBi8JzweBTIh4WtBeOJzcgigoPr%2FWRwj2GcoOztvi0a72wEa3jqWLlOBZE0i9J70zdnCP0n1OND3WtU5YiEdZfVDp7jQ3chPulSiUKfTzm1jRIBbwtLHipCLczwnr%2B9aOmPYHCV5r2d8zzvwZGytLZStly55pv70AP3ClG6mCWWgMwZeIK7JNOCNLr33C%2FZSwiIs7YoUqPXn197wCD13XQwQWzR551DkHX2OtvJks2Id3NrGFdq0i5Ma0HZtQ1aaAGHqvLh03dAipqPLnylvLlU0g4hdE7FaRMsvjRlREi5U4VH3J7eaYqBsK1oyEqgBa2G09A0xHLhP13SUZSIs3C1HwTSbkVBGktMP9BPoWgXbAdQMq6Y5zMv7TP%2FFIR2mFihgwKPGjDr9yQ81N%2Bv8JMyH96Bi%2FsmhcPxeHzwVgWJS039xHJE9JRxzioXzDcoIvKBjqkAfAHuTRRZ4YB8l%2BdtGo9jww%2FmCq%2Bb9ZTSYhIpwiDEGph8mQMl7ZnFlAxvF49uKgJQPZMtEbDccM%2ByDXx0rSRGX%2FwEr5rhGQLsGrqaePl93YNUvRrxOjrGKYz4HaHcaNwFi3JAJ20wPLhli4y52mLvtbsCcb3mMJZw%2FEO4Sy6RMB6Fg8d6yjzx9aZEfpLYdxcuezubru%2BU1Q%2Bc2UzqyK%2FzCvgZOy%2B&X-Amz-Signature=4107af2a0d6e7a5cb7979e883ad3d36a1a00b08e40c613c64a6de21f4e3feab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

