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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTK3I5R7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T154121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEUB3XQUq2w01YYR2DjCTot0D2Hjq7zbGrqvpql1gqoSAiEA%2B3sC2kLk1hmR7A7e4qQoYI4ZWEtN%2BivfwRMUJdUs%2BgQq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDJ6u6moGimfO%2BuxqsircA%2BhWE9vhAv%2FPjfjw6NART1eHbXKSJhtbJbEIhI9uRVaVja7VxmNqJ6iEME5WwehKuD2q96YT9AO1ruBf4kyoa9uwk4hOnaGvzsgYy%2BJCxzvJnK94yBQMc73YCD5aGM4j5BADeKsgSViFZgNcFfIbMZdPdSfKRDG%2BsANklKi34xdBpaL0APKCwEWR38wuMtrxh8BNGBR8UXGs7UTmewVuRcVQTOLEPHS06G8aBVdn0iJGEvxktUgxrXJOyfSp%2FQBFhyclBzL2qd5OE1OF4YkcRCOwOAZN%2Bd2BnWU%2B2a12kJMsNOvYfk1S5WzshGF5xLfbyPxgOb3448jZS48OPp2v12aL04ynDTClccj9xT2v41xQ8w8XYrHj2U0s9WW3%2Bml4WyAXgJgrJhJ2Q%2FZ%2BsdLURn4KwTwtx5%2BSECaYbjL2Zpqh7lYAyFLtecIGOA2ddJxegqtxkxG6Bocd5A96Fi0ROXmtkU%2FrjjZvUBNHudb1GnRVDYysa1sMJiHQ1oRgtVYXjdEiQKDuvrYSmbheloa5jL9Ayxs6G1iZGgzUMtvhAD3rpt42GXmkzLQR65i5ush%2FRWzdX1mpqKitDm4QS76aNORQ0DLpWCy2hKVVSkznMgflF8jzoN6tR939XZIBMOSmwckGOqUB9GwQdB0pwqIDJXWHcuR%2Fy2QHkFxmH0Z3e186FyTZJIuVqq3ndpbUj8KMvASXCb5fFnbIA%2F4qwdf8qJCBqU0YDCq9mUwFZCP1GmHGNUI2B1oG3VwrjsJ9R7z%2BOfVQ9S%2B2sZrBr4SDtAGVyXqFc93lGF%2F0vkuInxaz6OpRGyN1sDmAz9hKrbTFoFZLboAQ2zZMbHant8Fgss%2BN4ruf7rR%2FoarkD7b9&X-Amz-Signature=fc055504d46fc3f6ac8739d0ce2d8d7026dbc4eaf8f60e8786a2c678220bdd56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTK3I5R7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T154121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIEUB3XQUq2w01YYR2DjCTot0D2Hjq7zbGrqvpql1gqoSAiEA%2B3sC2kLk1hmR7A7e4qQoYI4ZWEtN%2BivfwRMUJdUs%2BgQq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDJ6u6moGimfO%2BuxqsircA%2BhWE9vhAv%2FPjfjw6NART1eHbXKSJhtbJbEIhI9uRVaVja7VxmNqJ6iEME5WwehKuD2q96YT9AO1ruBf4kyoa9uwk4hOnaGvzsgYy%2BJCxzvJnK94yBQMc73YCD5aGM4j5BADeKsgSViFZgNcFfIbMZdPdSfKRDG%2BsANklKi34xdBpaL0APKCwEWR38wuMtrxh8BNGBR8UXGs7UTmewVuRcVQTOLEPHS06G8aBVdn0iJGEvxktUgxrXJOyfSp%2FQBFhyclBzL2qd5OE1OF4YkcRCOwOAZN%2Bd2BnWU%2B2a12kJMsNOvYfk1S5WzshGF5xLfbyPxgOb3448jZS48OPp2v12aL04ynDTClccj9xT2v41xQ8w8XYrHj2U0s9WW3%2Bml4WyAXgJgrJhJ2Q%2FZ%2BsdLURn4KwTwtx5%2BSECaYbjL2Zpqh7lYAyFLtecIGOA2ddJxegqtxkxG6Bocd5A96Fi0ROXmtkU%2FrjjZvUBNHudb1GnRVDYysa1sMJiHQ1oRgtVYXjdEiQKDuvrYSmbheloa5jL9Ayxs6G1iZGgzUMtvhAD3rpt42GXmkzLQR65i5ush%2FRWzdX1mpqKitDm4QS76aNORQ0DLpWCy2hKVVSkznMgflF8jzoN6tR939XZIBMOSmwckGOqUB9GwQdB0pwqIDJXWHcuR%2Fy2QHkFxmH0Z3e186FyTZJIuVqq3ndpbUj8KMvASXCb5fFnbIA%2F4qwdf8qJCBqU0YDCq9mUwFZCP1GmHGNUI2B1oG3VwrjsJ9R7z%2BOfVQ9S%2B2sZrBr4SDtAGVyXqFc93lGF%2F0vkuInxaz6OpRGyN1sDmAz9hKrbTFoFZLboAQ2zZMbHant8Fgss%2BN4ruf7rR%2FoarkD7b9&X-Amz-Signature=ace8e9fa4d1fb441b4a4127fded9b4d9fd327f0f9b03ed8a385f5948c06cef5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

