---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUAH6YVJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZDVVobQvSLls3sQD7S74jUDHMoPZbOG3P8Sznr7BOpAiBr4cuJNR3tNDDMDNYoUA3a9dotQHhQVQ7LiTDwPyqxpiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMje096dsku%2BSxEwZGKtwDs9WxJcjbxBIvAhvYnH64Lc%2FpGiNC8EsLXkTxrOFIVNCmU5htHWxpnA62qVuYS538Bz6JXWP2XzOpnjAQpAYt4CocpREWSvhzxD%2BvxKvaY%2BOd0V83NNHFs8znEo72MLrWkJIJiKezb%2FUQNzWHC29PDCadiX4o%2BKOWIZkcJ5dnHqmDInJG5AocsQPb90NdfLGP7VKq81yyX9LhRFCRsdB00UmpDlE3RTp2WKdea9zkFUJP6UueNLKQlXCbM3DaZFkmESHzEVNLJMXvIV%2Bnb82VlDLkKID61lp6XhW1aFEPm4if%2FPaJWrHOJwEuQ41OYvhXDE%2BZPqU9I33hGPksx1ZsZ7chfkJLwnn3%2Bxc2kfbtQcrJGR6SRw3a0uwYb%2FwyU1V3PuAv5OaXTPVR7k1yAP7whGR7IA4zBdDT83KOgzmMKsZRvVm9b7OP88FTPoCzbBxfGxW25vwAeds0Ge7hGHjHn%2BdeuL2hR3XDY3mGRBuPRYzvZ0IgGvQlPrEDadEka%2FIS2geIKMy7CcLO3MXEpdq4fB%2B%2BKc0BJ%2FA%2Fs4fuisUd5v9iQ8QYXg93%2BGQ4VrmXkTca3lVBug01H2eTglBOrGCFPspH%2BWma3hVx4hXqbQHPwzwelasYE6AlpxSjdz0wmKHYyQY6pgEZyCLhh4ZnIlaD2QdY6MHu5Uby7o25ai4pemBfAEU9UJfByyXFVu4jucgRKWUvopF7cWKai7wGUhd1sQO0b6aEdFz0E%2BPMYOC9VGk%2FKGz%2F%2BJ7R6zn8S%2BlVWCYlyoi0y80gvrEhN09xMNvLt02SUA7qbPGg01Zj2LIL%2ByrOD7%2FOqCVk4OcQM%2BLzV6xzzv%2Fr6mNfIpjeZKxsG7BhocUIM1Raj502iYNd&X-Amz-Signature=f7da7cf8b2a6ed834fff226ca3889594919902cf2982878d18fdb2de39b5be85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUAH6YVJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T005345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGZDVVobQvSLls3sQD7S74jUDHMoPZbOG3P8Sznr7BOpAiBr4cuJNR3tNDDMDNYoUA3a9dotQHhQVQ7LiTDwPyqxpiqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMje096dsku%2BSxEwZGKtwDs9WxJcjbxBIvAhvYnH64Lc%2FpGiNC8EsLXkTxrOFIVNCmU5htHWxpnA62qVuYS538Bz6JXWP2XzOpnjAQpAYt4CocpREWSvhzxD%2BvxKvaY%2BOd0V83NNHFs8znEo72MLrWkJIJiKezb%2FUQNzWHC29PDCadiX4o%2BKOWIZkcJ5dnHqmDInJG5AocsQPb90NdfLGP7VKq81yyX9LhRFCRsdB00UmpDlE3RTp2WKdea9zkFUJP6UueNLKQlXCbM3DaZFkmESHzEVNLJMXvIV%2Bnb82VlDLkKID61lp6XhW1aFEPm4if%2FPaJWrHOJwEuQ41OYvhXDE%2BZPqU9I33hGPksx1ZsZ7chfkJLwnn3%2Bxc2kfbtQcrJGR6SRw3a0uwYb%2FwyU1V3PuAv5OaXTPVR7k1yAP7whGR7IA4zBdDT83KOgzmMKsZRvVm9b7OP88FTPoCzbBxfGxW25vwAeds0Ge7hGHjHn%2BdeuL2hR3XDY3mGRBuPRYzvZ0IgGvQlPrEDadEka%2FIS2geIKMy7CcLO3MXEpdq4fB%2B%2BKc0BJ%2FA%2Fs4fuisUd5v9iQ8QYXg93%2BGQ4VrmXkTca3lVBug01H2eTglBOrGCFPspH%2BWma3hVx4hXqbQHPwzwelasYE6AlpxSjdz0wmKHYyQY6pgEZyCLhh4ZnIlaD2QdY6MHu5Uby7o25ai4pemBfAEU9UJfByyXFVu4jucgRKWUvopF7cWKai7wGUhd1sQO0b6aEdFz0E%2BPMYOC9VGk%2FKGz%2F%2BJ7R6zn8S%2BlVWCYlyoi0y80gvrEhN09xMNvLt02SUA7qbPGg01Zj2LIL%2ByrOD7%2FOqCVk4OcQM%2BLzV6xzzv%2Fr6mNfIpjeZKxsG7BhocUIM1Raj502iYNd&X-Amz-Signature=d9825215c5deeee26b0ba3e9dbe4d145c188461fe72972ac0ab92465582eea4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

