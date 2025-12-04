---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624YCOJTN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBAgRYrlUlBvzRVsGe%2BSh9b0K7PWW6OBzaukDbZftt3gIhAOQlFN405l81p9CK5ZI9VsCIk6CVXLXqRiUJ%2BUu0g0ruKv8DCEkQABoMNjM3NDIzMTgzODA1IgzuoGkYQ1dC%2B8DJsxMq3ANMw2ORVlbvU%2FGzCwLzkpGYVth8lhs81%2BWj9Q11nB1Qiq2utHpNQ8bZNaLReB4pfkpeh2shagSH2D1drtZJ7GhVCzdVDRVnT9po2pNTrnB6FC7shPBhDHKWUIS7CNbOK2Xg4AOAJD%2BIyHEi9O2xWKjqQbPUFCzm0xczCjk%2BdOHOoa%2BXuQqoE43Aour92E3Wv96C4bZfXe%2FBdq4SLjyVcsmZyZ8kbX4qIqWbj7JBwShw0rPKCTKC5U2q%2FPYn3IabVs7I%2BLXo%2Fc5JfRCZGlaAC4OX418HqfQhGZephflDubPIwBclGiVXdH%2F32enb6yA5ZHMTnVTPihwz%2B8m6iuzA0e5juMWtnJ9eZ3zOif16aqP%2FB3XmfCI0Y1RPKPgC3B70YHzXXkb%2B0qFW7CfB6SYJMm71Wyulg6QcR873OrVP%2FBtf1h8o2z72dfVsUsBDmLLDezzyK8%2BdAnC4EvYpc4rtNXzEacFLEApq9zRSicE%2FVzBWdIlLUOSgWaLGqMsUYJD7pk07EUgxktpdThtbLjcz01J5owwAUK8pFmwi%2BFHZin8i7UGillTLk89dGOtYV6NR3vK1sXNftPI6u5X3cQsnz19erBae9OleVMZg9w1vtXmLgQrLAat3lYZN3FIGETDo28bJBjqkATsJJCBNiXTIt9fXjITrA6S3IWr2IxhMr2AV3Dt8IoK627HJiPz617aI3XjNG0tbkd3PwYiCtQZUD7dtSYBZ76VeuImbNlB77JclmOwFHRa%2B%2F4lHU6sGoViPt1b4T3NtD4iRA4Ev4yNzEf%2BnFC2EtJSmQz75YkJKUCGtp24q%2BFWavuGkkhIen%2Fi4kwvTfSfNOs8BNQE2YMk0TL0%2F%2BccQ7Ijg7Tl2&X-Amz-Signature=6446e7e5391690333ffdb395f9ce089c9c1bd8bf61850402033985a588a9637f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624YCOJTN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDBAgRYrlUlBvzRVsGe%2BSh9b0K7PWW6OBzaukDbZftt3gIhAOQlFN405l81p9CK5ZI9VsCIk6CVXLXqRiUJ%2BUu0g0ruKv8DCEkQABoMNjM3NDIzMTgzODA1IgzuoGkYQ1dC%2B8DJsxMq3ANMw2ORVlbvU%2FGzCwLzkpGYVth8lhs81%2BWj9Q11nB1Qiq2utHpNQ8bZNaLReB4pfkpeh2shagSH2D1drtZJ7GhVCzdVDRVnT9po2pNTrnB6FC7shPBhDHKWUIS7CNbOK2Xg4AOAJD%2BIyHEi9O2xWKjqQbPUFCzm0xczCjk%2BdOHOoa%2BXuQqoE43Aour92E3Wv96C4bZfXe%2FBdq4SLjyVcsmZyZ8kbX4qIqWbj7JBwShw0rPKCTKC5U2q%2FPYn3IabVs7I%2BLXo%2Fc5JfRCZGlaAC4OX418HqfQhGZephflDubPIwBclGiVXdH%2F32enb6yA5ZHMTnVTPihwz%2B8m6iuzA0e5juMWtnJ9eZ3zOif16aqP%2FB3XmfCI0Y1RPKPgC3B70YHzXXkb%2B0qFW7CfB6SYJMm71Wyulg6QcR873OrVP%2FBtf1h8o2z72dfVsUsBDmLLDezzyK8%2BdAnC4EvYpc4rtNXzEacFLEApq9zRSicE%2FVzBWdIlLUOSgWaLGqMsUYJD7pk07EUgxktpdThtbLjcz01J5owwAUK8pFmwi%2BFHZin8i7UGillTLk89dGOtYV6NR3vK1sXNftPI6u5X3cQsnz19erBae9OleVMZg9w1vtXmLgQrLAat3lYZN3FIGETDo28bJBjqkATsJJCBNiXTIt9fXjITrA6S3IWr2IxhMr2AV3Dt8IoK627HJiPz617aI3XjNG0tbkd3PwYiCtQZUD7dtSYBZ76VeuImbNlB77JclmOwFHRa%2B%2F4lHU6sGoViPt1b4T3NtD4iRA4Ev4yNzEf%2BnFC2EtJSmQz75YkJKUCGtp24q%2BFWavuGkkhIen%2Fi4kwvTfSfNOs8BNQE2YMk0TL0%2F%2BccQ7Ijg7Tl2&X-Amz-Signature=b15e433fff28222f31b9fd18871baf15e1de132e2c8ed27eed3681f3c858edab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

