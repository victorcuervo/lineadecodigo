---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV7WQZTJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7f9YPAPyuGLX8E9%2FXrOQdymTQYLz0Oc8izBEN5TVziwIhAJ%2FkRs6hsJjhXGZqn8UGUB0FLjvRtGTpwl%2BfLgQfJaljKv8DCG0QABoMNjM3NDIzMTgzODA1Igze9msQf5k2nMIlx0Uq3AP9dsjPYzY0Tjo3J6VSKaz2O8fIF3nOXbdwFu7XP2DiewLWvlBAEjiTyFIaKxQaaG5wNKKPG0fLzclLE2VKVCFMGlTJCV0UjbPsOPqlpUp21va1XrX%2FeDFcCMf3e2NNcd0%2BCj5Q%2BAFO30UuPmmjdCs5PmlCNSQGPMcpQWWU5GpkJjyhvpbwOzdQO2P7RB8mjFYP7BFcE1qc7SPo%2FRXygaHg0CxJKO0A%2FoacekfV2UPtX89G48dmYNIQMGscdXiki0qBnnyQVMJHumiPcROo%2BTfJrrdvoYgd4K7q8EeU%2Bxw0axMwU1CQ7%2F4y1ERpuPv9ill140x%2FUMavdZKLJ9vU%2BL9Q8qp9PadfjKv4AVjGYEuFM%2B6quvAYQ60NvaWsk0UhK7GrTdvoB0xUN1r4McfvOYSqTqPQEDLw1aw7b3idwwqrl7kSY2lPYfLwpsekeyWCk74DJ74M6d6iNj9wnyt1ZL%2BherB67NdvBh%2BZ4sui%2Ba0mF8lsLqgH73npLzWyPTGpWJa3u6tBIuoMH8vYynuaXeZJmBV1cjBy2KS8Y%2BDI2%2BQ6qWoljmvJa2WBJO28LPzBEZjGvwc4f7%2B4hzXNsOV43IXT6nXyTWj0tL7RUqpoFu%2Bqm7VzkNXtOAbimguzAzCGxM7JBjqkAb6PdzykRuP1CRd%2FnAq8s9b185Bxo50620ee%2BFlWgHvGXW%2FynIXy2DOgCpaEj9R5MTm4%2BlLlnMFHsyuLIJ%2FrgCtjLIuv66gyzy%2FwSXZsnnF3UUPVAri7y04mr1OOiDMAKwHjrTLRr45aRM%2B22D7%2Bz82PM7zDTcahvlaurHtReqHR6Khy%2BHHi2DVID%2FRou06x%2BoRMmqyougY3ahUY3QEODmGr8ZhM&X-Amz-Signature=86627ac32a5c87508e01b63392113e9f25eeb94c16546fe8da365d20d64c2131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV7WQZTJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7f9YPAPyuGLX8E9%2FXrOQdymTQYLz0Oc8izBEN5TVziwIhAJ%2FkRs6hsJjhXGZqn8UGUB0FLjvRtGTpwl%2BfLgQfJaljKv8DCG0QABoMNjM3NDIzMTgzODA1Igze9msQf5k2nMIlx0Uq3AP9dsjPYzY0Tjo3J6VSKaz2O8fIF3nOXbdwFu7XP2DiewLWvlBAEjiTyFIaKxQaaG5wNKKPG0fLzclLE2VKVCFMGlTJCV0UjbPsOPqlpUp21va1XrX%2FeDFcCMf3e2NNcd0%2BCj5Q%2BAFO30UuPmmjdCs5PmlCNSQGPMcpQWWU5GpkJjyhvpbwOzdQO2P7RB8mjFYP7BFcE1qc7SPo%2FRXygaHg0CxJKO0A%2FoacekfV2UPtX89G48dmYNIQMGscdXiki0qBnnyQVMJHumiPcROo%2BTfJrrdvoYgd4K7q8EeU%2Bxw0axMwU1CQ7%2F4y1ERpuPv9ill140x%2FUMavdZKLJ9vU%2BL9Q8qp9PadfjKv4AVjGYEuFM%2B6quvAYQ60NvaWsk0UhK7GrTdvoB0xUN1r4McfvOYSqTqPQEDLw1aw7b3idwwqrl7kSY2lPYfLwpsekeyWCk74DJ74M6d6iNj9wnyt1ZL%2BherB67NdvBh%2BZ4sui%2Ba0mF8lsLqgH73npLzWyPTGpWJa3u6tBIuoMH8vYynuaXeZJmBV1cjBy2KS8Y%2BDI2%2BQ6qWoljmvJa2WBJO28LPzBEZjGvwc4f7%2B4hzXNsOV43IXT6nXyTWj0tL7RUqpoFu%2Bqm7VzkNXtOAbimguzAzCGxM7JBjqkAb6PdzykRuP1CRd%2FnAq8s9b185Bxo50620ee%2BFlWgHvGXW%2FynIXy2DOgCpaEj9R5MTm4%2BlLlnMFHsyuLIJ%2FrgCtjLIuv66gyzy%2FwSXZsnnF3UUPVAri7y04mr1OOiDMAKwHjrTLRr45aRM%2B22D7%2Bz82PM7zDTcahvlaurHtReqHR6Khy%2BHHi2DVID%2FRou06x%2BoRMmqyougY3ahUY3QEODmGr8ZhM&X-Amz-Signature=2169c1ae1379a9f813503e21de237e7c8ab134a1bacb2fdc97051a73d7900b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

