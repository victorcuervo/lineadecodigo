---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP5CXUEJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCXYYNBNQucm3dprv89Gv352LWNdJJQNdU1ya5eziNlAiEAo%2BEkTqMTQxdhTOomV89fRQWkrzqpes2I%2BvKiNULDGrcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDC6M7qJP9xxJA6b3%2BCrcA2qcuFxW3hVlFGibQcp%2FdIdCDHElQaDXll2NRuGP9daOW7gWKG5YP4DMYfxdkNryreF3lKRjqCSy4KH5FoblJn5g29UqsmWyINT1cVoCgQCtlLTPy1TzNGhSx7jOVXv71hYR1D4Jtgi6BqDDGvDWx6otJHhQ32omDRCJC2pB28WMbjad67Lixeh3c0rAAAvgOHXOiC%2B5g0nOK74VU26Lk9QDtKN%2Fuvrv305fRHoPmQY0PAZ7GT9nL%2B6rCfVESVEpBGjieQfjdQE%2BsDW%2FRUFMMjPXV7NEZgO4er40XgJc4FCBvcgPKUvMjiMpvPCGwRzkQGt2r6bEYSmjU2K9XAKVtPcwt6yt8Z%2FRZNl915nmjvqzqb09VT0eBZY9QwRpbgX%2BdOOzp8yz1hgTk03ogiW8L1iSx0OQxEreWG%2B8j83IZCTwGfqc1RJ4wLC9Qigr%2BqLsj1%2B7pZuQX8WdG3UQ00YWfU7xNJ7wOfNA7k6AFR63auUDNKiAcCZn7uuqIEvkl%2B3UAmkmh9LPjWf1fA3eEAS%2F8EnzwBBxZUshVullVQEAbOdjy2JVHJrVk7jZhkBzwLWYxMfgSzg8wusx3WMRd9R8cB3Cdy2pYc7GgZVneLararo3ipkY6EzU7RCQfZWmMIi8z8kGOqUBL0TpKYvNK0USGeuwH40E6oCi6xT%2B0kRDXRl8xL%2B8PJeSfNQBcMREvtcC47wpqmFCg%2F9FcSDHf33%2FkMil7aVmH3hA9bGQzlujvLIs1jYYMzeLY0M3FZYOBLxkRybJshwIxHkWKX31%2BarlpTAyspT8loNyHi2b1ohip7hwRpEdpjqsaV%2FKA3BX3rmEX4dzuTyPs4IOK%2FwqjDUz%2FPQ%2FesFlgpYDdCP1&X-Amz-Signature=16e334607cddae6920deaff13fa09bc7890f79954f77c60f888e84652d6b7b60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WP5CXUEJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHCXYYNBNQucm3dprv89Gv352LWNdJJQNdU1ya5eziNlAiEAo%2BEkTqMTQxdhTOomV89fRQWkrzqpes2I%2BvKiNULDGrcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDC6M7qJP9xxJA6b3%2BCrcA2qcuFxW3hVlFGibQcp%2FdIdCDHElQaDXll2NRuGP9daOW7gWKG5YP4DMYfxdkNryreF3lKRjqCSy4KH5FoblJn5g29UqsmWyINT1cVoCgQCtlLTPy1TzNGhSx7jOVXv71hYR1D4Jtgi6BqDDGvDWx6otJHhQ32omDRCJC2pB28WMbjad67Lixeh3c0rAAAvgOHXOiC%2B5g0nOK74VU26Lk9QDtKN%2Fuvrv305fRHoPmQY0PAZ7GT9nL%2B6rCfVESVEpBGjieQfjdQE%2BsDW%2FRUFMMjPXV7NEZgO4er40XgJc4FCBvcgPKUvMjiMpvPCGwRzkQGt2r6bEYSmjU2K9XAKVtPcwt6yt8Z%2FRZNl915nmjvqzqb09VT0eBZY9QwRpbgX%2BdOOzp8yz1hgTk03ogiW8L1iSx0OQxEreWG%2B8j83IZCTwGfqc1RJ4wLC9Qigr%2BqLsj1%2B7pZuQX8WdG3UQ00YWfU7xNJ7wOfNA7k6AFR63auUDNKiAcCZn7uuqIEvkl%2B3UAmkmh9LPjWf1fA3eEAS%2F8EnzwBBxZUshVullVQEAbOdjy2JVHJrVk7jZhkBzwLWYxMfgSzg8wusx3WMRd9R8cB3Cdy2pYc7GgZVneLararo3ipkY6EzU7RCQfZWmMIi8z8kGOqUBL0TpKYvNK0USGeuwH40E6oCi6xT%2B0kRDXRl8xL%2B8PJeSfNQBcMREvtcC47wpqmFCg%2F9FcSDHf33%2FkMil7aVmH3hA9bGQzlujvLIs1jYYMzeLY0M3FZYOBLxkRybJshwIxHkWKX31%2BarlpTAyspT8loNyHi2b1ohip7hwRpEdpjqsaV%2FKA3BX3rmEX4dzuTyPs4IOK%2FwqjDUz%2FPQ%2FesFlgpYDdCP1&X-Amz-Signature=9a1c6d82c3ec50e53bab8617930e803ea601ef9e243b0f58d9c42b141ce58c41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

