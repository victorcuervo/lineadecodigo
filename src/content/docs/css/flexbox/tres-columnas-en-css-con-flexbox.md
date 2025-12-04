---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THB22GDZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCcKU%2F6zc5ZY%2BR80aVhFr0vJlaY6fbZdKumV3jSpNCT1AIhAOOwvj1FmLaKK41Z4CnGpGdUQ0pP8tEJOEzTBLZqVifNKv8DCEYQABoMNjM3NDIzMTgzODA1IgwiiwMykPFQSaD6LQYq3AO5dcjC9yPZ5y2Jsl1KIlcpnb6PH5BubdOnDzkypIcZv%2FEo%2Fir6HiYj0XDfwNFPpyaIRItKMxxPgSUCWjky2UU2Ag%2FisFGEZto1KLseCsQSsvLHHLmtF83FgVa%2BOEzsto9cG1o%2BQ7LncepYzfWUiWCfOB%2B9TcMTYzLSCyDa52P0YCL516QDBGqsB9Kq9dC49IoCidfdqMWVJqI2j8Xzj1ojojtlU1asako5bR1qisFbRLglXxG26rST5iBziVpVYWqfzv1WMYoLQLaLoUSwKK5K2t4mgz1Lik5EAWnFuJQ2b7RNHtD3%2BdSpWdaojHML0XMqi2DRdAkLwLrhEKgGwuhViDISrKR0qZGoY9gHxcf679U%2BPZqjixMF5UB2ddnwl67pRvoCBevXvW%2F%2FWVeM13Xq%2BUGrhWg7XTZVh%2FAnYJnUlSpd%2FqgIuU8Kw7oSB7w60LgeFKL7u9O10ebs%2FWiTyK20VvcDV494V2Kkbtzt0ADv9K482ju3tVcoYl4L9t5xD6mxsDvdU72ni9FsESUAPy2S0aBiUqHCub%2BvlK5B7BB2KiApih5eIr8lAwoITTMZ%2BgCrEPcHLQX1Fb7R6e0n8lx8VX8lXjR3582zLrRs0%2BQUcThULgttDdR64fFMrTC3g8bJBjqkAYxT1SYBYgHrqCOqA%2B20kUZaV9lDTj%2FimRXMwz%2BMzSvH6E9Rgve1ijIhIw6UJD1fZe8xkSQknwPtQ4Cyb5JUN4ss5b81%2Ff6KzWhOYqa2HLGJLOYDjbZwxghWWxXANMKw9Tl6wC7fLjXRW3UMsp19ksp5LBCH0M3vwPbmjbMDpLcFejVNdw%2BSBF7KrfT1G15WwlbjO4ss6%2BDUaR9SJTqUDjUsSCl1&X-Amz-Signature=4f43761e0bf33d66eed15cbdfa5387895f0a69f9d4be4436dde0d5076a250fb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THB22GDZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCcKU%2F6zc5ZY%2BR80aVhFr0vJlaY6fbZdKumV3jSpNCT1AIhAOOwvj1FmLaKK41Z4CnGpGdUQ0pP8tEJOEzTBLZqVifNKv8DCEYQABoMNjM3NDIzMTgzODA1IgwiiwMykPFQSaD6LQYq3AO5dcjC9yPZ5y2Jsl1KIlcpnb6PH5BubdOnDzkypIcZv%2FEo%2Fir6HiYj0XDfwNFPpyaIRItKMxxPgSUCWjky2UU2Ag%2FisFGEZto1KLseCsQSsvLHHLmtF83FgVa%2BOEzsto9cG1o%2BQ7LncepYzfWUiWCfOB%2B9TcMTYzLSCyDa52P0YCL516QDBGqsB9Kq9dC49IoCidfdqMWVJqI2j8Xzj1ojojtlU1asako5bR1qisFbRLglXxG26rST5iBziVpVYWqfzv1WMYoLQLaLoUSwKK5K2t4mgz1Lik5EAWnFuJQ2b7RNHtD3%2BdSpWdaojHML0XMqi2DRdAkLwLrhEKgGwuhViDISrKR0qZGoY9gHxcf679U%2BPZqjixMF5UB2ddnwl67pRvoCBevXvW%2F%2FWVeM13Xq%2BUGrhWg7XTZVh%2FAnYJnUlSpd%2FqgIuU8Kw7oSB7w60LgeFKL7u9O10ebs%2FWiTyK20VvcDV494V2Kkbtzt0ADv9K482ju3tVcoYl4L9t5xD6mxsDvdU72ni9FsESUAPy2S0aBiUqHCub%2BvlK5B7BB2KiApih5eIr8lAwoITTMZ%2BgCrEPcHLQX1Fb7R6e0n8lx8VX8lXjR3582zLrRs0%2BQUcThULgttDdR64fFMrTC3g8bJBjqkAYxT1SYBYgHrqCOqA%2B20kUZaV9lDTj%2FimRXMwz%2BMzSvH6E9Rgve1ijIhIw6UJD1fZe8xkSQknwPtQ4Cyb5JUN4ss5b81%2Ff6KzWhOYqa2HLGJLOYDjbZwxghWWxXANMKw9Tl6wC7fLjXRW3UMsp19ksp5LBCH0M3vwPbmjbMDpLcFejVNdw%2BSBF7KrfT1G15WwlbjO4ss6%2BDUaR9SJTqUDjUsSCl1&X-Amz-Signature=d8bd1139175a5a2272081452642cdb7e6fba2313a75ac9313bb9fef139a311fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

