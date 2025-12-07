---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466242DB6SO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNO3PZqgMW21z7sdW37x1gDt7i9nRBogI5LG%2FHi%2B8hqAiBqVm%2Boc3Xy3e2Y6fxYJnRrICo%2BElWSZFOInttK70zFJyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhPoZg60FLctvi2UKtwD1h2l08tDFBur2NvubZ8gpJVkF2nkvwXeY0c5sSm5i0O6QIi45hFiuFM%2F%2FNgqDWWrF0fDcMS%2F%2BRzieFAKroiqFX6ScGiql4KG7rK51r84bTYEHt894Hx1VPAfe2UGArqNgH2%2FfrKlxDhiI2SR2kFeNwmo%2ByXx9gJLnjzrWxOTHE%2Bp6Hpc58XAWwc0mQwpcAWkye%2BbY1%2BogFJ4cGM0MCukQa%2BsWeuPoytAVi6ZYcoNsPKs%2BHMhzHyzYRdQFv65t4lHwee4STNrkoZDcP1TD%2BisqqIAD4B0lrJYNsfDBcMBq2ztVJPmzXsBYpiNA5sYyltu3xgRnVSmOT30bT%2B1J5%2FZqxS46OXbUhj%2BDqnFQX%2F%2BkhRpNhowsxKcnW7YQG%2BhuntQ5YMze8VcHmxSztNrMNNda2dAGyBI%2FAtB6RkSiJ55HIe03NNp7c%2FTMX7vvu9uS%2BAgvdKxbbGjaRnNKxDqKlV7RxQ5GAEXpKPl4gIhSny8yFTWmpRYiK%2Ff8DzBglpYkWeOvqx4q0h3oFo6bwo%2Bul%2FXfD1emm2RC4sZ%2Fu4GZF8ncYhisSZNHNj%2FPU8lQ56lI3iVOeikzPGwJWlUrcFicJISux9aG8AKLdkNriz4uSMuRKj4CWq29UmLf9nhqp8w75rVyQY6pgHyeVMELAsh%2BZD%2FuQDwjgWkVvS4g869anhIIY03O1L5zKoiPYFviFR2DqrHRsbVmBFlNb7C5v604GgpDphhycmHhHQsT0L2MDLJxyMYNQby11V8TjguoHmhXleLeDYdOdxTT4GtlGuHpi7nIk0x4mDbxYpDkEUopl9pS%2BNEUibi9Fcefwk%2FMVr%2FKiFEPvFg4kNOlgpaJF13LcG92zAq4mHIe5UHs6SU&X-Amz-Signature=e8a4c953bd27d3db9d7cc8f168c04f836256a7cf481b05b82e4740b9bc65b815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466242DB6SO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNO3PZqgMW21z7sdW37x1gDt7i9nRBogI5LG%2FHi%2B8hqAiBqVm%2Boc3Xy3e2Y6fxYJnRrICo%2BElWSZFOInttK70zFJyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAhPoZg60FLctvi2UKtwD1h2l08tDFBur2NvubZ8gpJVkF2nkvwXeY0c5sSm5i0O6QIi45hFiuFM%2F%2FNgqDWWrF0fDcMS%2F%2BRzieFAKroiqFX6ScGiql4KG7rK51r84bTYEHt894Hx1VPAfe2UGArqNgH2%2FfrKlxDhiI2SR2kFeNwmo%2ByXx9gJLnjzrWxOTHE%2Bp6Hpc58XAWwc0mQwpcAWkye%2BbY1%2BogFJ4cGM0MCukQa%2BsWeuPoytAVi6ZYcoNsPKs%2BHMhzHyzYRdQFv65t4lHwee4STNrkoZDcP1TD%2BisqqIAD4B0lrJYNsfDBcMBq2ztVJPmzXsBYpiNA5sYyltu3xgRnVSmOT30bT%2B1J5%2FZqxS46OXbUhj%2BDqnFQX%2F%2BkhRpNhowsxKcnW7YQG%2BhuntQ5YMze8VcHmxSztNrMNNda2dAGyBI%2FAtB6RkSiJ55HIe03NNp7c%2FTMX7vvu9uS%2BAgvdKxbbGjaRnNKxDqKlV7RxQ5GAEXpKPl4gIhSny8yFTWmpRYiK%2Ff8DzBglpYkWeOvqx4q0h3oFo6bwo%2Bul%2FXfD1emm2RC4sZ%2Fu4GZF8ncYhisSZNHNj%2FPU8lQ56lI3iVOeikzPGwJWlUrcFicJISux9aG8AKLdkNriz4uSMuRKj4CWq29UmLf9nhqp8w75rVyQY6pgHyeVMELAsh%2BZD%2FuQDwjgWkVvS4g869anhIIY03O1L5zKoiPYFviFR2DqrHRsbVmBFlNb7C5v604GgpDphhycmHhHQsT0L2MDLJxyMYNQby11V8TjguoHmhXleLeDYdOdxTT4GtlGuHpi7nIk0x4mDbxYpDkEUopl9pS%2BNEUibi9Fcefwk%2FMVr%2FKiFEPvFg4kNOlgpaJF13LcG92zAq4mHIe5UHs6SU&X-Amz-Signature=ded7c9109abf1fe3da938fc3b21760e1d5e09c20f39abf290414d108a698307a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

