---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XLF53AC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPfcHy4GUbzTWqoQ7v%2FtN4HMjJTch3BScg1V8SMI8gFAiBy3cHwIGZueDdIvZh1A2fb0v4Ej6bHeT43rhik00COOSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYtK9ZSQ8iC8M2VCKtwD%2BzHmOYs7ttbxCxHUtf%2FVAzSnLKetwxqXvBL2bTRl1jFRyc6WDssWX0J2Ryick02agJCJRGzQEMpTtF5i3tmV26LKdCEOEyBuR0Ey6paaRPv2B3yLX24kp9TRRLY5xrm%2BSL478n%2FV6XnTBBXdPtw4K3HimJsBNhirhh0wgdOu0MO5eDO2qHIUpuZSMkTC5wWEK0QGmLVLeWVdPL4l6i%2FolPPIF8fu%2F81jo7dOBM10yYxCSkDavmuOUixjc7LUKbHx7CiRhshkKgrgAfKMW%2Br5lv0UCXgEaPNNRH8vc8COys6w4seDvaOeaPGVP2b5qlYFDbMQ1lCrtaLCUSa5Z5eVqlMm%2BIyUSYWPQmbhw96hsrnvCEVqI8TtyLS9FpNgbpohoFb3EJBW52yNAM00Zpj3VQmxkxxOONGMmIPGSwpeEonVKfhvN3z4DcDC7%2F3ko3UIqqDo9VN1iVU7Y2tfr7opUeNi3l3FUKMOOtvZUkRsV7Iy3JlVPGmCni3f2p6ixy7dkeE5Y7aHF0L1pkmZ8BQMdANrRnQhD5Jn1mhvfxO%2FkJphE1E07p3Dr3CBIws4HAU7481WBdlT9SYQGAkSZRrCcyhJLpU0Jitw%2FfrAsMIpfVY7wcWjA6TeNz5k4csw8%2BzZyQY6pgHIKvHd4IQdTeiuk1nLC2oN8Se9V9k4snJy3gY5wBts%2BxDbQUIowsQKULOlafKJv8iVznPW7i4aQSowBqQsFOzuAPq09ZclBs3F%2BdfRgfdq1vCfGB0dSmNnXHqM8Cf2z7Uff%2BgA5oJSk0SyX9%2F5jBInAtFXXmwa5WceFMF1uHNhDzCUuSKSFr0jgIKyXkplVOfUtNWY9K3bI8EISlQhR8wwbDGSw4K%2F&X-Amz-Signature=b90159c37f87a47beed5868cce35132846b5484b54613aa1b950df3492b0deb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XLF53AC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T090555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHPfcHy4GUbzTWqoQ7v%2FtN4HMjJTch3BScg1V8SMI8gFAiBy3cHwIGZueDdIvZh1A2fb0v4Ej6bHeT43rhik00COOSqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYtK9ZSQ8iC8M2VCKtwD%2BzHmOYs7ttbxCxHUtf%2FVAzSnLKetwxqXvBL2bTRl1jFRyc6WDssWX0J2Ryick02agJCJRGzQEMpTtF5i3tmV26LKdCEOEyBuR0Ey6paaRPv2B3yLX24kp9TRRLY5xrm%2BSL478n%2FV6XnTBBXdPtw4K3HimJsBNhirhh0wgdOu0MO5eDO2qHIUpuZSMkTC5wWEK0QGmLVLeWVdPL4l6i%2FolPPIF8fu%2F81jo7dOBM10yYxCSkDavmuOUixjc7LUKbHx7CiRhshkKgrgAfKMW%2Br5lv0UCXgEaPNNRH8vc8COys6w4seDvaOeaPGVP2b5qlYFDbMQ1lCrtaLCUSa5Z5eVqlMm%2BIyUSYWPQmbhw96hsrnvCEVqI8TtyLS9FpNgbpohoFb3EJBW52yNAM00Zpj3VQmxkxxOONGMmIPGSwpeEonVKfhvN3z4DcDC7%2F3ko3UIqqDo9VN1iVU7Y2tfr7opUeNi3l3FUKMOOtvZUkRsV7Iy3JlVPGmCni3f2p6ixy7dkeE5Y7aHF0L1pkmZ8BQMdANrRnQhD5Jn1mhvfxO%2FkJphE1E07p3Dr3CBIws4HAU7481WBdlT9SYQGAkSZRrCcyhJLpU0Jitw%2FfrAsMIpfVY7wcWjA6TeNz5k4csw8%2BzZyQY6pgHIKvHd4IQdTeiuk1nLC2oN8Se9V9k4snJy3gY5wBts%2BxDbQUIowsQKULOlafKJv8iVznPW7i4aQSowBqQsFOzuAPq09ZclBs3F%2BdfRgfdq1vCfGB0dSmNnXHqM8Cf2z7Uff%2BgA5oJSk0SyX9%2F5jBInAtFXXmwa5WceFMF1uHNhDzCUuSKSFr0jgIKyXkplVOfUtNWY9K3bI8EISlQhR8wwbDGSw4K%2F&X-Amz-Signature=5912805da555de037186e80bc3f263b28f70d7032f0e51c491a9feca1e225d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

