---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657ZB7JRF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIpDWYodfsP9BynZu3UDG8QvKNG0unfa%2B6lzwqlwHDSAIgJ8ZZkkqVNgkEeSEkGCZlG8%2BIX3LDGmpq7OZkp7wUmM0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDNyPMoKKpS4CXWfgNSrcA0sHpNb2Erh4Eq4olYfVhnwF7yHGD5mNgAUa7Llz452hFECfLZcWk6bcxXyQjmnMgLToW913wGyXMoX44xPoRbgsUXgWFcone1c7Ek58LDeJrsWNeRtKFOe4tgmQchYRAzvYZScMDV7q0yBVAJNydn7Z4QyA9aKTUxZj%2BGu4iiRUM8rZ1CvrauqyYGyvHgIiHtXwdfwRwchfBlevbOWyfeHAhE68eQiXtiLGE0MxOEYUAVqQO4GxLcPmOV6Cb%2B%2BMtz8s6jDJRTMk1jH6E6984pTCbLl2jKSyKXAA%2B11FgiBbDgRIMLuLVqlXjAqItyUy4o45T2SXcu0P%2BjIQHo9HxsIxJ6Umz6%2FdlzjzKurEHbnqRfwpvAO4QVIkMFUW9S1YcGHUMU5iIvbMfFbJPaPvY4m0uvjOZK3EQ6ChwY9bHWtO7wjWRVFHPc%2Flc4%2BQN1lPYfmdcZUMNhIG0GnyrQrBWauUqzRrO%2F4XNNPnSgVbU%2FPLpUxFZmUjhkYdBVbSTAZkRh8z0Vb406NAh17fOtR8tATabTCDiiTD9788%2BgFlKz6Qjf8cx50q%2B0WU9zlhW7C4f3eLSJlAjyHmMdVZlQlSqOhqN8FxKV5pB21ZT3KcktDZmrAYZbweiJWOI1vfMLz9zskGOqUBy3pYiXh5%2BALDw0LF%2F8XnFEANH%2FXM0uRnB55tRGnbwoD4WcWVfvalO1P%2FIVHmicySmbjnpIto7yUBx6KIt9KH8CjWibNnMS2tw6yRaf7iQ95calmSLwENDR%2FvxVEMO0a53ptqdlOk281j9DWXvNTS76mZjETyKfC86vYi3jcBarPdE9Y7y4RnYdYh0hOyx4sTM%2FIP0ih6A%2FVt%2FHmsLyeIEH0YJBG9&X-Amz-Signature=3225db6ddd151f5a4d261a8b6353ec38e1fceebd96f6e682ac5e0d6a8f89a590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657ZB7JRF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIpDWYodfsP9BynZu3UDG8QvKNG0unfa%2B6lzwqlwHDSAIgJ8ZZkkqVNgkEeSEkGCZlG8%2BIX3LDGmpq7OZkp7wUmM0q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDNyPMoKKpS4CXWfgNSrcA0sHpNb2Erh4Eq4olYfVhnwF7yHGD5mNgAUa7Llz452hFECfLZcWk6bcxXyQjmnMgLToW913wGyXMoX44xPoRbgsUXgWFcone1c7Ek58LDeJrsWNeRtKFOe4tgmQchYRAzvYZScMDV7q0yBVAJNydn7Z4QyA9aKTUxZj%2BGu4iiRUM8rZ1CvrauqyYGyvHgIiHtXwdfwRwchfBlevbOWyfeHAhE68eQiXtiLGE0MxOEYUAVqQO4GxLcPmOV6Cb%2B%2BMtz8s6jDJRTMk1jH6E6984pTCbLl2jKSyKXAA%2B11FgiBbDgRIMLuLVqlXjAqItyUy4o45T2SXcu0P%2BjIQHo9HxsIxJ6Umz6%2FdlzjzKurEHbnqRfwpvAO4QVIkMFUW9S1YcGHUMU5iIvbMfFbJPaPvY4m0uvjOZK3EQ6ChwY9bHWtO7wjWRVFHPc%2Flc4%2BQN1lPYfmdcZUMNhIG0GnyrQrBWauUqzRrO%2F4XNNPnSgVbU%2FPLpUxFZmUjhkYdBVbSTAZkRh8z0Vb406NAh17fOtR8tATabTCDiiTD9788%2BgFlKz6Qjf8cx50q%2B0WU9zlhW7C4f3eLSJlAjyHmMdVZlQlSqOhqN8FxKV5pB21ZT3KcktDZmrAYZbweiJWOI1vfMLz9zskGOqUBy3pYiXh5%2BALDw0LF%2F8XnFEANH%2FXM0uRnB55tRGnbwoD4WcWVfvalO1P%2FIVHmicySmbjnpIto7yUBx6KIt9KH8CjWibNnMS2tw6yRaf7iQ95calmSLwENDR%2FvxVEMO0a53ptqdlOk281j9DWXvNTS76mZjETyKfC86vYi3jcBarPdE9Y7y4RnYdYh0hOyx4sTM%2FIP0ih6A%2FVt%2FHmsLyeIEH0YJBG9&X-Amz-Signature=95135b08213276750b3e99a4db0f65cce2714753ab70c852177dd532ea574462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

