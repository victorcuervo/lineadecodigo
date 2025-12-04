---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665BBIQ26%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIANbWKbjybVewZ1G0Jw1u%2F%2BQTvkgR%2BSeG2a62swkwd2GAiALNkRp0JVzY%2BEdB4IWQWO65BWucLAu3JVABt7e%2F2cx0ir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMjF8sdVDHOXHDKyzrKtwDepNvpx4jcEVuvwcYUhSzZa8HGCrFmDwtun76frAmVivRfWypvO0HRbNLAmiH%2Bky2KNrmCyx1uZYn2atjHN8PZOWezElvdcn9uO5LYc2Sv2Jr0rkhx264dU84svmYCZwGHG09Q82i8yF4YTm49kSR0Qb4MhmxvMBy1jREas6dKRsqVYuqm6zKOqQTsVPq%2B2K3rj%2FWWKFHiQ9C%2F5QzU4l3uCTjZGVAsZS2ekXyzGlLomXIMq1JVTPt4m2BcvHo7wdhhsPShlxATjDx%2FS6MnVrjeIpn8Cm0bN%2BnCEvVXXOF%2BTmCt%2F8or4YyyuaQzij4mKSbLQeHQleWQ0LtJ5kMy%2F7VkruU%2FP3QsbY2Zx5cUo1wy38%2FjbOoz1kyK2%2BJFdB8Rrm83B%2BLqua7pyLE8lArpWc7Pmz2i7gSTQ2zf1A7bie8h4mJ0fUxnZ3k1gytagbKkRVj%2FP1zXiKwH6OcFNVyd3nuSYE0MsHJIJ73GZFBvNKQ4ZPTzurmokamNCniG7KrZYSqlP33m6bvao9QU9YktYXy6NdiC31gNc6tL4vIvfmzf19tIHJ5LkH1CIIFLaoGMXW%2BhKCiwdJ7jdurebEzSaARAVONmibtMzjJ1LtawncZqDP%2F16M5UAGgFN4JGlsw2%2FPDyQY6pgHKAAIjEucFkwjFHVzlHcH1WMyHWk8U%2BiLlpTa6HkbzsSv3xWKKv6ihU6BmkMi9Py9I3Swj2dSYgO8t67Lxt1TgxOfQDUiEEdPmcw0Bq7udhPB6fF5ax90nZoBzxGSqiPhwcrFHkdLDXXCdiElRKBrwV8Qf4vWxWNpisTaCL0OyhnFhCi2Kl8%2Ff62EGhMXcRVwetLRb2%2BMBW1RIrgs1r14tiRtCDhIA&X-Amz-Signature=8707850e51e3ee0a038900e78f98080f184f1d4065f24a0a1b39192c6c76a0d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665BBIQ26%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIANbWKbjybVewZ1G0Jw1u%2F%2BQTvkgR%2BSeG2a62swkwd2GAiALNkRp0JVzY%2BEdB4IWQWO65BWucLAu3JVABt7e%2F2cx0ir%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMjF8sdVDHOXHDKyzrKtwDepNvpx4jcEVuvwcYUhSzZa8HGCrFmDwtun76frAmVivRfWypvO0HRbNLAmiH%2Bky2KNrmCyx1uZYn2atjHN8PZOWezElvdcn9uO5LYc2Sv2Jr0rkhx264dU84svmYCZwGHG09Q82i8yF4YTm49kSR0Qb4MhmxvMBy1jREas6dKRsqVYuqm6zKOqQTsVPq%2B2K3rj%2FWWKFHiQ9C%2F5QzU4l3uCTjZGVAsZS2ekXyzGlLomXIMq1JVTPt4m2BcvHo7wdhhsPShlxATjDx%2FS6MnVrjeIpn8Cm0bN%2BnCEvVXXOF%2BTmCt%2F8or4YyyuaQzij4mKSbLQeHQleWQ0LtJ5kMy%2F7VkruU%2FP3QsbY2Zx5cUo1wy38%2FjbOoz1kyK2%2BJFdB8Rrm83B%2BLqua7pyLE8lArpWc7Pmz2i7gSTQ2zf1A7bie8h4mJ0fUxnZ3k1gytagbKkRVj%2FP1zXiKwH6OcFNVyd3nuSYE0MsHJIJ73GZFBvNKQ4ZPTzurmokamNCniG7KrZYSqlP33m6bvao9QU9YktYXy6NdiC31gNc6tL4vIvfmzf19tIHJ5LkH1CIIFLaoGMXW%2BhKCiwdJ7jdurebEzSaARAVONmibtMzjJ1LtawncZqDP%2F16M5UAGgFN4JGlsw2%2FPDyQY6pgHKAAIjEucFkwjFHVzlHcH1WMyHWk8U%2BiLlpTa6HkbzsSv3xWKKv6ihU6BmkMi9Py9I3Swj2dSYgO8t67Lxt1TgxOfQDUiEEdPmcw0Bq7udhPB6fF5ax90nZoBzxGSqiPhwcrFHkdLDXXCdiElRKBrwV8Qf4vWxWNpisTaCL0OyhnFhCi2Kl8%2Ff62EGhMXcRVwetLRb2%2BMBW1RIrgs1r14tiRtCDhIA&X-Amz-Signature=a19502aec110daccf87b45e2f04b2969b0a02b71749490c7edcf30b3de35b84f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

