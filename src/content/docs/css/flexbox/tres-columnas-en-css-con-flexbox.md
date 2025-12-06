---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDVXFTOF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUZ60eNBGpmHkc%2FoeeNB9VYKtmzdCoqh9Fv2dUC0hqKAIhAI8sHzTYOyTvV41g5GZ0XMoyFAlM6hx7V%2B6Yq2K0zzLUKv8DCHoQABoMNjM3NDIzMTgzODA1IgyjfTA8HgtcSK0eqNkq3AN78OQmErRYcXD1PWLkXckE4XRYY%2Bjhy9I5Ubu1WyitFxpJZo20AzJ%2BJKlVkbwgJ0ZfVL07tp0Fmr2AtrinuVeeHWWA3lX0WpWq6mP4K0zpovQzKajzu%2B0YTVVTmD90eZ4%2BWgWES5UVNSym7S7F7t4uigia3ndiZ5jQGlYUSTqbIfPaEA5Z%2F2A4jHKtaa4PmhNlbr3gkewO9%2FToTTLOiIzu7rE6Vo3N0tBWK3QRMFB0vlfQw79WKvUfXxUQPnxPlr2ca9aStKlcC4WL%2BotPLoAfbMnicsA8yATq1IbpKulffZtH%2BQt5WghjsydjLjg%2Bmxoude9uxtRrmFw6VRU1y%2BWHnddKXQ8KBgMD6O78%2FSm90OrON2xfjKgxYXdl5GctJigtPgi1naHeeEbKLIabWD4U1Jxl9No%2BNAmahJIoU0hfhTxsEdxUhBUhJ6agYznR1FHB0exllc4LorS39MVuY2rilYTbI4u12ZxNMqNIbXVa22B6hV8cD7wFlXqFrpHTlFQBilwNTIetVTGHTwQqtXOsS%2FawSTv2yaLzQcEl49pysikld%2BIz1%2FAxqsRo5Pw%2BhEm%2BeKFWgexxMvjfO0nbQuRBs%2B%2B7WtEhlUqiWhmvS3GsuZkudTJBxqcuMy3YNDCWyNHJBjqkAaC5zmyQ4TOWBv0j%2FILxAUoS6KfhDE9IootN3NL2q%2FjDqr8ycam9S0AZvcfm0oAUG1QgWzEM3ehSQ6MOayYuNFG8nbEoOhJbe0hx5LXzz8QBbpeo1CuymUdxdaGvkH4%2FDkIu14aPvIjfVw7%2BlTlNN1dYcFj%2BXY48K%2Fl5ohSf9Qmxiia5MLCt9Apo%2Fm6ylEKT4tYFNp%2BMInSx8INnne1Pp0GZBWVt&X-Amz-Signature=ed5eed7b6b7014e080e6338022ba338b82b9b431f1aaf44353a21fd80e4c3eac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDVXFTOF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUZ60eNBGpmHkc%2FoeeNB9VYKtmzdCoqh9Fv2dUC0hqKAIhAI8sHzTYOyTvV41g5GZ0XMoyFAlM6hx7V%2B6Yq2K0zzLUKv8DCHoQABoMNjM3NDIzMTgzODA1IgyjfTA8HgtcSK0eqNkq3AN78OQmErRYcXD1PWLkXckE4XRYY%2Bjhy9I5Ubu1WyitFxpJZo20AzJ%2BJKlVkbwgJ0ZfVL07tp0Fmr2AtrinuVeeHWWA3lX0WpWq6mP4K0zpovQzKajzu%2B0YTVVTmD90eZ4%2BWgWES5UVNSym7S7F7t4uigia3ndiZ5jQGlYUSTqbIfPaEA5Z%2F2A4jHKtaa4PmhNlbr3gkewO9%2FToTTLOiIzu7rE6Vo3N0tBWK3QRMFB0vlfQw79WKvUfXxUQPnxPlr2ca9aStKlcC4WL%2BotPLoAfbMnicsA8yATq1IbpKulffZtH%2BQt5WghjsydjLjg%2Bmxoude9uxtRrmFw6VRU1y%2BWHnddKXQ8KBgMD6O78%2FSm90OrON2xfjKgxYXdl5GctJigtPgi1naHeeEbKLIabWD4U1Jxl9No%2BNAmahJIoU0hfhTxsEdxUhBUhJ6agYznR1FHB0exllc4LorS39MVuY2rilYTbI4u12ZxNMqNIbXVa22B6hV8cD7wFlXqFrpHTlFQBilwNTIetVTGHTwQqtXOsS%2FawSTv2yaLzQcEl49pysikld%2BIz1%2FAxqsRo5Pw%2BhEm%2BeKFWgexxMvjfO0nbQuRBs%2B%2B7WtEhlUqiWhmvS3GsuZkudTJBxqcuMy3YNDCWyNHJBjqkAaC5zmyQ4TOWBv0j%2FILxAUoS6KfhDE9IootN3NL2q%2FjDqr8ycam9S0AZvcfm0oAUG1QgWzEM3ehSQ6MOayYuNFG8nbEoOhJbe0hx5LXzz8QBbpeo1CuymUdxdaGvkH4%2FDkIu14aPvIjfVw7%2BlTlNN1dYcFj%2BXY48K%2Fl5ohSf9Qmxiia5MLCt9Apo%2Fm6ylEKT4tYFNp%2BMInSx8INnne1Pp0GZBWVt&X-Amz-Signature=9f58cdbf87200f51b22bb781121a917455842a4eb07864de42df8d487be647d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

