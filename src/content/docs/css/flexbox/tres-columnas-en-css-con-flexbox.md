---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF74SP7M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrvQMFgUHsKLNvB%2FS0YUN9XiftAutsJjSsRvsEpnpu5wIhALqKe93VsaZb6AuYj0WY6Py5n03GIxseYZKsfqS1jfuhKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqqZAdO42QtMtg7%2BAq3AOHI8s%2F5mxWcAWQswD0FRuonbwT1HjBZdGBtU6awQsvPyygaXyB5NzGPkqPU36X%2F%2FxswP5WAZQn0BgyOzgoCqNK0K15Akk2BryqDSZodusZGlFZnlw%2BpksiJKywUiguxsrul%2FIfSDBP1YKHF9GOapljXNTyjxw0SaFTsbRHh51rZ9gQ%2F3eR1g7FT0KwMcHMDlYxBn1dVsCVXiGcoXmUvwkIpp9qN7T2AtwO3fYP4URXck8kYqMF%2BbZzDnQmaK9Avp5C3IKthnWS7HkogzMLKr0IbV4gqIjnn0Y9b2RPKLDpXcSvANA4PDjO7hWN7IBhjphLaRPYcZy3PSm5u%2FVKtOFLgp2Mu4JpD%2BVgfAavxaNJmArR25QV2PudRAvRjRjK7AC%2Fn2uL26z%2FECvKXng%2FMXVgRdsVrb73kkwjwdyXPm1HNl6s0sw8AnWeSziC6Kj%2Bc8vZtMsNcVERlipP2Kyjco9QcKFUaksPMq9yAS%2B0MPaXNVbpzs%2Fo2RuzTJjn1f%2BIwtGwQSRu3SScrm1kfDk0LslRK6t8l7xhiaHJ3lPcyPEGk3QPcNcWx8q0Hs6H5wQg%2B7QHUwqvLtRjbbByUzxUPoiaeZBOSiCPX8B%2Bs0q32JUYIKhfdgb9tV5W958avDDxs9nJBjqkAQSAEnZ6e6nwpCBCdoQ3RCMQzy9aAA0kOrk7nsulTrKaWEWUlV%2F2HXLlKvO5p6xcBMg7qcV2aIlEvllWAUQiWjnAVKnuWb6h4opLwz18IYhemFF%2FPzozACqKt3xosQp3yYj%2FAqqVIrQ7800yXad%2BrpKmcLbsKy9gw2bvWvP0QVYjVHQI3nz2t0781PqVG2wISscxLidjd4AFjoTnpstwWyMZ0IKa&X-Amz-Signature=c81a4e225e89fba943c1b9fe8e17fe91c7196c394cfa6b721f85242d541a1e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TF74SP7M%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T054917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrvQMFgUHsKLNvB%2FS0YUN9XiftAutsJjSsRvsEpnpu5wIhALqKe93VsaZb6AuYj0WY6Py5n03GIxseYZKsfqS1jfuhKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqqZAdO42QtMtg7%2BAq3AOHI8s%2F5mxWcAWQswD0FRuonbwT1HjBZdGBtU6awQsvPyygaXyB5NzGPkqPU36X%2F%2FxswP5WAZQn0BgyOzgoCqNK0K15Akk2BryqDSZodusZGlFZnlw%2BpksiJKywUiguxsrul%2FIfSDBP1YKHF9GOapljXNTyjxw0SaFTsbRHh51rZ9gQ%2F3eR1g7FT0KwMcHMDlYxBn1dVsCVXiGcoXmUvwkIpp9qN7T2AtwO3fYP4URXck8kYqMF%2BbZzDnQmaK9Avp5C3IKthnWS7HkogzMLKr0IbV4gqIjnn0Y9b2RPKLDpXcSvANA4PDjO7hWN7IBhjphLaRPYcZy3PSm5u%2FVKtOFLgp2Mu4JpD%2BVgfAavxaNJmArR25QV2PudRAvRjRjK7AC%2Fn2uL26z%2FECvKXng%2FMXVgRdsVrb73kkwjwdyXPm1HNl6s0sw8AnWeSziC6Kj%2Bc8vZtMsNcVERlipP2Kyjco9QcKFUaksPMq9yAS%2B0MPaXNVbpzs%2Fo2RuzTJjn1f%2BIwtGwQSRu3SScrm1kfDk0LslRK6t8l7xhiaHJ3lPcyPEGk3QPcNcWx8q0Hs6H5wQg%2B7QHUwqvLtRjbbByUzxUPoiaeZBOSiCPX8B%2Bs0q32JUYIKhfdgb9tV5W958avDDxs9nJBjqkAQSAEnZ6e6nwpCBCdoQ3RCMQzy9aAA0kOrk7nsulTrKaWEWUlV%2F2HXLlKvO5p6xcBMg7qcV2aIlEvllWAUQiWjnAVKnuWb6h4opLwz18IYhemFF%2FPzozACqKt3xosQp3yYj%2FAqqVIrQ7800yXad%2BrpKmcLbsKy9gw2bvWvP0QVYjVHQI3nz2t0781PqVG2wISscxLidjd4AFjoTnpstwWyMZ0IKa&X-Amz-Signature=624a0498eb2d6cba0295f69f4329df2480efe87c1807f9c4db3109e4e984a807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

