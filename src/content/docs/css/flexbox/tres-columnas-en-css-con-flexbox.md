---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK3OSTZ4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxNXMYRzAXImYCY%2BaWejq8cauO0t9884nAGi6sL49NvAiB2H2bv06W54kTh4T70wngL1RNXCWxYrnHAUPkLF69gXir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMRdtFHRDKe8fMm7A9KtwDocyFd4UBw7fJM1yNwp7ceqenN9N1LDdZh%2FZ4TyBcS3RqgA5hCTfsfhANbJDo6MnzsCBc5pqPERokf0z745IAKZrvRINJMh5RB8BFJS8PYfnOCj4dUHLED08qakvG0ZcpGI9O38w%2FROwPNVsgTAipL8V%2BJV%2BFnKPmowb5FqeG2LrF6HsCzX4MI1fzCAPYlgo16cTh%2B3qvHD%2FIMNRlUhAVfxVy7PuEpONXFnzbnGd5utjaY%2FVTo4P1PdUbdvUq84toliYjhg2QYYa5ZsYr5yzAAyO%2FXhHKID1%2BinkGiGN7ldEylAnhUnHkG8%2ByBK6u1ozCd8cL2Z1IZVP%2FcIZsyIG%2B9fpAZuKF%2FAOu2KFFiJXawFse7WQIjRWlqdYuTe6l90UtW1ZNerVIuVrg6%2FWYzY6Fn6kG6Yc60UAobkXi5VM9OVEM%2B3NnIks%2BN4CSRWuK%2B%2BcdXTVGyoL1UCn7FL%2F520caFpGwnk8r%2BKhmExoilxVtgHLtldqGu6dXN5WACMNHVAAd1VBqqPK0xMYK2GORcmu90sKOn854%2FSmv04tzjG0yTse0xqn93EsFeMIyaV0Q5%2Bl1xAnTnnh%2FxD4kKL9f5gYRDpNDLwRXCpq2B5vud6Uag7sGoGwf4KLqqRCBeNgw1rDJyQY6pgHKP4t%2BggxoutXqmQJx83v2yb0FqHUL%2BcM8Bki7mdlsx7f3MFgsmX4wDpzo6fmeztakLJa9cxY5UXOmlxwR40HMJcQZoZjiMhyiQjw4xfCX8IX1Pwetr5DfXSrwXrLQYCf0V8ZBrytyKgPfoiIUOaqNnAE6ZmIV6c%2FmqQuXQ6yro1zbTYDl2JKaFOPB%2FpvR0bZJ4Fi1EII%2FfVYmhZMjo3K%2FnBEUPU1f&X-Amz-Signature=481a54071404e5a25bc6f779896dec38e6c4960567f403e328149eacce9ab872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RK3OSTZ4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T084409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxNXMYRzAXImYCY%2BaWejq8cauO0t9884nAGi6sL49NvAiB2H2bv06W54kTh4T70wngL1RNXCWxYrnHAUPkLF69gXir%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMRdtFHRDKe8fMm7A9KtwDocyFd4UBw7fJM1yNwp7ceqenN9N1LDdZh%2FZ4TyBcS3RqgA5hCTfsfhANbJDo6MnzsCBc5pqPERokf0z745IAKZrvRINJMh5RB8BFJS8PYfnOCj4dUHLED08qakvG0ZcpGI9O38w%2FROwPNVsgTAipL8V%2BJV%2BFnKPmowb5FqeG2LrF6HsCzX4MI1fzCAPYlgo16cTh%2B3qvHD%2FIMNRlUhAVfxVy7PuEpONXFnzbnGd5utjaY%2FVTo4P1PdUbdvUq84toliYjhg2QYYa5ZsYr5yzAAyO%2FXhHKID1%2BinkGiGN7ldEylAnhUnHkG8%2ByBK6u1ozCd8cL2Z1IZVP%2FcIZsyIG%2B9fpAZuKF%2FAOu2KFFiJXawFse7WQIjRWlqdYuTe6l90UtW1ZNerVIuVrg6%2FWYzY6Fn6kG6Yc60UAobkXi5VM9OVEM%2B3NnIks%2BN4CSRWuK%2B%2BcdXTVGyoL1UCn7FL%2F520caFpGwnk8r%2BKhmExoilxVtgHLtldqGu6dXN5WACMNHVAAd1VBqqPK0xMYK2GORcmu90sKOn854%2FSmv04tzjG0yTse0xqn93EsFeMIyaV0Q5%2Bl1xAnTnnh%2FxD4kKL9f5gYRDpNDLwRXCpq2B5vud6Uag7sGoGwf4KLqqRCBeNgw1rDJyQY6pgHKP4t%2BggxoutXqmQJx83v2yb0FqHUL%2BcM8Bki7mdlsx7f3MFgsmX4wDpzo6fmeztakLJa9cxY5UXOmlxwR40HMJcQZoZjiMhyiQjw4xfCX8IX1Pwetr5DfXSrwXrLQYCf0V8ZBrytyKgPfoiIUOaqNnAE6ZmIV6c%2FmqQuXQ6yro1zbTYDl2JKaFOPB%2FpvR0bZJ4Fi1EII%2FfVYmhZMjo3K%2FnBEUPU1f&X-Amz-Signature=6443888c343013231e699e6abc722aace54767b641375167fbfec12b838dd23f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

