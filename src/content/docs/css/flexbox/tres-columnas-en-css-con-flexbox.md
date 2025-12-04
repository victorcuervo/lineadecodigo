---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4UHCNS7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEMmewSZMAtp4pKmaioUJ4k0Uas%2BgXoOkFXrqTHvf6GOAiBFNcOyu1FKJrsxtmz5FagsXbNMhznkZwQIICGKR%2FQ5pCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMk2u28Ow951bl8YooKtwDKsA9yTfH4LwQ9oHO4tsd%2B5Nl9jIHNR0P6rO%2F84JVdAlQ82qUFxADwqXf4wLmYvlDagYLm9JulfCluv9%2FkyAOGCh2zQ%2Fib4cFL%2BlZ0fZJuQljNjWuqszcNXjNrIhKQT6T8mPFVFfAeUfskZoo2WB%2Bk6Du4fCY64rmpC1kPYrcur2RD%2BLevFARj8xbB6gH5rlxig1yXkc1vuwTJlF9L9cCSFSZSmNk4zyVbTwEOylafhg6vXBNZNfWSC9wVKifDcB1%2FJ00tx8t9IhzI58zZ7oVLLPITJ1YNJ0Pd%2F%2FzbS0tzzpGf1pax8RWHHeFlp5kccnV9wkOgCGoU9aGcJ4YaRH%2FbrVpA35SddGk05lVm3WpCpnB%2FwEcEPJzT2%2Bz4NfPgv4cBty7xOmw9HD%2Fv7SKlDQxeQVO4%2FAfXhBGzAQZMr%2BNi%2F%2F%2BuSrCaQEmxt18kFGojB92MmwLZJPIQnEiptPeUBX1pYbt51xVi2kyeScKRBzlhBH8xAdbZpCOYfQgQARzRwUdyu7mpCjKejLe%2Fz%2BWHgtAqNydZNx4Pv74IvT6Hk2vVy5t0AvZmsHEJ%2BUcpJi7XO519wC%2FdDtngbAe6YcWKILhgbi3JY%2BfRq3ARc0oqQ%2F5t%2FPVX8DxP78bYMcSGZsw%2BcnEyQY6pgGd9xAJcvwoDmGvQLUB5UV%2Bjg4vDV1IzPw6bJe%2FWSr27y%2FRTcKUij2qM71vqoys5t4hgP5cQhcR79JxhXmACfB5fG5rZWVfg%2BB0zPWhOSa0xfltrQFZI4NbMaf77vq6pwSXfvDwYu8ZiN1W%2FQ%2FURNBP2Oz17CNX7s6WTCS2QR%2B0hUpR8oPkzuJ41nOtMJ6iX7CGMX%2B%2F9hzElbWJbyGo4XgmNjZpvwTJ&X-Amz-Signature=4320600c1d83bef3de73e77bddb0e6a43e2a421027bd603c4c740f08bc9b0cd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4UHCNS7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIEMmewSZMAtp4pKmaioUJ4k0Uas%2BgXoOkFXrqTHvf6GOAiBFNcOyu1FKJrsxtmz5FagsXbNMhznkZwQIICGKR%2FQ5pCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMk2u28Ow951bl8YooKtwDKsA9yTfH4LwQ9oHO4tsd%2B5Nl9jIHNR0P6rO%2F84JVdAlQ82qUFxADwqXf4wLmYvlDagYLm9JulfCluv9%2FkyAOGCh2zQ%2Fib4cFL%2BlZ0fZJuQljNjWuqszcNXjNrIhKQT6T8mPFVFfAeUfskZoo2WB%2Bk6Du4fCY64rmpC1kPYrcur2RD%2BLevFARj8xbB6gH5rlxig1yXkc1vuwTJlF9L9cCSFSZSmNk4zyVbTwEOylafhg6vXBNZNfWSC9wVKifDcB1%2FJ00tx8t9IhzI58zZ7oVLLPITJ1YNJ0Pd%2F%2FzbS0tzzpGf1pax8RWHHeFlp5kccnV9wkOgCGoU9aGcJ4YaRH%2FbrVpA35SddGk05lVm3WpCpnB%2FwEcEPJzT2%2Bz4NfPgv4cBty7xOmw9HD%2Fv7SKlDQxeQVO4%2FAfXhBGzAQZMr%2BNi%2F%2F%2BuSrCaQEmxt18kFGojB92MmwLZJPIQnEiptPeUBX1pYbt51xVi2kyeScKRBzlhBH8xAdbZpCOYfQgQARzRwUdyu7mpCjKejLe%2Fz%2BWHgtAqNydZNx4Pv74IvT6Hk2vVy5t0AvZmsHEJ%2BUcpJi7XO519wC%2FdDtngbAe6YcWKILhgbi3JY%2BfRq3ARc0oqQ%2F5t%2FPVX8DxP78bYMcSGZsw%2BcnEyQY6pgGd9xAJcvwoDmGvQLUB5UV%2Bjg4vDV1IzPw6bJe%2FWSr27y%2FRTcKUij2qM71vqoys5t4hgP5cQhcR79JxhXmACfB5fG5rZWVfg%2BB0zPWhOSa0xfltrQFZI4NbMaf77vq6pwSXfvDwYu8ZiN1W%2FQ%2FURNBP2Oz17CNX7s6WTCS2QR%2B0hUpR8oPkzuJ41nOtMJ6iX7CGMX%2B%2F9hzElbWJbyGo4XgmNjZpvwTJ&X-Amz-Signature=4f98dd1ba9e9a1eef9939e3d0cb63ee2d0a1e84bb3d9464dd245fbe8d00c9cf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

