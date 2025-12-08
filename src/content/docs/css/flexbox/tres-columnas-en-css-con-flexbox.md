---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJW233NU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmBVYAZjSiE45FPeuo50xSdouFJiGk4xhuF7s5yQElBAiBwA0oeO%2BvqGjWP2ZtaoXtGEN9dGn40AJZ0e3qV%2BgwivCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwdv3qsfbrkw3kJkfKtwD%2BQiWWWSaSPCMkxAcMbMJZK6ORzg3UgkfCOk2DRk62lITvXFQGiN5Ap8%2B8TDNAdK%2Ft0TWqZGGFQs3%2B4ls1UPIv%2BwSHnmzdMv7MA9Afc3Uekhxuo2ddmmZj82wJwGQervxbJvTNLGfLGMLuic25dbqTPiSZMjma4poAYcFx4c2tKjbwLGZRBFncCLiaRwArkhmMpZU6yw3XzwVbviexLQY6MkOmv%2FG4vNXEJc%2Bfib98pEdqb4%2FF%2Fm%2FmbUqmz3%2B3UDe50n1Wbj2F7DCXL038a8NgTmsmIKfYWwipx%2BsWADND5neTMZHhCGBIcHcn9HCWrlFHj0iwJOfXkRBp9p48JA9VVXHC0R6JBM2y57jB1MGeFbrtJa38VH65%2Bfu4p%2Bmq2XHldjP2%2B8edaObvh4GnOcRXIaxwXK36hF6rwCRErIeTXkzltv%2FRhDeGOj8ofD0yDhRIXdgDXgdHbhERvB83tegxcRCU5tULxMQ8WytJ4Scgnpb7BLez9E2VUpVe8mYLa6zIpbJmoIgQEUZ3nTv%2FjY4VzsrpkwpH0M1Qh1%2B88Dv3mHMD6RACYvfAu6TsdWBKufFLPYMqRTBWB831II6LF35jqiv8ntaNftt1SahFmuAT5uy5AKRvnLsHXbBekEwk%2BXbyQY6pgGCRBLkF6xsua%2FSRKcx7K5l28MnxBXLGSAWISaq7SkOqA%2Fm7jvFXl%2BGJnX6x1zZ5qyPFauHOwF7Bw8SeJUXCDx4a3gpLFzFMW5nJPHDO4dbYkazjM3mMT8k6qH0%2BGKt1veMP87aThm7susEZVhkGggmxCztKh6XXWcsKchQ%2B9l%2FHDsVegiTfwr9C1CuPJKHHucUBKp6%2BFZi%2FRFK8TVTDCujW3gB57bm&X-Amz-Signature=f69354344fd48f860aff3dac4e8a0b688a4547841fbc8138c1093752a6a9ad05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJW233NU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmBVYAZjSiE45FPeuo50xSdouFJiGk4xhuF7s5yQElBAiBwA0oeO%2BvqGjWP2ZtaoXtGEN9dGn40AJZ0e3qV%2BgwivCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwdv3qsfbrkw3kJkfKtwD%2BQiWWWSaSPCMkxAcMbMJZK6ORzg3UgkfCOk2DRk62lITvXFQGiN5Ap8%2B8TDNAdK%2Ft0TWqZGGFQs3%2B4ls1UPIv%2BwSHnmzdMv7MA9Afc3Uekhxuo2ddmmZj82wJwGQervxbJvTNLGfLGMLuic25dbqTPiSZMjma4poAYcFx4c2tKjbwLGZRBFncCLiaRwArkhmMpZU6yw3XzwVbviexLQY6MkOmv%2FG4vNXEJc%2Bfib98pEdqb4%2FF%2Fm%2FmbUqmz3%2B3UDe50n1Wbj2F7DCXL038a8NgTmsmIKfYWwipx%2BsWADND5neTMZHhCGBIcHcn9HCWrlFHj0iwJOfXkRBp9p48JA9VVXHC0R6JBM2y57jB1MGeFbrtJa38VH65%2Bfu4p%2Bmq2XHldjP2%2B8edaObvh4GnOcRXIaxwXK36hF6rwCRErIeTXkzltv%2FRhDeGOj8ofD0yDhRIXdgDXgdHbhERvB83tegxcRCU5tULxMQ8WytJ4Scgnpb7BLez9E2VUpVe8mYLa6zIpbJmoIgQEUZ3nTv%2FjY4VzsrpkwpH0M1Qh1%2B88Dv3mHMD6RACYvfAu6TsdWBKufFLPYMqRTBWB831II6LF35jqiv8ntaNftt1SahFmuAT5uy5AKRvnLsHXbBekEwk%2BXbyQY6pgGCRBLkF6xsua%2FSRKcx7K5l28MnxBXLGSAWISaq7SkOqA%2Fm7jvFXl%2BGJnX6x1zZ5qyPFauHOwF7Bw8SeJUXCDx4a3gpLFzFMW5nJPHDO4dbYkazjM3mMT8k6qH0%2BGKt1veMP87aThm7susEZVhkGggmxCztKh6XXWcsKchQ%2B9l%2FHDsVegiTfwr9C1CuPJKHHucUBKp6%2BFZi%2FRFK8TVTDCujW3gB57bm&X-Amz-Signature=f226b9977ec3554c6d64f63ebfab37b86a6ae08cd0cd2e89a205519477bcd5c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

