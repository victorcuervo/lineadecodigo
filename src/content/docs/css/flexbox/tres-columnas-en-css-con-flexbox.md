---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV5TY2CZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDHiYMMpEwCh%2B1qbiVkKEig%2BygDfuc8HU0q7dpk4EPoqQIhALXxQNOxgHAUbym6XBe%2FmOMhyybt19vtICA5QA99%2BTsdKv8DCEAQABoMNjM3NDIzMTgzODA1Igz5VznKb7PrcT3zeMEq3ANXxpzRlw2Ylv0dNPEYALKbgw16mtrKRSyV7IJALNutDiEYHW2KaGbH1Zb12Tse%2FaDQfwp1vgGXQXUzPJBWcU3fIry9tGZSmTapF5YzLmW9tmcH45FfjHZPGjYE3vU99GffJtGa%2BTYbKmPXBKi0ZDDoy2pbNekMpytqR7oklcXBy7G0Yg6blpQlSwpJr3FLHYpz8eVtX8dNEMXkk6vtduOPT9shkT20Z4VMsleW4yzsW%2FVNf1okF2FYQUq2GSyUltVohCu8fUQyyyU5A6YRw81Jrqw3bs%2BG183%2Ft61aUSdyzZKROH5AnIq3a%2B%2F41ypK9tPhFgydTWve%2Bz%2FHFbSj4V3Kg%2F1y2%2FYquRydTTVyspbnV6lT3RAVQK5uNlBsTL5%2FbzOPWrLU5RChoeQxIuj5yWEV5ANnZu9TTBtblVjfnOMfNcgMuWlwQFRlkOOittbV85U%2FOpsxdQ3lljRl2oRDNuyfDQeiaOtcTjOodh%2FCjvTEVXMj33UfCP8L4MV7MegxYSPSGzyxmz4smumKjpYexPZu6eMA724CpvNvHNm%2B%2FvdU0HsKc%2BafHBkDRrzntqOtkJ67KC%2F9L2UFJrL%2BEOxPICo8zE8xCSOjGmKQkjaqivmW2DArGDj2zlyRi%2FgqyDD%2B6MTJBjqkARBfbGnTvzaNTfJfsD3SC%2BCXxrh3IX23hQb1HoLjBm1AGtk9ASCyhF07dIQoOBGUcQOVzmiCVBG99rKC%2BgEmVg3%2BaffV1Kh5uf6uSvfvTmTDNzOlzi2z7bUaSK4ZELBFmw2ynpmIH%2Bg2nWEohHI4OTqozhYtXe7af3H859pzWSR0zPh42cVMkG%2FyCpAYxZrl6V1X5%2BzvfUqBbvbEqDwWpo7wAAMf&X-Amz-Signature=3b6d865b9164befc15d8870d01414765c4322051985fb5b6ffa8cba8fff37397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV5TY2CZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDHiYMMpEwCh%2B1qbiVkKEig%2BygDfuc8HU0q7dpk4EPoqQIhALXxQNOxgHAUbym6XBe%2FmOMhyybt19vtICA5QA99%2BTsdKv8DCEAQABoMNjM3NDIzMTgzODA1Igz5VznKb7PrcT3zeMEq3ANXxpzRlw2Ylv0dNPEYALKbgw16mtrKRSyV7IJALNutDiEYHW2KaGbH1Zb12Tse%2FaDQfwp1vgGXQXUzPJBWcU3fIry9tGZSmTapF5YzLmW9tmcH45FfjHZPGjYE3vU99GffJtGa%2BTYbKmPXBKi0ZDDoy2pbNekMpytqR7oklcXBy7G0Yg6blpQlSwpJr3FLHYpz8eVtX8dNEMXkk6vtduOPT9shkT20Z4VMsleW4yzsW%2FVNf1okF2FYQUq2GSyUltVohCu8fUQyyyU5A6YRw81Jrqw3bs%2BG183%2Ft61aUSdyzZKROH5AnIq3a%2B%2F41ypK9tPhFgydTWve%2Bz%2FHFbSj4V3Kg%2F1y2%2FYquRydTTVyspbnV6lT3RAVQK5uNlBsTL5%2FbzOPWrLU5RChoeQxIuj5yWEV5ANnZu9TTBtblVjfnOMfNcgMuWlwQFRlkOOittbV85U%2FOpsxdQ3lljRl2oRDNuyfDQeiaOtcTjOodh%2FCjvTEVXMj33UfCP8L4MV7MegxYSPSGzyxmz4smumKjpYexPZu6eMA724CpvNvHNm%2B%2FvdU0HsKc%2BafHBkDRrzntqOtkJ67KC%2F9L2UFJrL%2BEOxPICo8zE8xCSOjGmKQkjaqivmW2DArGDj2zlyRi%2FgqyDD%2B6MTJBjqkARBfbGnTvzaNTfJfsD3SC%2BCXxrh3IX23hQb1HoLjBm1AGtk9ASCyhF07dIQoOBGUcQOVzmiCVBG99rKC%2BgEmVg3%2BaffV1Kh5uf6uSvfvTmTDNzOlzi2z7bUaSK4ZELBFmw2ynpmIH%2Bg2nWEohHI4OTqozhYtXe7af3H859pzWSR0zPh42cVMkG%2FyCpAYxZrl6V1X5%2BzvfUqBbvbEqDwWpo7wAAMf&X-Amz-Signature=4c770a4d1c09c65ad2f28bd373db1a6fae4c8f71b06240a0bde74ed0f033a51d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

