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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPLLEVLU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHtiV1ebcTCnAU%2BEZuARYkTRJc5tBdv%2BAVqcIi%2FzvudBAiEAlpeuWRwK%2BTD9Uxn6%2BZaZ%2B9JajJgsQblhY0e0jhp8AHgq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDHS8xaWe2BJvQCX5ZCrcA6C4Z76aQN%2BZQsCgCiw3pkA2z92d2D2eOt1q%2FNUsEoOcJ6n%2BNt3PuXr0uJTjLlUnlSHuZBjK5TYU9i7yb24SwFNqUC95REsQNBF903LYcvw78X0zAZpIHtkk%2BpT40%2FUbP1Qj7X5xR%2FM7S2ctePkGANF7JTKVZx7FJ0vKZ8XNZ1wRqTx%2FGVJvUFw0RlQydtyOf0hNt7HEuiJYvf8IM0vSvXUfVOiuZgWrxUvnB%2BQyxdHbzK1c9gWXGNVWQwcwQgYmbBaa8epcMPC5LezjFbah93ImDlCIJZgn8Q%2Bo3dhsWFH29lyZA4DcFngZ2p9g4OsO%2FKuobDFSD9LjKRl%2FU8eeXlhhAfpJCykeB5ynrXQ0My7U1BEzvHmygpFaYGlXwgupaLvvMYGF14Z%2BTLDJqUNRSrhq71%2FaITY6dZ2deWvsBn35eFlVj6tQ9R7zlCL0sij7s3nrXvlRT4TCwj8bcFKoXjSaZ7kmHCPkgP%2BbHN6NeSBEWjxxXVj2YQE1EpXUoEZDGIoDxjeeUxyleXhtwz3IVezWgjqYeZed4O8j6vrQUEM091YHczq0hJVKmwXhGVKGz%2B4ob9XjQ5%2FvEYOoGThMr0ruX7UIEUUh2XJCXA6kukVc424RqZLq0%2BYmpk4JMO3%2BvckGOqUBU6zqiilySnOU4bc9A%2B4D6s8vVXkBy6%2FojDIIr0bSXEJSOeiP1DLRzmQXi5Ujew9dl1L5DnqVFU0O1gPu%2BSyPnJP3WH9GXvCE12lMULkSDl4TSZzYZE8xk6l%2BiskfS5Lv6GjvKpnPcJOrdTgkAvgA6z5s2OFEyVaqtcLYAbo%2FoUFnjctnQcYJUmrciiq5Xd0PIG4A2KYeYd5TLcl6Ym1FRSZGbxVO&X-Amz-Signature=37ab4baf4ffd522e7310b11301891dc2c6c6b381db6596be6a09b3e4e6ad055f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPLLEVLU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T003941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIHtiV1ebcTCnAU%2BEZuARYkTRJc5tBdv%2BAVqcIi%2FzvudBAiEAlpeuWRwK%2BTD9Uxn6%2BZaZ%2B9JajJgsQblhY0e0jhp8AHgq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDHS8xaWe2BJvQCX5ZCrcA6C4Z76aQN%2BZQsCgCiw3pkA2z92d2D2eOt1q%2FNUsEoOcJ6n%2BNt3PuXr0uJTjLlUnlSHuZBjK5TYU9i7yb24SwFNqUC95REsQNBF903LYcvw78X0zAZpIHtkk%2BpT40%2FUbP1Qj7X5xR%2FM7S2ctePkGANF7JTKVZx7FJ0vKZ8XNZ1wRqTx%2FGVJvUFw0RlQydtyOf0hNt7HEuiJYvf8IM0vSvXUfVOiuZgWrxUvnB%2BQyxdHbzK1c9gWXGNVWQwcwQgYmbBaa8epcMPC5LezjFbah93ImDlCIJZgn8Q%2Bo3dhsWFH29lyZA4DcFngZ2p9g4OsO%2FKuobDFSD9LjKRl%2FU8eeXlhhAfpJCykeB5ynrXQ0My7U1BEzvHmygpFaYGlXwgupaLvvMYGF14Z%2BTLDJqUNRSrhq71%2FaITY6dZ2deWvsBn35eFlVj6tQ9R7zlCL0sij7s3nrXvlRT4TCwj8bcFKoXjSaZ7kmHCPkgP%2BbHN6NeSBEWjxxXVj2YQE1EpXUoEZDGIoDxjeeUxyleXhtwz3IVezWgjqYeZed4O8j6vrQUEM091YHczq0hJVKmwXhGVKGz%2B4ob9XjQ5%2FvEYOoGThMr0ruX7UIEUUh2XJCXA6kukVc424RqZLq0%2BYmpk4JMO3%2BvckGOqUBU6zqiilySnOU4bc9A%2B4D6s8vVXkBy6%2FojDIIr0bSXEJSOeiP1DLRzmQXi5Ujew9dl1L5DnqVFU0O1gPu%2BSyPnJP3WH9GXvCE12lMULkSDl4TSZzYZE8xk6l%2BiskfS5Lv6GjvKpnPcJOrdTgkAvgA6z5s2OFEyVaqtcLYAbo%2FoUFnjctnQcYJUmrciiq5Xd0PIG4A2KYeYd5TLcl6Ym1FRSZGbxVO&X-Amz-Signature=838fb41e2429a0ca6deea86a0d5d753cd721bea145decbe9c0aed83929c814e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

