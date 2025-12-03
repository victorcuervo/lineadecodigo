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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW33RS2L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGa1HEOdlsDykM2BNssDmQ5r7zoraWbXc6y6B%2F2UThsmAiEAz0K3vFt8TzNX4QvagDdDz4d8X1m2AfevNMQsX7TIZt0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDAX8MhbplSuWSpBcdircA2mbiQVjLu9IPm3qnjBiBCy0knaEja%2BHjPdnfNT3zE0uUY1RjSF%2BjSOUaLJYz89512liM3%2F3bZjGRAdOO4sMfyXaQwjkd75u%2FdDj8sglefFw1akC8i0FhhqdX8x6oBtONav0MCgdq1ASFKdmHDfSeb5OdLHt6rBYxLSYtyp%2BoD9I%2FLi59YzV6rABhfLAwyw4d3mX%2BAJhviznb7fVj8fy3%2BiSuFvY7eV0Movclan0fnq3ag%2BowU5irCxrIGYUxjfFgTZOm6NWFeWS0Z7JU5vCsOTObifOVcZJAumsQdPFXCdg%2FG1%2Byp4RzNHSr6HAP4jSvticqBQwquj7Asb6LApOZRrQnoO9w0EkO%2FnnHGY%2Fj1auFpmA4zKkCOLYRyUtRObvKV75e7yYP7qkP0Vk4AW6p%2F2BmNsQ71y%2B3dyc9D3gSZkyku5B3l3UKXsFP0YeYXjs9mCWefyBa7pRZMzKVvflFZWpTGYNFD%2Fu9sSh7fKzmi%2F8cveKaobymx29eE0x6XMVaM%2F6sauUHfzzMwB97Ue8DROuBJUWyCvxSZw7hb%2BchCwkbQV0DNEw70mSW50DNFZdcu8Z74eD5wEphluSsmcsEIrviOsMxpwRZjmYD7Q0o%2Fw3u2DBTVD%2FnMqAotovMJrawckGOqUBtqzrz%2FjBzDCAJdIsx04tKxFQapQzrDCWvhD4u1GnYwFomGoDkscV6pCeppQdBPHH7XGQO%2F5tjkEPMlGHJFIH%2BjlcDZ0PtCRVlITbY5nZmlB9gioTtU3xRnnYCfmCHKZp3PXtGaOhE8TWR3Ts5iIts5jMGfadWwWT0ablMy03qmPb%2BqjC%2Bw5hibUGTvSzewa%2B67PxsTVSM5YNrBxcq5Pu3CttlL82&X-Amz-Signature=9a83cde1d0fc7aad88214241c4b3a9cbd7ce9de0c17a0e599411ebc99f7d24f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW33RS2L%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIGa1HEOdlsDykM2BNssDmQ5r7zoraWbXc6y6B%2F2UThsmAiEAz0K3vFt8TzNX4QvagDdDz4d8X1m2AfevNMQsX7TIZt0q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDAX8MhbplSuWSpBcdircA2mbiQVjLu9IPm3qnjBiBCy0knaEja%2BHjPdnfNT3zE0uUY1RjSF%2BjSOUaLJYz89512liM3%2F3bZjGRAdOO4sMfyXaQwjkd75u%2FdDj8sglefFw1akC8i0FhhqdX8x6oBtONav0MCgdq1ASFKdmHDfSeb5OdLHt6rBYxLSYtyp%2BoD9I%2FLi59YzV6rABhfLAwyw4d3mX%2BAJhviznb7fVj8fy3%2BiSuFvY7eV0Movclan0fnq3ag%2BowU5irCxrIGYUxjfFgTZOm6NWFeWS0Z7JU5vCsOTObifOVcZJAumsQdPFXCdg%2FG1%2Byp4RzNHSr6HAP4jSvticqBQwquj7Asb6LApOZRrQnoO9w0EkO%2FnnHGY%2Fj1auFpmA4zKkCOLYRyUtRObvKV75e7yYP7qkP0Vk4AW6p%2F2BmNsQ71y%2B3dyc9D3gSZkyku5B3l3UKXsFP0YeYXjs9mCWefyBa7pRZMzKVvflFZWpTGYNFD%2Fu9sSh7fKzmi%2F8cveKaobymx29eE0x6XMVaM%2F6sauUHfzzMwB97Ue8DROuBJUWyCvxSZw7hb%2BchCwkbQV0DNEw70mSW50DNFZdcu8Z74eD5wEphluSsmcsEIrviOsMxpwRZjmYD7Q0o%2Fw3u2DBTVD%2FnMqAotovMJrawckGOqUBtqzrz%2FjBzDCAJdIsx04tKxFQapQzrDCWvhD4u1GnYwFomGoDkscV6pCeppQdBPHH7XGQO%2F5tjkEPMlGHJFIH%2BjlcDZ0PtCRVlITbY5nZmlB9gioTtU3xRnnYCfmCHKZp3PXtGaOhE8TWR3Ts5iIts5jMGfadWwWT0ablMy03qmPb%2BqjC%2Bw5hibUGTvSzewa%2B67PxsTVSM5YNrBxcq5Pu3CttlL82&X-Amz-Signature=2cc20574fa560f909d516c0b1c83cbb25947c8e7fb958d52e784ce9d5f688fea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

