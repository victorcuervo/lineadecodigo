---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUUN3QZV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGON9rOvAm9YHgQmIGG0R3Qyr32spqq6oft%2BfEoqA6ZAIhAO5fGYqlo0hRdMHm3Uh3bC7LgtF%2BJHwHzlpmTHlRinGZKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOWLqCrg0VRWxkJR4q3AMpTvP9k%2B3q8PV3IKHRTpRncyxVERVcZ5yQbF9W2EqMej1qvcwtmnrXGWmk2joyFK0jmTyhCiRr520tinl5ju8rhvCGNRpGehOkTMQaiSEwZKMr8%2BnbVv8ZaarwEXfldOMdiVHAH2MV8agirdyqnDjPPDOjb6YiMA2X5lkU9OGcEX%2BimYf3pbDKnJ4%2BHgT2ujwlj05uita7rGedtnifzcWrdDURRJLyEb8YaR9a5YluP8ZErMBVzxOYgqMzfpGglIs%2FZCNNsNXaSUTvsGW497fofL0qBYjR4vEcCJg6yBvLqokR4wcK76xCTo0MlKAN6B5Uy8wErDec9dwzJTbT2w%2FaSFlqpHZZv47Ifjxwxh3MgGDSD5NUpZbpXBBwWmHyzZag9liqVJyHPaGJtq1B65L2qCDH8v%2BAMvqyRW6v7uJ8n4b4RdVpyypyO3LZRjPmRRmnLuKcmA8VA1X17NYzppSxiVFPwM9hkB55pAtGhLrVeKyPEPTtfaKUDbwIIFzK%2BrS4IeLGlivWWXyXRfb0gtm%2FZIJf%2BR9q9HXYEl2qXvV%2B6on8eFXSDJNbtYdco5GJm20ON4mLxJ1Tv3dwFfseDA3Gatzp7nVaBflWAhSFJc4%2B%2Fm020iwBMXbrTc%2BDgTCb7tnJBjqkAQ6ifQou9AqYkkQ6oQyFLDC%2BoqPAV%2B7uqkC4WOwppTceI2Mn4iBW2QOjzZwavBV5h1JJCd9O%2BIROopI0CLcXhLvXwRb0%2FaIwkik4LZvcEfFyD8RNYzyovC%2Fozqz9V0ZXYula02WwJuoFJ8fSUTPe3BkRqrA325lX8A%2F%2FfphEYSoDTLt5x78hDS7H0KUtltAEW2uinHv8WJ8w5QklBmAb0F0RoTn3&X-Amz-Signature=e369402e879c9e47817bbe3f9b7a4a84af04307f9858d9d5f09a6b95b09cd37e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUUN3QZV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGON9rOvAm9YHgQmIGG0R3Qyr32spqq6oft%2BfEoqA6ZAIhAO5fGYqlo0hRdMHm3Uh3bC7LgtF%2BJHwHzlpmTHlRinGZKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyOWLqCrg0VRWxkJR4q3AMpTvP9k%2B3q8PV3IKHRTpRncyxVERVcZ5yQbF9W2EqMej1qvcwtmnrXGWmk2joyFK0jmTyhCiRr520tinl5ju8rhvCGNRpGehOkTMQaiSEwZKMr8%2BnbVv8ZaarwEXfldOMdiVHAH2MV8agirdyqnDjPPDOjb6YiMA2X5lkU9OGcEX%2BimYf3pbDKnJ4%2BHgT2ujwlj05uita7rGedtnifzcWrdDURRJLyEb8YaR9a5YluP8ZErMBVzxOYgqMzfpGglIs%2FZCNNsNXaSUTvsGW497fofL0qBYjR4vEcCJg6yBvLqokR4wcK76xCTo0MlKAN6B5Uy8wErDec9dwzJTbT2w%2FaSFlqpHZZv47Ifjxwxh3MgGDSD5NUpZbpXBBwWmHyzZag9liqVJyHPaGJtq1B65L2qCDH8v%2BAMvqyRW6v7uJ8n4b4RdVpyypyO3LZRjPmRRmnLuKcmA8VA1X17NYzppSxiVFPwM9hkB55pAtGhLrVeKyPEPTtfaKUDbwIIFzK%2BrS4IeLGlivWWXyXRfb0gtm%2FZIJf%2BR9q9HXYEl2qXvV%2B6on8eFXSDJNbtYdco5GJm20ON4mLxJ1Tv3dwFfseDA3Gatzp7nVaBflWAhSFJc4%2B%2Fm020iwBMXbrTc%2BDgTCb7tnJBjqkAQ6ifQou9AqYkkQ6oQyFLDC%2BoqPAV%2B7uqkC4WOwppTceI2Mn4iBW2QOjzZwavBV5h1JJCd9O%2BIROopI0CLcXhLvXwRb0%2FaIwkik4LZvcEfFyD8RNYzyovC%2Fozqz9V0ZXYula02WwJuoFJ8fSUTPe3BkRqrA325lX8A%2F%2FfphEYSoDTLt5x78hDS7H0KUtltAEW2uinHv8WJ8w5QklBmAb0F0RoTn3&X-Amz-Signature=ce911bf930d9bfe1c1ca07d6e0148a19cf769734c651d595250b891736d4de0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

