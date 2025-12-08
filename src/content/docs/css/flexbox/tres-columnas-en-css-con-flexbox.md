---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCRF2KAH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9o0I%2FhPL22Hgdu6vLh6omDsrSSRlCxBVqLCu0AFygRgIhAI6Fh%2BjT7sRvYpmR9ckjYtYa8BJgQ6uA7NRM3qS4iMeGKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMibQyFMT%2BgPX3V34q3AOazlgPuuFO%2BbhicQjR58wIKpgyI3mV5QVeQz8oIvIiT8pmW5vf1GtHFvYBTddQ8bPenV0ckyA9%2FTJnljqEArmfi8OQVhSBvlflRJSYWhCy4uUwwJNq%2F46OCXm%2BAI7oUUxC%2B129c%2B1CqZsUqu4XTrGAiSA65i2Wb5RZgfiilZ%2B8NKX7cgoK7wXqNvSMpX1pPBu98RDrENnrpcVrCx7lbipFBkolzyoT3o5LDiNikogSjMaWyO9o8P7V3VlWPRyV6zGuBBgD51ZV%2BfVK%2Fay7mFD4OgFT32BadxHztbWa63tqtcEUbpfZZE0aVQ6PEGX9m5q%2BZAsW2P4WjLObU8lOIImvz5s%2F2ZShNzE0z3HOIApDNZFDoZVO1TOzqpCZ%2BkCMh9YRCKFb%2BYnvT8CNHChypZRtGMQFcJUHAf60cgI0YTOhUXQf3KqBGI7PNrKZ4KlYBvvNydZm%2FQgxPv2iNe1EOmsEWAJ3qwn7icgkpvId%2FHKo7o9jMrBG86bNsDDN%2B7jPd%2BNb7zdENnvTZPsR62EzU16siZcml1sTAZfRQA4RrVJv1ChZEeOEkq3sVSSKpx2u%2B3594kU1VLa0ve3OPSRPwjdp3GlA4I1ofhiLewLfM1rGle1V3p6uKNWH1iEuvTDChtzJBjqkAfmJuqQdQDHXaLLcgAFfM%2FVYUByUXO4Wxf3WssCWEqCCyR74Bkobdrj252wVcijPbjJZNqe5TpHwqVyAMNNG8fHRvivexCTwy%2BG3MUJlRSX7rVN2SocEEGWQEWWs%2BcW4q99%2FCHLWRKtZPX%2FKgekmZohBm4%2B8H3DsITNRA%2B%2Bl4aRSHalXEjOoMlgggGrfM4Iru%2F9BSPYttFwumDbFzEYXN918NyFm&X-Amz-Signature=e6d1ff83738e4ebd1d394dd41cb863d9b7b10ffd6662212ffd76939321a26f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCRF2KAH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9o0I%2FhPL22Hgdu6vLh6omDsrSSRlCxBVqLCu0AFygRgIhAI6Fh%2BjT7sRvYpmR9ckjYtYa8BJgQ6uA7NRM3qS4iMeGKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMibQyFMT%2BgPX3V34q3AOazlgPuuFO%2BbhicQjR58wIKpgyI3mV5QVeQz8oIvIiT8pmW5vf1GtHFvYBTddQ8bPenV0ckyA9%2FTJnljqEArmfi8OQVhSBvlflRJSYWhCy4uUwwJNq%2F46OCXm%2BAI7oUUxC%2B129c%2B1CqZsUqu4XTrGAiSA65i2Wb5RZgfiilZ%2B8NKX7cgoK7wXqNvSMpX1pPBu98RDrENnrpcVrCx7lbipFBkolzyoT3o5LDiNikogSjMaWyO9o8P7V3VlWPRyV6zGuBBgD51ZV%2BfVK%2Fay7mFD4OgFT32BadxHztbWa63tqtcEUbpfZZE0aVQ6PEGX9m5q%2BZAsW2P4WjLObU8lOIImvz5s%2F2ZShNzE0z3HOIApDNZFDoZVO1TOzqpCZ%2BkCMh9YRCKFb%2BYnvT8CNHChypZRtGMQFcJUHAf60cgI0YTOhUXQf3KqBGI7PNrKZ4KlYBvvNydZm%2FQgxPv2iNe1EOmsEWAJ3qwn7icgkpvId%2FHKo7o9jMrBG86bNsDDN%2B7jPd%2BNb7zdENnvTZPsR62EzU16siZcml1sTAZfRQA4RrVJv1ChZEeOEkq3sVSSKpx2u%2B3594kU1VLa0ve3OPSRPwjdp3GlA4I1ofhiLewLfM1rGle1V3p6uKNWH1iEuvTDChtzJBjqkAfmJuqQdQDHXaLLcgAFfM%2FVYUByUXO4Wxf3WssCWEqCCyR74Bkobdrj252wVcijPbjJZNqe5TpHwqVyAMNNG8fHRvivexCTwy%2BG3MUJlRSX7rVN2SocEEGWQEWWs%2BcW4q99%2FCHLWRKtZPX%2FKgekmZohBm4%2B8H3DsITNRA%2B%2Bl4aRSHalXEjOoMlgggGrfM4Iru%2F9BSPYttFwumDbFzEYXN918NyFm&X-Amz-Signature=2316ffc6c985f422fa51cc2f850f8115b2f672208c16c66841cab160254d82a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

