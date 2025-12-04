---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQQ7FOP3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH5wsy0CwzC1SOvkKcBw4%2B50JGKAG9PkDy5cDPzvSagOAiBIj3725A2qP%2Fr99h8WUjLPc0dg%2F2gUfVLA9jMAFXQT1ir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMIN8LVGkAPD0NWWR2KtwD5s1Qon4rSxWGbRvMb2%2BoI5LmHdXHK4bG5bNIheCT9EmNcQlmQpAgyTNH9vIRH0mJfJ2pRPFhSeHsnzuhR0pNqrDigcOlia3%2B7i%2FUxWk75B9FpeY8kc1WQnwixm5EWKP%2Fzl%2BBw3qRO113vFBa2acpnRRXm6pq0KTN3Hroy0%2B%2F30Ms7cypxBTGRQthM4LZ6zd0gVxAPfLpECSAes8XeXzvMM5ft1YHi1ujxlQQhGO112g2uSObA1T%2BAdVk%2Flq8l6PexNpgUkmY43NOFsWPNFdt5Vn7NRD7nI4foLkrWKyWHHqJKZqBlqKdhODFODVo%2FGuTDKeN%2FrPmA%2BblW3qhuysZFtltYCga%2FipyTO7VBqSue9bgJTJysZfYAfAkl4LaA67UZ2%2F73qtHYf1pE9NgAv%2B%2B5CYY8xPXPXfaSCHU0JmoAcXxaiiRapYhNbB6GdEnyDWFT6sY7Hwx9bHqx015sCo3VP8Ron2CuHf%2FvxIDNoy2HCuknnLPKEwWiN%2BkrS2xqb%2BsOPzT%2BCtOT8Nr5h%2BsMuXvcu%2FmuWLXB%2FOsfRnPtHOa8uUCQRdp0sE42oH5R4PjRC%2F2dFLCgOpj37W1kspC3snbkq4PmFobPEr1fbn2DcFB0QyJIyAPfBH%2B2lgJ4fYwwoTGyQY6pgGibRJ6YpkwkPb9BTyPeUZIAelKR%2FKi8yPfFRqVTd5yVpvg%2F3IFj9uSoVDT0SHv68Mqf39f0vAoDw1pA93F0iob0rW2lgOI8%2FhtDyR6wvcKPSVz8bdtWdVl4OP4Qzb6GWjJsb2E5sJFFg2V%2FinHvzgSmtMKPqR9sJQxF6D7B1HfFSqIbnqgf4U3dAKmEFPyJbmSOC8RTue70O28qDwET413LjyZ2uyU&X-Amz-Signature=9f44c6fde008495e38df5abd0ebae129f0b3f972c4dedbd03032a4f48f9c6233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQQ7FOP3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH5wsy0CwzC1SOvkKcBw4%2B50JGKAG9PkDy5cDPzvSagOAiBIj3725A2qP%2Fr99h8WUjLPc0dg%2F2gUfVLA9jMAFXQT1ir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMIN8LVGkAPD0NWWR2KtwD5s1Qon4rSxWGbRvMb2%2BoI5LmHdXHK4bG5bNIheCT9EmNcQlmQpAgyTNH9vIRH0mJfJ2pRPFhSeHsnzuhR0pNqrDigcOlia3%2B7i%2FUxWk75B9FpeY8kc1WQnwixm5EWKP%2Fzl%2BBw3qRO113vFBa2acpnRRXm6pq0KTN3Hroy0%2B%2F30Ms7cypxBTGRQthM4LZ6zd0gVxAPfLpECSAes8XeXzvMM5ft1YHi1ujxlQQhGO112g2uSObA1T%2BAdVk%2Flq8l6PexNpgUkmY43NOFsWPNFdt5Vn7NRD7nI4foLkrWKyWHHqJKZqBlqKdhODFODVo%2FGuTDKeN%2FrPmA%2BblW3qhuysZFtltYCga%2FipyTO7VBqSue9bgJTJysZfYAfAkl4LaA67UZ2%2F73qtHYf1pE9NgAv%2B%2B5CYY8xPXPXfaSCHU0JmoAcXxaiiRapYhNbB6GdEnyDWFT6sY7Hwx9bHqx015sCo3VP8Ron2CuHf%2FvxIDNoy2HCuknnLPKEwWiN%2BkrS2xqb%2BsOPzT%2BCtOT8Nr5h%2BsMuXvcu%2FmuWLXB%2FOsfRnPtHOa8uUCQRdp0sE42oH5R4PjRC%2F2dFLCgOpj37W1kspC3snbkq4PmFobPEr1fbn2DcFB0QyJIyAPfBH%2B2lgJ4fYwwoTGyQY6pgGibRJ6YpkwkPb9BTyPeUZIAelKR%2FKi8yPfFRqVTd5yVpvg%2F3IFj9uSoVDT0SHv68Mqf39f0vAoDw1pA93F0iob0rW2lgOI8%2FhtDyR6wvcKPSVz8bdtWdVl4OP4Qzb6GWjJsb2E5sJFFg2V%2FinHvzgSmtMKPqR9sJQxF6D7B1HfFSqIbnqgf4U3dAKmEFPyJbmSOC8RTue70O28qDwET413LjyZ2uyU&X-Amz-Signature=08fb8344ea16365897c1a778dd876e1a95d173102a76b1cac403158cb1cef6b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

