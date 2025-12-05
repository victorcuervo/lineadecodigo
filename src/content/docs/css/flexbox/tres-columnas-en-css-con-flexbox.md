---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623UBRQKR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T190811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeEOmZVifxRDyYIh2sd7qPSIcHD2DdQ0gntyqLDHJHjwIgEv3WPVY1dX5zh03HbYqD%2Baa6lTYkS8XBJVpHKl2e%2Bnwq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOyLM50cXjtKWO36aCrcA0JM14S0qdnF3gV0uItJl7f1eEdlvlAC5iL%2FdiMjui5TfK38OLFxfdhf%2FP%2Bu6kYPreoxmb040oMo1mSB%2F7S8Ci8%2B7WT0qde6nOkTgWSA6%2FHumPixqrMDJPUYXW%2BfgAgEJNQabdVIofIIymlYbjbZ%2BRp9HGxW58M%2BwQnDsIdntKLhexF2Ho8fmnWTCqBhtyLMXNN98bMz2Chf3dn%2B6JBtubnjJ2%2FVFpIcmWRA72u%2BkInvaBzy2S%2BKPseQZqvb4Pif3ISZzm9566nEJHZm5nQuPx6qivSGaAVnrQZSpdY%2FwdxALzyZX3Mq%2BYDNg4MNG0Sx9s7OzKF276pfNicTy5FSDQcdwHYtuC2B3dcixCjWpkggdvIzYRvgQ3H%2FZUD%2FLhnWE1sMJ%2FrKuyGyDsoHmSjLwY0K5%2FqwVb87mM6bBEGri7M1Jp5yrPyDujiZ5EUlp9ANqNjWCa9r5r6QdMsSwZ7QcVh80LkJQ5j0JrK%2FbzQn28WsykxT8L6Mh6AUxxADw6sPzPy5HdlbIAwhchkBOvYcrW6Th6jEPVgOXyOQNhGb4TwQOlH9qDOFS76vy9b8q%2BceB8MD%2BEN8PluK8P%2FL8xfB1rzXMc8LrxXdmeSvL324aBmPDtiX%2BIFNLhP8SqnnML3vy8kGOqUBHbXBpXq8318P1y9bAf6wka7Qz0vpnh0sh4MTj86T08Bx16MmxpNVb4GF2%2F9ClK25t5NIZpoozG2QZePBYFTHTbFsc0OBzb%2BT8AggaYoDEc6sf72rg4y6LEWJQWlCHktrnpXDrDF1a85b1Iylv5y%2Bc8omaMh442DaMazYbWcuNFa%2B5IhOlSB8XGOy0jwDA0ShLpFguUMbQCYpmVc09hJbOhJ6kD4i&X-Amz-Signature=6096239cd67e3b755d069a29646751fa14cf649188f709194acf4fac5859c68e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623UBRQKR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T190811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeEOmZVifxRDyYIh2sd7qPSIcHD2DdQ0gntyqLDHJHjwIgEv3WPVY1dX5zh03HbYqD%2Baa6lTYkS8XBJVpHKl2e%2Bnwq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDOyLM50cXjtKWO36aCrcA0JM14S0qdnF3gV0uItJl7f1eEdlvlAC5iL%2FdiMjui5TfK38OLFxfdhf%2FP%2Bu6kYPreoxmb040oMo1mSB%2F7S8Ci8%2B7WT0qde6nOkTgWSA6%2FHumPixqrMDJPUYXW%2BfgAgEJNQabdVIofIIymlYbjbZ%2BRp9HGxW58M%2BwQnDsIdntKLhexF2Ho8fmnWTCqBhtyLMXNN98bMz2Chf3dn%2B6JBtubnjJ2%2FVFpIcmWRA72u%2BkInvaBzy2S%2BKPseQZqvb4Pif3ISZzm9566nEJHZm5nQuPx6qivSGaAVnrQZSpdY%2FwdxALzyZX3Mq%2BYDNg4MNG0Sx9s7OzKF276pfNicTy5FSDQcdwHYtuC2B3dcixCjWpkggdvIzYRvgQ3H%2FZUD%2FLhnWE1sMJ%2FrKuyGyDsoHmSjLwY0K5%2FqwVb87mM6bBEGri7M1Jp5yrPyDujiZ5EUlp9ANqNjWCa9r5r6QdMsSwZ7QcVh80LkJQ5j0JrK%2FbzQn28WsykxT8L6Mh6AUxxADw6sPzPy5HdlbIAwhchkBOvYcrW6Th6jEPVgOXyOQNhGb4TwQOlH9qDOFS76vy9b8q%2BceB8MD%2BEN8PluK8P%2FL8xfB1rzXMc8LrxXdmeSvL324aBmPDtiX%2BIFNLhP8SqnnML3vy8kGOqUBHbXBpXq8318P1y9bAf6wka7Qz0vpnh0sh4MTj86T08Bx16MmxpNVb4GF2%2F9ClK25t5NIZpoozG2QZePBYFTHTbFsc0OBzb%2BT8AggaYoDEc6sf72rg4y6LEWJQWlCHktrnpXDrDF1a85b1Iylv5y%2Bc8omaMh442DaMazYbWcuNFa%2B5IhOlSB8XGOy0jwDA0ShLpFguUMbQCYpmVc09hJbOhJ6kD4i&X-Amz-Signature=a0d3f0365ee751d271185f59bb8ea19a8869ddab85d8e3e2ead14c7bf6565c11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

