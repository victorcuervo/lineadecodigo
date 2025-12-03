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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH6BWTWM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIFzquQJau3JGKVW11FhIzO8EAhAGbWkLBk0eftGRHcQrAiEA%2FcPbWYTBsislHBf0OBWHcJSBbFmlpV0fjDdk%2FR2Wu7Yq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLab0Oi0mfPT6Lwf0SrcA0jBeUSR%2Fk0FwH57qzUjaEJmNWUX1p0W2fpB1V8XapIPfF6zF4F3xVAwYEFncYvZc0eZBF%2Bb7do%2FNzIiRoWw%2FL2y0Jp%2BUinmHzUsgrfJJw1FInYze743f2%2FSU2m1V6rcDtN6ROvL1wcIdGGvV1qwlj9qkWMICicbQl0x559TaA9oQRwXjDAkRbiQsvgpNl23SMGuK7ZUbuuzkrQmd%2FBxQTl9dOEnbBddcdFpsFqlXnAaeBcNA2rs7AdUh47Fo5WubfXR%2F3N5PfQUeCFJmteQkKejEZgf%2BpoBQoZOaZOiGf1su2QhFoS7aA7x11O35%2FgkZRvMXKhZN1qQE%2F%2BOXXyEzFHBVIE0clV21ys9L2sv0f6oBZrN4Ch%2BH8YXhdyvkESzeu6aHZ2lvo6OLq82CptE1LFtGL8XSY9fmGcRedYwxIFV2GkyQeas096PvGtMzsfMSGPPn9%2FY80HA6mQaez53AqXeBB7bAONq1Zd29W8zpmVmRS9fcSgBDwyoNrTPdFf%2FhYcS2JyH3owCsRI55cWHWCmKv2ABf6UzJgMF5LjtKqdw6hmRfRH0MhEZX7oVy%2Fi1DAQ0Lc6tUYb8wo4hoN4mJn9QddahTJt5VlW3Mh4dOLkcwbGoo%2F7oJHdJqZS%2FMLOSwMkGOqUBMhQle%2BHle9uRgBudxcPwWmfc6Ks8RCvuo%2F0DpmPVdIPQCd7MTVLM55fQkh%2BWlb0JHA1Ji3bbf7QdOKKcnA95rBCQprMkMS43i7uov5qAiXy8dPa7QGvOwd8XCAcHkMf3qMIzTTve33i%2Bx5rhmHw4iKH5UAPvxTVUsJOVVhmzepYyiVbQUebGIJLBpzS6hcoEU0k8R7jfYKUzbrh%2FDnxKTkBExAUl&X-Amz-Signature=0934f9c32dbd21ee2342dd8396f61c671fbb1e610ab41b2d072f4b4e1af6c754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UH6BWTWM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIFzquQJau3JGKVW11FhIzO8EAhAGbWkLBk0eftGRHcQrAiEA%2FcPbWYTBsislHBf0OBWHcJSBbFmlpV0fjDdk%2FR2Wu7Yq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDLab0Oi0mfPT6Lwf0SrcA0jBeUSR%2Fk0FwH57qzUjaEJmNWUX1p0W2fpB1V8XapIPfF6zF4F3xVAwYEFncYvZc0eZBF%2Bb7do%2FNzIiRoWw%2FL2y0Jp%2BUinmHzUsgrfJJw1FInYze743f2%2FSU2m1V6rcDtN6ROvL1wcIdGGvV1qwlj9qkWMICicbQl0x559TaA9oQRwXjDAkRbiQsvgpNl23SMGuK7ZUbuuzkrQmd%2FBxQTl9dOEnbBddcdFpsFqlXnAaeBcNA2rs7AdUh47Fo5WubfXR%2F3N5PfQUeCFJmteQkKejEZgf%2BpoBQoZOaZOiGf1su2QhFoS7aA7x11O35%2FgkZRvMXKhZN1qQE%2F%2BOXXyEzFHBVIE0clV21ys9L2sv0f6oBZrN4Ch%2BH8YXhdyvkESzeu6aHZ2lvo6OLq82CptE1LFtGL8XSY9fmGcRedYwxIFV2GkyQeas096PvGtMzsfMSGPPn9%2FY80HA6mQaez53AqXeBB7bAONq1Zd29W8zpmVmRS9fcSgBDwyoNrTPdFf%2FhYcS2JyH3owCsRI55cWHWCmKv2ABf6UzJgMF5LjtKqdw6hmRfRH0MhEZX7oVy%2Fi1DAQ0Lc6tUYb8wo4hoN4mJn9QddahTJt5VlW3Mh4dOLkcwbGoo%2F7oJHdJqZS%2FMLOSwMkGOqUBMhQle%2BHle9uRgBudxcPwWmfc6Ks8RCvuo%2F0DpmPVdIPQCd7MTVLM55fQkh%2BWlb0JHA1Ji3bbf7QdOKKcnA95rBCQprMkMS43i7uov5qAiXy8dPa7QGvOwd8XCAcHkMf3qMIzTTve33i%2Bx5rhmHw4iKH5UAPvxTVUsJOVVhmzepYyiVbQUebGIJLBpzS6hcoEU0k8R7jfYKUzbrh%2FDnxKTkBExAUl&X-Amz-Signature=d5f9b34c75e12f083bbcff0258b835bd8f0980cfb8617a3806287d872cc46663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

