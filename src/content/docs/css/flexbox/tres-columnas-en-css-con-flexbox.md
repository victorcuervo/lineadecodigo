---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2GQ65B5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnVY%2BGeDkS2iSOI58X5xx%2Fghr2tzUtQhvTLd8xGPheTQIgVhuRBzssdY9o9I9qosNA53NVMlGVl%2BpJeIUzcVFLMxgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfaEfurklqW6Go28SrcA8qxqqzTdNyMljpiHCg1k2lhqLSKqw5oWe6Z6IJcKqAz8Qh0C9GvrvCr48OeStkV4LjF80vXALxpbXfvXjVWVJyGixGhoHGxPIxlZmMxyEsipgUoSH2IV0fY5EpanuBlyCujoVcKjglOvlcUxP1pSu65FeL5o%2B1gwWKdp65lW0S7uQPebp2T0uPfpyyUy0sn1CFZ8pMq7laaqBdqTxzuSunTCH9zbDfrN2%2BrHSA7GD8XZBcNwbh4QmgUv42w%2BBkHZD%2By3FMJSQuuLn96A7jbInVOxAlwNts%2FfNhRTpBnNMxGaW6Om%2FE%2Bg5sOEI4QkMWDXOv%2FLOpYYpss4xP3zi0qEQotq%2F227qhp8EHlgJuPhhWNHGp%2FkqZvPBbLrOv3fBanw1dBrMCXiiIQAKR2T2h6OktiBxazbRwKjTRwgC8KhvLtEhwsMf5eJSEknL72pSXM1X4J7iUQmYtmCzriwfMx4sUcHxuXTS52KIYku0BdWaN4qUkvJuxkU2adpDGfwMmtGZV4ncN7mRlJyjfYYBgjq7J%2FzWuCxzgXNBGTHmL8fLXi0o6sWdU2Whemfy8A%2BPuqj75%2FVpUa5eMUgXLQb5Vy6zcGJsVKoSAVtuMQjhA7g5Dn0qEGNDnLT%2B09mcagMOyo18kGOqUB5isyxHdLgsMvaabi6eVaU6a%2FafjdCt6LPHsLMWfs2ssj7cRXNA1pEivhpWLCKkTwHMFFTnJMdt33Nc5IDF8QRqQoRtHN07DGbM9E3Wq%2BtwYlf%2BkdwbegTOQhI3VO95JtS%2FnToE1V%2FbAZi4UnskyB2hZqy4ww9UXEx3uGevUvwT618aZVGO%2F%2Bi%2BmAX3T9U8DPlnxnpOoKyrhOHAMOPA5t%2F9Xcuj%2FQ&X-Amz-Signature=2849f8b25b12a5adbf9a3c1f4da5a03827b12079a21bd35a56da9358dc6a5166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2GQ65B5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T202549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnVY%2BGeDkS2iSOI58X5xx%2Fghr2tzUtQhvTLd8xGPheTQIgVhuRBzssdY9o9I9qosNA53NVMlGVl%2BpJeIUzcVFLMxgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAfaEfurklqW6Go28SrcA8qxqqzTdNyMljpiHCg1k2lhqLSKqw5oWe6Z6IJcKqAz8Qh0C9GvrvCr48OeStkV4LjF80vXALxpbXfvXjVWVJyGixGhoHGxPIxlZmMxyEsipgUoSH2IV0fY5EpanuBlyCujoVcKjglOvlcUxP1pSu65FeL5o%2B1gwWKdp65lW0S7uQPebp2T0uPfpyyUy0sn1CFZ8pMq7laaqBdqTxzuSunTCH9zbDfrN2%2BrHSA7GD8XZBcNwbh4QmgUv42w%2BBkHZD%2By3FMJSQuuLn96A7jbInVOxAlwNts%2FfNhRTpBnNMxGaW6Om%2FE%2Bg5sOEI4QkMWDXOv%2FLOpYYpss4xP3zi0qEQotq%2F227qhp8EHlgJuPhhWNHGp%2FkqZvPBbLrOv3fBanw1dBrMCXiiIQAKR2T2h6OktiBxazbRwKjTRwgC8KhvLtEhwsMf5eJSEknL72pSXM1X4J7iUQmYtmCzriwfMx4sUcHxuXTS52KIYku0BdWaN4qUkvJuxkU2adpDGfwMmtGZV4ncN7mRlJyjfYYBgjq7J%2FzWuCxzgXNBGTHmL8fLXi0o6sWdU2Whemfy8A%2BPuqj75%2FVpUa5eMUgXLQb5Vy6zcGJsVKoSAVtuMQjhA7g5Dn0qEGNDnLT%2B09mcagMOyo18kGOqUB5isyxHdLgsMvaabi6eVaU6a%2FafjdCt6LPHsLMWfs2ssj7cRXNA1pEivhpWLCKkTwHMFFTnJMdt33Nc5IDF8QRqQoRtHN07DGbM9E3Wq%2BtwYlf%2BkdwbegTOQhI3VO95JtS%2FnToE1V%2FbAZi4UnskyB2hZqy4ww9UXEx3uGevUvwT618aZVGO%2F%2Bi%2BmAX3T9U8DPlnxnpOoKyrhOHAMOPA5t%2F9Xcuj%2FQ&X-Amz-Signature=cf815338ab7d55314bd515df064634cb51891f192c2940e7eb6d12efd4a41ead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

