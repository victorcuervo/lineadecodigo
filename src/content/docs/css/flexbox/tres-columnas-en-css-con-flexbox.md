---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUVQQRJV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCqfxdxXMause%2BPAe0wECYIDU8ieIl4TzjpW33xm%2B9pRgIhAMXmQVYP%2BWvyPN0MHJxCadsjcqqFkkSgR3UC6vKmtfO1Kv8DCD0QABoMNjM3NDIzMTgzODA1IgzMjkbEhWAOhpcjw1oq3AOnQCZbnJGpVkxZnr%2BhFQmXtEoi6Wqyw4soUNMNCMDsrlrwR6oaQfUYTX1sI8kf1zBD2c5wwDFmdtkH6%2FCcjveYrWl72U0eOijUkeNxy31dkjmR5yvPHUWj1xOtHZhzY7BR%2B3%2FVEsTdQonZOmxDhspggVxY%2F4ivLK2F5kx18EhxDFOwawl6u56IuIj352mko0j9w0zGcs26zYnVhungiF6csydote9D7YhRdlfrpiGfWmP9dgMAFuxM1AGx8kGcF%2BS0vjODE1kGT93A78GHKMtvp0AASXXO6yBtSeJ0jGM91Bw1bw%2FvbRjU9cinvlKOOZRMZbdsq4OvAAg3FrtXT3Ax1EyzzrNwsbl7kks4yrlv%2BHWtFwHfZY6qyZJp9SMo2tLuz2FY83LR6TYOeNfEssIXdA7kaWRjNEBoEUeFNnYK9QHmD59SOUPpIXt2Ms2L4hVxjXGve5K%2B751l8ga7kZVgf%2FiZr%2FV8Iv9tx4L5EJxxhBd8WD6Z%2FTc1uOyvNBCp%2FWuU%2Bb0KxD0XqJKm7j8emFGBS5ZBltcp%2B3EFavg1QQncI1OojiIVgMizHr8jU631k7hY0bkZHPhBcdElGvzB14%2FKOB8Aljsuo%2FOf3T0EgSag56OXTMETZ%2B%2BjchRWYTCukcTJBjqkAaPAwKSsREm24mjcV2LspGkorApjWSn70CAo0VyKQaveHgHVehMo7gD6xcJ9gQPKMnX%2BojficBN3Gr6Wn0lgIWa5W1LwbcG6as%2Bq8OtgN%2FrwnL6lJGNTKKaLl1JGuWx0suLhc%2BhTrV36cPx2rjVuNn6xhFt%2F89pl1hgtcY7cDcaXhuKHnsaagK1SR%2FTwQx3dOmGM1cx4laZgq1ppv38a%2BODo2Iek&X-Amz-Signature=3ed46ec11d37d011a4c4e1790c03b36c5a260d41eb5783f9ff1746f8042f12dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUVQQRJV%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQCqfxdxXMause%2BPAe0wECYIDU8ieIl4TzjpW33xm%2B9pRgIhAMXmQVYP%2BWvyPN0MHJxCadsjcqqFkkSgR3UC6vKmtfO1Kv8DCD0QABoMNjM3NDIzMTgzODA1IgzMjkbEhWAOhpcjw1oq3AOnQCZbnJGpVkxZnr%2BhFQmXtEoi6Wqyw4soUNMNCMDsrlrwR6oaQfUYTX1sI8kf1zBD2c5wwDFmdtkH6%2FCcjveYrWl72U0eOijUkeNxy31dkjmR5yvPHUWj1xOtHZhzY7BR%2B3%2FVEsTdQonZOmxDhspggVxY%2F4ivLK2F5kx18EhxDFOwawl6u56IuIj352mko0j9w0zGcs26zYnVhungiF6csydote9D7YhRdlfrpiGfWmP9dgMAFuxM1AGx8kGcF%2BS0vjODE1kGT93A78GHKMtvp0AASXXO6yBtSeJ0jGM91Bw1bw%2FvbRjU9cinvlKOOZRMZbdsq4OvAAg3FrtXT3Ax1EyzzrNwsbl7kks4yrlv%2BHWtFwHfZY6qyZJp9SMo2tLuz2FY83LR6TYOeNfEssIXdA7kaWRjNEBoEUeFNnYK9QHmD59SOUPpIXt2Ms2L4hVxjXGve5K%2B751l8ga7kZVgf%2FiZr%2FV8Iv9tx4L5EJxxhBd8WD6Z%2FTc1uOyvNBCp%2FWuU%2Bb0KxD0XqJKm7j8emFGBS5ZBltcp%2B3EFavg1QQncI1OojiIVgMizHr8jU631k7hY0bkZHPhBcdElGvzB14%2FKOB8Aljsuo%2FOf3T0EgSag56OXTMETZ%2B%2BjchRWYTCukcTJBjqkAaPAwKSsREm24mjcV2LspGkorApjWSn70CAo0VyKQaveHgHVehMo7gD6xcJ9gQPKMnX%2BojficBN3Gr6Wn0lgIWa5W1LwbcG6as%2Bq8OtgN%2FrwnL6lJGNTKKaLl1JGuWx0suLhc%2BhTrV36cPx2rjVuNn6xhFt%2F89pl1hgtcY7cDcaXhuKHnsaagK1SR%2FTwQx3dOmGM1cx4laZgq1ppv38a%2BODo2Iek&X-Amz-Signature=03b8f3600415abf6bf50ed14845b91eb83da72fd94b10c4cc755bd96732056e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

