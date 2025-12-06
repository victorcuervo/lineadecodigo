---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YE4HXCX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ34RRSFU%2FNhPKQuMXV6ftSFPxsX6hpUMpkUzHeeX65AIhAMkCV1gc8D%2BU03uCbFf3GRbsuzfySimO1w6ezazv5aLRKv8DCHAQABoMNjM3NDIzMTgzODA1Igy9nUJ19zlGisEIAZUq3APpLf5NGuO8xawCk%2Fji6hYRQsy%2F1bdvNqLAvDchp2fmAvIjxVvga3mKRPbpwmMWQcpwNF7tnFPWgl2Ex2RQeexQ%2FwHMWaalQQWtKKGKxuzJ9mkbrUYO%2FLe4aZmXnJNwHwd%2FfvnsL7ZiaBgSHShned1rjiiG2ev5yi%2B62dvklmQQlreQFmh0hZkfr2h6AsKoDKcuVC77c2zs43A2ncmWqP0R9srfAkpfg3z4zsLrV60zw5BTKccES5Cp2R%2Fnr0spKgFaGVk2CYMh6hTH%2F6uEbQz%2F5dj%2BD0lN09oFdpvtlQeUFIuKDBXJhMOhIEgD8ogAcnMIHUHDhossYePn%2FNcYjvfmrQM%2F6CIfbNI%2B1QJQK1aaaTRkzkwnECnQXNBxGunp7ABmMRj3jWdTF3QHQvj9jqYn0mQCs%2BeqLKEXYk793TaBrotm2thQu7mbBAKxieVW5YR5jszLOLRxd6DtU07Y7uWK%2BcOh0y%2BACh%2B0opBqR4QMMWnkuqQe98%2FKnHRG0NZnAuJATcwMXkTOBE9J2ZEydFGoRIkLGZv6wEFZgYfeGe2E6R8GDGFMXss7EwfzFjTX%2BDgyoVxHJvBh28OFOU76eZ3Wd2%2FjXYvHx2OJQzCKQ2vSbY3WNzSwvVfvxcNg6DC%2Fns%2FJBjqkAYkDcWSJ%2FroPS%2ByEHQ37R9fPwMJjfcosJpv5ahTVfh8XminXg3Yuk%2F0gpPXMHpp3XfBVvT9AkkQIDmKWtUNgw3J52A1b4azQF5NjL%2BzQpk%2FDby6bwxDz%2BDqkF5F%2BxiakEaA8LQY7n5G8bAwcMnLDaLWivdAm3MbAwRyFNCw%2FPXl8Aa7x1K74svp6eeePEKlK4Mvq7lqfzpptmMK7A3GxsaT0tahu&X-Amz-Signature=2a224dc6399170327e4365d099c27f899ec500212be35f556b60f95ad5212ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YE4HXCX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ34RRSFU%2FNhPKQuMXV6ftSFPxsX6hpUMpkUzHeeX65AIhAMkCV1gc8D%2BU03uCbFf3GRbsuzfySimO1w6ezazv5aLRKv8DCHAQABoMNjM3NDIzMTgzODA1Igy9nUJ19zlGisEIAZUq3APpLf5NGuO8xawCk%2Fji6hYRQsy%2F1bdvNqLAvDchp2fmAvIjxVvga3mKRPbpwmMWQcpwNF7tnFPWgl2Ex2RQeexQ%2FwHMWaalQQWtKKGKxuzJ9mkbrUYO%2FLe4aZmXnJNwHwd%2FfvnsL7ZiaBgSHShned1rjiiG2ev5yi%2B62dvklmQQlreQFmh0hZkfr2h6AsKoDKcuVC77c2zs43A2ncmWqP0R9srfAkpfg3z4zsLrV60zw5BTKccES5Cp2R%2Fnr0spKgFaGVk2CYMh6hTH%2F6uEbQz%2F5dj%2BD0lN09oFdpvtlQeUFIuKDBXJhMOhIEgD8ogAcnMIHUHDhossYePn%2FNcYjvfmrQM%2F6CIfbNI%2B1QJQK1aaaTRkzkwnECnQXNBxGunp7ABmMRj3jWdTF3QHQvj9jqYn0mQCs%2BeqLKEXYk793TaBrotm2thQu7mbBAKxieVW5YR5jszLOLRxd6DtU07Y7uWK%2BcOh0y%2BACh%2B0opBqR4QMMWnkuqQe98%2FKnHRG0NZnAuJATcwMXkTOBE9J2ZEydFGoRIkLGZv6wEFZgYfeGe2E6R8GDGFMXss7EwfzFjTX%2BDgyoVxHJvBh28OFOU76eZ3Wd2%2FjXYvHx2OJQzCKQ2vSbY3WNzSwvVfvxcNg6DC%2Fns%2FJBjqkAYkDcWSJ%2FroPS%2ByEHQ37R9fPwMJjfcosJpv5ahTVfh8XminXg3Yuk%2F0gpPXMHpp3XfBVvT9AkkQIDmKWtUNgw3J52A1b4azQF5NjL%2BzQpk%2FDby6bwxDz%2BDqkF5F%2BxiakEaA8LQY7n5G8bAwcMnLDaLWivdAm3MbAwRyFNCw%2FPXl8Aa7x1K74svp6eeePEKlK4Mvq7lqfzpptmMK7A3GxsaT0tahu&X-Amz-Signature=0b2b201f3ffdd527c6e478a5bfe6e21c010368538c54c92c63f18835ce37ed4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

