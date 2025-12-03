---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4QMK2HQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCsepXyHvcCYV4dqm2O9ObbhnhxM%2FXX%2ByTTv4nl97iOKgIhAIjQz%2B9VukbW2uphqC6Ik6sauCIhbz0c0%2BiHae0I52ABKv8DCDIQABoMNjM3NDIzMTgzODA1IgygALKbUj4nxhAkdNUq3AP2j4TPJBuRyAqp4J%2B8zounc5RSW%2BNlLiFNXvx10P1gv2hpNMw%2BmG%2F6zSxmqZGq5ePRZSh7zz5uyyg5NO%2Bn20223OjGYCjmBny3qSeKaFydSiUiiSQLUjHVp3hFG0SaPpAwz3Gd99uAxQ0L7w7Uy0iJw9W0r71QDak0XLjvCnrasgOFAVjCaRv8kR4VWeisU8hs7m8RzfPaPye2IYcwaw%2FVGHb4VrPR7AFWl3gVp6ewCsyhBdmKYQbey4HQRuN5yZwR%2FRC70Qzbn5iBFvgHTQXf9wywkOk5AuqFN7PUuRGqEi56yaP6t9JBKSWAm6Kc%2Fe56bvxQBRyW6cJuPBAbH0oyR5xfqSmjIMr9FbKOplhU%2F2y279hrtILcBt6i2njJFeOCUFvAlqX6ZVIbRGOkfZlMnYwKuTnBBs%2Fs47j6PeVbtAI5vdei6Mwd9BMzZOP8o2R%2F0ITDyO%2B%2FJyGiykThZ34%2FKjrHVFi5P%2FvSfyt0Is5imWgiNwOVQuQBttOar5%2FnIjmte6FrxwCIdfTNH0HPIkIPJP4q5J6LjKbAVsIsF01ZRk3GBUhS3tvnrILGeweOQs32aHxKpEIEOoDVy9YyWQXCTaqvSr00xKGBWjZzeu7tIIqOTpiOepNXfAGeoTCB28HJBjqkAYtnulYrSXdJokFEomzZBwgp%2FfkQLhdXrhAu%2ByhWTyLCLaUXpx6VpJScJnbH%2F%2BuiKQW0Q1rHw63DVlfqokolN3NTPnfuDF4hF1z4HwlJqSx7fykpyfXSq4yYDXHsvIqJPAkiKEmrBLmQrwy5vtZ%2FsXJHoSkFJS7EGcTbc46MLRj4CUEl7jRPfGAr4bBx%2BX3NDrgv8w5W%2BGF%2FtREUcexLPOP2FUEG&X-Amz-Signature=082fb13763de3c228fedc0f262b95fcea8bed3ce362e1b663fbb78cfe86ccc81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4QMK2HQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQCsepXyHvcCYV4dqm2O9ObbhnhxM%2FXX%2ByTTv4nl97iOKgIhAIjQz%2B9VukbW2uphqC6Ik6sauCIhbz0c0%2BiHae0I52ABKv8DCDIQABoMNjM3NDIzMTgzODA1IgygALKbUj4nxhAkdNUq3AP2j4TPJBuRyAqp4J%2B8zounc5RSW%2BNlLiFNXvx10P1gv2hpNMw%2BmG%2F6zSxmqZGq5ePRZSh7zz5uyyg5NO%2Bn20223OjGYCjmBny3qSeKaFydSiUiiSQLUjHVp3hFG0SaPpAwz3Gd99uAxQ0L7w7Uy0iJw9W0r71QDak0XLjvCnrasgOFAVjCaRv8kR4VWeisU8hs7m8RzfPaPye2IYcwaw%2FVGHb4VrPR7AFWl3gVp6ewCsyhBdmKYQbey4HQRuN5yZwR%2FRC70Qzbn5iBFvgHTQXf9wywkOk5AuqFN7PUuRGqEi56yaP6t9JBKSWAm6Kc%2Fe56bvxQBRyW6cJuPBAbH0oyR5xfqSmjIMr9FbKOplhU%2F2y279hrtILcBt6i2njJFeOCUFvAlqX6ZVIbRGOkfZlMnYwKuTnBBs%2Fs47j6PeVbtAI5vdei6Mwd9BMzZOP8o2R%2F0ITDyO%2B%2FJyGiykThZ34%2FKjrHVFi5P%2FvSfyt0Is5imWgiNwOVQuQBttOar5%2FnIjmte6FrxwCIdfTNH0HPIkIPJP4q5J6LjKbAVsIsF01ZRk3GBUhS3tvnrILGeweOQs32aHxKpEIEOoDVy9YyWQXCTaqvSr00xKGBWjZzeu7tIIqOTpiOepNXfAGeoTCB28HJBjqkAYtnulYrSXdJokFEomzZBwgp%2FfkQLhdXrhAu%2ByhWTyLCLaUXpx6VpJScJnbH%2F%2BuiKQW0Q1rHw63DVlfqokolN3NTPnfuDF4hF1z4HwlJqSx7fykpyfXSq4yYDXHsvIqJPAkiKEmrBLmQrwy5vtZ%2FsXJHoSkFJS7EGcTbc46MLRj4CUEl7jRPfGAr4bBx%2BX3NDrgv8w5W%2BGF%2FtREUcexLPOP2FUEG&X-Amz-Signature=63718f7d2c0a438b48fd85c1700195462e28a78a3a3dedef207074636a58818b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

