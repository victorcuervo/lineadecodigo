---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXII3YWJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt9UTb1pj4KNKHdhv5SxcwmthBkvD8KrSEY02DnY%2BkqAIhAPEVFtV6hJlPIn%2BkCx3LuX4yLduuwLFdvhlCz%2FkIdDm7KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyleWObrhczQC%2FyqWoq3AMNpbTBnwFMUCRBcxFu2udQr3incD7XvIKHzw%2FI5nlZvwL5Kks9Sy1hox%2FWGITyMS9aUdDntjduc6ppsePPYUQFx2Nk4aFZM4Ti9JMrKi2zI3FzvRz7yMc%2FFLsdVhv0P9bt20S%2FJRvPE5vIpp5q5Lp7aR7te10P%2Bc6bh2Svs5fxR8yXm%2FJdXuJzuoxLzqOlZmXKGo8Ij3FJ9H%2BU%2Fit8ZENty5HIOuczVvd0MEBEGmSx91QVfAWVCqbzLz7%2B1ucDi5AwNBae4geWUQGuqoNwWGeHywxJ6ALLGeCnnGl6vpsONxsEbV%2B0BgvpyDkZCJb1%2B3y%2F%2BgkNfA1TI%2BoViYZR3RvUMnYHFWqRZzxXWQK0f48a1jigdX%2FREcfBSPoLyhcWpqWilZyRljBrpNx4PuFa9hoXG24sGIlaxhMQEk5x%2FEHbv%2BEJodyMOHtoJCCmBOJmXr4Q8WZC8RJK2U5Ntst60xo737r3UlEUGdzlHK6kqqiv4dSjtfwoJy5pIN2Ezts84psL96cUcjAl52Zhyv97t1GEqgMstzyhsRiiALSWi49YXFIoKf4QPfrne3SbzIlPwvjlqfgpz2F7k%2BoQh3DXFEcuHiQr3oFz3aI6Y8%2FsQP6qK7QqlEuJ%2BZn%2FIx8xtDDtxtfJBjqkASdrLlW416oF06u7L1LFOn8JFnHGZvKVP0zDU%2BlZvPS0iuNF5IZvlhZxFW8%2FtiLxgJCeJVo1m7DLto24i8id87mGg43RXvuV3i9rq%2BqZrMzW7m%2Bro4OWC8Jbwe8IaQe4rKuQPqU1ZP%2BfRjwxgpA0G8h5IAxqVQMs%2BzZ7ecYUqo38HcYBnXaHxOvXGe6TI778uv2j3%2B7cy9g2XtKDNAcWuBzGutl0&X-Amz-Signature=7e1b7b524d7899675a98f87cf00bd1c48afc253752fef06adc51d1caa982b90e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXII3YWJ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt9UTb1pj4KNKHdhv5SxcwmthBkvD8KrSEY02DnY%2BkqAIhAPEVFtV6hJlPIn%2BkCx3LuX4yLduuwLFdvhlCz%2FkIdDm7KogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyleWObrhczQC%2FyqWoq3AMNpbTBnwFMUCRBcxFu2udQr3incD7XvIKHzw%2FI5nlZvwL5Kks9Sy1hox%2FWGITyMS9aUdDntjduc6ppsePPYUQFx2Nk4aFZM4Ti9JMrKi2zI3FzvRz7yMc%2FFLsdVhv0P9bt20S%2FJRvPE5vIpp5q5Lp7aR7te10P%2Bc6bh2Svs5fxR8yXm%2FJdXuJzuoxLzqOlZmXKGo8Ij3FJ9H%2BU%2Fit8ZENty5HIOuczVvd0MEBEGmSx91QVfAWVCqbzLz7%2B1ucDi5AwNBae4geWUQGuqoNwWGeHywxJ6ALLGeCnnGl6vpsONxsEbV%2B0BgvpyDkZCJb1%2B3y%2F%2BgkNfA1TI%2BoViYZR3RvUMnYHFWqRZzxXWQK0f48a1jigdX%2FREcfBSPoLyhcWpqWilZyRljBrpNx4PuFa9hoXG24sGIlaxhMQEk5x%2FEHbv%2BEJodyMOHtoJCCmBOJmXr4Q8WZC8RJK2U5Ntst60xo737r3UlEUGdzlHK6kqqiv4dSjtfwoJy5pIN2Ezts84psL96cUcjAl52Zhyv97t1GEqgMstzyhsRiiALSWi49YXFIoKf4QPfrne3SbzIlPwvjlqfgpz2F7k%2BoQh3DXFEcuHiQr3oFz3aI6Y8%2FsQP6qK7QqlEuJ%2BZn%2FIx8xtDDtxtfJBjqkASdrLlW416oF06u7L1LFOn8JFnHGZvKVP0zDU%2BlZvPS0iuNF5IZvlhZxFW8%2FtiLxgJCeJVo1m7DLto24i8id87mGg43RXvuV3i9rq%2BqZrMzW7m%2Bro4OWC8Jbwe8IaQe4rKuQPqU1ZP%2BfRjwxgpA0G8h5IAxqVQMs%2BzZ7ecYUqo38HcYBnXaHxOvXGe6TI778uv2j3%2B7cy9g2XtKDNAcWuBzGutl0&X-Amz-Signature=ed269c76f47e532828c8df1094bd77e4feb056d19c4b98afcf844d170f83ed4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

