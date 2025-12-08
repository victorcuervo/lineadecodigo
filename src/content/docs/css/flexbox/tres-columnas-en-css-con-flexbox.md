---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNYN4LUG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrlBUCwYeJHh%2BZYVq7FRB63sfJxSClr8DPmIHlOKfNiAIhAMBgB2zlXuCPJtN%2ByUFs8pq2AE25qc2fwtJzKucCo%2FcRKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzODljZQ86YDYj35H4q3AOwbI9ND4Y46XOFUJP0ocOdsYynkJNgBjrJIp9JC7O9reFEHCy%2BDAdaVSozK0MpFGKBC8JvVrlNH%2BRhWefLwW6PQ1dmVmH3zeHjjIrZ5z5ozBwCkDge24jlmwHZ3R2kvvQza%2BKFjlTFx7%2FHEhUlUK4uUsKzjrgvuhBFJ%2FTYOoTUUkO9eH7fb0oGoYyN0hrO4laVRKD3TCy6fqhDt1nqEB8JJmmv0qgFUEJKMxIC9j6v4BNTcUiH6Z5QWWrtv49piKy8gWCqaZJ0WQQ%2FFSsBdherSihTHxJBsfjVr975dC5CZa41MCQSYcSoxXC7vWC33%2BbK4CV3QAkAyMVETnzFHt87457%2F2bQcxGxJgEqTIuXWTOHagBQbxAP0J5tp8QZeAEZzgE6zFa%2FNtyXHaqcUOeGsoxx78xlEgXKF7DgVMG9VGLjybiR%2FPi4%2F9nIwieYIgI0uhMnKGyRRfmo1WIPX84Sr%2BMu0HxXqjd3FmfVcdaxhcCJLq5Rzo0nGeLrMMI%2BkxalweDX5CPsS04isD9%2F0t8cxar9GgnLLRlJ9mNy529VZTNSSyA5JEcoG7YwsHx0UuvfkICVlHHepuwQDhshDx%2FvzC8cmaulMOq7I%2Bcxv7%2BKkiGqmXsVN0nrMnUU5ujCfh9zJBjqkAeP0SGxoJu1PUmokUdHZ%2F8t%2Bk4F39sCOkZcy2lUExUSFNYliojgJR5kYpWZ3R4aGnV68T8w5EYrHn70LIDfJbQ9PCKoBrQSUasHt23Hp4MHsbbhSUEBUMefdOMzofRLcYSpvMrOCUzrQZCjtU10WFhukr%2Fo1FylqvD3nXXxxKgZXFc6LB%2Bs4Zqeo0PSNyKf6KyhcPQEq%2FUOnX3i7xTmfeQnkAT7c&X-Amz-Signature=3198123d37c1b993cc6d38c2c01f0c0d15ee3adedce147538af11e8a564d2052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNYN4LUG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrlBUCwYeJHh%2BZYVq7FRB63sfJxSClr8DPmIHlOKfNiAIhAMBgB2zlXuCPJtN%2ByUFs8pq2AE25qc2fwtJzKucCo%2FcRKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzODljZQ86YDYj35H4q3AOwbI9ND4Y46XOFUJP0ocOdsYynkJNgBjrJIp9JC7O9reFEHCy%2BDAdaVSozK0MpFGKBC8JvVrlNH%2BRhWefLwW6PQ1dmVmH3zeHjjIrZ5z5ozBwCkDge24jlmwHZ3R2kvvQza%2BKFjlTFx7%2FHEhUlUK4uUsKzjrgvuhBFJ%2FTYOoTUUkO9eH7fb0oGoYyN0hrO4laVRKD3TCy6fqhDt1nqEB8JJmmv0qgFUEJKMxIC9j6v4BNTcUiH6Z5QWWrtv49piKy8gWCqaZJ0WQQ%2FFSsBdherSihTHxJBsfjVr975dC5CZa41MCQSYcSoxXC7vWC33%2BbK4CV3QAkAyMVETnzFHt87457%2F2bQcxGxJgEqTIuXWTOHagBQbxAP0J5tp8QZeAEZzgE6zFa%2FNtyXHaqcUOeGsoxx78xlEgXKF7DgVMG9VGLjybiR%2FPi4%2F9nIwieYIgI0uhMnKGyRRfmo1WIPX84Sr%2BMu0HxXqjd3FmfVcdaxhcCJLq5Rzo0nGeLrMMI%2BkxalweDX5CPsS04isD9%2F0t8cxar9GgnLLRlJ9mNy529VZTNSSyA5JEcoG7YwsHx0UuvfkICVlHHepuwQDhshDx%2FvzC8cmaulMOq7I%2Bcxv7%2BKkiGqmXsVN0nrMnUU5ujCfh9zJBjqkAeP0SGxoJu1PUmokUdHZ%2F8t%2Bk4F39sCOkZcy2lUExUSFNYliojgJR5kYpWZ3R4aGnV68T8w5EYrHn70LIDfJbQ9PCKoBrQSUasHt23Hp4MHsbbhSUEBUMefdOMzofRLcYSpvMrOCUzrQZCjtU10WFhukr%2Fo1FylqvD3nXXxxKgZXFc6LB%2Bs4Zqeo0PSNyKf6KyhcPQEq%2FUOnX3i7xTmfeQnkAT7c&X-Amz-Signature=7f563e275b968d8c8f5e4ed494357ea11974c9b02dbde7f02ff723b6abce30b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

