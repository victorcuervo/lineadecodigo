---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVBAHQG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIAfnkuhtVYB%2BGDJleZFG3I815iDPWvwi%2BpNorfNI%2BruoAiEAi2ITd2Gi9fiivdM7kz7BQ2Mo%2BhokmcVt46ZbQLJc0eoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCaIqmZohPHhGjot5CrcA%2FVWat%2BIa%2Fc65QDwYm17g7i1M7u2Km3vba812nGbNGEqYtR2XSAMbFV0vNIzSXk3x6hw9Qa092UJNuJcfDxY5eR4Nfdz2%2B2uWlB9E%2BGySXtqHBKBSgf9So%2FECW52MAa8XYG16DeS1ltguMqZR0krkE6RAceYDsaQ08ib%2FwMIyhD40E8%2BUsX475zPb9%2FF1Wa2C712eFaVepdDgPWV5EOIp8cMn4gv26YeZWY%2Brqds0uBnI%2FOG9cnSAEwMaSSM1nFe%2Ff4cID3iwAN%2FwUnIPp%2B1dTKj%2BqPGyh9MnelRUAIDLOXrNv9KaEaIjNZ8k0k2lODYiG%2FhP4eCCcfSmPPBEyK%2Balvp9BUrl1Ccn42QHcbNXPM9X41TqnACauR5y%2Bx%2BiX4bwa8krH1omAt1uiDzYk9bOfd6FZ4ogFvCA1LMumPEb5eaQnXDcDj%2FmGdvB4BXneksyxu7mL4snmnUEdZ8a1jVy7hfHHlx5TY61vGDa6x4px3GHfVmtdIOjLe%2BhuZ6iwycumo%2BjQXvCRdI%2Bwjh6NIJ8AkG3bTUmXvQNSL72p6Uj64%2BWQFUe8tE3H%2FSmiwRdjM%2FqvDCrYScCqNvfTlM2yTQdqH6%2FvL8TBMtOexZ6N4WJnZUBbufyCAhm8ml0HzzMOTmxckGOqUBYcQl%2Fd3KhXqTRRZw0sQxC0Uhcq77B0j20iUaWP2t%2FCePRxoasUgbdEDqBeszL9gAH7hKAieZBSUV2YlfRpWrRUNyExjY4dFNpkDwr6GlUQenkwlUtiKmOOjcKcbTLpUHTaujtPb6c%2BaGUS%2F%2BXX3dL1XmozrlCcUtvR%2B6bS0I5BzjjGv%2BrbrvtrQcq5HGCf0JazzlGKlvhUR9rwOvi%2FZS7F3%2BOtGJ&X-Amz-Signature=c2101eaf1236fab2f683d065722a5b0a203f5783d27072e803e65b97a2f672a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHVBAHQG%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIAfnkuhtVYB%2BGDJleZFG3I815iDPWvwi%2BpNorfNI%2BruoAiEAi2ITd2Gi9fiivdM7kz7BQ2Mo%2BhokmcVt46ZbQLJc0eoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDCaIqmZohPHhGjot5CrcA%2FVWat%2BIa%2Fc65QDwYm17g7i1M7u2Km3vba812nGbNGEqYtR2XSAMbFV0vNIzSXk3x6hw9Qa092UJNuJcfDxY5eR4Nfdz2%2B2uWlB9E%2BGySXtqHBKBSgf9So%2FECW52MAa8XYG16DeS1ltguMqZR0krkE6RAceYDsaQ08ib%2FwMIyhD40E8%2BUsX475zPb9%2FF1Wa2C712eFaVepdDgPWV5EOIp8cMn4gv26YeZWY%2Brqds0uBnI%2FOG9cnSAEwMaSSM1nFe%2Ff4cID3iwAN%2FwUnIPp%2B1dTKj%2BqPGyh9MnelRUAIDLOXrNv9KaEaIjNZ8k0k2lODYiG%2FhP4eCCcfSmPPBEyK%2Balvp9BUrl1Ccn42QHcbNXPM9X41TqnACauR5y%2Bx%2BiX4bwa8krH1omAt1uiDzYk9bOfd6FZ4ogFvCA1LMumPEb5eaQnXDcDj%2FmGdvB4BXneksyxu7mL4snmnUEdZ8a1jVy7hfHHlx5TY61vGDa6x4px3GHfVmtdIOjLe%2BhuZ6iwycumo%2BjQXvCRdI%2Bwjh6NIJ8AkG3bTUmXvQNSL72p6Uj64%2BWQFUe8tE3H%2FSmiwRdjM%2FqvDCrYScCqNvfTlM2yTQdqH6%2FvL8TBMtOexZ6N4WJnZUBbufyCAhm8ml0HzzMOTmxckGOqUBYcQl%2Fd3KhXqTRRZw0sQxC0Uhcq77B0j20iUaWP2t%2FCePRxoasUgbdEDqBeszL9gAH7hKAieZBSUV2YlfRpWrRUNyExjY4dFNpkDwr6GlUQenkwlUtiKmOOjcKcbTLpUHTaujtPb6c%2BaGUS%2F%2BXX3dL1XmozrlCcUtvR%2B6bS0I5BzjjGv%2BrbrvtrQcq5HGCf0JazzlGKlvhUR9rwOvi%2FZS7F3%2BOtGJ&X-Amz-Signature=a18dee5e3bf59eb560f5ae8150c940515e04ebccd288d1cd9811cb4bfcc2e141&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

