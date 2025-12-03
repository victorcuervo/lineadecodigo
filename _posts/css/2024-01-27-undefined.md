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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656RCPWUV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T011728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCIw6ARdHhoEeUxFbMR47gFeJ7KwVirw%2BrfMmVzdodB0QIhANTpnSUXTxkXAgSkj1KtWgYST%2BcpknHW6gOEzAFymZmwKv8DCCIQABoMNjM3NDIzMTgzODA1IgxpNXwBVV4bw98VFckq3ANCjgnCBcpHs6LeqogdtoLbbnNZFtQWVRxkOH73twCOT2TLvXfO2neLLDIbVMJTW%2FyBPJYBniMZShYorFf2r3VJ6cR1U3si8ar7J5XQgnd1itBe7zhIOygcLmiHTIdWLear9D5Ta74te9d48RFIkN1CExfzETawqJ8K7d%2FXMdE4dTzTwyjdjVggbMogkRKrFzH46UXoe5dWZ%2FAk319rwDNNsSf79gQhmhls7ZlzC78qiz3h%2F3%2FRFijn90UjijhQZh9%2Fak%2FJraEDowWJzXnYvekSfhyg%2FDqeJjGj1l7VLanvkMN0Vt7%2FyuLS56vtNnSqg5h%2F0uJj9n6FC4gDyTQ1QT4iqWltU6Dr28lQ4%2BqySiNRmFjdXmKyYLD24vFBs%2FcHusumAHGRGg%2BXGbSVIT8up9mcextkTHh5%2BW4uVRxRpY3SSUffMAfLCThMjrN5n%2B74WvAYy6JK1b%2BZ%2BBh1wnTfsIQtjKPRk6uTEViMQY3JHFzx1ZPFmD7vp5cYirjK2rEb2YYI8C7hPQD0fjI7Kp%2BuufQZiL7TL%2Fx5qfvh3DkWJDXRSXV%2BOPOZndRA4Lc6BOhzsGJ7lfMe3VKN7j6DcNaFabS7DeiXBvIcN6C4nNge4iZygvUIGWNdh35OnIZiSjC0lL7JBjqkAfDodv5seTF8%2FJUSELzvXJPjtIUBRJLP6jT2Rx8hgmmFqlY7Yqw1%2BDSD1vrCrtKMgxS7nj3mJjnVv0IWrJmjYvS4dskL%2FVuXuCGgvDPIbrB%2BZpJnRKaHLLTUSqg2htjfY9AJ0wS7XbQ19QmF8WgFygkCqOaveKfWNFHiKwVqSyB%2FjEZYuu9Dm1fmfGZlZcLxuCnBN%2BejAD1tuRCpQg6%2FitRC6JtY&X-Amz-Signature=d4f12184ec9a704aef0cac00356787e5f347b1744f4d9eeace83ef7905fcf064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656RCPWUV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T011728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCIw6ARdHhoEeUxFbMR47gFeJ7KwVirw%2BrfMmVzdodB0QIhANTpnSUXTxkXAgSkj1KtWgYST%2BcpknHW6gOEzAFymZmwKv8DCCIQABoMNjM3NDIzMTgzODA1IgxpNXwBVV4bw98VFckq3ANCjgnCBcpHs6LeqogdtoLbbnNZFtQWVRxkOH73twCOT2TLvXfO2neLLDIbVMJTW%2FyBPJYBniMZShYorFf2r3VJ6cR1U3si8ar7J5XQgnd1itBe7zhIOygcLmiHTIdWLear9D5Ta74te9d48RFIkN1CExfzETawqJ8K7d%2FXMdE4dTzTwyjdjVggbMogkRKrFzH46UXoe5dWZ%2FAk319rwDNNsSf79gQhmhls7ZlzC78qiz3h%2F3%2FRFijn90UjijhQZh9%2Fak%2FJraEDowWJzXnYvekSfhyg%2FDqeJjGj1l7VLanvkMN0Vt7%2FyuLS56vtNnSqg5h%2F0uJj9n6FC4gDyTQ1QT4iqWltU6Dr28lQ4%2BqySiNRmFjdXmKyYLD24vFBs%2FcHusumAHGRGg%2BXGbSVIT8up9mcextkTHh5%2BW4uVRxRpY3SSUffMAfLCThMjrN5n%2B74WvAYy6JK1b%2BZ%2BBh1wnTfsIQtjKPRk6uTEViMQY3JHFzx1ZPFmD7vp5cYirjK2rEb2YYI8C7hPQD0fjI7Kp%2BuufQZiL7TL%2Fx5qfvh3DkWJDXRSXV%2BOPOZndRA4Lc6BOhzsGJ7lfMe3VKN7j6DcNaFabS7DeiXBvIcN6C4nNge4iZygvUIGWNdh35OnIZiSjC0lL7JBjqkAfDodv5seTF8%2FJUSELzvXJPjtIUBRJLP6jT2Rx8hgmmFqlY7Yqw1%2BDSD1vrCrtKMgxS7nj3mJjnVv0IWrJmjYvS4dskL%2FVuXuCGgvDPIbrB%2BZpJnRKaHLLTUSqg2htjfY9AJ0wS7XbQ19QmF8WgFygkCqOaveKfWNFHiKwVqSyB%2FjEZYuu9Dm1fmfGZlZcLxuCnBN%2BejAD1tuRCpQg6%2FitRC6JtY&X-Amz-Signature=11f0d50373ae4dfee10c03a92312ff5704ef4c2da27dd3ad737cefdd150d7678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

