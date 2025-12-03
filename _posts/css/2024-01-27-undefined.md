---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ILP7BMC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIATEytGfdwzTda0xUSJw4dhH%2FGevOC5K1Dfl8%2BVmw898AiEA1Ny%2FI5MmLCzix6InfXuamyze%2BOZlFRLHSv4Oe6p6uIwq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDJt3%2FwhZFZTyPUL2cSrcAz9qVix6sxKl6P384BDRcxL5Kd6e36aDEz%2FrBfpk6jsKqqC4HmQ9bb68TwG2CphwTWV%2Feh%2FUADyn5JEXdEmWkvfRFX41JzdxD1767pCNBoUGkDc5d7DgYxborS9Ppxep%2B7OFD%2FJ%2BD1xHTihXyXU%2Bipls%2FgrPCW0paJagm26FQJ9SBa3SSKxf7Wjf%2FxUs0hOTz0xiES%2BewgXx%2FIzAr4VggKGVfwXq6wSTtttl5n0DjPCnK8NLE8ibh0X%2FDXFbDWTSD7IrpxfJRb6YA2Z%2FfqxbE%2FGbAuvb%2BaBg%2FCcpokFxo1AEo0ThQN2zHCm1LPV%2BsCWYCr1zzSxErrbMJmLjrdctIVCXY0p%2FfvghpAQvGV5NQatTBgcwkO7jpUn4vi4lukdeoNAOeNKoiCR2J0Y9odf6hkf8ukPrj5I3ktJCaIokdpLZPRk6JKvorGjeWQLHg0pQEtq46NNdIanIWKpl4LpqR0sFaNs8IH6dd6nxz9jmvipiLC0DBUE2PywvaOzdK50Nuruk%2Fwxsys0c5Wh1npxi5HWbygrluFK1OqMy7XKWplyq6MQaMGiMxzIttyy%2FUMUXxEEtSjE0nHxaIm6CplYMo2x7TaUDm8xsBJ8MNMxS69ANrym6VTL6qZFc44cTMJemwckGOqUBvEbWrtLKulaoclckd7u%2BEijAJeggwZI2snf5d1GxQePpW5TAOHNahTJ3%2Bzr1dcBlhCkAKE17JppM%2BxaYP5UfXj32KvM4MUC3WydVKAy2WlXlluE5Ju3ftR4QIV2vJVz3BKH%2BrLevzjydV3R4A7xmdxjAM7oNQ1ch6xlUyZEWW5uSotM6cnVq%2BFtlK%2FDaa8KscolzbSgfMpPonnwi2Z8x4nZddy4n&X-Amz-Signature=c836a333ea8894f8b46a36c660c2c0fb51a3a49bb51fd361863ed9e5f5a5e853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ILP7BMC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIATEytGfdwzTda0xUSJw4dhH%2FGevOC5K1Dfl8%2BVmw898AiEA1Ny%2FI5MmLCzix6InfXuamyze%2BOZlFRLHSv4Oe6p6uIwq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDJt3%2FwhZFZTyPUL2cSrcAz9qVix6sxKl6P384BDRcxL5Kd6e36aDEz%2FrBfpk6jsKqqC4HmQ9bb68TwG2CphwTWV%2Feh%2FUADyn5JEXdEmWkvfRFX41JzdxD1767pCNBoUGkDc5d7DgYxborS9Ppxep%2B7OFD%2FJ%2BD1xHTihXyXU%2Bipls%2FgrPCW0paJagm26FQJ9SBa3SSKxf7Wjf%2FxUs0hOTz0xiES%2BewgXx%2FIzAr4VggKGVfwXq6wSTtttl5n0DjPCnK8NLE8ibh0X%2FDXFbDWTSD7IrpxfJRb6YA2Z%2FfqxbE%2FGbAuvb%2BaBg%2FCcpokFxo1AEo0ThQN2zHCm1LPV%2BsCWYCr1zzSxErrbMJmLjrdctIVCXY0p%2FfvghpAQvGV5NQatTBgcwkO7jpUn4vi4lukdeoNAOeNKoiCR2J0Y9odf6hkf8ukPrj5I3ktJCaIokdpLZPRk6JKvorGjeWQLHg0pQEtq46NNdIanIWKpl4LpqR0sFaNs8IH6dd6nxz9jmvipiLC0DBUE2PywvaOzdK50Nuruk%2Fwxsys0c5Wh1npxi5HWbygrluFK1OqMy7XKWplyq6MQaMGiMxzIttyy%2FUMUXxEEtSjE0nHxaIm6CplYMo2x7TaUDm8xsBJ8MNMxS69ANrym6VTL6qZFc44cTMJemwckGOqUBvEbWrtLKulaoclckd7u%2BEijAJeggwZI2snf5d1GxQePpW5TAOHNahTJ3%2Bzr1dcBlhCkAKE17JppM%2BxaYP5UfXj32KvM4MUC3WydVKAy2WlXlluE5Ju3ftR4QIV2vJVz3BKH%2BrLevzjydV3R4A7xmdxjAM7oNQ1ch6xlUyZEWW5uSotM6cnVq%2BFtlK%2FDaa8KscolzbSgfMpPonnwi2Z8x4nZddy4n&X-Amz-Signature=62b22bb868d832e6b4188901a997385da0cd977edf1c4b6be536ab36fddd2be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

