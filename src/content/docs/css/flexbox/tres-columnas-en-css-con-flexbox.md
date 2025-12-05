---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQ3QWY6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGa%2Ft40tbNptnRV%2FZDjNudOGXvUKocjWMgFP3s5Yo1eQIgUPMi7ApBuFMbItWvb%2BrebyHRt0TH9hpB1tQM8PW1yMEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDIEyg5HX%2F67RYp0oNSrcAzxwoQjRiYXHFSjniR2x5oTLc2z%2BtGgKB6%2B%2Bi4w2OePAYJ9B%2Bz7RgFWANi5KVEMmeapuYE6HW5W5dV9wp%2FW75fOW%2BOJ%2FevN7LXAOGpPXjCY3343xOM75S%2FtTvoa1u75d6MMvxhr%2BCYePu8wj6DZrlJy1kiYDTCBMYuuJfH8VifpqX2jirfldAlrEcP0Sax9WJUudVWg0AroZicGPnXZs4Zt86nJsfbfTQAhqZfDwa3ukv2UCD8y70xBZm7FU5SXMQZ4h4vizr12L%2F6jGbIWOSge%2FXkryaTMGXn%2ByaYU2kOPyRuqb5f2GvDqhnWfHpAgteTfR6mysTKUl7y8Nr2Lc7XOG1ng6f96J5MIIQACPgWtih2uY2xqimETQYYTi%2BhC3TQ9pYTu3Ma3C%2B2kGieb%2FlgUEqOQjs9GL%2BPtwQZmRPxFh9lsmPGI16VkcAZ9KlnTCq1Il1TqdgMNbTc6C8%2BDGAsCZL080kW41CaJAHE2RfDF5VkBGQP1wDoJ9Jzad4YTepkxfxGuXnrgV8AWV6UtykEHij1clrEFGFgzKYyraLMQ2ryWN48J1oV9WWSaSKhWKt8SIONuN%2BAY6HI7Z%2FFyAl6swjLbag0cgu%2BE%2FvPG%2FCckw88RGZkerm4F66fuoMLb1y8kGOqUBNZg8QIb4pP1X9nBh0Q2K9%2F6RthV7TP7QVdCz%2B%2BaCvXQ28baDw5kYBUAHBYwss%2B5hgAy3rak1SAjV7fcCpNYx1Bl9xYrxC%2Fk%2FQxfG%2FzUCY5FRe3GRhrRtJqLn1Myg%2B4XP20c9x4WeVLTaHxW67fE6kIKY3HbfOqwd2AoCXUX4faAhRw%2BOdJUUyPWq8cyrNkQH2lhQ1GhpjiE6NLlZ3XCdZjZeCHR9&X-Amz-Signature=a306e7125be09a11488182900dae53458615ced58a31cf270e95a32313da1b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOQ3QWY6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T205620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGa%2Ft40tbNptnRV%2FZDjNudOGXvUKocjWMgFP3s5Yo1eQIgUPMi7ApBuFMbItWvb%2BrebyHRt0TH9hpB1tQM8PW1yMEq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDIEyg5HX%2F67RYp0oNSrcAzxwoQjRiYXHFSjniR2x5oTLc2z%2BtGgKB6%2B%2Bi4w2OePAYJ9B%2Bz7RgFWANi5KVEMmeapuYE6HW5W5dV9wp%2FW75fOW%2BOJ%2FevN7LXAOGpPXjCY3343xOM75S%2FtTvoa1u75d6MMvxhr%2BCYePu8wj6DZrlJy1kiYDTCBMYuuJfH8VifpqX2jirfldAlrEcP0Sax9WJUudVWg0AroZicGPnXZs4Zt86nJsfbfTQAhqZfDwa3ukv2UCD8y70xBZm7FU5SXMQZ4h4vizr12L%2F6jGbIWOSge%2FXkryaTMGXn%2ByaYU2kOPyRuqb5f2GvDqhnWfHpAgteTfR6mysTKUl7y8Nr2Lc7XOG1ng6f96J5MIIQACPgWtih2uY2xqimETQYYTi%2BhC3TQ9pYTu3Ma3C%2B2kGieb%2FlgUEqOQjs9GL%2BPtwQZmRPxFh9lsmPGI16VkcAZ9KlnTCq1Il1TqdgMNbTc6C8%2BDGAsCZL080kW41CaJAHE2RfDF5VkBGQP1wDoJ9Jzad4YTepkxfxGuXnrgV8AWV6UtykEHij1clrEFGFgzKYyraLMQ2ryWN48J1oV9WWSaSKhWKt8SIONuN%2BAY6HI7Z%2FFyAl6swjLbag0cgu%2BE%2FvPG%2FCckw88RGZkerm4F66fuoMLb1y8kGOqUBNZg8QIb4pP1X9nBh0Q2K9%2F6RthV7TP7QVdCz%2B%2BaCvXQ28baDw5kYBUAHBYwss%2B5hgAy3rak1SAjV7fcCpNYx1Bl9xYrxC%2Fk%2FQxfG%2FzUCY5FRe3GRhrRtJqLn1Myg%2B4XP20c9x4WeVLTaHxW67fE6kIKY3HbfOqwd2AoCXUX4faAhRw%2BOdJUUyPWq8cyrNkQH2lhQ1GhpjiE6NLlZ3XCdZjZeCHR9&X-Amz-Signature=f8f2b9f68d93e6a5b73fbbd95f82dbbad21cdb174ed5fe2ac65eb9f230ca1fe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

