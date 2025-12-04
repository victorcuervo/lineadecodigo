---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647QA6WFQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDX21AyOA8GNGIVDYITL%2BPDoeZTlw8Ut3Iv%2BPQhQ%2B4QzQIgKolpOn3yVdMyVuWpxh7Sj9bFA3IAYB8%2BXL%2FYMDS1zGcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDECZ5IJfFS4a8LzEHCrcA81E%2BOt5FvOu%2FPoRwjNJawwP%2FngYq5KfyVDpGofCX%2FVRxLDNDMhTR42Chgfi4mFNnjMDZmnfBgw80xA9%2FrSJaNzO6arv8Vt8Gn9leQ0g6jRHTmhAlZ0%2By453P65KunIa3s7LKuHHAZw1JpbwvDlfBaqpPTDo38rzqAFrd1fHzPh6iFTOd4c%2FkDTmHAGI03tQMIqbDl15RnfyWvDWBbMYTSngtHyldxKQouJVO8LyZv6%2BeNVwk%2BtR6%2B3gQJzS8ryOpk6X8KDEZ1MslZoSkYJx3Sff9wddESp8lZNrqasJgw%2BvTzlv8YWFqUXwsouRigB1c3lcJ8lgTJfFbFJO9YyQTbdwfZBwSjjgv5Zlh4qwUyxJK3gxeBC%2F2K26Ps9Te3iWa9Z%2B1hmKZaA2igBQN0vmpFX7k5Yya8zzLkZ7HjwqnIfDmuI%2Bp0qPcfJhjMTR48aIKHcPkgmra1p5K%2BI7NxYxuq821TqwCa286VIkwoBtbSSBy5V1jwT6AV4zpcjCQ4TsIcpzh2kH0wTREuuFFd4%2BXXuQcuiyk3ckx3jU9beDzElVLXtReZj6LAQ671Tjvqrgtkoq61lnW%2BYD1nQOWFvUT2d0x8XHzxvQ7%2FG7UOL7D5v0c7XIIQruEWn1rSW%2FMLfUw8kGOqUBkKmSu0bv4M7kz8j8neRKSA%2F0Fu1S8zzV4zqweCG6B0AxppqecCCC6E6zeDTVm2o35%2F4HxnvvaJJVNapNFIAmLJFFb1yHko2WI3QYHfHUnIqQmXIR9tKKstFuagS6P%2BeXBWqImxHP8yVp%2B6lUrAnVrOBthl1qTYUSjvlsAgzOHZn7POaD1qgNR0O0o9coaybYNJYv2pZoqkOF8EqHI6kSSofyAbrq&X-Amz-Signature=2bf414a24409104b7fad19681ca2df1c5da91e9fc440a0aa33f7869e0e3dc71e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647QA6WFQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDX21AyOA8GNGIVDYITL%2BPDoeZTlw8Ut3Iv%2BPQhQ%2B4QzQIgKolpOn3yVdMyVuWpxh7Sj9bFA3IAYB8%2BXL%2FYMDS1zGcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDECZ5IJfFS4a8LzEHCrcA81E%2BOt5FvOu%2FPoRwjNJawwP%2FngYq5KfyVDpGofCX%2FVRxLDNDMhTR42Chgfi4mFNnjMDZmnfBgw80xA9%2FrSJaNzO6arv8Vt8Gn9leQ0g6jRHTmhAlZ0%2By453P65KunIa3s7LKuHHAZw1JpbwvDlfBaqpPTDo38rzqAFrd1fHzPh6iFTOd4c%2FkDTmHAGI03tQMIqbDl15RnfyWvDWBbMYTSngtHyldxKQouJVO8LyZv6%2BeNVwk%2BtR6%2B3gQJzS8ryOpk6X8KDEZ1MslZoSkYJx3Sff9wddESp8lZNrqasJgw%2BvTzlv8YWFqUXwsouRigB1c3lcJ8lgTJfFbFJO9YyQTbdwfZBwSjjgv5Zlh4qwUyxJK3gxeBC%2F2K26Ps9Te3iWa9Z%2B1hmKZaA2igBQN0vmpFX7k5Yya8zzLkZ7HjwqnIfDmuI%2Bp0qPcfJhjMTR48aIKHcPkgmra1p5K%2BI7NxYxuq821TqwCa286VIkwoBtbSSBy5V1jwT6AV4zpcjCQ4TsIcpzh2kH0wTREuuFFd4%2BXXuQcuiyk3ckx3jU9beDzElVLXtReZj6LAQ671Tjvqrgtkoq61lnW%2BYD1nQOWFvUT2d0x8XHzxvQ7%2FG7UOL7D5v0c7XIIQruEWn1rSW%2FMLfUw8kGOqUBkKmSu0bv4M7kz8j8neRKSA%2F0Fu1S8zzV4zqweCG6B0AxppqecCCC6E6zeDTVm2o35%2F4HxnvvaJJVNapNFIAmLJFFb1yHko2WI3QYHfHUnIqQmXIR9tKKstFuagS6P%2BeXBWqImxHP8yVp%2B6lUrAnVrOBthl1qTYUSjvlsAgzOHZn7POaD1qgNR0O0o9coaybYNJYv2pZoqkOF8EqHI6kSSofyAbrq&X-Amz-Signature=23213be5e1929ea04c430029579cce06f31079136537ff3e7b46d739ed0dd69f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

