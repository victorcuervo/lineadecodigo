---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPV6HOO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNZdvHcf0PTihj0HODlfEiJ4SQ0EA6lN47%2FkV7nBM6fAiAfy9u2x%2FVqD5Y%2FY7jORI1rXwVB7aPdH9IhkNTsyVeh4yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM3X2xTSY8fTqwl82UKtwDhyCn571QMFQu230d9kuNXagV%2BZ4aybZ9ezKIRUmJxBsKMR0ae4wuDlnWCFiuaoXYhmdjdQ1bMqyWsdSD1Buh5mLQWOKimvuIOd%2F9yYpdVyaYdc8IbYlPjuXbQtGIsR0j3xjIi88ACqFvHLMrZ%2BolNyvIyk3IbH9LFx55vsIdhTY7lQXcQu9oCzhMOGKiOE%2BLyjl2sDvCMF%2FNIXvLNj9lov%2BwQjw2PRbFP%2BUZU6KbgPSqSUBVS2b95w2yTRe2rl5NHIx%2BAQEE1ZNpwP2lNMosYIme7k3JpaDeSj8Fzv2IBRLmRdbYMMpLK1rEteiTBEyCi9Z0Y%2BhOcGI27GYQRC8U41W1eO4dn4K6RsILNvLBZytM6tvtp8hUXEdnV9jydG4nWvvvdmt9TbbPgidNQMsKSIlTByYqr%2ByynH3n0zo6yaMKFA9VUV9AAgEWY%2B6iuqQEvt5zmIScqa1rNpiM7nU9sq45d%2BECL%2BEDmTnQVhkxngPHCfLY3vxFu06yZ1C%2F9iOPbdhKmajUwZnmi%2FubUPmHenHn36PfYBNLg15DAn5uE3g9FWzh9O3xG2ZKGFsS354P1NMLmigMGRw1vKb7x94H4LORQXWSV4inpHxZVOcBasyoOEHppUgRHC9Dwtsw56rJyQY6pgFUcl4ZLYu%2FfEq1Zz565%2Fm1Ctui8lblS9Fz2T23evckOwZR2kqhT7nY19%2B4t0XlXGFPFyS7%2BWpGqmrz9XvRoyn695SP%2BFhkAj84anSAb3GmXl9k%2BvbC%2BjTck%2Fv5h4NDVou4USL7ZBWqqtUOr8TKU%2FAhRGueTM4WwY2cTe2UPRipW%2FTcHgzKcydS7bmZfUGY9RtH%2BeXzyc%2BBoqOESojgo%2B0acf2hcUGB&X-Amz-Signature=c5303d3474e3445623160ee97c5d9f4a10fc24a09265c8c5e62b40db835a95e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPV6HOO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFNZdvHcf0PTihj0HODlfEiJ4SQ0EA6lN47%2FkV7nBM6fAiAfy9u2x%2FVqD5Y%2FY7jORI1rXwVB7aPdH9IhkNTsyVeh4yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM3X2xTSY8fTqwl82UKtwDhyCn571QMFQu230d9kuNXagV%2BZ4aybZ9ezKIRUmJxBsKMR0ae4wuDlnWCFiuaoXYhmdjdQ1bMqyWsdSD1Buh5mLQWOKimvuIOd%2F9yYpdVyaYdc8IbYlPjuXbQtGIsR0j3xjIi88ACqFvHLMrZ%2BolNyvIyk3IbH9LFx55vsIdhTY7lQXcQu9oCzhMOGKiOE%2BLyjl2sDvCMF%2FNIXvLNj9lov%2BwQjw2PRbFP%2BUZU6KbgPSqSUBVS2b95w2yTRe2rl5NHIx%2BAQEE1ZNpwP2lNMosYIme7k3JpaDeSj8Fzv2IBRLmRdbYMMpLK1rEteiTBEyCi9Z0Y%2BhOcGI27GYQRC8U41W1eO4dn4K6RsILNvLBZytM6tvtp8hUXEdnV9jydG4nWvvvdmt9TbbPgidNQMsKSIlTByYqr%2ByynH3n0zo6yaMKFA9VUV9AAgEWY%2B6iuqQEvt5zmIScqa1rNpiM7nU9sq45d%2BECL%2BEDmTnQVhkxngPHCfLY3vxFu06yZ1C%2F9iOPbdhKmajUwZnmi%2FubUPmHenHn36PfYBNLg15DAn5uE3g9FWzh9O3xG2ZKGFsS354P1NMLmigMGRw1vKb7x94H4LORQXWSV4inpHxZVOcBasyoOEHppUgRHC9Dwtsw56rJyQY6pgFUcl4ZLYu%2FfEq1Zz565%2Fm1Ctui8lblS9Fz2T23evckOwZR2kqhT7nY19%2B4t0XlXGFPFyS7%2BWpGqmrz9XvRoyn695SP%2BFhkAj84anSAb3GmXl9k%2BvbC%2BjTck%2Fv5h4NDVou4USL7ZBWqqtUOr8TKU%2FAhRGueTM4WwY2cTe2UPRipW%2FTcHgzKcydS7bmZfUGY9RtH%2BeXzyc%2BBoqOESojgo%2B0acf2hcUGB&X-Amz-Signature=5fbd3d8edb67fe798f9e24c05f5e17c4f6f3c589f9d6ae47bfd6772d91bb87fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

