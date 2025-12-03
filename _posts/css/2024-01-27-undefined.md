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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CWDER4T%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIEWWAvvhHUmp4aFI%2FZK9NJ04NUJNh17FlFEcw%2BHhBic2AiEA%2BRKXtXReCYAkoFu%2Fe3s%2Bgai4JjSg7irXCV7PUU91aLoq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOcQ0XxZH2F7rqlPdyrcA5NqwbjwkcnAR6LhApJvtg1DAiGuO41e2uFeUrdrBQKo%2BASDfbL5htH7uqg38j9YzPbjv3GNwuDn2zTarBSDc9%2BF2CbIz%2F8WkZUDV1y5XF%2BiU1eu5Pkr94ka6bxYKlQX43K1uqjEegnipG5pkeUXR3%2BxvW4lGv4v9yzpoAnNmMXr0IEYgvCv1rsDo4aOuF2BWKAXRGielUUs3HfOOSLhtGynk6Y%2BFX8SC9E69aO8T9wiBwMluSDWTwmcSF%2BpNt3B9e3okQMnoQVSC%2FFyALF906oKRWSPrcwvEgxx83qIl4ZN6XxCmYgYIRW%2BsHu6uX4%2BatFHQsB7wpLOS9Ovoz03uer%2FtwxQfS81TtQ%2F%2FMWNkcsjk3%2BfFffSYG%2F8JGF8CS5lG%2FZcGr5Fp%2F4tnpYXf6nHcd6BoSVGXNuhuodHLKyMUTh3gZrpy9u5E%2FhA2aBNoA95f4xkONhRvcCoKQPPkFwYL4TxT3bNxIneqKawaoroI1MSvvHFpu2CHZ6cy1kQYJd%2BwIweI4TP1qo9GcU8gSEWvkLiJHncuo0BT9Pni3wZiVueLu82V383D%2F1%2FAHzCYKxkWGFJwaAj6z3Nc4GGyCv15BNYCla7yaY56UqkeeJOp%2Fi%2B5LAGbH5oIPE6ay5JMO3pwMkGOqUB99vPSD5iCdC3Ti3Iit76QqYZXvsud2ZknSO34Fo2RAgFQm6Q8P2MGHlh4HDJaG%2FKh345A5OhAqJV%2BpM8MERV%2FWTF69K%2FgQwbkj5kOfAG7zERXO%2BGVdg8WCaxT35504TdmCTPLjJJPvVRIeTrANxRXqm%2F%2BucNFGu974%2FDafiLTId9YMOBqzw0FbvDCHHe9hcDTMlxuGLq%2FcVIPI1Z9af1em4w3MeQ&X-Amz-Signature=51684eb07bea1c56a74d9a354b95211f903336e979e96a07925b62417788f065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CWDER4T%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIEWWAvvhHUmp4aFI%2FZK9NJ04NUJNh17FlFEcw%2BHhBic2AiEA%2BRKXtXReCYAkoFu%2Fe3s%2Bgai4JjSg7irXCV7PUU91aLoq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDOcQ0XxZH2F7rqlPdyrcA5NqwbjwkcnAR6LhApJvtg1DAiGuO41e2uFeUrdrBQKo%2BASDfbL5htH7uqg38j9YzPbjv3GNwuDn2zTarBSDc9%2BF2CbIz%2F8WkZUDV1y5XF%2BiU1eu5Pkr94ka6bxYKlQX43K1uqjEegnipG5pkeUXR3%2BxvW4lGv4v9yzpoAnNmMXr0IEYgvCv1rsDo4aOuF2BWKAXRGielUUs3HfOOSLhtGynk6Y%2BFX8SC9E69aO8T9wiBwMluSDWTwmcSF%2BpNt3B9e3okQMnoQVSC%2FFyALF906oKRWSPrcwvEgxx83qIl4ZN6XxCmYgYIRW%2BsHu6uX4%2BatFHQsB7wpLOS9Ovoz03uer%2FtwxQfS81TtQ%2F%2FMWNkcsjk3%2BfFffSYG%2F8JGF8CS5lG%2FZcGr5Fp%2F4tnpYXf6nHcd6BoSVGXNuhuodHLKyMUTh3gZrpy9u5E%2FhA2aBNoA95f4xkONhRvcCoKQPPkFwYL4TxT3bNxIneqKawaoroI1MSvvHFpu2CHZ6cy1kQYJd%2BwIweI4TP1qo9GcU8gSEWvkLiJHncuo0BT9Pni3wZiVueLu82V383D%2F1%2FAHzCYKxkWGFJwaAj6z3Nc4GGyCv15BNYCla7yaY56UqkeeJOp%2Fi%2B5LAGbH5oIPE6ay5JMO3pwMkGOqUB99vPSD5iCdC3Ti3Iit76QqYZXvsud2ZknSO34Fo2RAgFQm6Q8P2MGHlh4HDJaG%2FKh345A5OhAqJV%2BpM8MERV%2FWTF69K%2FgQwbkj5kOfAG7zERXO%2BGVdg8WCaxT35504TdmCTPLjJJPvVRIeTrANxRXqm%2F%2BucNFGu974%2FDafiLTId9YMOBqzw0FbvDCHHe9hcDTMlxuGLq%2FcVIPI1Z9af1em4w3MeQ&X-Amz-Signature=d6926cfcad3aedac176fe4a98fbf2d935d61f2dee5873a02e3a30674d8d5e21b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

