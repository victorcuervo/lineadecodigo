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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS3I6VKB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM88Fh3rZGBmMM1POT7ceApHThekWXTElG91b6tZREvQIgczfhTWtSyfPea603GG4YItXU%2BuPMY4GcPOAPOdxdFDAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFUs73rJCKaohCTEGSrcA6gRPFGguqkVr10SYDXLodKmLjyMicP5ZL2spaSOJ2tOpoyH4dOVW0lk3W81cnDjw%2FaHBOu%2FxZc%2BMC6rjXUyad8RsAKYVbvZ%2BzV37TWiHEmbyqXxf6XEbHPG%2FT2cHLvGSWOIQAa86r%2FFh5pJdUqrtq0b1SG5f8rUs%2Bh5%2B95X06p3pZCizyH1evvIBk4GjovpoDYv3sVhHEpxUa8juHoLBPqPHG%2FOCvSsZctZafv88Uh2dk0MUNgAOGInIWXOY3UWByfgQd7CFFyVC3twnai1fxehIblOewJqx%2BnG7TmcowNBY0ZPGiLnR4UF23SwdC8FyfQkutgTodejjRBpi3kN5q1DqfPCeKR9YP586V%2Fsj6zIrWkryBUuJ1wZVlPRlRFIo6nOHfrISZfT7ttpzpwvVRlTOSIaizZFX7OsgnjhCi%2BtsElkbZgW4CjdjHO56d4Ro3kCzW6OFmvB1mcIAnTCbedvp8IXwL%2BbVyIy3k8WLDgIY09%2F22IB3vI4VVVhFERr75Y8Qap4V59BuxaPKUN3CldFRfIccKBVD1EoGJBfaZTrtECEOKHPWkcRiqQWwEom3NtR%2FgsWsq2OxbLH8x8hWavfPa3eT7sxt0vJXPsK5k7qIwVNi%2BWUCgQ98CmUMPLgisoGOqUB9I%2BoaHir%2FvW7o5PWBdSKEnrYzlgpYVh0M1RwtFLN4%2Bu2ICTGQf7RfHEkYE7%2F0Dg7V2ycMI7%2BmCZzyeg9tSR2YafJhi%2FgE5xHP0nzq4kKU9kCDEa50tyZfrqgtinUcZqANbuDXNuedv6j9lY6Ej%2B6J8faPUw2DQ56nPrbQmV6i81Ojgz4ocujYIvINY5plWZjTi1aLUt85a7Sfk7VSHR9LgGhafxw&X-Amz-Signature=87e3abc1398a762c1a65442333d97696c56718dd7af149d6c8b219355ebbdd19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS3I6VKB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM88Fh3rZGBmMM1POT7ceApHThekWXTElG91b6tZREvQIgczfhTWtSyfPea603GG4YItXU%2BuPMY4GcPOAPOdxdFDAq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFUs73rJCKaohCTEGSrcA6gRPFGguqkVr10SYDXLodKmLjyMicP5ZL2spaSOJ2tOpoyH4dOVW0lk3W81cnDjw%2FaHBOu%2FxZc%2BMC6rjXUyad8RsAKYVbvZ%2BzV37TWiHEmbyqXxf6XEbHPG%2FT2cHLvGSWOIQAa86r%2FFh5pJdUqrtq0b1SG5f8rUs%2Bh5%2B95X06p3pZCizyH1evvIBk4GjovpoDYv3sVhHEpxUa8juHoLBPqPHG%2FOCvSsZctZafv88Uh2dk0MUNgAOGInIWXOY3UWByfgQd7CFFyVC3twnai1fxehIblOewJqx%2BnG7TmcowNBY0ZPGiLnR4UF23SwdC8FyfQkutgTodejjRBpi3kN5q1DqfPCeKR9YP586V%2Fsj6zIrWkryBUuJ1wZVlPRlRFIo6nOHfrISZfT7ttpzpwvVRlTOSIaizZFX7OsgnjhCi%2BtsElkbZgW4CjdjHO56d4Ro3kCzW6OFmvB1mcIAnTCbedvp8IXwL%2BbVyIy3k8WLDgIY09%2F22IB3vI4VVVhFERr75Y8Qap4V59BuxaPKUN3CldFRfIccKBVD1EoGJBfaZTrtECEOKHPWkcRiqQWwEom3NtR%2FgsWsq2OxbLH8x8hWavfPa3eT7sxt0vJXPsK5k7qIwVNi%2BWUCgQ98CmUMPLgisoGOqUB9I%2BoaHir%2FvW7o5PWBdSKEnrYzlgpYVh0M1RwtFLN4%2Bu2ICTGQf7RfHEkYE7%2F0Dg7V2ycMI7%2BmCZzyeg9tSR2YafJhi%2FgE5xHP0nzq4kKU9kCDEa50tyZfrqgtinUcZqANbuDXNuedv6j9lY6Ej%2B6J8faPUw2DQ56nPrbQmV6i81Ojgz4ocujYIvINY5plWZjTi1aLUt85a7Sfk7VSHR9LgGhafxw&X-Amz-Signature=51ee545bfd592fea607c14c6558bac880946ac5f9e7e4b902977a38254b2dc0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

