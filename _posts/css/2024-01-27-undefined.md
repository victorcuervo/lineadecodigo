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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGA3UHP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T033055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIH%2Felq308hfUd4Y7b5sQ07hFe04FFpIwvVizjJJ%2BohR1AiB3rRbAxxK5%2BJrSwn90vIWscLiWM7VoAxFwX5852200tSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMRhygHVowycWVxCp3KtwD5LYvzPuW%2FLawBM7Q%2FuVWJIuP9xu8Idismkjq3cKoW2WTQwL%2BSA3rAJkSyop%2BvrS8Cy53Y9yPmldRIZ86X4IRucs0RHgXDpWFhkyVNhZNRCW1RsgsqR68JIPs6YA4cAB99BYo%2FazLifXf4k7Su8Gz1%2FI1J%2FGLvapQYtPkIBShZeGFuRbPTLhVF%2BPyaAtb8YVrRc3P3U2ITlGx348f%2BbLQW6wJUstRmr4AOTX8568rFcpBCmQsr73vPHQJrkykznnAn24g3iZm9E2tbubHbXvmbzdOj%2F514pl3R%2FM7tX4neu%2F2UhnX0VtRKEGoIoDbgEzwOGIeBw24qBPboYUr099DJM6oe97cIY0s9X2y3BK0ngovTRhIPD1JMVVeMEmZucDTNt%2ByMPA3fDpeFFRzasNwAZ%2FSrYFX19Fc%2B9mcUmeyyYyg%2Fi%2BRbmE4Hobyk0pSM75GzfW6eeUF7YtSPntQ40HXzfcBBY9PZsf15QWh1sF7eFBj9MsWtssUswCPK9QytizmqKAdU4GRP3vqP%2BAgbwZWhnHzRhsWyEy4uh%2FA2xrA7RS8llP0l754OZs3PbekEWIlV2awCldobuPhAovikOTlZKQsZTtQBuVNGarSqnVeU4V%2Fbi1ViKqdpXDK840w1JS%2ByQY6pgHiEwhNJ2vT308j1RP3z6jwIugI6oBR7uHtv53UwkKR94lIP%2B1pqr4Lcyvck0soCP6uW%2FyiNj7pxeLnTVDcduiEXTd3ILuEjx4yJmEExBkcuUI0HF%2FUpNWJWfNx9tN6kngFHZT7beT8cK52x%2FFkznl7eb%2Fcbmrq%2F4LWaf1LfJZ6%2BM1bOvucS%2FvZeub3NkU3LVVXwWKvPpaHVvK4C22fpnk%2FgA16TMZA&X-Amz-Signature=ced15f9138c1754a088c9bab672b400949ffbd97edea1cfdaa4f576a4b93dd9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJGA3UHP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T033055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIH%2Felq308hfUd4Y7b5sQ07hFe04FFpIwvVizjJJ%2BohR1AiB3rRbAxxK5%2BJrSwn90vIWscLiWM7VoAxFwX5852200tSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMRhygHVowycWVxCp3KtwD5LYvzPuW%2FLawBM7Q%2FuVWJIuP9xu8Idismkjq3cKoW2WTQwL%2BSA3rAJkSyop%2BvrS8Cy53Y9yPmldRIZ86X4IRucs0RHgXDpWFhkyVNhZNRCW1RsgsqR68JIPs6YA4cAB99BYo%2FazLifXf4k7Su8Gz1%2FI1J%2FGLvapQYtPkIBShZeGFuRbPTLhVF%2BPyaAtb8YVrRc3P3U2ITlGx348f%2BbLQW6wJUstRmr4AOTX8568rFcpBCmQsr73vPHQJrkykznnAn24g3iZm9E2tbubHbXvmbzdOj%2F514pl3R%2FM7tX4neu%2F2UhnX0VtRKEGoIoDbgEzwOGIeBw24qBPboYUr099DJM6oe97cIY0s9X2y3BK0ngovTRhIPD1JMVVeMEmZucDTNt%2ByMPA3fDpeFFRzasNwAZ%2FSrYFX19Fc%2B9mcUmeyyYyg%2Fi%2BRbmE4Hobyk0pSM75GzfW6eeUF7YtSPntQ40HXzfcBBY9PZsf15QWh1sF7eFBj9MsWtssUswCPK9QytizmqKAdU4GRP3vqP%2BAgbwZWhnHzRhsWyEy4uh%2FA2xrA7RS8llP0l754OZs3PbekEWIlV2awCldobuPhAovikOTlZKQsZTtQBuVNGarSqnVeU4V%2Fbi1ViKqdpXDK840w1JS%2ByQY6pgHiEwhNJ2vT308j1RP3z6jwIugI6oBR7uHtv53UwkKR94lIP%2B1pqr4Lcyvck0soCP6uW%2FyiNj7pxeLnTVDcduiEXTd3ILuEjx4yJmEExBkcuUI0HF%2FUpNWJWfNx9tN6kngFHZT7beT8cK52x%2FFkznl7eb%2Fcbmrq%2F4LWaf1LfJZ6%2BM1bOvucS%2FvZeub3NkU3LVVXwWKvPpaHVvK4C22fpnk%2FgA16TMZA&X-Amz-Signature=7aeb54708f0a5606d1df44b68a00f9dbbe3363d70809f4846e94b55dc4f71c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

