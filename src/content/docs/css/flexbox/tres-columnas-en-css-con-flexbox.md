---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642EIW4WY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcH%2Br5QpOWTjVuc9%2F37EBdYJeUYhzPNHQo0UmdSWQhGAiBm%2FLaZasAlaLOs01qjQtBHfdS34nusn4T34Yy9C88IAyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnHMq7JGewJoXf9zWKtwDi59iRHy3HL2q8v3H1VUtGVjl7KpiptoYPgyAwHkJ2e3vjkDsazVK48Esf0TW%2Bl3huUpvxRpe7dgtu7yBP9fTVB%2FLpawbWYng6UznejyAX%2BrbOL1Tpk7%2FvD8scfSLevHgZqv%2BeYEvOllvOcLKlPobO9pzUjePY9S49QlKJwQT4PID3cdpNYodqUzmbIu8NqOk%2BrfsNWK5fmAuG%2FQ6a20xbWcZMQSLOQtfnxo2KPby0LDpYpUuj512DmJy%2FV75Bc60hjPgqME7W636hD5T2HGU3DkdpJ%2FOfRxzoE%2FKTEk2vw4ZF2QRQB%2BohnRBZ6vhcUoEWtupygNAaHPWNsOIK2rWebXtE5MN4GQPUq1McW7Txd0DBrrembPMjg887O278%2FH96vh2zMrKS0hST6JqQRx0JtxYNzprgAifL%2FVAjwGyWyLeeHPxPOJ23KYMg0rqXPYSDGATXDToT9fmFKkHAb5u%2FYfeMteCNJKVcb%2B1s7T%2FdXy0mb4j5FpOOIWEY%2FqjQEFTHcC4c%2FYHKO1ft32g7HcaFHwtphXmPb40KNYlPgN9gppWTtmW%2FwOLEoOjEPEM22X8IlN6evWbm5XpVBw434bSAKAGYK4UQEvzUXkvJDZiiQwninvxWFj6y%2F1VWtMwzu%2FYyQY6pgFytT3n%2BUbeXlFB0kxuvvTIcgb3FYoQUx4Qf9K3YkE4z4KuO9I9bTwl%2BFc3HLetE1AfghC8umI6aCafjrUaeYjJxOhkzKEo8lTxqua973hmWoVY5O0v4fMjPoBQKm87gsu1Y2nGiiTY9StOldMj5EK%2B2%2Bvo6xy9mEYQX2VNtR33Z2ONedUQrGpVQERxfNGjdSkBzVAo1Dfb1sRP134xfKSztg9ONNMA&X-Amz-Signature=532022c0de2e9974dc3816bf9914dba3e14da41604464292ff0f54f83d4b0481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642EIW4WY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T030145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcH%2Br5QpOWTjVuc9%2F37EBdYJeUYhzPNHQo0UmdSWQhGAiBm%2FLaZasAlaLOs01qjQtBHfdS34nusn4T34Yy9C88IAyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnHMq7JGewJoXf9zWKtwDi59iRHy3HL2q8v3H1VUtGVjl7KpiptoYPgyAwHkJ2e3vjkDsazVK48Esf0TW%2Bl3huUpvxRpe7dgtu7yBP9fTVB%2FLpawbWYng6UznejyAX%2BrbOL1Tpk7%2FvD8scfSLevHgZqv%2BeYEvOllvOcLKlPobO9pzUjePY9S49QlKJwQT4PID3cdpNYodqUzmbIu8NqOk%2BrfsNWK5fmAuG%2FQ6a20xbWcZMQSLOQtfnxo2KPby0LDpYpUuj512DmJy%2FV75Bc60hjPgqME7W636hD5T2HGU3DkdpJ%2FOfRxzoE%2FKTEk2vw4ZF2QRQB%2BohnRBZ6vhcUoEWtupygNAaHPWNsOIK2rWebXtE5MN4GQPUq1McW7Txd0DBrrembPMjg887O278%2FH96vh2zMrKS0hST6JqQRx0JtxYNzprgAifL%2FVAjwGyWyLeeHPxPOJ23KYMg0rqXPYSDGATXDToT9fmFKkHAb5u%2FYfeMteCNJKVcb%2B1s7T%2FdXy0mb4j5FpOOIWEY%2FqjQEFTHcC4c%2FYHKO1ft32g7HcaFHwtphXmPb40KNYlPgN9gppWTtmW%2FwOLEoOjEPEM22X8IlN6evWbm5XpVBw434bSAKAGYK4UQEvzUXkvJDZiiQwninvxWFj6y%2F1VWtMwzu%2FYyQY6pgFytT3n%2BUbeXlFB0kxuvvTIcgb3FYoQUx4Qf9K3YkE4z4KuO9I9bTwl%2BFc3HLetE1AfghC8umI6aCafjrUaeYjJxOhkzKEo8lTxqua973hmWoVY5O0v4fMjPoBQKm87gsu1Y2nGiiTY9StOldMj5EK%2B2%2Bvo6xy9mEYQX2VNtR33Z2ONedUQrGpVQERxfNGjdSkBzVAo1Dfb1sRP134xfKSztg9ONNMA&X-Amz-Signature=99a5de76cddda51f6a1bef42f471b833b3a9c2b3d286a39cb08a51f91cf115de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

