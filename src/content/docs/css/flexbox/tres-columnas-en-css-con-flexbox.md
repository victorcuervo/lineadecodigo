---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWVW2O3Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjD8jyEipjHYCGxR75eyLgwaOSXQG4gsxLeJSo1Ly%2FlwIgETTJGLAW%2FG2tRpWawI5jjnvCQ6Dvv0OHQ9pGe9gy%2BNwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF04EIDpfZlceg%2BURircAxl3rqbCBenItk4oyUmbGtbqnALOK6NlInduKJXWrU4cJdzrjwcjz2no8i%2Fq9SI9A4YG8dKnYBDIgRblOY2DuybfqBdS7bliUOurSbiemZsA2pzXEGIFI%2F5tZvy6nhEckzy07Cb7wEPsVhDjOOEHatc2yUgQpxyjwrHGssvHJk64YPzwyRr5dISNYarKfqMdLodO96TmIARfZzkRTDggauiVwqMgu3iVZ%2BYRGXL5IvB%2FgFqFNIozpVW5qexCnlOC8CBPASaeQKP9tr3J9w5lHsG7ZuFpyf7AIBlh%2FStpbUF0U8ZWyStFNjDEhAVBSrtTEID53kJ5z8dY8V9MZhMgHF3Ib2FxxcwTRSzHS8UuqbrqTbB8p%2Fev1QLejadwl8x%2FKXHKNl175ifz9kOhFP56tMomRKf5YKm1Wk%2BbCD49hqJxpbtXD5cQmym%2Fm%2FL0JHAumTUhLwJN1JbT1pNEKP%2FgGpBuoqjD2OQDUrjiNU1PwoqW9q87Y7qPQV6SMmKVJC27Nfe%2B7XxMlbG8vU0AGdOv%2FvtmSVoraBkF%2F4QMVaXz4UNBIcxwYK1qi%2BVfqMseZZMjd9WO9xzfNggjwG84N1XYr2fB1ES%2B6HFcRHLuSJ9lb5k3xAL7w%2FgSmNH9Rf7PMLvt2ckGOqUBFntZY%2FJDCngaIlt7Q1k1DieV7JF%2BL8I3d1Q%2FdpaSxpLWGnTAl0CEvWPaeeHF67vXqsbomfMD9Xjd5djAQFl5XLgxUb1v1sU%2F8QyHJDzoI8pqgty8QF5lu5BRmiYIbyQxU3eCPkOq3eypn4UN%2Fy9QQEGG75NBmn6C6CsQtSj0TXCQXZn0jAiuKKKKeufujB2Ld%2BOQXLfdJ8D3XqgG%2F2dOUlp7ZbjW&X-Amz-Signature=baa6b69f4c2d0c26b6ef7d21edd25618abe9f708944fe6d9b21bfd656fafc7fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Por lo tanto lo que haremos para crear una página con tres columnas, lo que tendremos que hacer es crear el contenedor y tres elementos, cada uno de los elementos será una columna.


