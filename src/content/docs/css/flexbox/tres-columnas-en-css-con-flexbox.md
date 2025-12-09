---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FK4LUY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUAW0DfaButN9pNlIUfQALtSDbDDlu3f1ZcyIFnEsWMAiEAltkNcZmXGED4A%2BmDhO%2Fm%2BpNfNacWb%2Bqa052sejcr2toqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrmdBeUs%2B3bHoS9uSrcA9ZNqSPVV4mgXB95HD3IadA3BezbQWPqhKgS5wUmBPfh5nQVUAW5ygwCVZHO%2FD3cIV9%2Fz9hR1wp%2F6GBXAj4pC4FjTTJo%2FnetCLKsKxXedfOboo3WDAL3fUNWiFCYdFXEgpOsBDo9eoCva7rTEvqI0whLLBi6YxKSoexkjFZjv7qVdkl6lxp8qvfAuXWbbBH41BhIY2KHYn%2BIWeDSGneH%2BlWoFffb0OHWKa6gkIYj6i5K42wAsQnDt0SddZ1u7fzuLmPm17Plj%2FY8G63PQ%2Fx%2Fuau08DcBYIZMTl%2FTE2lTakuhcGW8lEEixi2mq4VWLPL9naZIsvGCRvrFeOMMqjzMiYpcf1B3tRZyG48lFPFZ%2FnALJFnogpl4ioYx5TvCkmOA6K5jPOIcE35OtriTVJgtioQyJLP11eEl%2FTBb2RJW7tSUTNG0T0ntXFtBgr5yrLLsPDeMCMmoZwf2ofi%2BwcrSlH4IYlk2oJAnRcy9mqoJWkfDA9PumMsuOCqm2ahaI3poabFPHUGz8Cb%2Fjg03uK5QkpAAmv5BsoLTdYPgTg8JBaWJpw9tKMqz878nPW8fJ9eA79tGRmAP6f2M3KqmjJp2qHBfr1uJ1RvGAOMu35Ho1bN%2BZ5X3CgyizqKzNHqWMIXp3ckGOqUB%2FSRZxD%2FNmW7HVIeMUyaD7FoO8HipsIBizzqdblKkDHe710JsyJGEs%2Bp1tawqOAsr%2FORzKs0S4Tqe3BxwRJ2mo05PrB2caRr14jnimUmMTjIn684qEal0ohD%2Bb3ktB0dO0Pcdc6qBgelQ%2Bxam%2FJSER3zt0IGdDypCIEoqRO4XEBk0ZVJJbIVpEEiNNyDW0fYeKg86EhoUPGfnsyN%2FuSNxrGI9Ljvv&X-Amz-Signature=8a4283ae5e4527bedfb959dbf0756f3c777d2463133af64c22a272a960035d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623FK4LUY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUAW0DfaButN9pNlIUfQALtSDbDDlu3f1ZcyIFnEsWMAiEAltkNcZmXGED4A%2BmDhO%2Fm%2BpNfNacWb%2Bqa052sejcr2toqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBrmdBeUs%2B3bHoS9uSrcA9ZNqSPVV4mgXB95HD3IadA3BezbQWPqhKgS5wUmBPfh5nQVUAW5ygwCVZHO%2FD3cIV9%2Fz9hR1wp%2F6GBXAj4pC4FjTTJo%2FnetCLKsKxXedfOboo3WDAL3fUNWiFCYdFXEgpOsBDo9eoCva7rTEvqI0whLLBi6YxKSoexkjFZjv7qVdkl6lxp8qvfAuXWbbBH41BhIY2KHYn%2BIWeDSGneH%2BlWoFffb0OHWKa6gkIYj6i5K42wAsQnDt0SddZ1u7fzuLmPm17Plj%2FY8G63PQ%2Fx%2Fuau08DcBYIZMTl%2FTE2lTakuhcGW8lEEixi2mq4VWLPL9naZIsvGCRvrFeOMMqjzMiYpcf1B3tRZyG48lFPFZ%2FnALJFnogpl4ioYx5TvCkmOA6K5jPOIcE35OtriTVJgtioQyJLP11eEl%2FTBb2RJW7tSUTNG0T0ntXFtBgr5yrLLsPDeMCMmoZwf2ofi%2BwcrSlH4IYlk2oJAnRcy9mqoJWkfDA9PumMsuOCqm2ahaI3poabFPHUGz8Cb%2Fjg03uK5QkpAAmv5BsoLTdYPgTg8JBaWJpw9tKMqz878nPW8fJ9eA79tGRmAP6f2M3KqmjJp2qHBfr1uJ1RvGAOMu35Ho1bN%2BZ5X3CgyizqKzNHqWMIXp3ckGOqUB%2FSRZxD%2FNmW7HVIeMUyaD7FoO8HipsIBizzqdblKkDHe710JsyJGEs%2Bp1tawqOAsr%2FORzKs0S4Tqe3BxwRJ2mo05PrB2caRr14jnimUmMTjIn684qEal0ohD%2Bb3ktB0dO0Pcdc6qBgelQ%2Bxam%2FJSER3zt0IGdDypCIEoqRO4XEBk0ZVJJbIVpEEiNNyDW0fYeKg86EhoUPGfnsyN%2FuSNxrGI9Ljvv&X-Amz-Signature=04bf03101e22c17901e2b005b3a3ed9422ab8203c2100c6638ccc624d3a59d8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

