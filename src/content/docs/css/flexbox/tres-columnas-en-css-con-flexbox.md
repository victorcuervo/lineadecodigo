---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UGHU3P%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEZ848%2BFUVVLX6yt1iBTI9kGSqUPmekOTqveDzNKtPCwIhALBxgAZqT9eavVynBhtx2Wxp9hNT4H3wVNAYp0cr2bnsKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz5qx%2BMnSpqNk9nRQq3AP6X0P409MOfD9%2FlY2JgALtfNnnu9%2B1NQFwJQ1mDbPMEpK64kWP8SLVmusDtUQszdIJnQBUpMoQpYEeN4OkNeDYQnSV55wVHv2NRPA5MVhtf0iKnfUR7bnDo5Zsd6kGxgT3NZylGygvgkYUt%2Bz08jWhni7qc5spK2j%2BrJ6plfJIitPWL7jqMfzfULsdWk9fDM5tTOBOOU5zBHdxnuUEy80M0p2j7v%2FKL9d4Bt%2B8O2F6SxWCW2IBPjhUxh%2ByQm6A9RG%2FR%2BMwuecK33sfYe8apvJr%2Fpgly1mwM1GGsgPg6LdZ5kgNwNbgEf1UNXSEso2uRCQzE3ZlDj5Jub2XhfVEaSBVLiKwb1H2AsTVReBFkN7LbWmQUfPuCgKY%2Fhph1BpqlKubbQNOHcK9wJD6ex4RLI0mdJddVNNSL1NUXcX5arPPwCOQ1NaqUxpSYhtlUKk0Azrpm%2FP35om6p9wyjRAp%2BUmTeG%2FGUw2ox6KQUIBXfV7XCYhgpWUdFVcSSZvRVbFfrL2kHYMCXKUOjL8qyMgVkccqri9Cvemog5VnqWjGTnUwGhWwQh76w7BQPY9lYWxNbYkhAOEipBjaH6%2BWuxdkOmDGwqA6bllEv%2BRt3%2F80nhUUuWVZU38xJQ6AQ7OVZzDcrd7JBjqkAfSaAXbPhz7BHNeID7fhaFubcubUf8SgqtWNua%2FVhDr3fK2enQ153EvMOa5Gfxt6GsM5RfPcNWXaOqCQKILmav1Q%2BdcXW7ad7lsRU9lanqTByK5v2c7H3y4DXxeGw8f46wlEniAAn33lfeb%2BL%2BUiBpGbjEWqHbBgTZf%2BH0pdKzDJb%2BOzEYnqlrNXj0ug3MhcKP%2B4KgVR9M3yiOo3bl49llNCRSeG&X-Amz-Signature=a797de02722d8f372fc51c1cc0f083af47567c330d0d6f6c518805fbc367a0dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662UGHU3P%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T033229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEZ848%2BFUVVLX6yt1iBTI9kGSqUPmekOTqveDzNKtPCwIhALBxgAZqT9eavVynBhtx2Wxp9hNT4H3wVNAYp0cr2bnsKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzz5qx%2BMnSpqNk9nRQq3AP6X0P409MOfD9%2FlY2JgALtfNnnu9%2B1NQFwJQ1mDbPMEpK64kWP8SLVmusDtUQszdIJnQBUpMoQpYEeN4OkNeDYQnSV55wVHv2NRPA5MVhtf0iKnfUR7bnDo5Zsd6kGxgT3NZylGygvgkYUt%2Bz08jWhni7qc5spK2j%2BrJ6plfJIitPWL7jqMfzfULsdWk9fDM5tTOBOOU5zBHdxnuUEy80M0p2j7v%2FKL9d4Bt%2B8O2F6SxWCW2IBPjhUxh%2ByQm6A9RG%2FR%2BMwuecK33sfYe8apvJr%2Fpgly1mwM1GGsgPg6LdZ5kgNwNbgEf1UNXSEso2uRCQzE3ZlDj5Jub2XhfVEaSBVLiKwb1H2AsTVReBFkN7LbWmQUfPuCgKY%2Fhph1BpqlKubbQNOHcK9wJD6ex4RLI0mdJddVNNSL1NUXcX5arPPwCOQ1NaqUxpSYhtlUKk0Azrpm%2FP35om6p9wyjRAp%2BUmTeG%2FGUw2ox6KQUIBXfV7XCYhgpWUdFVcSSZvRVbFfrL2kHYMCXKUOjL8qyMgVkccqri9Cvemog5VnqWjGTnUwGhWwQh76w7BQPY9lYWxNbYkhAOEipBjaH6%2BWuxdkOmDGwqA6bllEv%2BRt3%2F80nhUUuWVZU38xJQ6AQ7OVZzDcrd7JBjqkAfSaAXbPhz7BHNeID7fhaFubcubUf8SgqtWNua%2FVhDr3fK2enQ153EvMOa5Gfxt6GsM5RfPcNWXaOqCQKILmav1Q%2BdcXW7ad7lsRU9lanqTByK5v2c7H3y4DXxeGw8f46wlEniAAn33lfeb%2BL%2BUiBpGbjEWqHbBgTZf%2BH0pdKzDJb%2BOzEYnqlrNXj0ug3MhcKP%2B4KgVR9M3yiOo3bl49llNCRSeG&X-Amz-Signature=867dbbea2ea7cc17deec1500b3d95751dda0cd5feb1e85c91d887bd4673be64c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

