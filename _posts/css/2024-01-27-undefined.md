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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466423GUC5Y%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T032433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDm5YUzVGpAmjlYm%2F9DKlzuyXG0yi%2Ft0BknqdRr5W6UngIhAO0FfqiYZOb%2BA3Yf3gdGdeaRCaGcz952IV8adcrnfOjJKv8DCCIQABoMNjM3NDIzMTgzODA1Igx%2BFGMdmeL5Dwu7wwIq3AN3Wy1Aqvu8I25Ezu7z%2BErsAOA3jQA8a75tLTW7qZwMB4IlRDaZhhmvPGCu%2FWBXxZvVaO9i1DYhPMloPblQOYviFpYr%2F212ek1gJWh1qKZBJE%2BYPvlFi%2FkMRI9ZBQaH6ckrmrFv2KNMhVQHvhT%2BQbhRxJLJgO%2BNkYS4vjj2rGCjiH0HDCSW3ZRQHAAkvi1Sptu6R00RRPIF6CwpspRuAsOTDcqW%2Fit4Ezb7aN7CH3M5qt0Hh0Pv86glWHPWIQ66BKPtaVbw7kfwCabUAIRvxtauoKd8wd3V46BS1vxUjbixGzy1tDMLhMn2dTXZV8HwyJIOeRLeQzwAek56LgivBzU4vjx9VT2o2tEf7EpNXGW4VvzKprayVSxOig9eh%2B4MsHErNMwHbAARkWqqyFfRJtuX9ca%2FBqFe8emqsi9NciIq4TqAqVO%2BF%2FSf3ai%2BveGl5H7dG05cNgs46e8Yrvc87mD6mcARtLAkt4IPMqXpLHxjGjWqtnzNb2gbG7ylY5D9vTX2TV%2BKRYZPv1mWpeCbIWaB9E%2FY6MnMPK2N9qcEzN7nTe52ZJ8oTYgzGsJ1X4fl88a%2BU2hhO7fYZ0ccFCXd9wNFpEFJyL8XaR4pIdBd%2FQMDdRcaZHwrJrTfAu0UmjDHlr7JBjqkAR7acoaIaI4dFv8cCNrDGhnZaeWOkSXEx4u2WcQmELcOhnNW23sLxQrVv8cxwRi4Wzckd24Xq5cNTUEkaXrDPaKbOX2fHokIyLPzilwT5%2BaFkk9PvbrLejqnHxtRYB6PTHGYpvA7Y9CriazNpOH67JdMzoEuWR6aNNDfFf2Oriu8zyiqKITZuT2BuNkSgVk0rT7%2BVIN3ncQm6DBgULtfikEHYFo5&X-Amz-Signature=f192cc78fad59c2f3e086df601c6ad1c0e300d4939d0043359e31a202fbde5cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466423GUC5Y%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T032433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDm5YUzVGpAmjlYm%2F9DKlzuyXG0yi%2Ft0BknqdRr5W6UngIhAO0FfqiYZOb%2BA3Yf3gdGdeaRCaGcz952IV8adcrnfOjJKv8DCCIQABoMNjM3NDIzMTgzODA1Igx%2BFGMdmeL5Dwu7wwIq3AN3Wy1Aqvu8I25Ezu7z%2BErsAOA3jQA8a75tLTW7qZwMB4IlRDaZhhmvPGCu%2FWBXxZvVaO9i1DYhPMloPblQOYviFpYr%2F212ek1gJWh1qKZBJE%2BYPvlFi%2FkMRI9ZBQaH6ckrmrFv2KNMhVQHvhT%2BQbhRxJLJgO%2BNkYS4vjj2rGCjiH0HDCSW3ZRQHAAkvi1Sptu6R00RRPIF6CwpspRuAsOTDcqW%2Fit4Ezb7aN7CH3M5qt0Hh0Pv86glWHPWIQ66BKPtaVbw7kfwCabUAIRvxtauoKd8wd3V46BS1vxUjbixGzy1tDMLhMn2dTXZV8HwyJIOeRLeQzwAek56LgivBzU4vjx9VT2o2tEf7EpNXGW4VvzKprayVSxOig9eh%2B4MsHErNMwHbAARkWqqyFfRJtuX9ca%2FBqFe8emqsi9NciIq4TqAqVO%2BF%2FSf3ai%2BveGl5H7dG05cNgs46e8Yrvc87mD6mcARtLAkt4IPMqXpLHxjGjWqtnzNb2gbG7ylY5D9vTX2TV%2BKRYZPv1mWpeCbIWaB9E%2FY6MnMPK2N9qcEzN7nTe52ZJ8oTYgzGsJ1X4fl88a%2BU2hhO7fYZ0ccFCXd9wNFpEFJyL8XaR4pIdBd%2FQMDdRcaZHwrJrTfAu0UmjDHlr7JBjqkAR7acoaIaI4dFv8cCNrDGhnZaeWOkSXEx4u2WcQmELcOhnNW23sLxQrVv8cxwRi4Wzckd24Xq5cNTUEkaXrDPaKbOX2fHokIyLPzilwT5%2BaFkk9PvbrLejqnHxtRYB6PTHGYpvA7Y9CriazNpOH67JdMzoEuWR6aNNDfFf2Oriu8zyiqKITZuT2BuNkSgVk0rT7%2BVIN3ncQm6DBgULtfikEHYFo5&X-Amz-Signature=ef6c961373d79b6f3a84f58a4ebc9584b75d43b04f403dcde4cf013f353afc1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

