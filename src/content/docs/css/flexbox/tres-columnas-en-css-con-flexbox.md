---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A4CHEEY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICt7QoVHXTKeP1f%2BRw55bnvdEbCeapbJM4cUaYIwgsFwAiB2gBmDsAIDulUgFHUq59Ycrf0oqWCZDguvG3ngX9LYeCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMDkZg0vbU0fvXdqCbKtwDi8JW5DzkU41Nv5ZTf8DXIWszQnfMRPd%2FodyZ80poWkqSdi2eYQYbXbtPGRVZ05Xd2bBW%2BMYBELWo9ldyVRwxPI0IK1b3s3J655ITRiK%2FBE4Oo%2BSorp0dTixG2YQoJmNp1Jup8KTooaGJ61MMTq9A3fg6kGsOytAutKfTrNMq%2BnBLg6q%2FxVSLPRPrGqS3tYJdGvx1LnJ1l31ePFpn5HW0yBg3Ju1eyLTarxZJh%2BkBwBTIzonEq0eaFBddbIi92XDfs7NlajzOiymy3rngwMXeYvqqAo2ngq0i3gipIDklCiepVqPBRb5ILbFZl%2FXQQx2Loo020hlb7MoZ4uy76oj31Eea6XA4qS072pJAQzkyEpKeooerHkJWwKeuUvFXi0pmVFMReuwIYGPtBLLHiNPOxFl5boMQ%2B6%2FhKdPZ8eEeUKCzs3I%2FyaO7Zjund4dOTybLbvMVwF8v6m3DZX%2F54lulejmaMmz1j05v%2FNOHwzKIRVS1a4PixagmmsfnF36z39tktByLns%2FEUUg05hnR5%2BeOP5u0XVeguHQNDhaSG%2FS8%2BWMNWw9dMc8yoAKZGIdwxaheFm5DAUAb9I04%2BBxuiRyUWAG3U9cKGNK5DHIxUW48Kt0jhoKmz%2FgCGFJ%2BHsgwzqbQyQY6pgFQ4lDg2HBW93cbCM0qD5Iv8vWdKWoLAEroM0n2oWf3DJyxqzPMib5OEAymqmWen0BbOncYRxElmh9bhcaxVf8XCZgZxJ44v%2Fup8sc30qttUeak23OygzANXfSFkWwpLd8aDjlSROg1Epd%2BuPPfO6F4xPcNTZuiv5kGbSuKWm6YUGVrU4HlvhQXmDYbDbp2FEvdkkBw3QsD8IrrchtULv8kubDVKSUW&X-Amz-Signature=39b7a2c4021230e7f6cc09b2cb08fb92bc0ec29fc714f246104f1c8a209b5d85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A4CHEEY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICt7QoVHXTKeP1f%2BRw55bnvdEbCeapbJM4cUaYIwgsFwAiB2gBmDsAIDulUgFHUq59Ycrf0oqWCZDguvG3ngX9LYeCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMDkZg0vbU0fvXdqCbKtwDi8JW5DzkU41Nv5ZTf8DXIWszQnfMRPd%2FodyZ80poWkqSdi2eYQYbXbtPGRVZ05Xd2bBW%2BMYBELWo9ldyVRwxPI0IK1b3s3J655ITRiK%2FBE4Oo%2BSorp0dTixG2YQoJmNp1Jup8KTooaGJ61MMTq9A3fg6kGsOytAutKfTrNMq%2BnBLg6q%2FxVSLPRPrGqS3tYJdGvx1LnJ1l31ePFpn5HW0yBg3Ju1eyLTarxZJh%2BkBwBTIzonEq0eaFBddbIi92XDfs7NlajzOiymy3rngwMXeYvqqAo2ngq0i3gipIDklCiepVqPBRb5ILbFZl%2FXQQx2Loo020hlb7MoZ4uy76oj31Eea6XA4qS072pJAQzkyEpKeooerHkJWwKeuUvFXi0pmVFMReuwIYGPtBLLHiNPOxFl5boMQ%2B6%2FhKdPZ8eEeUKCzs3I%2FyaO7Zjund4dOTybLbvMVwF8v6m3DZX%2F54lulejmaMmz1j05v%2FNOHwzKIRVS1a4PixagmmsfnF36z39tktByLns%2FEUUg05hnR5%2BeOP5u0XVeguHQNDhaSG%2FS8%2BWMNWw9dMc8yoAKZGIdwxaheFm5DAUAb9I04%2BBxuiRyUWAG3U9cKGNK5DHIxUW48Kt0jhoKmz%2FgCGFJ%2BHsgwzqbQyQY6pgFQ4lDg2HBW93cbCM0qD5Iv8vWdKWoLAEroM0n2oWf3DJyxqzPMib5OEAymqmWen0BbOncYRxElmh9bhcaxVf8XCZgZxJ44v%2Fup8sc30qttUeak23OygzANXfSFkWwpLd8aDjlSROg1Epd%2BuPPfO6F4xPcNTZuiv5kGbSuKWm6YUGVrU4HlvhQXmDYbDbp2FEvdkkBw3QsD8IrrchtULv8kubDVKSUW&X-Amz-Signature=4b4aee799ae0a2c8a3fe22cfa982d2fa97824946ec29de5958e8998a74313a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

