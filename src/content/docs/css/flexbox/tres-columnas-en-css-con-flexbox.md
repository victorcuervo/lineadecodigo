---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO26GXFJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BU4gkx005DuF4gFIJswpuyjAYYu0cYiv6Trg7%2Fpc4rAiEAr6mbzrkoCb8kNUnbr%2BrvmmiuiNgLC%2FYMMGIgig2mbEMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAkRwzuFQZDvQ3wwvircA0si4z6GNbTrThto6uadPOi7ZSfwTrsxkR5VtfDRP1ebtLafXJnWZIa71OOc0%2BSGGUq6vo%2FmFv6GMszcRKcrxnt3P4t2mVUaFWI2Pd4C0QSBNKMJ%2B9FdFTGRuTWV%2BZak8bw9pbQLlNaPqEy1nfdNxbXQp2sA4GJqedCYDoLqQeRjfUfswyZjnFZ1OFhh2uv%2BiXUASAg3XF3W55ia%2BRUxqG%2BbH3FBEHglzLNqsGqd3yntGuWUGoVhQ1araP5vMXZzCfitNfxtL8iGnfaPEcXxtIDYXKRJ7CHN2ddN%2F1X9QYSmDSi9K0dQvqV3j5dU4diHsXY2huN41xEltMlV8zEmMOrfGqA%2BAgGzkW%2BdMq%2B7ypvOYbSyGn4AMnqad%2BX726b1Ld0tOSocum4nfe1FP9sMl4hbnoBVR0uLEKvF23ViJx8evMXSOuVZSoEaWrhargYuyVf8i1AXBLk00RV%2B463WF2ftfYPejCisRAvhhcrHHHl1XnFR9OQCVvIZRBKVRy6SsDUK4feHuUeIy80b9mCJmBJ5fmGReMjqOL%2BOTvhtrsWrhGmrBhBloHz43DQdsNrGFnAat61AMFpjj1LQfWH%2F21qy4huDrLpxsQwwDmbkiJoSuagvK%2F7YFA3gWwj7MLPLyskGOqUBp35kybKohAFuS5ZW6L3oYOooXlrHUVyxkvseCicCoAAuKXSsTL7val87Q1RETMKUep6mQn8vk6USV%2Bf37NK9QuLNJqziAqkrXVr3CUBv8y7QW17gARlrAsOh953Hy58slwXOOGGLh7u4OE4DMDYaPyd6GbQIBles7ygcltByDigN2gxQ0K7y%2FuxnnUIYaywsv%2Fdm1%2FWOnYOaBiZr%2F%2FRzHz8cxJhV&X-Amz-Signature=43b685a5a7cf01da6fa3eac6ef8d0ca4d55f0dd5d1bb83c810cf111ce2dbab12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO26GXFJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE%2BU4gkx005DuF4gFIJswpuyjAYYu0cYiv6Trg7%2Fpc4rAiEAr6mbzrkoCb8kNUnbr%2BrvmmiuiNgLC%2FYMMGIgig2mbEMq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDAkRwzuFQZDvQ3wwvircA0si4z6GNbTrThto6uadPOi7ZSfwTrsxkR5VtfDRP1ebtLafXJnWZIa71OOc0%2BSGGUq6vo%2FmFv6GMszcRKcrxnt3P4t2mVUaFWI2Pd4C0QSBNKMJ%2B9FdFTGRuTWV%2BZak8bw9pbQLlNaPqEy1nfdNxbXQp2sA4GJqedCYDoLqQeRjfUfswyZjnFZ1OFhh2uv%2BiXUASAg3XF3W55ia%2BRUxqG%2BbH3FBEHglzLNqsGqd3yntGuWUGoVhQ1araP5vMXZzCfitNfxtL8iGnfaPEcXxtIDYXKRJ7CHN2ddN%2F1X9QYSmDSi9K0dQvqV3j5dU4diHsXY2huN41xEltMlV8zEmMOrfGqA%2BAgGzkW%2BdMq%2B7ypvOYbSyGn4AMnqad%2BX726b1Ld0tOSocum4nfe1FP9sMl4hbnoBVR0uLEKvF23ViJx8evMXSOuVZSoEaWrhargYuyVf8i1AXBLk00RV%2B463WF2ftfYPejCisRAvhhcrHHHl1XnFR9OQCVvIZRBKVRy6SsDUK4feHuUeIy80b9mCJmBJ5fmGReMjqOL%2BOTvhtrsWrhGmrBhBloHz43DQdsNrGFnAat61AMFpjj1LQfWH%2F21qy4huDrLpxsQwwDmbkiJoSuagvK%2F7YFA3gWwj7MLPLyskGOqUBp35kybKohAFuS5ZW6L3oYOooXlrHUVyxkvseCicCoAAuKXSsTL7val87Q1RETMKUep6mQn8vk6USV%2Bf37NK9QuLNJqziAqkrXVr3CUBv8y7QW17gARlrAsOh953Hy58slwXOOGGLh7u4OE4DMDYaPyd6GbQIBles7ygcltByDigN2gxQ0K7y%2FuxnnUIYaywsv%2Fdm1%2FWOnYOaBiZr%2F%2FRzHz8cxJhV&X-Amz-Signature=2e2a0c6584157f9b5cb759c23a93a7887db62d1858956a893b14fc95d193887d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

