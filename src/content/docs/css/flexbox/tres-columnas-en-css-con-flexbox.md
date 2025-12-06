---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A36HOLU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxSqzUAj5aRJ8ZEVQ9UuEoSDOi0P1sFLGw8QIwyasU2AiBp%2FZv3E0FDdljLzJAt%2FFxvegvB4mk17F5XIPUu0CZbuyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMljY%2BITpj45iRBYVgKtwDrLOQZyTfYBy%2FQ8kMtcCQlCR5D5V6PqhAwp6QjHuDzPJnCyq%2FivAMfP9OHqCzysU2JE1K%2FGyw2kCWF%2FOBYaTWGHZqPI40%2Bb3C9EvaTgcRCHQvZo%2B90RTk3g7p%2BvDXzSiyZaka4KeROZlkUM9Q3z%2FoP4Z35Kjd2kAh%2FsB03WtFUDyu0U2uRbXgqO4Qr3Nd3EBDO6fZ1NpVY8VAjuWFBJdbEBuwakZaa2IZvDEKFcLYyA7Zwt1C%2F%2BfcRLIRCu2l%2B4lfzMPHswfM06GOuw%2BcUvGAyyJZUprOESMqpOu0fW4pWT8TMVIncZRsSQNeajnhVlrh1vLbLg31T459RAJzWcqVCz%2FMFPpCvW5R1qPFJVJAlQwzyzTu7yyTWLuPsimucbDdOsCk9ohT65Abv6cCR0AF3b25zyCVYyd6i9YTpQJGMKDQDEvbnwXSzbzizo53S8KM5gPepV58dhAaa8uTTsHlHwAGHC%2Fa%2FDFFrRGuFRKOUreGwATE4PG25JDr34F%2FITkwt7dfFbN%2FdH8z4mUIlZYt2QHm1KMnZir6RL29Jyta9hlVUToabu5DDpsR6jgjk9G1DY8TuN7NTvGNLVDqo%2BpQtFofHUmaV%2FRQzMxAIc0psKLtaL2PSJpBNxTWEwEw6LzPyQY6pgEQ9Rl3tGgjkSOK2qA0xD0f4VtmTgDpTnUp5ZdcZTVrP9f5YIdm7yK5%2Fuog0m4ednZdvZAqL%2Fl428X4Z%2Bz%2FgzIGrSko348RY60hYNOtsBld%2FPjL4Msqi73RZNUaJWJ1FTaNU3ZvigBR12%2FW0MaxFoNjTMIkPx%2BFbJaQS%2FesJyj6nWeuiN5o4mk%2BabI6h6GNVnkAjJV8ROOP0PpB%2Bz%2FoRaaEU01CNR5c&X-Amz-Signature=59d59aa389f526e98bba5d807b95d47ed16e75729b54f40f8886adf03cc16e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A36HOLU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxSqzUAj5aRJ8ZEVQ9UuEoSDOi0P1sFLGw8QIwyasU2AiBp%2FZv3E0FDdljLzJAt%2FFxvegvB4mk17F5XIPUu0CZbuyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMljY%2BITpj45iRBYVgKtwDrLOQZyTfYBy%2FQ8kMtcCQlCR5D5V6PqhAwp6QjHuDzPJnCyq%2FivAMfP9OHqCzysU2JE1K%2FGyw2kCWF%2FOBYaTWGHZqPI40%2Bb3C9EvaTgcRCHQvZo%2B90RTk3g7p%2BvDXzSiyZaka4KeROZlkUM9Q3z%2FoP4Z35Kjd2kAh%2FsB03WtFUDyu0U2uRbXgqO4Qr3Nd3EBDO6fZ1NpVY8VAjuWFBJdbEBuwakZaa2IZvDEKFcLYyA7Zwt1C%2F%2BfcRLIRCu2l%2B4lfzMPHswfM06GOuw%2BcUvGAyyJZUprOESMqpOu0fW4pWT8TMVIncZRsSQNeajnhVlrh1vLbLg31T459RAJzWcqVCz%2FMFPpCvW5R1qPFJVJAlQwzyzTu7yyTWLuPsimucbDdOsCk9ohT65Abv6cCR0AF3b25zyCVYyd6i9YTpQJGMKDQDEvbnwXSzbzizo53S8KM5gPepV58dhAaa8uTTsHlHwAGHC%2Fa%2FDFFrRGuFRKOUreGwATE4PG25JDr34F%2FITkwt7dfFbN%2FdH8z4mUIlZYt2QHm1KMnZir6RL29Jyta9hlVUToabu5DDpsR6jgjk9G1DY8TuN7NTvGNLVDqo%2BpQtFofHUmaV%2FRQzMxAIc0psKLtaL2PSJpBNxTWEwEw6LzPyQY6pgEQ9Rl3tGgjkSOK2qA0xD0f4VtmTgDpTnUp5ZdcZTVrP9f5YIdm7yK5%2Fuog0m4ednZdvZAqL%2Fl428X4Z%2Bz%2FgzIGrSko348RY60hYNOtsBld%2FPjL4Msqi73RZNUaJWJ1FTaNU3ZvigBR12%2FW0MaxFoNjTMIkPx%2BFbJaQS%2FesJyj6nWeuiN5o4mk%2BabI6h6GNVnkAjJV8ROOP0PpB%2Bz%2FoRaaEU01CNR5c&X-Amz-Signature=4ee768f6510599d8a491f4cffc61b909574a3247aacb6e77dcb03677069b5aba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

