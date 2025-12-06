---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPQ7ONVS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOC5QaGC0eKH5qpLdJ35aKXBRw5zAu9cxOR0bEGMN0AAiEAhkOlB705KOlosvZ4pHgeFSlJmKF3FMBgD1qWd%2BYYIsgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMNU%2F95jgXOAxIVdXyrcAyqXDUVnpcoiiwDu%2F%2FO51dcFjuw6R1g8WkuG2He%2B5bHxqgTbJMf40c39O8c8NpXce5%2BaDFmJQmcR7B%2BfVQPwHa0A0kgg5nMGYBMnZUu8uGCSq5fRO1eFrwORG7eCcGeAsLgvurfOG0n9jxllAWNH7Fm%2BETnoVGD9PMMcG5txDkEVl1PS7a40z8W1MnDcwjWFRd%2BnnnOYl%2FANkRoYPQ9KVq%2Bi86ZRy20Ind%2B%2BaZNJeVqeuigOPX2rb2l67zkh5jdv70XtGBiGMpofy082MW9aTOTmaNecjEGooVoXKIwrr3g%2BvMeE2x23eBMQ%2FkaEKgfpY1RTcHXEGK9cIrRnr1q2pOqsoEg6btq2WANDF62%2FMAxetMp67rO8Tkgb26B0HrkWjzFypEUV%2F7FB1Uvrw6RA5GaNovC%2BuKX30OvVGu2XnVyqVhVNLkO2oo41RdXwRCrjMbhRsJNmaf%2FYJCnNIBi%2FKngJ%2BDhWk8StC71oVaS64q2nmiLEpODSF3lIcne9YJFpq6K2dQTgaMLnA%2Bp0Wh4TuRSguGnJ9KQS%2B85iEoN5H0Z0rIyfyDOEd5BUkWEs6wnEoClvajAi6kvvM85mUv%2FH%2FG%2Fk1ZJ8kqS4ZwBd1LVFqZ6Kv0GeNJ7mV41s8MGSMLS8z8kGOqUBYwxEabFpMrAqlKQ1GQjvgIf%2FaPT5LWVn2u0f%2Bg7qtfzDBtdkIBsJk2OUcjF%2F%2BEwYqkCMfRgpgVPZQ0dReFGA4iJ%2BiBXYy1Ijqjj3b2wb2CyXWQ2wWd7t9%2FJgBNEnxCIaaOe3khwzk3Wua22bJ72tS3ve%2Fjgwr9nlampPOTjWM96QS4ReLF5K2RUxLW64P9Gbq%2FOO34sewHCw7ekqMq2uaXucUomL&X-Amz-Signature=8b4a0e1679234a73532d4813cf89f4e39df25060d9764abdfd1e77682866320f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPQ7ONVS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOC5QaGC0eKH5qpLdJ35aKXBRw5zAu9cxOR0bEGMN0AAiEAhkOlB705KOlosvZ4pHgeFSlJmKF3FMBgD1qWd%2BYYIsgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDMNU%2F95jgXOAxIVdXyrcAyqXDUVnpcoiiwDu%2F%2FO51dcFjuw6R1g8WkuG2He%2B5bHxqgTbJMf40c39O8c8NpXce5%2BaDFmJQmcR7B%2BfVQPwHa0A0kgg5nMGYBMnZUu8uGCSq5fRO1eFrwORG7eCcGeAsLgvurfOG0n9jxllAWNH7Fm%2BETnoVGD9PMMcG5txDkEVl1PS7a40z8W1MnDcwjWFRd%2BnnnOYl%2FANkRoYPQ9KVq%2Bi86ZRy20Ind%2B%2BaZNJeVqeuigOPX2rb2l67zkh5jdv70XtGBiGMpofy082MW9aTOTmaNecjEGooVoXKIwrr3g%2BvMeE2x23eBMQ%2FkaEKgfpY1RTcHXEGK9cIrRnr1q2pOqsoEg6btq2WANDF62%2FMAxetMp67rO8Tkgb26B0HrkWjzFypEUV%2F7FB1Uvrw6RA5GaNovC%2BuKX30OvVGu2XnVyqVhVNLkO2oo41RdXwRCrjMbhRsJNmaf%2FYJCnNIBi%2FKngJ%2BDhWk8StC71oVaS64q2nmiLEpODSF3lIcne9YJFpq6K2dQTgaMLnA%2Bp0Wh4TuRSguGnJ9KQS%2B85iEoN5H0Z0rIyfyDOEd5BUkWEs6wnEoClvajAi6kvvM85mUv%2FH%2FG%2Fk1ZJ8kqS4ZwBd1LVFqZ6Kv0GeNJ7mV41s8MGSMLS8z8kGOqUBYwxEabFpMrAqlKQ1GQjvgIf%2FaPT5LWVn2u0f%2Bg7qtfzDBtdkIBsJk2OUcjF%2F%2BEwYqkCMfRgpgVPZQ0dReFGA4iJ%2BiBXYy1Ijqjj3b2wb2CyXWQ2wWd7t9%2FJgBNEnxCIaaOe3khwzk3Wua22bJ72tS3ve%2Fjgwr9nlampPOTjWM96QS4ReLF5K2RUxLW64P9Gbq%2FOO34sewHCw7ekqMq2uaXucUomL&X-Amz-Signature=86c08590f29d1f6b052258374d184120c092eaa64aeba996489b0cc7118b6048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

