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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQCLUZ3C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAg50KFB%2Fxxj3WfwQudHGEv4a6ukA3LBnQUti%2BTuteSCAiAxPO6Tymj8L8wiKIma2yWIyFVGMg%2F24P4jf2XIhnDnWCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMokiQGUarmOOMYWdUKtwDHsUVlM%2FaB%2F%2FwBadQiNYQykW87bBn%2FKavnrtG6XQQJpBCvTlvAX0lnv7eLYoQ0p%2FLuEQbYeFmNyfZxs25bXpDYCDCJb6cis87ktG1W9fDtlQa8Oue8NwN5E%2F8A1qzfyjDGnMqp5jIrPZiE1YVD8%2FcIjfez6iWUqwWoukVPbw6Cfj17hbWoZNJBmZhe6mzbsBHPGlLjA1rRP5DVIGAv1ldDVUkWm4jO2RjWHWEhT9XIBgvPaJwQryLmXYxbCViYGMCKu%2F%2BPdR%2BQuXK1xPw%2B9qWAokRcZHmIN6BoB%2FQefKiuBlT%2BCYiKLEn4i0sJUGarjyFkqwfrB9kxDiXiXNaBUWNpraO%2B4IgVQeK9DNhtIfsBBZUbsoqgDdIFNdrnPiPt9V79xumIAnWodgyqJ%2F9Z%2BkTlLmXevVWLLN17NlaRA%2FhqhDmvxbBqlIWZfzG85%2B6lwcwHw%2Bz1lXHS4J8cp51sux72S%2F1qTUl6c3yezOMkTOkBAcN2KYiO8glO2tKoT2elDMjWKLiroSW3WeQOPXPYlmuwRk99ev6X1WDa5TNo1iDMEqrI%2Bk%2BmD3qv9pPzA%2F1WxhmpKRDrMIXEJj28xgARRT6DiwWbltEVINsupD39MaUTO6eH7OaZcMQK1Bmcsww2tzByQY6pgFwCowBnt32wBq%2FwmtMRkaKQv46lgLg51%2FHNPOW1zbixc4a7pqJzEkeFH%2FIq5z4HU31cONJoeTOCaSXfFeoAVNdjzymAxVxdleF514tvrd7H5WFaUTmX5N7w6fxUV%2BMJn7LKbM8KtRXrsnFJPzieNVLuL0Ao9Be8fR182uF%2BHHSd%2FVQ0v0ODPJMdHLARajFELoU78zU0AblcD41u%2FZiMMy6csS5rcL%2F&X-Amz-Signature=f7d19e2aa529e41139cd24468afb52a38a2a869eaae46a10bd855d140c318925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQCLUZ3C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIAg50KFB%2Fxxj3WfwQudHGEv4a6ukA3LBnQUti%2BTuteSCAiAxPO6Tymj8L8wiKIma2yWIyFVGMg%2F24P4jf2XIhnDnWCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMokiQGUarmOOMYWdUKtwDHsUVlM%2FaB%2F%2FwBadQiNYQykW87bBn%2FKavnrtG6XQQJpBCvTlvAX0lnv7eLYoQ0p%2FLuEQbYeFmNyfZxs25bXpDYCDCJb6cis87ktG1W9fDtlQa8Oue8NwN5E%2F8A1qzfyjDGnMqp5jIrPZiE1YVD8%2FcIjfez6iWUqwWoukVPbw6Cfj17hbWoZNJBmZhe6mzbsBHPGlLjA1rRP5DVIGAv1ldDVUkWm4jO2RjWHWEhT9XIBgvPaJwQryLmXYxbCViYGMCKu%2F%2BPdR%2BQuXK1xPw%2B9qWAokRcZHmIN6BoB%2FQefKiuBlT%2BCYiKLEn4i0sJUGarjyFkqwfrB9kxDiXiXNaBUWNpraO%2B4IgVQeK9DNhtIfsBBZUbsoqgDdIFNdrnPiPt9V79xumIAnWodgyqJ%2F9Z%2BkTlLmXevVWLLN17NlaRA%2FhqhDmvxbBqlIWZfzG85%2B6lwcwHw%2Bz1lXHS4J8cp51sux72S%2F1qTUl6c3yezOMkTOkBAcN2KYiO8glO2tKoT2elDMjWKLiroSW3WeQOPXPYlmuwRk99ev6X1WDa5TNo1iDMEqrI%2Bk%2BmD3qv9pPzA%2F1WxhmpKRDrMIXEJj28xgARRT6DiwWbltEVINsupD39MaUTO6eH7OaZcMQK1Bmcsww2tzByQY6pgFwCowBnt32wBq%2FwmtMRkaKQv46lgLg51%2FHNPOW1zbixc4a7pqJzEkeFH%2FIq5z4HU31cONJoeTOCaSXfFeoAVNdjzymAxVxdleF514tvrd7H5WFaUTmX5N7w6fxUV%2BMJn7LKbM8KtRXrsnFJPzieNVLuL0Ao9Be8fR182uF%2BHHSd%2FVQ0v0ODPJMdHLARajFELoU78zU0AblcD41u%2FZiMMy6csS5rcL%2F&X-Amz-Signature=5695100a5d3854c853b7e26543fa35dda4bd29423fb48c7345acf9cb495d41a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

