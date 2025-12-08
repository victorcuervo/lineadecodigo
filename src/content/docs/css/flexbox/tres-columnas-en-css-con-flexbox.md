---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NPOKHZN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGeoRFUnxOutG8xH%2FcSmQkNDQaVAs3G6CBkX26nZAF4AiBWvP9CgviAJR4auzTEK3i9Md50Jam8xyQTSzQyNT3jiCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyifjQ6gftRtt9KqCKtwD%2B9Ak0KmR0028NIgXAMH%2F5Xsmqm0kSEGW0dURg2fnZecSqfHJ1fmnn7ujKdEn1yjYmbG%2BPngAquhV0vyGId%2BMkRI7fehGAT4EHAVW5s5LDWBS5ltB5iUdd8hX7C3daL3t4Q0mU7P60JyhIJ4D%2FhbjHUeZn%2BWaCL3aEpk1NJb%2FurFUQnqDsR%2FQpUfdcgMktL1gMAIN%2FPPh4LDBaAKvF4EGb2BrVCwIeQclRFaSQE90WqY1oRlds%2FR8WXX7GKeHxKuiVmFqlN3iiwZ5xG%2F32%2FTiKVMX%2Ft3MWmMB5kZXrZhceDx08LHdHgeblWevDUfR9Luxojc%2BsEmNYdcfxkHSe80zsqi9Wwv6nZxDE89HNzxd8GYtmWeNxjdqIm6L2yDD5iYp7Fqf0jWxDddd86shyurvVPkmK%2B1hsE152VgSw4QlxrlxGmC%2Bdd%2FgDhDohCRFGUqTQ2K%2BbPV07c1eJRRXbYtWKHLb5mTa08xDuULK0tT0vSqcGIkaLaqK70zISCpI5%2FBfcbkMC5%2Fo4%2Bz2n2Of5vYWNAQFQiwZsmrl3Cv254PUNHc60sBsr%2FHaU5h8ZMK8xC%2BMC0T81YbGfpsuHRRmO8LHX3npToV0GQOUdfuA7Olti4aHg8wj5ci%2F%2BCoTf1Mw2rPcyQY6pgF%2FT3jU3xYRbGri4xNfffKD8N9tG%2FN96fOjNsVqMg%2BG72xJc07DLVBT1z03o3AGOJkFFVJuBqTvdJocdqLljhTP3Us5ECnUOmxR4OGc9YQeMganzHVWBC7LQfvFPbcV2Pn0l6VyzKeoGMNCm5kuDI77GPX2BuoHfP9AoHzFNw1jGkOXRw%2FMvweFvfBuk1%2FTfB5lvx2cNcdLPLPdZ8818QeTOcTHBqYs&X-Amz-Signature=22be92b37c474575cf571f17e30528ae1d27e5924d0e7f3a0a01cb7e490961a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NPOKHZN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGeoRFUnxOutG8xH%2FcSmQkNDQaVAs3G6CBkX26nZAF4AiBWvP9CgviAJR4auzTEK3i9Md50Jam8xyQTSzQyNT3jiCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyifjQ6gftRtt9KqCKtwD%2B9Ak0KmR0028NIgXAMH%2F5Xsmqm0kSEGW0dURg2fnZecSqfHJ1fmnn7ujKdEn1yjYmbG%2BPngAquhV0vyGId%2BMkRI7fehGAT4EHAVW5s5LDWBS5ltB5iUdd8hX7C3daL3t4Q0mU7P60JyhIJ4D%2FhbjHUeZn%2BWaCL3aEpk1NJb%2FurFUQnqDsR%2FQpUfdcgMktL1gMAIN%2FPPh4LDBaAKvF4EGb2BrVCwIeQclRFaSQE90WqY1oRlds%2FR8WXX7GKeHxKuiVmFqlN3iiwZ5xG%2F32%2FTiKVMX%2Ft3MWmMB5kZXrZhceDx08LHdHgeblWevDUfR9Luxojc%2BsEmNYdcfxkHSe80zsqi9Wwv6nZxDE89HNzxd8GYtmWeNxjdqIm6L2yDD5iYp7Fqf0jWxDddd86shyurvVPkmK%2B1hsE152VgSw4QlxrlxGmC%2Bdd%2FgDhDohCRFGUqTQ2K%2BbPV07c1eJRRXbYtWKHLb5mTa08xDuULK0tT0vSqcGIkaLaqK70zISCpI5%2FBfcbkMC5%2Fo4%2Bz2n2Of5vYWNAQFQiwZsmrl3Cv254PUNHc60sBsr%2FHaU5h8ZMK8xC%2BMC0T81YbGfpsuHRRmO8LHX3npToV0GQOUdfuA7Olti4aHg8wj5ci%2F%2BCoTf1Mw2rPcyQY6pgF%2FT3jU3xYRbGri4xNfffKD8N9tG%2FN96fOjNsVqMg%2BG72xJc07DLVBT1z03o3AGOJkFFVJuBqTvdJocdqLljhTP3Us5ECnUOmxR4OGc9YQeMganzHVWBC7LQfvFPbcV2Pn0l6VyzKeoGMNCm5kuDI77GPX2BuoHfP9AoHzFNw1jGkOXRw%2FMvweFvfBuk1%2FTfB5lvx2cNcdLPLPdZ8818QeTOcTHBqYs&X-Amz-Signature=96aa4462ec57d42bafe8e5130bbd7acc9919ce6e9b640a5be39156ed1d5a0179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

