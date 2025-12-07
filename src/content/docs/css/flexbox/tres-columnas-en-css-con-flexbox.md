---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEPSZVWG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtj0o2GqY9zWQW%2F6JlEi8bjS1s8YmRIgfH7zZZV0%2FpPAIhAPxv9LOF3FMeIakf%2FAGqabNPGTaX7ZZ%2BU9dX7jkX2AvDKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOXcylavVfu0A79v8q3APlQbvN4lI4nFV5wQCKCWnQUg3R7NF2T48D%2Br%2FJICCPLL7DiDLseeTIbiNXTuqADVgwHhIJQfnGcPwuTng82mCPsdGq1cUJqpO1lg50wPVQvH%2BmzswbuIdkQMY5j%2F5TaTPB5j1k8O%2BS659P0qRC8th6xF8S6UErFZWbbxZlhF46YYRXW72fi8kf4VyNCPLzLeYzQPmMAInj91Pkp1zYlqDgYVOkHA%2FmZZ2koq4GdWgLLkXs9SUpu%2BSFKlHbB0duoB56mZdzKC%2BtVvBGMeIRa9974VYqgyvdzcLieb5eSxrVs4pRt%2Fxvft0s8UjT6PKxqda63e9aumJ70bLzZJk7YAS1uc8zU1VWnnqSARcMhQeQw2ok2lFIA4JQpgPH%2F8VvLpZXxlA9HMf8IeXRQu4oVYhULFzhwgE%2F1Qic0fiAsXG2%2F6OVVh5kRh8IPMpm1T5qvVxomBmaIiqJcAYWQ7VITGTTN4LBV%2FcKr3L1yVLSft7FwX4QBceLcmcCs%2BSXEwXRhUYTxw2n0bIJjRCXrQSqYbHaWRiU1pb39v9PkUOH1ACF90xLEjrhKyjWUJkOsZ1PA9IMP9x8x3iZJNz3GT20oWvqp2J8zm5CVOdHD%2Bk6tvJlyHHmrAs2xHdFATss1zDTmdXJBjqkAWln67GwHiNbG0GxDX4IOtWu%2FEGPA73DIXF%2FTDFQg1ckH2cJhYbsx6s3mC8I4QJoiAYUTmcuIeRJNQtYt9Xfa1SMcUl2JMvc1%2BuKKGTAiEksOeB0AD%2FDSFTuEWzlXAWFtXycILPscIE6eJKGJkSZQP1cPfalqaLEOxbsZyBx%2Fw3GFedv4h%2FRcd6ELS7b%2BYQetml9aZByAitj8I%2BO4STjHuybCfA9&X-Amz-Signature=73d357f4696884f1e93cc5f9eddd785eefc1cb97dd8aa543c0eb9abe3c28dcb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEPSZVWG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150545Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtj0o2GqY9zWQW%2F6JlEi8bjS1s8YmRIgfH7zZZV0%2FpPAIhAPxv9LOF3FMeIakf%2FAGqabNPGTaX7ZZ%2BU9dX7jkX2AvDKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOXcylavVfu0A79v8q3APlQbvN4lI4nFV5wQCKCWnQUg3R7NF2T48D%2Br%2FJICCPLL7DiDLseeTIbiNXTuqADVgwHhIJQfnGcPwuTng82mCPsdGq1cUJqpO1lg50wPVQvH%2BmzswbuIdkQMY5j%2F5TaTPB5j1k8O%2BS659P0qRC8th6xF8S6UErFZWbbxZlhF46YYRXW72fi8kf4VyNCPLzLeYzQPmMAInj91Pkp1zYlqDgYVOkHA%2FmZZ2koq4GdWgLLkXs9SUpu%2BSFKlHbB0duoB56mZdzKC%2BtVvBGMeIRa9974VYqgyvdzcLieb5eSxrVs4pRt%2Fxvft0s8UjT6PKxqda63e9aumJ70bLzZJk7YAS1uc8zU1VWnnqSARcMhQeQw2ok2lFIA4JQpgPH%2F8VvLpZXxlA9HMf8IeXRQu4oVYhULFzhwgE%2F1Qic0fiAsXG2%2F6OVVh5kRh8IPMpm1T5qvVxomBmaIiqJcAYWQ7VITGTTN4LBV%2FcKr3L1yVLSft7FwX4QBceLcmcCs%2BSXEwXRhUYTxw2n0bIJjRCXrQSqYbHaWRiU1pb39v9PkUOH1ACF90xLEjrhKyjWUJkOsZ1PA9IMP9x8x3iZJNz3GT20oWvqp2J8zm5CVOdHD%2Bk6tvJlyHHmrAs2xHdFATss1zDTmdXJBjqkAWln67GwHiNbG0GxDX4IOtWu%2FEGPA73DIXF%2FTDFQg1ckH2cJhYbsx6s3mC8I4QJoiAYUTmcuIeRJNQtYt9Xfa1SMcUl2JMvc1%2BuKKGTAiEksOeB0AD%2FDSFTuEWzlXAWFtXycILPscIE6eJKGJkSZQP1cPfalqaLEOxbsZyBx%2Fw3GFedv4h%2FRcd6ELS7b%2BYQetml9aZByAitj8I%2BO4STjHuybCfA9&X-Amz-Signature=ce1b8b126b4e361fd9e56f9ca4bdf0f6ae21cf4d24fdc374468f0a74dcedc25b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

