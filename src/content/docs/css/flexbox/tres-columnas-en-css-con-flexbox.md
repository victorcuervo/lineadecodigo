---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEYHSFH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T202652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLeTJ5q32%2BI49J2DDM4iR3dy2DixzAM9XVDOvAWF9EAgIgP6hKAwQQwKTllJQqTqRIUgWkNuxTToCg3WW3sZjwo1Mq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDFshBE%2FWRJNWRpk2XircA5xzbFC205tYLj5RkrpZC85Y6ep0wl%2FSl04r8wtvS7qmNhI%2BxX%2FsZ7RJXq72LXnC6CXLFUSOoVRGIkearLHaRI126568KA1xTmwl6l0iVik8n%2B8QKcR14k2%2FL5AJ905K0Qxyr%2BhvA8QNx%2Fr5%2F9MyDndSUE7hqagdnqwyDTLS%2FKh4kRW%2FmDH234wYm9ixIMRTTpuLVVo50VCNEJC%2Fc7RR6hKzwYdLZVXtM4GXULHiU4VY%2FyiI0Lxhs%2BjWB4mW2xXpgu6Q75YwsV%2FUWcQ2EHIB81gfSeqIquBe2f8Xs5abRunZLBIXDEfeFg8tFdZnYEhf0oxdJtkdG1SVwazVeJ%2BoBh%2FvmKsqVgG9Ijyh9kv%2BatO0uKpYMX8Cix39At9Ak%2FwJ2TqkbF1a95zlp4rVM%2BMG5CH6QmRSOH0nvHDIlfhV%2FOU1SHfR8wUFWaIB%2BCtMehKucZVv8IuN6omYg1hZhAXqEzXvWMI7REUP9hj3xOaO7%2BoHNBj%2FQpMNUwnn19zhzRJAFX6hnQMfdlTjGZsoJSMBX85WnAQNkHk2L7XvxdZjhlkWr53Oj2B7mfNFjdYuDZdm%2FCYG1s3l9IJLjbmnHZZzvNvIs71MOkJW8mGDQbEqDuqPNlWYtLOAD5g6WZPmMOXqy8kGOqUBUtQTQFzeZk5wHoUJEGFNTO1XEVFLryVq7%2FrS3zB2zFQKk8yYXCsIm5NKiSWBereRTP8WLfE46nQxMZrM3fyRGpmNvcxqb8dAtTYvtGHsqmEaL%2B1wonS%2FLigBfy8%2BxXuHmW3%2FvHsHQnJbmSEb7LOiWqdxA1gI2BoTl2OMywKlHaA3cVHQu5NUI90A9vk6qJWhmaqh%2BZPNDvJYe9QZiM0xEvbDjpLj&X-Amz-Signature=de4df91a28917628d38f0df4de5dd6898f42086c43947d1a627c3b1aba02ab3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GEYHSFH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T202652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLeTJ5q32%2BI49J2DDM4iR3dy2DixzAM9XVDOvAWF9EAgIgP6hKAwQQwKTllJQqTqRIUgWkNuxTToCg3WW3sZjwo1Mq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDFshBE%2FWRJNWRpk2XircA5xzbFC205tYLj5RkrpZC85Y6ep0wl%2FSl04r8wtvS7qmNhI%2BxX%2FsZ7RJXq72LXnC6CXLFUSOoVRGIkearLHaRI126568KA1xTmwl6l0iVik8n%2B8QKcR14k2%2FL5AJ905K0Qxyr%2BhvA8QNx%2Fr5%2F9MyDndSUE7hqagdnqwyDTLS%2FKh4kRW%2FmDH234wYm9ixIMRTTpuLVVo50VCNEJC%2Fc7RR6hKzwYdLZVXtM4GXULHiU4VY%2FyiI0Lxhs%2BjWB4mW2xXpgu6Q75YwsV%2FUWcQ2EHIB81gfSeqIquBe2f8Xs5abRunZLBIXDEfeFg8tFdZnYEhf0oxdJtkdG1SVwazVeJ%2BoBh%2FvmKsqVgG9Ijyh9kv%2BatO0uKpYMX8Cix39At9Ak%2FwJ2TqkbF1a95zlp4rVM%2BMG5CH6QmRSOH0nvHDIlfhV%2FOU1SHfR8wUFWaIB%2BCtMehKucZVv8IuN6omYg1hZhAXqEzXvWMI7REUP9hj3xOaO7%2BoHNBj%2FQpMNUwnn19zhzRJAFX6hnQMfdlTjGZsoJSMBX85WnAQNkHk2L7XvxdZjhlkWr53Oj2B7mfNFjdYuDZdm%2FCYG1s3l9IJLjbmnHZZzvNvIs71MOkJW8mGDQbEqDuqPNlWYtLOAD5g6WZPmMOXqy8kGOqUBUtQTQFzeZk5wHoUJEGFNTO1XEVFLryVq7%2FrS3zB2zFQKk8yYXCsIm5NKiSWBereRTP8WLfE46nQxMZrM3fyRGpmNvcxqb8dAtTYvtGHsqmEaL%2B1wonS%2FLigBfy8%2BxXuHmW3%2FvHsHQnJbmSEb7LOiWqdxA1gI2BoTl2OMywKlHaA3cVHQu5NUI90A9vk6qJWhmaqh%2BZPNDvJYe9QZiM0xEvbDjpLj&X-Amz-Signature=6344081bbde588971565a3a086bcfc780612c9f6ebb41af7f74bbb2d0dfa2a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

