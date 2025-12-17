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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS6JDO75%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyeQTgADGRVc3NVCq9Q%2Fuh5cJj5D259ro1mywQhWSJ0QIhAMv1Hz76nX5KjugPN0eLqKnZrlwl1BPAOP%2FjA03tUA1xKv8DCHQQABoMNjM3NDIzMTgzODA1Igy1MPL5cEAzktJHOoIq3AMeV7bJ%2B6t5F88RiA4pZXxUcPXr2fXgnn4S0I%2F%2BBENLLCkwWIzmW3yp09II9JnGIamQbPYw%2FeDldQlgwQuMoNeFA%2BFHGZTrda680G%2BJOFTOeTO9Cp4DbDz1S1HS8S0WpHv8fRnkRUr3AC%2B0Kh%2F%2FE90QFEM7nwl%2FGHyjhzZK09jzQRcWDzPZ%2FhzYdBuwxACkqLtu2ReEUp7IxAxiH0P6BXit%2Fd%2Fs4xMcYb81vbCEftVe7NZERZvE4uYqNrNLWF7BIbT%2FuZuqmPtksWW2NEdyflh2OaaFdtqXc%2FyxFqdVhYUcoAUQPXFPZtfjXYoQwz3yXvF2izRhFT5utLBPU1uf5hQv6ch%2BTCjhocwK%2F7pkE9syJfou%2Bo3V7MsEP98yX6%2B7Mc7XSuY6RjzE%2FlqjqQJ9dGzunsnlMFfaMYSKTlzBXaLLxuVl6Ra6fAA0jp4mukBMhsw9zN0qgd2wCfVYCr2Zea4O7BJYJADCa3CFPJ3ki%2FQNkBGNwbEBu2b3bvhIiOrcMkAudSpV66HX8Efrk60onAy4MTNWJ22uUhrxaELiUjO%2FC2ZfurSJYe7FL1ZF4uUZvle0%2BQ3zg0%2FfMrd1GLbqh60K2yoF8SBsdC%2BmzZBqNtZk7zIVocU4ZXXxd6e30DChs4jKBjqkAYHXCd6NXtEM61zIVeWHuTrPuqfIFvptw%2BGegCuSJ7Lrgn07MS3gosRZQLXEgP1pMgSOxQDejo3qUHCkFbSCEHpfNpbH86lMWOQSchHzPuB7QtqqxChKpy71z23qfMXqnXqpHwbT9EXW7CNZj09eWasRpVCLgrY0TPkbi%2BjrK3lRrhap3xX1zuK%2B9eWQ9HOSM082naJryWRtVeTAK%2B1Gl1kTtWTh&X-Amz-Signature=5232fbe6445a4ac2c575b4961cfa51f678e33d76852d14b3d5fae778fd3059c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS6JDO75%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCyeQTgADGRVc3NVCq9Q%2Fuh5cJj5D259ro1mywQhWSJ0QIhAMv1Hz76nX5KjugPN0eLqKnZrlwl1BPAOP%2FjA03tUA1xKv8DCHQQABoMNjM3NDIzMTgzODA1Igy1MPL5cEAzktJHOoIq3AMeV7bJ%2B6t5F88RiA4pZXxUcPXr2fXgnn4S0I%2F%2BBENLLCkwWIzmW3yp09II9JnGIamQbPYw%2FeDldQlgwQuMoNeFA%2BFHGZTrda680G%2BJOFTOeTO9Cp4DbDz1S1HS8S0WpHv8fRnkRUr3AC%2B0Kh%2F%2FE90QFEM7nwl%2FGHyjhzZK09jzQRcWDzPZ%2FhzYdBuwxACkqLtu2ReEUp7IxAxiH0P6BXit%2Fd%2Fs4xMcYb81vbCEftVe7NZERZvE4uYqNrNLWF7BIbT%2FuZuqmPtksWW2NEdyflh2OaaFdtqXc%2FyxFqdVhYUcoAUQPXFPZtfjXYoQwz3yXvF2izRhFT5utLBPU1uf5hQv6ch%2BTCjhocwK%2F7pkE9syJfou%2Bo3V7MsEP98yX6%2B7Mc7XSuY6RjzE%2FlqjqQJ9dGzunsnlMFfaMYSKTlzBXaLLxuVl6Ra6fAA0jp4mukBMhsw9zN0qgd2wCfVYCr2Zea4O7BJYJADCa3CFPJ3ki%2FQNkBGNwbEBu2b3bvhIiOrcMkAudSpV66HX8Efrk60onAy4MTNWJ22uUhrxaELiUjO%2FC2ZfurSJYe7FL1ZF4uUZvle0%2BQ3zg0%2FfMrd1GLbqh60K2yoF8SBsdC%2BmzZBqNtZk7zIVocU4ZXXxd6e30DChs4jKBjqkAYHXCd6NXtEM61zIVeWHuTrPuqfIFvptw%2BGegCuSJ7Lrgn07MS3gosRZQLXEgP1pMgSOxQDejo3qUHCkFbSCEHpfNpbH86lMWOQSchHzPuB7QtqqxChKpy71z23qfMXqnXqpHwbT9EXW7CNZj09eWasRpVCLgrY0TPkbi%2BjrK3lRrhap3xX1zuK%2B9eWQ9HOSM082naJryWRtVeTAK%2B1Gl1kTtWTh&X-Amz-Signature=99f86d570c4c20c4593d53a4534cd2a6d2d4db5c23dc0a4ceddb4f4599c472f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

