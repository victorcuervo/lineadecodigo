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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5PPO5SI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T053311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICv%2FmL2O5LnQVuRWSDxdfi6rIt84EAvaXqQl3FDZTUFgAiBEM8u8pklKKhYup46pmfFTrWSavDQQ9ZOIdBt%2FcATBwCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMqQA5sCTlf1eILkstKtwDfWf%2BZNzbuRNRfV3FNWOrD%2BvVnL5YmsKzBodXEbuW2ZbCXJWYSHrItw06Z8OGsA3LEDh8CnliKJqBkhAAcSgOWj8OUq5q2nAonfJR84O5R8xY5g9Ndi8e0hh%2BkEFYpDud0FXCcTyy%2B9tLUd3atralkAok5WLTBuDha77sIxW6ulttxR9%2B8A1vUODRwqM1jtvL4KSmyFXZt1wNkNs6Cfcz%2FPJTHBhBFjvQ5lVQ9LMy%2FzksQRKmYHBUwXDae3f1p7jzmIpAwlfHBz0RgFjdYOMT1ZnX3O3H7ZDJVCz8xywDLhoJ6El9Yn5hliWKHgQ6zDQXTPzbKcXBB%2BHFm3t9S2PYv5FuyrsQQexR%2Fc8gN98zwlQmor12t6d%2FMMNqqdqdCpsW0%2FxbVYIMbKFNedArANGzmRQ97Ikz6hoDvqYTanp0nZEXcKhjuq0LVbK1O3ZtlSwIQggsbPm5UX5r5WTJe6SW99rOxtj25t%2F5%2Bvg9vjxr%2FcViYFkD3FSmJHfXzZLJwoXFehojmEYpXiA2mxZwvD2ZF6JLaJeLZyB9k%2FvQebvpdDui9keaxkvcOOjcuD7YjX%2FdEBEHqmhlAJzYPxU8B0TyT33pE6qU4vNcGM%2F5cXAkQZ%2F7XLDs%2BzUEZyrlUJ8w2Ja%2ByQY6pgEdgoq1e01AG%2FfwTpvWBap6tOXqZCMNkjh2dkoPjnSempf%2Bz74WcYIw9FNrBTBSkIMEpV2X0ABXwmLvYMZsBQsg8qdfyMdziBG1Xkvj3Tt6fN%2Bt5XOsxUebH4lGa0uU7sS2gsfQhdewEQP6%2BxINlv769Tt6xsHEMwhcbSX57XlftxPFcm4Sn54I%2BcpKXkc7W%2Bj%2BVS59XrkozHRYD7t8rkYrp5mMLkOX&X-Amz-Signature=a6464c88c9883a8613d1f09f442ff55ddaee24f79f02128db08668ad504e698b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5PPO5SI%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T053311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCICv%2FmL2O5LnQVuRWSDxdfi6rIt84EAvaXqQl3FDZTUFgAiBEM8u8pklKKhYup46pmfFTrWSavDQQ9ZOIdBt%2FcATBwCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMqQA5sCTlf1eILkstKtwDfWf%2BZNzbuRNRfV3FNWOrD%2BvVnL5YmsKzBodXEbuW2ZbCXJWYSHrItw06Z8OGsA3LEDh8CnliKJqBkhAAcSgOWj8OUq5q2nAonfJR84O5R8xY5g9Ndi8e0hh%2BkEFYpDud0FXCcTyy%2B9tLUd3atralkAok5WLTBuDha77sIxW6ulttxR9%2B8A1vUODRwqM1jtvL4KSmyFXZt1wNkNs6Cfcz%2FPJTHBhBFjvQ5lVQ9LMy%2FzksQRKmYHBUwXDae3f1p7jzmIpAwlfHBz0RgFjdYOMT1ZnX3O3H7ZDJVCz8xywDLhoJ6El9Yn5hliWKHgQ6zDQXTPzbKcXBB%2BHFm3t9S2PYv5FuyrsQQexR%2Fc8gN98zwlQmor12t6d%2FMMNqqdqdCpsW0%2FxbVYIMbKFNedArANGzmRQ97Ikz6hoDvqYTanp0nZEXcKhjuq0LVbK1O3ZtlSwIQggsbPm5UX5r5WTJe6SW99rOxtj25t%2F5%2Bvg9vjxr%2FcViYFkD3FSmJHfXzZLJwoXFehojmEYpXiA2mxZwvD2ZF6JLaJeLZyB9k%2FvQebvpdDui9keaxkvcOOjcuD7YjX%2FdEBEHqmhlAJzYPxU8B0TyT33pE6qU4vNcGM%2F5cXAkQZ%2F7XLDs%2BzUEZyrlUJ8w2Ja%2ByQY6pgEdgoq1e01AG%2FfwTpvWBap6tOXqZCMNkjh2dkoPjnSempf%2Bz74WcYIw9FNrBTBSkIMEpV2X0ABXwmLvYMZsBQsg8qdfyMdziBG1Xkvj3Tt6fN%2Bt5XOsxUebH4lGa0uU7sS2gsfQhdewEQP6%2BxINlv769Tt6xsHEMwhcbSX57XlftxPFcm4Sn54I%2BcpKXkc7W%2Bj%2BVS59XrkozHRYD7t8rkYrp5mMLkOX&X-Amz-Signature=e1424dff1b350c3ced9acc821d31097d9b53066f03b22023f2fd6d3c5eca17e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

