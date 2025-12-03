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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2AO7QD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIHHAWRn%2FF4DYmG0OCUFEahCBK7UGBLZw9znsAI13YJNDAiEAy8t2MxAu8HzBBGH3kcZJItiXxar8mxHtOJXS49AW%2BGAq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDKOLR5nvBd%2BycytFJCrcA35pX1aZMiZnE8VTDzTuFq0UXlf%2FjZhuXtlWGIH4nOOcmGOMSpVQ24rCDG%2Beo7QfClrf3t1yNMWsrKlU7xK3mC4TQk61bgRVJH0kMMP6ssRaWcMIpCpEjJBYBRJVF1VESfOocYWnnnCh%2Bli8zkogVJ%2FLcVB7un3xRmsEPItWijeJWnwkYy448wAPK33z0OEuGtY8NVCxQzZ4cHVYV6gEgb%2FMdmAxoKGl1VOCLrDB4ci4E2sfq%2BRs4Yc1FS9sBrWy%2Ff%2Bq6mf7X9EAcQAfx2OHUKXwmpNxsTk3j%2Fb4Wnr7EOh9fUXmf3%2BLcGwji0%2FCfx6ndVQQPfu3qjAnmWZvRkpxD%2FNX98tBgRECk5jlqmlEdrKGC8o%2BP%2BY5GHMAQTjd51abRDj3pjG%2F1BQ0GlZ082hYd7UrQIsR%2Fv418s%2FzOl%2FTBksC3fbiL4CPFL%2Fcsv78t57zO5WXgTeYMjfz0pAmbikl89W3nBcUcwzTCp6NAFcRzwOB9h95VTXteo07TPeuWSxwrz8xBoeT%2B0vbU5aVL%2BBgqRvxMOCvZljYrybcTq%2FLBDgxSM3uCv06kRnuhd9y7BKjUH3vQL%2BS%2FrsRb7rSuNsoHf%2BYtd4dYlauk%2B5gkKcTxCkkwYwVfhHd7YYGjWBSMJ2mwckGOqUBsy1ERR%2FIMaFUCL1uTDMYBITYRGoVoOVp1%2FdOpRKIow%2BH7nQN7q1pogDjwAyZeIdxJQYlv2RAevjwqMG%2BS3mdKHwNF%2FXZpIm7GT5efqzjh8%2FGbmB8YkqmiRo5cpHKOYIwsVba%2FF0XAGkJzkvrVtistiZ6nhY0eHURF%2FpTBF%2BPkY%2BMtK1eMVqi8t2pXNZiuxOkZkHlriLueQeFZw7hMOJ7S7RrRh8M&X-Amz-Signature=36e2d394f513688c36f8bdd4aefd69537ea536162bcdc56c301b1f6c0237fec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2AO7QD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T153935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIHHAWRn%2FF4DYmG0OCUFEahCBK7UGBLZw9znsAI13YJNDAiEAy8t2MxAu8HzBBGH3kcZJItiXxar8mxHtOJXS49AW%2BGAq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDKOLR5nvBd%2BycytFJCrcA35pX1aZMiZnE8VTDzTuFq0UXlf%2FjZhuXtlWGIH4nOOcmGOMSpVQ24rCDG%2Beo7QfClrf3t1yNMWsrKlU7xK3mC4TQk61bgRVJH0kMMP6ssRaWcMIpCpEjJBYBRJVF1VESfOocYWnnnCh%2Bli8zkogVJ%2FLcVB7un3xRmsEPItWijeJWnwkYy448wAPK33z0OEuGtY8NVCxQzZ4cHVYV6gEgb%2FMdmAxoKGl1VOCLrDB4ci4E2sfq%2BRs4Yc1FS9sBrWy%2Ff%2Bq6mf7X9EAcQAfx2OHUKXwmpNxsTk3j%2Fb4Wnr7EOh9fUXmf3%2BLcGwji0%2FCfx6ndVQQPfu3qjAnmWZvRkpxD%2FNX98tBgRECk5jlqmlEdrKGC8o%2BP%2BY5GHMAQTjd51abRDj3pjG%2F1BQ0GlZ082hYd7UrQIsR%2Fv418s%2FzOl%2FTBksC3fbiL4CPFL%2Fcsv78t57zO5WXgTeYMjfz0pAmbikl89W3nBcUcwzTCp6NAFcRzwOB9h95VTXteo07TPeuWSxwrz8xBoeT%2B0vbU5aVL%2BBgqRvxMOCvZljYrybcTq%2FLBDgxSM3uCv06kRnuhd9y7BKjUH3vQL%2BS%2FrsRb7rSuNsoHf%2BYtd4dYlauk%2B5gkKcTxCkkwYwVfhHd7YYGjWBSMJ2mwckGOqUBsy1ERR%2FIMaFUCL1uTDMYBITYRGoVoOVp1%2FdOpRKIow%2BH7nQN7q1pogDjwAyZeIdxJQYlv2RAevjwqMG%2BS3mdKHwNF%2FXZpIm7GT5efqzjh8%2FGbmB8YkqmiRo5cpHKOYIwsVba%2FF0XAGkJzkvrVtistiZ6nhY0eHURF%2FpTBF%2BPkY%2BMtK1eMVqi8t2pXNZiuxOkZkHlriLueQeFZw7hMOJ7S7RrRh8M&X-Amz-Signature=e9c350d5968359256fa781875695d2cd87679a7083c4d9768cc08b5f6e394257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

