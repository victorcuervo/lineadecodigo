---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ICTUM5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvu%2FZpMdY4fJe0i7gRaKfHvSWGGSYwJmHecDQX%2BcadBQIgAfXVjfgH2u%2BXFyoH5n0R0bWvTzBHiLRTz5WrINQ1beEq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDC%2FAElMDpAPuRiBnwyrcAzAkZ6pDbZGpYVouLLSAfwAlq4kmCFl1cZVIlTjEyF38p0gwxQZy%2BvfOE8a6IIPSDLeDzh7ccxgHXi3RCRgISYA%2F7lnlKlaQKv7KhD2dx%2BoipqsuTIVyknK%2Beer4QLh2rVpT8DhPv9LYMxfhrSMOhLEQO1fZkLkk1Hp5nTysY5pQxZy%2BJso2Eqn7soC8wneKERGt1CCiOi74n1v5ZD5pQYMYwyMVsACv63%2FRs%2BwXvzz%2FfWhOrMW9L%2FciNlauNK8nG54R8%2FXakW1eRQzjIgnO9zFgk1yyMa9r89LRdsVh%2Fr6ltO4rInHZ11o%2BdOZwTCXVUCw7A%2FiZ6n1BpsVlHyGU%2Fv5DUzNXy2OWUJ16Xt9%2BXj3lsY2MZ6UNaCIRunfdMA4MzmwsBOrTAt53DRnUjllEysM6qAdPICtWN8M8BpWWfPLkQA%2BUEtgRU5MmkCHPwAlj9pMqttUAZLXbmVBx53Z3kxSrFOTlUaLfESuMiMhk%2BZuLkm0mAHJQQFRR0I29Tqtf27rkfEGlalvdS0uay0rDpjs0tULe2d3dyKHOf7pdNiDXsCYgB5Z97%2Fog%2FppgObTg3I2Guljw0U6KaBGSk6G1EouGSLtc6Ui8KKs%2BIB5x28UsjSN82%2B%2BbZ50KimLEMLbcxskGOqUBYXgVTtZfBL%2FpcvQ1cr029iQUmIHX1ib1M7kveXhd5%2BabtgOormhkwXZ5BXm0YF5ywOfkZ4K6qQHVVw3vvmoa6cXL6UHEKt99CNc1ez7cf%2BrTw3ZKjCX1XWJch1aIIhkj5d9JAIGAfmmTJfDuBCuV7QaiinMS3LluUOWpA1P473Y%2FYy5YVC7BwIMsM%2FVSbIMtHuBFAIWS7yU13%2Fg1jCSik3chMVCT&X-Amz-Signature=dacacc968225c7ef0ee8a5f95fb74cd2046add138865aba343fb822ca522200e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ICTUM5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDvu%2FZpMdY4fJe0i7gRaKfHvSWGGSYwJmHecDQX%2BcadBQIgAfXVjfgH2u%2BXFyoH5n0R0bWvTzBHiLRTz5WrINQ1beEq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDC%2FAElMDpAPuRiBnwyrcAzAkZ6pDbZGpYVouLLSAfwAlq4kmCFl1cZVIlTjEyF38p0gwxQZy%2BvfOE8a6IIPSDLeDzh7ccxgHXi3RCRgISYA%2F7lnlKlaQKv7KhD2dx%2BoipqsuTIVyknK%2Beer4QLh2rVpT8DhPv9LYMxfhrSMOhLEQO1fZkLkk1Hp5nTysY5pQxZy%2BJso2Eqn7soC8wneKERGt1CCiOi74n1v5ZD5pQYMYwyMVsACv63%2FRs%2BwXvzz%2FfWhOrMW9L%2FciNlauNK8nG54R8%2FXakW1eRQzjIgnO9zFgk1yyMa9r89LRdsVh%2Fr6ltO4rInHZ11o%2BdOZwTCXVUCw7A%2FiZ6n1BpsVlHyGU%2Fv5DUzNXy2OWUJ16Xt9%2BXj3lsY2MZ6UNaCIRunfdMA4MzmwsBOrTAt53DRnUjllEysM6qAdPICtWN8M8BpWWfPLkQA%2BUEtgRU5MmkCHPwAlj9pMqttUAZLXbmVBx53Z3kxSrFOTlUaLfESuMiMhk%2BZuLkm0mAHJQQFRR0I29Tqtf27rkfEGlalvdS0uay0rDpjs0tULe2d3dyKHOf7pdNiDXsCYgB5Z97%2Fog%2FppgObTg3I2Guljw0U6KaBGSk6G1EouGSLtc6Ui8KKs%2BIB5x28UsjSN82%2B%2BbZ50KimLEMLbcxskGOqUBYXgVTtZfBL%2FpcvQ1cr029iQUmIHX1ib1M7kveXhd5%2BabtgOormhkwXZ5BXm0YF5ywOfkZ4K6qQHVVw3vvmoa6cXL6UHEKt99CNc1ez7cf%2BrTw3ZKjCX1XWJch1aIIhkj5d9JAIGAfmmTJfDuBCuV7QaiinMS3LluUOWpA1P473Y%2FYy5YVC7BwIMsM%2FVSbIMtHuBFAIWS7yU13%2Fg1jCSik3chMVCT&X-Amz-Signature=17f1e0c673dc8f4c6d64a015560371c42fe87dcfaa89ae6de725bd732b46edab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

