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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7SSRUT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCyXLTS9vEJMDthMDkBqm9Y4FaHgPsi4j4fCsYIpUoAFAIgGdsYoypZXlSGaZG0tWCMZgdM31sycd1uqoMKWTUPr5Iq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDJe8dNu2aMEMjtAVyCrcA1duxf%2BRGyQxTKoE08s1hkgYYEOrfvtztyUaxWd5stK2DIGuwsuftq1lixU1WuNgO3EZ4UZDBuS5GaAQ5iOid%2B%2FoftEm5t%2BJBRmS3NhG8ukjOCZ1r1GGVfVxsrKuKlENdjZGWwm4H3rusNKJG%2BhqoD7JTKpGHuxWOk0WbvA%2Bc7cZ7e%2BuOg%2BPoFubfOT6QzO4%2BjcCiZYjSegmDxGD4NPbeehNhoQX8hS5Bl79h%2FsKcKjPc7Q94XhKj3fUbbIpJtZ5jPjjzWwHDi9ZAnXKNNfCtGERaVe0m6NA7WL17CoYPE5oPpbt8pkqj22FcFvWotjHi0Qljuw%2FHq%2FMfKan%2FTcauCyt35ZtoeuGbcrqXr7qjcI9hj3P4OcdRo7nkj4H64y%2BMkxanAmfHOzrQpTyZJJ2J59ToySn%2FBn7Oi6r0oTZKesDQNZC%2F9rijRXz%2BvA6Evh6ILyYIkeZC7bjeD7d1%2B7Mv2I8vIxOzT3gcirOQW17AMs7RNKBSJNgoiYzV74ZnfqoA4970UfGY6r3jz1HYY5rjpOoscs28E89%2BEH1leCHxKkWuQZp1V1QvLK57ppk9ONjgL2Doi22Sz5I1QaiEC%2FsLy4AyrAhQAVag9VoFn0EHZaMFr7PDSTdohWJmoSwMNWuwMkGOqUBPOhg8rUU%2FfVBGJGI8umgK30MUP%2Bm0J17u403950rr8PVhR%2BdMrNOKqGWTdH9%2Fellxwrqzv2EYKitGOmKZm7WOlXuPU8esKncbLBP%2BS%2BjO%2F8cwiAgTUvyLIdL0qiz0vta5Ymi87tRWAVm8DgsySQK1Q3LoWa%2BzuUwjN6wezDw0sSOSag%2BMj%2F%2BgnqG1NGYAnekFbO165KRT9ACk8SaAnwErrp%2BGig8&X-Amz-Signature=d248d6f3ceaf239158d929805f8d00e3c7277099a56152c3b4e5836997ce9615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B7SSRUT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCyXLTS9vEJMDthMDkBqm9Y4FaHgPsi4j4fCsYIpUoAFAIgGdsYoypZXlSGaZG0tWCMZgdM31sycd1uqoMKWTUPr5Iq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDJe8dNu2aMEMjtAVyCrcA1duxf%2BRGyQxTKoE08s1hkgYYEOrfvtztyUaxWd5stK2DIGuwsuftq1lixU1WuNgO3EZ4UZDBuS5GaAQ5iOid%2B%2FoftEm5t%2BJBRmS3NhG8ukjOCZ1r1GGVfVxsrKuKlENdjZGWwm4H3rusNKJG%2BhqoD7JTKpGHuxWOk0WbvA%2Bc7cZ7e%2BuOg%2BPoFubfOT6QzO4%2BjcCiZYjSegmDxGD4NPbeehNhoQX8hS5Bl79h%2FsKcKjPc7Q94XhKj3fUbbIpJtZ5jPjjzWwHDi9ZAnXKNNfCtGERaVe0m6NA7WL17CoYPE5oPpbt8pkqj22FcFvWotjHi0Qljuw%2FHq%2FMfKan%2FTcauCyt35ZtoeuGbcrqXr7qjcI9hj3P4OcdRo7nkj4H64y%2BMkxanAmfHOzrQpTyZJJ2J59ToySn%2FBn7Oi6r0oTZKesDQNZC%2F9rijRXz%2BvA6Evh6ILyYIkeZC7bjeD7d1%2B7Mv2I8vIxOzT3gcirOQW17AMs7RNKBSJNgoiYzV74ZnfqoA4970UfGY6r3jz1HYY5rjpOoscs28E89%2BEH1leCHxKkWuQZp1V1QvLK57ppk9ONjgL2Doi22Sz5I1QaiEC%2FsLy4AyrAhQAVag9VoFn0EHZaMFr7PDSTdohWJmoSwMNWuwMkGOqUBPOhg8rUU%2FfVBGJGI8umgK30MUP%2Bm0J17u403950rr8PVhR%2BdMrNOKqGWTdH9%2Fellxwrqzv2EYKitGOmKZm7WOlXuPU8esKncbLBP%2BS%2BjO%2F8cwiAgTUvyLIdL0qiz0vta5Ymi87tRWAVm8DgsySQK1Q3LoWa%2BzuUwjN6wezDw0sSOSag%2BMj%2F%2BgnqG1NGYAnekFbO165KRT9ACk8SaAnwErrp%2BGig8&X-Amz-Signature=37941ff1d19ca9adcdfa5b6c81376124199c5f61f678a5b880f541ff74cfd322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

