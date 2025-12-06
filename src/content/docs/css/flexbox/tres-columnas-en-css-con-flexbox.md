---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLTUUOY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXMBN7ctCcIjNKmvFjgIOt6el9Mb%2F73zzCzbx7uGOHAQIgTcNE2klZb6%2Bl9MIml%2BX8yD%2BeUP7yox0LBykx%2F7cT6MIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDC8PWXPVFoYpUYx2ZircA3GUJvaueQaYkJ%2FOTX6GAgUbS%2FJVGmoGqka%2Bv72LLsuDUZHnTR36DM84ict0YjCE4W1rYufuOOthX4daw%2BH5QxdZfXES7C0UL3yC6LmAslANVTmkvrnuLLeUWcgAdpfziwnvj%2BxbKuh7fBNUD5hDRKenMTzt%2FB%2BcPCp1GyzxBIMA7aQkD5UPGOJ%2B4Qwq8NyFwhhKBoYZdGYRz69aO%2FcX%2Biwd2Q6pp4eDebVf1IvqHTs5bmLP1cd2E0VO9sVG%2FGCWEAYB%2Bh9jrVRRZTmh70cDa7J8GyQ5pZvheEWNYQP9Zkv8WtRIbX3ljdKPZBywJ2lrKhfN4uzVrWGPFcbldiaHkyMiW9D6qYN5U7DvP63uAxKWDTmA%2BYu7oiRbzvTWpiaIM3%2FBkBvTve5mRwT%2FG10vjbhxTnZbcqJCO0cLibtt637VMhL0yFNt%2F0Tm4BjwSxWBRuJ0FtGIRMTRsnJ9u9yp65egLqbmlloRi2CwZePlTISaob8NAZuARZF283K%2FlA9HluveU%2FClNz3ZG3KhD1DsX7zsm%2B4joVYhdoYegCQoaCkHR4JlHXu8WEy3eO5jymYeeRd%2F5PgV1QN%2B1xEpFPjo5sHwfowoZ01IQvcbTxcy34I6Q52RWRQ1%2FZFh9IqYMJ7DzskGOqUBIjHh6B1h39HKD6%2BWKNzk7DeacT8hloLBmnI%2FzsSOiKjhrLTvlZfbiU2cNQlPPskeDAePXlJBFucs%2B4s%2BWMXUboeEyEsQ4p4v9PQ169I9gmqutiLUE%2Fd%2BnXREL8AP37VecUQBuB9G0MJKXLqjijAPBn4n%2FBY9hDb5XikXivnWh9Ny53Ff9PR%2B3vCmXdJRlMffdIhH0o0OQRLnOLbqi7%2BH5SNOirGm&X-Amz-Signature=59b11f6d61c46069bcb2cb888b5053b09b8b83345c61be5afb135a0972ab1967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMLTUUOY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T035725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXMBN7ctCcIjNKmvFjgIOt6el9Mb%2F73zzCzbx7uGOHAQIgTcNE2klZb6%2Bl9MIml%2BX8yD%2BeUP7yox0LBykx%2F7cT6MIq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDC8PWXPVFoYpUYx2ZircA3GUJvaueQaYkJ%2FOTX6GAgUbS%2FJVGmoGqka%2Bv72LLsuDUZHnTR36DM84ict0YjCE4W1rYufuOOthX4daw%2BH5QxdZfXES7C0UL3yC6LmAslANVTmkvrnuLLeUWcgAdpfziwnvj%2BxbKuh7fBNUD5hDRKenMTzt%2FB%2BcPCp1GyzxBIMA7aQkD5UPGOJ%2B4Qwq8NyFwhhKBoYZdGYRz69aO%2FcX%2Biwd2Q6pp4eDebVf1IvqHTs5bmLP1cd2E0VO9sVG%2FGCWEAYB%2Bh9jrVRRZTmh70cDa7J8GyQ5pZvheEWNYQP9Zkv8WtRIbX3ljdKPZBywJ2lrKhfN4uzVrWGPFcbldiaHkyMiW9D6qYN5U7DvP63uAxKWDTmA%2BYu7oiRbzvTWpiaIM3%2FBkBvTve5mRwT%2FG10vjbhxTnZbcqJCO0cLibtt637VMhL0yFNt%2F0Tm4BjwSxWBRuJ0FtGIRMTRsnJ9u9yp65egLqbmlloRi2CwZePlTISaob8NAZuARZF283K%2FlA9HluveU%2FClNz3ZG3KhD1DsX7zsm%2B4joVYhdoYegCQoaCkHR4JlHXu8WEy3eO5jymYeeRd%2F5PgV1QN%2B1xEpFPjo5sHwfowoZ01IQvcbTxcy34I6Q52RWRQ1%2FZFh9IqYMJ7DzskGOqUBIjHh6B1h39HKD6%2BWKNzk7DeacT8hloLBmnI%2FzsSOiKjhrLTvlZfbiU2cNQlPPskeDAePXlJBFucs%2B4s%2BWMXUboeEyEsQ4p4v9PQ169I9gmqutiLUE%2Fd%2BnXREL8AP37VecUQBuB9G0MJKXLqjijAPBn4n%2FBY9hDb5XikXivnWh9Ny53Ff9PR%2B3vCmXdJRlMffdIhH0o0OQRLnOLbqi7%2BH5SNOirGm&X-Amz-Signature=f55582ec668c1db4c6e5610890368bb89fdda5eab52550fa2d50b86159f6d7e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

