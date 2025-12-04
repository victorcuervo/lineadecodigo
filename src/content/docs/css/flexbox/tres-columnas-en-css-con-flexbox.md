---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAURJASW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIG2Ux8hhlp7rpfSN5EEZPxeMsvrMKzEpGj4GDXIsrD3TAiEAifyaieU1DhtVXuI%2Bpx3R26hTSHlV8qfqsV6e9B3E4UAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGLEACxzesolmZIyQSrcA1aniIpwAeS%2BaFVft53r37GvYxfPf4e5U4XLtJ67vub2%2F6OLgXq4FTjW8oLsVoDIi9bGfdqN1ECS%2BLQQGF8qzhW7HAzG8iQ4Dy2z%2FDCntBRdrx4mFbfOek4zPnQnkow0yK6P1VS5tigcL7Ou7lVVUpi7wQPwqR9cl%2BMgvxEtKLEoHSXzCeBksBtpXOXuxYhqXAf%2F9kuI1QMsICzHorK17WozPUIMiOWzgSxHSsgo7xleVONvk%2FwMzLf08duQAIfWW%2FwcD2zh6rKXC8OFX0karKB8UQ9fFHqAfbSQ3lskSuIL0mT2Zl1E%2FnPMgD5lBuBiQjo6qUYKRdNQ2kM22qan8iXfp1pg9UO5ZOvxrg0cirBcl%2F8bxpj4Gh5gh%2B%2FGOdPQ1aIE9Hf2i0UQkxrHvsY%2BdLO1c5D0lchy2%2B6Snx4p8baR84LNEKJl5AocZSQhZJeMHli%2FRlPY2K5fszr4cEtKUOX8SIjCKeImwV%2FvSey2lsvJqjtCDaENpXa0H5fxiqbN%2FijWdtfozNjN0kj%2BsE0PPmO2gwBptgYjGe%2FQPVGfSW9gx5h0a7LYicyoTEPp5dEBJwfRPPhNIiV4c58AduE%2BZ2oCHHj8FpOktRFxD3fXsba3UiGYHO735oq0FTwUMOHMxMkGOqUBEth7GBBb9BHm2P2PhWi8CTt60kN7Ahri8Fn3yrdfDHK3DEjjkSLbwo1qrpp%2Bjst78hHMguqcnl5VXs0DMe%2F7F%2BkKit9GDMSsLobOwaB9OTyK4UZ%2F3aF7s%2BBS3fltE%2BAUQpZp%2BZF%2FKKeFdw95NFtNQk6xgdPcQUFkwaEIhOyR9jrX0sKeS28EYhQAH3ihi%2FYAU1zpdqDELdz5R4wBlTyEVKtYnATc&X-Amz-Signature=b44b1fccfb67fbd3b2259c34685cfaf5536a4bea4fba573eae079bf0f7ae51d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAURJASW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T062628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIG2Ux8hhlp7rpfSN5EEZPxeMsvrMKzEpGj4GDXIsrD3TAiEAifyaieU1DhtVXuI%2Bpx3R26hTSHlV8qfqsV6e9B3E4UAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDGLEACxzesolmZIyQSrcA1aniIpwAeS%2BaFVft53r37GvYxfPf4e5U4XLtJ67vub2%2F6OLgXq4FTjW8oLsVoDIi9bGfdqN1ECS%2BLQQGF8qzhW7HAzG8iQ4Dy2z%2FDCntBRdrx4mFbfOek4zPnQnkow0yK6P1VS5tigcL7Ou7lVVUpi7wQPwqR9cl%2BMgvxEtKLEoHSXzCeBksBtpXOXuxYhqXAf%2F9kuI1QMsICzHorK17WozPUIMiOWzgSxHSsgo7xleVONvk%2FwMzLf08duQAIfWW%2FwcD2zh6rKXC8OFX0karKB8UQ9fFHqAfbSQ3lskSuIL0mT2Zl1E%2FnPMgD5lBuBiQjo6qUYKRdNQ2kM22qan8iXfp1pg9UO5ZOvxrg0cirBcl%2F8bxpj4Gh5gh%2B%2FGOdPQ1aIE9Hf2i0UQkxrHvsY%2BdLO1c5D0lchy2%2B6Snx4p8baR84LNEKJl5AocZSQhZJeMHli%2FRlPY2K5fszr4cEtKUOX8SIjCKeImwV%2FvSey2lsvJqjtCDaENpXa0H5fxiqbN%2FijWdtfozNjN0kj%2BsE0PPmO2gwBptgYjGe%2FQPVGfSW9gx5h0a7LYicyoTEPp5dEBJwfRPPhNIiV4c58AduE%2BZ2oCHHj8FpOktRFxD3fXsba3UiGYHO735oq0FTwUMOHMxMkGOqUBEth7GBBb9BHm2P2PhWi8CTt60kN7Ahri8Fn3yrdfDHK3DEjjkSLbwo1qrpp%2Bjst78hHMguqcnl5VXs0DMe%2F7F%2BkKit9GDMSsLobOwaB9OTyK4UZ%2F3aF7s%2BBS3fltE%2BAUQpZp%2BZF%2FKKeFdw95NFtNQk6xgdPcQUFkwaEIhOyR9jrX0sKeS28EYhQAH3ihi%2FYAU1zpdqDELdz5R4wBlTyEVKtYnATc&X-Amz-Signature=34c1a12fa823f732775b05571b79cef5343d2de1d63c812b6bb8e4510504eae6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

