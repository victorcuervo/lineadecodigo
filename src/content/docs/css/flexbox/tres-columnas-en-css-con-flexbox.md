---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RTMRFKD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuGN4xM8E863B%2FZjVPPJ79%2Fa2uF2toqJWKBw9Sc351dAiEAwdfcoinewI9aD9XiNdKw37iR614EyJFG1WWtZbgfzDkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuUUiMy5feD4Q87NCrcAwyvctNL0BxZ56w2MNwLW7%2BpzDyguZFjrgaAhNb%2BUDelkoSK3R8Ugi6r2WWUWfrapliufiAyz9VHxvMoDrLgjK4ralftBnJ73BeVK0fOD2cC2pJ00EG%2BlPqY7GcPOFMy7o7Z6otXhUr91T67L106%2B%2Bo3TfPsSN18ynI%2F2VPTdfv1oQ2Zmoo8a0pXPXmXpj3KFL2boqIfiYSNYYeoiCvr9lgK0Rt4NfdaER1WI8h%2BwETodItT%2FBOAk8bndz16AbuN%2BQFSh3pLiocfXDGjqxmKVz3s1MjBc6K8rTcMSQrfr8E06S7m9E8RgMMENcC8H33MdPKdX6hGA59J6rq%2FmgTd8DtHQ4chhFOB7%2B8xwQC52QobCsukYtWRb0Q%2FkMBSm3sr5ns9A4lcOImNs%2BSsZpvE3Lwzz95R855cHTvR%2BTUftQz7YVH2Aom2NnaHC0SkN%2F1WSR2OhgNwr6vgqXj1NH0YIfBzvRwOJXjPOzSzPu4p%2FgCHKk%2FTWUlMez0HaSSgQSiYVbSxHtP8S%2FE9ATnzfJZwQDb6GDpuSlKSBcnDfl9gVhbOANCh3%2FntAbSKQNkDoEJrzgxHB5oh%2Bkpmy4naMkQnsJyl6rsWBH6w33r1YBiE%2FZWrwxlZOnkZ0oJpyhaHMID%2B0skGOqUBOvbVeYSl%2F8qiMhGZJ%2BsWBX6vDWJZ1pYVrrC%2FKVZcXEBaNL4IN4YEO7gOOy2bz6wF0oq4udqU%2BwkT2zI0oD6cceAIvSDgiQo%2FKuxJcuUapJOLtuoaQomUTBoQE5xK0RgtfG%2Bqq4UeGDnSCJeug6JnxW3NCuDZ9LrECqntGQtBb4FG1fSZf%2F4ctprEIkVg5ugL7dwhowwBStyn74PJ8fWLnV042ZTF&X-Amz-Signature=c26bd417c4e5c1cf5be703d4f90df2b4dff458bd8b5c7234cca9c466dd5caa53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RTMRFKD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T234947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHuGN4xM8E863B%2FZjVPPJ79%2Fa2uF2toqJWKBw9Sc351dAiEAwdfcoinewI9aD9XiNdKw37iR614EyJFG1WWtZbgfzDkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGuUUiMy5feD4Q87NCrcAwyvctNL0BxZ56w2MNwLW7%2BpzDyguZFjrgaAhNb%2BUDelkoSK3R8Ugi6r2WWUWfrapliufiAyz9VHxvMoDrLgjK4ralftBnJ73BeVK0fOD2cC2pJ00EG%2BlPqY7GcPOFMy7o7Z6otXhUr91T67L106%2B%2Bo3TfPsSN18ynI%2F2VPTdfv1oQ2Zmoo8a0pXPXmXpj3KFL2boqIfiYSNYYeoiCvr9lgK0Rt4NfdaER1WI8h%2BwETodItT%2FBOAk8bndz16AbuN%2BQFSh3pLiocfXDGjqxmKVz3s1MjBc6K8rTcMSQrfr8E06S7m9E8RgMMENcC8H33MdPKdX6hGA59J6rq%2FmgTd8DtHQ4chhFOB7%2B8xwQC52QobCsukYtWRb0Q%2FkMBSm3sr5ns9A4lcOImNs%2BSsZpvE3Lwzz95R855cHTvR%2BTUftQz7YVH2Aom2NnaHC0SkN%2F1WSR2OhgNwr6vgqXj1NH0YIfBzvRwOJXjPOzSzPu4p%2FgCHKk%2FTWUlMez0HaSSgQSiYVbSxHtP8S%2FE9ATnzfJZwQDb6GDpuSlKSBcnDfl9gVhbOANCh3%2FntAbSKQNkDoEJrzgxHB5oh%2Bkpmy4naMkQnsJyl6rsWBH6w33r1YBiE%2FZWrwxlZOnkZ0oJpyhaHMID%2B0skGOqUBOvbVeYSl%2F8qiMhGZJ%2BsWBX6vDWJZ1pYVrrC%2FKVZcXEBaNL4IN4YEO7gOOy2bz6wF0oq4udqU%2BwkT2zI0oD6cceAIvSDgiQo%2FKuxJcuUapJOLtuoaQomUTBoQE5xK0RgtfG%2Bqq4UeGDnSCJeug6JnxW3NCuDZ9LrECqntGQtBb4FG1fSZf%2F4ctprEIkVg5ugL7dwhowwBStyn74PJ8fWLnV042ZTF&X-Amz-Signature=33e73db555007703263ba642c01d18afa3068540ee6386630ea8a3280a3be4b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

