---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6HHHLNB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCvfdo%2FSTFdxEYpyTS9e7tRMu0Z%2BBiw9ErzLcsS3zJnBQIgWUL%2BJyaATcyVnDEe0Jh606HlyvQ5JrawekUE5VaWBFQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIQkjmLQydgOxcIR%2ByrcA444qJWT5o8zVQKFOZKACR1f91kK5s6VvDo6BjftK9tjSvOTdEo3Z3UzYhtWHON1fioB%2BMwZTxS0CnR%2FpQKhDn9Z6TAkPBB55BjflsJcG9fHvtWCHTg33RRMzdTeRM3%2FzjAXalX2ILDTtjJetQtAyEVlY%2FkmWEK0e98AeIS%2BSN8F4H9OyWlxdNFpx1dOO%2FcuttXy5FUR0XD8mhgN5PnwjO9wE9EM7GDYUiCL%2Fw4zsv6edxO1eL%2FABsiCg1q1ni04aJWHsd7X60yPQ%2Bpqprf8jQpE%2BnDQ8%2BRJE83KtyilAwqTTQ7t0Vd7kuoqwCziG7MIgwDBdRu3ox75yeRH1T1%2FLXT0E13ig3H801ezimznxaRpONAMzWPx3cbQBN5tU0UtSqWDMCEsQ162cXpybhiP%2FYqIhzpn9vB0zEl5N4fD7Og8FATiEAHnEMHhKXx0w4ElpbR3YoyqqIy3x3BlVE2m4SKIZL%2Bjb8%2FOUIIP5Iom6ESry6xXAYnBkE4ng1PaerRY6i%2BDNsbxLbArU6di6eE%2FxOIgIG1Ij1QppuE7I9cqxkTT%2BD%2FTXKU77YgrTXUIBMvwCo0rNk3U5hp%2F2Azv01eji6rA1GkctW1Esw4S%2FN3TPnq5QoLQDVKKfqPIf8XcMPHKxMkGOqUBuGuB95LUH%2BoFPQaIsRMmjzdRxA%2BXhcmvU1rZbPRUSUztFvKN%2BKz1HXAnOibDyk2pVnzAwghhY0U9mxz5wCzPIaLEARqLEULgReHh%2FhVok2TxX9RVdAwQeVLD6k9PHhtPFnh5mQtBlI5DQsK1OCAUiLOGM1CG68a%2Bp3iHsjS3nozMEBF3xCdBE2czQSb2M3UyyyHqC%2FQS0p99WhjDkhHFoHmuypl6&X-Amz-Signature=0dd68ae8b323d6e28457747c1496a4410f1787888d37ee730cb2ff3ecb27d9eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6HHHLNB%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCvfdo%2FSTFdxEYpyTS9e7tRMu0Z%2BBiw9ErzLcsS3zJnBQIgWUL%2BJyaATcyVnDEe0Jh606HlyvQ5JrawekUE5VaWBFQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDIQkjmLQydgOxcIR%2ByrcA444qJWT5o8zVQKFOZKACR1f91kK5s6VvDo6BjftK9tjSvOTdEo3Z3UzYhtWHON1fioB%2BMwZTxS0CnR%2FpQKhDn9Z6TAkPBB55BjflsJcG9fHvtWCHTg33RRMzdTeRM3%2FzjAXalX2ILDTtjJetQtAyEVlY%2FkmWEK0e98AeIS%2BSN8F4H9OyWlxdNFpx1dOO%2FcuttXy5FUR0XD8mhgN5PnwjO9wE9EM7GDYUiCL%2Fw4zsv6edxO1eL%2FABsiCg1q1ni04aJWHsd7X60yPQ%2Bpqprf8jQpE%2BnDQ8%2BRJE83KtyilAwqTTQ7t0Vd7kuoqwCziG7MIgwDBdRu3ox75yeRH1T1%2FLXT0E13ig3H801ezimznxaRpONAMzWPx3cbQBN5tU0UtSqWDMCEsQ162cXpybhiP%2FYqIhzpn9vB0zEl5N4fD7Og8FATiEAHnEMHhKXx0w4ElpbR3YoyqqIy3x3BlVE2m4SKIZL%2Bjb8%2FOUIIP5Iom6ESry6xXAYnBkE4ng1PaerRY6i%2BDNsbxLbArU6di6eE%2FxOIgIG1Ij1QppuE7I9cqxkTT%2BD%2FTXKU77YgrTXUIBMvwCo0rNk3U5hp%2F2Azv01eji6rA1GkctW1Esw4S%2FN3TPnq5QoLQDVKKfqPIf8XcMPHKxMkGOqUBuGuB95LUH%2BoFPQaIsRMmjzdRxA%2BXhcmvU1rZbPRUSUztFvKN%2BKz1HXAnOibDyk2pVnzAwghhY0U9mxz5wCzPIaLEARqLEULgReHh%2FhVok2TxX9RVdAwQeVLD6k9PHhtPFnh5mQtBlI5DQsK1OCAUiLOGM1CG68a%2Bp3iHsjS3nozMEBF3xCdBE2czQSb2M3UyyyHqC%2FQS0p99WhjDkhHFoHmuypl6&X-Amz-Signature=fd85d49c4e72838f3cad3619589f1045fff5ac96e9fc58b1422c92983f8b05da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

