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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V326ZPC2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzpATU9RQUkkU8qbbiL7iDhiclbD2GlmLOEc7wwNuLIAiBhB2rBXcjC7h8ctbYj7be6MSwxYa6lmzRkuDFYQCQNzyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMdMADs6zNqUIDXKlEKtwDNpZGuFP0QEdNuR%2BwLmzHy9HCIJVKQ7jWGFDzcG4j1OONzfiDB2mhqJRa9QRO92xYwIERIaoiblSW78u7exL51eXUxEp9lktdETvk9f0%2B%2BjG2SAZiV4dX8OM6Difb5xbsE2azu3KBWKOxCbS9WqGBqn%2FbNzalr6hKQ46wJ8DjXTTd%2BsPbiXZREIC36FvomyNNVRD%2BrpK6izaggZ0%2BHtLnkKzVCSOd%2FW1BGUuETSyovoi2sa9mPiSJlCQ3KC4eJB5YJb54f%2B0Bk3claDCTYNPNmNZzxI5FJmAnzoAeGSSTtApSCZSBmXWJFTgXnWbvBMrOX5o6T2ZejrpQdLgaGyuCkRSoguw9%2FwPVp18EEvwyPqegK6c%2FSM7WzuR363SGpSOyLVMHhSmuj%2FK84zx9gWkRG6%2FaqqG%2Bb4NtKrwP0jLqgAdYJvJi2cB4uw%2FAXIZGaKp2e%2BzyeOcr3pe%2FiaJ1V%2FP38%2FVP7OIHpJY5PFvsdTPflD7bIoCLh27TjOy7u1MGA1WCcNiZLHD4Ot6cLqiD3iNLVIGHdE7brckNE3%2FHvXXczfXVj79UxyuczemamPEq%2F%2FCUW3lSJbL%2BP4r1Wcvditw556zYIrn0kbfH5%2FX%2BIghsYD4I%2FnVYNXvwyUGuhYQw6t6HygY6pgGQK1NEqWGytKkhHHGCERHXT4%2FLrhzjdYwW5%2FG3cl%2Bm7CkJPs%2FT6TG07aOFNzEK5RYqbekivM6elesmbodkOPqoLachhrPe8aemTddb2ZQZf641mARAuGOYwNFtgxjmXRMUB4u5FwG4hX5i1V41pJGPgppIKltzCcGXwE4o7wc600PEvXty6pBmLmt1MOpo8tfZVrmS6IkLwclZQWZQbCayC79YS8Bm&X-Amz-Signature=a73fc3c528f70d62ee281741c99430a43cb08c704dedabfa74a00da50c3aaee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V326ZPC2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T002950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGzpATU9RQUkkU8qbbiL7iDhiclbD2GlmLOEc7wwNuLIAiBhB2rBXcjC7h8ctbYj7be6MSwxYa6lmzRkuDFYQCQNzyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMdMADs6zNqUIDXKlEKtwDNpZGuFP0QEdNuR%2BwLmzHy9HCIJVKQ7jWGFDzcG4j1OONzfiDB2mhqJRa9QRO92xYwIERIaoiblSW78u7exL51eXUxEp9lktdETvk9f0%2B%2BjG2SAZiV4dX8OM6Difb5xbsE2azu3KBWKOxCbS9WqGBqn%2FbNzalr6hKQ46wJ8DjXTTd%2BsPbiXZREIC36FvomyNNVRD%2BrpK6izaggZ0%2BHtLnkKzVCSOd%2FW1BGUuETSyovoi2sa9mPiSJlCQ3KC4eJB5YJb54f%2B0Bk3claDCTYNPNmNZzxI5FJmAnzoAeGSSTtApSCZSBmXWJFTgXnWbvBMrOX5o6T2ZejrpQdLgaGyuCkRSoguw9%2FwPVp18EEvwyPqegK6c%2FSM7WzuR363SGpSOyLVMHhSmuj%2FK84zx9gWkRG6%2FaqqG%2Bb4NtKrwP0jLqgAdYJvJi2cB4uw%2FAXIZGaKp2e%2BzyeOcr3pe%2FiaJ1V%2FP38%2FVP7OIHpJY5PFvsdTPflD7bIoCLh27TjOy7u1MGA1WCcNiZLHD4Ot6cLqiD3iNLVIGHdE7brckNE3%2FHvXXczfXVj79UxyuczemamPEq%2F%2FCUW3lSJbL%2BP4r1Wcvditw556zYIrn0kbfH5%2FX%2BIghsYD4I%2FnVYNXvwyUGuhYQw6t6HygY6pgGQK1NEqWGytKkhHHGCERHXT4%2FLrhzjdYwW5%2FG3cl%2Bm7CkJPs%2FT6TG07aOFNzEK5RYqbekivM6elesmbodkOPqoLachhrPe8aemTddb2ZQZf641mARAuGOYwNFtgxjmXRMUB4u5FwG4hX5i1V41pJGPgppIKltzCcGXwE4o7wc600PEvXty6pBmLmt1MOpo8tfZVrmS6IkLwclZQWZQbCayC79YS8Bm&X-Amz-Signature=8a9c4604c6ed07bee1223b6584fe079ab7cbbb3026bbd9cc989615833a1e107d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

