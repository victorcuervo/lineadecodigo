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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KP6AKDQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIB51y84qeTnBu7hLS1zHc65Ft%2FegZCt5El%2BHWmJIbFG7AiBAMQCaIgFarCcRwFUNyyH94CrjAMkPLD5TCvPgF7YPCSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMB72isHeWBpIPL2ZnKtwDkMelF%2FuoE9VT%2FWo78P6PhRVgzhkbtRI509CN6L07b5V%2BYr%2FWGrvBsaGc2hhOrg9FlBPMAPn%2BHWidkMKUuvxsAlGVgxG48D4G%2BLdgwDBRZe7cfcmgw%2BvtZOfks6JSCRifzGujBLYt1zPDuHADy01XVpysRHhhlfWbFtXnPZQpD3%2FDa%2B3IqFXgp9NKi4sSG%2FICErc8rL1ORU6M0BPQCH%2BjD53wCIawdBM3ZQyknN56WOSoG3C84bREYc0lnOHdH%2BH7WKnk4Zz3i36Z%2BkEoBR8zKikfXPuI7%2FDg0iq1cn7kWTy9uYDdZt3PlqV3J7wTMNK4VMAgSUwOWWI3rYPLGLjZo0Wtp7pX6%2F7ef3LZXvacUPQzUJkhpg4Se106srKi1THo2lN4vC236soLl0HgEwjF5e%2BPx326%2BIMHc7kkqhaKoxsX1FxfKfMkGhIuQ7RZ3TO4WBqTuUM62USxAno3Dhdsb0hoyIBPTbYZ9HIrb7bk9eVkuxvz0mmIG6iiGgv8z0fI0MGHGLbxJ5nOjZmmDlrvprwQcY0X%2BfrTWp6IexH2V5YrX07WBu50vubHAd5GC7CS0yNaX0FIZXRf4OHoB2Qli7%2Fe0L%2BiXnIm9M7syKfbF8F%2FfwLTkFGaBNZ4dC8whrm%2FyQY6pgH7hm6OSku8SLrIKbRWDQZySAhvJURCsS%2FuhguwXt2Vg51gkmK%2BrVVyvDGrkJEX4ZL55t5iGrL72Kjq8br5Vw0riy8afW7bBlVAOCcwGjYCeQnOmuBbRn%2B4JIEsshrTkKK3pTRL9%2FeeXzaxAGnpC6WOHhqqeUZ1JABBTmTY8aEdTWtMqen3EZ51FfDjylF9bzTopnrS03v8yQmaK%2BB%2BY6XJtbRKscus&X-Amz-Signature=07a7a5f844f623b0466f5b50c44c53167891e33360cde043f4f167248cec560e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KP6AKDQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIB51y84qeTnBu7hLS1zHc65Ft%2FegZCt5El%2BHWmJIbFG7AiBAMQCaIgFarCcRwFUNyyH94CrjAMkPLD5TCvPgF7YPCSr%2FAwgoEAAaDDYzNzQyMzE4MzgwNSIMB72isHeWBpIPL2ZnKtwDkMelF%2FuoE9VT%2FWo78P6PhRVgzhkbtRI509CN6L07b5V%2BYr%2FWGrvBsaGc2hhOrg9FlBPMAPn%2BHWidkMKUuvxsAlGVgxG48D4G%2BLdgwDBRZe7cfcmgw%2BvtZOfks6JSCRifzGujBLYt1zPDuHADy01XVpysRHhhlfWbFtXnPZQpD3%2FDa%2B3IqFXgp9NKi4sSG%2FICErc8rL1ORU6M0BPQCH%2BjD53wCIawdBM3ZQyknN56WOSoG3C84bREYc0lnOHdH%2BH7WKnk4Zz3i36Z%2BkEoBR8zKikfXPuI7%2FDg0iq1cn7kWTy9uYDdZt3PlqV3J7wTMNK4VMAgSUwOWWI3rYPLGLjZo0Wtp7pX6%2F7ef3LZXvacUPQzUJkhpg4Se106srKi1THo2lN4vC236soLl0HgEwjF5e%2BPx326%2BIMHc7kkqhaKoxsX1FxfKfMkGhIuQ7RZ3TO4WBqTuUM62USxAno3Dhdsb0hoyIBPTbYZ9HIrb7bk9eVkuxvz0mmIG6iiGgv8z0fI0MGHGLbxJ5nOjZmmDlrvprwQcY0X%2BfrTWp6IexH2V5YrX07WBu50vubHAd5GC7CS0yNaX0FIZXRf4OHoB2Qli7%2Fe0L%2BiXnIm9M7syKfbF8F%2FfwLTkFGaBNZ4dC8whrm%2FyQY6pgH7hm6OSku8SLrIKbRWDQZySAhvJURCsS%2FuhguwXt2Vg51gkmK%2BrVVyvDGrkJEX4ZL55t5iGrL72Kjq8br5Vw0riy8afW7bBlVAOCcwGjYCeQnOmuBbRn%2B4JIEsshrTkKK3pTRL9%2FeeXzaxAGnpC6WOHhqqeUZ1JABBTmTY8aEdTWtMqen3EZ51FfDjylF9bzTopnrS03v8yQmaK%2BB%2BY6XJtbRKscus&X-Amz-Signature=59b7d5dc409d9677e9d1de2c6e662ee1405742bac09f6a1a0c52a4efc8febe09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

