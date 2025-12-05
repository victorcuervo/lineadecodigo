---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLM2KIQM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMllGZx%2FUbWnmSZiycC72O3uBVUCxTj18Fz0c06s6ooAIgbE5LAD4hvRPLBKlYnW14luqplEx1EbNTfD49QG7fgy4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDE62VXft7Gh%2F7x6p%2FSrcA80rh7Xsy7vyEy1VaVn15H%2F9cLRXn58PNV06WUdUyaiXvuMx9j9Q3BqxWKz0GMdJ2IkD1vVw3X8C68TWWvh4FvO3ll2ifjvtxs8gDImhNvRFQjbVGfjolpu%2FKUVdCr15%2BTgVipvQUYNep%2B6xum5AfF9slruJIlle3Sj67shnjeWrDlYC7vIR4df7kvqGuFRBW7Iti8MrHFqFqnZexLAhn5cB5gvOEqrkPJ05pe2bIaR0oFv4BvLjBuvAuZb3BUoT7vuoRap%2B%2BKTp679pJ38mct4yVN7L2xdvKaUUN1wgmmsBSBfjY3kTK1u%2FbJsD%2B%2BTNxiiyaRRlF%2Fe%2BPqJclFBWrYn1CITqy0AZ4v46EiCxkZzWa6v1UhEWY50G3frlRu7d%2BFwPABBPJAeW5rERGKT%2FxpTMPazIapoOvpqpbat6A%2BeA6Rmh1HCYY2IVVw6pMfIRTBmq91IHI4W2DW52FjBWvKMTzOSYcOUVb04%2Fet0BQdsw1pbW8f%2FJfuJuJ3bbpJ1%2FW%2BM5uEtb9NehGXGgomsCCMnmNFb088frN5HdE89roSCqUjD4c0mcpr210lL3uMeV6fLXz2vwWj7lZx3Q8RxWvAtSCRPFFXbZtP8ev7f19TUhEAhM46S6daDeP3q%2BMLWoyskGOqUB5VIopR9WEbkG5kIlQ4Io4tfuFbG3TO0tmHhCDu7dj5MNPjGW3a60tNPV%2BFIOC42NCM3Ac82i2SzhI8j2O0lJBgum6zJgbigCESRpfaEJ1n5BMJt28kau39F%2B32zOiAOI%2FK7UX9FcutUdaNn7pAiOwirg4AplNBd%2F%2FPXWvlPkYKARTeVpsNJgG5wc48t88P5n0c9csR5AneiWJokQBKoG3%2FZwXXZm&X-Amz-Signature=1d20427e9a7a431cc019143d40bd691991095d508c1891e6f0decc6145711fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLM2KIQM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T083842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMllGZx%2FUbWnmSZiycC72O3uBVUCxTj18Fz0c06s6ooAIgbE5LAD4hvRPLBKlYnW14luqplEx1EbNTfD49QG7fgy4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDE62VXft7Gh%2F7x6p%2FSrcA80rh7Xsy7vyEy1VaVn15H%2F9cLRXn58PNV06WUdUyaiXvuMx9j9Q3BqxWKz0GMdJ2IkD1vVw3X8C68TWWvh4FvO3ll2ifjvtxs8gDImhNvRFQjbVGfjolpu%2FKUVdCr15%2BTgVipvQUYNep%2B6xum5AfF9slruJIlle3Sj67shnjeWrDlYC7vIR4df7kvqGuFRBW7Iti8MrHFqFqnZexLAhn5cB5gvOEqrkPJ05pe2bIaR0oFv4BvLjBuvAuZb3BUoT7vuoRap%2B%2BKTp679pJ38mct4yVN7L2xdvKaUUN1wgmmsBSBfjY3kTK1u%2FbJsD%2B%2BTNxiiyaRRlF%2Fe%2BPqJclFBWrYn1CITqy0AZ4v46EiCxkZzWa6v1UhEWY50G3frlRu7d%2BFwPABBPJAeW5rERGKT%2FxpTMPazIapoOvpqpbat6A%2BeA6Rmh1HCYY2IVVw6pMfIRTBmq91IHI4W2DW52FjBWvKMTzOSYcOUVb04%2Fet0BQdsw1pbW8f%2FJfuJuJ3bbpJ1%2FW%2BM5uEtb9NehGXGgomsCCMnmNFb088frN5HdE89roSCqUjD4c0mcpr210lL3uMeV6fLXz2vwWj7lZx3Q8RxWvAtSCRPFFXbZtP8ev7f19TUhEAhM46S6daDeP3q%2BMLWoyskGOqUB5VIopR9WEbkG5kIlQ4Io4tfuFbG3TO0tmHhCDu7dj5MNPjGW3a60tNPV%2BFIOC42NCM3Ac82i2SzhI8j2O0lJBgum6zJgbigCESRpfaEJ1n5BMJt28kau39F%2B32zOiAOI%2FK7UX9FcutUdaNn7pAiOwirg4AplNBd%2F%2FPXWvlPkYKARTeVpsNJgG5wc48t88P5n0c9csR5AneiWJokQBKoG3%2FZwXXZm&X-Amz-Signature=ba05eaa62e50ded1657e412b11d22204931039ff4a371e29c0d9bc26f4862c15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

