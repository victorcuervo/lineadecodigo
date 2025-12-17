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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFDM7RNF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8XBjFZPe6oC21jbkO2vdq84n1491TGBAo7cQQERJm7AiA7YySE69WjVjrNwvltkQfY5iacuU3hA%2B5IOt2ndawmWyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMVjhbFZhaasoVpbMMKtwDOXCylGUR%2Braej5xsfsJiE3blpAq%2FirhEXt8n0QK5Dj3rNPTUsu1AASqwONcRmWYQo%2FZpfBuorNKSpcaCzI%2BRkoQ7XvIrpdiiLf0Ei1hPHxqK6cw2NtTY%2Fl3KGWbh1o1hjyWDFmF7txb7orgWUevTq8Z%2Bt3lrwEAjrbJEtamC7wTIQBx1Q6pqXUwuIUC45t5B5M2WCWhEE%2FTfnPjROdKs7B6FLAVybFiitGixf701%2FVFhqgaz5HGdg56ymAOMD9zPwKMB3aXfb6nY4UX2XynTeuvC%2BgNUI3d2xcIi0ibK3Pw%2FlZbdZORAIOvqlnOtYeogVnRUj2j3pRrFHYt4FNSZg%2BU7nYdgY4k4OiOQWYComd35FJ9zh%2FEAr7JYp5Moy6wmrkx%2BjrXOhG1onEz3x0enS%2Fj7ZkM2QFZdIPHMts%2F8Ax9MlPMp%2FdJzNRkJEWkBU1uizrEw8L4fewSlnvBQi5p4RkVlnbUklOqmP01q7bzPhQs%2BR4v1MlwWtxFESc3ZWePIpKwu2d3dReCraQt4L7x2n4LIulVQ3PbhKEWbR5OGrPMKy7%2Fr6uRkTRdvWQ9u54BPafstH369iBPhF5PbVq0R4pP3H%2BHk9Y1VJE5XseDTJgkueJuYvluo1D8oHYgwss6IygY6pgEXHsJPd8rxTWGTZS8dwK8TvxPiHTa1GumOMqVL1mftkawLmnx%2BfB9iJQQt79CP%2BaDRszHy3UVjIMD5dgBZpkxVeMZ2V3B4kwF1eHPGJy0wf9ttzrMyUSVIyCIvql8GQN8MTbhBXqfZC8CFhAAaKg6%2FpwhIkpKX3yosJjjlKK3X1wR%2FhUVdTBn0R4v%2Bh7h59yuPIMRzGx4dQf5TvYxn5rCurkj%2FE0%2BB&X-Amz-Signature=1d988e8bc23b5135c481a35f8b7802a053509ddae4e8f810972a074f2f3232f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFDM7RNF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8XBjFZPe6oC21jbkO2vdq84n1491TGBAo7cQQERJm7AiA7YySE69WjVjrNwvltkQfY5iacuU3hA%2B5IOt2ndawmWyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMVjhbFZhaasoVpbMMKtwDOXCylGUR%2Braej5xsfsJiE3blpAq%2FirhEXt8n0QK5Dj3rNPTUsu1AASqwONcRmWYQo%2FZpfBuorNKSpcaCzI%2BRkoQ7XvIrpdiiLf0Ei1hPHxqK6cw2NtTY%2Fl3KGWbh1o1hjyWDFmF7txb7orgWUevTq8Z%2Bt3lrwEAjrbJEtamC7wTIQBx1Q6pqXUwuIUC45t5B5M2WCWhEE%2FTfnPjROdKs7B6FLAVybFiitGixf701%2FVFhqgaz5HGdg56ymAOMD9zPwKMB3aXfb6nY4UX2XynTeuvC%2BgNUI3d2xcIi0ibK3Pw%2FlZbdZORAIOvqlnOtYeogVnRUj2j3pRrFHYt4FNSZg%2BU7nYdgY4k4OiOQWYComd35FJ9zh%2FEAr7JYp5Moy6wmrkx%2BjrXOhG1onEz3x0enS%2Fj7ZkM2QFZdIPHMts%2F8Ax9MlPMp%2FdJzNRkJEWkBU1uizrEw8L4fewSlnvBQi5p4RkVlnbUklOqmP01q7bzPhQs%2BR4v1MlwWtxFESc3ZWePIpKwu2d3dReCraQt4L7x2n4LIulVQ3PbhKEWbR5OGrPMKy7%2Fr6uRkTRdvWQ9u54BPafstH369iBPhF5PbVq0R4pP3H%2BHk9Y1VJE5XseDTJgkueJuYvluo1D8oHYgwss6IygY6pgEXHsJPd8rxTWGTZS8dwK8TvxPiHTa1GumOMqVL1mftkawLmnx%2BfB9iJQQt79CP%2BaDRszHy3UVjIMD5dgBZpkxVeMZ2V3B4kwF1eHPGJy0wf9ttzrMyUSVIyCIvql8GQN8MTbhBXqfZC8CFhAAaKg6%2FpwhIkpKX3yosJjjlKK3X1wR%2FhUVdTBn0R4v%2Bh7h59yuPIMRzGx4dQf5TvYxn5rCurkj%2FE0%2BB&X-Amz-Signature=8ec52797c399c1948d53b2fcb5ce9a2ca7b3ca4e1178c89b14e0fabd545bd6c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

