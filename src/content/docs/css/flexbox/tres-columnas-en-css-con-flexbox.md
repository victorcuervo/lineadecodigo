---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WD5CL6O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRA68l4mm4pLrk0%2FN0CN0lp5RUf5RMJuNkbFAjMrAsAgIgdPqQzw04b9Gw9f4NnwOa8f8mv6UJJ%2FG69M9bSq7YfLYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdhOoGo3zGZbzffhyrcA7Ig9sX9fYodzvOTKIWI0M1OzQaGjpaLZKnSqBQ2Iq7tPHHuXtde%2B6%2B082d9WS6ximsx5QqerKbqqUCt6btxQJjERJp3m5x2HllbCo6yJ19KDM5ynuQehn%2FxA2hjDpSllzOtf%2BEzV3Ug2jTlNaDLDyBcN00xxBDAdAcaVdBCw%2FzqdIZMDZBJpx46iL8H2cpLI1PIv3%2F%2FaAcb4FCwmPYOQE%2FrtYNZ2fJHl8k7uYvDRp9JWT1kuVn4gPB27B5SrIumyGOfizzHyc9b2sgxo1eFkN1jIyQULqmXkh9UipiBgzf1yAucWJbyMUh%2FzBNk5SS6MKZdIoNIpfTKW3P7rSwQb0DG5CdUWBT58BsSIoKCDO9sx8r8mzWY71%2FRhFpVYwmb5I0Bs3bpOe4WwSNOLhdELAE1QE1FAr8BYoEqcTCQkuO9FVmFu7aYX13iSY3YUU1S7sDUIG0ozAxLTZt8N0o%2FRrmIFRCtWUl8nMwiZhzqKg8EXZppLeYXTmc8qW8w%2BPBbpB7PHxj1Yrf26uwycl1yklD20z7tC6lKB8S6SpNNmrv7gsw%2BoyENnaGJo2Gc7voWjcnXfyW2L%2BwcWQhVj9yYHBaAN4ErayAGjUPf5ROo2Tqrc8QGqa3SdGbnNf%2FbMMCG3MkGOqUBw99QGRPwzzivdsyRemQqj3VkucMAgn40FF9VR92CK800ZgE69HKQ%2B1vJ6zn6ccKb734GUKviZbJMUHC7P0OC2F3JStyAZT3PiT30usoyW1L0QDs4NcalX9yMjw1BCdgj5%2Bfhva1%2BHxY0W2AJBLrtPqkuLbVW6oX3Rduc4y62Z0zmCXFN02jrHsaj9YtKcZw%2B9SsJCCRMXF2CxmdUW4ddYuTmZvry&X-Amz-Signature=750b2be4b455c9532edd43af032bc34ac73f58026668d6a708a56cef0c51c97a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WD5CL6O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRA68l4mm4pLrk0%2FN0CN0lp5RUf5RMJuNkbFAjMrAsAgIgdPqQzw04b9Gw9f4NnwOa8f8mv6UJJ%2FG69M9bSq7YfLYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJdhOoGo3zGZbzffhyrcA7Ig9sX9fYodzvOTKIWI0M1OzQaGjpaLZKnSqBQ2Iq7tPHHuXtde%2B6%2B082d9WS6ximsx5QqerKbqqUCt6btxQJjERJp3m5x2HllbCo6yJ19KDM5ynuQehn%2FxA2hjDpSllzOtf%2BEzV3Ug2jTlNaDLDyBcN00xxBDAdAcaVdBCw%2FzqdIZMDZBJpx46iL8H2cpLI1PIv3%2F%2FaAcb4FCwmPYOQE%2FrtYNZ2fJHl8k7uYvDRp9JWT1kuVn4gPB27B5SrIumyGOfizzHyc9b2sgxo1eFkN1jIyQULqmXkh9UipiBgzf1yAucWJbyMUh%2FzBNk5SS6MKZdIoNIpfTKW3P7rSwQb0DG5CdUWBT58BsSIoKCDO9sx8r8mzWY71%2FRhFpVYwmb5I0Bs3bpOe4WwSNOLhdELAE1QE1FAr8BYoEqcTCQkuO9FVmFu7aYX13iSY3YUU1S7sDUIG0ozAxLTZt8N0o%2FRrmIFRCtWUl8nMwiZhzqKg8EXZppLeYXTmc8qW8w%2BPBbpB7PHxj1Yrf26uwycl1yklD20z7tC6lKB8S6SpNNmrv7gsw%2BoyENnaGJo2Gc7voWjcnXfyW2L%2BwcWQhVj9yYHBaAN4ErayAGjUPf5ROo2Tqrc8QGqa3SdGbnNf%2FbMMCG3MkGOqUBw99QGRPwzzivdsyRemQqj3VkucMAgn40FF9VR92CK800ZgE69HKQ%2B1vJ6zn6ccKb734GUKviZbJMUHC7P0OC2F3JStyAZT3PiT30usoyW1L0QDs4NcalX9yMjw1BCdgj5%2Bfhva1%2BHxY0W2AJBLrtPqkuLbVW6oX3Rduc4y62Z0zmCXFN02jrHsaj9YtKcZw%2B9SsJCCRMXF2CxmdUW4ddYuTmZvry&X-Amz-Signature=26aa7135a9354a8f5206bf9c35149d9a3885519d5d039ef6ed0c989622a5038d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

