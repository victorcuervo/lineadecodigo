---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YANOPIS3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgDqzbTAqnAyZx73xqLR44EKg%2BPv5UY0s2w6hj5NOT2QIhAJU%2BF3gRQxKND7jDVfKLTpsXm7G4Km3mzOEUHRd%2F2w%2BFKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp5a8aTjHRrMikAJIq3AOpL4ra4j1b4peE5%2FV58hlZe97HRK%2BwIx8%2FEDZawXetzlRSgnsnSObEMsyFDlX32G%2FKfZFRTUVymUUIyNJAZECec3fpz6UBXctHC2L7GV8pP3XdEsvTQY8m2xVUxZDtSSUDPBEPRb%2F0EEDMnCQq4GYOv2mB1yivVuQXzhXwmD%2BEYVSSLRCYannAM3yqKgC2mmrANn%2FAcjBqfIlgurJQ9EDcBuw7VaATP60sKhdewk%2FdFuMOex5kaMpqwNbfa4AFAgr1a3XGJ88Nloc6GVcdGUQ33SpbnB0q7405zJ2kwEpvJ04dTrmHFuAb%2F9%2FFQMqBa%2FvfnRe8zj0oSgORkMVinsplNmY0a4iJzsunT02IELjdLRzMm%2FsixRNnF0MmaeabaOCGBnaCvJsBo5oLBMaMDMjVp81m1TWgPrhxiGhwwYSuVh9oE7o%2BjjodS1EiBUgEULCuBjseVCnisK6qtajG%2FH6ufIVuSBEO0mIfnJZCufr60%2Bwm4I8E7LG%2Bi6Q56M8jDGQkAmt0MKSQrHAnqQwqFotTTZgiVtO%2BPq6vTl%2BE3Wo7uyEmyBel30K7HBH%2FmlyhDurCBh%2FRQk91oQgPV3YBf14p5gSy9uPisTqNxXyKdT3FEnOgH0nDn3VN%2FzaNrzC5odjJBjqkAd7buCUaqgbUFqdng5P21YlxP25RH7AckYaGg99EBNrV%2FRpD0h4FwtB3IxExpzMvmfJ5eLc%2FS%2BvBdqkXM444dC6olaj%2BsoPmu4m7FQHkI3LPEeyQiII27FbGcspmGjpwl3lqUkhi2N7dw4o8BnH%2BeH3l7ni6i4yMdTho4X2pu0Z4Qi4kujKPyfbUe8WBdpOhCbk6gM61X9pVUao%2FlU9kr0AObCU4&X-Amz-Signature=e26c62238c2d43e6af881a58f939a4be0a2b6b683c44152cc5d63036ac6b18e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YANOPIS3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T235727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgDqzbTAqnAyZx73xqLR44EKg%2BPv5UY0s2w6hj5NOT2QIhAJU%2BF3gRQxKND7jDVfKLTpsXm7G4Km3mzOEUHRd%2F2w%2BFKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzp5a8aTjHRrMikAJIq3AOpL4ra4j1b4peE5%2FV58hlZe97HRK%2BwIx8%2FEDZawXetzlRSgnsnSObEMsyFDlX32G%2FKfZFRTUVymUUIyNJAZECec3fpz6UBXctHC2L7GV8pP3XdEsvTQY8m2xVUxZDtSSUDPBEPRb%2F0EEDMnCQq4GYOv2mB1yivVuQXzhXwmD%2BEYVSSLRCYannAM3yqKgC2mmrANn%2FAcjBqfIlgurJQ9EDcBuw7VaATP60sKhdewk%2FdFuMOex5kaMpqwNbfa4AFAgr1a3XGJ88Nloc6GVcdGUQ33SpbnB0q7405zJ2kwEpvJ04dTrmHFuAb%2F9%2FFQMqBa%2FvfnRe8zj0oSgORkMVinsplNmY0a4iJzsunT02IELjdLRzMm%2FsixRNnF0MmaeabaOCGBnaCvJsBo5oLBMaMDMjVp81m1TWgPrhxiGhwwYSuVh9oE7o%2BjjodS1EiBUgEULCuBjseVCnisK6qtajG%2FH6ufIVuSBEO0mIfnJZCufr60%2Bwm4I8E7LG%2Bi6Q56M8jDGQkAmt0MKSQrHAnqQwqFotTTZgiVtO%2BPq6vTl%2BE3Wo7uyEmyBel30K7HBH%2FmlyhDurCBh%2FRQk91oQgPV3YBf14p5gSy9uPisTqNxXyKdT3FEnOgH0nDn3VN%2FzaNrzC5odjJBjqkAd7buCUaqgbUFqdng5P21YlxP25RH7AckYaGg99EBNrV%2FRpD0h4FwtB3IxExpzMvmfJ5eLc%2FS%2BvBdqkXM444dC6olaj%2BsoPmu4m7FQHkI3LPEeyQiII27FbGcspmGjpwl3lqUkhi2N7dw4o8BnH%2BeH3l7ni6i4yMdTho4X2pu0Z4Qi4kujKPyfbUe8WBdpOhCbk6gM61X9pVUao%2FlU9kr0AObCU4&X-Amz-Signature=48957256de04765fb1b0b06c5e4627070df17f585bfa3853474af292909bbf17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

