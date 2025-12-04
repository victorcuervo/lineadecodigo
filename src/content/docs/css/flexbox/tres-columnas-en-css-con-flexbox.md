---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQSBBESQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDQaWZ1Y8jXl9KYR1I8cECphmCn%2BS%2BSry23j1k9uyoCtQIhAODYqHZARaXsbB735rd9Fgk%2BGaztG7Z0J5We4HT6xMtkKv8DCEEQABoMNjM3NDIzMTgzODA1Igz5OEi1N4g%2FSYVT1rgq3APXRGzwb8bSomGP9DXSHxIcbxN9w8ylrVaiAIRvzIaDC8zy9RZZyXFoDD9uv7Bpyui3d5dQO0OvTWtr3Fi9rL4aB7%2FWi5cg6H3UI05lERYQBUhz%2BuM0lMcXPRE0GPx2LDPDdb%2FzY6mH%2B%2FUkNUNTjgHI%2BVXAejwSDgjLBhzwaQuT6zc2W4je4zdtdZyGTaWPE11qhiU5MgxxRoB7KA8Q2fPW%2FoShsNEf1fsVh6BPDRB%2F7bQew2n%2B6zWyzNylUhVklA6aeq1z5XUmPaC1%2FLbWGF8og6aqpmKeyBhfrujXVoR59R3pHiBujQ3dLIEFxl8%2BU%2Bhyf3SxzxpfREiNM9%2BAwGxhrqJtpnYk8ShlMHKkxQiRPLtXBZ84QvFxbD4QruFfM9iK%2FueX2PyC1Ojb1UJeVFKzYOSnu1pSqoWs4OFxTwwdmaPagg9jUg5XLe9WGH9oNxPf4NWTGi%2F%2FEh%2FojvlhFCMa6b5aK%2BPVpzOqePDCe4BB5nWM%2FkYvyBNoUg7niFn9EutZnXM2zmyuRsVjhoa0WccRSKYx9GhzGZwuw5inZ7tXrWEqUjH7L1GYRGYohJaCRm1hcYKsH%2FBof4YgEsXbgO9xfEYKCoLAk0%2FXFoNTmxhfRVNlIl6YKLOtBaJJcTCXhsXJBjqkAbs1gaUoh3PwdpMwNoBBsObcUm8IGcBgcI86pS3FrMe6tIgk7F0PJZ8%2BVr0c2x%2BdVhti4%2FoOcOLp%2FNnKmNihvZ06uNHPaV6yOLx1tovIbDlemPYMkNVSJV%2BbREfHikNR3vlvVs%2F7VXLWe5SDpcImvD3RwQ%2F9UV8s6alMooRXOuucqZu8KKBmuLOcumlW5kIAIqfdOos5DoiFByUCzn2G9aajSPJP&X-Amz-Signature=c683d1cf13ad4a8171bacc8e9ad6cbf258b1adcf90ff9ad840dcf916fff196be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQSBBESQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDQaWZ1Y8jXl9KYR1I8cECphmCn%2BS%2BSry23j1k9uyoCtQIhAODYqHZARaXsbB735rd9Fgk%2BGaztG7Z0J5We4HT6xMtkKv8DCEEQABoMNjM3NDIzMTgzODA1Igz5OEi1N4g%2FSYVT1rgq3APXRGzwb8bSomGP9DXSHxIcbxN9w8ylrVaiAIRvzIaDC8zy9RZZyXFoDD9uv7Bpyui3d5dQO0OvTWtr3Fi9rL4aB7%2FWi5cg6H3UI05lERYQBUhz%2BuM0lMcXPRE0GPx2LDPDdb%2FzY6mH%2B%2FUkNUNTjgHI%2BVXAejwSDgjLBhzwaQuT6zc2W4je4zdtdZyGTaWPE11qhiU5MgxxRoB7KA8Q2fPW%2FoShsNEf1fsVh6BPDRB%2F7bQew2n%2B6zWyzNylUhVklA6aeq1z5XUmPaC1%2FLbWGF8og6aqpmKeyBhfrujXVoR59R3pHiBujQ3dLIEFxl8%2BU%2Bhyf3SxzxpfREiNM9%2BAwGxhrqJtpnYk8ShlMHKkxQiRPLtXBZ84QvFxbD4QruFfM9iK%2FueX2PyC1Ojb1UJeVFKzYOSnu1pSqoWs4OFxTwwdmaPagg9jUg5XLe9WGH9oNxPf4NWTGi%2F%2FEh%2FojvlhFCMa6b5aK%2BPVpzOqePDCe4BB5nWM%2FkYvyBNoUg7niFn9EutZnXM2zmyuRsVjhoa0WccRSKYx9GhzGZwuw5inZ7tXrWEqUjH7L1GYRGYohJaCRm1hcYKsH%2FBof4YgEsXbgO9xfEYKCoLAk0%2FXFoNTmxhfRVNlIl6YKLOtBaJJcTCXhsXJBjqkAbs1gaUoh3PwdpMwNoBBsObcUm8IGcBgcI86pS3FrMe6tIgk7F0PJZ8%2BVr0c2x%2BdVhti4%2FoOcOLp%2FNnKmNihvZ06uNHPaV6yOLx1tovIbDlemPYMkNVSJV%2BbREfHikNR3vlvVs%2F7VXLWe5SDpcImvD3RwQ%2F9UV8s6alMooRXOuucqZu8KKBmuLOcumlW5kIAIqfdOos5DoiFByUCzn2G9aajSPJP&X-Amz-Signature=3ec006a642c40593f44213f269d45c7b1d72467c10cc7baa280bb5d1b985f331&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

