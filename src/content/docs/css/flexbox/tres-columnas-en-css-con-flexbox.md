---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GLQIHJ6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZryefv7y0OK6QYBQzHfqr9DwhgzLHKSP0mgkE6WJF%2FAiBld%2FJxLGX9pRm3tkbrGdhMp5WY4hCo2wHhui6Gp3qR7ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMtNmVD7zhQE2sMQa4KtwDZIezvzVbUO9FJFQoGk2QEaar5Vmlosux1jqQnJQ9JjrKD2erPmjGMCdrfT1NBYwW3R0D1zsCtt7BBMgA8XaNjVWsk921b78tVHmqgLQo4XYsYu1bYkZH0AzJxiIFIAY4WwPEjoxCPMRDndvyoalrhM9mwlq4qXh1JKeEcmF1srXKfw4m9VY9%2FfyPa7JyZLSppfriybnT8nWGPqYT9aAfG73RCksm226iSwlQlAzB8n6BpmcHmWIyG8SG1LnpH0K0YFaPGNnQcK2HvXISeKzTKX7%2BBenAwJy%2BmICQ4nVdnsJczyp%2F%2FHARklDGDWUv7jk%2BO2CSJwTu4HJE1MGUS9UpjjcmoTjI1t6Rt6C%2BmpRz3AsrpbV1zW5PMiZSFRFL3USqaKW4SdPjI7D5HBIcmFP10ZElS7Fft9l0225ZOo0en8rBPqlzVQjHkAGisYJfWcP6te0qSDf8z%2F9OoRLllH2aPJ1RD74vm8pivHOzhmkIv2feRF%2B7PhXXRK%2FSKUhUUcekvu9eZCrEYiRBguHfMTnEUDItsvE%2BfNC4DIRBl65F0MVRmvnZQW%2B3ZZocUZK1%2Ba4tsOfEf2Uv%2B0AhlR9QXCOzF%2Bg5D%2BosI4DrFx0ZuFNXCzfnHzeYY%2BE89FTuqd4w5KbQyQY6pgHGVF8pCzKLNSnObKFNhnijEU3NARKsR%2FyJ4Yd42YAH1AjFjUnCLEB4xVnd0dPlhK1XX6oUFW1jLrEiQnpN4bE2fiqHzM4E7LFoezQEO6HSUcDVj%2BgasAmPqXtVUtyFsSGkr42bSlSWHlEdyuP0nGebzWDCeUeKskIwFlpqh8kuM%2B1ZpbN%2Fs7h1f37JxL1Nba9%2BB3xK%2Ftf5oIDRG0V8hzBsatLweQpm&X-Amz-Signature=2f6606a16e51c3c73b2d96f78955fe03bb3f4bf3832228fd611001ecf06a294d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GLQIHJ6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T122746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZryefv7y0OK6QYBQzHfqr9DwhgzLHKSP0mgkE6WJF%2FAiBld%2FJxLGX9pRm3tkbrGdhMp5WY4hCo2wHhui6Gp3qR7ir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMtNmVD7zhQE2sMQa4KtwDZIezvzVbUO9FJFQoGk2QEaar5Vmlosux1jqQnJQ9JjrKD2erPmjGMCdrfT1NBYwW3R0D1zsCtt7BBMgA8XaNjVWsk921b78tVHmqgLQo4XYsYu1bYkZH0AzJxiIFIAY4WwPEjoxCPMRDndvyoalrhM9mwlq4qXh1JKeEcmF1srXKfw4m9VY9%2FfyPa7JyZLSppfriybnT8nWGPqYT9aAfG73RCksm226iSwlQlAzB8n6BpmcHmWIyG8SG1LnpH0K0YFaPGNnQcK2HvXISeKzTKX7%2BBenAwJy%2BmICQ4nVdnsJczyp%2F%2FHARklDGDWUv7jk%2BO2CSJwTu4HJE1MGUS9UpjjcmoTjI1t6Rt6C%2BmpRz3AsrpbV1zW5PMiZSFRFL3USqaKW4SdPjI7D5HBIcmFP10ZElS7Fft9l0225ZOo0en8rBPqlzVQjHkAGisYJfWcP6te0qSDf8z%2F9OoRLllH2aPJ1RD74vm8pivHOzhmkIv2feRF%2B7PhXXRK%2FSKUhUUcekvu9eZCrEYiRBguHfMTnEUDItsvE%2BfNC4DIRBl65F0MVRmvnZQW%2B3ZZocUZK1%2Ba4tsOfEf2Uv%2B0AhlR9QXCOzF%2Bg5D%2BosI4DrFx0ZuFNXCzfnHzeYY%2BE89FTuqd4w5KbQyQY6pgHGVF8pCzKLNSnObKFNhnijEU3NARKsR%2FyJ4Yd42YAH1AjFjUnCLEB4xVnd0dPlhK1XX6oUFW1jLrEiQnpN4bE2fiqHzM4E7LFoezQEO6HSUcDVj%2BgasAmPqXtVUtyFsSGkr42bSlSWHlEdyuP0nGebzWDCeUeKskIwFlpqh8kuM%2B1ZpbN%2Fs7h1f37JxL1Nba9%2BB3xK%2Ftf5oIDRG0V8hzBsatLweQpm&X-Amz-Signature=d75a58f3462f9be0754cd175ea91546f4a207b40afcbd8d1136dbf0178e421ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

