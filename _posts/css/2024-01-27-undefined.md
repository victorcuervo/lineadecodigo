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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RADZVUG4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFYxwxpEAOtzXmD6Tbnvuv7htl%2BbrIfICuTOvY%2FEz1cnAiBJVaKCwI2gpOBMATu3hEk14o6ORSX2lGF4RaYTi6mxUyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMbI49qaTpLmCW34ApKtwDsDddn4MID4RDGI0JCJme1tpDXREgPt6dn%2FqikvTtHINQvknHjXTpOrke4O4eDaJQyYXigbd209KTlyI1%2BAraGO%2Baz6l5l6MvfSl%2FqUBC%2FLlPIMcQ%2F%2BbKmUttC02riKgJIhAruU127ZfbtabI9flFG02y8dKX3YFkkmeYUFxLlHQH7sOz2C7bnZzjLefDaroSyMOX0flOaQEhzb29fWGGGmGONAFnLY8dXiIbh0evJlYoappMXGAVwTkew8fhleDF2f8xaYiIvczFueqYi%2Bl7NtZrHIle6H%2FWDW5OmYpSVONjx3IxJE37t8H8DVPdw5B%2FpIWyjbD1yZYGM86rE9EnWYgmqPNSbMJj%2FzVmAW0QG1hFNaLkAgSsN762UWXFfy3SbEJuX%2BVNIPbU%2BIEdIWa5WvxYENpuiZJDUUcX9GPHTpS5j64xyiq79JkjGZry7Zq8t3DYTos%2B10gYdMm4ibHSA7nAXaLdzl%2FI9bcdX1PV8XUZnRZIJbv1z3vSCf2NAzpNxL%2BETIC8A%2BBAuEi1g%2BC1Nqnru5nVjUmy35n0KLzwItTUxQDhSgx3fVtnpEro5zsrRQxcAX4pxvhUoP7huAP37o6w9jJGZXPJHY4p1IsojJ8O50Fzn5NVK1l44pUw1pS%2ByQY6pgHX4ByfFKfsoJ7K5HGuDlUJaYwpDHhasyRh2gpbqChC8nHC6Dab5MY3cOq7t%2BP7oBiCTYT603C%2FwU3bIyetLVZsDqoPEt69NIsO9uwBbIjLEcIiwqvwf4IUZRUZTfLR5%2FEcIMNdiVbMSvC2MbEq%2FZXGsGp%2BY9gpox0PO%2Ble9asdtf1jEPHv3rgfqQR2jAk7UXx3F70k4uw25KwOAQcS1sBkXyIUDth9&X-Amz-Signature=9862aaa16e8bebbea2f304d393457286f68368984188b15a8624573760d57bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RADZVUG4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFYxwxpEAOtzXmD6Tbnvuv7htl%2BbrIfICuTOvY%2FEz1cnAiBJVaKCwI2gpOBMATu3hEk14o6ORSX2lGF4RaYTi6mxUyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMbI49qaTpLmCW34ApKtwDsDddn4MID4RDGI0JCJme1tpDXREgPt6dn%2FqikvTtHINQvknHjXTpOrke4O4eDaJQyYXigbd209KTlyI1%2BAraGO%2Baz6l5l6MvfSl%2FqUBC%2FLlPIMcQ%2F%2BbKmUttC02riKgJIhAruU127ZfbtabI9flFG02y8dKX3YFkkmeYUFxLlHQH7sOz2C7bnZzjLefDaroSyMOX0flOaQEhzb29fWGGGmGONAFnLY8dXiIbh0evJlYoappMXGAVwTkew8fhleDF2f8xaYiIvczFueqYi%2Bl7NtZrHIle6H%2FWDW5OmYpSVONjx3IxJE37t8H8DVPdw5B%2FpIWyjbD1yZYGM86rE9EnWYgmqPNSbMJj%2FzVmAW0QG1hFNaLkAgSsN762UWXFfy3SbEJuX%2BVNIPbU%2BIEdIWa5WvxYENpuiZJDUUcX9GPHTpS5j64xyiq79JkjGZry7Zq8t3DYTos%2B10gYdMm4ibHSA7nAXaLdzl%2FI9bcdX1PV8XUZnRZIJbv1z3vSCf2NAzpNxL%2BETIC8A%2BBAuEi1g%2BC1Nqnru5nVjUmy35n0KLzwItTUxQDhSgx3fVtnpEro5zsrRQxcAX4pxvhUoP7huAP37o6w9jJGZXPJHY4p1IsojJ8O50Fzn5NVK1l44pUw1pS%2ByQY6pgHX4ByfFKfsoJ7K5HGuDlUJaYwpDHhasyRh2gpbqChC8nHC6Dab5MY3cOq7t%2BP7oBiCTYT603C%2FwU3bIyetLVZsDqoPEt69NIsO9uwBbIjLEcIiwqvwf4IUZRUZTfLR5%2FEcIMNdiVbMSvC2MbEq%2FZXGsGp%2BY9gpox0PO%2Ble9asdtf1jEPHv3rgfqQR2jAk7UXx3F70k4uw25KwOAQcS1sBkXyIUDth9&X-Amz-Signature=2adc44dc1a4e8f78eb6e3cf6208c58f2f5196ca7c1f2da7bd03ecb43a48c1afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

