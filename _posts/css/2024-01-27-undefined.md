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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662RNYGR4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDLSchOrVSzF9tIrJcMWXr8Me1Zyh7AthNrLMpjH8o%2FhAIgXzOMWV86K7%2BU5PloBnRsXKevAUAlLF8M1WYajug79NAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMfnEHN5ej81prA1tCrcA95%2BLAZytARVXo8BMHZnQglp%2BvJ1Xslgmwt1GY3Gvck%2FipkjULyPN5pNRc9%2FstyiDai5p3R9rzlWSUhow7qehGP4R%2BHUrCnewPwyAML9xpX3Zco6OwyVsxoe4Zfv2aWjvKHg3TPV6ohzlVq4WeW%2BzvKJXJhvk5%2Fzevzxq44G2ttJtWowp94nb7RJvwManS%2FqMLPBrqg%2FXYLOgSn2mNrGOshp0HtPqsFOOYKFRC0Qzxoap2daMjV%2BMJvpTMWByOX2Wtcg6ImQSWm3%2F6gT2%2B2FsIfGV5DpyGelA9O3e3UNzz6ERMY2sKIXgjqbwcnsW0HXVtY79r7x4enKkE2uVRfIPjRzcVxYYcFKJwRxhm%2FtCKJBEvaO4uH%2B6X8WYAPvs2nBoFdFtb%2BgSTZKrX%2F0tRwM%2BfMfPzDlfyFfuqcPkASpxZ3Jyq34y12L42UfEV52NoW9Hz14TwkmR9ma7uFKytmf11sHkshVTwZlUN4Mo8YP58LA6qphg2J%2FG4KBWGCEEDhp5jI4mayWPgGOBWPSRbjn9S96EyLf0PSyx7VM8WiSYhZWbOUxG6EOsR6d3Wj%2B5351%2BYb4uMzpBxetz12hrRTAJvyfhExRjuhKe6uJgYJqe8CFc5qd1qs%2FuB0CuwC3MI%2FBwckGOqUBFNKf6rCnSkXDUOKMXsP7bBJ2hoZcdhsB%2Fl%2FLQbOKEVFaW4%2BBP0dItwoXBjnk3Bgwzc0nOLx%2B%2BYDrOcXt1OZsR9eH5v7gIH0GoOSdqIiDiZgaF6B5QTIlWnMXMhxvhemh52Wq6SbVCiZjbNRPLNRleJ1%2BtLHUD57WG8POP2iTwi34O5h6rm9C3IvAThhqK%2Bu56JxTqbGqkNrwn9EsMZBOYjsvv3%2FE&X-Amz-Signature=62044742619bcb570b1496a61e43b1324299323b58dde87be06a4fb57a4065e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662RNYGR4%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIQDLSchOrVSzF9tIrJcMWXr8Me1Zyh7AthNrLMpjH8o%2FhAIgXzOMWV86K7%2BU5PloBnRsXKevAUAlLF8M1WYajug79NAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDMfnEHN5ej81prA1tCrcA95%2BLAZytARVXo8BMHZnQglp%2BvJ1Xslgmwt1GY3Gvck%2FipkjULyPN5pNRc9%2FstyiDai5p3R9rzlWSUhow7qehGP4R%2BHUrCnewPwyAML9xpX3Zco6OwyVsxoe4Zfv2aWjvKHg3TPV6ohzlVq4WeW%2BzvKJXJhvk5%2Fzevzxq44G2ttJtWowp94nb7RJvwManS%2FqMLPBrqg%2FXYLOgSn2mNrGOshp0HtPqsFOOYKFRC0Qzxoap2daMjV%2BMJvpTMWByOX2Wtcg6ImQSWm3%2F6gT2%2B2FsIfGV5DpyGelA9O3e3UNzz6ERMY2sKIXgjqbwcnsW0HXVtY79r7x4enKkE2uVRfIPjRzcVxYYcFKJwRxhm%2FtCKJBEvaO4uH%2B6X8WYAPvs2nBoFdFtb%2BgSTZKrX%2F0tRwM%2BfMfPzDlfyFfuqcPkASpxZ3Jyq34y12L42UfEV52NoW9Hz14TwkmR9ma7uFKytmf11sHkshVTwZlUN4Mo8YP58LA6qphg2J%2FG4KBWGCEEDhp5jI4mayWPgGOBWPSRbjn9S96EyLf0PSyx7VM8WiSYhZWbOUxG6EOsR6d3Wj%2B5351%2BYb4uMzpBxetz12hrRTAJvyfhExRjuhKe6uJgYJqe8CFc5qd1qs%2FuB0CuwC3MI%2FBwckGOqUBFNKf6rCnSkXDUOKMXsP7bBJ2hoZcdhsB%2Fl%2FLQbOKEVFaW4%2BBP0dItwoXBjnk3Bgwzc0nOLx%2B%2BYDrOcXt1OZsR9eH5v7gIH0GoOSdqIiDiZgaF6B5QTIlWnMXMhxvhemh52Wq6SbVCiZjbNRPLNRleJ1%2BtLHUD57WG8POP2iTwi34O5h6rm9C3IvAThhqK%2Bu56JxTqbGqkNrwn9EsMZBOYjsvv3%2FE&X-Amz-Signature=237c1cc744709e14f197b2335e2e8db7f070df513966731d05b1b2a50dca4ea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

