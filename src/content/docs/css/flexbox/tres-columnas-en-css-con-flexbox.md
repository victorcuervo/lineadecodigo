---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE74SKUG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjUQH1515vbRySmThWy62NpECvivWCLbwxjp645983jwIgOxTIYZ3HBUYk13nACCb%2BJyZxd5D%2F9IhlHX%2BZsGMiYzQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIkmcb5BVYAj1fti9CrcAzZ4ODvfXusebD2rmluiOZLtKZsnmp2%2FvcwAvXT8jqokGsyas%2FqTsjRAa933WT%2BBCA5g8bnvGdILB9D3jhV24TrGiYyzDyj01q8HiHuV3DdsUgnVU7BZP9ylvbUn%2Byl%2FlcPDuix7A%2FydRsV6qPvmvvO56sh1IR%2F%2B0zXvVSX57epBXV90%2BHEeDHErVnVN4yQbccayi3qOjqzNMTGanosDPKhoi4A8VCrwduzwhJf0x%2FsjkAw6VkSFKZMAGoIcz2byL2sDw7n9VrzVnbO6bru1m%2B9%2FoZxC4fX2xG8Yt63%2BxtAdM0cJt8a0t2t%2B9hyaGvogYlDDC9Hs7Cl%2B1LSBqdH0SJqqpVjOGzmLcCWgS%2B8G%2F00hrYvLzP6kEGQjSfXAUNAc7ySyaCBz0aYfAnJId55efEDOcnh8xIV1tlKERAxPKG%2FPWlQEKJNZ8cotFbYWurio4WOnOGt3muDsGHJhTu14y1WWTm9wjRZllJhg5s489DOdg%2F%2FKjgBWAPHr3wdaFZWE34e3otnxEGE16TS2MZFB3NwGnjwP0pBXgVhCCXlUI4gRcfSyHX08bPyo8oJHpHCGWVjShZUouRMDRPDplRgu3UcFPhAb57IWTwbgDJV6BKZLhe35Nu%2FC70FVWEmdMOu8z8kGOqUBAD%2Bg0MIRXVbYwcBfq0yVEzxVrVAOXJBS%2FZKjvtvrp866XMszB2ADtWz57B6XGG%2BC%2FmEtN1Oi8uhVs3ISofbi5F68fR7AW3WptxDrwjiTFo4NuIeYLWnbHAmct4mzhaK%2BLSXxEVtOhQaV7vFylHAc7VchbRieIv24ZjmvyL2tg5e%2BvaSifMnFVWKzROniz4oWhHyIwWQsdhuZYzB1RivJMo2OL4%2FB&X-Amz-Signature=3b707e3e6e5c1ec6ba6f1a4b910b1c105f125f1a3e895f0a442ff6a784e3be93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE74SKUG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjUQH1515vbRySmThWy62NpECvivWCLbwxjp645983jwIgOxTIYZ3HBUYk13nACCb%2BJyZxd5D%2F9IhlHX%2BZsGMiYzQq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIkmcb5BVYAj1fti9CrcAzZ4ODvfXusebD2rmluiOZLtKZsnmp2%2FvcwAvXT8jqokGsyas%2FqTsjRAa933WT%2BBCA5g8bnvGdILB9D3jhV24TrGiYyzDyj01q8HiHuV3DdsUgnVU7BZP9ylvbUn%2Byl%2FlcPDuix7A%2FydRsV6qPvmvvO56sh1IR%2F%2B0zXvVSX57epBXV90%2BHEeDHErVnVN4yQbccayi3qOjqzNMTGanosDPKhoi4A8VCrwduzwhJf0x%2FsjkAw6VkSFKZMAGoIcz2byL2sDw7n9VrzVnbO6bru1m%2B9%2FoZxC4fX2xG8Yt63%2BxtAdM0cJt8a0t2t%2B9hyaGvogYlDDC9Hs7Cl%2B1LSBqdH0SJqqpVjOGzmLcCWgS%2B8G%2F00hrYvLzP6kEGQjSfXAUNAc7ySyaCBz0aYfAnJId55efEDOcnh8xIV1tlKERAxPKG%2FPWlQEKJNZ8cotFbYWurio4WOnOGt3muDsGHJhTu14y1WWTm9wjRZllJhg5s489DOdg%2F%2FKjgBWAPHr3wdaFZWE34e3otnxEGE16TS2MZFB3NwGnjwP0pBXgVhCCXlUI4gRcfSyHX08bPyo8oJHpHCGWVjShZUouRMDRPDplRgu3UcFPhAb57IWTwbgDJV6BKZLhe35Nu%2FC70FVWEmdMOu8z8kGOqUBAD%2Bg0MIRXVbYwcBfq0yVEzxVrVAOXJBS%2FZKjvtvrp866XMszB2ADtWz57B6XGG%2BC%2FmEtN1Oi8uhVs3ISofbi5F68fR7AW3WptxDrwjiTFo4NuIeYLWnbHAmct4mzhaK%2BLSXxEVtOhQaV7vFylHAc7VchbRieIv24ZjmvyL2tg5e%2BvaSifMnFVWKzROniz4oWhHyIwWQsdhuZYzB1RivJMo2OL4%2FB&X-Amz-Signature=a989c6502f39aaa9f4dd84b15c3ab4b3a82ae543e9993aef1532eb9a838685d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

