---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAE4FSL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAW9%2BX8tLsmisL16uiq2OJ5YgG5pLeLREyrUGEKyY55GAiEAv%2BnqNSsyblt57nBm3ZwzFWFpRZqZs3kKmwSeZxVNGDUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOCjE43fWA4fn3cirCrcA6LZvvg0s0Z%2BiR5NbvxTn8VcUy7yqzZxXXkYWXTJxYMkPNraiI9ysKpnVQzFy7ub%2BRPoAHihtXI0e8kwiAirgpM9Zv2MP0rA9Jn8%2BF4Kc8bhSpsqXZC2DHplg6zSV1W%2B9znoUEDCx8MK7Rokkv%2FVKbYj%2BMAGsotVBwPs72W4gWU0EEthydIZbJRgURYqMk9Z84PjBLS32PXo0iOIRa19U3xdkcEJXqoUugEoJ72LwtjAGBAaQj81zk4Z4eSlJVwEllpRW90hUV9YblC2WRREs96Fr5lY1QTWkka9qr6qxf9zA%2B%2BcdwpW9qBI4rUlDq69eJjKJrNYDw0U8gZytey5ZTymMTiWXz2ADwVw5haLu9d6Fsf0GSf2wPym%2B9C3TmQaqy%2FrEhMuEmvN7DRIVZBOstWkdVnXq1k%2BofOhxhR5yb2Eb1jBNQl9dPqQghmnkyGlbHhKsRUGzQB8KQlqxhjGWRvBPQRqlla734q7aJ9ZfFKWgNIRM4Qa88dkcetMgDMft%2FdiQqCROY7WA9BKASApfAwHfpo5Z%2BV34xeguFCdUicJcZlNGBPLcwy32OLI73Q2BWX0HGaSyT61gCWKoEbVRT0Phk26eal10wR5qokZRM%2B5SUN%2FLqjGRT%2FmeQ0OMLPI0ckGOqUB%2FJe2WjQ3ADcWZSKzbFp5xI%2BDJGmLAUopnVi9ee66SgVFIsr0gZHgmP4B9y5IUvx9tZtMis4sUhU7vaiZ3cs3c5Twk5yktExqZeO5FRxIAW9KPK9KO2O%2FOMnIjN7TPIBfzqxD%2BbiYwGwD5Vc9GNmC5P3immqzW39zL4AbXSfOvrLfcXfs8rO4idrB2hTghUN5OpfHOE4tESoKzBTfHc4yHovzgJov&X-Amz-Signature=c38fea7f22996e8753e79a3d3160fc52602adcddbfdbf412a10eb7cb0ec10021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OAE4FSL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAW9%2BX8tLsmisL16uiq2OJ5YgG5pLeLREyrUGEKyY55GAiEAv%2BnqNSsyblt57nBm3ZwzFWFpRZqZs3kKmwSeZxVNGDUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOCjE43fWA4fn3cirCrcA6LZvvg0s0Z%2BiR5NbvxTn8VcUy7yqzZxXXkYWXTJxYMkPNraiI9ysKpnVQzFy7ub%2BRPoAHihtXI0e8kwiAirgpM9Zv2MP0rA9Jn8%2BF4Kc8bhSpsqXZC2DHplg6zSV1W%2B9znoUEDCx8MK7Rokkv%2FVKbYj%2BMAGsotVBwPs72W4gWU0EEthydIZbJRgURYqMk9Z84PjBLS32PXo0iOIRa19U3xdkcEJXqoUugEoJ72LwtjAGBAaQj81zk4Z4eSlJVwEllpRW90hUV9YblC2WRREs96Fr5lY1QTWkka9qr6qxf9zA%2B%2BcdwpW9qBI4rUlDq69eJjKJrNYDw0U8gZytey5ZTymMTiWXz2ADwVw5haLu9d6Fsf0GSf2wPym%2B9C3TmQaqy%2FrEhMuEmvN7DRIVZBOstWkdVnXq1k%2BofOhxhR5yb2Eb1jBNQl9dPqQghmnkyGlbHhKsRUGzQB8KQlqxhjGWRvBPQRqlla734q7aJ9ZfFKWgNIRM4Qa88dkcetMgDMft%2FdiQqCROY7WA9BKASApfAwHfpo5Z%2BV34xeguFCdUicJcZlNGBPLcwy32OLI73Q2BWX0HGaSyT61gCWKoEbVRT0Phk26eal10wR5qokZRM%2B5SUN%2FLqjGRT%2FmeQ0OMLPI0ckGOqUB%2FJe2WjQ3ADcWZSKzbFp5xI%2BDJGmLAUopnVi9ee66SgVFIsr0gZHgmP4B9y5IUvx9tZtMis4sUhU7vaiZ3cs3c5Twk5yktExqZeO5FRxIAW9KPK9KO2O%2FOMnIjN7TPIBfzqxD%2BbiYwGwD5Vc9GNmC5P3immqzW39zL4AbXSfOvrLfcXfs8rO4idrB2hTghUN5OpfHOE4tESoKzBTfHc4yHovzgJov&X-Amz-Signature=b1afcbd3d7fa57cb6529089ac7ca1647ae9056919cbe9695401ed33ad44a5e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

