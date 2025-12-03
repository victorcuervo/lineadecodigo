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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGS4UU32%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T020723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDM6FbOJkXXePA9FY2o8dJkrUPEMX3KwKGVHb1CdZb2ygIhANAeFwU29V%2B69G1Ss4IwuZVJ7CZuHJFql%2BKxzpNVX4rYKv8DCCIQABoMNjM3NDIzMTgzODA1IgzNaMBBWjktvNSdNg4q3ANUDrSeJhTo%2Bb9ptdwu1nGVBs%2FAvplaPE17VtO%2FG6ji54GPq4c10lJjzNqnMGhttiWzZzGPmvGKBMFQs14cisUdQBOGPpMnhBf45e47shCZeTABgJMogRvidmqIfkiGCEAinBGPIFXDcvo0IafTTRraVeLUOtJQVwwHnmdO%2FTRQDZQ2omh%2FBtapZDMYjyrRFJxOqMJNIblByA%2BnByrvLGzk635sMyh1hC69pyaYZjz2JChVh8W%2BOPrSm%2FJ3c0d93UXT4hnrpO4iExthPrNzsuRjK%2BgPN5lYVYUcq7G0cpFXZuc1QVGyom5rVxlXYKDWQi1kFqHQ4ZJlsuSILsrbTyAZDPOHVbz5Ap6Hc96IYf3mDeKYAeAr%2BV96CQpa6fTEJ8UfXmMdP%2BSw3DAxxSabdwsZC%2F7Dktq2rLRR6jDHwT92FBFJs3kAmP8VhcGX3oEthh5ByGd5%2FaiNWN88t8MzPwHwA4pKq979O2H7ARFAEBUS1V6NENO2Kyahx0HXIcEEZVvBPb9r6M2o5CJqpP2XnU1JAyTQrIclEbiy0QgFKncF6oq14KUXwn8Y90yCT7fOPEG%2F4K%2FmBIwGO1QijzAmBJepmqvqzpjV9U9YATWVDJE02NWFo0NXN%2B1QqxKdBDDklb7JBjqkASvt77uXjx2drp4RKAqaesvDbWY3lDA%2FaSekn8d%2B%2Fl47fGdihL69eqv2yGai3dBlukBwN0Jb7gAeIABNKjaa1Cv99ZPVMjcv18fha7qohhSB9RsBRuqvuoaXpbS25q5URHlbPtIv4MgEgxKeh98jmC73pi9eyJ4dgRzzbgn2YJjszBh%2Fi9ifUHknyOeCAUwtFfTyBWPCErlxSZ%2FzZwTl%2BGFRi8TK&X-Amz-Signature=866c4f1b12543acb432ce768a22b2a364aad402941087d67c98349a7fe77f3a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGS4UU32%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T020723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDM6FbOJkXXePA9FY2o8dJkrUPEMX3KwKGVHb1CdZb2ygIhANAeFwU29V%2B69G1Ss4IwuZVJ7CZuHJFql%2BKxzpNVX4rYKv8DCCIQABoMNjM3NDIzMTgzODA1IgzNaMBBWjktvNSdNg4q3ANUDrSeJhTo%2Bb9ptdwu1nGVBs%2FAvplaPE17VtO%2FG6ji54GPq4c10lJjzNqnMGhttiWzZzGPmvGKBMFQs14cisUdQBOGPpMnhBf45e47shCZeTABgJMogRvidmqIfkiGCEAinBGPIFXDcvo0IafTTRraVeLUOtJQVwwHnmdO%2FTRQDZQ2omh%2FBtapZDMYjyrRFJxOqMJNIblByA%2BnByrvLGzk635sMyh1hC69pyaYZjz2JChVh8W%2BOPrSm%2FJ3c0d93UXT4hnrpO4iExthPrNzsuRjK%2BgPN5lYVYUcq7G0cpFXZuc1QVGyom5rVxlXYKDWQi1kFqHQ4ZJlsuSILsrbTyAZDPOHVbz5Ap6Hc96IYf3mDeKYAeAr%2BV96CQpa6fTEJ8UfXmMdP%2BSw3DAxxSabdwsZC%2F7Dktq2rLRR6jDHwT92FBFJs3kAmP8VhcGX3oEthh5ByGd5%2FaiNWN88t8MzPwHwA4pKq979O2H7ARFAEBUS1V6NENO2Kyahx0HXIcEEZVvBPb9r6M2o5CJqpP2XnU1JAyTQrIclEbiy0QgFKncF6oq14KUXwn8Y90yCT7fOPEG%2F4K%2FmBIwGO1QijzAmBJepmqvqzpjV9U9YATWVDJE02NWFo0NXN%2B1QqxKdBDDklb7JBjqkASvt77uXjx2drp4RKAqaesvDbWY3lDA%2FaSekn8d%2B%2Fl47fGdihL69eqv2yGai3dBlukBwN0Jb7gAeIABNKjaa1Cv99ZPVMjcv18fha7qohhSB9RsBRuqvuoaXpbS25q5URHlbPtIv4MgEgxKeh98jmC73pi9eyJ4dgRzzbgn2YJjszBh%2Fi9ifUHknyOeCAUwtFfTyBWPCErlxSZ%2FzZwTl%2BGFRi8TK&X-Amz-Signature=0dfb02eb51e6167a5510a49953d783930173c52445c57841312a610b53ac01af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

