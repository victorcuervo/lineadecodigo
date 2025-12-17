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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPQ4XAZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9yWSyxAbh6oQgXtyeOuGFkBd0hm982sZJi0WMHilYKAiAznnjA5CikDSm2F3HntoBL410MkP5W7h%2FvD2BZJca%2Fnir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM%2B8xw1AzSdedxz3ppKtwDchu4DfuYEos%2FI%2FZjUHnXnqWBSKi%2FsGFM1SHgYc36YnewbZ4%2BN4zFH6IDRi3Xxqh0j%2FRbHrQBVKH7pOieNADYZVmO0Eaxd2j7L9wO0teLtvcVXvsr5SO6hj9uyxib4K4%2FLpQnkYUvzlGiWdqbJQJOvNhm5AJ38%2BUe2wZNe%2Bqcyv1faTEJWctKNCH1fgTNFafhhxqGl%2FVIIspUJ2SifZ62rOe5XiTZ6M4O5FjH%2Fli1KmXp91n8R53Cn%2B82y%2FrvIO2HxuQFrJgND0kVpWqOWtSqH%2FU7LA9Nrkoz79c%2BBbJaYL6Hvb%2F3IGqnYI93b7dy3R6DuHfW1XZ4yRf1l%2BuxFXV5LM9Ya1qSenj12NVW3TCZ4rRofAcYKzwQeQITB%2FWBLZ%2B1CysusODLdKS%2FPrwTiUKWsKJjR47te4zEvP%2Faj662R%2F7%2FNhykgrABm%2Bp6t2gTXCY0NK1RmyzN5e6Jx25jddbfe3vIdA3LXr6WRqYBrUxAEvdkoJDdobOM4qVZxKvsxyf%2FwYnrZtXzHSJfvi7f0q%2FsvryfWR39IfoBgnLk0Z0M4BRnzJxHhLWTpAKb4QFAt1r6rWCjmv%2BiI%2F8SxokgZrX0YfWFayHMyxEg23P2w7568%2FVOKBkBU%2BGzGxbSiuAwtcaKygY6pgFWfjAMFeLp4A4jLI18KGAGljjpZ4OoaWt1PGycC2sheXerjGBJ%2BAVsIABvSRdpkeTWq0yQDERYeOFFLOz5lmPTZHpL9nS3Jx9AAlFy5ZhG%2BTYQ0zDFdBFlqskVU3Mg4w5tR09V66L%2F8AJilBq49l7rd2Gbt1at6AWlMGSJTw5D2F5dmw%2FLzqe7oXwnemzcJN1y36%2B4lTiKvpClINGgp9ZDoarDOweA&X-Amz-Signature=db738f3cfdb7347159cf77f6e93a76d2a121c1d233d7f34a33cda8659cde66f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JPQ4XAZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T124948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9yWSyxAbh6oQgXtyeOuGFkBd0hm982sZJi0WMHilYKAiAznnjA5CikDSm2F3HntoBL410MkP5W7h%2FvD2BZJca%2Fnir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIM%2B8xw1AzSdedxz3ppKtwDchu4DfuYEos%2FI%2FZjUHnXnqWBSKi%2FsGFM1SHgYc36YnewbZ4%2BN4zFH6IDRi3Xxqh0j%2FRbHrQBVKH7pOieNADYZVmO0Eaxd2j7L9wO0teLtvcVXvsr5SO6hj9uyxib4K4%2FLpQnkYUvzlGiWdqbJQJOvNhm5AJ38%2BUe2wZNe%2Bqcyv1faTEJWctKNCH1fgTNFafhhxqGl%2FVIIspUJ2SifZ62rOe5XiTZ6M4O5FjH%2Fli1KmXp91n8R53Cn%2B82y%2FrvIO2HxuQFrJgND0kVpWqOWtSqH%2FU7LA9Nrkoz79c%2BBbJaYL6Hvb%2F3IGqnYI93b7dy3R6DuHfW1XZ4yRf1l%2BuxFXV5LM9Ya1qSenj12NVW3TCZ4rRofAcYKzwQeQITB%2FWBLZ%2B1CysusODLdKS%2FPrwTiUKWsKJjR47te4zEvP%2Faj662R%2F7%2FNhykgrABm%2Bp6t2gTXCY0NK1RmyzN5e6Jx25jddbfe3vIdA3LXr6WRqYBrUxAEvdkoJDdobOM4qVZxKvsxyf%2FwYnrZtXzHSJfvi7f0q%2FsvryfWR39IfoBgnLk0Z0M4BRnzJxHhLWTpAKb4QFAt1r6rWCjmv%2BiI%2F8SxokgZrX0YfWFayHMyxEg23P2w7568%2FVOKBkBU%2BGzGxbSiuAwtcaKygY6pgFWfjAMFeLp4A4jLI18KGAGljjpZ4OoaWt1PGycC2sheXerjGBJ%2BAVsIABvSRdpkeTWq0yQDERYeOFFLOz5lmPTZHpL9nS3Jx9AAlFy5ZhG%2BTYQ0zDFdBFlqskVU3Mg4w5tR09V66L%2F8AJilBq49l7rd2Gbt1at6AWlMGSJTw5D2F5dmw%2FLzqe7oXwnemzcJN1y36%2B4lTiKvpClINGgp9ZDoarDOweA&X-Amz-Signature=83fa4bdac578a4891522d13909329f98940ffdbd0de631fb00d5b6c41a888411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

