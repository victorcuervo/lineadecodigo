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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7JDPHR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEN7R8rG7goGr0sndfli6nG9MebHsdFeedtZzYDvzA5%2BAiEAvlmvN%2BGti5dLGj%2FsTBO4ZDm4hhtXqx8QO4eYktAXP4kq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNllM8gHfGlW%2FUEGDSrcAxrs28gLzdmDBAO8AHQeoSZa4hnVoEfSxUqRonPYiKGeVY1QKWRwwgWOQQJNkdw1nhcwn6RmSTP6D2NOyCbObz14F7YcpdfL4iyHwUtk5oORHgk1x91TOn%2FwNNONbGTaaLZcxK6rAbw9rLGIxGaFP%2FcVqReNt5%2Fnq3sdOwR2oK7hSa0aFm7CE5%2BxJZXSHwVwDi6QuxgUxK%2BejJwBX%2FIbriUl8zGL8vovsCJ%2BERXEbiWhQ5bGHpwsUgVqvKdXfLLVMPHUwwp0ycUnHfwQSdftXzIWHA%2FTH4oE1%2BbQGeCMLut0agp%2Bc4BF84%2Bd0YI4nahcefSuYPoE1UpMqjPzlOX1l%2FIb8TSll0a95mFvctvyJPtBUlmaYt9klRRHp4TquMVUAZPcAQNazNCkb4KSfVJR%2FUWaTgVPTwJzPUF5yBEjh7acG4hVjlFTvz3vOTvUGl3VAzcn0TUlIHxSbrWqBjgRENMd%2BD9jpf66K5vAmhJ4Sd4wzIq4gfc4NqrllSLN55u89qQAbyji1HON2yvS1HtbHuzLfgoEnA2J%2B%2FKVK31a5oF4AjW4tTTMY%2FE2q65OiHJs5t4pHYSI9QWWCkrfyIcjjmXhWk82SV9FYzehvk7hYhsjfO5glVZIDTXXugQqMNuHwckGOqUB2iGdEJWQwGfomzSIQjbqAF0XTw%2Bplx7mLZSTZGuruR0tgqaRMzkuAgiBENaB7Zpz5U%2B10WQFydcqmuyCfdcBoWw4InHiZncUjx4G7cXpWhcaI1TBpc1bUfCH4fKoHo1ISiRDLvwnNZOqy4lxq9LRoUylPchjjtcDUTXWCCIa43qfMYlyHnTch%2BpYOPBvw%2FAeOCknpzKoGG86cPrdqUoigfbfKLoj&X-Amz-Signature=ff8205d04d962e28e404690d8cc4c49add8d46eaafe9712acf788e7183d893d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7JDPHR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T140953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEN7R8rG7goGr0sndfli6nG9MebHsdFeedtZzYDvzA5%2BAiEAvlmvN%2BGti5dLGj%2FsTBO4ZDm4hhtXqx8QO4eYktAXP4kq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDNllM8gHfGlW%2FUEGDSrcAxrs28gLzdmDBAO8AHQeoSZa4hnVoEfSxUqRonPYiKGeVY1QKWRwwgWOQQJNkdw1nhcwn6RmSTP6D2NOyCbObz14F7YcpdfL4iyHwUtk5oORHgk1x91TOn%2FwNNONbGTaaLZcxK6rAbw9rLGIxGaFP%2FcVqReNt5%2Fnq3sdOwR2oK7hSa0aFm7CE5%2BxJZXSHwVwDi6QuxgUxK%2BejJwBX%2FIbriUl8zGL8vovsCJ%2BERXEbiWhQ5bGHpwsUgVqvKdXfLLVMPHUwwp0ycUnHfwQSdftXzIWHA%2FTH4oE1%2BbQGeCMLut0agp%2Bc4BF84%2Bd0YI4nahcefSuYPoE1UpMqjPzlOX1l%2FIb8TSll0a95mFvctvyJPtBUlmaYt9klRRHp4TquMVUAZPcAQNazNCkb4KSfVJR%2FUWaTgVPTwJzPUF5yBEjh7acG4hVjlFTvz3vOTvUGl3VAzcn0TUlIHxSbrWqBjgRENMd%2BD9jpf66K5vAmhJ4Sd4wzIq4gfc4NqrllSLN55u89qQAbyji1HON2yvS1HtbHuzLfgoEnA2J%2B%2FKVK31a5oF4AjW4tTTMY%2FE2q65OiHJs5t4pHYSI9QWWCkrfyIcjjmXhWk82SV9FYzehvk7hYhsjfO5glVZIDTXXugQqMNuHwckGOqUB2iGdEJWQwGfomzSIQjbqAF0XTw%2Bplx7mLZSTZGuruR0tgqaRMzkuAgiBENaB7Zpz5U%2B10WQFydcqmuyCfdcBoWw4InHiZncUjx4G7cXpWhcaI1TBpc1bUfCH4fKoHo1ISiRDLvwnNZOqy4lxq9LRoUylPchjjtcDUTXWCCIa43qfMYlyHnTch%2BpYOPBvw%2FAeOCknpzKoGG86cPrdqUoigfbfKLoj&X-Amz-Signature=b20902b6d6c30dd04b6d971bd9858939dcc9f791f1ad0cc847dd3ec697177aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

