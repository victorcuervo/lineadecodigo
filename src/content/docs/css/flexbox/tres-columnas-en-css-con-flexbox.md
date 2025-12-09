---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGFE4UMC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICV%2FydXJQ5Af%2FVLcp%2FlhIo6Fw73PcIAPJ7tVycRQDaO1AiEA2hpyvYyVaQXUEujurNtd%2BPwaVIyi01uhZf5eh%2FqoQqAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH29qiaR0AruqQLB4ircA7O5uMN7GWsTvAwRG9bY0fzec543kqYGaCR7KZYzKszi%2ByPzzIn1uIcy0a%2BmuUGcGcjUh4Km%2FO7JXpIJ6MJ41xhsOhu1suJlMX%2B7LhQnnYmdjZShNTwfdOqK9bPLr1D7U2G6TEJG2B23fn4R%2BAW9Kjq00pE5wsQAg%2FTHCmmdJRSMR%2BYmNZt%2BMPMHaj%2BXHiCAvb9jukxMUaSveCLRyGgeFcTaN%2FtfuS4PpRV7%2BETN8DnURahA9HxIN1xT2T2gbEWQUOXy8PrLe24qF59OYmSkYTdw94mvkB4ZJEoid4BYBkhTZMY4wOeN0dvQyGJ81FeGopZ6GC1QyBHIUsvZAgMMCkqLOyxGC1QqYxy%2FJCcSMyuWPSkkMj6vDUKtePb91YFj%2Ff4pbumkC6TfCx06XTkCYW4aJnrPzjKea16CZur58ZEUtzdg8TgMNaBzpyKVHn0pUGhs8Ckrl7Lo2jD1eQIPe7Fc0FS%2BU%2B8AeFluzq0H3B06vAYOzaABho9BPVQlvInuBQNI2llQuzZhmt5gEqSKRKt3lFRv%2F9vvCkrTz8DxD2Ba9MsUQR0UoVKZt1h8WIJ%2FUcel7yALmWs4NcWqT7nFvILL9QKyO4RyyKiQGaF1JTQHhVQcqAmS2xPWAIm%2BML3K3skGOqUBBB97uxzXcxDnUDHIsoSdIwkyeMSthjs7nRwdqndMRm3Y0TuPhC%2Fl9646EXEY1dxUrhGUyq1JYWcIIh1dk2KRhAcCz3XdR%2BuXtEsQv8IcL5PgjTM8EiRIpEJXXEAj4oOpDT3D4BQQ2xLuQDCLJwbrkTAqCAgivo5%2FUqBW5oZKsOe42T%2FtxTJCkfYpJSCUV98oIy7H%2BfkvCR1uG9wFFiT0as2Ruujo&X-Amz-Signature=d73d32c8fcf5e6b54e22bb022e554f8ea04376911d9504a746d65b3730188665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGFE4UMC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICV%2FydXJQ5Af%2FVLcp%2FlhIo6Fw73PcIAPJ7tVycRQDaO1AiEA2hpyvYyVaQXUEujurNtd%2BPwaVIyi01uhZf5eh%2FqoQqAqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH29qiaR0AruqQLB4ircA7O5uMN7GWsTvAwRG9bY0fzec543kqYGaCR7KZYzKszi%2ByPzzIn1uIcy0a%2BmuUGcGcjUh4Km%2FO7JXpIJ6MJ41xhsOhu1suJlMX%2B7LhQnnYmdjZShNTwfdOqK9bPLr1D7U2G6TEJG2B23fn4R%2BAW9Kjq00pE5wsQAg%2FTHCmmdJRSMR%2BYmNZt%2BMPMHaj%2BXHiCAvb9jukxMUaSveCLRyGgeFcTaN%2FtfuS4PpRV7%2BETN8DnURahA9HxIN1xT2T2gbEWQUOXy8PrLe24qF59OYmSkYTdw94mvkB4ZJEoid4BYBkhTZMY4wOeN0dvQyGJ81FeGopZ6GC1QyBHIUsvZAgMMCkqLOyxGC1QqYxy%2FJCcSMyuWPSkkMj6vDUKtePb91YFj%2Ff4pbumkC6TfCx06XTkCYW4aJnrPzjKea16CZur58ZEUtzdg8TgMNaBzpyKVHn0pUGhs8Ckrl7Lo2jD1eQIPe7Fc0FS%2BU%2B8AeFluzq0H3B06vAYOzaABho9BPVQlvInuBQNI2llQuzZhmt5gEqSKRKt3lFRv%2F9vvCkrTz8DxD2Ba9MsUQR0UoVKZt1h8WIJ%2FUcel7yALmWs4NcWqT7nFvILL9QKyO4RyyKiQGaF1JTQHhVQcqAmS2xPWAIm%2BML3K3skGOqUBBB97uxzXcxDnUDHIsoSdIwkyeMSthjs7nRwdqndMRm3Y0TuPhC%2Fl9646EXEY1dxUrhGUyq1JYWcIIh1dk2KRhAcCz3XdR%2BuXtEsQv8IcL5PgjTM8EiRIpEJXXEAj4oOpDT3D4BQQ2xLuQDCLJwbrkTAqCAgivo5%2FUqBW5oZKsOe42T%2FtxTJCkfYpJSCUV98oIy7H%2BfkvCR1uG9wFFiT0as2Ruujo&X-Amz-Signature=30847219b4950c194f993956a707d4825e5be4538fe0946e6a100dfeccb07725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

