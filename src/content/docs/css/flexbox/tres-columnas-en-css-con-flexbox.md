---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDD4ZPQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBbXjeM2joC9uPJESeFrRWY5M53NP%2Bi4crAA9bGQyGBAiEApkD2JnwGfqJiQhAQFTnbnFfOqgAQ%2Fch4UTWzisPp%2F1IqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfKE8XObNR9SEORxSrcA4ROQ5cGU34yuQoqu5HA487So0jvLJo%2FfcjV0KUVUqRUcie%2FMm4G7kVnfqBc0Y8cLJ9SbuY582qwlGTTBt2AKPaJ%2FanXrblGeHGhIgl8028tckzVjI1T%2F0YBhi%2FBjkV0Or6NFMJEyfUyRMDJ%2FWEE140fcZR5YttEbRnPCYXzvS6Y1hi0Un3DvTfqW6XTxZnLDwySfsr10bjgOXLwtW1ITCX5mRFSAI8IIA1nS9hpK3nC%2FxRy9Lbd%2Fq1ubbkY1UrbHSmHHVLoLQlNEHkD5UV%2FDwy4TmdMoYyK78eH%2B3DKZP75zlnIVmzOS1w50y3laDDnAKuUA4Xw%2FYx3HfeTmxaa0pkq5YNPf5HqhjmQkQEZTCNidl3epvCqW9cXLNYgdvuurP6KWgrd%2BpYjbREyjPx0hr8N8byAdkHEELvb4XpCFdOzEkAOVkfM6j6MVwmr%2F9Mdvl6HIU98EsWKBihNhqimRMUfeqegCHdFP4IHYRb%2BjdWGn1Wusu7tqpXKnARe3UkckSElQ6FOLBhbkvloh7DsNfNI1FgCqFGUiDOmugFQZ%2BTK2oVC6aXO%2B7lt7tG4pHWNyzGuSqnsW7tAScCaJFa3LuqAfudVV7M804PFxjHZtj6bQ6ZKPFuuwMN5ZrBBMIfR2ckGOqUBXHjPKol6ngksfZb5PpcLqEGeDgh3ktNnXD6O2nEOv%2BqbR9IwEMJ9%2FEY4vFwyr3bMM9AuoX9Ckx7G29oP6fnGEecBTUOniWOTBBadLVZVGi3cg06FIvVUcqb8W4E1DmtgGbtVG6nZXOT2pDEpbsNV3%2FV3nVDwMQP65TEKv7pk1AKQX%2FMwbtpqNMeksrd%2FBHUvik3bHExfGeuyY0Rst74VvtmVlmS%2F&X-Amz-Signature=8a07472aaefa29686e15e2b3d604469afe702b80204890f501120942ff1dae6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDD4ZPQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T063737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBbXjeM2joC9uPJESeFrRWY5M53NP%2Bi4crAA9bGQyGBAiEApkD2JnwGfqJiQhAQFTnbnFfOqgAQ%2Fch4UTWzisPp%2F1IqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfKE8XObNR9SEORxSrcA4ROQ5cGU34yuQoqu5HA487So0jvLJo%2FfcjV0KUVUqRUcie%2FMm4G7kVnfqBc0Y8cLJ9SbuY582qwlGTTBt2AKPaJ%2FanXrblGeHGhIgl8028tckzVjI1T%2F0YBhi%2FBjkV0Or6NFMJEyfUyRMDJ%2FWEE140fcZR5YttEbRnPCYXzvS6Y1hi0Un3DvTfqW6XTxZnLDwySfsr10bjgOXLwtW1ITCX5mRFSAI8IIA1nS9hpK3nC%2FxRy9Lbd%2Fq1ubbkY1UrbHSmHHVLoLQlNEHkD5UV%2FDwy4TmdMoYyK78eH%2B3DKZP75zlnIVmzOS1w50y3laDDnAKuUA4Xw%2FYx3HfeTmxaa0pkq5YNPf5HqhjmQkQEZTCNidl3epvCqW9cXLNYgdvuurP6KWgrd%2BpYjbREyjPx0hr8N8byAdkHEELvb4XpCFdOzEkAOVkfM6j6MVwmr%2F9Mdvl6HIU98EsWKBihNhqimRMUfeqegCHdFP4IHYRb%2BjdWGn1Wusu7tqpXKnARe3UkckSElQ6FOLBhbkvloh7DsNfNI1FgCqFGUiDOmugFQZ%2BTK2oVC6aXO%2B7lt7tG4pHWNyzGuSqnsW7tAScCaJFa3LuqAfudVV7M804PFxjHZtj6bQ6ZKPFuuwMN5ZrBBMIfR2ckGOqUBXHjPKol6ngksfZb5PpcLqEGeDgh3ktNnXD6O2nEOv%2BqbR9IwEMJ9%2FEY4vFwyr3bMM9AuoX9Ckx7G29oP6fnGEecBTUOniWOTBBadLVZVGi3cg06FIvVUcqb8W4E1DmtgGbtVG6nZXOT2pDEpbsNV3%2FV3nVDwMQP65TEKv7pk1AKQX%2FMwbtpqNMeksrd%2FBHUvik3bHExfGeuyY0Rst74VvtmVlmS%2F&X-Amz-Signature=adf7835ecefdeb64a57ebcb49fb1fb209fb50ac8d353e0b91149a2f215d7fe6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

