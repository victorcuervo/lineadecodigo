---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGSGKGKM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsD357Sw0GvmjhIhCO%2BClzFeCvuzRjA9sRFk7xngkGoAiA0m6Fi2TCUPNPUB1TLNR%2BU8fUDbv9EfCgI1WpOIBiv7yr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM3AuzQN0Vl8%2FDN1V9KtwDW2nbtzhuA8xQGkFzLDi9JbL3dYqPwwyVusSchigmfoVA5%2FVHZhxgKqOp7B%2BfYmnRU6ISgpmlUVjyzTC%2FhYEsqyhn%2FK3UryXhYuiYVmHI3h15RdcDgvojIRUN3lYMP1fEFUsmJIU2FEbx5whkMuK%2F3DecGtICq2lcejsXYlkj34vQRgwyfN4xhxOUumKi6VCNR%2B01WqGHvxooWF26vkUqbqqt9amrXahpvgu8GH4ushJ1Kv7c40R9ac%2FsTy6ZjZ6yhWgP0R6ga9kaUDvoSdm10fE5Q2kVGr5oEycjzLGhOC5x3at8kHH3R1NZPK66gh8QD7C7%2FZ5BXGFjBe866evymGocuoX1opS%2Fdy%2Fk7h0okoeZXmcpOoBsb%2FyWguUXaLsglYcv9upQxEF9wyM%2BT8%2B66WKg0sd89k1%2FqDAFVbQO55PYfPGKMFH7pfBf0bejjBbsHA1o1XIYBSJ6iPEE77wow61WnJRbiZw%2FceN3Cdgw%2FicLGeiI8n5jsZUaT3y%2Fwv1YhNB%2BH5aTazgL4VZeXpGjAAjT9Li%2Bx148EOvvpAetMi%2FGKKvkKbuPbjOPAtv6bhc3i5wbuGCPKYnsTBa2JeFX%2F%2F6rTSgATNFG8H9GMaAePZraFMX3nB0CkdbDM1UwxIfNyQY6pgH5Uze4q7p6HRL2Ivv1%2BMn4qv4gg7QHOQAZYy7fxEeRdNGJnZ9Xbszink88kSjtts5lu7kz%2BLr6eaUXmXx7xLUYnDL%2Fs9c4WFjwKmfFegyEfN06U0o%2FBXLgpXViRadbaze2OfkseOApX3Qydbq16Sk4Q8gn3A9YprweWmUxmJ6wn6Qs4iqTrtgFE5vsGoXGU%2F84DWyc6tqRyz5GXbe4gEqcrO1WXcWq&X-Amz-Signature=4b6ab79726178cb3402ccec1aea6f6e140f531022c7810092e642b3a54e9a7ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGSGKGKM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T221558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDsD357Sw0GvmjhIhCO%2BClzFeCvuzRjA9sRFk7xngkGoAiA0m6Fi2TCUPNPUB1TLNR%2BU8fUDbv9EfCgI1WpOIBiv7yr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIM3AuzQN0Vl8%2FDN1V9KtwDW2nbtzhuA8xQGkFzLDi9JbL3dYqPwwyVusSchigmfoVA5%2FVHZhxgKqOp7B%2BfYmnRU6ISgpmlUVjyzTC%2FhYEsqyhn%2FK3UryXhYuiYVmHI3h15RdcDgvojIRUN3lYMP1fEFUsmJIU2FEbx5whkMuK%2F3DecGtICq2lcejsXYlkj34vQRgwyfN4xhxOUumKi6VCNR%2B01WqGHvxooWF26vkUqbqqt9amrXahpvgu8GH4ushJ1Kv7c40R9ac%2FsTy6ZjZ6yhWgP0R6ga9kaUDvoSdm10fE5Q2kVGr5oEycjzLGhOC5x3at8kHH3R1NZPK66gh8QD7C7%2FZ5BXGFjBe866evymGocuoX1opS%2Fdy%2Fk7h0okoeZXmcpOoBsb%2FyWguUXaLsglYcv9upQxEF9wyM%2BT8%2B66WKg0sd89k1%2FqDAFVbQO55PYfPGKMFH7pfBf0bejjBbsHA1o1XIYBSJ6iPEE77wow61WnJRbiZw%2FceN3Cdgw%2FicLGeiI8n5jsZUaT3y%2Fwv1YhNB%2BH5aTazgL4VZeXpGjAAjT9Li%2Bx148EOvvpAetMi%2FGKKvkKbuPbjOPAtv6bhc3i5wbuGCPKYnsTBa2JeFX%2F%2F6rTSgATNFG8H9GMaAePZraFMX3nB0CkdbDM1UwxIfNyQY6pgH5Uze4q7p6HRL2Ivv1%2BMn4qv4gg7QHOQAZYy7fxEeRdNGJnZ9Xbszink88kSjtts5lu7kz%2BLr6eaUXmXx7xLUYnDL%2Fs9c4WFjwKmfFegyEfN06U0o%2FBXLgpXViRadbaze2OfkseOApX3Qydbq16Sk4Q8gn3A9YprweWmUxmJ6wn6Qs4iqTrtgFE5vsGoXGU%2F84DWyc6tqRyz5GXbe4gEqcrO1WXcWq&X-Amz-Signature=067f4c3c1722d542916f1555d26594043c8983ee75954bef051a19364b6d315f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

