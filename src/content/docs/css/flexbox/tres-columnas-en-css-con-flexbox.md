---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QMOLYIM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQuoojC6lFQOA8ERlSGQUdqIpWVn668N4QJaXtQuD8ugIgRra6Lfa%2BKdb1vD8%2BL5tzVV86dh7gKnpNTSQHxBTiZr8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLd02IOBvgFNd50KeircA0DUJOciYeNCqnYFRITtiKtVkEIX7v5DdrKJrDrkrW7ddvCvdWgmzVYdVqjN2e9G4eCsnwzM8yTBvThT0w4ecW9jTXEw7GMx2Rc4YXF9Ubm9DBoiYB6N7NdUT0l5NCMM2b9uxxFjEIsPXEQxEhRt%2B5Dn7En3c0AtOMO6Jk8Arwh0OsV3JWkDRXvZYiDTjTmOrJsjbE8PLOJ7dQl02EcpJKjlO3aZcXvcj%2BVXeb5lAY0DGiHKILQfaiWFxQLJsLzfmHGQ89H6mOWr1jk75yaGaOSXhpCbwWJQgoI1SrahEuVcrqcKaEG3KQl%2FrNKEtHNN1DQ8C90Oe3FZRV0oPu7IIghPSR3pUrfSNjKjA00R%2BluNxJuoISFmYSPQhChPb5XvJZnYQ19Ql6S8F9YjV0LZnDnFlpm%2B1kkWIUsGmui1LwmAkH0TDuDaHGfiaJugCrT5Bv53Eof1s6TnUS%2BeDy5OjTLpcyBt2gPLzWhZeSgCjy7Qqfxm8DtPI%2BbST3isW%2Fqo8nrni1EVa9bGTcmSkCr9pSfbRFwnEOm2hl8wzF%2BK%2FlIHH8kuMNEPwmTcEeGWEJ9H2aavkonIy5iAFk5aXE4yQKyMxo%2F%2BS2FNIfp2YCMlKSm%2BquNssX%2BV2LZUF42oMJPM0ckGOqUB3hObToev1b2myD9hW%2FJGiWvnJTfuyO7Y%2Bs%2FmzKfuDY726iIvnQLL%2F2AvUW4O0locIN8W8h%2B2Dy%2BNjdYlQZNoQd%2FO17%2FrICTkZafONwoMO72AMDCDlyiq9yelEO09IYW4C1RZrIkqA3R9qeRoZCTfh%2B0kLtJgH5iPYst1JtqCtufICYpk7NQekEArjhIntNRRBVu7D5%2BdymUyaYI%2BLhjFBAmLhYwb&X-Amz-Signature=10141fae60fb246f1043f87be23ba8ec988dcc9e003ee1b003e12a53c27dd812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QMOLYIM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQuoojC6lFQOA8ERlSGQUdqIpWVn668N4QJaXtQuD8ugIgRra6Lfa%2BKdb1vD8%2BL5tzVV86dh7gKnpNTSQHxBTiZr8q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLd02IOBvgFNd50KeircA0DUJOciYeNCqnYFRITtiKtVkEIX7v5DdrKJrDrkrW7ddvCvdWgmzVYdVqjN2e9G4eCsnwzM8yTBvThT0w4ecW9jTXEw7GMx2Rc4YXF9Ubm9DBoiYB6N7NdUT0l5NCMM2b9uxxFjEIsPXEQxEhRt%2B5Dn7En3c0AtOMO6Jk8Arwh0OsV3JWkDRXvZYiDTjTmOrJsjbE8PLOJ7dQl02EcpJKjlO3aZcXvcj%2BVXeb5lAY0DGiHKILQfaiWFxQLJsLzfmHGQ89H6mOWr1jk75yaGaOSXhpCbwWJQgoI1SrahEuVcrqcKaEG3KQl%2FrNKEtHNN1DQ8C90Oe3FZRV0oPu7IIghPSR3pUrfSNjKjA00R%2BluNxJuoISFmYSPQhChPb5XvJZnYQ19Ql6S8F9YjV0LZnDnFlpm%2B1kkWIUsGmui1LwmAkH0TDuDaHGfiaJugCrT5Bv53Eof1s6TnUS%2BeDy5OjTLpcyBt2gPLzWhZeSgCjy7Qqfxm8DtPI%2BbST3isW%2Fqo8nrni1EVa9bGTcmSkCr9pSfbRFwnEOm2hl8wzF%2BK%2FlIHH8kuMNEPwmTcEeGWEJ9H2aavkonIy5iAFk5aXE4yQKyMxo%2F%2BS2FNIfp2YCMlKSm%2BquNssX%2BV2LZUF42oMJPM0ckGOqUB3hObToev1b2myD9hW%2FJGiWvnJTfuyO7Y%2Bs%2FmzKfuDY726iIvnQLL%2F2AvUW4O0locIN8W8h%2B2Dy%2BNjdYlQZNoQd%2FO17%2FrICTkZafONwoMO72AMDCDlyiq9yelEO09IYW4C1RZrIkqA3R9qeRoZCTfh%2B0kLtJgH5iPYst1JtqCtufICYpk7NQekEArjhIntNRRBVu7D5%2BdymUyaYI%2BLhjFBAmLhYwb&X-Amz-Signature=50f54ca40cfcc1a38b6292b316e80aa73c9618066e10ccd947ad468070fe09d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

