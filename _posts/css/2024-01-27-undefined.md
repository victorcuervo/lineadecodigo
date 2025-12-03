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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZT7C4NU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFsaEFLZE8TfAl0LUXZo8MZ1lS1w8pXyJpnqujqxU1LhAiBcbdCJ3ciPnXnYYxINeQMVkqWOrC%2F4GBxJbA0mCSUm%2BSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIML3CQivW7TVtReHqrKtwD7ntd11x0u3nyQ%2Bv2hbAj4q6yxqRb6tL7XhJAPhTr2pD9fgmVHby2Lwqv0cMex%2Fev1zVmbr7TnXr2vTyr1kuttYwUGDD9RGS%2Fc%2Fi%2F0vvHZFkYYCTDbDJZhpPeYd%2FLpPMVv35dIG36Jnnng3FYYqNvOTJM5er6rDeFRMq2DgodlJtdwU6T4NWgWdpdTxTfr%2BGVIaP2vKIgkNboCDREKNXoBDNjktYuw1zyelSqOhO7WscBCBDTVdaum%2FeSlwizRBElwPguMfO4dXgmmPSItEFeKJlE9n2VEhWDdrbtpGDdfvTZWyogRAH3DdPUk2PYxHge8lnXt6T2mgTlP09yfTA5Bi3TK5aQrLevS0xqV67UMm6BWOXxJBwkLX9zoO0hzp59%2BcpAHfBnlTxVX5Un0jNf38mO5uEVaoMsmhPmjeM54hlXafK3ZlFEScT4A47njbcwnmRsi06ENLQzNuOROF7ElgNxzAhTBsXNC5ZWFBiPiLlkdnCDnDfo%2BqB56EQLIz6esSCgCnSNDOKlJphT81JcyUJQXKZa3AvLKEPRn0OiYmbIDlYIHSha27gtwDCOTTCrS7RzpUQ1764WoZDxi2nj%2FIuOgt8l0TT1AV6UErPrHCuuIL1wjLnXrtNEWIIw45a%2ByQY6pgGVsn6BVEFeEt2yLReLp3Otn2dGO%2BZtTakuED4VWjam5NAezFxfkD1Bqlis%2Frbrs2XU8ewma7c0%2FZV8W8e5YpOrWlxm3uDcCSj6yWcaP41iMbTz5w9U6cRLunIwNhd6ofnobgIJzTbc77ADvaHW2DvLeq%2B%2B6SFLZwMPkG%2Biq2iEtj0LNAAnBF1KxmYEirCnzzyqm9q8vbkn5FBG1aJuKCzrVbYlz7jj&X-Amz-Signature=3577b91dac3c48eb5934f11b2fbae5027ce363eb1617448a980675ea42e0f42f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZT7C4NU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFsaEFLZE8TfAl0LUXZo8MZ1lS1w8pXyJpnqujqxU1LhAiBcbdCJ3ciPnXnYYxINeQMVkqWOrC%2F4GBxJbA0mCSUm%2BSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIML3CQivW7TVtReHqrKtwD7ntd11x0u3nyQ%2Bv2hbAj4q6yxqRb6tL7XhJAPhTr2pD9fgmVHby2Lwqv0cMex%2Fev1zVmbr7TnXr2vTyr1kuttYwUGDD9RGS%2Fc%2Fi%2F0vvHZFkYYCTDbDJZhpPeYd%2FLpPMVv35dIG36Jnnng3FYYqNvOTJM5er6rDeFRMq2DgodlJtdwU6T4NWgWdpdTxTfr%2BGVIaP2vKIgkNboCDREKNXoBDNjktYuw1zyelSqOhO7WscBCBDTVdaum%2FeSlwizRBElwPguMfO4dXgmmPSItEFeKJlE9n2VEhWDdrbtpGDdfvTZWyogRAH3DdPUk2PYxHge8lnXt6T2mgTlP09yfTA5Bi3TK5aQrLevS0xqV67UMm6BWOXxJBwkLX9zoO0hzp59%2BcpAHfBnlTxVX5Un0jNf38mO5uEVaoMsmhPmjeM54hlXafK3ZlFEScT4A47njbcwnmRsi06ENLQzNuOROF7ElgNxzAhTBsXNC5ZWFBiPiLlkdnCDnDfo%2BqB56EQLIz6esSCgCnSNDOKlJphT81JcyUJQXKZa3AvLKEPRn0OiYmbIDlYIHSha27gtwDCOTTCrS7RzpUQ1764WoZDxi2nj%2FIuOgt8l0TT1AV6UErPrHCuuIL1wjLnXrtNEWIIw45a%2ByQY6pgGVsn6BVEFeEt2yLReLp3Otn2dGO%2BZtTakuED4VWjam5NAezFxfkD1Bqlis%2Frbrs2XU8ewma7c0%2FZV8W8e5YpOrWlxm3uDcCSj6yWcaP41iMbTz5w9U6cRLunIwNhd6ofnobgIJzTbc77ADvaHW2DvLeq%2B%2B6SFLZwMPkG%2Biq2iEtj0LNAAnBF1KxmYEirCnzzyqm9q8vbkn5FBG1aJuKCzrVbYlz7jj&X-Amz-Signature=5ea552ab4a71a2e2edc46c800e39b40828bfffe88b02fda4e06d131f33161b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

