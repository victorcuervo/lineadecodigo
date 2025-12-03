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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTBDUN6Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCwWTw1QBSHM2csLirJcFpntw9do9GI%2F%2Fa9Xg4cSBJONwIgUAZMNY1ZAEKd1Yt4Pptbq6WkNPoHFAIO4kMM6HCEhH4q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDBxmACImK%2F742gCEOCrcAzR%2BRsevfs5hkxfcKgtn%2Boh8FTMhAyZeQBkNf6hwHSzM5qFFTGGfpmy2SR0Qs4JlBOgmj%2BOAGXkrAxievfxuM02HPR1vsiHEkMGGsGgE5PDIywu0kCE6E8vib41jZiyfz7%2BgKx1ohg4wTxyXON3eBDvnNBbRvjrt8IgtJKn5yPcNEUMWWq76qWXM%2Bwjzi3b1oa9%2B%2FmU49p4Gp4xPKSeIzOVk6XbX9dZfVxFB1lDuaRAxeJFludWOK%2BJWMAhEhBq%2FLq16wfQ3TvyPAvRJE6ox6TMAC%2BZdCHQn7dDijC%2BjrdTNoXOQn8rE3rTtuUgijAi7gVbvxzuY6MmQPAwA6B%2BkumMlRLX7TJmB1cahQ5GYRCfoQscWElN7sh9fEYsGhgh3dxCNGxJtI%2Ffxt7IhRvbDKpOENFW05juqSyZmEc6nbsAMBagAk8kNTwqFpsVnCQl1X7B6zdbk4aTfpWxyHLLDbG40LM9J%2FJRkaEdrtP%2F8cTMkU1nfMUmXbYvx9b6tE0G2NafxJtR75DdEJopTW4R7KzoC5AXhwo4QeZ258cOhBxM5dRBL69HEm1Ka%2FQCyjzp95W2oXuI6nJ11PWQxhqjoWRgkP5LGctevw6ovj9QAM%2F%2Bvoa2vUxJ9GVd2ULn%2BMKf%2FvckGOqUBnuEjK%2BGPcEuHALlXLPv2RGX5utWxRM1S2ir32lCNapuTASUQJgSbxxddRZ6Q511MBRY9xDZ7W0DOHM%2FznyMliaMGCMyTlBDJhlZjRmAM%2F%2F9pOuaxoxXr7abhab5iQNk9WygTVbql%2BbKgUsHE35wezduc5TdGp28xW7ER1UKT1zRpTj228E%2FtMWwS9XrLPlq8KNURb9D%2B42Ah4hg5wVANiox6pp9I&X-Amz-Signature=509549d1a913f96fc09577261209fdaa93c905025305977ca479cea06c1520ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTBDUN6Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T002504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCwWTw1QBSHM2csLirJcFpntw9do9GI%2F%2Fa9Xg4cSBJONwIgUAZMNY1ZAEKd1Yt4Pptbq6WkNPoHFAIO4kMM6HCEhH4q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDBxmACImK%2F742gCEOCrcAzR%2BRsevfs5hkxfcKgtn%2Boh8FTMhAyZeQBkNf6hwHSzM5qFFTGGfpmy2SR0Qs4JlBOgmj%2BOAGXkrAxievfxuM02HPR1vsiHEkMGGsGgE5PDIywu0kCE6E8vib41jZiyfz7%2BgKx1ohg4wTxyXON3eBDvnNBbRvjrt8IgtJKn5yPcNEUMWWq76qWXM%2Bwjzi3b1oa9%2B%2FmU49p4Gp4xPKSeIzOVk6XbX9dZfVxFB1lDuaRAxeJFludWOK%2BJWMAhEhBq%2FLq16wfQ3TvyPAvRJE6ox6TMAC%2BZdCHQn7dDijC%2BjrdTNoXOQn8rE3rTtuUgijAi7gVbvxzuY6MmQPAwA6B%2BkumMlRLX7TJmB1cahQ5GYRCfoQscWElN7sh9fEYsGhgh3dxCNGxJtI%2Ffxt7IhRvbDKpOENFW05juqSyZmEc6nbsAMBagAk8kNTwqFpsVnCQl1X7B6zdbk4aTfpWxyHLLDbG40LM9J%2FJRkaEdrtP%2F8cTMkU1nfMUmXbYvx9b6tE0G2NafxJtR75DdEJopTW4R7KzoC5AXhwo4QeZ258cOhBxM5dRBL69HEm1Ka%2FQCyjzp95W2oXuI6nJ11PWQxhqjoWRgkP5LGctevw6ovj9QAM%2F%2Bvoa2vUxJ9GVd2ULn%2BMKf%2FvckGOqUBnuEjK%2BGPcEuHALlXLPv2RGX5utWxRM1S2ir32lCNapuTASUQJgSbxxddRZ6Q511MBRY9xDZ7W0DOHM%2FznyMliaMGCMyTlBDJhlZjRmAM%2F%2F9pOuaxoxXr7abhab5iQNk9WygTVbql%2BbKgUsHE35wezduc5TdGp28xW7ER1UKT1zRpTj228E%2FtMWwS9XrLPlq8KNURb9D%2B42Ah4hg5wVANiox6pp9I&X-Amz-Signature=8c30814065b6e65ba7864356dcef84d90a0e45db32ffedc989be4f4dda5cede8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

