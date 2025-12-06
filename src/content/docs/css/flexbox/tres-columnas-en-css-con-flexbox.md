---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPBSRLR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgQt%2FQIU%2FAGka4FpQnphMKUBS2MI7KhGav1ViAjUxVKQIhAKg1UeHPy2A3mlxCd%2Fybb%2FeXsSt6mK239zd3wrWU%2BkdYKv8DCG8QABoMNjM3NDIzMTgzODA1IgxVNrIxq3zw6glxcM0q3ANpiOX5EcdtSL95tzClF3eGJ%2BKhL8J1JWGqkSszevsyae4phgYlduDJQkAb0Gsh4kfLcnkqhZf62NYw6npKZS8nFzyTItAgBW782h5SI0rZ7Lczo5QUXrSrrxYLQ30LENpgvaWUzYQ8T2PcqyxbSdz1gqVZrGX%2FzGiJMGL4wqCnoKyfCvWh3VupP0fqKJJH2FurwiZo0cwA2xiPJrfZ0f60gq2TmsdLruxjDzC71NJljuuOCb%2F%2FUQuva7v7qzMEcyLm%2BS4qgjZup23jQxyn46OCQjYBcYaVCEZyNS9zn8i4fpkHXSHF8c8L7zNZ137J5cQjDGJh6yyHy5BBxxWkQR5VjPBh62J%2FzrnVR5CLAAxQeBKdSn1vhf4YRnQDA2jw8VPXTYWC2ZgE0wkxLmQzw0%2BKGDLsqWyNGSmSXv4b6OS%2BNz8vZKSHao2FfFpHPoeAs6z8wOtSheZwA%2BGL2KtMLaDN6GbDsMUwgBxUh8tNtkHhNNQjtgLs8FgSSQxyOWp2c6P%2F%2Bo6hSzyjiHYLhC9szoL1dGNyur3WJ3TbW8pyMAgdkKK1qKOyLLYG%2FGl6es648bR12s9lLMgWe4S7DuBotyQesbQjkeBeqt7MMzvMnek7HccNIrDSngjBBQFQqTDT%2FM7JBjqkAfF5wYyxGGFA6urmuNOeEfPTKwBwF96H02Lg2B9%2B8NZCT77Z5UVUgc%2B4536cyY88BNJdYgmySgNdhAy9jXH49eX2UDr%2BzkQQGoEYy40EBA5Ke3ohrdQWbAgPD%2F2lv%2FEzK7K5SQ3xV5xm9ei5dz9ou76SWYflbiHYkYwnRS6cKH2gX8QdCdsO6QhAlSNeCxAuXpv%2Fq7tPIZANT9042G1HDN2%2FXOev&X-Amz-Signature=aa7f55248083ece6bc508ac0c2cd63ac69590d9389a3a86b3aa1cd48b7efcefb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EPBSRLR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T053253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgQt%2FQIU%2FAGka4FpQnphMKUBS2MI7KhGav1ViAjUxVKQIhAKg1UeHPy2A3mlxCd%2Fybb%2FeXsSt6mK239zd3wrWU%2BkdYKv8DCG8QABoMNjM3NDIzMTgzODA1IgxVNrIxq3zw6glxcM0q3ANpiOX5EcdtSL95tzClF3eGJ%2BKhL8J1JWGqkSszevsyae4phgYlduDJQkAb0Gsh4kfLcnkqhZf62NYw6npKZS8nFzyTItAgBW782h5SI0rZ7Lczo5QUXrSrrxYLQ30LENpgvaWUzYQ8T2PcqyxbSdz1gqVZrGX%2FzGiJMGL4wqCnoKyfCvWh3VupP0fqKJJH2FurwiZo0cwA2xiPJrfZ0f60gq2TmsdLruxjDzC71NJljuuOCb%2F%2FUQuva7v7qzMEcyLm%2BS4qgjZup23jQxyn46OCQjYBcYaVCEZyNS9zn8i4fpkHXSHF8c8L7zNZ137J5cQjDGJh6yyHy5BBxxWkQR5VjPBh62J%2FzrnVR5CLAAxQeBKdSn1vhf4YRnQDA2jw8VPXTYWC2ZgE0wkxLmQzw0%2BKGDLsqWyNGSmSXv4b6OS%2BNz8vZKSHao2FfFpHPoeAs6z8wOtSheZwA%2BGL2KtMLaDN6GbDsMUwgBxUh8tNtkHhNNQjtgLs8FgSSQxyOWp2c6P%2F%2Bo6hSzyjiHYLhC9szoL1dGNyur3WJ3TbW8pyMAgdkKK1qKOyLLYG%2FGl6es648bR12s9lLMgWe4S7DuBotyQesbQjkeBeqt7MMzvMnek7HccNIrDSngjBBQFQqTDT%2FM7JBjqkAfF5wYyxGGFA6urmuNOeEfPTKwBwF96H02Lg2B9%2B8NZCT77Z5UVUgc%2B4536cyY88BNJdYgmySgNdhAy9jXH49eX2UDr%2BzkQQGoEYy40EBA5Ke3ohrdQWbAgPD%2F2lv%2FEzK7K5SQ3xV5xm9ei5dz9ou76SWYflbiHYkYwnRS6cKH2gX8QdCdsO6QhAlSNeCxAuXpv%2Fq7tPIZANT9042G1HDN2%2FXOev&X-Amz-Signature=11d8fc84ce5a3bea769da6c05dbcbdb2f313749d9b5cf1c06faf5fec22aafa1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

