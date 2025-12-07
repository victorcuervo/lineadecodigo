---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXY34OYY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDa5VTBR3FjE824cv6bO6N7asRCKEpviuWwomRp3uvXwIhAJxHIcLiphvLf2HkhlI3rn8XV3AoqH00J4uKAV%2F0T2pLKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX%2BZflABcTjpmB8eIq3APp1etPdxBsv%2BDuGhTv%2BkhJUogJh5al9KlYye2cxJR5veUpTN3cAF2ZfCupgz%2FWAAGFgjZQW1GJ48Lf7%2BgrmKOv40JP34Ru%2F1KavN3dhoScEZjFjMCg9DsuPy%2F7wGKMf31vpey027MAcyramUb1PY97rjvKjYQ1gIvfTn4bOUkrV39lqbLOoS1JNZdNCZRYmPDIzRDEyJHyUrmhuquSQ6ABSsjZvo2FyKruRv7Pl4PgNG0PlbUTVdmqj4o0g4LpC48NmYSMEkWtBZrTY6IJi%2FxGgXExrpyjjekgZRxcMFMUi9CsRPrIpDPakrP%2BTGaZSJ95GXczHz47ujQ7cU%2BLW2hGOpQG56pskRJ0L%2BxEXwkoHINLmFxAF6wvFEa8ol%2F5saoOc38EAB8Kohw6yEEbG4uk93oErm%2BVEtcozmtpONh8iGZzR%2FfHj8v5rzHnvDQOysW16rCpWYxmyvHaTXP%2BGC0ieIm2DiiK7o%2FGZ%2F11mzxmpTsTHO5RIwn80izvVxdAU%2FGmilMidp4a5Sza5iKmi7VYPmbSudA6ekdaqsaoIToeGPPgkUhHni9RVzPHOOWfPr8rkqcLfEEK5Oelu0tMuVqSMEGtLuQ%2BGY2PodZ37IWLPNUqMshXhqbB8lfr9TDJhdjJBjqkAXIQL0ez5MRtkSGkk2nixb8cxwhBoOK6hxAR0UyIVC90K6BOHo9Ejuwz3Gg0HV%2Fg6LSTXgiUBbllaiRKXhFtjbau7YsVY3%2FSNMZnQha91BC9iDVkVkJh3bFgqXmcrMEVbN8iHuqLrP%2FsZ0kHFxLdM6XJJ%2F1aRSY7A%2F3vix%2F86gHHxivyit0KlfAhOhdrJVB3PpqPXUQYSPBzFz6M2xK%2FlrplM3AK&X-Amz-Signature=1ffb477f90628d8a2bff069a832af4d134c4e2844dc3bdf71c66fec491a2f7bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXY34OYY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDa5VTBR3FjE824cv6bO6N7asRCKEpviuWwomRp3uvXwIhAJxHIcLiphvLf2HkhlI3rn8XV3AoqH00J4uKAV%2F0T2pLKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX%2BZflABcTjpmB8eIq3APp1etPdxBsv%2BDuGhTv%2BkhJUogJh5al9KlYye2cxJR5veUpTN3cAF2ZfCupgz%2FWAAGFgjZQW1GJ48Lf7%2BgrmKOv40JP34Ru%2F1KavN3dhoScEZjFjMCg9DsuPy%2F7wGKMf31vpey027MAcyramUb1PY97rjvKjYQ1gIvfTn4bOUkrV39lqbLOoS1JNZdNCZRYmPDIzRDEyJHyUrmhuquSQ6ABSsjZvo2FyKruRv7Pl4PgNG0PlbUTVdmqj4o0g4LpC48NmYSMEkWtBZrTY6IJi%2FxGgXExrpyjjekgZRxcMFMUi9CsRPrIpDPakrP%2BTGaZSJ95GXczHz47ujQ7cU%2BLW2hGOpQG56pskRJ0L%2BxEXwkoHINLmFxAF6wvFEa8ol%2F5saoOc38EAB8Kohw6yEEbG4uk93oErm%2BVEtcozmtpONh8iGZzR%2FfHj8v5rzHnvDQOysW16rCpWYxmyvHaTXP%2BGC0ieIm2DiiK7o%2FGZ%2F11mzxmpTsTHO5RIwn80izvVxdAU%2FGmilMidp4a5Sza5iKmi7VYPmbSudA6ekdaqsaoIToeGPPgkUhHni9RVzPHOOWfPr8rkqcLfEEK5Oelu0tMuVqSMEGtLuQ%2BGY2PodZ37IWLPNUqMshXhqbB8lfr9TDJhdjJBjqkAXIQL0ez5MRtkSGkk2nixb8cxwhBoOK6hxAR0UyIVC90K6BOHo9Ejuwz3Gg0HV%2Fg6LSTXgiUBbllaiRKXhFtjbau7YsVY3%2FSNMZnQha91BC9iDVkVkJh3bFgqXmcrMEVbN8iHuqLrP%2FsZ0kHFxLdM6XJJ%2F1aRSY7A%2F3vix%2F86gHHxivyit0KlfAhOhdrJVB3PpqPXUQYSPBzFz6M2xK%2FlrplM3AK&X-Amz-Signature=1ea79a752747c1e94ca9514a4f626af9b2c3c2c3e55bfcf622bdc32235c770a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

