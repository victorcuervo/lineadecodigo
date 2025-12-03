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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGC3CRMI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIFevuf1CLKXJdFoNlClMdN%2BCJb7NxxhOIYZkR3pndK0mAiEA%2FjJaeH2uQDXKUbTXlZYNSTEJp%2BKhyvN9tzs9CssNhbYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJgULVLztK23ZKHU9SrcA2uDeXm0%2FyGylxyfSEsf8zSdI3k5JPRWWOupR35hArjnwGwaQghWhjqa70iWKwRTYNmPagzHcLmeTxRWxU0p2A%2BPAIK8lxCL7pGRANeFN%2FcwrcVtePooNg0oyHtY29vbOnWopArz3MI%2FZqTiRuv%2B72I8QpxVfuuk0phRZS63DPH%2Ff8iR0%2Bj4o%2FXyXtjGW5AyXQH%2F2ZzMR1quakXi4AbB%2FohQaUh%2FTCh1YKMHpGgQWZjhALwYfkuJidkG%2FYMcXRFu6j1U96ipdSzKYLc%2BjcGQIpHQAwMhSgxJAYTIuW0ItaVRUtWSZ7NwKMM%2BWOybQrPpohKGPqssl%2BQhXUHQKJS700ZhiMQ0TouZpAdqDPv3ql9MAK4i3I46FysKxDYMJDo5AWfAFb6PBXt4D2IkRp2r%2F%2F9sgJ3HaIEm%2BqnzrzaJ6FHdIiOoDEXPRXuFRjNiofL1cXlj1Ne8WOBQfaLee0TPKGdRAArdw%2BHYY48uCEQKSPp3Gr9csYH6H3wK8pIG9%2BqOAyo2bVBAEUqb9rQQCSLaDr7Yae1f7fSjnS%2BZq7lzyX6d%2B7mIZbCQEA5H3L7T1iIGxMwEzvUEGVyK%2B79bHMU8SrJJ409%2F7vFL9TtM4vmMwRqjAiu78SODiGXEjYxaMPLVv8kGOqUBCjb3UoO1KHkjXbZoYuOzrfHdhVZn6gexNGi5HC9AivwUzyWmADrH9ujZEJ6sW2O3lg0O6bI2Qs0bPX31MYrZB6NmtpxokfW9UJz69xpnjuv%2Bk4zZcLioy5ExGm32gscmsYdj9YwXZrTyMLbZpvYwcqpy4zPz4I4Z4aEGkVu22HppjeG7ziip1MxZL7JyGbB9f3mdS0RMR68iHpNuIrHhLWkKZSx0&X-Amz-Signature=bc967f3dd2b4981be32b4bfe8737ac426e4a5edfb3f32924d239d5c919711cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGC3CRMI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIFevuf1CLKXJdFoNlClMdN%2BCJb7NxxhOIYZkR3pndK0mAiEA%2FjJaeH2uQDXKUbTXlZYNSTEJp%2BKhyvN9tzs9CssNhbYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDJgULVLztK23ZKHU9SrcA2uDeXm0%2FyGylxyfSEsf8zSdI3k5JPRWWOupR35hArjnwGwaQghWhjqa70iWKwRTYNmPagzHcLmeTxRWxU0p2A%2BPAIK8lxCL7pGRANeFN%2FcwrcVtePooNg0oyHtY29vbOnWopArz3MI%2FZqTiRuv%2B72I8QpxVfuuk0phRZS63DPH%2Ff8iR0%2Bj4o%2FXyXtjGW5AyXQH%2F2ZzMR1quakXi4AbB%2FohQaUh%2FTCh1YKMHpGgQWZjhALwYfkuJidkG%2FYMcXRFu6j1U96ipdSzKYLc%2BjcGQIpHQAwMhSgxJAYTIuW0ItaVRUtWSZ7NwKMM%2BWOybQrPpohKGPqssl%2BQhXUHQKJS700ZhiMQ0TouZpAdqDPv3ql9MAK4i3I46FysKxDYMJDo5AWfAFb6PBXt4D2IkRp2r%2F%2F9sgJ3HaIEm%2BqnzrzaJ6FHdIiOoDEXPRXuFRjNiofL1cXlj1Ne8WOBQfaLee0TPKGdRAArdw%2BHYY48uCEQKSPp3Gr9csYH6H3wK8pIG9%2BqOAyo2bVBAEUqb9rQQCSLaDr7Yae1f7fSjnS%2BZq7lzyX6d%2B7mIZbCQEA5H3L7T1iIGxMwEzvUEGVyK%2B79bHMU8SrJJ409%2F7vFL9TtM4vmMwRqjAiu78SODiGXEjYxaMPLVv8kGOqUBCjb3UoO1KHkjXbZoYuOzrfHdhVZn6gexNGi5HC9AivwUzyWmADrH9ujZEJ6sW2O3lg0O6bI2Qs0bPX31MYrZB6NmtpxokfW9UJz69xpnjuv%2Bk4zZcLioy5ExGm32gscmsYdj9YwXZrTyMLbZpvYwcqpy4zPz4I4Z4aEGkVu22HppjeG7ziip1MxZL7JyGbB9f3mdS0RMR68iHpNuIrHhLWkKZSx0&X-Amz-Signature=888702c81dd07da295b67b3487dad1e97529eff311d229d2814f47d684afa6b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

