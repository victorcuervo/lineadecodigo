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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S453QEDE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC2lCnVPifZPD1s1zM3g56Fo%2B6XFjf%2FvNXGVNq5D%2ByJEwIgTOPOBfkFrdbyL%2F4iZ7nlchRWAkVI2xdAXKZjH%2B9wkoAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDD0bEVVWOpm8%2Bpm71ircAzgGjDtDjamICMH6Yt5jKmwEP3%2FYXglWkbkgl7fk268lsuLx9jBbtjgQLfzU%2B2tCHBb52JOBWxBQYLgup%2BU%2FZYLSBKxO5MPm3JUilSb6alF2fs4sXl6%2FigRaVROJsfHPkA9677petZnHgxx4zGfW1Bg51MQ75QnwaYQ2VDSRGQOmEXwg3g%2Fk7L8fJJrLY%2BqEd9EJAPsCyAUo%2FfWyv6AOWo9R%2FNR5577B6SJHnXB7btQDrXT7FsbjXlOlF3kYprwRd2CxKSO4i9lcKOoPcKob4XFvTDmzqyjBMDvMCYSrOzYiR4FRdShTFkHyYQONiymRbYMgKgWc8z2hPCp1ujSTUZGr%2Fi3nPGO9rphGmvHnZZZP45Lg0g4P22bmkLZ76hed9rkOIE%2Bgye8odVmKaGprl25Dikl6rILbGAlONs5slZBLNCWFAtSojmAHbTmpojv6N7vXymLtxQ%2BsbsqwQJc5v7Jl%2F8Kbr0wn9%2FK%2FbSvpD9jbIdsWWKUi3IOAOrZ2K3ooFQpBjsHLd7Kx8iyTUHl8bVnuexwMifKBBW0iun%2FPDvqHszUg2vLtPjkSMil%2B3x6XbAbcPcUANGpN4nzBjE9Gf%2FDYIk3WhtMM2gbIYArzGsDIA7d0jyQcd0h9TiyfMIuVvskGOqUBrv9rLN1%2Fc1PXo1zlcG3RzHa6KHyeF3aF%2BqKNrBIKBQXZR58fJ7VHDGUugXkqclMG4l5FxaFSboIuRdzgXQ5yqdb839TiqKXromR0oMGVh1MOCLn9dvm825ler2Lw2QQ3xQCbOaEeo%2FRGMiR97%2Bs2flDUhXWQD8y6BfNWOBsmqsLC8tZVfbSz2xKslHNpquT4EV4TyK4cIIlJpcRg5MMTTZ2Lhxse&X-Amz-Signature=234b03dc60c1d143c46975b40947edd906114bf54e1a6cf34f6af3298f1fd3c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S453QEDE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC2lCnVPifZPD1s1zM3g56Fo%2B6XFjf%2FvNXGVNq5D%2ByJEwIgTOPOBfkFrdbyL%2F4iZ7nlchRWAkVI2xdAXKZjH%2B9wkoAq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDD0bEVVWOpm8%2Bpm71ircAzgGjDtDjamICMH6Yt5jKmwEP3%2FYXglWkbkgl7fk268lsuLx9jBbtjgQLfzU%2B2tCHBb52JOBWxBQYLgup%2BU%2FZYLSBKxO5MPm3JUilSb6alF2fs4sXl6%2FigRaVROJsfHPkA9677petZnHgxx4zGfW1Bg51MQ75QnwaYQ2VDSRGQOmEXwg3g%2Fk7L8fJJrLY%2BqEd9EJAPsCyAUo%2FfWyv6AOWo9R%2FNR5577B6SJHnXB7btQDrXT7FsbjXlOlF3kYprwRd2CxKSO4i9lcKOoPcKob4XFvTDmzqyjBMDvMCYSrOzYiR4FRdShTFkHyYQONiymRbYMgKgWc8z2hPCp1ujSTUZGr%2Fi3nPGO9rphGmvHnZZZP45Lg0g4P22bmkLZ76hed9rkOIE%2Bgye8odVmKaGprl25Dikl6rILbGAlONs5slZBLNCWFAtSojmAHbTmpojv6N7vXymLtxQ%2BsbsqwQJc5v7Jl%2F8Kbr0wn9%2FK%2FbSvpD9jbIdsWWKUi3IOAOrZ2K3ooFQpBjsHLd7Kx8iyTUHl8bVnuexwMifKBBW0iun%2FPDvqHszUg2vLtPjkSMil%2B3x6XbAbcPcUANGpN4nzBjE9Gf%2FDYIk3WhtMM2gbIYArzGsDIA7d0jyQcd0h9TiyfMIuVvskGOqUBrv9rLN1%2Fc1PXo1zlcG3RzHa6KHyeF3aF%2BqKNrBIKBQXZR58fJ7VHDGUugXkqclMG4l5FxaFSboIuRdzgXQ5yqdb839TiqKXromR0oMGVh1MOCLn9dvm825ler2Lw2QQ3xQCbOaEeo%2FRGMiR97%2Bs2flDUhXWQD8y6BfNWOBsmqsLC8tZVfbSz2xKslHNpquT4EV4TyK4cIIlJpcRg5MMTTZ2Lhxse&X-Amz-Signature=8931c9291a4f603cf230376bee7192dd723b0ab9137a56c4ba97ea9154382185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

