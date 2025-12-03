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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CXIOCO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCHmCwib%2FPWUkcCz3i%2FXT6eUeFRePdAoJD8FC4n7w9W3AIhAJc6%2F0C9LQv5ju%2BoDZ%2B1q90izpq1l3%2FMT4UINQNpRVWGKv8DCCgQABoMNjM3NDIzMTgzODA1IgxMrpDz5N%2B%2FNQ0E88gq3ANEP5PFhCs9tZuamSnpztUvkAa%2B7RYp4wj%2FQf0DSx99%2BiHfvKsztSu2YQ67KTc08coGjKOd5n3RA4dT3TPuYqbFm6nR1Ljst%2Bp%2BlO7bSheAdf0kgo%2B5j51jU2WZIRv%2BLmyr3HmfSmKILFqdJ2M4qrXPCc0Xxz5jvqkdC%2FJLbHOSQSjgp%2F4hVLayrQitgFllPUPx5I7Oykb9FPL4xVVZJLbuHYU4wi9cDum8hAVQ6Dee8VGXgyROUjjfMuMueI0hKFqLw0A7B4EyBJW4C4PmtpxjSaQ%2BgFmk%2FIzcRuD0nom9Pk%2BNnfUlZZP6KZ07qr8deza68%2FtvpUrZG6noQvqFIgUBZZaE7vikyVxPbdwSggV0cyW77yCE76tnVmd36LHZCq%2FU57w0uZP6vA%2BFuvxdwZaU2qCA32dxeiMqECeQA6IkODsQZWYMsfKgHOhCCiP57EDRSFZdsSUuEVVakJB4DKDw0Y%2F6Xa4a3%2F0HLeyv956im2c%2BkyJrHf7XVz1PpyMOs0E%2FsxNncPtS7YINa7jOW1LLIDmxXN6x3uuqjozFByK0At09Zg3Y6ICsqKwzDqTfI1XK%2BPPAwcEMlkyzR2epkNExyHunAv2RZJ98k%2FSRC7bJQj48u5aQ%2BNvf5vxUCTDLub%2FJBjqkAW1JMoj4UMNplDCo7NecM4wguCXtRKMd3vIMOncegf%2Fbq9W1RqC%2BTIieyffVbRPEPQXHtDtbSXEDQa%2BFfts6auSV2mMKn%2FXpaojVBkcYK0AmA3HHJnKf6YCLb5uvOg%2Fo6ctMXiRZD2KQ%2F4E7EPX3Oa0NJNq8EYWWg%2FT8GaEjjEzRhdQ75yuQCnLM9P0WJT%2B%2Fh9Is4Li4%2FqYbpqWCBCCo4y1MooTy&X-Amz-Signature=cd3ff4bbb4d4c2898721d3014ba8785c9820ec146fd9aa5461437772484d12a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CXIOCO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCHmCwib%2FPWUkcCz3i%2FXT6eUeFRePdAoJD8FC4n7w9W3AIhAJc6%2F0C9LQv5ju%2BoDZ%2B1q90izpq1l3%2FMT4UINQNpRVWGKv8DCCgQABoMNjM3NDIzMTgzODA1IgxMrpDz5N%2B%2FNQ0E88gq3ANEP5PFhCs9tZuamSnpztUvkAa%2B7RYp4wj%2FQf0DSx99%2BiHfvKsztSu2YQ67KTc08coGjKOd5n3RA4dT3TPuYqbFm6nR1Ljst%2Bp%2BlO7bSheAdf0kgo%2B5j51jU2WZIRv%2BLmyr3HmfSmKILFqdJ2M4qrXPCc0Xxz5jvqkdC%2FJLbHOSQSjgp%2F4hVLayrQitgFllPUPx5I7Oykb9FPL4xVVZJLbuHYU4wi9cDum8hAVQ6Dee8VGXgyROUjjfMuMueI0hKFqLw0A7B4EyBJW4C4PmtpxjSaQ%2BgFmk%2FIzcRuD0nom9Pk%2BNnfUlZZP6KZ07qr8deza68%2FtvpUrZG6noQvqFIgUBZZaE7vikyVxPbdwSggV0cyW77yCE76tnVmd36LHZCq%2FU57w0uZP6vA%2BFuvxdwZaU2qCA32dxeiMqECeQA6IkODsQZWYMsfKgHOhCCiP57EDRSFZdsSUuEVVakJB4DKDw0Y%2F6Xa4a3%2F0HLeyv956im2c%2BkyJrHf7XVz1PpyMOs0E%2FsxNncPtS7YINa7jOW1LLIDmxXN6x3uuqjozFByK0At09Zg3Y6ICsqKwzDqTfI1XK%2BPPAwcEMlkyzR2epkNExyHunAv2RZJ98k%2FSRC7bJQj48u5aQ%2BNvf5vxUCTDLub%2FJBjqkAW1JMoj4UMNplDCo7NecM4wguCXtRKMd3vIMOncegf%2Fbq9W1RqC%2BTIieyffVbRPEPQXHtDtbSXEDQa%2BFfts6auSV2mMKn%2FXpaojVBkcYK0AmA3HHJnKf6YCLb5uvOg%2Fo6ctMXiRZD2KQ%2F4E7EPX3Oa0NJNq8EYWWg%2FT8GaEjjEzRhdQ75yuQCnLM9P0WJT%2B%2Fh9Is4Li4%2FqYbpqWCBCCo4y1MooTy&X-Amz-Signature=63ec60dfd7a0a507beb8f2e6cb9575c1e4982a4d1ef7a9ef989c439b8cc1d59f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

