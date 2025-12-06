---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z76BCTLC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpZWMud4q9%2F4I2Tk%2BSEGTwjBMTb2sOyvLoGckTVfXxTgIhAI%2FIyvoP%2BQzn1Eojh%2FIhns1dz%2FlM60Wtyu3sEjO9VuAcKv8DCHoQABoMNjM3NDIzMTgzODA1IgyBfPv7wFFZlIakHxAq3ANTYBss1nyENpohni5V%2FskDKtIMvKcKcYQ1lH2m4T14lRcKPCFXke91lwmZIZm5qQzI%2FtsLR89hxdJFXHtYplAoCGreiHNDP4kZLo%2FDQ%2FYL7YKjzklsajqNtwlruXShCux6jQn6YSuwNldB9yTTS6aTAGFtNa3iHNMf0A9THG9fXn0VID%2BtIErWPOQVwAGs1DuIN1H6I5lbw2yI%2Bgw719Ay0sgCV9IAmctKxcIwE3dGz4L84TNCJkmqNFnR09PC4xSATDwgXQrmtqLD6VIwiCcVO91sSl0%2BhEXeXXRz6r7z7GBK8fkhSzvgoYBTk9HcEGbtRQYH0FbNTloAHPu0DpMgJB2MU96T7UE9KvdARBQrm7tghb%2FEs7puveohFpFLl86BNV9G31HsS7cd8%2BwORRMyjPj9jviRFQdGJwVVsDVq08YbQYRxXiXXWEi%2F83r8GgQVXvwtbQbSFZywm2L7VpIwdjbVQgWjObzz13hGDvwhsdDLdUZ0xEfLRKjdM%2FQbEDSFJZzll26ncpCJC1cz%2B0mS4DG68PIeiZt7Lh3B4YOXw3eAny%2F5B%2BRNoqRGUdSsvnMxV3zDR1Wq1BKTSyVVNyndl19AUdX653pZiQRI4w1HRRpo%2BhOH6VWmgCRKIzCOxtHJBjqkAeHhUbnv0rPIwFKzEXzYyDVCqgbcJDFEcqQZBPRpS%2BZQTP1qtidec63TVJJ%2Bt6Do7qWDCxZfk7Bnso3FLzXHO5FlCBZq4n3um4Q7YPhIGFneF%2BqYJMM6tFBSyt%2BoOnsD%2BzTXFhvwZBKNNDzUr%2Ffv7KpHy28pJ%2F0fN%2FIbd4IJhUPY95s2OCs0CwoHdi1V8SpMCYhh5p36srLRrX%2Fez95WE6MiIMcw&X-Amz-Signature=7b9135b831d0181e9ddca0149069d718a7f6b34564b63e4769f503be760664e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z76BCTLC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T172458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpZWMud4q9%2F4I2Tk%2BSEGTwjBMTb2sOyvLoGckTVfXxTgIhAI%2FIyvoP%2BQzn1Eojh%2FIhns1dz%2FlM60Wtyu3sEjO9VuAcKv8DCHoQABoMNjM3NDIzMTgzODA1IgyBfPv7wFFZlIakHxAq3ANTYBss1nyENpohni5V%2FskDKtIMvKcKcYQ1lH2m4T14lRcKPCFXke91lwmZIZm5qQzI%2FtsLR89hxdJFXHtYplAoCGreiHNDP4kZLo%2FDQ%2FYL7YKjzklsajqNtwlruXShCux6jQn6YSuwNldB9yTTS6aTAGFtNa3iHNMf0A9THG9fXn0VID%2BtIErWPOQVwAGs1DuIN1H6I5lbw2yI%2Bgw719Ay0sgCV9IAmctKxcIwE3dGz4L84TNCJkmqNFnR09PC4xSATDwgXQrmtqLD6VIwiCcVO91sSl0%2BhEXeXXRz6r7z7GBK8fkhSzvgoYBTk9HcEGbtRQYH0FbNTloAHPu0DpMgJB2MU96T7UE9KvdARBQrm7tghb%2FEs7puveohFpFLl86BNV9G31HsS7cd8%2BwORRMyjPj9jviRFQdGJwVVsDVq08YbQYRxXiXXWEi%2F83r8GgQVXvwtbQbSFZywm2L7VpIwdjbVQgWjObzz13hGDvwhsdDLdUZ0xEfLRKjdM%2FQbEDSFJZzll26ncpCJC1cz%2B0mS4DG68PIeiZt7Lh3B4YOXw3eAny%2F5B%2BRNoqRGUdSsvnMxV3zDR1Wq1BKTSyVVNyndl19AUdX653pZiQRI4w1HRRpo%2BhOH6VWmgCRKIzCOxtHJBjqkAeHhUbnv0rPIwFKzEXzYyDVCqgbcJDFEcqQZBPRpS%2BZQTP1qtidec63TVJJ%2Bt6Do7qWDCxZfk7Bnso3FLzXHO5FlCBZq4n3um4Q7YPhIGFneF%2BqYJMM6tFBSyt%2BoOnsD%2BzTXFhvwZBKNNDzUr%2Ffv7KpHy28pJ%2F0fN%2FIbd4IJhUPY95s2OCs0CwoHdi1V8SpMCYhh5p36srLRrX%2Fez95WE6MiIMcw&X-Amz-Signature=71ae23859ff04641e758e7d7a5312d1fa1d29c2abf7679e0f1a4505ca8863b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

