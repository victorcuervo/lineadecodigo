---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUCO7JP7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVdSDKe5IAoZrlrP9I5dxdFDKNw1cyhrQRtKcTPx7XXAiAwSmT9KzYiDvTVbgpKsaocrV%2BCLg1FQRr6y7KdqaU2bCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFthAUzL22RcGrZnHKtwDZcoV%2Fle7qIPg1A8ZFT2u26cRAA6UTCdKaWfSAIdK%2B873Ix1dN53GoMRJBYq5CoLi6aw6NMeqkxro9coE0MZ8dM%2Fy5PrwXTpEEPv9reWXSu4xLWgJFk1uRjulzGg5D5S0B%2FgzC9fcjcIjo5fcs6VkxTsWHBwHgiOC72735mz6LAIHclvVfUXAHIQD9bD%2FkyiNXdDoLa%2FfJyKKhj5Atz07fJJX%2BGuiBcGMaPdqRrCflMr2pwqm842mG%2BCo8bFB%2FFIr7bdVwFAh6CWE9rpcPp6%2F2941tC%2FQHujj4qMFY9APUydd5snI7euBVe8haTC1mdKGQV7zVrwECDXDW9NtN3mvkTIipwdPkmqdbcqbON5XgoZO83d4VxRCl0lOXamLu5EDH6m9zIXJnkjgU%2Ff5wcQdh1IDIybSG9TG%2FmJ22Ba0zqTw2wr4uSlPYkaEn2EjkHS2fIB%2BRk4aFA3ZTXc7p6FKBe%2F5AXE4CR15Wh1FUGJs9aUNvfceIr5WRw3oDL3kA13aIYCFKxgZ7mbY697pp5efLyXDgd6aAeN2%2ByVdF9ruj1Fxuz9OzJSm4L2UAm7EQdVgeGzjwH3wIycp2%2BLKfke2tGsuoG%2FgNAGHSjWfKg8BfrIDrAQT6nB%2FSgjkItkw7YTYyQY6pgHmWfzrz%2FTAPfgmjTgwO6awKB3bZVcCx57CCmSyfhav5zEbFLWZ5UAyLmMEo0OqZOwM410udyCoTJNF6Ds3HPSimqrdm1QPoZfa81tgHpHn01NiJZv8945ZcNOjU3zYB%2FOjmAQSR7WcTl9VGcn2lIGcAzIlgmoxNPdLjTJpClY4tR%2FBT5MHun%2FXvqBomu%2BN9SUB75rzMLE5ZA8IkfgcF1W4lK112rOT&X-Amz-Signature=f24065d2c4bd7b9e48ca093d39ef0f41f5dfc291ad994c5404e9e3b3f42eab52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUCO7JP7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVdSDKe5IAoZrlrP9I5dxdFDKNw1cyhrQRtKcTPx7XXAiAwSmT9KzYiDvTVbgpKsaocrV%2BCLg1FQRr6y7KdqaU2bCqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFthAUzL22RcGrZnHKtwDZcoV%2Fle7qIPg1A8ZFT2u26cRAA6UTCdKaWfSAIdK%2B873Ix1dN53GoMRJBYq5CoLi6aw6NMeqkxro9coE0MZ8dM%2Fy5PrwXTpEEPv9reWXSu4xLWgJFk1uRjulzGg5D5S0B%2FgzC9fcjcIjo5fcs6VkxTsWHBwHgiOC72735mz6LAIHclvVfUXAHIQD9bD%2FkyiNXdDoLa%2FfJyKKhj5Atz07fJJX%2BGuiBcGMaPdqRrCflMr2pwqm842mG%2BCo8bFB%2FFIr7bdVwFAh6CWE9rpcPp6%2F2941tC%2FQHujj4qMFY9APUydd5snI7euBVe8haTC1mdKGQV7zVrwECDXDW9NtN3mvkTIipwdPkmqdbcqbON5XgoZO83d4VxRCl0lOXamLu5EDH6m9zIXJnkjgU%2Ff5wcQdh1IDIybSG9TG%2FmJ22Ba0zqTw2wr4uSlPYkaEn2EjkHS2fIB%2BRk4aFA3ZTXc7p6FKBe%2F5AXE4CR15Wh1FUGJs9aUNvfceIr5WRw3oDL3kA13aIYCFKxgZ7mbY697pp5efLyXDgd6aAeN2%2ByVdF9ruj1Fxuz9OzJSm4L2UAm7EQdVgeGzjwH3wIycp2%2BLKfke2tGsuoG%2FgNAGHSjWfKg8BfrIDrAQT6nB%2FSgjkItkw7YTYyQY6pgHmWfzrz%2FTAPfgmjTgwO6awKB3bZVcCx57CCmSyfhav5zEbFLWZ5UAyLmMEo0OqZOwM410udyCoTJNF6Ds3HPSimqrdm1QPoZfa81tgHpHn01NiJZv8945ZcNOjU3zYB%2FOjmAQSR7WcTl9VGcn2lIGcAzIlgmoxNPdLjTJpClY4tR%2FBT5MHun%2FXvqBomu%2BN9SUB75rzMLE5ZA8IkfgcF1W4lK112rOT&X-Amz-Signature=6c4ddf5ee5e38a14e124eef5685805ec54346f525a34fe1186296b7efa848fab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

