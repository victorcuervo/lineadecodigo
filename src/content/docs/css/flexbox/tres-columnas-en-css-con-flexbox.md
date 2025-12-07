---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TSN7WQK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrWkUcwq%2FMqCQJK4KkELUFt2%2BndeA5KYxWuVEDoKkHfQIhAL6dxribvyluWGugJX20%2FAzyD0%2BH690ZU1ffSm%2FWf6YeKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSIPOAe3E%2BnkmzY1Uq3APWvklmLNgNxDVI9xqCLkJhIRDXDbRTAhUEmU0L1DJm2zN4bf1lmwM0bf3uCZKw8alo9BlBEbrz1FqoQWXIe%2BSE7aliBths%2BLFHZV8nuXczHsjxUktXqVMdTcQ%2BykszDFXXW7lNzvWTD8dkcnfSewgi406iFxTGFZY369WFetZu9SYsKFmBVzahnj2UxnRNZ5MOPWQG4sjYEYFyhnJO51qyZzkA2M0BXiWh0ze%2FQGu7FAW8PUKI635z6LXpK%2Bp0Xn619X5s6MJiJxm0uHdv61AtmHyjO93PHgAIG6JvafV4DDXRaJI9hjLDFrZAJzNXI7%2BMkB32K%2Fwc6tLpFmDeJj1UTJQqvR%2FY%2BuRfboKnMS%2B5i8EGDxKnxyIiOPgL5ajqE%2BPmvgAno5IH65qRtUczhlkP7chQMtEVmb7NMp8bBbrrLPgs9CseghLusdQJRgeHZ6YM5CjvWmIzXRuLXUpnVFAI408xJ4Nw7lF2gsKhmKIBJaoEIaKd%2Brc%2FK8xfSYh6vF6zKVFquY8vQUWmr3Cyihzw5zWCReelzTSXuxiof8FjZxBtOXV3hhUHRkezsu13l8Y2T8Cqe%2BvgcoAdYyv8O3bLqqKwJ2JErHl%2BciDdwgfMLK9EngwVyLrYhGT2KzCP%2FdLJBjqkARE8Z30kF1OcZfOB%2F1q3nvPvTWijsk9%2Bgw1%2FlbIPfv4ntLXDfY0%2FzP1ltJdqCfRDC3ia9XOGTUhDNcT%2Fi%2FiMcSmfl%2FweEniFj4H%2FXlzm4mrB58HwdwGUwuORbD9VCdoAk%2FKfMPujZyxlBn%2FQOvW%2BT7OCE2IDCfaLA9f9NwKUsLIoy0GQd42F6nwc8NLCbnWJLHOSnBS1g4uL0wkDjp%2B5A6VpEF2D&X-Amz-Signature=806dc2352fce9fb9e3eea39cbd1f7b21c0ee86b8e3dbe76cc60cc133672d5cb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TSN7WQK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrWkUcwq%2FMqCQJK4KkELUFt2%2BndeA5KYxWuVEDoKkHfQIhAL6dxribvyluWGugJX20%2FAzyD0%2BH690ZU1ffSm%2FWf6YeKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwSIPOAe3E%2BnkmzY1Uq3APWvklmLNgNxDVI9xqCLkJhIRDXDbRTAhUEmU0L1DJm2zN4bf1lmwM0bf3uCZKw8alo9BlBEbrz1FqoQWXIe%2BSE7aliBths%2BLFHZV8nuXczHsjxUktXqVMdTcQ%2BykszDFXXW7lNzvWTD8dkcnfSewgi406iFxTGFZY369WFetZu9SYsKFmBVzahnj2UxnRNZ5MOPWQG4sjYEYFyhnJO51qyZzkA2M0BXiWh0ze%2FQGu7FAW8PUKI635z6LXpK%2Bp0Xn619X5s6MJiJxm0uHdv61AtmHyjO93PHgAIG6JvafV4DDXRaJI9hjLDFrZAJzNXI7%2BMkB32K%2Fwc6tLpFmDeJj1UTJQqvR%2FY%2BuRfboKnMS%2B5i8EGDxKnxyIiOPgL5ajqE%2BPmvgAno5IH65qRtUczhlkP7chQMtEVmb7NMp8bBbrrLPgs9CseghLusdQJRgeHZ6YM5CjvWmIzXRuLXUpnVFAI408xJ4Nw7lF2gsKhmKIBJaoEIaKd%2Brc%2FK8xfSYh6vF6zKVFquY8vQUWmr3Cyihzw5zWCReelzTSXuxiof8FjZxBtOXV3hhUHRkezsu13l8Y2T8Cqe%2BvgcoAdYyv8O3bLqqKwJ2JErHl%2BciDdwgfMLK9EngwVyLrYhGT2KzCP%2FdLJBjqkARE8Z30kF1OcZfOB%2F1q3nvPvTWijsk9%2Bgw1%2FlbIPfv4ntLXDfY0%2FzP1ltJdqCfRDC3ia9XOGTUhDNcT%2Fi%2FiMcSmfl%2FweEniFj4H%2FXlzm4mrB58HwdwGUwuORbD9VCdoAk%2FKfMPujZyxlBn%2FQOvW%2BT7OCE2IDCfaLA9f9NwKUsLIoy0GQd42F6nwc8NLCbnWJLHOSnBS1g4uL0wkDjp%2B5A6VpEF2D&X-Amz-Signature=ba3e485b34add68cd58fad499bebd6a332e388d92b8753bcbe5d860f814a658a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

