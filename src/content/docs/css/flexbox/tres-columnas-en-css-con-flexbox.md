---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R52OS6OW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBu%2FrLO07qrxV3Zlu0R5sAL27CoecO0Y0a9NYJIwMrIPAiBvP%2BiShB3luGD6Anzz9v0jRLo4A5U9gSzrC1puOBpExir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMXDoafuxZl5bxkwPKKtwDpadp4zH8hyy4EgW%2BDEqA1jMq96pF0cv7%2Be0KvMQTnYLzrHphrI3j4wC1hnTAGnpYbshwEtQ6w%2FE4CwVVU0Ydw7Kcw3zcxFadn8CEGEC6ltkdLRbcBXbQleSWf7WMgKi2kgbve8wTyk8Zb3yt1cyAEtZ2jcjKSNA3X%2B5jvI9YyXXHEES4N1bGdbzMM%2FpR673qztHR4pUx%2BAQoVizQnK8aEkcmTi9w%2BqUVCUx5MkIIPNJnDkBC8CFIaATehgaTsSqueHJVvLmeOPcbMFSewelVxNfDRFGLQeuEEc8RTrlHPIM1V8oidf%2Bc7bV31eP4Z2JMs2zgdPCKSMFsF2ITYPX9SiIx5Eye7ksQxXaRFD4l9P6ht8GEI5hQStcBGLCPdVbfRT8W8TX7tjOpEOZSfPk0R3IQKzACO1CIEqYO5fxCiUyOdUCUAKQopFxw5RG%2BM7Qh%2BVLH2ceIEz%2B5TxzkpgsexHbuJaybfz%2Bm9iW%2FjW%2FNzQP7dZElmGy1dRG4sdc%2FbhHEyvfxg0SjGU3kuMnPkgAQcZd22OiSGwYx1yjGJlUbncVv7wfZFyFfciH5K0rkJhFwfomI6Z8AhayjQGKAa2fiiXQdI2ONX7FqBIgxVO%2Fmt2QLGs%2FDTtJIrhJ9oj0w1YnQyQY6pgGuB6jusl2V8fIw68FSmB7byNvBiDLNtnM5fsvtEEnbnIK6hmqyNOHUopgKU6hSfh%2BIAJ7h1NMm4PvmGrc6XV2vJ8CPnGkhXpE%2FljqBCn0cI2g05OZndfP9Sdva6D0VHL2aTTbMp5pKtvhGi1tGrszqspzWjGIofb9zOcv1mmjnjwgdKfPyS536ziNaaWtmTXISvRSacFK%2BBUpiUIKhEUBBqrBXNCH%2B&X-Amz-Signature=ec2a9c3cce9d1298a2bbfd708e2bb05f2175720cdcf587718747a2f9a48102d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R52OS6OW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBu%2FrLO07qrxV3Zlu0R5sAL27CoecO0Y0a9NYJIwMrIPAiBvP%2BiShB3luGD6Anzz9v0jRLo4A5U9gSzrC1puOBpExir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMXDoafuxZl5bxkwPKKtwDpadp4zH8hyy4EgW%2BDEqA1jMq96pF0cv7%2Be0KvMQTnYLzrHphrI3j4wC1hnTAGnpYbshwEtQ6w%2FE4CwVVU0Ydw7Kcw3zcxFadn8CEGEC6ltkdLRbcBXbQleSWf7WMgKi2kgbve8wTyk8Zb3yt1cyAEtZ2jcjKSNA3X%2B5jvI9YyXXHEES4N1bGdbzMM%2FpR673qztHR4pUx%2BAQoVizQnK8aEkcmTi9w%2BqUVCUx5MkIIPNJnDkBC8CFIaATehgaTsSqueHJVvLmeOPcbMFSewelVxNfDRFGLQeuEEc8RTrlHPIM1V8oidf%2Bc7bV31eP4Z2JMs2zgdPCKSMFsF2ITYPX9SiIx5Eye7ksQxXaRFD4l9P6ht8GEI5hQStcBGLCPdVbfRT8W8TX7tjOpEOZSfPk0R3IQKzACO1CIEqYO5fxCiUyOdUCUAKQopFxw5RG%2BM7Qh%2BVLH2ceIEz%2B5TxzkpgsexHbuJaybfz%2Bm9iW%2FjW%2FNzQP7dZElmGy1dRG4sdc%2FbhHEyvfxg0SjGU3kuMnPkgAQcZd22OiSGwYx1yjGJlUbncVv7wfZFyFfciH5K0rkJhFwfomI6Z8AhayjQGKAa2fiiXQdI2ONX7FqBIgxVO%2Fmt2QLGs%2FDTtJIrhJ9oj0w1YnQyQY6pgGuB6jusl2V8fIw68FSmB7byNvBiDLNtnM5fsvtEEnbnIK6hmqyNOHUopgKU6hSfh%2BIAJ7h1NMm4PvmGrc6XV2vJ8CPnGkhXpE%2FljqBCn0cI2g05OZndfP9Sdva6D0VHL2aTTbMp5pKtvhGi1tGrszqspzWjGIofb9zOcv1mmjnjwgdKfPyS536ziNaaWtmTXISvRSacFK%2BBUpiUIKhEUBBqrBXNCH%2B&X-Amz-Signature=bf639418c2bd0f87ef29ea62cb8a187e3f25af0933bde8f6b5e08c2561efa447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

