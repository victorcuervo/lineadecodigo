---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URJ5TM7M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFq355EjX54bc4GPthy5hRy4MoAq8H8Y3jl1glFUF%2B%2FvAiEAyUdRG%2BacTtweG4qYdGCoTv9EfJeBA%2BjheYS%2F21ZsBp4qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrX1M6llkgReQhMUCrcA7NFeJiHQJ%2FA3wMXHMhmPS4S5ha0edAix%2BgVR10cEbrbaweyQ5Q16%2F33Tewh%2Be6r%2FQrPPktbd3ZiNyYJTgozVioaTABcu5mo7cQwWCM3VWyeDJ174gVrpPhXIOWBqhv1%2Bt514T%2FwYvpmESrNXygQVttCRZMKKCybbjoHhG9JV762FGGm4PRIpJBsOUp2RSFX3ONDrNbI2%2FkIntV1Xp%2FSWYcDkqd7RWDM%2FBPp7h1Y1n9Yxm%2FBrzBszdC7TCduIzI3np1JeRbOf92b9dMWWbHy0zRhEJD7O8tPBOmcZKXonCCRugi4wkBXfpdY19Ih6MRJU9DNjU5eyYKC%2BHjIQEaAnchdmi51DuA6N2kUgPFwPgC1f0O8hYfsNPeRukicVOqZNy8oAcTD1V4sbieRzjKBdyP2x%2FOZsgEsGX4HB9KkqNZ%2FWiS%2B2zkX4x3EjdA4C5HAx6efBqIBd%2FouV79rKQbzzs96OMAI7iiYP2ovn%2FKYQ4qrqFZG1xl0lHdXBhkQ5BhRVLSuODwZ1Q%2BpQCKvpe93m%2BFtfNq56WkHT5Nbn0EC94weieUEoIZ1DH9bwYeRbn8NyIwmo05lJa2ykXYYb5JqI5cKS2r7PhXem9xo%2FQ03KWmElHh4sarlyEtWRNL1MK%2FB28kGOqUBJMV3Ej6hL12RVyJ2NCQD8JpfnSRqt3Rrsv6pajQzUzrZ2kdY4g87Eq8Lm%2BSiRoHZ7pF8L4fPAB736OS2f7D8spjDSpPdBR1tn%2BHd%2BiCTu0ihVZdzdrBOaBc9apnpnJql36qKHocHAG9eRMBD0HtpQg9HufuSNnwMXGD1ZY70AbPaO%2FKGOo8qmlEFsTZNHo9dogu2T4KO7kTdua7XvOWHkC%2FOvar3&X-Amz-Signature=52b44ecc4a3ecd6b4bba4fc6b0a7454fd7ce1f964eda597cf9091de4c7898422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URJ5TM7M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFq355EjX54bc4GPthy5hRy4MoAq8H8Y3jl1glFUF%2B%2FvAiEAyUdRG%2BacTtweG4qYdGCoTv9EfJeBA%2BjheYS%2F21ZsBp4qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrX1M6llkgReQhMUCrcA7NFeJiHQJ%2FA3wMXHMhmPS4S5ha0edAix%2BgVR10cEbrbaweyQ5Q16%2F33Tewh%2Be6r%2FQrPPktbd3ZiNyYJTgozVioaTABcu5mo7cQwWCM3VWyeDJ174gVrpPhXIOWBqhv1%2Bt514T%2FwYvpmESrNXygQVttCRZMKKCybbjoHhG9JV762FGGm4PRIpJBsOUp2RSFX3ONDrNbI2%2FkIntV1Xp%2FSWYcDkqd7RWDM%2FBPp7h1Y1n9Yxm%2FBrzBszdC7TCduIzI3np1JeRbOf92b9dMWWbHy0zRhEJD7O8tPBOmcZKXonCCRugi4wkBXfpdY19Ih6MRJU9DNjU5eyYKC%2BHjIQEaAnchdmi51DuA6N2kUgPFwPgC1f0O8hYfsNPeRukicVOqZNy8oAcTD1V4sbieRzjKBdyP2x%2FOZsgEsGX4HB9KkqNZ%2FWiS%2B2zkX4x3EjdA4C5HAx6efBqIBd%2FouV79rKQbzzs96OMAI7iiYP2ovn%2FKYQ4qrqFZG1xl0lHdXBhkQ5BhRVLSuODwZ1Q%2BpQCKvpe93m%2BFtfNq56WkHT5Nbn0EC94weieUEoIZ1DH9bwYeRbn8NyIwmo05lJa2ykXYYb5JqI5cKS2r7PhXem9xo%2FQ03KWmElHh4sarlyEtWRNL1MK%2FB28kGOqUBJMV3Ej6hL12RVyJ2NCQD8JpfnSRqt3Rrsv6pajQzUzrZ2kdY4g87Eq8Lm%2BSiRoHZ7pF8L4fPAB736OS2f7D8spjDSpPdBR1tn%2BHd%2BiCTu0ihVZdzdrBOaBc9apnpnJql36qKHocHAG9eRMBD0HtpQg9HufuSNnwMXGD1ZY70AbPaO%2FKGOo8qmlEFsTZNHo9dogu2T4KO7kTdua7XvOWHkC%2FOvar3&X-Amz-Signature=cfcb4c880fc11bb35af4c0d0417d0ff9b49c0b4010e7fb53cff69bd46193e48a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

