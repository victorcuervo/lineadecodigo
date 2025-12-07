---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MMSB3U3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUFKY7Nwofk24%2BvVEsZppm8D7evu5eoyPonS4iHuye1AiEAhP4MRXP0P6qfBxH0QFV%2BAMSPjcM0ras0VdW6eLzDAmkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8AiomP8UQEZOMxKSrcAzIMC8JK1kZCkCCXDVzK5zYI4sWKdUGrFiQ7sRvQUkWDrben%2BJlJsZ5rnqpj%2FVu2QzRbYr84LmeJJfK3u%2B2j2FtAMYee1VknYSm0%2FAYtOEyvakI7EUR12cBqyUzkOnQPMih6tz4EDG%2FxKSYJibhJCGkkhUqB0fNhyI56W8zY94DlFkqcZKPcAkkOqLYFe4xonAtKHzJeLsUWq0o6lQKODa9uRhhzAuqvjqiAerWzTeLlbi9TH5KzHXSDJ1%2FTfI3glV%2BP6owkXUYblYX70iRxIySyF6oSRZWUWdrPORLEqX2qfGEthSOsPsyEmf%2BJLICGPEgYrP%2Fpd1anuwpMMNWKiteO0vI3O475dENLi3SuOQgwmPiKF%2FWcVsP5tYMtkbZRogVqPYGJW1l9X2g6IpXeSjQvhWPyGEgLsSeVuLgXp4OlqduytVSsBq1jfihGm7D067mUUE9LIz2mjJB9O%2BmJs8uDXeq6p4Ji0%2BDH0hYfdPcfs821e7qRoSkhKZRY%2FYBTXb%2BFqgv8q4hvJjElH5QlprWNgYCW0w6bH58TUfnyWU3zEytxzIOfleo6gggux0keSN1P1CTgf9GUAvOwEAC0DvBSgANPG12Z%2FbTeJ%2Bft82mYz%2BjYqujeiIpEhO4TMIP%2B0skGOqUBO2BkL75if%2FRwZhB%2BCw0bYmir8TOCnd%2F%2BIN4LbYmjQNlUoiBgGq2T0uLS2ZkCTtpgpfjk7Ki7mV67NvZ8Jeksxc7m8gR22hfGACTdYxLqqY%2FP5Tqqiy%2FUSefnciObrmumRlNtS76r1Ic7vBLee7d0Ebcfz1XC0ExLsw3lM4d0OHbhUR8GcdaeyoZmQyaSvP1WAuzfr2EKniZj2PFx%2FDeCohaalPHs&X-Amz-Signature=91afa989c12c5d513b2d039d2863fba652d6abd333e20d3d8279afcb244e559d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MMSB3U3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T032529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICUFKY7Nwofk24%2BvVEsZppm8D7evu5eoyPonS4iHuye1AiEAhP4MRXP0P6qfBxH0QFV%2BAMSPjcM0ras0VdW6eLzDAmkqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA8AiomP8UQEZOMxKSrcAzIMC8JK1kZCkCCXDVzK5zYI4sWKdUGrFiQ7sRvQUkWDrben%2BJlJsZ5rnqpj%2FVu2QzRbYr84LmeJJfK3u%2B2j2FtAMYee1VknYSm0%2FAYtOEyvakI7EUR12cBqyUzkOnQPMih6tz4EDG%2FxKSYJibhJCGkkhUqB0fNhyI56W8zY94DlFkqcZKPcAkkOqLYFe4xonAtKHzJeLsUWq0o6lQKODa9uRhhzAuqvjqiAerWzTeLlbi9TH5KzHXSDJ1%2FTfI3glV%2BP6owkXUYblYX70iRxIySyF6oSRZWUWdrPORLEqX2qfGEthSOsPsyEmf%2BJLICGPEgYrP%2Fpd1anuwpMMNWKiteO0vI3O475dENLi3SuOQgwmPiKF%2FWcVsP5tYMtkbZRogVqPYGJW1l9X2g6IpXeSjQvhWPyGEgLsSeVuLgXp4OlqduytVSsBq1jfihGm7D067mUUE9LIz2mjJB9O%2BmJs8uDXeq6p4Ji0%2BDH0hYfdPcfs821e7qRoSkhKZRY%2FYBTXb%2BFqgv8q4hvJjElH5QlprWNgYCW0w6bH58TUfnyWU3zEytxzIOfleo6gggux0keSN1P1CTgf9GUAvOwEAC0DvBSgANPG12Z%2FbTeJ%2Bft82mYz%2BjYqujeiIpEhO4TMIP%2B0skGOqUBO2BkL75if%2FRwZhB%2BCw0bYmir8TOCnd%2F%2BIN4LbYmjQNlUoiBgGq2T0uLS2ZkCTtpgpfjk7Ki7mV67NvZ8Jeksxc7m8gR22hfGACTdYxLqqY%2FP5Tqqiy%2FUSefnciObrmumRlNtS76r1Ic7vBLee7d0Ebcfz1XC0ExLsw3lM4d0OHbhUR8GcdaeyoZmQyaSvP1WAuzfr2EKniZj2PFx%2FDeCohaalPHs&X-Amz-Signature=fdcada302e921fa7fdf2504dbbbcdc2b1e709f223c47f930f1de79dcd61bee9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

