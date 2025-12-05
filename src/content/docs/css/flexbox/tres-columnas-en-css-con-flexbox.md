---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWO5SMDP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSALrJE14MPpqDaorfoKf%2BWsFUkPI8gGUYe%2B7di48qDgIhAJMt8RkxWDuXPWZ%2BpPzbSzCYmK0wbOz%2BCCdUumbN1Xb1Kv8DCGYQABoMNjM3NDIzMTgzODA1IgyfsuCQhSYZoApZnXcq3AP%2Bz2ERoNDIPBHPlBt9iskl573BQ3tuiqq%2Bmz3ulOinBKS0d%2FvrCATgQFBWAckH4RqCenCJ8S8%2BzinNU8E6W9ATWsCt02KvaDfyRStkEOuCkzaJCjcU6uI6Oz3T67B59N%2B0u7O2QKbVt%2B2A2FJAMXntyIKJ8ywYbYDztFKBqBUKI%2BipYY62hlxxsqJteHz502rkI%2FxrtuFhdlzU2YzQD72ucbvhIH5C3y%2BO3mcXMNk9t7Hw9y%2BAjv1%2F8vPlcFJq5AlVK6pA6DzdBAn1HZyJPVvV0%2Fghi5TWlemQbBKcvXCdsOJxWnpmxH9gCQD%2BsIiJP4Vy8etwUPhvBTJNFzF%2FkkiGrees1XVbZUsT8VrlmEdYejtd%2FGlfsIhyLXNDPFUY8paFY6%2FnNnR6S56p67fuinvIFtda2MnH7oh8YCx8buGRZdm5ABTyLBuudwHdeQy1nPfYc6GdXhxk5OU6ORfn7FB79m37f%2FmWlaJx%2FxHpr9LJoc9lOieJWSaLGtlP4PeuzlwQT%2BLJKhc9zU%2B8MSf%2FpzBXQDGvhYiNZi4Wg14sddOxXWFEfjaBi5n9zJHmTLc9Vwq639PnqbGk3oN%2BEJlnSyMiBI2DcYdLzIlQ71toMiGqjxPkPh6vCbn7YFrhWDCdkM3JBjqkAYZ1bJ2MnsNIwy0bOIrtX9buMOlEO4YHlGrIyDMcktux%2BVYyWP6atrXWJM7l1C99WEEJec3J6YmtTtdYnY1EuaGFJd%2Bdxh6DFsNbQbFKK9uZNqjz4eTRJEmY%2FS90MGLw3%2BnPSU3bDdF1joeeq9X3Cl5%2Bfnakb%2FoAaT2X998vQvQ2Xt5AGG%2BlOYYBP9psuGNIxEMc%2BdxQkRC7KZTrynRdtRAqHlUl&X-Amz-Signature=b5fea7a9ec66784b5b7c16c93bacb3a7dfea4dd7f308fdac703e10c5534f2fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWO5SMDP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T224542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSALrJE14MPpqDaorfoKf%2BWsFUkPI8gGUYe%2B7di48qDgIhAJMt8RkxWDuXPWZ%2BpPzbSzCYmK0wbOz%2BCCdUumbN1Xb1Kv8DCGYQABoMNjM3NDIzMTgzODA1IgyfsuCQhSYZoApZnXcq3AP%2Bz2ERoNDIPBHPlBt9iskl573BQ3tuiqq%2Bmz3ulOinBKS0d%2FvrCATgQFBWAckH4RqCenCJ8S8%2BzinNU8E6W9ATWsCt02KvaDfyRStkEOuCkzaJCjcU6uI6Oz3T67B59N%2B0u7O2QKbVt%2B2A2FJAMXntyIKJ8ywYbYDztFKBqBUKI%2BipYY62hlxxsqJteHz502rkI%2FxrtuFhdlzU2YzQD72ucbvhIH5C3y%2BO3mcXMNk9t7Hw9y%2BAjv1%2F8vPlcFJq5AlVK6pA6DzdBAn1HZyJPVvV0%2Fghi5TWlemQbBKcvXCdsOJxWnpmxH9gCQD%2BsIiJP4Vy8etwUPhvBTJNFzF%2FkkiGrees1XVbZUsT8VrlmEdYejtd%2FGlfsIhyLXNDPFUY8paFY6%2FnNnR6S56p67fuinvIFtda2MnH7oh8YCx8buGRZdm5ABTyLBuudwHdeQy1nPfYc6GdXhxk5OU6ORfn7FB79m37f%2FmWlaJx%2FxHpr9LJoc9lOieJWSaLGtlP4PeuzlwQT%2BLJKhc9zU%2B8MSf%2FpzBXQDGvhYiNZi4Wg14sddOxXWFEfjaBi5n9zJHmTLc9Vwq639PnqbGk3oN%2BEJlnSyMiBI2DcYdLzIlQ71toMiGqjxPkPh6vCbn7YFrhWDCdkM3JBjqkAYZ1bJ2MnsNIwy0bOIrtX9buMOlEO4YHlGrIyDMcktux%2BVYyWP6atrXWJM7l1C99WEEJec3J6YmtTtdYnY1EuaGFJd%2Bdxh6DFsNbQbFKK9uZNqjz4eTRJEmY%2FS90MGLw3%2BnPSU3bDdF1joeeq9X3Cl5%2Bfnakb%2FoAaT2X998vQvQ2Xt5AGG%2BlOYYBP9psuGNIxEMc%2BdxQkRC7KZTrynRdtRAqHlUl&X-Amz-Signature=18b104fc56ebe94f953c00f32b07470954f5eea84fbf777472804dbb6b93f46c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

