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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJF3NH7N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T171505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIHiqMLZoIg028XFzAlWh5piIDxEnOQtgRA1wuuFE%2F8JtAiByX4LqsCo5YpRLOVHLt1Kg%2FZrN1GK%2F7g5kCp767Bq4Cyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMN1Fpv%2Bn3FPV9VNcIKtwD88nP08kXqjlQpprVK6iHvRarXDRufOLUoBsC95G4Yuw2fQiAtGti7NGXZ5HQ7jip4LwS32IAjnHu4RfkLFNY%2F0E0sJmohWusGHQeUxC92Y%2Bz3dempqLy%2B8zZ5Gi8lMWaGnREAASNL9Mw1izKHHQA5WLAunm3HMtRfhe7FakDq84UKVZJhA52KXSmeeDMnTX4Z2adJG9WjP3CxxjZFFv94%2FexImEl%2F03x5XA5b73plTI%2B2oK5odTU6HCvs71LSuWGEWEnuL0Cc31TJCFtAYt3MGb5SMxwLH8l3xiam8uTCTOLeRLW3FYIEGKZg3VjYKKPacMRH2HkEJ4%2FBkCJK7f0luudEV%2F1zKQ%2FCVECJIuAV49%2BOGckYpaLDiBUbWQikdDumvaoUmx5mv%2FGZTFhN8eVRky9CZv%2BrX0DGI%2FM1k70%2B2zwXtlodOabaye7USSF47WWwHtWRuuTX4qskHwUS4k8CBag283adiHwXLhF0RFQ1UgxnPK0qjbjFrJ06GCbvNi3sTAP6ouzWS4L2UYbMM6nPh6LLj2SZ8TK%2FCwy7VEUb266vTmrK1dOMXvYFDy26j%2Fo25Q2XRxomBk6HZDKmgGnyUBXW9Vjhlm07Kg9zD1xcfCwrM9Bbp2jUIvU1LAwoNvByQY6pgHHSBSAwHmpqQ98McW9mJ0XRrl9d6D44Fzc5y3VMPW5gkFAmgAuCwHHCQHX9lacxymmXq1u3q7Ikh1PjgAOJa17RhQ2Ae90%2FcviPRU1TtxcQ5giFs5a2tEHNZSADl9Nnr%2FxXMaG9yT1omT4Lhv%2Ff0HQ8ipvMaluHOvPnpY0CjkZTNU%2Fush%2Fku%2BooKdpivTbsA6VrNpHS8Du6Eg8xofnPhZQ1CEBH%2Br1&X-Amz-Signature=4a77c117450ad363bf1336994a2ac2d145501fc0732f518ffe8afc07242a3b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJF3NH7N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T171505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIHiqMLZoIg028XFzAlWh5piIDxEnOQtgRA1wuuFE%2F8JtAiByX4LqsCo5YpRLOVHLt1Kg%2FZrN1GK%2F7g5kCp767Bq4Cyr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMN1Fpv%2Bn3FPV9VNcIKtwD88nP08kXqjlQpprVK6iHvRarXDRufOLUoBsC95G4Yuw2fQiAtGti7NGXZ5HQ7jip4LwS32IAjnHu4RfkLFNY%2F0E0sJmohWusGHQeUxC92Y%2Bz3dempqLy%2B8zZ5Gi8lMWaGnREAASNL9Mw1izKHHQA5WLAunm3HMtRfhe7FakDq84UKVZJhA52KXSmeeDMnTX4Z2adJG9WjP3CxxjZFFv94%2FexImEl%2F03x5XA5b73plTI%2B2oK5odTU6HCvs71LSuWGEWEnuL0Cc31TJCFtAYt3MGb5SMxwLH8l3xiam8uTCTOLeRLW3FYIEGKZg3VjYKKPacMRH2HkEJ4%2FBkCJK7f0luudEV%2F1zKQ%2FCVECJIuAV49%2BOGckYpaLDiBUbWQikdDumvaoUmx5mv%2FGZTFhN8eVRky9CZv%2BrX0DGI%2FM1k70%2B2zwXtlodOabaye7USSF47WWwHtWRuuTX4qskHwUS4k8CBag283adiHwXLhF0RFQ1UgxnPK0qjbjFrJ06GCbvNi3sTAP6ouzWS4L2UYbMM6nPh6LLj2SZ8TK%2FCwy7VEUb266vTmrK1dOMXvYFDy26j%2Fo25Q2XRxomBk6HZDKmgGnyUBXW9Vjhlm07Kg9zD1xcfCwrM9Bbp2jUIvU1LAwoNvByQY6pgHHSBSAwHmpqQ98McW9mJ0XRrl9d6D44Fzc5y3VMPW5gkFAmgAuCwHHCQHX9lacxymmXq1u3q7Ikh1PjgAOJa17RhQ2Ae90%2FcviPRU1TtxcQ5giFs5a2tEHNZSADl9Nnr%2FxXMaG9yT1omT4Lhv%2Ff0HQ8ipvMaluHOvPnpY0CjkZTNU%2Fush%2Fku%2BooKdpivTbsA6VrNpHS8Du6Eg8xofnPhZQ1CEBH%2Br1&X-Amz-Signature=7479e8bed091a57ed416401c345dafc77fdd0357f55b540b21ebbaf20b1a0a1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

