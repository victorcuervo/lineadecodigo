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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FFVY6AX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T151854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCICL%2BwlCJ5%2BgsLyNAfgj3LuquE6MNXcMb7NLe6HRi6OyaAiAq%2FJfYfkiktawci0isksA0fghByC2lMaT5L8jQmP63rSr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMF9GD%2BAmU9fS4y2ANKtwDy22hMjNv70VNFmOxpraFLKaKxQ5f7rly%2BYOXBEIkBJRN9S5ATl3PbuIWGkKJR%2FY1V1ap0TTMjxNOXk73T7jdQKZVjJxx7TkTmkfxEpXspCI78O88ha1Z%2FDLIuvPGtnEGvqcO2sWx5ZN4zEt1a8NvP33fkYZpK3cOJGdorqzb6M7RdkTUoePoyRnqII9HYNd%2FWu9ycog%2FMfv7P6XnjkQhTFfRW%2FmgT4T7t8akj7WAyHFeilnkyCH0x25DWO8VmbbcUe%2FyyxMoA0a0wES6OAyCThlpb9n8Ed7YfHeKYdq5FguYAq84ThyciuY7xOcR2c%2B4Jx3qShEf5KVcSy6vXyrZ2amjsToRbMXfYCQDp43UG4%2BGi1OeBPILR%2BSc3gIub2lMQnxU2TE40SYIKPJPSA0CUY64ZgFUc0sv2T0TgOsG6OehuhjoqVQDzwdRUV%2FkWQGvxy8UcdHHtqCJBba18D5goJrCH0ZxzU1OJQFES4hHkzJgG%2F8nGJ%2BZSwd7mPqoG67JS8E4viPw7qSPymmIY7UgthSkm2lLy%2BJUS0W4ZkY%2FciD7M6AaIjgqgzbDCaX%2F8Ooy9pjcl%2Bh%2B6sdd%2BBX37dxOGdhjtEnEkeTu373ZHrd9rdI%2FWMyWc2a0TrC6cX0w3qbByQY6pgGkQNgVWh%2Bswt6WwXwTg%2BhC1mabaTo06w5m7VkO5VeJwR%2BgIle%2FBWxnStPDbxyWtEcFaz4ctNrYnrvBXVF4krdISUq7P%2BGd13JnLtxhmi5ClrwH0pUB3xeTdLdNBoHxI1RrgWKeYLfjyHmQVZ9VtaBYbnWusZ6GaHrL%2FfRLbc1uyD5%2FEv%2FWySrFWWaOpzCiXK%2BAJ%2FvmZgkULv21mDJKFSoZEvYQEojW&X-Amz-Signature=6509c9467a8dcfd61cb7eeae10e6e75c7f8318dfcd4a700ac2be9cbe39b75263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FFVY6AX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T151854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCICL%2BwlCJ5%2BgsLyNAfgj3LuquE6MNXcMb7NLe6HRi6OyaAiAq%2FJfYfkiktawci0isksA0fghByC2lMaT5L8jQmP63rSr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMF9GD%2BAmU9fS4y2ANKtwDy22hMjNv70VNFmOxpraFLKaKxQ5f7rly%2BYOXBEIkBJRN9S5ATl3PbuIWGkKJR%2FY1V1ap0TTMjxNOXk73T7jdQKZVjJxx7TkTmkfxEpXspCI78O88ha1Z%2FDLIuvPGtnEGvqcO2sWx5ZN4zEt1a8NvP33fkYZpK3cOJGdorqzb6M7RdkTUoePoyRnqII9HYNd%2FWu9ycog%2FMfv7P6XnjkQhTFfRW%2FmgT4T7t8akj7WAyHFeilnkyCH0x25DWO8VmbbcUe%2FyyxMoA0a0wES6OAyCThlpb9n8Ed7YfHeKYdq5FguYAq84ThyciuY7xOcR2c%2B4Jx3qShEf5KVcSy6vXyrZ2amjsToRbMXfYCQDp43UG4%2BGi1OeBPILR%2BSc3gIub2lMQnxU2TE40SYIKPJPSA0CUY64ZgFUc0sv2T0TgOsG6OehuhjoqVQDzwdRUV%2FkWQGvxy8UcdHHtqCJBba18D5goJrCH0ZxzU1OJQFES4hHkzJgG%2F8nGJ%2BZSwd7mPqoG67JS8E4viPw7qSPymmIY7UgthSkm2lLy%2BJUS0W4ZkY%2FciD7M6AaIjgqgzbDCaX%2F8Ooy9pjcl%2Bh%2B6sdd%2BBX37dxOGdhjtEnEkeTu373ZHrd9rdI%2FWMyWc2a0TrC6cX0w3qbByQY6pgGkQNgVWh%2Bswt6WwXwTg%2BhC1mabaTo06w5m7VkO5VeJwR%2BgIle%2FBWxnStPDbxyWtEcFaz4ctNrYnrvBXVF4krdISUq7P%2BGd13JnLtxhmi5ClrwH0pUB3xeTdLdNBoHxI1RrgWKeYLfjyHmQVZ9VtaBYbnWusZ6GaHrL%2FfRLbc1uyD5%2FEv%2FWySrFWWaOpzCiXK%2BAJ%2FvmZgkULv21mDJKFSoZEvYQEojW&X-Amz-Signature=f6156bf10b187941b190a21dbc7a5ab1f1125fa728abd3ac9cbf871600b41299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

