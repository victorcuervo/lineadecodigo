---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DZAW6LP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwnSvsvAEgtfFmg70kYgimiQzGgc3GG2M9J9kWIKCJYAiAjGJB4gVDeeTFohndEMTD9dwUs0HF%2FnM%2BgOS31hkcZliqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP8MyS%2FHV%2BNLPmOz%2FKtwDI2h4zEE3JCJLcbo4MD9Nr9q%2BgPLC2T%2Fdu16yaO6B562Mqx%2F6rhbThK1O0Fq2GIi2W%2BFjVT9aPnF3OsL8sXQN8ebF0BSvAlly%2Bo4M5M7T3RuivKxlL7BJWXXith4toe8S41oe%2FYBAnArKFt4PDYzyMDO%2FWg5x2e%2B11yhOgMpdkwNPdtJ0am%2F2C3WAAYkj4EekHH6PRmAy2BfKJ3RmWS2epE7Uei9mSbST1btVvFD60uXS6EaaKldiNb5oC%2FA5CwzHeN2J8HNVGzdUF8Zqp%2BK%2BybnA75v%2B8LaAR%2BhX5mAAyRBWg0VgNnvEonUAKli4m9NLy%2Bi5fYbvBlnA4PCY1i2jHncmxGJIkNZcC%2F3xdNSR%2FC%2BNusDjzcKEAigYffsxMfy8H%2FSLBTQ0tpf7mCckGV6FMSctDQBMb8o82gNAgrXg4fm7bf2DOmcznB09nlmaYGgZs4vF0wrftkVhyuZbxLBSs6fjcEiplFIFnx7RgzXbNXw9vwMMdxnPo3VFajp3X9rdRC6EJCvjgqos5waFd7w6WgMm1aKQsjZtYLTOHmR87R1XWt5YP5829NAJYjT7tkP4h%2FrDMznf3WorHwbHU3Y0eZ5Zok84c8e4vDWgFTlGSRp6FkiF2HwezCEZ7PAw6tzcyQY6pgHpdwjx9kBFAB%2BxdFEu2MztA6tvGvmgq45zJeCr3CPLT1dh%2BHk3NDwpCkfYNqt9qFUV5KGHWKwyPzx1gGFt5IIfpj%2BwE6YOHwwij2bBkPM7Ft0FE87necAThYoe%2F1TT77pB4HouoCxzIVvBUDeJoLrv%2BZHZ17e%2BhT8KeT75JwTXq9JmXxONqxIj0pD97m76syQbX5gFEP%2Bv5KUGod%2BXP1IDXtzrRKVl&X-Amz-Signature=5f5b0c2cff2fe2e4d7fc8765177878a123fee55639daf6ea2baab0cde3fc86f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DZAW6LP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T211205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEwnSvsvAEgtfFmg70kYgimiQzGgc3GG2M9J9kWIKCJYAiAjGJB4gVDeeTFohndEMTD9dwUs0HF%2FnM%2BgOS31hkcZliqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMP8MyS%2FHV%2BNLPmOz%2FKtwDI2h4zEE3JCJLcbo4MD9Nr9q%2BgPLC2T%2Fdu16yaO6B562Mqx%2F6rhbThK1O0Fq2GIi2W%2BFjVT9aPnF3OsL8sXQN8ebF0BSvAlly%2Bo4M5M7T3RuivKxlL7BJWXXith4toe8S41oe%2FYBAnArKFt4PDYzyMDO%2FWg5x2e%2B11yhOgMpdkwNPdtJ0am%2F2C3WAAYkj4EekHH6PRmAy2BfKJ3RmWS2epE7Uei9mSbST1btVvFD60uXS6EaaKldiNb5oC%2FA5CwzHeN2J8HNVGzdUF8Zqp%2BK%2BybnA75v%2B8LaAR%2BhX5mAAyRBWg0VgNnvEonUAKli4m9NLy%2Bi5fYbvBlnA4PCY1i2jHncmxGJIkNZcC%2F3xdNSR%2FC%2BNusDjzcKEAigYffsxMfy8H%2FSLBTQ0tpf7mCckGV6FMSctDQBMb8o82gNAgrXg4fm7bf2DOmcznB09nlmaYGgZs4vF0wrftkVhyuZbxLBSs6fjcEiplFIFnx7RgzXbNXw9vwMMdxnPo3VFajp3X9rdRC6EJCvjgqos5waFd7w6WgMm1aKQsjZtYLTOHmR87R1XWt5YP5829NAJYjT7tkP4h%2FrDMznf3WorHwbHU3Y0eZ5Zok84c8e4vDWgFTlGSRp6FkiF2HwezCEZ7PAw6tzcyQY6pgHpdwjx9kBFAB%2BxdFEu2MztA6tvGvmgq45zJeCr3CPLT1dh%2BHk3NDwpCkfYNqt9qFUV5KGHWKwyPzx1gGFt5IIfpj%2BwE6YOHwwij2bBkPM7Ft0FE87necAThYoe%2F1TT77pB4HouoCxzIVvBUDeJoLrv%2BZHZ17e%2BhT8KeT75JwTXq9JmXxONqxIj0pD97m76syQbX5gFEP%2Bv5KUGod%2BXP1IDXtzrRKVl&X-Amz-Signature=fca5989b90f24f9e410ee2834326e444becc1bd81bbbbd03ae6ba51ec003a496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

