---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDIBEOEZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGDHXg%2Bj%2BF56o7Rite2sLP19eGiL94oshzp8eKI9HeXQAiAP0aK6zmU87llLGQCVhyNpo%2FSWmJT8sThhTEs7ol0ewir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMnRw2rkFQAxZQr21vKtwDDPX9m9ZqbvwqpP8x6oFEnqDF%2BPM0zGGzhFw3osXy5FDlLP8yVJrSuAbl44fSEUEWbuchHFSW%2Fc4Y7RUlQSfpUBYJdlIlEanzj%2F0bkooBzknVH%2BboaO8WCyO%2FjXI8XxTFWVPZXNZISbM%2FzDIrXDtNDbPYSgYNoeDOxzxViZsNk30tZBv55HonRkKUV0u%2BRq8FqYL2NedJ9T2p%2FXYFLAzUqv6X86bzi2Zx%2Fc%2FYifIYS0mFJsfj%2FGJtz0vfgDeQy%2B3SakiD2nuxmA5jPAN35kKCQX4iYshazFyC6N1fmK0VIft0RUhDZ%2FxbqLaHHfaKghvSWSW9HA%2BT3TyuD5aArTyeeDXQU4M0AQI7PtVZcRGTyHDl4XQjr%2BrYHJo5lgws0M6zdB%2BATwc0E5KYZ0uDgaSQj708OBD3fBVTvUrypBZuCRrbKnDFaCfayMzR9%2BGE83fqEYDns4arvgHIJ7WtyZRbxSH%2BgffXfxAZnaJXo9HgLsQEfN28%2FWUv1mOLjN9%2BSJ6gexFtfX6YnRYAzWZwWCO72ywOwqskqW8LUM1SQBy%2BfiCTHra5SefjliGfIBZYRexdVK87v30SPVvxmKz7MVGM0ZIDjaH3AT6p%2BSy6HkKX6ROZUYo1ArxkbKHNjJswmcvEyQY6pgHy2bX1o9yR6OcsOVLQbj%2B5fhit80FbTBObqYBmQXur0320mAxOioGOLvsMFPFSyV%2BOw6YzyA4AwNArbv02VtpLIoHjFxpnmwfFHqPPD%2FgQCNR4%2FLLWOPVymsic2jl1H7hukmHdH086hzjAXBJ6SzmZv9Vqvww2bqgpk9wBobUDXDVsjs%2BhM4%2FQOKeA0IVuPmpfuFY5VyURdp7JPLjOvHdXF9Y4IJTq&X-Amz-Signature=0e314261846549a0456fc68e9f569fba9b975c95a1c404a5c69412eba63a4f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDIBEOEZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIGDHXg%2Bj%2BF56o7Rite2sLP19eGiL94oshzp8eKI9HeXQAiAP0aK6zmU87llLGQCVhyNpo%2FSWmJT8sThhTEs7ol0ewir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMnRw2rkFQAxZQr21vKtwDDPX9m9ZqbvwqpP8x6oFEnqDF%2BPM0zGGzhFw3osXy5FDlLP8yVJrSuAbl44fSEUEWbuchHFSW%2Fc4Y7RUlQSfpUBYJdlIlEanzj%2F0bkooBzknVH%2BboaO8WCyO%2FjXI8XxTFWVPZXNZISbM%2FzDIrXDtNDbPYSgYNoeDOxzxViZsNk30tZBv55HonRkKUV0u%2BRq8FqYL2NedJ9T2p%2FXYFLAzUqv6X86bzi2Zx%2Fc%2FYifIYS0mFJsfj%2FGJtz0vfgDeQy%2B3SakiD2nuxmA5jPAN35kKCQX4iYshazFyC6N1fmK0VIft0RUhDZ%2FxbqLaHHfaKghvSWSW9HA%2BT3TyuD5aArTyeeDXQU4M0AQI7PtVZcRGTyHDl4XQjr%2BrYHJo5lgws0M6zdB%2BATwc0E5KYZ0uDgaSQj708OBD3fBVTvUrypBZuCRrbKnDFaCfayMzR9%2BGE83fqEYDns4arvgHIJ7WtyZRbxSH%2BgffXfxAZnaJXo9HgLsQEfN28%2FWUv1mOLjN9%2BSJ6gexFtfX6YnRYAzWZwWCO72ywOwqskqW8LUM1SQBy%2BfiCTHra5SefjliGfIBZYRexdVK87v30SPVvxmKz7MVGM0ZIDjaH3AT6p%2BSy6HkKX6ROZUYo1ArxkbKHNjJswmcvEyQY6pgHy2bX1o9yR6OcsOVLQbj%2B5fhit80FbTBObqYBmQXur0320mAxOioGOLvsMFPFSyV%2BOw6YzyA4AwNArbv02VtpLIoHjFxpnmwfFHqPPD%2FgQCNR4%2FLLWOPVymsic2jl1H7hukmHdH086hzjAXBJ6SzmZv9Vqvww2bqgpk9wBobUDXDVsjs%2BhM4%2FQOKeA0IVuPmpfuFY5VyURdp7JPLjOvHdXF9Y4IJTq&X-Amz-Signature=377cfe407315901f881150778c28170a0d6cad8695fd2d0a09552e420ff1f279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

