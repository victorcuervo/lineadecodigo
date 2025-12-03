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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOOU3ZD2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDXKr847s5A5dUm8ly4haw4xEyAVEPzsYnfZxNUylhQkAIgR54sbThIBosc18BGMU9ZZ8Yf3%2FEBKBORXPf8i8mbavcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDH%2BsrHRu9EUhzWz4eCrcA6U%2FPoSJRTVg%2FaW03KMI2uoVhghs9m6XOtYJ8KTSWE6%2BEyVUaG3zdgoRdu1DkrEa3JKyDYDJtIkMsosntgvfl7oE2fP1MTp44WYnxecwnGvQVzvh8F42LiW1BgYl8uYYjEw%2B3WvAD5kp1xSiJSLYbi7RoVUCzIjncqThhucTmmLCzWaE1RjGh2%2B2Vivb8MmKG%2FIBbpq0LRKUJjtj0h9rOG3A%2FOipTKye1%2BF9HTTdVlDer1WH%2Bi0Qm2shUuwfUB67gPNdpc9Jlgi%2Bz0asxp48kQOI6%2B9dG%2FD5gfBwhxsDS32soYrTf8DvxynHQ4OdTa7GMfKxFhroycHC6mhtJ5sEa%2F6jZNNBT%2FVZ4VBZL4095%2FYXxpF%2B%2FhMy47ZfKrT4a4cVIjeG2YTdswIPwhemIchvIvy3E17rS9K%2BPYprI%2B09Zkyqw1QU0m%2BeBSMsDNWVwwFHEd%2FvX4h3fGG3PF3fIBv5JCy0Aq%2FCeMrUFc1p140OYHTxN7HpBSxOGS0y%2F%2FZoaP%2BWUe9YHuIk1NUlUU0xFDPnJltL0C9luQ6vgc3OEwhKriNcYPcY2qedFL8fkzNGhRv69z88%2B7tpBjd4XowiaLvbPQzIvWXbYs%2BKKhI5W978ixQyiDu0PH3H2cw4r8d3MMbUv8kGOqUBOVw8nE2ORAP%2F3s9BpaH%2F4OEhDAtUpmKQtpQ3sONg6rD2fHSZP0gFrcs2qZiUgiA6SnyW%2FntKu6ZEWgCJd4WvXykg3szvMFt%2FQU02A5PgR7%2B5wJje7yY417QA6bY9maUYHICa5El7tm5%2B7zxhubfoyYhbgLqF2jjBPq9iRcjSrqOXevySqWmkWHNUtUomjXKS32Kv0mBaBwfuEBZNWBbz2lDkl7yT&X-Amz-Signature=cb9a7611259f5a2b097295bf539333916b3d78da7896ab1c082ece19badfbad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOOU3ZD2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T074826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDXKr847s5A5dUm8ly4haw4xEyAVEPzsYnfZxNUylhQkAIgR54sbThIBosc18BGMU9ZZ8Yf3%2FEBKBORXPf8i8mbavcq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDH%2BsrHRu9EUhzWz4eCrcA6U%2FPoSJRTVg%2FaW03KMI2uoVhghs9m6XOtYJ8KTSWE6%2BEyVUaG3zdgoRdu1DkrEa3JKyDYDJtIkMsosntgvfl7oE2fP1MTp44WYnxecwnGvQVzvh8F42LiW1BgYl8uYYjEw%2B3WvAD5kp1xSiJSLYbi7RoVUCzIjncqThhucTmmLCzWaE1RjGh2%2B2Vivb8MmKG%2FIBbpq0LRKUJjtj0h9rOG3A%2FOipTKye1%2BF9HTTdVlDer1WH%2Bi0Qm2shUuwfUB67gPNdpc9Jlgi%2Bz0asxp48kQOI6%2B9dG%2FD5gfBwhxsDS32soYrTf8DvxynHQ4OdTa7GMfKxFhroycHC6mhtJ5sEa%2F6jZNNBT%2FVZ4VBZL4095%2FYXxpF%2B%2FhMy47ZfKrT4a4cVIjeG2YTdswIPwhemIchvIvy3E17rS9K%2BPYprI%2B09Zkyqw1QU0m%2BeBSMsDNWVwwFHEd%2FvX4h3fGG3PF3fIBv5JCy0Aq%2FCeMrUFc1p140OYHTxN7HpBSxOGS0y%2F%2FZoaP%2BWUe9YHuIk1NUlUU0xFDPnJltL0C9luQ6vgc3OEwhKriNcYPcY2qedFL8fkzNGhRv69z88%2B7tpBjd4XowiaLvbPQzIvWXbYs%2BKKhI5W978ixQyiDu0PH3H2cw4r8d3MMbUv8kGOqUBOVw8nE2ORAP%2F3s9BpaH%2F4OEhDAtUpmKQtpQ3sONg6rD2fHSZP0gFrcs2qZiUgiA6SnyW%2FntKu6ZEWgCJd4WvXykg3szvMFt%2FQU02A5PgR7%2B5wJje7yY417QA6bY9maUYHICa5El7tm5%2B7zxhubfoyYhbgLqF2jjBPq9iRcjSrqOXevySqWmkWHNUtUomjXKS32Kv0mBaBwfuEBZNWBbz2lDkl7yT&X-Amz-Signature=b01d7ea5e73b750b88705ee063e3ce6d8cc23607c059d24a8821ad66507aae06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

