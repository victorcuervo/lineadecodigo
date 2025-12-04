---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LU43BUD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCQ1lAowedobwFLp5CXyHt%2F2TbB1DYl2oGol5RWZ8lZbgIgWrsOkxnTVPEZKvHNFmOi%2FGlnTlfb8lwPuER6ucRHQ%2BQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDATFIMM4%2BjGDgPXu2SrcA2M%2B4kxzpoA6nIv1WCD8Zb6VACRGVyRRgqSbVxvjccG20HyiOYqyRjd9glHAheo2CuGcnFtMHVXBP5EMuwl4jgfvk9jFNM8DQpyRKZ8%2FVwr%2F36HXLyaP9hheIfoERCRY0%2FJVAv8idojod1F0z7vHcdFueGH8nNAe1556IDOVHmoP5UrsKCVu0TExAgU5BE3BqhvFC1Cqk3N6ADMpqZQoXOaFmMlnyi6JJtNRSC4S%2FxcRxPlbKIaOfyugCWJ6l%2Bp7YOmL0NYaGsGNYE5sd3GITjB6QCz4ETGWFlotDhHvRKDtYASo%2Bw3Nhw%2F%2FtoxjtNv0u08zJFKXiaRWLg150F4KDpJjFj7av0kzM%2BvkSBQEkMmpSwe%2FtT7sWbwHiRjgQsEH6QjwQNV0aPObCBKqpfFwq5mfu2XqWH1K1pH3JgbIwi3vfGdvhf7Z1VmxhKd5Sj0h3%2FipWR8Boj1%2BVnlCiNbwXM711f6HjY6Gs1yAj2EErG6wIVNkI6D%2BCTrGVfnHO%2FZ2xqu0uBKn2ze798k6x3APRO9f7QUSld32IBVHInJIXvLE6WvdHNBynr6oFqw673XqUw43sc12GouyER6wkzfTvStKubnoD6EXfmydalOWHUdoTi%2FoZFnjyUQlJED2MPvKxMkGOqUBj7mCnX22bF0WB%2Ff%2BbYYhyxn7DI7gleGD7f7fv4nVa55ff90o5eW0xkLq7QgWMLdf9aEspwVOF9t99b%2BBskxLfr3UtaU34AO9IMQvEOnoHvEC6qpyrDVazxwsjti1h0sIKm%2FcLUE2ZlM69D%2BFWs3inwIu4dWcbWK7GSoF6qIYE9Sh5iagPj1KaomYMVQadKrElNomT0YBMXQabyTHWgvEtTXgM1Mn&X-Amz-Signature=84b61075712ed274d3c33d18a6e9ba2b9efff33fae3cf68cb945cbd8394ffc8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LU43BUD%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCQ1lAowedobwFLp5CXyHt%2F2TbB1DYl2oGol5RWZ8lZbgIgWrsOkxnTVPEZKvHNFmOi%2FGlnTlfb8lwPuER6ucRHQ%2BQq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDATFIMM4%2BjGDgPXu2SrcA2M%2B4kxzpoA6nIv1WCD8Zb6VACRGVyRRgqSbVxvjccG20HyiOYqyRjd9glHAheo2CuGcnFtMHVXBP5EMuwl4jgfvk9jFNM8DQpyRKZ8%2FVwr%2F36HXLyaP9hheIfoERCRY0%2FJVAv8idojod1F0z7vHcdFueGH8nNAe1556IDOVHmoP5UrsKCVu0TExAgU5BE3BqhvFC1Cqk3N6ADMpqZQoXOaFmMlnyi6JJtNRSC4S%2FxcRxPlbKIaOfyugCWJ6l%2Bp7YOmL0NYaGsGNYE5sd3GITjB6QCz4ETGWFlotDhHvRKDtYASo%2Bw3Nhw%2F%2FtoxjtNv0u08zJFKXiaRWLg150F4KDpJjFj7av0kzM%2BvkSBQEkMmpSwe%2FtT7sWbwHiRjgQsEH6QjwQNV0aPObCBKqpfFwq5mfu2XqWH1K1pH3JgbIwi3vfGdvhf7Z1VmxhKd5Sj0h3%2FipWR8Boj1%2BVnlCiNbwXM711f6HjY6Gs1yAj2EErG6wIVNkI6D%2BCTrGVfnHO%2FZ2xqu0uBKn2ze798k6x3APRO9f7QUSld32IBVHInJIXvLE6WvdHNBynr6oFqw673XqUw43sc12GouyER6wkzfTvStKubnoD6EXfmydalOWHUdoTi%2FoZFnjyUQlJED2MPvKxMkGOqUBj7mCnX22bF0WB%2Ff%2BbYYhyxn7DI7gleGD7f7fv4nVa55ff90o5eW0xkLq7QgWMLdf9aEspwVOF9t99b%2BBskxLfr3UtaU34AO9IMQvEOnoHvEC6qpyrDVazxwsjti1h0sIKm%2FcLUE2ZlM69D%2BFWs3inwIu4dWcbWK7GSoF6qIYE9Sh5iagPj1KaomYMVQadKrElNomT0YBMXQabyTHWgvEtTXgM1Mn&X-Amz-Signature=403b377e5c5ac8a00931486b7cf48bcc478b9301ad0a664c203d6e62d845174c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

