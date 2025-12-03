---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IRY337R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T040800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIEFO5QTtATnRSOX4DILfDO1zzqNO8ZvvDNMq26ypSrJzAiA4jF1qAdN7wkOzGqdg4qxy%2Bzjcqb63CTVTYdN3LYoAmyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMiAtOlFxAd5gd4WL%2FKtwDkvHOH7tSeX2lIc4hp9HO%2BeaHLpdF7B%2FPgxSvfg2%2FJ5T4Gml0tW%2BHS6uvLCDpbKgtGK9iO%2B0FqCsN0BynnB67dhKXCeTqtuPcBYxOPc5GWE8NbGtLfU2tnXjwH7vsKQ0GBZ7%2FO1IVB54vr1UTOVUTWs28K4cz%2FQGt29tjEyOGl%2F%2BoIGEGIkzcqOH%2B6FQ0L3Vqb2AVevASpMVQPcOa4FdGBNgm0LKxVXml2t4PVqtJ%2BhOK%2Fsg%2F9NGAER7pptpFHqPZ350x9h9X7qH0MhSlQzfdmlSJ9Tup8hYmMP5qgtYFWsDKIxfsITsn1a1abxpdWhcDuMRLrt3lsBZ3EWccaVMgAmFju1T8WZvDVeup29EDHDqk5Vlq3twp44UBLZVn9sILKXccuT7lyMmW9Bnf87ih2k%2FYDjMjzJ9cpfdlegJOGoIpyyODF3Nvb%2BzeBhm7Ym9g5MkWU0g2PBLoQ6qEmPDWnRPr0wkHTx9QDcjHxokZI6zAkav3tbA85oUP7Vcs2D5UCQOz0C%2F1cR53zdWf8qhy899cDKOIjzetOF8IlV7ziJ40wD7tM%2FWdVHPjHrEMbG0JQUK9NU9IEv3dQ3lPN420tPyJEwnXYkbXOkC0Xo%2BDuVa9WKB4NV%2BtFPCXZgUwyJS%2ByQY6pgGNy2ENU2AYCxQmeei6fit2ZR4D2D1NRZMU3dOamLn809h%2F6SAdX0gExo1Lpxze2p6guaQIeZitJU8fjwHpz3fXchXPUKPtMdGRnJtL9s%2FLRidfP6bew2oPiiKLKOLYjcClUzKgjcmHTUwgDRMus5tph2mxThk3%2F1%2B01Nq8VF9iPUbGc3rHWcyyX%2B0bXLw7Rwn3MuW7v8o18AwMz4jsl1gvv96%2FthCt&X-Amz-Signature=179362022426a0d02e6b54c43d50d2e8f9d761dfbeeab1278560e9b03631f17b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IRY337R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T040800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIEFO5QTtATnRSOX4DILfDO1zzqNO8ZvvDNMq26ypSrJzAiA4jF1qAdN7wkOzGqdg4qxy%2Bzjcqb63CTVTYdN3LYoAmyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMiAtOlFxAd5gd4WL%2FKtwDkvHOH7tSeX2lIc4hp9HO%2BeaHLpdF7B%2FPgxSvfg2%2FJ5T4Gml0tW%2BHS6uvLCDpbKgtGK9iO%2B0FqCsN0BynnB67dhKXCeTqtuPcBYxOPc5GWE8NbGtLfU2tnXjwH7vsKQ0GBZ7%2FO1IVB54vr1UTOVUTWs28K4cz%2FQGt29tjEyOGl%2F%2BoIGEGIkzcqOH%2B6FQ0L3Vqb2AVevASpMVQPcOa4FdGBNgm0LKxVXml2t4PVqtJ%2BhOK%2Fsg%2F9NGAER7pptpFHqPZ350x9h9X7qH0MhSlQzfdmlSJ9Tup8hYmMP5qgtYFWsDKIxfsITsn1a1abxpdWhcDuMRLrt3lsBZ3EWccaVMgAmFju1T8WZvDVeup29EDHDqk5Vlq3twp44UBLZVn9sILKXccuT7lyMmW9Bnf87ih2k%2FYDjMjzJ9cpfdlegJOGoIpyyODF3Nvb%2BzeBhm7Ym9g5MkWU0g2PBLoQ6qEmPDWnRPr0wkHTx9QDcjHxokZI6zAkav3tbA85oUP7Vcs2D5UCQOz0C%2F1cR53zdWf8qhy899cDKOIjzetOF8IlV7ziJ40wD7tM%2FWdVHPjHrEMbG0JQUK9NU9IEv3dQ3lPN420tPyJEwnXYkbXOkC0Xo%2BDuVa9WKB4NV%2BtFPCXZgUwyJS%2ByQY6pgGNy2ENU2AYCxQmeei6fit2ZR4D2D1NRZMU3dOamLn809h%2F6SAdX0gExo1Lpxze2p6guaQIeZitJU8fjwHpz3fXchXPUKPtMdGRnJtL9s%2FLRidfP6bew2oPiiKLKOLYjcClUzKgjcmHTUwgDRMus5tph2mxThk3%2F1%2B01Nq8VF9iPUbGc3rHWcyyX%2B0bXLw7Rwn3MuW7v8o18AwMz4jsl1gvv96%2FthCt&X-Amz-Signature=04acdd3e80c00cfdaa8b7f9357fd368862d44bd730d5f3b9998edc9fe2b3c3cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

