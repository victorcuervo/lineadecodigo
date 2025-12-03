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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2T3RF63%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFEvJwdhkvBOqYR58cShMRFnt314v%2FEYEE9flntyyAN0AiEAjs%2B1iiOBOzkTgDZSjs%2FjwTowZv14LfF14oOlPC3vYAIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPV6drFKn18G17%2FHoSrcA9RYmF5wHe0Dy3UJ5VL3bb7iKN6wdVCd6ZMDNBAxLugMQ5Pkr8%2FHIq2LEM%2BEKwSNL9fNShUbN8yXmWzz9Nivu7m1CURy%2F29nUqFfLgz%2FKou54jP12E%2B6kW6oAAvi50QWlLUXbjw6wXueIMWnn3shR1YdgeDp%2BHNkpjh0GsnqezkdbUmcVPPSxqzOuZRvRFnT8TTeXiKPVrFYmyTeBEBaNBa99GiqdbeaSDYiVbIkFnt7HwRUukhzhNZryxNolUJxGlRDyeho8Th2cWJ6RI66upZGsUhl%2FZXu6a3QBcVN1qzbWoMMjEeu%2FBDtZOzGJvxu7GsU0FUMYviTeeRPNvszG0j2XmA6I4Cput0LfferOP5Ga%2F6hlnjtDGG9G1c3vXGBqn3%2FKJyNkIPXZHOEGwGt0WKC0TJtYhrw7DDbUG4iOz4bTetTKA3vFq6xSeyoTaEOuIbq%2B9Eqhdl7UG6ClwO1P6yMXpOr7xHxFRvnoKYgMhz9ls%2BzHweMUC1F4CmWTONCFsOm0oFvaJKG7OIVEZVES8iVF%2FMp4FqkzpcUwenh%2FjBfSDj8h71vScs5OU3sDEEw0NBOdJ4Tow8Qw3OYKqb1Rcfih6kH9lj9ePtAblMzXW1Gi%2FkR2Y%2Fae5LIoAnFMM3NwMkGOqUBIQSMozBiOUSPiMoqxNr5bt77yoRDmVLvLrflSh8rzhKu7mbz8M7sVa3I9V78aekSKVqSY795Bz%2FLBp4AnjiUB9AKr%2FOwNUU7ymlDJOLSS5e9ReUpKz%2FpzbVacz0PWKrP7lDxCJRbNK%2BCb%2BoznWJFMuQwYIohBQeWog9OrjfktIC%2BghAiybqATRgcdg5uBc2qf6hVNO1irLbGYtdPWeyUehTgmrf9&X-Amz-Signature=af2915405c4a244e7899174f1ae9618b907fb0e8f0cd9b6c0a565bdefbc988ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2T3RF63%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIFEvJwdhkvBOqYR58cShMRFnt314v%2FEYEE9flntyyAN0AiEAjs%2B1iiOBOzkTgDZSjs%2FjwTowZv14LfF14oOlPC3vYAIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPV6drFKn18G17%2FHoSrcA9RYmF5wHe0Dy3UJ5VL3bb7iKN6wdVCd6ZMDNBAxLugMQ5Pkr8%2FHIq2LEM%2BEKwSNL9fNShUbN8yXmWzz9Nivu7m1CURy%2F29nUqFfLgz%2FKou54jP12E%2B6kW6oAAvi50QWlLUXbjw6wXueIMWnn3shR1YdgeDp%2BHNkpjh0GsnqezkdbUmcVPPSxqzOuZRvRFnT8TTeXiKPVrFYmyTeBEBaNBa99GiqdbeaSDYiVbIkFnt7HwRUukhzhNZryxNolUJxGlRDyeho8Th2cWJ6RI66upZGsUhl%2FZXu6a3QBcVN1qzbWoMMjEeu%2FBDtZOzGJvxu7GsU0FUMYviTeeRPNvszG0j2XmA6I4Cput0LfferOP5Ga%2F6hlnjtDGG9G1c3vXGBqn3%2FKJyNkIPXZHOEGwGt0WKC0TJtYhrw7DDbUG4iOz4bTetTKA3vFq6xSeyoTaEOuIbq%2B9Eqhdl7UG6ClwO1P6yMXpOr7xHxFRvnoKYgMhz9ls%2BzHweMUC1F4CmWTONCFsOm0oFvaJKG7OIVEZVES8iVF%2FMp4FqkzpcUwenh%2FjBfSDj8h71vScs5OU3sDEEw0NBOdJ4Tow8Qw3OYKqb1Rcfih6kH9lj9ePtAblMzXW1Gi%2FkR2Y%2Fae5LIoAnFMM3NwMkGOqUBIQSMozBiOUSPiMoqxNr5bt77yoRDmVLvLrflSh8rzhKu7mbz8M7sVa3I9V78aekSKVqSY795Bz%2FLBp4AnjiUB9AKr%2FOwNUU7ymlDJOLSS5e9ReUpKz%2FpzbVacz0PWKrP7lDxCJRbNK%2BCb%2BoznWJFMuQwYIohBQeWog9OrjfktIC%2BghAiybqATRgcdg5uBc2qf6hVNO1irLbGYtdPWeyUehTgmrf9&X-Amz-Signature=9a2c89eba4bbbb39930406909b3fcc37da7db200ef3888dacebc98139dc922f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

