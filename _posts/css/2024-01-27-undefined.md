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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ULYPZN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T005805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDxaIVvUze1TAoGPfMgC9FUMMCjXC7OhKAYConeDLaZVQIhALCT9En7CFq1PUAmTAHBSRJIh1dHoBKovwiN%2BAAeywS%2BKv8DCCEQABoMNjM3NDIzMTgzODA1IgyHFwOEKPNlIFRYrP0q3AMSmPkE6Uew8M6%2BqGTR3hECR4c%2FzVzUMm%2BHJfUOaURdaEAtKq9whtAjaJFOMT70kz34WTn5SGdCWY4ddVCVd%2BZfqHwgn7GqME6PfCcG%2BdSH2mG%2FW%2BuCaTcGwTpv4r3ZDEMHKoLa%2FSOIJ0KjwmPeDdgCZEZdrYx428nfOMksxZ6wUMSPE0hWS%2B8Dg7mIdYKBukpwLuYvkVrU7QlgQuVWeY6Y%2FiZIg24BXE%2BA1Lx6vhzRjkwP9SmN64O1bspY3fA5ckDGcJGDXBLKbfAOx4amgr%2FCQHhCDpXGJ89pPwbdQeQZN4eAKTbVjxnRqPyGdeaJlMri14AjjvKQoSPH%2FU%2FbClehESd8cmGQmuprpobbEAVpLN5AMPFm%2BBQ2g6%2FI19jP44ixzFG%2FzSV0IOLbvdEhauCMEmXe1cEYzV4FSi5tZNlIFUUUOfY31rB1QBXAm5cWOFuiUY0u4mNusWTsmyrV%2B77irh5F0DFM9%2FKedeyUL2zIpxjxs4IHTqzps47yw6NnqWx310hDxJTHGusEXggSJYmkjPAsaejxY7%2FIQSDQ8HuGrhgTn8ns03%2FC4SjYeWrraTnbRIIKsdBxX%2BXy7ngdPxPJeZAt5swVRgnmEWKpT63MKweFxIIU022QLdnZ0TC1gb7JBjqkAaUAL5Gk91EDvZebpzXIT%2FK%2BNj36eqn5nG2QP4hQrb2%2BVaWXa5fxmqdR7np0xMPK7s6rwrCCDu1nh3NucCouQbpMCPOVnFOmLaQMFOTkSSWxh53cQyD7t8GWQSO5fU372PuhzXMikcgxTPzONctveSUWwJ3bE%2B2NYDmWT0pNE%2BASdtr1tpDTd%2BVHSrRIUiqauqQwtb%2F%2FdMTwxhyABqypJ2%2BoyJqR&X-Amz-Signature=a581f7461ae7bfd2057352f1e0d900d72457c35fa78f71f946280108ab993499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ULYPZN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T005805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDxaIVvUze1TAoGPfMgC9FUMMCjXC7OhKAYConeDLaZVQIhALCT9En7CFq1PUAmTAHBSRJIh1dHoBKovwiN%2BAAeywS%2BKv8DCCEQABoMNjM3NDIzMTgzODA1IgyHFwOEKPNlIFRYrP0q3AMSmPkE6Uew8M6%2BqGTR3hECR4c%2FzVzUMm%2BHJfUOaURdaEAtKq9whtAjaJFOMT70kz34WTn5SGdCWY4ddVCVd%2BZfqHwgn7GqME6PfCcG%2BdSH2mG%2FW%2BuCaTcGwTpv4r3ZDEMHKoLa%2FSOIJ0KjwmPeDdgCZEZdrYx428nfOMksxZ6wUMSPE0hWS%2B8Dg7mIdYKBukpwLuYvkVrU7QlgQuVWeY6Y%2FiZIg24BXE%2BA1Lx6vhzRjkwP9SmN64O1bspY3fA5ckDGcJGDXBLKbfAOx4amgr%2FCQHhCDpXGJ89pPwbdQeQZN4eAKTbVjxnRqPyGdeaJlMri14AjjvKQoSPH%2FU%2FbClehESd8cmGQmuprpobbEAVpLN5AMPFm%2BBQ2g6%2FI19jP44ixzFG%2FzSV0IOLbvdEhauCMEmXe1cEYzV4FSi5tZNlIFUUUOfY31rB1QBXAm5cWOFuiUY0u4mNusWTsmyrV%2B77irh5F0DFM9%2FKedeyUL2zIpxjxs4IHTqzps47yw6NnqWx310hDxJTHGusEXggSJYmkjPAsaejxY7%2FIQSDQ8HuGrhgTn8ns03%2FC4SjYeWrraTnbRIIKsdBxX%2BXy7ngdPxPJeZAt5swVRgnmEWKpT63MKweFxIIU022QLdnZ0TC1gb7JBjqkAaUAL5Gk91EDvZebpzXIT%2FK%2BNj36eqn5nG2QP4hQrb2%2BVaWXa5fxmqdR7np0xMPK7s6rwrCCDu1nh3NucCouQbpMCPOVnFOmLaQMFOTkSSWxh53cQyD7t8GWQSO5fU372PuhzXMikcgxTPzONctveSUWwJ3bE%2B2NYDmWT0pNE%2BASdtr1tpDTd%2BVHSrRIUiqauqQwtb%2F%2FdMTwxhyABqypJ2%2BoyJqR&X-Amz-Signature=a27f26dcabd01d0662b900f8ee76c9c2d0a52e8f958f711d40cb0dc6374bcc7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

