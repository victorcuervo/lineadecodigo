---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UND3IKCL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB0jywCOfiJddBYc09FewUC%2F4DeKQMysfVSVayZSVJoVAiEAmjV%2FGdY6Smq9zksw1qqN28xielXKv9ExFOFyeP7ERfMqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkA0Qm19zNb0p4dxCrcA6Ed%2BQlcUddgnEMOu3o40B%2BqISGbFyFgrhkfuOVh86s%2B%2FbiTDNixzxUPQUje9U1OIP%2B9ik1VsZ%2F%2FzRFyzW1WZFC69PpWNkohCypHwXnW8DqU8WWhfMx3EleYqF4AVb3gsJV6l%2BzJF7rucsMzTewaP6mWnzTs%2FFVKo4tj9yCvXJ3hQD%2FwkS3br%2Bwxrh22rWtkOa24lEZaK%2B2trvLIlWpTTgeX%2FHEC2KmhJ8RTvkm%2FqCm7aIBnbU9FpLGGrKP71oCvCU8bg22lIBAktYghGVyErZ%2Byv4y%2BqD8bjhawCgpjodS1KCsE7qN3jMTwfvPjNK6XFHCHLWXULvG%2B4r2Fa%2BvbgX4twsgp1EzWz2w9SRBxNlJf7%2B59QL0bilXGrLjtn8XQgeocxFwypW%2BCuExvDhEs6Nbx5q9YKBX7LOH7iLMTJeg2xYiLhUqCckEVHAx1fHjQDPCtkoeMA7%2By7undmLSUeTGN%2FqAFacaP41wPGXJPAkgATZqUsjM30o1i%2F1ABR8%2Fu7MCuP8Umeb5t4VV0rreRI1frTY8LwApWzELI4esWwaa%2FwRtUHvWTIl0cpja%2FOWzFwqiBjusHfd2s89MlY3q%2BW1j5Obl6i7x5tD1nFVyQJortR2O2O6w7Ro48m6ktMMyH3MkGOqUBvCGOJE0RfqAUTspwUTS2mq5iU%2BDoVv3rIgpWwxhFtwSMFO%2BH1UkdPINJaWQ99BpZnRKJLphYA3zi0KU3yGH2noMASPFRwXS%2B8RqjGPMb6roU8NnimNuZ%2Fe3Uyyrw0iRaGiBzwtGo7RHZ1zYn5OYI8vLNI6mR5xlmvwRCaE9ygNpwIEtm4mv7RKX0Tl99nqtc%2Fl%2FDYFgP7hBt16wnO67QkcNszcEJ&X-Amz-Signature=2576afe0dd8de96412c6561c58325ba3a109672dba9365b8421e4d821fbf1ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UND3IKCL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T182437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB0jywCOfiJddBYc09FewUC%2F4DeKQMysfVSVayZSVJoVAiEAmjV%2FGdY6Smq9zksw1qqN28xielXKv9ExFOFyeP7ERfMqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIkA0Qm19zNb0p4dxCrcA6Ed%2BQlcUddgnEMOu3o40B%2BqISGbFyFgrhkfuOVh86s%2B%2FbiTDNixzxUPQUje9U1OIP%2B9ik1VsZ%2F%2FzRFyzW1WZFC69PpWNkohCypHwXnW8DqU8WWhfMx3EleYqF4AVb3gsJV6l%2BzJF7rucsMzTewaP6mWnzTs%2FFVKo4tj9yCvXJ3hQD%2FwkS3br%2Bwxrh22rWtkOa24lEZaK%2B2trvLIlWpTTgeX%2FHEC2KmhJ8RTvkm%2FqCm7aIBnbU9FpLGGrKP71oCvCU8bg22lIBAktYghGVyErZ%2Byv4y%2BqD8bjhawCgpjodS1KCsE7qN3jMTwfvPjNK6XFHCHLWXULvG%2B4r2Fa%2BvbgX4twsgp1EzWz2w9SRBxNlJf7%2B59QL0bilXGrLjtn8XQgeocxFwypW%2BCuExvDhEs6Nbx5q9YKBX7LOH7iLMTJeg2xYiLhUqCckEVHAx1fHjQDPCtkoeMA7%2By7undmLSUeTGN%2FqAFacaP41wPGXJPAkgATZqUsjM30o1i%2F1ABR8%2Fu7MCuP8Umeb5t4VV0rreRI1frTY8LwApWzELI4esWwaa%2FwRtUHvWTIl0cpja%2FOWzFwqiBjusHfd2s89MlY3q%2BW1j5Obl6i7x5tD1nFVyQJortR2O2O6w7Ro48m6ktMMyH3MkGOqUBvCGOJE0RfqAUTspwUTS2mq5iU%2BDoVv3rIgpWwxhFtwSMFO%2BH1UkdPINJaWQ99BpZnRKJLphYA3zi0KU3yGH2noMASPFRwXS%2B8RqjGPMb6roU8NnimNuZ%2Fe3Uyyrw0iRaGiBzwtGo7RHZ1zYn5OYI8vLNI6mR5xlmvwRCaE9ygNpwIEtm4mv7RKX0Tl99nqtc%2Fl%2FDYFgP7hBt16wnO67QkcNszcEJ&X-Amz-Signature=789ad0e5d01c1dc24f0faa97869bdefee986fc2ac7cc1f8e07096d939a277b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

