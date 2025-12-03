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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNCGMSUL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBgOcpHwDTqNAfq5X9gNnqzqoi4Y7STxyIOrsXRspPt%2FAiBA8zXZ76sp6l8dMCmj0kiphj9qqjL6hglj0JOTJHWNHSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMe%2FsGbxDmt8ASuOaxKtwDTVA6fZJz6RF4IGCyEII5k7o4T%2FnNg7BGxKS8dYFTMARAF4%2BKkBqWnPG5DvGbR7NMTxBUSvBaT5y99AYenKXmB4bkyrTsKS%2BBt6J60b1mkPrenVwWDvmehWBK%2FgHTJOe9NNhhjHIvywivpKtmCZxWnWcZl%2B8uq4lilwtI%2BFesH5CaPTollGD1GPdzisZ4K5ZjCN%2FuSdW7EkxtPbQVks6pLd1bwBkzEbHspUhis0LaSZC5o4UFZY6fXb4jQb12%2Bz2EhAqxfG%2FDgiZFtpFJ9UcnFs2OJZPEZ62saxmJPYjDehM%2Ftq%2BUVjQcKbj2qw9YcfbbYMwqKKC88rzpBSTVFwiuZQv3dPCZ08vKv5PqQfVFLMh9iiEQdJEjEJ3apOe%2Bfup06GxzBpHM32i1oX9qIfK55ukeUvHxp6mKCfkN3WoI6NH%2Fh7%2BiRywYarB%2FEVU8sumw3c14zsql7UKxJsDukwPIJ4GykXaxJQu%2Bdhd1UG%2FblqOxHnPzcQXgo6OonrWWDDFVRb8emoaNs%2FEYMLY729OmYX1FaylZ0a5t4okwW3UA0EyQDuoAxsUPgLj1slnvUTqLrP7ljd%2FGAvrndtQLTV46prP4vm6yBJFXNEUinOA6BhduY%2Bb%2B87%2BTzNWzokwwwYjByQY6pgFqLoWWczT9FsBcFe4OjBvGVdQcPTHKl4rR3xn0jGHjV%2BrxhZAhNDTWtUyrCURK3da0bFNXhPDpSxMqFZUK5%2Fz9K4s6GXO8mjTgIwI5QRroqD6lnXij3Od8h2JrUkd5YKxCUQ367Mc%2BAZcSA%2BscexrNIIFfhr34VI%2BzAal%2BSw%2Fv66JCnU9dTT%2FGSw6JMCcOSOCRPkuorAsSzPPQdaRncwkb3T%2FYuVPI&X-Amz-Signature=659ea6f32f36ee23ef69ec340ab0e730ad5232aa8e8629403f4dde74d52f5c76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNCGMSUL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T143826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIBgOcpHwDTqNAfq5X9gNnqzqoi4Y7STxyIOrsXRspPt%2FAiBA8zXZ76sp6l8dMCmj0kiphj9qqjL6hglj0JOTJHWNHSr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMe%2FsGbxDmt8ASuOaxKtwDTVA6fZJz6RF4IGCyEII5k7o4T%2FnNg7BGxKS8dYFTMARAF4%2BKkBqWnPG5DvGbR7NMTxBUSvBaT5y99AYenKXmB4bkyrTsKS%2BBt6J60b1mkPrenVwWDvmehWBK%2FgHTJOe9NNhhjHIvywivpKtmCZxWnWcZl%2B8uq4lilwtI%2BFesH5CaPTollGD1GPdzisZ4K5ZjCN%2FuSdW7EkxtPbQVks6pLd1bwBkzEbHspUhis0LaSZC5o4UFZY6fXb4jQb12%2Bz2EhAqxfG%2FDgiZFtpFJ9UcnFs2OJZPEZ62saxmJPYjDehM%2Ftq%2BUVjQcKbj2qw9YcfbbYMwqKKC88rzpBSTVFwiuZQv3dPCZ08vKv5PqQfVFLMh9iiEQdJEjEJ3apOe%2Bfup06GxzBpHM32i1oX9qIfK55ukeUvHxp6mKCfkN3WoI6NH%2Fh7%2BiRywYarB%2FEVU8sumw3c14zsql7UKxJsDukwPIJ4GykXaxJQu%2Bdhd1UG%2FblqOxHnPzcQXgo6OonrWWDDFVRb8emoaNs%2FEYMLY729OmYX1FaylZ0a5t4okwW3UA0EyQDuoAxsUPgLj1slnvUTqLrP7ljd%2FGAvrndtQLTV46prP4vm6yBJFXNEUinOA6BhduY%2Bb%2B87%2BTzNWzokwwwYjByQY6pgFqLoWWczT9FsBcFe4OjBvGVdQcPTHKl4rR3xn0jGHjV%2BrxhZAhNDTWtUyrCURK3da0bFNXhPDpSxMqFZUK5%2Fz9K4s6GXO8mjTgIwI5QRroqD6lnXij3Od8h2JrUkd5YKxCUQ367Mc%2BAZcSA%2BscexrNIIFfhr34VI%2BzAal%2BSw%2Fv66JCnU9dTT%2FGSw6JMCcOSOCRPkuorAsSzPPQdaRncwkb3T%2FYuVPI&X-Amz-Signature=2fa55b946f348a425c97dfa26629c63ab16b469590d0d7ceda0f956b9d97fd6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

