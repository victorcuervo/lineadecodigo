---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMGHQSI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe%2Bv1XSVun2Oa9%2FNtDnbVfeHfI1mO%2BgV7o9RvoSaXXfgIgPpAURRsVMOoh8s00wEFs1jCJes%2Fdn%2F30bLTLExVGfVcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQEpZwhbamL6YKXSSrcAwSar%2FY0t%2BapRhbqOg%2BnXCjs8MiAk6W%2FX%2FmvX%2FNIJVtGG7Hw7lBFA7h3CDlW48%2FpiTwQC%2FpL0g%2FXvhRVB9fZvT4UGxujYHMiF41xH0yrAIcw1pDliC4csHzUayFNFK5O31uBlFf7PX6AFKM1mt3qXCvqf%2FXU7efP21qZ%2BN7SkwvCMSYfiDOXvVqItPGrNSkXBmc%2FnT9YFuObYtPRWP9B6Re9PoGQ26o3EsSbGUy08zg%2B2toS50QFEMGvtoqEkIGBj1SFCwI7y%2FF3m%2FKbSnsfijMw6ENMZvZO%2FI776GAiLR79KwYuRUbwBgoXHpQlHehsz5XQsuunYbd4HJmhuoQ2V1kjRZClvnI%2BemK93xmaXPhflMxvcEnQtvC9WlHopQcOW4C%2BGYPjV2PHjl%2FWAYCVedKEfdS42VlC7fhzczn80l70AysGbIJACXtD%2B4UtzcKSGM53Oasei%2F2kPiJ%2BTzULHwSr%2FuF50DRlqagKfXxovysv1h2briMvSe4l9D%2BRV6HM%2FUnxcayqUVU7weWV4krXr7Rt7WVTDa1i8LIly4hnHw8ojSi4GkP9fFi9v%2FS%2Ba6AVQM25K8jvjb5K2TS0j28UlVSp71xu%2BNikw3z%2F6sGIzKHZh7CNrvrKx8o0DbA%2BMMyh2MkGOqUBG6Y6R6AND6w%2FSy87y95HMjC5UYGHysX79jm%2ByrXm5CwSGW8FLdNAmUFbheEftGosrNuwQQ2yWXNeXDxhBt%2F6QekCzsOwPBIbxc1fwOsqXcIBc9iHBI7%2BM1gWDbzcLa%2F3oARk386ZpHHEIrv8eSN%2BgqsqgC%2Fq75j55LZT0wpMHbUzlXEEGqh6NsHNS24LtuUpNWmByjOmsNPeASdo2e8LD8r59dqP&X-Amz-Signature=aabd5b24f4b5a023f6bef2c285669e677e41e809d23e9d3c85c0f63d29e33960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRMGHQSI%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe%2Bv1XSVun2Oa9%2FNtDnbVfeHfI1mO%2BgV7o9RvoSaXXfgIgPpAURRsVMOoh8s00wEFs1jCJes%2Fdn%2F30bLTLExVGfVcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJQEpZwhbamL6YKXSSrcAwSar%2FY0t%2BapRhbqOg%2BnXCjs8MiAk6W%2FX%2FmvX%2FNIJVtGG7Hw7lBFA7h3CDlW48%2FpiTwQC%2FpL0g%2FXvhRVB9fZvT4UGxujYHMiF41xH0yrAIcw1pDliC4csHzUayFNFK5O31uBlFf7PX6AFKM1mt3qXCvqf%2FXU7efP21qZ%2BN7SkwvCMSYfiDOXvVqItPGrNSkXBmc%2FnT9YFuObYtPRWP9B6Re9PoGQ26o3EsSbGUy08zg%2B2toS50QFEMGvtoqEkIGBj1SFCwI7y%2FF3m%2FKbSnsfijMw6ENMZvZO%2FI776GAiLR79KwYuRUbwBgoXHpQlHehsz5XQsuunYbd4HJmhuoQ2V1kjRZClvnI%2BemK93xmaXPhflMxvcEnQtvC9WlHopQcOW4C%2BGYPjV2PHjl%2FWAYCVedKEfdS42VlC7fhzczn80l70AysGbIJACXtD%2B4UtzcKSGM53Oasei%2F2kPiJ%2BTzULHwSr%2FuF50DRlqagKfXxovysv1h2briMvSe4l9D%2BRV6HM%2FUnxcayqUVU7weWV4krXr7Rt7WVTDa1i8LIly4hnHw8ojSi4GkP9fFi9v%2FS%2Ba6AVQM25K8jvjb5K2TS0j28UlVSp71xu%2BNikw3z%2F6sGIzKHZh7CNrvrKx8o0DbA%2BMMyh2MkGOqUBG6Y6R6AND6w%2FSy87y95HMjC5UYGHysX79jm%2ByrXm5CwSGW8FLdNAmUFbheEftGosrNuwQQ2yWXNeXDxhBt%2F6QekCzsOwPBIbxc1fwOsqXcIBc9iHBI7%2BM1gWDbzcLa%2F3oARk386ZpHHEIrv8eSN%2BgqsqgC%2Fq75j55LZT0wpMHbUzlXEEGqh6NsHNS24LtuUpNWmByjOmsNPeASdo2e8LD8r59dqP&X-Amz-Signature=7946524b6aa1a814b9dcff0510b1f6d0b1015445760b5a0ed3b4bef39bdba213&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

