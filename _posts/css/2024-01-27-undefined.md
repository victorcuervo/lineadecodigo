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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGOM4I7M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDxnb5cR4nczXCjf0hKU8Uq1MG4NGxZk4A9f563odPhkAIhAKnzXdtSNiDlFLra1Gc8OyIseYbw0%2BZdzFw2BbR9qeeTKv8DCCAQABoMNjM3NDIzMTgzODA1IgzTgtBIGxI5xaxfOuMq3ANuf2LI%2FrBxp5Zcz62kUp73ctVjQ6wpGEJkcCTZIO5WxlxTgNMf2JTonbatikmpbFf6AzdHr7%2Bf5Kl3DOkRO80o4lOnFbAuCbzPQqAf1R3W2dCIIt0JsSPXozg3IU0X%2FW5q4RsbHSmeuH%2Frq7Dx3%2Fng3lLqKoaHr5ytduFMIZnW58Gh4aRF0IlxVlzp2kP4sJuaOekTNi1Eh%2FYYQG4c1wxbJ%2FAbs5xNRAcHWBCQGn4dv8nd4bGvgw3yNufOH9mM%2Fkhm4GD94l5cOd3C%2BwUBnWLgzRN67cEOrZ%2BU1wyP52uQs2qU0RNfxSgawCsMiB9OmHiVoW5aQCqzmXHLyKAnORDB3hMZyGUUH%2FRXvRicQq06QNQsKuZtVjP99EHJWb%2BEyOUl6flp%2F1erGlh4sbwfehz0WCM4omYa45n4x8Z%2FCCLmB9RO7wSZ0GMsfpX2Gry3zipC8o1kbaE2n4aqghLk3ryg5ukPKLhy0gHhFosaKQSJNS5BnIRmAsfZXXqgVqkjsC8q3%2BbM5wN%2FY1twAoQv7DqQr47%2FjD4A1MZjgpPuYuzx0NXp3sKFDwvTNBpaLUoe8QXXbn3fcjr6OiCDn4KfRAUui8afIJhq79oeyO0iXieLGVD1O5YEOTF8%2FGgYeDDJ5L3JBjqkAezuErCZaqiur6kzIVqIyI509R6wVttETYdV0C3lv%2FQYVZ8loWUAxRs%2FA3nLhnXQ6Kt%2Fm%2BUDjZRV1g9EmwOEP8eDVdfqQSR2pHhRCHGqVLIQ347ndCF%2BMPldvBdI8w0u8af7EOGpU%2BWB0MIyHtBEWaeFcvn8XpStljOoqS6hWf2MwAzR6CzcYYiISKt6YxnrDdNZ22ZYJMrsbrb46QrBjQb1P6El&X-Amz-Signature=6241656ac63b264ff1a12a6a6637afdcf6f6f8cf25184f90cdd217204135055f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGOM4I7M%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDxnb5cR4nczXCjf0hKU8Uq1MG4NGxZk4A9f563odPhkAIhAKnzXdtSNiDlFLra1Gc8OyIseYbw0%2BZdzFw2BbR9qeeTKv8DCCAQABoMNjM3NDIzMTgzODA1IgzTgtBIGxI5xaxfOuMq3ANuf2LI%2FrBxp5Zcz62kUp73ctVjQ6wpGEJkcCTZIO5WxlxTgNMf2JTonbatikmpbFf6AzdHr7%2Bf5Kl3DOkRO80o4lOnFbAuCbzPQqAf1R3W2dCIIt0JsSPXozg3IU0X%2FW5q4RsbHSmeuH%2Frq7Dx3%2Fng3lLqKoaHr5ytduFMIZnW58Gh4aRF0IlxVlzp2kP4sJuaOekTNi1Eh%2FYYQG4c1wxbJ%2FAbs5xNRAcHWBCQGn4dv8nd4bGvgw3yNufOH9mM%2Fkhm4GD94l5cOd3C%2BwUBnWLgzRN67cEOrZ%2BU1wyP52uQs2qU0RNfxSgawCsMiB9OmHiVoW5aQCqzmXHLyKAnORDB3hMZyGUUH%2FRXvRicQq06QNQsKuZtVjP99EHJWb%2BEyOUl6flp%2F1erGlh4sbwfehz0WCM4omYa45n4x8Z%2FCCLmB9RO7wSZ0GMsfpX2Gry3zipC8o1kbaE2n4aqghLk3ryg5ukPKLhy0gHhFosaKQSJNS5BnIRmAsfZXXqgVqkjsC8q3%2BbM5wN%2FY1twAoQv7DqQr47%2FjD4A1MZjgpPuYuzx0NXp3sKFDwvTNBpaLUoe8QXXbn3fcjr6OiCDn4KfRAUui8afIJhq79oeyO0iXieLGVD1O5YEOTF8%2FGgYeDDJ5L3JBjqkAezuErCZaqiur6kzIVqIyI509R6wVttETYdV0C3lv%2FQYVZ8loWUAxRs%2FA3nLhnXQ6Kt%2Fm%2BUDjZRV1g9EmwOEP8eDVdfqQSR2pHhRCHGqVLIQ347ndCF%2BMPldvBdI8w0u8af7EOGpU%2BWB0MIyHtBEWaeFcvn8XpStljOoqS6hWf2MwAzR6CzcYYiISKt6YxnrDdNZ22ZYJMrsbrb46QrBjQb1P6El&X-Amz-Signature=883688510a79f65cde1f90e6d6295e85cc40470abfc84a6525eda28ee1c87eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

