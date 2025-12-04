---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V5DFRTV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCtHmGe2%2B3kYkOXnoyuissmKoRAOrU6TE3oQOofNqZ5AgIhAIcHBveAZFdTLZlNw5gOCpJTAIoY%2FWmEPOXlbOPjir4RKv8DCEcQABoMNjM3NDIzMTgzODA1IgwdCZTKAHjxlqXfBNgq3AMn6k3SUXsQJdRALFGG8ZeH8QYDNreuMKo8ftQxOpJYEluYnLQEEfNXC65mB3Y2Ej6S39deQuLHdLU3bKP%2BTd1Oj8sBbO0J8gfWn9%2B1qsugXx%2BZd9X8SozxShcu5fJosPW4WeNRvcFypygLA85aBGb2zcPOI8eivnHcIYRez2eNevcIVG79W5WJlqSAZ%2BjghmNjfTl%2BODsJXzZBeCUVZa0q0q7scC2TRkIICAw9iqcvNVSS7L5N9B7nWgFqcU3wPaAok3wjefW5MdUKWaAqXPoUeMjivbF4bWVh5tgVlwjShJOdDZxXxFT15S2Jz54J8AYJFu1gEOeR6PvE7BhF06VKwJBxNTKRHbOZryr6eoB00PFprs%2FNKj%2FFCnuCHX2AZUh7Oc21tJTbzT%2BTIlnRSlQvCMbs76bxPb4uu7cRWLxwqXSFgNZKP2ifQ48tYKsNgGl%2BJn%2F1cvhdft5Gq4qRtou4DHzB4HUfNLhUSJGFXMrIUSJRUcErExstvXC0D2YdPduduU4s9iS%2B60CkJIgijDz2dIqf2WmkhPLQH9WchrLu6jOcuJ06t5l7YHexOb4ak%2B0GK2BX0rfOACr%2F1ErxyxZz9uVEoua8uOaeCl2YvEZTQwk%2B0IRHol8CNsP0PjCeocbJBjqkAbColE5sCk1u2Lmj7LZ7%2BKeb3BwqWoP4NISmbo2Fv%2F8DT4ICisgwyAoY5ByzDT%2BpNMCeaMfOu4N8C6RdI0EDF%2Fu4AjRuep9GdjYCkV9V%2BaQPwxXv8pF3bbSpTi3JjBWj0kgTiOpuSPWHIHYmxCFuimYtiUnYglPwW2FrKa9IV3ujDxHEUsyCalikvUM7AMIxIqKx3IbiAFoSwMZBhxNcPy%2ForR%2BO&X-Amz-Signature=941c1415be531cde726c5acf1770bdbb13a24d9f4bcefedd2f71a7e4cd42177a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V5DFRTV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T135109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCtHmGe2%2B3kYkOXnoyuissmKoRAOrU6TE3oQOofNqZ5AgIhAIcHBveAZFdTLZlNw5gOCpJTAIoY%2FWmEPOXlbOPjir4RKv8DCEcQABoMNjM3NDIzMTgzODA1IgwdCZTKAHjxlqXfBNgq3AMn6k3SUXsQJdRALFGG8ZeH8QYDNreuMKo8ftQxOpJYEluYnLQEEfNXC65mB3Y2Ej6S39deQuLHdLU3bKP%2BTd1Oj8sBbO0J8gfWn9%2B1qsugXx%2BZd9X8SozxShcu5fJosPW4WeNRvcFypygLA85aBGb2zcPOI8eivnHcIYRez2eNevcIVG79W5WJlqSAZ%2BjghmNjfTl%2BODsJXzZBeCUVZa0q0q7scC2TRkIICAw9iqcvNVSS7L5N9B7nWgFqcU3wPaAok3wjefW5MdUKWaAqXPoUeMjivbF4bWVh5tgVlwjShJOdDZxXxFT15S2Jz54J8AYJFu1gEOeR6PvE7BhF06VKwJBxNTKRHbOZryr6eoB00PFprs%2FNKj%2FFCnuCHX2AZUh7Oc21tJTbzT%2BTIlnRSlQvCMbs76bxPb4uu7cRWLxwqXSFgNZKP2ifQ48tYKsNgGl%2BJn%2F1cvhdft5Gq4qRtou4DHzB4HUfNLhUSJGFXMrIUSJRUcErExstvXC0D2YdPduduU4s9iS%2B60CkJIgijDz2dIqf2WmkhPLQH9WchrLu6jOcuJ06t5l7YHexOb4ak%2B0GK2BX0rfOACr%2F1ErxyxZz9uVEoua8uOaeCl2YvEZTQwk%2B0IRHol8CNsP0PjCeocbJBjqkAbColE5sCk1u2Lmj7LZ7%2BKeb3BwqWoP4NISmbo2Fv%2F8DT4ICisgwyAoY5ByzDT%2BpNMCeaMfOu4N8C6RdI0EDF%2Fu4AjRuep9GdjYCkV9V%2BaQPwxXv8pF3bbSpTi3JjBWj0kgTiOpuSPWHIHYmxCFuimYtiUnYglPwW2FrKa9IV3ujDxHEUsyCalikvUM7AMIxIqKx3IbiAFoSwMZBhxNcPy%2ForR%2BO&X-Amz-Signature=1a793228dd6b479b779524aa2939e014081c8431f06e16867849fbef5124829a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

