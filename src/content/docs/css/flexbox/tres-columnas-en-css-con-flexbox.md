---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AXRI33M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOZMiE1%2FuwA0x1FxD8gjmeAhCzf7nAbq9ouIKr%2Fby0HAiAwKUGI1YD4t1kDegYPuyHyLnn9FEc3abKuSUY47DX02SqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH7I7FbApYNinDWL6KtwDxi1z9mTtta1ctvLy9Nn7gaPNSCzhFLrge6DAiJ80l2kMCRjk%2BcakBHQM5zio6e8nAB1xrrk9%2FVyR2nX4QGSQKYB%2FhHOCy5%2BThnYFgmshu%2FA8xBc2zA5w%2BhBjE0ZriVKHXRXS8poDDzCpUgjRK3CjqhhT2MuVEqxqc7QbgLO%2FQaMZLylpWys5jgI8I%2FaTuxXVK4Z6ec%2FxG35QR5xDlbiY2h1XnMucYAqUG3cm4Iz0dsC1qBoHYUXF2sp4F8ZkifbY7xY3nTb3bYUTFQ56w3UtqgXF1wZDjlMrxfPqrHzxZRwlMrfJfMzaQShWsKkqlCmFSQsfY9NEub7o3mep%2FUgEcP5z1ltibi147gD7vfWkJJt6%2Bjd560%2BhRuBMIU3YS7NdAV6o2k6lscCO1Xdiqd9CL9sNcsYKFaOC0Q14h08NCEzG9iYj%2FCTRFLfTdhcQxgOfLdxuZoFH63AOvsWrVgNSJKYIZJwZkAawuGUYeG1j1o%2FrAM2mtXOau2HazRjcKjiEcAEBpmQGodzL8vgSueflP1EnscpS9iqsAR8bJccB6TtUgfw6Cg7ji0rgMpBMEiMDBbodCOB7nMu9nN7nG7qUSPtYxnPDWgyYUtp%2FPKA%2F4Nl4rahyVCQYb9qiBj0wrqLdyQY6pgHgcKT%2BLOGBgf5fEf9RG%2F068liKiuRT%2Bc3ztgyq9iSRBeS4ZdGN43dV8N4uf%2B%2FzEXt731eQno9DfInwaKlXjWrVvFBKReEeLeDconLu5zhMTTZoCOlVrmxrDLTSKvs0CRwWd4b%2B4%2F0Ew%2Fz%2Fl4zHWxjtLGnwN1N5%2BPLsIfGmZFPbwtLLOivvTM01iuVw3mZ5WwAE9PoS3RO6lnlfWNE%2FznUbvF61BCsb&X-Amz-Signature=f4b2dc899ad08de088be5f9fada266359da2f5bf89d93a6a83f46dec207f1d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AXRI33M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T224738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEOZMiE1%2FuwA0x1FxD8gjmeAhCzf7nAbq9ouIKr%2Fby0HAiAwKUGI1YD4t1kDegYPuyHyLnn9FEc3abKuSUY47DX02SqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH7I7FbApYNinDWL6KtwDxi1z9mTtta1ctvLy9Nn7gaPNSCzhFLrge6DAiJ80l2kMCRjk%2BcakBHQM5zio6e8nAB1xrrk9%2FVyR2nX4QGSQKYB%2FhHOCy5%2BThnYFgmshu%2FA8xBc2zA5w%2BhBjE0ZriVKHXRXS8poDDzCpUgjRK3CjqhhT2MuVEqxqc7QbgLO%2FQaMZLylpWys5jgI8I%2FaTuxXVK4Z6ec%2FxG35QR5xDlbiY2h1XnMucYAqUG3cm4Iz0dsC1qBoHYUXF2sp4F8ZkifbY7xY3nTb3bYUTFQ56w3UtqgXF1wZDjlMrxfPqrHzxZRwlMrfJfMzaQShWsKkqlCmFSQsfY9NEub7o3mep%2FUgEcP5z1ltibi147gD7vfWkJJt6%2Bjd560%2BhRuBMIU3YS7NdAV6o2k6lscCO1Xdiqd9CL9sNcsYKFaOC0Q14h08NCEzG9iYj%2FCTRFLfTdhcQxgOfLdxuZoFH63AOvsWrVgNSJKYIZJwZkAawuGUYeG1j1o%2FrAM2mtXOau2HazRjcKjiEcAEBpmQGodzL8vgSueflP1EnscpS9iqsAR8bJccB6TtUgfw6Cg7ji0rgMpBMEiMDBbodCOB7nMu9nN7nG7qUSPtYxnPDWgyYUtp%2FPKA%2F4Nl4rahyVCQYb9qiBj0wrqLdyQY6pgHgcKT%2BLOGBgf5fEf9RG%2F068liKiuRT%2Bc3ztgyq9iSRBeS4ZdGN43dV8N4uf%2B%2FzEXt731eQno9DfInwaKlXjWrVvFBKReEeLeDconLu5zhMTTZoCOlVrmxrDLTSKvs0CRwWd4b%2B4%2F0Ew%2Fz%2Fl4zHWxjtLGnwN1N5%2BPLsIfGmZFPbwtLLOivvTM01iuVw3mZ5WwAE9PoS3RO6lnlfWNE%2FznUbvF61BCsb&X-Amz-Signature=4aa0fded98f6dbe89209a0269f9b3a07df904bc2d10572a53f55896ade1229b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

