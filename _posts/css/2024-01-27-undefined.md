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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRSYSA32%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC4BpVgDzfAwfpcwn2etTavNa7e6wSFbcMWALTXcYKBHgIgVMQvXhuo92%2FPKLZrVpPIAtBf3CaYMC%2Ft6MoV8UXQoFwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDBsARQ5CvCo418zbHSrcA4Tz70D531P9SeXAWzTHxJyyy6OD4wc1VEQ2sxqT2HAbc3tyK7D%2BRvjRxGmI1%2FLU3AvhWdn523YaG%2BvTnwSIM2%2BTF60pVmQXwu9zaDMrnc6dDE1XL3%2BDbAZ1e0bgzXMkEAUSmBURJLtz6hVbRFya4Mqrhn6pnYzMjPuo%2BuLbtPks28X8Z%2B8j39V2l6GJGNOGFA0apCgn6uXl2%2FT3fR1OSKXnp25FMR4fa3d%2BRLOId%2Bokx%2FE5VXequcz94sIMPcofHg%2FgiGahArdqf6J%2BdEzEVdYSNj%2FmF4WPZI4a9eGDlAzl8%2FC2a0ZVDqbaC4b3cUC9RLexN6QvZjNluhZWk2VoY8qEvwYIqioARDNg5KVzMXCz5FwVM16uIEcE5HvmrSaSIXNz7YsiI1InC8MR7%2FT4lPDf8%2Bse8XAJvdeCMVeq12lLFjQuFshOl2Fyw3us97JpQk6OX85%2FWwuEIKI5ZsP6ntr5jOy9F2jjkeNH7PYeFq2Ge%2FjgpnLoUxzJHuqXWx228mrTlLAL0demPLa%2Fc4s7xNiiEu9PGNw%2B5XR%2F1MEJaWCnEjuXL6NfGiQlmAFI71vm7KJbCEk73w%2Fix5jxDJbl0wzLgIKemEboIwzNbmLCMSQabYWNmlYZhfo7lS73MM%2F%2BvckGOqUBApKaec43f1SbwMsoKEjD1dTc5ADOETcsQBGXIwlTO92kHhEyU9pfxEKCVs6%2FF9BG9Wb81vJ%2FYHoyXHKQ1WYTIGzhtBIhvmea69oyZRswExm4aP%2FT7Kyv0YW8bWg35tAu8YjuhkGeaJpxxTOxaAYEODw4LaHFBF08qiWyzOLwkEK4eORjxAn0LUByBjaPkdyJ5rAFulkVMtHWNNMSVoLSaihMNEDd&X-Amz-Signature=a87a433e9ad34b869d5647dd97f66095327edb8d6e4a6a7ede8d0a228d7a0dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRSYSA32%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQC4BpVgDzfAwfpcwn2etTavNa7e6wSFbcMWALTXcYKBHgIgVMQvXhuo92%2FPKLZrVpPIAtBf3CaYMC%2Ft6MoV8UXQoFwq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDBsARQ5CvCo418zbHSrcA4Tz70D531P9SeXAWzTHxJyyy6OD4wc1VEQ2sxqT2HAbc3tyK7D%2BRvjRxGmI1%2FLU3AvhWdn523YaG%2BvTnwSIM2%2BTF60pVmQXwu9zaDMrnc6dDE1XL3%2BDbAZ1e0bgzXMkEAUSmBURJLtz6hVbRFya4Mqrhn6pnYzMjPuo%2BuLbtPks28X8Z%2B8j39V2l6GJGNOGFA0apCgn6uXl2%2FT3fR1OSKXnp25FMR4fa3d%2BRLOId%2Bokx%2FE5VXequcz94sIMPcofHg%2FgiGahArdqf6J%2BdEzEVdYSNj%2FmF4WPZI4a9eGDlAzl8%2FC2a0ZVDqbaC4b3cUC9RLexN6QvZjNluhZWk2VoY8qEvwYIqioARDNg5KVzMXCz5FwVM16uIEcE5HvmrSaSIXNz7YsiI1InC8MR7%2FT4lPDf8%2Bse8XAJvdeCMVeq12lLFjQuFshOl2Fyw3us97JpQk6OX85%2FWwuEIKI5ZsP6ntr5jOy9F2jjkeNH7PYeFq2Ge%2FjgpnLoUxzJHuqXWx228mrTlLAL0demPLa%2Fc4s7xNiiEu9PGNw%2B5XR%2F1MEJaWCnEjuXL6NfGiQlmAFI71vm7KJbCEk73w%2Fix5jxDJbl0wzLgIKemEboIwzNbmLCMSQabYWNmlYZhfo7lS73MM%2F%2BvckGOqUBApKaec43f1SbwMsoKEjD1dTc5ADOETcsQBGXIwlTO92kHhEyU9pfxEKCVs6%2FF9BG9Wb81vJ%2FYHoyXHKQ1WYTIGzhtBIhvmea69oyZRswExm4aP%2FT7Kyv0YW8bWg35tAu8YjuhkGeaJpxxTOxaAYEODw4LaHFBF08qiWyzOLwkEK4eORjxAn0LUByBjaPkdyJ5rAFulkVMtHWNNMSVoLSaihMNEDd&X-Amz-Signature=acf69af06378a1b419b65e63b6226de125b1fd3fa7502bb4101f2b52f5788da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

