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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNA7XEHL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFKqHgKc8V3c%2Ff7Q0Khb7Y8utu2PUMQh6VRi3mIxMxIAiEA%2BqyWdbWEEAH8NAJ2gslMNvRdl%2Fe2f%2FzdvEJdc%2Bc51bMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFxLdAyGeKFfR8iNkyrcA9Bxlmkh9nr4O98oWRRBHLJi0CRGb%2Fha45x0rdYOz6KFi1HenT2oxov2Ln8QVFXyz0dG5DAU1%2FeDPHhHxPpNpHf8z93M2M10f8Y3vNp4V8YrVDNJAc0tc68VFM7BTTls9qUi7XaGy%2Fr36eCrnRNQY%2BGr1x9U2J2v0DtI0QPtIdCPk6V6%2FashfkjlD3xsyommZ24iyG2gELieC%2BhrrEjDTn2Mym5ia0da3eYife1eCnIsoy%2BsXMytDgWe2PuI0z13vcYIyuHqOKroI2ithMxWyTPNkdFYjTyTzSWXolKmkA63lI8FnXytQH2eOhiylUbvHLGrK%2BorDILbzsRRaPVyM0pSSwN91CZtAv1v3WmeVgaY4qAqSTkuFPkdGU0LIuLI0BFUmRVQg9YGkgHy3wdzUKDbZE8e39tcmc4HiATqFqcF%2F5GMo9irdqJnKTAzQDVWPIdvMgkJZ0dSbV1ez%2BrsuB1u9a6oW7lwBrLsqjMhQ3xsNOdyHOjAxMO1WE0EcCbWwSt24J0%2Bq7LLfF%2F8wALPktVD5NTPq902gnSVKbKAhJoWWDkBizQN2Wv9j5NCqOkTLfh%2BdWdZZ80qwoizkNptYs8wfe%2FyPLMfTIXmroOr28GLQ2HElHbSDvAwG3qKMI7wicoGOqUBB%2BQNWZ3Lv8dcpDTohHZF5yO1kpMduSfLIIi49mRdnOSRDssQ5n1z973%2FaU2PYCU46jh0XaHeTkzZH%2BorVKRjLZmfaDzVO0OJBTTuw5ciwCgHrI0e7GL2s8V62Nhv1xMyGQkuLGMFtioyMI4jf1PnY6A7YiilOx7fTQBfzdqtxBPlwsDyDo1KjcSvkbVkOf7G0A2ndiGD43m2KNugGAxI3Grbjd5n&X-Amz-Signature=d2fc08c76dc771c3e4381054a5de0e3b0f40ac4d8d5bc4a8c77453612cf01796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNA7XEHL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T095914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFKqHgKc8V3c%2Ff7Q0Khb7Y8utu2PUMQh6VRi3mIxMxIAiEA%2BqyWdbWEEAH8NAJ2gslMNvRdl%2Fe2f%2FzdvEJdc%2Bc51bMq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDFxLdAyGeKFfR8iNkyrcA9Bxlmkh9nr4O98oWRRBHLJi0CRGb%2Fha45x0rdYOz6KFi1HenT2oxov2Ln8QVFXyz0dG5DAU1%2FeDPHhHxPpNpHf8z93M2M10f8Y3vNp4V8YrVDNJAc0tc68VFM7BTTls9qUi7XaGy%2Fr36eCrnRNQY%2BGr1x9U2J2v0DtI0QPtIdCPk6V6%2FashfkjlD3xsyommZ24iyG2gELieC%2BhrrEjDTn2Mym5ia0da3eYife1eCnIsoy%2BsXMytDgWe2PuI0z13vcYIyuHqOKroI2ithMxWyTPNkdFYjTyTzSWXolKmkA63lI8FnXytQH2eOhiylUbvHLGrK%2BorDILbzsRRaPVyM0pSSwN91CZtAv1v3WmeVgaY4qAqSTkuFPkdGU0LIuLI0BFUmRVQg9YGkgHy3wdzUKDbZE8e39tcmc4HiATqFqcF%2F5GMo9irdqJnKTAzQDVWPIdvMgkJZ0dSbV1ez%2BrsuB1u9a6oW7lwBrLsqjMhQ3xsNOdyHOjAxMO1WE0EcCbWwSt24J0%2Bq7LLfF%2F8wALPktVD5NTPq902gnSVKbKAhJoWWDkBizQN2Wv9j5NCqOkTLfh%2BdWdZZ80qwoizkNptYs8wfe%2FyPLMfTIXmroOr28GLQ2HElHbSDvAwG3qKMI7wicoGOqUBB%2BQNWZ3Lv8dcpDTohHZF5yO1kpMduSfLIIi49mRdnOSRDssQ5n1z973%2FaU2PYCU46jh0XaHeTkzZH%2BorVKRjLZmfaDzVO0OJBTTuw5ciwCgHrI0e7GL2s8V62Nhv1xMyGQkuLGMFtioyMI4jf1PnY6A7YiilOx7fTQBfzdqtxBPlwsDyDo1KjcSvkbVkOf7G0A2ndiGD43m2KNugGAxI3Grbjd5n&X-Amz-Signature=d04c824b7f44743a8a94681ca887dc874e991d785e2f62f2cee450848f270c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

