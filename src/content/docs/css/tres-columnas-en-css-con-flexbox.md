---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOSZHFAL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDIoP7aRXFpAp%2FbGIO25s%2Bd2DqBNF5iJOVBh8DCvsK6VwIgPQ3wNIp62idyIRj6RFRootSiAWjM7XaLev%2FMlbUzqvIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDK8Xxh7XVLW6JDahrSrcA2eJ1xYLMPG1VtFTdNprSLNTGvLFKSRYo3YqKZ2x2PV16%2Fp02faQ0QldWyjoAn7%2BIOgxunblkzQuVk0he9J9lp8%2Bk6nOfT0QS86bft65m6nCYlenw76QRjEDAK%2FUUGOLXhfgU4n1%2F4nck9RrLi5uEQtGRS2KSRmUDkrkq0svBGyqz3jfDSFqcoIbEPSf8XGaXAZ8xzGmpRKCOHJs1MWw8nvSAY6JzojdPZeFCm8qqSqxJDmfbGr6N1zBF%2FhWLj7lB6XHx4SW0Dmx%2BU%2BtBeNLJoXoXvjJz8cKRgOhnYu0ZTw1tIKTLtici91ngWH8kfy1I%2BChH4BO8looHAlH09OWfAlmyI758snKHKW28m2%2FBzaKi4JrDsDGIbjhdMudXXukgB2YnxOl8p9FtesMyxQgFGE%2BK7%2BAss%2F2EKJ4667BRfd3vYkKh1P8EOSLGf8OePayOXdL43HiNhHvll1r%2Bf4shoe0Vm1wWeIjdEIm8Tc%2F73G8tqSr3jT2n5OhBO1g%2FVGyMbdf6TeDxGucmNgUTHwb6mjZMfp9SsXVUqxtoDzSplWEbPO%2BjO1QtfbGsEYpaUYCcVIcS4pQ607NdHXykxpkicBFwzSTW%2BQgoH7ENuIU8X84MK0ttaVauTcsuUVIMOe9wskGOqUBWajPp5U%2BJJ1s1%2B8yBzS7Qh8N9vUbKqlRL4x781h7ftZzLretLCvEI9O%2BzN1nAE8TfJcRxZPF4bWQu912ICTmasxTMSPw3cf5y8Z9PwMxs1ws7vetJ0MTZSY0Lk%2Ba079hDfX0x1MTBQo%2FX67tk9oNOBtE7Mf2weiEh6ZCtxR1s%2FiKkTwsWjkm5GZN7A4VPnS0UCxVuakOesU4XklZELkF3Ve6gegH&X-Amz-Signature=eb3fec0149209d4cd0e713b321e4e7d9c7ea640866ba694d1478582c2ad8ecf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOSZHFAL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T210845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDIoP7aRXFpAp%2FbGIO25s%2Bd2DqBNF5iJOVBh8DCvsK6VwIgPQ3wNIp62idyIRj6RFRootSiAWjM7XaLev%2FMlbUzqvIq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDK8Xxh7XVLW6JDahrSrcA2eJ1xYLMPG1VtFTdNprSLNTGvLFKSRYo3YqKZ2x2PV16%2Fp02faQ0QldWyjoAn7%2BIOgxunblkzQuVk0he9J9lp8%2Bk6nOfT0QS86bft65m6nCYlenw76QRjEDAK%2FUUGOLXhfgU4n1%2F4nck9RrLi5uEQtGRS2KSRmUDkrkq0svBGyqz3jfDSFqcoIbEPSf8XGaXAZ8xzGmpRKCOHJs1MWw8nvSAY6JzojdPZeFCm8qqSqxJDmfbGr6N1zBF%2FhWLj7lB6XHx4SW0Dmx%2BU%2BtBeNLJoXoXvjJz8cKRgOhnYu0ZTw1tIKTLtici91ngWH8kfy1I%2BChH4BO8looHAlH09OWfAlmyI758snKHKW28m2%2FBzaKi4JrDsDGIbjhdMudXXukgB2YnxOl8p9FtesMyxQgFGE%2BK7%2BAss%2F2EKJ4667BRfd3vYkKh1P8EOSLGf8OePayOXdL43HiNhHvll1r%2Bf4shoe0Vm1wWeIjdEIm8Tc%2F73G8tqSr3jT2n5OhBO1g%2FVGyMbdf6TeDxGucmNgUTHwb6mjZMfp9SsXVUqxtoDzSplWEbPO%2BjO1QtfbGsEYpaUYCcVIcS4pQ607NdHXykxpkicBFwzSTW%2BQgoH7ENuIU8X84MK0ttaVauTcsuUVIMOe9wskGOqUBWajPp5U%2BJJ1s1%2B8yBzS7Qh8N9vUbKqlRL4x781h7ftZzLretLCvEI9O%2BzN1nAE8TfJcRxZPF4bWQu912ICTmasxTMSPw3cf5y8Z9PwMxs1ws7vetJ0MTZSY0Lk%2Ba079hDfX0x1MTBQo%2FX67tk9oNOBtE7Mf2weiEh6ZCtxR1s%2FiKkTwsWjkm5GZN7A4VPnS0UCxVuakOesU4XklZELkF3Ve6gegH&X-Amz-Signature=390cf59ecb269c86885cb466bb47590d1308f21136785ed6607a7fb912e77456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

