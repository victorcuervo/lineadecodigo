---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHFBSFNJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxAc4SY2Z4RiWhaPRSYbWdJlcCLXRTwVXxUiG2Xc4rNAiBcTZUvh%2FAKgfGaLmxSF3xmyOPzVgyDezU4cT6obGUGdCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNSXJwTOEID7WowTfKtwD53XiHhlO3Il7iIVO8WD0AG4NghI%2B6%2FGet6sV7KeEhr4gpXjf8PhcgGQFDT%2FAqjJR9sgB4tEVMxPc2I5CZxsMdzmyhglUvs%2BD%2BEuxL6wPrABeG8D%2FctSJmX%2FAYRIR65nTQW1ZaRJUbG3ydzF5ZJPEwdn6pvidatSV82nWCJOYk9SGbqPDFdXjaDmF4nKDwnu%2Be2EeZp57IH8t%2BMA3q7XIewal1IlaJY3%2Fsyk%2BRU6d%2F7Ek8GT%2B1YpoJJSadCI4H0xtXACfRuZ1NYIk7kR9OiqDHM1FV3BmcO5No6VRO3hLV792Lv3HD7gQ62G4qwgBP%2BQom%2Bk4QgJK6wAiBsCZAS1%2BNZkuetXE1gxPFCYEei9oQdSQn3Mehf3RLNCO3GLASpdQMLbrS7XPir7wadL2ccXQ3QrlFTztRyhKChv92cVRrbZ4Iv56wF584M8vmnN%2BiEka7V5lfuWwqTZwejnBcvLOkb2PTaxUzcy70NuysK6vD6oXx7opXwusU25%2BeqqvPREbkSHLY3TOoVLwRQnbmGnOWv4%2F99k2QimcPPZlIw5vkME4CvEu3RtU2dbRsAIQJ%2FG3o0POvlUv%2BOjmzVi63mhu1FRcuajOKs%2BTM1VWjjAC%2B%2F6Ri7Gkyzn2pn5eh4ow7uTbyQY6pgGeE0uocYPuyTHOZEcUENNkIe2bWEHUcroRsd3T8Y87g2X7GXUbXDKZOjK68jWtgWvj%2F1C4IuIp%2FGEKsDMA1TGNC4s3wmhCyGPKdl8JFo9GNRBkqkso09QNUorrTX4DK7MpQX0m%2FSmhtxaQDECtfRCLL1qLua946%2BQ0rznHEaXPn0qHh8E%2BrzLwRREt6AAZA%2BXFyde8OfQk1E3tuexpg71kEaVr9hNX&X-Amz-Signature=0c655a185c8f0d3effb39ae2caf93fe0675f2884801a3d553c6c4635fb2d213f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHFBSFNJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T165137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAxAc4SY2Z4RiWhaPRSYbWdJlcCLXRTwVXxUiG2Xc4rNAiBcTZUvh%2FAKgfGaLmxSF3xmyOPzVgyDezU4cT6obGUGdCqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNSXJwTOEID7WowTfKtwD53XiHhlO3Il7iIVO8WD0AG4NghI%2B6%2FGet6sV7KeEhr4gpXjf8PhcgGQFDT%2FAqjJR9sgB4tEVMxPc2I5CZxsMdzmyhglUvs%2BD%2BEuxL6wPrABeG8D%2FctSJmX%2FAYRIR65nTQW1ZaRJUbG3ydzF5ZJPEwdn6pvidatSV82nWCJOYk9SGbqPDFdXjaDmF4nKDwnu%2Be2EeZp57IH8t%2BMA3q7XIewal1IlaJY3%2Fsyk%2BRU6d%2F7Ek8GT%2B1YpoJJSadCI4H0xtXACfRuZ1NYIk7kR9OiqDHM1FV3BmcO5No6VRO3hLV792Lv3HD7gQ62G4qwgBP%2BQom%2Bk4QgJK6wAiBsCZAS1%2BNZkuetXE1gxPFCYEei9oQdSQn3Mehf3RLNCO3GLASpdQMLbrS7XPir7wadL2ccXQ3QrlFTztRyhKChv92cVRrbZ4Iv56wF584M8vmnN%2BiEka7V5lfuWwqTZwejnBcvLOkb2PTaxUzcy70NuysK6vD6oXx7opXwusU25%2BeqqvPREbkSHLY3TOoVLwRQnbmGnOWv4%2F99k2QimcPPZlIw5vkME4CvEu3RtU2dbRsAIQJ%2FG3o0POvlUv%2BOjmzVi63mhu1FRcuajOKs%2BTM1VWjjAC%2B%2F6Ri7Gkyzn2pn5eh4ow7uTbyQY6pgGeE0uocYPuyTHOZEcUENNkIe2bWEHUcroRsd3T8Y87g2X7GXUbXDKZOjK68jWtgWvj%2F1C4IuIp%2FGEKsDMA1TGNC4s3wmhCyGPKdl8JFo9GNRBkqkso09QNUorrTX4DK7MpQX0m%2FSmhtxaQDECtfRCLL1qLua946%2BQ0rznHEaXPn0qHh8E%2BrzLwRREt6AAZA%2BXFyde8OfQk1E3tuexpg71kEaVr9hNX&X-Amz-Signature=bbd233a1dc9f0e8ac34fc60a99c9ab91c20d3a39fff6f7dfa624d3f80cb936e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

