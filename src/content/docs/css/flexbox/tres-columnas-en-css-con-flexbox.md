---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HWC4DM7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXqbEyo5vywTsJ%2FfyhblghJD3FIApjw%2B5TdVEN5kk73AiEAgrvWVCyheZMre7OJL4N%2FWs5KUTIRIweBi5%2FImpnj%2BxkqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIH66zt387dwXbSYzyrcA2ljpSeV47vAq%2FLue1x5Ke5u54cT7okinhSd8r2FoFA9tB66ChBTS3ik%2FIvShy%2BKWO%2BlbJhnAj3s73yK7aTBRuh8Q7b8OvG9NBCVzLtGuBntBKAHnQNl4wVEffwjjczToipvgqfR24tDiJxksQmUG2mv0E38P6pihJ%2Bx%2BPgxKA3tpYnna0Chwa1%2F%2F9ncuZvfmiWr%2F67aWZbjoIX7cT6qKxHyyghgSr1BGVH%2FCLtZITayAlv0mC4%2FobctXByKdxLnZfERbnf9oV8ZLXvo%2BdT10w8aeTJo9DM0oS9jrYmd3rwfXjKRSO50O5SbmssD9aG8Z%2BepT8xUdkUGfp2HyqeC7n14M43%2BGnM8wAvlAKCMGsAUuit17MSFposktpVtlGLxRkzNpJzS5MAtqew7KA0tawgaFZJW5D3jrHSNg7v1oSW%2BXqps%2FQx%2BuNQLiPKniYAqhexJarYqA3iCyghK36je5nq9HG2K%2Fa3Omhy0adZ6QrHHXgU%2FSghvk4x010ROqXYBWr%2BFIsn9df6q83Ri0ek0QgTFUoDqTyjVf5MS5cPn5GWHGTokt8XNaezGgz985c1ZLw3n%2FPbI3b5rOmze%2B3rj4UcVXovCvK3LaviTTvZu90PJ6CJb%2BUsmeA6PnNOhMMiF2MkGOqUBxanl39JxkgUHPJu1jc3BN11pdtkn3TY2%2Bs8go%2FVrCrWtho10LYhp1XrEry2nbodqXs2xdoAFHDRXsWJsN6Ri4wkauioXdQDpQoCSZVEjBZC07AN5AiLCjGef%2FxEg2rWpgeD8xwFKoSjQA8uyp9Du21tZMRrKuHG9oDzVe1YIQUL%2FAWaztlfd2awOSuuiAkQmydZgW2sS2SbJeOXTzn9w4Idl3wDb&X-Amz-Signature=1b9eb934ec926d107ae1e8b76111e509851d39d24f80c84e09e8dc14b3da31c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HWC4DM7%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T232957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXqbEyo5vywTsJ%2FfyhblghJD3FIApjw%2B5TdVEN5kk73AiEAgrvWVCyheZMre7OJL4N%2FWs5KUTIRIweBi5%2FImpnj%2BxkqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIH66zt387dwXbSYzyrcA2ljpSeV47vAq%2FLue1x5Ke5u54cT7okinhSd8r2FoFA9tB66ChBTS3ik%2FIvShy%2BKWO%2BlbJhnAj3s73yK7aTBRuh8Q7b8OvG9NBCVzLtGuBntBKAHnQNl4wVEffwjjczToipvgqfR24tDiJxksQmUG2mv0E38P6pihJ%2Bx%2BPgxKA3tpYnna0Chwa1%2F%2F9ncuZvfmiWr%2F67aWZbjoIX7cT6qKxHyyghgSr1BGVH%2FCLtZITayAlv0mC4%2FobctXByKdxLnZfERbnf9oV8ZLXvo%2BdT10w8aeTJo9DM0oS9jrYmd3rwfXjKRSO50O5SbmssD9aG8Z%2BepT8xUdkUGfp2HyqeC7n14M43%2BGnM8wAvlAKCMGsAUuit17MSFposktpVtlGLxRkzNpJzS5MAtqew7KA0tawgaFZJW5D3jrHSNg7v1oSW%2BXqps%2FQx%2BuNQLiPKniYAqhexJarYqA3iCyghK36je5nq9HG2K%2Fa3Omhy0adZ6QrHHXgU%2FSghvk4x010ROqXYBWr%2BFIsn9df6q83Ri0ek0QgTFUoDqTyjVf5MS5cPn5GWHGTokt8XNaezGgz985c1ZLw3n%2FPbI3b5rOmze%2B3rj4UcVXovCvK3LaviTTvZu90PJ6CJb%2BUsmeA6PnNOhMMiF2MkGOqUBxanl39JxkgUHPJu1jc3BN11pdtkn3TY2%2Bs8go%2FVrCrWtho10LYhp1XrEry2nbodqXs2xdoAFHDRXsWJsN6Ri4wkauioXdQDpQoCSZVEjBZC07AN5AiLCjGef%2FxEg2rWpgeD8xwFKoSjQA8uyp9Du21tZMRrKuHG9oDzVe1YIQUL%2FAWaztlfd2awOSuuiAkQmydZgW2sS2SbJeOXTzn9w4Idl3wDb&X-Amz-Signature=af0012bee8c15e58f97d2767488606eecf45a6334f764af572555c2e7f550ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

