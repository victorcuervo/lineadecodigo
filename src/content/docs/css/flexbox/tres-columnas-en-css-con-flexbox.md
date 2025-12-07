---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AUW3NNH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW7Qg9n2VLxWsDvenfqDnemPlVKOg%2FCssKn46ZupggnQIhAO5VxMMFjyyl3TYQO9%2BHAH22RabwcwaRwCcuL0ZXe4FnKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BWXz2DifNIPI16CUq3AM4%2Bbc6uUlq4xCH5hJbVKv8Rh1kSpazLP5ZYsomHjJQGDJdnj0ME0YqJ6ET3Z9am8c%2BsW5o5818B%2FYpSlx%2F0C%2FmxU81ei1feY8Cv%2FT%2FyG2r%2FfDVEE4p1wgtgu8PMfFgbhF4qa6xO%2F4W2GaLh1rTPo85oRFpm17Bqs0S92wlU6XzdFndpQxqypld3t98MTaTox3I%2BFBfQphr1pdRDYXgA5PJAnfIt1%2BVFd%2FRUGrgT7%2BJoPE5VT5VJLLLpeIDc%2Bf7l26b%2FLvaaWTJpVUJA8ZKAH3LG3HqpcKSjuu86F2kWUuYlDccCArH8sMglFbHbEWyG%2FURHNzgEGUKmtEYgjLCnL5y3S7E0PeOPCYJOJEaFoockPggTqYuREsJFxAzc92B7m999ycqoOeFjHq%2FcQ1pjWJw6YNOPOvsrlbA2JLJM%2Bmp9JK7Nxt4e8t3heA386ff45YLAqa1hhiRbWm2EERonZ5U%2BflGQ2bICES%2F4ECpuKxRpdv8llcVzP%2FNFX%2BwGQ2OXutqSqKieRzffvn9KgH%2B5Gjwp56c3e889%2BEF0QAn6T3vKkwLk8HMyjlq%2BR4CU694uBWlSpWgZg54CIQCTatVsryFYuk5lozYwiJeJxGwP9nNb3YVyZebY0nW5sCwTzComdXJBjqkAcVCmUvZdoWVTIzcNEbhP4YasTJxY7vWzZgBKYtn07NcNF91ujTIQst617Dfxgp22spEENhDOPH5WH%2BfTQOxTzhn%2FLB%2FV%2B8AQbtxa4OfaJXX7ZjRDtG5Zs4EIg4foy4Ip1KaGWL39z9%2FP08vi%2FISdE6CM%2BE2ss%2FGaJyw057%2Fd%2BSg%2FO%2Ff6amDgYQb3ummg%2FLmxpKMOWbXnRq0KRF0V%2FO9PoI1lRaF&X-Amz-Signature=c1b93575ff82252e54da15ef48aa45f7e77dce657241be163258f4b6fe919214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AUW3NNH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDW7Qg9n2VLxWsDvenfqDnemPlVKOg%2FCssKn46ZupggnQIhAO5VxMMFjyyl3TYQO9%2BHAH22RabwcwaRwCcuL0ZXe4FnKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BWXz2DifNIPI16CUq3AM4%2Bbc6uUlq4xCH5hJbVKv8Rh1kSpazLP5ZYsomHjJQGDJdnj0ME0YqJ6ET3Z9am8c%2BsW5o5818B%2FYpSlx%2F0C%2FmxU81ei1feY8Cv%2FT%2FyG2r%2FfDVEE4p1wgtgu8PMfFgbhF4qa6xO%2F4W2GaLh1rTPo85oRFpm17Bqs0S92wlU6XzdFndpQxqypld3t98MTaTox3I%2BFBfQphr1pdRDYXgA5PJAnfIt1%2BVFd%2FRUGrgT7%2BJoPE5VT5VJLLLpeIDc%2Bf7l26b%2FLvaaWTJpVUJA8ZKAH3LG3HqpcKSjuu86F2kWUuYlDccCArH8sMglFbHbEWyG%2FURHNzgEGUKmtEYgjLCnL5y3S7E0PeOPCYJOJEaFoockPggTqYuREsJFxAzc92B7m999ycqoOeFjHq%2FcQ1pjWJw6YNOPOvsrlbA2JLJM%2Bmp9JK7Nxt4e8t3heA386ff45YLAqa1hhiRbWm2EERonZ5U%2BflGQ2bICES%2F4ECpuKxRpdv8llcVzP%2FNFX%2BwGQ2OXutqSqKieRzffvn9KgH%2B5Gjwp56c3e889%2BEF0QAn6T3vKkwLk8HMyjlq%2BR4CU694uBWlSpWgZg54CIQCTatVsryFYuk5lozYwiJeJxGwP9nNb3YVyZebY0nW5sCwTzComdXJBjqkAcVCmUvZdoWVTIzcNEbhP4YasTJxY7vWzZgBKYtn07NcNF91ujTIQst617Dfxgp22spEENhDOPH5WH%2BfTQOxTzhn%2FLB%2FV%2B8AQbtxa4OfaJXX7ZjRDtG5Zs4EIg4foy4Ip1KaGWL39z9%2FP08vi%2FISdE6CM%2BE2ss%2FGaJyw057%2Fd%2BSg%2FO%2Ff6amDgYQb3ummg%2FLmxpKMOWbXnRq0KRF0V%2FO9PoI1lRaF&X-Amz-Signature=d265676fdb9ca89321bcf2d31fe9d8e8773c7d0d0a12a3a97374fc7fb5902c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

