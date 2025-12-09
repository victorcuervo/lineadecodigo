---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J7544UV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3ZGvILSyHVIFQdx9idXqM3Jka0KaFqNtNFSuNJjCYswIgWg8HA0L80bw4e0VUuS0NzBDm0zthtjIUHSCBSsQEtKkqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSEhpbsgeM4MNVyvircA569%2F%2FNMl1KSaHzJUB7FmrIY8BDBsh7DKi9NU6Qzr0%2BK51Bkm6JpaVFJJH4jgsI2LFuWGhtzmkGZvP8Fmrwggbp%2BrzVRxNCKBtYrXcYSzDRDBhHO2mg3uqXBnAOUFFvMc9%2BTnd7O73V8gXvvTIHWVTr9uv%2B3oABUXlr4muUkTW9%2FxAohyMGvjSJ5y7KkzLwtFVrX68HLUqGY5q5pxo2UXh7CjZxUGyTdpE%2BXhI8RaoJM%2BjQGQC0Sj6%2BcqIkr40aHQaNeKC0G1WIEFVqqohpXUmIzzv1j5GB%2BgKEShujZ%2FMXe137RUFxfYpWGGmafdS6JuorTlHL7nujxEa%2BeoT26PxcaA80AdBVr2aGWbVpDE0l5AjlZt7tISCcWzxLv3gElXQMKG7R226ninOmUwYLbMFv3MSNj6zLNKOncvnmPpi121bEMFUIrp%2B0gsD4%2FvsWv4pKJSWrqDHqkeXS%2FgID7H%2Bc1G9A%2FSL24tHXX%2BV4FD%2BMtceMeUfAFihymq2RAZQFJ7%2Fy8%2BmmyLST5ShXw1Qmocial3lo35VmS4%2FWAXkxwfGCM3qmIlKtMsEvG1eqoLLUVEXULAP1T609k7fHOzWm7WFVB8NAQ4E1vYcIZ2lg13FNcIIT3tOa%2BgYfkcduIMJrp3ckGOqUBrA4g7OK396IspjJByIl1Y8DdVHHVVuOCLI2qbFWa2twIn3eusTZEPVb%2Fspg4El0kJwGnIlMpYXfpgJffLoSVIaqZKRTq0iNsd50OOnHcp9sQQoQXFf9QNi%2FvYDjm%2BovkLF4ictYcDXwHhtjQssdP9WmgPPlEbXECQUy2FLx0dXx7Ja%2BqG0%2BM8qBy6SCb1Dwbu1aT3K7ZK4tCQcJ0Aq5eBza4%2Bzil&X-Amz-Signature=b8e1444f1d4e167128ec4d87dea94cefaf0b77f098f7aada64ee814c3ca6be41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J7544UV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T013945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3ZGvILSyHVIFQdx9idXqM3Jka0KaFqNtNFSuNJjCYswIgWg8HA0L80bw4e0VUuS0NzBDm0zthtjIUHSCBSsQEtKkqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOSEhpbsgeM4MNVyvircA569%2F%2FNMl1KSaHzJUB7FmrIY8BDBsh7DKi9NU6Qzr0%2BK51Bkm6JpaVFJJH4jgsI2LFuWGhtzmkGZvP8Fmrwggbp%2BrzVRxNCKBtYrXcYSzDRDBhHO2mg3uqXBnAOUFFvMc9%2BTnd7O73V8gXvvTIHWVTr9uv%2B3oABUXlr4muUkTW9%2FxAohyMGvjSJ5y7KkzLwtFVrX68HLUqGY5q5pxo2UXh7CjZxUGyTdpE%2BXhI8RaoJM%2BjQGQC0Sj6%2BcqIkr40aHQaNeKC0G1WIEFVqqohpXUmIzzv1j5GB%2BgKEShujZ%2FMXe137RUFxfYpWGGmafdS6JuorTlHL7nujxEa%2BeoT26PxcaA80AdBVr2aGWbVpDE0l5AjlZt7tISCcWzxLv3gElXQMKG7R226ninOmUwYLbMFv3MSNj6zLNKOncvnmPpi121bEMFUIrp%2B0gsD4%2FvsWv4pKJSWrqDHqkeXS%2FgID7H%2Bc1G9A%2FSL24tHXX%2BV4FD%2BMtceMeUfAFihymq2RAZQFJ7%2Fy8%2BmmyLST5ShXw1Qmocial3lo35VmS4%2FWAXkxwfGCM3qmIlKtMsEvG1eqoLLUVEXULAP1T609k7fHOzWm7WFVB8NAQ4E1vYcIZ2lg13FNcIIT3tOa%2BgYfkcduIMJrp3ckGOqUBrA4g7OK396IspjJByIl1Y8DdVHHVVuOCLI2qbFWa2twIn3eusTZEPVb%2Fspg4El0kJwGnIlMpYXfpgJffLoSVIaqZKRTq0iNsd50OOnHcp9sQQoQXFf9QNi%2FvYDjm%2BovkLF4ictYcDXwHhtjQssdP9WmgPPlEbXECQUy2FLx0dXx7Ja%2BqG0%2BM8qBy6SCb1Dwbu1aT3K7ZK4tCQcJ0Aq5eBza4%2Bzil&X-Amz-Signature=a4e2638c9a112613728e10dc434a24c233fee1a561ad86b2db769e59ef50a8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

