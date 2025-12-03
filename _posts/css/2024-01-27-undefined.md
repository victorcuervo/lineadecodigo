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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K3Y6DBC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDbS6NGHuFCs4hMxgrXKnDpHvDLz9rIDRSK7gIBk0UQLAIgHX3hzWUbpKPzQNBduRBF9kCgtUJU0ifk3vmXUew2DYwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOemjQL2O3oMlVjpaircA1lwFawB1Sn%2BPSrC0J5Pa4r638PG2ZST1FVBsIbi1GgW1Kr%2FxoecuEYYolYx8BcIDcElMnxbNOmXswd4hfLOCljuXmTfcj5I96Pns5tKG1a6xiA2ASeqkBFOFV8h9RsRP66ErqDDNIsnWvuIpGVGeSEIkuYLtl5Iy96il3sQJWPSax3b75ULGJ41Eb24ksK7ggYmqwC%2F65iksemEmYt8FbYrWy43xdh75LKAnc8EtLdHgCZCwCxrmuuvPLyF6lePk8oFyBoo3cfG6j1i%2BQCGnJAQjHHtSIBEFr5VzIe41c2pZXiTiKWaXMP0DZ4CPcoxxNsL9M1v9g1UDY03ZxVPw6E%2Bf%2BmJV1r0qI%2Bd93zax6CeKQV5cm2K%2BPdInUTjL67Tae%2FdWT1flrsM0%2BscPm0qannIW2AcZzpfO9V72D9zzWIlGSyqdo%2FeKkwtsbHKGjc5ASRMojjZ6tJfGf67ffn%2BOCx9LuJGfvi4EcxAN5jzBp26ZNKAvKrCZ%2BiyfM%2FRhXMiTgzkaz%2BOc0Mh1dzN7YRXGWOYj9CXL31j8MgN0E8f7RM48Guql8U%2BATv640awdeyHdUP4S2HeYjMM0WEBnZBaixSI1hDwv3FG9P%2BbbY12OHdszsRFhXiDO3bXrIuGMOqWvskGOqUBY9yxxJhxpjiVlkj3yOrJ23f8ThM0qUlJExf2d6gD8vIdwzn92UN54%2FCzc%2Btkue%2FRziebdwt%2FhqxzQH4hpfusiVEcv1CCWl7PlgGdomY6ACLVgRXK%2Bj1uKMJbN26cN2v2PynfRQ9Kx4CsT9c5BbDRuE%2FXf6jg6eMdGu6N9JUwHdEQpLBou%2BoLSL3bFIlh7LTNwIKvM6VC75yMg4XhZAH91si0Wyfp&X-Amz-Signature=a30b5701c489fda7608e1d84cae98322c7270efd4b4aa7a3a8d53927eb7e2f45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K3Y6DBC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDbS6NGHuFCs4hMxgrXKnDpHvDLz9rIDRSK7gIBk0UQLAIgHX3hzWUbpKPzQNBduRBF9kCgtUJU0ifk3vmXUew2DYwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDOemjQL2O3oMlVjpaircA1lwFawB1Sn%2BPSrC0J5Pa4r638PG2ZST1FVBsIbi1GgW1Kr%2FxoecuEYYolYx8BcIDcElMnxbNOmXswd4hfLOCljuXmTfcj5I96Pns5tKG1a6xiA2ASeqkBFOFV8h9RsRP66ErqDDNIsnWvuIpGVGeSEIkuYLtl5Iy96il3sQJWPSax3b75ULGJ41Eb24ksK7ggYmqwC%2F65iksemEmYt8FbYrWy43xdh75LKAnc8EtLdHgCZCwCxrmuuvPLyF6lePk8oFyBoo3cfG6j1i%2BQCGnJAQjHHtSIBEFr5VzIe41c2pZXiTiKWaXMP0DZ4CPcoxxNsL9M1v9g1UDY03ZxVPw6E%2Bf%2BmJV1r0qI%2Bd93zax6CeKQV5cm2K%2BPdInUTjL67Tae%2FdWT1flrsM0%2BscPm0qannIW2AcZzpfO9V72D9zzWIlGSyqdo%2FeKkwtsbHKGjc5ASRMojjZ6tJfGf67ffn%2BOCx9LuJGfvi4EcxAN5jzBp26ZNKAvKrCZ%2BiyfM%2FRhXMiTgzkaz%2BOc0Mh1dzN7YRXGWOYj9CXL31j8MgN0E8f7RM48Guql8U%2BATv640awdeyHdUP4S2HeYjMM0WEBnZBaixSI1hDwv3FG9P%2BbbY12OHdszsRFhXiDO3bXrIuGMOqWvskGOqUBY9yxxJhxpjiVlkj3yOrJ23f8ThM0qUlJExf2d6gD8vIdwzn92UN54%2FCzc%2Btkue%2FRziebdwt%2FhqxzQH4hpfusiVEcv1CCWl7PlgGdomY6ACLVgRXK%2Bj1uKMJbN26cN2v2PynfRQ9Kx4CsT9c5BbDRuE%2FXf6jg6eMdGu6N9JUwHdEQpLBou%2BoLSL3bFIlh7LTNwIKvM6VC75yMg4XhZAH91si0Wyfp&X-Amz-Signature=060ec2276702f554a516216583aef643474437b2bfd61d70f17579d70370dd3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

