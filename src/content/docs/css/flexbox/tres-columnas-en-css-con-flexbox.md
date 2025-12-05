---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQXRVCUA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAW6HpFKkUnUYZTd5YE7dDByrSM2ijLDPYP1cC8BM3lAIhALG96normHxO16ZFlfwLqnhk%2FUyrchCCeE110RxdgpNJKv8DCFUQABoMNjM3NDIzMTgzODA1IgwHDGgySzmlJdyMuI4q3AOdxTMdzg8IKfXHwQGdjMsGFQqTTX%2FY6T1FyrBYkosKnXVKYPtgzUIqX8ju37B%2B83bmILpA%2FJwvR1jkO%2F6zLAdSLBVHqQDpaFVEpRLzTBCpCQJLyOVp9CUh8VJEAw3JL%2Fq6%2BoKVCQza6%2Fza3nMKalFo2Aq5p4o1c2MBF%2F%2FdCSFVtufCICX7cX8jHosrK3AARNpT6Lb6BFvSkbZ640Fbl0mW4vgswSIvd5Z4Lgnn2b%2FTFwg3bheIaPfeYbYC2l0iz6e5%2FSWSxKu%2Be3hFHccrMJNsSo3irsEB%2B7S54qMbqqiSUn1h8JlKNO%2B2l%2B00fn3iCyK7y9Dk3mXoAh752hGeuJl0o8zXTJX3nHV6a5lMauUGYIeaQvg6yZlziuV4tolXJ1vLWop0HaRBFMhJjdOfJmXl87239LhLFnuPvGX79rCr4kl6TL32GN8iJXsl%2Bv6bHBUCnq6dEaXooIfxnGi0Nty0AFCrtRAbPSt0jwPgYZmBEi6TEpmUgYtVPflgsiBMz2836oOrgFKpWrRYBigPNjEL7S5GSjusn1adtUa8qV9tNoeLLXdudoLpv397puAbqCJfDpVSZ84hNwOz0RX8Xy%2FTAIt%2BceOZs69DldVskKAdK1rB0OlIVDy%2BEKa%2BFjCLrsnJBjqkAQdtJ7DBL7KAzLM6yxyv8rjz5o2yZZkvJZvidbEdtI73rtV6t%2Ba7pFwoIt1j2%2Fve%2BGNKymuRnhS7IEDqrvMNncep5RKWHi4gLLeWsZsG8Kyhkv5jzgAoD2bzFSzKs3sEMGb2IPd3plU9EtOcAAXbfG4%2BF2U8IjufNKZCV3hsSkm56jDQfq5AGSDq7Jn2MeQdbc2pFzEIr1K%2FU9wNqg4GZ4kyxzpi&X-Amz-Signature=605e6a96ba4db96e93d06509508b142583cb4da6dca4c7d94d806b751999a16f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQXRVCUA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAW6HpFKkUnUYZTd5YE7dDByrSM2ijLDPYP1cC8BM3lAIhALG96normHxO16ZFlfwLqnhk%2FUyrchCCeE110RxdgpNJKv8DCFUQABoMNjM3NDIzMTgzODA1IgwHDGgySzmlJdyMuI4q3AOdxTMdzg8IKfXHwQGdjMsGFQqTTX%2FY6T1FyrBYkosKnXVKYPtgzUIqX8ju37B%2B83bmILpA%2FJwvR1jkO%2F6zLAdSLBVHqQDpaFVEpRLzTBCpCQJLyOVp9CUh8VJEAw3JL%2Fq6%2BoKVCQza6%2Fza3nMKalFo2Aq5p4o1c2MBF%2F%2FdCSFVtufCICX7cX8jHosrK3AARNpT6Lb6BFvSkbZ640Fbl0mW4vgswSIvd5Z4Lgnn2b%2FTFwg3bheIaPfeYbYC2l0iz6e5%2FSWSxKu%2Be3hFHccrMJNsSo3irsEB%2B7S54qMbqqiSUn1h8JlKNO%2B2l%2B00fn3iCyK7y9Dk3mXoAh752hGeuJl0o8zXTJX3nHV6a5lMauUGYIeaQvg6yZlziuV4tolXJ1vLWop0HaRBFMhJjdOfJmXl87239LhLFnuPvGX79rCr4kl6TL32GN8iJXsl%2Bv6bHBUCnq6dEaXooIfxnGi0Nty0AFCrtRAbPSt0jwPgYZmBEi6TEpmUgYtVPflgsiBMz2836oOrgFKpWrRYBigPNjEL7S5GSjusn1adtUa8qV9tNoeLLXdudoLpv397puAbqCJfDpVSZ84hNwOz0RX8Xy%2FTAIt%2BceOZs69DldVskKAdK1rB0OlIVDy%2BEKa%2BFjCLrsnJBjqkAQdtJ7DBL7KAzLM6yxyv8rjz5o2yZZkvJZvidbEdtI73rtV6t%2Ba7pFwoIt1j2%2Fve%2BGNKymuRnhS7IEDqrvMNncep5RKWHi4gLLeWsZsG8Kyhkv5jzgAoD2bzFSzKs3sEMGb2IPd3plU9EtOcAAXbfG4%2BF2U8IjufNKZCV3hsSkm56jDQfq5AGSDq7Jn2MeQdbc2pFzEIr1K%2FU9wNqg4GZ4kyxzpi&X-Amz-Signature=245fe81264286fc1e951a899598724f3cc328779173d035acd8bb0e0aa957d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

