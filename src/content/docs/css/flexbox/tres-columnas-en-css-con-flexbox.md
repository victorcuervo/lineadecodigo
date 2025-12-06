---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NNZLWIN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOwsZC6q3iNxiWH9Ze7eIX%2FG6%2FXNg8Stnk1KQt8z8Y7QIhAMjavj8bHlESH9NFjZVGpBp2R378QyA8QNKFiVyRrTgFKv8DCHoQABoMNjM3NDIzMTgzODA1IgyiCCbsp9Q8B4xoEi4q3AP2clkS%2BLDmyopnGcR%2FWGnoyvmfUeeyHrrpVVCAIgLZbMBzQT9SGMuRxiBDkujzlPf4ndmBW6s1z0AsHSUj2VMvY3RiAZhydfewDC8JSp%2BrS3lYzn0amSdSarempaQQQ9xDFXVw84hM4mInrcmY6Ci%2BLUtInnCydtjbzVa39VVJlAhE0X%2F70BldFwFWGitmfP7PCzp6%2BpIAddrFQ9LhMJ8qlLoLkFoLHow%2FwXH0Q%2FQNtgHAh3RHuXlzjKwmYQ3JaKSjJ8nXYOjursh2tt3JQooWnCWfiwX%2BQnBQWq5e4bYACdfa9IMMk3i357ABCwVeHqGBKzFTnQniGWD1R8zyL4mVrybHNLGfzunzpGmDDQHT%2B74fCDRD31%2FqZAY5WYMvKnmxEsmMSST%2BgKznp%2FXZEKydRW48LnPpK%2FhfKFh0ooYaetJt9hqr9JCZnkZjTqC0hj6zfvpwXe3tMyU7DpTE3cA%2FEsT%2B6JFw2O23CGAX86WBo8MXwUuJt%2Fc4TpotkZmeHw0KKkT7ad1WYdwSDlO5P%2Bs0KgnLnWZpZKb8eI%2BuTZ4Zg8isF8YIN%2FKLLLWhO6By7gtwV7xOYEtfkALv2RxzIy6IOgtCmD7Wnw7NvHMNBflcX43j8gfW54eTmbSoSDDPyNHJBjqkAabAZvgNY0kRku07HPj%2Bh580gQZqAGwFn%2FbZnqZf9zQsqahbv4st1c3APiHhg7xdB5Rrd28tWROKEE4SdP87RlNcT5zgQ%2BLgSK7zM42axeOUwmiLbCjxTGWZmRjjAbcrEfeu9bawmgM9nsIejQD1dZbGTbKr1%2F%2BO9D6c%2FhunXRpX9%2BEYNaKW4K4rGC3k7rpywf%2BOSUK6IE3HTO5dxjzZlB148lPz&X-Amz-Signature=8a9f72654ce4ba20b91f2b0b479c5d934c122a9b9b6a262f6f4e7b46becf71b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NNZLWIN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOwsZC6q3iNxiWH9Ze7eIX%2FG6%2FXNg8Stnk1KQt8z8Y7QIhAMjavj8bHlESH9NFjZVGpBp2R378QyA8QNKFiVyRrTgFKv8DCHoQABoMNjM3NDIzMTgzODA1IgyiCCbsp9Q8B4xoEi4q3AP2clkS%2BLDmyopnGcR%2FWGnoyvmfUeeyHrrpVVCAIgLZbMBzQT9SGMuRxiBDkujzlPf4ndmBW6s1z0AsHSUj2VMvY3RiAZhydfewDC8JSp%2BrS3lYzn0amSdSarempaQQQ9xDFXVw84hM4mInrcmY6Ci%2BLUtInnCydtjbzVa39VVJlAhE0X%2F70BldFwFWGitmfP7PCzp6%2BpIAddrFQ9LhMJ8qlLoLkFoLHow%2FwXH0Q%2FQNtgHAh3RHuXlzjKwmYQ3JaKSjJ8nXYOjursh2tt3JQooWnCWfiwX%2BQnBQWq5e4bYACdfa9IMMk3i357ABCwVeHqGBKzFTnQniGWD1R8zyL4mVrybHNLGfzunzpGmDDQHT%2B74fCDRD31%2FqZAY5WYMvKnmxEsmMSST%2BgKznp%2FXZEKydRW48LnPpK%2FhfKFh0ooYaetJt9hqr9JCZnkZjTqC0hj6zfvpwXe3tMyU7DpTE3cA%2FEsT%2B6JFw2O23CGAX86WBo8MXwUuJt%2Fc4TpotkZmeHw0KKkT7ad1WYdwSDlO5P%2Bs0KgnLnWZpZKb8eI%2BuTZ4Zg8isF8YIN%2FKLLLWhO6By7gtwV7xOYEtfkALv2RxzIy6IOgtCmD7Wnw7NvHMNBflcX43j8gfW54eTmbSoSDDPyNHJBjqkAabAZvgNY0kRku07HPj%2Bh580gQZqAGwFn%2FbZnqZf9zQsqahbv4st1c3APiHhg7xdB5Rrd28tWROKEE4SdP87RlNcT5zgQ%2BLgSK7zM42axeOUwmiLbCjxTGWZmRjjAbcrEfeu9bawmgM9nsIejQD1dZbGTbKr1%2F%2BO9D6c%2FhunXRpX9%2BEYNaKW4K4rGC3k7rpywf%2BOSUK6IE3HTO5dxjzZlB148lPz&X-Amz-Signature=eaf49fa8f6da699d8b5b53d6aca6f90e9df24fb733787898ad6816448e1cf62a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

