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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYSB43P7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVly7hhhV0R8ED2R1YYTFjqxXAOqZ94iKzm%2BObw29QJAiEA07oY8nvujes5tbaog57Z7N%2Bl7y9%2Bp0t6VD2E79AziPsqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQ7jSbz9rwz7e6TGyrcAyBPzz1icwi9PLTID0oKD1420hKOCDCkzfL96yNHFZkSc0OkYiwqTBRey90g3Oi63xxfxUAVxIc1VxXI%2BriiZ2NOCrzZ6zK%2BmnTzYfGFSGaZmm5ZV2lq8Y6wyHmFsoAHibzWu3lQ2raRoJDuTyqWAGu2RTeFoMf09u3asWuhX%2FRwJ8j8hz9Ch6uEcfUmfZOuY8l%2BwxNGxHCx3pLp8VYLa014HT7Sn7oUidqnNkr%2FwWkIvtkfdjNCOddcySu%2FsseUzGrSlABV05pd7OZaetpFzEipQ%2BkAF7AUwM4l2QHz4d49Uek4nsYpWg6S38gVqU4Y3zdoUfaodNkPejOsgJDZJDAN8u50ahf1MZQtDnUSq83C9%2BSZlb7IP4spqpp4Oj5CWY3GShMG8O%2FIq%2BP1DeAo3HNtLW1uwQwH%2BItXIFueOKrT8yLufa2RY79c9aQ3rnQ7W6UQzLphSfgEZxBtsqz7n6wDVc0cWjhTjr4%2FJ%2Ba8uR1WAJUf9V8lvBJa%2F%2BrAAJ2hhKpGshs%2FHi71%2FmEnEcbWW2p8zk1IW5xX0bPqfUfTmP2vW78IE%2FuF52FzFVGMAo2YPhP38HGOf9JTY%2BAnjCW04zEg1mKzhJXUcO7%2FRadYfOPtQRHrF7edEQnofSDSMM%2BLjMoGOqUBoqZDhHj%2BOrZBGSPWi8LBc0CfvGLqPQ5dZl83T%2F5nLHGbJGdDydb2WYJJSNhH9sDr6OqMoLnys%2FJdd9NeDHr6JgCUTpnpybXqZXfTsPKb1b2AIGLkNRxapYfUVkAQdx3o7gNeb458ovDtPqtyROVAt8uUhY%2Blvz%2B1imiNYSpZ6exJeXwyM4pUktnOKOkJUWGQfGipijUgBqkObxg7P8%2B2TuIOpzai&X-Amz-Signature=2c3458bc8b67284d09838f5020657c08c5a1ac94e87273ab317931d38fa7a7bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYSB43P7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGVly7hhhV0R8ED2R1YYTFjqxXAOqZ94iKzm%2BObw29QJAiEA07oY8nvujes5tbaog57Z7N%2Bl7y9%2Bp0t6VD2E79AziPsqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQ7jSbz9rwz7e6TGyrcAyBPzz1icwi9PLTID0oKD1420hKOCDCkzfL96yNHFZkSc0OkYiwqTBRey90g3Oi63xxfxUAVxIc1VxXI%2BriiZ2NOCrzZ6zK%2BmnTzYfGFSGaZmm5ZV2lq8Y6wyHmFsoAHibzWu3lQ2raRoJDuTyqWAGu2RTeFoMf09u3asWuhX%2FRwJ8j8hz9Ch6uEcfUmfZOuY8l%2BwxNGxHCx3pLp8VYLa014HT7Sn7oUidqnNkr%2FwWkIvtkfdjNCOddcySu%2FsseUzGrSlABV05pd7OZaetpFzEipQ%2BkAF7AUwM4l2QHz4d49Uek4nsYpWg6S38gVqU4Y3zdoUfaodNkPejOsgJDZJDAN8u50ahf1MZQtDnUSq83C9%2BSZlb7IP4spqpp4Oj5CWY3GShMG8O%2FIq%2BP1DeAo3HNtLW1uwQwH%2BItXIFueOKrT8yLufa2RY79c9aQ3rnQ7W6UQzLphSfgEZxBtsqz7n6wDVc0cWjhTjr4%2FJ%2Ba8uR1WAJUf9V8lvBJa%2F%2BrAAJ2hhKpGshs%2FHi71%2FmEnEcbWW2p8zk1IW5xX0bPqfUfTmP2vW78IE%2FuF52FzFVGMAo2YPhP38HGOf9JTY%2BAnjCW04zEg1mKzhJXUcO7%2FRadYfOPtQRHrF7edEQnofSDSMM%2BLjMoGOqUBoqZDhHj%2BOrZBGSPWi8LBc0CfvGLqPQ5dZl83T%2F5nLHGbJGdDydb2WYJJSNhH9sDr6OqMoLnys%2FJdd9NeDHr6JgCUTpnpybXqZXfTsPKb1b2AIGLkNRxapYfUVkAQdx3o7gNeb458ovDtPqtyROVAt8uUhY%2Blvz%2B1imiNYSpZ6exJeXwyM4pUktnOKOkJUWGQfGipijUgBqkObxg7P8%2B2TuIOpzai&X-Amz-Signature=ad2207afa0a02cde6f3b5b643b735dcc4041ecd4467e682eb23a52cbb7aab073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

