---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTKZ3V6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK6jdE%2B3KSiKzW4C%2FkvHSPIQBUcgNUpyjSH2n9rh8l8wIhAOkF4ylHbFW13IPA4WhqkySs4jTNb6eB3lSGbN%2FIZEkcKv8DCGkQABoMNjM3NDIzMTgzODA1IgwepoxKZd7q8cDs6Dgq3AO6hfZjWH8J5ca8xTPjWJonMHYLGQClNoxiH4tayXVSce%2FZ2y8PaBYnSLDg25P5FpUlDwQQ1pseLWO539RUtGPjd4M4usJIYWseyspFVviAzIpsU%2BbBkdrG8QdQNKCwDOYHwDVtejbYZee8TPW922806I28NIpacuRPCYRYnAMqHk%2B3BgCMbM23LrmPwd%2BY%2BrZQFvOseswDyxXw0bHbs%2F8bY56ks5it3b%2FakrwdzpM5rEw3Jb5c1h88Q6NWp%2FOpwy3kKdvyH7QWO4TyGGvHAibxDzceHbdm%2F80hX6tn0cYvghl6%2Bd6H8Ylo9tFjLCbBMtUrq37seM0KaAGQ8XQpIWixijNiwk3SK4OhvcWdxqestb3mm%2BYy7sOzXwsBJUlWebBPlVX8jt4jtbZyzMB3gzlmG2IHHWVDF8iDV2qozZl9W%2BefzLc7FV5RnqqLIEaGRHTdIxI0cAQZ088u5LEDR8EHrlSDfxbOOMqBVQDLp%2F%2Fe%2F761%2FJzaW9xhtHBK84QiDXHFckpwBLTxyDGYXuuOSF7Gt6ziaTCUMp2W2MlDoyOxLo02QIoqrUjhgam5qPk0AgkY%2BlpgGRNeCK5oJ6UnMkp%2FF%2Fpx2qZvbPevUEkFMGddmBOAIldw%2FQAkcCqB5zDy6M3JBjqkAaAMlRe4%2FHRlnwwDEfgCbk1AAXprN8fbFFMKSh2et90QPs6MMsVj5KAk7i9jbzMQZL81pQF%2FnNk%2BD%2BkMhKyn%2FpDknKTCp8WRlwJVzTuEb0cPMZ%2BDUgwAdVzl9m84apMpYKL7hvc6Cwv%2F9S9xH%2FCPW2T8cBJOijgUa4KNJFnuuMUYXJu5ioAg9%2FmY%2FkUm46nmTOTOzLMWDrLYOwjmZeaTcDDjI%2BF4&X-Amz-Signature=a1b7a3c32f533f76eabe4397ada3eb1d49173f6c67e14efdbfc4edebcf57e18a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTKZ3V6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCK6jdE%2B3KSiKzW4C%2FkvHSPIQBUcgNUpyjSH2n9rh8l8wIhAOkF4ylHbFW13IPA4WhqkySs4jTNb6eB3lSGbN%2FIZEkcKv8DCGkQABoMNjM3NDIzMTgzODA1IgwepoxKZd7q8cDs6Dgq3AO6hfZjWH8J5ca8xTPjWJonMHYLGQClNoxiH4tayXVSce%2FZ2y8PaBYnSLDg25P5FpUlDwQQ1pseLWO539RUtGPjd4M4usJIYWseyspFVviAzIpsU%2BbBkdrG8QdQNKCwDOYHwDVtejbYZee8TPW922806I28NIpacuRPCYRYnAMqHk%2B3BgCMbM23LrmPwd%2BY%2BrZQFvOseswDyxXw0bHbs%2F8bY56ks5it3b%2FakrwdzpM5rEw3Jb5c1h88Q6NWp%2FOpwy3kKdvyH7QWO4TyGGvHAibxDzceHbdm%2F80hX6tn0cYvghl6%2Bd6H8Ylo9tFjLCbBMtUrq37seM0KaAGQ8XQpIWixijNiwk3SK4OhvcWdxqestb3mm%2BYy7sOzXwsBJUlWebBPlVX8jt4jtbZyzMB3gzlmG2IHHWVDF8iDV2qozZl9W%2BefzLc7FV5RnqqLIEaGRHTdIxI0cAQZ088u5LEDR8EHrlSDfxbOOMqBVQDLp%2F%2Fe%2F761%2FJzaW9xhtHBK84QiDXHFckpwBLTxyDGYXuuOSF7Gt6ziaTCUMp2W2MlDoyOxLo02QIoqrUjhgam5qPk0AgkY%2BlpgGRNeCK5oJ6UnMkp%2FF%2Fpx2qZvbPevUEkFMGddmBOAIldw%2FQAkcCqB5zDy6M3JBjqkAaAMlRe4%2FHRlnwwDEfgCbk1AAXprN8fbFFMKSh2et90QPs6MMsVj5KAk7i9jbzMQZL81pQF%2FnNk%2BD%2BkMhKyn%2FpDknKTCp8WRlwJVzTuEb0cPMZ%2BDUgwAdVzl9m84apMpYKL7hvc6Cwv%2F9S9xH%2FCPW2T8cBJOijgUa4KNJFnuuMUYXJu5ioAg9%2FmY%2FkUm46nmTOTOzLMWDrLYOwjmZeaTcDDjI%2BF4&X-Amz-Signature=50201d698b5cc6237e18453867a20193446fb32ed395e011c434104bb83f9c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

