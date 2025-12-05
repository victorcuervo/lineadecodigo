---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVERQ65Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFlVfCxQ9f0vCK38njX4XTAZcD9gWik%2B4S%2B9zewSLbzAiEA8c2t8x82cEjtzaaVoxrZCL6WTz1jnO4xK6aeM8%2BxY48q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCPl1CO5ZkLySS%2BJVCrcAzfrP7tYAuGWIrm2OhEnwstcdbTw9tPH9eKPCFS9ZrcHXcpDcx6%2BiRDuz2aSfOLYFUpGJVrgbsWcdbTLHTDhpRgakmoNkpbWKSGC4Yy1xqTXoNzN0dOpvmH4lH%2BnPEZG%2B3kOxT4IX7CCpgXb7YOuiQ53TDUdFF%2FRid3ubLucBqK2TqDH9%2BQ7RcqPoEXGoCydZlyx213Gg%2BCyXBLar6FoGVfaj0z%2BxGPKiTWoQsliCm4XBA4iOlfhKw4imM%2F2xWaCAavhKHLp5HrfRI4ob0QijIoY82Jou2P0bUtbYXN16%2BF%2B%2BTlDSNXguTfeMBZ09os9mxe9G43drkbKdn7BSGsBhSPtGytorH5a4M%2B8dWHKs6u72kWwKA0iYUjpfBXKbUlNRz2gJ6DC%2FC1%2BlmgPGI6AjL9GbENwhTUW2fvZM2QkE3p8yY0%2BiFuwWeZZmrGIDhDwOtBzfLRVd6dvQktUs61BOMRgA%2Fl5dhItKWDXG8SNg7uNyOBN%2BGS7c9A3RuY%2FPZTlKXiTa5NM7FR6gs6iRCs1KqLmj%2Bs0U7n01AenC7NgGqQKyZ%2BwpO4b56w21MtlYyr5jBNNOkYIWSdI0vi3%2FemxtY3SwywjtaH7sbgNuXRTmd0D72rmn7Pn%2FmO1p2F%2BMIuuyckGOqUBisUTSYuTvlYBMWBpaExuF1wbajN2D%2FjEtrS0BlHEXTpsKPrUvFxr7Mu%2ByETDee6xC%2FRS1JeK5%2FzInIUA2aIsJxe%2BrbrLCV9HhO7nEayyKSnUnOzkcrsiHra%2B2L3waDPceeYZeeeczTWYPT3bffoDUqSkxpVf9kEVcDPTfZI9eXvMHA4EAEW1%2BPMAD0RG1AZonTp2F5uwO6EtO68x198Zro0YgO3y&X-Amz-Signature=ee1daa69f62752b47e3746ae42ed4fba803379696eed83160265b54bd465ddf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVERQ65Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T043317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFlVfCxQ9f0vCK38njX4XTAZcD9gWik%2B4S%2B9zewSLbzAiEA8c2t8x82cEjtzaaVoxrZCL6WTz1jnO4xK6aeM8%2BxY48q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCPl1CO5ZkLySS%2BJVCrcAzfrP7tYAuGWIrm2OhEnwstcdbTw9tPH9eKPCFS9ZrcHXcpDcx6%2BiRDuz2aSfOLYFUpGJVrgbsWcdbTLHTDhpRgakmoNkpbWKSGC4Yy1xqTXoNzN0dOpvmH4lH%2BnPEZG%2B3kOxT4IX7CCpgXb7YOuiQ53TDUdFF%2FRid3ubLucBqK2TqDH9%2BQ7RcqPoEXGoCydZlyx213Gg%2BCyXBLar6FoGVfaj0z%2BxGPKiTWoQsliCm4XBA4iOlfhKw4imM%2F2xWaCAavhKHLp5HrfRI4ob0QijIoY82Jou2P0bUtbYXN16%2BF%2B%2BTlDSNXguTfeMBZ09os9mxe9G43drkbKdn7BSGsBhSPtGytorH5a4M%2B8dWHKs6u72kWwKA0iYUjpfBXKbUlNRz2gJ6DC%2FC1%2BlmgPGI6AjL9GbENwhTUW2fvZM2QkE3p8yY0%2BiFuwWeZZmrGIDhDwOtBzfLRVd6dvQktUs61BOMRgA%2Fl5dhItKWDXG8SNg7uNyOBN%2BGS7c9A3RuY%2FPZTlKXiTa5NM7FR6gs6iRCs1KqLmj%2Bs0U7n01AenC7NgGqQKyZ%2BwpO4b56w21MtlYyr5jBNNOkYIWSdI0vi3%2FemxtY3SwywjtaH7sbgNuXRTmd0D72rmn7Pn%2FmO1p2F%2BMIuuyckGOqUBisUTSYuTvlYBMWBpaExuF1wbajN2D%2FjEtrS0BlHEXTpsKPrUvFxr7Mu%2ByETDee6xC%2FRS1JeK5%2FzInIUA2aIsJxe%2BrbrLCV9HhO7nEayyKSnUnOzkcrsiHra%2B2L3waDPceeYZeeeczTWYPT3bffoDUqSkxpVf9kEVcDPTfZI9eXvMHA4EAEW1%2BPMAD0RG1AZonTp2F5uwO6EtO68x198Zro0YgO3y&X-Amz-Signature=27c668f344adbd6075b5f8515f131d37d94dcd34de098cb2ca4362bb6294a970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

