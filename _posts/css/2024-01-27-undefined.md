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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQDBF4HR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIH666nCkVkgPrqcKsys43W2Y25C25PC7Heqqiyv0MveaAiEAkAdeRUNvtCtUwk1QGyQmju5%2Bbpxw9boC4WgS2VWHLdEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDKyJm4GEIY4UlrjvyrcA%2BComyQ06ejkq%2Be8%2FPe6mc06hz1vNUdXVlQaYw5pDegqTjZZaEx3rRNdx6COfKeekfGfrdjkg2NdWIFyTu9yekKn7bwpVMtFv%2BVRkJQdkCcTp1uV8UN3ThBkaWUPKMf1Ov4vTrtQDA98eFXBtVgPGhYUbiQgJpqnPs6xj1OaBjxEi9VuTRRd1Mm4oiIRA%2B3WGL6KC0E%2FpBELBWgeSXOvZxeeISGLJUqa4TYvxWvCfGMOESY9GssiQublfYcYPg8YFMnZI%2BU2MDtS5zgLwL1BjB4o1w93Y2nBLK24qNKL26TPv2WoWnD5pyrkm%2BA6Nmn%2B1%2BJ9iYy3%2BZxz%2F0qnTVP7j7Ff1re51X6aTurrA63qMWbO0OHo6FV2hfrP%2BwJusRZ%2FJ5YdbXEP5U52K6Jm%2B6wfl0hXEcb11PIZw4RuhqoK7xhW%2FQbklkxB%2F3OP6frbXimhcEqaPJ2txfb%2FFSuLuIAMYUlHfPm9QyasraAx3kQnv3mFU%2B8bbv3U5pA3a%2Bk%2FzDFeF%2BG4uBiOqO1sIvXVg3asWy5EvPxAarcrUL3xKyjogilQMFgpiH6I3smUgNZtAcqqc77Byr6kQ0buuAqjqqnPCS3PTp%2Beg0RYr%2FcKfCV%2FMXIFWnQgMGT0GFGxDNrkMJvbwckGOqUB%2F0X3Pqwj851IDPHnNj1fkYguWTae2e3Bj9JXQ7DQ6oRzVvC3vKTGnBqNE2eMSmduilX%2BEHvjgaiI%2BFQfgfb%2FVHcntUO4OAXwHvjNxzdgEtDWBd7MTvl8uESdE90Q%2B%2BNn%2FwTMkhRt2Xo5QuGVEAw5IjgaLdXJDayowHh3%2BEootc%2FL%2F8kQtAWVaJql5vwc6r1hsxtS%2F1p%2FyZW7fnPTkADYP%2FWEcBiC&X-Amz-Signature=67e97fdfaa9d64886c75bc21eea18c3e4fcd6c7da0a95972ddec5b3d5504666f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQDBF4HR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIH666nCkVkgPrqcKsys43W2Y25C25PC7Heqqiyv0MveaAiEAkAdeRUNvtCtUwk1QGyQmju5%2Bbpxw9boC4WgS2VWHLdEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDDKyJm4GEIY4UlrjvyrcA%2BComyQ06ejkq%2Be8%2FPe6mc06hz1vNUdXVlQaYw5pDegqTjZZaEx3rRNdx6COfKeekfGfrdjkg2NdWIFyTu9yekKn7bwpVMtFv%2BVRkJQdkCcTp1uV8UN3ThBkaWUPKMf1Ov4vTrtQDA98eFXBtVgPGhYUbiQgJpqnPs6xj1OaBjxEi9VuTRRd1Mm4oiIRA%2B3WGL6KC0E%2FpBELBWgeSXOvZxeeISGLJUqa4TYvxWvCfGMOESY9GssiQublfYcYPg8YFMnZI%2BU2MDtS5zgLwL1BjB4o1w93Y2nBLK24qNKL26TPv2WoWnD5pyrkm%2BA6Nmn%2B1%2BJ9iYy3%2BZxz%2F0qnTVP7j7Ff1re51X6aTurrA63qMWbO0OHo6FV2hfrP%2BwJusRZ%2FJ5YdbXEP5U52K6Jm%2B6wfl0hXEcb11PIZw4RuhqoK7xhW%2FQbklkxB%2F3OP6frbXimhcEqaPJ2txfb%2FFSuLuIAMYUlHfPm9QyasraAx3kQnv3mFU%2B8bbv3U5pA3a%2Bk%2FzDFeF%2BG4uBiOqO1sIvXVg3asWy5EvPxAarcrUL3xKyjogilQMFgpiH6I3smUgNZtAcqqc77Byr6kQ0buuAqjqqnPCS3PTp%2Beg0RYr%2FcKfCV%2FMXIFWnQgMGT0GFGxDNrkMJvbwckGOqUB%2F0X3Pqwj851IDPHnNj1fkYguWTae2e3Bj9JXQ7DQ6oRzVvC3vKTGnBqNE2eMSmduilX%2BEHvjgaiI%2BFQfgfb%2FVHcntUO4OAXwHvjNxzdgEtDWBd7MTvl8uESdE90Q%2B%2BNn%2FwTMkhRt2Xo5QuGVEAw5IjgaLdXJDayowHh3%2BEootc%2FL%2F8kQtAWVaJql5vwc6r1hsxtS%2F1p%2FyZW7fnPTkADYP%2FWEcBiC&X-Amz-Signature=6f65cc6ddc4a7003f94a824219b09dd5c42fbc689d2bf53fed8605b0d5105800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

