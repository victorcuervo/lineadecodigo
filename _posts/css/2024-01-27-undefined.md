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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRRPI46C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBWnvDAWij3xFLnSs1GKuOfIKS%2BcY%2Bb9cnStGJZnZhP3AiAB36mfEdXbKe2WYjBrH3Am0RxtVuXX0RzDUFLCIhQaDyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMSEhfMLc4RSYR4Y95KtwDyW3z5XDRii9JNqD2E2P%2FGHeF9vMFomB3FhwnK5zPc9f50yvV8q3yG2hmQXhIm10eArhRQjcln%2F5AHnzSjGGgItY%2F0nUTn5OZVGwhfgQOReRyJdlOXQvsXtFhfdAJQeKJfzQ9FqDqnelWlmCynhojtcv7ZNnVk4MXzS1wN4IxPthTb9oiKADACGFl2%2FdC11F%2BbF3KaGROqVhw7VAFjLIZ0Saf47iNzd%2B3gKgU8DcFVdQGth3ksHkqIBZ%2BYK6sbxv1zjI0lxL6nxnUGEileVszO%2B7IafCXT0S3YGw8x8paVOBZOEv2mtzMY90KDWuYBbFrnTpUaAncukKJ0yUmQwZ7%2BoVWsGDPz2nYFnctekPa7GjOmLyYrDwKc%2BPF2ICd6H9MgMFhBmA4M8lNIZpjQNODAKGLh2X%2FaBPTujnSV54VMSjHzQ9Tq%2FCSIbmuxk4QcsxnpqwXGCqVQ%2BC9lPfQZ%2BZhw0kGQYZpUQlLa3BwbYTyY71a0rYtztvRIW44%2FFXE9423dB8a24uWiRPmT%2BQogRIBh%2FjmmKl9bhmbRDZqn27HaxUXI%2FHo%2B%2BDi2jtQ2Tqk59Ww5ruWb1ZW4aithsWAU3O9uqCM6axZ4VVZO%2BmyapGsOByF%2FYNST%2BlLtY3UFdAwipu%2FyQY6pgHKYcSon0Cj56GQLaI8jhb0ulu9puT1yHz59upqiZVWG5%2BwdNvHFKUZ5TdNtwaYVrjMXQLX4IIkRp7wvCmydMRvN74%2F0t4P0lxkVdCGLit7LxS3XNrqL6dG9iRnudDcvvjXztBX3v5pfG6tU7%2FSzgMXqeaSVfucIpyF5CjkHKmsZopbPZ8n0eSBHBFSEiy9vZ%2FxBnmgJb6iOYOS2HdZRjxtWIESwVws&X-Amz-Signature=6126c744a7307cf04c43fb59de97c061fe908eb4aae59577d65d4174cf038271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRRPI46C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T063740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIBWnvDAWij3xFLnSs1GKuOfIKS%2BcY%2Bb9cnStGJZnZhP3AiAB36mfEdXbKe2WYjBrH3Am0RxtVuXX0RzDUFLCIhQaDyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMSEhfMLc4RSYR4Y95KtwDyW3z5XDRii9JNqD2E2P%2FGHeF9vMFomB3FhwnK5zPc9f50yvV8q3yG2hmQXhIm10eArhRQjcln%2F5AHnzSjGGgItY%2F0nUTn5OZVGwhfgQOReRyJdlOXQvsXtFhfdAJQeKJfzQ9FqDqnelWlmCynhojtcv7ZNnVk4MXzS1wN4IxPthTb9oiKADACGFl2%2FdC11F%2BbF3KaGROqVhw7VAFjLIZ0Saf47iNzd%2B3gKgU8DcFVdQGth3ksHkqIBZ%2BYK6sbxv1zjI0lxL6nxnUGEileVszO%2B7IafCXT0S3YGw8x8paVOBZOEv2mtzMY90KDWuYBbFrnTpUaAncukKJ0yUmQwZ7%2BoVWsGDPz2nYFnctekPa7GjOmLyYrDwKc%2BPF2ICd6H9MgMFhBmA4M8lNIZpjQNODAKGLh2X%2FaBPTujnSV54VMSjHzQ9Tq%2FCSIbmuxk4QcsxnpqwXGCqVQ%2BC9lPfQZ%2BZhw0kGQYZpUQlLa3BwbYTyY71a0rYtztvRIW44%2FFXE9423dB8a24uWiRPmT%2BQogRIBh%2FjmmKl9bhmbRDZqn27HaxUXI%2FHo%2B%2BDi2jtQ2Tqk59Ww5ruWb1ZW4aithsWAU3O9uqCM6axZ4VVZO%2BmyapGsOByF%2FYNST%2BlLtY3UFdAwipu%2FyQY6pgHKYcSon0Cj56GQLaI8jhb0ulu9puT1yHz59upqiZVWG5%2BwdNvHFKUZ5TdNtwaYVrjMXQLX4IIkRp7wvCmydMRvN74%2F0t4P0lxkVdCGLit7LxS3XNrqL6dG9iRnudDcvvjXztBX3v5pfG6tU7%2FSzgMXqeaSVfucIpyF5CjkHKmsZopbPZ8n0eSBHBFSEiy9vZ%2FxBnmgJb6iOYOS2HdZRjxtWIESwVws&X-Amz-Signature=4e3f2dca4d82eab147e0573a13b293ada07ef6b39c545a8de556c1484ccc4252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

