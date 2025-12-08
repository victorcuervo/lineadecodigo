---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3QO3YD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7MX4I1nKF98%2F82ZzAF4qPGFy0NhvE%2FZPntajIvJyL0gIgD%2BRbvM8aCEgkO4yDCqJdLpZGfnKDgu59gdbPwmPOfI4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwummb1xHLm954iDyrcAyYzbxc2IMXXZFqHSvjxqKL7leUTL7%2Ff6Q9Zj6XJRrWkDMOCwtqcwtZEi5VuOPf0kKIElx2jz7ah1pG67xStv84IlUg257qmQoctIRo1PFju%2FulzebKTiOphNBR7PTAQzBoLevY8Gh6Y8l9L80sJLmfGlket1HJfbvcA0NGy0irIcBXnvgOUpGpWsMlqbaPBxPG5ts7GuhqhaKxnLncOHDjJfTtvLvhP4VrbCSaFMH4lMkk4SbS37a91ox%2BCFGK5cPcWgDT%2Bk2QphJoI9TLWCKQzXw3BngCev5qDJfLIuSL2QIqH81b1lwzZojmG2fMrH2mDCioPhY17ut%2BVsPTwBtipOIEnVPWTJiSXhrQ52KS4WKIVVhJtbbQbDNPCWoO2ZEQdFLSImYvRAPJVvn7sZ3O6VUA0clXZjC7eRv4PbdQaqDV%2B9guzxeUK%2F0NkNWGsdOR3a4FokvtNFcj9UClQMow%2Bc9ukmRw9PHul2vbNo5guyaPLu92rZFAYO4I4OMiaWn%2BITt7E5%2BdFENoxJqqk6CId3Bc6K%2FASoSGfhdj5qPHDv5G1c9b6SgpgdvxlW4fgaoLfL%2FnkflDpM4WR7y2TeMBKrDFWTYRQLIhwsaBnHfuGDaXKrUcWGuWQCCvyMJbt2ckGOqUBplEUzVxccCthZAUHfbMJW8cU6Cdr9vfkg%2Bc%2FuP6O1PLtUqApYbZ%2BsZgq4biJYRY%2BUqseMi2LkI3r%2FtsIicDgHCEWgrDUBw24Bo0oUBbJkT3EpTR9IjYt1K1o0mEkkxgQKJfglSkkgD5thLUXjmW6CUZbXXc%2BG%2F5khjViHGv48ucHUWWeUTVn53lbW2%2FaG1w9kx1XE8EnPymlVcTJnf9cj8XZZySV&X-Amz-Signature=9ebab472730dfc423f9496aa82621606477205e0f2e0296332b4a3a37f9557f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY3QO3YD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T105124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7MX4I1nKF98%2F82ZzAF4qPGFy0NhvE%2FZPntajIvJyL0gIgD%2BRbvM8aCEgkO4yDCqJdLpZGfnKDgu59gdbPwmPOfI4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEwummb1xHLm954iDyrcAyYzbxc2IMXXZFqHSvjxqKL7leUTL7%2Ff6Q9Zj6XJRrWkDMOCwtqcwtZEi5VuOPf0kKIElx2jz7ah1pG67xStv84IlUg257qmQoctIRo1PFju%2FulzebKTiOphNBR7PTAQzBoLevY8Gh6Y8l9L80sJLmfGlket1HJfbvcA0NGy0irIcBXnvgOUpGpWsMlqbaPBxPG5ts7GuhqhaKxnLncOHDjJfTtvLvhP4VrbCSaFMH4lMkk4SbS37a91ox%2BCFGK5cPcWgDT%2Bk2QphJoI9TLWCKQzXw3BngCev5qDJfLIuSL2QIqH81b1lwzZojmG2fMrH2mDCioPhY17ut%2BVsPTwBtipOIEnVPWTJiSXhrQ52KS4WKIVVhJtbbQbDNPCWoO2ZEQdFLSImYvRAPJVvn7sZ3O6VUA0clXZjC7eRv4PbdQaqDV%2B9guzxeUK%2F0NkNWGsdOR3a4FokvtNFcj9UClQMow%2Bc9ukmRw9PHul2vbNo5guyaPLu92rZFAYO4I4OMiaWn%2BITt7E5%2BdFENoxJqqk6CId3Bc6K%2FASoSGfhdj5qPHDv5G1c9b6SgpgdvxlW4fgaoLfL%2FnkflDpM4WR7y2TeMBKrDFWTYRQLIhwsaBnHfuGDaXKrUcWGuWQCCvyMJbt2ckGOqUBplEUzVxccCthZAUHfbMJW8cU6Cdr9vfkg%2Bc%2FuP6O1PLtUqApYbZ%2BsZgq4biJYRY%2BUqseMi2LkI3r%2FtsIicDgHCEWgrDUBw24Bo0oUBbJkT3EpTR9IjYt1K1o0mEkkxgQKJfglSkkgD5thLUXjmW6CUZbXXc%2BG%2F5khjViHGv48ucHUWWeUTVn53lbW2%2FaG1w9kx1XE8EnPymlVcTJnf9cj8XZZySV&X-Amz-Signature=bc79ebb3a507b39bd26ac305170c125cffcb058c3603525ea782c7a103ecdcfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

