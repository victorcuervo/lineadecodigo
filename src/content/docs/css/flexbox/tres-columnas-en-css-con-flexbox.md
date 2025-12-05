---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKMQGVBA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FHqToAwYKmNrvbpkEubsHoZ3iRitZ%2BYAwDpyfDStUeAiBYtbC0gN4DG%2FSgwI4EqLrT4OJKvDBuzKQHsAIn%2BfwfcSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMU7O7pMmAupu9d%2Ft6KtwDnNQrvpHNW4W1SSubFXUYiNgLzY%2FLZA3eqFrdWxZNGDnBsoCHvP6sw5CSqmKUi50EWYquQjx0GiICxUF2RoYaJjdLJFCbpfdP1Nc4RUZx5sLngT%2B6Uf3oWhALdv4QtSu4buFdiCSSzUSxBzxC%2BVwJK5XxbhAcBMJYpN3AsORBmgrSArGi6jyvCq051qzfrnhfwIFZg9m0ykbI7SckKsWdVh11VzIJhuHs%2BvXzj%2BUUvCPPUyNmNPpbI2a1E4DsOEPuqzU0Peu9LhAUU%2BG3kaWbqRWa0y6C68rPoyNV%2FCfSDN3tUQSojzqCNGX7nmgi1yx%2B3sdT4oV1kzWmGfWZ%2F0VHzAKhKXic7qQcQcLGUZH1mrJ205kQBjUbLY2Y%2BkWHxx3thlhxmhlD6Coi1WCiOEl8Txfjw%2ByQ3MfHohFbuWYfIgmhsp77YxCvCXSCKuBbgdj5P83wtJsMrsm5GezkenBBBY2BZcFpT401zg3Z0lYZpuLSiZrftYBZFvN8K9EVJK8YOtdDzydxzBkuueSPLs68R04S3omvzdxaqDAuFxR2LJsy0tRQcayd1nrsNE3F0c0QuwppqOba8o5xk4bSokLqawIfhIoHjdvNHpw1KYuwHA70WD4RH5MV6FYEpuMw%2BfTLyQY6pgEKCnp2NNmBNK57KoIxhcfZPLFDHlzTaL44Wr57pe0z0O9xtdx4BR1Frj3Rz1vMY7b0Qgtz8oRPPT4saDr4z7B5vzPRaeB70a2OQCn8jL0ByOWfOUdoAteHrp%2Fw9P1x7xJQhPk%2B%2FyJInJr2ib1a1uCgjeFlK6VkJu2Ra94aeFyczYIhXMUQr4e3taNGZ02PGACidi%2FaFcx3%2FyBIOqNK8Rx9lx%2BT3dAy&X-Amz-Signature=6a4ed732d7ee5c77f205388f41195f641f5901a6beb816f765296e0381353c09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKMQGVBA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FHqToAwYKmNrvbpkEubsHoZ3iRitZ%2BYAwDpyfDStUeAiBYtbC0gN4DG%2FSgwI4EqLrT4OJKvDBuzKQHsAIn%2BfwfcSr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMU7O7pMmAupu9d%2Ft6KtwDnNQrvpHNW4W1SSubFXUYiNgLzY%2FLZA3eqFrdWxZNGDnBsoCHvP6sw5CSqmKUi50EWYquQjx0GiICxUF2RoYaJjdLJFCbpfdP1Nc4RUZx5sLngT%2B6Uf3oWhALdv4QtSu4buFdiCSSzUSxBzxC%2BVwJK5XxbhAcBMJYpN3AsORBmgrSArGi6jyvCq051qzfrnhfwIFZg9m0ykbI7SckKsWdVh11VzIJhuHs%2BvXzj%2BUUvCPPUyNmNPpbI2a1E4DsOEPuqzU0Peu9LhAUU%2BG3kaWbqRWa0y6C68rPoyNV%2FCfSDN3tUQSojzqCNGX7nmgi1yx%2B3sdT4oV1kzWmGfWZ%2F0VHzAKhKXic7qQcQcLGUZH1mrJ205kQBjUbLY2Y%2BkWHxx3thlhxmhlD6Coi1WCiOEl8Txfjw%2ByQ3MfHohFbuWYfIgmhsp77YxCvCXSCKuBbgdj5P83wtJsMrsm5GezkenBBBY2BZcFpT401zg3Z0lYZpuLSiZrftYBZFvN8K9EVJK8YOtdDzydxzBkuueSPLs68R04S3omvzdxaqDAuFxR2LJsy0tRQcayd1nrsNE3F0c0QuwppqOba8o5xk4bSokLqawIfhIoHjdvNHpw1KYuwHA70WD4RH5MV6FYEpuMw%2BfTLyQY6pgEKCnp2NNmBNK57KoIxhcfZPLFDHlzTaL44Wr57pe0z0O9xtdx4BR1Frj3Rz1vMY7b0Qgtz8oRPPT4saDr4z7B5vzPRaeB70a2OQCn8jL0ByOWfOUdoAteHrp%2Fw9P1x7xJQhPk%2B%2FyJInJr2ib1a1uCgjeFlK6VkJu2Ra94aeFyczYIhXMUQr4e3taNGZ02PGACidi%2FaFcx3%2FyBIOqNK8Rx9lx%2BT3dAy&X-Amz-Signature=73a3b44f47dffb81d950ed221b63eb67f1d02b5c9742361d81437cb6097a9f7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

