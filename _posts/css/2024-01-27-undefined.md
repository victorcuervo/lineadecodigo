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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632IWGB3G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T073449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDdB9tpUXo5IABu3u4DSmJpEjAZgnARocBBbSwQtyNoygIhAJTIlfHnfucSel9dGIBOITl%2FZEBkySojE4iFvQvp9wl3Kv8DCCgQABoMNjM3NDIzMTgzODA1IgyuOsWX5%2FWnh3uY3Pgq3AMLYFghXA3s6IoW7urfu45%2BvtS%2FJ6W1PXrTArhivDc0etL2cgzF27KAVrqPgHeyAhMAIg7D7OYLD8AD0YlskSxPef9dDmhdWDxiXZyJkq0F6Mh8UoYSxhp9m%2FZOEJXGP1Y4yzmMHYyyTcxb%2F7fENL%2B%2Bm11mOo8De3HbyeTamc6xFX57Z9oMhAb7t7WT%2BD2CSlSORHPcft8X7OjCbkbBRcQLoVbiBI5LqLG%2FTR%2BL%2BRIIh1ge1fh9891aMtIUKiKQcq%2FvRHuF36VZRz6fauA3X5nVHK78j%2BovA8I%2F6BlTsM4y0nX0T7NJgMtiL%2FSM%2BaOKF5IYsHi13TUab7BvHFcJLncXGwHV5jXeu6ioSZiJizWsVp3yuX6ppWFbs9IJCjl7pAbUSmLEfCPtwyYfb1joOyHX7DR%2BcPrYRfR6nmcREd9CULNeJ5OdOPMTvIuppcRH1WgjscGji634grp2bg8HtmywUz7aos%2BVKo1hDUWy55QVxPeIqug4aoPFfjdbqhKa31u9X90uE7ips3EO7%2FqQGwUClFYlZ2j%2B%2Bah7wQZoVrcEf%2FzqxFg4mPInOe0gK7k76zc9rS%2FLyAWIxMixmuXUZsomIN%2F7EIu6dKagvRzQgjvP3ASWR%2F3jkUUkdTAdsjDGub%2FJBjqkAWpWvl%2F642REU2urDByLOOB0FcpmGxz%2FtToy%2B%2BntMX0XodVbKhgge3wfJPIfyoH8NgMRnUmwd0vVRBUYmC%2BGF7Wn1o7yByCQM6X9sHo9Kj4%2BE%2BswOc%2BZRg75tC%2FMx0OaZr%2Ba%2FJxIaJZm1BPBbA4F8LKgX4ZjTxygkoonZiuoxlmpJ%2BkxBnNUwyeGv1TrVPx0a2JchQhuqL21%2BxeQKtJrhDzZeC%2BP&X-Amz-Signature=13c97c5d8b34e816683d5a9349bdc5b3eb05752e4c3a6028d26ff386466b073e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632IWGB3G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T073449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDdB9tpUXo5IABu3u4DSmJpEjAZgnARocBBbSwQtyNoygIhAJTIlfHnfucSel9dGIBOITl%2FZEBkySojE4iFvQvp9wl3Kv8DCCgQABoMNjM3NDIzMTgzODA1IgyuOsWX5%2FWnh3uY3Pgq3AMLYFghXA3s6IoW7urfu45%2BvtS%2FJ6W1PXrTArhivDc0etL2cgzF27KAVrqPgHeyAhMAIg7D7OYLD8AD0YlskSxPef9dDmhdWDxiXZyJkq0F6Mh8UoYSxhp9m%2FZOEJXGP1Y4yzmMHYyyTcxb%2F7fENL%2B%2Bm11mOo8De3HbyeTamc6xFX57Z9oMhAb7t7WT%2BD2CSlSORHPcft8X7OjCbkbBRcQLoVbiBI5LqLG%2FTR%2BL%2BRIIh1ge1fh9891aMtIUKiKQcq%2FvRHuF36VZRz6fauA3X5nVHK78j%2BovA8I%2F6BlTsM4y0nX0T7NJgMtiL%2FSM%2BaOKF5IYsHi13TUab7BvHFcJLncXGwHV5jXeu6ioSZiJizWsVp3yuX6ppWFbs9IJCjl7pAbUSmLEfCPtwyYfb1joOyHX7DR%2BcPrYRfR6nmcREd9CULNeJ5OdOPMTvIuppcRH1WgjscGji634grp2bg8HtmywUz7aos%2BVKo1hDUWy55QVxPeIqug4aoPFfjdbqhKa31u9X90uE7ips3EO7%2FqQGwUClFYlZ2j%2B%2Bah7wQZoVrcEf%2FzqxFg4mPInOe0gK7k76zc9rS%2FLyAWIxMixmuXUZsomIN%2F7EIu6dKagvRzQgjvP3ASWR%2F3jkUUkdTAdsjDGub%2FJBjqkAWpWvl%2F642REU2urDByLOOB0FcpmGxz%2FtToy%2B%2BntMX0XodVbKhgge3wfJPIfyoH8NgMRnUmwd0vVRBUYmC%2BGF7Wn1o7yByCQM6X9sHo9Kj4%2BE%2BswOc%2BZRg75tC%2FMx0OaZr%2Ba%2FJxIaJZm1BPBbA4F8LKgX4ZjTxygkoonZiuoxlmpJ%2BkxBnNUwyeGv1TrVPx0a2JchQhuqL21%2BxeQKtJrhDzZeC%2BP&X-Amz-Signature=3c92da2ab0bdc2340236b38210dc26e0b4a59b4b94ce674fadefce8e8482fffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

