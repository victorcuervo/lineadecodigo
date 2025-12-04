---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW3Y6YLF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T110939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBxzn2gdAkb%2FZILevcoU8pMY6OJ2yVck2hN%2Fb6DZEltkAiEA5LiS6hdj3Ky5Oh91WNJWVG6qRg%2F0bVoYj3Hh7r71Te8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLUdg6X6fI91noWx%2FSrcAx6Q8%2FsKtcrbqclsvT6DkdWPCpx1UaqZjEr3UaHHxDACZ9KLxlgxgoWa%2FIJoFB7DXARWV0RJtUn26rXQzzNiAJnfBINuCAv6WHVrWjkRCxpojJ2LvhsW2mGtxxlNlVBvdGI6Dg%2F4C6gdD%2FKaHwvb9T9MpQWrTKBlDHVOirJdhPWh978Z3EuK0D7HfOfJ8uLOnaDrkkPeD5Sa9QPg9LwGhUASWhsayHfve3rjJGMOznPfYMcFIFnV3qT%2FqAjwd7EXWuQ0dT2tXbIHXCLu4yFQSNkLoQPNpi%2FG3HQYUdHMkJM3BUam82NnLr5kvI9funtAblpipIQg2W7reGsmez0CiOTS6iJ6WlBb1I%2Bdbz59bXsDZRtVYAux%2BOKGw%2Bk5x6rwy3SlKyjTdQOQUvVM71HSHxfnuY5TUFdrwLcUM506Yf6Bntn4cdawEer6JJwH2jQl20HX03Yr5sJA9jnCOErauXAMApobJ3ThzdLOdK7BB0WQBThq52CdqJoMFNaBhUqsquPkbHKiJWt%2BFF3SGU7Sf7gAXvLTcvV5i3kOcAuPeXlh%2BYlETfwuAz3%2BQF7zz5g8X5BqzO%2BGTZ5GWwavjwLfnqZem772G09gGp51wOXUSA7W2e1Pcw%2BTK8zSBxEEMObJxckGOqUBszYsyERcHPcW4cEVKqllgTVpH9ta9NPpzJI1a9Uk%2BTN7KdNkrJlhWy%2Fi%2FH%2FoJmPPUDY45stMTfUCAx2b7PMiXSrMKTkL791Xn16KxmDmeGWXYdi62kcsGY8R32jFWd6Aprp%2BncBanKo5n1%2BANpJ%2BTNWo8G5ff6WajDI9sOfqc7fcAqeFdQ8jO1Joq6jJ%2BVCfw4ED2ToUVkj9ngE2bkqWeC4ZI%2FwE&X-Amz-Signature=0cdf4c038199e7ea385226cd388322d8cd3eae8b745a9b435f7db64a04554bc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW3Y6YLF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T110939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIBxzn2gdAkb%2FZILevcoU8pMY6OJ2yVck2hN%2Fb6DZEltkAiEA5LiS6hdj3Ky5Oh91WNJWVG6qRg%2F0bVoYj3Hh7r71Te8q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLUdg6X6fI91noWx%2FSrcAx6Q8%2FsKtcrbqclsvT6DkdWPCpx1UaqZjEr3UaHHxDACZ9KLxlgxgoWa%2FIJoFB7DXARWV0RJtUn26rXQzzNiAJnfBINuCAv6WHVrWjkRCxpojJ2LvhsW2mGtxxlNlVBvdGI6Dg%2F4C6gdD%2FKaHwvb9T9MpQWrTKBlDHVOirJdhPWh978Z3EuK0D7HfOfJ8uLOnaDrkkPeD5Sa9QPg9LwGhUASWhsayHfve3rjJGMOznPfYMcFIFnV3qT%2FqAjwd7EXWuQ0dT2tXbIHXCLu4yFQSNkLoQPNpi%2FG3HQYUdHMkJM3BUam82NnLr5kvI9funtAblpipIQg2W7reGsmez0CiOTS6iJ6WlBb1I%2Bdbz59bXsDZRtVYAux%2BOKGw%2Bk5x6rwy3SlKyjTdQOQUvVM71HSHxfnuY5TUFdrwLcUM506Yf6Bntn4cdawEer6JJwH2jQl20HX03Yr5sJA9jnCOErauXAMApobJ3ThzdLOdK7BB0WQBThq52CdqJoMFNaBhUqsquPkbHKiJWt%2BFF3SGU7Sf7gAXvLTcvV5i3kOcAuPeXlh%2BYlETfwuAz3%2BQF7zz5g8X5BqzO%2BGTZ5GWwavjwLfnqZem772G09gGp51wOXUSA7W2e1Pcw%2BTK8zSBxEEMObJxckGOqUBszYsyERcHPcW4cEVKqllgTVpH9ta9NPpzJI1a9Uk%2BTN7KdNkrJlhWy%2Fi%2FH%2FoJmPPUDY45stMTfUCAx2b7PMiXSrMKTkL791Xn16KxmDmeGWXYdi62kcsGY8R32jFWd6Aprp%2BncBanKo5n1%2BANpJ%2BTNWo8G5ff6WajDI9sOfqc7fcAqeFdQ8jO1Joq6jJ%2BVCfw4ED2ToUVkj9ngE2bkqWeC4ZI%2FwE&X-Amz-Signature=050c0be0d9f1c894fd65b689986c199fc01aaeda89fd7a6d47a5dde4e1a7007e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

