---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IZZDSDX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BQXx38A4OEwWrp5iW8%2BvXDkHY45Ya3pMAw%2Ftf%2BntFzAiB%2BZSA9r3uH9ezZBVhODIoUmfzSdKPO4dTF%2FnROOnuyOCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1IUvG2xIIcLNsue8KtwD68QuivvUphO%2BTByy1KS%2BlSdS27OMsA3ws3p%2BcMvDLT0H5SqMZ5ZvMSAX63nWzlLFi3XtoCbTpwgF9TQBFAIRLItq0uFELS21QLKmLX7EXPFwoQBP9sjtdR5QQzB0olxEp4ZElCP2qMnHZ8BvDVSqVU%2FOfXdvsIQooNJ10q3L0IOyWywIkYQ4mjeSM5xPRpDg%2B%2F%2FKN8%2B39tmng6fd2G34dzNsDGFP4AtYjmOWewwlOAd2PRHtpN7sYT0LIH1XxXulhneY1ONigm2nKev0Nq8JodO5pVCIZQnyrF02BzXS%2BhYEdzB0XCCol8ix8Mhh2nOiuoiGbaCHEHN2unv0Yaq33rKfqkRtgAClG37il2V80z3qFS%2FszuRYx3LPf0GVvgjmEIN1uwj4r7lKTNw9nVGljeH8P%2Fcw%2FWxOLo6l6h%2BNfXvX8N8wroGY7whmVVuhrcQB2wCL022lt%2Bn3BxIGvyxVsstfit2ImrUNvPlCVdJ4jHrphv7Jwt2qQASzNUZHVcYTWmTTzF4wf8DimRXhfIZlOX8Bg1x5yljsKDBTIoIPw7B3J45yI4uxVXO5dtL5mfi6LZ8oFYmH50n51ToGQaCQBScMHMt79Mo5%2BzFzDTgq%2BJZWXKVeXTTBYnJCD0EwtP3SyQY6pgHB%2B8dvoeq5q9FlGV1fw8whclBqaCAN5YUswu6eVmccGSvtTMk5Ycs1HD99dY%2BR5PT3Jf69ZPmG2dxZX7AXVz25ed1EKecrMZbhoS47tFKgqJUOlGqU3LfQ%2F8tal7Q7X0zvGBuk%2FTwbwRGLEp3fHcc9Pm8vXZ9xReiWNxlRmfkszZ68X5y8%2Br400b3KoMj0%2BEOlPndARQw0qPEARjw2INwBgJ25X9F7&X-Amz-Signature=21631c11d5826634bea29646dc41add00a85ddd51276a668017462e6afb13e99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IZZDSDX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BQXx38A4OEwWrp5iW8%2BvXDkHY45Ya3pMAw%2Ftf%2BntFzAiB%2BZSA9r3uH9ezZBVhODIoUmfzSdKPO4dTF%2FnROOnuyOCqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1IUvG2xIIcLNsue8KtwD68QuivvUphO%2BTByy1KS%2BlSdS27OMsA3ws3p%2BcMvDLT0H5SqMZ5ZvMSAX63nWzlLFi3XtoCbTpwgF9TQBFAIRLItq0uFELS21QLKmLX7EXPFwoQBP9sjtdR5QQzB0olxEp4ZElCP2qMnHZ8BvDVSqVU%2FOfXdvsIQooNJ10q3L0IOyWywIkYQ4mjeSM5xPRpDg%2B%2F%2FKN8%2B39tmng6fd2G34dzNsDGFP4AtYjmOWewwlOAd2PRHtpN7sYT0LIH1XxXulhneY1ONigm2nKev0Nq8JodO5pVCIZQnyrF02BzXS%2BhYEdzB0XCCol8ix8Mhh2nOiuoiGbaCHEHN2unv0Yaq33rKfqkRtgAClG37il2V80z3qFS%2FszuRYx3LPf0GVvgjmEIN1uwj4r7lKTNw9nVGljeH8P%2Fcw%2FWxOLo6l6h%2BNfXvX8N8wroGY7whmVVuhrcQB2wCL022lt%2Bn3BxIGvyxVsstfit2ImrUNvPlCVdJ4jHrphv7Jwt2qQASzNUZHVcYTWmTTzF4wf8DimRXhfIZlOX8Bg1x5yljsKDBTIoIPw7B3J45yI4uxVXO5dtL5mfi6LZ8oFYmH50n51ToGQaCQBScMHMt79Mo5%2BzFzDTgq%2BJZWXKVeXTTBYnJCD0EwtP3SyQY6pgHB%2B8dvoeq5q9FlGV1fw8whclBqaCAN5YUswu6eVmccGSvtTMk5Ycs1HD99dY%2BR5PT3Jf69ZPmG2dxZX7AXVz25ed1EKecrMZbhoS47tFKgqJUOlGqU3LfQ%2F8tal7Q7X0zvGBuk%2FTwbwRGLEp3fHcc9Pm8vXZ9xReiWNxlRmfkszZ68X5y8%2Br400b3KoMj0%2BEOlPndARQw0qPEARjw2INwBgJ25X9F7&X-Amz-Signature=b660f7ff03ee1c68ad3ce479e0f2b00fdce235b1a3db01f84d8c2244badc620a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

