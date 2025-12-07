---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2IEPBC3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfxV9Wwg9yI6XBCnvu4yYtpaHXBolcgSHx7afxiro4mAiAyENw5zjbixXHce9Awas%2FkPtmD4Fwmm2pba8orsZrf%2BSqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTKpNph5WAWlhXA22KtwDd2o5%2BH8mAGCgYoXzdaQIaLn30xMr0x66ZSDIb7I1upGuozJu9bLfmoe%2F6mElJ4WRqbP0drZCiXrnDjpZpqrKiaLTGSkh1%2BflW9wzGUUPM3iCMKKgnaSBY8WuutEVMq240z3DRTMxlfg0CePCrzmNIhuoXFNd1%2BUjndRrFc6MIqV06%2BqerhXHOKYyiVEyC%2FH3OAeMzaD69A2simQXTox1CRdBVTPVlWtOKXUb6Cid7uVt%2FUcPz7kQjacDvQ8mXp6eyrRl%2F%2BFvCXDnnpwQMNx65rnpppj4Le7i0pp%2FGsD1Cjzdtdm2CmwIP1vbiw%2B%2BcnPhBfh3GAsL2YTR6l9Cd5h0JLIZKgxOBFtErraZATVFBB%2Bw7sYhEnMPu8wS%2FIyyZZ2ozJN%2BwAKFCLpC8yR7UtJQR7AH5LQjb0K8K3k9MbOIwzEFoPhRMtDpwrxuyZTPL3zKVFYtYXcMZtTZ7dl%2By8kPn476clhP5ohGIofMz0AVWLhzgLapaGsVPTffrFWP90vDuYPMxUR%2F7VPaSqWIQdMRTgz7bEQ%2FVmb5LaYKLmPDiMN38YBGYJtM4CC%2Bbqkj9VygHFBYgnQW7nSxsVNL%2FkR5mipjQ%2FHLIrO5yWjOhR%2FCZFLcqE2%2Bhg63K1np9Gcw2YTYyQY6pgFd4P%2FhDLaR7Exw1WgXEeNJ3Gbf0RsbVILsRCh8cBnWD44lKyI0tsletUgKgNT2HdQbBlTkqXHuUAhj7y55kPNMgOxQTUXntjEGzjnWxKtNEuzaUVt0hloYlwdr6KM04rDAlwfM5HC82LUXxy%2Bj%2Fi7YtretZXRMmZ71UvvY%2BC1RFjetPOqLUHU6dls2qlq140HxSHlmSI9KhYIL16xD1w8FZyY9SDJ8&X-Amz-Signature=07394c2a5ea64b3590975a2225c82ce95ecc665d0e370b4103165a3072f6609f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2IEPBC3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfxV9Wwg9yI6XBCnvu4yYtpaHXBolcgSHx7afxiro4mAiAyENw5zjbixXHce9Awas%2FkPtmD4Fwmm2pba8orsZrf%2BSqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTKpNph5WAWlhXA22KtwDd2o5%2BH8mAGCgYoXzdaQIaLn30xMr0x66ZSDIb7I1upGuozJu9bLfmoe%2F6mElJ4WRqbP0drZCiXrnDjpZpqrKiaLTGSkh1%2BflW9wzGUUPM3iCMKKgnaSBY8WuutEVMq240z3DRTMxlfg0CePCrzmNIhuoXFNd1%2BUjndRrFc6MIqV06%2BqerhXHOKYyiVEyC%2FH3OAeMzaD69A2simQXTox1CRdBVTPVlWtOKXUb6Cid7uVt%2FUcPz7kQjacDvQ8mXp6eyrRl%2F%2BFvCXDnnpwQMNx65rnpppj4Le7i0pp%2FGsD1Cjzdtdm2CmwIP1vbiw%2B%2BcnPhBfh3GAsL2YTR6l9Cd5h0JLIZKgxOBFtErraZATVFBB%2Bw7sYhEnMPu8wS%2FIyyZZ2ozJN%2BwAKFCLpC8yR7UtJQR7AH5LQjb0K8K3k9MbOIwzEFoPhRMtDpwrxuyZTPL3zKVFYtYXcMZtTZ7dl%2By8kPn476clhP5ohGIofMz0AVWLhzgLapaGsVPTffrFWP90vDuYPMxUR%2F7VPaSqWIQdMRTgz7bEQ%2FVmb5LaYKLmPDiMN38YBGYJtM4CC%2Bbqkj9VygHFBYgnQW7nSxsVNL%2FkR5mipjQ%2FHLIrO5yWjOhR%2FCZFLcqE2%2Bhg63K1np9Gcw2YTYyQY6pgFd4P%2FhDLaR7Exw1WgXEeNJ3Gbf0RsbVILsRCh8cBnWD44lKyI0tsletUgKgNT2HdQbBlTkqXHuUAhj7y55kPNMgOxQTUXntjEGzjnWxKtNEuzaUVt0hloYlwdr6KM04rDAlwfM5HC82LUXxy%2Bj%2Fi7YtretZXRMmZ71UvvY%2BC1RFjetPOqLUHU6dls2qlq140HxSHlmSI9KhYIL16xD1w8FZyY9SDJ8&X-Amz-Signature=10898ffbaed36848a1dc2e74f90e90e042b7c6d471fbe52c83906f8cbf1d6f89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

