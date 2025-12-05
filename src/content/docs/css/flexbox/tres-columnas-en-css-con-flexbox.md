---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677I5BO57%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3I29TLE5P8DJbeP4hGBACEaP2p4uGMNZIU3h%2F9eEdFAIhANv6285JGrJ5Mf7p9hJul%2FYKEc4%2Fzwwqgg909e1020DwKv8DCFoQABoMNjM3NDIzMTgzODA1Igw4PTrNgMt3M7%2Bv%2Fj4q3AMDQ%2FxwQQmA1i3J591KFNzUnwkNQuBP7Ytl6hC4hWeSEcT2F1Kqg0dlzbjuLwkMA7%2FYJN9PZnDyZ8vRQajZK9o64U7KMvx8WjlTqdBRy6txOmgr18eKrkFTB2ljqC4YVUAh4ealaIrGmXk%2Be44z9BxkrF2sf2YYoGzUFB5xUhnF6HwUJ1a4y8rzfSFBDCRPuX9NW6CW3jjRXnhY68q9bWv3Ljmqn%2BvpBH0du5LCdWWaHNvkdZQalqs78GNVNQgt%2FNwZKkWiGRAgIlAtIYibuao5PU8g7NQnam2gsBc%2FqOLoOzNyX63NafvzcVMXWhy4a%2FFK8iRF2UGsG%2F9EuVA6iGdQQ5eYN9KUeK1nrIgY3YsDgr8rthChp06cxq1J1UyWv7hvfv%2BXSFLDKheAhsjNRc8fscyxzbSSeUKkm4DbA4KRbZg7WAQnFmmKFQDoJepL4PdqYnJ7Tgw49aw7hTf%2FYoZ8mtxLZSKB62eFYxITlROzR6F3loiW1QkJByJmLQti%2B6muUp2C3iSA6EdKfx3NMqaaih410L0n%2Bcw%2BD%2BjoP%2BeweHElLNpf2D9MNgoSf2Xg6ufw2N2ZZJzp7xCJ9Ucc7wp7jwgyzUXSaRWrQhtujMOSO8vsbEZoWgF7IWZRezDbxsrJBjqkAXaeL9UauE6A0w4vZVnMezeIMjtlmHTALxQVcc%2FZTkIghpPxcywvJC%2FnstV8oONqKZXYX%2BaXb3OFLxE3yoCs5pQVJ7iZNOJY5dUyM3LSmEfJ03Mn9V8Uh6IU6bMmXoWbH%2FEwv3udgwZ20ys4B2o9z3pNia5LD4yqouRr90SOlD%2Fn4pgfBhXMGrVC95e6bsR1mtNYo%2F7EFf0VF5R2IDlG3Nrm5SKz&X-Amz-Signature=b71562048349be911a50a98351ca906a8aded10096637858f25c66be22e8fae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677I5BO57%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3I29TLE5P8DJbeP4hGBACEaP2p4uGMNZIU3h%2F9eEdFAIhANv6285JGrJ5Mf7p9hJul%2FYKEc4%2Fzwwqgg909e1020DwKv8DCFoQABoMNjM3NDIzMTgzODA1Igw4PTrNgMt3M7%2Bv%2Fj4q3AMDQ%2FxwQQmA1i3J591KFNzUnwkNQuBP7Ytl6hC4hWeSEcT2F1Kqg0dlzbjuLwkMA7%2FYJN9PZnDyZ8vRQajZK9o64U7KMvx8WjlTqdBRy6txOmgr18eKrkFTB2ljqC4YVUAh4ealaIrGmXk%2Be44z9BxkrF2sf2YYoGzUFB5xUhnF6HwUJ1a4y8rzfSFBDCRPuX9NW6CW3jjRXnhY68q9bWv3Ljmqn%2BvpBH0du5LCdWWaHNvkdZQalqs78GNVNQgt%2FNwZKkWiGRAgIlAtIYibuao5PU8g7NQnam2gsBc%2FqOLoOzNyX63NafvzcVMXWhy4a%2FFK8iRF2UGsG%2F9EuVA6iGdQQ5eYN9KUeK1nrIgY3YsDgr8rthChp06cxq1J1UyWv7hvfv%2BXSFLDKheAhsjNRc8fscyxzbSSeUKkm4DbA4KRbZg7WAQnFmmKFQDoJepL4PdqYnJ7Tgw49aw7hTf%2FYoZ8mtxLZSKB62eFYxITlROzR6F3loiW1QkJByJmLQti%2B6muUp2C3iSA6EdKfx3NMqaaih410L0n%2Bcw%2BD%2BjoP%2BeweHElLNpf2D9MNgoSf2Xg6ufw2N2ZZJzp7xCJ9Ucc7wp7jwgyzUXSaRWrQhtujMOSO8vsbEZoWgF7IWZRezDbxsrJBjqkAXaeL9UauE6A0w4vZVnMezeIMjtlmHTALxQVcc%2FZTkIghpPxcywvJC%2FnstV8oONqKZXYX%2BaXb3OFLxE3yoCs5pQVJ7iZNOJY5dUyM3LSmEfJ03Mn9V8Uh6IU6bMmXoWbH%2FEwv3udgwZ20ys4B2o9z3pNia5LD4yqouRr90SOlD%2Fn4pgfBhXMGrVC95e6bsR1mtNYo%2F7EFf0VF5R2IDlG3Nrm5SKz&X-Amz-Signature=44c05bee98500dc70f028f702b01498b3764cb5b5007a56831d9060dedf7302c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

