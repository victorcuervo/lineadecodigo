---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3TUPE2C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIW08MeagHt4r%2BDhpgVNDPFmlHSGhE%2BbXgZilSBrgrawIgb0Hbx3kEcH91I0slp%2Ftg6VLUUDO1y2mueErAFFB%2Fapgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEoFQawBh%2BeGqdLbTyrcA4wARWhvI%2FYjUpNabplZp%2FJ%2B1L3Op9HoSRiONxqDcCYJFFKefu709yjBbSTC9r9oi%2BecY%2BJ9Z6pKxPkW09CKfY55rlzzlTRx3qkTjuoOY4bT%2Fr%2B%2B84X5nwAEiTxjHgIsjfKjwlNOlnAXuVy2kbFUB1lM1%2FDNRhLOFszx3llxfp2crtzDJgcXid77bKoEwlYqQc3nj9Gv1s4zJDi%2FLxRNkfXF0giRSoT6qQ7J9lf5YsDtfBqy950NPuxgD2KWomhPIs4A5wKF5y6bf346QXctiM%2FqMBtzAj7j6VIWG4yCTU8gh5K0spVcsiV%2F9OSRVKWnW175xJQNPBKXKIB7YAGfqAZ0WIuIesVCTDrJ9oJLB%2FSkdr4cSvODTiPaDrMHdqr3iG8mTLl641G6MvajTLqe%2F3SGoNqtIsquvBNUGymqnXbqmKXEg6pZgs9xud3jfuH9I%2B97t8ep1KIK8rz7%2Bw0XD%2Bw4E%2BwSl%2BZ4x1jhBuUfW61NnxlQj3VLezExRZY3MQpLZS5ccJY5gPNDS0WbK0sGjIQEUT2E65wD0R1s7XHRtkZN7ubL5Z3y7hnWKrdvRBsrOolFIwtNgv3HikIVHF2omvxc6TeGOThO9e61zfYSlnewFft5qLVEYFcGdvUTMNSMyMkGOqUBh1eHIzKiWS%2BvdeMKzSG7OCol%2BV8QreD0VunhRi6wqXgrcYS9rVEcOZnwHlcHY41hg5gTgYmnkCI3eAD67oyiCxBmMuZOO5trBg2MLPDNhNIrI9sELwy8krnVd1K2PK4h0EuMbtvvyMby6IME60fqP71hADFFBP77AJjOTzQ7E74JSR9RmPDVGmwUisxRrH55W2gkjllcG1WjjaZmbVMB2sr%2FJtOM&X-Amz-Signature=6e45b83edd92cf8c2d05413da78b36bf68358d268173009d5e473157b5a79b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3TUPE2C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIW08MeagHt4r%2BDhpgVNDPFmlHSGhE%2BbXgZilSBrgrawIgb0Hbx3kEcH91I0slp%2Ftg6VLUUDO1y2mueErAFFB%2Fapgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEoFQawBh%2BeGqdLbTyrcA4wARWhvI%2FYjUpNabplZp%2FJ%2B1L3Op9HoSRiONxqDcCYJFFKefu709yjBbSTC9r9oi%2BecY%2BJ9Z6pKxPkW09CKfY55rlzzlTRx3qkTjuoOY4bT%2Fr%2B%2B84X5nwAEiTxjHgIsjfKjwlNOlnAXuVy2kbFUB1lM1%2FDNRhLOFszx3llxfp2crtzDJgcXid77bKoEwlYqQc3nj9Gv1s4zJDi%2FLxRNkfXF0giRSoT6qQ7J9lf5YsDtfBqy950NPuxgD2KWomhPIs4A5wKF5y6bf346QXctiM%2FqMBtzAj7j6VIWG4yCTU8gh5K0spVcsiV%2F9OSRVKWnW175xJQNPBKXKIB7YAGfqAZ0WIuIesVCTDrJ9oJLB%2FSkdr4cSvODTiPaDrMHdqr3iG8mTLl641G6MvajTLqe%2F3SGoNqtIsquvBNUGymqnXbqmKXEg6pZgs9xud3jfuH9I%2B97t8ep1KIK8rz7%2Bw0XD%2Bw4E%2BwSl%2BZ4x1jhBuUfW61NnxlQj3VLezExRZY3MQpLZS5ccJY5gPNDS0WbK0sGjIQEUT2E65wD0R1s7XHRtkZN7ubL5Z3y7hnWKrdvRBsrOolFIwtNgv3HikIVHF2omvxc6TeGOThO9e61zfYSlnewFft5qLVEYFcGdvUTMNSMyMkGOqUBh1eHIzKiWS%2BvdeMKzSG7OCol%2BV8QreD0VunhRi6wqXgrcYS9rVEcOZnwHlcHY41hg5gTgYmnkCI3eAD67oyiCxBmMuZOO5trBg2MLPDNhNIrI9sELwy8krnVd1K2PK4h0EuMbtvvyMby6IME60fqP71hADFFBP77AJjOTzQ7E74JSR9RmPDVGmwUisxRrH55W2gkjllcG1WjjaZmbVMB2sr%2FJtOM&X-Amz-Signature=1c40864699215fd53bb93b832e2171742b283b5574ccc795ce08391adede211e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

