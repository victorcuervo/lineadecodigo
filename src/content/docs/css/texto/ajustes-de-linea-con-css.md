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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654IRQUF7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDod673PKm4k%2Bjr1yJtzXcM7vXlFsRWSJykNSTom2yDkAIhALr1MUsa0SdM8xzoAEOjBb2k6mapmGeV9oSDj8Q2SwtiKv8DCHkQABoMNjM3NDIzMTgzODA1Igw4Xqkz7VvwKqKByEMq3ANAhDXD9XDNaVxuIb5W%2FcS2SZIyaGc5Mlx6dsMElteQb3bGh51VDrd8O6Q3Kuh4OBJ%2Bsyi788hZ4IdUn8tX2unOwNu8qAOqD7hzkcxBv9pknldmQNdHbeEI7xhmRWBx%2BZ5Svn46UejV7KXzihvS5i99INN5xn6gAZlBmf1otEc%2B6Pl6bLCXg8VOWIZ2%2B3RCbBd8JazntfJZ8uaqIiebVh1cbsjcE%2FP3FqYJ%2FCIKb6Cgqj9ZmaWhoAqFamNIXQPL9wh5b2SqQoY0ZBRrhhTj1k0%2B191dcGsb6OAC0mYzx5DngWS6WGtg1ShpbGpH2CVT6Ps87Qviw9s04CCxjjMJkNY06tjrprNV6AkHW3DsJY%2FPtGbRfNj%2BcYU9t4%2B7gbP6Ci8cWX4GOTAemuznItDx52lU1741FU%2BeTo44ZHH6r3gyaxy1BgC0mDIUTE2ci%2FjlQZlnaEro5oAYYDH1vIHogmhBDO0FXOE78rFe60LAjjBT7ADzvd8NCFYe7v34WvfSyxPyNm84sUxXuX80b8%2BgoJp%2BLzAvzd1HdsmyCelE3ZZoDoS4x5SgVGY6ZXh0gPlMk%2BCRlHCxUSvMvzAwICDfkbSiz%2FEUotVFbVen4tgz%2F2TXwzCoYu9KfISIS4aDMjCA0YnKBjqkAY1zd7ZM3nlzz7l2KxlWVXuvnFZ87EmvisNFp48HEp6mWpkR42N3TvWXPnCh%2FC7dI84asBdLpyw73QyMvpvhImR5dvjHnqNgZb0bPlmAp26HWn1Hde7EWzZ8KpO4FQfa6xTaOHFVXjCzxDEVARsu7obW5Q13Y9V9Ceww5v7MtP6khf8F1k0O415aqUJzJLN%2FnLsxLIFPR4%2BLicckMIXliL%2BuMuS2&X-Amz-Signature=9e42b8d5a34727ade0dba281505021057cabb0214af7f76fc856b862268565d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654IRQUF7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDod673PKm4k%2Bjr1yJtzXcM7vXlFsRWSJykNSTom2yDkAIhALr1MUsa0SdM8xzoAEOjBb2k6mapmGeV9oSDj8Q2SwtiKv8DCHkQABoMNjM3NDIzMTgzODA1Igw4Xqkz7VvwKqKByEMq3ANAhDXD9XDNaVxuIb5W%2FcS2SZIyaGc5Mlx6dsMElteQb3bGh51VDrd8O6Q3Kuh4OBJ%2Bsyi788hZ4IdUn8tX2unOwNu8qAOqD7hzkcxBv9pknldmQNdHbeEI7xhmRWBx%2BZ5Svn46UejV7KXzihvS5i99INN5xn6gAZlBmf1otEc%2B6Pl6bLCXg8VOWIZ2%2B3RCbBd8JazntfJZ8uaqIiebVh1cbsjcE%2FP3FqYJ%2FCIKb6Cgqj9ZmaWhoAqFamNIXQPL9wh5b2SqQoY0ZBRrhhTj1k0%2B191dcGsb6OAC0mYzx5DngWS6WGtg1ShpbGpH2CVT6Ps87Qviw9s04CCxjjMJkNY06tjrprNV6AkHW3DsJY%2FPtGbRfNj%2BcYU9t4%2B7gbP6Ci8cWX4GOTAemuznItDx52lU1741FU%2BeTo44ZHH6r3gyaxy1BgC0mDIUTE2ci%2FjlQZlnaEro5oAYYDH1vIHogmhBDO0FXOE78rFe60LAjjBT7ADzvd8NCFYe7v34WvfSyxPyNm84sUxXuX80b8%2BgoJp%2BLzAvzd1HdsmyCelE3ZZoDoS4x5SgVGY6ZXh0gPlMk%2BCRlHCxUSvMvzAwICDfkbSiz%2FEUotVFbVen4tgz%2F2TXwzCoYu9KfISIS4aDMjCA0YnKBjqkAY1zd7ZM3nlzz7l2KxlWVXuvnFZ87EmvisNFp48HEp6mWpkR42N3TvWXPnCh%2FC7dI84asBdLpyw73QyMvpvhImR5dvjHnqNgZb0bPlmAp26HWn1Hde7EWzZ8KpO4FQfa6xTaOHFVXjCzxDEVARsu7obW5Q13Y9V9Ceww5v7MtP6khf8F1k0O415aqUJzJLN%2FnLsxLIFPR4%2BLicckMIXliL%2BuMuS2&X-Amz-Signature=ddc6e1a87b814e3a868eb07cc7912141e0b689c5539902ae3942fd694569e309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

