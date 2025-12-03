---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AH5AQ7C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCMic9P3wkebqzKYdVP6ZIjGgIebVrXMUUM9E4QHKCqdAIhALKdvrGuL0J9DFKkeUUvey%2F%2FXPbH34%2FF%2FWm61HFPjExwKv8DCDcQABoMNjM3NDIzMTgzODA1IgwcugSB166668FPxZMq3ANUqhEPg14yBuSwZwQACtJwu2V8kyfdss%2B2L5c%2FD2zoVyTgq7u0PITLqTrU%2FE45aDUEf4BuEXCWdcVEqVPWLFFEfXTFHIWarC4Q7gnTOoyenboNaE39dW00rxJxX4Vcydhl7GBV6H6QTXqgvHbFg8zGoKpcRYz8cpp1Yk5SQB6Q%2FbppLX%2BgvJtZj1iwIHdg%2FZUC2DdEIXMb2580FR%2BzVFdoBjC75pfRcch%2BsSOz760Pw7nk0%2Ff7seLFbdw2tzl6b5JbaUqaDryunwE0zohlh72LPprlWpWtm3GvXUz0V9bcgcx6I6RtrOSSul6ysOr9NNcIkYTX6ilZ6W3VhQn0vV1pZAq5GxX%2FSaYZOhGZ9AzAzsAuUpi3YOQ%2B9y%2FVuXu93CnNpvGMqtlSM7w4JXt8NwGFOhv%2F7QgcnF9ZuK3jdLtRC3TyYG%2FNpZT5yUpI1yNijSTB7kch8cbBYpUIyPxv1tjvJp7ZPBq5NiCSr7pZrx5PHbNvJETJjjuM2oQs4da9hbp59bvzOChtvW9uhavf0%2FLH9Wz4xxgVFdMcTUpUNjLwNTw1dBK9gipz1BuoeAautmPS7d%2FYkxAeJMmHhv9cLrzsmxwnTbQ%2BsgrUYPAuQ58iqFNP70fMDRKohOpPQjCM3MLJBjqkAWu7vSGvVCO5pcH9qX4nOQERjcOMYxKaQbSl375x6CvYNgBj2kywvTJ4n%2BXEEU89v7cYN4CZmcCbM5Y42RHytAUtaj7leWc0luJZIW2966zb5FZp4aRf7RxC8enEhtZ3Bjhz%2FATq94gebTC1Of%2BbC%2BhAVRMC64oRS7k0%2B7mtP8dLgWlx9nMIBG%2FFPY4Maa%2BxH3uOL3cuCZ1%2B3c5f%2FQ6cjFzhqqbj&X-Amz-Signature=ce0acd3bfd5951f3bf11de87215dc2d25c13d573d1202f0ae2c2b9f8ab5a9e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AH5AQ7C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCMic9P3wkebqzKYdVP6ZIjGgIebVrXMUUM9E4QHKCqdAIhALKdvrGuL0J9DFKkeUUvey%2F%2FXPbH34%2FF%2FWm61HFPjExwKv8DCDcQABoMNjM3NDIzMTgzODA1IgwcugSB166668FPxZMq3ANUqhEPg14yBuSwZwQACtJwu2V8kyfdss%2B2L5c%2FD2zoVyTgq7u0PITLqTrU%2FE45aDUEf4BuEXCWdcVEqVPWLFFEfXTFHIWarC4Q7gnTOoyenboNaE39dW00rxJxX4Vcydhl7GBV6H6QTXqgvHbFg8zGoKpcRYz8cpp1Yk5SQB6Q%2FbppLX%2BgvJtZj1iwIHdg%2FZUC2DdEIXMb2580FR%2BzVFdoBjC75pfRcch%2BsSOz760Pw7nk0%2Ff7seLFbdw2tzl6b5JbaUqaDryunwE0zohlh72LPprlWpWtm3GvXUz0V9bcgcx6I6RtrOSSul6ysOr9NNcIkYTX6ilZ6W3VhQn0vV1pZAq5GxX%2FSaYZOhGZ9AzAzsAuUpi3YOQ%2B9y%2FVuXu93CnNpvGMqtlSM7w4JXt8NwGFOhv%2F7QgcnF9ZuK3jdLtRC3TyYG%2FNpZT5yUpI1yNijSTB7kch8cbBYpUIyPxv1tjvJp7ZPBq5NiCSr7pZrx5PHbNvJETJjjuM2oQs4da9hbp59bvzOChtvW9uhavf0%2FLH9Wz4xxgVFdMcTUpUNjLwNTw1dBK9gipz1BuoeAautmPS7d%2FYkxAeJMmHhv9cLrzsmxwnTbQ%2BsgrUYPAuQ58iqFNP70fMDRKohOpPQjCM3MLJBjqkAWu7vSGvVCO5pcH9qX4nOQERjcOMYxKaQbSl375x6CvYNgBj2kywvTJ4n%2BXEEU89v7cYN4CZmcCbM5Y42RHytAUtaj7leWc0luJZIW2966zb5FZp4aRf7RxC8enEhtZ3Bjhz%2FATq94gebTC1Of%2BbC%2BhAVRMC64oRS7k0%2B7mtP8dLgWlx9nMIBG%2FFPY4Maa%2BxH3uOL3cuCZ1%2B3c5f%2FQ6cjFzhqqbj&X-Amz-Signature=2a6a00651eb96d167b430d98b3387794f1eae73d6f3f79dceeea0d5f404700c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

