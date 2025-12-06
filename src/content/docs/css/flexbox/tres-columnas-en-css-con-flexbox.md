---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5ZWUSAO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8RoRpQDhR36wiEOCP69woocRyIvD6ZfDkKfQ2hycF8wIgWfhK%2FnJA7rOF4thipQlwWensViEUXupx2rLxgNduM80q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJ%2FY%2B4W8jy5XrMNKbSrcA1%2FjRESFUdghhBYm8f4agEWevoCItiMxH4KhANcLLvZnp8cKgw7kP%2BbVM1jMkDCb0XnKBAThC7OM%2BP8FWu6pqN2ZOczOHin2zdvSRpYyeFQrZhYFokG1U6aNuciSQ9PXp98sL4ibdk3AbyPd2QWW6ZoV8LmKCzUizchkj%2BDgdl2ESZqtHLosy42ZMWg2%2FsJZFuoyJJ8H2PkAbLhXyzRM6C5cACdEsfwmYMuiUrJuzNTBo0s5nyGYNVoX5TvPpnXJsl9odQSh0n%2B8G4gdaBgESNYG6x6jx0%2B4%2FA1832shNqg3m%2B7ZtsVc8qS1Wq29BHhBj3ArWt7MMXptm%2BexpaojpdTncubc%2FZvVweGhGDE6zSDGz%2F0%2BTn0MARjnQQwnsa2o7IxlpSyDW5Mamuawb40lfdnZwOoWPP0iLzjg09VmBD9fycimTf0E0cuaCfj52v8vX42AA2ZfDIwR4prscdGsitAPUAfijAoavIZH3NoG8uMfHCMuOsyL5sU%2FSIEtLCJbweRJI1vhHnOcQgl%2B51Kpr2rf7qCPYxi5FSlxAsA3cZljbxKY6QIgs5VO5OGV4qW%2B499wTmWnhL%2BNVFGMjX8sOGjN7xZvQKbT2fe%2B5TMC1zT6w9yrjcLB%2FLGS7woUMNP8zskGOqUBJvTPlTSb1eTwlPzE4oaSvYAFPIsHwSCpn5QjbMrDHbk1KZat3WyTpaDRyZrozCo1AsJyE9uMRG0SQ52iQjbheeT0WnipLSkehoaw2OXY4D09Qnef0ncVBIp61W44CUAMHcdZxXTJ8x51qnjZscONaww8IQQIekyy6HgVKVY165lHLM82QFeSFmBzLMK%2BWu51UU3ieJeMK%2BcS7M0L6zVAoSDWbZjy&X-Amz-Signature=245bf477bd2a683ddc3fa651c3c21bdefd4a98e9bdb1441644df5bf20cecc0b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5ZWUSAO%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8RoRpQDhR36wiEOCP69woocRyIvD6ZfDkKfQ2hycF8wIgWfhK%2FnJA7rOF4thipQlwWensViEUXupx2rLxgNduM80q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDJ%2FY%2B4W8jy5XrMNKbSrcA1%2FjRESFUdghhBYm8f4agEWevoCItiMxH4KhANcLLvZnp8cKgw7kP%2BbVM1jMkDCb0XnKBAThC7OM%2BP8FWu6pqN2ZOczOHin2zdvSRpYyeFQrZhYFokG1U6aNuciSQ9PXp98sL4ibdk3AbyPd2QWW6ZoV8LmKCzUizchkj%2BDgdl2ESZqtHLosy42ZMWg2%2FsJZFuoyJJ8H2PkAbLhXyzRM6C5cACdEsfwmYMuiUrJuzNTBo0s5nyGYNVoX5TvPpnXJsl9odQSh0n%2B8G4gdaBgESNYG6x6jx0%2B4%2FA1832shNqg3m%2B7ZtsVc8qS1Wq29BHhBj3ArWt7MMXptm%2BexpaojpdTncubc%2FZvVweGhGDE6zSDGz%2F0%2BTn0MARjnQQwnsa2o7IxlpSyDW5Mamuawb40lfdnZwOoWPP0iLzjg09VmBD9fycimTf0E0cuaCfj52v8vX42AA2ZfDIwR4prscdGsitAPUAfijAoavIZH3NoG8uMfHCMuOsyL5sU%2FSIEtLCJbweRJI1vhHnOcQgl%2B51Kpr2rf7qCPYxi5FSlxAsA3cZljbxKY6QIgs5VO5OGV4qW%2B499wTmWnhL%2BNVFGMjX8sOGjN7xZvQKbT2fe%2B5TMC1zT6w9yrjcLB%2FLGS7woUMNP8zskGOqUBJvTPlTSb1eTwlPzE4oaSvYAFPIsHwSCpn5QjbMrDHbk1KZat3WyTpaDRyZrozCo1AsJyE9uMRG0SQ52iQjbheeT0WnipLSkehoaw2OXY4D09Qnef0ncVBIp61W44CUAMHcdZxXTJ8x51qnjZscONaww8IQQIekyy6HgVKVY165lHLM82QFeSFmBzLMK%2BWu51UU3ieJeMK%2BcS7M0L6zVAoSDWbZjy&X-Amz-Signature=d6db4429d1c60c8dd92b7fbca76dbc036de7f8422bdbf16e4325244b5ab2ac33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

