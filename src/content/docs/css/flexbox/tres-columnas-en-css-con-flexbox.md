---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVJEVRF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDOQPxoJ209NGHYoSWDmeJfCeSUjVso4t%2B1ajoFVv4sFgIgbOMoYmmWN27xoez9QvqMQfkhqdph6Sw1ejQuBsA2i7cq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMZsk5b3kAr3%2BUU%2F5yrcA%2BZVAG3exNo8go6EiYCEjqJ4ZPcBw%2FlNqlfqdMMv3fTwu5x6YnXyDPlKtMMtS2t%2FoXgnObkzoG3%2Fh%2F7xqPYXvyorXVBUV7KguaXNLRlw%2FYkzJ%2BYCoMDGGZwBUiVNc%2BpLcjwclCeAPA2nHtJZsu6%2F10P9xHO5C4pTAa4trcTRUqgkVNpiVSeFjUP1YldAyjwuWsy6Tkg%2FZJmAJh5MDkHep5IyEu9nyCDCyZEDrejUmgn8rxcX3ZesU7dqGU0rxh%2BWR2WcvxZQE2o5Kz8788SL%2BZFHlibEtNFHZVs33crB%2FVmTOB5e%2FqI%2FpRmHKd5aEH%2BRZ2CIzGLHdRAsHMxhDKyfTBK8egLrt48ENGBOOPQiQl95uGwewgxheJsYfuIUtUvjM2C6UPRoAdYIKgaeYh46J5Do2qe9VZ7ltspw17VXi1eBiD%2B8BXukLlNF7Qy3grPelCy6lqTaVccGthkOGsfJy6Q20rfjwxbjpnyQj8GXNcpMboy7R%2Bd%2FzF8iC4aSYjE%2FcrI6Kvk8wY0hNcVNsOuOu%2Bt8PaJ3zrOpNGgnp3FocC47mHa5iJm%2FU%2BVw9GqtWADVuc7tbSvZ%2FIfpQ5TFyOzlKn6OW%2F73gZCjmwSFksjrawtRh%2FZobqJkPgrmc8ZAMLeuxMkGOqUBIhYNUJyZVqqQbOfnaGvmPjsx3DS%2B6M6SvM0wzZLK35QUn3JWyepZIC9YhW22%2Fxy1OzWd1kO5ZnbyiGB7sB0iajDg%2BiADVcthmuD9VFYdCT9cl7DLlGKbAkty4cJi6c8Ak919QA3nOOPpcbGYNE4%2FmmcbBY5E8JDwUHgA6x7ZE5yO19W73UiIm0TiTPjmrcd5F2bcvgYmKsOq%2BuTE1h9RxPOaGJTM&X-Amz-Signature=4e77e7b96dd21d607104844aa71b7b0140407b3cfa9f2f2e14f1f7f57f8e3b35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UVJEVRF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDOQPxoJ209NGHYoSWDmeJfCeSUjVso4t%2B1ajoFVv4sFgIgbOMoYmmWN27xoez9QvqMQfkhqdph6Sw1ejQuBsA2i7cq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMZsk5b3kAr3%2BUU%2F5yrcA%2BZVAG3exNo8go6EiYCEjqJ4ZPcBw%2FlNqlfqdMMv3fTwu5x6YnXyDPlKtMMtS2t%2FoXgnObkzoG3%2Fh%2F7xqPYXvyorXVBUV7KguaXNLRlw%2FYkzJ%2BYCoMDGGZwBUiVNc%2BpLcjwclCeAPA2nHtJZsu6%2F10P9xHO5C4pTAa4trcTRUqgkVNpiVSeFjUP1YldAyjwuWsy6Tkg%2FZJmAJh5MDkHep5IyEu9nyCDCyZEDrejUmgn8rxcX3ZesU7dqGU0rxh%2BWR2WcvxZQE2o5Kz8788SL%2BZFHlibEtNFHZVs33crB%2FVmTOB5e%2FqI%2FpRmHKd5aEH%2BRZ2CIzGLHdRAsHMxhDKyfTBK8egLrt48ENGBOOPQiQl95uGwewgxheJsYfuIUtUvjM2C6UPRoAdYIKgaeYh46J5Do2qe9VZ7ltspw17VXi1eBiD%2B8BXukLlNF7Qy3grPelCy6lqTaVccGthkOGsfJy6Q20rfjwxbjpnyQj8GXNcpMboy7R%2Bd%2FzF8iC4aSYjE%2FcrI6Kvk8wY0hNcVNsOuOu%2Bt8PaJ3zrOpNGgnp3FocC47mHa5iJm%2FU%2BVw9GqtWADVuc7tbSvZ%2FIfpQ5TFyOzlKn6OW%2F73gZCjmwSFksjrawtRh%2FZobqJkPgrmc8ZAMLeuxMkGOqUBIhYNUJyZVqqQbOfnaGvmPjsx3DS%2B6M6SvM0wzZLK35QUn3JWyepZIC9YhW22%2Fxy1OzWd1kO5ZnbyiGB7sB0iajDg%2BiADVcthmuD9VFYdCT9cl7DLlGKbAkty4cJi6c8Ak919QA3nOOPpcbGYNE4%2FmmcbBY5E8JDwUHgA6x7ZE5yO19W73UiIm0TiTPjmrcd5F2bcvgYmKsOq%2BuTE1h9RxPOaGJTM&X-Amz-Signature=deb915ac48982f1073de247302689da3a6703bba4f53012602dbd9ca3fb74620&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

