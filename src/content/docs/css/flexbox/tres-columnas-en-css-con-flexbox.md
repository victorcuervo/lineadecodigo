---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMB4ODAD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIHgLJf2fVwbaAPNGuh6iIQ%2BN0k8d0xqHE1jn4TEBWLAiAj0KsQK5IilLHSJ4m5%2FJxb8KY808xoqY5wUWcuNHrxQCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMagQIQeqUoekfi6jEKtwDv%2BNlXwDjIQbFcLP%2BHeCvaF8xuJwiuZQZXMBizt%2BJmGwaWihe6vqaKxCJnpp9ZtDhM8Lwx0BViLQe%2FMpaGnP8MIGUU%2Bzw8qlISVnpCxSXe1%2B30NMj28adMiHsZBVJclBrl5MADoTvV1ykYgf1arjtHV0EEWFwC%2FTzO0K6EMN%2BfORS6kLRBPNWxYBAYiEdSABHJyqoBdkKV7QKSj9nQo3ZJpQd0pmiQFOAml7zbO5GGzK%2BIGAET37oDCtKo18Q6it8DMFNh5pnF9i%2FnCLT07voGGvCIvQriFUhpNiQ8No99JxmACxcprNnJ6nCpfljwUjUA4Mp%2F4BORG%2BkjcgmFrUfbAt1tirRx3Um5DJ1c16aaUqLSsA6eVG5i0mzLqj%2Fw%2B0j3SOK0YSG4MQ1JmdJcdKYqp%2BxIBahSQJ%2BAFHQ9GQUUSXmJzYbzqbZIba4Oqu4dHMhw5ey8VU%2Bcc6NYumqXzTgh%2BzidwuTGza4u4n6cGNvYQRVXvUBZt8MvLleCZGgXWZaluw9moQXsSh1%2Fgxge%2B4CVzUVoIMFvam8f%2F32ADwQHbe3wzSaGPRRFeQMogGDmX2rZmhHpKOuf0E3d5m7Jy1Nzt%2BpBD6S1InxNM87bJPSZrzXAEbHXCQr%2FpDotEIw1fzOyQY6pgHU5D7vGiR5Eyxso%2BobQT4LPeHFf1xmqE24VsTyH6zGXOvQOhB37kzgkM1cpbTiujhl26FLulv%2BeswSDWY7R7YFhk9Y8yMuPoB09Q7CkqI2vR7K%2BBWgKK1Sy6z728Zq4qW8PT%2BD1YG3t%2FdxfwcgnDmBFQZu38TvlHncOZz8fLuheQJjFfNLmjhXfv6vNRe8TnRakurp3hTnh6XYUXxSP9FOjNorSHok&X-Amz-Signature=15caff7e5b3f43bec2d852e84f940a17cdc306923d5b149aaf6cdef46fbe94d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMB4ODAD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T062503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIHgLJf2fVwbaAPNGuh6iIQ%2BN0k8d0xqHE1jn4TEBWLAiAj0KsQK5IilLHSJ4m5%2FJxb8KY808xoqY5wUWcuNHrxQCr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMagQIQeqUoekfi6jEKtwDv%2BNlXwDjIQbFcLP%2BHeCvaF8xuJwiuZQZXMBizt%2BJmGwaWihe6vqaKxCJnpp9ZtDhM8Lwx0BViLQe%2FMpaGnP8MIGUU%2Bzw8qlISVnpCxSXe1%2B30NMj28adMiHsZBVJclBrl5MADoTvV1ykYgf1arjtHV0EEWFwC%2FTzO0K6EMN%2BfORS6kLRBPNWxYBAYiEdSABHJyqoBdkKV7QKSj9nQo3ZJpQd0pmiQFOAml7zbO5GGzK%2BIGAET37oDCtKo18Q6it8DMFNh5pnF9i%2FnCLT07voGGvCIvQriFUhpNiQ8No99JxmACxcprNnJ6nCpfljwUjUA4Mp%2F4BORG%2BkjcgmFrUfbAt1tirRx3Um5DJ1c16aaUqLSsA6eVG5i0mzLqj%2Fw%2B0j3SOK0YSG4MQ1JmdJcdKYqp%2BxIBahSQJ%2BAFHQ9GQUUSXmJzYbzqbZIba4Oqu4dHMhw5ey8VU%2Bcc6NYumqXzTgh%2BzidwuTGza4u4n6cGNvYQRVXvUBZt8MvLleCZGgXWZaluw9moQXsSh1%2Fgxge%2B4CVzUVoIMFvam8f%2F32ADwQHbe3wzSaGPRRFeQMogGDmX2rZmhHpKOuf0E3d5m7Jy1Nzt%2BpBD6S1InxNM87bJPSZrzXAEbHXCQr%2FpDotEIw1fzOyQY6pgHU5D7vGiR5Eyxso%2BobQT4LPeHFf1xmqE24VsTyH6zGXOvQOhB37kzgkM1cpbTiujhl26FLulv%2BeswSDWY7R7YFhk9Y8yMuPoB09Q7CkqI2vR7K%2BBWgKK1Sy6z728Zq4qW8PT%2BD1YG3t%2FdxfwcgnDmBFQZu38TvlHncOZz8fLuheQJjFfNLmjhXfv6vNRe8TnRakurp3hTnh6XYUXxSP9FOjNorSHok&X-Amz-Signature=042cc089dca599d12f479f48e978c2dbf17016115b43a7bb53e6e64158fa25f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

