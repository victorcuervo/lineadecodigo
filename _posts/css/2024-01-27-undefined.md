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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BHRZSS5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T120139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDbmqhqlcDlHDfTA08Bm6C8lqo1Kwzr17N4d40vzHp8GwIgBDWo4FbOloQKmawXghCOQt%2F40dltGjruzQYjRBQSLEQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLSzHH2y%2FEt3o5e1vSrcAzUc152WDfDvovnJimHlZH7tY6vdfrSFJBtNCTXdIifg5p7MdAeDfVsgaAAjqooreXg3FqN9sygqhxv2ZokxKvSoNLYSN4OWyMxSjQCBVdNELAeS1BGyQOIKR50EGutF%2BJZnMgiTzbEXaEYQfGnq3v4J12%2B0RWpKl5%2BpcpAeELJ8RqipFIEa86CUYdCJTDQNx5nTEItuDNvup%2FuU9RRSgl%2FVf3WcNsylBnG73XxFP%2BfzJ6hbmXEe3EYxOmxgAj7oydVmocIkved1quJ4thBgfUV02fp4%2Fa%2B9wpeWqK0ifpp6yq6ldkw5OjW%2Fh6zNdMhy694uasvzEnZ5Jl8DeH8gl%2FFax7RXGm9A9NvYbOVZ8q7wUwUYaF5wCR8Sd8uM%2BYBgFHMazkGW%2F88Lqz0UJzqSNvl4assar8KrGF9%2BVNzG%2FUZBUANmgJYjTMOh8T0fKL7KgGvOtlAm4r1rFyGdL9jcYKI8Z2OF5Q16J%2FBQOAJ9Mc%2FpyXcMV%2F4UnhjVMhNPt29PHo4PKwGqbpHcR8%2FAv5RJRwYgq3hGTmViN6JQQdtCzrCOs3dqEiyViK7ZV9RZpsVm%2FEuyMtFkb5X1qtLBdpbE2MNcBC%2BGKuzznwri0I1pUgupL75E0pX6vNEulCGRML%2BvwMkGOqUBjjAUSrobVeFSuzegvLh2MsKxWP8BEp9kIx6pq8JFAWKmKlG6jibCllNmuaiPY%2BdG9S4SPE%2FjyjPd4R%2BVseJiyXEGl78UlF4vYTQfmOX%2F55McIwB1eMradbuVb1o5JPTRtx%2FBxGKWWVhq5GCwwYTw4wmgHcCN%2Bslesn2MYVH0sD3E%2F15WYpS%2BstTewLFxy9EQvyFzdF6%2BiUAN89jZrCObWdPyBzmD&X-Amz-Signature=206bbdf882c52ebb8e7b84caf45044600f6c1d3f3bfeb8d097368f04e9163257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BHRZSS5%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T120139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDbmqhqlcDlHDfTA08Bm6C8lqo1Kwzr17N4d40vzHp8GwIgBDWo4FbOloQKmawXghCOQt%2F40dltGjruzQYjRBQSLEQq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDLSzHH2y%2FEt3o5e1vSrcAzUc152WDfDvovnJimHlZH7tY6vdfrSFJBtNCTXdIifg5p7MdAeDfVsgaAAjqooreXg3FqN9sygqhxv2ZokxKvSoNLYSN4OWyMxSjQCBVdNELAeS1BGyQOIKR50EGutF%2BJZnMgiTzbEXaEYQfGnq3v4J12%2B0RWpKl5%2BpcpAeELJ8RqipFIEa86CUYdCJTDQNx5nTEItuDNvup%2FuU9RRSgl%2FVf3WcNsylBnG73XxFP%2BfzJ6hbmXEe3EYxOmxgAj7oydVmocIkved1quJ4thBgfUV02fp4%2Fa%2B9wpeWqK0ifpp6yq6ldkw5OjW%2Fh6zNdMhy694uasvzEnZ5Jl8DeH8gl%2FFax7RXGm9A9NvYbOVZ8q7wUwUYaF5wCR8Sd8uM%2BYBgFHMazkGW%2F88Lqz0UJzqSNvl4assar8KrGF9%2BVNzG%2FUZBUANmgJYjTMOh8T0fKL7KgGvOtlAm4r1rFyGdL9jcYKI8Z2OF5Q16J%2FBQOAJ9Mc%2FpyXcMV%2F4UnhjVMhNPt29PHo4PKwGqbpHcR8%2FAv5RJRwYgq3hGTmViN6JQQdtCzrCOs3dqEiyViK7ZV9RZpsVm%2FEuyMtFkb5X1qtLBdpbE2MNcBC%2BGKuzznwri0I1pUgupL75E0pX6vNEulCGRML%2BvwMkGOqUBjjAUSrobVeFSuzegvLh2MsKxWP8BEp9kIx6pq8JFAWKmKlG6jibCllNmuaiPY%2BdG9S4SPE%2FjyjPd4R%2BVseJiyXEGl78UlF4vYTQfmOX%2F55McIwB1eMradbuVb1o5JPTRtx%2FBxGKWWVhq5GCwwYTw4wmgHcCN%2Bslesn2MYVH0sD3E%2F15WYpS%2BstTewLFxy9EQvyFzdF6%2BiUAN89jZrCObWdPyBzmD&X-Amz-Signature=9726caf8e50e46ce5d072c844b4f3dce2f1416c8e376c7bc6b90ca5c79419e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

