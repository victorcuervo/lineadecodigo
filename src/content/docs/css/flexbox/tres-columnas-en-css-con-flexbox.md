---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM5WPMXY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMv7%2FAduEn5yX4MjuGvkdHH7vUVkPZ%2FZnF99BBDrdXDAiEAzXEI0%2Binrt5aT3%2BjgPoWk%2FixNrvBHzaJbAo9O6mIhq8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2V06ZF8se9%2FGUsaCrcA%2BY6LcaY%2FqDiBnBLajegwTzfMAgPkk5VZvYnBj8Txmvfq0FKCsCJHZ2i57SMmOneW2SwzTmOTzrF1ybcEkaj%2Bcm3CmBx3FtT3ROGRlyykoAF2UsKDaDrRoYTGlWZ4jXvZKEfRJDasRsRZwfftLzfwvRtadVOQTQmHjp0jn9zocAH9oXn%2B5CSeymX%2F%2BmZKywIPD9ZDwbVI7FUi6J81R6OTzr1HL3HrckKtxoeIH%2FtsvjdH0CNof7SzepmnblRpaxx4ZemCvHMplENYXehh%2F07XP%2BzhhiBUJnjKTK0c5ClaLLPa8UVdHX2MvodP0BSXhaYJDHJKDz68tZkFl0an4MXyCIQ4OPLmQLd%2FdjQ0wXp1hnXkyzbBxGcH1%2Fnc6a2Kr19jDrXmyZh9Q8OfqUudOmUXzoLIjJ%2F7lVPpqx8v0ZyiNK2ViKoQic4F%2FfQ1SN%2B12W2SrJx0JEK%2Fb5EErz4FYaPQt9TuH61I64X1CQ2NrsY20SeWZncBqjfhDtF7o0ZfoRTDgIQDiBhbjkGO%2FJLSwVmv4xpg%2B%2FmfQQGzCi64CwUB7Dls2DOSM2omift%2BlAdPMWgCUXkzLKp58TgCSCx8KC9iiuZe7C%2BUe04RnoqtTEk%2BABsm8fxR6gsrvnEbw7qMKKa1ckGOqUBscprKq7xAcrTAbWwmlZERv2TLmxoCfkPtCKOwv6kFRJNLMPOz17cl%2FF9SlTLr02F7Ro22F4NZTWKsdZGOgrIla0AEJkRdjbFYaXeA5ZwtxrO0o40E7VfSGyM5A3Y%2BkP5TtSvM39PZTy06PKjeQhmOFCjlnVRS51PFdsWHr46MN7OqRbY%2F0jEypZASlaEescxWp1o0DkvgelcS1GKN8UKIO9tijzC&X-Amz-Signature=054dfe017e10b649dc2391ea7875d063ab28747269d5c4dde6ea20f0fe01ba8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM5WPMXY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T142820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMv7%2FAduEn5yX4MjuGvkdHH7vUVkPZ%2FZnF99BBDrdXDAiEAzXEI0%2Binrt5aT3%2BjgPoWk%2FixNrvBHzaJbAo9O6mIhq8qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2V06ZF8se9%2FGUsaCrcA%2BY6LcaY%2FqDiBnBLajegwTzfMAgPkk5VZvYnBj8Txmvfq0FKCsCJHZ2i57SMmOneW2SwzTmOTzrF1ybcEkaj%2Bcm3CmBx3FtT3ROGRlyykoAF2UsKDaDrRoYTGlWZ4jXvZKEfRJDasRsRZwfftLzfwvRtadVOQTQmHjp0jn9zocAH9oXn%2B5CSeymX%2F%2BmZKywIPD9ZDwbVI7FUi6J81R6OTzr1HL3HrckKtxoeIH%2FtsvjdH0CNof7SzepmnblRpaxx4ZemCvHMplENYXehh%2F07XP%2BzhhiBUJnjKTK0c5ClaLLPa8UVdHX2MvodP0BSXhaYJDHJKDz68tZkFl0an4MXyCIQ4OPLmQLd%2FdjQ0wXp1hnXkyzbBxGcH1%2Fnc6a2Kr19jDrXmyZh9Q8OfqUudOmUXzoLIjJ%2F7lVPpqx8v0ZyiNK2ViKoQic4F%2FfQ1SN%2B12W2SrJx0JEK%2Fb5EErz4FYaPQt9TuH61I64X1CQ2NrsY20SeWZncBqjfhDtF7o0ZfoRTDgIQDiBhbjkGO%2FJLSwVmv4xpg%2B%2FmfQQGzCi64CwUB7Dls2DOSM2omift%2BlAdPMWgCUXkzLKp58TgCSCx8KC9iiuZe7C%2BUe04RnoqtTEk%2BABsm8fxR6gsrvnEbw7qMKKa1ckGOqUBscprKq7xAcrTAbWwmlZERv2TLmxoCfkPtCKOwv6kFRJNLMPOz17cl%2FF9SlTLr02F7Ro22F4NZTWKsdZGOgrIla0AEJkRdjbFYaXeA5ZwtxrO0o40E7VfSGyM5A3Y%2BkP5TtSvM39PZTy06PKjeQhmOFCjlnVRS51PFdsWHr46MN7OqRbY%2F0jEypZASlaEescxWp1o0DkvgelcS1GKN8UKIO9tijzC&X-Amz-Signature=ff98d0d35ab6e7971f149cc9d5936f65315d878d5d2a3aca5a87e06d65eacdbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

