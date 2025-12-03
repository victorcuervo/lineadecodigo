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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5O3K6XI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T170933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD1VfHZcOKe39MJ%2Fmx5YdbWZRiHL7vcgHYby5G%2FV2loQwIgMSpa21x12EhAebL4RXf10tMjtk52VfcI%2BKJGzGjzq8oq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDrh8afOvwg2nQSOsircA6dvQS73AWCX%2FHEybjHF2ny6FvlmyFpDt0HT0cFosrWNNxSqj1NuXi%2Fy%2BF3dm4jSz2WE2FowsPqxYUeSKsDSvMbnsZC236zJse4eZ98tjfyt%2FzKd7fIUXSoJFo%2FJbS8P6Idh%2Flntq41l91DoUyK5S%2FSDylLPugQf29vK%2FlOGNp1yjLBaa6boEt8NwEV3elPPklzRVNh%2BimjMrMKMxXD1ZOV1Wyh7W67ltvmAKdHXfPH9nb2VlI9J8J4KSxj2t%2BkczXiLNCqVu3D%2BMgdTF6sdgcNdvTFpR93of2oQspvsF7TlSw3XXWyKpyFKYkbUnJM6hSwMI2hzm8otjyAA7zcMC%2FrZ9YeRNDOJmT%2BR%2BsSMlJlYOPRrJJykXumozRCBIb3K5qvZrjNN1Bqb%2FXmdFrfUNZteO4jxJDyYQeYnszpoBT0wg%2BUrMm70E7%2Ff7UuRkUX7gQGOjUQgDuVKRms0mu9i46belPWzr5mAUUNRkEuzFDKySMrKR8uXDh7laez9m8zXCOHiVsjmQxoNzzsyAxbnYC2nXA6ZPNAE%2BeAx%2FtPWeqm9l07gn0w7f%2FGU6qSCBPRpGjLDsn8aysNwlrgVWnui9y%2FVhxCfgv5DX%2BK4iY1icMQ93aJT%2F7yQUEdYxfMxMJLawckGOqUBeTxEA9P8Gw9STlWmsrpRJ77n%2BfSeBSkRxVzSJNhyPIVDPH5ojyC7Y2cE4nV43mimbeufMSk6GSqD0pycpzVFBvQaPMbNv6gWCV7V6Q6ACstKP2U3yGI6SXZ9snp2eXKdzFf7pvCERoyUX2AidYNtKkMR4DUXQR7vVwGljGqwZ%2Bt3FrTWGKB%2F8Nq5PxtYoefBb7aDPS044%2B3R4iZVpb7nRQgokOB2&X-Amz-Signature=dec66da602702209d1b2a7d8fcafab84b7e33b8f10579e0265f7fa71e66d03ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5O3K6XI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T170933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD1VfHZcOKe39MJ%2Fmx5YdbWZRiHL7vcgHYby5G%2FV2loQwIgMSpa21x12EhAebL4RXf10tMjtk52VfcI%2BKJGzGjzq8oq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDrh8afOvwg2nQSOsircA6dvQS73AWCX%2FHEybjHF2ny6FvlmyFpDt0HT0cFosrWNNxSqj1NuXi%2Fy%2BF3dm4jSz2WE2FowsPqxYUeSKsDSvMbnsZC236zJse4eZ98tjfyt%2FzKd7fIUXSoJFo%2FJbS8P6Idh%2Flntq41l91DoUyK5S%2FSDylLPugQf29vK%2FlOGNp1yjLBaa6boEt8NwEV3elPPklzRVNh%2BimjMrMKMxXD1ZOV1Wyh7W67ltvmAKdHXfPH9nb2VlI9J8J4KSxj2t%2BkczXiLNCqVu3D%2BMgdTF6sdgcNdvTFpR93of2oQspvsF7TlSw3XXWyKpyFKYkbUnJM6hSwMI2hzm8otjyAA7zcMC%2FrZ9YeRNDOJmT%2BR%2BsSMlJlYOPRrJJykXumozRCBIb3K5qvZrjNN1Bqb%2FXmdFrfUNZteO4jxJDyYQeYnszpoBT0wg%2BUrMm70E7%2Ff7UuRkUX7gQGOjUQgDuVKRms0mu9i46belPWzr5mAUUNRkEuzFDKySMrKR8uXDh7laez9m8zXCOHiVsjmQxoNzzsyAxbnYC2nXA6ZPNAE%2BeAx%2FtPWeqm9l07gn0w7f%2FGU6qSCBPRpGjLDsn8aysNwlrgVWnui9y%2FVhxCfgv5DX%2BK4iY1icMQ93aJT%2F7yQUEdYxfMxMJLawckGOqUBeTxEA9P8Gw9STlWmsrpRJ77n%2BfSeBSkRxVzSJNhyPIVDPH5ojyC7Y2cE4nV43mimbeufMSk6GSqD0pycpzVFBvQaPMbNv6gWCV7V6Q6ACstKP2U3yGI6SXZ9snp2eXKdzFf7pvCERoyUX2AidYNtKkMR4DUXQR7vVwGljGqwZ%2Bt3FrTWGKB%2F8Nq5PxtYoefBb7aDPS044%2B3R4iZVpb7nRQgokOB2&X-Amz-Signature=54dbcaa938430c5b7ea3f204053959090ed94153073f91ec5fb60382fdf7e9ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

