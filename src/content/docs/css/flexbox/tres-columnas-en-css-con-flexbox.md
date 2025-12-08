---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7IGI3S2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFKY%2FTiMKKVdejhgaEX24v2%2FliSUOfRzC28b8%2Be5dxIQIhAJ8SUo7LwZMlLt0qfc8FgP7lFYx49PyxtLe3aeM6ZmYSKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwrvix0SEMxwP4X%2BDsq3AP2C63jQm0NBSHvHSpN0Z45xs1cAWJhTkd0qR16Wtmz2%2Fw8bhQYFQ91BZ2kkKIV2mbpWewy20r5Jup4Js4EtOMXTh2P0Y34PhbFaRP0sILY%2Fcj1ylBioJVy1h0VtToQfMaJ%2F%2BjmoprxPEdsD6ls7d98j0BT5MrCiIvkXbs69j8N4seBlCj4huYw88ktQw5lo2D4mSjX3aP3QeRmriMvq1SLKtZ2M9M4xvf3t%2F3klfBhjZa%2FA8OXXKOSqGF62VjRqsNtvHLQgtnzxykD%2BWZvuuB4vkolIJOzlgE7ZwX1YdLdpSDeEByzoscuDAL6moQspnoR0TorFtnmy14Fo2JGrwvUaqNi2GJBeqbNko754Y%2FBwio2FVRA3PTSGFzGPjb62iEkJdQ1nRR3jHeasFx9Dwr541py6r%2BWBKQIF0ktrNDBMzxrU5toraCrZwPx2qjaG4fTB8RjceGDpP3WMQnpnUDHtp%2BCahXmoh5lFWNiK3Mkin%2BNVNpgHeP9%2F7%2FISgQjylq%2FwdSziVo6GMOFh9Yw5cUQ%2B6wCVWw2e9JR3QxuNM2NVFzdkywA82WvvRmEAheXFD10OODOLltldiIsVnjIxxH2mrB1mgA1HHIU8%2F8y9meRK8Z%2BsXGUmqcNj3jmnTCygN3JBjqkAdb7Tn5zHxUqeltwmG3CeIk3gQD%2B53ZP6WLzpjKrQCY5LGoH9KHkoTPOdG5snnzS1wVGyQpYvM162oYukJsiVM7UGknw69R9egGYwQRVIS9cPb%2FlN%2BOy17f4bWPqCWflfYUtMNbH6vEZcoxjVxaCPTbVx3o8bH%2BXkHm%2FzdUF%2Fux31d4H9kGB%2FdpvcinZsA9zRBLfGzRQU1wZUe5oREL2HSSVc0Iz&X-Amz-Signature=069be2766285bfda23e3124afd7f9cd0863694ee6f15a129c33a7a35efe11f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7IGI3S2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFKY%2FTiMKKVdejhgaEX24v2%2FliSUOfRzC28b8%2Be5dxIQIhAJ8SUo7LwZMlLt0qfc8FgP7lFYx49PyxtLe3aeM6ZmYSKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwrvix0SEMxwP4X%2BDsq3AP2C63jQm0NBSHvHSpN0Z45xs1cAWJhTkd0qR16Wtmz2%2Fw8bhQYFQ91BZ2kkKIV2mbpWewy20r5Jup4Js4EtOMXTh2P0Y34PhbFaRP0sILY%2Fcj1ylBioJVy1h0VtToQfMaJ%2F%2BjmoprxPEdsD6ls7d98j0BT5MrCiIvkXbs69j8N4seBlCj4huYw88ktQw5lo2D4mSjX3aP3QeRmriMvq1SLKtZ2M9M4xvf3t%2F3klfBhjZa%2FA8OXXKOSqGF62VjRqsNtvHLQgtnzxykD%2BWZvuuB4vkolIJOzlgE7ZwX1YdLdpSDeEByzoscuDAL6moQspnoR0TorFtnmy14Fo2JGrwvUaqNi2GJBeqbNko754Y%2FBwio2FVRA3PTSGFzGPjb62iEkJdQ1nRR3jHeasFx9Dwr541py6r%2BWBKQIF0ktrNDBMzxrU5toraCrZwPx2qjaG4fTB8RjceGDpP3WMQnpnUDHtp%2BCahXmoh5lFWNiK3Mkin%2BNVNpgHeP9%2F7%2FISgQjylq%2FwdSziVo6GMOFh9Yw5cUQ%2B6wCVWw2e9JR3QxuNM2NVFzdkywA82WvvRmEAheXFD10OODOLltldiIsVnjIxxH2mrB1mgA1HHIU8%2F8y9meRK8Z%2BsXGUmqcNj3jmnTCygN3JBjqkAdb7Tn5zHxUqeltwmG3CeIk3gQD%2B53ZP6WLzpjKrQCY5LGoH9KHkoTPOdG5snnzS1wVGyQpYvM162oYukJsiVM7UGknw69R9egGYwQRVIS9cPb%2FlN%2BOy17f4bWPqCWflfYUtMNbH6vEZcoxjVxaCPTbVx3o8bH%2BXkHm%2FzdUF%2Fux31d4H9kGB%2FdpvcinZsA9zRBLfGzRQU1wZUe5oREL2HSSVc0Iz&X-Amz-Signature=1145026f371e5f7a6279454f1b6f8ac38b3ea1744e627c33bf8fb436ea57e8a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

