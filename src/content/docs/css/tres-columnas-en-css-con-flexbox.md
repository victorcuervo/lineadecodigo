---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676X6YVX7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIApRU0EKmMN9Am5Yic88n1X13GbVFuG3z%2F%2B7jdighjatAiEA7FtML2DzY35Upf5XHswC2N%2B35PtajJTyFGRT45iTnWIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIq2ZJCbmIOxqToLDyrcA28%2BZWPARlDsACEEpUqHRvp6elePF%2Fe5h%2BZtqlElyHksdW55DDTYEaBTJdpHaib49ubvIYisO3yu2Q%2FC5nA6j7svz6J0rnU5sfO%2F9er1sSqDeST8bZKpwMrAHO5piPmti1saFE1iRXfuGt%2F0BX8qD1YZdnKDBLPTh11tExJAHX2gFZGIPShAKBmiEzC1bCURNdEdazahAiVSJYSPQs4w27lncEHaM5avDPlsD93Iw%2FBdFDRSAnhmdIsXFf6KtuseTkTSfPSj9EsbyqfSUrr5EU%2F%2FaRPPidWK44t%2BMDwK6vIQoPsMWTSDBTRacp%2BLRNbCrDZzSgBzrrMpUpMwpuTQAGARnMYVAsqqG%2FOyR7WovtPxJ645s2TlOUTJCmOnNZYzMJvhPFaOTscU2aPL%2BgLD21TY8CzGGwZCEvxanvEM3rY1mtSTSBRr622L4AV31YgbkhwamzKD51p4WYIu8Z2IaxgiNtXYzaDFn0QWBywlffy6uOEQPh1G9x0VmMyqfB8Zc%2BV1CtFdxfJf6OqPR%2FQPhkIzLS7Ng3TTD58KYNv5hxqIB6WaoVs%2F8zmPL%2BMLvFAPMU6R%2F7afDAo4sKduHZ%2BvpVj3znufvH6HNGqmSkY1FoIh3FEnwJU4O04IB1%2BMMJjcwskGOqUBmAFM2b%2Fdra6%2BI79ajqhX8nKJhyAa9o%2FRYp7nLhMavhLIYYfKBXAkLOjPrX1fWeZFsv05F0cs15Me2hcK3xs%2B7QruT%2FyyG3fDByAKgL9okpW0SCnWBhG0KTZZdN80cMTCVGZxp9jHb33W%2BvGWBP%2FVNjJFqi3WIRmzH65Of9F3BAecLvY5ui1yvje8%2FtsalZ8yoFCqXT07X4T42Hz4CYsfcRCgcDRf&X-Amz-Signature=a31de4957d31a86f58a782349e6b26eb1dba6ed1ae3f14cc1372ffa75bd6ae17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676X6YVX7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T221732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIApRU0EKmMN9Am5Yic88n1X13GbVFuG3z%2F%2B7jdighjatAiEA7FtML2DzY35Upf5XHswC2N%2B35PtajJTyFGRT45iTnWIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIq2ZJCbmIOxqToLDyrcA28%2BZWPARlDsACEEpUqHRvp6elePF%2Fe5h%2BZtqlElyHksdW55DDTYEaBTJdpHaib49ubvIYisO3yu2Q%2FC5nA6j7svz6J0rnU5sfO%2F9er1sSqDeST8bZKpwMrAHO5piPmti1saFE1iRXfuGt%2F0BX8qD1YZdnKDBLPTh11tExJAHX2gFZGIPShAKBmiEzC1bCURNdEdazahAiVSJYSPQs4w27lncEHaM5avDPlsD93Iw%2FBdFDRSAnhmdIsXFf6KtuseTkTSfPSj9EsbyqfSUrr5EU%2F%2FaRPPidWK44t%2BMDwK6vIQoPsMWTSDBTRacp%2BLRNbCrDZzSgBzrrMpUpMwpuTQAGARnMYVAsqqG%2FOyR7WovtPxJ645s2TlOUTJCmOnNZYzMJvhPFaOTscU2aPL%2BgLD21TY8CzGGwZCEvxanvEM3rY1mtSTSBRr622L4AV31YgbkhwamzKD51p4WYIu8Z2IaxgiNtXYzaDFn0QWBywlffy6uOEQPh1G9x0VmMyqfB8Zc%2BV1CtFdxfJf6OqPR%2FQPhkIzLS7Ng3TTD58KYNv5hxqIB6WaoVs%2F8zmPL%2BMLvFAPMU6R%2F7afDAo4sKduHZ%2BvpVj3znufvH6HNGqmSkY1FoIh3FEnwJU4O04IB1%2BMMJjcwskGOqUBmAFM2b%2Fdra6%2BI79ajqhX8nKJhyAa9o%2FRYp7nLhMavhLIYYfKBXAkLOjPrX1fWeZFsv05F0cs15Me2hcK3xs%2B7QruT%2FyyG3fDByAKgL9okpW0SCnWBhG0KTZZdN80cMTCVGZxp9jHb33W%2BvGWBP%2FVNjJFqi3WIRmzH65Of9F3BAecLvY5ui1yvje8%2FtsalZ8yoFCqXT07X4T42Hz4CYsfcRCgcDRf&X-Amz-Signature=1ac869d2b48e20d6604fb7d928e323f4e35486aefe6f08482542d09feadf8fb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

