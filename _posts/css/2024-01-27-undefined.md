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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEBYTO42%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T171351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD%2F6gvIvmxu0mqkAqM2ZD6pPeNbRR%2BAHDWzuL7LZ32jbQIgXusnRIhzfomvwlDf6I00iZsSZNT7Cjlslq5tTqX065Iq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDL82YioGLpGD2EcMcSrcAxmKYMYIVAJ83nf%2BREqqqW4lzG44FNOV7FOMZLjusAw3LqHpVAy4UjNI72L83gJP9B9t3onZb0Ehv%2FST05a2cU8Kf8ahQ58LHOnfyXZNflePOpJf%2Bbt1rI%2FkgxHnovHPnDt45AXVKc1q0O6V575l%2Bw0ZBGqkIYiQCK5wsj0t9dxMv7ciYlAbc1p9wH2jxndjQntG6ImZpPNmH72F6vG2%2Fmk5kM5IYWRdsmlbthvwzWYXikAX78isTb9%2BkqK%2BQsAiz1qciTLUVLJocE3vPX%2FuxcB%2FVgtvNL3jboUkoYp5j1ksmRqqMsccS%2BCuz6s%2B4e3m0vJsidQ1b3rOE2rqVLVWlTg6qLQB73AKKcSWONO2ayikFF2RovfQcbs20PCQd7Tsv%2B5xihm6zgZ1N9sqJX5hOg7Di8LJ2A8T4%2BGg9fs47ty9c2PtrbEq8inOeHBPDrswWNzTU0X2E%2B9gEIEJ7CkY%2FLUYyMAspkfE5LeEPq7NI6K0SpqwgjKBcpFZ0VKl64fMUHkB5%2BgCu%2FrGOImsVDqqCJIZxbfqGuMdMS6QnB40UmFUeSXOubeJMcNnp2%2F2wzbHW5j34ab2YVYmK4aySeiFRAeqEIe5BTWf%2BzSR04sIxZz8hsFQlD8XlyHo4lLxMPXawckGOqUBOEJ08%2BjZwYwfz6shWn6mp2JKOlCpg7rmu2elTAy%2BCRU2M%2Bs0k3rCMx0rS1BZc6PgAJHz8eO2OHfDcsSyLY2niypOyphzTXbRiNsLMB648MR8V7d0VLTyb6G7VRTtLemLpD8BNK3KK0g2f4X6%2BLw69OoNm0iwLUC5QuQwfZji6pzqXUH6mc16SXVNv2FDeiDk8qJnqphOEQlL66M3dlyKqFcgUobR&X-Amz-Signature=a8f470cdda4713ee9733188b496ae43c84544f84fc2b3fd3c506a19969cfe973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEBYTO42%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T171351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQD%2F6gvIvmxu0mqkAqM2ZD6pPeNbRR%2BAHDWzuL7LZ32jbQIgXusnRIhzfomvwlDf6I00iZsSZNT7Cjlslq5tTqX065Iq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDL82YioGLpGD2EcMcSrcAxmKYMYIVAJ83nf%2BREqqqW4lzG44FNOV7FOMZLjusAw3LqHpVAy4UjNI72L83gJP9B9t3onZb0Ehv%2FST05a2cU8Kf8ahQ58LHOnfyXZNflePOpJf%2Bbt1rI%2FkgxHnovHPnDt45AXVKc1q0O6V575l%2Bw0ZBGqkIYiQCK5wsj0t9dxMv7ciYlAbc1p9wH2jxndjQntG6ImZpPNmH72F6vG2%2Fmk5kM5IYWRdsmlbthvwzWYXikAX78isTb9%2BkqK%2BQsAiz1qciTLUVLJocE3vPX%2FuxcB%2FVgtvNL3jboUkoYp5j1ksmRqqMsccS%2BCuz6s%2B4e3m0vJsidQ1b3rOE2rqVLVWlTg6qLQB73AKKcSWONO2ayikFF2RovfQcbs20PCQd7Tsv%2B5xihm6zgZ1N9sqJX5hOg7Di8LJ2A8T4%2BGg9fs47ty9c2PtrbEq8inOeHBPDrswWNzTU0X2E%2B9gEIEJ7CkY%2FLUYyMAspkfE5LeEPq7NI6K0SpqwgjKBcpFZ0VKl64fMUHkB5%2BgCu%2FrGOImsVDqqCJIZxbfqGuMdMS6QnB40UmFUeSXOubeJMcNnp2%2F2wzbHW5j34ab2YVYmK4aySeiFRAeqEIe5BTWf%2BzSR04sIxZz8hsFQlD8XlyHo4lLxMPXawckGOqUBOEJ08%2BjZwYwfz6shWn6mp2JKOlCpg7rmu2elTAy%2BCRU2M%2Bs0k3rCMx0rS1BZc6PgAJHz8eO2OHfDcsSyLY2niypOyphzTXbRiNsLMB648MR8V7d0VLTyb6G7VRTtLemLpD8BNK3KK0g2f4X6%2BLw69OoNm0iwLUC5QuQwfZji6pzqXUH6mc16SXVNv2FDeiDk8qJnqphOEQlL66M3dlyKqFcgUobR&X-Amz-Signature=10c66e5747d29391e48db6b417d39148f5470ab994730e8d79e1fc6d17625ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

