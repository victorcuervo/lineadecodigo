---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SF6NSCN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCUm2PwXUV3QnnZLwuxkkBlaO1P1p6OBKf6srqsk7RoAIhAPuq6e6Kf4eHUjOtBgS%2F%2FRPfblXRYMf3V8r%2FGQWjLhyXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Fttl6F2Q4aLO5U%2Bgq3AO1IuJ5oxXXTgujnL1BYq2YEowZHrI3%2Bu5gbfxELquUF0Ob%2B5%2FJt5RhhDCzxIKVDFDlgj7FuGRJ9ibhHMAs0UlK6R8khbbF80ek2QrdEw%2FsyJWG9APl6LROncA7rAp3ObsLKEoRoC6mjpxP4mOMfRxNmGMTcuV6ipaXQOExy95pycAoVU%2Bbd24F7NH%2BbQH%2B4YAUFNhsd7xGxee6d2coDyoQDxYCw%2BpO7KJUCCgWStfH7EU1wQAL2%2Ba%2B3e3q57bSex9rKIIF4YBQtddUxL6fL5RmLUWgIgW40YiIU7REk9yAAqNqHeewSAVHGFG1qlMxB4JFSLKi7O3u0CAUhULcJSddPUOX5WfLhq2Yh4hAKNqphtekRjELWh1iL2Hmt7678MUDHjOHJhkzzk7UQ4CuUcRIdpIhXlVSeYyiINEbo4fFeUorUM78IEppjx36S05vUcYhjBl%2BlLEU2hDj0MVAZFHFwyKRw%2Bt%2BLn7zwY850o2l6aNH1QYmRwICvBjaNQKDfV6TCaLgzEDrnB2rqFb6lji5vbkOTuiq2GnmAOtnlIUKWx8v6%2BHmCb3fo%2F8Odae7l1ydj6INGrJOJ%2FePgWN22SnJDQa1GMSzel73%2Fp71zESfBUkW0SzbCFJG7vYs9zDM%2FdLJBjqkAVXoq3qobF0zLeuiHVzxOcaM8sOltxhgbX%2BSpDOtmYdl14otKYmVB4Fr7aI1Mo0KGGbRCqZd5esN9mV3ovZL9HMhQ%2B78q6KtuGr33J3ypDiypU0GfJGuhI7i1wA3JZKNsqweBT50N1RW%2FuDWLsn%2FONuP4xJICmdWs%2BxD04L%2BOPzOwZ3zYUbW0xJIpxcb%2Bi8ZGcT4Ec9MpX8JG%2Fa7e92n7nPjsc3s&X-Amz-Signature=b18f4ed5f6ccb14c837c0184fa7a1253d206c3cdbd5a1948f4f819d0777ccb63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SF6NSCN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T024108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCUm2PwXUV3QnnZLwuxkkBlaO1P1p6OBKf6srqsk7RoAIhAPuq6e6Kf4eHUjOtBgS%2F%2FRPfblXRYMf3V8r%2FGQWjLhyXKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2Fttl6F2Q4aLO5U%2Bgq3AO1IuJ5oxXXTgujnL1BYq2YEowZHrI3%2Bu5gbfxELquUF0Ob%2B5%2FJt5RhhDCzxIKVDFDlgj7FuGRJ9ibhHMAs0UlK6R8khbbF80ek2QrdEw%2FsyJWG9APl6LROncA7rAp3ObsLKEoRoC6mjpxP4mOMfRxNmGMTcuV6ipaXQOExy95pycAoVU%2Bbd24F7NH%2BbQH%2B4YAUFNhsd7xGxee6d2coDyoQDxYCw%2BpO7KJUCCgWStfH7EU1wQAL2%2Ba%2B3e3q57bSex9rKIIF4YBQtddUxL6fL5RmLUWgIgW40YiIU7REk9yAAqNqHeewSAVHGFG1qlMxB4JFSLKi7O3u0CAUhULcJSddPUOX5WfLhq2Yh4hAKNqphtekRjELWh1iL2Hmt7678MUDHjOHJhkzzk7UQ4CuUcRIdpIhXlVSeYyiINEbo4fFeUorUM78IEppjx36S05vUcYhjBl%2BlLEU2hDj0MVAZFHFwyKRw%2Bt%2BLn7zwY850o2l6aNH1QYmRwICvBjaNQKDfV6TCaLgzEDrnB2rqFb6lji5vbkOTuiq2GnmAOtnlIUKWx8v6%2BHmCb3fo%2F8Odae7l1ydj6INGrJOJ%2FePgWN22SnJDQa1GMSzel73%2Fp71zESfBUkW0SzbCFJG7vYs9zDM%2FdLJBjqkAVXoq3qobF0zLeuiHVzxOcaM8sOltxhgbX%2BSpDOtmYdl14otKYmVB4Fr7aI1Mo0KGGbRCqZd5esN9mV3ovZL9HMhQ%2B78q6KtuGr33J3ypDiypU0GfJGuhI7i1wA3JZKNsqweBT50N1RW%2FuDWLsn%2FONuP4xJICmdWs%2BxD04L%2BOPzOwZ3zYUbW0xJIpxcb%2Bi8ZGcT4Ec9MpX8JG%2Fa7e92n7nPjsc3s&X-Amz-Signature=f615a924907bc4eb7d1eec2bde9905010a0f38cdfa67e776a46e18a43eee2569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

