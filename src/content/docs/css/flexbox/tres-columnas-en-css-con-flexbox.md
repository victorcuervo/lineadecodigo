---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPXUU33%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFF1YZnEe8dbSfPIQeB4uzo9ylem7L8pZ2yJ%2B1wzgQFgAiEAv8foZQ1e92FpSYa7T5ojHWxA4R%2B79E0hyeWTlO9xxcIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAeo6g%2F%2FT5Nl5pU7zCrcA6eylsjxYSHI4YvD6qd7T%2B4lmHEWoes4QDaQwTF4JpSMlkcuFHyJboGx9AmXu1VNavlI7pTfbCYUAxpmaYh%2BawttXy2hXesLYOq%2BGX1A7ym1C2hImS4TGLxqQolP%2B2EHSvzh7enlpgRhi1fJhGig6aL3vmzkahyvZKdXWtUhaqYQxwb1eXiWzxExN6qf95z%2FTT99P%2F2kPFkUKBusdreUcVgUMZ%2FIk6leVxaTRmdCOilsYR0zko7kWE%2Fd8BOuGF0Yqzf14Jnd5rPadjApE%2BxSwbgingOo8P9QvLk1IjH3Z39AxSnBb0qykyUHHZ5CMs%2BSxjoeYt2QA2%2FnjtS5ptMk4b7FqVuS20JiLK%2FHmfK8XPn3X3o8ykr7Jezv0A4z62qoV9BziXt97%2FRm4xE3M670Q%2FONJJV22hYa0yoRI4%2BdJfdPySSSudud8VrLqKTScx0mhioIqF41DqwYb2xKCLXylWDJkc7RoX4M5MAO9yjhWMSQVFe%2BMz8yi1wg%2FgsP4fkPBcWwLKS0mtLJmkskxOdxrirDksBk0B2FgnNNxCFDXrweboZ5wo%2Fax5%2F4jKzEOugrPu0R8Ivt50N8bM3yC11s5p1oGkNmdLLCUWP9CeW9d%2BELeRHPyGa8qi4YCQkkML7E0ckGOqUBerKkG4rw8vqsid8MUrMotWe27lDxg39YjAVmBA2Up0bH3qORtaLHcQhT9LR5mu8ash7anfNATCCT9md1dDJPDXE0iTjknvIEyVuLavCacPoCe8t%2FH7NfOio8mxQ0B9cFYssjBKKeYoeRdqoWX6%2FGSdVR%2F6mUtDlNlICcjsxYBkLR8BF5hWt543KAsH1apwyFhwnCW8q8THTiCmUt%2FUkpvXG14qrZ&X-Amz-Signature=127848a4f296473cbc4ecf15baaf13a518b07e8bd93aa7a2fa3c01cf76d09795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXPXUU33%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFF1YZnEe8dbSfPIQeB4uzo9ylem7L8pZ2yJ%2B1wzgQFgAiEAv8foZQ1e92FpSYa7T5ojHWxA4R%2B79E0hyeWTlO9xxcIq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAeo6g%2F%2FT5Nl5pU7zCrcA6eylsjxYSHI4YvD6qd7T%2B4lmHEWoes4QDaQwTF4JpSMlkcuFHyJboGx9AmXu1VNavlI7pTfbCYUAxpmaYh%2BawttXy2hXesLYOq%2BGX1A7ym1C2hImS4TGLxqQolP%2B2EHSvzh7enlpgRhi1fJhGig6aL3vmzkahyvZKdXWtUhaqYQxwb1eXiWzxExN6qf95z%2FTT99P%2F2kPFkUKBusdreUcVgUMZ%2FIk6leVxaTRmdCOilsYR0zko7kWE%2Fd8BOuGF0Yqzf14Jnd5rPadjApE%2BxSwbgingOo8P9QvLk1IjH3Z39AxSnBb0qykyUHHZ5CMs%2BSxjoeYt2QA2%2FnjtS5ptMk4b7FqVuS20JiLK%2FHmfK8XPn3X3o8ykr7Jezv0A4z62qoV9BziXt97%2FRm4xE3M670Q%2FONJJV22hYa0yoRI4%2BdJfdPySSSudud8VrLqKTScx0mhioIqF41DqwYb2xKCLXylWDJkc7RoX4M5MAO9yjhWMSQVFe%2BMz8yi1wg%2FgsP4fkPBcWwLKS0mtLJmkskxOdxrirDksBk0B2FgnNNxCFDXrweboZ5wo%2Fax5%2F4jKzEOugrPu0R8Ivt50N8bM3yC11s5p1oGkNmdLLCUWP9CeW9d%2BELeRHPyGa8qi4YCQkkML7E0ckGOqUBerKkG4rw8vqsid8MUrMotWe27lDxg39YjAVmBA2Up0bH3qORtaLHcQhT9LR5mu8ash7anfNATCCT9md1dDJPDXE0iTjknvIEyVuLavCacPoCe8t%2FH7NfOio8mxQ0B9cFYssjBKKeYoeRdqoWX6%2FGSdVR%2F6mUtDlNlICcjsxYBkLR8BF5hWt543KAsH1apwyFhwnCW8q8THTiCmUt%2FUkpvXG14qrZ&X-Amz-Signature=fe98798a6ec8dbea4f0e02cc423c0d6ec4304a72984c48a6a05eef88b6ba7f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

