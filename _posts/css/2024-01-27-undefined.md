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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNNFCQ65%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQD8RFHCkPHqrm40vUdVDUyLtlnCJUqQF7ERzHizzsvK9AIhALQvm8B%2F7zdHjb8kwIbgXf8c5m2AXujV6AM6kuWGXA6OKv8DCC4QABoMNjM3NDIzMTgzODA1Igym13VK2bfE1MZuV90q3APRcUNmhb4sS9Povw%2F1ahJmDRRHvooDtxoqp5c8zazxFe6Uy5kKmGFRPWx1zeyiUX7LDRKaJOm9bYYu6%2BvxkGmEzOrvu6nvECfLKTG0InuccapN3vVYcQa2NGOhYRM9bMAYBgxqmGKI5huJrgtI290qd3tv2TeSokYkfJ1%2FXrNojosBblkpl5S0ibwyPq5%2BD7mi6n3iJPGfcS6dQTDKun1W2Bgoz4mj031f8Hnp3DYWxj%2Fkj7AD42LrlkTXDLbcvsVszIGtJjkPel03FDSAOjqnwX0%2BeZrVPSJcFdeLW8cIoGS5m4AE9KJOV6uTxRZ7QMZrkBvYj6LI5l%2BjlGPAsTQJZ8a7UlFPLEkn5zO1js1oDamRGmEd1KaWV5fxM%2BetXVkRoCHDwB%2FnaZqDDJCxbv4dhSIdsiuYRlKSPf0JApnT0FkGPtUXWSA%2ByKfBh3X4Nn8BGQanApKJwjXbP69K0DkdFrdnDWIFc0ssrddtYJlkNomfHvwUXv9ws0HXsAJtv4X3HBcHiBAzzqFnkGQug5i8cOzIPnMGOD12quPdK8woVZV%2BrYN1bf7cLWUtZa36ZpyirZxat8omrGSBJnASTQhyyTrVQoX7JX06acwja1vagjOw5IyxmOL2F2IpgTCt6cDJBjqkAXQfqgpAtIpL1vMPhMAvXDw4NSNs16lO315Zp%2F5OU%2FqWwXtLbyaWCiqbGsa%2BLVLrYP5hvedyCLrYUChliheCMspWsex2ikw2YG46dsanvjxQowFt%2BMpH%2FwhqRqZIW%2FSpRQ0eMn5CLoeW%2BefZGQt5pEHkLMPbLKOjEKGeNqOHtMyQtsuwicNva%2FGBIrGb8Tyqu4U5qETXFY3RoSCfNUlI%2BBgViVE%2F&X-Amz-Signature=599b3386d4c7c04405448553a3e2166c884407253ce7deefb7b253a1b62cfd53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNNFCQ65%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134647Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQD8RFHCkPHqrm40vUdVDUyLtlnCJUqQF7ERzHizzsvK9AIhALQvm8B%2F7zdHjb8kwIbgXf8c5m2AXujV6AM6kuWGXA6OKv8DCC4QABoMNjM3NDIzMTgzODA1Igym13VK2bfE1MZuV90q3APRcUNmhb4sS9Povw%2F1ahJmDRRHvooDtxoqp5c8zazxFe6Uy5kKmGFRPWx1zeyiUX7LDRKaJOm9bYYu6%2BvxkGmEzOrvu6nvECfLKTG0InuccapN3vVYcQa2NGOhYRM9bMAYBgxqmGKI5huJrgtI290qd3tv2TeSokYkfJ1%2FXrNojosBblkpl5S0ibwyPq5%2BD7mi6n3iJPGfcS6dQTDKun1W2Bgoz4mj031f8Hnp3DYWxj%2Fkj7AD42LrlkTXDLbcvsVszIGtJjkPel03FDSAOjqnwX0%2BeZrVPSJcFdeLW8cIoGS5m4AE9KJOV6uTxRZ7QMZrkBvYj6LI5l%2BjlGPAsTQJZ8a7UlFPLEkn5zO1js1oDamRGmEd1KaWV5fxM%2BetXVkRoCHDwB%2FnaZqDDJCxbv4dhSIdsiuYRlKSPf0JApnT0FkGPtUXWSA%2ByKfBh3X4Nn8BGQanApKJwjXbP69K0DkdFrdnDWIFc0ssrddtYJlkNomfHvwUXv9ws0HXsAJtv4X3HBcHiBAzzqFnkGQug5i8cOzIPnMGOD12quPdK8woVZV%2BrYN1bf7cLWUtZa36ZpyirZxat8omrGSBJnASTQhyyTrVQoX7JX06acwja1vagjOw5IyxmOL2F2IpgTCt6cDJBjqkAXQfqgpAtIpL1vMPhMAvXDw4NSNs16lO315Zp%2F5OU%2FqWwXtLbyaWCiqbGsa%2BLVLrYP5hvedyCLrYUChliheCMspWsex2ikw2YG46dsanvjxQowFt%2BMpH%2FwhqRqZIW%2FSpRQ0eMn5CLoeW%2BefZGQt5pEHkLMPbLKOjEKGeNqOHtMyQtsuwicNva%2FGBIrGb8Tyqu4U5qETXFY3RoSCfNUlI%2BBgViVE%2F&X-Amz-Signature=4480f8c44a93ea0718dce03ce7bbdcbb7ea6f639f789d30d9f8a8677ca078137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

