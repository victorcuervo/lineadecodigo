---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTID4MFY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvUzHEInMPiD0h2%2BH0GSr%2B7mFP63FUUcUZL%2B3TVJCS5AiBZIloeGq2a%2B7V87crUcMxi7ouVSwDKPB8R%2BeXB8ivWfSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMYvDGl1exm7Z5EQIwKtwDRI1z%2BjOSjnP18sb5jgkzJhPSkxQ7SXeo%2BAsjmCtW6aTw5ClCgIenYP1uUrZAunvothL%2ByX1bXpe%2FHMvk9ECzDChNA%2Fes7JLaz3CtFEzp6ZEhoOaqhyn9YwkFUQf8dz8weOrSV3ZYfwSlzJLLLw6cuEqkbtvChqOrKMuzJ%2BYxJ4672cOvJ1a97SNmrbR5T5KlEnsjFK1ZFSRc4JevvCwPO3KNkAUQDAfTKQfgYLlwJf2hSyZbl1DRqj%2FFs1t3GiQ8m4fzXvwtiOQYc70Golh0%2FnUbOJzh0Aez5RIpnDUHj2uPsC27DAzZb%2F4%2BXwWlyoswB8daxLEBYjGbQKKKXzEZxydZh5RV0H7jQeK%2BnhdEPSggHVh%2BDLmolPjS%2BGCnDZNIvVjPDPtxFecsqwcFcVZa0pThQPwkw84YrGXP2Kz9dUm%2BlwhD1XR1TV3tm6AZsxNQwm0mGcA3bZCbw3S%2Bjo31DNqoDzVQHmyDBxDDhdAohrPvX4zJTDiEqMbsyBHJeiD5RKBALCyEplT%2FVWFLcxJD%2Fjhx330p9i8hXxSn0yIRZr%2BB%2BTc9in8eb69hAd5jGB9OyaFH912UixoHJ0vtlVTbwzb9Wm7mnWXelmYAy9jV1bCatc%2B6yh9e1%2FCUyDsw8MbRyQY6pgH%2BEzIOm9mVB%2Ba3ON5%2B66V%2FfO2KqCIKSjY86DrW6E2794nkLfv%2FSkmyFpkiTULK1aG24fOWRi5%2Bo6qob5rjO06y%2FzJ4BSFLjOjLzUL0zPa0fW4coyzyK%2BA8%2F346IliwxnS0fTncwyyFRgjVtxsDaJx0iR%2F9pYPwUQYX%2FnbY5BQCNGy1gSGZ5CexTFmR1uEP%2BMfs5Wr228wAxWamiyXP35pZOqUD8P03&X-Amz-Signature=1ab3a374eaffcf295506ef0dbaae6b083099acfe56a9a3b70fe4c7de5cf3395e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTID4MFY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvUzHEInMPiD0h2%2BH0GSr%2B7mFP63FUUcUZL%2B3TVJCS5AiBZIloeGq2a%2B7V87crUcMxi7ouVSwDKPB8R%2BeXB8ivWfSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMYvDGl1exm7Z5EQIwKtwDRI1z%2BjOSjnP18sb5jgkzJhPSkxQ7SXeo%2BAsjmCtW6aTw5ClCgIenYP1uUrZAunvothL%2ByX1bXpe%2FHMvk9ECzDChNA%2Fes7JLaz3CtFEzp6ZEhoOaqhyn9YwkFUQf8dz8weOrSV3ZYfwSlzJLLLw6cuEqkbtvChqOrKMuzJ%2BYxJ4672cOvJ1a97SNmrbR5T5KlEnsjFK1ZFSRc4JevvCwPO3KNkAUQDAfTKQfgYLlwJf2hSyZbl1DRqj%2FFs1t3GiQ8m4fzXvwtiOQYc70Golh0%2FnUbOJzh0Aez5RIpnDUHj2uPsC27DAzZb%2F4%2BXwWlyoswB8daxLEBYjGbQKKKXzEZxydZh5RV0H7jQeK%2BnhdEPSggHVh%2BDLmolPjS%2BGCnDZNIvVjPDPtxFecsqwcFcVZa0pThQPwkw84YrGXP2Kz9dUm%2BlwhD1XR1TV3tm6AZsxNQwm0mGcA3bZCbw3S%2Bjo31DNqoDzVQHmyDBxDDhdAohrPvX4zJTDiEqMbsyBHJeiD5RKBALCyEplT%2FVWFLcxJD%2Fjhx330p9i8hXxSn0yIRZr%2BB%2BTc9in8eb69hAd5jGB9OyaFH912UixoHJ0vtlVTbwzb9Wm7mnWXelmYAy9jV1bCatc%2B6yh9e1%2FCUyDsw8MbRyQY6pgH%2BEzIOm9mVB%2Ba3ON5%2B66V%2FfO2KqCIKSjY86DrW6E2794nkLfv%2FSkmyFpkiTULK1aG24fOWRi5%2Bo6qob5rjO06y%2FzJ4BSFLjOjLzUL0zPa0fW4coyzyK%2BA8%2F346IliwxnS0fTncwyyFRgjVtxsDaJx0iR%2F9pYPwUQYX%2FnbY5BQCNGy1gSGZ5CexTFmR1uEP%2BMfs5Wr228wAxWamiyXP35pZOqUD8P03&X-Amz-Signature=46690744d43568bb35a5a3aa411843973a5b154611a4326c1827477532c324d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

