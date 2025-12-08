---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSEAYC3X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAK3LhyLd2H8nLRZ7rw2kO5xVl272cxNAeXG1cLFPWnaAiEA7kyxS1D3HWN%2FIpCRd7tpmWHSYjiU%2BjHELij6pJE%2FtykqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC1SW7Ifzpcb4Xn9CrcAzje5D4fjVbY%2FAp0M1RgIz%2FRkGY79LqPfDYsKU%2BuUveFVOkY0GBuUbceS6Bxs6taepSmqn2JNjwpAdzVWA75RiOZmbSASJ72tqhlVLhl5VncwErV8QxVtBQ55k%2BYov1cLWE46UrjmOPrPJzt4n4jo%2FtAx0F%2Bxd3TXcQtwho%2Ff5PnC7SyL6O2w7DB%2BVyCG%2B%2BjIR27eWUempa6BPcggbe8AUAXwRLLRtGMoRHcapspIrHv2VpymF%2BhmdHpOzZcNDJVwW8FHHqxcMS0ScPWsF0uKs9SM7kkWnNHD7dG2tavsS7A7olHkCcG0IgwzUxAUUsq1KiNQrgDIkpO4cwd8UDJOa4hn7pCCMm4jH5kr%2BWz2nXo4Ffnyz%2BoHGYDQg3FtcSO2TsxSoSL00ywS2ftFlJXjEuvXZlbkwE87R%2FCUa67j9fpCQe2SWHSNNjvW3XLdNy2cH3rie8JBhgNmrBByJOYZpMSwxzLci24fhSBqtVZouHSAigzaDGMRbNVoE1emfj6KSuhcXWCGRpld0lieCXmXjKT4GB1uYcLdsBAcAbqg2Yv2JRfnd%2Beq97xqr8CIvgoXmIroRYz%2BPMf41UaXBqidFUZ80P8UM61%2FVogBYMjfeXQ%2BdsdBjDW5dkuwiAjMI7l28kGOqUBv8u%2BieULfw%2BYjYkHbgfegGFi3f004sruNy5ijK1TZi3GymVl1WUmAY6h5wBSZexb8joHq%2BrqrSUm6ov9R1dLRREKeGzshE1wYnJcZLTcW4Ou2%2FI6dTgyF5zXNnZgSEeH5S5I%2BRl9tMDMF1nQwwQ5IuBvUL3vpdf0pkVX955xL9sAqdo6c3epnHb6VYFNRB%2FJq8ZDg205lKb%2FKMLcY1EjXg7jJcrj&X-Amz-Signature=b8ee2738454d46275f537395ad43b076ece23efc6663210148682c3a155bc1b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSEAYC3X%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAK3LhyLd2H8nLRZ7rw2kO5xVl272cxNAeXG1cLFPWnaAiEA7kyxS1D3HWN%2FIpCRd7tpmWHSYjiU%2BjHELij6pJE%2FtykqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC1SW7Ifzpcb4Xn9CrcAzje5D4fjVbY%2FAp0M1RgIz%2FRkGY79LqPfDYsKU%2BuUveFVOkY0GBuUbceS6Bxs6taepSmqn2JNjwpAdzVWA75RiOZmbSASJ72tqhlVLhl5VncwErV8QxVtBQ55k%2BYov1cLWE46UrjmOPrPJzt4n4jo%2FtAx0F%2Bxd3TXcQtwho%2Ff5PnC7SyL6O2w7DB%2BVyCG%2B%2BjIR27eWUempa6BPcggbe8AUAXwRLLRtGMoRHcapspIrHv2VpymF%2BhmdHpOzZcNDJVwW8FHHqxcMS0ScPWsF0uKs9SM7kkWnNHD7dG2tavsS7A7olHkCcG0IgwzUxAUUsq1KiNQrgDIkpO4cwd8UDJOa4hn7pCCMm4jH5kr%2BWz2nXo4Ffnyz%2BoHGYDQg3FtcSO2TsxSoSL00ywS2ftFlJXjEuvXZlbkwE87R%2FCUa67j9fpCQe2SWHSNNjvW3XLdNy2cH3rie8JBhgNmrBByJOYZpMSwxzLci24fhSBqtVZouHSAigzaDGMRbNVoE1emfj6KSuhcXWCGRpld0lieCXmXjKT4GB1uYcLdsBAcAbqg2Yv2JRfnd%2Beq97xqr8CIvgoXmIroRYz%2BPMf41UaXBqidFUZ80P8UM61%2FVogBYMjfeXQ%2BdsdBjDW5dkuwiAjMI7l28kGOqUBv8u%2BieULfw%2BYjYkHbgfegGFi3f004sruNy5ijK1TZi3GymVl1WUmAY6h5wBSZexb8joHq%2BrqrSUm6ov9R1dLRREKeGzshE1wYnJcZLTcW4Ou2%2FI6dTgyF5zXNnZgSEeH5S5I%2BRl9tMDMF1nQwwQ5IuBvUL3vpdf0pkVX955xL9sAqdo6c3epnHb6VYFNRB%2FJq8ZDg205lKb%2FKMLcY1EjXg7jJcrj&X-Amz-Signature=d112a8e784f3fad168fce503af714afa68f9741e227a1e43f88ebf40402323fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

