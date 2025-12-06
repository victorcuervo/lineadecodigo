---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7JCE25O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA%2BbAF%2Fv%2BNTt1r6jsTNEg%2BNyaUQSWybvc9oYYMyvm4qAIgb8138F8kILEcABDCmH9P%2BhcTwf6JXGgdifoLTMIcSwgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBd4F%2BRE6lyhrecpnyrcAwMY0bE8l5HVUJcRdMobW0i6ssJx4MYL1tB7d5YipRo%2F3eYvObpLnE4ECpXbpPpW8tzYIVUsVJ6YcfwB4LOGjx8buYf%2B9OF%2FYngBMzPqnD8sBbsBjOHXBzeN7BRTEPCN4N7l1pVRDG%2Fl2i99uD6v2AyAhGZ99xbsGTutxMHwS3ddO0va8QCjT5%2BEQRRdDnuxvL%2F7xH8bHUsivTFlXoUQ5o14iVVdwjgsDzbTT2st1pL1nFzDp77Jb4C6n1%2BWsaZqQTGxK02gFrp2VtQq%2FKSX1aKCIUa%2FNqKi6bl3HMCzPCnQplWcb2MRFsit7qLBB%2FQYwoI2ax%2FFNYvgYaayQqSK3ghYXDL3m2SuJYUoot9dY7qffQ7CJYYBLvEO1gYTVM7aDjAVMjVtIF4WJCQmsr9NG5gW9E1SlvvOIkk%2BVcskkwkrM4qYhBlgekkkWuC2MXIk6lkLKJ5094%2Bi%2BGpEfhOPj1EAMXDxCtqh8UfvdQgjun64bNXCyT8HwhukWHPvgMGWTza2BKqnNXV%2Bz6f0p1s33sraOkn2iibs7nKOT5qWt1gKiBWrcnE6V4REdjg2t96bsO49CG9MCQaRwiV2Ickep2ltA7eipdLOm%2F4DJLn%2FqiujcCC1Y%2FhwcNBt9jUPMIjezskGOqUBkpjvlXWWzD8%2FFA8tw5YooAVqG1trxNsSOMk7xP0KAux2g%2F9LPkDSdC2m8pgvIz3F1xbWMfx0Oe5PRYJZ4%2B7TMYPTsnrBUkXIFAnfKGAi4AX28b3aMH8Yp%2F2YCx9%2BXZ%2BbidjzbWnp4id2GvX4ijfE%2Fpgiv0ypKDt6QDOiVq15t04YFUZBPxLctKKac7vLL42pqjB%2F21yJoInnbilVTCom0BI%2B2tuR&X-Amz-Signature=06f903bc2a1e7086b0d1cef2a734b5c4a0458ba50720a0305192f24120d03f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7JCE25O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCA%2BbAF%2Fv%2BNTt1r6jsTNEg%2BNyaUQSWybvc9oYYMyvm4qAIgb8138F8kILEcABDCmH9P%2BhcTwf6JXGgdifoLTMIcSwgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDBd4F%2BRE6lyhrecpnyrcAwMY0bE8l5HVUJcRdMobW0i6ssJx4MYL1tB7d5YipRo%2F3eYvObpLnE4ECpXbpPpW8tzYIVUsVJ6YcfwB4LOGjx8buYf%2B9OF%2FYngBMzPqnD8sBbsBjOHXBzeN7BRTEPCN4N7l1pVRDG%2Fl2i99uD6v2AyAhGZ99xbsGTutxMHwS3ddO0va8QCjT5%2BEQRRdDnuxvL%2F7xH8bHUsivTFlXoUQ5o14iVVdwjgsDzbTT2st1pL1nFzDp77Jb4C6n1%2BWsaZqQTGxK02gFrp2VtQq%2FKSX1aKCIUa%2FNqKi6bl3HMCzPCnQplWcb2MRFsit7qLBB%2FQYwoI2ax%2FFNYvgYaayQqSK3ghYXDL3m2SuJYUoot9dY7qffQ7CJYYBLvEO1gYTVM7aDjAVMjVtIF4WJCQmsr9NG5gW9E1SlvvOIkk%2BVcskkwkrM4qYhBlgekkkWuC2MXIk6lkLKJ5094%2Bi%2BGpEfhOPj1EAMXDxCtqh8UfvdQgjun64bNXCyT8HwhukWHPvgMGWTza2BKqnNXV%2Bz6f0p1s33sraOkn2iibs7nKOT5qWt1gKiBWrcnE6V4REdjg2t96bsO49CG9MCQaRwiV2Ickep2ltA7eipdLOm%2F4DJLn%2FqiujcCC1Y%2FhwcNBt9jUPMIjezskGOqUBkpjvlXWWzD8%2FFA8tw5YooAVqG1trxNsSOMk7xP0KAux2g%2F9LPkDSdC2m8pgvIz3F1xbWMfx0Oe5PRYJZ4%2B7TMYPTsnrBUkXIFAnfKGAi4AX28b3aMH8Yp%2F2YCx9%2BXZ%2BbidjzbWnp4id2GvX4ijfE%2Fpgiv0ypKDt6QDOiVq15t04YFUZBPxLctKKac7vLL42pqjB%2F21yJoInnbilVTCom0BI%2B2tuR&X-Amz-Signature=c689d3816e71da0ea71315fdcef6b3fcb806d44c1de2ddb641268e526e6ebafb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

