---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673BBWPG2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGF2oMFioJh6sptuqg5ZzIpDpCiz7YR8Hds5fAci7daAiEA766lpnwieYL80e0iFpyBGy%2FB2YxqC4IY%2FLb9BNMcC2sqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkcMWd6AEyGTZ%2BoyyrcA1stoGSApfUIZ9%2FjE%2Fc5fGCZE8dsyyCPTxOA2bYUueqy64RLx2ZdcwJJutit0tK3hzYk3UxGKAOhtVoDKyBH0K3w52S8Mxb3X%2Bvo18PZrHcVPXKMcX2H65urIi%2Fnu4ptvKmtCyKzadZ54sujoCuB8d0IBHgA0cr1Q3SjJMvzIeEBQTWxU8pvQUT1KOpaa30de4C5A66dFkbQm1x2dz7YvQL9oHJYPCbwirZcvijYiPmW3IJfCRBUHzZudY1zyI6tDZ8x7bTUZP4BfjWlLq6bbWFRG8ymqhGi%2F0ig0MTFjCzu7o%2FWD9NHXFyybrRxkHoA5u1EEHV7Cy5I6%2Fzfomu1lizBmaZF3rkvXQA2K3s%2BUix73gGkigRrrUMHAJswDh4v%2BWkJLI8qA99N%2FnZycv618s8Pedstzjcjp%2B6i3XeovuRHgHOv%2F%2BVssauh3dQhhZS6PN3GECukwYm0uw0c%2BqDfDD0LV%2FpYcAUFxsahHKyZAuNb80dsSQzoMVngfMv1edq4VPCQG2vxnYe7rUlGmEF%2BZJO5W7iytZoQYXqwaVwpJkTrBu1Vz%2BstiCOtOdko6b24yeaGRC61HTniUi%2B5ewUYYavRL26HeHP2neY9s2QOZFbHFNvKyaWzBS8P0pE6MMmo18kGOqUBlXYQ72L8lRIu%2FPn7xh4E49syDIOiJqmmtqX5436D25DICZ2tnNw12emSvGx2L8VTUgsEYrPdKWmI9lJxk27lT4ksy%2FKxIwtpO44NuNZFDEKYXKxG17OiTjiFvKCNhs%2B5pEChuP5BrSgC7fyJU5phbhjNVR2xJeKY9PWnVkVfwPThK2nZ51EcOhMSDH38W4j3OndC3yx5paO2afWNLVqYVndLOwjW&X-Amz-Signature=2e7e944fb01c6fb5c5d50cf3b7af648a64aed80c70bd327c158e2a38cfd2f8e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673BBWPG2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T203124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFGF2oMFioJh6sptuqg5ZzIpDpCiz7YR8Hds5fAci7daAiEA766lpnwieYL80e0iFpyBGy%2FB2YxqC4IY%2FLb9BNMcC2sqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkcMWd6AEyGTZ%2BoyyrcA1stoGSApfUIZ9%2FjE%2Fc5fGCZE8dsyyCPTxOA2bYUueqy64RLx2ZdcwJJutit0tK3hzYk3UxGKAOhtVoDKyBH0K3w52S8Mxb3X%2Bvo18PZrHcVPXKMcX2H65urIi%2Fnu4ptvKmtCyKzadZ54sujoCuB8d0IBHgA0cr1Q3SjJMvzIeEBQTWxU8pvQUT1KOpaa30de4C5A66dFkbQm1x2dz7YvQL9oHJYPCbwirZcvijYiPmW3IJfCRBUHzZudY1zyI6tDZ8x7bTUZP4BfjWlLq6bbWFRG8ymqhGi%2F0ig0MTFjCzu7o%2FWD9NHXFyybrRxkHoA5u1EEHV7Cy5I6%2Fzfomu1lizBmaZF3rkvXQA2K3s%2BUix73gGkigRrrUMHAJswDh4v%2BWkJLI8qA99N%2FnZycv618s8Pedstzjcjp%2B6i3XeovuRHgHOv%2F%2BVssauh3dQhhZS6PN3GECukwYm0uw0c%2BqDfDD0LV%2FpYcAUFxsahHKyZAuNb80dsSQzoMVngfMv1edq4VPCQG2vxnYe7rUlGmEF%2BZJO5W7iytZoQYXqwaVwpJkTrBu1Vz%2BstiCOtOdko6b24yeaGRC61HTniUi%2B5ewUYYavRL26HeHP2neY9s2QOZFbHFNvKyaWzBS8P0pE6MMmo18kGOqUBlXYQ72L8lRIu%2FPn7xh4E49syDIOiJqmmtqX5436D25DICZ2tnNw12emSvGx2L8VTUgsEYrPdKWmI9lJxk27lT4ksy%2FKxIwtpO44NuNZFDEKYXKxG17OiTjiFvKCNhs%2B5pEChuP5BrSgC7fyJU5phbhjNVR2xJeKY9PWnVkVfwPThK2nZ51EcOhMSDH38W4j3OndC3yx5paO2afWNLVqYVndLOwjW&X-Amz-Signature=42965ea4ae41cd68c39a4c490e09b130b1ac2050c87a833582be50b39f4127f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

