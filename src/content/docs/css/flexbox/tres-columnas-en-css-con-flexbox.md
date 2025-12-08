---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ANO7V6Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T081011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPr2lzZ4a77c9c6ttwfn7vUVr3I41IORRBHOkMuKAGzAiEAwqGP1%2Buue3LHdGI2uqC8IEe02Cdimm3ZsdFJL65oJ%2FYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLN0Vfg1xkYJKxk4CrcA78B7lBgIpkLNo8NETWCgTGxpdXCW%2BL3DqTjgw9dBKqHgMmfnY%2FCq12rRWcl98YGDgjN7mt6TH8v2SQLLvnG%2B6kX9C%2FIQvwQ4g32JjULVeewSfbD1%2FeJ7erZ%2FMstX1REl%2BNYoE2U0%2FIe7JKcDxLIo7r70SCPXsbXCM6EOleXpZt58BxyVRMUmp155U3rfWTMXFur3%2FEEWnjji4J8N9l6dyGzKJSiOme7kTMzi3nPtkzjjTCR9ZJ2XSQylTRAqMhNIGaMlZI1nqFEoWMtOTNnA3U8YdkhXAYbz%2BFcMBglCciyhUrm%2FSQEZ%2F8ngNqXlJcnCCUdWMv8psiuyef%2Fajy7wYP%2FIm%2FMhfe%2BOU3Y9ZWqT%2BWwpChYUN%2FaMHuc%2B8bBn2YriJ2LbJVvWirjXPmJqlBybZVSiO52DMwsgxqaL2A05gcOJ7lIq6Qg%2Blh67FUajjksBO6H2QCSMfXEx59ngNf%2FN3RUPQDmrtFKKD6YhtGD5Nb3lVJjNqBa21rZgDePNdPCKi6g9O%2BWk5AXG39K4Vngi0skEcIjn5ZCQn%2F3R3eP6pAfilQxN4ZvgR2SUvo9K3SoQ4Tislw0QNg7SsFWViDGqbZL2QaqY%2BP%2BjOG4jggx4FMHYQQTwtiq5Gm450eiMKHu2ckGOqUBoCMRaT9rFhEvJOY9B38OQgWwZPh%2Fh659rN%2Bx58E1Qr3glxK2gEEvvrqI8GM8yHWiFR%2FZecMHqxCK6vFQSGaKd0hSrdSITF5aijv6f3CuxLaIjLEt0AV03L5alM8Sls30xsZvrtJgWM%2BaWlVEmFx3KNLy9rfmiN5rWbLzAsyfv5MpE5O7vUOwMp6QWpFmah2BWe9RZWozihM%2FIFzk0EYpKDwouA4v&X-Amz-Signature=15c06f218beef5deef6127a1d86e87004e623c2455ceeb295c0418ab1d8ec3fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ANO7V6Y%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T081011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHPr2lzZ4a77c9c6ttwfn7vUVr3I41IORRBHOkMuKAGzAiEAwqGP1%2Buue3LHdGI2uqC8IEe02Cdimm3ZsdFJL65oJ%2FYqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGLN0Vfg1xkYJKxk4CrcA78B7lBgIpkLNo8NETWCgTGxpdXCW%2BL3DqTjgw9dBKqHgMmfnY%2FCq12rRWcl98YGDgjN7mt6TH8v2SQLLvnG%2B6kX9C%2FIQvwQ4g32JjULVeewSfbD1%2FeJ7erZ%2FMstX1REl%2BNYoE2U0%2FIe7JKcDxLIo7r70SCPXsbXCM6EOleXpZt58BxyVRMUmp155U3rfWTMXFur3%2FEEWnjji4J8N9l6dyGzKJSiOme7kTMzi3nPtkzjjTCR9ZJ2XSQylTRAqMhNIGaMlZI1nqFEoWMtOTNnA3U8YdkhXAYbz%2BFcMBglCciyhUrm%2FSQEZ%2F8ngNqXlJcnCCUdWMv8psiuyef%2Fajy7wYP%2FIm%2FMhfe%2BOU3Y9ZWqT%2BWwpChYUN%2FaMHuc%2B8bBn2YriJ2LbJVvWirjXPmJqlBybZVSiO52DMwsgxqaL2A05gcOJ7lIq6Qg%2Blh67FUajjksBO6H2QCSMfXEx59ngNf%2FN3RUPQDmrtFKKD6YhtGD5Nb3lVJjNqBa21rZgDePNdPCKi6g9O%2BWk5AXG39K4Vngi0skEcIjn5ZCQn%2F3R3eP6pAfilQxN4ZvgR2SUvo9K3SoQ4Tislw0QNg7SsFWViDGqbZL2QaqY%2BP%2BjOG4jggx4FMHYQQTwtiq5Gm450eiMKHu2ckGOqUBoCMRaT9rFhEvJOY9B38OQgWwZPh%2Fh659rN%2Bx58E1Qr3glxK2gEEvvrqI8GM8yHWiFR%2FZecMHqxCK6vFQSGaKd0hSrdSITF5aijv6f3CuxLaIjLEt0AV03L5alM8Sls30xsZvrtJgWM%2BaWlVEmFx3KNLy9rfmiN5rWbLzAsyfv5MpE5O7vUOwMp6QWpFmah2BWe9RZWozihM%2FIFzk0EYpKDwouA4v&X-Amz-Signature=4ba05a0fbea59fb240b4db7ea84c8e20c885c8b13e8d261ba039ad2a3a1ea47c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

