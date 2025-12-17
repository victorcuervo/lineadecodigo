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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZDOQFH2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUaMiIWaPX8%2BgsxCqK9X3Xa1Xb%2Bw5D9WI5ruNWNtcSnAiEAmsi7%2FQ1PkXnIk0jFvqph2oeW0x1xpJ%2FWKBtGLGKfZogqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiae1LNuXDSuyVA5ircA5SZMGvtwOYz9H6STe2rmeYf3pbLnfgv6TwxBtvzAfFmIRD47F1h0CRS2qG4Mgl3hIFmWk9PZl12q2OccVLANF6LH%2FsaKMZHcXjNvmkyIER1qGOPgxOfdTWWZEvhCEh%2BPQGnGNqDYbE7PHFBpAPoju7bzojfa6E9gtrYuS7fmKp0Jsf6AqRLL6ZbrvHN3FhKbN0PYDgfFO7sDJ5IemR8pUZlRigvRb5DE%2FcfArFfVy27k6qpmcv%2FNIppuWX9tIRop3oI9qgfEq5iMiBmO%2Bd3SPvM1q%2FG9oXgFksLzn9Q3aSmh9bxZNdt8eRtDpTabnMAkFEYvAvLglVjx6UloExmmb5cOSV8vqWtwRVAo9mMdpDTSBFoNi1c%2BIFqAnj47vc9%2BdzJaseHoyFeWdYhsP4hGp5VsYLZUc9%2BPJcHepguBB4LYIBNcWMAmFiY8bnw9AE67fciXXK99VBwes%2BNpgVaqVraPiNZjppOqH%2FD0N4M9RX58jlPOIyX11Jg6z56aBOXf%2BHCUjRVpqEypQjHyWGxNJzZGw9QIjLvwfl5gaXskKlT5g%2BWwqi1jsJFwWwAgqF63m9K4R5RpgTQq2LDJiO1Cpbmipki05XP1Qwhy5dTOODw4V1orNg0sHW1Y4TlMOSei8oGOqUBuHy%2FIR5dTcxUYf9RQgcz7PptA8zohAmdTgZfQPawdLoVKgleYnFVN%2FOScn%2BMHgMimCG%2FdaaPDOsaChmkYqiYvGa%2FfwvYj7Z1Qea9q6i7KdlnaXJ6VWX4AlDXbz7oN4dPk%2BPf9aQf%2F7jXrtqFL9luCD7fmFL2SYSOJOqeTwzr1tiPxQwyPshoNZLbTJ2pN8BHR%2FZsGOWbHlLt6vFiGbDer%2FOHsZjJ&X-Amz-Signature=43931ffcc626105b881eba57b0ddeea61e5267affa59029645cd84c587e18695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZDOQFH2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T181859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUaMiIWaPX8%2BgsxCqK9X3Xa1Xb%2Bw5D9WI5ruNWNtcSnAiEAmsi7%2FQ1PkXnIk0jFvqph2oeW0x1xpJ%2FWKBtGLGKfZogqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiae1LNuXDSuyVA5ircA5SZMGvtwOYz9H6STe2rmeYf3pbLnfgv6TwxBtvzAfFmIRD47F1h0CRS2qG4Mgl3hIFmWk9PZl12q2OccVLANF6LH%2FsaKMZHcXjNvmkyIER1qGOPgxOfdTWWZEvhCEh%2BPQGnGNqDYbE7PHFBpAPoju7bzojfa6E9gtrYuS7fmKp0Jsf6AqRLL6ZbrvHN3FhKbN0PYDgfFO7sDJ5IemR8pUZlRigvRb5DE%2FcfArFfVy27k6qpmcv%2FNIppuWX9tIRop3oI9qgfEq5iMiBmO%2Bd3SPvM1q%2FG9oXgFksLzn9Q3aSmh9bxZNdt8eRtDpTabnMAkFEYvAvLglVjx6UloExmmb5cOSV8vqWtwRVAo9mMdpDTSBFoNi1c%2BIFqAnj47vc9%2BdzJaseHoyFeWdYhsP4hGp5VsYLZUc9%2BPJcHepguBB4LYIBNcWMAmFiY8bnw9AE67fciXXK99VBwes%2BNpgVaqVraPiNZjppOqH%2FD0N4M9RX58jlPOIyX11Jg6z56aBOXf%2BHCUjRVpqEypQjHyWGxNJzZGw9QIjLvwfl5gaXskKlT5g%2BWwqi1jsJFwWwAgqF63m9K4R5RpgTQq2LDJiO1Cpbmipki05XP1Qwhy5dTOODw4V1orNg0sHW1Y4TlMOSei8oGOqUBuHy%2FIR5dTcxUYf9RQgcz7PptA8zohAmdTgZfQPawdLoVKgleYnFVN%2FOScn%2BMHgMimCG%2FdaaPDOsaChmkYqiYvGa%2FfwvYj7Z1Qea9q6i7KdlnaXJ6VWX4AlDXbz7oN4dPk%2BPf9aQf%2F7jXrtqFL9luCD7fmFL2SYSOJOqeTwzr1tiPxQwyPshoNZLbTJ2pN8BHR%2FZsGOWbHlLt6vFiGbDer%2FOHsZjJ&X-Amz-Signature=332a86152ea609af25c4e00bf22eaf39185f2562a4698cfdb3bebcf3dd667652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

