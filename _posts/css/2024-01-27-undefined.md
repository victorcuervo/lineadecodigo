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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W53W54G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICfW7YUA%2FVteA4AHDRE%2FWrAsfGP1RyxXwfMomg%2BN7IccAiAWBLqaZoOHawokUSUXP5lz9YgWNAcD0XCpe5JnVcrAayr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMDIwU9DLFKB4JH3yeKtwDMq8RgKle%2FNckyTN6muTPdHkuywHg6VW6y1JAqku9kv1%2FNaab8KGQhrEm%2Bx6GtnoS3RnuutF5lpUANFkQBN85RiFyy9Oby%2FVGly%2FJiiIGC49xBYv2kXspUGMwtgxianZqhsL0rXHbGuyqecdjcD4hiwv5trQkW3oweKOZDLPuhpUg2oHIvNCe8%2Bgya8Pp%2FidS1xpkOaL8XSHjbVNKsZMexDUezzKsfJ5FwRO7CJADSaR%2F3fNLyEARNqkgFpMLaQc5tP%2BTWhdZpqEElc50U%2BPzP8bKpO5EkV1Ho3oPRc%2FXHGqTI4AWuzAQgWxWi0RaMsm2PdcCDYlM5y49igjbzqu1o%2FmlVglBfaboKci6tTuJoHArN8cVPTzFm%2BJlZpI9yEFQobLi8C%2BKx2y0bZNsowVeyRC9tfVKunm%2FhYVGZuBVEVYtpkAs3x05deDSkHOBHrKkF6Kx215uCs3tUUeh6obXelkdmlYMYUqKcOOBdXNhd9XQ7eJx0PcMRkWWF7rO8VsX8FGGo25PlnU5va33afZuwkSfMPVv%2BK2zE2Bp47qxliOjBogNUja2A%2FpJcjF3KjEhVetInGgQDtK7PMWyLZRCeftFr%2F3fYIZEZNW2bTQokCG2ss1jjGnfA5IB9%2BUwwJS%2ByQY6pgGR%2FGopuSvW%2BdKezLE0OYpL8BtS7IBupE5um6ZzgtgYlbQ2wA4D8Okndtz9YOTJuxCx8y4nF31139DtxNu8VWOUtXFheiO7gNC89LlFggQPuLE8tMrSMki846VcSSaN27FevdnO5vj2eZWLg4D9Mg0obdXRVMlVAOi3AlAOEqJOEJpld9svfn%2BWSJrcVFuxSdPaXrureJesaybmZortcx2eNJmIws6W&X-Amz-Signature=97737d0210d2bc9ebd8035fa7df560f3ede5ed1d10dbc35c04822bffca1c5b76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W53W54G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICfW7YUA%2FVteA4AHDRE%2FWrAsfGP1RyxXwfMomg%2BN7IccAiAWBLqaZoOHawokUSUXP5lz9YgWNAcD0XCpe5JnVcrAayr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMDIwU9DLFKB4JH3yeKtwDMq8RgKle%2FNckyTN6muTPdHkuywHg6VW6y1JAqku9kv1%2FNaab8KGQhrEm%2Bx6GtnoS3RnuutF5lpUANFkQBN85RiFyy9Oby%2FVGly%2FJiiIGC49xBYv2kXspUGMwtgxianZqhsL0rXHbGuyqecdjcD4hiwv5trQkW3oweKOZDLPuhpUg2oHIvNCe8%2Bgya8Pp%2FidS1xpkOaL8XSHjbVNKsZMexDUezzKsfJ5FwRO7CJADSaR%2F3fNLyEARNqkgFpMLaQc5tP%2BTWhdZpqEElc50U%2BPzP8bKpO5EkV1Ho3oPRc%2FXHGqTI4AWuzAQgWxWi0RaMsm2PdcCDYlM5y49igjbzqu1o%2FmlVglBfaboKci6tTuJoHArN8cVPTzFm%2BJlZpI9yEFQobLi8C%2BKx2y0bZNsowVeyRC9tfVKunm%2FhYVGZuBVEVYtpkAs3x05deDSkHOBHrKkF6Kx215uCs3tUUeh6obXelkdmlYMYUqKcOOBdXNhd9XQ7eJx0PcMRkWWF7rO8VsX8FGGo25PlnU5va33afZuwkSfMPVv%2BK2zE2Bp47qxliOjBogNUja2A%2FpJcjF3KjEhVetInGgQDtK7PMWyLZRCeftFr%2F3fYIZEZNW2bTQokCG2ss1jjGnfA5IB9%2BUwwJS%2ByQY6pgGR%2FGopuSvW%2BdKezLE0OYpL8BtS7IBupE5um6ZzgtgYlbQ2wA4D8Okndtz9YOTJuxCx8y4nF31139DtxNu8VWOUtXFheiO7gNC89LlFggQPuLE8tMrSMki846VcSSaN27FevdnO5vj2eZWLg4D9Mg0obdXRVMlVAOi3AlAOEqJOEJpld9svfn%2BWSJrcVFuxSdPaXrureJesaybmZortcx2eNJmIws6W&X-Amz-Signature=c04133f3247824345e9ec226d0b8da4309ef081afe194b5e6a078d8a2530bc5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

