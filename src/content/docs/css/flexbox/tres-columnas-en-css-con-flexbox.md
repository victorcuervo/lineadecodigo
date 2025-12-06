---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUHDKQMW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVg5ygslEIkWKE9wakmUdr%2B%2FLVOKjgkLD1wkTKfJdVigIhAJ6lp1Zw5bxwRElmBDBw1ZUzc5sw4Y7daWEaNqHaz4btKv8DCHoQABoMNjM3NDIzMTgzODA1IgxIrDaGYkqwi1jAW%2BAq3ANhn5oBWeH5R%2FFqRdRQF5Cigbs3dofrJg6%2B7dNMUDb8NUhorTktDwUeos8kxe0681FAi9VVUV6rbRyRBwJQ7tcjiayarNknKkgf1mNjL1fYyWzpl%2BqDo207F1A1lpLWkPfnTUAGe%2FBKYZmpSGb1eSdYfJvL8TM%2B6WbDwGTa6k9ER9tCElQ2xNp0Unz59wsfVEqgYtQWmM3QoYJn7oF8uOnwlbAV89t5qcvUXYpoRbeBVaiH99ZWNNt76Ki0fPaKxAUR55LQbH8oyVQQvu530wcyQ6VdovjL6U3YJfpdowOSmuGP0PIW9WiUecKFfxVboUe7I%2Fz3Q0%2FLaJlIvSoNy7WDIWrnJaF2legQaBZf1g%2BWlIJWOpdTH9l0uIRLHEebx80lBFcqN7CntFr0h5qpQ9TqXqcULiLtKanRzWMqWzmSjSGuQfDuyLO14vdZYBnnZz8ruAZcfhQGDafe7MQpK4vHFt88a5OQDLnWTeHq7DbCOkCHX8d81Vn4RCU1qhH4%2BELmOvxSo5hKhuufOuFxkbxOMY3oviZfmoPJBxos2uwDv64kvrsUf648rfp92TOzPoVfJAJze0xygRgpHq4tFbPB6mmyyDeH8Ne8OA3Q6DSdbnx4kEszsj1h4xthazDEzNHJBjqkAUefb9z%2BF630zg76l6%2Ba0Q7bpVmJo0t0NilFFd%2FvyfCY8Rppzwa12LsdoCgqoqx3fEX9bYMdbg4qR3Y5XbipmL44efhvoImzIl9vQldh4AJAI%2BKvF0OWliLISCYvSx9udO5Oxy%2B5Fk%2FmQM2fH4KOsZ%2B4W8EaLlHPEcj42Ij0H4LVnmZBEo%2BpNZ7tERoIOqfQqJoFujSPPemz%2Bjq2cyam2U3Xz8x0&X-Amz-Signature=dd24dfd0d3418d54c37b3b90f153ae8c00043f2be70babb25d27321e44f24c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUHDKQMW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVg5ygslEIkWKE9wakmUdr%2B%2FLVOKjgkLD1wkTKfJdVigIhAJ6lp1Zw5bxwRElmBDBw1ZUzc5sw4Y7daWEaNqHaz4btKv8DCHoQABoMNjM3NDIzMTgzODA1IgxIrDaGYkqwi1jAW%2BAq3ANhn5oBWeH5R%2FFqRdRQF5Cigbs3dofrJg6%2B7dNMUDb8NUhorTktDwUeos8kxe0681FAi9VVUV6rbRyRBwJQ7tcjiayarNknKkgf1mNjL1fYyWzpl%2BqDo207F1A1lpLWkPfnTUAGe%2FBKYZmpSGb1eSdYfJvL8TM%2B6WbDwGTa6k9ER9tCElQ2xNp0Unz59wsfVEqgYtQWmM3QoYJn7oF8uOnwlbAV89t5qcvUXYpoRbeBVaiH99ZWNNt76Ki0fPaKxAUR55LQbH8oyVQQvu530wcyQ6VdovjL6U3YJfpdowOSmuGP0PIW9WiUecKFfxVboUe7I%2Fz3Q0%2FLaJlIvSoNy7WDIWrnJaF2legQaBZf1g%2BWlIJWOpdTH9l0uIRLHEebx80lBFcqN7CntFr0h5qpQ9TqXqcULiLtKanRzWMqWzmSjSGuQfDuyLO14vdZYBnnZz8ruAZcfhQGDafe7MQpK4vHFt88a5OQDLnWTeHq7DbCOkCHX8d81Vn4RCU1qhH4%2BELmOvxSo5hKhuufOuFxkbxOMY3oviZfmoPJBxos2uwDv64kvrsUf648rfp92TOzPoVfJAJze0xygRgpHq4tFbPB6mmyyDeH8Ne8OA3Q6DSdbnx4kEszsj1h4xthazDEzNHJBjqkAUefb9z%2BF630zg76l6%2Ba0Q7bpVmJo0t0NilFFd%2FvyfCY8Rppzwa12LsdoCgqoqx3fEX9bYMdbg4qR3Y5XbipmL44efhvoImzIl9vQldh4AJAI%2BKvF0OWliLISCYvSx9udO5Oxy%2B5Fk%2FmQM2fH4KOsZ%2B4W8EaLlHPEcj42Ij0H4LVnmZBEo%2BpNZ7tERoIOqfQqJoFujSPPemz%2Bjq2cyam2U3Xz8x0&X-Amz-Signature=4edda183ff7a258605c530f7aca502ae8c6bc48cf089871be2120ae13ce6cdfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

