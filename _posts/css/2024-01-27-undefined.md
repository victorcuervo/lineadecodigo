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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPZPNNG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T091919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEoHOb%2B8p%2Bcitd%2Fl9g5WHeKGa7JtPWJ%2BcyFVTNKX91bsAiEA31p4d62bRBwWRgtqI%2Bq9EqsVMN%2BnJAED4FSmzbwpttkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGJrTc4OooYHBuQ6wCrcA1KulVZEH3CkI%2FIhwODPlGHAnifs0nkmdyioy0qn37I2JXeHFk%2FfDdLUa7Erp%2BdlaB4G7ZmLx4%2B%2Fi1Eq%2BV4CvAs3VvQfcRQCD2bxYkAm3kcBrD5HKfaWTfgWjinq0T9vvriKl8lvnpoao1KrUPKsQBGq9cr4vwPWEkuKiBud%2FLaoPxhNeEKueLOlUKr1h6GS4%2Bgj0QN%2BjxuI%2F5gFt7K0gUbxgHUcOheJI1LM6KlWrpY%2B81yMeXhheKCf%2B3tlkFAEt8AbcGpNRDeNL%2B5gkwFaKI8DWritwLYSXqRrxzP1yvarCOXug8yug5Ob2XtrKBAToB8EOBvq9QlQWB%2Fh%2B1igajAP%2FK%2FUmtG34ZT9GC2NMNVplyr43qMBWoiYwTD5GoVkD%2BAGl5hnMRv%2FXtR2Dv2YKm7PDnAfVKHV5nMz9wS%2Fwv9DuFKxV1VsyLSwIh3sgxN0Q9DW26l0T7pNP0W8PpSig1BcIjzBz%2B4ZT3m2XgffC6nvZAgit5xduPhd%2FpVIvn%2F8CfdX23OCOH2UP3eiqEo3Begg3oQXM0jTE1rMAQoagbWybu4ApfWbK64Zfm%2FX6zNIQOAd5bIW5JarNDVCPGURaS7HaMDb%2Bq5Y9L35%2BQUssM4T0VZHf6mD7writ0UyMJz3v8kGOqUBFXTyqM%2F3lxZ2Afuyx76TkIeJ9i0DEYDJO%2BFFn%2FtpcGDkatfgnOsMNgyRaPNL6X7U6v5XXYalhMfKvxXweXnfVtfTayXTC6Z6GkGFmkjtCHst5zOJKVKSEUpVFEKkW2PBxt06RwbNPqLdz%2BGq5cdCqlL5JhUAog3x5GNU8njeXXQo4AOJdn6z8dnxU1uS7TCLt6DijoW4yt3g%2BAtTJfZmdhR6N0cd&X-Amz-Signature=28dec23cdd8fac3d9c4d4e9c3b6b6098590d9be1551c3a30f813c509f368db9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPZPNNG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T091919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIEoHOb%2B8p%2Bcitd%2Fl9g5WHeKGa7JtPWJ%2BcyFVTNKX91bsAiEA31p4d62bRBwWRgtqI%2Bq9EqsVMN%2BnJAED4FSmzbwpttkq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDGJrTc4OooYHBuQ6wCrcA1KulVZEH3CkI%2FIhwODPlGHAnifs0nkmdyioy0qn37I2JXeHFk%2FfDdLUa7Erp%2BdlaB4G7ZmLx4%2B%2Fi1Eq%2BV4CvAs3VvQfcRQCD2bxYkAm3kcBrD5HKfaWTfgWjinq0T9vvriKl8lvnpoao1KrUPKsQBGq9cr4vwPWEkuKiBud%2FLaoPxhNeEKueLOlUKr1h6GS4%2Bgj0QN%2BjxuI%2F5gFt7K0gUbxgHUcOheJI1LM6KlWrpY%2B81yMeXhheKCf%2B3tlkFAEt8AbcGpNRDeNL%2B5gkwFaKI8DWritwLYSXqRrxzP1yvarCOXug8yug5Ob2XtrKBAToB8EOBvq9QlQWB%2Fh%2B1igajAP%2FK%2FUmtG34ZT9GC2NMNVplyr43qMBWoiYwTD5GoVkD%2BAGl5hnMRv%2FXtR2Dv2YKm7PDnAfVKHV5nMz9wS%2Fwv9DuFKxV1VsyLSwIh3sgxN0Q9DW26l0T7pNP0W8PpSig1BcIjzBz%2B4ZT3m2XgffC6nvZAgit5xduPhd%2FpVIvn%2F8CfdX23OCOH2UP3eiqEo3Begg3oQXM0jTE1rMAQoagbWybu4ApfWbK64Zfm%2FX6zNIQOAd5bIW5JarNDVCPGURaS7HaMDb%2Bq5Y9L35%2BQUssM4T0VZHf6mD7writ0UyMJz3v8kGOqUBFXTyqM%2F3lxZ2Afuyx76TkIeJ9i0DEYDJO%2BFFn%2FtpcGDkatfgnOsMNgyRaPNL6X7U6v5XXYalhMfKvxXweXnfVtfTayXTC6Z6GkGFmkjtCHst5zOJKVKSEUpVFEKkW2PBxt06RwbNPqLdz%2BGq5cdCqlL5JhUAog3x5GNU8njeXXQo4AOJdn6z8dnxU1uS7TCLt6DijoW4yt3g%2BAtTJfZmdhR6N0cd&X-Amz-Signature=751cd4f00213b51aad9bf1d01e583b55de9ccdecb875e0ac6445ba85125e4721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

