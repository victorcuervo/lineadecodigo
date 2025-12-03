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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUNRI3CL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T123426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDM%2FyqejUNh5bdlVKbr5A60yPkSapsdij8jMhK1RNgBVAIgTSH%2BGDlX6qwcKg9Q3vpz4vx28VrFfJ8K%2FBR%2Bf0vEeTMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPAAhLYF4vZUhOihrCrcA6lXfxrN25Gvc%2FSdKSPh1cwcaPwDuYF20WR4E0Vz1%2Bsfssy6lGIx%2B%2Be8NADh6j4%2B3oP4X0OQequCLYNQcj4lIf40u3Xc1ZpAYWsk7WsAiyYqGGeFY%2BsWlhr5vtaDGPnqF2%2FpiYwDORziQxjKBmGLyfHXzpkUzZJXxzKKHqE3yS2XUsysW6nOzc%2BdvRZqR2vwlY0OH%2FGxUreDHOZLzxL0N%2BVFZcKZ6p4%2FNeOQW8y3HwN7jSSnF6X286v4qfDV3VOXVkUhaajXXNGhvsTr0qWIQ2MFO5%2BHES1%2F7eIMXa6JzkA7eIdK08dhJK50l6yYxvxgIMTjUOQvJf7lVY9yySeMGH5lW4bWrgAboZ2kFyQ6HbSU9GAWb0TLb3%2BfyPdWTFRF6qu6ri6NO0MRKu7ulXGUu9WuZog0goskbAxjv6xLlQnI3qJeeh9s6SfPuOqz37cbtD7ObQA%2Bss8NhvI2GewGlb7oxtoYhYRAi5PHLF3pb2jtYeyv1wWcY4%2B53%2BHlGd0322WzwvPyONGrscfAovnYwZapdofLAFBdHEQfMvI64%2B2i0GG6Bxaw2H1H4TBbmWEHc%2BbBmkm8JmZqS4%2BGqPJcg%2Bl%2B6RzOUh2B46U0VzNrBzhHMUwXkdNDCmqwPskeMLzNwMkGOqUB4sgzQ%2F%2BwQBVj9HIPXP%2BDu5fbpfgoi8fz0CjTVZoqRynfFKF7%2BB9mVYeQle60vmH0caXe5bIbwaUaikk1iSroiaE1RTj9Ds4e9r1DyLWGY5QJJKKBtFquLdNGuBj85jp%2FLwS8WNFy5N%2FOPUjTZA4HSDjp5GrEyxNq4LmBbfwp7Ardt4EXgfbk5IOHkwnEHuSGeRXEdu7IKMU7Wu2uTmykBbJS%2FNly&X-Amz-Signature=6d4412cae363fb6658ea80281cf2b949c2e77b2db876fc41cfcac5e07064153e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUNRI3CL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T123426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDM%2FyqejUNh5bdlVKbr5A60yPkSapsdij8jMhK1RNgBVAIgTSH%2BGDlX6qwcKg9Q3vpz4vx28VrFfJ8K%2FBR%2Bf0vEeTMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPAAhLYF4vZUhOihrCrcA6lXfxrN25Gvc%2FSdKSPh1cwcaPwDuYF20WR4E0Vz1%2Bsfssy6lGIx%2B%2Be8NADh6j4%2B3oP4X0OQequCLYNQcj4lIf40u3Xc1ZpAYWsk7WsAiyYqGGeFY%2BsWlhr5vtaDGPnqF2%2FpiYwDORziQxjKBmGLyfHXzpkUzZJXxzKKHqE3yS2XUsysW6nOzc%2BdvRZqR2vwlY0OH%2FGxUreDHOZLzxL0N%2BVFZcKZ6p4%2FNeOQW8y3HwN7jSSnF6X286v4qfDV3VOXVkUhaajXXNGhvsTr0qWIQ2MFO5%2BHES1%2F7eIMXa6JzkA7eIdK08dhJK50l6yYxvxgIMTjUOQvJf7lVY9yySeMGH5lW4bWrgAboZ2kFyQ6HbSU9GAWb0TLb3%2BfyPdWTFRF6qu6ri6NO0MRKu7ulXGUu9WuZog0goskbAxjv6xLlQnI3qJeeh9s6SfPuOqz37cbtD7ObQA%2Bss8NhvI2GewGlb7oxtoYhYRAi5PHLF3pb2jtYeyv1wWcY4%2B53%2BHlGd0322WzwvPyONGrscfAovnYwZapdofLAFBdHEQfMvI64%2B2i0GG6Bxaw2H1H4TBbmWEHc%2BbBmkm8JmZqS4%2BGqPJcg%2Bl%2B6RzOUh2B46U0VzNrBzhHMUwXkdNDCmqwPskeMLzNwMkGOqUB4sgzQ%2F%2BwQBVj9HIPXP%2BDu5fbpfgoi8fz0CjTVZoqRynfFKF7%2BB9mVYeQle60vmH0caXe5bIbwaUaikk1iSroiaE1RTj9Ds4e9r1DyLWGY5QJJKKBtFquLdNGuBj85jp%2FLwS8WNFy5N%2FOPUjTZA4HSDjp5GrEyxNq4LmBbfwp7Ardt4EXgfbk5IOHkwnEHuSGeRXEdu7IKMU7Wu2uTmykBbJS%2FNly&X-Amz-Signature=c7c5d3055a2d0798a6c3073e622651bce4328fe582b4da2daf8b52472661f601&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

