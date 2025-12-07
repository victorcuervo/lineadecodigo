---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBWKRI3N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T030037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGn0baLDq2xPvt7urZn1fahSdvZUOzOJ%2BC4iuYlZReGwIhALdmUGKXe3ys8Wi0nJ%2Brpq3B8TvtQG4rtBYMW4Nr7BjqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FfUmOK470ipOAhPIq3APe%2BMjPgE7zywzHFrqdNfM73r%2B0fSzaOen1UN7WcgG9mFq4eMYYnnrH14NGXAanw79J8Zm3X4d%2BRIG5ayy3TfJ8RtU90RtHMNfAns1ZUQnoXn4xSm%2BsOfefrctNZHa6gBYeWOlyNtPV8n4gcaSkcQfTXEFcJcpMSeg2947LGKsJEJYrMUbq3zXN4e54u9PxcRYsDKQDk1q9fDJLLrzys79Le1lMGD%2BixN8ZdyZf9pN8yc1uEt7Oz0roCmRPUOGC5ql6V9mRTZ9EiIcnDnK8r7WpGwRuVhTsCPeta%2B0L3AeuzreHv8Dk128ul7ixbJidPZXHABJvSzQUwB%2B3YB5dmOvClWUHuKBGsBqI2SVWZlBOA7rdUohUlWUIv4oFLSVykltl83s3akwByH9U74q4lDJ9U%2BQoWm7T01mV%2FLY6I7oV%2FbCYyEqYWVRPHYC8HsaDpiy4aZHuknrvWFBpxZYJOzrBFQf%2BJKgzzeULQoLuxE8PECx7BCIWkzxeGsZKNwNqw5RfGWRvrRdtVtaUnQ47aR5EQdNsssk%2FA%2B8LcNwamVLk9a83sdIiVRLMTj6JjJThQGLfflF5VR5q2X1hvSsOk3oPm4Jx4HC5eCN4qala2J1GOgQGuAeg2%2BluHYhn7zCP%2FdLJBjqkAStRWx00PtZMC86O8PSj7YCWWJ%2Fhw%2B3Y%2BscqOKHifGCF5myiiazhJMrrS%2BJS0oXQgJUh1QNUzxRDp7gOGB5YiTIz7kAxYJy0iOGMwzGjIubw7or5pH%2F0diqOKbONhCc36WBFIdDD256ynM3pS7Z6PGtMGV%2BSDXYz%2B6rwr2rIp2LhuDrIimPga0STFKc2mSeYbJVTGwschkuXO9OXwkthc%2B%2Flw7kl&X-Amz-Signature=39223f649be10dd8746ffd5b39f817b46e34fa69a2e4683d104be64a2e7bfbca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBWKRI3N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T030037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGn0baLDq2xPvt7urZn1fahSdvZUOzOJ%2BC4iuYlZReGwIhALdmUGKXe3ys8Wi0nJ%2Brpq3B8TvtQG4rtBYMW4Nr7BjqKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FfUmOK470ipOAhPIq3APe%2BMjPgE7zywzHFrqdNfM73r%2B0fSzaOen1UN7WcgG9mFq4eMYYnnrH14NGXAanw79J8Zm3X4d%2BRIG5ayy3TfJ8RtU90RtHMNfAns1ZUQnoXn4xSm%2BsOfefrctNZHa6gBYeWOlyNtPV8n4gcaSkcQfTXEFcJcpMSeg2947LGKsJEJYrMUbq3zXN4e54u9PxcRYsDKQDk1q9fDJLLrzys79Le1lMGD%2BixN8ZdyZf9pN8yc1uEt7Oz0roCmRPUOGC5ql6V9mRTZ9EiIcnDnK8r7WpGwRuVhTsCPeta%2B0L3AeuzreHv8Dk128ul7ixbJidPZXHABJvSzQUwB%2B3YB5dmOvClWUHuKBGsBqI2SVWZlBOA7rdUohUlWUIv4oFLSVykltl83s3akwByH9U74q4lDJ9U%2BQoWm7T01mV%2FLY6I7oV%2FbCYyEqYWVRPHYC8HsaDpiy4aZHuknrvWFBpxZYJOzrBFQf%2BJKgzzeULQoLuxE8PECx7BCIWkzxeGsZKNwNqw5RfGWRvrRdtVtaUnQ47aR5EQdNsssk%2FA%2B8LcNwamVLk9a83sdIiVRLMTj6JjJThQGLfflF5VR5q2X1hvSsOk3oPm4Jx4HC5eCN4qala2J1GOgQGuAeg2%2BluHYhn7zCP%2FdLJBjqkAStRWx00PtZMC86O8PSj7YCWWJ%2Fhw%2B3Y%2BscqOKHifGCF5myiiazhJMrrS%2BJS0oXQgJUh1QNUzxRDp7gOGB5YiTIz7kAxYJy0iOGMwzGjIubw7or5pH%2F0diqOKbONhCc36WBFIdDD256ynM3pS7Z6PGtMGV%2BSDXYz%2B6rwr2rIp2LhuDrIimPga0STFKc2mSeYbJVTGwschkuXO9OXwkthc%2B%2Flw7kl&X-Amz-Signature=5c1816069981e0f403b49fe1790e02879270552750db790cdd2b1cdffb33837e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

