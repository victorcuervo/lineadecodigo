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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFFQUTF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC0oZC4lf57rCsFA7ViJDrROXvyLjPb0hhTIeB8aeHzQQIgXBQi%2FVod3r1xODjoKRHFDwcoZtx4xNQOu3Fd3k2LBP4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMZ8J%2BuvfjEEMkNaySrcA5kQbEJfkaSCkl9VoIk5Xb8llq3RV9hHYP%2Fe%2BA9dyJT0KMasDBiKPom2xSDhwhNNM9SpA7KIkYNhue2PvneEzKM5yNbafsoiJmzykAfRP0PW1oGf9CV%2BcmIqLf3mSHKdANFU7BhQfjFGTMrpiqqAuLRcGpR9FZFR%2FUUM5DtmvzHbX5hEgrjok0cSCQPGYtTPaRBwDnjMq2C2%2B5L%2FQTsK5V21IzRNLojhKHgFyEuN4u9PNx8aKj%2BJMMSZ1iw5uE2QaaKHYKJLW0kUMjtEeORHjgFdDWgJRUlS3bRRSgkMq9qHtIIt7E%2BavkdGlJ%2BpoB0XHQeR36s0mT%2Ft6NGuD2%2Fcc%2Bd33TcbpVRu26P0znfRz3HdFotqkH6rUiLWGRrD3N%2Fsf%2FWT42S6a%2FIIOZnhpUz%2FgsmO%2FCNwtzBRVrjmwEDzcrsauDiInVRPp9OgUtQC0niMobSpxPQXKavn5QuGxjX%2F1tgU%2B0SVIdyXu9HJ86bX7g3p8IDXHVyTSganfyzblzg8K8Oq2Hf4Fx3DbGVZvxi92RJ3iqPj%2FbePOKSG81Owg71h94zveKUzosWujDkrzbrBxCsarMAb8arQnrnn1nUY%2FJXCZagUmiklYb%2FmlQcg%2F0DAv8szymNuTNSH1sFDMJyTwMkGOqUBdM1gQ9NV4Qbo9C5dEuCC8A6emt1iI6lEzrPByBsJUyG%2F0PYkH7HdE%2B8c%2B0RD9%2BK%2BNSB2WeeQGi9Eo2PsOhPEmc0kS5P8iKDsYbaq4lEDBhIYlfphHES4Ux3xL4jxldSdaiNdR3KdFCMQ0VyewH6P1AdsWwIz%2B5JD57tGiVUsQX0t3Vp1kvye72szHoXHwbYBbSKbgGbwRJNmYprB6oZ1O%2BzTPXcN&X-Amz-Signature=5eda38417fc424b5592726b4052b56c452bd8233132043b92ed910bba0d3c5a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRFFQUTF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQC0oZC4lf57rCsFA7ViJDrROXvyLjPb0hhTIeB8aeHzQQIgXBQi%2FVod3r1xODjoKRHFDwcoZtx4xNQOu3Fd3k2LBP4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDMZ8J%2BuvfjEEMkNaySrcA5kQbEJfkaSCkl9VoIk5Xb8llq3RV9hHYP%2Fe%2BA9dyJT0KMasDBiKPom2xSDhwhNNM9SpA7KIkYNhue2PvneEzKM5yNbafsoiJmzykAfRP0PW1oGf9CV%2BcmIqLf3mSHKdANFU7BhQfjFGTMrpiqqAuLRcGpR9FZFR%2FUUM5DtmvzHbX5hEgrjok0cSCQPGYtTPaRBwDnjMq2C2%2B5L%2FQTsK5V21IzRNLojhKHgFyEuN4u9PNx8aKj%2BJMMSZ1iw5uE2QaaKHYKJLW0kUMjtEeORHjgFdDWgJRUlS3bRRSgkMq9qHtIIt7E%2BavkdGlJ%2BpoB0XHQeR36s0mT%2Ft6NGuD2%2Fcc%2Bd33TcbpVRu26P0znfRz3HdFotqkH6rUiLWGRrD3N%2Fsf%2FWT42S6a%2FIIOZnhpUz%2FgsmO%2FCNwtzBRVrjmwEDzcrsauDiInVRPp9OgUtQC0niMobSpxPQXKavn5QuGxjX%2F1tgU%2B0SVIdyXu9HJ86bX7g3p8IDXHVyTSganfyzblzg8K8Oq2Hf4Fx3DbGVZvxi92RJ3iqPj%2FbePOKSG81Owg71h94zveKUzosWujDkrzbrBxCsarMAb8arQnrnn1nUY%2FJXCZagUmiklYb%2FmlQcg%2F0DAv8szymNuTNSH1sFDMJyTwMkGOqUBdM1gQ9NV4Qbo9C5dEuCC8A6emt1iI6lEzrPByBsJUyG%2F0PYkH7HdE%2B8c%2B0RD9%2BK%2BNSB2WeeQGi9Eo2PsOhPEmc0kS5P8iKDsYbaq4lEDBhIYlfphHES4Ux3xL4jxldSdaiNdR3KdFCMQ0VyewH6P1AdsWwIz%2B5JD57tGiVUsQX0t3Vp1kvye72szHoXHwbYBbSKbgGbwRJNmYprB6oZ1O%2BzTPXcN&X-Amz-Signature=fd45493de2f2cdba77ff249b4746284424ec7474b736a1222348b0047c37fd56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

