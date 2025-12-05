---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBRNEHD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPpRw8Hzp22IVwTAMNLcqmOWggZTKOJoiSXViiCxEQhAIhAM0yrruUxBn%2FzJWGSGJJajiI%2B2nsnCM%2BnptucC1IehEpKv8DCFUQABoMNjM3NDIzMTgzODA1IgwkaZyXkBluef%2BuG1gq3APWnxVmuVVF%2F8bncGKpVb421%2B9YqRF9uSBZKaOwCTFmYeaczgeINnZBG8q00Xq75R9QxfruqlkiR915gNl6C2tH%2BzffxdIgm%2B4Z0ktjv5PJ04Jsahl9rWRykfP2Jz2LRVNfJ7LMjGfwRufMBhPYbq59TKFgX0hpuW%2BZcy4WtWG22uuNmsGpR7D86ZDRhzQ2PHEFTkYn3B8kizKCuMcEbgYbdEoqXBHLP33Bg9%2BWrbbE5mVO1X7ri0N6aMmYLWbmvCwQtGI1Ocm1P%2BcN1w40r3VDGwzHGvTxQBdmryYeqF28E8TobhJlYBVoAb3eMnVYtKneWDBO5alzKDWMbAINqKSFMV7WogIffohrJhwAkc9u4Yz%2Fm76B4LP23XPOHXqmm15xiBjvmUnTQLVI9vwPSqZixOQG8RD9nSMwBDuIyZSDrrstfsHR4VaGOPn9e8X5YWA%2FA89qy21RtdETuICy%2F4j2paxeb540JPNSy7s2VrWHym2L4hXzXEBoi%2BzbKh42dB8lDVgyIbSOdnt5vLZjBpv2fJMmvffbrp9Pw72QVZPr1zOpX3JbcbSYaZ%2BvKjy5qAfGp%2BxecCOhYnwX%2F8ccX9WAr6WTGs6ZMpFoQAOVFoCd0syiNe1oHlBhz7OvHTDTqcnJBjqkAXdfhE1xJ0UFzbJpluP2qlCQVjSEPJGxOUYQ1KMFnrt4VGy14Jtb51yxmo94Q7OJ1qPAxkXntdMLI66muKpnnxyOdqpQCL208q%2FbpxntnSTMUw6qeZSlkYPtk%2FXEk1fov%2F3joM%2FMRg2upWBn8Dsd0I2%2B56ICFf3u1OLxIMxaixapS8XZ%2FRXMqG4QaXtDvRp4DJSRX%2FSxaeFfeNlDor0l8tFeJ%2FOZ&X-Amz-Signature=c7aeeab860981ab0ae1d1ecda12bfad13d98e2e1f32ae890444ded6c49944390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MBRNEHD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPpRw8Hzp22IVwTAMNLcqmOWggZTKOJoiSXViiCxEQhAIhAM0yrruUxBn%2FzJWGSGJJajiI%2B2nsnCM%2BnptucC1IehEpKv8DCFUQABoMNjM3NDIzMTgzODA1IgwkaZyXkBluef%2BuG1gq3APWnxVmuVVF%2F8bncGKpVb421%2B9YqRF9uSBZKaOwCTFmYeaczgeINnZBG8q00Xq75R9QxfruqlkiR915gNl6C2tH%2BzffxdIgm%2B4Z0ktjv5PJ04Jsahl9rWRykfP2Jz2LRVNfJ7LMjGfwRufMBhPYbq59TKFgX0hpuW%2BZcy4WtWG22uuNmsGpR7D86ZDRhzQ2PHEFTkYn3B8kizKCuMcEbgYbdEoqXBHLP33Bg9%2BWrbbE5mVO1X7ri0N6aMmYLWbmvCwQtGI1Ocm1P%2BcN1w40r3VDGwzHGvTxQBdmryYeqF28E8TobhJlYBVoAb3eMnVYtKneWDBO5alzKDWMbAINqKSFMV7WogIffohrJhwAkc9u4Yz%2Fm76B4LP23XPOHXqmm15xiBjvmUnTQLVI9vwPSqZixOQG8RD9nSMwBDuIyZSDrrstfsHR4VaGOPn9e8X5YWA%2FA89qy21RtdETuICy%2F4j2paxeb540JPNSy7s2VrWHym2L4hXzXEBoi%2BzbKh42dB8lDVgyIbSOdnt5vLZjBpv2fJMmvffbrp9Pw72QVZPr1zOpX3JbcbSYaZ%2BvKjy5qAfGp%2BxecCOhYnwX%2F8ccX9WAr6WTGs6ZMpFoQAOVFoCd0syiNe1oHlBhz7OvHTDTqcnJBjqkAXdfhE1xJ0UFzbJpluP2qlCQVjSEPJGxOUYQ1KMFnrt4VGy14Jtb51yxmo94Q7OJ1qPAxkXntdMLI66muKpnnxyOdqpQCL208q%2FbpxntnSTMUw6qeZSlkYPtk%2FXEk1fov%2F3joM%2FMRg2upWBn8Dsd0I2%2B56ICFf3u1OLxIMxaixapS8XZ%2FRXMqG4QaXtDvRp4DJSRX%2FSxaeFfeNlDor0l8tFeJ%2FOZ&X-Amz-Signature=d33db7c1035e1fcc2498921cbc1ecce2ad00cd158dd86067ae829fa7d6aac3f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

