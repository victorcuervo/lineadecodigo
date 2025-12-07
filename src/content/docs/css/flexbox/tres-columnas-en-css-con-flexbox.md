---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4NIPI7X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKIC9UGoOjBo%2FmM7hDfTkW3stlXMtkK6uHARpxEFVXmQIgT5LDrOtAEez3tajaMC5Y69AnEyfJcBKsPsAlPPKSAWgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8IhFzmVy9AAkw8YyrcA%2F9zrNAe6mBN5k1GAimVw5DKL%2Fa27tZt%2F7wClF1ILvaHfhhy0%2BqpJwA%2BaxUDalL5HJKRc52G9kp2OHxRupgfhN3DigXRmhliEImTHAV2%2BTrpn%2BAgBXQERwLIWuBwtiiFU0rMlaHwkvbR5RHKeYJYXNph%2BagL3N88rjteg4i19ltyozQ8I3n7%2B5EKOgtW%2BCzwlBTmp0Fm84P3tkXNw8Dx56wCiSKDSYRlHGZwbEV6wYmyN0tC263ZQ%2Fs26Z1iP6G55RHXubvD8TGg8em3EiMofqz3PrjU93Ayq3BCi%2F6NA6zqdEGtEg9PMYx9gq2yTNLKA1%2FU8qnQe5wF3lJHgRaS0bSGlsvKTpAjEoQ5vgpsaG6kIBfhCkbWXOxtEviItkhr3YmtDQU3k81F7WfQe%2FdJEPi08rpPn77EO%2BNqwHThxhDK%2BTEY7vEZNee9WwlDAhP4Y04c4yc5xVwAZBEebzEr9WCwwHPQflMbpiyKVKZOxWV0zh%2BeMEzClRpY7qwKKstoraxVlt8iK8uhQ3bvwwj%2FXNhfUQ8%2FRrB0ETLKjslogdMrVN%2BuwlutV0Y8RWLIaTm%2BPzIpW4F%2Ff0%2FgAcjJvgsHhVdTA35tHxnuZbunyC36lJT58ygouo%2BwXeqfYifjMNHH18kGOqUB9lMyaa5iWp93hGhjtIL33qgeDJ4nJKeUZz6hs6Xcb8C84wfvd5Axjl4fZdtlv5AwvAlJEKDMC9EWCsUTv2yW%2FkjJQXrk%2FvIU0H%2FsIFnZT6opttl7tkWYguLZqlbDlQC1RBFgM1mXmK3ERPKPZ%2BZFuYXvjvV8ddpboDA65RtkJi8q35cCL0R6PEH8lloE7yi6RxYA54n7qmvpfoQ5gbqUv0dDSX5t&X-Amz-Signature=8cb97580463d61f0e5c53915994f48eefd9f5ee7c4a187ad7a230c1883e9440b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4NIPI7X%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T214842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKIC9UGoOjBo%2FmM7hDfTkW3stlXMtkK6uHARpxEFVXmQIgT5LDrOtAEez3tajaMC5Y69AnEyfJcBKsPsAlPPKSAWgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI8IhFzmVy9AAkw8YyrcA%2F9zrNAe6mBN5k1GAimVw5DKL%2Fa27tZt%2F7wClF1ILvaHfhhy0%2BqpJwA%2BaxUDalL5HJKRc52G9kp2OHxRupgfhN3DigXRmhliEImTHAV2%2BTrpn%2BAgBXQERwLIWuBwtiiFU0rMlaHwkvbR5RHKeYJYXNph%2BagL3N88rjteg4i19ltyozQ8I3n7%2B5EKOgtW%2BCzwlBTmp0Fm84P3tkXNw8Dx56wCiSKDSYRlHGZwbEV6wYmyN0tC263ZQ%2Fs26Z1iP6G55RHXubvD8TGg8em3EiMofqz3PrjU93Ayq3BCi%2F6NA6zqdEGtEg9PMYx9gq2yTNLKA1%2FU8qnQe5wF3lJHgRaS0bSGlsvKTpAjEoQ5vgpsaG6kIBfhCkbWXOxtEviItkhr3YmtDQU3k81F7WfQe%2FdJEPi08rpPn77EO%2BNqwHThxhDK%2BTEY7vEZNee9WwlDAhP4Y04c4yc5xVwAZBEebzEr9WCwwHPQflMbpiyKVKZOxWV0zh%2BeMEzClRpY7qwKKstoraxVlt8iK8uhQ3bvwwj%2FXNhfUQ8%2FRrB0ETLKjslogdMrVN%2BuwlutV0Y8RWLIaTm%2BPzIpW4F%2Ff0%2FgAcjJvgsHhVdTA35tHxnuZbunyC36lJT58ygouo%2BwXeqfYifjMNHH18kGOqUB9lMyaa5iWp93hGhjtIL33qgeDJ4nJKeUZz6hs6Xcb8C84wfvd5Axjl4fZdtlv5AwvAlJEKDMC9EWCsUTv2yW%2FkjJQXrk%2FvIU0H%2FsIFnZT6opttl7tkWYguLZqlbDlQC1RBFgM1mXmK3ERPKPZ%2BZFuYXvjvV8ddpboDA65RtkJi8q35cCL0R6PEH8lloE7yi6RxYA54n7qmvpfoQ5gbqUv0dDSX5t&X-Amz-Signature=c1ee35fa1f0465baf6f39c9605b330570f229e12eb7246420cb253aa904fb43b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

