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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZTVT35O%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDYd9GMdD6OmWTEb4NSqctr9jXcZX%2BIWdhznMA9RAUVFAIhAOBmAVof5cMnrgaKOoVTs1%2FO28nwv9kzrBkDcpiXHm2GKv8DCC8QABoMNjM3NDIzMTgzODA1IgyABHeyK%2FWr1MfvP8Aq3AOJny4zltBeDMIUExWwxHGDejQ03AEaUpM8%2B6CK0Q0mmymmm%2B2XDcQ7DNmpWH0yUcdwWzQSULgC%2BChZth3OTNXX4LiCXKgaKgnz4DHwzaigHbtBOJnkBCiVc8BZBfDZ2%2BGwdZLYIwa5FzDPK1qgmrTiBq%2Br63eWpcvMgr818Rw0noHtiib%2F3O5UUWLpfIESGKXCN0zHqM8vLAbb642p2IVQE%2F3ldtvuIbc3f0IjKTP2SK2qarWG5ZMKCz8zAOKWxtQ0NZMN7CPHQw7KBdjItmRFknvemSgOchMGrmkxRx%2B4DtSgvKklVZuzlft3qY3lJ3ye0Sdss6TxZvzEDmCODqKnB3sA2m2LOIeI6MpxwmsWsGv%2FJglMbLQLaZ%2Bjw%2F%2FLFZvXSW%2FH%2BmHSpQ3CUgPv6to5gjEkqyfJ8FqMPtPyr448P8qTUyAUJSP0N1BNU10wKPuoK1vzUL197o9pX%2BmNgbel%2B721qn9YKUTXzbZ9Hk8Xtds8I3Ne01LzKAGocL9u2rkMJVbgAXZQANpiUlJ9q4RKSqdR5%2FJfitMQmL3ibqwT4MyXCtl6jTgYRpHEib5CjakE9GQCJjbH9Xkr%2FZ1Mil5mj9YBcG8YJOQMtUf1kspfszXuKrjxdzv5cL7ZqzCah8HJBjqkAcafnOGc12QQ2Hyn66BRqyCYY6lROWYk65Vc06yM0btOe19XRsguZRRYNWBuvnVFZgPQmVvk87KrzOaGVHcX%2Fkjf1zvIq0SIVyQD6vgLRsfVrPpXIf3Lo6Hfd4WH3munQR7EaUcHKwRHVB2ImBOWjoKw0vG72doRoP0em%2F9VzEyCzR1XLOn%2B2BxrMmJYBwm5fy%2Bk9L9qI1AXF9HuomIMugUXGjNQ&X-Amz-Signature=39030f1c1204d7660cdcd6742811e98efe3df90a1af34011ce5bffa4e95d2d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZTVT35O%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDYd9GMdD6OmWTEb4NSqctr9jXcZX%2BIWdhznMA9RAUVFAIhAOBmAVof5cMnrgaKOoVTs1%2FO28nwv9kzrBkDcpiXHm2GKv8DCC8QABoMNjM3NDIzMTgzODA1IgyABHeyK%2FWr1MfvP8Aq3AOJny4zltBeDMIUExWwxHGDejQ03AEaUpM8%2B6CK0Q0mmymmm%2B2XDcQ7DNmpWH0yUcdwWzQSULgC%2BChZth3OTNXX4LiCXKgaKgnz4DHwzaigHbtBOJnkBCiVc8BZBfDZ2%2BGwdZLYIwa5FzDPK1qgmrTiBq%2Br63eWpcvMgr818Rw0noHtiib%2F3O5UUWLpfIESGKXCN0zHqM8vLAbb642p2IVQE%2F3ldtvuIbc3f0IjKTP2SK2qarWG5ZMKCz8zAOKWxtQ0NZMN7CPHQw7KBdjItmRFknvemSgOchMGrmkxRx%2B4DtSgvKklVZuzlft3qY3lJ3ye0Sdss6TxZvzEDmCODqKnB3sA2m2LOIeI6MpxwmsWsGv%2FJglMbLQLaZ%2Bjw%2F%2FLFZvXSW%2FH%2BmHSpQ3CUgPv6to5gjEkqyfJ8FqMPtPyr448P8qTUyAUJSP0N1BNU10wKPuoK1vzUL197o9pX%2BmNgbel%2B721qn9YKUTXzbZ9Hk8Xtds8I3Ne01LzKAGocL9u2rkMJVbgAXZQANpiUlJ9q4RKSqdR5%2FJfitMQmL3ibqwT4MyXCtl6jTgYRpHEib5CjakE9GQCJjbH9Xkr%2FZ1Mil5mj9YBcG8YJOQMtUf1kspfszXuKrjxdzv5cL7ZqzCah8HJBjqkAcafnOGc12QQ2Hyn66BRqyCYY6lROWYk65Vc06yM0btOe19XRsguZRRYNWBuvnVFZgPQmVvk87KrzOaGVHcX%2Fkjf1zvIq0SIVyQD6vgLRsfVrPpXIf3Lo6Hfd4WH3munQR7EaUcHKwRHVB2ImBOWjoKw0vG72doRoP0em%2F9VzEyCzR1XLOn%2B2BxrMmJYBwm5fy%2Bk9L9qI1AXF9HuomIMugUXGjNQ&X-Amz-Signature=c1c00ec1be3cb7fcc57c50adfaf86e7174c1f430d57e698939276e5ee61418f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

