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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7QXBYYJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF94fMlrZGTTvo7pEcRncI0v1ll1jRyae404pw4su3ywAiBuqkZh6PhjezJeaJhX1%2F%2F052FcShJeltBBP5QHqrr8Ayr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMNMN8GxTWMFTIMy4oKtwDt6dYO2UE0RFzuOiKPVJn2IEJOl8Cjlaf%2B%2BNteromkA2mBkIv%2BW2sNaK1EPUQTPB%2BCudaMJ7tsDT2mYqqQEEFOCuEkMOZXQpk8Hk8RTA9Fxa9C0OOKbFAqRPbzy9mFpGPEXNTetq4JWw0mlszqOsWfajehn1KND5%2FFANwOpA4rayxKTtzg2rON2NQY31sM00TGmrNV0o%2BNV%2B1Uk%2FO6n7XqXUpkrh17AFb4%2FU65c%2BX1ob%2F1KyqYJwT2fsBOu2J1oIoPt9L278wgFMGpy6z4%2FXRmCbkewRWaCgRvQ5%2BambofXwRM7NsAnsxXHxnCnP5dXsuWnsWCBWON09Ieolt9Jt995%2BlcM7PEmgj2zsrhMOzDwsItPt39M6dYW8NsQFU%2B4uI%2F%2FJriu3ZRNVSQwHMBs%2B2uVkIuxF17j6Cuv%2Fi1fhHA%2F4eSx5V0KT9C1800rGaKPLtIfvzUC2pFvvD1s6nJYoGegGr1vatWHCME6mH7KWBi9CSleq%2FU%2Fl%2BFdXjH%2B%2BlGL7Vj%2FIcU6fsoIqpLA09DXxgcYs60tZyFO4vEQnr3BI11FmIF9Add3wlaeWqVUxaGPmw1ck%2FappCTt9O3hui%2B8QCSz53%2BA0qOrscAU%2FAvis3BbV5c7tL6AV16fd5sUgwidrByQY6pgEriVu0r2otF6vOn%2FPEro%2FOvnwHef%2FrqLtyjvHZLSAMeDLyyl6qQNMwGAxlpJeX3OgPIRxFNj%2BqFtbSaRlJlcqpG%2FqJrFQT%2FMVMLmhV1WqZRTtx2UUZXdBW8y1%2B8TgwbsfqJil%2BEJMkLnZmV3fGeWwRM%2B5hquqdJFp%2FpzL%2BnAQkIcEoTb7HMV9qF0KCS9pZRoSPkq9LV%2BZnfqK2Gk%2F7Sw%2F0vjVfoEVP&X-Amz-Signature=84a66f51f808ba7c4d2f845d152779b340db82bd5bcaffcd99325c139591a7ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7QXBYYJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIF94fMlrZGTTvo7pEcRncI0v1ll1jRyae404pw4su3ywAiBuqkZh6PhjezJeaJhX1%2F%2F052FcShJeltBBP5QHqrr8Ayr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMNMN8GxTWMFTIMy4oKtwDt6dYO2UE0RFzuOiKPVJn2IEJOl8Cjlaf%2B%2BNteromkA2mBkIv%2BW2sNaK1EPUQTPB%2BCudaMJ7tsDT2mYqqQEEFOCuEkMOZXQpk8Hk8RTA9Fxa9C0OOKbFAqRPbzy9mFpGPEXNTetq4JWw0mlszqOsWfajehn1KND5%2FFANwOpA4rayxKTtzg2rON2NQY31sM00TGmrNV0o%2BNV%2B1Uk%2FO6n7XqXUpkrh17AFb4%2FU65c%2BX1ob%2F1KyqYJwT2fsBOu2J1oIoPt9L278wgFMGpy6z4%2FXRmCbkewRWaCgRvQ5%2BambofXwRM7NsAnsxXHxnCnP5dXsuWnsWCBWON09Ieolt9Jt995%2BlcM7PEmgj2zsrhMOzDwsItPt39M6dYW8NsQFU%2B4uI%2F%2FJriu3ZRNVSQwHMBs%2B2uVkIuxF17j6Cuv%2Fi1fhHA%2F4eSx5V0KT9C1800rGaKPLtIfvzUC2pFvvD1s6nJYoGegGr1vatWHCME6mH7KWBi9CSleq%2FU%2Fl%2BFdXjH%2B%2BlGL7Vj%2FIcU6fsoIqpLA09DXxgcYs60tZyFO4vEQnr3BI11FmIF9Add3wlaeWqVUxaGPmw1ck%2FappCTt9O3hui%2B8QCSz53%2BA0qOrscAU%2FAvis3BbV5c7tL6AV16fd5sUgwidrByQY6pgEriVu0r2otF6vOn%2FPEro%2FOvnwHef%2FrqLtyjvHZLSAMeDLyyl6qQNMwGAxlpJeX3OgPIRxFNj%2BqFtbSaRlJlcqpG%2FqJrFQT%2FMVMLmhV1WqZRTtx2UUZXdBW8y1%2B8TgwbsfqJil%2BEJMkLnZmV3fGeWwRM%2B5hquqdJFp%2FpzL%2BnAQkIcEoTb7HMV9qF0KCS9pZRoSPkq9LV%2BZnfqK2Gk%2F7Sw%2F0vjVfoEVP&X-Amz-Signature=282ee579fa5ed910cc57348de6660a382e3ce07cbdde1f43e9b83b5656ffb633&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

