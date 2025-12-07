---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX6RVVBY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX%2Bppf5%2BuXtII7mpsJVbbZsj3YR4HjiLc5RXcQLIsF%2BQIhAJiLF9T30GU2U%2F9mY8IMxhqK4gUOtNEckejRzT7ufoDzKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaJd1mEFpFwn7FpEcq3ANjkiMiNX3tOZSwX2iDXvh61fbINw%2BaYjp4t7HCJrR9BMCQ62ZaiLIOvzJ0RwPB8vs%2FxhiKpWEMBIKqJ2CnctUzr6BpKKRDh%2Fc91QbbehqWifHTiEe86Rb8Sbru37B1a%2FFQs3hmvJ%2BG2JBaR3X%2BGfDj%2BU8AanT7l5eucXMUlm0csnFpwATq8fi85d%2BfrOcXe6bTh6N5GY4OThFuKV24ziUTZleyM8D8hU%2BF8zguFOqOwGlwyJHHwpe12Ex%2FKXay5%2FlIrWcGPOQ5IWKt8AV8bSy001HHuhkHPcAf66UQpHtNieNRJFM2Gd%2Bw9ilyRWy5U1%2B8V63J%2F69EWtB2EigTNR7q63yzBgYjgyqq3PuI1RVcc%2FAF9m6pb1Xel8KKEalhOPKcRnglH4Ms3q%2BEclqbpOWM7wDWHUKLnFYL%2BpUdZfQSSQwwI3dE%2BDP76PIg7GbdbM0c3mSSMi6q50blUFliMFSzMxsfJMZmddiGnEu%2B6h2kRKmHF6hKGRoQZzrNMjxjMwAiHvhVI2%2FIsQwEkHTj40wnkV%2FaUhUAsIKBkK4UpYQ52YK7YN5P65w0vhG4aZ6SpN3XqZl%2BdSQq5PmYkxqOnGE8BYL9xIuFKHKWMYGw45fMIDolyWA8b7h0Nu5IujCv%2FtLJBjqkAb%2FboCGG3Q7T6K273P5DqKdrU7hj3Y%2Bt53yLk4PiNTrpuLmMe9wwEoNM68o5L7zCAvo5IsqJTm8hWsrLEws%2Bbhkn2CLTJzsMaGCqDKX8N8uYFj%2FF%2B0dRL%2FZp5RKofYojMJzZW8JVPtRMzYKqttZ4rTGPWOzWkvt%2FvTst3LlRZSOs6I199mau6VFOvpUjmqDMGJATlRjBAQLUS72qQpMenmichZdL&X-Amz-Signature=657173efd19cef20a452f6b5a47c4e0254b0db5ff998a1f78c62dfd93d41127a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX6RVVBY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T042635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDX%2Bppf5%2BuXtII7mpsJVbbZsj3YR4HjiLc5RXcQLIsF%2BQIhAJiLF9T30GU2U%2F9mY8IMxhqK4gUOtNEckejRzT7ufoDzKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaJd1mEFpFwn7FpEcq3ANjkiMiNX3tOZSwX2iDXvh61fbINw%2BaYjp4t7HCJrR9BMCQ62ZaiLIOvzJ0RwPB8vs%2FxhiKpWEMBIKqJ2CnctUzr6BpKKRDh%2Fc91QbbehqWifHTiEe86Rb8Sbru37B1a%2FFQs3hmvJ%2BG2JBaR3X%2BGfDj%2BU8AanT7l5eucXMUlm0csnFpwATq8fi85d%2BfrOcXe6bTh6N5GY4OThFuKV24ziUTZleyM8D8hU%2BF8zguFOqOwGlwyJHHwpe12Ex%2FKXay5%2FlIrWcGPOQ5IWKt8AV8bSy001HHuhkHPcAf66UQpHtNieNRJFM2Gd%2Bw9ilyRWy5U1%2B8V63J%2F69EWtB2EigTNR7q63yzBgYjgyqq3PuI1RVcc%2FAF9m6pb1Xel8KKEalhOPKcRnglH4Ms3q%2BEclqbpOWM7wDWHUKLnFYL%2BpUdZfQSSQwwI3dE%2BDP76PIg7GbdbM0c3mSSMi6q50blUFliMFSzMxsfJMZmddiGnEu%2B6h2kRKmHF6hKGRoQZzrNMjxjMwAiHvhVI2%2FIsQwEkHTj40wnkV%2FaUhUAsIKBkK4UpYQ52YK7YN5P65w0vhG4aZ6SpN3XqZl%2BdSQq5PmYkxqOnGE8BYL9xIuFKHKWMYGw45fMIDolyWA8b7h0Nu5IujCv%2FtLJBjqkAb%2FboCGG3Q7T6K273P5DqKdrU7hj3Y%2Bt53yLk4PiNTrpuLmMe9wwEoNM68o5L7zCAvo5IsqJTm8hWsrLEws%2Bbhkn2CLTJzsMaGCqDKX8N8uYFj%2FF%2B0dRL%2FZp5RKofYojMJzZW8JVPtRMzYKqttZ4rTGPWOzWkvt%2FvTst3LlRZSOs6I199mau6VFOvpUjmqDMGJATlRjBAQLUS72qQpMenmichZdL&X-Amz-Signature=0d2bbeaecc116b3c6b50f4af0bad1b55e899c21b90801cbf5481a49e03793689&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

