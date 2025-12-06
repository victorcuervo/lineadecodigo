---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQ3XGUR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL7Mtv%2BMl6jV3wxMueBJuqvEDAH6bmZN52d7wzM3etgAiBVpe0ihopyBUNCuBk3Q4VasFpMu6m6VnAWWRLknpkotSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMKt5OXuybPm7CYtHZKtwDB2QWvNVYuvFqMQJMXRT5mK%2F8YCwpugB69i7%2FaxO1pGksVUZfm56%2FfrAeFPM247JwigXqvp4ZXnx1mhvmtCzcsMofSbfLjqdx5Odb4OyAlm%2FAYCfZ%2Fl8JZI1PQsWlcIx1b6o0ZfeRerSgUguGczzXlZzIV81%2Fdq1pkSKdyf7vgqodBj%2B8qkxP74XSOpyVWUAVxC0bISUeP0D5z8o3TfML4y1qMeuI1w2xFfMFYZo45vPX1uUybPa4lLRhAMnyHBERwIQS%2BMu5iZ7RaNn3RDQuOtCjkcUbhJRz7Bs7RzMjs0irsV56amrSYWoVA5M5wHtpLKOj32ShVLBF74ZPejM40dkimhOqn1vT%2Bb%2Bi16xtIM2dtXiaonnpYG4Yt221%2Fs0t%2FpHJJ5xp1kDMuI71KTdwzgxVp%2BTauEbOGnAEmeI1%2BlWjYZykkr8ikQg928ZATOAIziovc1ZnrsY74cwNuQyz9%2FFfMTK84npmSF0VKFtNTokxS8VcSCJ87Br%2BbBYTzWMS0%2Bc7gJYQtJTTxo9%2BtNToXn5%2FnZ9Wha9tAQx5kmVeghQQotR8R6zKCqbqynuJfoRNms4wcRjKqU7gwU6F0i0oovf7f3H4%2F3B%2F2gwJ8egvMPh%2FSWHsNDspxOGx7Rkw2bbRyQY6pgHBxpYbq%2BvmxR%2BepxnLEIDYKUroqnW0cGwhoG4v%2BmPsHusnfgudmaUazbTa61diYGXOSkYdk0jNLkg4gIISCKAfT6OaA1afjezQJ3fJLD4LU7KyOZ7kHgEeDqpIPTRBRXX8KDhnXICS%2BU9if4v803GkClCrcyHXtVGe%2BrOqP2u8YyDgP1QafhnQzyM8dQdrYMYoj5wskD5ybT0%2FQLC3kBfpgRc0RUZH&X-Amz-Signature=05d4d9840e2bea9cab3a2f0b825aaa1ba76be7ed6b3113c26c9fa6d9d3f74941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQ3XGUR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAL7Mtv%2BMl6jV3wxMueBJuqvEDAH6bmZN52d7wzM3etgAiBVpe0ihopyBUNCuBk3Q4VasFpMu6m6VnAWWRLknpkotSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMKt5OXuybPm7CYtHZKtwDB2QWvNVYuvFqMQJMXRT5mK%2F8YCwpugB69i7%2FaxO1pGksVUZfm56%2FfrAeFPM247JwigXqvp4ZXnx1mhvmtCzcsMofSbfLjqdx5Odb4OyAlm%2FAYCfZ%2Fl8JZI1PQsWlcIx1b6o0ZfeRerSgUguGczzXlZzIV81%2Fdq1pkSKdyf7vgqodBj%2B8qkxP74XSOpyVWUAVxC0bISUeP0D5z8o3TfML4y1qMeuI1w2xFfMFYZo45vPX1uUybPa4lLRhAMnyHBERwIQS%2BMu5iZ7RaNn3RDQuOtCjkcUbhJRz7Bs7RzMjs0irsV56amrSYWoVA5M5wHtpLKOj32ShVLBF74ZPejM40dkimhOqn1vT%2Bb%2Bi16xtIM2dtXiaonnpYG4Yt221%2Fs0t%2FpHJJ5xp1kDMuI71KTdwzgxVp%2BTauEbOGnAEmeI1%2BlWjYZykkr8ikQg928ZATOAIziovc1ZnrsY74cwNuQyz9%2FFfMTK84npmSF0VKFtNTokxS8VcSCJ87Br%2BbBYTzWMS0%2Bc7gJYQtJTTxo9%2BtNToXn5%2FnZ9Wha9tAQx5kmVeghQQotR8R6zKCqbqynuJfoRNms4wcRjKqU7gwU6F0i0oovf7f3H4%2F3B%2F2gwJ8egvMPh%2FSWHsNDspxOGx7Rkw2bbRyQY6pgHBxpYbq%2BvmxR%2BepxnLEIDYKUroqnW0cGwhoG4v%2BmPsHusnfgudmaUazbTa61diYGXOSkYdk0jNLkg4gIISCKAfT6OaA1afjezQJ3fJLD4LU7KyOZ7kHgEeDqpIPTRBRXX8KDhnXICS%2BU9if4v803GkClCrcyHXtVGe%2BrOqP2u8YyDgP1QafhnQzyM8dQdrYMYoj5wskD5ybT0%2FQLC3kBfpgRc0RUZH&X-Amz-Signature=b128f2c2ff53ef8d5da5db6b213bb8f56b75aa9cf328356fbede9f0a7c2f7536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

