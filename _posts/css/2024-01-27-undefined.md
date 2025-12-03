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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665STLI5QS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIG%2FwTHY0YnJHqfGekYLvxRcG54b%2B%2FQ5PxpoTKZGk%2FhUmAiBMkWVwXUR3Fe3WZBDXyiwMAKOFVNPJ3hZot%2BuKt6ZJWyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMsWkQOnSaSvC%2BMcCoKtwDHDdjXhqbKy160dkL1mRcvnD30wzWqV3oDgHvFWFuiZ4NE0lej0slcMDORQs44%2FJYJHmbBixT67erBpmyyNWQVjqIAb%2BGBHeZrk78onxikzP%2F9jfcWua9rbbA6J6g3Gobopo8MDVZYLDJMuGBuThJJ%2F%2BW7xPPmB8fOetyGY8FTyYOSm55WDWok7DsAtklRFJHHDQCOL8FmUo9wUeRYQ6OSyu9b19VGutQyCiC9toBqA8qxTsv5AVJ%2BZjzunVmnVumZdO0Dwadm%2B5wfQ0W2cBNG%2BrCQ7rWBfut7HcaEEAWUg8lxiwN9b5MCtmaEVr5f5hERmHpMI%2B8olKqwDyACSR5WcDCjLl%2BDZbtxMXJJc6xaBzFjxnmHjQrGwmMjoUwglMTdZeBTIZ74o4wgJRJbP%2BKqicGzk0f6AFsctNRtKQ6wZxou29LzTsWXwSl2yKhUyioL5EP5daHjF%2BF1vFld%2Bi13CP9vlLRIsmHuboRojglj1GDgK%2F3CFdzdGXtAt%2BLE0cdpfCOZt9rW2HZNs1UFmuqJfUtoa50tKZw9CoVr4IQpIx%2B3xS6uW1ToEQbSikwlqY5BqYS%2BwXr5TAWjIFS%2FKNIHk243ce2BfmeY4efT7byDpQ8qiSH4lHQ%2Bd2vVSUwrOnAyQY6pgF4rvUXHybqbq8sVCkt8PF%2F2Ew32xixk4oB8cWBV4tKGAGg%2FC05YOjkahAfEu7Dqdo1ZfSeDpPxGyCTAvSzKkkE973KJPnze%2BriLWaxa6bCIHKzoiXY4yE1ltQVRbhqZjJwyscGj3cmclQwsJuZgJ1wWC9daPJazMm4TlqrsRIN6QKs2cA10HFINyH5bjs7HWLTWQ2UC9KUmlTZzS64kjh1KiepsW7z&X-Amz-Signature=1af8e77faa7dca7c0a595a9b75f96f05f8d4f2cd92e939bfa76bad3c2709d801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665STLI5QS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T132602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIG%2FwTHY0YnJHqfGekYLvxRcG54b%2B%2FQ5PxpoTKZGk%2FhUmAiBMkWVwXUR3Fe3WZBDXyiwMAKOFVNPJ3hZot%2BuKt6ZJWyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMsWkQOnSaSvC%2BMcCoKtwDHDdjXhqbKy160dkL1mRcvnD30wzWqV3oDgHvFWFuiZ4NE0lej0slcMDORQs44%2FJYJHmbBixT67erBpmyyNWQVjqIAb%2BGBHeZrk78onxikzP%2F9jfcWua9rbbA6J6g3Gobopo8MDVZYLDJMuGBuThJJ%2F%2BW7xPPmB8fOetyGY8FTyYOSm55WDWok7DsAtklRFJHHDQCOL8FmUo9wUeRYQ6OSyu9b19VGutQyCiC9toBqA8qxTsv5AVJ%2BZjzunVmnVumZdO0Dwadm%2B5wfQ0W2cBNG%2BrCQ7rWBfut7HcaEEAWUg8lxiwN9b5MCtmaEVr5f5hERmHpMI%2B8olKqwDyACSR5WcDCjLl%2BDZbtxMXJJc6xaBzFjxnmHjQrGwmMjoUwglMTdZeBTIZ74o4wgJRJbP%2BKqicGzk0f6AFsctNRtKQ6wZxou29LzTsWXwSl2yKhUyioL5EP5daHjF%2BF1vFld%2Bi13CP9vlLRIsmHuboRojglj1GDgK%2F3CFdzdGXtAt%2BLE0cdpfCOZt9rW2HZNs1UFmuqJfUtoa50tKZw9CoVr4IQpIx%2B3xS6uW1ToEQbSikwlqY5BqYS%2BwXr5TAWjIFS%2FKNIHk243ce2BfmeY4efT7byDpQ8qiSH4lHQ%2Bd2vVSUwrOnAyQY6pgF4rvUXHybqbq8sVCkt8PF%2F2Ew32xixk4oB8cWBV4tKGAGg%2FC05YOjkahAfEu7Dqdo1ZfSeDpPxGyCTAvSzKkkE973KJPnze%2BriLWaxa6bCIHKzoiXY4yE1ltQVRbhqZjJwyscGj3cmclQwsJuZgJ1wWC9daPJazMm4TlqrsRIN6QKs2cA10HFINyH5bjs7HWLTWQ2UC9KUmlTZzS64kjh1KiepsW7z&X-Amz-Signature=98774b99ab2b741b46a1bbbca3aef20ef759ac1d9a28a7a1300bd74dfc917e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

