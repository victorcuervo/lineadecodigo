---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676V6S3FK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDoicSqawZ72zUmcXQ0hjPuuwUHWv9%2B9c%2B4CFhZzltDHAiBa0sWn6nJxyXxpFVbrLS5Gq5Yo6RaOvOpG2GF0a9iVfSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOeL51QzBs%2FRWczk9KtwD9rMMJCh5eX%2BhaVQQDdywY1OdDgbEorjU3xtWqVsl0jhWv2Y%2FTec%2FIFpA6ExtVguz5f1SNhSzV5%2F6Xccohtz3JFTALJ%2BtPYQymoypgt1T0qlmUdUgs28BD5t3AzOcO761WSgNCi%2FpkA1o5duKGDK0oBRoO59YEsJK9jCRcDnYyIWDHk7feNbMBBY5HxPEGjCj72O81ilzAPBvyio%2Fc7ptv20WngICf5b%2FhW6G5Z2CQJrOY8zv%2BhlwWhOx7Hc4AVnr7CQxX9Wciv6mM33tf%2FSi1v5Zxx7Wp71pxeuQBvSZJ%2FpfXEmTFAi2qp0Cu6tD9bbGjCcCJMQsITInFY%2B19ux1lAeYtHIyItF2knJwcePM12hvdPYPbFdH0aophsEJYyYElS8uuXGZbzrT3%2F0uTX4ojeLeFyw8VQST9CJSCErk0Jbc2h2hmhZpfEODl%2F1Yp2sgnYXjrT8D7rYAjqHI4TdK5pHEev8iVIIuXfhZfJ%2BTCO1BdMLj7McKTq3pK9JoDP10K3WXCXlnYHO8vj29ZkNkeDZyvAdsaYOePhrZeCMSYj7M7i6PaUiq6DZ8aDiARkZllF5PCu0659wOj9W9as1NtWkm774FB08hZb8UJSSZDz9u3UyDHPiehj1%2Bcagwsf7SyQY6pgFHqwZk8Rkou76C9qGZTfhFp2EeUMQXWkb8QNBGzYaZH30%2BkiSstez4w%2FlbqUIXBvnwFnIeDphvhUZK5k%2Fl4ot4DnPMVnrpGjmGB4d5e7zmk0NZVHtkeneqcbbXTz581gj8HOe64nI%2BtApaKAjT8WcQ%2Fk90V6YrqaLoFKxnEgKNrf7W5P5nK7OAaAPoxNpQVqJYz43i5E4twnEH19hXtQh%2FD5Z8nQSe&X-Amz-Signature=8f1fb0ecae28e1de09bdc45bb629ce15d5ca9b67fc08a94dda39e0c63ee3be66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676V6S3FK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T011135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDoicSqawZ72zUmcXQ0hjPuuwUHWv9%2B9c%2B4CFhZzltDHAiBa0sWn6nJxyXxpFVbrLS5Gq5Yo6RaOvOpG2GF0a9iVfSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOeL51QzBs%2FRWczk9KtwD9rMMJCh5eX%2BhaVQQDdywY1OdDgbEorjU3xtWqVsl0jhWv2Y%2FTec%2FIFpA6ExtVguz5f1SNhSzV5%2F6Xccohtz3JFTALJ%2BtPYQymoypgt1T0qlmUdUgs28BD5t3AzOcO761WSgNCi%2FpkA1o5duKGDK0oBRoO59YEsJK9jCRcDnYyIWDHk7feNbMBBY5HxPEGjCj72O81ilzAPBvyio%2Fc7ptv20WngICf5b%2FhW6G5Z2CQJrOY8zv%2BhlwWhOx7Hc4AVnr7CQxX9Wciv6mM33tf%2FSi1v5Zxx7Wp71pxeuQBvSZJ%2FpfXEmTFAi2qp0Cu6tD9bbGjCcCJMQsITInFY%2B19ux1lAeYtHIyItF2knJwcePM12hvdPYPbFdH0aophsEJYyYElS8uuXGZbzrT3%2F0uTX4ojeLeFyw8VQST9CJSCErk0Jbc2h2hmhZpfEODl%2F1Yp2sgnYXjrT8D7rYAjqHI4TdK5pHEev8iVIIuXfhZfJ%2BTCO1BdMLj7McKTq3pK9JoDP10K3WXCXlnYHO8vj29ZkNkeDZyvAdsaYOePhrZeCMSYj7M7i6PaUiq6DZ8aDiARkZllF5PCu0659wOj9W9as1NtWkm774FB08hZb8UJSSZDz9u3UyDHPiehj1%2Bcagwsf7SyQY6pgFHqwZk8Rkou76C9qGZTfhFp2EeUMQXWkb8QNBGzYaZH30%2BkiSstez4w%2FlbqUIXBvnwFnIeDphvhUZK5k%2Fl4ot4DnPMVnrpGjmGB4d5e7zmk0NZVHtkeneqcbbXTz581gj8HOe64nI%2BtApaKAjT8WcQ%2Fk90V6YrqaLoFKxnEgKNrf7W5P5nK7OAaAPoxNpQVqJYz43i5E4twnEH19hXtQh%2FD5Z8nQSe&X-Amz-Signature=c05f16f845e7a78a9d1b486e60d9c9a73f3449e4d0042e189ea97da61d84aed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

