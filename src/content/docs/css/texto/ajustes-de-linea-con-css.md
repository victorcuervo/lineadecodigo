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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STQOBJP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw4zlO2Y%2BmwwSZJtIC9kh6IFsBXfcfrtgx8Nq%2BkpS0PgIgErmmp0DBFntdCAWrDfmqmWsSKxTrlxYnEiw0661%2BY%2FUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJVTZR5K7DTvV9oapyrcAzGwCuV9Y5D9XrU7pU0NOROWh26mQbWQfW4IFFMc32G2Xt4vlHyWeAuAgJuY1zLg6Ya5EosSXnbi0tkVIm5VTjGQH29Eho48GMiwGEXtTdorRSOGGEER8KYxJ%2FrEGiZn65ABG%2FrVeJStBnb6CYJWVw%2BxDCysUE6qGwa0VOvNBY6q81WBKwqSJvj%2BST%2F4RM%2F%2FXNXQDaynQfqljhzjdwnOKao5LZ3bsE53IpbTKvnJMD%2F6zKtBR1%2B13VLwVnhOys8eKFnSMTr5bHp7mEWs%2BW7bMuQJqp7FwrQAdxovihdE3gubbxa%2BwAOzUWiCz3scnaNImGZPF%2FUbGNH3X5IrGysPq2zAoZDc%2BQ1OJqDVhi4rSwGr8B9yhmXp%2BTm5EQFRv7GXJf6XNv28w5N8%2B%2BgyTBSTOcN3adkneCHQG6Ejcw0Y5W%2FyVq6bZZDTgGdM3PA39yfdvwi%2FL81JKMfkWs1xpQZH6Zw45ScKsE1vHk%2Bn5rOKn%2BxgD6Z2I71XmY04OdOVVtTnFAqPI9vkmG14UxLh%2FvLJ7UtVfqtPyvb4iZVcI%2FelKl8g%2FQJKcdHOV2VWit3ChF6iL3FjvwGgbulNqxUrBLagbiorpI5al6LxLsYNiL5X7TAMRVKhjy%2FwQNZbdo7qMPTFisoGOqUBow%2FXkEprOICe5CZOsTsykqt1JxLBylSfriR7zS3rMdn2wPL4S9QMGDURlgiOc5Gr87PPxnMN17cbT41CUFqG38qx2kCNzVe2Wvj8oODp5jVhLU7tk8HKB1i9p5b0WduMA8ZMma8Yzb2BLGFsFr5P8sO1lOJjqEqiekk0GS%2BDdGqe6ixGYt85uPMVp9pXfrh9VR0RqQEkEv137sB5Kbe9p3XOthXC&X-Amz-Signature=d3d6eb3c2102e1ebc97082b2a7db1ff86c093b88ad85716fe867c38c72b625c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664STQOBJP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDw4zlO2Y%2BmwwSZJtIC9kh6IFsBXfcfrtgx8Nq%2BkpS0PgIgErmmp0DBFntdCAWrDfmqmWsSKxTrlxYnEiw0661%2BY%2FUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJVTZR5K7DTvV9oapyrcAzGwCuV9Y5D9XrU7pU0NOROWh26mQbWQfW4IFFMc32G2Xt4vlHyWeAuAgJuY1zLg6Ya5EosSXnbi0tkVIm5VTjGQH29Eho48GMiwGEXtTdorRSOGGEER8KYxJ%2FrEGiZn65ABG%2FrVeJStBnb6CYJWVw%2BxDCysUE6qGwa0VOvNBY6q81WBKwqSJvj%2BST%2F4RM%2F%2FXNXQDaynQfqljhzjdwnOKao5LZ3bsE53IpbTKvnJMD%2F6zKtBR1%2B13VLwVnhOys8eKFnSMTr5bHp7mEWs%2BW7bMuQJqp7FwrQAdxovihdE3gubbxa%2BwAOzUWiCz3scnaNImGZPF%2FUbGNH3X5IrGysPq2zAoZDc%2BQ1OJqDVhi4rSwGr8B9yhmXp%2BTm5EQFRv7GXJf6XNv28w5N8%2B%2BgyTBSTOcN3adkneCHQG6Ejcw0Y5W%2FyVq6bZZDTgGdM3PA39yfdvwi%2FL81JKMfkWs1xpQZH6Zw45ScKsE1vHk%2Bn5rOKn%2BxgD6Z2I71XmY04OdOVVtTnFAqPI9vkmG14UxLh%2FvLJ7UtVfqtPyvb4iZVcI%2FelKl8g%2FQJKcdHOV2VWit3ChF6iL3FjvwGgbulNqxUrBLagbiorpI5al6LxLsYNiL5X7TAMRVKhjy%2FwQNZbdo7qMPTFisoGOqUBow%2FXkEprOICe5CZOsTsykqt1JxLBylSfriR7zS3rMdn2wPL4S9QMGDURlgiOc5Gr87PPxnMN17cbT41CUFqG38qx2kCNzVe2Wvj8oODp5jVhLU7tk8HKB1i9p5b0WduMA8ZMma8Yzb2BLGFsFr5P8sO1lOJjqEqiekk0GS%2BDdGqe6ixGYt85uPMVp9pXfrh9VR0RqQEkEv137sB5Kbe9p3XOthXC&X-Amz-Signature=3b2c6869abaa8b08adac99a2f457122ccea879570df9c3d40bea8af929070e08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

