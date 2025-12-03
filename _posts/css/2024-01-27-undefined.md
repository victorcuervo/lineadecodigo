---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPXGTNV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCs4xkdyZ2ojxkK1mXLx1wMVpoDW0%2FKWZv5AYEU5SE%2FkgIgNbESdcG06OpCQb5gllC9%2BtJE3kyGyDZIS0H2VX9TCVAq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDM268JDd9ze8FeFVHCrcA8QjB61sND95hpDZvosBARYno%2B4A02X5XtxCm%2FHSgQ%2F0mrDoMxjxbYiL%2BZbgrJHFZ9bEQLFsCU3Ym87ohNgtBuGcbRHO1nficzsTODPdiNr24hRc3tLnwbGU4WkxZacMBd0COp0zwWT7fPbBz3pgzCGDN5dWkjVWMnfCCfRfK5Cd5z5CNNLvy9GqS2QxOcNsieipI13SZN5OIRAU6wyJ0aPLw8SG8qj%2FDxO7G2mUeMdF7LoYtxCtlOEy75OANn0feZAtwO9WAoNXXeaCY57JHv8Rlczt%2B8azMCBas5tAFFY7xTXBDrR9aFKoskKak8Rd6I8bghUC38JePT1KfYf3ZQ%2BPW8ytT9hQNLOK9LOV78dDKB90B6NpCnuDRV3uslCXQbFHzpffFz4sfyInuQaPHcFVnv43Mw5I3DR03a%2FR4JqgRKnP3S7KDZhebs5y42pWubaWlDXNpA1t6PfMOwJKT6TP1XU7hgsbPe1e%2F%2FCv31ZvRy%2BS5bOA6dxAx84a3AkoGaVx6e0nF9H%2F68r1514jUEfd%2BkTSRUswWoOyD8hpORzojVmGOxj5yfTZZ6paKXrEIwIXJ71uC%2BnrR1PRLHa5iXzp3KkWW2jHwAhTXWWg1tbV693kMZwDSncIlklLMI2HwckGOqUBQaQM6IH3ieLjCLtp3w7uUjE9cehP5K0525pnJZlwV%2FzCg7edx3C14tT3HFRzeTVeb0whlO2jtC2TYLUrKVW18dOCZzDPEt2%2BfVmhTEQQtYBVIuV1tFYozd48HYKmuE58UFyYGfrqiW3JD8qSbpkuzoYspIlJL04%2BYBo0LeEw5EjEVdOxciFDprBfjeZCQOcgDTeif5HVPZ3xiAVSwCcIuwyVGY23&X-Amz-Signature=fbc1218f4992445f540391789368d45325ef7890934d663840f44baf26c95dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DPXGTNV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCs4xkdyZ2ojxkK1mXLx1wMVpoDW0%2FKWZv5AYEU5SE%2FkgIgNbESdcG06OpCQb5gllC9%2BtJE3kyGyDZIS0H2VX9TCVAq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDM268JDd9ze8FeFVHCrcA8QjB61sND95hpDZvosBARYno%2B4A02X5XtxCm%2FHSgQ%2F0mrDoMxjxbYiL%2BZbgrJHFZ9bEQLFsCU3Ym87ohNgtBuGcbRHO1nficzsTODPdiNr24hRc3tLnwbGU4WkxZacMBd0COp0zwWT7fPbBz3pgzCGDN5dWkjVWMnfCCfRfK5Cd5z5CNNLvy9GqS2QxOcNsieipI13SZN5OIRAU6wyJ0aPLw8SG8qj%2FDxO7G2mUeMdF7LoYtxCtlOEy75OANn0feZAtwO9WAoNXXeaCY57JHv8Rlczt%2B8azMCBas5tAFFY7xTXBDrR9aFKoskKak8Rd6I8bghUC38JePT1KfYf3ZQ%2BPW8ytT9hQNLOK9LOV78dDKB90B6NpCnuDRV3uslCXQbFHzpffFz4sfyInuQaPHcFVnv43Mw5I3DR03a%2FR4JqgRKnP3S7KDZhebs5y42pWubaWlDXNpA1t6PfMOwJKT6TP1XU7hgsbPe1e%2F%2FCv31ZvRy%2BS5bOA6dxAx84a3AkoGaVx6e0nF9H%2F68r1514jUEfd%2BkTSRUswWoOyD8hpORzojVmGOxj5yfTZZ6paKXrEIwIXJ71uC%2BnrR1PRLHa5iXzp3KkWW2jHwAhTXWWg1tbV693kMZwDSncIlklLMI2HwckGOqUBQaQM6IH3ieLjCLtp3w7uUjE9cehP5K0525pnJZlwV%2FzCg7edx3C14tT3HFRzeTVeb0whlO2jtC2TYLUrKVW18dOCZzDPEt2%2BfVmhTEQQtYBVIuV1tFYozd48HYKmuE58UFyYGfrqiW3JD8qSbpkuzoYspIlJL04%2BYBo0LeEw5EjEVdOxciFDprBfjeZCQOcgDTeif5HVPZ3xiAVSwCcIuwyVGY23&X-Amz-Signature=e3e6eba158eddf3d7c39b0c1ca559511f5f5659b90e487bcf4c38bf62a211690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

