---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKC3BOMK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC795GwsXP6PV7vamQd0nB0BZ2FLeX2FZlHfFC2gglD6wIhAPvL072DqQsU4h9foWO%2BRVwNli1TSP8j1e%2F7O%2BTt9fFpKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ%2Fsb3w%2BCGhpT9zrYq3AOJ3OGuggWS%2FtaNQcZGg8%2BAUD509XntXlSLm%2B5%2F1lTV5Ec4TE9LfOXgls%2BMZ%2BinhYfGHJgZj8veUlnVQ0f%2FJK5IHHNH4Ak2EY4W0DXJdXv48u46teRHEJqNZ%2BSLB0FNn3F%2FxqIBWPWthQtgZWpdo%2FIo1IWcQ7QCaJlR5O0dpa1mN354MEQlpBIA2deSJL3lf7qJ4jkU1KZTBkzwVnvjJ%2FgOE%2B%2F97wq1QIJ471xuYdgW9vqldvnErkzbvhZ3TWY9jh1y%2BDjeA0EiG0WbA1yIh5T9Vpjh5LyF5bJgWb9Jl4exm5QqFBIZ9TUWIRqhNecWnumvRFbtAbYYitOmpfnHBdThIRpty3AipzNAgkyKYsDiUghbNeA5VaKePV0hSE9XdhrFjXjL4DNFAkRt5QtsnMIkvCKUidQhrZ3%2BsnnNUNkkcTxu3OEIDd8nLpkdQMPJJjv%2FsaLSAMHAwojb6crFQPLO%2B182L%2FSTM5eRDh3TJe3uG8YMWEfJi1zgsvQRycVXIKPbVvjm7RFaXsOyWpaEfCfHtqdvov9u1mPCBOwh%2BLPqvdRLCX1qdNWakZGwTBz5LvoAoZIrHG%2FPqCxnkD25osKaLJPqUPEu6Kxrilfpt%2BI8xVTi4ni%2F5zva%2FDo%2BxDCt7tnJBjqkAWJh54sTEbATdYOXXA1pf1Kz4MnD23YcV6H8duPnSJ81QzKD1%2FhCMX1laIccyQrSYksMlyv3vjm9ButpZlIWevHTbTI31nPbABLnuADFLNlsjQsuWAKuDxGwEApKfneKaTErWHGQFAI6Ay9Y73K1oYpHMkUmzoayVnrsH5kahHANzQc9l%2Bhvnw%2BG3Jjnwg8kCjhhOpfPnFqhks9h0ZF5jQGFyzrm&X-Amz-Signature=40ce654399be5cebba2f69f1afeb5cffaf07b36a3a25b15b012e7dddabeb35b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKC3BOMK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T071425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC795GwsXP6PV7vamQd0nB0BZ2FLeX2FZlHfFC2gglD6wIhAPvL072DqQsU4h9foWO%2BRVwNli1TSP8j1e%2F7O%2BTt9fFpKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQ%2Fsb3w%2BCGhpT9zrYq3AOJ3OGuggWS%2FtaNQcZGg8%2BAUD509XntXlSLm%2B5%2F1lTV5Ec4TE9LfOXgls%2BMZ%2BinhYfGHJgZj8veUlnVQ0f%2FJK5IHHNH4Ak2EY4W0DXJdXv48u46teRHEJqNZ%2BSLB0FNn3F%2FxqIBWPWthQtgZWpdo%2FIo1IWcQ7QCaJlR5O0dpa1mN354MEQlpBIA2deSJL3lf7qJ4jkU1KZTBkzwVnvjJ%2FgOE%2B%2F97wq1QIJ471xuYdgW9vqldvnErkzbvhZ3TWY9jh1y%2BDjeA0EiG0WbA1yIh5T9Vpjh5LyF5bJgWb9Jl4exm5QqFBIZ9TUWIRqhNecWnumvRFbtAbYYitOmpfnHBdThIRpty3AipzNAgkyKYsDiUghbNeA5VaKePV0hSE9XdhrFjXjL4DNFAkRt5QtsnMIkvCKUidQhrZ3%2BsnnNUNkkcTxu3OEIDd8nLpkdQMPJJjv%2FsaLSAMHAwojb6crFQPLO%2B182L%2FSTM5eRDh3TJe3uG8YMWEfJi1zgsvQRycVXIKPbVvjm7RFaXsOyWpaEfCfHtqdvov9u1mPCBOwh%2BLPqvdRLCX1qdNWakZGwTBz5LvoAoZIrHG%2FPqCxnkD25osKaLJPqUPEu6Kxrilfpt%2BI8xVTi4ni%2F5zva%2FDo%2BxDCt7tnJBjqkAWJh54sTEbATdYOXXA1pf1Kz4MnD23YcV6H8duPnSJ81QzKD1%2FhCMX1laIccyQrSYksMlyv3vjm9ButpZlIWevHTbTI31nPbABLnuADFLNlsjQsuWAKuDxGwEApKfneKaTErWHGQFAI6Ay9Y73K1oYpHMkUmzoayVnrsH5kahHANzQc9l%2Bhvnw%2BG3Jjnwg8kCjhhOpfPnFqhks9h0ZF5jQGFyzrm&X-Amz-Signature=9d62758e79a74b125826d50291433654c3a2e78ebe958342aac56ba2be4c8d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

