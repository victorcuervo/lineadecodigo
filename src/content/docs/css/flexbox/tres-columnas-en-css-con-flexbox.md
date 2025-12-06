---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW3L4QEM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0jX2zoPEW1UwaWmvErHRVqzbWodH6rTqpsc4SJqPrWAiBxABiVbzidggRyMnnbeBwudsKCXDZnMo082jaMG5vRqyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMROiHHW%2BGNpbxYZLiKtwDXV0i1IbChRbhwrOEtjQ0ZI4jLJVTJ%2FLE2vlFXObIYELXzBXQUaNIAriicjF6DT6Xn%2BFqUbfbQQysjrXMew%2BKchkHwsy0gdUWJ3J2ioAVARCvbaBvgbY5R90mo%2FjngANOaC1N0wH29sYCBUDuzYCqqKIj4Hv0cSY8PQuE7nzT9Mt0RJD7ccX4tEemEzmLrghtqRrXyLvfxNv5kQ09V8536gZfLChqVy9ati1xAJZFnJ%2BrFIFv2OYMJ7i2DAhpPRjgggJfHTge%2FMeVAsgiYJJ9CONTV5uqMS4cniu%2BYMQVUvLP7oqvTypvvK3YdkEXUYdZZFAgZQNfdHf%2BOf3R8Q7VO5gj9es8hnOJnPb0TOehzB4fAyCadEu93w0FU%2FtpnTsgVhIh%2Fgb9chMBcQD8lFlgIXirbj7KSMZHfA1wPgT3SDRSWUlDEdd%2FoPPCJWiUfBcREXQWfQrSiXAFPoAhjyKjAWkFlKbyOsa17SVcARUz2Eku%2BgzuexwfkZWeFkpD88YORvLERct0G%2B7LQ5wbD%2BAjrNy30b%2BPGIlhwxHDrQGabXDxO9Q9P89hVvDeY2QHWdbnFMGLNY0KBOW8JJiiVjciJU7B%2B6aMgouH2388k3x3Avq8%2B1A9kwoKuHiNg4ow6cXNyQY6pgE13CfNJiDY8Obax3SdZ92mkAQ9i16hbgsZFS%2BYwVVSJu%2BCbHbabuLNWo9ju0svP75UGGgwzIHwKEGa6Is7I0QYcDGP0lW5VlAWVumgTT6nxdmEEb9Mbe3%2B%2F6YvZ8VghhxiGeL1hLpPA%2F5ff5ITbCkOnHvcxiVAaeZC47fTQV%2BZjjfqS0GPWuJIGn3YGIRkIIGuQWPhyH9Vf%2F5WH%2BIMQiFR6dg4YpBw&X-Amz-Signature=4aea2d6b18a4ba328807f9e1223f8acf5308f371edd3df99d769c8f1c0cc0615&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW3L4QEM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T000031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0jX2zoPEW1UwaWmvErHRVqzbWodH6rTqpsc4SJqPrWAiBxABiVbzidggRyMnnbeBwudsKCXDZnMo082jaMG5vRqyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMROiHHW%2BGNpbxYZLiKtwDXV0i1IbChRbhwrOEtjQ0ZI4jLJVTJ%2FLE2vlFXObIYELXzBXQUaNIAriicjF6DT6Xn%2BFqUbfbQQysjrXMew%2BKchkHwsy0gdUWJ3J2ioAVARCvbaBvgbY5R90mo%2FjngANOaC1N0wH29sYCBUDuzYCqqKIj4Hv0cSY8PQuE7nzT9Mt0RJD7ccX4tEemEzmLrghtqRrXyLvfxNv5kQ09V8536gZfLChqVy9ati1xAJZFnJ%2BrFIFv2OYMJ7i2DAhpPRjgggJfHTge%2FMeVAsgiYJJ9CONTV5uqMS4cniu%2BYMQVUvLP7oqvTypvvK3YdkEXUYdZZFAgZQNfdHf%2BOf3R8Q7VO5gj9es8hnOJnPb0TOehzB4fAyCadEu93w0FU%2FtpnTsgVhIh%2Fgb9chMBcQD8lFlgIXirbj7KSMZHfA1wPgT3SDRSWUlDEdd%2FoPPCJWiUfBcREXQWfQrSiXAFPoAhjyKjAWkFlKbyOsa17SVcARUz2Eku%2BgzuexwfkZWeFkpD88YORvLERct0G%2B7LQ5wbD%2BAjrNy30b%2BPGIlhwxHDrQGabXDxO9Q9P89hVvDeY2QHWdbnFMGLNY0KBOW8JJiiVjciJU7B%2B6aMgouH2388k3x3Avq8%2B1A9kwoKuHiNg4ow6cXNyQY6pgE13CfNJiDY8Obax3SdZ92mkAQ9i16hbgsZFS%2BYwVVSJu%2BCbHbabuLNWo9ju0svP75UGGgwzIHwKEGa6Is7I0QYcDGP0lW5VlAWVumgTT6nxdmEEb9Mbe3%2B%2F6YvZ8VghhxiGeL1hLpPA%2F5ff5ITbCkOnHvcxiVAaeZC47fTQV%2BZjjfqS0GPWuJIGn3YGIRkIIGuQWPhyH9Vf%2F5WH%2BIMQiFR6dg4YpBw&X-Amz-Signature=6c893700049c0b6f6162a8c3ad6b2e593c59f07d409dcffd90df0e000b654dd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

