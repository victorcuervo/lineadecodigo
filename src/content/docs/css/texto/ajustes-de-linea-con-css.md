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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEX5CHDQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP0JMP7G1wQbl7%2BvOR9yhZby6zRndZ60lZD2Rlnvh0fAIhAKRPXtDJCwfwcqUdK9taCJdawjAQGzJ1hKvL4ETHQXluKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyELQuHHYwA0uUhp%2BUq3ANmVUvZKbCfR7leOOLbBb505WTWKymSppAOdBK%2FwpgQ6lSqOAbOR6peUhhE7qpRbVP7j8RV9m2CbsLd%2FRYyvrJyhhKBcbOOMmyBl6LnIZ7w3%2FZwLaiVp57CBBFWql%2FIajmiwoAqI8FU83tjlSIv%2FG7m8zn13%2BagmC6oELInSgmo4uGa3PieIKv13SOy8pgrKMKt%2FBMd2eeMqR6zPqQatnnWB20GcH2p3muCg1RXzZbzzTnvmAh6PFUDc8hXeLrQNX3VPTO%2BwCrgnUyPNI8kpL6KMNGHOj0DMZK7focU6%2B0glCkzM1bHxCjhg8DX%2FXX6eaYDuzWIjXR%2Fnf6oiabYc4Va6E27ijHu03we203juEh8kF4mzqlbpgjacJKPssEtXgUEw84s91k2NjWePgYJ%2BB7MkTP0rzfQDFdBqyT3%2Bcvg1t4DGtfe5IzruN%2Fuyztn3L6yTn0C1gXjuMflQWIC4mMbNkWdAGjYfJRf6A7%2F7xdEPJYI2wbs97Hl2WzkRhOzXO%2BrF%2B95TIomS%2F0xLUuZJEcgsG17zR%2BxCMht7ygE4PsTJPcl%2F%2BJqrGeVfds7Zn%2BbssRZn%2F9dR0YNAFzDyG8CrCQr2WCsEhOV5fugO9eEdgzt58Eg8u4OSwpFA1CjhzDKrYzKBjqkAUO3KxDqqWAgIUEwNbTIdOgXY5z91HxoYnJeTKwwAlB9WBrQZkci2SmcPnQ4bXZ6GywSJIG8IGO0zCDxL3WAuLhnoZ%2FcMSR%2F5IKmh65Ty6pgtqJ%2BjKBTUdl2PzklmabAZbjVx35vyrVEqIXxKHx8lJ%2B7uEx7AbH22T8RLYJ7kPSHecTmCNXABU3VRnd7HrP%2Fo8sk6s%2FFZ4n4JHFAnI6QBhzdGenS&X-Amz-Signature=b36e0da353b14afd9f0778c6e93350481f8728f6e111e6b01e6429e21c39855e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEX5CHDQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T214407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDP0JMP7G1wQbl7%2BvOR9yhZby6zRndZ60lZD2Rlnvh0fAIhAKRPXtDJCwfwcqUdK9taCJdawjAQGzJ1hKvL4ETHQXluKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyELQuHHYwA0uUhp%2BUq3ANmVUvZKbCfR7leOOLbBb505WTWKymSppAOdBK%2FwpgQ6lSqOAbOR6peUhhE7qpRbVP7j8RV9m2CbsLd%2FRYyvrJyhhKBcbOOMmyBl6LnIZ7w3%2FZwLaiVp57CBBFWql%2FIajmiwoAqI8FU83tjlSIv%2FG7m8zn13%2BagmC6oELInSgmo4uGa3PieIKv13SOy8pgrKMKt%2FBMd2eeMqR6zPqQatnnWB20GcH2p3muCg1RXzZbzzTnvmAh6PFUDc8hXeLrQNX3VPTO%2BwCrgnUyPNI8kpL6KMNGHOj0DMZK7focU6%2B0glCkzM1bHxCjhg8DX%2FXX6eaYDuzWIjXR%2Fnf6oiabYc4Va6E27ijHu03we203juEh8kF4mzqlbpgjacJKPssEtXgUEw84s91k2NjWePgYJ%2BB7MkTP0rzfQDFdBqyT3%2Bcvg1t4DGtfe5IzruN%2Fuyztn3L6yTn0C1gXjuMflQWIC4mMbNkWdAGjYfJRf6A7%2F7xdEPJYI2wbs97Hl2WzkRhOzXO%2BrF%2B95TIomS%2F0xLUuZJEcgsG17zR%2BxCMht7ygE4PsTJPcl%2F%2BJqrGeVfds7Zn%2BbssRZn%2F9dR0YNAFzDyG8CrCQr2WCsEhOV5fugO9eEdgzt58Eg8u4OSwpFA1CjhzDKrYzKBjqkAUO3KxDqqWAgIUEwNbTIdOgXY5z91HxoYnJeTKwwAlB9WBrQZkci2SmcPnQ4bXZ6GywSJIG8IGO0zCDxL3WAuLhnoZ%2FcMSR%2F5IKmh65Ty6pgtqJ%2BjKBTUdl2PzklmabAZbjVx35vyrVEqIXxKHx8lJ%2B7uEx7AbH22T8RLYJ7kPSHecTmCNXABU3VRnd7HrP%2Fo8sk6s%2FFZ4n4JHFAnI6QBhzdGenS&X-Amz-Signature=3d97ae8386c7a7e10e81e06784bcf86e969872be371102089fcc998d2726fc5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

