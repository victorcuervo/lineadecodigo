---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZQBFGIT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCd58x9nDKXn2MIUzIND0JVaMBjlK4uGvDlUFQJ15yzjAIgMGeTEoGFG7GKfJvtGUK6VkOUeqDKjjQMRpsn6oyp7igq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDAMW0jGo3dvYI1%2FixSrcA7P3qB3nQ%2FUcvbMnYASrTtuUGiVz6k3RROlq4%2Bhw7dlLxqU6xtfz2hsQeFbB5uDsGSlQTaBRNQw37d8Lhjtzg25ZBOPgUrIt5BycI2zw3bIDB2gDn5xTIDODQK0X%2F0xA7Mjh9dHghAnv4VcQHPUVzqQzvKUz2KcXLNm3mfP4g%2FM30Dg5hRG9eP1HI8OdYMG%2BaloV%2Bp969pimigqNYwf8Sj6U8loxea5Wo6GYqk5ePbqK7yvuwGtoqrQ%2FoFmBjP8SbVIsfOl8MF5RA2iKi%2FWlUO7Y%2F7aMU4Hn%2FhQGp81mdriet%2Bxnj29kAHgeiHpZPJ%2BU1VK6rzfh37OEi9%2BIbMvdh4IDuLfXN3u2aPZGJYKDSaODsMIO%2B2v04cVRMHvCUU0zkOmU51oRpuxzkVPvKP6qsDV4gIxvGLa35Q%2BQh22sxXDGJaqqndAD%2F5Drd4HlPjMTHJ5t7xa7SKXST392iMWKtTUEolbFO5eDP95ShnHOAQlw6PKpAar3PYGxhEo8NrDwQ2gINkCtmAI8H5mAXamiSRvV5Sry3%2FP10dq5HCwA4P3D99KzceYv0fUQNeMKCKABP8ybZ5eDRV5bjojWNsBtfBiN%2BOnE5n%2Fifc%2FBeLji7%2BDiUGLqszGd%2FgAuynZMMIj%2FvckGOqUB4M7A%2FGc7oxQpiMXbLZlqCes68QRs1l5%2BcRpYijUDxHs1S7oXECAZHmLX0sOBKlE3%2FoRHtngHRVzolvnzXS%2BxDFE3hqXZKwnQ8rSw6ozOJmXA1ZP7EKP6s3MyL%2Bdhk2d3ojfdYCEV4Bu86bBc3b2WEtb7hapAH0uta2nsO3Hofx2FDnMyr53JCUFJU3hqCM%2FXK0RoZx8o6lttshFnWJVeYlSp3bEG&X-Amz-Signature=8aef3a82aa816b1e0280999966d4e5a8958628c62ac662d779374428b23e333d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZQBFGIT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCd58x9nDKXn2MIUzIND0JVaMBjlK4uGvDlUFQJ15yzjAIgMGeTEoGFG7GKfJvtGUK6VkOUeqDKjjQMRpsn6oyp7igq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDAMW0jGo3dvYI1%2FixSrcA7P3qB3nQ%2FUcvbMnYASrTtuUGiVz6k3RROlq4%2Bhw7dlLxqU6xtfz2hsQeFbB5uDsGSlQTaBRNQw37d8Lhjtzg25ZBOPgUrIt5BycI2zw3bIDB2gDn5xTIDODQK0X%2F0xA7Mjh9dHghAnv4VcQHPUVzqQzvKUz2KcXLNm3mfP4g%2FM30Dg5hRG9eP1HI8OdYMG%2BaloV%2Bp969pimigqNYwf8Sj6U8loxea5Wo6GYqk5ePbqK7yvuwGtoqrQ%2FoFmBjP8SbVIsfOl8MF5RA2iKi%2FWlUO7Y%2F7aMU4Hn%2FhQGp81mdriet%2Bxnj29kAHgeiHpZPJ%2BU1VK6rzfh37OEi9%2BIbMvdh4IDuLfXN3u2aPZGJYKDSaODsMIO%2B2v04cVRMHvCUU0zkOmU51oRpuxzkVPvKP6qsDV4gIxvGLa35Q%2BQh22sxXDGJaqqndAD%2F5Drd4HlPjMTHJ5t7xa7SKXST392iMWKtTUEolbFO5eDP95ShnHOAQlw6PKpAar3PYGxhEo8NrDwQ2gINkCtmAI8H5mAXamiSRvV5Sry3%2FP10dq5HCwA4P3D99KzceYv0fUQNeMKCKABP8ybZ5eDRV5bjojWNsBtfBiN%2BOnE5n%2Fifc%2FBeLji7%2BDiUGLqszGd%2FgAuynZMMIj%2FvckGOqUB4M7A%2FGc7oxQpiMXbLZlqCes68QRs1l5%2BcRpYijUDxHs1S7oXECAZHmLX0sOBKlE3%2FoRHtngHRVzolvnzXS%2BxDFE3hqXZKwnQ8rSw6ozOJmXA1ZP7EKP6s3MyL%2Bdhk2d3ojfdYCEV4Bu86bBc3b2WEtb7hapAH0uta2nsO3Hofx2FDnMyr53JCUFJU3hqCM%2FXK0RoZx8o6lttshFnWJVeYlSp3bEG&X-Amz-Signature=c5fd361d6703e995bf8e6ba1b4a21f1ca74dde8816b44e5deeb38e8d2a734733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

