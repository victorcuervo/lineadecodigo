---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3V7RXBP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIGfbqgZHvyR97iUKzCf1J9OKImGenza76q9t9rkeHn%2FbAiEAz3Ld7uJZQ9KF918sb9CV%2FBc2ac4yqlin7HRxWJtjkXkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCwxG%2F3rlpOSC4XxzyrcA3P4dmTCISuV2W%2FeoMPCk2TV5c%2B%2FNjQU4QFYsEv%2FuucbhHBmV9x2xbpPAP1f4ILcMlMgczUzbpPeN2UI34kacdRpYDmbjZdVEN0boJ1Eyuw%2FokjSfXYwt90rEw8TpZDjg%2BsdXeVZF%2FfdOxxijeBv9heejU0qoRPamZX0Vh%2BRJJMe1a2TyDjGhd6bDuJJR1PGxc9mBlG%2F3rTfSPZK9nxQAfRNtuOUPVTKQE38%2B3OmS6Oen9nhNsMatKeGaaK8iCSbSJmWa1qHHeHm5f80WCWplNlqpXK%2BvOPA3PQMEBXnbdxfzlbPk4N6FKCw7RPjyLrQFP1cd%2BjsFK0F%2FEGjSa2JaIDKe%2F5zvkreW3ZkovSqGSteObUva4QssXO67c1Y4xrfsMMS%2BNZVx6Mg92av6R6syOq0io9SU%2FM9M8IrpKEl34LppuoQCAKV92vD3PhhHmhc5eB72cYp5FS83vzS%2F2plqfXvuTZbcOOwES%2FXhliNYK58eQUXX%2Bm1sqEg2095%2Fa44h46WNdVjrQZQXkk4l2WZFiXo8Ys79wdkl%2F02tDuCCbkFzTXI2ngJoYdCGqzycblg2Q9O9m%2FSwhjIOmlGAri1sD9ku9ZmRCCr9XMr5RIYK2nJrb%2FYxgGyIrdRk5S%2FMOzTw8kGOqUBy0Aj6tTY0HZMfdWJ%2F02KiFoOtRepDNhzwvHKP5LJiLHJVhpXIY%2BXal8cU52Pxvb7pKWD3750%2BdlJeAjM8tfSJ4919P3LZHyZu9CCeS0zpjeSAv%2F1gwsTagbUpUdm%2FT6j5vRYaCjAgkTnB1eWND3ejnYLtCQr8vJVpDoSHm9EULtgL5H%2Fd1ygIigODm2U93xYD3MwN8pMnf3sV29Oo4jFzC5Xcr%2Bn&X-Amz-Signature=f85642dd9b84eebacda9dc390ab64e75b02da5fd428c472d1ed4cf089b7d6a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3V7RXBP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIGfbqgZHvyR97iUKzCf1J9OKImGenza76q9t9rkeHn%2FbAiEAz3Ld7uJZQ9KF918sb9CV%2FBc2ac4yqlin7HRxWJtjkXkq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDCwxG%2F3rlpOSC4XxzyrcA3P4dmTCISuV2W%2FeoMPCk2TV5c%2B%2FNjQU4QFYsEv%2FuucbhHBmV9x2xbpPAP1f4ILcMlMgczUzbpPeN2UI34kacdRpYDmbjZdVEN0boJ1Eyuw%2FokjSfXYwt90rEw8TpZDjg%2BsdXeVZF%2FfdOxxijeBv9heejU0qoRPamZX0Vh%2BRJJMe1a2TyDjGhd6bDuJJR1PGxc9mBlG%2F3rTfSPZK9nxQAfRNtuOUPVTKQE38%2B3OmS6Oen9nhNsMatKeGaaK8iCSbSJmWa1qHHeHm5f80WCWplNlqpXK%2BvOPA3PQMEBXnbdxfzlbPk4N6FKCw7RPjyLrQFP1cd%2BjsFK0F%2FEGjSa2JaIDKe%2F5zvkreW3ZkovSqGSteObUva4QssXO67c1Y4xrfsMMS%2BNZVx6Mg92av6R6syOq0io9SU%2FM9M8IrpKEl34LppuoQCAKV92vD3PhhHmhc5eB72cYp5FS83vzS%2F2plqfXvuTZbcOOwES%2FXhliNYK58eQUXX%2Bm1sqEg2095%2Fa44h46WNdVjrQZQXkk4l2WZFiXo8Ys79wdkl%2F02tDuCCbkFzTXI2ngJoYdCGqzycblg2Q9O9m%2FSwhjIOmlGAri1sD9ku9ZmRCCr9XMr5RIYK2nJrb%2FYxgGyIrdRk5S%2FMOzTw8kGOqUBy0Aj6tTY0HZMfdWJ%2F02KiFoOtRepDNhzwvHKP5LJiLHJVhpXIY%2BXal8cU52Pxvb7pKWD3750%2BdlJeAjM8tfSJ4919P3LZHyZu9CCeS0zpjeSAv%2F1gwsTagbUpUdm%2FT6j5vRYaCjAgkTnB1eWND3ejnYLtCQr8vJVpDoSHm9EULtgL5H%2Fd1ygIigODm2U93xYD3MwN8pMnf3sV29Oo4jFzC5Xcr%2Bn&X-Amz-Signature=b1f08dc077bc088e7e0a4578ac5f00ca48dfaa1df6dbfbee183ab8878aeced4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

