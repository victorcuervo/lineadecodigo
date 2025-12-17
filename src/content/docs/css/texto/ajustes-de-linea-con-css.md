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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCFIBI6J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6KePt1%2FxIk52iXf0nL%2FjdP1AxDs8yo88CE1XNk%2BHLJAiEArR4iyd9wlsOX7jZiGQpA4iKcxA1zVBPxMRENHQ9RmvMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPYkcAS69x7WsPwAoCrcA%2B1smTTy6MJ7PLgo7BBwG2EBmaqrEnWaeVeT3opP9mV7L97onVu3kCoslOLjliVRPDd3W5va5wYXOh3WnHOGAQVGYf51sSGVxTGe7%2FODUOuLCm19z367Ab75Wt4XiJesgDP%2FhJk2EmiVkYoy%2BUJ9%2B%2BWZW7e2s9nA1cqReWLfUolJU3HKop057KI7L%2B1L93rpl2fRtUSJjHSq16XroKz8ZmUNtLnf96bqTtXD%2B4jm0fG%2Fkx9hq58wXveyJiDnS%2Boawu4zC0V2ifLaCvTttlMvzZUbjKyLk%2BI4c5mfMfB4EGjLTU4rPnKU%2FSLZd39e3on%2Fcc6oX0zB6kwIGGqrqj%2BT1Uw86LtqSNnu%2BT1RW9brVDw3lNztDKvv8M97xcuYNrQkyknZKd9RxZVBl6%2Fm2G%2Fy9Fe8AZYDXAmPvnPE2GvXcr9ysjMdzpsjw5Q3A58D%2BOOY0gWCBJ9aGzQXJlRnzktBdqig3lsYojWAifWekbssoknYqkB3xh9VEXIEei1Tsh2NBNUVSvx8RssF2qYxTqlgsblDfQ8ToTweAyyyuDi1nIM4FUj27pGJPzeC9g1G4mSri6Y3ZpTPufLmNGGT7Z%2Fb7HZGWLijBjWoZlize5fUR2QoK%2F8djB4xPiI2xu0OMJ%2BCicoGOqUBmJfF51oGg1X%2B%2B%2BFOXSdvg3vJPDn2KTncfrTEkRINddwxWs%2BtbFeamCeeS0%2Bcc3FGh2DQ38gLBbgV6Qiox7PG3YQl5VPmLN1xwRTo3kGly%2FUzltrUimJdkYQ2N3gMDDousue753Mw2%2ByQiJge6H7vDIQmYXL2N5jz3wQElKhBg5w0yNOGpomrxD5COvReNWmZnXBS29mwLQio6BEYNNhfDtuWFk2B&X-Amz-Signature=1ebe2211d795d330cf86855632de5832dbb7e3e846461f0103476a63d47fbe20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCFIBI6J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA6KePt1%2FxIk52iXf0nL%2FjdP1AxDs8yo88CE1XNk%2BHLJAiEArR4iyd9wlsOX7jZiGQpA4iKcxA1zVBPxMRENHQ9RmvMq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDPYkcAS69x7WsPwAoCrcA%2B1smTTy6MJ7PLgo7BBwG2EBmaqrEnWaeVeT3opP9mV7L97onVu3kCoslOLjliVRPDd3W5va5wYXOh3WnHOGAQVGYf51sSGVxTGe7%2FODUOuLCm19z367Ab75Wt4XiJesgDP%2FhJk2EmiVkYoy%2BUJ9%2B%2BWZW7e2s9nA1cqReWLfUolJU3HKop057KI7L%2B1L93rpl2fRtUSJjHSq16XroKz8ZmUNtLnf96bqTtXD%2B4jm0fG%2Fkx9hq58wXveyJiDnS%2Boawu4zC0V2ifLaCvTttlMvzZUbjKyLk%2BI4c5mfMfB4EGjLTU4rPnKU%2FSLZd39e3on%2Fcc6oX0zB6kwIGGqrqj%2BT1Uw86LtqSNnu%2BT1RW9brVDw3lNztDKvv8M97xcuYNrQkyknZKd9RxZVBl6%2Fm2G%2Fy9Fe8AZYDXAmPvnPE2GvXcr9ysjMdzpsjw5Q3A58D%2BOOY0gWCBJ9aGzQXJlRnzktBdqig3lsYojWAifWekbssoknYqkB3xh9VEXIEei1Tsh2NBNUVSvx8RssF2qYxTqlgsblDfQ8ToTweAyyyuDi1nIM4FUj27pGJPzeC9g1G4mSri6Y3ZpTPufLmNGGT7Z%2Fb7HZGWLijBjWoZlize5fUR2QoK%2F8djB4xPiI2xu0OMJ%2BCicoGOqUBmJfF51oGg1X%2B%2B%2BFOXSdvg3vJPDn2KTncfrTEkRINddwxWs%2BtbFeamCeeS0%2Bcc3FGh2DQ38gLBbgV6Qiox7PG3YQl5VPmLN1xwRTo3kGly%2FUzltrUimJdkYQ2N3gMDDousue753Mw2%2ByQiJge6H7vDIQmYXL2N5jz3wQElKhBg5w0yNOGpomrxD5COvReNWmZnXBS29mwLQio6BEYNNhfDtuWFk2B&X-Amz-Signature=cd2a30081bf26ecddaba07706cba01df5376a56b391f04e88d2ea8cac32b4b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

