---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KCRSWEU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T154523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDqBlAC6%2BY%2F8CK%2Bp9I5R52QnVK%2Fo0QDwIUk7WbdJzMAcwIhAITtOwMTmVlfzJo%2B7JDCwxKMEt5yjnmtj16vAm6X4M%2BGKv8DCDAQABoMNjM3NDIzMTgzODA1IgwB9mU02%2BODHbPHdH0q3AM6gjyiAKXckNhh2qqLGsSol52%2FnHVP6olk6L%2BchWvHLkFkPzA5DkUT9Yuv7lJKUh38nbSPrceHO2VKqScn2KIZ7CgsrKUBVgdKcVc02hByrxoCvVluGtox3TdRKxrf0rsI7qSolSLWdbLuKU2F3yOBEHOP%2F6NozCOJJEfT3OEwjjj3gBftq89U4HY%2BL453pQPW8%2BvseX%2Fxo7KgJyebZ%2B%2FrtuHo3vhpwDo56btQOEU5gIX7s3OiohYI7ccOf5639xLMWa663XfuEmD%2BSaI%2FCiiNsLOH19JEWRz3%2Buc3l%2Ft9mY%2FAL0%2Fp9m%2BjZtQ264RiO5RwyWT5gSbx4%2FVyqAaIE1Zf9bdd7ImUB1zSdlp49elRhAD7lToCgBtNFxRJXSzvlBYfubFKi%2BrGFb7nkI2ys7Mx5sBFxcDsKD38uUCEuq%2FDVWL%2Bp0FzKkhiA6dZ8q0sqJs92opDXOBHypQpZND7%2FRRpOU9UAKKgxBKR%2FUBMn09jIyqcNgIAKF4%2FulcbdA6UxZpH0BdTAbFIDYnJFA5LFfEM8mZmSQvLRYCgW3wlxYofcx7eBZj9gwscQZsbqSJzV0qT11dFB8YCdmTBlkJZBMwQpBcZ6I7MbSL21%2FltQPlKjNqcSEZsQ6u06izsizC1psHJBjqkAYHTZdPXJA9aPGj2bBgqKvz9daTeZDR5s7KfXjIXfND6lVjkGiTnbneenZjaK5aCrLSjTvqGCoVTXQK6TG4Sn%2FRNUyOgmbQDSUtoR3X8mVIJNanJ8qvTYTdUA5OuaqimCANwXArky5upgWb6bxk2xUoSaUHCQjtOiqUfzOcN2AN6BzQS6OMA1ZkjAX1CsmGPq%2BKjNXzyGkAkkHcu3hGPnjklqKbV&X-Amz-Signature=ad930fce57b0bbe05fe96af11b1938603396d88e606b06ac229031d42d7b9020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KCRSWEU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T154523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDqBlAC6%2BY%2F8CK%2Bp9I5R52QnVK%2Fo0QDwIUk7WbdJzMAcwIhAITtOwMTmVlfzJo%2B7JDCwxKMEt5yjnmtj16vAm6X4M%2BGKv8DCDAQABoMNjM3NDIzMTgzODA1IgwB9mU02%2BODHbPHdH0q3AM6gjyiAKXckNhh2qqLGsSol52%2FnHVP6olk6L%2BchWvHLkFkPzA5DkUT9Yuv7lJKUh38nbSPrceHO2VKqScn2KIZ7CgsrKUBVgdKcVc02hByrxoCvVluGtox3TdRKxrf0rsI7qSolSLWdbLuKU2F3yOBEHOP%2F6NozCOJJEfT3OEwjjj3gBftq89U4HY%2BL453pQPW8%2BvseX%2Fxo7KgJyebZ%2B%2FrtuHo3vhpwDo56btQOEU5gIX7s3OiohYI7ccOf5639xLMWa663XfuEmD%2BSaI%2FCiiNsLOH19JEWRz3%2Buc3l%2Ft9mY%2FAL0%2Fp9m%2BjZtQ264RiO5RwyWT5gSbx4%2FVyqAaIE1Zf9bdd7ImUB1zSdlp49elRhAD7lToCgBtNFxRJXSzvlBYfubFKi%2BrGFb7nkI2ys7Mx5sBFxcDsKD38uUCEuq%2FDVWL%2Bp0FzKkhiA6dZ8q0sqJs92opDXOBHypQpZND7%2FRRpOU9UAKKgxBKR%2FUBMn09jIyqcNgIAKF4%2FulcbdA6UxZpH0BdTAbFIDYnJFA5LFfEM8mZmSQvLRYCgW3wlxYofcx7eBZj9gwscQZsbqSJzV0qT11dFB8YCdmTBlkJZBMwQpBcZ6I7MbSL21%2FltQPlKjNqcSEZsQ6u06izsizC1psHJBjqkAYHTZdPXJA9aPGj2bBgqKvz9daTeZDR5s7KfXjIXfND6lVjkGiTnbneenZjaK5aCrLSjTvqGCoVTXQK6TG4Sn%2FRNUyOgmbQDSUtoR3X8mVIJNanJ8qvTYTdUA5OuaqimCANwXArky5upgWb6bxk2xUoSaUHCQjtOiqUfzOcN2AN6BzQS6OMA1ZkjAX1CsmGPq%2BKjNXzyGkAkkHcu3hGPnjklqKbV&X-Amz-Signature=54da2987981659dc774f7f6e44c739eaa0c9834165e484bb8694f64047a0dd96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

