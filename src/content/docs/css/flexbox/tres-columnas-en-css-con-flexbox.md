---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5N7OW7K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcZTFwFvpKQDGaMruk1ut88pFiSG%2B3I0aSK%2B1uBftCGAIhAIjsdsc05hZ6PFfSQ5TXLkScv2oa7vM2ve6bCpmNARM%2BKv8DCF4QABoMNjM3NDIzMTgzODA1Igx7g65SW9UmQFe9GWAq3AN8MSPDXev2AT6BKZSsBXXxMqW%2BNpG3KEzy3i75gQlDsCgWhhMNJC7Swpi5mZmsiuGRC9S%2F%2BkNQyYLj6ncxHJYmB7JAgPDimOZ9xDlZZRH30UIJ1duWdZb4HImJr%2BKe0A7ZMAuZClKbGo3x9yytcOAlvKB6A2rqBr7hnUiBTMd748z3B1pY9RxbJ3G3pm6LE77QRpeyPRQrNJp4r8WwS%2Bl4MP%2B7MiKk4d3CGxMcCJNMM4I8OVZvHtltbJYeHg8%2B%2BEtjVc70Thtq3T7tAk9oH%2FMOaDV%2Bn82rf6nkXIqnA7p87ufLQSzfcg6miVqb1rycvalUpvkVt5tFFCW9XxYM3ur58IB9%2BI2%2BeZpuXF6L7oRT%2BD4ibui0ZbWCwmitxMkW1uIHKWMOFO%2BCNnZpOhIdY8G8U3qJEXKez2tHdKMRDYn673SWvRYIH9iiPDHW9wUicC6aVEyt8sMR6Klk3%2BXurSM%2BSvdzV0suDqIgqQSZh0bDk59qX%2FQT56Tx3VNI5WpGpZUD0IwQ7fVp9xXZB8XVUNeX2Kcs1Sly6k6O17UdBmx951Uh%2F3nxsgtjtKRaEQ3vZyDGGKExeyksuzwPcg1nQCKHxhbA1s6HtpJP4QLIH2NKHeed3uwG7jHB%2FT8CyTClscvJBjqkAdkBFtpOY0SpIb6tSxdG66jYMA5FTsX%2BOFT%2B13t8WtMzupKRmVFoZjNPQ5zCbrmUaeVKS0xqogyPfwj5BQqGLUDA206xBHl9QJnZnql0yxiJ2F2MdWy2gCNWC8mu3swV4R%2BGON68y5BOi8jN9czZRwizjNR6nGNphs9tvWzGPEhF2K4Tgz6rl0zuZae3f3xb4VgM997QKjZVKnp6BnN555jSpJ%2FK&X-Amz-Signature=66c801486694936341ac3cd3574d376b1ff26ebb80b6d1591dd2b375c0806c99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5N7OW7K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T161916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcZTFwFvpKQDGaMruk1ut88pFiSG%2B3I0aSK%2B1uBftCGAIhAIjsdsc05hZ6PFfSQ5TXLkScv2oa7vM2ve6bCpmNARM%2BKv8DCF4QABoMNjM3NDIzMTgzODA1Igx7g65SW9UmQFe9GWAq3AN8MSPDXev2AT6BKZSsBXXxMqW%2BNpG3KEzy3i75gQlDsCgWhhMNJC7Swpi5mZmsiuGRC9S%2F%2BkNQyYLj6ncxHJYmB7JAgPDimOZ9xDlZZRH30UIJ1duWdZb4HImJr%2BKe0A7ZMAuZClKbGo3x9yytcOAlvKB6A2rqBr7hnUiBTMd748z3B1pY9RxbJ3G3pm6LE77QRpeyPRQrNJp4r8WwS%2Bl4MP%2B7MiKk4d3CGxMcCJNMM4I8OVZvHtltbJYeHg8%2B%2BEtjVc70Thtq3T7tAk9oH%2FMOaDV%2Bn82rf6nkXIqnA7p87ufLQSzfcg6miVqb1rycvalUpvkVt5tFFCW9XxYM3ur58IB9%2BI2%2BeZpuXF6L7oRT%2BD4ibui0ZbWCwmitxMkW1uIHKWMOFO%2BCNnZpOhIdY8G8U3qJEXKez2tHdKMRDYn673SWvRYIH9iiPDHW9wUicC6aVEyt8sMR6Klk3%2BXurSM%2BSvdzV0suDqIgqQSZh0bDk59qX%2FQT56Tx3VNI5WpGpZUD0IwQ7fVp9xXZB8XVUNeX2Kcs1Sly6k6O17UdBmx951Uh%2F3nxsgtjtKRaEQ3vZyDGGKExeyksuzwPcg1nQCKHxhbA1s6HtpJP4QLIH2NKHeed3uwG7jHB%2FT8CyTClscvJBjqkAdkBFtpOY0SpIb6tSxdG66jYMA5FTsX%2BOFT%2B13t8WtMzupKRmVFoZjNPQ5zCbrmUaeVKS0xqogyPfwj5BQqGLUDA206xBHl9QJnZnql0yxiJ2F2MdWy2gCNWC8mu3swV4R%2BGON68y5BOi8jN9czZRwizjNR6nGNphs9tvWzGPEhF2K4Tgz6rl0zuZae3f3xb4VgM997QKjZVKnp6BnN555jSpJ%2FK&X-Amz-Signature=27ba3a6ea137e877ef20d8e1936f7d9b8ef9cb20eda2cbd137bd5031482112e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

