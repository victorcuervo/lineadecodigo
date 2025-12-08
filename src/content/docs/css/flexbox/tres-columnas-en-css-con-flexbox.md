---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMZ2KQK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF8Cy%2Fzm1XN%2F8FJyKr5fzqzhXDwZ5xQwV9xcos0NiLpAiEA%2FLwpH5L92qHJL5FvhYyylXRTq1pynQsSCCphbeD8fA0qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDII03MQG6%2F7h3bFduyrcA8Adnuxxl6lqir7LZvjWdItXgNlsVsCsF%2F87nRkQlY4AiBHW207d8nxE2CyfqD6RBBch5H1EmhwlQwiAlT3vpEBXH7ilid2UFYe85t2dwOQguuUExFMMzi0oREQmOp7tSyo6QRVV0RdzBuhAs3kMdb4DFPl%2BVpjqlGXzDFioVgTaaYsFF8xx2N81o53Og1no5IZqndqVG06XXcG%2F%2Fgfr%2FOYl79cC5M8b%2BAXyQetKMkL2TDKnXctYisDGUqZMlpZBr%2BWE6y7OciT%2FsDZGPIEJLQlGfgaYTABnX4XgU0muQY6CWvHcfeUKRhYL5D9aAeraCCG0DVE7KP2ARLt1KjFOmEV2JQoHwji1QJooRAvZp4my68OIu08eC9PxtKBitR8NXtljgYEVyXjt%2Bz6eSnCK7Z%2BlUCU03AD2gG2Rb%2BXmEL1BuYg%2F2GVzNlb3zxp4a%2Fw1mer%2FVWBtbIZKc7uifNDd0Fwuj1sdyFR6zmdCXNX8qR3%2B8f0PJyqCx3TPGrbBbfMACvZtbkwd%2FbUR7tQYgTMXvhyvLcVFU4ExUBVURGQdoWy7vdzGRlHRrdsxOo3ws%2F1ySa49KLphiZgtVSP6FsbE6aWOXOiIVmvK33TQFhtyBF6E%2FKpaMogMDJe6WmcPMPqh3ckGOqUBfEGWIKoFPPJw2KQkEy4wA6VfeRM6%2FEJ96onz30HSvO%2FqKQ23tyFit0gG3vK6OL5Fub6h24Ap0ITaOZFIWBdfrToJF7wBJMFOWjNomIaFjbC%2FLeFyrlpbIZTdQzzHkiuUNthNCAp0v5PjCWVHrAn%2FTbrCus23qKb3NUBQNBaYY%2Fq1TNJ%2FKIfTXi4PFkjx2QrCFCn0We4zPq3QDS6%2Fj3crtW5oAyWX&X-Amz-Signature=5d24c3ff81cfe94c3e68b05ff137abc9183d304d1c83658c5dabff43d843f6e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMZ2KQK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF8Cy%2Fzm1XN%2F8FJyKr5fzqzhXDwZ5xQwV9xcos0NiLpAiEA%2FLwpH5L92qHJL5FvhYyylXRTq1pynQsSCCphbeD8fA0qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDII03MQG6%2F7h3bFduyrcA8Adnuxxl6lqir7LZvjWdItXgNlsVsCsF%2F87nRkQlY4AiBHW207d8nxE2CyfqD6RBBch5H1EmhwlQwiAlT3vpEBXH7ilid2UFYe85t2dwOQguuUExFMMzi0oREQmOp7tSyo6QRVV0RdzBuhAs3kMdb4DFPl%2BVpjqlGXzDFioVgTaaYsFF8xx2N81o53Og1no5IZqndqVG06XXcG%2F%2Fgfr%2FOYl79cC5M8b%2BAXyQetKMkL2TDKnXctYisDGUqZMlpZBr%2BWE6y7OciT%2FsDZGPIEJLQlGfgaYTABnX4XgU0muQY6CWvHcfeUKRhYL5D9aAeraCCG0DVE7KP2ARLt1KjFOmEV2JQoHwji1QJooRAvZp4my68OIu08eC9PxtKBitR8NXtljgYEVyXjt%2Bz6eSnCK7Z%2BlUCU03AD2gG2Rb%2BXmEL1BuYg%2F2GVzNlb3zxp4a%2Fw1mer%2FVWBtbIZKc7uifNDd0Fwuj1sdyFR6zmdCXNX8qR3%2B8f0PJyqCx3TPGrbBbfMACvZtbkwd%2FbUR7tQYgTMXvhyvLcVFU4ExUBVURGQdoWy7vdzGRlHRrdsxOo3ws%2F1ySa49KLphiZgtVSP6FsbE6aWOXOiIVmvK33TQFhtyBF6E%2FKpaMogMDJe6WmcPMPqh3ckGOqUBfEGWIKoFPPJw2KQkEy4wA6VfeRM6%2FEJ96onz30HSvO%2FqKQ23tyFit0gG3vK6OL5Fub6h24Ap0ITaOZFIWBdfrToJF7wBJMFOWjNomIaFjbC%2FLeFyrlpbIZTdQzzHkiuUNthNCAp0v5PjCWVHrAn%2FTbrCus23qKb3NUBQNBaYY%2Fq1TNJ%2FKIfTXi4PFkjx2QrCFCn0We4zPq3QDS6%2Fj3crtW5oAyWX&X-Amz-Signature=dafd96be05be2f8551696a6a0822423e29d7dcc38ce8794b0716708b69a2ea71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

