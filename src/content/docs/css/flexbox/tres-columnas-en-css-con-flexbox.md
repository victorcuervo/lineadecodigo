---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRQOH6PW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5qySxHccv%2Bm7lXjSz5D7fgomFgXsPkjjZbWBGIzBtKAIgEMdlzURF%2BlPUHK%2BrWvv9RaRUhm1j6YGuImcYIfSMiywqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkaaz5TDKm%2FzDrY9yrcA9wdNKSgsocGM8zjUsKJUoaGmPTmXM%2FFUhHzSZVgvWrvzbheZLIzD9kMhbpEq5pZv3yl%2BM5GlaletmFzYLJU3lR0RAnGro5%2Fh9oDFVPFsolg%2Fxskcw%2B07DH9hIXW%2BZoLYoS9mSTCEeEdoU8bbSdeOcYmqKEo94t3tIAikh5TOnTRYI%2BE%2BSM%2Bwp2JJvda4AUKMg7XItvhU79mmj1GF2WdhJJc10OpvJQzMOrTbWxQaHBIqG%2FSfT%2FPCBiKi8D5xLgFFksfTGpXfOlv9Eo0KkC%2FsBGvmtZRJ5inoCio%2F0L5PK1odLFve5T1IWloYmMKFCc97jOVt6YL6tnQmcFPYey%2FiKWMQTY9nbDWI0luKUbsREN6%2BJWEAJUHP7s1CWZA6jr8vTs3KdMtJx3XAMwnuGrEB8ScsQ4IfbYnPdQ0XgJODdK72HM5iv6Mp7ywQUj1E2KhBlje1%2By5EJJtHJg1f2kUD%2BpOQonUSgABLSVTo0cQDT415cuh5kXbxLxzjXiYkSe8qrySNELjKXRSE43mz85cRYtEE7Nw87QDWmiiR0ZGmyIax8HmloO%2Bjr3BfK4uCSvmGN5ulwpH%2FVDT9mcATkeP1fyua0%2BSNfh8aGyr32V4q4Janth3hypOxAti3jbtMK%2F%2B0skGOqUBjUiy4b%2BHC%2BSE7VDfu8tMiOri%2FT0ZAmD1yuNHYXQM6fWAUd8Eh%2BQnFsnG2WJ6ONL21AR7JISRx0PWEPBjFnPxdz1txaLYW30xu84qB3SiQe7L2HNvwqRpSNVpyDWibO%2Blu39p0eR6ENrJj3aRaEgAm7zwfg1%2Fsc8Pqb%2FQBQ8SL3Zska975b1ysMSMLUDFIgpLLd5SLNvAfz78iFjdhInwSZ2qOeUq&X-Amz-Signature=da88018be633f525336a0a467340f1b001786773a3db010c2b59807b80b8c0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRQOH6PW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5qySxHccv%2Bm7lXjSz5D7fgomFgXsPkjjZbWBGIzBtKAIgEMdlzURF%2BlPUHK%2BrWvv9RaRUhm1j6YGuImcYIfSMiywqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkaaz5TDKm%2FzDrY9yrcA9wdNKSgsocGM8zjUsKJUoaGmPTmXM%2FFUhHzSZVgvWrvzbheZLIzD9kMhbpEq5pZv3yl%2BM5GlaletmFzYLJU3lR0RAnGro5%2Fh9oDFVPFsolg%2Fxskcw%2B07DH9hIXW%2BZoLYoS9mSTCEeEdoU8bbSdeOcYmqKEo94t3tIAikh5TOnTRYI%2BE%2BSM%2Bwp2JJvda4AUKMg7XItvhU79mmj1GF2WdhJJc10OpvJQzMOrTbWxQaHBIqG%2FSfT%2FPCBiKi8D5xLgFFksfTGpXfOlv9Eo0KkC%2FsBGvmtZRJ5inoCio%2F0L5PK1odLFve5T1IWloYmMKFCc97jOVt6YL6tnQmcFPYey%2FiKWMQTY9nbDWI0luKUbsREN6%2BJWEAJUHP7s1CWZA6jr8vTs3KdMtJx3XAMwnuGrEB8ScsQ4IfbYnPdQ0XgJODdK72HM5iv6Mp7ywQUj1E2KhBlje1%2By5EJJtHJg1f2kUD%2BpOQonUSgABLSVTo0cQDT415cuh5kXbxLxzjXiYkSe8qrySNELjKXRSE43mz85cRYtEE7Nw87QDWmiiR0ZGmyIax8HmloO%2Bjr3BfK4uCSvmGN5ulwpH%2FVDT9mcATkeP1fyua0%2BSNfh8aGyr32V4q4Janth3hypOxAti3jbtMK%2F%2B0skGOqUBjUiy4b%2BHC%2BSE7VDfu8tMiOri%2FT0ZAmD1yuNHYXQM6fWAUd8Eh%2BQnFsnG2WJ6ONL21AR7JISRx0PWEPBjFnPxdz1txaLYW30xu84qB3SiQe7L2HNvwqRpSNVpyDWibO%2Blu39p0eR6ENrJj3aRaEgAm7zwfg1%2Fsc8Pqb%2FQBQ8SL3Zska975b1ysMSMLUDFIgpLLd5SLNvAfz78iFjdhInwSZ2qOeUq&X-Amz-Signature=d5b57e7c42cad85061bc39cf7a0ae5f0d4b026274df2b8dc1b733f23ceadc04d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

