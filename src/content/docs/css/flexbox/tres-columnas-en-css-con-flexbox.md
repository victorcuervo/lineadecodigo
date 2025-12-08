---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAQNNROG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDblf%2BhJpKZLTivwnpfKRztiePNwlS88J10dWBFOWrQSAiA5O5PKW7hHmlUym5pYI62kWh1X7dLVDRx4x%2B%2FteZpX8iqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwajMVDwM3oAW%2Fsx5KtwDShdIiXRkXVDhn9f2ceELu7aW7K47stIN3gxMDkinLbrVTp%2F4oFDuI1UnDdF9ky3243lz0QnpEZ98Q6EsV1cO0mnWzc2H3tUtVJNK0%2BWmFDbsa40qY12flckFSbMs2%2FXYBlwWTXrhrev%2BqNzO6srim5L4dUau4DxwBfHju7V2%2Btk6bgRjV9o4YVxwILnVEpqiY0qM7TNZqu34foL6YBWOanb0qxOXVt4029t%2Fsu6u2tcc4UOIs4C12R3AcQk6u3%2FuKe5JrI2NGfDT8oHcAxnNy0%2F%2BhnI3xkpNg97x95xh74FFFFH2p67HJQF6vUt%2FmdWi0wkYFxTc86uOIKvAUIu0lf3Qsh7F7lAPXa06ozJ3v1vmTE%2B9AcUNWmKFeQhj9Tjyu2KaYYbwFIUktOxeF3u3pWYN3TcakZhnk8y%2FlRq6njvdqtCZoHutuFTe0wmvBqQ5ObIg6tjarTKqrNoE7g4S8UnoiZE4ZSgxJ4nSo%2F4I6%2B0B1JkJETsqlkZcSW59TrEcFpMFAGA0ETOUC5dNOmGEIhBmorlI0ChyVZQXX0SFLgZwkm%2FZ2fsAsgEugIzFfpAG7Qv22GqdzfUN5MfUbTEeU4viHZVilbvc6rJ1HWAallzARuLcwW%2Bt%2BRxrNuMw0sLbyQY6pgFRxogwNa8%2BIerI%2F47kDjO%2FFOsMB%2FtGPBqj1Ygpzh35I3cQIPQHPnxW1FxN71DtYU6FA0Yx15wPxZLaCa%2BJn8WyQKUN6wBYJvRQFc27JMnktTh8dW%2B8QBzQOS2QqHWrC6W7V6fn1SoXiNn84p%2BTQgcA%2FbvLVHKwZdTFV8y4g5rSAcTXA0CNAFXvBiPRRsrNRYiHUOcqgDDDNyVYgWPMhLmOi8nCxk36&X-Amz-Signature=4bee6efbf86cd88a193d802495e1554a6907f675772a8751004f0d02e388c807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAQNNROG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDblf%2BhJpKZLTivwnpfKRztiePNwlS88J10dWBFOWrQSAiA5O5PKW7hHmlUym5pYI62kWh1X7dLVDRx4x%2B%2FteZpX8iqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwajMVDwM3oAW%2Fsx5KtwDShdIiXRkXVDhn9f2ceELu7aW7K47stIN3gxMDkinLbrVTp%2F4oFDuI1UnDdF9ky3243lz0QnpEZ98Q6EsV1cO0mnWzc2H3tUtVJNK0%2BWmFDbsa40qY12flckFSbMs2%2FXYBlwWTXrhrev%2BqNzO6srim5L4dUau4DxwBfHju7V2%2Btk6bgRjV9o4YVxwILnVEpqiY0qM7TNZqu34foL6YBWOanb0qxOXVt4029t%2Fsu6u2tcc4UOIs4C12R3AcQk6u3%2FuKe5JrI2NGfDT8oHcAxnNy0%2F%2BhnI3xkpNg97x95xh74FFFFH2p67HJQF6vUt%2FmdWi0wkYFxTc86uOIKvAUIu0lf3Qsh7F7lAPXa06ozJ3v1vmTE%2B9AcUNWmKFeQhj9Tjyu2KaYYbwFIUktOxeF3u3pWYN3TcakZhnk8y%2FlRq6njvdqtCZoHutuFTe0wmvBqQ5ObIg6tjarTKqrNoE7g4S8UnoiZE4ZSgxJ4nSo%2F4I6%2B0B1JkJETsqlkZcSW59TrEcFpMFAGA0ETOUC5dNOmGEIhBmorlI0ChyVZQXX0SFLgZwkm%2FZ2fsAsgEugIzFfpAG7Qv22GqdzfUN5MfUbTEeU4viHZVilbvc6rJ1HWAallzARuLcwW%2Bt%2BRxrNuMw0sLbyQY6pgFRxogwNa8%2BIerI%2F47kDjO%2FFOsMB%2FtGPBqj1Ygpzh35I3cQIPQHPnxW1FxN71DtYU6FA0Yx15wPxZLaCa%2BJn8WyQKUN6wBYJvRQFc27JMnktTh8dW%2B8QBzQOS2QqHWrC6W7V6fn1SoXiNn84p%2BTQgcA%2FbvLVHKwZdTFV8y4g5rSAcTXA0CNAFXvBiPRRsrNRYiHUOcqgDDDNyVYgWPMhLmOi8nCxk36&X-Amz-Signature=d82cc7398370dd8cd1f2b596b8a307ea5ffbd5375dafaf505ec8ea6d3f406a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

