---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCATMETU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtHBfEzQ3aN3to%2F42d3k4uWIQhI1OUxrY01h08EjzkdAiB8HuIvnrwqgQ%2BEV8k%2FLCCWyWMvBMMIanrFZNCRdLYtAyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM9WGFdcqxgrefaRPbKtwDB01g6z6A1cMxWjyzGDFGBjX6Mc7luaJ37784VVuD18Z0rKScvO9cc6oJMLSHHAquzskE1xmHKzBy3lUaFflpLk4H1ZgmRW8HM1aTOBYOGc0xf%2B%2F3pG3KaMUJjEbmzxZZlrAPICbMtb13Ayg2RnONpYeBplE9GBTBCEkbbQvl3pNZ31klFHMFcHwgEPkwbU%2FrCoV%2BEDCukZ2lVHl6bj9ZRdCPpvXiTOcULcKZbOKPS3DlFXT%2F9%2FyC5rHqQECIoCg9XJuwD78XtcWY%2BzV3LezJYt9V2e%2BukzGy2a%2B1zGHpRW6zIBLSsU9Bj4eIAJx3PL65d5uyujTRmfEcrtqkU%2B5TzzBCzosUSqc3K5o74Cncxd2beVK3W3as0SVA7Jqmq6PZfhzAACTwyJqjAeWOklRSbd93ThvnW5X%2F%2Fz0xYjTHLBIEL%2F9sNC0n2xR2M4zAIQEAVUUN7sk6QhbZR5%2BHiJj5uX%2Blj68ysBqtK%2BDzFNJqQp2BGVbkQ%2Bp6TASfZ5f%2BXfgIGr6%2BsMLLfZJgfS8V0kjSSFW366QRBnk%2FnWpVL%2BivUVsOngdBTlSKXm%2FSlFr26rSgmK4vC7x7fKLXpPfNny%2BlrXrDYtGT5YR1rFF9JWILhbYAo2y7Fl8cEpGdHkwwpqbQyQY6pgEh%2Bk8nrVHlGPL3HXnyQLigPn1HGRkCnb6ZFSwTx7aQZdvnjH6N5APRaSjE566N5zTnMAY9tKC0SN7r%2Fxl8hirt4qDLRKmWj%2F%2FdDirLO4iDV5k1yJfB1TGrr08tuKCghyte5q2%2FP8kcJuRBbs7AWUHHgdJuWcDLZAja%2Fx1pl%2BVDzTRmvhrNj%2BSw%2F3xFUzJQE31mvzRu672PFzKMp%2FC7KgbYUi2BP%2FXj&X-Amz-Signature=e1326de3d889d849d5d6ae23687e6f529aecae217f7d70b0b71cdf1eca26105f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCATMETU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDtHBfEzQ3aN3to%2F42d3k4uWIQhI1OUxrY01h08EjzkdAiB8HuIvnrwqgQ%2BEV8k%2FLCCWyWMvBMMIanrFZNCRdLYtAyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM9WGFdcqxgrefaRPbKtwDB01g6z6A1cMxWjyzGDFGBjX6Mc7luaJ37784VVuD18Z0rKScvO9cc6oJMLSHHAquzskE1xmHKzBy3lUaFflpLk4H1ZgmRW8HM1aTOBYOGc0xf%2B%2F3pG3KaMUJjEbmzxZZlrAPICbMtb13Ayg2RnONpYeBplE9GBTBCEkbbQvl3pNZ31klFHMFcHwgEPkwbU%2FrCoV%2BEDCukZ2lVHl6bj9ZRdCPpvXiTOcULcKZbOKPS3DlFXT%2F9%2FyC5rHqQECIoCg9XJuwD78XtcWY%2BzV3LezJYt9V2e%2BukzGy2a%2B1zGHpRW6zIBLSsU9Bj4eIAJx3PL65d5uyujTRmfEcrtqkU%2B5TzzBCzosUSqc3K5o74Cncxd2beVK3W3as0SVA7Jqmq6PZfhzAACTwyJqjAeWOklRSbd93ThvnW5X%2F%2Fz0xYjTHLBIEL%2F9sNC0n2xR2M4zAIQEAVUUN7sk6QhbZR5%2BHiJj5uX%2Blj68ysBqtK%2BDzFNJqQp2BGVbkQ%2Bp6TASfZ5f%2BXfgIGr6%2BsMLLfZJgfS8V0kjSSFW366QRBnk%2FnWpVL%2BivUVsOngdBTlSKXm%2FSlFr26rSgmK4vC7x7fKLXpPfNny%2BlrXrDYtGT5YR1rFF9JWILhbYAo2y7Fl8cEpGdHkwwpqbQyQY6pgEh%2Bk8nrVHlGPL3HXnyQLigPn1HGRkCnb6ZFSwTx7aQZdvnjH6N5APRaSjE566N5zTnMAY9tKC0SN7r%2Fxl8hirt4qDLRKmWj%2F%2FdDirLO4iDV5k1yJfB1TGrr08tuKCghyte5q2%2FP8kcJuRBbs7AWUHHgdJuWcDLZAja%2Fx1pl%2BVDzTRmvhrNj%2BSw%2F3xFUzJQE31mvzRu672PFzKMp%2FC7KgbYUi2BP%2FXj&X-Amz-Signature=6282ed42f4620b1c427fa3cf6bc9399a9febf258f066881e32f905fe05bb4218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

