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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE3D6DKS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfUqnovLUW%2BkWcGuQ2ZRDUuOIIwrWZNKEm%2F1aEHKz7ZAIhAKigD%2FL0hYjcCXN1CNTrPer5UIsb4FR9YTm6yr7LHlMhKv8DCHUQABoMNjM3NDIzMTgzODA1IgypvuF38ZQiNC1Y%2FpMq3AOip4LK7YaR8AU%2BP4%2FcWf6%2FzdCItbh4kg6NeVuj9c%2B3Q2XJee0O6GRZBjtgipRlq%2FTIlfmX8zxfV8rgLfkfjLmaBAqS%2FsycJfgocQZtc%2FOOtTzcmQ8FAeEgKiq4xbNP6olpdAoc%2BZm7eDGOaCvN9ZzivxiH0Ql5su%2FYErkVwIVYwJ8r6HI39tO4NUI3I4rHTnpHQpkXbKrT%2FJDD1DAUrfcd%2FzO1knqZpVlrJDmF7QJt4Bnk3DYKHOcbxdsT5P3vCBZcQ7h5y1ZNyAdFWQMqDOXHk%2BBqopSD2gOZZEoKw9TeeP3nB0OYPGkl6M9DoqkYciXMmovau7U6dwaIBkYUPF6F0If%2FJkzzluj4C4fVrpPpdSc4uOv7FsJWCCvLeWKggOdxDrdm2LvtnSGNl5O9SIHTHPI%2BM0agb5MLc0GqjgECy6gcfDs300prJwnnRvhjcu1WtRqeUH%2Bpo1wF8%2BC%2BS7EPNVb%2BIhvuU6diC7pjjD0GTxa6KGoiFxCB4ohximH4OdOwgEjQfOyE1Iq0kI1k55LOni8hjlZ4clnSTAFUjSPVi8IVos4YSA2KZFaYoTTdpl5lumb0FoxfwoIdQhtRdGpsap3NG%2BXq%2B9xbNruX%2BNrSMLlV0idMIeheRvkgODCDzojKBjqkAdrAIRottIBWT9syIUOLzxWL8gvj0kkBI6OWL58qCzfotKhs7uYLKkRtdifOvaKl7ofsOpKLBdflv7X%2FF2Db%2B%2FMvrUnOptXJddyyp2EljuO6TVBXyhrPuSoT1hJ4Ft4rxy2GEDEc0Fl%2BoD64MaZIQlXt6qL03T9Dlduoy73Gt0BD3aeNOwq9d7oXjc1L3K%2BdVvkuUAuCqWCKuNSzfkIuPzPPJ4I7&X-Amz-Signature=29ceac6e066a8a5c5790296cc3bb16c63bcabc5d7a5f01e11483790c4e75e6a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XE3D6DKS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T042239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfUqnovLUW%2BkWcGuQ2ZRDUuOIIwrWZNKEm%2F1aEHKz7ZAIhAKigD%2FL0hYjcCXN1CNTrPer5UIsb4FR9YTm6yr7LHlMhKv8DCHUQABoMNjM3NDIzMTgzODA1IgypvuF38ZQiNC1Y%2FpMq3AOip4LK7YaR8AU%2BP4%2FcWf6%2FzdCItbh4kg6NeVuj9c%2B3Q2XJee0O6GRZBjtgipRlq%2FTIlfmX8zxfV8rgLfkfjLmaBAqS%2FsycJfgocQZtc%2FOOtTzcmQ8FAeEgKiq4xbNP6olpdAoc%2BZm7eDGOaCvN9ZzivxiH0Ql5su%2FYErkVwIVYwJ8r6HI39tO4NUI3I4rHTnpHQpkXbKrT%2FJDD1DAUrfcd%2FzO1knqZpVlrJDmF7QJt4Bnk3DYKHOcbxdsT5P3vCBZcQ7h5y1ZNyAdFWQMqDOXHk%2BBqopSD2gOZZEoKw9TeeP3nB0OYPGkl6M9DoqkYciXMmovau7U6dwaIBkYUPF6F0If%2FJkzzluj4C4fVrpPpdSc4uOv7FsJWCCvLeWKggOdxDrdm2LvtnSGNl5O9SIHTHPI%2BM0agb5MLc0GqjgECy6gcfDs300prJwnnRvhjcu1WtRqeUH%2Bpo1wF8%2BC%2BS7EPNVb%2BIhvuU6diC7pjjD0GTxa6KGoiFxCB4ohximH4OdOwgEjQfOyE1Iq0kI1k55LOni8hjlZ4clnSTAFUjSPVi8IVos4YSA2KZFaYoTTdpl5lumb0FoxfwoIdQhtRdGpsap3NG%2BXq%2B9xbNruX%2BNrSMLlV0idMIeheRvkgODCDzojKBjqkAdrAIRottIBWT9syIUOLzxWL8gvj0kkBI6OWL58qCzfotKhs7uYLKkRtdifOvaKl7ofsOpKLBdflv7X%2FF2Db%2B%2FMvrUnOptXJddyyp2EljuO6TVBXyhrPuSoT1hJ4Ft4rxy2GEDEc0Fl%2BoD64MaZIQlXt6qL03T9Dlduoy73Gt0BD3aeNOwq9d7oXjc1L3K%2BdVvkuUAuCqWCKuNSzfkIuPzPPJ4I7&X-Amz-Signature=c1edc7678a067be0fbd255353b1d515b6ca158889f01e6b35ae2aa1873815d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

