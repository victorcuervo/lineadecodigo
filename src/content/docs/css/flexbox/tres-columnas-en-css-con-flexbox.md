---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V3PI5QQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH62oi2yXgzkj%2Fi3jnFS1xWMFT%2FyO8YW2vczX4iiwnuiAiEA5x5VO36wc30Dmjs1ZVZMWs0Kh1%2BdEIAY%2BQLhXuZN09EqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJW3gGRIZLbYLmyjSrcAxnYAQM1wjh%2FeBNVpX5b4Nfb8uPu8m9OfB%2BaoQrvhVdQAMpeYevlVkgjf2XSh3xtIspwO5ZxuTZCWHLjgxxMJ9UmwxA6J6hSmRlA9Y35qIb8naWcD2OTz%2BhHKDAQ6KLx%2FlhTh9yJVHj2I11SsjiZ4cLBLFORrB5GNpPjn4qs45b4KsUtBQuNL1e2Jvnbr4tucyyJCTPSkpJAB%2BiiIsnZ%2FUwlHQEDAPNbDQ%2Bk3xWgw90JkRtbNrVYQX2L9fB9A21lRyRn6sx7R1tzs7CVvMZy7%2Fd6%2B7r5lUWuc4PbGCShsh867oQryIEjWK9p%2F%2FIEqUnPMdqNutovi0U0fYtGqrkgX4Vt5CAyInI%2BiozqFlyrle41Q%2Fb09BU5KRUS4GkCsevAdh9CzhNnsvc3op2aucr1RU38ygW02xVy3243rIPIvHNdKh5aXqUPvqkOc8HlKw6soFJ3%2FQXkuDZtaG0xZsRwExlxCHDDLmCiVtx5vcIdheoNLYVY%2B2pkU%2BlDAP7nNUaMRF8DkrRUcJNCE%2BTTvoTL0S5ouFww7FRcWhhO1u4pjoMNOb3xn8Q92kAKY1fd4mjOLSxBaB1jUCxqkNpZdQ08R%2Ba8C9V%2BgKVmdNERLRA6%2FuavqUUUFDDru%2FGUn2yKMOOa1MkGOqUB46Tdj6a2xZFYpXTR0KyvuELuTmXV3lvgv0p30oI2aO8tCpN0F5o5P2zM%2FPeDbUFVtTYNj4Cbn4b%2BiIDEC4YXbwV9IVPsb3dV9M4%2Fa3W%2BBxpJI68cPOSiek9RBQuaKs60ICZm3%2FwK6UVVEdxm87LeCi94%2BMUTUnZhoIV64M5jwTqwoZ4T%2FIQ%2FIXGkla0WOm42tewC65v%2Bp6eYjgHRSTItZ2%2Fefyq8&X-Amz-Signature=31477f23a13d360a189821c173bf7f10bd43c688eca7b302ee74a83bb68672ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V3PI5QQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T081410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH62oi2yXgzkj%2Fi3jnFS1xWMFT%2FyO8YW2vczX4iiwnuiAiEA5x5VO36wc30Dmjs1ZVZMWs0Kh1%2BdEIAY%2BQLhXuZN09EqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJW3gGRIZLbYLmyjSrcAxnYAQM1wjh%2FeBNVpX5b4Nfb8uPu8m9OfB%2BaoQrvhVdQAMpeYevlVkgjf2XSh3xtIspwO5ZxuTZCWHLjgxxMJ9UmwxA6J6hSmRlA9Y35qIb8naWcD2OTz%2BhHKDAQ6KLx%2FlhTh9yJVHj2I11SsjiZ4cLBLFORrB5GNpPjn4qs45b4KsUtBQuNL1e2Jvnbr4tucyyJCTPSkpJAB%2BiiIsnZ%2FUwlHQEDAPNbDQ%2Bk3xWgw90JkRtbNrVYQX2L9fB9A21lRyRn6sx7R1tzs7CVvMZy7%2Fd6%2B7r5lUWuc4PbGCShsh867oQryIEjWK9p%2F%2FIEqUnPMdqNutovi0U0fYtGqrkgX4Vt5CAyInI%2BiozqFlyrle41Q%2Fb09BU5KRUS4GkCsevAdh9CzhNnsvc3op2aucr1RU38ygW02xVy3243rIPIvHNdKh5aXqUPvqkOc8HlKw6soFJ3%2FQXkuDZtaG0xZsRwExlxCHDDLmCiVtx5vcIdheoNLYVY%2B2pkU%2BlDAP7nNUaMRF8DkrRUcJNCE%2BTTvoTL0S5ouFww7FRcWhhO1u4pjoMNOb3xn8Q92kAKY1fd4mjOLSxBaB1jUCxqkNpZdQ08R%2Ba8C9V%2BgKVmdNERLRA6%2FuavqUUUFDDru%2FGUn2yKMOOa1MkGOqUB46Tdj6a2xZFYpXTR0KyvuELuTmXV3lvgv0p30oI2aO8tCpN0F5o5P2zM%2FPeDbUFVtTYNj4Cbn4b%2BiIDEC4YXbwV9IVPsb3dV9M4%2Fa3W%2BBxpJI68cPOSiek9RBQuaKs60ICZm3%2FwK6UVVEdxm87LeCi94%2BMUTUnZhoIV64M5jwTqwoZ4T%2FIQ%2FIXGkla0WOm42tewC65v%2Bp6eYjgHRSTItZ2%2Fefyq8&X-Amz-Signature=6760d4bbacf585adc1783c52a3ceeb42657033d1c717422af3f5f9e1e5cd3e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

