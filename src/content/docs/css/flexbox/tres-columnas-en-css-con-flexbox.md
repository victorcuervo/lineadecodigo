---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4TOWQCQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWSWBYqWrB%2BzMEiTvuZAw7l5mAcqYIe7AYwgNzwkaR0AiA2rPPzJcRfJqeujMmmbtJf9I18%2Bi18dkvCZ%2FrdZapfRir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMEfnJNY6liBQZDybCKtwDPJ9dQKdDAR%2Fn1SEFs1xQUOG%2FweNWc8eciQTFRfpb24Mcc9UuQBeVYNIfHNYPI3FHpMU3OLkFr5RqfNZmD6vdsIgr9OaQPSkQ3zohbE95B7%2BynslSRLEbGkXQEuRehf4wGUWm58PPM4aaBJTsRhW7SrmV9F0Mndot0ljqdmVNlALGxpUY0gmHlrAwWjE07efNgMNOz3w%2Bng0lDdO1TINnIcF4Cxy4C0yv4AS6toeQhtOprtWYXATRmfihw55oAHAZa6wFEZAIYFAks4y0nW2duVCelztTwYRIN23fLdk2f2XzBhbxVP7bUPgIuwMHMFT13n5%2BjFcFSdJmKZncBpfOS0HTQnWVFKT9X0fmtFex4Y%2Fygh8ZesKQSlEQv7SaNW0j5zMcjM9O6NMpIG0Bt3hHKpC%2F7q%2F7cssyBKCwMj4Ecy6ulG4Q1e5tVJTPXhhphNp9tURN8BSijtk9B1D8OrFrI6eq4GXHKnO55ft6ENZY3dieuAoGVjVRVOwI7J1N39WQSTDj%2FITldBqnqCeL8%2FMMjihr%2FoN2ny%2FKAaXHtqFK6lW4PfPr3SHWnDtK3UTCs9%2BtjnIgrRBGqq2TcSP4489utHQXd%2Bec3AN%2FFMODZ5rqYRTWJpkYm3h8V%2FUKiuIwkOzLyQY6pgE9iW76yNztn%2ByacSsv6XzSY13qUVnLXE7XLqqU%2F5mIRAzwRKiBsKOtUvTShrLiMM8lTIrRGZFnS3cUJwE4T54PXi6MwLV8aIHMYuS1CWTxzHVaCJdgT0twtV2WRGJMNubWaP9yTE7BfxODcoMHTfRWJ80FhgnhIJfxiogvKD0Z%2ByTB0FtZxs4CpRP7Zu3%2FTSZ2S6TYOZwGFkWczyYD2QCrz3Q%2BlDRy&X-Amz-Signature=ebea9df8e9159c97c3bedc2aa7f72214ee926621ef7f4812821f10dfb1f8f19f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4TOWQCQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFWSWBYqWrB%2BzMEiTvuZAw7l5mAcqYIe7AYwgNzwkaR0AiA2rPPzJcRfJqeujMmmbtJf9I18%2Bi18dkvCZ%2FrdZapfRir%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMEfnJNY6liBQZDybCKtwDPJ9dQKdDAR%2Fn1SEFs1xQUOG%2FweNWc8eciQTFRfpb24Mcc9UuQBeVYNIfHNYPI3FHpMU3OLkFr5RqfNZmD6vdsIgr9OaQPSkQ3zohbE95B7%2BynslSRLEbGkXQEuRehf4wGUWm58PPM4aaBJTsRhW7SrmV9F0Mndot0ljqdmVNlALGxpUY0gmHlrAwWjE07efNgMNOz3w%2Bng0lDdO1TINnIcF4Cxy4C0yv4AS6toeQhtOprtWYXATRmfihw55oAHAZa6wFEZAIYFAks4y0nW2duVCelztTwYRIN23fLdk2f2XzBhbxVP7bUPgIuwMHMFT13n5%2BjFcFSdJmKZncBpfOS0HTQnWVFKT9X0fmtFex4Y%2Fygh8ZesKQSlEQv7SaNW0j5zMcjM9O6NMpIG0Bt3hHKpC%2F7q%2F7cssyBKCwMj4Ecy6ulG4Q1e5tVJTPXhhphNp9tURN8BSijtk9B1D8OrFrI6eq4GXHKnO55ft6ENZY3dieuAoGVjVRVOwI7J1N39WQSTDj%2FITldBqnqCeL8%2FMMjihr%2FoN2ny%2FKAaXHtqFK6lW4PfPr3SHWnDtK3UTCs9%2BtjnIgrRBGqq2TcSP4489utHQXd%2Bec3AN%2FFMODZ5rqYRTWJpkYm3h8V%2FUKiuIwkOzLyQY6pgE9iW76yNztn%2ByacSsv6XzSY13qUVnLXE7XLqqU%2F5mIRAzwRKiBsKOtUvTShrLiMM8lTIrRGZFnS3cUJwE4T54PXi6MwLV8aIHMYuS1CWTxzHVaCJdgT0twtV2WRGJMNubWaP9yTE7BfxODcoMHTfRWJ80FhgnhIJfxiogvKD0Z%2ByTB0FtZxs4CpRP7Zu3%2FTSZ2S6TYOZwGFkWczyYD2QCrz3Q%2BlDRy&X-Amz-Signature=e24e53628bf912a0b75beda5ce15782e9c39aff9766bc11f9dd4c91822ea3e39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

