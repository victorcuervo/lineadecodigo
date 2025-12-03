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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG3FCM4W%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIBOyPPauwxsTw9Shaxi1huqFeSVJdlRhlBtJiVoQa%2FgKAiEAs%2FRH0zXxnfxgyiyM2RwnWLxVMIDH96Nzi8waFnB3ywgq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFEmD3MHC%2B4KV7tjVircA0wKChs86ofC0v2%2Bhn6AW4PPvRPjbkyGkpFnDP4m5o24BaeCG3lI9qIfvBGe0kDzZsfHtCSWVgyv6XneKbVPmilgLY1GyWJ%2B9QB8HOHKrDFHlPH82PlijlSiM7JjRFu9kmsIBENsD6Z5UlfSGsEYCSlY3bVhK98h6HgislKVkfcJ8DRJTqLoYGVLXlegRWo%2BnxkZY%2BDRdWPAN%2FGCTPyXMFRxL%2FM1zgvkc2r41SnB%2Fi9Pn1dVgITlaPPm5ufCR0PuLI8387lpTumtv9UlP1D1pBAr0BMy3vrTbr1%2Fd19VhDuxIeBvgIfPuk4j12pfuPItcvsh0CC7VGPsBEJRltnal4d50Xn1hgUwzsEd%2Bl9rbpU7bT%2FD0ONS5TbyOC2W1rmyxsgcl8v2X%2BHMW55Ewjla2bKa%2BO%2FDrvDwJLFV8GBio%2BE5nQh%2FP16al1TYatUcHSqe8is3OJYmROxFVdQ36kP4AhvLxASH7tqPUipha4IA0RXmYuJEsEUCE1ZY9uuqICvt3g9UZH6Fy1j9ckqNwpLXRHT6QD%2F0dgHkiGPLu1FWxCl0nnw1PlrKZVjA2K0PovKC%2FOM7%2FrepquotnOamczS0K6Ssq4lhzFiObSOV66%2FT3IfWk7diXEqofpfTLIHzMJ6WvskGOqUBlGUKKljvsbwYqUzmAOiQmrkjmaU99BYvS29WqrRT93aNhN7KT55HzOVhz5WWo10xYjdbgfHheF58UdWrhrWNVbdssW7dVRsAkQ8JvZpih7LFK%2B6OkAYchlCDTnvEAuHfX9nUpy2jLuocCEo7Q6vzQEbe9CBz8dzhWOw1PtufYtT6pbqxZs%2BsG54aQ5Zr16W%2BBTwjakCO%2Bg714goL7W3CvEghILqs&X-Amz-Signature=b15b21a77994bb16d1eaff07fe82cdb07e8827333403ff8f70ac36bb707a804b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WG3FCM4W%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIBOyPPauwxsTw9Shaxi1huqFeSVJdlRhlBtJiVoQa%2FgKAiEAs%2FRH0zXxnfxgyiyM2RwnWLxVMIDH96Nzi8waFnB3ywgq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDFEmD3MHC%2B4KV7tjVircA0wKChs86ofC0v2%2Bhn6AW4PPvRPjbkyGkpFnDP4m5o24BaeCG3lI9qIfvBGe0kDzZsfHtCSWVgyv6XneKbVPmilgLY1GyWJ%2B9QB8HOHKrDFHlPH82PlijlSiM7JjRFu9kmsIBENsD6Z5UlfSGsEYCSlY3bVhK98h6HgislKVkfcJ8DRJTqLoYGVLXlegRWo%2BnxkZY%2BDRdWPAN%2FGCTPyXMFRxL%2FM1zgvkc2r41SnB%2Fi9Pn1dVgITlaPPm5ufCR0PuLI8387lpTumtv9UlP1D1pBAr0BMy3vrTbr1%2Fd19VhDuxIeBvgIfPuk4j12pfuPItcvsh0CC7VGPsBEJRltnal4d50Xn1hgUwzsEd%2Bl9rbpU7bT%2FD0ONS5TbyOC2W1rmyxsgcl8v2X%2BHMW55Ewjla2bKa%2BO%2FDrvDwJLFV8GBio%2BE5nQh%2FP16al1TYatUcHSqe8is3OJYmROxFVdQ36kP4AhvLxASH7tqPUipha4IA0RXmYuJEsEUCE1ZY9uuqICvt3g9UZH6Fy1j9ckqNwpLXRHT6QD%2F0dgHkiGPLu1FWxCl0nnw1PlrKZVjA2K0PovKC%2FOM7%2FrepquotnOamczS0K6Ssq4lhzFiObSOV66%2FT3IfWk7diXEqofpfTLIHzMJ6WvskGOqUBlGUKKljvsbwYqUzmAOiQmrkjmaU99BYvS29WqrRT93aNhN7KT55HzOVhz5WWo10xYjdbgfHheF58UdWrhrWNVbdssW7dVRsAkQ8JvZpih7LFK%2B6OkAYchlCDTnvEAuHfX9nUpy2jLuocCEo7Q6vzQEbe9CBz8dzhWOw1PtufYtT6pbqxZs%2BsG54aQ5Zr16W%2BBTwjakCO%2Bg714goL7W3CvEghILqs&X-Amz-Signature=484b54ed7b17f2c0d9f48949dc8149533fa3eff85155730318407bd3b3c16a73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

