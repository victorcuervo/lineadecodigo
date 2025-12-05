---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC3Y2RV7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMUR9Kt%2FNILomdRqHkzByI6QCXcXx%2Fj%2BitgrKCyccErAiB0Vur4H7bTuTNoJZfZ9xfv3CHmZGWf1ssHsA5%2FI3JecSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM390aNJqMAuH5%2FW4bKtwD9Mry77wYBlzHfj9KKp4xkhk0D5Ogr3pD9EGV81iXm00ijTGwhaXHk%2FZMCt3GcFBaww9HfH89%2F51YH%2B3hbd0iKEHnBmK7gMGvXo89FM%2FvR8wzHys8Uo3NySD3MP1CFmTpjGUcsCjAekH6JoperN1ZPysXmLeRSfXnm3oTv%2FjbTwqOcG%2B%2BFKtvb7KcRtBDl3fKrwLRfrNdnXiOvfBzTa0AatsRaBxYNNRwuuRNBbJOYoOdRId1d%2BKI8udHwD%2FGBCTNEYzj1R996VEPOZfpLPF6gDW1WAxrKpiOlrpP3iJ9U7BzntLKqw9DvPFYUZMgu3GKzmRLKi8F5vLG09uKbk8w7srwgz%2BHSnth7ZZBmediwyh1kRhna%2FvpdCXq27%2B9l0mdqvOgnI9X0sRb6fLROIk%2BDJ1IJkwO%2FLs8WejxAWvamvPQh0NrprhS5ddAcnsoCgKOhdmekqcdZP437wSjvUUVToZDmqbDEi7ZyDtxGL2GLfffZv9OTEEfKKLMs87VYtYIhmmWqFHFYGiB2FLclEtocR4PkAX%2F4e0sMuj%2B6E1FMByb2KO5Fil3gRL%2BMbgRk0ApDuBpvcWmccWsvEGGRn7X1PMtN%2FhdZGJLLeZQdYZWUVki7De8OYgchwGqQqwws6jKyQY6pgH%2BlcLUcdnAF7nqnfHXujFbyLbqAm3eednRfA1m1W7fyJ4Llh5sIfVWZOo1cJotN9ICB9X48vHnZbdOOPUUpUiMaBhlY27B6HlcBW49vjcCBhCWsh2iYFPkphQcSmHUkrF%2FgcCYSQWLCZPq8Aun16AHRp8K6%2F3NLCTP3ctW1KCQ1%2Ftmrd%2F0aZcmK%2BiIf1L5z2SFJpJirrm6n2IhQPXx6otJDGouC7sS&X-Amz-Signature=c145e68ec93e9427ed9b13a660833b0e34f3329a18b821a07c5ac37c2fda5086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC3Y2RV7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T122931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMUR9Kt%2FNILomdRqHkzByI6QCXcXx%2Fj%2BitgrKCyccErAiB0Vur4H7bTuTNoJZfZ9xfv3CHmZGWf1ssHsA5%2FI3JecSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM390aNJqMAuH5%2FW4bKtwD9Mry77wYBlzHfj9KKp4xkhk0D5Ogr3pD9EGV81iXm00ijTGwhaXHk%2FZMCt3GcFBaww9HfH89%2F51YH%2B3hbd0iKEHnBmK7gMGvXo89FM%2FvR8wzHys8Uo3NySD3MP1CFmTpjGUcsCjAekH6JoperN1ZPysXmLeRSfXnm3oTv%2FjbTwqOcG%2B%2BFKtvb7KcRtBDl3fKrwLRfrNdnXiOvfBzTa0AatsRaBxYNNRwuuRNBbJOYoOdRId1d%2BKI8udHwD%2FGBCTNEYzj1R996VEPOZfpLPF6gDW1WAxrKpiOlrpP3iJ9U7BzntLKqw9DvPFYUZMgu3GKzmRLKi8F5vLG09uKbk8w7srwgz%2BHSnth7ZZBmediwyh1kRhna%2FvpdCXq27%2B9l0mdqvOgnI9X0sRb6fLROIk%2BDJ1IJkwO%2FLs8WejxAWvamvPQh0NrprhS5ddAcnsoCgKOhdmekqcdZP437wSjvUUVToZDmqbDEi7ZyDtxGL2GLfffZv9OTEEfKKLMs87VYtYIhmmWqFHFYGiB2FLclEtocR4PkAX%2F4e0sMuj%2B6E1FMByb2KO5Fil3gRL%2BMbgRk0ApDuBpvcWmccWsvEGGRn7X1PMtN%2FhdZGJLLeZQdYZWUVki7De8OYgchwGqQqwws6jKyQY6pgH%2BlcLUcdnAF7nqnfHXujFbyLbqAm3eednRfA1m1W7fyJ4Llh5sIfVWZOo1cJotN9ICB9X48vHnZbdOOPUUpUiMaBhlY27B6HlcBW49vjcCBhCWsh2iYFPkphQcSmHUkrF%2FgcCYSQWLCZPq8Aun16AHRp8K6%2F3NLCTP3ctW1KCQ1%2Ftmrd%2F0aZcmK%2BiIf1L5z2SFJpJirrm6n2IhQPXx6otJDGouC7sS&X-Amz-Signature=40c042e6bfeab403d986a7f9113e50d2ea536b0b23d2975801337022f9a3eff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

