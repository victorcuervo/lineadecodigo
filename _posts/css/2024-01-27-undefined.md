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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633YUGGVB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIFVOYy1mxZfJseGGXbvWgQyNCn7AZzW28gWRMqMC5LLtAiEA6%2BOmOWFCL6JkwoC9z2hqcpamj4pVaL1dOT8Z8hV7IcMq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDK5iV56xt6Zf7eCeMyrcA44oBgPRJVfSUX8e1IDVtVG0nY8qXPt2V5fvmiN3idDzLkmasXJSODA284QFtnjKHhzLTsVN6n0PVHE7huLxr5kybO9Qfh11h3lIjLNaCZcgbqHR%2FqjsNgShHyJs6H0cdpA7bh6j7YwNuBEupxMIrNK4pGuUL6bDosqvT9l4naD7Csai4vJNzCDfKFXz1ZFGr2UXHEuLVWalT3UANc%2FQmn%2FO6GiVzNzoZV9M9zrs4OMFSEbJzdRuBqn%2FnU3kl7El4XWctqJeyIqDBr%2FmfGFSZCLAXaVqlflDVsNYkGmYSSl1OvnjA0a5sVQjhtlBZ0Is4BJ8HZCIjfmDy9bctkRr03ciM0d3v%2Bi%2B%2FvKLtOjUgS3SbDNtfU7owGMDW%2FPMz5pmiBJYk1Hd2zyb%2F7%2F9mWsWiv7wkyFWSfjSpXl2CWYdor8wTn9wqn78AJ45Hf%2B0ztTzSXqT%2FhF0Y%2FJMf7c2Vs0ZKnJK7Z5wmn4P2x%2FNDseCWodKgkJLCjYeAmAprg4x3VR3OXpU5GwXYecTLZlGI4yfHoPuaNVbc2m%2Bow4cTByajgzYb5y%2BJRWqOwPw92XsIwh2PJjItx0si%2BXbD7ZcaOBRG6DIIDu5SPCTJSCEWjWBxC2ZC1KCgZ%2By%2FaIV0ehJMO%2FVv8kGOqUBwv7Iwxcnqk44uCdWd7AV8TmoHJOix%2BLG2w94XXlPe%2BX%2BMXTIZ9CIKpvCzZ9bzoC53NIGg4dkJYO4EvmBipZV5ss%2BzsDaZZ%2FRCwjfwNQvMJNpa4RJUxGTblS%2BPfLM56PyBqDjAC13lFt%2FDqjdVDtQPp9rmpil2hFDem1CFicQ9NFYWCFRG%2BuY244lnP6xdFFng2Qm%2BHnLcsXGgC1njlvgOLYMExFV&X-Amz-Signature=62f529b1bee212cd5ef292a5adac73a788f8730fec2fe1d46ffe01552d3d5a0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633YUGGVB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIFVOYy1mxZfJseGGXbvWgQyNCn7AZzW28gWRMqMC5LLtAiEA6%2BOmOWFCL6JkwoC9z2hqcpamj4pVaL1dOT8Z8hV7IcMq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDK5iV56xt6Zf7eCeMyrcA44oBgPRJVfSUX8e1IDVtVG0nY8qXPt2V5fvmiN3idDzLkmasXJSODA284QFtnjKHhzLTsVN6n0PVHE7huLxr5kybO9Qfh11h3lIjLNaCZcgbqHR%2FqjsNgShHyJs6H0cdpA7bh6j7YwNuBEupxMIrNK4pGuUL6bDosqvT9l4naD7Csai4vJNzCDfKFXz1ZFGr2UXHEuLVWalT3UANc%2FQmn%2FO6GiVzNzoZV9M9zrs4OMFSEbJzdRuBqn%2FnU3kl7El4XWctqJeyIqDBr%2FmfGFSZCLAXaVqlflDVsNYkGmYSSl1OvnjA0a5sVQjhtlBZ0Is4BJ8HZCIjfmDy9bctkRr03ciM0d3v%2Bi%2B%2FvKLtOjUgS3SbDNtfU7owGMDW%2FPMz5pmiBJYk1Hd2zyb%2F7%2F9mWsWiv7wkyFWSfjSpXl2CWYdor8wTn9wqn78AJ45Hf%2B0ztTzSXqT%2FhF0Y%2FJMf7c2Vs0ZKnJK7Z5wmn4P2x%2FNDseCWodKgkJLCjYeAmAprg4x3VR3OXpU5GwXYecTLZlGI4yfHoPuaNVbc2m%2Bow4cTByajgzYb5y%2BJRWqOwPw92XsIwh2PJjItx0si%2BXbD7ZcaOBRG6DIIDu5SPCTJSCEWjWBxC2ZC1KCgZ%2By%2FaIV0ehJMO%2FVv8kGOqUBwv7Iwxcnqk44uCdWd7AV8TmoHJOix%2BLG2w94XXlPe%2BX%2BMXTIZ9CIKpvCzZ9bzoC53NIGg4dkJYO4EvmBipZV5ss%2BzsDaZZ%2FRCwjfwNQvMJNpa4RJUxGTblS%2BPfLM56PyBqDjAC13lFt%2FDqjdVDtQPp9rmpil2hFDem1CFicQ9NFYWCFRG%2BuY244lnP6xdFFng2Qm%2BHnLcsXGgC1njlvgOLYMExFV&X-Amz-Signature=5d8ed066decc11384ed8d1a90f4a2beeaf350c477aa358f6e1e8c44dcdafd1dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

