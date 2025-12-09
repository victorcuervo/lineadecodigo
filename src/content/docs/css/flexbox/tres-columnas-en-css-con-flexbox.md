---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KK5HSR5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2B1nXHUsw3G6kkJEgP640vTItiA7FmY3EAYtSpEZBR6AiEA7myl2N%2BJFGpz8tK6imUyiGa4dfF7kFyAtu3s8Y%2Bq6HkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBOm0jsB1514AosWSrcAzPp7bXcw5Bsqt%2B1kDU4pSkHvADHnAbASv7UmgOBM70YGx%2BH2HPhwb8rnzD0%2FMdQdbtx1GeAU%2BlQW97n9DJt9pHyPTBCSVCSAYttXP8mGuGKvp7YyiAQFrkoUXTckn%2FjrUX%2B8m4D0uQ5J3dpSQizbFn0meh4G7OiKHYiEMwKJupyBkaGkOK2fdJRhnPixVYtVZ%2FS9miEfnSLhgsHKq5DqZLZ9D1MnlbfAB72OqLKnVJXNhz%2B31cbuiJkNY2XyfnISnDIu7SCC1blKLPerunPOkDi9Inz1FtolCAMOplj1%2F0Mr%2BXpv6lqgaZLNaguAKHarPFq2CDlbrotsFVmMSwAKMh%2FZkD8G7r12WO46F9fhAskuyh5wWhy9cCXBNcDPVnBfWP5APkm%2B2%2B5Yz4NZF%2FUMX8K6o1AxDCv9nRmuOGWVHIpOoKPUu%2B09%2FRgLF5IqmP1YcoVA8clDLwZPsCepvg8LCQlwY56j5R8WqOTL2Z8WuepLoJ8Q3pO6BtBvV34g44lZgu40zekfjq1eX7LUOSIabVaJz4N4Z7j8mWfeo4duxeYo8YFVy50YE8g4umhKygyervRwg26ouG9TO4txAqHjpn4JT8N2gdz98uxpBqE5VK%2BcjpGiDSj6iE3%2BTZHMICu3skGOqUBsLtURaB%2FXhRN52kIHmZGyz%2BofmSz6LaRTxDY69QnpIsOHFOqPtUTxbMo6DrMX1kJxc5CJaPGvI2UzDlK3WFu9Ooq7XjpVfgzZJoTSnpTBTjQG8htBlR9xZIkwjmEW4BPdZcQRvP282LExZrY5DLeSnJptrognU1JG%2BUuAOF%2FbW52lOpwJQQYRwjpSh0fr8jc9Omx9SN8ajvhW4K8COfv2U5lFEq1&X-Amz-Signature=6586453e1694a206bb7d01a2c28680749b9deb6760b94a273c879f431cbff692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KK5HSR5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2B1nXHUsw3G6kkJEgP640vTItiA7FmY3EAYtSpEZBR6AiEA7myl2N%2BJFGpz8tK6imUyiGa4dfF7kFyAtu3s8Y%2Bq6HkqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPBOm0jsB1514AosWSrcAzPp7bXcw5Bsqt%2B1kDU4pSkHvADHnAbASv7UmgOBM70YGx%2BH2HPhwb8rnzD0%2FMdQdbtx1GeAU%2BlQW97n9DJt9pHyPTBCSVCSAYttXP8mGuGKvp7YyiAQFrkoUXTckn%2FjrUX%2B8m4D0uQ5J3dpSQizbFn0meh4G7OiKHYiEMwKJupyBkaGkOK2fdJRhnPixVYtVZ%2FS9miEfnSLhgsHKq5DqZLZ9D1MnlbfAB72OqLKnVJXNhz%2B31cbuiJkNY2XyfnISnDIu7SCC1blKLPerunPOkDi9Inz1FtolCAMOplj1%2F0Mr%2BXpv6lqgaZLNaguAKHarPFq2CDlbrotsFVmMSwAKMh%2FZkD8G7r12WO46F9fhAskuyh5wWhy9cCXBNcDPVnBfWP5APkm%2B2%2B5Yz4NZF%2FUMX8K6o1AxDCv9nRmuOGWVHIpOoKPUu%2B09%2FRgLF5IqmP1YcoVA8clDLwZPsCepvg8LCQlwY56j5R8WqOTL2Z8WuepLoJ8Q3pO6BtBvV34g44lZgu40zekfjq1eX7LUOSIabVaJz4N4Z7j8mWfeo4duxeYo8YFVy50YE8g4umhKygyervRwg26ouG9TO4txAqHjpn4JT8N2gdz98uxpBqE5VK%2BcjpGiDSj6iE3%2BTZHMICu3skGOqUBsLtURaB%2FXhRN52kIHmZGyz%2BofmSz6LaRTxDY69QnpIsOHFOqPtUTxbMo6DrMX1kJxc5CJaPGvI2UzDlK3WFu9Ooq7XjpVfgzZJoTSnpTBTjQG8htBlR9xZIkwjmEW4BPdZcQRvP282LExZrY5DLeSnJptrognU1JG%2BUuAOF%2FbW52lOpwJQQYRwjpSh0fr8jc9Omx9SN8ajvhW4K8COfv2U5lFEq1&X-Amz-Signature=95973139dd0d3beac42b1f5d47e5223a87cf475475ae8ddd391928603c051dde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

