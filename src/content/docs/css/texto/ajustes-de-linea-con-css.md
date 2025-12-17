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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFOROQCN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGc8r3PBFquPbzSTwpgTuiqzQuezqIqmHsnUrpzH91NIAiBmQF8DJFKPUPftiVfgK%2FAXjVJLsh6CY3ODKQBHlc2Kpir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMeX7%2FtmaHNxdUOcShKtwDWplW%2FbU8RyArxQCogM9YxSPurzsRf%2F71iosQSn469MfauJ0g2WniCk1jiQiEOD3HYVV0xTjhSqa2gFXjakf4O4DaxvJjqyHYnaOtQ3ELEdaN8wDq%2BYEqhY%2BNO3z7KZdvzjzFrHeql%2FK9UvXfOcUAmKL9FaAtjdSQUc7LyL15RthU42CA4zWGUq9iiUhjg591UmmzCWHHVA9leAN4mOweip9SrmE4WryXGC7aASwb2GLP4Pj8uan8YATS9%2FzN5UChl1MMWe%2FHvy4t55%2Fxr%2Br%2BG%2F%2FN6YpaNiFMbkwc7Gvw4c3mNGRxrYFjf9j2%2FW3jFTYL9%2BBFV2WunjD%2BC9p8YuP%2BVdGdV6YDAMGVWQhXSR0XCcqNUxanihwqWLcsqxadA9%2F3rEo86hoN2l7u1TnZCqlnmbR87d9QlW2ygoWcX6lKIxdzOat3ImYukTYgy0%2Bfu%2BM2oNaXHwDjzbFfNdJ2NT3ct8k48ZC02KFvUSqfWHpDOehMU%2F1Sg5NY0kPQnA2FE%2FtDGvjrPTBHGhdcIuXivyJim7bEh%2FKuhvJN%2FeaVA5SA47zwfOggh%2FZqGLtDy5%2Feu%2FxU5v7uZean2m4g2BA1whCTk8fEBKtheL6of1ld%2BYLLvuFYxgtFnZKOI%2F7RlV8ww%2B%2BJygY6pgGCtAa1tEaAhOQoBj4rdJKYurtoMoAQT7%2Ba19pvMcduF5QImpnLxMRm%2FH2fhqBGLZfF5p38GUAqLPZ5dfotdThs%2Bmu3hrjfRt6fKNbQDnXmHzer6D090Su3YLV%2BkGTP%2FK4BOjJoHIClgE7RhLrnC1vUyEr%2F7Q%2BA61inbUvqg6VVNy%2BfdPpD8lvduKmZqVYkSZbc2us56KzLZ3dV6K6KthpHP%2BB%2BVk3v&X-Amz-Signature=1ef4a0ed74a52a29c3f90b2fdff92b9edcfb3e8bf5c51a29243fca3f7fb62f5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFOROQCN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGc8r3PBFquPbzSTwpgTuiqzQuezqIqmHsnUrpzH91NIAiBmQF8DJFKPUPftiVfgK%2FAXjVJLsh6CY3ODKQBHlc2Kpir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMeX7%2FtmaHNxdUOcShKtwDWplW%2FbU8RyArxQCogM9YxSPurzsRf%2F71iosQSn469MfauJ0g2WniCk1jiQiEOD3HYVV0xTjhSqa2gFXjakf4O4DaxvJjqyHYnaOtQ3ELEdaN8wDq%2BYEqhY%2BNO3z7KZdvzjzFrHeql%2FK9UvXfOcUAmKL9FaAtjdSQUc7LyL15RthU42CA4zWGUq9iiUhjg591UmmzCWHHVA9leAN4mOweip9SrmE4WryXGC7aASwb2GLP4Pj8uan8YATS9%2FzN5UChl1MMWe%2FHvy4t55%2Fxr%2Br%2BG%2F%2FN6YpaNiFMbkwc7Gvw4c3mNGRxrYFjf9j2%2FW3jFTYL9%2BBFV2WunjD%2BC9p8YuP%2BVdGdV6YDAMGVWQhXSR0XCcqNUxanihwqWLcsqxadA9%2F3rEo86hoN2l7u1TnZCqlnmbR87d9QlW2ygoWcX6lKIxdzOat3ImYukTYgy0%2Bfu%2BM2oNaXHwDjzbFfNdJ2NT3ct8k48ZC02KFvUSqfWHpDOehMU%2F1Sg5NY0kPQnA2FE%2FtDGvjrPTBHGhdcIuXivyJim7bEh%2FKuhvJN%2FeaVA5SA47zwfOggh%2FZqGLtDy5%2Feu%2FxU5v7uZean2m4g2BA1whCTk8fEBKtheL6of1ld%2BYLLvuFYxgtFnZKOI%2F7RlV8ww%2B%2BJygY6pgGCtAa1tEaAhOQoBj4rdJKYurtoMoAQT7%2Ba19pvMcduF5QImpnLxMRm%2FH2fhqBGLZfF5p38GUAqLPZ5dfotdThs%2Bmu3hrjfRt6fKNbQDnXmHzer6D090Su3YLV%2BkGTP%2FK4BOjJoHIClgE7RhLrnC1vUyEr%2F7Q%2BA61inbUvqg6VVNy%2BfdPpD8lvduKmZqVYkSZbc2us56KzLZ3dV6K6KthpHP%2BB%2BVk3v&X-Amz-Signature=00cc9965bc1682fa114358e938b2733e786bf8dfc3af4a7ebc0e3e563cfac22a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