Si revisamos el código [HTML](https://www.manualweb.net/html/) será algo de la siguiente forma:


```html
<div class="contenedor">
  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>

  <div class="columna">
    <!-- Contenido -->
  </div>
</div>
```


Ahora pasaremos a darle el estilo mediante [CSS](https://www.manualweb.net/css/) para que las tres columnas queden de la forma correcta.


Lo primero será centrarnos en el contenedor. El contenedor será sobre el que indiquemos que vamos a aplicar el modelo de cajas flexibles, esto lo hacemos utilizando la propiedad [`display`](https://www.w3api.com/CSS/display/), a la cual asignamos el valor de `flex`. 


Además trabajaremos tres propiedades más, para darle forma al contenedor. La primera será [`flex-direction`](https://www.w3api.com/CSS/flex-direction/), la cual nos permitirá indicar cómo se organizan los elementos dentro del contenedor. El valor que asignamos el `row`, que nos indica que los elemento se distribuyen como una columna de izquierda a derecha.


La segunda será la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/). En este caso la propiedad [`flex-wrap`](https://www.w3api.com/CSS/flex-wrap/) nos permite indicar si queremos que los elementos salten o no de línea. En nuestro caso no nos interesa que salte de línea ante una redimensión de la pantalla. Por lo que le asignamos el valor de `nowrap`.


Y la tercera será [`justify-content`](https://www.w3api.com/CSS/justify-content/) que va a permitir realizar la colocación de los elementos dentro del contenedor. En este caso le asignamos un valor de space-between que hará que los elementos se distribuyan equitativamente a lo largo del contenedor, de un lado a otro.


```css
.contenedor {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
```


Lo siguiente será centrarnos en los elementos, que serán las columnas de nuestra página. En este caso lo único que haremos será asignarles un 30% del espacio de la página, para que entre los tres elementos se repartan el 90% del contenido. Esto lo conseguimos mediante la propiedad [`width`](https://www.w3api.com/CSS/width/).


```css
.columna {
    width: 30%;
    background-color: #a5d8ff;  
	  padding: 20px;                        
}
```


Por elementos meramente estéticos lo que haremos será añadir un fondo de color azulado mediante la propiedad [`background-color`](https://www.w3api.com/CSS/background-color/) y un poco de espacio dentro del elemento mediante la propiedad [`padding`](https://www.w3api.com/CSS/padding/).


Si cargamos la página en nuestro [navegador web](https://www.ayudaenlaweb.com/navegadores/) veremos el siguiente efecto con las tres columnas:


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWVW2O3Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjD8jyEipjHYCGxR75eyLgwaOSXQG4gsxLeJSo1Ly%2FlwIgETTJGLAW%2FG2tRpWawI5jjnvCQ6Dvv0OHQ9pGe9gy%2BNwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF04EIDpfZlceg%2BURircAxl3rqbCBenItk4oyUmbGtbqnALOK6NlInduKJXWrU4cJdzrjwcjz2no8i%2Fq9SI9A4YG8dKnYBDIgRblOY2DuybfqBdS7bliUOurSbiemZsA2pzXEGIFI%2F5tZvy6nhEckzy07Cb7wEPsVhDjOOEHatc2yUgQpxyjwrHGssvHJk64YPzwyRr5dISNYarKfqMdLodO96TmIARfZzkRTDggauiVwqMgu3iVZ%2BYRGXL5IvB%2FgFqFNIozpVW5qexCnlOC8CBPASaeQKP9tr3J9w5lHsG7ZuFpyf7AIBlh%2FStpbUF0U8ZWyStFNjDEhAVBSrtTEID53kJ5z8dY8V9MZhMgHF3Ib2FxxcwTRSzHS8UuqbrqTbB8p%2Fev1QLejadwl8x%2FKXHKNl175ifz9kOhFP56tMomRKf5YKm1Wk%2BbCD49hqJxpbtXD5cQmym%2Fm%2FL0JHAumTUhLwJN1JbT1pNEKP%2FgGpBuoqjD2OQDUrjiNU1PwoqW9q87Y7qPQV6SMmKVJC27Nfe%2B7XxMlbG8vU0AGdOv%2FvtmSVoraBkF%2F4QMVaXz4UNBIcxwYK1qi%2BVfqMseZZMjd9WO9xzfNggjwG84N1XYr2fB1ES%2B6HFcRHLuSJ9lb5k3xAL7w%2FgSmNH9Rf7PMLvt2ckGOqUBFntZY%2FJDCngaIlt7Q1k1DieV7JF%2BL8I3d1Q%2FdpaSxpLWGnTAl0CEvWPaeeHF67vXqsbomfMD9Xjd5djAQFl5XLgxUb1v1sU%2F8QyHJDzoI8pqgty8QF5lu5BRmiYIbyQxU3eCPkOq3eypn4UN%2Fy9QQEGG75NBmn6C6CsQtSj0TXCQXZn0jAiuKKKKeufujB2Ld%2BOQXLfdJ8D3XqgG%2F2dOUlp7ZbjW&X-Amz-Signature=3ace0e2b1bdb010cfa52c5df2e53368b045ef4d33b448c5d540e9aff7cc69f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

