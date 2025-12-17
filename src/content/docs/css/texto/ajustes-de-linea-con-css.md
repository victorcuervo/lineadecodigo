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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRDNFIF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FunaZDNmBCG8oKkeRZ%2B2jPuyGOo%2BKgxYVH15cFWZT4gIhAPDAdk4BRc50kIOPxloJjPTYoS3pkn9JkgANauYe%2FP2QKv8DCHYQABoMNjM3NDIzMTgzODA1IgzbajsVUPS8s1HdJ08q3AO36PtLUerwVHmAveTM8360FbWtLAsw%2F1o0lDboCha6H9l3QuLvjqnYlbO0ZZhK22qig5XnQn8CNEsFWoW9SEBsNnM0%2B%2B2DgMCxp0cUfYuh4dGCB%2FOzxWKMqbAe8h8UVcXzIeJquXpe0OgjcdMUT7Z1hLqsoS%2BIKkGa1dxSN32jVeDa2q%2FOxlgRZ9FKlqOWi0Fuh758w05olLtqh%2FlN5%2BlKJGBd5UlQTOXf3VRReq%2Fl6qbw3oljhqzG%2BvJuURA7DsxMNvoZk2mmxaP0xi3nMY3M98diOqN87rozYMPsmOd4Cv%2ByhlDvevS6lLuomtRxFiZp9SAWUYeDnM2WhydKh6ivMrJhx3sUplSipTkUHDnLUgRB%2FVYFBRgstZrDkX8Hga%2Bh2JSmPeIZYQE3yfDCaAHlE0W%2B%2BWzkoUlwY5ijY%2Ff3cJhdn0vLy7yX17UsRAhv3AG3LZ7zh1Dh9uifL%2By0l9YdK5PBoqosbJIH0NP8fxmKGn64uHvZr4Y%2FFh2TROMAVFu%2Bi%2B%2BQeom4q4FYQ11%2BVgXXvWd2zZtjoXLqegua93HKbgk0MSKLHZ9xUVnUHwrr98BJZvdjWYZ9RlLibioo184bhdveve%2Fy31CjT%2Bqw9riT7kis5k1OzbHSMqox6DCT6YjKBjqkAVjYK%2Fjmv3ggajHLE9QWejTCkb5JO6UBedz4Mu802a%2Fvuqzfg43K7YdbC6lHX3YG1zoB9yl227KgxI2IoiaahIvBpKxesJqtZItUtNcgm9vEc3GQIknZsDuEPp2uraJdnRvLzM49L6iUg81bSOAQ%2BMtWOi32vvrrBkz3N6UY%2B7TR7OIGMWlgouH%2FTJLPS5jl43y9dNmYJ1qeV5hGqbZpJA23%2Fn84&X-Amz-Signature=ced9cb2048fa08aa02750d9c22a3a8d6e0ce1abee0d6fddd47a636ee53697ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRDNFIF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FunaZDNmBCG8oKkeRZ%2B2jPuyGOo%2BKgxYVH15cFWZT4gIhAPDAdk4BRc50kIOPxloJjPTYoS3pkn9JkgANauYe%2FP2QKv8DCHYQABoMNjM3NDIzMTgzODA1IgzbajsVUPS8s1HdJ08q3AO36PtLUerwVHmAveTM8360FbWtLAsw%2F1o0lDboCha6H9l3QuLvjqnYlbO0ZZhK22qig5XnQn8CNEsFWoW9SEBsNnM0%2B%2B2DgMCxp0cUfYuh4dGCB%2FOzxWKMqbAe8h8UVcXzIeJquXpe0OgjcdMUT7Z1hLqsoS%2BIKkGa1dxSN32jVeDa2q%2FOxlgRZ9FKlqOWi0Fuh758w05olLtqh%2FlN5%2BlKJGBd5UlQTOXf3VRReq%2Fl6qbw3oljhqzG%2BvJuURA7DsxMNvoZk2mmxaP0xi3nMY3M98diOqN87rozYMPsmOd4Cv%2ByhlDvevS6lLuomtRxFiZp9SAWUYeDnM2WhydKh6ivMrJhx3sUplSipTkUHDnLUgRB%2FVYFBRgstZrDkX8Hga%2Bh2JSmPeIZYQE3yfDCaAHlE0W%2B%2BWzkoUlwY5ijY%2Ff3cJhdn0vLy7yX17UsRAhv3AG3LZ7zh1Dh9uifL%2By0l9YdK5PBoqosbJIH0NP8fxmKGn64uHvZr4Y%2FFh2TROMAVFu%2Bi%2B%2BQeom4q4FYQ11%2BVgXXvWd2zZtjoXLqegua93HKbgk0MSKLHZ9xUVnUHwrr98BJZvdjWYZ9RlLibioo184bhdveve%2Fy31CjT%2Bqw9riT7kis5k1OzbHSMqox6DCT6YjKBjqkAVjYK%2Fjmv3ggajHLE9QWejTCkb5JO6UBedz4Mu802a%2Fvuqzfg43K7YdbC6lHX3YG1zoB9yl227KgxI2IoiaahIvBpKxesJqtZItUtNcgm9vEc3GQIknZsDuEPp2uraJdnRvLzM49L6iUg81bSOAQ%2BMtWOi32vvrrBkz3N6UY%2B7TR7OIGMWlgouH%2FTJLPS5jl43y9dNmYJ1qeV5hGqbZpJA23%2Fn84&X-Amz-Signature=d28fb12fb7d5e261a43709d7c4f068765472479fc5764cd40f50bba0e9b53310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

