---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB2EDUZ3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFQL2xEGlYD8w9tCU6tVrJCpTr%2BDzxjAVhsjM3FuSSZgIgW2u%2Blo0I3BBnYH16rqo18ATz%2FXdkUwhAOYthAPumrSEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPlKuHSyxD05gDsdSrcA7eXEBiw7qQWQW%2F7YMlYcnEI7vnQ7kkJufcj9q1LoqKzEewDPEklX%2FZiQQiU737nnPn%2Bsd7Dy6NdgS9ZODyd4qgkrGStkcMOKzNTRf1g3w4MAX%2FzIWFMRIQssXKJJZ4cSQS%2BGJXFpSxZAxxkH%2BhXPHat2wDuM3Rp%2BGngJIs72VA5qQTlhSnsLHV4ybzyQkjRm%2FeO9%2BOJW2uA2hOlduQUr%2Boe4JK%2BN%2BC4dunmE6j2maTf3jHJ1yD8vc2kJdu09PwDHa6ubuUgtQp216n5jNm4dpjioKZ%2Fb%2B0FyYPddBKrnBDFWx%2BETwEBGJ9%2F8VjQD%2BAfosq8BWGHu9MCfRCNPJWGXRJTSavWn71D%2Bw7YxGh9vChhjrfgcn9K6EZBjCqK645WcKCj9Qb1L%2FoLUlkNldznXFwaUhFFKN7Nn8f2WJXfMMxOFnRGHpQe9oxgpUaZVRmIyik1nsnaVX9jfk5bN%2BrVaw9CVbHPhTiGJ3GWdlbuNmXixbr7TGDkbbOFCeHjcEw1xWTrhSB%2FUMZFYIQKJ1k8pyKGbyksJDrgwy%2FrGOCbuYIEH3khW1L4zu5yQr1FX3xw%2BHldYc5jILrqKQNuQv6psVDTuc%2FRwRdRGaQ%2BYo4b06%2FMN4jy7j1rVoPzNN7WMNKh3ckGOqUBfncu7vPTUd59iXbtfLmX5IZw4moPfBLI9ycVfD%2FbGqgVK5gcv25ej0zDMs2AB8nG9xqKyNqH9nFyrJWy9ztZUJ%2FDZrT5ChBHZzfaoucqqHYIpJ6QTz5KMIXN56KjKum7yyOH49PJqI%2Bn3%2BglunFLjMt%2BumIFsfa35LSH7fyoCGQB27bhI2zv6icG3c4t1XKjth1Qy%2B2ymrFJW7NBqdx2iJ0tAU3u&X-Amz-Signature=140dd7534f20062bb1e044a63f06f2e064750489b96ce046506ea020351255e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VB2EDUZ3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFQL2xEGlYD8w9tCU6tVrJCpTr%2BDzxjAVhsjM3FuSSZgIgW2u%2Blo0I3BBnYH16rqo18ATz%2FXdkUwhAOYthAPumrSEqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPPlKuHSyxD05gDsdSrcA7eXEBiw7qQWQW%2F7YMlYcnEI7vnQ7kkJufcj9q1LoqKzEewDPEklX%2FZiQQiU737nnPn%2Bsd7Dy6NdgS9ZODyd4qgkrGStkcMOKzNTRf1g3w4MAX%2FzIWFMRIQssXKJJZ4cSQS%2BGJXFpSxZAxxkH%2BhXPHat2wDuM3Rp%2BGngJIs72VA5qQTlhSnsLHV4ybzyQkjRm%2FeO9%2BOJW2uA2hOlduQUr%2Boe4JK%2BN%2BC4dunmE6j2maTf3jHJ1yD8vc2kJdu09PwDHa6ubuUgtQp216n5jNm4dpjioKZ%2Fb%2B0FyYPddBKrnBDFWx%2BETwEBGJ9%2F8VjQD%2BAfosq8BWGHu9MCfRCNPJWGXRJTSavWn71D%2Bw7YxGh9vChhjrfgcn9K6EZBjCqK645WcKCj9Qb1L%2FoLUlkNldznXFwaUhFFKN7Nn8f2WJXfMMxOFnRGHpQe9oxgpUaZVRmIyik1nsnaVX9jfk5bN%2BrVaw9CVbHPhTiGJ3GWdlbuNmXixbr7TGDkbbOFCeHjcEw1xWTrhSB%2FUMZFYIQKJ1k8pyKGbyksJDrgwy%2FrGOCbuYIEH3khW1L4zu5yQr1FX3xw%2BHldYc5jILrqKQNuQv6psVDTuc%2FRwRdRGaQ%2BYo4b06%2FMN4jy7j1rVoPzNN7WMNKh3ckGOqUBfncu7vPTUd59iXbtfLmX5IZw4moPfBLI9ycVfD%2FbGqgVK5gcv25ej0zDMs2AB8nG9xqKyNqH9nFyrJWy9ztZUJ%2FDZrT5ChBHZzfaoucqqHYIpJ6QTz5KMIXN56KjKum7yyOH49PJqI%2Bn3%2BglunFLjMt%2BumIFsfa35LSH7fyoCGQB27bhI2zv6icG3c4t1XKjth1Qy%2B2ymrFJW7NBqdx2iJ0tAU3u&X-Amz-Signature=4bbdc1283364c5ea248836f96746aa75d306696c63affb99efb4346634847957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

