---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIYNZEMW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCuvjpMjNGWPPgf7PecRZhUQjSxVL4TsKdu%2FbagzMv5AiEA6nCrjf0rBeTYtfWBT8SHhRiqTrPiCL87PgkDMg4qxpsqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtAtUxNmnJPXVb9aSrcA0uWWTR4d5fOvlK3GrPqLQkMT9VPGkM1wZ%2BJ%2BAjiIfzH35MR%2FUy1Um8EGUbXl9ANU5VwJJnvKFPfPfxXaJ6RZHgc6IIAopqUnPnghrS2kngmD0jfCqHdpYaBCdQl%2FxLAgufGVLNW6JRwVWZN5twMxyalg%2FkvtpGvdOVTdT9LxwLfn9iWTuAol8OU7ao1T2EehOZEsXyYsfAlNbyv9Dc2VWiyxTN91MV4yvwqwTwgT8iK27w57ILEUSDPkpJJIUTixKJlU9%2F03TGe%2B6U2ANgABA2S9a59McbF2O%2FT%2BHan6DunooTR%2FbhhfOg9G%2Fmz7Mf5q%2FaaFuKj3XH2KCsGKkF27ypcgasqNxOzW5Kj1fLoE2cIs2%2B5p0ZlXd3LgR7SNkQE9SihBVxDu4mT6OXtyJ2DdnpzwlVA7vyBv9L%2BBkVYAoIeNTc1dMZN38ORCJ%2BmkvlFrbGNDpyAV1n05%2FHwYL%2Bh%2FIW3Q3ZMRszoDNuWriSoLCvxpOq898sk3k%2F%2FDT8c6zXmn4yDFSvLwI%2F37HhPmKgQkusfbvP5mamZ9dqWUND%2B5Ac6YeSWP4PtqCtejjnqqmBmMZkfrGNDKdCOBKcD23XR4DZGxmIwOXtloq17xod5f6a5Eyb4UdwR%2FDkixjyUMIzK3skGOqUBs2choqepl3HNfNy%2FVeFlrelN4bzbUjHOivSZelg7lpmqsCa70zpyKBD5ZcWp3cO0mQAaTidm%2B8u8dhPU6koR6EJVK%2B2LI%2F%2FtqV0051iGd4vJky4%2B1%2FE8Nfd2%2F%2BTEscTnb7tHp6kFDw6OXLCdlB3NsXXNQuSixCw4KuOIjzS%2ByCTWV5%2FsSFN%2FeaTpuemQ67i%2B0xOov5FXm5X7eetNSUWjqYXiFvD%2B&X-Amz-Signature=f1179d8103d647e2a489a2d2e11106d2176acd7301062c50eaf58b5251030a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIYNZEMW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T045515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCuvjpMjNGWPPgf7PecRZhUQjSxVL4TsKdu%2FbagzMv5AiEA6nCrjf0rBeTYtfWBT8SHhRiqTrPiCL87PgkDMg4qxpsqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtAtUxNmnJPXVb9aSrcA0uWWTR4d5fOvlK3GrPqLQkMT9VPGkM1wZ%2BJ%2BAjiIfzH35MR%2FUy1Um8EGUbXl9ANU5VwJJnvKFPfPfxXaJ6RZHgc6IIAopqUnPnghrS2kngmD0jfCqHdpYaBCdQl%2FxLAgufGVLNW6JRwVWZN5twMxyalg%2FkvtpGvdOVTdT9LxwLfn9iWTuAol8OU7ao1T2EehOZEsXyYsfAlNbyv9Dc2VWiyxTN91MV4yvwqwTwgT8iK27w57ILEUSDPkpJJIUTixKJlU9%2F03TGe%2B6U2ANgABA2S9a59McbF2O%2FT%2BHan6DunooTR%2FbhhfOg9G%2Fmz7Mf5q%2FaaFuKj3XH2KCsGKkF27ypcgasqNxOzW5Kj1fLoE2cIs2%2B5p0ZlXd3LgR7SNkQE9SihBVxDu4mT6OXtyJ2DdnpzwlVA7vyBv9L%2BBkVYAoIeNTc1dMZN38ORCJ%2BmkvlFrbGNDpyAV1n05%2FHwYL%2Bh%2FIW3Q3ZMRszoDNuWriSoLCvxpOq898sk3k%2F%2FDT8c6zXmn4yDFSvLwI%2F37HhPmKgQkusfbvP5mamZ9dqWUND%2B5Ac6YeSWP4PtqCtejjnqqmBmMZkfrGNDKdCOBKcD23XR4DZGxmIwOXtloq17xod5f6a5Eyb4UdwR%2FDkixjyUMIzK3skGOqUBs2choqepl3HNfNy%2FVeFlrelN4bzbUjHOivSZelg7lpmqsCa70zpyKBD5ZcWp3cO0mQAaTidm%2B8u8dhPU6koR6EJVK%2B2LI%2F%2FtqV0051iGd4vJky4%2B1%2FE8Nfd2%2F%2BTEscTnb7tHp6kFDw6OXLCdlB3NsXXNQuSixCw4KuOIjzS%2ByCTWV5%2FsSFN%2FeaTpuemQ67i%2B0xOov5FXm5X7eetNSUWjqYXiFvD%2B&X-Amz-Signature=31de521f2d55e02f3960a107a5ebaa4cdcc8eb0174d5a3ee383810dd9c3ea4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

