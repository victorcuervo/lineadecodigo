---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YITILWP4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIOX0bGmUnbInDJrT3kpJ45vOJGYRNSKu5eS30FdbZjwIhAIGbvb7f%2B7rnWSgck2X0vf5rwB0zU9DwFYMcis0VYwJiKv8DCE8QABoMNjM3NDIzMTgzODA1IgzlvZWYZDnCIGr8RIYq3APlkis8kw%2FZxQ6HX0BF%2BVU9JIr5tlyfnUti7SrHdJlelH%2FxN6VrbhJhVVq%2Bwb8lOHIGK%2Bk2jtt%2BtR%2F1D30ZZ4GFCB4Mp6d%2FzLFEY1eXBsG8V5IaeKyq%2B%2BPIu%2FNEwQ54Yxs9HTCSrRKNNAftMzVu0%2FffelEL4deZgLtI9FQN62rw%2F%2BUDh2417uKrsG28vIIZw9bQaCcnTdOmSPR1eW0sc3sT2GYg7EQ05ZCD3RJpxUZ9tpedRScDF98I2V4UaEvPFva2mDsNqgLKTZUpFRWEtjnomkITLRYDwukiGQkerghEVh5SomapMoHMdsB07UCx4wtVlyPEu%2BFqmEV50rDhpPJbNUcmb5JtqKW54ByZN%2BamfinNZEUp%2Bb3q6tgYGR4FiLJ09QBg%2BiQRR%2FbNgWGHWy2sUr5rZOL1%2B9yt3C2BKiYqODwB9W8M9cC0zbdDrLaGEzgsJfQ8znjBrgbhXsVcH%2F1p7uih%2BPi1hX6B6e1vpE8f7ndOz7Zs9ATX2VyLGb0cOAexmphcC6L7H1Bv%2F4SeTxx5Xs1%2B%2BDE%2FM4GMpbw1Pk3lanNHi%2BJUxTOzuta4E7jE1ymjO6SlqTS3e51HEFpEafjnGdz3fUB4nOmZ0XVgPNpB%2BLbsSTZOKP4ULnyHoDCMjMjJBjqkARruFqEiXGJ%2BglTRgvqNpL%2FO9OMusFljrRKSlACFuJORgHY9v7MWScZy4LaqLPOiT9KRfgB06zxs0qH0rLls1g6ytrHU6yIVmZEhAEh2HHtxFajZ29d6z5hbmyR5F0PB3FXLNZKWV1hytrkak41Rr7ios7QEAbOmiY1t3lEnmKdBhTm%2Fb2TRsBc9wu1e1xOSYaa6TIFg%2Fi2261%2BssO2o3Lr5H7R4&X-Amz-Signature=ec54a41e8ee06666c4839c8133fd4728e8012e41982d403b4b677f0a06dd1d19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YITILWP4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDIOX0bGmUnbInDJrT3kpJ45vOJGYRNSKu5eS30FdbZjwIhAIGbvb7f%2B7rnWSgck2X0vf5rwB0zU9DwFYMcis0VYwJiKv8DCE8QABoMNjM3NDIzMTgzODA1IgzlvZWYZDnCIGr8RIYq3APlkis8kw%2FZxQ6HX0BF%2BVU9JIr5tlyfnUti7SrHdJlelH%2FxN6VrbhJhVVq%2Bwb8lOHIGK%2Bk2jtt%2BtR%2F1D30ZZ4GFCB4Mp6d%2FzLFEY1eXBsG8V5IaeKyq%2B%2BPIu%2FNEwQ54Yxs9HTCSrRKNNAftMzVu0%2FffelEL4deZgLtI9FQN62rw%2F%2BUDh2417uKrsG28vIIZw9bQaCcnTdOmSPR1eW0sc3sT2GYg7EQ05ZCD3RJpxUZ9tpedRScDF98I2V4UaEvPFva2mDsNqgLKTZUpFRWEtjnomkITLRYDwukiGQkerghEVh5SomapMoHMdsB07UCx4wtVlyPEu%2BFqmEV50rDhpPJbNUcmb5JtqKW54ByZN%2BamfinNZEUp%2Bb3q6tgYGR4FiLJ09QBg%2BiQRR%2FbNgWGHWy2sUr5rZOL1%2B9yt3C2BKiYqODwB9W8M9cC0zbdDrLaGEzgsJfQ8znjBrgbhXsVcH%2F1p7uih%2BPi1hX6B6e1vpE8f7ndOz7Zs9ATX2VyLGb0cOAexmphcC6L7H1Bv%2F4SeTxx5Xs1%2B%2BDE%2FM4GMpbw1Pk3lanNHi%2BJUxTOzuta4E7jE1ymjO6SlqTS3e51HEFpEafjnGdz3fUB4nOmZ0XVgPNpB%2BLbsSTZOKP4ULnyHoDCMjMjJBjqkARruFqEiXGJ%2BglTRgvqNpL%2FO9OMusFljrRKSlACFuJORgHY9v7MWScZy4LaqLPOiT9KRfgB06zxs0qH0rLls1g6ytrHU6yIVmZEhAEh2HHtxFajZ29d6z5hbmyR5F0PB3FXLNZKWV1hytrkak41Rr7ios7QEAbOmiY1t3lEnmKdBhTm%2Fb2TRsBc9wu1e1xOSYaa6TIFg%2Fi2261%2BssO2o3Lr5H7R4&X-Amz-Signature=a103f1ad4f6d0084a901741c038593be16275d863a5573178bf75bb49f8bf718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

