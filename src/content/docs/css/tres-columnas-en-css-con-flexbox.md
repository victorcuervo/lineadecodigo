---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIUWQFR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGyDwZBWsRIqqEM8IwnxfuuuiVjtDcx%2F8WZe38UClbzoAiEAkbadSHqk1GlcFwRI7pVqBX6HyR9C0OFIn36ixhY5Nywq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDFJ0mh9fawMQ4vGWcCrcA8jgrDDZVBMBBFt9GElLctDzN2rmBbKPP0iGsW3QrHw8TJoGYh1bEy%2F8NPqCHZmPzMSV8tnSDKtXEDz4YoIumPnaUWj9tXRomx%2Be8hYysO2zJoNd%2BuyXvPYwi9Vy3Xm9kLr4oKfGkzgunDjTovv6Og8TDkoj72mbyZ0KcG4hHtvxu2oaDeQfO4j%2BYbA90CAdP0szFpnygju4mhuj%2BI%2Fr%2BNVHDdW9dksFEH95Mqlu3LqXs2SPDvY1LX8yc5tXdg9MyCOWxPSTspUWj71wDUG1uVvis29AQaqwIo5S%2FggCtMrxEkJ39Hn%2FuJKEhxCCULqDcE0ViDw%2F3AL2YjOOtIGMBR90fndWZ8Xfp7nMUO6rS1AOz%2BxD3UhSUw3mxAvHi6du4w2kD1bMSr8IE7WS2h8CPZimwrN3p3n4s%2BboVVimllsn5N5xu59cwQAkpC0AlzCFpjvJC7IG%2B877hmmdzCYVe5VOnza0bxiuIG2Y8TigdMidVh%2BiJ7yrjTUs5qVFidtwVMjJ3Y46x7exVJ%2FNGmNfuJWAQVcv5EMBQTwdLAoeZLlmgEV%2BQlCs9MZ3%2Fim%2FGhwcpcfGeSFNuqOQO%2F8ZcEwoYw%2BGTOFgATp4hrb9pwjw7QBqrvVS%2FhGKxwJ%2FvDz1MJ6%2BwskGOqUB2yZaMv9CtfIbKJcUnr%2FGjKU2Te2gdqKElfw6ugjGaz9PBWESq6nzxHrFDeQyPH%2FmpG25f4wEXBmEwP28X4bwxB40jiEdyDXO2CaO4qtvcfNqdwzULLTznmrP2fKmSMa796a02F2yNyvnHVk6eX2XL4p0oy7Ad5IBDrwSI42BZlcJ5%2F5nqqwyLRvQisGNiiA8GtHFFcX16nibsCUsLZgSZdiRNmY%2B&X-Amz-Signature=894e576fbad284cc6e3c6360c543ee7e284111d8c53244065760c6d337c004f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCIUWQFR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T212637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGyDwZBWsRIqqEM8IwnxfuuuiVjtDcx%2F8WZe38UClbzoAiEAkbadSHqk1GlcFwRI7pVqBX6HyR9C0OFIn36ixhY5Nywq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDFJ0mh9fawMQ4vGWcCrcA8jgrDDZVBMBBFt9GElLctDzN2rmBbKPP0iGsW3QrHw8TJoGYh1bEy%2F8NPqCHZmPzMSV8tnSDKtXEDz4YoIumPnaUWj9tXRomx%2Be8hYysO2zJoNd%2BuyXvPYwi9Vy3Xm9kLr4oKfGkzgunDjTovv6Og8TDkoj72mbyZ0KcG4hHtvxu2oaDeQfO4j%2BYbA90CAdP0szFpnygju4mhuj%2BI%2Fr%2BNVHDdW9dksFEH95Mqlu3LqXs2SPDvY1LX8yc5tXdg9MyCOWxPSTspUWj71wDUG1uVvis29AQaqwIo5S%2FggCtMrxEkJ39Hn%2FuJKEhxCCULqDcE0ViDw%2F3AL2YjOOtIGMBR90fndWZ8Xfp7nMUO6rS1AOz%2BxD3UhSUw3mxAvHi6du4w2kD1bMSr8IE7WS2h8CPZimwrN3p3n4s%2BboVVimllsn5N5xu59cwQAkpC0AlzCFpjvJC7IG%2B877hmmdzCYVe5VOnza0bxiuIG2Y8TigdMidVh%2BiJ7yrjTUs5qVFidtwVMjJ3Y46x7exVJ%2FNGmNfuJWAQVcv5EMBQTwdLAoeZLlmgEV%2BQlCs9MZ3%2Fim%2FGhwcpcfGeSFNuqOQO%2F8ZcEwoYw%2BGTOFgATp4hrb9pwjw7QBqrvVS%2FhGKxwJ%2FvDz1MJ6%2BwskGOqUB2yZaMv9CtfIbKJcUnr%2FGjKU2Te2gdqKElfw6ugjGaz9PBWESq6nzxHrFDeQyPH%2FmpG25f4wEXBmEwP28X4bwxB40jiEdyDXO2CaO4qtvcfNqdwzULLTznmrP2fKmSMa796a02F2yNyvnHVk6eX2XL4p0oy7Ad5IBDrwSI42BZlcJ5%2F5nqqwyLRvQisGNiiA8GtHFFcX16nibsCUsLZgSZdiRNmY%2B&X-Amz-Signature=f8b0160b84f9c61096fe37f43b70837622b71c4d090ce1e12f5eb225629d350d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

