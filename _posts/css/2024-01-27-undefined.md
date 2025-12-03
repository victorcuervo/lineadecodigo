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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SUCV5H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGe3ThD2hcU9ce1LTd7QRDxIqpxUbvg9AmJoMPaRlpjDAiA5fMvUZC1uuHITn%2BoQX1k0QaX%2Bk2e%2FWGR%2BPX05mO07%2FSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMxZks%2B%2BaV6qBewwobKtwDptUcdU%2BAxIgBTc2b%2FGflOHYu0ld%2B6mRy9FhfJaLZWpi4OihlD9aLULC4DroCAcyuBQkRFP9uXsDFTEK%2FIH0Xcc7%2BC8hxwZOpfD%2BZCwKoJysXFIhenoMbHDrVvWPjz4HZ0KQpUIuq9BOEeCRQm2ymzMjOntMRYHGqc4uix0q%2BKXaXUGCBL5AqeIHODJefu1X1g9%2BRmRjpQmZqOwwcTugVLJ%2Fxie%2B%2FKPndluF6IkPPl93smiTIwLrnnQrq3W1mLCMoUcY1jWP1Xq%2BMp8CINUVbKma8Rxn8nDGlj4Z1k8WtagAqYc8nUjzRJOLlRHxGRpNBZLBfGVwuYXM9O3QdAzYaHSmAo4OOdhlOIxRBtHv5HxaE4Yz1SrgUebfWLqAP9dr2%2FULrwWG5nP%2FsDXt0RY3V09Ojl%2FECin8MBCC6KCMYBSmTL4XP2d4dzCvaJFEhjHYtKKFRYx6pUr90VlgR8y48eTMUhtNPX1dk0MbYZY%2Bm0C5pEJX3o6QE4%2BzGSZU5%2Ffq7z9%2B%2FahDbn9g11DtYwTMZaXjy5adO1dljMgTab3%2B1EH3zw4PmXRgXp31y0cSt75LFYriRX%2Baq7xPtXMtpFB2eGX6GbZ5BNgrEM%2BIMSJUqkZuVJp8m79ieIobgi4Uw6vW%2FyQY6pgHZZdvMIZXT0UUpmVxBMIdfBpjT2Xl%2Bf0Ip1BootInS0YC3RF%2FHl7Whn8EorhWs%2FREHMGrQfvGVnorZ9Zu%2BI6kib9BU8j0J5aMhSMDi2GwQewYEhgaknuFWTF%2BXkNneiZ5tsk4LZVfQSzmEMwId5%2BZKrjuU0Kn481UYkcbb8lV6N1pDJSvRpopjxY7Cg5MP7ompDheTdbI5VPKSlIkoAfExmv%2Be2x3v&X-Amz-Signature=d8f1d7fca1eaa443284e38fb7e4019e1ad8756e1321bdfa04db4337f5190e41c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6SUCV5H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T095339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGe3ThD2hcU9ce1LTd7QRDxIqpxUbvg9AmJoMPaRlpjDAiA5fMvUZC1uuHITn%2BoQX1k0QaX%2Bk2e%2FWGR%2BPX05mO07%2FSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMxZks%2B%2BaV6qBewwobKtwDptUcdU%2BAxIgBTc2b%2FGflOHYu0ld%2B6mRy9FhfJaLZWpi4OihlD9aLULC4DroCAcyuBQkRFP9uXsDFTEK%2FIH0Xcc7%2BC8hxwZOpfD%2BZCwKoJysXFIhenoMbHDrVvWPjz4HZ0KQpUIuq9BOEeCRQm2ymzMjOntMRYHGqc4uix0q%2BKXaXUGCBL5AqeIHODJefu1X1g9%2BRmRjpQmZqOwwcTugVLJ%2Fxie%2B%2FKPndluF6IkPPl93smiTIwLrnnQrq3W1mLCMoUcY1jWP1Xq%2BMp8CINUVbKma8Rxn8nDGlj4Z1k8WtagAqYc8nUjzRJOLlRHxGRpNBZLBfGVwuYXM9O3QdAzYaHSmAo4OOdhlOIxRBtHv5HxaE4Yz1SrgUebfWLqAP9dr2%2FULrwWG5nP%2FsDXt0RY3V09Ojl%2FECin8MBCC6KCMYBSmTL4XP2d4dzCvaJFEhjHYtKKFRYx6pUr90VlgR8y48eTMUhtNPX1dk0MbYZY%2Bm0C5pEJX3o6QE4%2BzGSZU5%2Ffq7z9%2B%2FahDbn9g11DtYwTMZaXjy5adO1dljMgTab3%2B1EH3zw4PmXRgXp31y0cSt75LFYriRX%2Baq7xPtXMtpFB2eGX6GbZ5BNgrEM%2BIMSJUqkZuVJp8m79ieIobgi4Uw6vW%2FyQY6pgHZZdvMIZXT0UUpmVxBMIdfBpjT2Xl%2Bf0Ip1BootInS0YC3RF%2FHl7Whn8EorhWs%2FREHMGrQfvGVnorZ9Zu%2BI6kib9BU8j0J5aMhSMDi2GwQewYEhgaknuFWTF%2BXkNneiZ5tsk4LZVfQSzmEMwId5%2BZKrjuU0Kn481UYkcbb8lV6N1pDJSvRpopjxY7Cg5MP7ompDheTdbI5VPKSlIkoAfExmv%2Be2x3v&X-Amz-Signature=4fda7aab0add5dde1a27b411aa9c289975c7bf8e12320a0ced38aef40b93f15d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

