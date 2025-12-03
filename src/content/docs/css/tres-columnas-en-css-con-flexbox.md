---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQA5PYJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICU1q6ijzJrNJ%2F7ZY11blT%2BT3r63Ky9w1qvzqjQsBmYrAiBsM%2F1rZuhq%2BrUO0qwqZmdgLfaSDtT%2BL7vVrVVfxnH0vyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMXukBdfYgNnbmawbtKtwDG6cvENH8%2BAQE1YpZoD9F%2BfNQu3inFI6VN5ZboDAmQnfNrO8HlUGd5cLaEUUQoDf29sMo50ufmAJNuG%2BvNMAn%2Fy5daZOjcBFS5QXV3ENKHDBXvCznElm3oR88l3MNlJOugBpZdjevOmGszk9kUF91HnKwS%2BTiW66Zgdd6MFWeC%2Bq3flC50gemIIY%2B5zutWHYUWlSYRXOTs4%2FEmNRIZXQeaE29cibqMOjbhKzZZBouCeeSGqDDkSm16zb5WsOlBZsuhb1wQSoDNZ55P3Q2P4mzytmT0cEyOfluM%2Bsc5ueorYzDh4m%2BPXKlr04kcxMNX9wmuvPm0Yzs%2F%2Fy6KHPax8vNwSk8hRL3m7%2FSwe%2BhljA1ZeXwkqVTSS1q5wcuParap7zkjPHNOAOFO%2BTkO1r%2BICJVcchiFDnP92n92%2B0UcTfznv%2B9AcDFxmCLgZm89J5%2FWoE53spNSUNgmu76izryD2h71Zno6bjY8FlVARD1ulCF6pAoFj5IXxj0vwaOOindVpXrW6tOo%2BgU1HVdN0OQ0yFH3HI6zHpp8scX1Bu9v7Ouum9uPfRCW9qM%2F28LYq1XdoTdAoK%2FfGCn3V%2FqlYgos5nFKXqp9H1Qc7G2MBQXnKE5c5l4PVq%2BGB%2Bz2eGPslcw19zCyQY6pgEaASsoi3kLwxJboRr0vnWv1Q%2BJBGnQUu3Qu1iiQcLvEQK7xArV%2BUzmsxsvctFhtGfRvCUKgANOCDudCxMZy3eYq%2F2I5OHE2ZHwS3SXc3idu6dXCTiQUNDNa771Y3wDx%2B5uQbAzzYEzHzm4iqOy2SW3Yxv1%2BU6Bc6N1Y5QDf7IX3qUm5owXMkbx5GcF2p%2FgefbGp%2FOZ0tMQJfelpsN3X8fc07Kkn2Sm&X-Amz-Signature=bcbddd06967b96b232b981e1c09febb2ba8355280afc10488ce2b31c11854078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CQA5PYJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCICU1q6ijzJrNJ%2F7ZY11blT%2BT3r63Ky9w1qvzqjQsBmYrAiBsM%2F1rZuhq%2BrUO0qwqZmdgLfaSDtT%2BL7vVrVVfxnH0vyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMXukBdfYgNnbmawbtKtwDG6cvENH8%2BAQE1YpZoD9F%2BfNQu3inFI6VN5ZboDAmQnfNrO8HlUGd5cLaEUUQoDf29sMo50ufmAJNuG%2BvNMAn%2Fy5daZOjcBFS5QXV3ENKHDBXvCznElm3oR88l3MNlJOugBpZdjevOmGszk9kUF91HnKwS%2BTiW66Zgdd6MFWeC%2Bq3flC50gemIIY%2B5zutWHYUWlSYRXOTs4%2FEmNRIZXQeaE29cibqMOjbhKzZZBouCeeSGqDDkSm16zb5WsOlBZsuhb1wQSoDNZ55P3Q2P4mzytmT0cEyOfluM%2Bsc5ueorYzDh4m%2BPXKlr04kcxMNX9wmuvPm0Yzs%2F%2Fy6KHPax8vNwSk8hRL3m7%2FSwe%2BhljA1ZeXwkqVTSS1q5wcuParap7zkjPHNOAOFO%2BTkO1r%2BICJVcchiFDnP92n92%2B0UcTfznv%2B9AcDFxmCLgZm89J5%2FWoE53spNSUNgmu76izryD2h71Zno6bjY8FlVARD1ulCF6pAoFj5IXxj0vwaOOindVpXrW6tOo%2BgU1HVdN0OQ0yFH3HI6zHpp8scX1Bu9v7Ouum9uPfRCW9qM%2F28LYq1XdoTdAoK%2FfGCn3V%2FqlYgos5nFKXqp9H1Qc7G2MBQXnKE5c5l4PVq%2BGB%2Bz2eGPslcw19zCyQY6pgEaASsoi3kLwxJboRr0vnWv1Q%2BJBGnQUu3Qu1iiQcLvEQK7xArV%2BUzmsxsvctFhtGfRvCUKgANOCDudCxMZy3eYq%2F2I5OHE2ZHwS3SXc3idu6dXCTiQUNDNa771Y3wDx%2B5uQbAzzYEzHzm4iqOy2SW3Yxv1%2BU6Bc6N1Y5QDf7IX3qUm5owXMkbx5GcF2p%2FgefbGp%2FOZ0tMQJfelpsN3X8fc07Kkn2Sm&X-Amz-Signature=9f2d6476ee8faee71be92e469a72b0d89d4a04d1b65f63f91aeacb0e3c42a8f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

