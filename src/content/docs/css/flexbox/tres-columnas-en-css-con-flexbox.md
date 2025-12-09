---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466737OFG4R%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2Uge4J7m5d5wRcS7FLbopb3cQyHRyzONADFaWuXL9hwIgXOUe2Sm%2B5VYN2YmpizANLanDgXYrYrG6z5d0KSe98OoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJldMIoTQRuLIZi3CrcAxeRJgSLsrUprMMurfAS0mQ3%2FQFhlZyxhQuHCgNlZ6KXzREMNpXf2JOKECUGHEuo%2B%2FviQp2jFK4AD1iuzB5wmx3%2BTy9RI98z6a6flmv%2FKC%2FdvVFt3yth1J9lvGWs7lHBBt7wyjV5IOsl78s%2FlMoCcWRJfXujVUZln3xSrempf3FSLK1Oz78Y%2FB%2F6jCHO99uXsc5UOagg61E6jjcH6YScyLsm8Wh%2B9E3fj26OF%2BU8PLhanSJJGXhoVx1f%2FlkSerd%2BahTpHYamMc3ulU81jcZIvikPJeiOzszWiwQQoppP0AWhQ63eyHyT%2FnE%2FJ8CmMur9jHI%2BpmWyGl6QeszKBRrurQyQIoWM%2FB4xerxfUJ8QIZoTV60mKI6gEvmGfeswdyV9jojUzDjOAdG58vx8ocDvrOg2e%2FezH%2BwLoXYisaBUgDXdn9iJwFxa98LnaxnDcqdunD0%2F6BDXdhi1R06xmk6eKLepTYrleJoDwsn9MZ%2FgGUnVT%2FwSFUi0MQqphUslG%2ByHigkuxYmE70Y50SFAHJLF0MT8Qr7Eov61e8XLt4TJV%2B1A6ar9Ez2DqdOMmsEOY8BAg5a21yyHhfffl40FdAM9yd0%2B%2FCFgRXg6YZ4iVTpY%2F4iWlJCM26tcUGoAZQhsMLTl3skGOqUBTysXnceNvYgUBJgAgueZrwRiKmMexS%2BssRZGTAS8Vtbsw9UW78i2Fvcm9tFglC8guJ11fA3fZ%2FQg9dpZ8Q0C05LWVqDPmKU7VXa267G5BM9TrYRGCPpTMlxiRGXwAj9%2FHuhOijrPQjQiepFOUFipsRh%2B6qNJKrof2J9uUf3Bq97HbnIpqdM%2BiPRVNPiXpWcV%2BAR7rDNqut11LfYqVCX4DAOg37bd&X-Amz-Signature=53f76241909d633d9a7fc6f6fbaf42816a26c44ee4505e0e8dd1b50ef213ebe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466737OFG4R%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2Uge4J7m5d5wRcS7FLbopb3cQyHRyzONADFaWuXL9hwIgXOUe2Sm%2B5VYN2YmpizANLanDgXYrYrG6z5d0KSe98OoqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJJldMIoTQRuLIZi3CrcAxeRJgSLsrUprMMurfAS0mQ3%2FQFhlZyxhQuHCgNlZ6KXzREMNpXf2JOKECUGHEuo%2B%2FviQp2jFK4AD1iuzB5wmx3%2BTy9RI98z6a6flmv%2FKC%2FdvVFt3yth1J9lvGWs7lHBBt7wyjV5IOsl78s%2FlMoCcWRJfXujVUZln3xSrempf3FSLK1Oz78Y%2FB%2F6jCHO99uXsc5UOagg61E6jjcH6YScyLsm8Wh%2B9E3fj26OF%2BU8PLhanSJJGXhoVx1f%2FlkSerd%2BahTpHYamMc3ulU81jcZIvikPJeiOzszWiwQQoppP0AWhQ63eyHyT%2FnE%2FJ8CmMur9jHI%2BpmWyGl6QeszKBRrurQyQIoWM%2FB4xerxfUJ8QIZoTV60mKI6gEvmGfeswdyV9jojUzDjOAdG58vx8ocDvrOg2e%2FezH%2BwLoXYisaBUgDXdn9iJwFxa98LnaxnDcqdunD0%2F6BDXdhi1R06xmk6eKLepTYrleJoDwsn9MZ%2FgGUnVT%2FwSFUi0MQqphUslG%2ByHigkuxYmE70Y50SFAHJLF0MT8Qr7Eov61e8XLt4TJV%2B1A6ar9Ez2DqdOMmsEOY8BAg5a21yyHhfffl40FdAM9yd0%2B%2FCFgRXg6YZ4iVTpY%2F4iWlJCM26tcUGoAZQhsMLTl3skGOqUBTysXnceNvYgUBJgAgueZrwRiKmMexS%2BssRZGTAS8Vtbsw9UW78i2Fvcm9tFglC8guJ11fA3fZ%2FQg9dpZ8Q0C05LWVqDPmKU7VXa267G5BM9TrYRGCPpTMlxiRGXwAj9%2FHuhOijrPQjQiepFOUFipsRh%2B6qNJKrof2J9uUf3Bq97HbnIpqdM%2BiPRVNPiXpWcV%2BAR7rDNqut11LfYqVCX4DAOg37bd&X-Amz-Signature=6995dbc36bf7ea2b9cdedae2c9c6b4f2cdbabc0c90fccc733d3fa14dcfd8196d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

