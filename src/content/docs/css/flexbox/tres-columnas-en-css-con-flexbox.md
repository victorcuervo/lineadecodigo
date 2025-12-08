---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQTUHRXE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6UiswycxrtXH%2BcksKDsQEcnmo2dlKuv%2FJC9LUTxwOfAiB%2FlDwkUCjiYdoFy%2FMhIFKk4q%2FWioStDkdwmEBIO83yuSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4aWLIkyjK9QnCfm3KtwDpY6f8%2FfFfpGfS0%2Fvn9cI4ptM7yzBMRdj0zuA%2FICTLNuVSvrlIQ6s%2FqeZ0PrhCzZl4CsGIucFBdXCJvxrJ0ohEayHRVInRV3Ye%2Br53fDVMf2OLZKXtsNA1Bn05siX%2FFvamsBLBrYasttoCKnk%2BrbylI8VLolAhlGoV%2F7PVQ5oJk6Zv85O0EYJRhZVmaEDFXcBq99vjK1RlIL35nT5YB75FoWtLArDywZSW3o31iK0ggFcsgR41XL0%2Bc%2B48kRXUvZs6bgEP6qJ3nVzKWTgS3PPDK2yihMb4HTzgyv0gs%2F628loWRjP1kOH86UYWu02sj87lmBqYhfDs9S%2BFVLDFCFlcT7qN%2BaeuwIMjPM1nWRg6OeiMJVSkZLxGm5A%2BYQK%2F94VXJyiBaFqkRK1gcdfaQHNbJxnH0JMHinqvFNE8%2FPXZ1KEI%2BGiy%2FE1hXt5QoOgl5iwaXMX2WGmWvlOvpdL%2BlwUBs9V7cznz6J76Fq3pFucxWGHM0p1MwdnxrU1ovW3AGh1hPHgxKe6ctHR7GqPsvuqReRkYHbmylfdn30KgJG2JnMwO8xALWOSqBHyNyQ1FxMOacQKMCnYqJ1sya9C%2FU8VkD9c37dfeD2LqLGoSk65Sku58G%2F8DpENvNeb6GswmqHYyQY6pgE8xxi4Vh19A7vAa%2BfE6C5rBBPa28%2BUL1d%2FJwaDrRFSWlLb%2BfdBm9PF1C3h7tzN0qxDp9zS%2FEHJ%2BTJ1IvDgSJxR2AmluMg2mRBjuotTjxn1lJtBg9%2FZysSrtOddmEDlBMutPXiInfWhrRozL8un5dVzTQSdZhwVZELR%2FP%2BNTaJbboU6kyyCtb64HzXISMoJ527O7feDOziqQa7Gw0ED%2BCR%2FfLL%2F45Yg&X-Amz-Signature=428814d583e471fc4d3f240d3a0e0a5de018f1f985790cac4b4a189723f1680e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQTUHRXE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T012656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6UiswycxrtXH%2BcksKDsQEcnmo2dlKuv%2FJC9LUTxwOfAiB%2FlDwkUCjiYdoFy%2FMhIFKk4q%2FWioStDkdwmEBIO83yuSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4aWLIkyjK9QnCfm3KtwDpY6f8%2FfFfpGfS0%2Fvn9cI4ptM7yzBMRdj0zuA%2FICTLNuVSvrlIQ6s%2FqeZ0PrhCzZl4CsGIucFBdXCJvxrJ0ohEayHRVInRV3Ye%2Br53fDVMf2OLZKXtsNA1Bn05siX%2FFvamsBLBrYasttoCKnk%2BrbylI8VLolAhlGoV%2F7PVQ5oJk6Zv85O0EYJRhZVmaEDFXcBq99vjK1RlIL35nT5YB75FoWtLArDywZSW3o31iK0ggFcsgR41XL0%2Bc%2B48kRXUvZs6bgEP6qJ3nVzKWTgS3PPDK2yihMb4HTzgyv0gs%2F628loWRjP1kOH86UYWu02sj87lmBqYhfDs9S%2BFVLDFCFlcT7qN%2BaeuwIMjPM1nWRg6OeiMJVSkZLxGm5A%2BYQK%2F94VXJyiBaFqkRK1gcdfaQHNbJxnH0JMHinqvFNE8%2FPXZ1KEI%2BGiy%2FE1hXt5QoOgl5iwaXMX2WGmWvlOvpdL%2BlwUBs9V7cznz6J76Fq3pFucxWGHM0p1MwdnxrU1ovW3AGh1hPHgxKe6ctHR7GqPsvuqReRkYHbmylfdn30KgJG2JnMwO8xALWOSqBHyNyQ1FxMOacQKMCnYqJ1sya9C%2FU8VkD9c37dfeD2LqLGoSk65Sku58G%2F8DpENvNeb6GswmqHYyQY6pgE8xxi4Vh19A7vAa%2BfE6C5rBBPa28%2BUL1d%2FJwaDrRFSWlLb%2BfdBm9PF1C3h7tzN0qxDp9zS%2FEHJ%2BTJ1IvDgSJxR2AmluMg2mRBjuotTjxn1lJtBg9%2FZysSrtOddmEDlBMutPXiInfWhrRozL8un5dVzTQSdZhwVZELR%2FP%2BNTaJbboU6kyyCtb64HzXISMoJ527O7feDOziqQa7Gw0ED%2BCR%2FfLL%2F45Yg&X-Amz-Signature=3b09e151eefc948da0eb5af8b670cd9b8f9f842e3d5c8f9e22a203c1a79267b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

