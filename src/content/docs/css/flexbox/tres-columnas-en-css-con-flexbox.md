---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBJUNALB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETdpkONkvqB8Xvc7uhIS6VSUyPsKkgrrB%2ByMNiMfITnAiBmo7Iot7bN%2BnghQPinFTU3b1xFLJV%2BXalZAqTJKMPHWCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKdGTXxcXO7xXYP4EKtwDVq2EmNzKgkgTWbKbmaFEjRwls08MCgUcZIkrsqefC9vVMY%2BJkp3iDRsELPXf6viwh%2FCYIT83uXPcbiKMQDKQ6M5KiLmOAmhnLIEDRJqNkC%2FUdIv6tUmwJcyCL9xe%2F5VZujux2woQyHRJ1zZnM3LWg1iSskma%2FlSQKebmV7DzKn%2B92JnW3zOSFStgvqxhEb%2Fw5A36vxHhrjdJsG7YhaufTzf3aBoxL%2BeCb7%2BFNIbv%2FP0hrnzUNzdcIn%2FSglt6gATJ%2FXI1gIk1OQVMbfgr2D%2Ff9G7oOPgkxmJLDJYSugt2JK8MEJ2Vyt%2Fc5T%2FQsXy41PYTwQ0wkTesBmE%2B%2FzGBWlb1xRo1K%2BA%2Fmbilm%2BuCK2WMU5LX0JGM9PVp3M4kukFL95U7tx1IMIWPh6r9f1U9yRG20%2FuHZtt5Q3M8s8IpnZ%2FOv7j2cU33ucdFnQ794L8rrWiUO5L37F85m9Nsvn2UN0y0lp74ap%2F06nYcE7QDZZnDVl%2Fgl24YV1swgRLLlh%2FnrTIBONN9U4sOQjH29EMnw5C6VMf8E4iJEuS%2F7ZXbDkJ2wz6w%2BmX0HanYzTSqTp4YYvqGDQtTSY0etvQqeD4PnW%2BHDHBiBxL9FedLom53%2BeiOWpyzboCAltu9vwNfwkMwxq3eyQY6pgHDVymHXKBwADClaV8ofbIPnnA0MA2sRtBu9QrdKKMsoaoe1NU0WLy%2F9TKf5%2BhxDozXdWLrkmMXnvMoRmQ6qWzcLw3Qmymfn8BV3csIEwTeKTG3fzxZasAGwwC3jgzz9FlpVTnpPVjeAR%2FGp7WCoUoCePubnPcYbGQIYidkXlwrNQGVHK2AszqFv2j0YXyB7F1kgtMvAfhm%2FswPSELOCsTOva5QYW6a&X-Amz-Signature=4deca9d1479c7e6c15100bd26927990e6bb8858d8a85514c12f1271a4a1c6aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBJUNALB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T041239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETdpkONkvqB8Xvc7uhIS6VSUyPsKkgrrB%2ByMNiMfITnAiBmo7Iot7bN%2BnghQPinFTU3b1xFLJV%2BXalZAqTJKMPHWCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKdGTXxcXO7xXYP4EKtwDVq2EmNzKgkgTWbKbmaFEjRwls08MCgUcZIkrsqefC9vVMY%2BJkp3iDRsELPXf6viwh%2FCYIT83uXPcbiKMQDKQ6M5KiLmOAmhnLIEDRJqNkC%2FUdIv6tUmwJcyCL9xe%2F5VZujux2woQyHRJ1zZnM3LWg1iSskma%2FlSQKebmV7DzKn%2B92JnW3zOSFStgvqxhEb%2Fw5A36vxHhrjdJsG7YhaufTzf3aBoxL%2BeCb7%2BFNIbv%2FP0hrnzUNzdcIn%2FSglt6gATJ%2FXI1gIk1OQVMbfgr2D%2Ff9G7oOPgkxmJLDJYSugt2JK8MEJ2Vyt%2Fc5T%2FQsXy41PYTwQ0wkTesBmE%2B%2FzGBWlb1xRo1K%2BA%2Fmbilm%2BuCK2WMU5LX0JGM9PVp3M4kukFL95U7tx1IMIWPh6r9f1U9yRG20%2FuHZtt5Q3M8s8IpnZ%2FOv7j2cU33ucdFnQ794L8rrWiUO5L37F85m9Nsvn2UN0y0lp74ap%2F06nYcE7QDZZnDVl%2Fgl24YV1swgRLLlh%2FnrTIBONN9U4sOQjH29EMnw5C6VMf8E4iJEuS%2F7ZXbDkJ2wz6w%2BmX0HanYzTSqTp4YYvqGDQtTSY0etvQqeD4PnW%2BHDHBiBxL9FedLom53%2BeiOWpyzboCAltu9vwNfwkMwxq3eyQY6pgHDVymHXKBwADClaV8ofbIPnnA0MA2sRtBu9QrdKKMsoaoe1NU0WLy%2F9TKf5%2BhxDozXdWLrkmMXnvMoRmQ6qWzcLw3Qmymfn8BV3csIEwTeKTG3fzxZasAGwwC3jgzz9FlpVTnpPVjeAR%2FGp7WCoUoCePubnPcYbGQIYidkXlwrNQGVHK2AszqFv2j0YXyB7F1kgtMvAfhm%2FswPSELOCsTOva5QYW6a&X-Amz-Signature=7d5fcdc7883acd4817fe50127da0b4ad8986d0b6f7bae5b2342bc592b311fe53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

