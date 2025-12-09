---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDRSBBW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T020442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmj00EIjDRVxNwcKBYUN8FyW3kcrtmCtZ56QVzL7GSrAiA%2BxfukRWpvGda3GxD90gqKWuRPN5TD44aymA%2BASsKEmiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5UMOe1z06n36S%2FORKtwDrJOBflWOfz4Clmwx8y1Z4ezlOMocDMI4o8yLbuD7b9fcaJNGcvsYOicHNmYe0mLrJXVLp1voVmjC4%2FFf8vA9hPpNSx7LLpFfhB5d9GYlL8HWtBhrw%2BrRkDV2lmnZRxSQ5o23ZzPFk9JhpXoSYU2Pe%2FP%2BSNgdv9dPD%2BD4pCqijOzs%2BimBeBsn4lgjJjzeREMnQsxB57v9iklwqatJ%2FZbNd7CY9SRXNu0Co9nOmAheyjEv0PPYYrHBaSZBckNJm3SuRD4GQ%2Bh86TXHx%2B2af1jX1JQdKdmziVb8tQgkH4b6L92weUi%2FyLOR17gHtXrj9xAc%2BWfmfXLEUz3vt0v2eoKYwVfFkGYEZfTrUq1ruOqq2hKLZNPl4FgPnbq6u8lrI5F0WtzRDCqGxgCdH0%2BnkQ51L7w0m9F8kHDBM4GZ29MSKpgF2qZXCOeUMyRVVZugbJMd3Mkh2bThZazRtI5Ioctrh2rEuBxgdBFP2p38Zlj3%2BwEKii3NO%2FwiJqdfQJ8dBeelp4M%2FaWcMgidI%2FQVKni0iv59lw43Ur1nHqbv6CVR97B9q5j3MDLuCjKRL%2Bf8mghVg5It2Lx%2FM%2FwB%2BRV1jNzvogmY88YJB58sOTByV0fPMPUz2FkYDU6Uy9DKLZWIwxundyQY6pgFtGCqpPatbaBAFyl%2BWkeSe6nLFRu4ATEHfMXZgh42UbTt1zVqnwOVPR1RnEwKs5aEk4ex1nCDRcPcXxDSwLw9kvpECpUhpZ67Zxpx8CE1QKMqlzG0PxSMDg%2BmQzgz4uNQOx9zK3IMrwBfhSeadxjH8dhun5ktVPfchC3tL14dSJWJfpFgaggNdfe1JZp%2BuZbl0LWibLYXBidVX3g5MiZfd7KrrMfhK&X-Amz-Signature=88e00048d466e671c303b933e457d4fa409a1092b95f1472e0ae36c1e7b33885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URDRSBBW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T020442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmj00EIjDRVxNwcKBYUN8FyW3kcrtmCtZ56QVzL7GSrAiA%2BxfukRWpvGda3GxD90gqKWuRPN5TD44aymA%2BASsKEmiqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5UMOe1z06n36S%2FORKtwDrJOBflWOfz4Clmwx8y1Z4ezlOMocDMI4o8yLbuD7b9fcaJNGcvsYOicHNmYe0mLrJXVLp1voVmjC4%2FFf8vA9hPpNSx7LLpFfhB5d9GYlL8HWtBhrw%2BrRkDV2lmnZRxSQ5o23ZzPFk9JhpXoSYU2Pe%2FP%2BSNgdv9dPD%2BD4pCqijOzs%2BimBeBsn4lgjJjzeREMnQsxB57v9iklwqatJ%2FZbNd7CY9SRXNu0Co9nOmAheyjEv0PPYYrHBaSZBckNJm3SuRD4GQ%2Bh86TXHx%2B2af1jX1JQdKdmziVb8tQgkH4b6L92weUi%2FyLOR17gHtXrj9xAc%2BWfmfXLEUz3vt0v2eoKYwVfFkGYEZfTrUq1ruOqq2hKLZNPl4FgPnbq6u8lrI5F0WtzRDCqGxgCdH0%2BnkQ51L7w0m9F8kHDBM4GZ29MSKpgF2qZXCOeUMyRVVZugbJMd3Mkh2bThZazRtI5Ioctrh2rEuBxgdBFP2p38Zlj3%2BwEKii3NO%2FwiJqdfQJ8dBeelp4M%2FaWcMgidI%2FQVKni0iv59lw43Ur1nHqbv6CVR97B9q5j3MDLuCjKRL%2Bf8mghVg5It2Lx%2FM%2FwB%2BRV1jNzvogmY88YJB58sOTByV0fPMPUz2FkYDU6Uy9DKLZWIwxundyQY6pgFtGCqpPatbaBAFyl%2BWkeSe6nLFRu4ATEHfMXZgh42UbTt1zVqnwOVPR1RnEwKs5aEk4ex1nCDRcPcXxDSwLw9kvpECpUhpZ67Zxpx8CE1QKMqlzG0PxSMDg%2BmQzgz4uNQOx9zK3IMrwBfhSeadxjH8dhun5ktVPfchC3tL14dSJWJfpFgaggNdfe1JZp%2BuZbl0LWibLYXBidVX3g5MiZfd7KrrMfhK&X-Amz-Signature=a95318aa849eeb70a23c6ca64871333960c710b80785d1ca077d478884d5e3d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

