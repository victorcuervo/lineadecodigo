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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVCU7H57%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0eDLr0WAg6%2BM%2BcCIrj2ZqJVddwqd5AI1DIHnhKh0tMgIhAPt3TrB0IHH18bEKKUGS5TrYEcCd%2BdoyNqFjxBSH1keSKv8DCH0QABoMNjM3NDIzMTgzODA1IgwGjfer9Rv2tfg22uAq3APtXF3kzfNjxnJdTtGfQaTz6Ak9TT3MiTMJIagBlzss6bWehoXXCOowO7gauhou0PGmptj8hRAUa2ggnCdnrr7j1Bj7qiL1KLtJpY5y5bAh6NcRV%2Bl1m7ZzYk46dLcyLhzZ2t7Ti2uMj07W6CuMeMcQDA3yFfAz66T6XymKzXXCXfnE9UpPvAAxBexeBtEEt0YIuNNQMZh3ei%2B68F3JaRq184%2FbHdLdGqEug8PCowh3xry8w3bT8gyM%2FFp8mVlO7GS1SaQ6ty6095di135KthHdpWdXxQmE0yrttxoPXJd5EAqsPUI15r6Ik2X6%2FcPkaff0rqvvlg%2FrtkateTiFHyrAPZxcQ7kSvLQcLGp7jzzscsH071MDdboYBZMAUXs2P4EHoZjVb4iPCMr1bq0FuQfKscZ9Uz4OmCgn9sr2CcOhObsU%2Fn5V6GIMJBTSKDavAhelBsDCpavWwsyBP2Wk4lYKrhe0RkqeJfZLuYhvwZIfJUW%2BvqDjihhDe2s%2FUswvr0cVyk7sA321h8OFaREx4bd6gjh7dHYSLkHojoN41wwHznKgfAjBxqbrCv4iK0PGuPEMPaqvzHPEfjhM1rDnQsDLR1dPAl12Ap22%2Ff4Gqu1few4NFMvLy80iJ41%2FKTCYqorKBjqkAVff3CYrfYcMvCzpB2Rf8qQoXw0kBT44rdD97gHd%2B1p%2BxkHMzied%2BydvEpal5jIH0JOcXHNROTtl0JzZpA60YIXw1XTdBhPduc3Oq%2BonArkbOh2yQTCmxM%2BlPeCQ5OjPClQ6HUH861go5iVnOp4Ey8dcmZqacmrgBApveK%2FxOQ0g%2BhGr3GQytXDyMcqmDy6E2eBdAgzLscDmfUVekApWRAOnclqg&X-Amz-Signature=e354d575d784413945911b3887474799ff3610c5dee3002f62d161e0e7c05473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVCU7H57%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0eDLr0WAg6%2BM%2BcCIrj2ZqJVddwqd5AI1DIHnhKh0tMgIhAPt3TrB0IHH18bEKKUGS5TrYEcCd%2BdoyNqFjxBSH1keSKv8DCH0QABoMNjM3NDIzMTgzODA1IgwGjfer9Rv2tfg22uAq3APtXF3kzfNjxnJdTtGfQaTz6Ak9TT3MiTMJIagBlzss6bWehoXXCOowO7gauhou0PGmptj8hRAUa2ggnCdnrr7j1Bj7qiL1KLtJpY5y5bAh6NcRV%2Bl1m7ZzYk46dLcyLhzZ2t7Ti2uMj07W6CuMeMcQDA3yFfAz66T6XymKzXXCXfnE9UpPvAAxBexeBtEEt0YIuNNQMZh3ei%2B68F3JaRq184%2FbHdLdGqEug8PCowh3xry8w3bT8gyM%2FFp8mVlO7GS1SaQ6ty6095di135KthHdpWdXxQmE0yrttxoPXJd5EAqsPUI15r6Ik2X6%2FcPkaff0rqvvlg%2FrtkateTiFHyrAPZxcQ7kSvLQcLGp7jzzscsH071MDdboYBZMAUXs2P4EHoZjVb4iPCMr1bq0FuQfKscZ9Uz4OmCgn9sr2CcOhObsU%2Fn5V6GIMJBTSKDavAhelBsDCpavWwsyBP2Wk4lYKrhe0RkqeJfZLuYhvwZIfJUW%2BvqDjihhDe2s%2FUswvr0cVyk7sA321h8OFaREx4bd6gjh7dHYSLkHojoN41wwHznKgfAjBxqbrCv4iK0PGuPEMPaqvzHPEfjhM1rDnQsDLR1dPAl12Ap22%2Ff4Gqu1few4NFMvLy80iJ41%2FKTCYqorKBjqkAVff3CYrfYcMvCzpB2Rf8qQoXw0kBT44rdD97gHd%2B1p%2BxkHMzied%2BydvEpal5jIH0JOcXHNROTtl0JzZpA60YIXw1XTdBhPduc3Oq%2BonArkbOh2yQTCmxM%2BlPeCQ5OjPClQ6HUH861go5iVnOp4Ey8dcmZqacmrgBApveK%2FxOQ0g%2BhGr3GQytXDyMcqmDy6E2eBdAgzLscDmfUVekApWRAOnclqg&X-Amz-Signature=0de13e292d4d21e934a3f068f3c55f30b3058069302b34fec0a4a5558efcf30c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

