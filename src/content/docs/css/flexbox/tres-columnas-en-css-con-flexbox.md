---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVYO5YEU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJSkwYk%2BxSLbLwsJ8CtYMJ%2BiF4NlNGD1a%2FnRjcvYl73gIhAJQDRuzuN7gmcrR8D8Bvz%2FELY63ZajwJFpOYXXf%2FTN3BKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR4ARYPfr3dQF531Yq3AMgxdRVmN3Pq%2BGe1Bm0b6wKIgeTq555HZwOjtplVfw3XQz3lK7sujW085ehv42KvP6MW1dn3MQrbBVjZI%2BQwhksIpzZHwTNjE42k0h9xqjJflzE4oeo2t%2B8oxJNCfvN24gNv6Wkc4ODBvw7YkLpGa5XLO%2BWvBbw3hNgs1NkeBoE6RT7QWjWVgHJR9kvw5lRc4kbswbBf5wrJFCHHfC6zh%2BxwEyado9zP13ZWgktV%2FOb5D57HL4qUWxNfAi9XefwdqJWM9TLlt0AMGTpRIG4vJkcYODFNGeCuuxUSspPt0UPF1gdf7vOvQvb%2FCSRUNGn3JzGKG9kg%2FzT46W8sqScmS%2B92nFQyMT9Uv9xG9Lplx0g0ArGfsF4LQurPg66uuM3hTy9qEqu2UoVE%2Fnn1QpNGgIA3NQOyWHbQeZMv1jrz9RgmVJsqdhXtgaQxuk%2BurgnnAZC%2F%2BPd%2Bv8xpEHzhoD7u1n63n%2BYcbTEjibsz0x10DcoMkpjFJfD0%2BXqcRwUqmtfOO9yZD9dMx9CUb%2FHv4av9qb3Juu0ID7%2BAoSaznMh%2BCQlci3mCj0UuRv2WidPtcOjBja8o%2B1PMpaUpHrPVZdIS5PK%2FPm7BJyEATLOPYUPq9m8Kp8z31vtw694VrlUiDDE%2FdLJBjqkAW0wG2ndnA3MRWHHc2cuK7CpkiUvkxpgw8bDokeIMmHNSMS8vMz8ATHgOZ%2F5l2Yl9v1yPQpoWSmxy%2B3w8awRJbstYK37Z7L9LYZabhdcQRGioSVwQhrj%2FLSBTOw2SDDZfNLjBxAB9G%2BcJDLmpr%2BZK%2BzuHbiMvjFuZbf6roD9YIn0ZB1HyGMTAB0V57xb88exKMILKqjMX6OZGENy2R2rNR1NEaUD&X-Amz-Signature=3c25465553eba9888f0b38bb4571d1073208b5875817d202e11b47910e8e56ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVYO5YEU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJSkwYk%2BxSLbLwsJ8CtYMJ%2BiF4NlNGD1a%2FnRjcvYl73gIhAJQDRuzuN7gmcrR8D8Bvz%2FELY63ZajwJFpOYXXf%2FTN3BKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxR4ARYPfr3dQF531Yq3AMgxdRVmN3Pq%2BGe1Bm0b6wKIgeTq555HZwOjtplVfw3XQz3lK7sujW085ehv42KvP6MW1dn3MQrbBVjZI%2BQwhksIpzZHwTNjE42k0h9xqjJflzE4oeo2t%2B8oxJNCfvN24gNv6Wkc4ODBvw7YkLpGa5XLO%2BWvBbw3hNgs1NkeBoE6RT7QWjWVgHJR9kvw5lRc4kbswbBf5wrJFCHHfC6zh%2BxwEyado9zP13ZWgktV%2FOb5D57HL4qUWxNfAi9XefwdqJWM9TLlt0AMGTpRIG4vJkcYODFNGeCuuxUSspPt0UPF1gdf7vOvQvb%2FCSRUNGn3JzGKG9kg%2FzT46W8sqScmS%2B92nFQyMT9Uv9xG9Lplx0g0ArGfsF4LQurPg66uuM3hTy9qEqu2UoVE%2Fnn1QpNGgIA3NQOyWHbQeZMv1jrz9RgmVJsqdhXtgaQxuk%2BurgnnAZC%2F%2BPd%2Bv8xpEHzhoD7u1n63n%2BYcbTEjibsz0x10DcoMkpjFJfD0%2BXqcRwUqmtfOO9yZD9dMx9CUb%2FHv4av9qb3Juu0ID7%2BAoSaznMh%2BCQlci3mCj0UuRv2WidPtcOjBja8o%2B1PMpaUpHrPVZdIS5PK%2FPm7BJyEATLOPYUPq9m8Kp8z31vtw694VrlUiDDE%2FdLJBjqkAW0wG2ndnA3MRWHHc2cuK7CpkiUvkxpgw8bDokeIMmHNSMS8vMz8ATHgOZ%2F5l2Yl9v1yPQpoWSmxy%2B3w8awRJbstYK37Z7L9LYZabhdcQRGioSVwQhrj%2FLSBTOw2SDDZfNLjBxAB9G%2BcJDLmpr%2BZK%2BzuHbiMvjFuZbf6roD9YIn0ZB1HyGMTAB0V57xb88exKMILKqjMX6OZGENy2R2rNR1NEaUD&X-Amz-Signature=29668c4d5c007d94111718a85d84da3604bf26d89e8b1b43966558aa1c0bc3d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

