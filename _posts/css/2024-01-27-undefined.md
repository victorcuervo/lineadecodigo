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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIOB5ACS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T012433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC89lbA5n%2FJlgVQVVcyOh2lxt23xA1aIgXYLhNsNxstEwIhAKYF5gQAv5IuIKYbQK6xOuqkzJmhHtzFXSoC8VjyGTQ0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzH964c5iNftZzc%2FSwq3AMcxkUpduFBGaOX5KYpHSKg1XUfJHbrhlE%2F%2B4oLexBlJbg1FZRx8DWZrm5OJUPWCmiHpuWtnwPL3xYGxKOCWSuVtlyig5M%2FC9p65ZG5lUuyqTGOIHOWmxEpGlxaO6kFGfLTOvKrJbzaPbtTLmm3o9MKIlTUOzADfoHK3pnREei5p1gF3qXPdQkWb4KTJuH2m3wnb%2BVOZMTZv98BGKbuv0dZL%2FWf96ox2rErV%2BS7KU3GbJsHxWxtXF97BHXbYpmtDlcGZScqscCqXSG%2Bjly11%2B49iChXgDNIb%2BRaDWaUbOnUitS%2B9lACBwP5UudvM4fCbTCanN3viY6WlIlpcRtux%2FDAG4S4nelwqQfMGEZ5FUHR2jcn9jzbVaLIVzhL9cQIHI2JO%2BMRBmILZxMSnoBw7Eodb5h83IrQKZidreicdhvsujbSCIGaBOP8kqmucSUieUkhJvgs5Fsc8la32l%2BglDj0IHLwmiVrxyo2BAbrFqEtl%2FIRkDhyKgoSZNoQZHQZ9GXzDwBgJoxRSHQuZ46StIcJjG3Nzj3EFFfnXJ14Ps%2B3JFtQtkY21iI5h09g5IahyPXy%2Bxrt8qe%2F2NSTnAGw%2FKf5wG9BNQgEKa0re%2Foizg1kS3f1nGSjyFPjXfYgTjD%2Blb7JBjqkAVTHE%2Ffch9eQsjxXTREEwp7gJYa9zJaDmRlOGMRunkSqaC%2BuoQFCgzyTTGpuKX0jZTG6qcKBtXZqoV0UNEgdUdaObvC%2FGcbabGWcIjOzb4WZ9xumIlpNwvNJwIdTXN6vFoNl2O0bQzZiUwyKKZUeYQwcUWK5TwmGNWvnqrj7UrCNsMPpGrRJt2iA%2B%2F2cIoeylCIBiz%2FiJC0xlRGoRzAhz35j%2FP%2Bs&X-Amz-Signature=e4dc0c3fe6b176cfd9978f3a64820849434fe866a3133bdaadb141519c56d821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIOB5ACS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T012433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC89lbA5n%2FJlgVQVVcyOh2lxt23xA1aIgXYLhNsNxstEwIhAKYF5gQAv5IuIKYbQK6xOuqkzJmhHtzFXSoC8VjyGTQ0Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzH964c5iNftZzc%2FSwq3AMcxkUpduFBGaOX5KYpHSKg1XUfJHbrhlE%2F%2B4oLexBlJbg1FZRx8DWZrm5OJUPWCmiHpuWtnwPL3xYGxKOCWSuVtlyig5M%2FC9p65ZG5lUuyqTGOIHOWmxEpGlxaO6kFGfLTOvKrJbzaPbtTLmm3o9MKIlTUOzADfoHK3pnREei5p1gF3qXPdQkWb4KTJuH2m3wnb%2BVOZMTZv98BGKbuv0dZL%2FWf96ox2rErV%2BS7KU3GbJsHxWxtXF97BHXbYpmtDlcGZScqscCqXSG%2Bjly11%2B49iChXgDNIb%2BRaDWaUbOnUitS%2B9lACBwP5UudvM4fCbTCanN3viY6WlIlpcRtux%2FDAG4S4nelwqQfMGEZ5FUHR2jcn9jzbVaLIVzhL9cQIHI2JO%2BMRBmILZxMSnoBw7Eodb5h83IrQKZidreicdhvsujbSCIGaBOP8kqmucSUieUkhJvgs5Fsc8la32l%2BglDj0IHLwmiVrxyo2BAbrFqEtl%2FIRkDhyKgoSZNoQZHQZ9GXzDwBgJoxRSHQuZ46StIcJjG3Nzj3EFFfnXJ14Ps%2B3JFtQtkY21iI5h09g5IahyPXy%2Bxrt8qe%2F2NSTnAGw%2FKf5wG9BNQgEKa0re%2Foizg1kS3f1nGSjyFPjXfYgTjD%2Blb7JBjqkAVTHE%2Ffch9eQsjxXTREEwp7gJYa9zJaDmRlOGMRunkSqaC%2BuoQFCgzyTTGpuKX0jZTG6qcKBtXZqoV0UNEgdUdaObvC%2FGcbabGWcIjOzb4WZ9xumIlpNwvNJwIdTXN6vFoNl2O0bQzZiUwyKKZUeYQwcUWK5TwmGNWvnqrj7UrCNsMPpGrRJt2iA%2B%2F2cIoeylCIBiz%2FiJC0xlRGoRzAhz35j%2FP%2Bs&X-Amz-Signature=949416004065c43bc6944f1535e06a119a0ce718d4f857725146ac23de5434d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

