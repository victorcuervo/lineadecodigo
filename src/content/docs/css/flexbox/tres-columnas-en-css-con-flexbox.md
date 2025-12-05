---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SOT5E5N%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHGbUV4U7jTlAqMUtXbuts3ORVOKrncvyi9bnwJP2DIAIgRTdvMJW0YeLTzZdXoE7RwMmWhUDP9e%2FxdSemtyC6LPkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHzq566WQ%2Fz%2FAnq87SrcA4nfZVQ2RGb5mjTojNG0n1FP501vXDZk%2Fi5ckHrzXD5uvHGyddSV9uEZe6msyfrOFFs3a5fSihIhmwSLETgZnkJ2IqtPXuxnaJMDoeG%2BoP3HBToDa2Q1zj8tPrAiXYQlTINkJeP4Ar3edflwqdGBq4zuU5ATIWR9INCAZyDh8pk5KGbvs8UNj%2F1AdEUyrjKN8XtuC3%2FdI3TP%2BFck7pt0aDZWgxexdb%2Fj2QE6g5o17IiAQW8t6P%2BkIS6HrhO9jHo0T00a80FSG9AINthXr3QtdCzIpRZ%2Bh7oAg0u1ebXFtjR6RukqSP2JS5fRZvG%2FAvJ5Ad%2B0x8WC7WbVL62rTJ5ZtVkCalCvUtLpdXGKlcND2ddtRHCVTtLL%2F3awgp6g%2FwuwUn1NXfCJxaTMmV%2BHE5y9VC3Qp52wFmGck7vG76LdGS3eNVDixpR8uYK2%2F%2BT7ylGEW5OznLoRtUwc0wDP9ohN7DHzijiwmdhdONOSYILpuO6EKH%2BOaVRsMsg9SfDvEPkmpbmB9eEd%2FbCDVhFN0gbWlF2gLlpctOOJ3LtlaTydyN6bct2vBUiN%2F69uovHdU%2BokFPkOxdwRF8vu2s%2ByKt8C3i%2FVVoPHCZzcN%2FTb9n8V%2BcjnjPQpFY2YyhKaCA3XMOGryckGOqUBej%2F58OUoMmc5jsjiVDOxD7%2B%2Fk%2FUA1PAhCoDToYv9c8CRLhXqC%2BSzxoIm0gSJkpQAgiMzWkf3rNetQggfSrm3KlKXI5LDWY5x%2B0HbdUU4EoyUx8J3wyCwFOCec5gNOUSbZ7f32jgi45VvWoBBjXiBOR90JWGZKt4A7r7s4rIXiJDyBjT4pSFU0%2FBYTlAqrXaY8VFL3Ml7BFuVUPEyHmSRpbjp8Cow&X-Amz-Signature=e293269edac6ff6f1781571c5e0a411302e74fdff9b23ee32c3f129c3e3ff7dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SOT5E5N%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T042719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHGbUV4U7jTlAqMUtXbuts3ORVOKrncvyi9bnwJP2DIAIgRTdvMJW0YeLTzZdXoE7RwMmWhUDP9e%2FxdSemtyC6LPkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDHzq566WQ%2Fz%2FAnq87SrcA4nfZVQ2RGb5mjTojNG0n1FP501vXDZk%2Fi5ckHrzXD5uvHGyddSV9uEZe6msyfrOFFs3a5fSihIhmwSLETgZnkJ2IqtPXuxnaJMDoeG%2BoP3HBToDa2Q1zj8tPrAiXYQlTINkJeP4Ar3edflwqdGBq4zuU5ATIWR9INCAZyDh8pk5KGbvs8UNj%2F1AdEUyrjKN8XtuC3%2FdI3TP%2BFck7pt0aDZWgxexdb%2Fj2QE6g5o17IiAQW8t6P%2BkIS6HrhO9jHo0T00a80FSG9AINthXr3QtdCzIpRZ%2Bh7oAg0u1ebXFtjR6RukqSP2JS5fRZvG%2FAvJ5Ad%2B0x8WC7WbVL62rTJ5ZtVkCalCvUtLpdXGKlcND2ddtRHCVTtLL%2F3awgp6g%2FwuwUn1NXfCJxaTMmV%2BHE5y9VC3Qp52wFmGck7vG76LdGS3eNVDixpR8uYK2%2F%2BT7ylGEW5OznLoRtUwc0wDP9ohN7DHzijiwmdhdONOSYILpuO6EKH%2BOaVRsMsg9SfDvEPkmpbmB9eEd%2FbCDVhFN0gbWlF2gLlpctOOJ3LtlaTydyN6bct2vBUiN%2F69uovHdU%2BokFPkOxdwRF8vu2s%2ByKt8C3i%2FVVoPHCZzcN%2FTb9n8V%2BcjnjPQpFY2YyhKaCA3XMOGryckGOqUBej%2F58OUoMmc5jsjiVDOxD7%2B%2Fk%2FUA1PAhCoDToYv9c8CRLhXqC%2BSzxoIm0gSJkpQAgiMzWkf3rNetQggfSrm3KlKXI5LDWY5x%2B0HbdUU4EoyUx8J3wyCwFOCec5gNOUSbZ7f32jgi45VvWoBBjXiBOR90JWGZKt4A7r7s4rIXiJDyBjT4pSFU0%2FBYTlAqrXaY8VFL3Ml7BFuVUPEyHmSRpbjp8Cow&X-Amz-Signature=5bae22e7dbb387ae838527e2c6fe2b02eb4046a6bbdae19bd9c9547cf09412e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

