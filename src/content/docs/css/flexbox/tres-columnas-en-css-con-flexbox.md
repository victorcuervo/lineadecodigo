---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULAWDFKH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFE92KCoQkVux4R6iMn92Iyq4Nzf4%2BB6UMQP3Id%2BOk9wIhAIb%2BntyVO9bCMdDD3RQjIztGlgyVExeUVyl%2BGkQjpgBkKv8DCGEQABoMNjM3NDIzMTgzODA1IgwvyTfcXn%2BhxiixSRYq3AN1Mb6pJyvuF%2BpBoGIPsH6%2FiBaJIkBVSbNLOclVog054enJlfluY%2BK9YVA4XxYaCjkco8zrFQZoxEEGsmMHG%2BGD73Ie1HJgMHBbVa57qw6mOcE0Hizf8TekK454kB1PGadPEuuD2C%2B7Pku9TCvvZ6bbsSOZB%2BfF9kpNf%2FdXPV56e%2FLreQKBjkiRPfRbofltCKHpDxKQyxFeFfqk5NO871e2B9dtsgSpjDLZkSqo%2FHBGBzeefCLGdgUBJtEGItJqfE2%2F5FrFYSug%2F1Kdu3ZsrMV4HZn%2BptOGd0EhDpgOtH05BG3w4vPCHPbLTgXHXfDy44BpRGbPZCwRN10A0yFQ%2FKD9WelSyer5s14tZSmu%2FiQ70nGEwRxBBPpzLove5ObR53llr1ze5we4AunSpp5TL196lKvS52Sv0Mb1gp5Hf%2BBo6nXY58N0ve12it7sXzWf%2FjPFdhDh%2Ft0glPlJv%2BBAFxi29ALlEp4FPaSkq3tZ58G5SUBhwRcMsy2KQ9X3yuAFDmkivEKwyJmX2LCiRks6Lkk8hLxyCiNCeOGK5TmsKSnIB%2BanXGCxTEcY9xQZySKz3IAzuqAFKt9vzNBaRz6klwy4asGDQumOvNBT1KlZH0wyzkpqFjpQA8FnU7CbSjDv%2FMvJBjqkAUwpPu8MikqsYQcdKiyde%2BKanbFTvWm82TipqzRRwFoYHkRG5IegGro3qV46hJIhQ4lhC22qpDsaPh%2F7g8KgnkrKnzu3%2FnPDEX4S7dIqEMdR54wZLAcdiRO%2FVlk3qOV9jm1%2FwjnnBu65mEqBor7jP46H2niDMuDRU%2FFVS8L274j%2BIQFQ2A%2FjWBXTUCUDqje%2B9rXHd5IIQPqV4%2BOQtp5TAX7gHQEs&X-Amz-Signature=9fe8c33308eca29e767d46a77ccb3e2878f9c7805444333841ff4e8ddeb3c8e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULAWDFKH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFE92KCoQkVux4R6iMn92Iyq4Nzf4%2BB6UMQP3Id%2BOk9wIhAIb%2BntyVO9bCMdDD3RQjIztGlgyVExeUVyl%2BGkQjpgBkKv8DCGEQABoMNjM3NDIzMTgzODA1IgwvyTfcXn%2BhxiixSRYq3AN1Mb6pJyvuF%2BpBoGIPsH6%2FiBaJIkBVSbNLOclVog054enJlfluY%2BK9YVA4XxYaCjkco8zrFQZoxEEGsmMHG%2BGD73Ie1HJgMHBbVa57qw6mOcE0Hizf8TekK454kB1PGadPEuuD2C%2B7Pku9TCvvZ6bbsSOZB%2BfF9kpNf%2FdXPV56e%2FLreQKBjkiRPfRbofltCKHpDxKQyxFeFfqk5NO871e2B9dtsgSpjDLZkSqo%2FHBGBzeefCLGdgUBJtEGItJqfE2%2F5FrFYSug%2F1Kdu3ZsrMV4HZn%2BptOGd0EhDpgOtH05BG3w4vPCHPbLTgXHXfDy44BpRGbPZCwRN10A0yFQ%2FKD9WelSyer5s14tZSmu%2FiQ70nGEwRxBBPpzLove5ObR53llr1ze5we4AunSpp5TL196lKvS52Sv0Mb1gp5Hf%2BBo6nXY58N0ve12it7sXzWf%2FjPFdhDh%2Ft0glPlJv%2BBAFxi29ALlEp4FPaSkq3tZ58G5SUBhwRcMsy2KQ9X3yuAFDmkivEKwyJmX2LCiRks6Lkk8hLxyCiNCeOGK5TmsKSnIB%2BanXGCxTEcY9xQZySKz3IAzuqAFKt9vzNBaRz6klwy4asGDQumOvNBT1KlZH0wyzkpqFjpQA8FnU7CbSjDv%2FMvJBjqkAUwpPu8MikqsYQcdKiyde%2BKanbFTvWm82TipqzRRwFoYHkRG5IegGro3qV46hJIhQ4lhC22qpDsaPh%2F7g8KgnkrKnzu3%2FnPDEX4S7dIqEMdR54wZLAcdiRO%2FVlk3qOV9jm1%2FwjnnBu65mEqBor7jP46H2niDMuDRU%2FFVS8L274j%2BIQFQ2A%2FjWBXTUCUDqje%2B9rXHd5IIQPqV4%2BOQtp5TAX7gHQEs&X-Amz-Signature=1661e0d17dba520a3113820938cb7cb3ed2163618fb9241fd930f9cc7a8142b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

