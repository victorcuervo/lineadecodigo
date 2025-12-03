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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TM5ICNV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCt7GgDqlxencwqp%2BjkQGX4QPHmmN5%2FLpqhKXAmu0%2BNswIgIvzK57Lc8CL0wzm8A2XSmlzr2f06NCH%2Bxe0UKGLoBsUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHEk0sLvkE8fgCQnXyrcAxsEL9PPIfycrmHSexp6qmk82tnOSjHyb9c71VMWsc5%2FCPddyN7A1iuIfcHqwt3EpjnZpz%2B5ik5wo76Hyl810RaEakugQfNCycQIGHJhDHfrOtNZI5t7cy4M4jNXlb3cKckA%2B9QPKOfoel3dD6ODoqWeDNEuAV4NPKrxhstGsPd0wkjbe9sBsbOqVUp1E28QaxjjbvPKkGU6pBkyyoINbjkrryHQXmI8S7UX7oNBWbyuTrNCtnyAWMkbYaBVsJEAQZlAi7E%2FeapWcXfQi4rGAcN%2B%2BWcix%2B9Ct2D%2BB2Hn6TOOU3RZSiunyP9yOQGgFpNKkqvEGcxGZ2KJZDNQCvf4Mlwtx2pzsnHcZIRe8jZ0UKmkLy5cjlzmw6bw%2BJB5OUsfCSc3ey1s0VhqQF1YGLGF5nFoQk%2FlIe9ZxMoazcmFhWdekQnm00936TCQWGxMT0AXPP933vpBfyfLMbr%2Fb3PKrMEMqgBZ2Jjlt1A4Z9xm%2FC7c6kJ5jHSOCx3S8dwW4PoCzKzTXDkWnG4gzYlCZOUmnoYLvXIMpQmbejzb7g1kCekFe1Q7%2FRpM7L%2BczqLpqob2V69EOWkLX4cg1PvxQs%2Bo7sJAD7kdMQCfZAStyzqrxojQ5DWeJsxBseCuoKcFMNv2v8kGOqUBmBfo0PBTJy%2FbwOGsuXWB9GKPeam1w96m7v8DCXaFxF8iLJxbBgD2ZAQd9og1uovmcMtA0dX4AL9Jssu1yUawbPYnOxM6bslWDbxa2LgSTVWkY9t6jLLhLmeBhf2DwrY%2F01woR6IoZYH7IdVE4115PJImOx9wvJ%2F1R4sN2RUP%2BTnWJgk6e%2BnoOo%2BBU3wcp3LmSXuhcvXbZFD3d9CY1magfO4KATOM&X-Amz-Signature=17f02c0e5b9f08b0785900eea6b8e03deaa6d9029d703804e2b9771d0a9e8876&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TM5ICNV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCt7GgDqlxencwqp%2BjkQGX4QPHmmN5%2FLpqhKXAmu0%2BNswIgIvzK57Lc8CL0wzm8A2XSmlzr2f06NCH%2Bxe0UKGLoBsUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHEk0sLvkE8fgCQnXyrcAxsEL9PPIfycrmHSexp6qmk82tnOSjHyb9c71VMWsc5%2FCPddyN7A1iuIfcHqwt3EpjnZpz%2B5ik5wo76Hyl810RaEakugQfNCycQIGHJhDHfrOtNZI5t7cy4M4jNXlb3cKckA%2B9QPKOfoel3dD6ODoqWeDNEuAV4NPKrxhstGsPd0wkjbe9sBsbOqVUp1E28QaxjjbvPKkGU6pBkyyoINbjkrryHQXmI8S7UX7oNBWbyuTrNCtnyAWMkbYaBVsJEAQZlAi7E%2FeapWcXfQi4rGAcN%2B%2BWcix%2B9Ct2D%2BB2Hn6TOOU3RZSiunyP9yOQGgFpNKkqvEGcxGZ2KJZDNQCvf4Mlwtx2pzsnHcZIRe8jZ0UKmkLy5cjlzmw6bw%2BJB5OUsfCSc3ey1s0VhqQF1YGLGF5nFoQk%2FlIe9ZxMoazcmFhWdekQnm00936TCQWGxMT0AXPP933vpBfyfLMbr%2Fb3PKrMEMqgBZ2Jjlt1A4Z9xm%2FC7c6kJ5jHSOCx3S8dwW4PoCzKzTXDkWnG4gzYlCZOUmnoYLvXIMpQmbejzb7g1kCekFe1Q7%2FRpM7L%2BczqLpqob2V69EOWkLX4cg1PvxQs%2Bo7sJAD7kdMQCfZAStyzqrxojQ5DWeJsxBseCuoKcFMNv2v8kGOqUBmBfo0PBTJy%2FbwOGsuXWB9GKPeam1w96m7v8DCXaFxF8iLJxbBgD2ZAQd9og1uovmcMtA0dX4AL9Jssu1yUawbPYnOxM6bslWDbxa2LgSTVWkY9t6jLLhLmeBhf2DwrY%2F01woR6IoZYH7IdVE4115PJImOx9wvJ%2F1R4sN2RUP%2BTnWJgk6e%2BnoOo%2BBU3wcp3LmSXuhcvXbZFD3d9CY1magfO4KATOM&X-Amz-Signature=4cfc5db86ec34c6158e9d261a0682d75396c7e277ddc02001e54b551b5893dd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

