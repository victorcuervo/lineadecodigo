---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAH7DNZ4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgU1dj1KrfuXJdE30YO0rCb5e5ZvssJDNG5%2FghWuF9kwIgWf%2FFv0EpJhD0hnmY%2F3AON1a%2FfzK9%2BiUNQ0VMFaMrrYoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIg7VWr60Cs3clG0USrcA53DJqOrxJobUFx%2FwNmolSQUsxLxc7GEFop7lbh8yVTKIKqChBaMsorO0wUKuxnFMAEItFl%2BaFWP3wKRLyAkbMFiDcPXfM0dnFMgl1Wf10EoNGazoIk4gAgYwSUC3%2B8Z34STauX9cG29jjkzQbIagzlIOMdVhqOvOOu9uZi1R6FRAU%2FrGClFhmmDN17Yf16bgk8ypWwjtACa2Nafa6BDTIM5JE6Vb9UIgzIYFayo7R40%2FRsaMoZ7D00VUlfqOV8DFOhKiIvU7E5fL%2F0rR0lD8wiz%2FvLmWpnFmV%2FgafLcg8xleIivIW67Rmn2h7l%2B%2FdvNK9ek00rOXehSuLSER8EEXTywQZBEbEQvHE9sf0WO1xDV3y65xKfHGZni%2FD1OE3BFd4Cj7rztRBrApNCbyAPSV7zlHXOEZCEcPXipCjtEjn2%2FmA0cyoERO6Vflc4hdc2BXFlniweIQrGFlciXgbKFQOogBdZqFc5ytjUfJAwKuK1aKgb3dtHrr3J5FSMHHQjNl37OlQ5A6MjYALV4y17Eac4Dz9wMZiF%2BNTgkWx%2BKfkw0%2Bw9mYK5CNIBY9c1jaFyFf8K1PRqS0rkShLcZOwjDqR9WWyNtS3EWN2BRgAHAii0MSNEl1ACQgQ1v7TYUMK%2FGyskGOqUB0M4AFxyYOMArfT6ZfR9Y91NAEROuQZsYl99o9gi57NzULeYv1n9MTDHjJgxEy3PW4dfYJ0NjhuhdQACTXc4QesAPczgFrs2mi2sXcyDRiUpMr7gBnMz%2FdDWntEw78CA%2FXxK6UVdX751hFppBNx1BL8U8SstPRxNgiPE30YZScAYvtdHhUpObVDVVJjnchif1Ck2SN1vRGi4voI21UiouxqmGFgny&X-Amz-Signature=2ee6b5fcf49849a11db3f7180cca690a5feebfe53fd275916fd57fa0e89818c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAH7DNZ4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T121826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgU1dj1KrfuXJdE30YO0rCb5e5ZvssJDNG5%2FghWuF9kwIgWf%2FFv0EpJhD0hnmY%2F3AON1a%2FfzK9%2BiUNQ0VMFaMrrYoq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDIg7VWr60Cs3clG0USrcA53DJqOrxJobUFx%2FwNmolSQUsxLxc7GEFop7lbh8yVTKIKqChBaMsorO0wUKuxnFMAEItFl%2BaFWP3wKRLyAkbMFiDcPXfM0dnFMgl1Wf10EoNGazoIk4gAgYwSUC3%2B8Z34STauX9cG29jjkzQbIagzlIOMdVhqOvOOu9uZi1R6FRAU%2FrGClFhmmDN17Yf16bgk8ypWwjtACa2Nafa6BDTIM5JE6Vb9UIgzIYFayo7R40%2FRsaMoZ7D00VUlfqOV8DFOhKiIvU7E5fL%2F0rR0lD8wiz%2FvLmWpnFmV%2FgafLcg8xleIivIW67Rmn2h7l%2B%2FdvNK9ek00rOXehSuLSER8EEXTywQZBEbEQvHE9sf0WO1xDV3y65xKfHGZni%2FD1OE3BFd4Cj7rztRBrApNCbyAPSV7zlHXOEZCEcPXipCjtEjn2%2FmA0cyoERO6Vflc4hdc2BXFlniweIQrGFlciXgbKFQOogBdZqFc5ytjUfJAwKuK1aKgb3dtHrr3J5FSMHHQjNl37OlQ5A6MjYALV4y17Eac4Dz9wMZiF%2BNTgkWx%2BKfkw0%2Bw9mYK5CNIBY9c1jaFyFf8K1PRqS0rkShLcZOwjDqR9WWyNtS3EWN2BRgAHAii0MSNEl1ACQgQ1v7TYUMK%2FGyskGOqUB0M4AFxyYOMArfT6ZfR9Y91NAEROuQZsYl99o9gi57NzULeYv1n9MTDHjJgxEy3PW4dfYJ0NjhuhdQACTXc4QesAPczgFrs2mi2sXcyDRiUpMr7gBnMz%2FdDWntEw78CA%2FXxK6UVdX751hFppBNx1BL8U8SstPRxNgiPE30YZScAYvtdHhUpObVDVVJjnchif1Ck2SN1vRGi4voI21UiouxqmGFgny&X-Amz-Signature=55f46021ba4d3b0265f373c81f38333da4d5fa6dc9efdee8dc0d31df30c92486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

