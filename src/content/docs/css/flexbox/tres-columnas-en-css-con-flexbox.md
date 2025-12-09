---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3WAGQ4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD45YmGyFWrWUlJfDRr7nBjSXcwbJnwYlUYI%2F1OJZ8N4AIgegIoVsN2ElK%2BPxJ1CPrbUy3hOnIMVjmaKGn3AG%2FxgnUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQYCqLEUxNTxLgG8SrcAxC9E7cBx5%2BpF213RqEjBiUbfkNYRIzkJLLYUMimbxOnBWmt%2B03KMXUy%2BukP4gfSA1Xcmal%2FnKVucVyvm2BsP2hmsr%2FSuHUQhXQ6diRymUFtPQWqaXaQuHqXaxGki8AuHrx%2FVEMEbf7y9XHCNJz1m%2BNrW33S%2BkF1uUQ4fnOltFVSwuhcYAD8GxkmZ2SwtKvKrGz58Q8iQPPgtsMjWln9i%2BBLCEZ52ctAcxrPl9S3D44sRsizHgvQLGoCiDwfOK%2BpqWkG8bDREwFlifTTzM1KFGH9Kl2K%2BVD8UDKU%2F3Hw2P0mbIlZjH0GPBH9CVchZ4rnh0Lj79Lk5HEVDX0Q%2Bk%2BXnSvO6Y%2BEqTtL5RJq%2FY01G3I66tZ6C2uBfsD432Y0AiCLfVvIktS0UPUGysCpyYo5RPmDiEo6VHNZgzn%2FZAsP3oijmMKI9COgMVF9sN6%2B1a2cySPG8Ct%2FJ%2F7QYUK%2FmzicL0AXcpb3G5%2B6notiqzBnbOQqz%2FKyRFouwi%2Fyzaldh6PiBApPKOykgy8zmm7lYc4bMNrrRMuTgUVkeOScUHR53PSaRo7x76B8N5jrawYNx2A1VKX%2FxHJRH3qJxIqmAr1Cj1nmf8XYg9ocUnT1bvTcZ5vWx3MmRlKTKRh2pRZJMJzm3skGOqUBtCf%2Fon6zJbdpCw6mxqm8o7zfJ4lh0MfrGzWEuWfepB1mE0kvoRaEH%2Bly3XIWzh6v%2BoNkLDdi5h1Vh5RFc%2BtxQIlQ7cff9fQREZEyTtvzhC8EzKZjof6pr2a4PdAlhUZqAuXU1NbxktNvl3iCm9e0kyM6hA%2B72kXuNH0RSuU7vzs7GkcXdJFtFAYUPJ7vCl2FT6mR4jzVSQNZ3PI%2FBFNdvPF3Sju5&X-Amz-Signature=2a49cbc5bc4a0d03ade5420089c14ef7bec3d6d354d08b9b8efb899e1a25ecb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI3WAGQ4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD45YmGyFWrWUlJfDRr7nBjSXcwbJnwYlUYI%2F1OJZ8N4AIgegIoVsN2ElK%2BPxJ1CPrbUy3hOnIMVjmaKGn3AG%2FxgnUqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNQYCqLEUxNTxLgG8SrcAxC9E7cBx5%2BpF213RqEjBiUbfkNYRIzkJLLYUMimbxOnBWmt%2B03KMXUy%2BukP4gfSA1Xcmal%2FnKVucVyvm2BsP2hmsr%2FSuHUQhXQ6diRymUFtPQWqaXaQuHqXaxGki8AuHrx%2FVEMEbf7y9XHCNJz1m%2BNrW33S%2BkF1uUQ4fnOltFVSwuhcYAD8GxkmZ2SwtKvKrGz58Q8iQPPgtsMjWln9i%2BBLCEZ52ctAcxrPl9S3D44sRsizHgvQLGoCiDwfOK%2BpqWkG8bDREwFlifTTzM1KFGH9Kl2K%2BVD8UDKU%2F3Hw2P0mbIlZjH0GPBH9CVchZ4rnh0Lj79Lk5HEVDX0Q%2Bk%2BXnSvO6Y%2BEqTtL5RJq%2FY01G3I66tZ6C2uBfsD432Y0AiCLfVvIktS0UPUGysCpyYo5RPmDiEo6VHNZgzn%2FZAsP3oijmMKI9COgMVF9sN6%2B1a2cySPG8Ct%2FJ%2F7QYUK%2FmzicL0AXcpb3G5%2B6notiqzBnbOQqz%2FKyRFouwi%2Fyzaldh6PiBApPKOykgy8zmm7lYc4bMNrrRMuTgUVkeOScUHR53PSaRo7x76B8N5jrawYNx2A1VKX%2FxHJRH3qJxIqmAr1Cj1nmf8XYg9ocUnT1bvTcZ5vWx3MmRlKTKRh2pRZJMJzm3skGOqUBtCf%2Fon6zJbdpCw6mxqm8o7zfJ4lh0MfrGzWEuWfepB1mE0kvoRaEH%2Bly3XIWzh6v%2BoNkLDdi5h1Vh5RFc%2BtxQIlQ7cff9fQREZEyTtvzhC8EzKZjof6pr2a4PdAlhUZqAuXU1NbxktNvl3iCm9e0kyM6hA%2B72kXuNH0RSuU7vzs7GkcXdJFtFAYUPJ7vCl2FT6mR4jzVSQNZ3PI%2FBFNdvPF3Sju5&X-Amz-Signature=422c3ffb3a593d618c79da319a3e54c4231e892853bd2c7cc0fb8cab0c0db824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

