---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLP2VSQX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCo0txLkCUAaO%2BNq3hNH630RcbuHQL1icaDi8974f9nwIhANtIPcKTQPgx%2B6Y4owI%2FGclZhD80Scw%2FuP05K0NB04fQKv8DCG8QABoMNjM3NDIzMTgzODA1IgwPgkIFY7cRi2tkzSwq3AO%2BxDpXSO5asYOenoBChQRO0ucJ0Om6H4JWIDnvkZmVdcP514c6QIEChtGOumvyl9j3p%2FbP5ui9%2FdA7ojpcTXwRE4zFPwwANOyanpMljpVsyO%2FJmrAXqk35c5P6xiNxbUlSSdMFVFLTXP7YKUpYzeJXbxfYyP3Oa%2F9BDUU9%2F%2BzGNaIogf7BE4e8J4jOQW0twPTX6ZGrFc9bbaKhtf61h79sfW6yUmWki529mFtZwjtCa8zzyYDwRTdJ3%2BDVmGSodrIIYCGSeRZWXvVwR1tHz2jX1S4oxrdL2oASFDvZT1ZWMoYWZznavPn7b3V%2FbrV8yfMa1An7B04WZFMYPm5QSUhSCS6lsQIx%2B3ujBcOgI9U0PoDpvTRU2z1njUD9kpiMTSisC7VvUK%2BRduibiVVoYOH1eaef5Uq3Wh2expnBGyACNoXlC9YeJVNIL%2BsQzr6%2F0JOFlujLh69UNx2dvB7S5SPYxhyLzorDG2n55R8kscZ2Sap2hFZEhEJ3%2FbvgH%2B8fDYVp%2BxSOs5HlwVtgCqD2ciUU8JXEedP9vTE3jbgw5eh05fqLaQp1n7lST0RnaGMsqv1QFZwKSGD6ofrGPvPJGdUAcr8vF7AyUjWEyQDmk6T6z8KAkgX8fI2QDFaMrDCd%2Fc7JBjqkAX3pwtL5TPiz%2Fye2CnmM5IUsDRa7fCQpLnGbW%2FxAMjI4xmT7s21WNT07pi8DhBfHV96gSD5GeCi5IBekYn8B7w9WprrNrUeA4%2B6Ge6qJVaFAGyO7t0nKVOW%2FDEfdLZ1hhmDzVzE3l6aMkfVokHyhgpLB6cPHHgIO2aPfwGbhnETCx6d6s9E9TBCRzZCAOczcqW8CCcacANz77SKYNVHJDswyGYHp&X-Amz-Signature=952dfc2857720bb5006c0ea9132001c3f6822e9037ae9b74ab92f9adcba905b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLP2VSQX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T055554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCo0txLkCUAaO%2BNq3hNH630RcbuHQL1icaDi8974f9nwIhANtIPcKTQPgx%2B6Y4owI%2FGclZhD80Scw%2FuP05K0NB04fQKv8DCG8QABoMNjM3NDIzMTgzODA1IgwPgkIFY7cRi2tkzSwq3AO%2BxDpXSO5asYOenoBChQRO0ucJ0Om6H4JWIDnvkZmVdcP514c6QIEChtGOumvyl9j3p%2FbP5ui9%2FdA7ojpcTXwRE4zFPwwANOyanpMljpVsyO%2FJmrAXqk35c5P6xiNxbUlSSdMFVFLTXP7YKUpYzeJXbxfYyP3Oa%2F9BDUU9%2F%2BzGNaIogf7BE4e8J4jOQW0twPTX6ZGrFc9bbaKhtf61h79sfW6yUmWki529mFtZwjtCa8zzyYDwRTdJ3%2BDVmGSodrIIYCGSeRZWXvVwR1tHz2jX1S4oxrdL2oASFDvZT1ZWMoYWZznavPn7b3V%2FbrV8yfMa1An7B04WZFMYPm5QSUhSCS6lsQIx%2B3ujBcOgI9U0PoDpvTRU2z1njUD9kpiMTSisC7VvUK%2BRduibiVVoYOH1eaef5Uq3Wh2expnBGyACNoXlC9YeJVNIL%2BsQzr6%2F0JOFlujLh69UNx2dvB7S5SPYxhyLzorDG2n55R8kscZ2Sap2hFZEhEJ3%2FbvgH%2B8fDYVp%2BxSOs5HlwVtgCqD2ciUU8JXEedP9vTE3jbgw5eh05fqLaQp1n7lST0RnaGMsqv1QFZwKSGD6ofrGPvPJGdUAcr8vF7AyUjWEyQDmk6T6z8KAkgX8fI2QDFaMrDCd%2Fc7JBjqkAX3pwtL5TPiz%2Fye2CnmM5IUsDRa7fCQpLnGbW%2FxAMjI4xmT7s21WNT07pi8DhBfHV96gSD5GeCi5IBekYn8B7w9WprrNrUeA4%2B6Ge6qJVaFAGyO7t0nKVOW%2FDEfdLZ1hhmDzVzE3l6aMkfVokHyhgpLB6cPHHgIO2aPfwGbhnETCx6d6s9E9TBCRzZCAOczcqW8CCcacANz77SKYNVHJDswyGYHp&X-Amz-Signature=20c5877ac47408da098b3350ea38d42870f465611b5bd5502f3a2004b611759b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

