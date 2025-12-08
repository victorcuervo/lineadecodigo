---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2KTWKK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUVO1sx%2B5F86%2FxwILndI5v4MEFVN2xfj1hXSF8LPcapAIhAIuE%2BD1HTql5OV9mF9kF4nCgs1VfmyAfJZjFrZPw%2B7dHKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoPaur6RL8a8yzY8cq3ANOE8JWvavTeyZ2oQeJSrRcInLJFb%2BTHd3SsXfKUqANJrxAJacHLfQsUpqMsyHwqL7w4NZ7g4HW0jEOA7LGPvIYqwuGnlbNjhaJRo8FnQxrO3u4BUNLF%2F4EqoziKQBQLmMizXmy8A8uMcTPbQKiTFcXffv32KZiBmOOHjBbdgty%2F1BOQrI4zdwAuwzM%2Bgs46SgFU7CYENL0hMEbzPbcioHx0p1B1x8iI2CtCzRB4cXy7X3C%2Fd1F4ycSTPuevSwJZgpqzSo4IC3a8bvGKL%2Fc2Od5j020VTwjTaF0fh3mPiI272fgOTPVXI84RG%2Fey%2FIoLpiU3F1Cn2QdLt7wNx3JS0HNl1D7jnpNHODmfhHJDfHtQCVYn1opNmlIDRP0jtnBmINmzXLH1Hk3AMGwMmyGbc5h9ufrAZhjlJ4LcU9pzoakQWVTGEpj62Hev6E79JWsIpR4xAfM3DhrkFYgGZ8ntvMXU6NT1zz7kuWFgLuOABXXJtRTZk6HPK64OZ5DEAjP9jkjMqHkMHITyXtVhhwq1G9Cb6bkM%2BxG30c5z1dgit8ixf%2B8WpNVHvRFmucdn1%2BhO3fKGVuyNJx1e62NFNJZFblPVL%2BrsoMcdsJ3MZ%2FVUfJKoCyr6fLaePT27irkMDDxj9vJBjqkAQ%2Bp%2BoGqou9E6AXTktrPf8EEZ4rxFsVIxt%2BwN9QMWDxczLbE8oZOevmraoZOiitszEGqk8ZEQ4wZIFwyUZ7we1GbUPSIMOfSQ8oO0P8OkJfqSbWHqMewbEYbR250NJtYP79fzPNWd30R9YAK%2Br7biJNX3l0gjaZDRyaI3CJyHxad7uqVVrl4BSZvT6r7xPH4CKmeVajy8j9cfDPDK2rMnUZ7spwa&X-Amz-Signature=538cebbf211555c57907980622c5caac00d846ae08cd797a6dd1182e1b0db249&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2KTWKK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T131810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUVO1sx%2B5F86%2FxwILndI5v4MEFVN2xfj1hXSF8LPcapAIhAIuE%2BD1HTql5OV9mF9kF4nCgs1VfmyAfJZjFrZPw%2B7dHKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzoPaur6RL8a8yzY8cq3ANOE8JWvavTeyZ2oQeJSrRcInLJFb%2BTHd3SsXfKUqANJrxAJacHLfQsUpqMsyHwqL7w4NZ7g4HW0jEOA7LGPvIYqwuGnlbNjhaJRo8FnQxrO3u4BUNLF%2F4EqoziKQBQLmMizXmy8A8uMcTPbQKiTFcXffv32KZiBmOOHjBbdgty%2F1BOQrI4zdwAuwzM%2Bgs46SgFU7CYENL0hMEbzPbcioHx0p1B1x8iI2CtCzRB4cXy7X3C%2Fd1F4ycSTPuevSwJZgpqzSo4IC3a8bvGKL%2Fc2Od5j020VTwjTaF0fh3mPiI272fgOTPVXI84RG%2Fey%2FIoLpiU3F1Cn2QdLt7wNx3JS0HNl1D7jnpNHODmfhHJDfHtQCVYn1opNmlIDRP0jtnBmINmzXLH1Hk3AMGwMmyGbc5h9ufrAZhjlJ4LcU9pzoakQWVTGEpj62Hev6E79JWsIpR4xAfM3DhrkFYgGZ8ntvMXU6NT1zz7kuWFgLuOABXXJtRTZk6HPK64OZ5DEAjP9jkjMqHkMHITyXtVhhwq1G9Cb6bkM%2BxG30c5z1dgit8ixf%2B8WpNVHvRFmucdn1%2BhO3fKGVuyNJx1e62NFNJZFblPVL%2BrsoMcdsJ3MZ%2FVUfJKoCyr6fLaePT27irkMDDxj9vJBjqkAQ%2Bp%2BoGqou9E6AXTktrPf8EEZ4rxFsVIxt%2BwN9QMWDxczLbE8oZOevmraoZOiitszEGqk8ZEQ4wZIFwyUZ7we1GbUPSIMOfSQ8oO0P8OkJfqSbWHqMewbEYbR250NJtYP79fzPNWd30R9YAK%2Br7biJNX3l0gjaZDRyaI3CJyHxad7uqVVrl4BSZvT6r7xPH4CKmeVajy8j9cfDPDK2rMnUZ7spwa&X-Amz-Signature=6157eb52f1f6178b37598a39dc31a493353d9af95e0249b320e7203ce9bc55b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

