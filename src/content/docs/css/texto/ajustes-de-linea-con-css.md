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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPNSLOVU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2vdRkMPJv1unFPqgy7r4FKJtDITddGoPwiGGonaiVxAiB9SuSTrlNxlbe4Z5%2Fck5ucSxyU%2FyQWLiRGsszU4zKnHCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMThguFd3o6CTBgtLIKtwDfhis7ZAyNDD50wmhGx4FyMFSiYROu17EIKTB6So%2FeXENPh5s6jD3RT1T6hQvip1eZosY0RfwrBusxnAAIndzPUS2zj2nj%2F0pwRqcupsEtn4QgPYJaTlbZmcWSYTimiTBtgCcAKOYVI3cQF7WUbkcBNPeG4nGpLueNXB8e2Gmke3oEcFozudZ8xS2VvH2dp0ej692%2Fq9Q%2BNndHTJmlOYow8zdgCB7zAw6sYBs2km%2F%2B%2BCpiiexSBYO55Ds9U7nnWqSZjMmK%2FC9t2eG1RsHL53JBQSXR5gyaWiMsy3FnEYqo6TY%2BRlrq1g9zPrr6hhJ%2F5diIV5jthSwVVMa60cfp%2FVj7A%2BCVy4ZlkeaBlqEIMAnb0JDlM4QxenLZK4fzXBnjX78IVma6ItBymeCBpoKWIE1XAoC%2Fs7QTeWeUH8fQJ2vBNYqSulwwGxqEz3SdDnI%2FVTywgOhoIDIUd535GBx%2FHkK3Z%2FeGzPqKrbNeV26zEpFO9fq3zVaf2ELDdm%2B%2F9%2B%2Fb4SYCtHT3%2FUmJlpAlWqPdCNgIBLygpDZHHLgKvIi%2FZthKEhc%2BW58kCAK%2FF%2BjXbsldZ%2Bc0RaITsjLWSPSg8LhZUkjgXZLI9KXS8MleDWQ20mDzxN8anbxEoEApMWqyFkw2LKIygY6pgEo51%2FfbsCd2tQErihHVqt0IgeIrQmIbBoT9pbv5zKKsNZ6ERC3WBYK0uDYchYsd4LtfyMUarSzyRCPUsRvuIakbgRQNa78KuO4duDRVlMaEX0sz0%2FMJiOXItY77i1Ya2QEm9857bxloA7HbdDi6r854cvSd2Vp8xOUzC7kVL2EsbLmMJ6HxGP4kf%2BD5VvQvcs33KWmBAsEKugZDQGuhaEPDXBcQk3b&X-Amz-Signature=c5462046ad7820427871932c2affc4231ad4d6c714ecc0bc53fc815a931240d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPNSLOVU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T031540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2vdRkMPJv1unFPqgy7r4FKJtDITddGoPwiGGonaiVxAiB9SuSTrlNxlbe4Z5%2Fck5ucSxyU%2FyQWLiRGsszU4zKnHCr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMThguFd3o6CTBgtLIKtwDfhis7ZAyNDD50wmhGx4FyMFSiYROu17EIKTB6So%2FeXENPh5s6jD3RT1T6hQvip1eZosY0RfwrBusxnAAIndzPUS2zj2nj%2F0pwRqcupsEtn4QgPYJaTlbZmcWSYTimiTBtgCcAKOYVI3cQF7WUbkcBNPeG4nGpLueNXB8e2Gmke3oEcFozudZ8xS2VvH2dp0ej692%2Fq9Q%2BNndHTJmlOYow8zdgCB7zAw6sYBs2km%2F%2B%2BCpiiexSBYO55Ds9U7nnWqSZjMmK%2FC9t2eG1RsHL53JBQSXR5gyaWiMsy3FnEYqo6TY%2BRlrq1g9zPrr6hhJ%2F5diIV5jthSwVVMa60cfp%2FVj7A%2BCVy4ZlkeaBlqEIMAnb0JDlM4QxenLZK4fzXBnjX78IVma6ItBymeCBpoKWIE1XAoC%2Fs7QTeWeUH8fQJ2vBNYqSulwwGxqEz3SdDnI%2FVTywgOhoIDIUd535GBx%2FHkK3Z%2FeGzPqKrbNeV26zEpFO9fq3zVaf2ELDdm%2B%2F9%2B%2Fb4SYCtHT3%2FUmJlpAlWqPdCNgIBLygpDZHHLgKvIi%2FZthKEhc%2BW58kCAK%2FF%2BjXbsldZ%2Bc0RaITsjLWSPSg8LhZUkjgXZLI9KXS8MleDWQ20mDzxN8anbxEoEApMWqyFkw2LKIygY6pgEo51%2FfbsCd2tQErihHVqt0IgeIrQmIbBoT9pbv5zKKsNZ6ERC3WBYK0uDYchYsd4LtfyMUarSzyRCPUsRvuIakbgRQNa78KuO4duDRVlMaEX0sz0%2FMJiOXItY77i1Ya2QEm9857bxloA7HbdDi6r854cvSd2Vp8xOUzC7kVL2EsbLmMJ6HxGP4kf%2BD5VvQvcs33KWmBAsEKugZDQGuhaEPDXBcQk3b&X-Amz-Signature=4f0ffffec4e8d7ddb959b1caca27082be28af18366ee2cad066e94b10941e87f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

