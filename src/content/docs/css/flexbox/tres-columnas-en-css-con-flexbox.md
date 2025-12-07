---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652IY5FRB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAHWTe1XBycQPKG2ceXfWmm6oG0Ye0REQf1bUoW2AbXAiBcjyyIqZ6OTmlgQqkOcwZTxzmW1mIKoNLcnKrshAEyRCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMENp%2B%2FCrJI%2F8vaSQCKtwDEQyKUGDNRhO0xj5p28fw%2BWE2YbwbqeDM1SQtK8oRP2JfM78T0a9HVonHZxBI21ztsMDxanvpYdlGjC3sCTh7eHhJYVpsTkywOr4Xkff20Gsn3TFjrz8FmhpAX8BStNLE2jXRWat7p8soZkkZuIsUtJkZjwag%2FpZrrekIizi1f4oDuSxaZCzx6DsxYbeppwpkUTiAZlV5EOWDev9nDtZUyeUwMn2Nwm%2BNis8pKoPFr2KZ00pRzr8YxUEbT4tU6QsCPbcXaVroesgj1QfrtmSTSAozS1QzuAjVQqJ2Yanjk4vqMnoLGaHPhGRVhMDZ19cXhxSew8M0HpGEFmDKSaFwDHbsy%2F6DGpEOs2h1a3YPFwUZvKriIPQyTX4rSZDJGqrgdZn8MGz44sKfh6GgaVt6CpyQIi%2BwkAh%2FOq7PNRWHEfcKhGQnlmMro1fAk7ba%2BQdhuy0x3YYribb7%2FJJOeOB5N18Z6YD2LGtECOOihMh9gmSJjrfDqeoGnPNedM%2B2EqGZi39Rm%2FhkHkh6Hb0NSNJcofu3oiClHOqNqa%2BAgRYFOk6PtHzCFAck2Kzm3VBUmt1tfu6zytP%2FWuNsDvBKy%2BJ8YS0MEVnr7cw5tWgLuDO2f8IfE8yqCYEflcSB9Q4wqpnVyQY6pgFHW7IS8zxPIb5S9nhRTDp%2FMJaQsC3JEILWa%2BFw39q9eOOoDpa9h8sNoT5fnn83K48Y0AXcrEVUl07gc%2FGezttlFToCCvCIWaJR61TLlPk3F1C6tU8P8FG%2FRtnxsfVx2AXHlHqXXpCENY3Q43rrf%2FaKC8h1%2F%2F5dW1wBLUKFvX3RAlO2xunqnB5TLgJ4o53fUU1wyAH6uaJH%2BDRB6c7rtFPLCE11Amn2&X-Amz-Signature=02efee2fa1cfc27a9de43cd0cd1fd71c0e7b6df0587b8f235c4fbb105d508100&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652IY5FRB%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGAHWTe1XBycQPKG2ceXfWmm6oG0Ye0REQf1bUoW2AbXAiBcjyyIqZ6OTmlgQqkOcwZTxzmW1mIKoNLcnKrshAEyRCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMENp%2B%2FCrJI%2F8vaSQCKtwDEQyKUGDNRhO0xj5p28fw%2BWE2YbwbqeDM1SQtK8oRP2JfM78T0a9HVonHZxBI21ztsMDxanvpYdlGjC3sCTh7eHhJYVpsTkywOr4Xkff20Gsn3TFjrz8FmhpAX8BStNLE2jXRWat7p8soZkkZuIsUtJkZjwag%2FpZrrekIizi1f4oDuSxaZCzx6DsxYbeppwpkUTiAZlV5EOWDev9nDtZUyeUwMn2Nwm%2BNis8pKoPFr2KZ00pRzr8YxUEbT4tU6QsCPbcXaVroesgj1QfrtmSTSAozS1QzuAjVQqJ2Yanjk4vqMnoLGaHPhGRVhMDZ19cXhxSew8M0HpGEFmDKSaFwDHbsy%2F6DGpEOs2h1a3YPFwUZvKriIPQyTX4rSZDJGqrgdZn8MGz44sKfh6GgaVt6CpyQIi%2BwkAh%2FOq7PNRWHEfcKhGQnlmMro1fAk7ba%2BQdhuy0x3YYribb7%2FJJOeOB5N18Z6YD2LGtECOOihMh9gmSJjrfDqeoGnPNedM%2B2EqGZi39Rm%2FhkHkh6Hb0NSNJcofu3oiClHOqNqa%2BAgRYFOk6PtHzCFAck2Kzm3VBUmt1tfu6zytP%2FWuNsDvBKy%2BJ8YS0MEVnr7cw5tWgLuDO2f8IfE8yqCYEflcSB9Q4wqpnVyQY6pgFHW7IS8zxPIb5S9nhRTDp%2FMJaQsC3JEILWa%2BFw39q9eOOoDpa9h8sNoT5fnn83K48Y0AXcrEVUl07gc%2FGezttlFToCCvCIWaJR61TLlPk3F1C6tU8P8FG%2FRtnxsfVx2AXHlHqXXpCENY3Q43rrf%2FaKC8h1%2F%2F5dW1wBLUKFvX3RAlO2xunqnB5TLgJ4o53fUU1wyAH6uaJH%2BDRB6c7rtFPLCE11Amn2&X-Amz-Signature=317190ab1064fd5f6733771d9036e1bb2ac1fae6abd1afb02a2a4e0d30928d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

