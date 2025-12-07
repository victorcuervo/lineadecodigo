---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHJKI6XN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhKdcfLoWgPLP9UE%2B%2FHVsZn0UZboT1m6fGGmKpCpENuwIhAPVTSL6QNeYL4%2Fhbu6CGq3URpFGhIOaRgHlEzFTsGKJDKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaiJMb9quF1CtdhKUq3AMZdEf6fZditdnbekZmoJqnqGAK5kxN%2FIpzPfHvv02fSDdA0TqPYfP2dCTp2Y3Z057q%2F3MSLW6PU%2FHCbBjHQr5ACoL%2FrIr2oxDEsad6iwo213a3DGPzWeHMeo5E8ITnx0iHBiWJhjZP4w8hh4x%2Ft2fisrw%2BsoqbpYQqAsr5hMP4M9wKHcsSVOv1J6SfQjX%2F2SeNUkYQwA%2FXZLELUy6wPVASoh9cRK3gj1hakzuvFkvfH13WaP5R7V5lCYPg%2B5nbQtvBRnK6fWH%2FkDAoy89I52Q798IKUG5smHO4WwkulU6X2H5S3rwh8zV3jO10eQQwb64dHW9t2%2BAuKQJSnX9fioAU66Sth3wIu6ZWpOw%2F2AYhdCeQooW5KnpNwR8rpAuGnysczCmF9%2B0hbkVXR1Xzf0PjOh4qkWR%2BDjFDZWV4ooDLAfKnuHViA3c3XV6Se%2FEKqMt8Ayyh4HSsGa%2F%2BADvq%2FQeWI%2F1QUggzu%2BAkfQg3Qms%2BNjF5XZrtXqTBVd54vQ2faM%2BmEAxCQFiJPcebwX36uaXu%2B%2BFUwCS6T9YsO5u2ZYGSlQnP5yP3%2FFM6SZuiEDJ9qIHRMQKKNEUiKqT7NEJxt5%2B5i2xPeCyiTxLUAg3o3PTeHckWEwEFh1GetUTngTDSmdXJBjqkAS8BMx7b%2F7DNPRC02BWFLaNR1Cmp81X0SWDz51gFw%2Brha2eXgyX8LhUJvqua%2BG7ralrirI5yDToFPl3DSVcbbMfQ9SaCRrMEM15Q4f5wLfz51imdVHDIN%2B0%2Fj5GOEYP8eCcFkoo%2BXVCalNL9EFTJZnyG96NBDGyuPuqZNwCtsvqfSOdKjQg9kq2bRvVUgTRV1XdPt3If7cxOHDSR4z%2Fp0fvXNkXN&X-Amz-Signature=f11839a3b451070df71d49f1f42d4cf36440b7f0d286097d0343076da0fcb605&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHJKI6XN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T130511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhKdcfLoWgPLP9UE%2B%2FHVsZn0UZboT1m6fGGmKpCpENuwIhAPVTSL6QNeYL4%2Fhbu6CGq3URpFGhIOaRgHlEzFTsGKJDKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwaiJMb9quF1CtdhKUq3AMZdEf6fZditdnbekZmoJqnqGAK5kxN%2FIpzPfHvv02fSDdA0TqPYfP2dCTp2Y3Z057q%2F3MSLW6PU%2FHCbBjHQr5ACoL%2FrIr2oxDEsad6iwo213a3DGPzWeHMeo5E8ITnx0iHBiWJhjZP4w8hh4x%2Ft2fisrw%2BsoqbpYQqAsr5hMP4M9wKHcsSVOv1J6SfQjX%2F2SeNUkYQwA%2FXZLELUy6wPVASoh9cRK3gj1hakzuvFkvfH13WaP5R7V5lCYPg%2B5nbQtvBRnK6fWH%2FkDAoy89I52Q798IKUG5smHO4WwkulU6X2H5S3rwh8zV3jO10eQQwb64dHW9t2%2BAuKQJSnX9fioAU66Sth3wIu6ZWpOw%2F2AYhdCeQooW5KnpNwR8rpAuGnysczCmF9%2B0hbkVXR1Xzf0PjOh4qkWR%2BDjFDZWV4ooDLAfKnuHViA3c3XV6Se%2FEKqMt8Ayyh4HSsGa%2F%2BADvq%2FQeWI%2F1QUggzu%2BAkfQg3Qms%2BNjF5XZrtXqTBVd54vQ2faM%2BmEAxCQFiJPcebwX36uaXu%2B%2BFUwCS6T9YsO5u2ZYGSlQnP5yP3%2FFM6SZuiEDJ9qIHRMQKKNEUiKqT7NEJxt5%2B5i2xPeCyiTxLUAg3o3PTeHckWEwEFh1GetUTngTDSmdXJBjqkAS8BMx7b%2F7DNPRC02BWFLaNR1Cmp81X0SWDz51gFw%2Brha2eXgyX8LhUJvqua%2BG7ralrirI5yDToFPl3DSVcbbMfQ9SaCRrMEM15Q4f5wLfz51imdVHDIN%2B0%2Fj5GOEYP8eCcFkoo%2BXVCalNL9EFTJZnyG96NBDGyuPuqZNwCtsvqfSOdKjQg9kq2bRvVUgTRV1XdPt3If7cxOHDSR4z%2Fp0fvXNkXN&X-Amz-Signature=346f3a84d4cce454b75a4865559ae99b8cd941b859af6a2b7148664218bdc9ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

