---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V7YRGHC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDGVe09s50gOnvAaCxcofRbrXvAvsxNodVuOxlq88nfkgIhANljpJDzVlmYYpJ80JOqMTS38BlfUOftyg3HLrrTAR7PKv8DCCIQABoMNjM3NDIzMTgzODA1Igxl1ju44WjswAv294gq3ANBJ2nRfRVjWZMvUHzmVN6l1Tiu1JrnAesMLKM2ZryY9zXfAWi03xM1VVtL1nAeYHA0QVz2Rq8D9opqzsd6JFF%2FFppvz62NptB%2FgvNXVHU0MYzsb4%2BqAo9%2FULJWrMFK%2FX8cY%2BfOeAxhMnlxwaBEN9PlfRLlKCLu2LdzvkDW%2BHR6Jj04b1%2FP2eMZ1VRZfxr2P1562UsSas8G1QbpHsjL6zXbs%2FxBTG3iToMmsLoWiGSiHjpDyQ4Mkcimgdw7Qt4TOa2ssciQO82tfVqY%2FPGepWlPBnVi3wXDescw7A5nxoEnhFLIRpWGNzNE3yPcIrL1Fv%2FIWwynZNnrbYkPGtzBRVIjKEYLfmIDJnqITJAK55GxAxjLUQD8krILa%2BFHyLhxlTM%2Bjc7QqJ2JjxLihVyJ2s1acCOF6bgm59IyUbgphuQzcar3qkGuqb3%2Byhp0tkUuGEDpx8dj7kUekBguhmR2LLoQEOTHGlamdpFmn%2F6yExyl9G8vnWv2q%2BZGazsBjC7D%2B5Ol8uNj8bSpeoF72uORZpEefd97FaYv8kZmH4ET1JT1rJ%2FUcBmtAcUarmWTp3ULMoRAu%2BVAkvkTJAaF61htF2PVCSs%2Bt%2FJC4SL%2Fpp%2BMZ67D12nfj69B2bpGcayGGjCkob7JBjqkAaAwzEJ%2FQAgfLplUrHvuFbha6iSTNPF3nDGIOf1VqVhrkvMFBH4%2Bk04ywHOplX4YEx7jhHO23J40mh%2BwjPFQJPUSGF3B84NsSONOP%2F2mW8Lh1C2%2FC%2FioFuUmoOctU4dZi1Aim%2BG20frVxSR0%2F0s3LYCkPoMFnE3DrClkS6%2F6FmaKm%2FRLpduepieztBiRKvFPqJgyRV8ljnzar2jMZ%2F6Ng1yy39Oq&X-Amz-Signature=1fa2bfffe348e5e3342cb9131fb5cc5b6ff238a792881b76de6b5795a3a6009f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V7YRGHC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T021421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDGVe09s50gOnvAaCxcofRbrXvAvsxNodVuOxlq88nfkgIhANljpJDzVlmYYpJ80JOqMTS38BlfUOftyg3HLrrTAR7PKv8DCCIQABoMNjM3NDIzMTgzODA1Igxl1ju44WjswAv294gq3ANBJ2nRfRVjWZMvUHzmVN6l1Tiu1JrnAesMLKM2ZryY9zXfAWi03xM1VVtL1nAeYHA0QVz2Rq8D9opqzsd6JFF%2FFppvz62NptB%2FgvNXVHU0MYzsb4%2BqAo9%2FULJWrMFK%2FX8cY%2BfOeAxhMnlxwaBEN9PlfRLlKCLu2LdzvkDW%2BHR6Jj04b1%2FP2eMZ1VRZfxr2P1562UsSas8G1QbpHsjL6zXbs%2FxBTG3iToMmsLoWiGSiHjpDyQ4Mkcimgdw7Qt4TOa2ssciQO82tfVqY%2FPGepWlPBnVi3wXDescw7A5nxoEnhFLIRpWGNzNE3yPcIrL1Fv%2FIWwynZNnrbYkPGtzBRVIjKEYLfmIDJnqITJAK55GxAxjLUQD8krILa%2BFHyLhxlTM%2Bjc7QqJ2JjxLihVyJ2s1acCOF6bgm59IyUbgphuQzcar3qkGuqb3%2Byhp0tkUuGEDpx8dj7kUekBguhmR2LLoQEOTHGlamdpFmn%2F6yExyl9G8vnWv2q%2BZGazsBjC7D%2B5Ol8uNj8bSpeoF72uORZpEefd97FaYv8kZmH4ET1JT1rJ%2FUcBmtAcUarmWTp3ULMoRAu%2BVAkvkTJAaF61htF2PVCSs%2Bt%2FJC4SL%2Fpp%2BMZ67D12nfj69B2bpGcayGGjCkob7JBjqkAaAwzEJ%2FQAgfLplUrHvuFbha6iSTNPF3nDGIOf1VqVhrkvMFBH4%2Bk04ywHOplX4YEx7jhHO23J40mh%2BwjPFQJPUSGF3B84NsSONOP%2F2mW8Lh1C2%2FC%2FioFuUmoOctU4dZi1Aim%2BG20frVxSR0%2F0s3LYCkPoMFnE3DrClkS6%2F6FmaKm%2FRLpduepieztBiRKvFPqJgyRV8ljnzar2jMZ%2F6Ng1yy39Oq&X-Amz-Signature=4c6b26e05d0a643cec41140548766047ebf1b4d192eb2faf553c99c1d18cace2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

