---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N4T3DC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6UEyjOkMtjSb3wJoDt3fz4LPzxl6ova2HWoN2uyixBAiBK%2FurE7UWT6f%2FcbXsmqVKHLe0yasIwlNxrdILbc0T88SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2FiARCq4fpC%2F1vhjKtwDU9YX4EYsnTKfDE7zZgc8r9136jt5dj4GXLq5LG4tePVTKEB57qD97kvf%2B3sInY0Ds3w51PTwgJ37KlPmsj%2B9nK7msnAA0102TxwuetZm3b14z%2BIKZL%2FZxvgWpmm5DRlbANcxJYQHYVw9TPWZOFF3YNsAoIZ8RpRYKPwQEiYjbm%2BUyPvMiuArp%2FEJnIa42rX%2FoWVsaX5VGwrsvCadmlJ5qJg%2FaTGDt6MXxoUlGRisOFzvvUhU%2Fq8M%2FduWUGiK8pY4RSuZS13j%2FgSmYIljD06T8yMFUPqBwUrWHvPdV9RH68NLV5bcPExKZGMkyINC4%2F5G4B38ndGDhlqu6URhR09M5zBHvaJ8fDqzDUZiTYGLUIjGQV6KIGyePoLDfREcyFuRjrlNvOOmPvT47sR5qfsAQ96go0fsNZsZwzvWrCahQOfxPj8G4D7eQx2EA6WGcljtByofjHD6zvNEeGiHPgK6Q3ZEeWZ6Ehp7G2P9gypZ6DE4ed9qm8jaJLeitUkn27YL%2F8nbyGievtXa1cuqncYRor92MOxzxOMJ8S3wCSlvC9i2e1DDFUx3BzcE4wYFZfesaR%2B4sUUdQEeXnQ%2B%2Fm3TXhxjw9bI69ToJz4xUT%2B6SwwnatJV4T5ZzCEv0Dbsw3dHYyQY6pgF8Q4qruaRSgomj%2Brqoa%2FRI%2FzK%2BK%2F3Q2UnZIIWDiu1EVNzd%2BHrwV3CMx6yRbzMxkv9YM2zIfBHnn4q6ehPr9KobJAcX9%2FkL7WFH233n65z8k0PuFZ8c3RG3fJlE8pBRl4zZjLwbTaSmNOh7rTvrNqsybdrVzmIvBb0yN6Qp%2BO1SYkyuZTTX9Tg7Z1NnfedjzJZBC6fUSgxUs6WIUzBYylH6pL%2FAOuhi&X-Amz-Signature=4f3fcd31cfc2663a75c80315d5498f891f78be3a710a01828367789dcb0d8f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N4T3DC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6UEyjOkMtjSb3wJoDt3fz4LPzxl6ova2HWoN2uyixBAiBK%2FurE7UWT6f%2FcbXsmqVKHLe0yasIwlNxrdILbc0T88SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2FiARCq4fpC%2F1vhjKtwDU9YX4EYsnTKfDE7zZgc8r9136jt5dj4GXLq5LG4tePVTKEB57qD97kvf%2B3sInY0Ds3w51PTwgJ37KlPmsj%2B9nK7msnAA0102TxwuetZm3b14z%2BIKZL%2FZxvgWpmm5DRlbANcxJYQHYVw9TPWZOFF3YNsAoIZ8RpRYKPwQEiYjbm%2BUyPvMiuArp%2FEJnIa42rX%2FoWVsaX5VGwrsvCadmlJ5qJg%2FaTGDt6MXxoUlGRisOFzvvUhU%2Fq8M%2FduWUGiK8pY4RSuZS13j%2FgSmYIljD06T8yMFUPqBwUrWHvPdV9RH68NLV5bcPExKZGMkyINC4%2F5G4B38ndGDhlqu6URhR09M5zBHvaJ8fDqzDUZiTYGLUIjGQV6KIGyePoLDfREcyFuRjrlNvOOmPvT47sR5qfsAQ96go0fsNZsZwzvWrCahQOfxPj8G4D7eQx2EA6WGcljtByofjHD6zvNEeGiHPgK6Q3ZEeWZ6Ehp7G2P9gypZ6DE4ed9qm8jaJLeitUkn27YL%2F8nbyGievtXa1cuqncYRor92MOxzxOMJ8S3wCSlvC9i2e1DDFUx3BzcE4wYFZfesaR%2B4sUUdQEeXnQ%2B%2Fm3TXhxjw9bI69ToJz4xUT%2B6SwwnatJV4T5ZzCEv0Dbsw3dHYyQY6pgF8Q4qruaRSgomj%2Brqoa%2FRI%2FzK%2BK%2F3Q2UnZIIWDiu1EVNzd%2BHrwV3CMx6yRbzMxkv9YM2zIfBHnn4q6ehPr9KobJAcX9%2FkL7WFH233n65z8k0PuFZ8c3RG3fJlE8pBRl4zZjLwbTaSmNOh7rTvrNqsybdrVzmIvBb0yN6Qp%2BO1SYkyuZTTX9Tg7Z1NnfedjzJZBC6fUSgxUs6WIUzBYylH6pL%2FAOuhi&X-Amz-Signature=cadb6b69ed723495c592f7d8490a44dabdfe86cc8603238467de698dd4127db5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

