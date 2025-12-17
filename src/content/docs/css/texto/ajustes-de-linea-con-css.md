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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RENYUDMQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzUzI%2FbN2G00LQGkMIiG0R3i5QbO5IzbyzYaZZQd5tVwIhAIPcxwEs4nCheRFTQMrPg6u%2FusX79YQ5NTo5oCaczwGgKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ10SPEMx8LbPNVmMq3APTfciH32cB8xUC3jcIFPXFJWNqUafCOlH6kRY1Qi4tnLiViX3BcYeIiZ%2BOoPLPqjrpohJ4qIbhcVekOeXpU7jN9CYhjrdG7TXAxt1W9tXzD3XMeJd8CXp3gbp%2FJVIEax0ghVEskYBSbVA4WD04JBigsq2phXIfUyPcd4EFPzb4O1GBVK3fWwVvllNx6FcPxSvSkvRA175Axrgd3fGTqHHw2VMo6MuDCL8NvirmjSjnRUGJoQUdBnIFqabWJpr3F4JiPqdcH30%2F1w5XcGdWiEL12AqoOH%2F7OPmm7vL%2By6t%2FkhwhMBRGAYO4AgMjSr%2B723HyMsQR85dWs4zpLq0OOoVanYlJghg%2FAYwAjJ92b2rUOLeiWpy3O4TTQHoEuuxJ4J1jd%2FMTfHzQpZP6csjYfa2qyyAbhFwAMIpHt8Bw%2B5TbAxsgGs9OJIVmZmDzplw7fUFye5KZcj8WkIkdSEipC%2BLnztYB%2FUxJa1M%2FuzUACQPeo7LC0ZFQ16KFBQTMT3kC3qXed62oYgrBtS%2B5FalOh2I54T14c1cNcE144vY9LO5uQn%2FDHRCywRRYP4WymmaLmumnM3TOgVAK6rCKvXZVgSO58rsjrE9YJ%2B41pogoGv2U9e%2BsBctfseauHz0LwzCvn4vKBjqkAYMQzEP213JbgOOL%2Bx7KUnBTcH51ow7pJKUXy9xN4a4ENUPifOzwMcY1Bj45YPV88fpzzofuS06wwtNzL5o4lfE0HspUxviYa0vNSC4yPJ%2FWWZNuuc%2BdGh6r6v%2BTGgZVHOYijMJIDI5fB6LjOCRwjznqD4XPmaxcJizl8GJ1Crvd8hfyQyXtonl%2BHr6pzuurYvcOMSbXSy4BMMVr4kOfr%2B%2B%2Bvaj0&X-Amz-Signature=739ddbd551c5e304f029d3a666b3217812e1ce24db690605636c74343bc66665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RENYUDMQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzUzI%2FbN2G00LQGkMIiG0R3i5QbO5IzbyzYaZZQd5tVwIhAIPcxwEs4nCheRFTQMrPg6u%2FusX79YQ5NTo5oCaczwGgKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ10SPEMx8LbPNVmMq3APTfciH32cB8xUC3jcIFPXFJWNqUafCOlH6kRY1Qi4tnLiViX3BcYeIiZ%2BOoPLPqjrpohJ4qIbhcVekOeXpU7jN9CYhjrdG7TXAxt1W9tXzD3XMeJd8CXp3gbp%2FJVIEax0ghVEskYBSbVA4WD04JBigsq2phXIfUyPcd4EFPzb4O1GBVK3fWwVvllNx6FcPxSvSkvRA175Axrgd3fGTqHHw2VMo6MuDCL8NvirmjSjnRUGJoQUdBnIFqabWJpr3F4JiPqdcH30%2F1w5XcGdWiEL12AqoOH%2F7OPmm7vL%2By6t%2FkhwhMBRGAYO4AgMjSr%2B723HyMsQR85dWs4zpLq0OOoVanYlJghg%2FAYwAjJ92b2rUOLeiWpy3O4TTQHoEuuxJ4J1jd%2FMTfHzQpZP6csjYfa2qyyAbhFwAMIpHt8Bw%2B5TbAxsgGs9OJIVmZmDzplw7fUFye5KZcj8WkIkdSEipC%2BLnztYB%2FUxJa1M%2FuzUACQPeo7LC0ZFQ16KFBQTMT3kC3qXed62oYgrBtS%2B5FalOh2I54T14c1cNcE144vY9LO5uQn%2FDHRCywRRYP4WymmaLmumnM3TOgVAK6rCKvXZVgSO58rsjrE9YJ%2B41pogoGv2U9e%2BsBctfseauHz0LwzCvn4vKBjqkAYMQzEP213JbgOOL%2Bx7KUnBTcH51ow7pJKUXy9xN4a4ENUPifOzwMcY1Bj45YPV88fpzzofuS06wwtNzL5o4lfE0HspUxviYa0vNSC4yPJ%2FWWZNuuc%2BdGh6r6v%2BTGgZVHOYijMJIDI5fB6LjOCRwjznqD4XPmaxcJizl8GJ1Crvd8hfyQyXtonl%2BHr6pzuurYvcOMSbXSy4BMMVr4kOfr%2B%2B%2Bvaj0&X-Amz-Signature=77ced2f3b7bafb9f2fe8fa36d7324cec9610ddc9dc32d979d3e8d21d6604b20b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

