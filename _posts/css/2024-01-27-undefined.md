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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH4S67XU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIGV%2BlFhaRAFqLw19jSD3KgcIirzP6IB0FB1TSvyuwLneAiBkp09oIN3WkpEjoeKCWMh7QFPsWgPXyd585m%2BoZyPL2Cr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIManXA%2Fmp06Nghz2VrKtwDe7Bz%2ByJSuX1Uzgg9qVvlWPuPrKi1%2BYUMqGadu76DflTXAJaDieJ5N5%2FWEhOxAShMmqFGACwnKLUczmUykKod%2Bb8yDTB9Hl6Wzpe6L88gw3Df5Zfl5WWRo4sJn10JtGFcscIPT2FuGiFscOH5NAt1hA7gOqXFilhT%2FCk43f6lUH0NuzKX3shjU3FNdJk1pF2%2BtCWDRPzDvCDWoNP428FhUhafsERC6GmpIVxvRKyIv56y%2BDt7Gbl2M8%2BwfJChoCuNwOcIhla8o0Sr2mYWomUYNoOuE6F8GCdBPsXbfb0VmqvuJ6rvYVOUxkUIq%2FHb9VqPtIZb9HQ0DpuKlmzWbtQdzIQ3ErbbUrkwNFa5Itjc6GzfGMg4f%2F7OFyjx2Q6uyQdaAccZ%2BbN6CYF48vbYOdH6Mtsvw3ZH9ccuKvQ6Fq%2BbJiD4S%2Bb8X3vMNOJlJRRdEXFkdNuLXQ7rFdHZHMyW4M8TVTMIe1PadgiX1XHhFxQx1dqvESkGpTCEHJ5AoCfQlebHj5M9iZ5q%2Fub6OSfJ6GNCpRP1VrdqHCSQDL59PHB0XGp3wqfwJJX3Y6zQ0%2FXAyC%2B6hLe4G8ARDJDth2UELPXU%2F%2BT2o0lTPQltRjH9YD3c3SXOkxoZqJ896AxQeFww09S%2FyQY6pgGPFnA3uxsvKhUPna6HEW7d3jzlKK0Adz8e%2BldLa95yFGp801itG%2BaCI3P2Rww9l8b%2BaKv3PatNQpzXdvkBfAHX03EZKyqHHvcqUY9qYD9DBlknkyOYj7b7o%2FxFSSN6ZQFws%2BEzLzZRCdfE88WqdosjnVn72yQ8xPRzNl3k6iXTorkv5b7bBuA5agmtfly0RxuMkR2LDkRJn165AxlGaMXDe4d9IzQJ&X-Amz-Signature=ff3649694d7932ed24395f33201a2d0432160c2cd1ed1c82c788ff95d102a610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH4S67XU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIGV%2BlFhaRAFqLw19jSD3KgcIirzP6IB0FB1TSvyuwLneAiBkp09oIN3WkpEjoeKCWMh7QFPsWgPXyd585m%2BoZyPL2Cr%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIManXA%2Fmp06Nghz2VrKtwDe7Bz%2ByJSuX1Uzgg9qVvlWPuPrKi1%2BYUMqGadu76DflTXAJaDieJ5N5%2FWEhOxAShMmqFGACwnKLUczmUykKod%2Bb8yDTB9Hl6Wzpe6L88gw3Df5Zfl5WWRo4sJn10JtGFcscIPT2FuGiFscOH5NAt1hA7gOqXFilhT%2FCk43f6lUH0NuzKX3shjU3FNdJk1pF2%2BtCWDRPzDvCDWoNP428FhUhafsERC6GmpIVxvRKyIv56y%2BDt7Gbl2M8%2BwfJChoCuNwOcIhla8o0Sr2mYWomUYNoOuE6F8GCdBPsXbfb0VmqvuJ6rvYVOUxkUIq%2FHb9VqPtIZb9HQ0DpuKlmzWbtQdzIQ3ErbbUrkwNFa5Itjc6GzfGMg4f%2F7OFyjx2Q6uyQdaAccZ%2BbN6CYF48vbYOdH6Mtsvw3ZH9ccuKvQ6Fq%2BbJiD4S%2Bb8X3vMNOJlJRRdEXFkdNuLXQ7rFdHZHMyW4M8TVTMIe1PadgiX1XHhFxQx1dqvESkGpTCEHJ5AoCfQlebHj5M9iZ5q%2Fub6OSfJ6GNCpRP1VrdqHCSQDL59PHB0XGp3wqfwJJX3Y6zQ0%2FXAyC%2B6hLe4G8ARDJDth2UELPXU%2F%2BT2o0lTPQltRjH9YD3c3SXOkxoZqJ896AxQeFww09S%2FyQY6pgGPFnA3uxsvKhUPna6HEW7d3jzlKK0Adz8e%2BldLa95yFGp801itG%2BaCI3P2Rww9l8b%2BaKv3PatNQpzXdvkBfAHX03EZKyqHHvcqUY9qYD9DBlknkyOYj7b7o%2FxFSSN6ZQFws%2BEzLzZRCdfE88WqdosjnVn72yQ8xPRzNl3k6iXTorkv5b7bBuA5agmtfly0RxuMkR2LDkRJn165AxlGaMXDe4d9IzQJ&X-Amz-Signature=52ccc3f279f5477ff87aab15735ecf71ccde177eb041c839422ed625ed56b0a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

