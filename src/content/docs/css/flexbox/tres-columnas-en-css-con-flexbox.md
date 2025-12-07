---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULHOGSAL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Cb%2FhmcmbfolR12hllFmBNIt9RA06ubX%2Ba%2BCvEPv7TAIhAJ%2BYPZk66NqWC0XeyGE8DwK%2FBrbYer3yIzaRDyygDyeXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8qwTUXQ7075UllVwq3AMC6LO0M3TjUbWJh2HL61rcpqOleJ6pL0GItgyh56TQC1Ghw6BmBP%2F3ks%2FA%2BT1m%2FbeCIs%2FIl6QytZqUityh9dZ9NG35jRKA%2BmZZc81EPZhWGdk13SYETKqe4bwB7ZoLa8lL0%2B5xaEvBMqgWrE4O0Jmq4M3tHZZA5okBxspeHee9rPEhfbr4x7QtDbOUGCoD8sRYwU2QB3HOaZpCnpXSdHqbGbV1BeYbxndjbjb3OD49PBTOZzBb%2BCbhifcWeKDVpWjbLD780whcStpu17m1pPgIDvX4OZTlkr9AIsW8fDbUZs1DTSYCePzMauNS8gW9srFn1ZmOJ4ae19BQZQ3cFVrfju6P0%2FFGOdwoZ4WTEFw5Lxp4BVTX0R5k3i80vEZjh9GXYq29urAE9y8DRn0eljRqnz43c9cqlxo2Lg45jIRZyhhCcMrgxV0%2BWmZ9ZDy1EFM6WYc5%2BgyUmYoPA7%2BXbpqldDbuHhFYG58xBorb3IUrpzSU4yEiSzwecX%2BWOkapWere5LovCmhE1%2BL%2FvGwGJ4ohzUFBHU3Ab5c28gPY377eurpkcB4gOSW%2B%2By0eKPjV1Jtsu2MZtoG%2F2uszEErdjD5b36gn0JWHyYOvXUJ2Q6xQS079FOm%2F57K%2BrJbVDTCG%2FdLJBjqkAWO7egAS5Vjpxx3mN%2Fl1PmmzowfEQ9nmzfQx8oJwmfJLJMTxDE0PBEoazlJKBG%2BE3VIKBbvGNQF9keDveLetP%2BzldlKAK5yv0ezaEuL5Yzc1tRU4qkq8b%2BWKNp0shxk4xgLoen0Eed7xVME8XIh62kVC8YMOepXCEqGzziqFceuvuTb7hhhrELnWWdLeBM86yW%2BGa7LDpuH2DnKUqNMlOmtdet3X&X-Amz-Signature=3ae45e849b9fd6fb9259e5af25c9ba4942f41fb493d8f0fc19a43ea9a726ff78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULHOGSAL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T043210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8Cb%2FhmcmbfolR12hllFmBNIt9RA06ubX%2Ba%2BCvEPv7TAIhAJ%2BYPZk66NqWC0XeyGE8DwK%2FBrbYer3yIzaRDyygDyeXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8qwTUXQ7075UllVwq3AMC6LO0M3TjUbWJh2HL61rcpqOleJ6pL0GItgyh56TQC1Ghw6BmBP%2F3ks%2FA%2BT1m%2FbeCIs%2FIl6QytZqUityh9dZ9NG35jRKA%2BmZZc81EPZhWGdk13SYETKqe4bwB7ZoLa8lL0%2B5xaEvBMqgWrE4O0Jmq4M3tHZZA5okBxspeHee9rPEhfbr4x7QtDbOUGCoD8sRYwU2QB3HOaZpCnpXSdHqbGbV1BeYbxndjbjb3OD49PBTOZzBb%2BCbhifcWeKDVpWjbLD780whcStpu17m1pPgIDvX4OZTlkr9AIsW8fDbUZs1DTSYCePzMauNS8gW9srFn1ZmOJ4ae19BQZQ3cFVrfju6P0%2FFGOdwoZ4WTEFw5Lxp4BVTX0R5k3i80vEZjh9GXYq29urAE9y8DRn0eljRqnz43c9cqlxo2Lg45jIRZyhhCcMrgxV0%2BWmZ9ZDy1EFM6WYc5%2BgyUmYoPA7%2BXbpqldDbuHhFYG58xBorb3IUrpzSU4yEiSzwecX%2BWOkapWere5LovCmhE1%2BL%2FvGwGJ4ohzUFBHU3Ab5c28gPY377eurpkcB4gOSW%2B%2By0eKPjV1Jtsu2MZtoG%2F2uszEErdjD5b36gn0JWHyYOvXUJ2Q6xQS079FOm%2F57K%2BrJbVDTCG%2FdLJBjqkAWO7egAS5Vjpxx3mN%2Fl1PmmzowfEQ9nmzfQx8oJwmfJLJMTxDE0PBEoazlJKBG%2BE3VIKBbvGNQF9keDveLetP%2BzldlKAK5yv0ezaEuL5Yzc1tRU4qkq8b%2BWKNp0shxk4xgLoen0Eed7xVME8XIh62kVC8YMOepXCEqGzziqFceuvuTb7hhhrELnWWdLeBM86yW%2BGa7LDpuH2DnKUqNMlOmtdet3X&X-Amz-Signature=8e9b87d182be5440b7d2f68641c36c224f92d7aae7b9268c0e556c2d10e24106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

