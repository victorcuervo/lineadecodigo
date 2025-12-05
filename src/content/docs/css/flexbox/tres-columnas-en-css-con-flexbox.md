---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCMMGFKP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYocIpgMzybyxohiO7LYi9xJQMs1fni1ODmBUQnF3ELAiEAv56qERkp86E5tNRw7KGMUL%2FdpvTw2pFQZIrnJzq1UjEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKG%2Bh8sdoxWI5oTgmyrcAwCMEdWlse7BHlsdqlGj2Dy7IqKjWhaZ%2F%2FclpTCklWF61kLEH1nJOKWoLd%2FqBVpTbv15G%2Fje%2F6LJ6M6hiJTB%2BFpft6ZoCW7Ly%2BRoWKDEafY2Dfk0htXdhSHuZSoa5x%2BTVpGtiOFA1HiP4YMRt8HIr6IEx4gvKDMt%2Bw1wuY%2FaAv%2Bjh6hq7CqDFJmuqo0NoI3TWGeUzAaBh6B4YJIUqVerWUu19vfHTKC%2F49vyyZFHk9g1mlV%2B7cl0ZqqpeQbKVqCDXxFRm5mT3Aa91xYAk35SkwTVMUvy5NsnxeF3tj6zo2yF1T398CfKEe0iXRMsfW5FUTguSJKnD4c05b3dHxIvoirvTbpPTOB8uvgidRJdhJeDUeFGf0ySX4NEORffsKpPVwbf6AnmkUHO2JKOB3Jpzj4tTrFdIN2Z%2BbPuJEzlRE3eK5hUGkkpSBGnUqUXuyzFmn8KK0ZgcA%2BBWerF11t9ZU2VvfGPKralbqYGOYUDy1SEe5U6LZXH0%2Bn8FYVB4IklGgqPb3Qhxw4yothroCNsK5LnaKDnAEw7u7qn5sxose7qsdQQcgVRU8%2BFRqBv0OOVIaZFUA7YOJjGFvbYP5ZaYFq3wrXP0RDPXPUtQ0orFyU0haWA2lwTXJKUcjHuMObTyskGOqUBmZh0MyF6RnQOa8t%2FHFCF7cDk7D3VbiGL3weZEYOzZAlKJMTiEw0EY0VJNbRoWKW76GlApQyC6n2cqzFBCq54SrO1Zogugsjvai7CJwWqUbh%2Bnt5jjjiOr%2BoC8ATrM9TIcU%2Bh6DVBNxZfubBDGV58JdzQHBnJ6sL%2BAwGb7NNgUD9Dtr0jf8tz7M65tZ2L5URTaR070iJUXRsCtUl8OBnvLe3bo%2BIV&X-Amz-Signature=646107f0e776233dc135a64d658a2fdff69a7bfefbae2ee2cb7b38259f51c2ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCMMGFKP%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T115023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYocIpgMzybyxohiO7LYi9xJQMs1fni1ODmBUQnF3ELAiEAv56qERkp86E5tNRw7KGMUL%2FdpvTw2pFQZIrnJzq1UjEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKG%2Bh8sdoxWI5oTgmyrcAwCMEdWlse7BHlsdqlGj2Dy7IqKjWhaZ%2F%2FclpTCklWF61kLEH1nJOKWoLd%2FqBVpTbv15G%2Fje%2F6LJ6M6hiJTB%2BFpft6ZoCW7Ly%2BRoWKDEafY2Dfk0htXdhSHuZSoa5x%2BTVpGtiOFA1HiP4YMRt8HIr6IEx4gvKDMt%2Bw1wuY%2FaAv%2Bjh6hq7CqDFJmuqo0NoI3TWGeUzAaBh6B4YJIUqVerWUu19vfHTKC%2F49vyyZFHk9g1mlV%2B7cl0ZqqpeQbKVqCDXxFRm5mT3Aa91xYAk35SkwTVMUvy5NsnxeF3tj6zo2yF1T398CfKEe0iXRMsfW5FUTguSJKnD4c05b3dHxIvoirvTbpPTOB8uvgidRJdhJeDUeFGf0ySX4NEORffsKpPVwbf6AnmkUHO2JKOB3Jpzj4tTrFdIN2Z%2BbPuJEzlRE3eK5hUGkkpSBGnUqUXuyzFmn8KK0ZgcA%2BBWerF11t9ZU2VvfGPKralbqYGOYUDy1SEe5U6LZXH0%2Bn8FYVB4IklGgqPb3Qhxw4yothroCNsK5LnaKDnAEw7u7qn5sxose7qsdQQcgVRU8%2BFRqBv0OOVIaZFUA7YOJjGFvbYP5ZaYFq3wrXP0RDPXPUtQ0orFyU0haWA2lwTXJKUcjHuMObTyskGOqUBmZh0MyF6RnQOa8t%2FHFCF7cDk7D3VbiGL3weZEYOzZAlKJMTiEw0EY0VJNbRoWKW76GlApQyC6n2cqzFBCq54SrO1Zogugsjvai7CJwWqUbh%2Bnt5jjjiOr%2BoC8ATrM9TIcU%2Bh6DVBNxZfubBDGV58JdzQHBnJ6sL%2BAwGb7NNgUD9Dtr0jf8tz7M65tZ2L5URTaR070iJUXRsCtUl8OBnvLe3bo%2BIV&X-Amz-Signature=d6a5997126922224049b47cd01ba6f20fb9bb7355ff129e576a4babd90d1effb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

