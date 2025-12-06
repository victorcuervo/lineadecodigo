---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JW6JAXU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8IKBLSEGUDYchUQh8I9D1YTbmhb048oAz5T%2FS6MHYIAiAxHvO8ztGXQ9Kakn%2BvMsgfXSEu4ZYsrn7mzR%2FzZ4S8Mir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMGRxUzDAyzewLw%2F%2FNKtwD5mVH6uOFHckmHGW2XTF3%2F3NxIv5E9C8ALQdqtVd8Wpba8%2BBPmZD0ZbJNCHr7FsprQKxlFTpgydI%2FCw5g22jLxdJ5Gjje8YWmIt76R3joPay3JdK1pEB4VrqLDxBm8FL0D5DRD77aKWBcFS683GCdGslMBLaxWC6w%2FQil%2BA2lIw1D1jHmuHyfcU%2FO34XYA585Kbxnd4KztT51GnOzTgMgp7OJAfNomz9y9QiNG8KxUHfYbYrKknkHgQ4R6ljThbMei4TpXlGkot2FRV5OulVpBfno4Wl3XG4YfKq9Pqv5HBYwkIgOH7uj1FMtpI5ifUpI8%2Fo95qS2ab9%2FWNfX4dXjnSjFbDUPqffwlYOcU29cB5id6t9D1AVnwvfsS0iw9cc8bQCa%2Bh9TxS29Q4pAR7n4uIgwO4RI8%2BTQpBESG8%2FaCnA2Goge1RkoKqUt%2BS%2FGKmGo5pCbapkFycdEimPyWEEmDHOp7YzvSQBOzP9j%2BOEd5pnURtxfGX3PQN7YBN2sMQxT4Q0UaZFgbFWuYFltH9Dr3%2Bb9rukq0OwmhPAfaJjZAQLFeDz8xczciaqW%2F%2BnR8DWjWgkVvwlTVOHODbsCe4z10GFtcEiSGuX544ZEL6jIyT1XQ4oXp7gIEXbP2nUw9OvPyQY6pgHbv%2B16GLEew8m5Vo1FD%2BcelDAwV%2F%2BzA33iOedSARJ%2FW4jW1tcDhqzU2os1vFqws97VPxcGLHdPO6K%2FfletgJ58ArYLPi7QHRXSMQDL891%2B%2B7D8ZwZKjBoIUo70BqW8NxsEP5VIE8kLTfOuoGtUQ21CoI%2Fxj8IWOZ1atWwsxucVwaq7XqgICmAWggG3Rc4Wvt94edrjl1zGM5wrLmYROIaXStESJif5&X-Amz-Signature=a9cb9b86c89fa2b1ee045c901228e4d9fd84d8c7aa8a96587191db3b92a2aa78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JW6JAXU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T100718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8IKBLSEGUDYchUQh8I9D1YTbmhb048oAz5T%2FS6MHYIAiAxHvO8ztGXQ9Kakn%2BvMsgfXSEu4ZYsrn7mzR%2FzZ4S8Mir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMGRxUzDAyzewLw%2F%2FNKtwD5mVH6uOFHckmHGW2XTF3%2F3NxIv5E9C8ALQdqtVd8Wpba8%2BBPmZD0ZbJNCHr7FsprQKxlFTpgydI%2FCw5g22jLxdJ5Gjje8YWmIt76R3joPay3JdK1pEB4VrqLDxBm8FL0D5DRD77aKWBcFS683GCdGslMBLaxWC6w%2FQil%2BA2lIw1D1jHmuHyfcU%2FO34XYA585Kbxnd4KztT51GnOzTgMgp7OJAfNomz9y9QiNG8KxUHfYbYrKknkHgQ4R6ljThbMei4TpXlGkot2FRV5OulVpBfno4Wl3XG4YfKq9Pqv5HBYwkIgOH7uj1FMtpI5ifUpI8%2Fo95qS2ab9%2FWNfX4dXjnSjFbDUPqffwlYOcU29cB5id6t9D1AVnwvfsS0iw9cc8bQCa%2Bh9TxS29Q4pAR7n4uIgwO4RI8%2BTQpBESG8%2FaCnA2Goge1RkoKqUt%2BS%2FGKmGo5pCbapkFycdEimPyWEEmDHOp7YzvSQBOzP9j%2BOEd5pnURtxfGX3PQN7YBN2sMQxT4Q0UaZFgbFWuYFltH9Dr3%2Bb9rukq0OwmhPAfaJjZAQLFeDz8xczciaqW%2F%2BnR8DWjWgkVvwlTVOHODbsCe4z10GFtcEiSGuX544ZEL6jIyT1XQ4oXp7gIEXbP2nUw9OvPyQY6pgHbv%2B16GLEew8m5Vo1FD%2BcelDAwV%2F%2BzA33iOedSARJ%2FW4jW1tcDhqzU2os1vFqws97VPxcGLHdPO6K%2FfletgJ58ArYLPi7QHRXSMQDL891%2B%2B7D8ZwZKjBoIUo70BqW8NxsEP5VIE8kLTfOuoGtUQ21CoI%2Fxj8IWOZ1atWwsxucVwaq7XqgICmAWggG3Rc4Wvt94edrjl1zGM5wrLmYROIaXStESJif5&X-Amz-Signature=34828fa769d7bf498b55a20d642b33f4788bd96a5bba70484c6536aed868b745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

