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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636B64KPP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDXY0PVGrw7qZX3rUtXnr3hebRZ1fpH8sv7TlV2JXVKPAiAfaB1WVY7o5gFE2iF0w%2BzqHsGYaXZYz%2BP2wFd8GlmawCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMbX7F8uTr2cw4HR8JKtwD00vbXg8x2F6oR4brhgZbi43L6YRMCQh1MumQljL1u2JyPTPhMq2OK0Xyd5KZX77F3e91K1oeNTt6shhZBU%2BGS17YLEEqcdViD4kmkfYOppFcCadxiQLzztOz%2Bx7IWpy1e255YB2g4LD92u4isHl7SEYyYkiY9FjQ1oCRCEFgq2tWGKI91UJNQieDUFDgKLV4wTUJxt2YtJWIzPFYikIT3pGyfKMAT0FhZ%2BgJlJO8q48ftgbDpXgzRxuOX5OCuk57eOJb0IO329TfjDRKwSo5jiX7ySb0LzShVQLrFZa2Lhodn%2Fox6GA%2BSAqOOoEyXUg8nt0EcCxbAqIdmTuhlor11nuPUfEbfdfNwVseqUlgy%2BJZrIJzAuJddimFWb03KEA5ywXGY%2BhfJT1PKOcp6i6uhPa3u10byHn6Gc8Ka9s9JMROwwZBm8jHS1GEGqAYB9DID%2FTPkfuUwZdIDFHKpAb9p0Hiu2%2BWUXwyQ%2Fhh527cqj%2FwTrxaLvTV1ydhEz%2FqF0jsAmT65XbfOXCPfXMILHhtX4ltY2q87Wr3BsrAZXB6chSAC3%2BVlkjPC0B16%2BRZimDO8yO04a4lcPMOEza1evd0Py0NkBF2mp4KnQJbR9FitLZt%2Bx%2BG%2F5cqWb7OuKQw69rByQY6pgEinS1eyugJZBECxgD7eGfRwUwtDWlNsgGRKyoeMhlAxxaSv0xKARpuzh5mdV3ffRscqdesR58pPqlhOMAilRNmGJwc%2FgnZ4JjVO39UH3cDtgYt8X0DWAlxgb5H%2BzRJlv2IA97F3KlYmmFbqmnI0wiHDkHFmtSTw5sRYFoUmKt3Lgj2HZcmL53If0ilFL0jh4DYAgGlyK8s5%2BBzIghPKfixKIm2KCtw&X-Amz-Signature=6a20de3470140b6abf8533253a3b0c715945243e6f943608feedb8fd8bac151a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636B64KPP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDXY0PVGrw7qZX3rUtXnr3hebRZ1fpH8sv7TlV2JXVKPAiAfaB1WVY7o5gFE2iF0w%2BzqHsGYaXZYz%2BP2wFd8GlmawCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMbX7F8uTr2cw4HR8JKtwD00vbXg8x2F6oR4brhgZbi43L6YRMCQh1MumQljL1u2JyPTPhMq2OK0Xyd5KZX77F3e91K1oeNTt6shhZBU%2BGS17YLEEqcdViD4kmkfYOppFcCadxiQLzztOz%2Bx7IWpy1e255YB2g4LD92u4isHl7SEYyYkiY9FjQ1oCRCEFgq2tWGKI91UJNQieDUFDgKLV4wTUJxt2YtJWIzPFYikIT3pGyfKMAT0FhZ%2BgJlJO8q48ftgbDpXgzRxuOX5OCuk57eOJb0IO329TfjDRKwSo5jiX7ySb0LzShVQLrFZa2Lhodn%2Fox6GA%2BSAqOOoEyXUg8nt0EcCxbAqIdmTuhlor11nuPUfEbfdfNwVseqUlgy%2BJZrIJzAuJddimFWb03KEA5ywXGY%2BhfJT1PKOcp6i6uhPa3u10byHn6Gc8Ka9s9JMROwwZBm8jHS1GEGqAYB9DID%2FTPkfuUwZdIDFHKpAb9p0Hiu2%2BWUXwyQ%2Fhh527cqj%2FwTrxaLvTV1ydhEz%2FqF0jsAmT65XbfOXCPfXMILHhtX4ltY2q87Wr3BsrAZXB6chSAC3%2BVlkjPC0B16%2BRZimDO8yO04a4lcPMOEza1evd0Py0NkBF2mp4KnQJbR9FitLZt%2Bx%2BG%2F5cqWb7OuKQw69rByQY6pgEinS1eyugJZBECxgD7eGfRwUwtDWlNsgGRKyoeMhlAxxaSv0xKARpuzh5mdV3ffRscqdesR58pPqlhOMAilRNmGJwc%2FgnZ4JjVO39UH3cDtgYt8X0DWAlxgb5H%2BzRJlv2IA97F3KlYmmFbqmnI0wiHDkHFmtSTw5sRYFoUmKt3Lgj2HZcmL53If0ilFL0jh4DYAgGlyK8s5%2BBzIghPKfixKIm2KCtw&X-Amz-Signature=b95d4ffa214e264f0ff74b0790178120374e52335e668f9f4b018aeed4772478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

