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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DRFLK25%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCjWol2tD9F32Gsz03braNJX%2BMHeT8YQ9LwktaJbAPD%2FgIhAMsaYZiwOUg4t4MFPxnz83DtfkPpQNoyvL6YY3RQmyBTKv8DCCIQABoMNjM3NDIzMTgzODA1IgyQDDDSXYzthwlUU0wq3AMcKJ%2FPIamtgYBDOiJOkwqFNdYBgOCKUoSse00AlX6q%2FwWG5QUfYRkBqcoJpZ274thZmll%2BlIoIEs6Ntd7pJVWZBGMHplzRI7DgshyZOtRLMNVkjA3WnuuygNIs51VTxeYnF6B8J94jNk68LVoqVtg8lrTj4CuDixAQVjxLaQTKb3l8sDh1H64d4voqIWGjTqbjUhs1gqUcH2PK60U8HCbh%2F6xbWTpLA%2B5dai17X94w05SA5a2yt0OuNlh87fn9VwPlUlWzd9fW6Vpgg9higcJJQRDk7FnOALJdRP3GxovBpdS%2BwIXxpVrDANBiSLYwjEKMVX4b%2B%2BhjOd15wq%2Frl7xf9sLWIhGOdH9IqWCUEpJMerJS6f2JXUdio1rv7%2FZWGJWCYuIipWqDNfUIwUgfi1LeXsrwuUY5XST6bbpzAoB%2B%2Fm3%2FwQIBtTRLfGQLRcYgt3HN8IgwmQkyuG9akEZdJXpXCbGRHHfjCGOIPYgSjdigBZ91eiPLWAuf831XsFZHUKxDra810WWUT43Ik0Pj%2Bv8fm7THUwuBsd6P3ioE%2BfGireFb0QWR8yWSmKXt1Pyv8FBP33pXd1yjiSURa5VbCXxRXaV%2FU%2FjtubvSvHSTvsfvQJW7MZzs3zP%2BtXHeCTCllr7JBjqkAZdh%2FrbGodnhMEH4bw0JikBB2w7nOvRhP%2BvR9IayvKxTErkvQRSNk79XH9U6EI9sn%2FDTHsx%2FqAshGtHf%2FNQYHEZmH6qPZMVhDmK3iA5%2F28%2F9BK68h5ZhYnfgdVQej5cVCWGnRA0Gbb008Ga4jfRa3R4d8Zdu91sK52t2PK8i4zKSFoiRARQHOxV9hwfnzwY4YgPvG82IAkDucdi81uIVDTpvf6Io&X-Amz-Signature=329f8d6402ed1bfeb796364eeca7ff60b5bf46d205e172e90f791fb143ad58cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DRFLK25%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCjWol2tD9F32Gsz03braNJX%2BMHeT8YQ9LwktaJbAPD%2FgIhAMsaYZiwOUg4t4MFPxnz83DtfkPpQNoyvL6YY3RQmyBTKv8DCCIQABoMNjM3NDIzMTgzODA1IgyQDDDSXYzthwlUU0wq3AMcKJ%2FPIamtgYBDOiJOkwqFNdYBgOCKUoSse00AlX6q%2FwWG5QUfYRkBqcoJpZ274thZmll%2BlIoIEs6Ntd7pJVWZBGMHplzRI7DgshyZOtRLMNVkjA3WnuuygNIs51VTxeYnF6B8J94jNk68LVoqVtg8lrTj4CuDixAQVjxLaQTKb3l8sDh1H64d4voqIWGjTqbjUhs1gqUcH2PK60U8HCbh%2F6xbWTpLA%2B5dai17X94w05SA5a2yt0OuNlh87fn9VwPlUlWzd9fW6Vpgg9higcJJQRDk7FnOALJdRP3GxovBpdS%2BwIXxpVrDANBiSLYwjEKMVX4b%2B%2BhjOd15wq%2Frl7xf9sLWIhGOdH9IqWCUEpJMerJS6f2JXUdio1rv7%2FZWGJWCYuIipWqDNfUIwUgfi1LeXsrwuUY5XST6bbpzAoB%2B%2Fm3%2FwQIBtTRLfGQLRcYgt3HN8IgwmQkyuG9akEZdJXpXCbGRHHfjCGOIPYgSjdigBZ91eiPLWAuf831XsFZHUKxDra810WWUT43Ik0Pj%2Bv8fm7THUwuBsd6P3ioE%2BfGireFb0QWR8yWSmKXt1Pyv8FBP33pXd1yjiSURa5VbCXxRXaV%2FU%2FjtubvSvHSTvsfvQJW7MZzs3zP%2BtXHeCTCllr7JBjqkAZdh%2FrbGodnhMEH4bw0JikBB2w7nOvRhP%2BvR9IayvKxTErkvQRSNk79XH9U6EI9sn%2FDTHsx%2FqAshGtHf%2FNQYHEZmH6qPZMVhDmK3iA5%2F28%2F9BK68h5ZhYnfgdVQej5cVCWGnRA0Gbb008Ga4jfRa3R4d8Zdu91sK52t2PK8i4zKSFoiRARQHOxV9hwfnzwY4YgPvG82IAkDucdi81uIVDTpvf6Io&X-Amz-Signature=02356bddd864c9164a638fa802e6d74874afbcdc3201d8a9af52d5126545920c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

