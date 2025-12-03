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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAKMAQVX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCoaLmPLQ1EX1HuDOkL7kC6F%2FM7N6JJkizAUo27ZayWIQIgT8fcvVCp9s%2F4ectlfZWHx2IcnSMAtoUizYq500zNz1oq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDD5dcRQIg3mZRJBwFCrcA7faBmeLHtoQo3LxUZli95%2F3CrnvAh1akN2082miHj4cU7HT%2B7nvoPBJHg1CIdCPHINX88HH93SRGa0w66tj67Ekmo2ihk%2B6LLbaaUwkHffSiwUrLT6DF2RXLB5a4H0OGC4pjVe5rNg9SeTTU7Csqy5Ng%2Fy8wlV0Bzfi5Mk6N9SflbDSGnODG4%2FsQvKiHN5hTuWAuRW5sRIapO27reS%2B4Qy2eCW5SihoF9hYz9tTG2Fjz2%2FIqT4JiShmq4uSylxG3B1mKdOIwRD3onK2QH8iWiPPRt4%2BcNkw7ak14EcIN19%2F9vB3dxIDkZ9wesz%2BLxZxYnN5Z6u5m2eJkJWv7IAdH3NLdNqNiAEm4Ytd1lFhbaLjGRylWOpJuaoP2AxB3ZoHqFWWDuk1xTpqQ29y2JEFSPyR5gYW6lWq0Iy52BzT1rhyZi7ynRfe0qNP0WHaU4hlq7j60wyWFyZnBFFsFjk2bcOG8bVQ5ryZcySOSL56liSfdQvUj5G72UdtLi9o6YYL35wViHCUGlduUI%2BvM7R%2BU0HQ34kb2txeuBSuI3hAo82R28W8YFVxHRnlBE2gKnCCwHlaDZvA9YXOrxDaCEXY5rVQ1g4iHsyyXazu1%2F1tRYvHw0UghwMRklVOlxj4MKehvskGOqUB6cvMBiGcfeMAbIjdAsy7CkdpTcYuN%2Bi8aCqAVZ8Q3btv8wQzkoty9NzvhML2ZOqL0rGA6JfUblQlkN0JpHroMkqYiRYLTQZzEJ73BFg00mZpnLRZY1mjTVEajC2HCzAn9%2F9mC5AU2v5kGFFukomod9rbrFQGkZsWetL%2FEgVnorCWHMvu1ELThcctToz23H4W9I%2F%2Fs43G0amvnZYWEVYCBoACeQL3&X-Amz-Signature=7cc3f9bea5ab1bec289522b4f165e9b5d2966c93cf5636100fb7f8d2a2d80ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAKMAQVX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T044329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCoaLmPLQ1EX1HuDOkL7kC6F%2FM7N6JJkizAUo27ZayWIQIgT8fcvVCp9s%2F4ectlfZWHx2IcnSMAtoUizYq500zNz1oq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDD5dcRQIg3mZRJBwFCrcA7faBmeLHtoQo3LxUZli95%2F3CrnvAh1akN2082miHj4cU7HT%2B7nvoPBJHg1CIdCPHINX88HH93SRGa0w66tj67Ekmo2ihk%2B6LLbaaUwkHffSiwUrLT6DF2RXLB5a4H0OGC4pjVe5rNg9SeTTU7Csqy5Ng%2Fy8wlV0Bzfi5Mk6N9SflbDSGnODG4%2FsQvKiHN5hTuWAuRW5sRIapO27reS%2B4Qy2eCW5SihoF9hYz9tTG2Fjz2%2FIqT4JiShmq4uSylxG3B1mKdOIwRD3onK2QH8iWiPPRt4%2BcNkw7ak14EcIN19%2F9vB3dxIDkZ9wesz%2BLxZxYnN5Z6u5m2eJkJWv7IAdH3NLdNqNiAEm4Ytd1lFhbaLjGRylWOpJuaoP2AxB3ZoHqFWWDuk1xTpqQ29y2JEFSPyR5gYW6lWq0Iy52BzT1rhyZi7ynRfe0qNP0WHaU4hlq7j60wyWFyZnBFFsFjk2bcOG8bVQ5ryZcySOSL56liSfdQvUj5G72UdtLi9o6YYL35wViHCUGlduUI%2BvM7R%2BU0HQ34kb2txeuBSuI3hAo82R28W8YFVxHRnlBE2gKnCCwHlaDZvA9YXOrxDaCEXY5rVQ1g4iHsyyXazu1%2F1tRYvHw0UghwMRklVOlxj4MKehvskGOqUB6cvMBiGcfeMAbIjdAsy7CkdpTcYuN%2Bi8aCqAVZ8Q3btv8wQzkoty9NzvhML2ZOqL0rGA6JfUblQlkN0JpHroMkqYiRYLTQZzEJ73BFg00mZpnLRZY1mjTVEajC2HCzAn9%2F9mC5AU2v5kGFFukomod9rbrFQGkZsWetL%2FEgVnorCWHMvu1ELThcctToz23H4W9I%2F%2Fs43G0amvnZYWEVYCBoACeQL3&X-Amz-Signature=dd10bec2649c8841623320c2883b53af8d4e550fa350d3d3e4b4a5d21f1bc96c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

