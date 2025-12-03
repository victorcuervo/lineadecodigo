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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5RVTZPX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQClWeGmkuzd95o2aJ%2Bgw1qvW9cFe%2BjEQVxBJ5OR6ozWrQIgG3mMKu1%2BdJfgoQ%2F%2FOGDg2NQns2E%2FQRDZ4ofwqWFOSxcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNwpEm2XRdJU8aj84CrcAxkIXWuOmDNK1hQtrbroaw097l4sh0f6CcLk4dm%2BSkhL886gkIyez4BqFpgUs%2FI3Gsf2zJAgGCOnNqrPwiJ4Y0CsM4BiYcPr%2F0i4Znnb%2Bb3OhQFdOs6b%2FIXRWXOZLfONDv%2FKTV2kxo9GasjsjkzICBehltJs3UMChg9sWThdaA4oOA2%2FojEvLosG1EzHZQVqRv7PO1Q6QMyYG4i2kb1%2Bbyra1Z3X6pU0gPp4h9i510ZZVoVdiF4PuGLdjq%2FEI44J2J2NcxTS5MtMH5H7wZO2ocDvvoYRADHEd4NmdKRJW5kDqiv%2B%2FWsZPQjYKnJRcUmgHOxL3DSDd5y7WZXZ1Mf43xWNIV6FfmK7gdEyrgAhRFNPjIMcvbkAw5C1De6BoeafMEtGOTjRL78uPF8nvp3cV04%2FHg3vz%2F2hiZqQbpQeORDSCUZsPFFMW4zhuegPHHP2fd8mFgZllo5BAQ1faRzTvYPxJgOfftOZjq7N5Sgam%2BjlFTpYKJF6p7loTDqCKQuhETqDC4oLxjyidYnmyK6QF4O00qmL1HeFnrjo26itWOL001TxnvYcF3guIzKcQOoXDPxF1j3zNM%2BcO3qLvKka%2BivGp3DToJZ9ZlSjBl%2B%2BeyQlxO9YwQ4RWcg2fVMWMNWbv8kGOqUBz0hFJrSSCTEtKkHeNzWdTI1bNfrQ9pngx6vAB61l64atFmr0jnq%2Fhv%2FI7gKBkFXE%2FWSlS8A%2FLjKarj7SlesbGFpMZmnlbgfhpwuGNVOpcE8HVAR0gJGgegL2TtbfMx9qNEvsL4HWN8pCD%2BdSurkBb3NfYv%2FIfKPquop4u4YGEeCSruepzuxyfwRwDS9QQFKJOMZ3BwBoND4MQyk4nP6OsC%2F9jFEh&X-Amz-Signature=18b5f7cf9b747ee1c90bfeaaa3826ff1b31221f2e8fb94f5e5a3c96c6fd796e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5RVTZPX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQClWeGmkuzd95o2aJ%2Bgw1qvW9cFe%2BjEQVxBJ5OR6ozWrQIgG3mMKu1%2BdJfgoQ%2F%2FOGDg2NQns2E%2FQRDZ4ofwqWFOSxcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNwpEm2XRdJU8aj84CrcAxkIXWuOmDNK1hQtrbroaw097l4sh0f6CcLk4dm%2BSkhL886gkIyez4BqFpgUs%2FI3Gsf2zJAgGCOnNqrPwiJ4Y0CsM4BiYcPr%2F0i4Znnb%2Bb3OhQFdOs6b%2FIXRWXOZLfONDv%2FKTV2kxo9GasjsjkzICBehltJs3UMChg9sWThdaA4oOA2%2FojEvLosG1EzHZQVqRv7PO1Q6QMyYG4i2kb1%2Bbyra1Z3X6pU0gPp4h9i510ZZVoVdiF4PuGLdjq%2FEI44J2J2NcxTS5MtMH5H7wZO2ocDvvoYRADHEd4NmdKRJW5kDqiv%2B%2FWsZPQjYKnJRcUmgHOxL3DSDd5y7WZXZ1Mf43xWNIV6FfmK7gdEyrgAhRFNPjIMcvbkAw5C1De6BoeafMEtGOTjRL78uPF8nvp3cV04%2FHg3vz%2F2hiZqQbpQeORDSCUZsPFFMW4zhuegPHHP2fd8mFgZllo5BAQ1faRzTvYPxJgOfftOZjq7N5Sgam%2BjlFTpYKJF6p7loTDqCKQuhETqDC4oLxjyidYnmyK6QF4O00qmL1HeFnrjo26itWOL001TxnvYcF3guIzKcQOoXDPxF1j3zNM%2BcO3qLvKka%2BivGp3DToJZ9ZlSjBl%2B%2BeyQlxO9YwQ4RWcg2fVMWMNWbv8kGOqUBz0hFJrSSCTEtKkHeNzWdTI1bNfrQ9pngx6vAB61l64atFmr0jnq%2Fhv%2FI7gKBkFXE%2FWSlS8A%2FLjKarj7SlesbGFpMZmnlbgfhpwuGNVOpcE8HVAR0gJGgegL2TtbfMx9qNEvsL4HWN8pCD%2BdSurkBb3NfYv%2FIfKPquop4u4YGEeCSruepzuxyfwRwDS9QQFKJOMZ3BwBoND4MQyk4nP6OsC%2F9jFEh&X-Amz-Signature=20b02a2110f4ecae3e1413f80329ae443a80d3658cd4b092e60c0d34cd7bbcbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

