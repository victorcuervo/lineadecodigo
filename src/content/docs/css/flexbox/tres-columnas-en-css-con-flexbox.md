---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3JI5NBR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6q2KeawSYZYZlEYyJpR2NdFV0vZawz4TVe7MNx247zAiBT17qy%2FLelLB39V4hwiUpEVgkzHSolChZWYZyzIb4riCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMr81VzRdEvCkzHTngKtwDKgf%2Bkr5Mn41tpt9LTsOFQxMmaVfim58RwGgnLLj7ohe1jiASr6wPSm%2BEM%2BUOAq6gG3%2FfzDrwICRyZY1ngdjwNSHSm04uOKXWiYBNwV%2FJwRN7w8yxjWq0XX0dfRqgvB%2FoUgZa%2FupBgSlwab60HYUndc68zV4A9G36YnNfcD413aG8VUfMpC84rEeLfdnhuhD%2FN8YwZw2Z0PRumWrBIeV%2FKa%2BQTM49nrcy0VZigYpoBdyYFYDITxdr%2FeEnTx9%2FSsCOJu7562ETadqbLzaOIf5dLuEzADWQWFudL6piRURJ3ksKMzgU6zU7fgGaHONRqjjqdKGc4hpsg2e8ezUp2Q80KWbvuocj1VDBUc%2Fkdbu0ppghiFdbZSSPSLLmAuBFRWy7XBVpd5SXOZ7sZEQh85%2FqXx7Egyvet2hJgi56tnxwCvoDtj4owlGNY9j7MBALy%2BSCNDedTZ880qb2C2UyISOJQCgKsb03nf5swVAkCt064CCkDeJifxDKsUXijWWK1k0gTx6hXxiKyumcH7OJemFrkqO3e3SvhcwbHNAUfYr4YXSj1jrUbGx0NFnC7CyMLBBRxXwnQjfTXRzCJDWRqXL8AvYyOJFJlLDXaAXMscpfOakVmScsTlShISsi0U4wsabQyQY6pgGpNudaec7S0z5PPl1Dz2PjEw0buMbcTbQ%2FWrxKsy3t0YsIdgfS8CEFd8xrtrztaPO5nNNYAUTYSf8OzZ1PAjv5EDqzgUr6yqN7VR7yzMZhR%2Bt2RJEhEkY5z%2BTo5bHXETQ%2FRKwwZFSM1f9x2oFPEjKkw2TqIKI23IgT6H%2FdsXKdAJ00oDQt4bYJx9Ya6%2BZhdqKhicnMTt74HknvVX20T3F3GRW0h4Lu&X-Amz-Signature=1e314b1215ef5020c8e4cc4776c8f1cd4e316d4560ed751901ae9285120266ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3JI5NBR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH6q2KeawSYZYZlEYyJpR2NdFV0vZawz4TVe7MNx247zAiBT17qy%2FLelLB39V4hwiUpEVgkzHSolChZWYZyzIb4riCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMr81VzRdEvCkzHTngKtwDKgf%2Bkr5Mn41tpt9LTsOFQxMmaVfim58RwGgnLLj7ohe1jiASr6wPSm%2BEM%2BUOAq6gG3%2FfzDrwICRyZY1ngdjwNSHSm04uOKXWiYBNwV%2FJwRN7w8yxjWq0XX0dfRqgvB%2FoUgZa%2FupBgSlwab60HYUndc68zV4A9G36YnNfcD413aG8VUfMpC84rEeLfdnhuhD%2FN8YwZw2Z0PRumWrBIeV%2FKa%2BQTM49nrcy0VZigYpoBdyYFYDITxdr%2FeEnTx9%2FSsCOJu7562ETadqbLzaOIf5dLuEzADWQWFudL6piRURJ3ksKMzgU6zU7fgGaHONRqjjqdKGc4hpsg2e8ezUp2Q80KWbvuocj1VDBUc%2Fkdbu0ppghiFdbZSSPSLLmAuBFRWy7XBVpd5SXOZ7sZEQh85%2FqXx7Egyvet2hJgi56tnxwCvoDtj4owlGNY9j7MBALy%2BSCNDedTZ880qb2C2UyISOJQCgKsb03nf5swVAkCt064CCkDeJifxDKsUXijWWK1k0gTx6hXxiKyumcH7OJemFrkqO3e3SvhcwbHNAUfYr4YXSj1jrUbGx0NFnC7CyMLBBRxXwnQjfTXRzCJDWRqXL8AvYyOJFJlLDXaAXMscpfOakVmScsTlShISsi0U4wsabQyQY6pgGpNudaec7S0z5PPl1Dz2PjEw0buMbcTbQ%2FWrxKsy3t0YsIdgfS8CEFd8xrtrztaPO5nNNYAUTYSf8OzZ1PAjv5EDqzgUr6yqN7VR7yzMZhR%2Bt2RJEhEkY5z%2BTo5bHXETQ%2FRKwwZFSM1f9x2oFPEjKkw2TqIKI23IgT6H%2FdsXKdAJ00oDQt4bYJx9Ya6%2BZhdqKhicnMTt74HknvVX20T3F3GRW0h4Lu&X-Amz-Signature=15ad2b1c91dc0a48b3fb198563299829cc89d719aec41fe4730180e60a334cf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

