---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVMHDY76%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDVxSE6KntdKJ8w46O3W9FEulBYeqVodeZc8zixapUjsQIgTBde%2FcRpUJ3cfM%2FYVQUV06A5Xyu3CkFxZBEz8p5eZCMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDaQ9k8H2SvnVJPLdircA31cpUi9jBBEEZU14H3TeyyWe%2BvteZwlzzf9KZDJ9l2%2B4d20qr2H6%2B4v1uXA83XLqvHW5YeQ9aTN9rVLwkqH8KEkrLxKPzY%2B7awRkRg7pdkhFgSRFk%2F%2F8ys7M9l%2F7CSPSRUCf3loUNv6cxDqRy%2BgUNOM1loUo%2BYWPQUDgsRQKmkAmq1iMEK7DkBIcQhGna3E96rM%2BkXOgUMiTkVPtUv%2BeVByVIvDJDCFpIgXErRY4lHWf84cmhs9V1KJwkHdl1HoZW3enpO8kear5oz%2BjIDQgh5y5A7KEHohorxMZ3fdVQu2S2FQXP8FUT93GCZfOA4kpVxS814suy6uCJYuSbo4GH57PZOHcc1d2Rbm2Cw9BqpuWdSy2mp1RSiC4gT7RmJi577cTuDuU0BQOEe3LyitZPQmIGz1LgHceLjUdZNN%2FEOGhPFcAe0E0OwZ5j0oJIGrclow0PAN1%2BiXAFy9FlAsXQ0RfRShc9bLkQj148pQ4UDtEC5m9k6IwK9AiMGnqzprUY6Z3pJdxfMdMUNgFNeoOnkMiOSSKWcWRGWWgA%2FoMQH415LfNyubOprUOrxqfa6ooeDUdBjKOb8GSPh%2FSCemuDgqoZnxXBQEGKFm%2BelyeDNoUGYt2oMaaeGA8bkdMOPTw8kGOqUBTXp305kqCNwxw4fdkqqJ9ev3gykHuh9OozrrJiU3wAbw%2Bl6b5WiVv7fjHl%2BW1Ns%2Fk%2BwLWv0C%2FTire2jDfOAGsKJnWuT4gTlrJ0wklOvFA6oiehF8Frek1ihsZbZxGsWipHqkXLmbUGqWtZjCPvpsjp%2Be7Mj1iqoIh7Z2UrakZYMdRefl122KZ4xx8EmmqI1S6IqD%2FVhohApnj7%2Bt15oLLz6v1pz6&X-Amz-Signature=cfb499c8972c300b39a5e413dc7bb329d8aa1e2b88b5f9e5f0c8c0cc9e719310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVMHDY76%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDVxSE6KntdKJ8w46O3W9FEulBYeqVodeZc8zixapUjsQIgTBde%2FcRpUJ3cfM%2FYVQUV06A5Xyu3CkFxZBEz8p5eZCMq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDDaQ9k8H2SvnVJPLdircA31cpUi9jBBEEZU14H3TeyyWe%2BvteZwlzzf9KZDJ9l2%2B4d20qr2H6%2B4v1uXA83XLqvHW5YeQ9aTN9rVLwkqH8KEkrLxKPzY%2B7awRkRg7pdkhFgSRFk%2F%2F8ys7M9l%2F7CSPSRUCf3loUNv6cxDqRy%2BgUNOM1loUo%2BYWPQUDgsRQKmkAmq1iMEK7DkBIcQhGna3E96rM%2BkXOgUMiTkVPtUv%2BeVByVIvDJDCFpIgXErRY4lHWf84cmhs9V1KJwkHdl1HoZW3enpO8kear5oz%2BjIDQgh5y5A7KEHohorxMZ3fdVQu2S2FQXP8FUT93GCZfOA4kpVxS814suy6uCJYuSbo4GH57PZOHcc1d2Rbm2Cw9BqpuWdSy2mp1RSiC4gT7RmJi577cTuDuU0BQOEe3LyitZPQmIGz1LgHceLjUdZNN%2FEOGhPFcAe0E0OwZ5j0oJIGrclow0PAN1%2BiXAFy9FlAsXQ0RfRShc9bLkQj148pQ4UDtEC5m9k6IwK9AiMGnqzprUY6Z3pJdxfMdMUNgFNeoOnkMiOSSKWcWRGWWgA%2FoMQH415LfNyubOprUOrxqfa6ooeDUdBjKOb8GSPh%2FSCemuDgqoZnxXBQEGKFm%2BelyeDNoUGYt2oMaaeGA8bkdMOPTw8kGOqUBTXp305kqCNwxw4fdkqqJ9ev3gykHuh9OozrrJiU3wAbw%2Bl6b5WiVv7fjHl%2BW1Ns%2Fk%2BwLWv0C%2FTire2jDfOAGsKJnWuT4gTlrJ0wklOvFA6oiehF8Frek1ihsZbZxGsWipHqkXLmbUGqWtZjCPvpsjp%2Be7Mj1iqoIh7Z2UrakZYMdRefl122KZ4xx8EmmqI1S6IqD%2FVhohApnj7%2Bt15oLLz6v1pz6&X-Amz-Signature=c20d9292a6936e928d977fbe5f1308deb73b6a947c1ea41792faff1f33cd8808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

