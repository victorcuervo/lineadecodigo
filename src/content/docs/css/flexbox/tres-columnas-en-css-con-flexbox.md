---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKLIPNS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIuOpxvsCdzMKqFAUGj8LOOsAASIvGU3kpOJyDqpWYEQIgb5agzsKoKJb3CS6OtxhL2Ou6ifpPuMT5eO8FxO4xYv8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrqmzamhUQcGoUdNyrcA9pxUrjPBM6M6k8hWNDuqt2zfqRHbeOJZ6HB5rGc%2BgqqcvgUyneEGYxk3qmMGLNlq2KVHOq8rgpvbNAH8J739MlJThWShcq51kNoJrVE3arruZvzhuxxYOxFW%2BRDPaIhho6kk3Y%2BXof9uBzRTvsV0D0Pmh5lIIFsVCJpfIAWnUh1nevj3WxdGbr8Tp%2FBnV%2ByvijFackSEJWpwM5a8wuId6%2BMUkxBe2FMnmpzAk%2FKg39MFMJdI7TFyPHEoyxHnMSJGbHRZFwgICBG%2FU5Q2FUVidKIRACMTZ4Z%2FUapxMbWmuEORbokOD6yPIzhopFr1EAzXzmesL6iqXfnF%2FoTVjv8Dg7%2F8gyx8mZ3WBrIADk7gT1kSkwxaTjUi0S9JvKUIMkEhNoo4XZw8UoBPNzHEBes7%2FAoOw7Lc8klVDRBgh36DWhjtydJZh2I9%2BPXGLzmhS%2BOa09juQIRKj3P5tySaw3UjO%2F9mYZG2%2FBOTnP%2Bo%2Fjth2JXuAtmXTTFzisIF%2Fq0RIMQhIYQnOnhUekyomLabsKlenc1q6NGx%2BRp6dqoYbeAquiX41dNdLEVCnxQsiWfjwxKVIHUcpQPR9r%2FMoFNdYeEHY8bNbvUhar1d%2BysLc%2B3Egk3lugwmCXybiKcYpT4MI691skGOqUBEPVWC0oIwPpswY0CeDELLa03Eks8X2zSFoq10ZKzRHyXnLFZd9mmEZImHAUGhpa7KYAoZWmlFLnFKlkJ2Nr2FQL6beutAPHrbjvnJdNavGkfa8Oy1GVqj9K9LDWP1EneyPFdYiUfbjSXeahLfb6YlcQdzTsDO6%2Bq6znHxd0gMjmZWAGTGHYFo%2BUoHfg60Q%2B3mSeRiC0wX07MX%2BLL3LFDccaZ0h6M&X-Amz-Signature=e6957f7e7e71aa98a3755e3370305944a16a01f82d5d7aeddb73df2a1f4d9b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKLIPNS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T174244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIuOpxvsCdzMKqFAUGj8LOOsAASIvGU3kpOJyDqpWYEQIgb5agzsKoKJb3CS6OtxhL2Ou6ifpPuMT5eO8FxO4xYv8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrqmzamhUQcGoUdNyrcA9pxUrjPBM6M6k8hWNDuqt2zfqRHbeOJZ6HB5rGc%2BgqqcvgUyneEGYxk3qmMGLNlq2KVHOq8rgpvbNAH8J739MlJThWShcq51kNoJrVE3arruZvzhuxxYOxFW%2BRDPaIhho6kk3Y%2BXof9uBzRTvsV0D0Pmh5lIIFsVCJpfIAWnUh1nevj3WxdGbr8Tp%2FBnV%2ByvijFackSEJWpwM5a8wuId6%2BMUkxBe2FMnmpzAk%2FKg39MFMJdI7TFyPHEoyxHnMSJGbHRZFwgICBG%2FU5Q2FUVidKIRACMTZ4Z%2FUapxMbWmuEORbokOD6yPIzhopFr1EAzXzmesL6iqXfnF%2FoTVjv8Dg7%2F8gyx8mZ3WBrIADk7gT1kSkwxaTjUi0S9JvKUIMkEhNoo4XZw8UoBPNzHEBes7%2FAoOw7Lc8klVDRBgh36DWhjtydJZh2I9%2BPXGLzmhS%2BOa09juQIRKj3P5tySaw3UjO%2F9mYZG2%2FBOTnP%2Bo%2Fjth2JXuAtmXTTFzisIF%2Fq0RIMQhIYQnOnhUekyomLabsKlenc1q6NGx%2BRp6dqoYbeAquiX41dNdLEVCnxQsiWfjwxKVIHUcpQPR9r%2FMoFNdYeEHY8bNbvUhar1d%2BysLc%2B3Egk3lugwmCXybiKcYpT4MI691skGOqUBEPVWC0oIwPpswY0CeDELLa03Eks8X2zSFoq10ZKzRHyXnLFZd9mmEZImHAUGhpa7KYAoZWmlFLnFKlkJ2Nr2FQL6beutAPHrbjvnJdNavGkfa8Oy1GVqj9K9LDWP1EneyPFdYiUfbjSXeahLfb6YlcQdzTsDO6%2Bq6znHxd0gMjmZWAGTGHYFo%2BUoHfg60Q%2B3mSeRiC0wX07MX%2BLL3LFDccaZ0h6M&X-Amz-Signature=7e513ba3f86c12a10ed7521619653265cf58bfdfbe2781b6e81e4e2abb8614f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

