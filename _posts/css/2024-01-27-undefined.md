---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNSGUGIG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCGIeivtf1xLdvg8i9aFXN4mRJhz9xJFM6o3yBYUV3PhAIgW09PdcSKkcrblIKBiYkSwPVQ%2B5JEKjedLkQNpisYOqAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEKVS8qF1HJBpPuHkyrcAwf6SaJeA%2BQ8HJPjJD8%2BEb8VxowHVrn53gMSO%2FlUWXEzThYRv9k6lz5fNv6q5a5enroCw5sf%2FV4bDfS0L60Eo7rigETo%2FHgwH6M7nFskBV8K7f8mO42axUV3Pa4ldXQjm%2FTfrenA41Nvug5jjvp8KsrASOHY4RnX9ypdNdepsw87C1jFPUW6KRkpjD6oUk4QIOhYK9xPQW%2BYQD3EXPK6JoP1hlE%2FsNkhPchRIvQfObrgKP6ph4dMGhjBgFpbyq1XuwtAGKjbf4WDDkKHVd7%2F0bNzHdj1ytdk8%2FdfURjyq0RylUjOcaxAt3S%2BGXe%2Ffoed9pWDqGm7%2F025yMEKBjNqojUgQjNT6kwCa8t5a%2B1ObNcvdPZdggMO761NtLviT68AsXv202TDjXojEPSrprkryTy8PPnU%2FaUPw9zV6bwb3uQl27VmWF6mkI%2B5MoCLasCulF5dhfPU1ztLsut1RKiX1EEDLLPJZElFPNHdnP8cotjwqIX85yDeXMT50ehZrF0b%2Bn6VLYkb7AJk%2F8nPs%2BEkYYDkF0zOl1azl4ryQK34eGjH3IMrrsl7CkkG2djls%2FxtSGLp%2FWvMkrcHFcfW6n1ePoci4rfBN94keesHFKusS%2BSe%2BtetpElzoxxjaS45MOP2v8kGOqUBS21oTHkiIXBPmPUr2TLi9N89bUnEZytvu9Vmky%2Fl0ySWfTleym%2FC4wD%2FZmF7JsRd0Q6SRupIGQnAY2h1wT3lXOCe%2F3rJ2Wnqf4ixOES0r%2FbC8gIXwGNpATx4%2BEqWfXLcIk%2BYcTSI6r5OqoAYQbzFlqhuOLZ4v46pMDKBLs1LgswzjbfrcXnu8vRn6E%2BOegvRSjIqfcViKtatREqDScG1EMfKL65q&X-Amz-Signature=b199c9bd2e8bcd1a7dc7b9afea7e6c8f3fb511214d191eeda7344ea6c777b54f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNSGUGIG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCGIeivtf1xLdvg8i9aFXN4mRJhz9xJFM6o3yBYUV3PhAIgW09PdcSKkcrblIKBiYkSwPVQ%2B5JEKjedLkQNpisYOqAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDEKVS8qF1HJBpPuHkyrcAwf6SaJeA%2BQ8HJPjJD8%2BEb8VxowHVrn53gMSO%2FlUWXEzThYRv9k6lz5fNv6q5a5enroCw5sf%2FV4bDfS0L60Eo7rigETo%2FHgwH6M7nFskBV8K7f8mO42axUV3Pa4ldXQjm%2FTfrenA41Nvug5jjvp8KsrASOHY4RnX9ypdNdepsw87C1jFPUW6KRkpjD6oUk4QIOhYK9xPQW%2BYQD3EXPK6JoP1hlE%2FsNkhPchRIvQfObrgKP6ph4dMGhjBgFpbyq1XuwtAGKjbf4WDDkKHVd7%2F0bNzHdj1ytdk8%2FdfURjyq0RylUjOcaxAt3S%2BGXe%2Ffoed9pWDqGm7%2F025yMEKBjNqojUgQjNT6kwCa8t5a%2B1ObNcvdPZdggMO761NtLviT68AsXv202TDjXojEPSrprkryTy8PPnU%2FaUPw9zV6bwb3uQl27VmWF6mkI%2B5MoCLasCulF5dhfPU1ztLsut1RKiX1EEDLLPJZElFPNHdnP8cotjwqIX85yDeXMT50ehZrF0b%2Bn6VLYkb7AJk%2F8nPs%2BEkYYDkF0zOl1azl4ryQK34eGjH3IMrrsl7CkkG2djls%2FxtSGLp%2FWvMkrcHFcfW6n1ePoci4rfBN94keesHFKusS%2BSe%2BtetpElzoxxjaS45MOP2v8kGOqUBS21oTHkiIXBPmPUr2TLi9N89bUnEZytvu9Vmky%2Fl0ySWfTleym%2FC4wD%2FZmF7JsRd0Q6SRupIGQnAY2h1wT3lXOCe%2F3rJ2Wnqf4ixOES0r%2FbC8gIXwGNpATx4%2BEqWfXLcIk%2BYcTSI6r5OqoAYQbzFlqhuOLZ4v46pMDKBLs1LgswzjbfrcXnu8vRn6E%2BOegvRSjIqfcViKtatREqDScG1EMfKL65q&X-Amz-Signature=fb229cc4a39f1271a3f536d8586bb83c5abb0807faaf39e05b18fa9aa302a99c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

