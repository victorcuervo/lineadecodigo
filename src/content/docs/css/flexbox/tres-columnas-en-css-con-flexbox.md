---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTILSG7N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVL75DPqLT5q97DNg3sttpaT0%2BllgJxCzxfoVLh2Fx2gIgErk89akxIYoZwOEg76eHXVd%2BQuVOYxwgveUg0RXjwRgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqzh95hpN4h9T0oKyrcA%2BsFz05AFHxVBhRpPIXvzzwbmvwWfM8eidVzuwB1zMwH36KvkQIts0yrZHIYnF1XBB9O52sX8ZwQqpUBLHCTULRJS3SYSgS45ifL2tlTKFi7zomugTlZGxOq%2F9kMApIV2E01Ycf7AMOML%2F2RyWgxNe8oxOieKUu%2BDtfi%2Fl6cFCV%2BRMpXn0hboSaCwgLy9kOKVFeUTJ8s71eMu1LCXjhm3yL0t%2BILLRC5EcnvITQAFJCxyd9Il0wCZv2cjv5eowAQLmXJ2PmV4iannzA7f58RXV2VZovdALodNKLWFGOeTp%2BoOwGVTnoWvlkV%2FJcFTyc2h6VDlkQOSBSZLv0xMmb9EXcaE2U7d%2FmKqg4oDDWX8PamL2GovX9rboyAzNvilzcsh5J3CX%2Fh9U6P46KIXpi%2BLwkYmfU7GOuEPdVcHjfO0MvCSmhM93uPzrYesPryTmKa4YtQsL5N2SUEVOVraTGIzgjXao8chiNUs9tr%2BS7ajn%2Bd9IsCUVPu7Tsv9eGzE2j17JIRwyuQfTJUXrl2lgZfheUX0hixhaanaHk%2B5gxPbKj23jp9BgaZVcAc%2BoF8j%2BFQdRrq3s73Ne4Brn3uEZzMcOAs%2FtomjsKiIPH%2BnFxvn2IB7etGp00w4wA1%2FPrXMMeZ1ckGOqUBu5QehjCWc2wE9vYa9aCaL5Wsstq3hHcMVO47qzHRsS%2BcpfaHCVrn%2B17H%2BhGE2GmSLlIiN8c%2BEBwVDT5I6ZpmhoOJfXXqebRglBA3jHwOckT2l7q6IjE47pGp%2FNgbDkuDLXnYkm2zqwVsXpNLKoxJqPRafTidu1oLzpEMfntJ63lUZh5DfcKUhb7ChEuOo%2BEdRR3U2vYShkg0ui7S6r1Jr%2F8bHEjS&X-Amz-Signature=e5a5f151603474a4680cc1264f406b7e0d51ec6b0e769743b6cfeac1b928e7db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTILSG7N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T135913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVL75DPqLT5q97DNg3sttpaT0%2BllgJxCzxfoVLh2Fx2gIgErk89akxIYoZwOEg76eHXVd%2BQuVOYxwgveUg0RXjwRgqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLqzh95hpN4h9T0oKyrcA%2BsFz05AFHxVBhRpPIXvzzwbmvwWfM8eidVzuwB1zMwH36KvkQIts0yrZHIYnF1XBB9O52sX8ZwQqpUBLHCTULRJS3SYSgS45ifL2tlTKFi7zomugTlZGxOq%2F9kMApIV2E01Ycf7AMOML%2F2RyWgxNe8oxOieKUu%2BDtfi%2Fl6cFCV%2BRMpXn0hboSaCwgLy9kOKVFeUTJ8s71eMu1LCXjhm3yL0t%2BILLRC5EcnvITQAFJCxyd9Il0wCZv2cjv5eowAQLmXJ2PmV4iannzA7f58RXV2VZovdALodNKLWFGOeTp%2BoOwGVTnoWvlkV%2FJcFTyc2h6VDlkQOSBSZLv0xMmb9EXcaE2U7d%2FmKqg4oDDWX8PamL2GovX9rboyAzNvilzcsh5J3CX%2Fh9U6P46KIXpi%2BLwkYmfU7GOuEPdVcHjfO0MvCSmhM93uPzrYesPryTmKa4YtQsL5N2SUEVOVraTGIzgjXao8chiNUs9tr%2BS7ajn%2Bd9IsCUVPu7Tsv9eGzE2j17JIRwyuQfTJUXrl2lgZfheUX0hixhaanaHk%2B5gxPbKj23jp9BgaZVcAc%2BoF8j%2BFQdRrq3s73Ne4Brn3uEZzMcOAs%2FtomjsKiIPH%2BnFxvn2IB7etGp00w4wA1%2FPrXMMeZ1ckGOqUBu5QehjCWc2wE9vYa9aCaL5Wsstq3hHcMVO47qzHRsS%2BcpfaHCVrn%2B17H%2BhGE2GmSLlIiN8c%2BEBwVDT5I6ZpmhoOJfXXqebRglBA3jHwOckT2l7q6IjE47pGp%2FNgbDkuDLXnYkm2zqwVsXpNLKoxJqPRafTidu1oLzpEMfntJ63lUZh5DfcKUhb7ChEuOo%2BEdRR3U2vYShkg0ui7S6r1Jr%2F8bHEjS&X-Amz-Signature=29fb49b8a85e6bb8ac3a7c1de4ef11ee55d8b9b774d56c8cbe82eaf082ed8830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

