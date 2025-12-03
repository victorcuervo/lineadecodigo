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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZCGZQXQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICwrOpOikrGE9Ki2mdNAfBf9oD2e60KoL922lA9OgBqWAiEA8%2BYO9eeHHPVRoHZQFECs5HDIlXe3zW5qRX0h7uUldRgq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDH9YNbKIPoFzZLsvlCrcA55w376l8QZ%2F0mKLiF8XpBb8PGFrqd5w%2FgU3%2F8TL0xumiJTYX57fzNyzVtoRrS9l%2Fvv5gyGwf9upH%2BXx8RoXBh06QGn2ZmKAnUDyWMWExuYD%2FkMEPNSNgZmaZ99sYnAit1NHTwVsHpALr1dqCy0%2BiKHLlNnByRyq%2BwRqE24jkP9IIYTRKaoGBU7WF8XGVCqMva%2B1M0oDeGmfsse7esZrEk8SzQynWfQvV3zRy5fNaF6axFPzc0mkfBjBThpELSPdGjpK5CKSuztQXG7VNenpDVBDiKvqmGM%2F1s2MLX1O3iXhM27pJneoqXq8q%2BpyQHw5tdrzH3mX9Ivbq7IJqkYpn%2BiEs%2BY%2F89Gr0P5ab9fOhnpYASDle3h483cNCpr8F0xc5I9bZzMlgMsaREDbVizUxdEwGd%2B1x1V6Ls2VaUbF5v0AIisjIRKiXcU%2FdpZ6brqQjsXIGOyLp8jfv7F0mnjMGTMlK5WyPqvkorVvRsVbXCj8RBgnL%2BRlKbmMixT0ganKxwLCzO%2BIQi56sDIDc0IfkDYlR%2F0a2nr6wHssOvdnLbWK2OH76mTvdicAsnh1rUc2GYRpcgKWyUxrpTiaayx%2B3tJJEx3Q0shZTTaC2eL%2FwZX5O%2BHxbOpafb%2B2lBLMMKvNwMkGOqUB47Np5%2FAOGjLRYmFNo6DK3Xq%2FvF6KS0qhwUAQ8uNI%2BLzFONOCm1E1MhngHq28fbAvPtfUGMRrxLoPSaKaU3jITVZK2UfOuaa2Eu%2BuPtwOX%2FaxuPCL6aYLpY31yxny0tvtoB7lLPXroASKZi9UI3ebfkscbwLKyisn5hKwdEMsHCTbNGk56fEDY0A5cZUqDwVMtQvuTw0EdZXf8ebUlYK%2FsxjyyWvo&X-Amz-Signature=dcc8377711d91e5a082fd08af1ae37ec526c2d2512d71db2abc74828f829b978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZCGZQXQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCICwrOpOikrGE9Ki2mdNAfBf9oD2e60KoL922lA9OgBqWAiEA8%2BYO9eeHHPVRoHZQFECs5HDIlXe3zW5qRX0h7uUldRgq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDH9YNbKIPoFzZLsvlCrcA55w376l8QZ%2F0mKLiF8XpBb8PGFrqd5w%2FgU3%2F8TL0xumiJTYX57fzNyzVtoRrS9l%2Fvv5gyGwf9upH%2BXx8RoXBh06QGn2ZmKAnUDyWMWExuYD%2FkMEPNSNgZmaZ99sYnAit1NHTwVsHpALr1dqCy0%2BiKHLlNnByRyq%2BwRqE24jkP9IIYTRKaoGBU7WF8XGVCqMva%2B1M0oDeGmfsse7esZrEk8SzQynWfQvV3zRy5fNaF6axFPzc0mkfBjBThpELSPdGjpK5CKSuztQXG7VNenpDVBDiKvqmGM%2F1s2MLX1O3iXhM27pJneoqXq8q%2BpyQHw5tdrzH3mX9Ivbq7IJqkYpn%2BiEs%2BY%2F89Gr0P5ab9fOhnpYASDle3h483cNCpr8F0xc5I9bZzMlgMsaREDbVizUxdEwGd%2B1x1V6Ls2VaUbF5v0AIisjIRKiXcU%2FdpZ6brqQjsXIGOyLp8jfv7F0mnjMGTMlK5WyPqvkorVvRsVbXCj8RBgnL%2BRlKbmMixT0ganKxwLCzO%2BIQi56sDIDc0IfkDYlR%2F0a2nr6wHssOvdnLbWK2OH76mTvdicAsnh1rUc2GYRpcgKWyUxrpTiaayx%2B3tJJEx3Q0shZTTaC2eL%2FwZX5O%2BHxbOpafb%2B2lBLMMKvNwMkGOqUB47Np5%2FAOGjLRYmFNo6DK3Xq%2FvF6KS0qhwUAQ8uNI%2BLzFONOCm1E1MhngHq28fbAvPtfUGMRrxLoPSaKaU3jITVZK2UfOuaa2Eu%2BuPtwOX%2FaxuPCL6aYLpY31yxny0tvtoB7lLPXroASKZi9UI3ebfkscbwLKyisn5hKwdEMsHCTbNGk56fEDY0A5cZUqDwVMtQvuTw0EdZXf8ebUlYK%2FsxjyyWvo&X-Amz-Signature=a4a16eec530747b23efa1326e3c215104acb1bc7fd58b7b1fe83d8ebd12c3ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

