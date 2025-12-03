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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466254BZSDR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIDdbTZxDzmsT1yv8BeuSwkn%2BoSPlp2P9mlX2KvbxZr9SAiEAqJwg0RDtsekaFOwKKSkLmjB8v%2BQ9zbHvBPmFzXu8yd8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGpvgVw3KQ%2By%2BKCe%2FircAyCtkP%2BUHfmcuhCIEFGwBMD3BIoTsZ5Lav5FE8%2FRSEui%2B8VKmhNCX77%2BUSb9eqZWyR3ZAbgaI5aziNN%2BLBEBHWen2tdNNEoTiM0vsDkf3%2BOZg6HfeLAOqG2Maz5QpuNJSlfuPWCZ9yEBwSHp8Ylhzj0jvM2EA3yv1L0HD%2Fd9M3iNK1yO6Gg%2BocCkTnDMMJSSroXM4Ed%2BPacTooxh7SV%2BZZ%2FOxawBewbfQ55lCnuIw5U84aTdclcfMykEPlSFnG6o9gnAjtKC7hfcj7INa0tsw1BXbf6rZ9XJG4Cf6WlGwGUP22aH0Yom5O3W%2Bs4iCXTvJojGCMXt9QoFw6XEgfGDXw4wPXuNiZtj2avsUP7P6rljxFN4tipZB7OnRQJFmPNNsQkn8T0ZKWjw0%2F1WwPxm4knntbiftlVN4S8FijTAoJgDBeHWyVHw7H7AQHhOIXs6K18LmUmkUXyyaJLKDpXUKywy1ZGr3nOhypad3Yrg%2FdtVPNotvJqzP0gxmIxztFgu5tnil7CpuqjfcTrKYVALDeFfWGX57eEo4GhgyY69LEwVrZrplBPTLxAebUUUBiJxfpA33LaMZaG%2B%2FC2vnmHs9tmTQw%2FDRKpMwS5r8Xkm3FdlNbTiH%2FH%2Bp9SumE7pMKjBwckGOqUBVg1%2FKj8P7uUID9aluM1lsWhsqX09K5%2BU%2FZC2pdhY9VzshvPFd8Uus4GFLR0C7p1ZdzCATLBO0MKSznEYDDOkLNlizE%2BW%2F%2Fssm9TpAoaKJTIrQlLWtCEmfEoMT%2FGJ6pPCmGd5Sh3%2Bd%2F8EKY2RJf8Kl%2B3EQgTGq9NcVbmm7dthDlhsh1gP%2FA5xcBjLIKSi9iy9jsF4Mpy%2Bs%2FoKrH8hZo3hlKHoQuFO&X-Amz-Signature=45bb6be087dab3e7b0660cf79e81ef4c020f972b453fb800b69c30242302876d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466254BZSDR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIDdbTZxDzmsT1yv8BeuSwkn%2BoSPlp2P9mlX2KvbxZr9SAiEAqJwg0RDtsekaFOwKKSkLmjB8v%2BQ9zbHvBPmFzXu8yd8q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDGpvgVw3KQ%2By%2BKCe%2FircAyCtkP%2BUHfmcuhCIEFGwBMD3BIoTsZ5Lav5FE8%2FRSEui%2B8VKmhNCX77%2BUSb9eqZWyR3ZAbgaI5aziNN%2BLBEBHWen2tdNNEoTiM0vsDkf3%2BOZg6HfeLAOqG2Maz5QpuNJSlfuPWCZ9yEBwSHp8Ylhzj0jvM2EA3yv1L0HD%2Fd9M3iNK1yO6Gg%2BocCkTnDMMJSSroXM4Ed%2BPacTooxh7SV%2BZZ%2FOxawBewbfQ55lCnuIw5U84aTdclcfMykEPlSFnG6o9gnAjtKC7hfcj7INa0tsw1BXbf6rZ9XJG4Cf6WlGwGUP22aH0Yom5O3W%2Bs4iCXTvJojGCMXt9QoFw6XEgfGDXw4wPXuNiZtj2avsUP7P6rljxFN4tipZB7OnRQJFmPNNsQkn8T0ZKWjw0%2F1WwPxm4knntbiftlVN4S8FijTAoJgDBeHWyVHw7H7AQHhOIXs6K18LmUmkUXyyaJLKDpXUKywy1ZGr3nOhypad3Yrg%2FdtVPNotvJqzP0gxmIxztFgu5tnil7CpuqjfcTrKYVALDeFfWGX57eEo4GhgyY69LEwVrZrplBPTLxAebUUUBiJxfpA33LaMZaG%2B%2FC2vnmHs9tmTQw%2FDRKpMwS5r8Xkm3FdlNbTiH%2FH%2Bp9SumE7pMKjBwckGOqUBVg1%2FKj8P7uUID9aluM1lsWhsqX09K5%2BU%2FZC2pdhY9VzshvPFd8Uus4GFLR0C7p1ZdzCATLBO0MKSznEYDDOkLNlizE%2BW%2F%2Fssm9TpAoaKJTIrQlLWtCEmfEoMT%2FGJ6pPCmGd5Sh3%2Bd%2F8EKY2RJf8Kl%2B3EQgTGq9NcVbmm7dthDlhsh1gP%2FA5xcBjLIKSi9iy9jsF4Mpy%2Bs%2FoKrH8hZo3hlKHoQuFO&X-Amz-Signature=a29eb5064833293eb5037394f3d3d154fc104574bd7282632a9359d2074fae53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

