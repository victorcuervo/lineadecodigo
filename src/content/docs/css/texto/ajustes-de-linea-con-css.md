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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIRJWOJQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxS4bvQIUsRj9GzZFSf6KWpUkzQYtkCgShsZVBm%2F%2BAqAiEA3zBikI4TJbsrWV2Y52wJKL7m7kX3joz0WPiRPvxE9U4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCGZPENhEGWVoe53uircA26baoNIDT88X5FFpqc7YxtPYuK%2B%2B164Vj7IedI8G0m6%2BaoWUsHGRWtoPIaEAbuOyixDH1JyujKJzcGg1JshMvYo9BcqAKr9SAOo5BVXkSUsYr5liIRzIN9bOZvvB0GoCtlOuPiBN6QTPk1Te7uDbTVi7LY8PUsZP81XO4wYLAk2ixsnSAbpYLTLjgJsqvgV88PW61GOQnB1bkluDxoxQ4IKU9ewi1qJy8QmtOSI4ZWtyqun%2FLP264UpgmBZTPmtL1xsdfNEzGXh5lE6lwincqp610HC%2FplthJmkSxPiaw1ZM5R6xNr3AxVV959K4h6E%2FYCEvU4dHgF02Skn%2B6RIaglY5wQC%2BRCg3g8VKih4bWB3jrQ2tQ8lR8A%2Fk7bltMhRYfy%2BmXafIdrQXyq68RUNBP69W332So8NvEYmkfp6DWMM4v0YLf1FvIbnzltxSm21poutiTFbOyIsGZFC3Md9C2GUbmscBlndDmVjcPUPVhJDt%2Bg%2BE%2FsBgq3UL9pyDcJJtfnHyRrMmjJfMfdBsMsmoJy1%2BB6U7CdkUabRS8xXJH68P8hO2oEeENhxjoTyc7jgJET%2F9Ih24izuQJgQy2NkuNWE1LCmfHL93o5p164x7nRl8Kg8VF1qVq9NiI%2FDMKD7h8oGOqUBIXl7hG%2FilAvoPhQ4hbksRzYx8GeWsQ8nGx75TJ0SSLHPx9y0MTLYWfYCGxDDMda%2FWJHSeFV9ppAobpE2rzDpWauVOhyk7%2B2A0jkEO%2F0zbNvlI009sBe%2B5vU5dhFoIp%2Bv0CTtCEM5vjAKPtZda%2BnZEUqq%2BHZCH3PL1KhH9FGSxyJ%2B2qTh7q5s00xX6P7cwrZ2%2FISMerWuE1prVUye7ARjgBg%2BEUA5&X-Amz-Signature=cec95432df476b23de4d8602948668f424cb277c33bad1baae3ea34305d62b27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIRJWOJQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T010110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHxS4bvQIUsRj9GzZFSf6KWpUkzQYtkCgShsZVBm%2F%2BAqAiEA3zBikI4TJbsrWV2Y52wJKL7m7kX3joz0WPiRPvxE9U4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCGZPENhEGWVoe53uircA26baoNIDT88X5FFpqc7YxtPYuK%2B%2B164Vj7IedI8G0m6%2BaoWUsHGRWtoPIaEAbuOyixDH1JyujKJzcGg1JshMvYo9BcqAKr9SAOo5BVXkSUsYr5liIRzIN9bOZvvB0GoCtlOuPiBN6QTPk1Te7uDbTVi7LY8PUsZP81XO4wYLAk2ixsnSAbpYLTLjgJsqvgV88PW61GOQnB1bkluDxoxQ4IKU9ewi1qJy8QmtOSI4ZWtyqun%2FLP264UpgmBZTPmtL1xsdfNEzGXh5lE6lwincqp610HC%2FplthJmkSxPiaw1ZM5R6xNr3AxVV959K4h6E%2FYCEvU4dHgF02Skn%2B6RIaglY5wQC%2BRCg3g8VKih4bWB3jrQ2tQ8lR8A%2Fk7bltMhRYfy%2BmXafIdrQXyq68RUNBP69W332So8NvEYmkfp6DWMM4v0YLf1FvIbnzltxSm21poutiTFbOyIsGZFC3Md9C2GUbmscBlndDmVjcPUPVhJDt%2Bg%2BE%2FsBgq3UL9pyDcJJtfnHyRrMmjJfMfdBsMsmoJy1%2BB6U7CdkUabRS8xXJH68P8hO2oEeENhxjoTyc7jgJET%2F9Ih24izuQJgQy2NkuNWE1LCmfHL93o5p164x7nRl8Kg8VF1qVq9NiI%2FDMKD7h8oGOqUBIXl7hG%2FilAvoPhQ4hbksRzYx8GeWsQ8nGx75TJ0SSLHPx9y0MTLYWfYCGxDDMda%2FWJHSeFV9ppAobpE2rzDpWauVOhyk7%2B2A0jkEO%2F0zbNvlI009sBe%2B5vU5dhFoIp%2Bv0CTtCEM5vjAKPtZda%2BnZEUqq%2BHZCH3PL1KhH9FGSxyJ%2B2qTh7q5s00xX6P7cwrZ2%2FISMerWuE1prVUye7ARjgBg%2BEUA5&X-Amz-Signature=d6e592d850e94dd5443469994b8255b85fdf6bcb53067c648d7f8ddfedf1762d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

