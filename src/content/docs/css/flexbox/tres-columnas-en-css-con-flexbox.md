---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC7NGL7W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDmVaqLeb87vH8%2BqyQa8B%2Fk%2BugSqgv1pyMDp5M4VrM49wIhAJECJt532DRWMOAQIlc3o%2BlI6KBVh1tepTCF%2BGvg94akKv8DCD0QABoMNjM3NDIzMTgzODA1Igy%2BtxvR4%2Fn1S8i3J9Yq3APN%2FPOPDPDn5zACueZOD%2FHY6vQtGu2fp88rdxhHJpDGjnJMNig0Rru0HkxQqqLN6xW1QJtWzQA4Pmnser0lH0Q4gHLh2WfHxoeRXBnLXxghyAm16wnRdcOERe3ywiz7u9iVsT7OWRwGkbGnpOT68rci15EnfQCgXdDKwoEbpTYTzg79viQAtSoA%2Fh%2BMvSc1rY%2Foa8LEJYD%2FnS3ig%2BGUrlKMw3MBjv3uLz587K4MMStdJf3URVAdrEBzSeodo0ZGlzWkoOVo5rFqV3PbHGKtH%2BZpBCveMI%2F8m7J1PObuyIcEOgLGsE9ZeRVNf5jVxSw5MQ68ipri1ZrY8Hi2Zgeo2IzJ2kXGz1WldVZsn9HHzRBniLGZ5AhDs3YzwWo71o5VoI6x9SCCTtaOyM%2FO%2FeRWA0Z%2F8PtZX1H1nvtTIEyHhyN68Kgpv9%2Bd5K1xqCesC%2FtmryClZPubjdRBSpqBUQffr6fMKvKlnILXOzRg1dJKJtQ5%2BLybxPqhyaYynvZQmFbDiggSdqoF439FgWUFwT6HGHLWMCP7NIzI8lNwyrRiMbtiN3eurO%2BtBBsf3sKyEkUOKcBJyyCVe8n%2BvNsyM5AanO8Y6JHTAUBxOSECZ9xG08I7QnfFHaUuyUcmjGnw%2BjC0kMTJBjqkAR362QlEmxzy1I77u%2Fm0OfYYacFrISUkH9joctULEORMNoMfGYTSWPOaYyt2yaquiMz3vEVgHiab98gUqU5gB7TUiwkHT44UJLdIS7G%2BkzBua%2F9TDMq2XOZCOWP%2FiH52jcVy7FpA8GRD8Mi%2Fjiux5%2FbtvQ%2F%2FnitmksZ0sdAn6y1qDTMVy7XKkncNNBlowdkdUdKyBzcWGVS0adwHiDeUTAveY6I9&X-Amz-Signature=a47937e58a30879a7a9b380b440b4c4d653c115c53adf8cd9068047f59065cb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC7NGL7W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDmVaqLeb87vH8%2BqyQa8B%2Fk%2BugSqgv1pyMDp5M4VrM49wIhAJECJt532DRWMOAQIlc3o%2BlI6KBVh1tepTCF%2BGvg94akKv8DCD0QABoMNjM3NDIzMTgzODA1Igy%2BtxvR4%2Fn1S8i3J9Yq3APN%2FPOPDPDn5zACueZOD%2FHY6vQtGu2fp88rdxhHJpDGjnJMNig0Rru0HkxQqqLN6xW1QJtWzQA4Pmnser0lH0Q4gHLh2WfHxoeRXBnLXxghyAm16wnRdcOERe3ywiz7u9iVsT7OWRwGkbGnpOT68rci15EnfQCgXdDKwoEbpTYTzg79viQAtSoA%2Fh%2BMvSc1rY%2Foa8LEJYD%2FnS3ig%2BGUrlKMw3MBjv3uLz587K4MMStdJf3URVAdrEBzSeodo0ZGlzWkoOVo5rFqV3PbHGKtH%2BZpBCveMI%2F8m7J1PObuyIcEOgLGsE9ZeRVNf5jVxSw5MQ68ipri1ZrY8Hi2Zgeo2IzJ2kXGz1WldVZsn9HHzRBniLGZ5AhDs3YzwWo71o5VoI6x9SCCTtaOyM%2FO%2FeRWA0Z%2F8PtZX1H1nvtTIEyHhyN68Kgpv9%2Bd5K1xqCesC%2FtmryClZPubjdRBSpqBUQffr6fMKvKlnILXOzRg1dJKJtQ5%2BLybxPqhyaYynvZQmFbDiggSdqoF439FgWUFwT6HGHLWMCP7NIzI8lNwyrRiMbtiN3eurO%2BtBBsf3sKyEkUOKcBJyyCVe8n%2BvNsyM5AanO8Y6JHTAUBxOSECZ9xG08I7QnfFHaUuyUcmjGnw%2BjC0kMTJBjqkAR362QlEmxzy1I77u%2Fm0OfYYacFrISUkH9joctULEORMNoMfGYTSWPOaYyt2yaquiMz3vEVgHiab98gUqU5gB7TUiwkHT44UJLdIS7G%2BkzBua%2F9TDMq2XOZCOWP%2FiH52jcVy7FpA8GRD8Mi%2Fjiux5%2FbtvQ%2F%2FnitmksZ0sdAn6y1qDTMVy7XKkncNNBlowdkdUdKyBzcWGVS0adwHiDeUTAveY6I9&X-Amz-Signature=dad6d08c95043a7dc447d05d34af2d49c4a71850e8397ab4bf2ebd1be3886585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

