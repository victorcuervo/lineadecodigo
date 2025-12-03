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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVTOMVC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDp4RMKGcIkdEJYQaE7M7eWwGCXbjANSilNXDbMXwWm7AiBBgqgY7nb4yxbeE4RxzFKJUdyHNttr9oZ9HuecYKnsbCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMM0xNZyS5eQ9HezAvKtwDN7HuEOmNlzdMdrDPs6%2BKP8aapVUQUvTBLDOQGd6kLpGVOddaghwqpB2ldatmyYNyTG2B4dFMsgwBA%2FqyFScIct1ech1YdTcstCQyg0pX5TgM3nnPPWCTcqW7UGnT%2FVf50gdEpegbEakqNQV%2B1Kg9HNltLZwHrh6AlB0jY%2Ff86psQUej55PcdKGdQGNv8OD1DddueW1wkL%2FRsT3kLvAVxYLLw7QywXrpAmuwISys82Li0l%2BCKYLBvUmQNKROZdt9wveXccWJhbs0d5dljbp2kmxn1jqBkmm1bmx2Kh%2Fp3tiLBQ1J2w%2FPS%2FmtXtFSLHVXcbgqF9vos3nc%2FeVwJsGmDkxrm0jgt%2Bu%2Fwe8VN9ZHSN%2BBW8lvAoOPUpSsVPyTJMsvdB7Gi82IM2bO5HU3FK04jHMtjeqRKCRruIGjPDBr6gUzmFeyZH2Oq4k5Y1WexZo3xL7TvXzLrIactz9TxOhF%2FIGNlUHXkuczfgEcuc1jjnk%2Bns3msRXdtyoUIcToNeTTBuc7Fuibq%2Fz0y8vZ7G0sgOsSbk0TDqsTntQAzLTGSlTZ6zrbDFJdo0SfRNLrWbMB03kpKs%2BIksWUhcawOqu4QBd5PDi6QQGPMPV%2BI6A5guwJISNyMo1eZFHNK86AwwYfByQY6pgHSWILrtwaC%2BvBMw%2Bjep7HTk43i8FigXQYtCdj%2Bb%2ByHGi9l%2BKUeBdOrQPYukklNoAR5J86Jfe0cioRty3qZ6uPAIpX6HXhU7LAdKsmv2YF%2FKrrx9MJQ2NFm7TPSwTXq36DLWmucgC4oCrx%2BntoJacevFraJm2MFbr6ipVeNM8aVSJlfa9qRlJsO3qpXEI0hsjtytfz0D9AZgi27kWR47L%2Fs276R19Yw&X-Amz-Signature=cc5ed63ff512bc4106553e5f9e08e56d19986721ac1afab25078000ed334ec8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVTOMVC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T145705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDp4RMKGcIkdEJYQaE7M7eWwGCXbjANSilNXDbMXwWm7AiBBgqgY7nb4yxbeE4RxzFKJUdyHNttr9oZ9HuecYKnsbCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMM0xNZyS5eQ9HezAvKtwDN7HuEOmNlzdMdrDPs6%2BKP8aapVUQUvTBLDOQGd6kLpGVOddaghwqpB2ldatmyYNyTG2B4dFMsgwBA%2FqyFScIct1ech1YdTcstCQyg0pX5TgM3nnPPWCTcqW7UGnT%2FVf50gdEpegbEakqNQV%2B1Kg9HNltLZwHrh6AlB0jY%2Ff86psQUej55PcdKGdQGNv8OD1DddueW1wkL%2FRsT3kLvAVxYLLw7QywXrpAmuwISys82Li0l%2BCKYLBvUmQNKROZdt9wveXccWJhbs0d5dljbp2kmxn1jqBkmm1bmx2Kh%2Fp3tiLBQ1J2w%2FPS%2FmtXtFSLHVXcbgqF9vos3nc%2FeVwJsGmDkxrm0jgt%2Bu%2Fwe8VN9ZHSN%2BBW8lvAoOPUpSsVPyTJMsvdB7Gi82IM2bO5HU3FK04jHMtjeqRKCRruIGjPDBr6gUzmFeyZH2Oq4k5Y1WexZo3xL7TvXzLrIactz9TxOhF%2FIGNlUHXkuczfgEcuc1jjnk%2Bns3msRXdtyoUIcToNeTTBuc7Fuibq%2Fz0y8vZ7G0sgOsSbk0TDqsTntQAzLTGSlTZ6zrbDFJdo0SfRNLrWbMB03kpKs%2BIksWUhcawOqu4QBd5PDi6QQGPMPV%2BI6A5guwJISNyMo1eZFHNK86AwwYfByQY6pgHSWILrtwaC%2BvBMw%2Bjep7HTk43i8FigXQYtCdj%2Bb%2ByHGi9l%2BKUeBdOrQPYukklNoAR5J86Jfe0cioRty3qZ6uPAIpX6HXhU7LAdKsmv2YF%2FKrrx9MJQ2NFm7TPSwTXq36DLWmucgC4oCrx%2BntoJacevFraJm2MFbr6ipVeNM8aVSJlfa9qRlJsO3qpXEI0hsjtytfz0D9AZgi27kWR47L%2Fs276R19Yw&X-Amz-Signature=c76eb403499e2ccccd027575c73eedb32adc39902b4fed40a0a46060aa2f2d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

