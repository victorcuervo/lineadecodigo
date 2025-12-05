---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWCMF5H5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgn2b7WRxUGxOLP4A3CUUsJz4iz2ters6vVWBkVkSY%2BAiAA2dr8Q0pH4O0sceIoDXxH5FiO1XaY6v8ASzzp2k0uiSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM1RD71EfZBFODkUAgKtwDQ91QYVa3uhSJ8AQ2Kx%2BA2Ucgwj6Re9MjiYGPfEdIRTLpRVgdJXFcd%2BlskH5N5G5tGX5TfijIuTol%2FxRYB15B8upXUtepcC%2FlNwcRvgwk5KXjiNGNjmTIhlryrxlRQnCIHwSI0%2BAx0T8I3D0L4WIVe%2FveoaQXCnJ%2FzhbrbuHcjkgdcD%2BY8tmmHNwSYNjNREnz40hNz7xwhYiQan60h8gHLwE6iD2fjp%2BloYPja5i8b2Zdm%2F8UlGV184DdKS%2FuQGD7UzU%2FUe8HBsYOo7nY2%2F90ErYdWQuRqt94h60wJ2GLVov1X7Zc4bgW6aq6B4v%2BuYEEathxpEhBfVieQGf4gvePlxVhdalJVh54C5RMpvVIP0poCCGDszTI7dpYH7l3VI%2F%2B7zLKaCFoyoHRoyBqhJ%2FRdLMn2EHRYrw5MCJZtm6JNeGXjRLtpXEtbbHy7xTdYTTPJbD%2BHNbeGVQ18oe6fW6mOOXbZfdS0A5oXgbBzZ0jdFap51sYRuxYO7YOmM2EhYNhAWD9dIblCUqm7%2B%2FH0yrjrlu%2BstXTVFqiHNV%2BrQv6Y5T%2FYZGv6YUrtgzEzilYztp%2FcDQPZJPwj6sY80pzc32VqhKyjD0ZC%2FNmvsQzLPZgSrwRJkCg6e7yUjthiN0wkOzLyQY6pgH4gUKOlkor0CoeIuSo5aoVaZW08Bf6jQ5a3qSwYm0sK0WDHGqk1A2c75E1wiLKJVZzxr3kloV9cFhKJ%2BGLd4eUS7VZbmZ96cOAZaK2oTruQUWWZdHaz%2BoP77dw7Jynk3uhsXDbZdNz1WQzKAwgnkGkxC3BRAjhVE7iAZYLazoT7vWWANgvv8ttRESbntCJxVAeL%2FPeX60RkirwQRMkQhbyFkCaxnpR&X-Amz-Signature=a6f4fd632b227ff8f36a874c81db14e330233467aec0bfd48849ddda0e3743b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWCMF5H5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T200154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAgn2b7WRxUGxOLP4A3CUUsJz4iz2ters6vVWBkVkSY%2BAiAA2dr8Q0pH4O0sceIoDXxH5FiO1XaY6v8ASzzp2k0uiSr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIM1RD71EfZBFODkUAgKtwDQ91QYVa3uhSJ8AQ2Kx%2BA2Ucgwj6Re9MjiYGPfEdIRTLpRVgdJXFcd%2BlskH5N5G5tGX5TfijIuTol%2FxRYB15B8upXUtepcC%2FlNwcRvgwk5KXjiNGNjmTIhlryrxlRQnCIHwSI0%2BAx0T8I3D0L4WIVe%2FveoaQXCnJ%2FzhbrbuHcjkgdcD%2BY8tmmHNwSYNjNREnz40hNz7xwhYiQan60h8gHLwE6iD2fjp%2BloYPja5i8b2Zdm%2F8UlGV184DdKS%2FuQGD7UzU%2FUe8HBsYOo7nY2%2F90ErYdWQuRqt94h60wJ2GLVov1X7Zc4bgW6aq6B4v%2BuYEEathxpEhBfVieQGf4gvePlxVhdalJVh54C5RMpvVIP0poCCGDszTI7dpYH7l3VI%2F%2B7zLKaCFoyoHRoyBqhJ%2FRdLMn2EHRYrw5MCJZtm6JNeGXjRLtpXEtbbHy7xTdYTTPJbD%2BHNbeGVQ18oe6fW6mOOXbZfdS0A5oXgbBzZ0jdFap51sYRuxYO7YOmM2EhYNhAWD9dIblCUqm7%2B%2FH0yrjrlu%2BstXTVFqiHNV%2BrQv6Y5T%2FYZGv6YUrtgzEzilYztp%2FcDQPZJPwj6sY80pzc32VqhKyjD0ZC%2FNmvsQzLPZgSrwRJkCg6e7yUjthiN0wkOzLyQY6pgH4gUKOlkor0CoeIuSo5aoVaZW08Bf6jQ5a3qSwYm0sK0WDHGqk1A2c75E1wiLKJVZzxr3kloV9cFhKJ%2BGLd4eUS7VZbmZ96cOAZaK2oTruQUWWZdHaz%2BoP77dw7Jynk3uhsXDbZdNz1WQzKAwgnkGkxC3BRAjhVE7iAZYLazoT7vWWANgvv8ttRESbntCJxVAeL%2FPeX60RkirwQRMkQhbyFkCaxnpR&X-Amz-Signature=1594a4e37466c792149cd288772b23ea740fcffb3ee781eb71828c7e5804b467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

