---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA3IPQY6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEheTcRCco6oxd%2BKUUPfr9W3c%2BIRgyqHqIusLAOm6jZ6AiEAnJoL1P0oMeFgZbeAIQ3ztk7eHhCzMGsZM%2FhG%2Fa2Ar1cq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDE9LGY3n7AFj7xUlOyrcA%2FpFO2hUT%2BwckltKDhj9loWxxFhwOuKGqZK0wqKUSRwXSn0nwpaswChOgS5Yhu%2BmmE60z44hubvlNZDrswV5modicqCX1f1W0O94wwOKeFQln7VHw1XaAHIkPk5qTqAFuI4W%2Bq3IBw2fDL8TkQdXaSxzdRix%2B6JkAu4jcpesxExbQDhYtZeAHLiUkWPdPJoLFSSS41LgfFsEF37Tm7UqqnuOtsxDAQeg9b1tJc3zwx%2FFnh0X%2B8%2BW1yxUK5lYelZo%2F2xwtV52F2rrv%2Bj9IDPLjHH4U1LmnOTgB5LFXEeDCn8PNar3L6G%2BSZ4i8rvk9oqJXsb0tNDERr%2BbaSvb1hb9w6AxDD79494smyvfXMyxEvoXW3Tiro5ThJGLEVtRigmZREMi99hQj464F%2B7RzgtfagpEdtLKAG8syn2sjw1gvclln9wzOXNsy7eyXaaqsGd%2FJpUWIvlI3upHurZIjSj9QQUnxSvCsPUswc%2FEj%2FA0YkUIK7IjjkK%2F2WgUAVOXb9hNeKsO4mW1DLWjutJS7DXn%2F%2B%2BPNHctxTCtqywznAKzJsct2dbWfoIF3bhdkv0GcSKYnjeywTJayrwS4QbuyIaTmhogAE%2Bs19Wvk3vWEbpiKUh6B%2Bh4bz6Xvxd5xtCxMM%2BQxMkGOqUB%2BOXNC4kLVr5T%2F2hlRC1VDlISpNC2fBtWc0pexA5bwtIZqHaZzzKiqNrvfO1sYNrQlD2zz2VWTO8yLl46Ektx5F7k%2BpPNwr7IdxkH%2FHzq4e%2BY14%2BEhFQyZ0e%2FZ9XWu3rSesPxG4T0o87UBteIFbWx2T491MIMP68JX1YtPyR2QdzIqHNpEMg7KePTtMgAayPe0OV5LmQnfEpKHOAyTBposzsdQdg6&X-Amz-Signature=516010545cfc57121e9e814cd16c8b4a038537fa084f25b19f52be68d47fd8f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA3IPQY6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIEheTcRCco6oxd%2BKUUPfr9W3c%2BIRgyqHqIusLAOm6jZ6AiEAnJoL1P0oMeFgZbeAIQ3ztk7eHhCzMGsZM%2FhG%2Fa2Ar1cq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDE9LGY3n7AFj7xUlOyrcA%2FpFO2hUT%2BwckltKDhj9loWxxFhwOuKGqZK0wqKUSRwXSn0nwpaswChOgS5Yhu%2BmmE60z44hubvlNZDrswV5modicqCX1f1W0O94wwOKeFQln7VHw1XaAHIkPk5qTqAFuI4W%2Bq3IBw2fDL8TkQdXaSxzdRix%2B6JkAu4jcpesxExbQDhYtZeAHLiUkWPdPJoLFSSS41LgfFsEF37Tm7UqqnuOtsxDAQeg9b1tJc3zwx%2FFnh0X%2B8%2BW1yxUK5lYelZo%2F2xwtV52F2rrv%2Bj9IDPLjHH4U1LmnOTgB5LFXEeDCn8PNar3L6G%2BSZ4i8rvk9oqJXsb0tNDERr%2BbaSvb1hb9w6AxDD79494smyvfXMyxEvoXW3Tiro5ThJGLEVtRigmZREMi99hQj464F%2B7RzgtfagpEdtLKAG8syn2sjw1gvclln9wzOXNsy7eyXaaqsGd%2FJpUWIvlI3upHurZIjSj9QQUnxSvCsPUswc%2FEj%2FA0YkUIK7IjjkK%2F2WgUAVOXb9hNeKsO4mW1DLWjutJS7DXn%2F%2B%2BPNHctxTCtqywznAKzJsct2dbWfoIF3bhdkv0GcSKYnjeywTJayrwS4QbuyIaTmhogAE%2Bs19Wvk3vWEbpiKUh6B%2Bh4bz6Xvxd5xtCxMM%2BQxMkGOqUB%2BOXNC4kLVr5T%2F2hlRC1VDlISpNC2fBtWc0pexA5bwtIZqHaZzzKiqNrvfO1sYNrQlD2zz2VWTO8yLl46Ektx5F7k%2BpPNwr7IdxkH%2FHzq4e%2BY14%2BEhFQyZ0e%2FZ9XWu3rSesPxG4T0o87UBteIFbWx2T491MIMP68JX1YtPyR2QdzIqHNpEMg7KePTtMgAayPe0OV5LmQnfEpKHOAyTBposzsdQdg6&X-Amz-Signature=fa2e0b0afd63d05e85cd51e54c566546505c48b6410aa7e8c34a9b9f825dc0e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

