---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNQQNLIE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDLHf8mAw66nM0uKF3T05aZoJKfDXmdMMtkTS%2FkqXSwLAiEAnGbs2o%2Bqi6Vr%2FRbiI17X2KNSEiv0GvKPS0NTcAztUowq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCf9TqpN4svcAD0USCrcA%2FqOik5ep0dH3HlZYzw6tyYvZpXSn3nX8zbsGYpe2Pw5vWwPX3f9vA%2Fy7yVvqNW5r6bIHguccpZYtPf4o7MPwNAIfMAPyIk8QKUm8t8gGZYLD6Qg%2BQlgBzdrAi5t353ugAbaJAJE561jaPooXCVJYmPM3aVNrcWw3GOG0XjpL6V4sejYJVL99W9Qfpo83WgpCtMQgD1uLmfLcq%2B6MBWVhWR%2FSXTQ%2BgCoBek%2FMbRSJCTzCM93UGu8pDkXo8dAdsfx2kUZgdS%2Bxi4roQDjjpPixIza02%2BKCHvrDBOYk%2BpYF3Gyftj4VM0pTwYVdx%2BUlR0ZwPJAGrSRMkTd75QVXJH4vGjUI4Dslk3IdeMXJEAvArvf89RBQ0KxxdcAKh5XSGAKn8lXvV1j1QuQh%2FuaEGcrXnWigGgv28y29xFPQprFIeNBKLJ8KngkNAv7iMtOlEiFvEo9MRLKd6apnfI1FCqhfPaUiOVsDpj0S9bkjyGnrdzwNoQIXCVE1Nkh%2FojYMnPkhihYXGwbJCf9erb8wYvY5o4Xg2oYs8Y3z0BsYdlJioZZblc0lNA%2Fvkl7gc7UgLJu3PD6mC2CX7f%2B5c8BZrDyz%2FgbcXYsbu%2FTEvkLx5nNicGeQh81xgvbVkfn8qnSMLO%2BwskGOqUB43%2BrRQ8m1KvfT8Vglbbx0LXmAWiftL%2BMbBLBhxPZ43fUAupMN9CN8w9o7EgqTUEwAd9M%2B1UIJ9BFZIUzZfpyadv3sxsM69on%2BJHqiVzSecsmr6YNA7%2FSWTdwPWNYJ2y5Aj2OYGRx%2BaPy9SZNTeBbVzEww4Agxbjt4hZI49d4MsrD5I4tursydQ4Wg%2B5kPvLt2dBc1iXb6wzlar7A4TQush7C%2FTS2&X-Amz-Signature=f099caf31e3c04bc19558fcb8fcd53d741dc451409a983755708a8cd54d6ca29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNQQNLIE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIDLHf8mAw66nM0uKF3T05aZoJKfDXmdMMtkTS%2FkqXSwLAiEAnGbs2o%2Bqi6Vr%2FRbiI17X2KNSEiv0GvKPS0NTcAztUowq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDCf9TqpN4svcAD0USCrcA%2FqOik5ep0dH3HlZYzw6tyYvZpXSn3nX8zbsGYpe2Pw5vWwPX3f9vA%2Fy7yVvqNW5r6bIHguccpZYtPf4o7MPwNAIfMAPyIk8QKUm8t8gGZYLD6Qg%2BQlgBzdrAi5t353ugAbaJAJE561jaPooXCVJYmPM3aVNrcWw3GOG0XjpL6V4sejYJVL99W9Qfpo83WgpCtMQgD1uLmfLcq%2B6MBWVhWR%2FSXTQ%2BgCoBek%2FMbRSJCTzCM93UGu8pDkXo8dAdsfx2kUZgdS%2Bxi4roQDjjpPixIza02%2BKCHvrDBOYk%2BpYF3Gyftj4VM0pTwYVdx%2BUlR0ZwPJAGrSRMkTd75QVXJH4vGjUI4Dslk3IdeMXJEAvArvf89RBQ0KxxdcAKh5XSGAKn8lXvV1j1QuQh%2FuaEGcrXnWigGgv28y29xFPQprFIeNBKLJ8KngkNAv7iMtOlEiFvEo9MRLKd6apnfI1FCqhfPaUiOVsDpj0S9bkjyGnrdzwNoQIXCVE1Nkh%2FojYMnPkhihYXGwbJCf9erb8wYvY5o4Xg2oYs8Y3z0BsYdlJioZZblc0lNA%2Fvkl7gc7UgLJu3PD6mC2CX7f%2B5c8BZrDyz%2FgbcXYsbu%2FTEvkLx5nNicGeQh81xgvbVkfn8qnSMLO%2BwskGOqUB43%2BrRQ8m1KvfT8Vglbbx0LXmAWiftL%2BMbBLBhxPZ43fUAupMN9CN8w9o7EgqTUEwAd9M%2B1UIJ9BFZIUzZfpyadv3sxsM69on%2BJHqiVzSecsmr6YNA7%2FSWTdwPWNYJ2y5Aj2OYGRx%2BaPy9SZNTeBbVzEww4Agxbjt4hZI49d4MsrD5I4tursydQ4Wg%2B5kPvLt2dBc1iXb6wzlar7A4TQush7C%2FTS2&X-Amz-Signature=48e32de5642a5ff730aa5b885ada14672dbc70e576d09a78db756f3900ff88d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

