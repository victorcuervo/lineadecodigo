---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWB5KTEO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBexXcYzGgLd3IlhXBcwny83gXe3GDW8M2XY0V%2Fd5QkbAiAQVyI0QtHQCAL7Y9vFzQOt2EgTlzzx45sNYyhG7mZQxCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMbYRjvmaMg2EDbcuXKtwDUj670t1qHqsE%2BAc07Lk2pR6iooHojddMoXp0WuD8EHkhnt5ayxpwclBmr7%2FbfmO6wAoLdIbkcxWwz%2BBtP2waQ2AQz2kqGRoMcFQ0L6htwGWn7qPnX47n2OuLENkPJY947poO0RsKNuUqYy%2BZqwJwZeSdKBp2bRwLv6K7Uo4X0GVhEd%2BPRPSpUGcynEHhF2Z3eaMZA5inXLFuOYUfEEPQ3eHkgaXkUsU1ECWakKn%2BEK9Q19YeqFYLtwyi36YVmGwjg5qNSSpX94A340vHtG89UDWg5%2BBstdEVMI93yIiZnCW6iH7NsIPyINfX9lGAx5%2FXgJbfTLcDKef%2FoDuulTh8hBw1ZIGuOw7Attgle5SbiVrdyDEHuqNPBaCUI4rJXZnqZvbkFO6eiE73GxqP6ZoTRadGrjOPTLJMUv9OZP3%2FELN0EcbHgW1a1bJdgat%2F4%2BDa7dPhap5slPcuwntRByUGaHL3VzgBDwr7wE0P2PezGCBvFxbi4XGbXDvFM%2BTozGmBp%2B2FFgntvkxpcqlKyosCRc2E4HjCGzdPMqBfBvLMS0OlsEghbXZCEAX6vCqND641QIzs7Y%2BE39Z4jCjYZQ867TqUrqurZ%2BbyMU93zHGFwpKCyJCf78vlgBgW8eMw8czRyQY6pgE7PV1Qf8LfiNWVt%2BfwGbhH8WLL7m6vrBFDFIYd2M8vUB%2B0A8YlYZibdyPtZPTrKh%2FPCCrSwqkl3pzchGhrWP3PUhmI2iTLTgxo9IqNl03tyLBhG8lOArSCdmvKL52j0ANXPSmOXRKLXTde93uz0UmkxULJ%2BEW3g36A%2B7aWBnS3QxTPplcfDCg6YQjs7rcfX5qvruup2saDDCjtHDOec1OD0%2BDJWImX&X-Amz-Signature=c1d7dc3076888c841ce95c07d9503dc6625ca12a09e7718a0bf1f16bd5c8796d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWB5KTEO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T174859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBexXcYzGgLd3IlhXBcwny83gXe3GDW8M2XY0V%2Fd5QkbAiAQVyI0QtHQCAL7Y9vFzQOt2EgTlzzx45sNYyhG7mZQxCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMbYRjvmaMg2EDbcuXKtwDUj670t1qHqsE%2BAc07Lk2pR6iooHojddMoXp0WuD8EHkhnt5ayxpwclBmr7%2FbfmO6wAoLdIbkcxWwz%2BBtP2waQ2AQz2kqGRoMcFQ0L6htwGWn7qPnX47n2OuLENkPJY947poO0RsKNuUqYy%2BZqwJwZeSdKBp2bRwLv6K7Uo4X0GVhEd%2BPRPSpUGcynEHhF2Z3eaMZA5inXLFuOYUfEEPQ3eHkgaXkUsU1ECWakKn%2BEK9Q19YeqFYLtwyi36YVmGwjg5qNSSpX94A340vHtG89UDWg5%2BBstdEVMI93yIiZnCW6iH7NsIPyINfX9lGAx5%2FXgJbfTLcDKef%2FoDuulTh8hBw1ZIGuOw7Attgle5SbiVrdyDEHuqNPBaCUI4rJXZnqZvbkFO6eiE73GxqP6ZoTRadGrjOPTLJMUv9OZP3%2FELN0EcbHgW1a1bJdgat%2F4%2BDa7dPhap5slPcuwntRByUGaHL3VzgBDwr7wE0P2PezGCBvFxbi4XGbXDvFM%2BTozGmBp%2B2FFgntvkxpcqlKyosCRc2E4HjCGzdPMqBfBvLMS0OlsEghbXZCEAX6vCqND641QIzs7Y%2BE39Z4jCjYZQ867TqUrqurZ%2BbyMU93zHGFwpKCyJCf78vlgBgW8eMw8czRyQY6pgE7PV1Qf8LfiNWVt%2BfwGbhH8WLL7m6vrBFDFIYd2M8vUB%2B0A8YlYZibdyPtZPTrKh%2FPCCrSwqkl3pzchGhrWP3PUhmI2iTLTgxo9IqNl03tyLBhG8lOArSCdmvKL52j0ANXPSmOXRKLXTde93uz0UmkxULJ%2BEW3g36A%2B7aWBnS3QxTPplcfDCg6YQjs7rcfX5qvruup2saDDCjtHDOec1OD0%2BDJWImX&X-Amz-Signature=dee4ea356a62b850ff19eb7fd92b40710430c2f83d98b0bc3504f5b271a6af19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

