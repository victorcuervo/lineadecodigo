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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDENP7Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICSS%2F%2Fx4r0HKK2uesK4ganXZEQjYyBSWwR54gX6N1aspAiAEo4BLUV7zanivpZCmudxgCRWOi3QGVS9kGzFMQ0CR%2FSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMn7G2sK6u9NkVOn8SKtwDErr%2BdhLy5INzw2DIv0G0pIIc%2BvjjFjO1Jy1yN6ZGWX6Rg6Fu2HdjSXYjtcZrUokuy2GttRfl9XVP%2BW%2BgCC9It8gJctf5sltoUWtQ6pOmeoXvTTY8m%2BgvPAFzPolUHpikto6tVNSi1%2BQjpuiBc7saZ10KxUt6Ir4MiBao8pvw417NX6QSW4aXdzXbTVb6AHe%2BDFRdnl%2FN5FsY2VWJ79eLMdgYG7VdvovBN8h%2B4bC2OWZ%2FY2%2B5iPa6tvYvCdGzjq9GQYBexjwJOsLeqRgqPN%2FLAkHuzzWBaGpYjQ7wBGP6BIKckJCFX9c18EtV1ePX5%2FBX2TONVQAxnWuTBfBzMbfamNBduDPhxM01QrtwBaFDB7NqOzebVHjW0idBTWnek3BccfrpASOkXNrWNhzY2T8hRf9IBQTSESRZy26Ugv9M3m1jmb%2BCTNWVgwoDwThTK4GwjXHlE6I6%2F7ABkJjgCXbrQu6fm9FiiGMPIgVoxWC4IJCpq4j9qBwSh1XRbFBH4W%2F62%2FQ1TK4%2BNS%2FVMfABWP1oursH7f0RaPPPguce9wU9xY9YXlXJ%2BSqNRVHCMyldS%2Bx59WkSQX%2FLwp146a%2BDo9zqNyVlyFeJO%2BvZxL0KG504j38%2FvT%2B2RwzCm0%2B8QtwwspLAyQY6pgHwOPXy%2F8utVy3576bh5kIzECukJucq3cNf9%2FTNZcQIQICBXfFpxXaCUkgAvIkpHYuLjPYShOiyI4gXgTSnnWfuwvfKdVDuvACqzcRvnMRlHhWPzMtd4zTcZp3cZ6WztCDTC3nObokQOHiN9Wwn%2F7FVTnVvCudjNL9ZSX6d0az5A4NUGR0TGea%2Fi7MwEqdvaBFUDp8MQ3VhN%2Foz23IcKiN%2FE2QT32Nb&X-Amz-Signature=d7406deec91fbf384fee083fe236ffd93d8e4f51ef19bdc1517603e3d45299a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRDENP7Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCICSS%2F%2Fx4r0HKK2uesK4ganXZEQjYyBSWwR54gX6N1aspAiAEo4BLUV7zanivpZCmudxgCRWOi3QGVS9kGzFMQ0CR%2FSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMn7G2sK6u9NkVOn8SKtwDErr%2BdhLy5INzw2DIv0G0pIIc%2BvjjFjO1Jy1yN6ZGWX6Rg6Fu2HdjSXYjtcZrUokuy2GttRfl9XVP%2BW%2BgCC9It8gJctf5sltoUWtQ6pOmeoXvTTY8m%2BgvPAFzPolUHpikto6tVNSi1%2BQjpuiBc7saZ10KxUt6Ir4MiBao8pvw417NX6QSW4aXdzXbTVb6AHe%2BDFRdnl%2FN5FsY2VWJ79eLMdgYG7VdvovBN8h%2B4bC2OWZ%2FY2%2B5iPa6tvYvCdGzjq9GQYBexjwJOsLeqRgqPN%2FLAkHuzzWBaGpYjQ7wBGP6BIKckJCFX9c18EtV1ePX5%2FBX2TONVQAxnWuTBfBzMbfamNBduDPhxM01QrtwBaFDB7NqOzebVHjW0idBTWnek3BccfrpASOkXNrWNhzY2T8hRf9IBQTSESRZy26Ugv9M3m1jmb%2BCTNWVgwoDwThTK4GwjXHlE6I6%2F7ABkJjgCXbrQu6fm9FiiGMPIgVoxWC4IJCpq4j9qBwSh1XRbFBH4W%2F62%2FQ1TK4%2BNS%2FVMfABWP1oursH7f0RaPPPguce9wU9xY9YXlXJ%2BSqNRVHCMyldS%2Bx59WkSQX%2FLwp146a%2BDo9zqNyVlyFeJO%2BvZxL0KG504j38%2FvT%2B2RwzCm0%2B8QtwwspLAyQY6pgHwOPXy%2F8utVy3576bh5kIzECukJucq3cNf9%2FTNZcQIQICBXfFpxXaCUkgAvIkpHYuLjPYShOiyI4gXgTSnnWfuwvfKdVDuvACqzcRvnMRlHhWPzMtd4zTcZp3cZ6WztCDTC3nObokQOHiN9Wwn%2F7FVTnVvCudjNL9ZSX6d0az5A4NUGR0TGea%2Fi7MwEqdvaBFUDp8MQ3VhN%2Foz23IcKiN%2FE2QT32Nb&X-Amz-Signature=39912bb7549eff60169f34ea54310d8d8a9854713d9f7ced39081aa2da4aed2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

