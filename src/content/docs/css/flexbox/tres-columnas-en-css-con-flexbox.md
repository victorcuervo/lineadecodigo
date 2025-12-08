---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GJ3TA7R%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESwVuo4ddf1%2BJf1oRxt78rbXGEJ70QsrunYKFVr2yJ%2BAiEA774%2B4WKDTquApmq36o2KaAgk700DztVaSpFXlzfyB80qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSl%2FMj14cpOQULJXCrcAw7%2BfDr5fRNRRfKZWIhcc0I1HpwRlwM0RypcvETncLQk5sDJTP86RFmYrrQIWFIJwBP5WG0fUsRl8tDZk3BjnZNwwRYn48VJrG8%2FZwzQhaa6FYq9jvOEReWKyWOvcfSn0F6F8LKUzOVsCH3PJDklIX8X9nvJvZOasqd619wUx%2FNrsYXnMbjcx8zonMwLxPfPm9sbBqK4roOG7nZ3c%2B9Rq1p5dEU%2FtQ8PTZSq9MhiBM7nF4R3ClGiqNwtCmxVBLC%2BXa%2FaSThSRovn9YE8AAJKCq3H%2FKolQ8TT2XA1GLMkIEzBhSHhP5OBTkv2ko%2BPQQ2dfLzMVmO8bO0HVK%2BZqbQsbDayBVNC4P0vZANoOArUzolV3QD8FRm3ZROkBTNLhv1Co%2Ft%2BRfJABIwo5lPjYWZANSE3juAcRTmof0WlxTCnXbWqYVXkBaKjHCEQZWpIpYbOCEJxfOB5YkL3gkhOesXy%2BxZXXSLKd27AGnvYfcr%2BiEo5zRqVuwxyIAqjIyQio9jhRQrqrA6B6%2FxiLa4eXaDjttOxhYw%2F0881BbJxlxkQlT%2BfnamJc%2BjD8%2BSo%2BsJbU6c7a2Oi1q7JgRiLCMIu97dRyM3zqQ87J3NvopMgmdGnK9mbAML7obmKRmyB9%2BtcMM2A3ckGOqUBfTakeQft5A6u4DvdYRc3LZXHWKqaLmHRpHXMxVn6cREEW%2F0%2BhM2nSVMvCUr2SRnqt2xH4m3CGQQZnhfxxZFf5wlj%2FpYONfHHg3FmQr%2FbG%2FwsMYaW9QPoPkFpCoUg1fIq6HkUaALbY0R%2FxRnLhPlpnUzABTKcg3WWLmC18y8%2Fkq8LIhnxTQQ6vIGJKr%2FSdOr%2BSYVlrLbxHdtFHWnxNL74PqhDT8U6&X-Amz-Signature=2286a2a29645adcd994720be44db5e744167138c296d3d206a9c4210ff234124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GJ3TA7R%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T222958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIESwVuo4ddf1%2BJf1oRxt78rbXGEJ70QsrunYKFVr2yJ%2BAiEA774%2B4WKDTquApmq36o2KaAgk700DztVaSpFXlzfyB80qiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKSl%2FMj14cpOQULJXCrcAw7%2BfDr5fRNRRfKZWIhcc0I1HpwRlwM0RypcvETncLQk5sDJTP86RFmYrrQIWFIJwBP5WG0fUsRl8tDZk3BjnZNwwRYn48VJrG8%2FZwzQhaa6FYq9jvOEReWKyWOvcfSn0F6F8LKUzOVsCH3PJDklIX8X9nvJvZOasqd619wUx%2FNrsYXnMbjcx8zonMwLxPfPm9sbBqK4roOG7nZ3c%2B9Rq1p5dEU%2FtQ8PTZSq9MhiBM7nF4R3ClGiqNwtCmxVBLC%2BXa%2FaSThSRovn9YE8AAJKCq3H%2FKolQ8TT2XA1GLMkIEzBhSHhP5OBTkv2ko%2BPQQ2dfLzMVmO8bO0HVK%2BZqbQsbDayBVNC4P0vZANoOArUzolV3QD8FRm3ZROkBTNLhv1Co%2Ft%2BRfJABIwo5lPjYWZANSE3juAcRTmof0WlxTCnXbWqYVXkBaKjHCEQZWpIpYbOCEJxfOB5YkL3gkhOesXy%2BxZXXSLKd27AGnvYfcr%2BiEo5zRqVuwxyIAqjIyQio9jhRQrqrA6B6%2FxiLa4eXaDjttOxhYw%2F0881BbJxlxkQlT%2BfnamJc%2BjD8%2BSo%2BsJbU6c7a2Oi1q7JgRiLCMIu97dRyM3zqQ87J3NvopMgmdGnK9mbAML7obmKRmyB9%2BtcMM2A3ckGOqUBfTakeQft5A6u4DvdYRc3LZXHWKqaLmHRpHXMxVn6cREEW%2F0%2BhM2nSVMvCUr2SRnqt2xH4m3CGQQZnhfxxZFf5wlj%2FpYONfHHg3FmQr%2FbG%2FwsMYaW9QPoPkFpCoUg1fIq6HkUaALbY0R%2FxRnLhPlpnUzABTKcg3WWLmC18y8%2Fkq8LIhnxTQQ6vIGJKr%2FSdOr%2BSYVlrLbxHdtFHWnxNL74PqhDT8U6&X-Amz-Signature=0c8ec5a4bc9dc4eb6dbaea09aba3a7d6cd6e8938bbbdeb8419330bdd7ddfdb6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

