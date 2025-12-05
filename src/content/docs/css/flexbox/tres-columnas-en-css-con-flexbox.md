---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MMO5Z7Y%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD481eAUJuOstK3ZHmkGwW4scOipUn25H5EvkAYkfV2wIhAMyUSdIZlOH7B%2FdstdTAEWeUd9uJ6JP58RajIjS3d6bbKv8DCGAQABoMNjM3NDIzMTgzODA1Igxy30P8WnBDsy8Ao90q3AMsRcoUaqMUPCN58SRdCSEabKnmY6a6709j0akNEg%2FVAM1u4r6ci8TT%2BKMuaKsHK2GZqfoEFMK2fMwXTYB4%2F7KtmoNigHjDcW9EB0Wf0G9v87HncC%2F7Zeah%2F6aUR4fDvTwVkejdmADdvEDS1gk4Q2%2BjpQ3w8ZdAa69rV%2BlHLFKWxMb82DLwU52Tkg3276W%2FwM74PKGHQ57hITqu8fI6Ci%2FwYtZ7nK8d5b4t9rUtA%2BRvXVsbdYWkCqh3bAWPCF057XAaRoIyozMVhjEdO3UgZl5zPoFG6ELa%2Fs0NPGmGD%2FXun%2Be9CufTRdll4ANsLAbCSxZnojVPpEhEeyE5g1seAYRmqT8mBMyTLunn3QwBLYJxu9LfG0uF4kepPnB8ypbpiYq6Gk9MXjiIgYCym1Tvef%2BXTFPppNDPtQXyBFj3Ai6s6sRxeRWsbUXYfMFANuLdoDnKS%2BW0hWwCaT%2BlWJZJoleooxBtZkw9KDz%2Bo3i1MQdCYo28dxyDx8x2%2FaHJ8yojyvG0STJD18PnVGp5DLli%2BQhfuRy%2F%2B0zirp9ruH0OjkCnowIfP13v70utmOsH%2B98bRqGgHvotWQX2juEErA5fUjaFfk0bXKMQuphhmBYExSusVHMZq%2FryaguGF0Wv6TCg48vJBjqkASnGwN3jRhrFphNWxkejsk5WZV6MQnCFEYr0wcx5rzoRrX6olEfkfe8VKbrbAE%2F3thrIHy1gM%2ByNOTuo48CUzv3Vp8LO5eBYkWEIQWSgMUbfcUQln1trq8Zg78TZTC9xWMPOU%2F%2BtERNvBe3Rpsl8VwL8zZX6PyuTwqmJ20H%2FgbMyDfFc94u5QkDdtYx5zL7oWZ7w6jnLhHoxqly8xsUfBH6pmDkt&X-Amz-Signature=b35b2cb4f800367dba93727b7b35bf9701247858de3fedce5269abdd8c2630af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MMO5Z7Y%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD481eAUJuOstK3ZHmkGwW4scOipUn25H5EvkAYkfV2wIhAMyUSdIZlOH7B%2FdstdTAEWeUd9uJ6JP58RajIjS3d6bbKv8DCGAQABoMNjM3NDIzMTgzODA1Igxy30P8WnBDsy8Ao90q3AMsRcoUaqMUPCN58SRdCSEabKnmY6a6709j0akNEg%2FVAM1u4r6ci8TT%2BKMuaKsHK2GZqfoEFMK2fMwXTYB4%2F7KtmoNigHjDcW9EB0Wf0G9v87HncC%2F7Zeah%2F6aUR4fDvTwVkejdmADdvEDS1gk4Q2%2BjpQ3w8ZdAa69rV%2BlHLFKWxMb82DLwU52Tkg3276W%2FwM74PKGHQ57hITqu8fI6Ci%2FwYtZ7nK8d5b4t9rUtA%2BRvXVsbdYWkCqh3bAWPCF057XAaRoIyozMVhjEdO3UgZl5zPoFG6ELa%2Fs0NPGmGD%2FXun%2Be9CufTRdll4ANsLAbCSxZnojVPpEhEeyE5g1seAYRmqT8mBMyTLunn3QwBLYJxu9LfG0uF4kepPnB8ypbpiYq6Gk9MXjiIgYCym1Tvef%2BXTFPppNDPtQXyBFj3Ai6s6sRxeRWsbUXYfMFANuLdoDnKS%2BW0hWwCaT%2BlWJZJoleooxBtZkw9KDz%2Bo3i1MQdCYo28dxyDx8x2%2FaHJ8yojyvG0STJD18PnVGp5DLli%2BQhfuRy%2F%2B0zirp9ruH0OjkCnowIfP13v70utmOsH%2B98bRqGgHvotWQX2juEErA5fUjaFfk0bXKMQuphhmBYExSusVHMZq%2FryaguGF0Wv6TCg48vJBjqkASnGwN3jRhrFphNWxkejsk5WZV6MQnCFEYr0wcx5rzoRrX6olEfkfe8VKbrbAE%2F3thrIHy1gM%2ByNOTuo48CUzv3Vp8LO5eBYkWEIQWSgMUbfcUQln1trq8Zg78TZTC9xWMPOU%2F%2BtERNvBe3Rpsl8VwL8zZX6PyuTwqmJ20H%2FgbMyDfFc94u5QkDdtYx5zL7oWZ7w6jnLhHoxqly8xsUfBH6pmDkt&X-Amz-Signature=21d6023cbcaa9f1167fee020f41eb4e2071a65c07b54fee817739e98b714d750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

