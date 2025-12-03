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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4LMCZVV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCvticjQeXm80LvcUYWDBKR0gYeNFPM73puKt%2B7trpZwwIgFWQe1MlCJ%2Fbgwn2sXycZg4RNe2wNf4L50f%2FqPAA42qsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDBva9UJhs%2BGGyexzHCrcA5moRV2Q85gnD5z%2B5By%2FgB6Y4rhXGdbgJC827emN7NGKBr3wvgyon5jxOG0%2BDuxlcjlugD4dWfKyDRpBUB7knmQtLEWgiUWSV0hQbMwxl3GpzzXZ203QUCkbbFPj0Phw2Jbxj%2FQptoitUOABtZBqqtHbNVEr2Jl%2B3Zh1HnOE3PzPpeZ9IKa93dg8YwGUKXUAW5qzcF7%2FdTM7LEVLdjGUWmXQx5TxipVDizgr67Yh7My4L%2F5MWZdKW%2B1F%2F5QqumOAfzWFawOWwT0WqtAZHypoA2YREQZcU0spic2bftVsjDbusneUrZw913iN5cYm%2FHNwTAlJWn9sb%2FWMvfxjRhNKBI9QmcOFethgdx%2BTNols87ZHXq8ZDGfrR6NxWiVe8X7r8Wv37ZbP23ZMOJlmj%2FTzMrZy3EgaNfgf2Ucu%2BbTKaVUNYMOmG0gIp%2FTfH6wmwNBvDno29BEtpcC2JREyQvFsTYpzFkrFYxq1QIjav2Jh7225kz1q9iZ9gYFsh4trc33CzGQOvi6fOzNgbw5PCyL%2BAfkBih5BJ3J9LSB0byb92NaP185XTot4%2B4hzle%2FxwPfGqBp7GDJ%2BrHnv19dONGZwpWjA2BQzjc%2BqXU5GJkx2sKjTMQ2%2BW7cwu8%2BxWEL1MKjqwMkGOqUBoLqTpXFPG5Qg0Kp%2FL1Ns0vo9YuCg%2FgJQfPl97%2FPlpFbPODog7BuC%2BCfSIH%2FLsFZd4%2BzTKxPTWA%2FP7oXaUHqu6%2FdJp1tnW9B7tiYFXqhWyAXeGMNgNlgRU3VUNSio4E2StPDAWBwTY1xRWCiAuJoP%2Fmchh92wI9MGTTNloLAvZuTezC5uRaXbxbMAQ1SH1tHRCFwdXttqclEAMrkNpRAun2mmjIu3&X-Amz-Signature=967eec7caa20ce18189ac6a5ecdd859bd94755a02b8844daee377e84798e245d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4LMCZVV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T131508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCvticjQeXm80LvcUYWDBKR0gYeNFPM73puKt%2B7trpZwwIgFWQe1MlCJ%2Fbgwn2sXycZg4RNe2wNf4L50f%2FqPAA42qsq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDBva9UJhs%2BGGyexzHCrcA5moRV2Q85gnD5z%2B5By%2FgB6Y4rhXGdbgJC827emN7NGKBr3wvgyon5jxOG0%2BDuxlcjlugD4dWfKyDRpBUB7knmQtLEWgiUWSV0hQbMwxl3GpzzXZ203QUCkbbFPj0Phw2Jbxj%2FQptoitUOABtZBqqtHbNVEr2Jl%2B3Zh1HnOE3PzPpeZ9IKa93dg8YwGUKXUAW5qzcF7%2FdTM7LEVLdjGUWmXQx5TxipVDizgr67Yh7My4L%2F5MWZdKW%2B1F%2F5QqumOAfzWFawOWwT0WqtAZHypoA2YREQZcU0spic2bftVsjDbusneUrZw913iN5cYm%2FHNwTAlJWn9sb%2FWMvfxjRhNKBI9QmcOFethgdx%2BTNols87ZHXq8ZDGfrR6NxWiVe8X7r8Wv37ZbP23ZMOJlmj%2FTzMrZy3EgaNfgf2Ucu%2BbTKaVUNYMOmG0gIp%2FTfH6wmwNBvDno29BEtpcC2JREyQvFsTYpzFkrFYxq1QIjav2Jh7225kz1q9iZ9gYFsh4trc33CzGQOvi6fOzNgbw5PCyL%2BAfkBih5BJ3J9LSB0byb92NaP185XTot4%2B4hzle%2FxwPfGqBp7GDJ%2BrHnv19dONGZwpWjA2BQzjc%2BqXU5GJkx2sKjTMQ2%2BW7cwu8%2BxWEL1MKjqwMkGOqUBoLqTpXFPG5Qg0Kp%2FL1Ns0vo9YuCg%2FgJQfPl97%2FPlpFbPODog7BuC%2BCfSIH%2FLsFZd4%2BzTKxPTWA%2FP7oXaUHqu6%2FdJp1tnW9B7tiYFXqhWyAXeGMNgNlgRU3VUNSio4E2StPDAWBwTY1xRWCiAuJoP%2Fmchh92wI9MGTTNloLAvZuTezC5uRaXbxbMAQ1SH1tHRCFwdXttqclEAMrkNpRAun2mmjIu3&X-Amz-Signature=dd720e47d637580a89736a75ae04cf150aa80da74924cf23eaacd50285b76eac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

