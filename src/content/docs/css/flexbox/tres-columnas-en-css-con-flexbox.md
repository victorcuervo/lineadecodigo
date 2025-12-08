---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAHPL2SK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbuBFJnlYITw2lCncD6c924SDYNOZf6UhNRCT%2FQQ782wIhAKK4tjjZDWCe31XQStlwB6yzDmVSbVQcuO0mG7ces4rAKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FddPtPBoBp5ppIR8q3AM3wVIVKh%2FREvUhT5ikbNrez844kiBk2smeDaH%2BKhlXzZAhxkT9AiyKyoqgD6uRdRGpQxDIhqGx1o2wVBKELTlA4nYMJ%2F52CU0CVNgsMAQAQcDS4ltRGINR55nFyB3NiWxK5u2IlPyevH%2B%2BZqApVaWreuBwTYSDiBxufDiISrGif0V6nLpl2Q4uWqCdKlOhAa0PwSxdzDP3kRK2DO1DBSGEaqbD63qh6XF6Q2mN21ss6CaMpMSZYLgeUAjAAqA057QStkP56%2BmuaZxLtyIzUdF4ImP5HIiC23%2BxGHcZTdaPcNrIZvQJXspkn5qC0zCyAvOWYZ16Lv2bdtod4BY0X5JG8keOjWWpRlGWRMJKDgJ%2BxQP5VmUDVdRVKxtaqg9FCVo7inPhZ6htnJr5Fz1G16k%2FRehM0dq3Ep%2FTiojQbsh5snZpmhnOyYDWnzvhgGY%2B8lttp%2FReROMLQzqwoF05b33AgxOc%2BImgJD3GyngCe2pO%2FYPhrM1bpK%2FZ0KetxVx64bf9CLJNOPyJlimr3euy7%2FoGhSz9qWp%2FGX1wlAUVV0aTrcnLCVYzeIk8r67%2F5tIZdSjnQ5aayoEK3bjjViZTC%2FaZmf1m9r750lSQ7VPjdrbY40OBr%2FZj9ZoTTFDVdDDU7dnJBjqkAXVJW1MCcGU5jXrUXn5H0l7HWVoqcfB49wddkJWEoEgNX8nzouFXnMSGhiJvyl2tEZBX4gDpDeDwAWqVCdKdMy4PgLckBs9QoS2cyQoJXxQxtNrewrt6nJq4KZ5ijZ37FsqDk5QjoYSjebiPv1NPuQnyRQ1PeRNlM5vIVxD2c0qWy3yuMcAjykG5njeE5t1lWiEMx0YgXT7AjbPDvqOWegT72BfG&X-Amz-Signature=55cba3907c7736a83172cb82fe75b4b7bb1f4967aceb68856fe598e6146b4885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAHPL2SK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T111930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbuBFJnlYITw2lCncD6c924SDYNOZf6UhNRCT%2FQQ782wIhAKK4tjjZDWCe31XQStlwB6yzDmVSbVQcuO0mG7ces4rAKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FddPtPBoBp5ppIR8q3AM3wVIVKh%2FREvUhT5ikbNrez844kiBk2smeDaH%2BKhlXzZAhxkT9AiyKyoqgD6uRdRGpQxDIhqGx1o2wVBKELTlA4nYMJ%2F52CU0CVNgsMAQAQcDS4ltRGINR55nFyB3NiWxK5u2IlPyevH%2B%2BZqApVaWreuBwTYSDiBxufDiISrGif0V6nLpl2Q4uWqCdKlOhAa0PwSxdzDP3kRK2DO1DBSGEaqbD63qh6XF6Q2mN21ss6CaMpMSZYLgeUAjAAqA057QStkP56%2BmuaZxLtyIzUdF4ImP5HIiC23%2BxGHcZTdaPcNrIZvQJXspkn5qC0zCyAvOWYZ16Lv2bdtod4BY0X5JG8keOjWWpRlGWRMJKDgJ%2BxQP5VmUDVdRVKxtaqg9FCVo7inPhZ6htnJr5Fz1G16k%2FRehM0dq3Ep%2FTiojQbsh5snZpmhnOyYDWnzvhgGY%2B8lttp%2FReROMLQzqwoF05b33AgxOc%2BImgJD3GyngCe2pO%2FYPhrM1bpK%2FZ0KetxVx64bf9CLJNOPyJlimr3euy7%2FoGhSz9qWp%2FGX1wlAUVV0aTrcnLCVYzeIk8r67%2F5tIZdSjnQ5aayoEK3bjjViZTC%2FaZmf1m9r750lSQ7VPjdrbY40OBr%2FZj9ZoTTFDVdDDU7dnJBjqkAXVJW1MCcGU5jXrUXn5H0l7HWVoqcfB49wddkJWEoEgNX8nzouFXnMSGhiJvyl2tEZBX4gDpDeDwAWqVCdKdMy4PgLckBs9QoS2cyQoJXxQxtNrewrt6nJq4KZ5ijZ37FsqDk5QjoYSjebiPv1NPuQnyRQ1PeRNlM5vIVxD2c0qWy3yuMcAjykG5njeE5t1lWiEMx0YgXT7AjbPDvqOWegT72BfG&X-Amz-Signature=5f299f80e4429c1136a7162f3453bec1660078370e0e202ce0b86fedf6854f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

