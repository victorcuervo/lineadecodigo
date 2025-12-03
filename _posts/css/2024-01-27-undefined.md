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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G7FYM4V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIDv6TZGu%2F%2FQkou2WlflHMNoUJNQrFYrUyBLsXxL1xPsZAiEA0mao5wJHmnT1DS87QVI2%2B2gd1xWTmVI47AhgXbUriKYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDH%2F1mfWsLlIbvykC0CrcA2MeMsUdluDjUny0NQg%2Fe9h0GLbQ4HVEj4axxiMMrz2nsgFDl6wPonTFh%2Fl3ahMx1cvi2D6bc6tSZAhehaZKdOHN%2B3nfqCzqEC2ba%2F8ORQ370fu83jdSkV4a2fV%2BNi%2BSmRgyM4wyjbAAwuLlP2g4rPfqJI4AbwtXCO84HyzjG1lMkfEuKoC1bChn6drHlLAU7x7EkrTcm4mFR2zJFWnEXZCu7vuJTsrLA3mNFGJTE2vVRJgiofpjLPeA2BVWQYDq56SmdaMOCXhQ%2BqeDyd1O3vWWa207g05fVuXGuJLx8HvROmuTNz%2FgsRsikRTkBnvkBC3G3XUP3QndFtFLPsxnNeHGK%2B6iW0mf%2FgQA9gRZ%2FRWSnqdntcDk6LID0cIa%2BcEd196Lqfh06HbNiFYl6S3YPy15WeeFmmGjOSUwr6bmq6YXnVXHuyNiXRDw00GK%2B2cotDXIFcFRgOeIaN5wGB1hsc8AJdcjr8MoDF%2Bxd5PPwQBxKbG%2B%2FkWv25w10GvPoUO%2BGxRMEpzgz9RQHgcAuJi4waAcGTyWNQebZj1zzYOe3dJFMErXxTb8c%2FfKPJ3Qui2%2BoPbRk7tK4W%2BDMzqzK2oBjnLiLq6mRwYQBPLiO5HjQw15ZuRbhU3UNbrZ3Rf3MNTBwckGOqUBbHcYTyh2UauvT6GTq3SiG3v1VYPdsddIRO88UfBml%2Fc04P5FZkZVtKwEnqDavAX%2BIpArwLhb0TByWFhsnEUN1QBFwQNbvjdtWso%2FRHumr1RvSZqydVaFIqfbm04Z1FBY3uF0%2FYFaaRwCGdrlAV%2BJGpTKp%2FryJcvOv0U7twIWT7QlyOfZ07gEx0QU0cqroVOziB5%2FdR%2Fw%2Bw7RdfkJxAHQpE5v%2BBQ3&X-Amz-Signature=d1895e33295291752f0aa2c56241a9c4d7e38effb62e96a495e6ff759e186c42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G7FYM4V%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIDv6TZGu%2F%2FQkou2WlflHMNoUJNQrFYrUyBLsXxL1xPsZAiEA0mao5wJHmnT1DS87QVI2%2B2gd1xWTmVI47AhgXbUriKYq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDH%2F1mfWsLlIbvykC0CrcA2MeMsUdluDjUny0NQg%2Fe9h0GLbQ4HVEj4axxiMMrz2nsgFDl6wPonTFh%2Fl3ahMx1cvi2D6bc6tSZAhehaZKdOHN%2B3nfqCzqEC2ba%2F8ORQ370fu83jdSkV4a2fV%2BNi%2BSmRgyM4wyjbAAwuLlP2g4rPfqJI4AbwtXCO84HyzjG1lMkfEuKoC1bChn6drHlLAU7x7EkrTcm4mFR2zJFWnEXZCu7vuJTsrLA3mNFGJTE2vVRJgiofpjLPeA2BVWQYDq56SmdaMOCXhQ%2BqeDyd1O3vWWa207g05fVuXGuJLx8HvROmuTNz%2FgsRsikRTkBnvkBC3G3XUP3QndFtFLPsxnNeHGK%2B6iW0mf%2FgQA9gRZ%2FRWSnqdntcDk6LID0cIa%2BcEd196Lqfh06HbNiFYl6S3YPy15WeeFmmGjOSUwr6bmq6YXnVXHuyNiXRDw00GK%2B2cotDXIFcFRgOeIaN5wGB1hsc8AJdcjr8MoDF%2Bxd5PPwQBxKbG%2B%2FkWv25w10GvPoUO%2BGxRMEpzgz9RQHgcAuJi4waAcGTyWNQebZj1zzYOe3dJFMErXxTb8c%2FfKPJ3Qui2%2BoPbRk7tK4W%2BDMzqzK2oBjnLiLq6mRwYQBPLiO5HjQw15ZuRbhU3UNbrZ3Rf3MNTBwckGOqUBbHcYTyh2UauvT6GTq3SiG3v1VYPdsddIRO88UfBml%2Fc04P5FZkZVtKwEnqDavAX%2BIpArwLhb0TByWFhsnEUN1QBFwQNbvjdtWso%2FRHumr1RvSZqydVaFIqfbm04Z1FBY3uF0%2FYFaaRwCGdrlAV%2BJGpTKp%2FryJcvOv0U7twIWT7QlyOfZ07gEx0QU0cqroVOziB5%2FdR%2Fw%2Bw7RdfkJxAHQpE5v%2BBQ3&X-Amz-Signature=3663843dc826d56baa84a99448c1bb6445b9397793bb1e7e0a592b231836510d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

