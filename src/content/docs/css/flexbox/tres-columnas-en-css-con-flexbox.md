---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HI5CRNC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDunlhBaKvpH7WOPkUU7wOqMvze%2BBuCfGbMYfOIFZBbhwIgcVFtQDf5LahlpywnDaxL%2B1Pdz2P8LFDKeseHngLaxVwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMZcv7GciOvyHyhqwSrcAyzFX9k9U5Go9UsCxsGSn2LelB9tSF6V4nsvcfQhWPg%2FpnQ1duJ6DlAcSEbjQHOUwXvakoTURAuKlPy6l40NgRN8PtJSTwKn8RSZv1uLvYo9B3xcFjyHnIml7p01rEZBV8AbW5EhDXt6pomeMRzXF8FWGdTC%2BQAPhTNxFauyGz2vSHB84f7Fuqxu1rh4OkMA7IVB%2F%2BrV7C1FzxGHiYtzejH5kSATGuW1iuYa4cPit%2B9YTEVDKrg97mPKw39fx6Ieu33oXdqH0Oxd%2F%2BGB9CUnMZ3leC1i8r%2B0yZEPaWFVbR%2BCsNT0yFCUuJOlEoqu%2FYkwMvJ4yiRFqeh2CJRdHR5kgqrdZLeBJWGPR2%2BaOBkG%2BnaLa6F2%2FbDctDh6Uj9V8yA%2BUKze5aWn9duwCOfsd1qk1FTXVyfPnIS8lmMk1MpOWhQ1jB4XYPmcSlvlAilAlufjws4i9Y5IHIuBpx%2FopzOUHJe8yT%2FM6eNeXLN7%2F68Ypv9IhTMHgrbdNoWQSiV1fgeRyj%2FFrV%2BT3XUsuZF2yseGn%2FPJHFFWpdvFvNDMMVlIAERKyxQzfL%2FRI2Lnv%2BoQM8xMHeMbeqXlbY89qlGjE82ivrkuizJr3Wfc3f%2BCaBP4pvzO%2FHRhz2idy41PTr3yMMrIy8kGOqUBQ1ESh6cJ4%2FUXHcvUayE0b8A1dJz4WvcHGrN3pUxDnf9VnGHh6RnCfHpdoDo9IAA1ASDf3C0b%2F5A%2FlrN47rw1JOrkg%2FhEmxb319bMep6yIemGSpTisnefD9qk6t0BLsxyKnQjOG9Hi%2FWN2LvYxZjX1vvwS8v7Y2wN9fJ96%2FfDqew3TStjA6rwnpR2DJbN%2FVP7Pnj9YPllyLn8F0kSj32d9BFPKZyS&X-Amz-Signature=0286ce8f2aafec1ddb3792ec5c78da7541cbb8f993c2fad3874246d5284099af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HI5CRNC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T185426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDunlhBaKvpH7WOPkUU7wOqMvze%2BBuCfGbMYfOIFZBbhwIgcVFtQDf5LahlpywnDaxL%2B1Pdz2P8LFDKeseHngLaxVwq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDMZcv7GciOvyHyhqwSrcAyzFX9k9U5Go9UsCxsGSn2LelB9tSF6V4nsvcfQhWPg%2FpnQ1duJ6DlAcSEbjQHOUwXvakoTURAuKlPy6l40NgRN8PtJSTwKn8RSZv1uLvYo9B3xcFjyHnIml7p01rEZBV8AbW5EhDXt6pomeMRzXF8FWGdTC%2BQAPhTNxFauyGz2vSHB84f7Fuqxu1rh4OkMA7IVB%2F%2BrV7C1FzxGHiYtzejH5kSATGuW1iuYa4cPit%2B9YTEVDKrg97mPKw39fx6Ieu33oXdqH0Oxd%2F%2BGB9CUnMZ3leC1i8r%2B0yZEPaWFVbR%2BCsNT0yFCUuJOlEoqu%2FYkwMvJ4yiRFqeh2CJRdHR5kgqrdZLeBJWGPR2%2BaOBkG%2BnaLa6F2%2FbDctDh6Uj9V8yA%2BUKze5aWn9duwCOfsd1qk1FTXVyfPnIS8lmMk1MpOWhQ1jB4XYPmcSlvlAilAlufjws4i9Y5IHIuBpx%2FopzOUHJe8yT%2FM6eNeXLN7%2F68Ypv9IhTMHgrbdNoWQSiV1fgeRyj%2FFrV%2BT3XUsuZF2yseGn%2FPJHFFWpdvFvNDMMVlIAERKyxQzfL%2FRI2Lnv%2BoQM8xMHeMbeqXlbY89qlGjE82ivrkuizJr3Wfc3f%2BCaBP4pvzO%2FHRhz2idy41PTr3yMMrIy8kGOqUBQ1ESh6cJ4%2FUXHcvUayE0b8A1dJz4WvcHGrN3pUxDnf9VnGHh6RnCfHpdoDo9IAA1ASDf3C0b%2F5A%2FlrN47rw1JOrkg%2FhEmxb319bMep6yIemGSpTisnefD9qk6t0BLsxyKnQjOG9Hi%2FWN2LvYxZjX1vvwS8v7Y2wN9fJ96%2FfDqew3TStjA6rwnpR2DJbN%2FVP7Pnj9YPllyLn8F0kSj32d9BFPKZyS&X-Amz-Signature=0c5682a8c88a0c5b00e0871440b3c451d3dfa7a99d236b2300e717d4a363033f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

