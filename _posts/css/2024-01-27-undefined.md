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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REMOQIV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICr8yhlZkX1zjODmZZk4guWPVkB9ukT0MoJmt9GBQLPAAiBfvV1xzc3BqYpSAQCSBCz3gdeE9IHMriOdNrUNExS1Pyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM0mhKcmCkANwPGxndKtwDNAKioSIRVvJVgsvKCsnuSlZ2x18pjqC0qZsNaLqwV9Q3eUQXMqsAT9zD2qZbWfaDGFqPzk19EZKcYKge203F4qoMvs6GptCLrrnudmSqP9PjREAX0ypBVYHRBwHKH49llNxmgEQjIepbv%2BdpaZqtApIH%2BeJDiaPl3weuAC9DDD5fQVd6%2Fx92vYF7uaPhHSQY3w%2BgfQjsjXwWv85KF7iQIx2Zhzhe5xI7OPYWB8TmBmyNtU4PmgVr6bRcr2%2B8wSce6tiUTiVZR68cFmPmyIYyNQ43OxCJ8MjYxR0iZGrhLGgD3MBu261nUiNrrstfUbUAbnuEPyokXjt71aagzyHITU15%2F2THlt0q%2BWInoyeBx9UZC9n0kllN2x5zqPT35PikmpIvfUDSo8AxgnA3Vi%2BndumO6PFKZL7yeyZkBTsqXvgU6agbZpCMxeFvbdiGTzTfVJnkanNiJuvrG31KDP5GBLj6ErduqiY0To8MwciFDpAGDnXWWAmgIWVzv1idxOwWxPvHCBIxqkzE%2BN6EBNtF%2BOtG8WLY00ICzN9xT4UvgWOa5dNEAPpvyJgdjWnvAq4UmMwnA36Oymu9mmN3Er4D%2F0IBMSn%2B9g2lIhr7UMbvvc6zwZ%2FYIN10UNZulb0wtofByQY6pgF0iv8HFXXOqJprzY96mNKMN%2BG9ve%2FaXJG%2FXjpeaFgKxrix22Jyhx4C5WxcthlFBPDPzRdbsipWJs%2FdgwAYdLAzDvm9aFozx7jL5MawEJyJskdP3GG1tdKi0D9cXvjawhQX4xMjwrgX6wlwA4L9znrjC8Csu1H2bgljpj%2BanKP9yNjfj%2BWsdYwIpJLk4vruXq3psjGR6Fno%2FouKBl6hsdcCNzMSKFbp&X-Amz-Signature=07af781a9c082d70f6d8459bbf8b971ba8f2aaf72920e26ae0b8e7069654f4ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667REMOQIV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCICr8yhlZkX1zjODmZZk4guWPVkB9ukT0MoJmt9GBQLPAAiBfvV1xzc3BqYpSAQCSBCz3gdeE9IHMriOdNrUNExS1Pyr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM0mhKcmCkANwPGxndKtwDNAKioSIRVvJVgsvKCsnuSlZ2x18pjqC0qZsNaLqwV9Q3eUQXMqsAT9zD2qZbWfaDGFqPzk19EZKcYKge203F4qoMvs6GptCLrrnudmSqP9PjREAX0ypBVYHRBwHKH49llNxmgEQjIepbv%2BdpaZqtApIH%2BeJDiaPl3weuAC9DDD5fQVd6%2Fx92vYF7uaPhHSQY3w%2BgfQjsjXwWv85KF7iQIx2Zhzhe5xI7OPYWB8TmBmyNtU4PmgVr6bRcr2%2B8wSce6tiUTiVZR68cFmPmyIYyNQ43OxCJ8MjYxR0iZGrhLGgD3MBu261nUiNrrstfUbUAbnuEPyokXjt71aagzyHITU15%2F2THlt0q%2BWInoyeBx9UZC9n0kllN2x5zqPT35PikmpIvfUDSo8AxgnA3Vi%2BndumO6PFKZL7yeyZkBTsqXvgU6agbZpCMxeFvbdiGTzTfVJnkanNiJuvrG31KDP5GBLj6ErduqiY0To8MwciFDpAGDnXWWAmgIWVzv1idxOwWxPvHCBIxqkzE%2BN6EBNtF%2BOtG8WLY00ICzN9xT4UvgWOa5dNEAPpvyJgdjWnvAq4UmMwnA36Oymu9mmN3Er4D%2F0IBMSn%2B9g2lIhr7UMbvvc6zwZ%2FYIN10UNZulb0wtofByQY6pgF0iv8HFXXOqJprzY96mNKMN%2BG9ve%2FaXJG%2FXjpeaFgKxrix22Jyhx4C5WxcthlFBPDPzRdbsipWJs%2FdgwAYdLAzDvm9aFozx7jL5MawEJyJskdP3GG1tdKi0D9cXvjawhQX4xMjwrgX6wlwA4L9znrjC8Csu1H2bgljpj%2BanKP9yNjfj%2BWsdYwIpJLk4vruXq3psjGR6Fno%2FouKBl6hsdcCNzMSKFbp&X-Amz-Signature=70ae8b775e41f705103e03679edfe30594acaadcb62b7b8691b2e2af8e0f526c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

