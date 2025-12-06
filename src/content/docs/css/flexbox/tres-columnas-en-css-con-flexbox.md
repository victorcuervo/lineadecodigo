---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO5LKQBM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnYUETaJWxKQANcb7Jgj5%2F%2Bkx1E7Y7hmbfsopMfrCtUAiAxqs6j2KF%2F3HjxJaGsltAqZ9l1%2FW0iuxjevN3oPYt%2BpSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMRk%2BnZDv8q6dboB%2FfKtwD4x%2BMc8i9rVA9vbDd%2FePMTj9y0s8nmcG82VjzxCVp8dMRD46LKJax5DU5qM9I0l3P7OH4FNza9H8CYp8dyNDoBdeilnX3pu6Q%2B%2B3wqYp2XNhXVMWaTjHzntG9cvvIUmsxFEvX6iygylOeSuQXZOQDB85CgotDSH0Xi9mciUHAAEo64%2B5Bfrx2nqKtqm0vvUOPVq4j76Xd61S%2BbatpKOJSYlP%2FURj56qfGmyDRA%2BnU8ylR12tD9th0nQuEJOZ8I6okLCm3BFqoJXt3FIQNInDVKgsKMB9cYy5RD4SJJA7XZ6b1TaUtcPMOjvOfhzi%2FN2ge%2Fg2JiVfge2Oqkjuhsr6BztP%2Fli6dS8ZyEJrNDgxRUL%2FCGdbftafdXq9pakfxbXMIcHsFk1j6Yp5g4IeRcMeULu4AGmLrVRP9ZPTXrCTUACAhmzVtBD5%2FdBr5q8jhyJWIwqQr8pfVjQ8mk3AymBP9cHd%2FiZOVXNCJtOrxGuGX3x%2FYPNEafqy74uD6mT%2BhZl9%2B8hvefqyLxK6KCiNxFGmevsXurjLEpnBFKxFe4bi7BWhO2fLIXeXwb2Qp9LEkAldnXQKutEw7vnxCfsaGXfEvu%2F2y94byQ9H%2BGA1Cmv1ycQy0LSIxBP50ZOFH5rcwv8vRyQY6pgGkVnC6gpb9jSrUx7lM9sLdhJalRnuDqIQLwDSRHhURREZdJ7Yv9in42XtgkvWtrKJOQmBloRU7VuuisZjDODcz1YvQu1%2Bgt%2FMUK8L33c%2FVO6IT190%2FFRl3cmcemdBHRXD4fSDIqbCezEyls4xwRmADhzzNgappqsRaoJVqf5OdxqppNJZHn0fzBhkKtg%2B1kV47WTRD3Md6S9LyVN04OwPanV6OJuxP&X-Amz-Signature=a75e0475c7315d727d6f83fc38680e2e95626187fbc6b5ddfc3a693cfac5585e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UO5LKQBM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEnYUETaJWxKQANcb7Jgj5%2F%2Bkx1E7Y7hmbfsopMfrCtUAiAxqs6j2KF%2F3HjxJaGsltAqZ9l1%2FW0iuxjevN3oPYt%2BpSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMRk%2BnZDv8q6dboB%2FfKtwD4x%2BMc8i9rVA9vbDd%2FePMTj9y0s8nmcG82VjzxCVp8dMRD46LKJax5DU5qM9I0l3P7OH4FNza9H8CYp8dyNDoBdeilnX3pu6Q%2B%2B3wqYp2XNhXVMWaTjHzntG9cvvIUmsxFEvX6iygylOeSuQXZOQDB85CgotDSH0Xi9mciUHAAEo64%2B5Bfrx2nqKtqm0vvUOPVq4j76Xd61S%2BbatpKOJSYlP%2FURj56qfGmyDRA%2BnU8ylR12tD9th0nQuEJOZ8I6okLCm3BFqoJXt3FIQNInDVKgsKMB9cYy5RD4SJJA7XZ6b1TaUtcPMOjvOfhzi%2FN2ge%2Fg2JiVfge2Oqkjuhsr6BztP%2Fli6dS8ZyEJrNDgxRUL%2FCGdbftafdXq9pakfxbXMIcHsFk1j6Yp5g4IeRcMeULu4AGmLrVRP9ZPTXrCTUACAhmzVtBD5%2FdBr5q8jhyJWIwqQr8pfVjQ8mk3AymBP9cHd%2FiZOVXNCJtOrxGuGX3x%2FYPNEafqy74uD6mT%2BhZl9%2B8hvefqyLxK6KCiNxFGmevsXurjLEpnBFKxFe4bi7BWhO2fLIXeXwb2Qp9LEkAldnXQKutEw7vnxCfsaGXfEvu%2F2y94byQ9H%2BGA1Cmv1ycQy0LSIxBP50ZOFH5rcwv8vRyQY6pgGkVnC6gpb9jSrUx7lM9sLdhJalRnuDqIQLwDSRHhURREZdJ7Yv9in42XtgkvWtrKJOQmBloRU7VuuisZjDODcz1YvQu1%2Bgt%2FMUK8L33c%2FVO6IT190%2FFRl3cmcemdBHRXD4fSDIqbCezEyls4xwRmADhzzNgappqsRaoJVqf5OdxqppNJZHn0fzBhkKtg%2B1kV47WTRD3Md6S9LyVN04OwPanV6OJuxP&X-Amz-Signature=1c500cf519248cb2c51a02d22c7c14db69c9ddaa45731d84e98db5508fe27848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

