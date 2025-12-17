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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2M2AW7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfzORpfQu1voc9GmC%2By9FisTwfYWBLJ07X4vCwqg52AgIgTIVP13m4tfXaoDaJhN4cDLFWIPXK7o05MKgllaWkrP8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIYazVUuVah%2BcKkgKircA9O%2FNIUYOkTWz3HyeXXsvnxZAAyjSR0V4AoE09iNquq%2BuE45DN0ZVQv%2Fe50jrR01RkCOJNilSUNQM3TJy%2BA1QsGZiPGp6h5vv0ttuBnDmqMujfhLeIzBXeB8NtQ%2BhMZoy9gi7%2Fp1an8jTyNIPeVf288IBh1sRrx5pnntz3hYw%2FW7OJP2X6BiMWakJ8sW4QI2tspg7zqdCp61IX7VYNzJnNLepsISTBGBt626bQAT2gwCwsJacq3YGQJxE2IusZA36859cHb4G4%2F6GqiBlFSM8CFMlW88fpLRvPBnSVToiY8XS%2FmxEZb01QTGk1yL0UgFrQ1%2BXLci8ti3WpONEVY%2Bs3u7aMIZ%2FmPPzcJafHgYDjmXfMg8GhDDU3Lb2SHGCDIrzqrRyVzQ3vVhsVz%2FGbcgn7hWSaa7X9xxyM1JWbXdsDwD42iq%2BJ5fSngi4XDDlXZGmFeLlwFQxzayKvxBmDDiSLThQDxj1rhSAdlFqOd6TjP3%2BlPUPh8%2B%2B97UiwqYGwk24AnCxNdk3i1jQ1wjxr0xAM%2FfsRAxorVut%2FkoNdSVDb9N3Jjpkal3V43YKDGLyFwohtFj5w1cHSi3X598ug1ObX%2FPqTR7zTRZkHQXhOjghHoJsHhswIil3RDjAsbQMO7vicoGOqUBDfgtYy%2BA%2BRrHLElH8d%2FQje3x93FOvmoL8i2bt324wl2gUYYL3gFf5E0WP8o3ghf79G5VvM3gChcQqpLZb4q73zDbuCWgP14PCdd18jiyAEL2RY6tGmYrR8FuvOFrULBp1kbpm3x8RzGkk1ELoLl0X22%2F%2B2CFdpgxUpB%2F7NbgU1%2B251zaUkgFi4FFGvN2fKQVagoE791BitFITuGKoBsafa8y2QnN&X-Amz-Signature=5c7359b112a9e941d6f26aaca1c2e2677107194e7ad75055b99e08ba19debda2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2M2AW7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T103243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfzORpfQu1voc9GmC%2By9FisTwfYWBLJ07X4vCwqg52AgIgTIVP13m4tfXaoDaJhN4cDLFWIPXK7o05MKgllaWkrP8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIYazVUuVah%2BcKkgKircA9O%2FNIUYOkTWz3HyeXXsvnxZAAyjSR0V4AoE09iNquq%2BuE45DN0ZVQv%2Fe50jrR01RkCOJNilSUNQM3TJy%2BA1QsGZiPGp6h5vv0ttuBnDmqMujfhLeIzBXeB8NtQ%2BhMZoy9gi7%2Fp1an8jTyNIPeVf288IBh1sRrx5pnntz3hYw%2FW7OJP2X6BiMWakJ8sW4QI2tspg7zqdCp61IX7VYNzJnNLepsISTBGBt626bQAT2gwCwsJacq3YGQJxE2IusZA36859cHb4G4%2F6GqiBlFSM8CFMlW88fpLRvPBnSVToiY8XS%2FmxEZb01QTGk1yL0UgFrQ1%2BXLci8ti3WpONEVY%2Bs3u7aMIZ%2FmPPzcJafHgYDjmXfMg8GhDDU3Lb2SHGCDIrzqrRyVzQ3vVhsVz%2FGbcgn7hWSaa7X9xxyM1JWbXdsDwD42iq%2BJ5fSngi4XDDlXZGmFeLlwFQxzayKvxBmDDiSLThQDxj1rhSAdlFqOd6TjP3%2BlPUPh8%2B%2B97UiwqYGwk24AnCxNdk3i1jQ1wjxr0xAM%2FfsRAxorVut%2FkoNdSVDb9N3Jjpkal3V43YKDGLyFwohtFj5w1cHSi3X598ug1ObX%2FPqTR7zTRZkHQXhOjghHoJsHhswIil3RDjAsbQMO7vicoGOqUBDfgtYy%2BA%2BRrHLElH8d%2FQje3x93FOvmoL8i2bt324wl2gUYYL3gFf5E0WP8o3ghf79G5VvM3gChcQqpLZb4q73zDbuCWgP14PCdd18jiyAEL2RY6tGmYrR8FuvOFrULBp1kbpm3x8RzGkk1ELoLl0X22%2F%2B2CFdpgxUpB%2F7NbgU1%2B251zaUkgFi4FFGvN2fKQVagoE791BitFITuGKoBsafa8y2QnN&X-Amz-Signature=6e3b764ca57d470f357ab41ed580a3e76ac01476b99ac8673f2c5d4d3450228c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

