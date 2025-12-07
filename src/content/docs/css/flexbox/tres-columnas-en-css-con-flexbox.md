---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMBYDVQJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxAZE89iLUCAw%2BD1AmCUwN2PWy%2BztmQ%2B0G85k%2B6%2FoS7wIgVrY1qh9453bSylKmLGniy8fsYnYYlONOnulIAaJQ2wsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArzwp%2B02hbq9GiDhyrcA3SNrhWrcwgXmUZYktSJW5I4Krb89OaW%2FAISbh1gvHZuHPJ4FukGhrNoK%2FAPnW8PZd0ARdJKQUh7SYTcGSISxF6gEgfBIN5DBEvdNmVUmGUrtNb9eBvkZjCiSyHj8YOyrePoKVMKjjhAiilk8SxUPgwBY%2FcG6%2FOVLqONZK0s7XIinpDlrg%2BFatxmyuym0P1XvyhhJSb2uGcC2xtJbDjGJnAidDTURVA4Qyq7LgXFpHijWIw%2BikJdhLm02H%2FVbh1zG8lM1E5qveryx8YqCx1Yc6rvpT5sQTYJAg2vxJAs57MVr7MM1gaaihgb48cE1eHmTfPmOTg9nALFEbm99kazFpMnzosiDgNPRz6MrQHvNs9UfM7qprRuUUPx6XUn9iema3Fyc2agJzJC5hypxfIel8y2tWAbzlm1csFMfacjf3x3j7F7DGi6ehg%2BPdZv9vcRDaMWCaMGpl4ah5cvT8Z%2B%2FKRuHzI7onkjcNilddB%2BqgN1X%2B%2F99C1ykj7Id7gxgU5ADBiQV9GxiGwN6HZ6cRmgG0p%2FplO5aN9b5gRtD6Fnis0CbnwslubbDMec%2BQTae5ka8jAsb4vSrsx7PR2%2BmMu67XPlzvoxy1gx%2BOxzkTC3UoHye7rfW9PDUm9%2BqT1PMOS%2B1skGOqUBj5NJucdgCgZwY79U5P4LTmnJOuHFx0gxK22pMErdnc1uRM%2Bohm%2FfR7Kx%2F0idbCTx4gEjDnqbGHdBrvTUglgtDKwRcD%2BvLTrD0ZcOhSgDpOYuym4kzlvB17azFfsIim1F2v0YTSTL%2F6IPuZ6R6Fe82sdzac1HUQ4avyrAlhqYoVL8nLhWtPbqEvcCX7pBaHhLplrGtZzH8DrlWAxX8VSaWc%2BwELzu&X-Amz-Signature=4aa177dbd058089007f98a946dc1612929523d0948607370d6745b4f60c1cba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMBYDVQJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxAZE89iLUCAw%2BD1AmCUwN2PWy%2BztmQ%2B0G85k%2B6%2FoS7wIgVrY1qh9453bSylKmLGniy8fsYnYYlONOnulIAaJQ2wsqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArzwp%2B02hbq9GiDhyrcA3SNrhWrcwgXmUZYktSJW5I4Krb89OaW%2FAISbh1gvHZuHPJ4FukGhrNoK%2FAPnW8PZd0ARdJKQUh7SYTcGSISxF6gEgfBIN5DBEvdNmVUmGUrtNb9eBvkZjCiSyHj8YOyrePoKVMKjjhAiilk8SxUPgwBY%2FcG6%2FOVLqONZK0s7XIinpDlrg%2BFatxmyuym0P1XvyhhJSb2uGcC2xtJbDjGJnAidDTURVA4Qyq7LgXFpHijWIw%2BikJdhLm02H%2FVbh1zG8lM1E5qveryx8YqCx1Yc6rvpT5sQTYJAg2vxJAs57MVr7MM1gaaihgb48cE1eHmTfPmOTg9nALFEbm99kazFpMnzosiDgNPRz6MrQHvNs9UfM7qprRuUUPx6XUn9iema3Fyc2agJzJC5hypxfIel8y2tWAbzlm1csFMfacjf3x3j7F7DGi6ehg%2BPdZv9vcRDaMWCaMGpl4ah5cvT8Z%2B%2FKRuHzI7onkjcNilddB%2BqgN1X%2B%2F99C1ykj7Id7gxgU5ADBiQV9GxiGwN6HZ6cRmgG0p%2FplO5aN9b5gRtD6Fnis0CbnwslubbDMec%2BQTae5ka8jAsb4vSrsx7PR2%2BmMu67XPlzvoxy1gx%2BOxzkTC3UoHye7rfW9PDUm9%2BqT1PMOS%2B1skGOqUBj5NJucdgCgZwY79U5P4LTmnJOuHFx0gxK22pMErdnc1uRM%2Bohm%2FfR7Kx%2F0idbCTx4gEjDnqbGHdBrvTUglgtDKwRcD%2BvLTrD0ZcOhSgDpOYuym4kzlvB17azFfsIim1F2v0YTSTL%2F6IPuZ6R6Fe82sdzac1HUQ4avyrAlhqYoVL8nLhWtPbqEvcCX7pBaHhLplrGtZzH8DrlWAxX8VSaWc%2BwELzu&X-Amz-Signature=a694557115ef3d650b7088b1fcea5e14a08076fae390bd57d9e90f7da0b5a658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

