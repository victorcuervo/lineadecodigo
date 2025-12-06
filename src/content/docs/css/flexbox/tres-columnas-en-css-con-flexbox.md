---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6C2ESH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3BgPis3clIQ31ibvdltJT4WVeuX%2F9k%2B634bIR00hm3gIhAJ%2FfrVe%2FqKbKuIFMPuN2Dck0ALNcAxOIDu%2BR8l5%2BR2ItKv8DCG0QABoMNjM3NDIzMTgzODA1IgyFv3nrIC%2FU2c2K%2FN0q3AOGj3MIheGrlKWp%2FV5mzzE8QPzjz4I3bIGpmxE8BwCgjt6JYTcRa3CRykpiDUELX3EO5uEksYtVzR%2BdwUbmG8fQuJigyeX6LduCSd76zo%2FmUf6zbyqS7XDHnL0vhqNhYzbfWNTzeHsL9P0CJAkkTdC%2Bnu%2FHZwjte04Lo4cGYS7aEbh9RZbJjvV5GHi3qBSHASf7hXUkzG6nuoK8vZTwrQeXOxo14UlonvaHZygbvs2V9gwxLx9diRx30%2B%2FeYrmWIKi0gpcL%2FsmNNO3sNkPrcEaHbzD8heoILVHbdzDmZ5zH93jP7crucnikKw7OWZpB%2FB7lZoj%2FuYS%2F65kvtbuWk4W9VgKycOuD%2FEiPOqqAtiQDEO5nCmrpAySvCL8BTxHNxvZV7syV7eTnMou0XPC%2BTUW59N4wZ16599d4t16rIug1WB%2FmHHXy%2FWkpFtboafElWF0ewI2yI8PMHjlxWkN91qtthu0TeC8d3LoXpiWclfLPUB4qt55mwDRGHglT%2Buyzgxn2a8Po9lpuHg6ZwDeTxikGTImor9SsjxuGhsJKn16dD5FUDG3kxYIJo9ssKmHV7O0xIKtmxOzL0Y1qM5YqDAfC7K9lSDQf6blikoVeCuMDQR4CPLesh4VgIhkrWjDjw87JBjqkAVb4n7brfqJbKRqz9GpxR1r6O8pzOXfLMyeKVIooPWvvKetIquTpzvR%2FdPmkI64aHuTKwVDZG%2Fmo%2FD%2FiFWoVxapumD8lOnPnS9092VF%2F%2B6LNy5KZiDtVg1etKUEyM%2B7HPbOeNBiDTV7VWZfG4d0MOmdc1kpiciQx%2FLAYgCq2Y7p%2FpkYgChgEvm0WGXgCzNRypYVWRZpGa%2BdSLVIVZi2S2BTDzc2e&X-Amz-Signature=ad63fa18b4b092d6c0014c8d9ab86967999b1e4bb6b99f705b894433cda2bb67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6C2ESH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T041906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3BgPis3clIQ31ibvdltJT4WVeuX%2F9k%2B634bIR00hm3gIhAJ%2FfrVe%2FqKbKuIFMPuN2Dck0ALNcAxOIDu%2BR8l5%2BR2ItKv8DCG0QABoMNjM3NDIzMTgzODA1IgyFv3nrIC%2FU2c2K%2FN0q3AOGj3MIheGrlKWp%2FV5mzzE8QPzjz4I3bIGpmxE8BwCgjt6JYTcRa3CRykpiDUELX3EO5uEksYtVzR%2BdwUbmG8fQuJigyeX6LduCSd76zo%2FmUf6zbyqS7XDHnL0vhqNhYzbfWNTzeHsL9P0CJAkkTdC%2Bnu%2FHZwjte04Lo4cGYS7aEbh9RZbJjvV5GHi3qBSHASf7hXUkzG6nuoK8vZTwrQeXOxo14UlonvaHZygbvs2V9gwxLx9diRx30%2B%2FeYrmWIKi0gpcL%2FsmNNO3sNkPrcEaHbzD8heoILVHbdzDmZ5zH93jP7crucnikKw7OWZpB%2FB7lZoj%2FuYS%2F65kvtbuWk4W9VgKycOuD%2FEiPOqqAtiQDEO5nCmrpAySvCL8BTxHNxvZV7syV7eTnMou0XPC%2BTUW59N4wZ16599d4t16rIug1WB%2FmHHXy%2FWkpFtboafElWF0ewI2yI8PMHjlxWkN91qtthu0TeC8d3LoXpiWclfLPUB4qt55mwDRGHglT%2Buyzgxn2a8Po9lpuHg6ZwDeTxikGTImor9SsjxuGhsJKn16dD5FUDG3kxYIJo9ssKmHV7O0xIKtmxOzL0Y1qM5YqDAfC7K9lSDQf6blikoVeCuMDQR4CPLesh4VgIhkrWjDjw87JBjqkAVb4n7brfqJbKRqz9GpxR1r6O8pzOXfLMyeKVIooPWvvKetIquTpzvR%2FdPmkI64aHuTKwVDZG%2Fmo%2FD%2FiFWoVxapumD8lOnPnS9092VF%2F%2B6LNy5KZiDtVg1etKUEyM%2B7HPbOeNBiDTV7VWZfG4d0MOmdc1kpiciQx%2FLAYgCq2Y7p%2FpkYgChgEvm0WGXgCzNRypYVWRZpGa%2BdSLVIVZi2S2BTDzc2e&X-Amz-Signature=8d5064323609a1130f578075346bf2851ba79818c01c50eb236ba9a71346a0ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

