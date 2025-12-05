---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOAL3LI5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5iIaSoDXSiuF%2BSVbULiFubaL28gKjCkwQIkA3tzHj6wIgKrkDCauoqMOX5tPpxJ%2Brod36g2gGRPuvc0yJGxurijAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDA%2FJBO3H7BkSyPQKiCrcA3qvU%2BsvVJ5gtPJN27odM72UxuH6tYV7N4GEJO2VgPROCUB6mp4JuKJ0rpqWEe5aZlXioeGVxb2mLmkABYmFhequlGvx3tYg1P9M76MCME%2FIkXivbiN5%2BWMbt3gJOSrlPtMlrS0e6lJHQ7sd%2F9m2UQfLYjXiEhQ4%2F3OvoJUzcMgyyZJN6h%2Bdz9YXALn8759kbK8ESJfDWecwkaH9%2FWlK8RzlvdlJ1tvOmaJm6EwXgN7zAF14G32R%2FhIyewLOQIP%2BDWdenhP1pXcpZBfxMam4w42bSIZy%2FOEbm%2BPfQtbZrXots0hMmYvu%2FKhXUN67BnGXM%2Fxt%2Bc%2Fa8FCG9WdrlL4GtXEqPx2YpRSocGRqA%2BBfArIhT1TY30AwZgD9OIDpEgs%2FB875T8aZu%2FnskePXkW653EvNvJu7Txyn40qYGSW4MthJz1X0ol8Gp4PTV6rYbq8zwDBhr4jBfevlzKP1PD3wRmNEINPVh1A%2FG63kHvPJYmE7AT3%2B8nCAXzgmbZyMKWEsWh11J7rt4pFqs2sFYM6iVuG%2FZfx1ejYygO89RwWepIsb4If8uFhb2JfdL%2B%2FnBnDt%2BBzJNUtlgOpqKtDseZdqgDskt82unZP5aAZfGpdDA%2F71tcW12VJF0m%2F17wA4MIjQyskGOqUBq%2BGgfmWYQ5pT7jLuJsAswDXvLnCMgOtXGHZYrWcJUwIh5NgixT47QsVJmjrwCYjhxcQWs2bCE7cls3LzDhSJF4TIYwKTe6qkQv6vNNidJNoGRM%2Fmf1EalAHRswYP8v%2F5UpSORisGZky5xNTDKME9kGjrtNGFQKcyODP0tlrR30GE2NqcYWGUcCJp2AmdIbw3NZV1KO%2FY6lWv%2B5E4nQFCbeuw2nYI&X-Amz-Signature=e701097f3861e6ac5142e52f270cdb832fd02d2628cf43abf7a37d7616d49e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOAL3LI5%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5iIaSoDXSiuF%2BSVbULiFubaL28gKjCkwQIkA3tzHj6wIgKrkDCauoqMOX5tPpxJ%2Brod36g2gGRPuvc0yJGxurijAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDA%2FJBO3H7BkSyPQKiCrcA3qvU%2BsvVJ5gtPJN27odM72UxuH6tYV7N4GEJO2VgPROCUB6mp4JuKJ0rpqWEe5aZlXioeGVxb2mLmkABYmFhequlGvx3tYg1P9M76MCME%2FIkXivbiN5%2BWMbt3gJOSrlPtMlrS0e6lJHQ7sd%2F9m2UQfLYjXiEhQ4%2F3OvoJUzcMgyyZJN6h%2Bdz9YXALn8759kbK8ESJfDWecwkaH9%2FWlK8RzlvdlJ1tvOmaJm6EwXgN7zAF14G32R%2FhIyewLOQIP%2BDWdenhP1pXcpZBfxMam4w42bSIZy%2FOEbm%2BPfQtbZrXots0hMmYvu%2FKhXUN67BnGXM%2Fxt%2Bc%2Fa8FCG9WdrlL4GtXEqPx2YpRSocGRqA%2BBfArIhT1TY30AwZgD9OIDpEgs%2FB875T8aZu%2FnskePXkW653EvNvJu7Txyn40qYGSW4MthJz1X0ol8Gp4PTV6rYbq8zwDBhr4jBfevlzKP1PD3wRmNEINPVh1A%2FG63kHvPJYmE7AT3%2B8nCAXzgmbZyMKWEsWh11J7rt4pFqs2sFYM6iVuG%2FZfx1ejYygO89RwWepIsb4If8uFhb2JfdL%2B%2FnBnDt%2BBzJNUtlgOpqKtDseZdqgDskt82unZP5aAZfGpdDA%2F71tcW12VJF0m%2F17wA4MIjQyskGOqUBq%2BGgfmWYQ5pT7jLuJsAswDXvLnCMgOtXGHZYrWcJUwIh5NgixT47QsVJmjrwCYjhxcQWs2bCE7cls3LzDhSJF4TIYwKTe6qkQv6vNNidJNoGRM%2Fmf1EalAHRswYP8v%2F5UpSORisGZky5xNTDKME9kGjrtNGFQKcyODP0tlrR30GE2NqcYWGUcCJp2AmdIbw3NZV1KO%2FY6lWv%2B5E4nQFCbeuw2nYI&X-Amz-Signature=18d7e3876fb3e6436e5aef01ae8b7c966e73a98f2368238d61b0063ed1665db8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

