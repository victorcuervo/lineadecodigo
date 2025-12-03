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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DZAD64F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC4nq%2B8NrTcSCeFiNArpufFUhOO56IbLUgJjeJXLtw6QQIgKpfgNdS%2BSW6aMDIq1Kj9vYLyjKenosCTtXxWJLzBoxYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGUqzjFCqL7%2FmvjcBCrcA01H2kpQHIfS2sBEb5LuYLy5VYJyQuRkXOxb2DJBpYw5Tef7Jkf7BhXQQqfJVwxr6LvO7CVP%2FJg8bhh79F7dhnLgmuSsZkXsOADlRgq9iE6dtSJxAvOFdrf9xTOc%2FOXSOHto2OFaWl%2BEFFFVDeAhL71jW6vsEVpq%2Fm6DkiOMNvTVPh%2FoBJoqksFZ4Oj56GaK1%2B6S7icyjSz1EZPuphzUwBA%2BpYFToZ%2BTp89iU0tm5%2BjuwSAhclMSRJHNQla2FV3pPv%2F4fJH3KAo5hVcWWchMPfENB5Ez8VvxvQh8rw0np1MFkjzvw5xiey%2FNVOCaCFrhAVVTWquXxOTpNMJB%2F3Wuep70lh5x0R5v930ZZauemxhJefzX8FuWbv8G4%2FPBQBpw512tBBPIDILVfg2vnsZ02vEdu1Ax7RKrvPYNS6fX%2Bco%2BGzhtLsAi7eMre7G%2B6SQPgMTJy4v5PsmRFnSm%2BhjovTcrS8iTr%2BSH%2F7D96jDOijmbYG6iBHVc2DDBCNzYsDqGcZ9odgBQtQxbsCweuSthgpi%2FJ7%2BfFIhmDbQrjdSYtdCOf%2BHbH6DEbXr56aCOlCa5x%2BnTZ0rBRFjKpKGctV02CFdSMSq6%2FT6%2BD%2BYbT%2BtKyb8zQYRpfgegGg7hYHypMIXbwckGOqUBoyEUh0ryuSH92X5HjemEbvk29RBmNU5Vw1tyUsac6ylr%2Fld8y0onQ54RMqouXhOdTIIh%2BR%2BM6XjP6kD6T6N7RDTGeSNeVbKQcLlPbm7Rx5pEKCfiNYqwdEFZ8wCS9GSpqH3QR%2FSL%2Bkr5AHKQg6RmelmvnPce4XBwo6eyS0HN0mVOUJnoUGuY2fb1Q1UqU7gbv8bjVsE71PZWYhKpN0aSw38EKivt&X-Amz-Signature=a4698fe61c7ab715282d0cb5242d57df12d3f53fae289639de699ec1aaf9c938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DZAD64F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC4nq%2B8NrTcSCeFiNArpufFUhOO56IbLUgJjeJXLtw6QQIgKpfgNdS%2BSW6aMDIq1Kj9vYLyjKenosCTtXxWJLzBoxYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGUqzjFCqL7%2FmvjcBCrcA01H2kpQHIfS2sBEb5LuYLy5VYJyQuRkXOxb2DJBpYw5Tef7Jkf7BhXQQqfJVwxr6LvO7CVP%2FJg8bhh79F7dhnLgmuSsZkXsOADlRgq9iE6dtSJxAvOFdrf9xTOc%2FOXSOHto2OFaWl%2BEFFFVDeAhL71jW6vsEVpq%2Fm6DkiOMNvTVPh%2FoBJoqksFZ4Oj56GaK1%2B6S7icyjSz1EZPuphzUwBA%2BpYFToZ%2BTp89iU0tm5%2BjuwSAhclMSRJHNQla2FV3pPv%2F4fJH3KAo5hVcWWchMPfENB5Ez8VvxvQh8rw0np1MFkjzvw5xiey%2FNVOCaCFrhAVVTWquXxOTpNMJB%2F3Wuep70lh5x0R5v930ZZauemxhJefzX8FuWbv8G4%2FPBQBpw512tBBPIDILVfg2vnsZ02vEdu1Ax7RKrvPYNS6fX%2Bco%2BGzhtLsAi7eMre7G%2B6SQPgMTJy4v5PsmRFnSm%2BhjovTcrS8iTr%2BSH%2F7D96jDOijmbYG6iBHVc2DDBCNzYsDqGcZ9odgBQtQxbsCweuSthgpi%2FJ7%2BfFIhmDbQrjdSYtdCOf%2BHbH6DEbXr56aCOlCa5x%2BnTZ0rBRFjKpKGctV02CFdSMSq6%2FT6%2BD%2BYbT%2BtKyb8zQYRpfgegGg7hYHypMIXbwckGOqUBoyEUh0ryuSH92X5HjemEbvk29RBmNU5Vw1tyUsac6ylr%2Fld8y0onQ54RMqouXhOdTIIh%2BR%2BM6XjP6kD6T6N7RDTGeSNeVbKQcLlPbm7Rx5pEKCfiNYqwdEFZ8wCS9GSpqH3QR%2FSL%2Bkr5AHKQg6RmelmvnPce4XBwo6eyS0HN0mVOUJnoUGuY2fb1Q1UqU7gbv8bjVsE71PZWYhKpN0aSw38EKivt&X-Amz-Signature=8e5bafc096b6346b3652d0f3aae293d0092f1f2281b59660ff6efb530f7071eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

