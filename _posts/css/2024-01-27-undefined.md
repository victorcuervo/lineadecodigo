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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HOFYZ6H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGyOwSMXkcUWen0C2Im15R0kk5Fwgl8swTsDrsY%2B8tjUAiEAroagmGZh%2BxEdmq8v11vj15Bs2pJkQOYmTptaHLijoakq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLK7i3KcGaicGephLircA8Fnheeo8PqBsTKY69de%2BLEF9%2BzdwxoxAdtsRS4tMadq6KBm45MJ0XNVzAiMA9PC4z4tyZ40nQBV9%2FXIfl6tJwwIt80Qe%2B3%2Flw4%2F9fyHdDWBAUMJM5wTRIAYRVBX%2BAROHeRY2Baw8Ql9dTucRztuW0mGSfYh6FyPNeoFtOCeImO4hoGmKFS0o6c09tFoQEBAYUyZeHr8mr2KNYQnA23Iaog6V8o3gj3uSbgg5DBcqwqyHH3NKNztKuQgqx9pSL672L%2BmiV%2B3Sav9z%2BqdtQYgVbD5TqcxkN8zNPqzTQ7I%2Bks7%2BtgbjectBzpds33hjtoBS0vI9hTwGJJQwqvyUN1fpCQJtBR4h60XffPT5RK5eoNasn9NDcyLXMNT1oGTg7YNqnL%2BATmqKQP9tni75Y1CoN7atZrXOS0cCktkWlktgieGXrOqBy4U8X39Pm5plhTM3aI60Hi5IdFKlMhznt%2Fs9QIY0B4oZeMMMFYN4hdFI33KDfNdXxfsdB99smWHvja10HatypZzAKPkPNU9YfCACWD3MYVpTBME%2B2p1m2l4pft4xeiSuR7td%2FZagvU%2FfOFC0VEfBS1n8A2BAqgIVJlWp0YqfkoTgTTKYFvDv9UKfwdCb0GiPLrTJqUYgLygMOmTwMkGOqUBFMN4DR6kiwxiG7L9EjVirNw2hmC5LZDQ4v7%2BPX4wAfm7QAG%2FWqgIfyNicCGpUzRtjarsMyCcLchJDHOgtKCydxVGesfvbhOsXEC9tHkNZ4I3%2F17i%2BYc0KTyljsB2ySOVlVE3fDVsrDclS1qh165SUQKMNqhsjSukQSxQu9wHWFQLAfBUHQroe4r7KB0%2F8Tobh0ZdsPsQidEsVUNtPwKJegTZvdKf&X-Amz-Signature=c2bbb89e250a615d20fef0c4d78b131e1b706966d8124d9c0deb7b47ee53391d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HOFYZ6H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGyOwSMXkcUWen0C2Im15R0kk5Fwgl8swTsDrsY%2B8tjUAiEAroagmGZh%2BxEdmq8v11vj15Bs2pJkQOYmTptaHLijoakq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLK7i3KcGaicGephLircA8Fnheeo8PqBsTKY69de%2BLEF9%2BzdwxoxAdtsRS4tMadq6KBm45MJ0XNVzAiMA9PC4z4tyZ40nQBV9%2FXIfl6tJwwIt80Qe%2B3%2Flw4%2F9fyHdDWBAUMJM5wTRIAYRVBX%2BAROHeRY2Baw8Ql9dTucRztuW0mGSfYh6FyPNeoFtOCeImO4hoGmKFS0o6c09tFoQEBAYUyZeHr8mr2KNYQnA23Iaog6V8o3gj3uSbgg5DBcqwqyHH3NKNztKuQgqx9pSL672L%2BmiV%2B3Sav9z%2BqdtQYgVbD5TqcxkN8zNPqzTQ7I%2Bks7%2BtgbjectBzpds33hjtoBS0vI9hTwGJJQwqvyUN1fpCQJtBR4h60XffPT5RK5eoNasn9NDcyLXMNT1oGTg7YNqnL%2BATmqKQP9tni75Y1CoN7atZrXOS0cCktkWlktgieGXrOqBy4U8X39Pm5plhTM3aI60Hi5IdFKlMhznt%2Fs9QIY0B4oZeMMMFYN4hdFI33KDfNdXxfsdB99smWHvja10HatypZzAKPkPNU9YfCACWD3MYVpTBME%2B2p1m2l4pft4xeiSuR7td%2FZagvU%2FfOFC0VEfBS1n8A2BAqgIVJlWp0YqfkoTgTTKYFvDv9UKfwdCb0GiPLrTJqUYgLygMOmTwMkGOqUBFMN4DR6kiwxiG7L9EjVirNw2hmC5LZDQ4v7%2BPX4wAfm7QAG%2FWqgIfyNicCGpUzRtjarsMyCcLchJDHOgtKCydxVGesfvbhOsXEC9tHkNZ4I3%2F17i%2BYc0KTyljsB2ySOVlVE3fDVsrDclS1qh165SUQKMNqhsjSukQSxQu9wHWFQLAfBUHQroe4r7KB0%2F8Tobh0ZdsPsQidEsVUNtPwKJegTZvdKf&X-Amz-Signature=f5ad6807917aa550fe03189db061cad7ffdef7610dc482d48217fa6fa9317887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

