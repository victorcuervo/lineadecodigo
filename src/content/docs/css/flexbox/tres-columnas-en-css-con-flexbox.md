---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GAHBGB3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPGIFv%2BEfdD7BHvkkoB3dfZgySyp6ZlfBB3HTSxOTLBwIhAJApgt%2FwFBgl3Gv5%2FY1H4XvKMy%2B1OzfoPhou%2BmeQAi9%2FKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJDMkVQANOIjAa7hgq3ANySB8mco0J%2BgyNFQWw1p%2B13DltEug2eRE6NQALUc3wTR2%2B25XradPce34gIr%2FgSY8aN4DPFgqCcOTseKtlcPZsJ%2Bcq38ndk7NrRGSvKkPkIpR2%2BLSMXi%2FfW3LKh3rgZE5tlNWJkZG%2Fivb7FdZbJiXAU3bQmfHIM0lFAR6q2YWNcsWFjEu1S%2F6XroNIshikEFFtvTtc8Ou86AgHdNvK0PER1VbmMbZb5hn8sm0tGQkls9bqKxQ6P5HTHT5DRZz%2BLq6dRQEOusS87Z7sSBZWdzQbpZ2hCDY%2BHTBpWbM9kgENky6Dn1Um0%2FkMQuGqgDxlJ2k8q5zYvVm0E26Dx52hhzfObMNWZQAR3XmjrGXCWlvugb5WLKRM8eLOIIxglmpF%2FtT3cv3MoSgwePCzCEYZzsZfqYDiPgowroT5GTNrd3rDphYjSKEIM%2BBVF15c3%2FiJsalxPuTtnEsxEl2KdXb6at6QQtJSVA6MthLdRjPC3gpsLO%2Flzlk5MNqLcXJFN8fiEC9dyE3P9eYxUS%2BgTtDHJKOKksX8wK2qKMH40%2FgGYvwEAy1kH8lld5gKyKIgQFI8HC9AVvm2IxMLasjwHMBw78bRgMzh0mdRL4FK2fyGeJRoeFviE5KopmNX23wQ3DCTgN3JBjqkAcJb0q5VAAUTa3Qe1eDs6u%2F3gSQh3Y7eJzMC8VZB4hjZTmPUwGrWMIracrVY3TJqCxTDqL44DDOqt%2B8VdmuNZwv5DZPgZuT48tsBIDKb0lP%2B5MMYh1e2%2BvHnnSo%2FmjT8AD4Q6fPRBNguDSwKRzs8PZT0A8GeVV0DUxr3FAVgChATTjIC9gObz%2FhCafIdTUlI1Rja1Yo6xWbQjjlDll09HFIgozJD&X-Amz-Signature=4e7139a22d210b54b26da61cc16909b43758fe4b92072efe1ae13ae2c091cc1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GAHBGB3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPGIFv%2BEfdD7BHvkkoB3dfZgySyp6ZlfBB3HTSxOTLBwIhAJApgt%2FwFBgl3Gv5%2FY1H4XvKMy%2B1OzfoPhou%2BmeQAi9%2FKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJDMkVQANOIjAa7hgq3ANySB8mco0J%2BgyNFQWw1p%2B13DltEug2eRE6NQALUc3wTR2%2B25XradPce34gIr%2FgSY8aN4DPFgqCcOTseKtlcPZsJ%2Bcq38ndk7NrRGSvKkPkIpR2%2BLSMXi%2FfW3LKh3rgZE5tlNWJkZG%2Fivb7FdZbJiXAU3bQmfHIM0lFAR6q2YWNcsWFjEu1S%2F6XroNIshikEFFtvTtc8Ou86AgHdNvK0PER1VbmMbZb5hn8sm0tGQkls9bqKxQ6P5HTHT5DRZz%2BLq6dRQEOusS87Z7sSBZWdzQbpZ2hCDY%2BHTBpWbM9kgENky6Dn1Um0%2FkMQuGqgDxlJ2k8q5zYvVm0E26Dx52hhzfObMNWZQAR3XmjrGXCWlvugb5WLKRM8eLOIIxglmpF%2FtT3cv3MoSgwePCzCEYZzsZfqYDiPgowroT5GTNrd3rDphYjSKEIM%2BBVF15c3%2FiJsalxPuTtnEsxEl2KdXb6at6QQtJSVA6MthLdRjPC3gpsLO%2Flzlk5MNqLcXJFN8fiEC9dyE3P9eYxUS%2BgTtDHJKOKksX8wK2qKMH40%2FgGYvwEAy1kH8lld5gKyKIgQFI8HC9AVvm2IxMLasjwHMBw78bRgMzh0mdRL4FK2fyGeJRoeFviE5KopmNX23wQ3DCTgN3JBjqkAcJb0q5VAAUTa3Qe1eDs6u%2F3gSQh3Y7eJzMC8VZB4hjZTmPUwGrWMIracrVY3TJqCxTDqL44DDOqt%2B8VdmuNZwv5DZPgZuT48tsBIDKb0lP%2B5MMYh1e2%2BvHnnSo%2FmjT8AD4Q6fPRBNguDSwKRzs8PZT0A8GeVV0DUxr3FAVgChATTjIC9gObz%2FhCafIdTUlI1Rja1Yo6xWbQjjlDll09HFIgozJD&X-Amz-Signature=852e8af7d49c4350311960701250bff51c88482300c4a9ede316c6d8e37c639d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

