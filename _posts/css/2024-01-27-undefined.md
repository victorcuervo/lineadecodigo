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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUQVICC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC87AjeP9dpxWHsSWGyjFPe9FAWh1ZBskQRZgq3SgyAWgIhAKrDy%2FH2X5Bu9BDHKz8oRzD%2F6s0dk5gXLWiREDBtBo09Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzZWsR9tO3ymCFqqmMq3AMCrJT3ad4r%2BXAj3J%2BBVkAhO3QTrmVG6hBh7lSPh%2BmDFe48KU5ffrNekEAr7jJTSjaHGeb1XVWdlncsEnBvwoI4BktFawRHG5yhNjqm3HCTcnoM3YioMKRrWUcuCXMG9Cfey1w7hL7svJoxU8EAIZbgStiY7fSLPksFXDG84n8JmpzDU7iQmWPmeR%2BoYKI%2Bs33L5OpmrhccyMQip%2B3mwE0I2JjiSwjeUzY2QXpdOXBcvWsP1hh1ZuPSEVrnU4tzVL7h%2BkadHlyokIitqCpnNoxx2nlIXOY5xFw9YvhjDiz7qpBrNEJmBxt4%2FJpxfTtoXN1MkDVC5Ih1Qd1gSouUXOAehFS74%2BFnYrr%2BStSiElT%2B2amTmLsx8AE31Nreew4HOnmB8fJ23J5haZWVGsSPu1wMdKKdUllwWHt%2BjmAbY1CTZF%2FNopVRUpuI5hR5l0lkuRZvYnkiaJToxA69japBlhFVBiUBs0uXRQ6X5Srd2yfH65d5JiNENeHxgYNDLKlYBsI4QY5uBvEDcqrGrGDF7acEPS76vWBWRd7GP2g08A7Fc1TftRLP%2BnbxpM9trJ33EZjrVtzGrxahxVKwaA4KjIRXjCOUHU3vBdES18QDGjqO%2FoEtyIcEk0Y%2F4n36IjCWl77JBjqkAVrYIfjyn0%2BkizqcyD45VaLrujfn9c7ogxl6b0V2I%2BKek3F8TDVzqn0U2w6Jqh3Z1MV27djY6vYUlNVU721BL29Ar%2Fg1MFV5HJ9SP3RXYzRlhUNzPE7xjZQFn09IQSthn7Y6Oxxv56G6tEggzRf9sg8Tdqq2QZhzvlSp0X5ewXunQPj%2BY1daUZWAuQconlqFXrSQLDIODKDDZvMgdV08mWrt5wc8&X-Amz-Signature=70a58e10913ba8d3c69385aacca521f5f632b17bc5a4fd3b457fd9008d43cb2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUQVICC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC87AjeP9dpxWHsSWGyjFPe9FAWh1ZBskQRZgq3SgyAWgIhAKrDy%2FH2X5Bu9BDHKz8oRzD%2F6s0dk5gXLWiREDBtBo09Kv8DCCIQABoMNjM3NDIzMTgzODA1IgzZWsR9tO3ymCFqqmMq3AMCrJT3ad4r%2BXAj3J%2BBVkAhO3QTrmVG6hBh7lSPh%2BmDFe48KU5ffrNekEAr7jJTSjaHGeb1XVWdlncsEnBvwoI4BktFawRHG5yhNjqm3HCTcnoM3YioMKRrWUcuCXMG9Cfey1w7hL7svJoxU8EAIZbgStiY7fSLPksFXDG84n8JmpzDU7iQmWPmeR%2BoYKI%2Bs33L5OpmrhccyMQip%2B3mwE0I2JjiSwjeUzY2QXpdOXBcvWsP1hh1ZuPSEVrnU4tzVL7h%2BkadHlyokIitqCpnNoxx2nlIXOY5xFw9YvhjDiz7qpBrNEJmBxt4%2FJpxfTtoXN1MkDVC5Ih1Qd1gSouUXOAehFS74%2BFnYrr%2BStSiElT%2B2amTmLsx8AE31Nreew4HOnmB8fJ23J5haZWVGsSPu1wMdKKdUllwWHt%2BjmAbY1CTZF%2FNopVRUpuI5hR5l0lkuRZvYnkiaJToxA69japBlhFVBiUBs0uXRQ6X5Srd2yfH65d5JiNENeHxgYNDLKlYBsI4QY5uBvEDcqrGrGDF7acEPS76vWBWRd7GP2g08A7Fc1TftRLP%2BnbxpM9trJ33EZjrVtzGrxahxVKwaA4KjIRXjCOUHU3vBdES18QDGjqO%2FoEtyIcEk0Y%2F4n36IjCWl77JBjqkAVrYIfjyn0%2BkizqcyD45VaLrujfn9c7ogxl6b0V2I%2BKek3F8TDVzqn0U2w6Jqh3Z1MV27djY6vYUlNVU721BL29Ar%2Fg1MFV5HJ9SP3RXYzRlhUNzPE7xjZQFn09IQSthn7Y6Oxxv56G6tEggzRf9sg8Tdqq2QZhzvlSp0X5ewXunQPj%2BY1daUZWAuQconlqFXrSQLDIODKDDZvMgdV08mWrt5wc8&X-Amz-Signature=b0c5fc532a12b4e29e4abab21fea8f33333ab388bda601cb7fae487bf74fd2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

