---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CGHNW75%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH9DIdCNLWVvmUDA8%2BhBCGDhPGIQgfGWfAVuc8A3YrqZAiEA97dAU1ielsbyvAAWEfmzQugB0dx6K4VYBSYsKbOY%2BhIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDBitVQpbJD%2F6HwX8nyrcA3geqKqaJ8oCnJbZk51niP2CrVAIU%2F%2BRCFbg13d9w%2FrjDYFvkOS30FreFj0P8BBpB3b%2BrXWtnxtbYu%2BAcIH6gNZ%2F3G9aYRJ812y9tXy2YM%2F0qH0yoWMz%2B6%2B8eXS6%2F8EEP7uGpcddbRNe0mV%2BcgypCvkMwIvOrVNOMHw%2F9LN9ar7k6oQFKvFfgvLpxo0eEFxeTIjGQSdK2RntCBx8gQn9U8Cw8km0oPE2fr%2FcwZI7%2BKFIxHiFvQ45d%2Ftr211Xtw7qX5KXY5ZUX6Gpvc6p79JLztTe4oobqr2wrG7lubkaN%2BTgWeQzOLdgRcOESYIUIA0LlgNp2prLvgr%2BTnQAQmUQ9vayvxkTWiZXJ3RJADA01FhYp3S5WSZKeqzIzNbNQCThI98cBqaUzv7QWGGqHHN3ohluj84UF%2FOuowSNzxu%2BdpqdEFLBQD963FfutdjTFnYlIQ13DBcCs%2FM7y4gYYlmMJkQRjW%2BNo4iIazEuBLtGnMMZbz9xkUDtsihQ5R%2F%2FdhsM%2Be8K8yB34Vyq1FLc%2B%2FzflDzU35%2FCZ%2BwDJ%2Fw3rs9%2FGjqWPt%2Bmkle5HBiDVGOOOYTHk9iatJhe5yxvCXnK%2B8RDA%2BCmBk0Ai612lDJ9gB0vE1RxyUxH4lD0fuEfCyP3ML7yw8kGOqUBdkN1rf09Zvms68aQhRLGX95jeY4yCnbhHgrQeCLAf1Vx1mzrdcuFVr6EbYomu%2FX54H6QKaxpxhhHT3skItiYXqM31XolvpfzXTgU%2FfH8YdVY5dO3BJlRbqzG2qNI1UKV44GUnuMqgPRlRtEyqLsQ4Nk9imR3ypj7IWq0B%2FoFlMu%2B67PIz2lvc1U9p6JdKtok4AiLeCR5a8WZN5BfuVVGMkRlQz8w&X-Amz-Signature=e4989cbaa7ce3b664a9f97ce43d6f3978005c2251d145786e1bbd4b290407799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CGHNW75%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T031821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIH9DIdCNLWVvmUDA8%2BhBCGDhPGIQgfGWfAVuc8A3YrqZAiEA97dAU1ielsbyvAAWEfmzQugB0dx6K4VYBSYsKbOY%2BhIq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDBitVQpbJD%2F6HwX8nyrcA3geqKqaJ8oCnJbZk51niP2CrVAIU%2F%2BRCFbg13d9w%2FrjDYFvkOS30FreFj0P8BBpB3b%2BrXWtnxtbYu%2BAcIH6gNZ%2F3G9aYRJ812y9tXy2YM%2F0qH0yoWMz%2B6%2B8eXS6%2F8EEP7uGpcddbRNe0mV%2BcgypCvkMwIvOrVNOMHw%2F9LN9ar7k6oQFKvFfgvLpxo0eEFxeTIjGQSdK2RntCBx8gQn9U8Cw8km0oPE2fr%2FcwZI7%2BKFIxHiFvQ45d%2Ftr211Xtw7qX5KXY5ZUX6Gpvc6p79JLztTe4oobqr2wrG7lubkaN%2BTgWeQzOLdgRcOESYIUIA0LlgNp2prLvgr%2BTnQAQmUQ9vayvxkTWiZXJ3RJADA01FhYp3S5WSZKeqzIzNbNQCThI98cBqaUzv7QWGGqHHN3ohluj84UF%2FOuowSNzxu%2BdpqdEFLBQD963FfutdjTFnYlIQ13DBcCs%2FM7y4gYYlmMJkQRjW%2BNo4iIazEuBLtGnMMZbz9xkUDtsihQ5R%2F%2FdhsM%2Be8K8yB34Vyq1FLc%2B%2FzflDzU35%2FCZ%2BwDJ%2Fw3rs9%2FGjqWPt%2Bmkle5HBiDVGOOOYTHk9iatJhe5yxvCXnK%2B8RDA%2BCmBk0Ai612lDJ9gB0vE1RxyUxH4lD0fuEfCyP3ML7yw8kGOqUBdkN1rf09Zvms68aQhRLGX95jeY4yCnbhHgrQeCLAf1Vx1mzrdcuFVr6EbYomu%2FX54H6QKaxpxhhHT3skItiYXqM31XolvpfzXTgU%2FfH8YdVY5dO3BJlRbqzG2qNI1UKV44GUnuMqgPRlRtEyqLsQ4Nk9imR3ypj7IWq0B%2FoFlMu%2B67PIz2lvc1U9p6JdKtok4AiLeCR5a8WZN5BfuVVGMkRlQz8w&X-Amz-Signature=2dc173a6b7b20e501bb0b1afb52b41afe6609385ac14be1ddc934db39cacea4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

