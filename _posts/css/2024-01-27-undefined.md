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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GPYFCYU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDzaQTJy%2BVEBZAPGiWyRCZts0qJfEwdXihVgeo%2BeEWEmAIgDPapjgZfRIRsZd95ju7GxEJZFSO%2FbD%2FxrAkY%2BuD66u4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJqk%2FkI4CgqEMEhPjyrcAz7KEZetcA6KK1CaFj0woCGgBHj3dcJWBs4WkZD1aBf2GsseHwthi3l9So1SyujBogolP4OXKDWUQow%2FU0usVjroAxmXpk4OVu%2BM8AXneUiFytVbRGL%2B0%2Fl%2Bnfaa6sBaRg40FflggfGdPsyqEeluPIWLd3sbWqPkZcLiCPsV2inOIYQluh2ze2pt4%2BkxZNwI%2BLQAiYsFM%2BmRSqB%2FTjNtIvLOaIifMa19Y%2BFGFD6fw69Z3o2XlA65g%2FEMgXJYnpVuk%2B6ElD8h5k%2B5MbrhFaBgk8wRSDX5GWRhhPeCJA%2F%2FdO4vhw5xT7p1EKv%2FrjM2jxTdBQj6%2F1TgBvx7ir5BUu9GMqyrZdgufbGYN4V5oI03P81VzoCopQxXryHC1Aapd%2FmfNCIanqNFrftaZ6MX41C%2BbPjUbufsobRun4Cak7RSITF0Ee%2BQuGy668kT7HLz8gLiUXF01N%2F%2FgcEGMrb6cHyejy7QpAxKJSeDCLclHFLD8Md1yqm5Z48BgztfiUE3qRq6s4VSedFXurz4f6XbU5D9sHi5SHeITPeU2QfTcNWO5dzrILFYzoQIuunfO5qPCYl5et1Rq1eL%2BnEIAAnGTQvS1sgObHX5rlYUoG1wMLSQWxJ8UQBwrnW%2B8Tvr%2Fjc2MIXbwckGOqUByE4auXbPWMa%2B%2Fh181%2BHpeqHtqa%2F1vutqLZhSAtDDSjV2yTq%2BVo9%2BYeAILeWzLaCMCnZT9mvq%2FEmKoi8h4BPNb2mTQKdzcyRWYFt82dktVAfEbjLoQUDGdkYlHSWJ%2F1mWbgUKZXCtaFdO6Nnm2yBkOvR%2BVHTrTcmnqndSWHe5rUtaezVOjrzzsNcw635xjL17Ijray0dCDnCQjwg%2BUq1FwSB62ec4&X-Amz-Signature=f5b3fc8e5dacef02c2ca81ba5b2547d6bd49b022430cd57e49e86f6b15ecac1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GPYFCYU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T173625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDzaQTJy%2BVEBZAPGiWyRCZts0qJfEwdXihVgeo%2BeEWEmAIgDPapjgZfRIRsZd95ju7GxEJZFSO%2FbD%2FxrAkY%2BuD66u4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDJqk%2FkI4CgqEMEhPjyrcAz7KEZetcA6KK1CaFj0woCGgBHj3dcJWBs4WkZD1aBf2GsseHwthi3l9So1SyujBogolP4OXKDWUQow%2FU0usVjroAxmXpk4OVu%2BM8AXneUiFytVbRGL%2B0%2Fl%2Bnfaa6sBaRg40FflggfGdPsyqEeluPIWLd3sbWqPkZcLiCPsV2inOIYQluh2ze2pt4%2BkxZNwI%2BLQAiYsFM%2BmRSqB%2FTjNtIvLOaIifMa19Y%2BFGFD6fw69Z3o2XlA65g%2FEMgXJYnpVuk%2B6ElD8h5k%2B5MbrhFaBgk8wRSDX5GWRhhPeCJA%2F%2FdO4vhw5xT7p1EKv%2FrjM2jxTdBQj6%2F1TgBvx7ir5BUu9GMqyrZdgufbGYN4V5oI03P81VzoCopQxXryHC1Aapd%2FmfNCIanqNFrftaZ6MX41C%2BbPjUbufsobRun4Cak7RSITF0Ee%2BQuGy668kT7HLz8gLiUXF01N%2F%2FgcEGMrb6cHyejy7QpAxKJSeDCLclHFLD8Md1yqm5Z48BgztfiUE3qRq6s4VSedFXurz4f6XbU5D9sHi5SHeITPeU2QfTcNWO5dzrILFYzoQIuunfO5qPCYl5et1Rq1eL%2BnEIAAnGTQvS1sgObHX5rlYUoG1wMLSQWxJ8UQBwrnW%2B8Tvr%2Fjc2MIXbwckGOqUByE4auXbPWMa%2B%2Fh181%2BHpeqHtqa%2F1vutqLZhSAtDDSjV2yTq%2BVo9%2BYeAILeWzLaCMCnZT9mvq%2FEmKoi8h4BPNb2mTQKdzcyRWYFt82dktVAfEbjLoQUDGdkYlHSWJ%2F1mWbgUKZXCtaFdO6Nnm2yBkOvR%2BVHTrTcmnqndSWHe5rUtaezVOjrzzsNcw635xjL17Ijray0dCDnCQjwg%2BUq1FwSB62ec4&X-Amz-Signature=f09a970767e7ee682598caa6d4ac2e659ba24550adf3b73d2579f998aa8ca645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

