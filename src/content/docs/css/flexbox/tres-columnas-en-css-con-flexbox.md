---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN5LI3LL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMPWx%2B%2BwAzYs%2BKgxwJzIs%2BBQecbIjucFYNZMb0C8jqZAiEAoFejDF8SNtUkRc5LspB6p085Uw7NyWB6n9Powf60pUMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFDgCFzUrpkD5EJbdCrcA%2BNrjfVp3SlMDAKV87PwvYqa5sa5ijH3ixsAIbLIFmKCDVFoj8cjqI7BbMJmYQXBuCfDDqH3V33OCpfn%2BNBXIDJjf9NCjQ4bUGXG1GyUtYxu55bV2f3x9ZbTeQDhNCesf67poWC7qIn34VmIUTc%2FayM58w76YWL0%2Bcg282uhIdqLSO169K24nYZtStonqX5FXpfLgYMYgVhDYHUpYe77lK%2FEQAk3QVme1EMvyGHMACTTXVXFkQ%2FqG0uii7oJ9%2Bdj%2BJfaDQqwuo91lSWXNC11ir6%2FJDq9uJg7hkvi0p0xQJBIPWpSEosSkuLCnysFjzWTkR8Ts8AaFMG3RsFRW5KFFnQVZDCWZ13d8r2PPJl9sAMvvJFWwqzn5W0nthwBi2Zv%2FPfamQLRP%2Bq%2B8niHY49Y8iczlslCoagGpNBDPmAfTiHxpUXa72PmyLIBNWOXrIHOf4krRiJG%2BVRytQ5CGgNoRycVCIvSA7O8blbQcdUC9mnBAhh5Moh54Y9xEmN3csRGZg2qBnYaBqCCA5wGdO%2F8XSSDEB%2B9xtOaaPTZjl1LKTlmzVqo5Ga%2F7UHKIZ0UN3h2cXvP%2F2NNI3klqMgjBbAG8aKfxgsPqopvUx2Pyz5H2AvCOriDtDohKAflL%2FMiMJLxzMkGOqUBpQLyfybMfIOsEbw4VbtTwWgAJhfZkrp1e8GuOoRW%2BKmvGsEPqLXjBsPRBEdFKaC%2FnQ5qGGCaN%2FnbMznqWje5qnhqSILvewSg3%2BSooqT59MDP7AvX9oa%2FznAqSYVAUPn9h8d840X8cReq5JgTjTs76f0ueFiWsmvL3tu44zFT8zPX4no6YrHiTTaNMlmQYBCLQGjHLNPqWLuOC8w4uFTsoPiy2QDB&X-Amz-Signature=3fda9aa200010699556fb9c7dc7305634b6af03f8a6d5d69477f3b6d46c8064b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN5LI3LL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFMPWx%2B%2BwAzYs%2BKgxwJzIs%2BBQecbIjucFYNZMb0C8jqZAiEAoFejDF8SNtUkRc5LspB6p085Uw7NyWB6n9Powf60pUMq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDFDgCFzUrpkD5EJbdCrcA%2BNrjfVp3SlMDAKV87PwvYqa5sa5ijH3ixsAIbLIFmKCDVFoj8cjqI7BbMJmYQXBuCfDDqH3V33OCpfn%2BNBXIDJjf9NCjQ4bUGXG1GyUtYxu55bV2f3x9ZbTeQDhNCesf67poWC7qIn34VmIUTc%2FayM58w76YWL0%2Bcg282uhIdqLSO169K24nYZtStonqX5FXpfLgYMYgVhDYHUpYe77lK%2FEQAk3QVme1EMvyGHMACTTXVXFkQ%2FqG0uii7oJ9%2Bdj%2BJfaDQqwuo91lSWXNC11ir6%2FJDq9uJg7hkvi0p0xQJBIPWpSEosSkuLCnysFjzWTkR8Ts8AaFMG3RsFRW5KFFnQVZDCWZ13d8r2PPJl9sAMvvJFWwqzn5W0nthwBi2Zv%2FPfamQLRP%2Bq%2B8niHY49Y8iczlslCoagGpNBDPmAfTiHxpUXa72PmyLIBNWOXrIHOf4krRiJG%2BVRytQ5CGgNoRycVCIvSA7O8blbQcdUC9mnBAhh5Moh54Y9xEmN3csRGZg2qBnYaBqCCA5wGdO%2F8XSSDEB%2B9xtOaaPTZjl1LKTlmzVqo5Ga%2F7UHKIZ0UN3h2cXvP%2F2NNI3klqMgjBbAG8aKfxgsPqopvUx2Pyz5H2AvCOriDtDohKAflL%2FMiMJLxzMkGOqUBpQLyfybMfIOsEbw4VbtTwWgAJhfZkrp1e8GuOoRW%2BKmvGsEPqLXjBsPRBEdFKaC%2FnQ5qGGCaN%2FnbMznqWje5qnhqSILvewSg3%2BSooqT59MDP7AvX9oa%2FznAqSYVAUPn9h8d840X8cReq5JgTjTs76f0ueFiWsmvL3tu44zFT8zPX4no6YrHiTTaNMlmQYBCLQGjHLNPqWLuOC8w4uFTsoPiy2QDB&X-Amz-Signature=131fbf9cab4b6e99cd2d9a869e8caf7862b4d9b55e79250bf26c4145bcf03200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

