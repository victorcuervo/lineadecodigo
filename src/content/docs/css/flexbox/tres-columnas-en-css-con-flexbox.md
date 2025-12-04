---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV77KHWJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIHSt6yf%2FAcRbDbcmn3iRD9aXdrhwo8gXQ1uBwgC2LbLHAiBNG45EGonsh5C5FxkugtYHlnnETykJdqN33SQ1vVR7ayr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMFWS1f0y%2FfjziBalNKtwDODGVFeEX8M2MMth0W9j7kN%2FnuPURruTbTHu9GLBTmNMqBdFL7Kyu7CZnH9cGnLpj9Eap2wS0cpBC2ara5BkWeLZERXOBl0Kf%2B6A8u%2FQTNpikJAcLQJKDpOLEN2DXgBXRyPJcghuwsQpyJVlB6mrWWVIRu%2BbBEAaRg65VHOxvqSLV%2BFusNH26OE2I7zaBrgiADce7UR9SLv79Ppf7mHtw2E%2B2lwgryqjhEo7mmzl%2B%2BlabGwtDFuQWzuKGl2TB1UFPFPC0cHKA4jftXdS2g9Vz3Tt7E0umgJgRYNuzVvT72F2r7pnpnI4KGdcoTKJBj0cDSCxBeForOOwvdxLZYzb3i%2FHbOEXNXMFo98ZUZlrqJFxic2NoU3zLBR337HRK04PLDDdEjrkUrOElksh2BVpKH8BsGHET1Lx04tLRTgijGbspilbDWM5KCtEDl%2FOgmRhXROQhc47GRhGBr274MjfJlpTpHaEqyT%2BMQVQfU6WR6xLXsQ%2BuP1Jnwl8FBA0Jn2ZssISrOkzY237WOWixPBKMWXNCKLAS%2FpTknR5CR%2B7JoI9JZegt%2BopPe1%2FtAEzc%2BYj9%2B6Q%2B4pYI4UHNjT9GVB0hQpbFsHbRhk9ZqZWLxHyE1M%2B5%2BjejyiWldo%2F1D%2B4wt6zFyQY6pgEAy2fo0o5ZZ3yBPG5ryhA65Vmix6IRhCCvsorZMfko6NMwmNhuDN3W9%2FbEao2Oimp3iZEaiFtoeCZHOHmOkTY3Bb1n%2Fu2BIvSXqf5rBH%2B%2BiMItjheZmXocn1%2F01cEllaStFQGOMOQPXk7J010W4t951wKnkZypVn0Wcha%2B1irJBdzD%2FFq26oKspmTYzvsFV%2FQ0gd7rMX9EgaMvCSJbsHdTuLHE2Sp4&X-Amz-Signature=a57e5c950c6172a813d3478cece6eb57d3f8d5dbf078f235a97c8df7f5bfee41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV77KHWJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T095351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIHSt6yf%2FAcRbDbcmn3iRD9aXdrhwo8gXQ1uBwgC2LbLHAiBNG45EGonsh5C5FxkugtYHlnnETykJdqN33SQ1vVR7ayr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMFWS1f0y%2FfjziBalNKtwDODGVFeEX8M2MMth0W9j7kN%2FnuPURruTbTHu9GLBTmNMqBdFL7Kyu7CZnH9cGnLpj9Eap2wS0cpBC2ara5BkWeLZERXOBl0Kf%2B6A8u%2FQTNpikJAcLQJKDpOLEN2DXgBXRyPJcghuwsQpyJVlB6mrWWVIRu%2BbBEAaRg65VHOxvqSLV%2BFusNH26OE2I7zaBrgiADce7UR9SLv79Ppf7mHtw2E%2B2lwgryqjhEo7mmzl%2B%2BlabGwtDFuQWzuKGl2TB1UFPFPC0cHKA4jftXdS2g9Vz3Tt7E0umgJgRYNuzVvT72F2r7pnpnI4KGdcoTKJBj0cDSCxBeForOOwvdxLZYzb3i%2FHbOEXNXMFo98ZUZlrqJFxic2NoU3zLBR337HRK04PLDDdEjrkUrOElksh2BVpKH8BsGHET1Lx04tLRTgijGbspilbDWM5KCtEDl%2FOgmRhXROQhc47GRhGBr274MjfJlpTpHaEqyT%2BMQVQfU6WR6xLXsQ%2BuP1Jnwl8FBA0Jn2ZssISrOkzY237WOWixPBKMWXNCKLAS%2FpTknR5CR%2B7JoI9JZegt%2BopPe1%2FtAEzc%2BYj9%2B6Q%2B4pYI4UHNjT9GVB0hQpbFsHbRhk9ZqZWLxHyE1M%2B5%2BjejyiWldo%2F1D%2B4wt6zFyQY6pgEAy2fo0o5ZZ3yBPG5ryhA65Vmix6IRhCCvsorZMfko6NMwmNhuDN3W9%2FbEao2Oimp3iZEaiFtoeCZHOHmOkTY3Bb1n%2Fu2BIvSXqf5rBH%2B%2BiMItjheZmXocn1%2F01cEllaStFQGOMOQPXk7J010W4t951wKnkZypVn0Wcha%2B1irJBdzD%2FFq26oKspmTYzvsFV%2FQ0gd7rMX9EgaMvCSJbsHdTuLHE2Sp4&X-Amz-Signature=06ca35f32bd1a2aa857fe657d8ff84841afef26e35f29344b3c3d4b26b04ba40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

