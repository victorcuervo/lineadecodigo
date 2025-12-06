---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U75OVXFT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXCqZZFVg6XS8PiNsx7GKjxEYQKUtfyokLC1J6vuQp6AiEA0%2BCeCFSm%2B4rrMNhWq3YhcKMgEDq6UhcIRf8vmdIMTpcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCFzIUW8Ksccx4fltyrcAxjvwZ144%2FO9avlpZswlploM9W6jLJTblAL3xFgEkcjMZVIbaKioVvjViIOAD%2BRLN6UDSDuHCxL1jZldXlF3tuQeOmKCKAJMqWlVQupp25hqDjZgQa1jWN2ZJj6ve4i2t9fKgy1XPQ%2B0gZGPBWxbXp%2BSXvUm9FkUYGatjpT9eQ5uGSsecOZGEabIatSnrAYuoTPeuhZ3350vo1vTlKg3dnvECBxpBTXhik%2BlNrIz%2BxWFhlzcfM6pp9ijp3y%2Fj6P45BWsTgJncpk%2BSkAl7Qi3980Uc4nY7QcL2DMOZrP1mKdcR4Bs2qEkz1zybB%2BjfAFN%2BAtdH5xjqmKco%2FGhL1Wl18nv3yzoX6ON15xBHBqcJ%2B%2B3Ryd0r7mz97xjp3MIMOhIRVzWByHywEFC1yO3LpBnDz2nz97wGTMHD1Mi5UBQWhrTzPvZEz54rX8VMpdG0kYB2PFe8lzr3d2N9gTYZfv4gydFHQidnJGA1kRJCjojUYppjE3GCIkMayTvK86aALHli6g%2B3n5fINTLktXfI9xt%2F5%2B6EK3wBoRxpdwkwUAx%2B%2B5OSj%2Bha%2BF0mTv0aDwiaCu2ZCny10i7OCJgBMEGbfndi73lJ6EEOQoeukDaQ4RBM6bAr6Rn%2B%2Byy47BctZDIMMOm0MkGOqUBxYaeUrPshebk4eGEoeMRGRxhr6GIoF3e65NaiXDO10%2BAn3gP3gZy9hUDRtPaqggv5UEz3p4JKOiTYw%2FTjeZiUZLpRt68bqUFnEEuS8XFHvFXpCplMOO7tOy6pwWXcKnq0Cx4vN3dmdSlPezxeE05meU%2B5xkrHHRplUT5gq3cgQmmW07pq%2BxL5e6xqAMg3n4lxCMeCQPnBh5fXTSFWJBpW%2FGiVyrU&X-Amz-Signature=35e9a08bd9ddde1f1284a727ad1afe8a62f6c8fa68213af32ffd05fed8c2a621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U75OVXFT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXCqZZFVg6XS8PiNsx7GKjxEYQKUtfyokLC1J6vuQp6AiEA0%2BCeCFSm%2B4rrMNhWq3YhcKMgEDq6UhcIRf8vmdIMTpcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCFzIUW8Ksccx4fltyrcAxjvwZ144%2FO9avlpZswlploM9W6jLJTblAL3xFgEkcjMZVIbaKioVvjViIOAD%2BRLN6UDSDuHCxL1jZldXlF3tuQeOmKCKAJMqWlVQupp25hqDjZgQa1jWN2ZJj6ve4i2t9fKgy1XPQ%2B0gZGPBWxbXp%2BSXvUm9FkUYGatjpT9eQ5uGSsecOZGEabIatSnrAYuoTPeuhZ3350vo1vTlKg3dnvECBxpBTXhik%2BlNrIz%2BxWFhlzcfM6pp9ijp3y%2Fj6P45BWsTgJncpk%2BSkAl7Qi3980Uc4nY7QcL2DMOZrP1mKdcR4Bs2qEkz1zybB%2BjfAFN%2BAtdH5xjqmKco%2FGhL1Wl18nv3yzoX6ON15xBHBqcJ%2B%2B3Ryd0r7mz97xjp3MIMOhIRVzWByHywEFC1yO3LpBnDz2nz97wGTMHD1Mi5UBQWhrTzPvZEz54rX8VMpdG0kYB2PFe8lzr3d2N9gTYZfv4gydFHQidnJGA1kRJCjojUYppjE3GCIkMayTvK86aALHli6g%2B3n5fINTLktXfI9xt%2F5%2B6EK3wBoRxpdwkwUAx%2B%2B5OSj%2Bha%2BF0mTv0aDwiaCu2ZCny10i7OCJgBMEGbfndi73lJ6EEOQoeukDaQ4RBM6bAr6Rn%2B%2Byy47BctZDIMMOm0MkGOqUBxYaeUrPshebk4eGEoeMRGRxhr6GIoF3e65NaiXDO10%2BAn3gP3gZy9hUDRtPaqggv5UEz3p4JKOiTYw%2FTjeZiUZLpRt68bqUFnEEuS8XFHvFXpCplMOO7tOy6pwWXcKnq0Cx4vN3dmdSlPezxeE05meU%2B5xkrHHRplUT5gq3cgQmmW07pq%2BxL5e6xqAMg3n4lxCMeCQPnBh5fXTSFWJBpW%2FGiVyrU&X-Amz-Signature=3008df7a5ae1e8ca90238d50302b53334663b727ee8c62bbc477559d8beeff2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

