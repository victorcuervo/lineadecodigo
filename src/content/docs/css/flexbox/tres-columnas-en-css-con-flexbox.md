---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q3RXJ7R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB0914NjAZA6Zd4ZrYL5sTGrmm7fVhmp3h0CJgI9B3NwIgSygqrn4Z%2F7PLX1QOCwCHtgsMLnn6rI%2Bm7bGU9A4NSycq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNExOxmuLT76hCQzzCrcA%2BnNNRCxqsdt82WXIBw9LhLsOoOpBywrZi%2FZvGxTr%2FSxnPRt7IReI6t9eqJlwmrlA%2FSOtFTuvzOkzEgZSZp8ohlNUcoX7B2DaFIsPQsvBGfX0l3Q32aaINF5%2BzQswCvPehbmaofidzjvsoD0hAWc0wpALLADUS8akbeRQdwp%2BMbeUpswshAVgOjLBoXFLGDqkHWpy3qrempSaX4kO%2BonXov3cT1CiuOFgIb4LVO7uNykhoyQbbX%2FNi34Oqu%2BtcVO03gMDJU%2B7lS57DQ2kFS7l6HwluNGK6CJ7ujtqCikQoJ87bZiJ2a4UX5gbJpiTbkRbf72yCfbyjQlEDbwuRBNTEs2EhjWuM6vSGPp0kRt8sm6HZOcRMmlHkeo4xzvTMq%2FDVBNfoS2EFylU3NZOnGRNweyIZgt6UWrVH4gsNEK479m632TIq3PTcXoAl7r4vd%2Fd8ZopMfK%2FSh9Q1lGgZXbLKJMHPenR6C23InH3LnWdtJ8uwwhKfLrDWAqU6NA0M9M8%2F46RMJx4Nbk7GLklnpTfl0z1WNLHz5YNzutnPQIvHJtH71An0MiXpzDCrD92lZfu91CFANldz4G7NjUy8EMKQKbfW5bJ2nBBCgtiZZAvZXiavG1%2FQg9aGy03xsZMLHezskGOqUBhDBqBTDxF1f10P1bi51VXfodzrmGyJ4KwTDmQOKHdcxyH8OG7s9BC7RpycBsyesxf3mhXrlTs7jGcSGSMbkgffhs6%2BXIqh6hxRcek%2F%2F1R0V4ZKqPd2YZ2B9v2F9C7xmccC1fHSaswp4knP8tfkS%2F8YinmZc2Usw5KZ7QJvvw4iXg1U4BllSM%2FvYIOcxWmnX1JHFIpG78dW6V7DhwAqic4naE%2Bxna&X-Amz-Signature=67f982fc089cf741e841128be892de8b8bffef588fe89410af9c700da86594d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q3RXJ7R%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T050640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB0914NjAZA6Zd4ZrYL5sTGrmm7fVhmp3h0CJgI9B3NwIgSygqrn4Z%2F7PLX1QOCwCHtgsMLnn6rI%2Bm7bGU9A4NSycq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNExOxmuLT76hCQzzCrcA%2BnNNRCxqsdt82WXIBw9LhLsOoOpBywrZi%2FZvGxTr%2FSxnPRt7IReI6t9eqJlwmrlA%2FSOtFTuvzOkzEgZSZp8ohlNUcoX7B2DaFIsPQsvBGfX0l3Q32aaINF5%2BzQswCvPehbmaofidzjvsoD0hAWc0wpALLADUS8akbeRQdwp%2BMbeUpswshAVgOjLBoXFLGDqkHWpy3qrempSaX4kO%2BonXov3cT1CiuOFgIb4LVO7uNykhoyQbbX%2FNi34Oqu%2BtcVO03gMDJU%2B7lS57DQ2kFS7l6HwluNGK6CJ7ujtqCikQoJ87bZiJ2a4UX5gbJpiTbkRbf72yCfbyjQlEDbwuRBNTEs2EhjWuM6vSGPp0kRt8sm6HZOcRMmlHkeo4xzvTMq%2FDVBNfoS2EFylU3NZOnGRNweyIZgt6UWrVH4gsNEK479m632TIq3PTcXoAl7r4vd%2Fd8ZopMfK%2FSh9Q1lGgZXbLKJMHPenR6C23InH3LnWdtJ8uwwhKfLrDWAqU6NA0M9M8%2F46RMJx4Nbk7GLklnpTfl0z1WNLHz5YNzutnPQIvHJtH71An0MiXpzDCrD92lZfu91CFANldz4G7NjUy8EMKQKbfW5bJ2nBBCgtiZZAvZXiavG1%2FQg9aGy03xsZMLHezskGOqUBhDBqBTDxF1f10P1bi51VXfodzrmGyJ4KwTDmQOKHdcxyH8OG7s9BC7RpycBsyesxf3mhXrlTs7jGcSGSMbkgffhs6%2BXIqh6hxRcek%2F%2F1R0V4ZKqPd2YZ2B9v2F9C7xmccC1fHSaswp4knP8tfkS%2F8YinmZc2Usw5KZ7QJvvw4iXg1U4BllSM%2FvYIOcxWmnX1JHFIpG78dW6V7DhwAqic4naE%2Bxna&X-Amz-Signature=9755074f02281f6e41f347e89a9f7ef7c9d8b9c0bd7c49e44759742aa954ddbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

