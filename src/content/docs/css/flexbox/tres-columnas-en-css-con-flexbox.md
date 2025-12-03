---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCMKZ5B%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDqkKPwn8DJ7MZy8MZcGcnLC8z22mg9JI6hYsqLIodr9wIhAPB%2Bx98U67bX0EVcnaJinU%2FwF%2Bb9C3FUsobgvJDZni6NKv8DCDgQABoMNjM3NDIzMTgzODA1IgwW5UIKVy0LwqjIVccq3APb7ObV%2BNWvrzYGHwOZYOot8DfmA%2BwBCAxpxTq5o2jqqqdAG3K1aXTPHO0d1uOmGA5%2BpexWBmTtrsrG3oV%2FOPnvoSqZLtM%2Fjgi5zD8JOKVix3Dar27ERG1UASH9%2B6gmPV%2BuFcy8S1LjtxxJNuEr4MC1Xr8Dys5ZKMUn95bNko3ckg12AyKP8PMJv3zv8iWlVkWtXp8KD%2BMNGkGcXcVQBFkmCxNguqs6ZSvbYCIJrjMY8MnyWhgkRvu5eOfM5D38rehtup6%2FfJsz9FoupMbfdyVkRwh2JthK5gowIEL9g2eLZt0Q7%2BVC1hQ6SAdYnQBmFjUhY7Sozz0Lx3D2xm8eImu3h2Z2Tz0Wx%2BhIn6VkPMoB3EGoXFQyZ8OJ%2FUphEbi3LJiN5USDm1iUPMsYrfI4SGiwnUuJLSOJ8lYsWtUn03yHX6k2hA48sf8Muo4Zj1tCxq7L6CXPzASAHVQQdik1b1O7AomNKhH%2F%2FYNT4wgX1mkyCeUgJ4A%2BFlDKKimgGQ%2BvnCRKCkf71HYa8aYpsmP2hgg8QDQL%2BXm1T0PUt2AiUgCi9QjowXsOB3HX5nwRCfqY8i0jhxyWLNsHMvNDLiJUh%2FDqKcAIFiwv5Lf1CAkyP0q3kTIkMQYuZAqsJn8MWjDX98LJBjqkAWQ14IP4Nh%2BHyB67ghPKpntqI%2F3wkl7rfs2HkXLvBeAl%2FUY1DMrO%2B82EKOm9lZrbn04ntECbdfPrRPvwrwqQqNKoHCU8Q63KAQX%2Bf7I4wbYfpDS%2F0Ix%2FGcsDF%2FFf72TC9Ku9M6Cu2x53dlzbkish%2F1GiG6C%2BdBsvv7BB3LKCSUNAv3xU%2B7PvgmgKHOSeC4K1QeorMQVM6AplTHHUMr9NkJZIdA8J&X-Amz-Signature=87778bfb946efc4b83224b89721a2924958cddcf3252eed1eb222caafd1bfb64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PCMKZ5B%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDqkKPwn8DJ7MZy8MZcGcnLC8z22mg9JI6hYsqLIodr9wIhAPB%2Bx98U67bX0EVcnaJinU%2FwF%2Bb9C3FUsobgvJDZni6NKv8DCDgQABoMNjM3NDIzMTgzODA1IgwW5UIKVy0LwqjIVccq3APb7ObV%2BNWvrzYGHwOZYOot8DfmA%2BwBCAxpxTq5o2jqqqdAG3K1aXTPHO0d1uOmGA5%2BpexWBmTtrsrG3oV%2FOPnvoSqZLtM%2Fjgi5zD8JOKVix3Dar27ERG1UASH9%2B6gmPV%2BuFcy8S1LjtxxJNuEr4MC1Xr8Dys5ZKMUn95bNko3ckg12AyKP8PMJv3zv8iWlVkWtXp8KD%2BMNGkGcXcVQBFkmCxNguqs6ZSvbYCIJrjMY8MnyWhgkRvu5eOfM5D38rehtup6%2FfJsz9FoupMbfdyVkRwh2JthK5gowIEL9g2eLZt0Q7%2BVC1hQ6SAdYnQBmFjUhY7Sozz0Lx3D2xm8eImu3h2Z2Tz0Wx%2BhIn6VkPMoB3EGoXFQyZ8OJ%2FUphEbi3LJiN5USDm1iUPMsYrfI4SGiwnUuJLSOJ8lYsWtUn03yHX6k2hA48sf8Muo4Zj1tCxq7L6CXPzASAHVQQdik1b1O7AomNKhH%2F%2FYNT4wgX1mkyCeUgJ4A%2BFlDKKimgGQ%2BvnCRKCkf71HYa8aYpsmP2hgg8QDQL%2BXm1T0PUt2AiUgCi9QjowXsOB3HX5nwRCfqY8i0jhxyWLNsHMvNDLiJUh%2FDqKcAIFiwv5Lf1CAkyP0q3kTIkMQYuZAqsJn8MWjDX98LJBjqkAWQ14IP4Nh%2BHyB67ghPKpntqI%2F3wkl7rfs2HkXLvBeAl%2FUY1DMrO%2B82EKOm9lZrbn04ntECbdfPrRPvwrwqQqNKoHCU8Q63KAQX%2Bf7I4wbYfpDS%2F0Ix%2FGcsDF%2FFf72TC9Ku9M6Cu2x53dlzbkish%2F1GiG6C%2BdBsvv7BB3LKCSUNAv3xU%2B7PvgmgKHOSeC4K1QeorMQVM6AplTHHUMr9NkJZIdA8J&X-Amz-Signature=14d6b8d0e1bbb998abd3ece1ca2925df5c70660e0fefedd620a7ec6ac93ea388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

