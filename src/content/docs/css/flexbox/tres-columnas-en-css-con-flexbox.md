---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPCQ24HE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtwPD1S2DSUC%2F2Mg5OxJ9vz3vJAaKm8qBqsRNF5LQgTAiEAqYebQdDeG3ikHOe4fpDrL4Ln5GAietiiofWCocFdV6sqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjpIiT0MEGfukO9gSrcA8QoIRByZXeIDfQG18UmCqccWB%2BeMNjEGKIjACSIdexyaAUi8G0q2VIuEukVKwNCP5nEfUVKRFIHo%2B1wSgjz5Aa9f8S%2BffTRwxSsqhE5Kh1DNs6264Bns1rhSsjrW3BIXtmzf4f31sgNFndN7Fzi3%2BKc9nxrIfUSpkpjYTiXH3rxow93TtVrRh%2F6xZT8r93R%2Bmlv4ykvqgTAWkRK%2Bl9fv3x2EBzdmLsz0BI%2FvL26s2H9qDXuXXcjwk%2F2OW84HVTz%2FodO74gfjNrQn32bJx0woH4TxH7VJeREXzTaioy5UzZ65U3vpUnBV0rIJxVPy3YBtcZxB8aNfojUoqoWdHjCFP2RNl8yZ18XMmjAGipDWdGOWK166xDi7%2BjTG58PsgOm6nr65Lit0UGtY675ulgYFaGarJ2NXTHMjtUPlm2U3AHdZHvdqy%2FE%2FQhOT2N%2BnwiQNU8Jc8QYzQKNKoe9sAlUgrNK1zz8%2BWF5%2F7RxFP7JMcgXb4R%2BdKGFF%2B%2FbFMoJ%2FP2WzdVJksaf1lgokAJLkMeW5%2FemTKnpyNv%2BmtNagW2yefLmFPsDr7wmuPlW%2FaXcXy3l%2BMGzEJFsw1uHuzNtirCRTQ077UWeKrpaaCEbgaAClmNQJ21BovA%2FNqYfwBFSMOru2MkGOqUBV3ops88%2BowLSdMS7SHzSLbMlr0iq%2FGo4wWRK82Yvjgg6ytj35EHH61WPmVh1wWZoMiWHUAviGKEzor8kMugGxExZLau9fL8st%2B6FNydS5cVj8Pnud3Ktp13RT61Xm5A4cvH5RDjHKALEYtMiqdHjfO%2FzCizX3k6EzhU51PRCc8lBE8BshAQUcXjFdWgu6WCpQLkqjuz0jHPWx%2FACGKyGUFvilUYj&X-Amz-Signature=aa75b4f911c84a050d1debd91b57ffb7ae48a6ea2b9d7e584352d3ad9ea9b025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPCQ24HE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T025955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtwPD1S2DSUC%2F2Mg5OxJ9vz3vJAaKm8qBqsRNF5LQgTAiEAqYebQdDeG3ikHOe4fpDrL4Ln5GAietiiofWCocFdV6sqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPjpIiT0MEGfukO9gSrcA8QoIRByZXeIDfQG18UmCqccWB%2BeMNjEGKIjACSIdexyaAUi8G0q2VIuEukVKwNCP5nEfUVKRFIHo%2B1wSgjz5Aa9f8S%2BffTRwxSsqhE5Kh1DNs6264Bns1rhSsjrW3BIXtmzf4f31sgNFndN7Fzi3%2BKc9nxrIfUSpkpjYTiXH3rxow93TtVrRh%2F6xZT8r93R%2Bmlv4ykvqgTAWkRK%2Bl9fv3x2EBzdmLsz0BI%2FvL26s2H9qDXuXXcjwk%2F2OW84HVTz%2FodO74gfjNrQn32bJx0woH4TxH7VJeREXzTaioy5UzZ65U3vpUnBV0rIJxVPy3YBtcZxB8aNfojUoqoWdHjCFP2RNl8yZ18XMmjAGipDWdGOWK166xDi7%2BjTG58PsgOm6nr65Lit0UGtY675ulgYFaGarJ2NXTHMjtUPlm2U3AHdZHvdqy%2FE%2FQhOT2N%2BnwiQNU8Jc8QYzQKNKoe9sAlUgrNK1zz8%2BWF5%2F7RxFP7JMcgXb4R%2BdKGFF%2B%2FbFMoJ%2FP2WzdVJksaf1lgokAJLkMeW5%2FemTKnpyNv%2BmtNagW2yefLmFPsDr7wmuPlW%2FaXcXy3l%2BMGzEJFsw1uHuzNtirCRTQ077UWeKrpaaCEbgaAClmNQJ21BovA%2FNqYfwBFSMOru2MkGOqUBV3ops88%2BowLSdMS7SHzSLbMlr0iq%2FGo4wWRK82Yvjgg6ytj35EHH61WPmVh1wWZoMiWHUAviGKEzor8kMugGxExZLau9fL8st%2B6FNydS5cVj8Pnud3Ktp13RT61Xm5A4cvH5RDjHKALEYtMiqdHjfO%2FzCizX3k6EzhU51PRCc8lBE8BshAQUcXjFdWgu6WCpQLkqjuz0jHPWx%2FACGKyGUFvilUYj&X-Amz-Signature=080acd3d6a12658dbbd68463e3a3bd2869613c745ce101acd961ecc17bed1f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

