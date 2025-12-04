---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466743ACOT3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHq%2Bi11srguNhdFztkv3WsgFkVKVcsZ3eBodXhOZrYKcAiAyjEVfRBXOKY5x3kBaalHKHoXqJ77iBWbrA68W76GVpSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM9AQDEDY1tkgq%2FXvXKtwDEdLC9ULs0lKgUZMpGC51yPVdogy0iTCFfaoIXXmqwjwH9EdPuTm5u%2FhcGP%2BUyHoK9cjF%2Bl85cQqIDBriY7yZXfX%2Fe8%2FaiB0GV9avCHpikA0eqPuaF2S9jU5nqrIRx5VniwmeLj%2FVYp%2B9Dauen9cOC%2FrZ53DCQPNwicv9nGf%2FdE%2BdjVcP01UJOqq1bmve0L%2FKyg%2FLUDZkAJSpqrFi%2BLIRrIeU1Gk8bA943i8ycobleCBlbPbSQnyQPWsB0LAEyej1TRA6sGnDCnfFtoHqrR20GuBEncg33pgGGe%2FJC%2FK2LFhN04xeenvZTG9JkAbD%2FkHS3XjR6hf2XFWH1RNL1YcxR%2FxXxWWk8setw%2BB7YpXfvEPP7I6C%2Fh%2F2SlQG7XZ5GeXejQF8wOFB49DfYmYwx2yqwvETWBf33QZI4nTqHTJ3RxPOlDHf18xFiEK82nHhwwlBxshm9%2BNfRR%2B2Izmap1P3nP9cASOmhE3hhGiz8UK%2BrqhrPs%2B3S1STvF4XRdB3KPEHSVjMIkjGdiuBOm825RWHX8baxm8jE%2FT%2BYDMDKw3PSn5TVaYK6qz5xz5pO%2B5XpxctrULO7hK6QVB%2FErIk8gqLS7vxW5ZJKTwX5Aq1Lf94yokg6XTzc0G6LbB2fxowhbTDyQY6pgGX%2BuXtX5UI8j%2FaBQ5c5wA5Wc9tkspESWMyp%2Bf4vrFI2y2HnG7cT5uCeczQ%2FxGA%2F0xlBNBtke3sqBWCYqJgP60yTAveGtBP5B2dSCRJs7500QJ4nakwqjCQKSBXU1ODy7ga0oFCWIodGy74woNeHkBizPMkrR6d%2FnspiDtsCwkDDWpxBB0EZ%2Bl13BJ%2FzBhiIVsF0OaRSL9tKycq8QTNTX7Zzff6gOir&X-Amz-Signature=4033f92dcb05b9ab8b4eb3c86f04c4c1a8b53963144e3c2c13e35c3240daf68d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466743ACOT3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIHq%2Bi11srguNhdFztkv3WsgFkVKVcsZ3eBodXhOZrYKcAiAyjEVfRBXOKY5x3kBaalHKHoXqJ77iBWbrA68W76GVpSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM9AQDEDY1tkgq%2FXvXKtwDEdLC9ULs0lKgUZMpGC51yPVdogy0iTCFfaoIXXmqwjwH9EdPuTm5u%2FhcGP%2BUyHoK9cjF%2Bl85cQqIDBriY7yZXfX%2Fe8%2FaiB0GV9avCHpikA0eqPuaF2S9jU5nqrIRx5VniwmeLj%2FVYp%2B9Dauen9cOC%2FrZ53DCQPNwicv9nGf%2FdE%2BdjVcP01UJOqq1bmve0L%2FKyg%2FLUDZkAJSpqrFi%2BLIRrIeU1Gk8bA943i8ycobleCBlbPbSQnyQPWsB0LAEyej1TRA6sGnDCnfFtoHqrR20GuBEncg33pgGGe%2FJC%2FK2LFhN04xeenvZTG9JkAbD%2FkHS3XjR6hf2XFWH1RNL1YcxR%2FxXxWWk8setw%2BB7YpXfvEPP7I6C%2Fh%2F2SlQG7XZ5GeXejQF8wOFB49DfYmYwx2yqwvETWBf33QZI4nTqHTJ3RxPOlDHf18xFiEK82nHhwwlBxshm9%2BNfRR%2B2Izmap1P3nP9cASOmhE3hhGiz8UK%2BrqhrPs%2B3S1STvF4XRdB3KPEHSVjMIkjGdiuBOm825RWHX8baxm8jE%2FT%2BYDMDKw3PSn5TVaYK6qz5xz5pO%2B5XpxctrULO7hK6QVB%2FErIk8gqLS7vxW5ZJKTwX5Aq1Lf94yokg6XTzc0G6LbB2fxowhbTDyQY6pgGX%2BuXtX5UI8j%2FaBQ5c5wA5Wc9tkspESWMyp%2Bf4vrFI2y2HnG7cT5uCeczQ%2FxGA%2F0xlBNBtke3sqBWCYqJgP60yTAveGtBP5B2dSCRJs7500QJ4nakwqjCQKSBXU1ODy7ga0oFCWIodGy74woNeHkBizPMkrR6d%2FnspiDtsCwkDDWpxBB0EZ%2Bl13BJ%2FzBhiIVsF0OaRSL9tKycq8QTNTX7Zzff6gOir&X-Amz-Signature=d16001aea1f54d3d9350b83f09c4e12e1922d9cbfe5dc311494056c44278c431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

