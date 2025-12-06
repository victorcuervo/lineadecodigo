---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JWAJVK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYh9954wqhYSyuyquLtrKZs03YHV1usr7wRR3tXnKGZQIgZ7zcE3eg%2Bk%2F8eFr4J4gTo8aKBgYLqgt1SC7N35OhFKwq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDI8K9fzs1plrreTYHSrcA5UC3StUrfkeUvm4m%2FXtr1ZiEKJEisTFCSIV4LM0Weq8p6awsy3dVw%2BN6xolcQyd5DrtVP0y2UZoXAgug8pLdPirVAfB43gr30IKgl8PGggnq4GO9h6ST9Zu5MkL9hlGhg74uyOize6FOlL7dX0ht96RtzO4AOyYmQ%2FJIb%2B51zHgFLhEUjEu4S4w0eRk5Bv48fvQ9AoDCYIEewoIKd%2BsHZ3mwlsYhYfrDcDok9Iz7Ouys%2FcoP9nxmNa%2FN9X0VnebqsLu9s4fV%2FaMf1Buts1XekVIxR39V18g3nSwh8mkrvByO8E%2BUNFgrUAhvBwKZzj8r1cjcNA5oXTp%2B0NIuIUKwTh9p3rTWeP9SNZR2kndKfvar5L1tVeXcO9Ytf504ph0CzSe8PIUoJMk01JyU6Arvrc44M8FNuGZjHx1AtlnfXL9Kq5rqsggD6%2F1CoTgevlU%2BAk4J7p9ty1f%2BKXGxc8gnQSN9H4wF1GVv2tfwaT6dWXzr1U6seJkN%2FgFk%2FXjzMB%2Fd9UHuR4CktsOWx%2BFSjn%2B%2F1YSg6WVDtw9mE00J9PgSU%2FU22ulvaRWA639wZ9j9RJ2mOwEEeCuB%2Fd4cwXOpqyuF5CGIXVd9HncE2RzaRbIlqjc5qZnQ1zWBBFINHs%2BMNX8zskGOqUBTgBtD8AFtnoXd7XNEem7sEFTt3GmZhla1V%2BHH7l0jxwcgkJW3dU0J8Z648mj3q2lfMmzfg0%2BWT4uVasit4cGdRLtIB6i3iA5l6hGTDLRCso3LgPhJYOsZ0PRq5PrSPeb8o%2BH0Nx228TeclHyq1nCTVT1F0zBqDAMBWoj9ozH7p4Sg6uhwar%2FXS1Og%2FeHqHY3y7iIH7wG9DhtC67MwTVBZOKmvwOk&X-Amz-Signature=d5252898b497bfd62a353eb7752a39c6a56011b9100edaf593293d7c6b69b744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675JWAJVK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYh9954wqhYSyuyquLtrKZs03YHV1usr7wRR3tXnKGZQIgZ7zcE3eg%2Bk%2F8eFr4J4gTo8aKBgYLqgt1SC7N35OhFKwq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDI8K9fzs1plrreTYHSrcA5UC3StUrfkeUvm4m%2FXtr1ZiEKJEisTFCSIV4LM0Weq8p6awsy3dVw%2BN6xolcQyd5DrtVP0y2UZoXAgug8pLdPirVAfB43gr30IKgl8PGggnq4GO9h6ST9Zu5MkL9hlGhg74uyOize6FOlL7dX0ht96RtzO4AOyYmQ%2FJIb%2B51zHgFLhEUjEu4S4w0eRk5Bv48fvQ9AoDCYIEewoIKd%2BsHZ3mwlsYhYfrDcDok9Iz7Ouys%2FcoP9nxmNa%2FN9X0VnebqsLu9s4fV%2FaMf1Buts1XekVIxR39V18g3nSwh8mkrvByO8E%2BUNFgrUAhvBwKZzj8r1cjcNA5oXTp%2B0NIuIUKwTh9p3rTWeP9SNZR2kndKfvar5L1tVeXcO9Ytf504ph0CzSe8PIUoJMk01JyU6Arvrc44M8FNuGZjHx1AtlnfXL9Kq5rqsggD6%2F1CoTgevlU%2BAk4J7p9ty1f%2BKXGxc8gnQSN9H4wF1GVv2tfwaT6dWXzr1U6seJkN%2FgFk%2FXjzMB%2Fd9UHuR4CktsOWx%2BFSjn%2B%2F1YSg6WVDtw9mE00J9PgSU%2FU22ulvaRWA639wZ9j9RJ2mOwEEeCuB%2Fd4cwXOpqyuF5CGIXVd9HncE2RzaRbIlqjc5qZnQ1zWBBFINHs%2BMNX8zskGOqUBTgBtD8AFtnoXd7XNEem7sEFTt3GmZhla1V%2BHH7l0jxwcgkJW3dU0J8Z648mj3q2lfMmzfg0%2BWT4uVasit4cGdRLtIB6i3iA5l6hGTDLRCso3LgPhJYOsZ0PRq5PrSPeb8o%2BH0Nx228TeclHyq1nCTVT1F0zBqDAMBWoj9ozH7p4Sg6uhwar%2FXS1Og%2FeHqHY3y7iIH7wG9DhtC67MwTVBZOKmvwOk&X-Amz-Signature=12383237bb55840304a4a6f22c14d8894596c3917c464a6c96252edb270c62be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

