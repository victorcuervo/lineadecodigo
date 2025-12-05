---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2WG7Z33%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9ysD7qo84KoJKdngIqMe5RppqdcuHWQa%2B8sRILgyt0AiEA7gwqx6t2Qo5UX0PFV0ZP4tAY%2BZaiRe6T3IlH1odQ3l4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPCo5ixj8%2FYaKQInMSrcA9y3E0NHvKjhea3AlHe9sQK3HJUNdU9l6fb0Bdqhpo4TJ32oCD6myYROibGE15ku6Nz%2FBDMyiUPVzGf1x5dCRFxx1%2FUNCA2NVNfBmHmL1DJjWGJhCUVrqSPTLgSxLX9%2Bx6gYOScMxwZVeHcI7LgvzxjSu2lhC1zh4PSJ0VOzmPkZsE5twfMzqTGogTk4ywTu8%2Bvmt8asNquUY2mUkaKNQHsEgtO9BrzISBQ3aHczGI6B6mkLMHZp%2Fxcna8ymjkUiKURsuR0EKH3bU004qyG4uESBV9eL9uwFMrPHkXX2skdXKxSZFs9AhDXxqwKFDuTv13ATpyMkWha%2Fskncr5IWUsrBWixdrvWN8aNWwFhxGoHUPEtaesOEzBiVh6QRt5jc9JAnueYDVe6c4XVAaa0nsFh%2Fa%2ByoSoyBW8pt01vMownSS%2BsQJoO8cFXQnvGdFIwM1YhX1OG7y8EbRfb%2FjfBDpFzRdCbINxVMPcZkUjaqOMsvnFhAiSN5Koy5Lj%2BgvhnMXS1DDKIsEKFMrcdccp63pDg1aUUOPOMef24yNTf15RRFJT0L7y%2BrxBlElaLQ5T5bxrKaED5sbWvgQpazPFzM2VPxDZJdayAiWk1tDIJWDeGSEMfQEbc8jp%2Fww8CoMKCMyMkGOqUBMzsPrI3gNWfljP4f9bgnnbLU30RqJkMw7juQ5DkNRKRkBQ%2BMk5w3OIuqi0SIuB%2BpOUWxSLL0bYqPthhtTWgzJI1OZJ9mCpSrpfE%2FkDulzN5AjTfP04TqKabjPBOlnCHSf79lt832pOx3pBrcwck4LwPOJggphD0abEPajyMjedp5tjpVP%2B5o2lEGJqMduW%2FlEPc%2FzoyktFk%2FvSf2VDUPU0EL5NDs&X-Amz-Signature=1fce08fe3861be24ef9fd800a8558994beba2b612a7e234c8c1f7f396ceaa19b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2WG7Z33%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC9ysD7qo84KoJKdngIqMe5RppqdcuHWQa%2B8sRILgyt0AiEA7gwqx6t2Qo5UX0PFV0ZP4tAY%2BZaiRe6T3IlH1odQ3l4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPCo5ixj8%2FYaKQInMSrcA9y3E0NHvKjhea3AlHe9sQK3HJUNdU9l6fb0Bdqhpo4TJ32oCD6myYROibGE15ku6Nz%2FBDMyiUPVzGf1x5dCRFxx1%2FUNCA2NVNfBmHmL1DJjWGJhCUVrqSPTLgSxLX9%2Bx6gYOScMxwZVeHcI7LgvzxjSu2lhC1zh4PSJ0VOzmPkZsE5twfMzqTGogTk4ywTu8%2Bvmt8asNquUY2mUkaKNQHsEgtO9BrzISBQ3aHczGI6B6mkLMHZp%2Fxcna8ymjkUiKURsuR0EKH3bU004qyG4uESBV9eL9uwFMrPHkXX2skdXKxSZFs9AhDXxqwKFDuTv13ATpyMkWha%2Fskncr5IWUsrBWixdrvWN8aNWwFhxGoHUPEtaesOEzBiVh6QRt5jc9JAnueYDVe6c4XVAaa0nsFh%2Fa%2ByoSoyBW8pt01vMownSS%2BsQJoO8cFXQnvGdFIwM1YhX1OG7y8EbRfb%2FjfBDpFzRdCbINxVMPcZkUjaqOMsvnFhAiSN5Koy5Lj%2BgvhnMXS1DDKIsEKFMrcdccp63pDg1aUUOPOMef24yNTf15RRFJT0L7y%2BrxBlElaLQ5T5bxrKaED5sbWvgQpazPFzM2VPxDZJdayAiWk1tDIJWDeGSEMfQEbc8jp%2Fww8CoMKCMyMkGOqUBMzsPrI3gNWfljP4f9bgnnbLU30RqJkMw7juQ5DkNRKRkBQ%2BMk5w3OIuqi0SIuB%2BpOUWxSLL0bYqPthhtTWgzJI1OZJ9mCpSrpfE%2FkDulzN5AjTfP04TqKabjPBOlnCHSf79lt832pOx3pBrcwck4LwPOJggphD0abEPajyMjedp5tjpVP%2B5o2lEGJqMduW%2FlEPc%2FzoyktFk%2FvSf2VDUPU0EL5NDs&X-Amz-Signature=661175c096995f48d013f293040973c85fb566f3fc74c9c58fd01de1142d2925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

