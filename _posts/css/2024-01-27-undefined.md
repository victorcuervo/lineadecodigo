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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROLEJIKZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDCCwyvjAda1mBAYqIB2Z%2BuPr061YG%2F5eiHzYKIYKcNbgIgeZYcu8jF7UO1g3cp2tM5O10Mh6DYTrOPkgAXUXycnoQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOtN1VtXM9QDeKDAHyrcAxJAQOYbldH0z8%2BazHxWyVPLhteMo6iN8YoUTJZO4IZZE0gjzx%2BNHpShu2nDHk%2BDtuI3I%2BRe48%2FF5LosflcRDd3CT8BI9liKizdjoDoPgwZHRyMu7SiMv0TIFO%2FtF4oPm2RzYLiHFAhdTSQuEh9vZZ4rdwJy%2B6q7uMRW5SZfNKvlW8jeTNNjponjim%2F5rNbJE%2FxABcHscm5xY%2Bmub3xCqAv0oSnLaagZIewnNG3EW0KYpDf9rH2BFdYbDRwrm6mQ%2BT40XIQyVT84p5BSHExafnpocHrQfEtHi4caumUNJYBisSgwP8mF%2F%2BR8qOqRoltwEQ1A6NowyePX0I5xQMbHZyK7Erb1K3poeCbCnaYD1%2FxPkQTH1EVlpm2sBCy%2BNwnmrD24n9I469iqh%2FwbhqFeddGmzPyol%2Bwryfu8%2F2MumzUpOLj0GESvlFANKZeq4RUyofvDVcz7C50WndFmyIjDx9Vr89j80FzkR%2F4Fz4pg%2FIjFYpAVrvnd798pHZ2voBLbOlGq%2B2Lfg8hBFPyDqY3n%2Bs%2BAiz9atCjGIU9phW4T3PGHkUIDq1FSyR3vx93Kns4h3xsQsFQYelSniR%2FezmaSCoO8oL5bBJDtlzPoEe4pNWQ2ok2IDXr2%2B4f2ROOgMJj3v8kGOqUBzgN1duuIit4zRXcEDeaRZC50Z9xXmgcH1iiTuv94qs02nA5clkzuDCid77piaV0QflTUjqW%2FW6aeEF1aa4FiVtsP0UhWQnsHJ8%2FDhCqU7GnP%2BEAVu%2BAWhwsJJaLPL6PsrYHvDs7es%2FSZDF6sSjwf82VHhsYGP5Vv1yoj6eOHN4Gs9xgXsEqCQHP0n2FrPH%2BsEKUF5RmURXM9%2BniklMV7G9RDfE27&X-Amz-Signature=783006bc1d666bc30d80f5610bf6e44a2795db2ee27df5ab1f31e55344ce030b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROLEJIKZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDCCwyvjAda1mBAYqIB2Z%2BuPr061YG%2F5eiHzYKIYKcNbgIgeZYcu8jF7UO1g3cp2tM5O10Mh6DYTrOPkgAXUXycnoQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDOtN1VtXM9QDeKDAHyrcAxJAQOYbldH0z8%2BazHxWyVPLhteMo6iN8YoUTJZO4IZZE0gjzx%2BNHpShu2nDHk%2BDtuI3I%2BRe48%2FF5LosflcRDd3CT8BI9liKizdjoDoPgwZHRyMu7SiMv0TIFO%2FtF4oPm2RzYLiHFAhdTSQuEh9vZZ4rdwJy%2B6q7uMRW5SZfNKvlW8jeTNNjponjim%2F5rNbJE%2FxABcHscm5xY%2Bmub3xCqAv0oSnLaagZIewnNG3EW0KYpDf9rH2BFdYbDRwrm6mQ%2BT40XIQyVT84p5BSHExafnpocHrQfEtHi4caumUNJYBisSgwP8mF%2F%2BR8qOqRoltwEQ1A6NowyePX0I5xQMbHZyK7Erb1K3poeCbCnaYD1%2FxPkQTH1EVlpm2sBCy%2BNwnmrD24n9I469iqh%2FwbhqFeddGmzPyol%2Bwryfu8%2F2MumzUpOLj0GESvlFANKZeq4RUyofvDVcz7C50WndFmyIjDx9Vr89j80FzkR%2F4Fz4pg%2FIjFYpAVrvnd798pHZ2voBLbOlGq%2B2Lfg8hBFPyDqY3n%2Bs%2BAiz9atCjGIU9phW4T3PGHkUIDq1FSyR3vx93Kns4h3xsQsFQYelSniR%2FezmaSCoO8oL5bBJDtlzPoEe4pNWQ2ok2IDXr2%2B4f2ROOgMJj3v8kGOqUBzgN1duuIit4zRXcEDeaRZC50Z9xXmgcH1iiTuv94qs02nA5clkzuDCid77piaV0QflTUjqW%2FW6aeEF1aa4FiVtsP0UhWQnsHJ8%2FDhCqU7GnP%2BEAVu%2BAWhwsJJaLPL6PsrYHvDs7es%2FSZDF6sSjwf82VHhsYGP5Vv1yoj6eOHN4Gs9xgXsEqCQHP0n2FrPH%2BsEKUF5RmURXM9%2BniklMV7G9RDfE27&X-Amz-Signature=476a6370f88afee2f30080adf882bf90ae07a15fbc1eb9fa2cc7453db44d829b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

