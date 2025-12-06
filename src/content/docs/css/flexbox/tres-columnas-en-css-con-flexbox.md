---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBFEKXDV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1CpBqwaLrg7mLx0I5%2B8NvR4WJDBbU7XUDPhsF%2B3NgWAiBf%2F3WPP8rGB1gEw0vde8duAPllRRlirgldzeXOJeVv3Sr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMHxAMSwhh0defVt5cKtwDTb%2FOynJG8pZPiIIOL3CkV%2BwfeOnMM%2B2al1MjB5T4j1HP7gdYtCzk6A%2FQjPvE9ah5Vk2VDencyXw%2FlOqKf%2BmwhyOABmM608lDabokpExvQhl69x9H0l4gmxy3PmREaTsY9PRAhWzlSYK6DN0Dfrl6OrbXFxvVjuFgag209l%2BbOcKHfv0HXq5ccZRPiRqAIWf7x5Ff4n85RNeFTUiximNE12jl3Z53eD6bas4VO2tYn4mm273YYzwqkWprJPy7VrO8%2Ffa1wxijM1eNLA84SZAsjN6Q2BOCD15XQDdnlhSCJtTou%2B0iqoKHD%2FcPjLXF5MSoLk9vjy6SP4r7OZy3pwC%2FkCJIWyDBeVS8i3%2FdWfJN%2BwcMFehloZy3UXf9UNYHh%2F3aBeM82FRETrsQEoTB93DHBxJMi7piJ5RRvst52kDBEfuB3Wd9zmrD0Ibjz7ltlyh2ulHrQZ29JEJdHmNcm1ldtQjCHxLikBr0lsqy1HT0CIETWDMrtK4q8NVr164nL4wAjCWkkVlhhWrkClkSlwKM4GBc9uumDxZxdX%2Be5QGlKyz2WWEcAAluBEfLs4EBFs1Ke2bNqZi2rLEmzcWx0ePniM2bN1VmxMcmXEjmffS6UMUX2rPPl4Blz01bfh4w793OyQY6pgF34b2Tm8b9Y9nRBuuqlOSB%2FjpGEoYz8ua5Y4WngxXrN1Z%2FOOEkrVQmMqycYBbpWQ5qFDDGTGt6WKc0PCh4EUvpIh%2B4hK7suTJa4a3yKl5WBfP%2FfUZMFEivtixgFT78TWoviM0vCSizgYWB%2FkDTIv%2FDzEWCZU%2FWp1z7zWhmzg6unbAdJC7Qq7oLteno%2B%2BwilLsLHlwYXIzvGut9E8E7M6p9UH7YMpUs&X-Amz-Signature=1d7b49d02b618c0b169a3c8a886913c1bd0b838540d94b4747439df6971314d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBFEKXDV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB1CpBqwaLrg7mLx0I5%2B8NvR4WJDBbU7XUDPhsF%2B3NgWAiBf%2F3WPP8rGB1gEw0vde8duAPllRRlirgldzeXOJeVv3Sr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMHxAMSwhh0defVt5cKtwDTb%2FOynJG8pZPiIIOL3CkV%2BwfeOnMM%2B2al1MjB5T4j1HP7gdYtCzk6A%2FQjPvE9ah5Vk2VDencyXw%2FlOqKf%2BmwhyOABmM608lDabokpExvQhl69x9H0l4gmxy3PmREaTsY9PRAhWzlSYK6DN0Dfrl6OrbXFxvVjuFgag209l%2BbOcKHfv0HXq5ccZRPiRqAIWf7x5Ff4n85RNeFTUiximNE12jl3Z53eD6bas4VO2tYn4mm273YYzwqkWprJPy7VrO8%2Ffa1wxijM1eNLA84SZAsjN6Q2BOCD15XQDdnlhSCJtTou%2B0iqoKHD%2FcPjLXF5MSoLk9vjy6SP4r7OZy3pwC%2FkCJIWyDBeVS8i3%2FdWfJN%2BwcMFehloZy3UXf9UNYHh%2F3aBeM82FRETrsQEoTB93DHBxJMi7piJ5RRvst52kDBEfuB3Wd9zmrD0Ibjz7ltlyh2ulHrQZ29JEJdHmNcm1ldtQjCHxLikBr0lsqy1HT0CIETWDMrtK4q8NVr164nL4wAjCWkkVlhhWrkClkSlwKM4GBc9uumDxZxdX%2Be5QGlKyz2WWEcAAluBEfLs4EBFs1Ke2bNqZi2rLEmzcWx0ePniM2bN1VmxMcmXEjmffS6UMUX2rPPl4Blz01bfh4w793OyQY6pgF34b2Tm8b9Y9nRBuuqlOSB%2FjpGEoYz8ua5Y4WngxXrN1Z%2FOOEkrVQmMqycYBbpWQ5qFDDGTGt6WKc0PCh4EUvpIh%2B4hK7suTJa4a3yKl5WBfP%2FfUZMFEivtixgFT78TWoviM0vCSizgYWB%2FkDTIv%2FDzEWCZU%2FWp1z7zWhmzg6unbAdJC7Qq7oLteno%2B%2BwilLsLHlwYXIzvGut9E8E7M6p9UH7YMpUs&X-Amz-Signature=329fce84cae267c22f2e7e621b8f6a7a673341bbeab13bb45ea5429427a2bc9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

