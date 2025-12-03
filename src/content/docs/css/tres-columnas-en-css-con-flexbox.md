---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCUDIZN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC460%2B6ZlMw7jOaujHJWGtsAKy7nqHDWu6kGizkKGrieQIgYXpsVV9Dej%2FObSEG9awSIYDyLegzpaZhy0i2b2LokFEq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDEgHLXi7VjWQ2GLviSrcA9Ev%2Bbm4%2FW60X81UycvsBUxPFl04iRcqR4Jto62kYJ9eUo%2F%2FrWoLsYnVEeTHmefZXadAfOH8S%2BjiZocJbk0n%2FITwg7ELrC2r%2BKH%2F%2FyEQ2FDkVbJUDANRZFWvlx0TQV1pb9NfZ5VWEwQ96J0GvHFQT76YrG7zhhXETfGjeErxMQYs7H0ezLvxuE6sH8Q2c2KQSG0Z6Upsl9QD3TRkAui03zIOsnEPv5W1puBkp%2Fbz5p7t0K%2FrlK%2FhwPHBFf10oLa1fQuIZZ23D8bX05j1z3HbTARLD%2BKqH7VcGI8TC2iqSr4FO2KKk4nT7d6i7Nb%2BpE5%2BWb0%2B7Su1p9aIzNawsLEG%2BSsRZOPvu3CJ4qn8uWImwGj4vhH233583LJo8fnbhWZQBpejmY0xlDpLniSBOnYRnykc%2Fl63aoKM%2Bh7ZQLsTTgVcnVMDE%2FXKuIw%2FCP%2F462szqYohD7VvnpkN7X%2Bvb1oQr33OWbzEHXOU68PQL0%2F7yMT4O0G%2FFMPjdDMefDXK%2BE5oe7YKbLSz4GfdCJrxGROJ1YiGNiXs26nnMZo0gfZhGSgyGbcfs6RqlMqvdpFKsaPqHQDMAo%2FguVuOBoGywEMWR689ooSrKcM3CQFZ1T%2B2FGvzGgSti6x2yaFORwxVMMf3wskGOqUBk0hk5xGYg7JVkDSAs94WecTP8MW2MTqd0dbt7yr%2Few2caNTMrv5KU2LVABZ%2Bj5rRzlzxF%2FQGcHRexgeIOJM6QuXCxGRVikcZJzyWpgQieuzdFWeM2Rb5OtYGGxaHL8C3DFuEAQi1%2F3u51dMa0f60CE45B1jEtk0FnX7oBpR%2FRQeZILh0hzNG1O2V7rx%2B%2F%2B0s0lSfPu5QzXqQsPG5Y38NZXDEjkJi&X-Amz-Signature=1793c5597b57f22cfa17b0eb4a0b01340e1ca78d4536dab5f2b580992edb8a90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMCUDIZN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQC460%2B6ZlMw7jOaujHJWGtsAKy7nqHDWu6kGizkKGrieQIgYXpsVV9Dej%2FObSEG9awSIYDyLegzpaZhy0i2b2LokFEq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDEgHLXi7VjWQ2GLviSrcA9Ev%2Bbm4%2FW60X81UycvsBUxPFl04iRcqR4Jto62kYJ9eUo%2F%2FrWoLsYnVEeTHmefZXadAfOH8S%2BjiZocJbk0n%2FITwg7ELrC2r%2BKH%2F%2FyEQ2FDkVbJUDANRZFWvlx0TQV1pb9NfZ5VWEwQ96J0GvHFQT76YrG7zhhXETfGjeErxMQYs7H0ezLvxuE6sH8Q2c2KQSG0Z6Upsl9QD3TRkAui03zIOsnEPv5W1puBkp%2Fbz5p7t0K%2FrlK%2FhwPHBFf10oLa1fQuIZZ23D8bX05j1z3HbTARLD%2BKqH7VcGI8TC2iqSr4FO2KKk4nT7d6i7Nb%2BpE5%2BWb0%2B7Su1p9aIzNawsLEG%2BSsRZOPvu3CJ4qn8uWImwGj4vhH233583LJo8fnbhWZQBpejmY0xlDpLniSBOnYRnykc%2Fl63aoKM%2Bh7ZQLsTTgVcnVMDE%2FXKuIw%2FCP%2F462szqYohD7VvnpkN7X%2Bvb1oQr33OWbzEHXOU68PQL0%2F7yMT4O0G%2FFMPjdDMefDXK%2BE5oe7YKbLSz4GfdCJrxGROJ1YiGNiXs26nnMZo0gfZhGSgyGbcfs6RqlMqvdpFKsaPqHQDMAo%2FguVuOBoGywEMWR689ooSrKcM3CQFZ1T%2B2FGvzGgSti6x2yaFORwxVMMf3wskGOqUBk0hk5xGYg7JVkDSAs94WecTP8MW2MTqd0dbt7yr%2Few2caNTMrv5KU2LVABZ%2Bj5rRzlzxF%2FQGcHRexgeIOJM6QuXCxGRVikcZJzyWpgQieuzdFWeM2Rb5OtYGGxaHL8C3DFuEAQi1%2F3u51dMa0f60CE45B1jEtk0FnX7oBpR%2FRQeZILh0hzNG1O2V7rx%2B%2F%2B0s0lSfPu5QzXqQsPG5Y38NZXDEjkJi&X-Amz-Signature=acd85bc95081fd51c448911d9739f4a8375dcfef83cbe5d6cf932e23fc850e54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

