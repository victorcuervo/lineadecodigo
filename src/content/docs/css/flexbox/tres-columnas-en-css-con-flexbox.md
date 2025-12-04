---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLQUJX6Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBF5nA9CZMFBNKbnOVv7778ww5lBbALmWO2Wvxe7uL1sAiBauQx%2FG5iyMaym7FxoSTA2w2MskGCmwdMXP12o2QH1Lir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM5UDBW8N0Wj3AZMZhKtwDZtobv5fNBOvRcnTZJvzOeuvI7w7SOzkBhnDYMTFp9%2F7vTU5GFBKgXFbciRPGecXgij1KUSv0zjw4DG%2F4uWF1CgSVQNyzncUVZkXgf4ca7HI%2BZVzqT3WoyaH9gKdGI7Ml4Rj02olnWNmJRLLcqAOiF8%2BmQeLDRlrL2j7eNKvbRgUZapAmBOiXt%2BisYUpjRVvAYhWOMbXmQUBw%2BwH9V8EGE2fLw9hH89m3JEartRSezPnvbyUfncLT%2FUlzQTtAe1nu0rxiq18vEYrwy8jfuOhZ1G0VqCEQnkhcEXwVyydylxF8dCguyOZbjehxlrTXJhkxZ9O94wYPbRpxhHg9x1yVRBP0x8MGaE4k0UrRPcdF53Qrf35NTeMlry9zb6VzVR93n3GOx0aeH8PitrofVBzP5f1RdV5qKr4uRLSZwihiOOHmkLOjTe0hVfQZKxs9LPeX1%2BsNFUNzG3PxczyK0S4YI3pgg8nJ5zcLfMWpygYq3bfGf0J3G8S8C3lXG1Fyuf%2BZf6IZW2WYPQ9Ych8DbSiNndBI2Ngjt8aJXf%2FgDxjbwV5b0Dlvl%2FDy%2B7PKtyulYFvLeCKw3GXH3Id9Dv0YKFWjG8SrnQW%2F48Nir9T8ZPayvnPUK997v35p%2BEQhfc8wrsnEyQY6pgHE9I%2FtUlOs92lMIJ2ktMMlBSrSCAwLYVgACy2TFZtim%2FA2yC4WKhQJBiM7fSOI23SJHqwE2QJPSZyQk2EXEqkDm1rJt3dKTJvfkDm2Sf1mrEyZrMuuIZJIqxJCjqa14YAjKEnpRn6uZZBOMCcLioqf%2B1npUzuMqlRgJhDQnl6e1sLFqVrwrQZfd8cgFunwyaq6PpEbz5%2FN0zVDg65LL%2FG3LdwxzO2F&X-Amz-Signature=0a90444f26a9d5c47dff8f24980fa5f2b251a4ea81c976fffff162ee990a21ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLQUJX6Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIBF5nA9CZMFBNKbnOVv7778ww5lBbALmWO2Wvxe7uL1sAiBauQx%2FG5iyMaym7FxoSTA2w2MskGCmwdMXP12o2QH1Lir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM5UDBW8N0Wj3AZMZhKtwDZtobv5fNBOvRcnTZJvzOeuvI7w7SOzkBhnDYMTFp9%2F7vTU5GFBKgXFbciRPGecXgij1KUSv0zjw4DG%2F4uWF1CgSVQNyzncUVZkXgf4ca7HI%2BZVzqT3WoyaH9gKdGI7Ml4Rj02olnWNmJRLLcqAOiF8%2BmQeLDRlrL2j7eNKvbRgUZapAmBOiXt%2BisYUpjRVvAYhWOMbXmQUBw%2BwH9V8EGE2fLw9hH89m3JEartRSezPnvbyUfncLT%2FUlzQTtAe1nu0rxiq18vEYrwy8jfuOhZ1G0VqCEQnkhcEXwVyydylxF8dCguyOZbjehxlrTXJhkxZ9O94wYPbRpxhHg9x1yVRBP0x8MGaE4k0UrRPcdF53Qrf35NTeMlry9zb6VzVR93n3GOx0aeH8PitrofVBzP5f1RdV5qKr4uRLSZwihiOOHmkLOjTe0hVfQZKxs9LPeX1%2BsNFUNzG3PxczyK0S4YI3pgg8nJ5zcLfMWpygYq3bfGf0J3G8S8C3lXG1Fyuf%2BZf6IZW2WYPQ9Ych8DbSiNndBI2Ngjt8aJXf%2FgDxjbwV5b0Dlvl%2FDy%2B7PKtyulYFvLeCKw3GXH3Id9Dv0YKFWjG8SrnQW%2F48Nir9T8ZPayvnPUK997v35p%2BEQhfc8wrsnEyQY6pgHE9I%2FtUlOs92lMIJ2ktMMlBSrSCAwLYVgACy2TFZtim%2FA2yC4WKhQJBiM7fSOI23SJHqwE2QJPSZyQk2EXEqkDm1rJt3dKTJvfkDm2Sf1mrEyZrMuuIZJIqxJCjqa14YAjKEnpRn6uZZBOMCcLioqf%2B1npUzuMqlRgJhDQnl6e1sLFqVrwrQZfd8cgFunwyaq6PpEbz5%2FN0zVDg65LL%2FG3LdwxzO2F&X-Amz-Signature=01105211b1313d9e6df835b1b5452e0bb41a4e3f1b7e7899a00e4726288de3d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

