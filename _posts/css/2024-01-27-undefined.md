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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VURZW5UV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T170252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIFAwv64e2C2tfO%2B4DUsqzMdT03b7eV0dALPeKzjsEtQIAiBlhsdh2j1jUmrdXqmjEAMuN49TotkMppf6g4RwxwkJIir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM%2BIMVFCM%2FYi6xrpEbKtwDIBZJHOfqDj2Yc28CpnrbEonGItFuPvaj67UzNPzOEdadeZGGRdsR7s8%2FhJys%2FfeCU3Z%2FEiwRHMc5QwhEMxtjosLUjSvGb7Mo4%2BBBpM9Hm7MpEv%2B00u2G9K5HGGVn%2F%2BIVC7DKgfdIDvu4EKb%2BNXt4RhQuPtPahUx1r2koy63wXP%2BDF%2FRWiLcd3FBZXIUh57w3r%2B4TwJu7eqrz42L%2F6BBtUX4QG5LKxPalvy%2FAYuTqc%2FI4bHciaROxc4MVkfiiQNVmXpDzva0ccmephblJruna2%2ByDlC%2FfmS3sl4f6F1EUgGxp3VVba6wKBIJxPUK%2F%2Br4rG5aRJZnmBDN7jDDK5xUOpH4YuG%2BQ1XaOgAca5s%2BuULbC1iuhJDPLOtx1YiI3fGUzsQQF5LR1Ynb%2FFGOFYMo9mbDiGn07dt45tMuaYczz1ztKdacKMr7usx8icZd46FDhEFmyEFvIFku%2F4QcpHhG4yUbJJBQ113hmNNBBBcNaFSy2v0CsMxl127weIueB8Z%2FDXDcQ6pDuOpI5cRQ2zngeNZFBar4wYD3pyO0bzqomsW%2BXb4TUxubEk54wJafr022jmW7V15%2F2k%2BTJMZKSV5Tol%2BDUXO%2Ff9OvRVMHCMpwlfgVik8oumFCvpo3p898wjcHByQY6pgF%2FNSPcALIwLE9hYtwxAszcMJcrreGCAloe%2FIF7debeFfgKIQ1LIBUGMxdjLKS26%2BiEtG%2FZJni8qQ4uzTTdzfevZ6%2BbUkx2i%2Fs2ByrcKr1G8n5N2kbuKsjSEVQnnjict%2FW1O6GlZDPv4om3wL4ErQwYmTTy3cP%2Fc2H1S51%2FQYKHrmbwBKCOUNGMaCE4zEPkfMeGD9d38PbSil%2BvElj8Mv4NewGN48Qc&X-Amz-Signature=94f2a1434f44e6e2e2e280fd3ee9aeacfc2aeec7a5f8f1d3888279234aa5c929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VURZW5UV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T170252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIFAwv64e2C2tfO%2B4DUsqzMdT03b7eV0dALPeKzjsEtQIAiBlhsdh2j1jUmrdXqmjEAMuN49TotkMppf6g4RwxwkJIir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM%2BIMVFCM%2FYi6xrpEbKtwDIBZJHOfqDj2Yc28CpnrbEonGItFuPvaj67UzNPzOEdadeZGGRdsR7s8%2FhJys%2FfeCU3Z%2FEiwRHMc5QwhEMxtjosLUjSvGb7Mo4%2BBBpM9Hm7MpEv%2B00u2G9K5HGGVn%2F%2BIVC7DKgfdIDvu4EKb%2BNXt4RhQuPtPahUx1r2koy63wXP%2BDF%2FRWiLcd3FBZXIUh57w3r%2B4TwJu7eqrz42L%2F6BBtUX4QG5LKxPalvy%2FAYuTqc%2FI4bHciaROxc4MVkfiiQNVmXpDzva0ccmephblJruna2%2ByDlC%2FfmS3sl4f6F1EUgGxp3VVba6wKBIJxPUK%2F%2Br4rG5aRJZnmBDN7jDDK5xUOpH4YuG%2BQ1XaOgAca5s%2BuULbC1iuhJDPLOtx1YiI3fGUzsQQF5LR1Ynb%2FFGOFYMo9mbDiGn07dt45tMuaYczz1ztKdacKMr7usx8icZd46FDhEFmyEFvIFku%2F4QcpHhG4yUbJJBQ113hmNNBBBcNaFSy2v0CsMxl127weIueB8Z%2FDXDcQ6pDuOpI5cRQ2zngeNZFBar4wYD3pyO0bzqomsW%2BXb4TUxubEk54wJafr022jmW7V15%2F2k%2BTJMZKSV5Tol%2BDUXO%2Ff9OvRVMHCMpwlfgVik8oumFCvpo3p898wjcHByQY6pgF%2FNSPcALIwLE9hYtwxAszcMJcrreGCAloe%2FIF7debeFfgKIQ1LIBUGMxdjLKS26%2BiEtG%2FZJni8qQ4uzTTdzfevZ6%2BbUkx2i%2Fs2ByrcKr1G8n5N2kbuKsjSEVQnnjict%2FW1O6GlZDPv4om3wL4ErQwYmTTy3cP%2Fc2H1S51%2FQYKHrmbwBKCOUNGMaCE4zEPkfMeGD9d38PbSil%2BvElj8Mv4NewGN48Qc&X-Amz-Signature=2978c5bec1af3f1053601f4256dae8fd6e22036c74b39b368fe63a481b859d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

