---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5JUQNZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIG7FfoUnDrekzA0LHPiXL2uDlxJ9H8zLnDuFL93KA8H7AiAgJku1%2Ft4FSY%2FKcrR%2FcSeqmwBYuAuYUOZZLleLFDnePSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMOd8kI1VSny3FB0jtKtwDRD2m1BvDQDPa7bX%2BW2A2pZkl8vQkXeIsKJofzw9zwbLqecb5DsT%2Bihk3b%2BAa5XcdHmrrQsAD%2FYXRBM2g6xNWa3Br%2BYQZb60CcVhnRs1m0yrtqNc2RLMIyGwn1%2BsbUnLGaIWoX2p9CSqEd7niSGWML4elrajP3otgrRBab%2F3rcWzQ7INXSqk8%2FQwRJmCjxm5PW0XJfivDUFLSjnt8tnIEZ2FBUIgAsMV25bzT62Zc9Qc4V1yWvv4jZzdNyJ%2BbrgKz8LQIrvSmmhFNvPC0bAiYBEZarL4Od4Fs1BjIblwhg%2BJUTP6nb0Y3vgxL1s%2BhlJCOpbS%2BefT2ZaKBrsBk06dNmfurXKuSmULinI8Vh%2BpQJKC%2F1tEgY%2FkLXO6AZ1aTXt2sZLAHqYU0WbBN9up9WKWoJFbq0eeUOnT4%2FVoOipqrFEL0z1sP12NXl7sNw%2BF4kxelmEktUcn6d2V1CFSPEPiUKk3xVKtmRTtDXsxIBXxnfLDHNnWwLA%2BMFWdXunKVv7VEzB9XDCCOYZhdxq2kFgEWVxG1ceGvREA46q1I%2BphMDbiAPt5%2FXhsmGYWIa%2BdklBHKQ27aPUePslFhyRvovXejzXFarjZEhz6EMLKW8WGqcJCvq9hslbAitZZQWKAwjOfFyQY6pgHs3hoDX2QfvBA%2BQvOEUzAcv6qpETl7%2FSpVucUpiHmTJ8n7gW2vW4eTXKCFAHrpqjscFfE30wE2uekzcK053FVONYOuiIUdtJySHH6VsKaEhP1ze5MwNDIDcxqMFjdbLfQ%2Fv6S7DLr%2BbjcW8QKPwqOrxb1g6SBpT6giF2uhhRDI0t%2FzUNK2vlues6EnmtMWt%2FrOxknd6sziPF73Ff%2FMr%2BkSpD7WMKYD&X-Amz-Signature=7adad5b111337f12a2a71e430ead7198f224721633050724838e7fb50703f935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC5JUQNZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T115218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIG7FfoUnDrekzA0LHPiXL2uDlxJ9H8zLnDuFL93KA8H7AiAgJku1%2Ft4FSY%2FKcrR%2FcSeqmwBYuAuYUOZZLleLFDnePSr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMOd8kI1VSny3FB0jtKtwDRD2m1BvDQDPa7bX%2BW2A2pZkl8vQkXeIsKJofzw9zwbLqecb5DsT%2Bihk3b%2BAa5XcdHmrrQsAD%2FYXRBM2g6xNWa3Br%2BYQZb60CcVhnRs1m0yrtqNc2RLMIyGwn1%2BsbUnLGaIWoX2p9CSqEd7niSGWML4elrajP3otgrRBab%2F3rcWzQ7INXSqk8%2FQwRJmCjxm5PW0XJfivDUFLSjnt8tnIEZ2FBUIgAsMV25bzT62Zc9Qc4V1yWvv4jZzdNyJ%2BbrgKz8LQIrvSmmhFNvPC0bAiYBEZarL4Od4Fs1BjIblwhg%2BJUTP6nb0Y3vgxL1s%2BhlJCOpbS%2BefT2ZaKBrsBk06dNmfurXKuSmULinI8Vh%2BpQJKC%2F1tEgY%2FkLXO6AZ1aTXt2sZLAHqYU0WbBN9up9WKWoJFbq0eeUOnT4%2FVoOipqrFEL0z1sP12NXl7sNw%2BF4kxelmEktUcn6d2V1CFSPEPiUKk3xVKtmRTtDXsxIBXxnfLDHNnWwLA%2BMFWdXunKVv7VEzB9XDCCOYZhdxq2kFgEWVxG1ceGvREA46q1I%2BphMDbiAPt5%2FXhsmGYWIa%2BdklBHKQ27aPUePslFhyRvovXejzXFarjZEhz6EMLKW8WGqcJCvq9hslbAitZZQWKAwjOfFyQY6pgHs3hoDX2QfvBA%2BQvOEUzAcv6qpETl7%2FSpVucUpiHmTJ8n7gW2vW4eTXKCFAHrpqjscFfE30wE2uekzcK053FVONYOuiIUdtJySHH6VsKaEhP1ze5MwNDIDcxqMFjdbLfQ%2Fv6S7DLr%2BbjcW8QKPwqOrxb1g6SBpT6giF2uhhRDI0t%2FzUNK2vlues6EnmtMWt%2FrOxknd6sziPF73Ff%2FMr%2BkSpD7WMKYD&X-Amz-Signature=8e22a507ccfbeefe921f4aabfa078b592be86a3ddcc3bd162c8b57702695ea96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

