---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GOZFFSM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIDMFzA1PCmVQIr%2BmnRBw3Tj%2FpWwYe8B5tv%2BtVR57%2BB6YAiAhgFByqiIPxPWgnpWdx0IhcWlk04P47SwQCl2ShsYrNSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMZ9tYki3KIVnW07FjKtwDe8A1AQ%2Bb6irTJRlCi9EsPhiGFNDY1JQfrR4a0GvZViUWcE6tsl0Jwf%2BFQiGJoe%2BGjLTAGYCgVkUkticR1zL2VZMT3o3A3Xb52OLK3E5%2F99q2iRdKBug9nS5n69KtuT%2F8uAyonjuSeqjgPMLE763bHGqW61w7s9x6q8S0T0EcQUNIMQQa0ShWXrBiBpYLI%2BhQHsgkvCEpD0PNIzshtJ3wL%2FWuuESNRvYAcsaNKajRI%2FvrsnNQkLzv6ICPMmhlp2yFCadMS0zpZ64RkguiBvP2FXIwJnpT9gpNeWSX75FtchqkcEZoezujY%2BGEJGRuW4yysUwDJ82pNcCb05gtrBbbnTo1g3vemJkPwfQaBiBBmX%2FM%2BNITj9HQ4g9CBih7KYVl82BnPxQ8vXFjfZMaDl8WxcNDjn1ogeq2hZYMBvyqopVoUD%2BJWyvT17POfrp0jnDQcjwclKBwTyNjMUl6ReH4St5tXsLco5JEgmWGZrncXpODy2r6CYoi6JpG4HPQwCbU4n9SEkjlceec34LI5sYfF9NBi%2FE2RYlDh7MVbbehKUhug5Swsqn2iJ1sh7Ig9VRj3zP87Czw82qYmSGI2ftf1zKd%2Faax5n%2BWL4qrUUfhLTU4646bVQTxi1sGBwMwsL7GyQY6pgFB%2BZfejSjCNXufGLWbR9E%2BhB%2FFG8bOt56al3EmGuIhWgKr0OZW6ldxt9bLZ2agyRMsyYmndOcsHPFogNx%2BGO2sYP3y8Aj9n0fROfXO8SJbH77EH%2BT%2BLOOBIyLxQu%2BFzAWD7S%2Feywz77VT46g2XLioTCNvO1mwkuiqlzzg6WHwVqvPWRMscHFtCM7gHxwA4buKTdvYpaPMDupF1zrvTa99wJpmuWuvV&X-Amz-Signature=44cbf307ee69044c401cb18db4d272680d4e5918b99a53a7d50562e3474c9ec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GOZFFSM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIDMFzA1PCmVQIr%2BmnRBw3Tj%2FpWwYe8B5tv%2BtVR57%2BB6YAiAhgFByqiIPxPWgnpWdx0IhcWlk04P47SwQCl2ShsYrNSr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMZ9tYki3KIVnW07FjKtwDe8A1AQ%2Bb6irTJRlCi9EsPhiGFNDY1JQfrR4a0GvZViUWcE6tsl0Jwf%2BFQiGJoe%2BGjLTAGYCgVkUkticR1zL2VZMT3o3A3Xb52OLK3E5%2F99q2iRdKBug9nS5n69KtuT%2F8uAyonjuSeqjgPMLE763bHGqW61w7s9x6q8S0T0EcQUNIMQQa0ShWXrBiBpYLI%2BhQHsgkvCEpD0PNIzshtJ3wL%2FWuuESNRvYAcsaNKajRI%2FvrsnNQkLzv6ICPMmhlp2yFCadMS0zpZ64RkguiBvP2FXIwJnpT9gpNeWSX75FtchqkcEZoezujY%2BGEJGRuW4yysUwDJ82pNcCb05gtrBbbnTo1g3vemJkPwfQaBiBBmX%2FM%2BNITj9HQ4g9CBih7KYVl82BnPxQ8vXFjfZMaDl8WxcNDjn1ogeq2hZYMBvyqopVoUD%2BJWyvT17POfrp0jnDQcjwclKBwTyNjMUl6ReH4St5tXsLco5JEgmWGZrncXpODy2r6CYoi6JpG4HPQwCbU4n9SEkjlceec34LI5sYfF9NBi%2FE2RYlDh7MVbbehKUhug5Swsqn2iJ1sh7Ig9VRj3zP87Czw82qYmSGI2ftf1zKd%2Faax5n%2BWL4qrUUfhLTU4646bVQTxi1sGBwMwsL7GyQY6pgFB%2BZfejSjCNXufGLWbR9E%2BhB%2FFG8bOt56al3EmGuIhWgKr0OZW6ldxt9bLZ2agyRMsyYmndOcsHPFogNx%2BGO2sYP3y8Aj9n0fROfXO8SJbH77EH%2BT%2BLOOBIyLxQu%2BFzAWD7S%2Feywz77VT46g2XLioTCNvO1mwkuiqlzzg6WHwVqvPWRMscHFtCM7gHxwA4buKTdvYpaPMDupF1zrvTa99wJpmuWuvV&X-Amz-Signature=cf5d7c8b2bebf03db3e676bd84958bb8419d9c7a5098e46d1f57f9de56ce90c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

