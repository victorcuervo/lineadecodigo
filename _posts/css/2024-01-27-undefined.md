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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSQ666XU%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQD%2BQA1T6%2FTjYoiRxKvBL%2Fppe1rmekXX9mALE4KJMtCsWAIhAMR6bUzvm011l4cvywyPZ0TZuHbN4P6TEBikOAnlCHbZKv8DCCAQABoMNjM3NDIzMTgzODA1IgzSfp1Ryejt8bm7qFgq3APU%2FpEZOIiCTLpYPaGqFP6zMVJWMbd6H8M9mcyz6CpIcVbkg75vfGE%2BQTzQlSVu0IQB%2BPMVjOIZVMwsiFbzQ%2Fx8npqL6p7zhFDoBfBmR%2B%2FjRRXpG09YzDfR8rEwzbcmcc%2BMbloXwHLC9IlhrcpM8c4j6FhyEgw12oj1nhH1Gg7r1VZbsg24LKg1urgwbwicKb4M4sUpFoRuZ1sBUcGUh2AFr1lb5RNwQCXVshfYAeQA0gktSm5Cn4v4uf6PdYVnHOQP8MqOHQunwZ%2FW6%2FhLde1YSGc2luakgdwd8z5xkjhnEqsH8b%2BNZdLcMePjDTqnC0xA6q3dVJiGLR3hAuWJS0QkfnR0Usp%2FsrnnhNsSy%2BJy9uhzRaesMU9VLYAi0BIxt28BHV9B47%2FDXnH11FL6y5KtNtPSpZSEtxFTzfuxdh4ktuwxh53lCTQ3BMNl7tS1R0EXTN4pMID0c%2Bbs9TgaBEDTZcehCw30dAdbe64eFSBdjJKZCTKj6M05Uiaxi9vkYOCH6zAfTkx%2FtvpDO2ddJkChpFxXp7kJi%2B4DFFp0HWF1JcC%2F5mIEN%2F3LvZ%2FBjlrFxO5%2FmDEyaDdya07YQ35KwqSvRWs3qwJFSEKFK%2Bf9w4iN%2FB2AComIt8SOA6g9mTD15L3JBjqkAaEh8f9rVn7hkrngv5oe02XwXsVBSjmYNn1NytYCk%2FMRXlz6Ih67VUDnhVpyYkVk0eH7w2dloPhdyDzmDODvb6v7ZZpENmPAnrt8sPujlyyIGhLvR7zyjtzzff6uLhdAO6PixOmCwTUdlyiXTfO6Tdxhzss1%2BW02%2B1anS8zz7FM0u6BBdbpDlAiFOY4oWD5gdCqDswKTKEGtexfYcx4T04K7W608&X-Amz-Signature=684ad4f163c8ad2339dbb511c62cb53473a96f50d1f041832ddacc2cc912837c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSQ666XU%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQD%2BQA1T6%2FTjYoiRxKvBL%2Fppe1rmekXX9mALE4KJMtCsWAIhAMR6bUzvm011l4cvywyPZ0TZuHbN4P6TEBikOAnlCHbZKv8DCCAQABoMNjM3NDIzMTgzODA1IgzSfp1Ryejt8bm7qFgq3APU%2FpEZOIiCTLpYPaGqFP6zMVJWMbd6H8M9mcyz6CpIcVbkg75vfGE%2BQTzQlSVu0IQB%2BPMVjOIZVMwsiFbzQ%2Fx8npqL6p7zhFDoBfBmR%2B%2FjRRXpG09YzDfR8rEwzbcmcc%2BMbloXwHLC9IlhrcpM8c4j6FhyEgw12oj1nhH1Gg7r1VZbsg24LKg1urgwbwicKb4M4sUpFoRuZ1sBUcGUh2AFr1lb5RNwQCXVshfYAeQA0gktSm5Cn4v4uf6PdYVnHOQP8MqOHQunwZ%2FW6%2FhLde1YSGc2luakgdwd8z5xkjhnEqsH8b%2BNZdLcMePjDTqnC0xA6q3dVJiGLR3hAuWJS0QkfnR0Usp%2FsrnnhNsSy%2BJy9uhzRaesMU9VLYAi0BIxt28BHV9B47%2FDXnH11FL6y5KtNtPSpZSEtxFTzfuxdh4ktuwxh53lCTQ3BMNl7tS1R0EXTN4pMID0c%2Bbs9TgaBEDTZcehCw30dAdbe64eFSBdjJKZCTKj6M05Uiaxi9vkYOCH6zAfTkx%2FtvpDO2ddJkChpFxXp7kJi%2B4DFFp0HWF1JcC%2F5mIEN%2F3LvZ%2FBjlrFxO5%2FmDEyaDdya07YQ35KwqSvRWs3qwJFSEKFK%2Bf9w4iN%2FB2AComIt8SOA6g9mTD15L3JBjqkAaEh8f9rVn7hkrngv5oe02XwXsVBSjmYNn1NytYCk%2FMRXlz6Ih67VUDnhVpyYkVk0eH7w2dloPhdyDzmDODvb6v7ZZpENmPAnrt8sPujlyyIGhLvR7zyjtzzff6uLhdAO6PixOmCwTUdlyiXTfO6Tdxhzss1%2BW02%2B1anS8zz7FM0u6BBdbpDlAiFOY4oWD5gdCqDswKTKEGtexfYcx4T04K7W608&X-Amz-Signature=7c8a5635b3632748c9915124a07ff5b9cd3f6540b1a22eb28a6f513ab5b01fa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

