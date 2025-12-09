---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMQBJISG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5E9LUuHZqjXUXmu0rxkiaDRpKBUIokthjD4Cw3fwvowIgPUjqS%2B6NQA1AjXelNBSQNh%2Ft7a2SuiBMdPIoFcH58OQqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFW%2F%2FVEdZYylbR3MCircA11AEGJiBqyNKY9vpNKzjT6ofndgjZrbKpZIJgJtp8tTyaCi0zxziO2Wj3r5FcMQuN4uAhXaBCk%2FlD1e732PleKHj2uqTAm8F7GSIzO7mSpcelLW%2BPaPMCEaaZ6DU09p6CDlqD%2BTWWpipaEksgu3n9%2BNS1ss%2BojQ86sXXkvX%2FasuYIc%2BcC1IY5MeMgv0vBG7iED9AChmqwkID%2FYnaJ50ud6Pw1ZlXfpyFNT8%2BVGBkdJMRP%2FaLEwuHa5FBqZUC4PixD6ruCJbXXjARDc5w4tqG8V4Se29q3x7p7BdlwlRdYkwdVTleMyvVOJSTS%2BJwDamDXVVpVX%2BO%2BvGsUGYoDEzGJoSYJBfwvBoE2IQ6w5fWRTvy1liyjoBzNVSZQTyzq19vLtmXoMq1cAf6MjR2N4d6UivsLqmoKOI57J5tM0aAbgsvpbgm6Kb296MMt6lcxuUQ1OSGWTl8xkydKz8x5vX5DW7vh2uIlN7BxeuGJHew2vmxCJXmiwUTQzeR4daLG%2FOlBC9RBH1MDgcqTWNBLz%2FJ9MNfXScoasIdWAilDN2E%2Bzpn0Z0e%2FVvBJdAjKqFmwtnObz3Dstb5LwnpWofHNecRjScbt%2BsaubERKbivIajHlBWkKDmKr4b2WRG7%2FyzMIbp3ckGOqUBHnbpgL3KGtbxas2ab5xNKcnegVfu%2FLn0T8nnvUv0bLEWL%2Bz%2FU1D70kqu5V1MGBr9Ayg%2FcrMN1I5LMz4cQPWWJJE2JZR2LH8a75szt7LGuCP7PcqzsgmknV7ZYTFla%2FQ%2FOSYEejyieYrWoOL8kWg72KlpfgDiezDnJP9je4uaaoqBgcePDuAYVT%2Fz2aa3GNM4LrJn1TD%2FceId9PIIWn5TAmiP4fzw&X-Amz-Signature=271b71221c5abbed957d9892ca534d44b5218818190e52fd2c3c38150d16981e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMQBJISG%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5E9LUuHZqjXUXmu0rxkiaDRpKBUIokthjD4Cw3fwvowIgPUjqS%2B6NQA1AjXelNBSQNh%2Ft7a2SuiBMdPIoFcH58OQqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFW%2F%2FVEdZYylbR3MCircA11AEGJiBqyNKY9vpNKzjT6ofndgjZrbKpZIJgJtp8tTyaCi0zxziO2Wj3r5FcMQuN4uAhXaBCk%2FlD1e732PleKHj2uqTAm8F7GSIzO7mSpcelLW%2BPaPMCEaaZ6DU09p6CDlqD%2BTWWpipaEksgu3n9%2BNS1ss%2BojQ86sXXkvX%2FasuYIc%2BcC1IY5MeMgv0vBG7iED9AChmqwkID%2FYnaJ50ud6Pw1ZlXfpyFNT8%2BVGBkdJMRP%2FaLEwuHa5FBqZUC4PixD6ruCJbXXjARDc5w4tqG8V4Se29q3x7p7BdlwlRdYkwdVTleMyvVOJSTS%2BJwDamDXVVpVX%2BO%2BvGsUGYoDEzGJoSYJBfwvBoE2IQ6w5fWRTvy1liyjoBzNVSZQTyzq19vLtmXoMq1cAf6MjR2N4d6UivsLqmoKOI57J5tM0aAbgsvpbgm6Kb296MMt6lcxuUQ1OSGWTl8xkydKz8x5vX5DW7vh2uIlN7BxeuGJHew2vmxCJXmiwUTQzeR4daLG%2FOlBC9RBH1MDgcqTWNBLz%2FJ9MNfXScoasIdWAilDN2E%2Bzpn0Z0e%2FVvBJdAjKqFmwtnObz3Dstb5LwnpWofHNecRjScbt%2BsaubERKbivIajHlBWkKDmKr4b2WRG7%2FyzMIbp3ckGOqUBHnbpgL3KGtbxas2ab5xNKcnegVfu%2FLn0T8nnvUv0bLEWL%2Bz%2FU1D70kqu5V1MGBr9Ayg%2FcrMN1I5LMz4cQPWWJJE2JZR2LH8a75szt7LGuCP7PcqzsgmknV7ZYTFla%2FQ%2FOSYEejyieYrWoOL8kWg72KlpfgDiezDnJP9je4uaaoqBgcePDuAYVT%2Fz2aa3GNM4LrJn1TD%2FceId9PIIWn5TAmiP4fzw&X-Amz-Signature=eb078803acd60f6bb8f45a2937fcb265d67c042af02e51740215b64b552a839e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

