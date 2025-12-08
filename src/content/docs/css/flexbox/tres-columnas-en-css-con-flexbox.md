---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RJM26Q3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKAV31ekK9KPSKwa4Y8zKM%2BMe3HipNmwVGWtaJJsjQ0AiEAhS0dwK6UwF01OV3vM7Ap0k8bc3ub6CxA2D6Bm02f04kqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2py6rT2N7b87rp1SrcA4dnPtoc%2FOyRNAM3WPHwljbWHGkliXoi7JtUHmLJ2BJ1qNCtpU5Kwuqyg7h4zYUCLabZUZjvegH8AYBiL3UmM4olY9IDyX5FEOvAAWsCOJ%2BT6huR0ok31g7SUYUN9fnyLZSMNrJZ5J5czf4TqwG9lj8e5B7SYch3MVyOzdTMU4Ji3ybpF4l6uWJKOzrSXZvxHofgGoACTnY1AwDQaClUgtg6pFBZ07isL4js2hRdEGSJ5GMVGi7CLdRSCBdGNAT7DBlO67m7fxymjDa7Kl%2FuRojEtR0MvpAUyTZWah7QgoEbQVwy%2FnzUo2GBTXE8ArxzfUD%2FMnYz0Opkw9SsrkPZTJptcMbyb2dEhI9jIuyKoZaelqguhqZpGeeTyCqfnYrF4AW7Z9I1A%2BdNv0PpA8szMI9UuOz%2FCRYEim5nerQjAvuRF24vWDSzfZUNFjHzISIw%2BqBQwhkyqo9ZP6SZFjDmWZP3TZHYCqKZ%2BFlZHo4p8jOZa6xKgl2M%2F066WorLrku2Eus6UkuDvWGES4bRrgP9fx5QBQ9CpvZq04SRXhkCYUrjuM41wEDYjcuFOnL%2FnCxQ4hL%2B2kfeaf4tuIYMpYs%2FeWjT4QaADq%2Byd%2FiGMHHdkmbZiBeWxyy%2BRT9SLMxOMNGP28kGOqUBMs6bBd2uJk6pSvIix6LvbanXvAbAkbCgt1yTjvwtsPOeWSVZj%2BJXMusGAjf%2FNv46aQUJVD0GF%2FVOjoCGtUKVozlfEnJZ6ds8yz1rVKW53861xBBfoJKxcW8rDf%2BQxGkNSmNmGQYOCHZAWOzT%2Fg3xdCjFpqpfFsN%2FnF%2FfWar4MGbAIdiMG6F4ICKhTON6pfq56ifwMTkQHNHKWFU4lFfhvlLoEcTV&X-Amz-Signature=060d9d6eabede8d94ebc3d81f7b76a86ea0719adc1b2ee8a772248b30e0db0a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RJM26Q3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T141817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKAV31ekK9KPSKwa4Y8zKM%2BMe3HipNmwVGWtaJJsjQ0AiEAhS0dwK6UwF01OV3vM7Ap0k8bc3ub6CxA2D6Bm02f04kqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA2py6rT2N7b87rp1SrcA4dnPtoc%2FOyRNAM3WPHwljbWHGkliXoi7JtUHmLJ2BJ1qNCtpU5Kwuqyg7h4zYUCLabZUZjvegH8AYBiL3UmM4olY9IDyX5FEOvAAWsCOJ%2BT6huR0ok31g7SUYUN9fnyLZSMNrJZ5J5czf4TqwG9lj8e5B7SYch3MVyOzdTMU4Ji3ybpF4l6uWJKOzrSXZvxHofgGoACTnY1AwDQaClUgtg6pFBZ07isL4js2hRdEGSJ5GMVGi7CLdRSCBdGNAT7DBlO67m7fxymjDa7Kl%2FuRojEtR0MvpAUyTZWah7QgoEbQVwy%2FnzUo2GBTXE8ArxzfUD%2FMnYz0Opkw9SsrkPZTJptcMbyb2dEhI9jIuyKoZaelqguhqZpGeeTyCqfnYrF4AW7Z9I1A%2BdNv0PpA8szMI9UuOz%2FCRYEim5nerQjAvuRF24vWDSzfZUNFjHzISIw%2BqBQwhkyqo9ZP6SZFjDmWZP3TZHYCqKZ%2BFlZHo4p8jOZa6xKgl2M%2F066WorLrku2Eus6UkuDvWGES4bRrgP9fx5QBQ9CpvZq04SRXhkCYUrjuM41wEDYjcuFOnL%2FnCxQ4hL%2B2kfeaf4tuIYMpYs%2FeWjT4QaADq%2Byd%2FiGMHHdkmbZiBeWxyy%2BRT9SLMxOMNGP28kGOqUBMs6bBd2uJk6pSvIix6LvbanXvAbAkbCgt1yTjvwtsPOeWSVZj%2BJXMusGAjf%2FNv46aQUJVD0GF%2FVOjoCGtUKVozlfEnJZ6ds8yz1rVKW53861xBBfoJKxcW8rDf%2BQxGkNSmNmGQYOCHZAWOzT%2Fg3xdCjFpqpfFsN%2FnF%2FfWar4MGbAIdiMG6F4ICKhTON6pfq56ifwMTkQHNHKWFU4lFfhvlLoEcTV&X-Amz-Signature=cefda51654a5adaea669f9ec67e39310ca99f355f6b05ca89baba76724cd5e4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

