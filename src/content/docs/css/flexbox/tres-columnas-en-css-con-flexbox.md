---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEUF4EMH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdZnRaEiUaxdx0kKEKurXgKrQ1uBA2B2yFAOeN10XgBAiEAoVxgBf2GOhQXNPMVdotMoee%2FqCq%2BQ8ON7ZVkLFexTLIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKVlVpJxfYHIb5b6IyrcA9FuD4YTne31Wr%2B3vzknJupsKZ%2FJczgQHFZfyqALZnA8VPZTmy4KsB0t2lh7rfVEv1Tahml7Li7Ns0VgIkmQvfsDriTONv53a%2BmOJSh8A%2BNVz4nx2WXqeEV%2BH4pZ19iXAtg1abLrkiv9zrw5QSjZld3BjCRaal9UgH7YVPktumAlt1AiUWk3IJHS%2BSS%2Fkjwy0wXCKab%2FuYUuKFD%2F4vg4qaDNiHKLKnV2izn5iuy1k3FMFfSV%2FQko6%2B9iEi%2Bhs9epgTlpN2GfOgc4LwR496pqBXbQf9XRJBZAXGCxQOY0kzyk1CKGP6m%2Ffzx0QwaFTBzP0kIhjPub7NhaWQ9Hiskq%2Bylhn4cn8nxDSdgiydncx%2FVYtWFmE%2FSHobiq9GVJ%2BYqiCkBckcgiDC%2BtIohIeEWWW3TrZMZKRiIbJUcTKA2uBACugztBupK%2FhnbBOIq3oKRh9l%2FUsi5OL3V7Qiv8yIDYrCGMGwh28OjBS9RCQPiUNoaR%2Fs43EdJvaEp%2FV%2Fx6afYtH5N%2BHBn%2Bnwds50TYaXEz5Nte0gWbcoUpWUFhLqG8Zs5ZBi1BhZW9Mhi%2BKE9C1tH36t1J3QzKL5yCNQk%2Fpmvv8w7Zn6nRXfLNrp6%2F07Z5tXo93SzjUOOCNW%2FLK%2FrnMLeMyMkGOqUBFxR7ZYTzoUSnP17qeYXHRxZwU38gHGuxw5VUijDcE1eBX58YWp9vh1wwKtK7j2GhjfMCwvvuyxUqtiFqEwcUTlQrm7hfYKzRcTHnzAwYi%2BtJ74jfQogZZHZ2m%2BzZXAAG%2FOIT7BGJvdr0s6x%2BcMxSRIaCGUUTYmRErq0qrca6ylycsahh6PuQtnBZH0UUQwYwRcoBrRRLO3SPz6soJCp1lMY6EAqi&X-Amz-Signature=e475b96287d63d4743d18da9ca5daf5f56c8e6f2fa61b8a7c24da7fedd0b7864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEUF4EMH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdZnRaEiUaxdx0kKEKurXgKrQ1uBA2B2yFAOeN10XgBAiEAoVxgBf2GOhQXNPMVdotMoee%2FqCq%2BQ8ON7ZVkLFexTLIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKVlVpJxfYHIb5b6IyrcA9FuD4YTne31Wr%2B3vzknJupsKZ%2FJczgQHFZfyqALZnA8VPZTmy4KsB0t2lh7rfVEv1Tahml7Li7Ns0VgIkmQvfsDriTONv53a%2BmOJSh8A%2BNVz4nx2WXqeEV%2BH4pZ19iXAtg1abLrkiv9zrw5QSjZld3BjCRaal9UgH7YVPktumAlt1AiUWk3IJHS%2BSS%2Fkjwy0wXCKab%2FuYUuKFD%2F4vg4qaDNiHKLKnV2izn5iuy1k3FMFfSV%2FQko6%2B9iEi%2Bhs9epgTlpN2GfOgc4LwR496pqBXbQf9XRJBZAXGCxQOY0kzyk1CKGP6m%2Ffzx0QwaFTBzP0kIhjPub7NhaWQ9Hiskq%2Bylhn4cn8nxDSdgiydncx%2FVYtWFmE%2FSHobiq9GVJ%2BYqiCkBckcgiDC%2BtIohIeEWWW3TrZMZKRiIbJUcTKA2uBACugztBupK%2FhnbBOIq3oKRh9l%2FUsi5OL3V7Qiv8yIDYrCGMGwh28OjBS9RCQPiUNoaR%2Fs43EdJvaEp%2FV%2Fx6afYtH5N%2BHBn%2Bnwds50TYaXEz5Nte0gWbcoUpWUFhLqG8Zs5ZBi1BhZW9Mhi%2BKE9C1tH36t1J3QzKL5yCNQk%2Fpmvv8w7Zn6nRXfLNrp6%2F07Z5tXo93SzjUOOCNW%2FLK%2FrnMLeMyMkGOqUBFxR7ZYTzoUSnP17qeYXHRxZwU38gHGuxw5VUijDcE1eBX58YWp9vh1wwKtK7j2GhjfMCwvvuyxUqtiFqEwcUTlQrm7hfYKzRcTHnzAwYi%2BtJ74jfQogZZHZ2m%2BzZXAAG%2FOIT7BGJvdr0s6x%2BcMxSRIaCGUUTYmRErq0qrca6ylycsahh6PuQtnBZH0UUQwYwRcoBrRRLO3SPz6soJCp1lMY6EAqi&X-Amz-Signature=9740cb45afdb83333718b3855bf2435c34d96458ccf3df98137bf2a6e3dd0c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

