---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654XTWV74%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5YbON7zgHZWNQmRbRFKIEfemsTYTOx1YpqsRsn6Yo0AiAmJ7HrGK4quScrUHFgeZobhR4uGakhvfsx1WyPXAgRjSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM1Cpcwtoix7o23YEtKtwDy8QUXKOccgOxcMCs04k2BGQ41gMAfRnquWmBP%2BUL0Ibfb4jimcU9PsF6eSO9ZT7t%2BXQfrjhta%2F8iu2kKMjB9MQXyu54ss4zX4K%2Bq23XP1UpUCCmvGO6LsFw%2FU%2Fu5ByFysEM3HW8%2FB%2FOMUJwV90SExjVgyceQW%2B5HnliHAGAQjq0wRhOB34DuoJyEGn%2FMV9Y8BvoPyePAHvVR0e5yDNlQCP2bgWTL3BtM6I0UTOHXnahbl1huVLsr8uamR5%2BBvKDWt778EvC1Ipf17ppbgpDjPU%2BUZzEkykXk16u3Vmwy1GyTe9qh6Gl6yipbxi6BqXhUXQi9U%2B%2BjkjcFxZcsaSRqaoUrgn%2F1YueP1DwWH4J1EInTDU3NU32vV4FZpr4dfhBMxCjocypbB69LTdVTWPVSVq3WQTf4u0qJCchvY6XZMB8J3nHuwNjIyAlveInO%2FIZziwXaen%2FX4KzRuP5PQsEnlPUjcIkyFxogAxc5HbDl4T2G7hd0vQD1cMb9gp%2Fv0YRGvCqjMtX2%2BX9i%2FgDrbnRU1RHCL8izpS4JWsNKKqiwbneQkyoUyzPkQR%2BjQCniZAIkzMNelEnjpl3OTl6vkIv3NPdm65TSW%2Bysaqlt3k4WejsYjOSAwexJOcSlQmsw5sXNyQY6pgE%2FX837VLncI%2FfVh9CdVR5XPR0V%2BQgr0L2s0T2jzzBxdzIAOD%2FF%2F1SkjjoSQMwBxvet%2B5%2FvqvCgp6h0zsHmITh9mSXZjybmsp1YNX8fXy63itDgKG%2BVMhWshfe3A%2BHHPfu7u6fBl%2BViHgNuyJ9kTZQDSKg8bWOvAFQVJaYfavkR5pZ%2FQbYSGrIOvTjl%2FiMAWCHandnQ7GG6VBUQK3Go61vfU%2FQOmh2g&X-Amz-Signature=2e1084d06999fe2d3934c7a84d0d88ffd5f519703a2fd7d4b2abaead4e273317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654XTWV74%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID5YbON7zgHZWNQmRbRFKIEfemsTYTOx1YpqsRsn6Yo0AiAmJ7HrGK4quScrUHFgeZobhR4uGakhvfsx1WyPXAgRjSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM1Cpcwtoix7o23YEtKtwDy8QUXKOccgOxcMCs04k2BGQ41gMAfRnquWmBP%2BUL0Ibfb4jimcU9PsF6eSO9ZT7t%2BXQfrjhta%2F8iu2kKMjB9MQXyu54ss4zX4K%2Bq23XP1UpUCCmvGO6LsFw%2FU%2Fu5ByFysEM3HW8%2FB%2FOMUJwV90SExjVgyceQW%2B5HnliHAGAQjq0wRhOB34DuoJyEGn%2FMV9Y8BvoPyePAHvVR0e5yDNlQCP2bgWTL3BtM6I0UTOHXnahbl1huVLsr8uamR5%2BBvKDWt778EvC1Ipf17ppbgpDjPU%2BUZzEkykXk16u3Vmwy1GyTe9qh6Gl6yipbxi6BqXhUXQi9U%2B%2BjkjcFxZcsaSRqaoUrgn%2F1YueP1DwWH4J1EInTDU3NU32vV4FZpr4dfhBMxCjocypbB69LTdVTWPVSVq3WQTf4u0qJCchvY6XZMB8J3nHuwNjIyAlveInO%2FIZziwXaen%2FX4KzRuP5PQsEnlPUjcIkyFxogAxc5HbDl4T2G7hd0vQD1cMb9gp%2Fv0YRGvCqjMtX2%2BX9i%2FgDrbnRU1RHCL8izpS4JWsNKKqiwbneQkyoUyzPkQR%2BjQCniZAIkzMNelEnjpl3OTl6vkIv3NPdm65TSW%2Bysaqlt3k4WejsYjOSAwexJOcSlQmsw5sXNyQY6pgE%2FX837VLncI%2FfVh9CdVR5XPR0V%2BQgr0L2s0T2jzzBxdzIAOD%2FF%2F1SkjjoSQMwBxvet%2B5%2FvqvCgp6h0zsHmITh9mSXZjybmsp1YNX8fXy63itDgKG%2BVMhWshfe3A%2BHHPfu7u6fBl%2BViHgNuyJ9kTZQDSKg8bWOvAFQVJaYfavkR5pZ%2FQbYSGrIOvTjl%2FiMAWCHandnQ7GG6VBUQK3Go61vfU%2FQOmh2g&X-Amz-Signature=180f5212ff6f467b76f97bb60d90e1a2fdc85fbf2abd7b7fb4d71bfc0ae77693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

