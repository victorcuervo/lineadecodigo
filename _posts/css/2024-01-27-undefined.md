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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF7B76IL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIGSg8SiwoSzdkW6KFginuaAtoDUbbilve8v5hnk8b0wXAiEAjrXVMNrZ%2B5ktWhp2BjsdiPSWvrwffTVd06C4%2F%2BwOAlsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKxR5m5R4sFC8T69SircAyvUpx8i2rbYtuHRlqxKpYFdRBqH1CQuhTzyIXB3gAymeRXnx%2Fa4Mb8scEIIxLxUG4yHKaXu8LAszagJeMEDFEkcBk0GEIYVytquMiD83jRarM6EDLlosdUb2OwUf0NQleSXCfY6nAieTVChvXqdGJH3FovUVDlWPEW9B4EOMPxt9cZhhJktSX1cTzkm8GbJeyE6rzxHlw5Ic%2FAAk1KVxCEv1Fnd6kM%2FYEXB3ZlHTAW%2FYpA0hSiuJx9cF%2FmZZK71GVzrXQXWLpwqCVIVjAlxgZWzSHJESm3cC3S1W61NGokH%2F67eUtyNzgVfmzlhxR%2FgjmkewUv2MCFF2Ydyw49wg0JVnfOV%2FBez67yHspZcIbUNonVk0LrFtExND9jA7p0URu09setjlh%2FnEB7sxDp2bbek4ja3b9LD0u7d56SWUxrKKF4y9d8oJpqh7iON0slYRJEFll1atszBZqunxBzVQuDm9ziXXId2CyobXWBy4q3Ue3fmD8aogYPWw2o8ggSR7iMjRYxElhoOPHtOO%2FJDF%2FbFUgu0xRd3fnIpmZgSZn%2FZ4Qp83WfMOAjh7PC6oqGqVMMm5%2FZz%2BrRK1AP9YL2p%2FUFtl50%2Flcr7RG%2B3TMixxKvjuxBCCtaQwVAO5rkoMPXUv8kGOqUBNP7WsS6%2BMQYiGxYwjfJmDL4ucUXmNIPSfrtbgNXsJwUpRjCB7TFie2PiBQRmPg4DKX8XBwJCT3q2%2BpHDqVfrESYXcXsrNQpoYD565X2bboUnZXyaa79mUxxoEc%2Fx3aR%2Fwrb0yXzEl4G%2FD2XoIJ6BRzT8NkRlxqhyB8fkjsKTptHdv8CxfMnPBR2oX86Y7scB4GLKMlPyhIpc6f1sp8esxfCLMidR&X-Amz-Signature=ea61c8813603793027253ee50bf4d9b4635f1a6b8086fd1ab797a6e0e861a0a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF7B76IL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIGSg8SiwoSzdkW6KFginuaAtoDUbbilve8v5hnk8b0wXAiEAjrXVMNrZ%2B5ktWhp2BjsdiPSWvrwffTVd06C4%2F%2BwOAlsq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDKxR5m5R4sFC8T69SircAyvUpx8i2rbYtuHRlqxKpYFdRBqH1CQuhTzyIXB3gAymeRXnx%2Fa4Mb8scEIIxLxUG4yHKaXu8LAszagJeMEDFEkcBk0GEIYVytquMiD83jRarM6EDLlosdUb2OwUf0NQleSXCfY6nAieTVChvXqdGJH3FovUVDlWPEW9B4EOMPxt9cZhhJktSX1cTzkm8GbJeyE6rzxHlw5Ic%2FAAk1KVxCEv1Fnd6kM%2FYEXB3ZlHTAW%2FYpA0hSiuJx9cF%2FmZZK71GVzrXQXWLpwqCVIVjAlxgZWzSHJESm3cC3S1W61NGokH%2F67eUtyNzgVfmzlhxR%2FgjmkewUv2MCFF2Ydyw49wg0JVnfOV%2FBez67yHspZcIbUNonVk0LrFtExND9jA7p0URu09setjlh%2FnEB7sxDp2bbek4ja3b9LD0u7d56SWUxrKKF4y9d8oJpqh7iON0slYRJEFll1atszBZqunxBzVQuDm9ziXXId2CyobXWBy4q3Ue3fmD8aogYPWw2o8ggSR7iMjRYxElhoOPHtOO%2FJDF%2FbFUgu0xRd3fnIpmZgSZn%2FZ4Qp83WfMOAjh7PC6oqGqVMMm5%2FZz%2BrRK1AP9YL2p%2FUFtl50%2Flcr7RG%2B3TMixxKvjuxBCCtaQwVAO5rkoMPXUv8kGOqUBNP7WsS6%2BMQYiGxYwjfJmDL4ucUXmNIPSfrtbgNXsJwUpRjCB7TFie2PiBQRmPg4DKX8XBwJCT3q2%2BpHDqVfrESYXcXsrNQpoYD565X2bboUnZXyaa79mUxxoEc%2Fx3aR%2Fwrb0yXzEl4G%2FD2XoIJ6BRzT8NkRlxqhyB8fkjsKTptHdv8CxfMnPBR2oX86Y7scB4GLKMlPyhIpc6f1sp8esxfCLMidR&X-Amz-Signature=12afcf3be9e6941bee9942921f3cef4d0eeb93eb3ee4e52dd02b2efaf1d9247c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

