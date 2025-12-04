---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQCSYOU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQClEz5F%2BIiexw%2FRfR%2Fzv8aD4rXJehL%2BchtVDeHGAImtnAIhAKJltiWbKfGLiLryMDwcGP0mcQuW%2FoPOhxFQh0Ffc2yVKv8DCDkQABoMNjM3NDIzMTgzODA1IgwECr3WVg9kUmN27lcq3AP3jCiWyKErAFu5rFn7n2UdheDncPPJr%2FfgREuY37So7WQUl67Fsm8NNUqZLY8v5mRyWiaul6yZ8oX23mSPVLAuqoxJtrXv5XrnuOi%2BX9jF6Po8XYVyqUiBY2sOPvMGF5gAWkro1hnUKBLh2boEYlJVlOJvTxQCgFpC539fKALWRu3dNpYxgb6UPVkSDoxZFqCZOqndiqUZufksQOK24GnXLcKvcOkf9s7UPSJJ2vZUjQRxZ3n1ggsILwCNfgVnEXDrSfJaoUc1lM5KW4f3nDwX2K63JRTgKPQmvrpY1yDLZS9CQHANxD%2BiTe8BAu5y6BoScZpbcvpLoFX02YvasyN28%2FNNy17OxkdASS8FB75l6x5lBxMDr8Z%2F3KOVuQZ66E%2FQKDxMZA7qD4xciNH9ofMOGVL6A296f%2ByaJ12WEBRry2AFCNcoLffMn5Y4OgeeEQNh7Cc6D6sXEEFIAfE2kd%2F3PzXCp%2Bb1iy67zg%2F%2FMN0MNbJTeej41TpBQ5jyc2fl6nVPHLlDCiStvq4IEqQDVJBu6MS7aLXd9iQtoBxkmq5k%2FyM39099FQ%2BuNrq0HAIyiQNwnt%2BZB4uEdUf6iia9%2FGxReE9SZb%2BY3f8rlzl%2BNho%2FVYuD1jr6pfEcwAA39jD%2BlMPJBjqkARWGzKpBVd9wkDp9j8QfOgvYmVzvemXtpAYbpzbS1JBEc2%2FDANZeKqiz2eExv6GoHYd2Lkkav%2BcL%2BAGQu%2B3eWvj6cUwgJIwoTes5Yw%2BLDotI%2BWMkGDlQJRwHUJSpYWXhKdyP%2FVwsAdpxNkCgBjVok1g6TrePxKTR7Wz%2F0lmT4M89H%2B9cZBEmANf2A0i%2BPBziHVmoxD31E01KthMkPL1QuMGDH%2Bej&X-Amz-Signature=6cf23b262bba469c662e299cd836f866e27d014ab1a6f9ff03609fcb7871eecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCQCSYOU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQClEz5F%2BIiexw%2FRfR%2Fzv8aD4rXJehL%2BchtVDeHGAImtnAIhAKJltiWbKfGLiLryMDwcGP0mcQuW%2FoPOhxFQh0Ffc2yVKv8DCDkQABoMNjM3NDIzMTgzODA1IgwECr3WVg9kUmN27lcq3AP3jCiWyKErAFu5rFn7n2UdheDncPPJr%2FfgREuY37So7WQUl67Fsm8NNUqZLY8v5mRyWiaul6yZ8oX23mSPVLAuqoxJtrXv5XrnuOi%2BX9jF6Po8XYVyqUiBY2sOPvMGF5gAWkro1hnUKBLh2boEYlJVlOJvTxQCgFpC539fKALWRu3dNpYxgb6UPVkSDoxZFqCZOqndiqUZufksQOK24GnXLcKvcOkf9s7UPSJJ2vZUjQRxZ3n1ggsILwCNfgVnEXDrSfJaoUc1lM5KW4f3nDwX2K63JRTgKPQmvrpY1yDLZS9CQHANxD%2BiTe8BAu5y6BoScZpbcvpLoFX02YvasyN28%2FNNy17OxkdASS8FB75l6x5lBxMDr8Z%2F3KOVuQZ66E%2FQKDxMZA7qD4xciNH9ofMOGVL6A296f%2ByaJ12WEBRry2AFCNcoLffMn5Y4OgeeEQNh7Cc6D6sXEEFIAfE2kd%2F3PzXCp%2Bb1iy67zg%2F%2FMN0MNbJTeej41TpBQ5jyc2fl6nVPHLlDCiStvq4IEqQDVJBu6MS7aLXd9iQtoBxkmq5k%2FyM39099FQ%2BuNrq0HAIyiQNwnt%2BZB4uEdUf6iia9%2FGxReE9SZb%2BY3f8rlzl%2BNho%2FVYuD1jr6pfEcwAA39jD%2BlMPJBjqkARWGzKpBVd9wkDp9j8QfOgvYmVzvemXtpAYbpzbS1JBEc2%2FDANZeKqiz2eExv6GoHYd2Lkkav%2BcL%2BAGQu%2B3eWvj6cUwgJIwoTes5Yw%2BLDotI%2BWMkGDlQJRwHUJSpYWXhKdyP%2FVwsAdpxNkCgBjVok1g6TrePxKTR7Wz%2F0lmT4M89H%2B9cZBEmANf2A0i%2BPBziHVmoxD31E01KthMkPL1QuMGDH%2Bej&X-Amz-Signature=d295e11979b9bc8ca97a24046333f1017fa764b7c9513088fc0628991fda2c44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

