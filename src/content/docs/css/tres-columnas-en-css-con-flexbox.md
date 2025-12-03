---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3FC554J%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQD74B2h21X%2BpWX6cypLOhnLPAdGllpyOjk%2Bl0yJ8E9cDAIhAJ1RDgAkAxPRf5GgizOg9R3gsYGu5oVcgT3W9ILHBlVPKv8DCDYQABoMNjM3NDIzMTgzODA1IgyHbJYQRG8oiJofIEkq3APgrWaZVAbkzkZe3dBs%2FTjT7MQlNLpmDgf6TuK7IomhMzXYmLvi1Ler%2FQtNAl2N5hrhNUN%2FsBMcrwwMsbxrNmVW1wYJ2mIbDOEcg3Etj4Cj6nGdFgCZ4yyYQb95ml9qBoLb0hx0ExonZiv3ILaS6txODeHwT9j1LprlUxugLpFRzuDZYmxs%2FNclgvNPHhM2RPaYtDz9RCHfoD%2Fpp8%2Fhk5aSdJoj%2BUKcU6RNgrjGIW7AmJFKSDxQ7Y9IVVYQ0jpMcLIank780LANmVpdXMITSH6vsLgrjvRKP%2Fs%2FHqTOCfWl86hS83AEM83ijKqNEg8RUWYBlfnC9vupWtwHQJRl2OGDRZ0QFidFGE3fUIdNWm2R%2F1uZPAtaWpjnKw5YyntHq1I3gdiXr915%2Bk%2BsBmlrXmUFYbd%2B34mgjwBWE7xmeeB%2FVJrrJxRV%2FerzksuJft49pYUnbbr0Klfi2%2BR2jHU0v0d%2FbVoj9ZgyE6rx6UXnAaYi8fl5KBdmICX%2FJkgmzHGbcT%2Bk0krTEYATZVPV3L%2FkQFYCn%2F4UFIUE0cj10K6nSo%2Fliybt8phwM2q86g0ZSCLhvsay35fW%2BZrKH6mIH61EnBpQfMWFoCwx0n37Nt%2FnhClc%2BlcA5CWyHnuEhIUk9DCFvsLJBjqkAZ9%2BCwvVmoUQauEyKOtbKKqS9vHo%2BTEK42QOrnmd43AHUOh5k8ZHLbuy%2B76HHISksx8ikTL93uQ22cOJFHVoPNKygdFuN6ZXQ8sD7qZqW86l1eZxTwanQKwcA9rGmmtYly6A3hrVoOlUvku57H2CWZwW1xQCqRFyqY7f6Rv0vaFBQIj%2BwLU6a3gc6pJe8s5aoXtT9dh2ILNh2jJDQ1o9PRkTNkjD&X-Amz-Signature=9599fa4518873f09c3b8e095e93246b9d88a8e4236a7b344bc7196e22f448226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3FC554J%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQD74B2h21X%2BpWX6cypLOhnLPAdGllpyOjk%2Bl0yJ8E9cDAIhAJ1RDgAkAxPRf5GgizOg9R3gsYGu5oVcgT3W9ILHBlVPKv8DCDYQABoMNjM3NDIzMTgzODA1IgyHbJYQRG8oiJofIEkq3APgrWaZVAbkzkZe3dBs%2FTjT7MQlNLpmDgf6TuK7IomhMzXYmLvi1Ler%2FQtNAl2N5hrhNUN%2FsBMcrwwMsbxrNmVW1wYJ2mIbDOEcg3Etj4Cj6nGdFgCZ4yyYQb95ml9qBoLb0hx0ExonZiv3ILaS6txODeHwT9j1LprlUxugLpFRzuDZYmxs%2FNclgvNPHhM2RPaYtDz9RCHfoD%2Fpp8%2Fhk5aSdJoj%2BUKcU6RNgrjGIW7AmJFKSDxQ7Y9IVVYQ0jpMcLIank780LANmVpdXMITSH6vsLgrjvRKP%2Fs%2FHqTOCfWl86hS83AEM83ijKqNEg8RUWYBlfnC9vupWtwHQJRl2OGDRZ0QFidFGE3fUIdNWm2R%2F1uZPAtaWpjnKw5YyntHq1I3gdiXr915%2Bk%2BsBmlrXmUFYbd%2B34mgjwBWE7xmeeB%2FVJrrJxRV%2FerzksuJft49pYUnbbr0Klfi2%2BR2jHU0v0d%2FbVoj9ZgyE6rx6UXnAaYi8fl5KBdmICX%2FJkgmzHGbcT%2Bk0krTEYATZVPV3L%2FkQFYCn%2F4UFIUE0cj10K6nSo%2Fliybt8phwM2q86g0ZSCLhvsay35fW%2BZrKH6mIH61EnBpQfMWFoCwx0n37Nt%2FnhClc%2BlcA5CWyHnuEhIUk9DCFvsLJBjqkAZ9%2BCwvVmoUQauEyKOtbKKqS9vHo%2BTEK42QOrnmd43AHUOh5k8ZHLbuy%2B76HHISksx8ikTL93uQ22cOJFHVoPNKygdFuN6ZXQ8sD7qZqW86l1eZxTwanQKwcA9rGmmtYly6A3hrVoOlUvku57H2CWZwW1xQCqRFyqY7f6Rv0vaFBQIj%2BwLU6a3gc6pJe8s5aoXtT9dh2ILNh2jJDQ1o9PRkTNkjD&X-Amz-Signature=239f5dedcc85ee2dc650ef92616d8ed644231ede6eb4acadcb16d76bc95ed091&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

