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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S3E33IU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T015823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDWos6kGvx%2Fha0o4lbRw0pxJOXnaaADhN3D46%2FNBTacywIgEZ%2FVhreVt8FUDk4whfEJco%2B6ZSxxZRh7ip38i%2F4y0QQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJEOuakRns8te6B%2FwyrcA5cqxNHjudZA7ND6rByLruGSx7gSJ3d%2F3sgP%2FXpzmHUZPt2x6jtSLwiZzxOEEelKJofwUxRezL3HSKnQrEvN44D39me7N5e6DewMI%2BHMygzksCYThaRUt9eUND5EjkahzzHai9Et8%2Bs4eSqlWNnddt9hmY9ac7XmbDnuwrhDZRDLOJXnjC8lSPU5Or6N99uCoLIVkHoB96vcu%2BKQgxXQHMEwDeafecIFpxnG3WEXYR%2B%2BytY72394lZxEX7Jcz2yuJKt%2BQZ9RRcjhhvPCkyoiYFg0ShQ7fbcGKERTSbj0OhvuxPU9Hx8n7N0Mjxe8X60j3US2%2FI6uUgD%2FNlclaHREYW%2BbKPZrRzGfXa6ggtV2zTKsTVMfbKmJ3tAUft7MABbwzQODTL8N1EGblpcQWkrsoJVIO6i%2FjNDU0Mh7BxwPdga1hT3PAZlhWymc7kaBfhkgQzp3sI74%2BYUwCSO7juN9FoU7ToYJ4oZcNL3OCULt5B4MRz57Y7hK2TpCuTnuAVSW4BND4OpeAZTW%2B38wbZnND8FrNt60id%2BQ8x03hTzS2KniGf8TAiGPCGt0jgpEgdjvRuSOV2gyGbiEMS6muIvwTKo%2FcDI%2F7HWHE75nwisNd0lDo6%2FVfSj7xqSFeuR6MPqWvskGOqUBePCtU4dD2%2F0TT6e3SxN9jsj61J%2B7Dkj%2FJ%2FQO4hQXRSZ3iwq9G4wJL3TBeDtY37opih8fPEBZ9Y486FtWrAWbUV7LFIpuVnB1jVtujWbiYoG4vPDtwilHcAONdggvA0399q2YsceZsBYIryCZlquiE3xqfLEOqsTbqui%2B2y9cAnYBzCliTwsDKtFlzC2JGQ5HsJ47uxFQuMs0UAEhwFCjmbH3S89N&X-Amz-Signature=9903c13f6861bd9b9df6ebab69ddaef0bd3eaf7d5624e0f2d2c7e14c3a197208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S3E33IU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T015823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDWos6kGvx%2Fha0o4lbRw0pxJOXnaaADhN3D46%2FNBTacywIgEZ%2FVhreVt8FUDk4whfEJco%2B6ZSxxZRh7ip38i%2F4y0QQq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDJEOuakRns8te6B%2FwyrcA5cqxNHjudZA7ND6rByLruGSx7gSJ3d%2F3sgP%2FXpzmHUZPt2x6jtSLwiZzxOEEelKJofwUxRezL3HSKnQrEvN44D39me7N5e6DewMI%2BHMygzksCYThaRUt9eUND5EjkahzzHai9Et8%2Bs4eSqlWNnddt9hmY9ac7XmbDnuwrhDZRDLOJXnjC8lSPU5Or6N99uCoLIVkHoB96vcu%2BKQgxXQHMEwDeafecIFpxnG3WEXYR%2B%2BytY72394lZxEX7Jcz2yuJKt%2BQZ9RRcjhhvPCkyoiYFg0ShQ7fbcGKERTSbj0OhvuxPU9Hx8n7N0Mjxe8X60j3US2%2FI6uUgD%2FNlclaHREYW%2BbKPZrRzGfXa6ggtV2zTKsTVMfbKmJ3tAUft7MABbwzQODTL8N1EGblpcQWkrsoJVIO6i%2FjNDU0Mh7BxwPdga1hT3PAZlhWymc7kaBfhkgQzp3sI74%2BYUwCSO7juN9FoU7ToYJ4oZcNL3OCULt5B4MRz57Y7hK2TpCuTnuAVSW4BND4OpeAZTW%2B38wbZnND8FrNt60id%2BQ8x03hTzS2KniGf8TAiGPCGt0jgpEgdjvRuSOV2gyGbiEMS6muIvwTKo%2FcDI%2F7HWHE75nwisNd0lDo6%2FVfSj7xqSFeuR6MPqWvskGOqUBePCtU4dD2%2F0TT6e3SxN9jsj61J%2B7Dkj%2FJ%2FQO4hQXRSZ3iwq9G4wJL3TBeDtY37opih8fPEBZ9Y486FtWrAWbUV7LFIpuVnB1jVtujWbiYoG4vPDtwilHcAONdggvA0399q2YsceZsBYIryCZlquiE3xqfLEOqsTbqui%2B2y9cAnYBzCliTwsDKtFlzC2JGQ5HsJ47uxFQuMs0UAEhwFCjmbH3S89N&X-Amz-Signature=64ab3ab453cb85adbf400e932d6992fd79789472e46c472b1d2651ea6e7c5641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

