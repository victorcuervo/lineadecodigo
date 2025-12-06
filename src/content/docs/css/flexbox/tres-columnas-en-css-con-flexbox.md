---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V4NZLGH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGwmnU4nyyNUkW%2BxLpXBP3yai9lpbT2X%2BV5HpMQZDpmAiBCejxz4wZl6kVJqSZaugDRFdjb0FuGr5AGFjWfhAlPayr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM7se1xwNIJJigI1zRKtwDBBI9jdM%2FPMLfsYlFFyC9bM3J8Bsvxw0CCv%2BeeUql7Z3wP9pv8CZD1Ku%2BjUvk5lWvue36WF7Y9KNjXgyUmvB0Q4LHG7%2BwbGTdB3BUQoAPZU3VhtN0fnAB%2FSLirBQcZ45ueD7Z0BB9yo%2BXND6dtkr4MArDSVjHtBgFta2QoNsF2xaGxq2Z2H%2BodhctDUHQOUYyk3nodd6oLGkUisqGblf5QN2dYptmTAL9ghajPuHD8eOW7cfqTgqZKRZbDqb7sF%2FEwbxgyAZ5o%2BGg6SgYfGdOBnp3gnwFDGbkiuy2dkKn2aaVcgYsy2ekCHe3MAA1WnKqQvQ%2BFn7QPtLdLIk4F4RalPPRp4a%2FLOotLUgLu0Nfc53YrAZlCc9u4S8T9KPS%2FaMlrcdL2Cxfb9JCWfcldFBDK%2Fpv6%2Bf4t7RinG%2Frda%2B69PfsEkyLDG1lWBMkEUvjsLMXyFwyVw1%2FgRHLW18eZIYh5TcNm3RiYu46s0kSzCsg9zukJDv2THgHURXFWRzYXiDkAMsTkNNfe8Y9zUMfsBpX8SPtBGQnreNL3vHtRf7E8jDhbZMpkS9evX28PFZrgsQe0vYSEtpOGcyifpgVVT5gKMn%2B66JvCeY1S%2Btf5Mc2pUHMewaoZkcwL1%2FVUGcwysPOyQY6pgGFuyC2ErEdCGmTQrGIRC5LOg9RZ%2FazB67wB762eEguhLa3sBC%2Bs%2BtidbXj4iJctc3nEuFCL2T%2FiPdCgg0hdhx7znJzQGIzjVsa59MR1LrjOX5r6nXDJCWzRt8MeJhOBUQn%2F9XYkfGJtqBtXdhKlnqeC4Iusd9xo6d03biYrBLHOSrpRLU20pOzn%2Bb55zIF1GW2Vj%2BUSO9ewTMnaA3o68Cq8RDvg4eb&X-Amz-Signature=181ba6cdae8b852c0fe9569cc842d66618fc3f7339dd3e7b143cb52f093a2609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664V4NZLGH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGwmnU4nyyNUkW%2BxLpXBP3yai9lpbT2X%2BV5HpMQZDpmAiBCejxz4wZl6kVJqSZaugDRFdjb0FuGr5AGFjWfhAlPayr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIM7se1xwNIJJigI1zRKtwDBBI9jdM%2FPMLfsYlFFyC9bM3J8Bsvxw0CCv%2BeeUql7Z3wP9pv8CZD1Ku%2BjUvk5lWvue36WF7Y9KNjXgyUmvB0Q4LHG7%2BwbGTdB3BUQoAPZU3VhtN0fnAB%2FSLirBQcZ45ueD7Z0BB9yo%2BXND6dtkr4MArDSVjHtBgFta2QoNsF2xaGxq2Z2H%2BodhctDUHQOUYyk3nodd6oLGkUisqGblf5QN2dYptmTAL9ghajPuHD8eOW7cfqTgqZKRZbDqb7sF%2FEwbxgyAZ5o%2BGg6SgYfGdOBnp3gnwFDGbkiuy2dkKn2aaVcgYsy2ekCHe3MAA1WnKqQvQ%2BFn7QPtLdLIk4F4RalPPRp4a%2FLOotLUgLu0Nfc53YrAZlCc9u4S8T9KPS%2FaMlrcdL2Cxfb9JCWfcldFBDK%2Fpv6%2Bf4t7RinG%2Frda%2B69PfsEkyLDG1lWBMkEUvjsLMXyFwyVw1%2FgRHLW18eZIYh5TcNm3RiYu46s0kSzCsg9zukJDv2THgHURXFWRzYXiDkAMsTkNNfe8Y9zUMfsBpX8SPtBGQnreNL3vHtRf7E8jDhbZMpkS9evX28PFZrgsQe0vYSEtpOGcyifpgVVT5gKMn%2B66JvCeY1S%2Btf5Mc2pUHMewaoZkcwL1%2FVUGcwysPOyQY6pgGFuyC2ErEdCGmTQrGIRC5LOg9RZ%2FazB67wB762eEguhLa3sBC%2Bs%2BtidbXj4iJctc3nEuFCL2T%2FiPdCgg0hdhx7znJzQGIzjVsa59MR1LrjOX5r6nXDJCWzRt8MeJhOBUQn%2F9XYkfGJtqBtXdhKlnqeC4Iusd9xo6d03biYrBLHOSrpRLU20pOzn%2Bb55zIF1GW2Vj%2BUSO9ewTMnaA3o68Cq8RDvg4eb&X-Amz-Signature=faefb9353b2a841817959d762a03344d19fa7de9a038865e15cfaa740425ef2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

