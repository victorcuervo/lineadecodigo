---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSHAG3RF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfsEEbPKsIPcSf28d%2B%2FDyPCSr760mDDtEnIvI8B8KjgAIgawtcCbATHj4EzR%2BJ2pPf5f%2B%2FO16HbPyXXItG8cTjbQ0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPthvnGB8sRlC4rHvSrcA%2BC2j1bhzD2kcaIanFKnhUzCrHdYfxb7UHP3vh%2B0j3iW1u%2Fp7MsKbMARmvAyNLV%2FYe3Lyxtbg0RMwa0VuZK%2FojlAbhWmiFSvlsyCoEDeucAyxVZ20XmzCJC%2BLN5XXkJzrEuiD6nMOhdAe76DSBqjm8qHluSCZN%2BI0ZPLGGqyw%2Fz3gsQrPWTL5IFT7wcgT2foUL%2F3zoiPxoger%2BR4SRJ5D7N4eqGzOItn34m1YAWCd0SzjeJSZ7xdz6TjzVyzT7jTuup9bVFwhtvJFGq0IwJiSY5az1lrL3Q59tG%2BhAgMZ5mZ42C1mN1S%2FhcEJPQE%2Fa75ufJ6zr%2FIEkoKLwu5W4jR88sh3ha2jaU20Cj9q0p30n63AZXK00pdpxY%2BdHwuFk%2FGiiHr%2FIKlVkCK4C5hUSivWAffQGDm3twfB1l%2FPmt0Dn5E8gSap4LllPXFBPHR66JvHocB9tzjZE3zH9N5FBx%2FTBf%2BNeYAfbOl20E1FVr%2BdlUYjLQKE9Apmj%2Fzo319iM6OL5%2FpYw%2FDKn4wPQZb9qtWvE%2B4SgAO8Go5rs11DohDi5cwFYGslEWAl1uESi28FP48v%2B3TpF%2B022k12I0HV5Dd5iqMqr%2FQGP3B9uQLbO6m6qTVK3msrggEzjGHYNCGMJvu2ckGOqUBSObmokSjIhFnBgUDwB6NI8wLRVR3APFQExPlXMEiGl9Bz9nUocuY3OLrudFS77w4z2CFdT%2F7TUxuYwB43TTq%2FB6kYPo8j2Mwer%2FTGuF2WT5yHJk9A5EqXx4EAytPUiOSMMONkIhztRfepJ%2B2ORmmE1aR30q6EQ%2Fx65GW2rvrVfnjXEepc6107kOrEJvQxkuhp8Dn7x%2FXONWaR2EYVDdaLxCkpx1J&X-Amz-Signature=d2fc4f6aef74ba61d58917d946a6de4f7abe904fc9d678f181483beffffe44af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSHAG3RF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfsEEbPKsIPcSf28d%2B%2FDyPCSr760mDDtEnIvI8B8KjgAIgawtcCbATHj4EzR%2BJ2pPf5f%2B%2FO16HbPyXXItG8cTjbQ0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPthvnGB8sRlC4rHvSrcA%2BC2j1bhzD2kcaIanFKnhUzCrHdYfxb7UHP3vh%2B0j3iW1u%2Fp7MsKbMARmvAyNLV%2FYe3Lyxtbg0RMwa0VuZK%2FojlAbhWmiFSvlsyCoEDeucAyxVZ20XmzCJC%2BLN5XXkJzrEuiD6nMOhdAe76DSBqjm8qHluSCZN%2BI0ZPLGGqyw%2Fz3gsQrPWTL5IFT7wcgT2foUL%2F3zoiPxoger%2BR4SRJ5D7N4eqGzOItn34m1YAWCd0SzjeJSZ7xdz6TjzVyzT7jTuup9bVFwhtvJFGq0IwJiSY5az1lrL3Q59tG%2BhAgMZ5mZ42C1mN1S%2FhcEJPQE%2Fa75ufJ6zr%2FIEkoKLwu5W4jR88sh3ha2jaU20Cj9q0p30n63AZXK00pdpxY%2BdHwuFk%2FGiiHr%2FIKlVkCK4C5hUSivWAffQGDm3twfB1l%2FPmt0Dn5E8gSap4LllPXFBPHR66JvHocB9tzjZE3zH9N5FBx%2FTBf%2BNeYAfbOl20E1FVr%2BdlUYjLQKE9Apmj%2Fzo319iM6OL5%2FpYw%2FDKn4wPQZb9qtWvE%2B4SgAO8Go5rs11DohDi5cwFYGslEWAl1uESi28FP48v%2B3TpF%2B022k12I0HV5Dd5iqMqr%2FQGP3B9uQLbO6m6qTVK3msrggEzjGHYNCGMJvu2ckGOqUBSObmokSjIhFnBgUDwB6NI8wLRVR3APFQExPlXMEiGl9Bz9nUocuY3OLrudFS77w4z2CFdT%2F7TUxuYwB43TTq%2FB6kYPo8j2Mwer%2FTGuF2WT5yHJk9A5EqXx4EAytPUiOSMMONkIhztRfepJ%2B2ORmmE1aR30q6EQ%2Fx65GW2rvrVfnjXEepc6107kOrEJvQxkuhp8Dn7x%2FXONWaR2EYVDdaLxCkpx1J&X-Amz-Signature=772866b20f2fea263bb5b7a76bf90c95505833742353a9633bb2a3fae9026203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

