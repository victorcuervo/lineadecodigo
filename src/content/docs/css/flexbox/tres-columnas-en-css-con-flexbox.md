---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKQSXGJS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7ZuhyrcZMU4q7Oeb4a8%2BE1s3cc6suPCi%2FUpqaBduHjAIhAJH8LqX2OrPt%2FFafCNiwLYrxzHKPsTTJD6czEtfMGTBgKv8DCG0QABoMNjM3NDIzMTgzODA1IgxFyd8UqM1tIvKDEXsq3AOsTQgHYheQIkXLCdvxZAcy8P7tIIaCmbaFU4bJRaycwJEltZ2Bm2k8PsObHr8TXndLm0Rb0WvQj2NfrEzg6ZMYn2SVyzOuMFfwZvtXHYFiy%2BIfQXrwdL%2Bw5KAyCFeo%2BxDCwykZkIWKLiKdUtGJ6WPZP6Wx8XC8vcji%2B7awfzcIu8GY4XvGoiQxkKYw73C%2BH1l14v7S%2F36OYPqV18amBTwIPtrb9PpxRyrbwqXDCPPuTe7goXFlduDjcxhTcrF0WAc6Vk0N39G95ts6J9wLZ3gNobnF0TxtibIVXUmhd0sv9mxQp7ZdfztW%2FwXuGcOVhsNn6qnaQXGogNMr%2FIHl6Z1ZUBCdgujgCF87DaY41FzffM3RvY4uVHH3WPYKM3delREHqqjcK8WifNRXQF2BuBiaMSV7H0RitDkXh8dHZSAVNe8JuVcwptyI6bYxLjffz5rRhm1a%2Fq308c%2F%2F8z7pRJnagDuRg5%2BTTFVWE6nklIuHPbtldp8F6gMCmCTB4O6ViLLBFo68bl9YNSerMygy%2FQSqWYCxACpWmMAXij5zdOpHQOWGqRPOP9XIKfRdhjEA9vUw0B%2BoNEaS9%2FiXHU3CY3QtiWN7x70iy22IQtCgUnSUeux3FcvkHjn6%2F37aGjCT3s7JBjqkAa6bvlop%2Fn9w%2FALUM7pp2BIyM0ccTLydWM7b4n6rBFvD6aNA2BCOAM7M%2FgIixl7pIG8Bqd7K2y3vORrMOB%2Fk%2FUu86epyr9UKtv699Dcx9i4hnSu48qO4hKSt5dIr6pg0DZvhmztIFRWos%2FdaitP2gkBo%2FhFrUL620AbUURQEtHRIaDOt0%2FXq8ZeO2CGeEE8QcFaNjedG6mF3DLufrmigxqQDqreu&X-Amz-Signature=3635d2da7d99b8c97d98ca0c05d9f4ae31c6102d69ad04e2549e196fa79f56ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKQSXGJS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7ZuhyrcZMU4q7Oeb4a8%2BE1s3cc6suPCi%2FUpqaBduHjAIhAJH8LqX2OrPt%2FFafCNiwLYrxzHKPsTTJD6czEtfMGTBgKv8DCG0QABoMNjM3NDIzMTgzODA1IgxFyd8UqM1tIvKDEXsq3AOsTQgHYheQIkXLCdvxZAcy8P7tIIaCmbaFU4bJRaycwJEltZ2Bm2k8PsObHr8TXndLm0Rb0WvQj2NfrEzg6ZMYn2SVyzOuMFfwZvtXHYFiy%2BIfQXrwdL%2Bw5KAyCFeo%2BxDCwykZkIWKLiKdUtGJ6WPZP6Wx8XC8vcji%2B7awfzcIu8GY4XvGoiQxkKYw73C%2BH1l14v7S%2F36OYPqV18amBTwIPtrb9PpxRyrbwqXDCPPuTe7goXFlduDjcxhTcrF0WAc6Vk0N39G95ts6J9wLZ3gNobnF0TxtibIVXUmhd0sv9mxQp7ZdfztW%2FwXuGcOVhsNn6qnaQXGogNMr%2FIHl6Z1ZUBCdgujgCF87DaY41FzffM3RvY4uVHH3WPYKM3delREHqqjcK8WifNRXQF2BuBiaMSV7H0RitDkXh8dHZSAVNe8JuVcwptyI6bYxLjffz5rRhm1a%2Fq308c%2F%2F8z7pRJnagDuRg5%2BTTFVWE6nklIuHPbtldp8F6gMCmCTB4O6ViLLBFo68bl9YNSerMygy%2FQSqWYCxACpWmMAXij5zdOpHQOWGqRPOP9XIKfRdhjEA9vUw0B%2BoNEaS9%2FiXHU3CY3QtiWN7x70iy22IQtCgUnSUeux3FcvkHjn6%2F37aGjCT3s7JBjqkAa6bvlop%2Fn9w%2FALUM7pp2BIyM0ccTLydWM7b4n6rBFvD6aNA2BCOAM7M%2FgIixl7pIG8Bqd7K2y3vORrMOB%2Fk%2FUu86epyr9UKtv699Dcx9i4hnSu48qO4hKSt5dIr6pg0DZvhmztIFRWos%2FdaitP2gkBo%2FhFrUL620AbUURQEtHRIaDOt0%2FXq8ZeO2CGeEE8QcFaNjedG6mF3DLufrmigxqQDqreu&X-Amz-Signature=bb6811d6efec0d21342ef788941cb841aed9a86e02877c36d936ba5b13086bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

