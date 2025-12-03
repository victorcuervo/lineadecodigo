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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N3W2CNK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDiLuLxBksA3RrA4XVZrbm1AeFpWD9EHYA%2Bdh%2F8m4lS4AIgNQc9fZ3w1K7YePyDB1FO0fO8mTl59fmIkhgNyNIVIREq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNv0YqePJ1glV47j7CrcA3Mj%2BXa9BDRCZu3VzWwBNzZTCGdMPLiLkajeWz3K%2FlT0F7Vp3LSZsyFrgOLcYbNPPVRkfNoMVGACF25snWkPqN3gDQ7StmFQYGBIOdqeCon1bqhSxTOzgNLIUvA52lrmR7DoyUZa8AVj7p3SAW0PZfsKBh20mgG7gJfAXL3%2FYEW9odrrEXvpWcLQqNeA4R5rWM3obbEyfRbNJnfjtcCyMNwBHBHjgpkOi5KYGS%2BdB1rX8WDBxbhcpxHCc0ulRWG2TQVIW2co5SsNPZ1h4W2PRFQY8kqyJw0jH6sjdejLCwj6DZM9dan4B%2B2bByLN3QQsW74BMORiis7ZhYjxOKsQJ%2B%2Fk%2BU%2B9oynbqZd%2FCzkxCAVCf4stqcYsePvRmd5u5xVigAj7TsKBE24AmARVaocNuD6S3NzlJi03QCw8q0IhXpXjPuLurwqNAX1k0e4zlpMwLHdm8ezaeNYBQnHEp29GhYXGXIDPxb3AW3ZzMsaPcDJwUUfHcm4geqiCMhFvm0iwCLNT12UXr8cvtLN6dZcBDDLdl3p8bOhw%2BcjEZ32O6BXSWHIyrSa8YO6cNY8ocZ0ivVTfdiopI4zQ%2BAH5%2BDBumTds9owiId8xcIlA9Zao0YH3%2Buqh6yxvrx51raOEMNvVv8kGOqUBBmUZOIXpNQfLk3VdrQUyAPUsk6HytDB1Pm9UpCNH6IZ%2BXyN31ua4qwoVag7tsIvWilXBYcLkP1l9p2BN0JNytO3l7yo6KR0jEO9CBtvx4FnH7yf8ytqoTTxtek3a2BI%2F03C5bk4pDmo71X%2BxTegPesEbC9dtqkxr%2FMsc0Eq2VmoNoD3snoxSyGA%2FpM57KrmYwG%2B1wUHAzQmYydbmFT36%2FQ%2F51nWM&X-Amz-Signature=d4a58e94943f18f86e01107fb649d7e7ffad4389b3d7040f344cf9a65857fd14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N3W2CNK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T081533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDiLuLxBksA3RrA4XVZrbm1AeFpWD9EHYA%2Bdh%2F8m4lS4AIgNQc9fZ3w1K7YePyDB1FO0fO8mTl59fmIkhgNyNIVIREq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNv0YqePJ1glV47j7CrcA3Mj%2BXa9BDRCZu3VzWwBNzZTCGdMPLiLkajeWz3K%2FlT0F7Vp3LSZsyFrgOLcYbNPPVRkfNoMVGACF25snWkPqN3gDQ7StmFQYGBIOdqeCon1bqhSxTOzgNLIUvA52lrmR7DoyUZa8AVj7p3SAW0PZfsKBh20mgG7gJfAXL3%2FYEW9odrrEXvpWcLQqNeA4R5rWM3obbEyfRbNJnfjtcCyMNwBHBHjgpkOi5KYGS%2BdB1rX8WDBxbhcpxHCc0ulRWG2TQVIW2co5SsNPZ1h4W2PRFQY8kqyJw0jH6sjdejLCwj6DZM9dan4B%2B2bByLN3QQsW74BMORiis7ZhYjxOKsQJ%2B%2Fk%2BU%2B9oynbqZd%2FCzkxCAVCf4stqcYsePvRmd5u5xVigAj7TsKBE24AmARVaocNuD6S3NzlJi03QCw8q0IhXpXjPuLurwqNAX1k0e4zlpMwLHdm8ezaeNYBQnHEp29GhYXGXIDPxb3AW3ZzMsaPcDJwUUfHcm4geqiCMhFvm0iwCLNT12UXr8cvtLN6dZcBDDLdl3p8bOhw%2BcjEZ32O6BXSWHIyrSa8YO6cNY8ocZ0ivVTfdiopI4zQ%2BAH5%2BDBumTds9owiId8xcIlA9Zao0YH3%2Buqh6yxvrx51raOEMNvVv8kGOqUBBmUZOIXpNQfLk3VdrQUyAPUsk6HytDB1Pm9UpCNH6IZ%2BXyN31ua4qwoVag7tsIvWilXBYcLkP1l9p2BN0JNytO3l7yo6KR0jEO9CBtvx4FnH7yf8ytqoTTxtek3a2BI%2F03C5bk4pDmo71X%2BxTegPesEbC9dtqkxr%2FMsc0Eq2VmoNoD3snoxSyGA%2FpM57KrmYwG%2B1wUHAzQmYydbmFT36%2FQ%2F51nWM&X-Amz-Signature=8bf579f642ef2cd5bc331f37f3fa9ddc787326c4be02521401130e6aa9464d18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

