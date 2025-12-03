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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4SSNI6F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDZHldlI4RJ9DJtQ8pMePMh6%2BLCGYZ3N%2BLQuYVZvAOEWgIgOQ6V0wuMfekU246OmN4o9uoTaI58Gq3AdCt5f32CvcAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNxgHO2wSTh%2BkQxXSircAz3n1CMbkj160bpZzIUf3HnwujdSMgyKC1DyAGLMfIwmtC%2Bgcg%2F7K2BzWI25xkCo3ZzUZcMcJX0rEd0S39kh56jCUiQpDZc2hzF6TWLFFQh11NZsPMMXQZOcDy3if6Zme7HEr6mjmm8QPFfF6ZDncLTCa8Lx%2Bl3q7100zxI0OPNWJUSmSotorsFWWEblbJ%2BopF27YwwDgPohMw8GIrDQi8YrRcXv7rnXFx1QkhUoeP%2BW2MPjNmu2S1kCRl%2BCWxOXXFSJC%2BoQAAdpBfEKwK%2FKsSN%2Fb8zbnKjcy5IuuHzD24KTHNZ7MOBLzpIJ3RODmSe9Kmb45PfhKrfR8t4%2FzbllNbSlWEFPlcQ5KwhNegm3Zemcj6wZT7OO%2FLBPSCzhQ3CLHiBgYLBtBXr76XVsGHZLnA1W%2FISSt4DB%2FIVeohxuY9Tuukx%2FwQFXeIKiV0pYjPo8wFuALxesmDPw%2F4cl8YRIvn%2BjHkH7I3bhYZiEZ6xR%2Fdnb3DmLLwE5A7m%2FGw9T7QI5X5cWLmRUU4MFQroMBN4RD3R2cw3CUr9GKL3hznhvoMA3HAAGwcL36bu8K1FJFgX2%2FnsQCb8NkS7%2FLAFPM7Xr7erAxzxnCZDz4NaX0nQkal33yDJTZdQmvOpflr0JMNyTwMkGOqUBFjfW3e72X61n%2FAkE5bvHoFgoG6lJDuIoGJL%2BtvqdRMG6dVL5cSUZsxD1Emyo%2FycBpt%2B0mF3kmxdFszTdk9ElgyB7IOamLqGnCHwNANOn3J1XwxJdurpkaAT4Ke2J6zEsyzL4gzCqkQJxq7jfmkq8qLLqtYQbifjl2HiKoR2f5KrmyLRLE5omiW8PtNXA919BX5DuDYnJjyiMhYGV6hME0kZuOLfi&X-Amz-Signature=3ca1f58835b899a7d115250db2a226d99997478d5e81a19c3f480de70757bdb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4SSNI6F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDZHldlI4RJ9DJtQ8pMePMh6%2BLCGYZ3N%2BLQuYVZvAOEWgIgOQ6V0wuMfekU246OmN4o9uoTaI58Gq3AdCt5f32CvcAq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDNxgHO2wSTh%2BkQxXSircAz3n1CMbkj160bpZzIUf3HnwujdSMgyKC1DyAGLMfIwmtC%2Bgcg%2F7K2BzWI25xkCo3ZzUZcMcJX0rEd0S39kh56jCUiQpDZc2hzF6TWLFFQh11NZsPMMXQZOcDy3if6Zme7HEr6mjmm8QPFfF6ZDncLTCa8Lx%2Bl3q7100zxI0OPNWJUSmSotorsFWWEblbJ%2BopF27YwwDgPohMw8GIrDQi8YrRcXv7rnXFx1QkhUoeP%2BW2MPjNmu2S1kCRl%2BCWxOXXFSJC%2BoQAAdpBfEKwK%2FKsSN%2Fb8zbnKjcy5IuuHzD24KTHNZ7MOBLzpIJ3RODmSe9Kmb45PfhKrfR8t4%2FzbllNbSlWEFPlcQ5KwhNegm3Zemcj6wZT7OO%2FLBPSCzhQ3CLHiBgYLBtBXr76XVsGHZLnA1W%2FISSt4DB%2FIVeohxuY9Tuukx%2FwQFXeIKiV0pYjPo8wFuALxesmDPw%2F4cl8YRIvn%2BjHkH7I3bhYZiEZ6xR%2Fdnb3DmLLwE5A7m%2FGw9T7QI5X5cWLmRUU4MFQroMBN4RD3R2cw3CUr9GKL3hznhvoMA3HAAGwcL36bu8K1FJFgX2%2FnsQCb8NkS7%2FLAFPM7Xr7erAxzxnCZDz4NaX0nQkal33yDJTZdQmvOpflr0JMNyTwMkGOqUBFjfW3e72X61n%2FAkE5bvHoFgoG6lJDuIoGJL%2BtvqdRMG6dVL5cSUZsxD1Emyo%2FycBpt%2B0mF3kmxdFszTdk9ElgyB7IOamLqGnCHwNANOn3J1XwxJdurpkaAT4Ke2J6zEsyzL4gzCqkQJxq7jfmkq8qLLqtYQbifjl2HiKoR2f5KrmyLRLE5omiW8PtNXA919BX5DuDYnJjyiMhYGV6hME0kZuOLfi&X-Amz-Signature=f7676eb3863766c6bc21cc9e07f98a98dbee4f66a1b60917dd1f193aa354e4cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

