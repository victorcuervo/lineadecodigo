---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RMAI4ID%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDJHmbQAQlU38PKcQ2dQs1AyBh66NsYRAW5MvaMsqvETAiEA%2FHi6o73WKRMFMMZ5u6G4IjOj7xPYSRpJbL%2FGwHZ%2FIBIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCmCnHF0MHQcN%2BjT5yrcA9r%2FIrcz%2BnGUqGkzm%2FT4QlN4BripaPmLok%2B2CvgKAA1pW1wzz2uKRRnLhNIeFHTHoQ%2BR%2FYpCcQ%2FOx82nhuAF2l9cAHda0K2%2FtZBweufOQUNqpbHGzxPMEVqO8zUsNZjTx1dqSXV4F446X8YurqPtKC%2FGpJOzbVkKoxDNbGfOqUzNiHZFKjSfS02cfxSxQleczq%2Fp2Eao603HBoJ%2BHkEGJ5DwO27J6J4M04Xbh8Kbw9rQCvhME6Aze4CQ%2BRNw0xgC0GJD372uxpbWnrhpoEBD%2FmqEdzsFanIn%2BS41cvBwakLmuKLsg%2B28k%2F0RSCiXEaRscdEDRfGeJqfk83yAnRF0ixcThjxKbbDoSJ%2F2VhpyP8kPn4FOdFUETAWVwFfX%2BJ3zG%2BF3n%2FDWCklKMDTCQijS4n%2F3Rlv9I40eHn1Tdp%2BPpCBq%2FXnqOydj4FSbB9TcpoVF3bi1R3iz8Y6lxFm2IokvGP9%2BfyU1vCoP7SgLozlU20ANA5iqgqk1JBTRKXWmDhY2ckTJOM9GWwQIf6qvo3q0TlcesqM9y2V2gPR59QGrZ%2Fe7004Gt0RAot9Z3xAQr5EO05R6FYkl%2FB%2BVwPiH%2FBwzTG9s3n1L04eNsi6p1QGTBlBDDurbY%2BFpNahb1iPRMMK%2FxskGOqUB6KrNF3V340uIwbbZsEAlxTIahPGH86PojrlvZrVqSVPhNr0cRfIIbzXXSKltdjO8dKzIduw95k%2BNu2%2BDaQCiWiipM4%2Bri%2Bz3NK37HCTXZ7oqGmU4EWTN4taDf1Qn4w0f%2FmI6K2o9NwLtDF%2FunV9jZycxC2h1E%2BOdWOJ6bIQsOLoyQnK9jF%2FfCW7st3OYJmU4lnh57uekU7an7pibl%2BDmDeb1QnNh&X-Amz-Signature=16be5e90d7f91b9d708b273274bbcb5ad6033674829c5e030dbd12a1718d3f3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RMAI4ID%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIDJHmbQAQlU38PKcQ2dQs1AyBh66NsYRAW5MvaMsqvETAiEA%2FHi6o73WKRMFMMZ5u6G4IjOj7xPYSRpJbL%2FGwHZ%2FIBIq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDCmCnHF0MHQcN%2BjT5yrcA9r%2FIrcz%2BnGUqGkzm%2FT4QlN4BripaPmLok%2B2CvgKAA1pW1wzz2uKRRnLhNIeFHTHoQ%2BR%2FYpCcQ%2FOx82nhuAF2l9cAHda0K2%2FtZBweufOQUNqpbHGzxPMEVqO8zUsNZjTx1dqSXV4F446X8YurqPtKC%2FGpJOzbVkKoxDNbGfOqUzNiHZFKjSfS02cfxSxQleczq%2Fp2Eao603HBoJ%2BHkEGJ5DwO27J6J4M04Xbh8Kbw9rQCvhME6Aze4CQ%2BRNw0xgC0GJD372uxpbWnrhpoEBD%2FmqEdzsFanIn%2BS41cvBwakLmuKLsg%2B28k%2F0RSCiXEaRscdEDRfGeJqfk83yAnRF0ixcThjxKbbDoSJ%2F2VhpyP8kPn4FOdFUETAWVwFfX%2BJ3zG%2BF3n%2FDWCklKMDTCQijS4n%2F3Rlv9I40eHn1Tdp%2BPpCBq%2FXnqOydj4FSbB9TcpoVF3bi1R3iz8Y6lxFm2IokvGP9%2BfyU1vCoP7SgLozlU20ANA5iqgqk1JBTRKXWmDhY2ckTJOM9GWwQIf6qvo3q0TlcesqM9y2V2gPR59QGrZ%2Fe7004Gt0RAot9Z3xAQr5EO05R6FYkl%2FB%2BVwPiH%2FBwzTG9s3n1L04eNsi6p1QGTBlBDDurbY%2BFpNahb1iPRMMK%2FxskGOqUB6KrNF3V340uIwbbZsEAlxTIahPGH86PojrlvZrVqSVPhNr0cRfIIbzXXSKltdjO8dKzIduw95k%2BNu2%2BDaQCiWiipM4%2Bri%2Bz3NK37HCTXZ7oqGmU4EWTN4taDf1Qn4w0f%2FmI6K2o9NwLtDF%2FunV9jZycxC2h1E%2BOdWOJ6bIQsOLoyQnK9jF%2FfCW7st3OYJmU4lnh57uekU7an7pibl%2BDmDeb1QnNh&X-Amz-Signature=4892d8d0ce6c42d3425082e17eb7c7067d499c2e1ee67f4086012d17166ff1d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

