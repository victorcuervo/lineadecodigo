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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBIHSK7V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIGr8NZVFmwXvPZ7cmiwgBdw1Us%2FzY%2BFzrNFlH1T4R4AiEA8ml1R6UyDeIOGxQPI%2BEULsddcXrnesY6xe2cjGi79oAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCU%2FRFy9%2BjTx2oyesCrcA87KNUCo7tAWleZefz3Zi08A%2B3QgTXC%2F5WiV80fYiDfGpaKVBnVYAFvhGxPKp2z3LuW7ubwW1SEhdEvp9%2Bmtwvz82IzlqWJamEIliZsksyT3NpdRDZa3WJtLF1EZoCza%2Bp7Nx8Cee4d%2Bex%2B6hfTKdXLiPkwlmgMcZeK1S%2Bym1zKZf1JAcWSfEIq0zjcWWUj6VgjqpYl69NA9rIS2GBqsTJhWGoE5d%2F2ABeEFUy8f1%2FEknfmjboLabjOJJw5LUdbkvquQjImw4nA4yH%2BZkUg%2FHoVSGG%2Ba2us%2FsMFeN5Hxa5EFSY773jr3pgSJc4rqujV%2Bgyx5G4yW7qUb2OUBqcL%2FB6cn0BEpvzbmAiUhxyCqBrs8WOZASkIep8cZ%2FeXqEqX%2Fev%2Bgj28uUUUvDtjbmFJN35JfFmN6igf%2BrTiIclV7COIABn%2FsOmxZyGcPK3cbL0FOEc0AW8ZVU6S2%2Fs5Dqj7%2BgolCLYaw6d90oGXU2jVF30OdIgpXSyID0SQs2AUYOvLK7CfFno7NTzGTqmy6ypGLiJGVSXcX0JH5fKv1n03eCdCPtKizdZ%2FSVuUzT5dm%2BD%2FXNaO%2B44Iq21mxmI6gpY7XOKlTf2P%2B7gVwngQYwpv8NFYAegq5lwvIBWk0aVNTMKegi8oGOqUBHBAsOFZFuoo8SeANWRAvOVhP5wcY3%2Bg0riiCynJaAU5IDKxHhvA42aOJBp0j%2BVeOW2R22Ce7XqEYztmaX98%2B%2F0bhclFnf2MvTYzIrfTBkKVrdrFpwxaJRk5pFwNvbYaVs4xjBPKaXWZGF71d4g64WbTYWpQaxMKajWtzObRdHSsQ8eN%2B%2FIhm5cRrzR6kg6pX%2FUM%2BqUuTHNYKC6%2BOTElGmZiPFjfZ&X-Amz-Signature=460296a23f52ded56811c29f90dc31accb5da46192ba1fd42b4aadcd1a4becce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBIHSK7V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T190317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBIGr8NZVFmwXvPZ7cmiwgBdw1Us%2FzY%2BFzrNFlH1T4R4AiEA8ml1R6UyDeIOGxQPI%2BEULsddcXrnesY6xe2cjGi79oAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCU%2FRFy9%2BjTx2oyesCrcA87KNUCo7tAWleZefz3Zi08A%2B3QgTXC%2F5WiV80fYiDfGpaKVBnVYAFvhGxPKp2z3LuW7ubwW1SEhdEvp9%2Bmtwvz82IzlqWJamEIliZsksyT3NpdRDZa3WJtLF1EZoCza%2Bp7Nx8Cee4d%2Bex%2B6hfTKdXLiPkwlmgMcZeK1S%2Bym1zKZf1JAcWSfEIq0zjcWWUj6VgjqpYl69NA9rIS2GBqsTJhWGoE5d%2F2ABeEFUy8f1%2FEknfmjboLabjOJJw5LUdbkvquQjImw4nA4yH%2BZkUg%2FHoVSGG%2Ba2us%2FsMFeN5Hxa5EFSY773jr3pgSJc4rqujV%2Bgyx5G4yW7qUb2OUBqcL%2FB6cn0BEpvzbmAiUhxyCqBrs8WOZASkIep8cZ%2FeXqEqX%2Fev%2Bgj28uUUUvDtjbmFJN35JfFmN6igf%2BrTiIclV7COIABn%2FsOmxZyGcPK3cbL0FOEc0AW8ZVU6S2%2Fs5Dqj7%2BgolCLYaw6d90oGXU2jVF30OdIgpXSyID0SQs2AUYOvLK7CfFno7NTzGTqmy6ypGLiJGVSXcX0JH5fKv1n03eCdCPtKizdZ%2FSVuUzT5dm%2BD%2FXNaO%2B44Iq21mxmI6gpY7XOKlTf2P%2B7gVwngQYwpv8NFYAegq5lwvIBWk0aVNTMKegi8oGOqUBHBAsOFZFuoo8SeANWRAvOVhP5wcY3%2Bg0riiCynJaAU5IDKxHhvA42aOJBp0j%2BVeOW2R22Ce7XqEYztmaX98%2B%2F0bhclFnf2MvTYzIrfTBkKVrdrFpwxaJRk5pFwNvbYaVs4xjBPKaXWZGF71d4g64WbTYWpQaxMKajWtzObRdHSsQ8eN%2B%2FIhm5cRrzR6kg6pX%2FUM%2BqUuTHNYKC6%2BOTElGmZiPFjfZ&X-Amz-Signature=d0179ece5803670f62de8ba739d1fb92bf31b4de9721f3b952e399ddbabdb307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

