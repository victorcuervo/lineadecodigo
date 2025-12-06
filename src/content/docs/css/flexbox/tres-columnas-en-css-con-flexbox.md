---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBOBA5Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGH8H1Y4SbFoc2zvYYKKybROwpUvdZvR%2Fi8tti%2FGqMo%2FAiArxPQ72f1dteRg1noa%2Btq6yAvulBz4jZyHh0XUQEwvnir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMnjo3bwZ3oJ51IhyJKtwDzmNW7d5dusR%2BW60ux%2FRA5ojJi4Br%2F%2FBe%2F5d5iB0qLPDjEi1m%2FdP03kxE2XV8zjpJTckUN2zA3eMwDzqpY4l58GSkdZLDrqpfShAp2XAakBZfrkRqs5VfLlC8lfmToEskjc8FFGQdvgkMYPCCutl9Z9GMHKBcjFhEFJ%2FrdVCK%2FcQy5%2BFlj98tweCSS%2FYj9hLGIMDqF0qH%2BP1kX8myZaXn3Ur7eEOhtRpicBHZM1tm17CURqo%2BRi68CdJFSRnIm3o1zF3RJxBCYSMJApj56Es9Oi4y8FiiRfn1ZTNqsAFq8WSWTyMaWYxblYMkRCF%2Fnkab8iNMf%2B%2F%2F0cUDSNEVnRuxUS2oQGBivrlE8My44wWgh%2B3oF0Bn%2FNLsyGhMF3F9M98BE%2FQIjwIsHVF3Pkvkh%2F7ugcqVuCKaAcgvvgWkcijIyOo403ssMmQb1%2FgrMEbh6b7bE5VEQi6%2B9X3gzQx45a3oDIYeqWsA3VD1lOr3sdQmpEx9DNPhz6dQhc4XhcrI7RUkRi9DeDS2vCl39tx4NTaL1WBb4zm8INlzzqcQ9AgRXKioeuwYYqX6zG5M3subOXSabXC%2FtX1It1MMZFg5Y7GnGuRsE31SZ%2BpmgDPaDcJzNym91OaqpqskegRhz1Iw16bQyQY6pgGpgiSZUCErvxOwbzPF%2FHPsPUAC1mW8ffX1kUDpOrEbXVhE7P5BXiqdlntto6Zb5jBncIzsMzCP%2B56v7iz1%2B%2BrzS%2FGPaMVs%2F3NzeRdlGKDpkOTss%2BBXCwCPjJWiiUrHifWQLlHTSOH9ceKJZMWvXxDnD7hq18palL%2FiVYZjSumsXbx3uscLWefLZYI77QZIqZbMTx3CG38u4AlIp6CeFWxx6q1UyxUx&X-Amz-Signature=3e24d17e1591ea25a24fa71aee467cee48bfa3bd8fe0936ea7b74f2449376237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKBOBA5Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T162605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGH8H1Y4SbFoc2zvYYKKybROwpUvdZvR%2Fi8tti%2FGqMo%2FAiArxPQ72f1dteRg1noa%2Btq6yAvulBz4jZyHh0XUQEwvnir%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMnjo3bwZ3oJ51IhyJKtwDzmNW7d5dusR%2BW60ux%2FRA5ojJi4Br%2F%2FBe%2F5d5iB0qLPDjEi1m%2FdP03kxE2XV8zjpJTckUN2zA3eMwDzqpY4l58GSkdZLDrqpfShAp2XAakBZfrkRqs5VfLlC8lfmToEskjc8FFGQdvgkMYPCCutl9Z9GMHKBcjFhEFJ%2FrdVCK%2FcQy5%2BFlj98tweCSS%2FYj9hLGIMDqF0qH%2BP1kX8myZaXn3Ur7eEOhtRpicBHZM1tm17CURqo%2BRi68CdJFSRnIm3o1zF3RJxBCYSMJApj56Es9Oi4y8FiiRfn1ZTNqsAFq8WSWTyMaWYxblYMkRCF%2Fnkab8iNMf%2B%2F%2F0cUDSNEVnRuxUS2oQGBivrlE8My44wWgh%2B3oF0Bn%2FNLsyGhMF3F9M98BE%2FQIjwIsHVF3Pkvkh%2F7ugcqVuCKaAcgvvgWkcijIyOo403ssMmQb1%2FgrMEbh6b7bE5VEQi6%2B9X3gzQx45a3oDIYeqWsA3VD1lOr3sdQmpEx9DNPhz6dQhc4XhcrI7RUkRi9DeDS2vCl39tx4NTaL1WBb4zm8INlzzqcQ9AgRXKioeuwYYqX6zG5M3subOXSabXC%2FtX1It1MMZFg5Y7GnGuRsE31SZ%2BpmgDPaDcJzNym91OaqpqskegRhz1Iw16bQyQY6pgGpgiSZUCErvxOwbzPF%2FHPsPUAC1mW8ffX1kUDpOrEbXVhE7P5BXiqdlntto6Zb5jBncIzsMzCP%2B56v7iz1%2B%2BrzS%2FGPaMVs%2F3NzeRdlGKDpkOTss%2BBXCwCPjJWiiUrHifWQLlHTSOH9ceKJZMWvXxDnD7hq18palL%2FiVYZjSumsXbx3uscLWefLZYI77QZIqZbMTx3CG38u4AlIp6CeFWxx6q1UyxUx&X-Amz-Signature=88ee5d212d0ae8bf0cc00648ecdeeef41e46c58c46748f1a0a007b006af65c44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

