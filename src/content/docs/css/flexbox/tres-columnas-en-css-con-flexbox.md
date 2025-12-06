---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTL5IWYR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF5aD4lyUj8Ip63ldvBxbjQyT5Rb%2FztvzJMTeYrnl2vgIgf7aarQ6rC8lHCnWVnsYHE9joYfOtMcV0iNoqaUHQ1KMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDH6c%2BmentcbUNC2xeyrcA30jH3Xq0MuHJ7boAGWUjVx8abpRGz0L05Dp%2FJAIHBYZQzSiU1BN10OVERV6xU7FvVuBpoAdtGNK90CQo5Nl%2F5aX%2FqsWAgSTFjyQIjpX460RBWyn1ovJoPp0Enj%2FnwHdeYBtSxFWrZWRAiLqP6tlXIQwRuLyLlhKeegK9Mqy%2B%2FIhCbXAtvBebjEw1bhwJqJWHKE%2FZw2u5xDA1YRU2mT7Mjw21x7wjBPMyurCIhpLsPLW4FDREtvo7V5ldTfNaX8Dn7T82FVcC4rf%2FmDNPbaOfMQpTfx2N0X6yub45zPio0zv5QqPcE4LEjaLlYN5LDqIRMkLrSi6PeatvEjEZoxogU4cQ5%2FZXsvGkrMx1QMlzSpwE6EpAURud44NMidHuFuRNRVPVu7wJS1Voqc%2BzO%2FKOxxWoY55qXswzYVIA4j8CGCqajSTKnF9sHcrcIrdVjIvmTUh%2FaTr%2Bi6MSl2xmuMfPpZraQrTCaBmP8qOuqlBVr2A9p34OrSwGlYvQFbdbj4x89C3LR23MXOgxIx8uEW6uqQomBZoclmrOjtpnFCXDhjxC%2FYQZmT7HINLJE9beEg26f69JylHgmV9crRfXvpjv8UcjtAk42LPmoYE%2BEFtdBMiUSX6HHTa%2BOluvH6gMP%2B8z8kGOqUB3wY6MsDZq6WZnAzX7JEs7OPGQb%2Bgf1RRMqI1nUKnYdlbqaG4id14xcHzghyL%2BAvp5YueNbmmt8b6zpb9wB8hMywTDUg3%2FFmoBCOxHYiPqqAemVKZLi6F4Dl36akTFcrsEFWGvHmg%2F4TCddXwOCYIZQc%2FhhVrmu9CgolpkLtgaqmb2%2FGlhZ64oy4GQFmNGQ5207zHmhlj1bUekvdnLf4c9dh7IW%2B%2F&X-Amz-Signature=a9a57c664bbbc054565ff370202273fe6631550f84dfc43e25c35d2f0c971d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTL5IWYR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF5aD4lyUj8Ip63ldvBxbjQyT5Rb%2FztvzJMTeYrnl2vgIgf7aarQ6rC8lHCnWVnsYHE9joYfOtMcV0iNoqaUHQ1KMq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDH6c%2BmentcbUNC2xeyrcA30jH3Xq0MuHJ7boAGWUjVx8abpRGz0L05Dp%2FJAIHBYZQzSiU1BN10OVERV6xU7FvVuBpoAdtGNK90CQo5Nl%2F5aX%2FqsWAgSTFjyQIjpX460RBWyn1ovJoPp0Enj%2FnwHdeYBtSxFWrZWRAiLqP6tlXIQwRuLyLlhKeegK9Mqy%2B%2FIhCbXAtvBebjEw1bhwJqJWHKE%2FZw2u5xDA1YRU2mT7Mjw21x7wjBPMyurCIhpLsPLW4FDREtvo7V5ldTfNaX8Dn7T82FVcC4rf%2FmDNPbaOfMQpTfx2N0X6yub45zPio0zv5QqPcE4LEjaLlYN5LDqIRMkLrSi6PeatvEjEZoxogU4cQ5%2FZXsvGkrMx1QMlzSpwE6EpAURud44NMidHuFuRNRVPVu7wJS1Voqc%2BzO%2FKOxxWoY55qXswzYVIA4j8CGCqajSTKnF9sHcrcIrdVjIvmTUh%2FaTr%2Bi6MSl2xmuMfPpZraQrTCaBmP8qOuqlBVr2A9p34OrSwGlYvQFbdbj4x89C3LR23MXOgxIx8uEW6uqQomBZoclmrOjtpnFCXDhjxC%2FYQZmT7HINLJE9beEg26f69JylHgmV9crRfXvpjv8UcjtAk42LPmoYE%2BEFtdBMiUSX6HHTa%2BOluvH6gMP%2B8z8kGOqUB3wY6MsDZq6WZnAzX7JEs7OPGQb%2Bgf1RRMqI1nUKnYdlbqaG4id14xcHzghyL%2BAvp5YueNbmmt8b6zpb9wB8hMywTDUg3%2FFmoBCOxHYiPqqAemVKZLi6F4Dl36akTFcrsEFWGvHmg%2F4TCddXwOCYIZQc%2FhhVrmu9CgolpkLtgaqmb2%2FGlhZ64oy4GQFmNGQ5207zHmhlj1bUekvdnLf4c9dh7IW%2B%2F&X-Amz-Signature=21aa83bf5da845af8f299979361249cb01f5f30aacf7d0a81ba973be05e8f58b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

