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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKXBT447%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCLo4WdizciAjnzTayxGs%2FFR92IBDqH%2F5Sj8fnXTTn2MwIhAIj5F6xF9Riizyk7cqn0hPwFTgNGOzc7vYcfwBl6RjFJKv8DCCIQABoMNjM3NDIzMTgzODA1Igx%2Fa9to1%2FHqxZ3ZtS4q3AODyTdTAjb%2FD5ItXg0BhRxax1WzirJXxvzeV6XRdKIRoggP%2FT75KxOQfCedQEAKQ4zOkw7dO4BY1dY0YtWvLx9SIYV7yhz%2B%2BfCfzQSQP%2Bn9Kz7N4k2l1e3ru%2BE3hO3MYNVjWAtbbUScHZKREKmUpP1II6fvbq0efPUR8Uk6TeNOELs9yfOBTKdL0crY%2FORf%2FIoC%2BDakNbsjRk%2BIghc2spOKCWI2Ljfu75WNR%2BXASxPP4VIts1%2Bz8JM%2BC5Q%2FCOD8dYJ5z%2FJC12nMidk9pFLT2P03OWsMRfD%2BqzDZLIzBuGacEp2WNbHQFoyX%2FOnbp912EaA0y3fCFV0m9Zsy%2BxKv1IimmBjjxT%2BcbcE0GjXWcn7ggUEabDRnW5X0eLCANm%2FG4JHoN2OlcLr%2FijasOvjPh06ZWX5C1AtFWwDpWpTxh59dXlS3%2BmVAe1eMYP4qDdNRb0VioaOE4Wm%2Bg1cYoBq5Bxw5HZ3GyrSW7XsyO2JVdTTf%2F9MNVq%2FA9RJfR2VDgQq%2Ft1bDkSgq2Udv4JVQKhDVpfH6U06T84IUeB%2FnxRDQF%2FIFNJHyZ5nyl%2B5v6yMhBtsn2aY5c52f9c%2FRgeG%2BWl3RZvKa0eZdHHF8dqrzj4248VxfOOHVziILIvhZcPoSnjCnlr7JBjqkATrWogDy2wO9FT20jzaYkaTHAVxGkW1gn3%2BQvKtFOLbQ3Lt3pvMTWTCL5JbAjUNyHIN7%2FrHHNuumNy8YL3fM7Nu%2FfppK0SHhFB4AYtZx0WPivMOKxsG%2Ffg8jVZ5WmAnMwt1JT9nC2GfOvQvS1j%2Fq7YHYmlN6k%2FYsz9uZg0hMR%2BynOz9c2RYIhG%2FahWkMwenHO2htGW895tnznpEhdJJap85NUQQz&X-Amz-Signature=8f4cf2f27944366b1e8f494b0703c3597a90d937b4a188f5c81f7f9d76edefdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKXBT447%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T052432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCLo4WdizciAjnzTayxGs%2FFR92IBDqH%2F5Sj8fnXTTn2MwIhAIj5F6xF9Riizyk7cqn0hPwFTgNGOzc7vYcfwBl6RjFJKv8DCCIQABoMNjM3NDIzMTgzODA1Igx%2Fa9to1%2FHqxZ3ZtS4q3AODyTdTAjb%2FD5ItXg0BhRxax1WzirJXxvzeV6XRdKIRoggP%2FT75KxOQfCedQEAKQ4zOkw7dO4BY1dY0YtWvLx9SIYV7yhz%2B%2BfCfzQSQP%2Bn9Kz7N4k2l1e3ru%2BE3hO3MYNVjWAtbbUScHZKREKmUpP1II6fvbq0efPUR8Uk6TeNOELs9yfOBTKdL0crY%2FORf%2FIoC%2BDakNbsjRk%2BIghc2spOKCWI2Ljfu75WNR%2BXASxPP4VIts1%2Bz8JM%2BC5Q%2FCOD8dYJ5z%2FJC12nMidk9pFLT2P03OWsMRfD%2BqzDZLIzBuGacEp2WNbHQFoyX%2FOnbp912EaA0y3fCFV0m9Zsy%2BxKv1IimmBjjxT%2BcbcE0GjXWcn7ggUEabDRnW5X0eLCANm%2FG4JHoN2OlcLr%2FijasOvjPh06ZWX5C1AtFWwDpWpTxh59dXlS3%2BmVAe1eMYP4qDdNRb0VioaOE4Wm%2Bg1cYoBq5Bxw5HZ3GyrSW7XsyO2JVdTTf%2F9MNVq%2FA9RJfR2VDgQq%2Ft1bDkSgq2Udv4JVQKhDVpfH6U06T84IUeB%2FnxRDQF%2FIFNJHyZ5nyl%2B5v6yMhBtsn2aY5c52f9c%2FRgeG%2BWl3RZvKa0eZdHHF8dqrzj4248VxfOOHVziILIvhZcPoSnjCnlr7JBjqkATrWogDy2wO9FT20jzaYkaTHAVxGkW1gn3%2BQvKtFOLbQ3Lt3pvMTWTCL5JbAjUNyHIN7%2FrHHNuumNy8YL3fM7Nu%2FfppK0SHhFB4AYtZx0WPivMOKxsG%2Ffg8jVZ5WmAnMwt1JT9nC2GfOvQvS1j%2Fq7YHYmlN6k%2FYsz9uZg0hMR%2BynOz9c2RYIhG%2FahWkMwenHO2htGW895tnznpEhdJJap85NUQQz&X-Amz-Signature=b3632bf0671051e03582cf8df3cfc75b2e0ffb1f4ca3164f9ed63aa23153f5dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

