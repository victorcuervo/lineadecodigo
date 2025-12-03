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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PNA775I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T020058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAS85lNxu%2BO%2BHcOmxAG6dqnrbrAmQQdYNBlm90RxZr7KAiAO%2FiJtsF%2FRrrVXwCA5yJlAB5lzvEe6ocqCu0mo5dzQWCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMfM24AvkzE1s5rUFpKtwDHIGz%2FX%2B4p1tt8C%2BY5f15oJBPJ%2B526avNQJgk8BE%2BjImJQwfxK53H0Yxks4%2FCj4Mcdxfl5J%2FEgCxRAVA%2FjAgSFZL4n%2BPZ00xSiT3jx2yLfaIejVJ4hjHnmEidxiCuEgBvMPXKY19IAX3LemCuX0vK%2BgiXgIvR%2BP1bsjC%2B7sYE5%2FZYl9N6JrO9mLZMvw3tb2Y0Tzx4cfjGclcLhH496W8L9kTb1CLHDj3RrItIit225Q5%2BNrRLq6evatyFBMZN8ix5%2Fj9EgXRiG4PB9vMYcb8BrT%2BwRFYnLoYaDMzizgI0LioxBgth57501Pal1kMoRcLEYNltXF2cBjiOluY5duo8gzNyPPHMGBt%2FqVMCAYiT6cHjtCL2DqHaJcW3f2E16Dyd1UsX5c3pjGum4jWWZKu7%2Fz899nXsdWXCej%2F033E0huxbDTaMzSV3Zs%2F8lmd%2BjtCIoVC3PNkweZzoFvGrTOkcIOcUQ4Gex%2BHmSvvUp1sLwWcHI%2BfjxN6YiH9W7mZVn8x2vkHkA3%2FN6MQYyuirf82MKmaWExqctE3sQ3yRSUT3Up7rYK8YWW49SOyAUNDyb4JWw4BdOIo3nrnP%2BPSnMtpLvOxyJ4yXgDoEYpL6jiBn%2FJl0drXKbBTwt5KS9GEwpJa%2ByQY6pgG%2F7xxdca8fAk4gTF8lgET2ddLdEJbyIZqiPzVLbEQk64afKQWdIC3ebswr%2Fy0GVnkM3f%2FImzsshecQjl9xUvmNQnxsR%2FVsYpIxQ1LfQK1IaHNTE%2B06UK4%2BdMX30smAZXuFIFEHiMLhoxD%2Fk%2FjKTGPQxI0yxQGwketVXWJAVD8p0stjVtUmailfJmh84GHN0JwxFAWfjhKiBddDxCq8EGyWqRIAFoUC&X-Amz-Signature=9a9cd7a4777e151371d44214f9fc7fc310171c6b6dd0b222a89338fea3820433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PNA775I%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T020058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIAS85lNxu%2BO%2BHcOmxAG6dqnrbrAmQQdYNBlm90RxZr7KAiAO%2FiJtsF%2FRrrVXwCA5yJlAB5lzvEe6ocqCu0mo5dzQWCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMfM24AvkzE1s5rUFpKtwDHIGz%2FX%2B4p1tt8C%2BY5f15oJBPJ%2B526avNQJgk8BE%2BjImJQwfxK53H0Yxks4%2FCj4Mcdxfl5J%2FEgCxRAVA%2FjAgSFZL4n%2BPZ00xSiT3jx2yLfaIejVJ4hjHnmEidxiCuEgBvMPXKY19IAX3LemCuX0vK%2BgiXgIvR%2BP1bsjC%2B7sYE5%2FZYl9N6JrO9mLZMvw3tb2Y0Tzx4cfjGclcLhH496W8L9kTb1CLHDj3RrItIit225Q5%2BNrRLq6evatyFBMZN8ix5%2Fj9EgXRiG4PB9vMYcb8BrT%2BwRFYnLoYaDMzizgI0LioxBgth57501Pal1kMoRcLEYNltXF2cBjiOluY5duo8gzNyPPHMGBt%2FqVMCAYiT6cHjtCL2DqHaJcW3f2E16Dyd1UsX5c3pjGum4jWWZKu7%2Fz899nXsdWXCej%2F033E0huxbDTaMzSV3Zs%2F8lmd%2BjtCIoVC3PNkweZzoFvGrTOkcIOcUQ4Gex%2BHmSvvUp1sLwWcHI%2BfjxN6YiH9W7mZVn8x2vkHkA3%2FN6MQYyuirf82MKmaWExqctE3sQ3yRSUT3Up7rYK8YWW49SOyAUNDyb4JWw4BdOIo3nrnP%2BPSnMtpLvOxyJ4yXgDoEYpL6jiBn%2FJl0drXKbBTwt5KS9GEwpJa%2ByQY6pgG%2F7xxdca8fAk4gTF8lgET2ddLdEJbyIZqiPzVLbEQk64afKQWdIC3ebswr%2Fy0GVnkM3f%2FImzsshecQjl9xUvmNQnxsR%2FVsYpIxQ1LfQK1IaHNTE%2B06UK4%2BdMX30smAZXuFIFEHiMLhoxD%2Fk%2FjKTGPQxI0yxQGwketVXWJAVD8p0stjVtUmailfJmh84GHN0JwxFAWfjhKiBddDxCq8EGyWqRIAFoUC&X-Amz-Signature=e4662f10702ab26c1641db9842aae2dd0d0ea46964b00ba4ce4b5f1e457aadd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

