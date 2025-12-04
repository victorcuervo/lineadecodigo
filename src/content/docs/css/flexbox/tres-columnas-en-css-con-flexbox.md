---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M4DCKJV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHUOIXvrkMKWgNpPTtul0Gdapa2nazDOYKxjCf%2BS6bdiAiAgacCWoh2nCMOaJzMflBM0z%2FJuS3wKbrtc4x8bxPDU7Cr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMoBymP07%2FTs%2FUEK6BKtwDAp4LNCEHCuAFJiftd%2BYhQDr9ncOdNRBkrdxNwcYWMGe7EMyByfpMPgte5wCnG9RgnxBTB5vjZRa73t3vVQ7r8579v5esFmJ6uz2V0sXQ17RjbxE2mAs%2Fdl34YD%2BHyNFNBEQGWapqEMn%2F%2FAa9HmIoGxZ4gi2BB0IhrzJOj06NL%2B0oXocpN2qzggnaeDGZlPKS2OjpJ0WuwDc8KrOygls25i5qQsE2juh%2B1A%2F0uX%2FUkWEWix2thHRvoqIBKsums5kKJBhvwj5Y1ZHQRUbCNdcNf51RjSbkWrXV1fhhUJn2RSDKgPQbsBXgKxb4eGLIikbGCLJbIkJlgmNjSh2mottcXEOx5F%2FYYvnRWiXqWVgucefB1b9pMI6eIpwzG%2BVQlHyBUCtxiqC%2FIDe3CG4Qcprg0PO0BjAGCm95hGwZPsGeONdVG3xRJn0jD%2BrZ%2BcYX%2BK7E1LXHP%2BFYUZedzXyHJ9Ljj33xYx3eNh1bjwFmlwltiPZVWX%2B7MP6EtQn7dP%2B4h6Zy9VNh0q7xp1snrGY6wZIhkCUP%2BUXrkdaPk977RWtPVEdE%2FsrqekUMQXgpdAT6KxxOnPcPbOAduAl32i0ejJ6IpiNKrqhn8Fc3TyzieLeCxQEgkfzHBDKZUkbW0Zown7XDyQY6pgFzRz78sUJ3UMrbjkMYSzvta7vuxUdJKG%2FneRAPCwLYSlvaP0afS42ny5LHdrWgI4vyOIxOE3XJ%2B0VJGCcNho1pykpVXWFbXj%2B0GrzpWqEYgqE96YRyABZ8sB7kQ4iNqPthYcubNFR8TvC4Ac9vpQuW7%2FnZH69HZUxi2gOl9W1oEitMzYNeyP3xzLmx4DfAI6yLk0xQRnpuVyJh%2BHHUwZYGZ4fahVRg&X-Amz-Signature=a6de42757025665518ea1b6abd7ca19e7ceb0bdb2ce51530d50e0ca0895eeee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M4DCKJV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T013810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHUOIXvrkMKWgNpPTtul0Gdapa2nazDOYKxjCf%2BS6bdiAiAgacCWoh2nCMOaJzMflBM0z%2FJuS3wKbrtc4x8bxPDU7Cr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMoBymP07%2FTs%2FUEK6BKtwDAp4LNCEHCuAFJiftd%2BYhQDr9ncOdNRBkrdxNwcYWMGe7EMyByfpMPgte5wCnG9RgnxBTB5vjZRa73t3vVQ7r8579v5esFmJ6uz2V0sXQ17RjbxE2mAs%2Fdl34YD%2BHyNFNBEQGWapqEMn%2F%2FAa9HmIoGxZ4gi2BB0IhrzJOj06NL%2B0oXocpN2qzggnaeDGZlPKS2OjpJ0WuwDc8KrOygls25i5qQsE2juh%2B1A%2F0uX%2FUkWEWix2thHRvoqIBKsums5kKJBhvwj5Y1ZHQRUbCNdcNf51RjSbkWrXV1fhhUJn2RSDKgPQbsBXgKxb4eGLIikbGCLJbIkJlgmNjSh2mottcXEOx5F%2FYYvnRWiXqWVgucefB1b9pMI6eIpwzG%2BVQlHyBUCtxiqC%2FIDe3CG4Qcprg0PO0BjAGCm95hGwZPsGeONdVG3xRJn0jD%2BrZ%2BcYX%2BK7E1LXHP%2BFYUZedzXyHJ9Ljj33xYx3eNh1bjwFmlwltiPZVWX%2B7MP6EtQn7dP%2B4h6Zy9VNh0q7xp1snrGY6wZIhkCUP%2BUXrkdaPk977RWtPVEdE%2FsrqekUMQXgpdAT6KxxOnPcPbOAduAl32i0ejJ6IpiNKrqhn8Fc3TyzieLeCxQEgkfzHBDKZUkbW0Zown7XDyQY6pgFzRz78sUJ3UMrbjkMYSzvta7vuxUdJKG%2FneRAPCwLYSlvaP0afS42ny5LHdrWgI4vyOIxOE3XJ%2B0VJGCcNho1pykpVXWFbXj%2B0GrzpWqEYgqE96YRyABZ8sB7kQ4iNqPthYcubNFR8TvC4Ac9vpQuW7%2FnZH69HZUxi2gOl9W1oEitMzYNeyP3xzLmx4DfAI6yLk0xQRnpuVyJh%2BHHUwZYGZ4fahVRg&X-Amz-Signature=885a7bfbdd11c7a0d3a06a349e5ffc0a59f0eac642d4c60372f1afb25b8ce802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

