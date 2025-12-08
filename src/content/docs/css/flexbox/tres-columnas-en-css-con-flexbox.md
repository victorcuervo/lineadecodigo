---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHJAD7H5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2alSoIR28Vqengb1%2B6kFcKLdIO5A5bg0DZY%2F%2BcdHiEwIhAKN%2BanuTeUtc4hBSNfpc8wcFLqvs%2FFlOxkKmcjstesvhKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRtewE1wG3%2BFWEuvgq3AOACVBXQI2S8R7wfCxZr4sQOQA5z2Cb%2BoPN62Yp5bgs3EakgEgKWiFF1m5qNdr2M0F44p6bngBGaTxhEf1dPqtW2PeJ7DyCXSCSqsDwImmoXk5j%2BD7gKt68PV68lEGK9Hjvi7AJeT%2BK6jbf92FQHrO6eU7IVZqAz%2BaTdhEFTmJWmTZXKxH683tWsSImM8q37IwKr2XmYLepmRQ05bkG1YxVRH0DqK3nLF%2Bpw5Y9Rx1ICe2LLVIpT6%2Bn%2BwHcaPpgbS8ZNye%2BPojW%2FmsMNTz1Ae0FttLxesmkn78A8lasBNeAMwZxDD4e2eJHS%2Fa0RzWDvDMEFs37h535JKNn66xMOhdoAw2MhGdTf5e0Rx822m02HvkvJf6NvTlSuuO0RtWRRX20rDQgjBmlfWeD3DHJz0UE%2Fe9WqFSq5J01IK65%2FwUdqzFXsAdBH8XGtdBa7OLqmbtcxqt7zEVYSyHrzU6S27chTsJfbwo4loGi9Yh8M%2BIIKZI3XZi7Tyc7HP9Jx3OVgHZl4FS2mSuJWKkFVFUQ%2Fy7AzSMooH1zJLLMfIwpJLp7FhfEKu3bC7ME0BGrEysXmdtQerWpezfQWBbrzVLfknRRRyvALDpGhWmAaV%2FbMnI471ISdaprz%2BC3LQPDdzCelNnJBjqkAXmPFeu7Gg6VAWxNwwifbu3mkyj7tevsBzwsBvyFytVv8UpUd7Dy2JeB%2FF1ezoxZaU1FX4coh3whvsaw8qkt6BlFjXMGt3%2FdQdk2KaKvejc4F0Ak8orvoHAxegTv706iJJR%2FrJ0FAHQFXWAk3nq2sx%2Bc%2FhbL98Sw3HS1jDyDGQt5sn3IpKbvwMuvnFqVOTLeQ4ndoTzlwk3MX4ROI07J%2BWdOCyRb&X-Amz-Signature=ec71102f2d503c3cb6080f349c1638cf0972fe6f66dc1f54612200bab2a7e519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHJAD7H5%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T042624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2alSoIR28Vqengb1%2B6kFcKLdIO5A5bg0DZY%2F%2BcdHiEwIhAKN%2BanuTeUtc4hBSNfpc8wcFLqvs%2FFlOxkKmcjstesvhKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRtewE1wG3%2BFWEuvgq3AOACVBXQI2S8R7wfCxZr4sQOQA5z2Cb%2BoPN62Yp5bgs3EakgEgKWiFF1m5qNdr2M0F44p6bngBGaTxhEf1dPqtW2PeJ7DyCXSCSqsDwImmoXk5j%2BD7gKt68PV68lEGK9Hjvi7AJeT%2BK6jbf92FQHrO6eU7IVZqAz%2BaTdhEFTmJWmTZXKxH683tWsSImM8q37IwKr2XmYLepmRQ05bkG1YxVRH0DqK3nLF%2Bpw5Y9Rx1ICe2LLVIpT6%2Bn%2BwHcaPpgbS8ZNye%2BPojW%2FmsMNTz1Ae0FttLxesmkn78A8lasBNeAMwZxDD4e2eJHS%2Fa0RzWDvDMEFs37h535JKNn66xMOhdoAw2MhGdTf5e0Rx822m02HvkvJf6NvTlSuuO0RtWRRX20rDQgjBmlfWeD3DHJz0UE%2Fe9WqFSq5J01IK65%2FwUdqzFXsAdBH8XGtdBa7OLqmbtcxqt7zEVYSyHrzU6S27chTsJfbwo4loGi9Yh8M%2BIIKZI3XZi7Tyc7HP9Jx3OVgHZl4FS2mSuJWKkFVFUQ%2Fy7AzSMooH1zJLLMfIwpJLp7FhfEKu3bC7ME0BGrEysXmdtQerWpezfQWBbrzVLfknRRRyvALDpGhWmAaV%2FbMnI471ISdaprz%2BC3LQPDdzCelNnJBjqkAXmPFeu7Gg6VAWxNwwifbu3mkyj7tevsBzwsBvyFytVv8UpUd7Dy2JeB%2FF1ezoxZaU1FX4coh3whvsaw8qkt6BlFjXMGt3%2FdQdk2KaKvejc4F0Ak8orvoHAxegTv706iJJR%2FrJ0FAHQFXWAk3nq2sx%2Bc%2FhbL98Sw3HS1jDyDGQt5sn3IpKbvwMuvnFqVOTLeQ4ndoTzlwk3MX4ROI07J%2BWdOCyRb&X-Amz-Signature=daafd2dea4a2f942379fb89492648655e7478f507bf27f9d77758bb5971d6036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

