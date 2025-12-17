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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UMER77T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFso44TgjNg0fmoChEW26h4loTldXyARIFRRpYsYYJh7AiEA7qMBpfmzUTbZxnfQcGNohAiR9h4EIZbrlkeZfHI5c9cq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDL1zTPwSbS4zbjwzBircA5S9y%2FRSOQO%2F90pw4VWG9pbkka0m%2Fbc2YaQDvwk9Pu37lp9QfesgaZjNzxZC5ZcAugZbfmU7gnzCjbax8uSrFdsb1U1nTsayA5surzWnXjDc8h4soJO21pTq5xya93R6hEn6h17wsUWqDjC42%2B4z0z992KJkpyIs7V5YNLkLduTPZYfVc8IpAqjr8aJchr5MkIpcCyZ2i6puZFfMZgWkcAhIR6mr5vOI6umvAVQQn0c2SSNItDkw1iVjXIAi2euTkTPp74k0djWYCjxS%2BzDQ5IJoqxS%2FyIdfg4iEzKpt3e4Q%2BFcQmaBPsjJWPLt%2BTUz8ojuJKsucrnXNeuMYkEHAXVHL3khPgr%2Brh%2F1nL%2BH3K7fyfUpAqtKKWmgKyUDlt%2F%2FcnDHY7unuxXCf%2BGwZ6TFjfK0h8HzGf%2FiyjZPUp8LhEzkzb835VKBOU8MDw44LQUAeVwpdNp6%2BvJuz6sT%2FMgd7i70n%2Bx8MFp31K68DR1reIzdWH2r006fPTLPXIqV%2BZk%2F2SmO9sx9CqGiJQ%2F0wv2BtVFlrKqzFWjmaRFDh%2FK7OqgS1peD%2Bp36s8Mnqg1zpx2i9gvWAzny64mMzQATKEo%2BtxgObJJOktC2%2BGTGvHHQLZCc7omIG1mhjct7gWpgjMObeh8oGOqUBdPpa56AuA5jPN1NChEXusMZcPwavrk8pOQ62Vd7EOxDv1xB30Ziio421ejpp0GwSyhjlCuu13XFxeMIJNDXijS4qGq58XGuLXXba1hNNnK7pe8%2FdYrgFWYNM9jk9sQcaKrHgc1xjMoA13JdP2Dtov4QZkQNLuUEIB%2FUjTnnVgS6Hf8t2qinWLJ%2FMDiIlPlsiQJ%2B8XCFSmo8z%2Bg8cLAOK3I2PQKrF&X-Amz-Signature=65c5494109abf1758cb679d5779346d11bc1b00ecc572ca717f0502868541e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UMER77T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T000926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFso44TgjNg0fmoChEW26h4loTldXyARIFRRpYsYYJh7AiEA7qMBpfmzUTbZxnfQcGNohAiR9h4EIZbrlkeZfHI5c9cq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDL1zTPwSbS4zbjwzBircA5S9y%2FRSOQO%2F90pw4VWG9pbkka0m%2Fbc2YaQDvwk9Pu37lp9QfesgaZjNzxZC5ZcAugZbfmU7gnzCjbax8uSrFdsb1U1nTsayA5surzWnXjDc8h4soJO21pTq5xya93R6hEn6h17wsUWqDjC42%2B4z0z992KJkpyIs7V5YNLkLduTPZYfVc8IpAqjr8aJchr5MkIpcCyZ2i6puZFfMZgWkcAhIR6mr5vOI6umvAVQQn0c2SSNItDkw1iVjXIAi2euTkTPp74k0djWYCjxS%2BzDQ5IJoqxS%2FyIdfg4iEzKpt3e4Q%2BFcQmaBPsjJWPLt%2BTUz8ojuJKsucrnXNeuMYkEHAXVHL3khPgr%2Brh%2F1nL%2BH3K7fyfUpAqtKKWmgKyUDlt%2F%2FcnDHY7unuxXCf%2BGwZ6TFjfK0h8HzGf%2FiyjZPUp8LhEzkzb835VKBOU8MDw44LQUAeVwpdNp6%2BvJuz6sT%2FMgd7i70n%2Bx8MFp31K68DR1reIzdWH2r006fPTLPXIqV%2BZk%2F2SmO9sx9CqGiJQ%2F0wv2BtVFlrKqzFWjmaRFDh%2FK7OqgS1peD%2Bp36s8Mnqg1zpx2i9gvWAzny64mMzQATKEo%2BtxgObJJOktC2%2BGTGvHHQLZCc7omIG1mhjct7gWpgjMObeh8oGOqUBdPpa56AuA5jPN1NChEXusMZcPwavrk8pOQ62Vd7EOxDv1xB30Ziio421ejpp0GwSyhjlCuu13XFxeMIJNDXijS4qGq58XGuLXXba1hNNnK7pe8%2FdYrgFWYNM9jk9sQcaKrHgc1xjMoA13JdP2Dtov4QZkQNLuUEIB%2FUjTnnVgS6Hf8t2qinWLJ%2FMDiIlPlsiQJ%2B8XCFSmo8z%2Bg8cLAOK3I2PQKrF&X-Amz-Signature=321ba71369625546521df72a225a34e36c9ae98548cec08dc05e23bec6a613ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

