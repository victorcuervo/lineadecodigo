---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB3ITFXL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAReq0cltHeJLZZ0qlvoaDrUNIuuMcr4%2FUUs6E%2BP0%2BVHAiEAsO7f57QhzgHVfLwdTcmybmexVSkMTyYwvfyBaZr9uIAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHM%2BTq2aREgTUuyUjSrcA0JrUKJQLUsh%2BmRbxqbrO2sjlHLHgxFPay0XRf%2F%2FndZ4NNroNQu%2F2b0TR8PabWOMLk%2BCG051jpTWSaZQcf8PlvvHAspr%2BdKwkL63mbsR6TIaloFTazZYStYfCHuFnMf45T01F1T1TTUrTVPXVOXpX1jaPIU%2BPwBHfD1tJ97wyW2zc29Z%2F269eqLQZLuLUxfEqOSojO5EWFdGLl8Qx43k8q8Zg7gVkX%2FbgdcHlulbZGw5R5JFlSt0tM0i0vGpew2bm2sN%2Fuh7z5z5hMxBGDpy1D6V1B2hfAn6wAncCXUyopQvYRkjJpvhoLR5ike51B7LRobr0DQxf8ffi0YPq5UAwtmb0BA5ss%2B%2Fg0FCBzIDVMCbofmtrbebs5epjWYyiwN3N%2FEkvcL9OikND8ez08WTMGs4T35ecs7wRpnlWkbq79EV74q5pGQx9TnrSjt93XtLzJcltnT5SSCFdo1C0IGT5KwbMFqIPInfSjn0JA5yEi8gTtsitz8Il%2FJlx%2BtVRxcPs0BioRHlq%2BA7dBnj%2BZEM25mcE2NiDQvF7MQav1WEOlT54NkhR70uJBCrTcpVCkPSrL2qd7sdMTptfhv7ID3Vjqx1IJwPmf9010d6%2B1SxvBfBDPk5bFT4zSdCmkLAMP%2Ft2ckGOqUBkvvJ2ScnfHMz2M12o1Y%2BjkVGXM9q%2FzVWxfqtqWlDR9iYcW64rQI6I2rzpnetxQl%2BeBhXnb41%2F9YXcEOGimRpZu%2BfcN%2BCRGW92%2FVhlKDFYtohBO7beRENAcyn1%2FGOaZ1v%2B2KFhyMwB1zGJp22gXoiCp7PeNiECsHoAM0QO0Jr9S6ShAyhEwE2MsTZKotwyM5JVnOZJ%2Fj8Mgc6TUYF9TBkclt7zsAj&X-Amz-Signature=e13bd55272056ab716bf4c7b161f212817353f2e9c52ac541a30761437e76f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB3ITFXL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAReq0cltHeJLZZ0qlvoaDrUNIuuMcr4%2FUUs6E%2BP0%2BVHAiEAsO7f57QhzgHVfLwdTcmybmexVSkMTyYwvfyBaZr9uIAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHM%2BTq2aREgTUuyUjSrcA0JrUKJQLUsh%2BmRbxqbrO2sjlHLHgxFPay0XRf%2F%2FndZ4NNroNQu%2F2b0TR8PabWOMLk%2BCG051jpTWSaZQcf8PlvvHAspr%2BdKwkL63mbsR6TIaloFTazZYStYfCHuFnMf45T01F1T1TTUrTVPXVOXpX1jaPIU%2BPwBHfD1tJ97wyW2zc29Z%2F269eqLQZLuLUxfEqOSojO5EWFdGLl8Qx43k8q8Zg7gVkX%2FbgdcHlulbZGw5R5JFlSt0tM0i0vGpew2bm2sN%2Fuh7z5z5hMxBGDpy1D6V1B2hfAn6wAncCXUyopQvYRkjJpvhoLR5ike51B7LRobr0DQxf8ffi0YPq5UAwtmb0BA5ss%2B%2Fg0FCBzIDVMCbofmtrbebs5epjWYyiwN3N%2FEkvcL9OikND8ez08WTMGs4T35ecs7wRpnlWkbq79EV74q5pGQx9TnrSjt93XtLzJcltnT5SSCFdo1C0IGT5KwbMFqIPInfSjn0JA5yEi8gTtsitz8Il%2FJlx%2BtVRxcPs0BioRHlq%2BA7dBnj%2BZEM25mcE2NiDQvF7MQav1WEOlT54NkhR70uJBCrTcpVCkPSrL2qd7sdMTptfhv7ID3Vjqx1IJwPmf9010d6%2B1SxvBfBDPk5bFT4zSdCmkLAMP%2Ft2ckGOqUBkvvJ2ScnfHMz2M12o1Y%2BjkVGXM9q%2FzVWxfqtqWlDR9iYcW64rQI6I2rzpnetxQl%2BeBhXnb41%2F9YXcEOGimRpZu%2BfcN%2BCRGW92%2FVhlKDFYtohBO7beRENAcyn1%2FGOaZ1v%2B2KFhyMwB1zGJp22gXoiCp7PeNiECsHoAM0QO0Jr9S6ShAyhEwE2MsTZKotwyM5JVnOZJ%2Fj8Mgc6TUYF9TBkclt7zsAj&X-Amz-Signature=2056bcdedc3e1f879a8a92b2dfe1703abe5fd6a9c9ddff30b6e4afdb591df124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

