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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCCHAGHZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQlT2xeG%2F7lIV38s3qOKen2uyJJsI8HR0A2ve1l3YG6wIhANEbtVB1w6OYxX4EzUATqNbFmyCXMMZ4vRkPjXs%2BpZ7%2FKv8DCH4QABoMNjM3NDIzMTgzODA1IgyR3e6S3jtz8IRmMAYq3AP5MB2Mm9T%2FeAaS7mJQfV710qXugR4U125nggOSRSU6VOY1iBaK%2B0HydfWFJXggSHtdFfRC9wF0JaYjZhnCbtArnBhbaMps1h4hPjE6DuCTKUYUW7Cb1HyJ0HQRw0avx7Bl%2BTRc8bvvhMlkIu7eMtsaKuCcH%2F6cvzBcgziwGKAgZMbfUMkOgaS6o%2FH7vcjPFfUe0rkGdTAMs2atQc7iJmZ8PUkrF9LIrJ%2B91mnk5nLmvuqE%2FQUxfl2n9ZFvo0pp5cuHTUMzjel9Y7L5ak9cdr71kNAgC0ht7grLtYtQij8VM3bgDUo9hAIv5WnWsBKfpwVXgClrGOUUntMhBuiCvAypZBrMTz95h3xd8ovHyrSYMftZxmwAhwa89x%2B8aWtPK3Gl8dtYgGep2SpxpGn3MBqSC6bFyXcZhGLG%2FE6OwCG9zdhUkJyqP%2B9AGF5Z1aAXpRYpMFEg1Xd8%2Bmkfznu09kNx4ArAgB%2BUbNGQENyR0POOcIjeuXlq0j7tkZn%2Bp6Yc9sOzoPAStTzcXi52eSlP%2BNhkPRTB73ytUoZssphYxNjKblAIl5wVL865pTgEVGF8DdEv4Pzpq4slAJANcDdZ2HZqnbpTZ%2BwZFsRwTXp5dL0fF1E4HNssScXlI%2BHNlzCUxorKBjqkASSAHjM6x26mqP%2FquxOaLfCLKY6C0FxWTqoaPniPQZ6YoIwAbZ5wYn6u0puFGa0PbvxUqxwAh%2BNN0kHKtL4%2BwjYXxiHTgGTr%2BiutW%2B3IhYEA2yAIkQbmPafnQPcGX9dKsIeQk1X7b54Bjz416KJbeannlRRbHs6BAbcTeNjC%2Fr%2B2o4VF9BjI39UkjzMwF%2FGvw0kMrR4FRSbewF%2Bnup8wY%2BBBgKL%2F&X-Amz-Signature=f0b760dad505ca1459f60df1b02ddc9b17c937064a737dca6dad098a52310e59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCCHAGHZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQlT2xeG%2F7lIV38s3qOKen2uyJJsI8HR0A2ve1l3YG6wIhANEbtVB1w6OYxX4EzUATqNbFmyCXMMZ4vRkPjXs%2BpZ7%2FKv8DCH4QABoMNjM3NDIzMTgzODA1IgyR3e6S3jtz8IRmMAYq3AP5MB2Mm9T%2FeAaS7mJQfV710qXugR4U125nggOSRSU6VOY1iBaK%2B0HydfWFJXggSHtdFfRC9wF0JaYjZhnCbtArnBhbaMps1h4hPjE6DuCTKUYUW7Cb1HyJ0HQRw0avx7Bl%2BTRc8bvvhMlkIu7eMtsaKuCcH%2F6cvzBcgziwGKAgZMbfUMkOgaS6o%2FH7vcjPFfUe0rkGdTAMs2atQc7iJmZ8PUkrF9LIrJ%2B91mnk5nLmvuqE%2FQUxfl2n9ZFvo0pp5cuHTUMzjel9Y7L5ak9cdr71kNAgC0ht7grLtYtQij8VM3bgDUo9hAIv5WnWsBKfpwVXgClrGOUUntMhBuiCvAypZBrMTz95h3xd8ovHyrSYMftZxmwAhwa89x%2B8aWtPK3Gl8dtYgGep2SpxpGn3MBqSC6bFyXcZhGLG%2FE6OwCG9zdhUkJyqP%2B9AGF5Z1aAXpRYpMFEg1Xd8%2Bmkfznu09kNx4ArAgB%2BUbNGQENyR0POOcIjeuXlq0j7tkZn%2Bp6Yc9sOzoPAStTzcXi52eSlP%2BNhkPRTB73ytUoZssphYxNjKblAIl5wVL865pTgEVGF8DdEv4Pzpq4slAJANcDdZ2HZqnbpTZ%2BwZFsRwTXp5dL0fF1E4HNssScXlI%2BHNlzCUxorKBjqkASSAHjM6x26mqP%2FquxOaLfCLKY6C0FxWTqoaPniPQZ6YoIwAbZ5wYn6u0puFGa0PbvxUqxwAh%2BNN0kHKtL4%2BwjYXxiHTgGTr%2BiutW%2B3IhYEA2yAIkQbmPafnQPcGX9dKsIeQk1X7b54Bjz416KJbeannlRRbHs6BAbcTeNjC%2Fr%2B2o4VF9BjI39UkjzMwF%2FGvw0kMrR4FRSbewF%2Bnup8wY%2BBBgKL%2F&X-Amz-Signature=5e199faa71e7f71e96a1ca10c18cab0d51fc2d8155e3d0d1368a66e7bf0e59b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

