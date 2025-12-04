---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOS57FIT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDHIRxAZ2kkTa0lGTC349rjM3yyF%2Fil%2BNgxAwhQpi6MogIhAIA2W4Fv532O0lC4%2FF4EYhy6avFhWy8rhlquv90rO3jtKv8DCD8QABoMNjM3NDIzMTgzODA1IgybIPQgu1JGdaum85sq3AOIJkNmLXM6aaV8e8CQwa93lD73z%2Fbzu3hdXU2erEwN7UuwXa%2BbIk3p6QQj752cyiCixGtCEGiGSGiXN%2BVNzs7rIeWMpjUIOSGJaa6ebohlL3SibF7YtmQeVErFF81X2Oewx55TOdHk7grKaWzLzo7npGLT8hPBeZaXba4e5orF3sC7KjaXi8fXPHQoAqZRHJC17Jgm4z3BILthHffIIonsIftXigLu0ePzBWriB1lE0mF7rnrpmtlfjojBJz86Gsv7mtiMNSfuZ%2BiXuqkj3X%2BBw1Va7cSlW%2F9FHiyj5JJPCk1KsQ9GbMYP8gArJnYh5CA%2FNxIUm3PDOtApPezYBDbOWrLSG3lm8w5O56%2BG%2FN3fbMq8bNH4z6iGEI1G8E3bKmXrAVJRSNdAshQlHvgSOTcGZW7ezLtnvdOeEOE%2Bi0Yt0yBSFpjNdLaau2W36RJtFxunfB1x%2BoWs%2BBof7LQsm9yQzB5IYFqQFp7zgeeXeL2WoVuQGXM0nabiGikQM01yh8gseBM2f%2FWdCWWCbfJrC33Q77LNgzFtaxjHRuw9wQQbrzSVnW0V8gZ4l8oP2DFDDBVFdGZ6EQKH9U3EshnfV%2B7i7UhZDLznUqXLhfABoq6tydzrBv4UUMF5mml4fzCYysTJBjqkAZBpVCMO2SwxOQLZJT5V0fXgO%2FRQ887HLYzgyqOCZVPRYSeiQJlmeDcTlQSXAuL4Rb8ztjdDVstbq7WRn5iUX9xiYiPITeGR09Ub0j67ltF9gu5Q%2FDkuSnxPrJeamogSlr2%2Fb%2FyGWbqQl59heHKekHlC9jbIGS835yT5%2BAGcIf6VF2VevAXDbKjoyGxWCeV6lyrraDsxuBo8TyCiN8lSp40fN667&X-Amz-Signature=94c73676d78b011923dd38260cfce0f8856776f1b2fe9e78b8aef85b211f1862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOS57FIT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDHIRxAZ2kkTa0lGTC349rjM3yyF%2Fil%2BNgxAwhQpi6MogIhAIA2W4Fv532O0lC4%2FF4EYhy6avFhWy8rhlquv90rO3jtKv8DCD8QABoMNjM3NDIzMTgzODA1IgybIPQgu1JGdaum85sq3AOIJkNmLXM6aaV8e8CQwa93lD73z%2Fbzu3hdXU2erEwN7UuwXa%2BbIk3p6QQj752cyiCixGtCEGiGSGiXN%2BVNzs7rIeWMpjUIOSGJaa6ebohlL3SibF7YtmQeVErFF81X2Oewx55TOdHk7grKaWzLzo7npGLT8hPBeZaXba4e5orF3sC7KjaXi8fXPHQoAqZRHJC17Jgm4z3BILthHffIIonsIftXigLu0ePzBWriB1lE0mF7rnrpmtlfjojBJz86Gsv7mtiMNSfuZ%2BiXuqkj3X%2BBw1Va7cSlW%2F9FHiyj5JJPCk1KsQ9GbMYP8gArJnYh5CA%2FNxIUm3PDOtApPezYBDbOWrLSG3lm8w5O56%2BG%2FN3fbMq8bNH4z6iGEI1G8E3bKmXrAVJRSNdAshQlHvgSOTcGZW7ezLtnvdOeEOE%2Bi0Yt0yBSFpjNdLaau2W36RJtFxunfB1x%2BoWs%2BBof7LQsm9yQzB5IYFqQFp7zgeeXeL2WoVuQGXM0nabiGikQM01yh8gseBM2f%2FWdCWWCbfJrC33Q77LNgzFtaxjHRuw9wQQbrzSVnW0V8gZ4l8oP2DFDDBVFdGZ6EQKH9U3EshnfV%2B7i7UhZDLznUqXLhfABoq6tydzrBv4UUMF5mml4fzCYysTJBjqkAZBpVCMO2SwxOQLZJT5V0fXgO%2FRQ887HLYzgyqOCZVPRYSeiQJlmeDcTlQSXAuL4Rb8ztjdDVstbq7WRn5iUX9xiYiPITeGR09Ub0j67ltF9gu5Q%2FDkuSnxPrJeamogSlr2%2Fb%2FyGWbqQl59heHKekHlC9jbIGS835yT5%2BAGcIf6VF2VevAXDbKjoyGxWCeV6lyrraDsxuBo8TyCiN8lSp40fN667&X-Amz-Signature=9e8bf8cee9274866c1ad12455c84ad0887e81bb0333d32cf05cc84e7a7a531f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

