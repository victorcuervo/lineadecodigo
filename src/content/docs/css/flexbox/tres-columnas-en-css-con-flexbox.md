---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FWWHJL7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHP2nM7uaPXYLjlmxGQwR7jLFGBAeBBL5HPh%2BbFrDU5lAiAMKA%2BQZfVbe%2FtALrHqmS3zMD%2B6XC5tuqZd7TeEYKKHyCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMpYcgPJumI%2BFap1UUKtwD4yxEOArLDRadOwGG6Ef6OawoDXyNajp0GrFxlHPlk89a2jTmu1V55z%2B6PVmNiFrmLVuy0po6EGlVLEUsgWWDApeMhiNv992alni2MfcZbQZiuJKOviUyg%2FbQHBF6pWjRhD85KKidlLykNXXAFRLVRV%2BazaI6I6fwF1xOUQOImJlQvLs8CNYc0bu6xvZjIcaJORbZnrkgW%2FdmAF5DyTLGJTMUZ4HHvXX9a1chpjdHLuipTAZIKZISxTg7wbmVHtXoCs%2Fj2rp%2B6pLaxXJxdLnGnC%2BlwflOH8iV2gPoWBIawuD9p3bXQs0mRDGJT4oc9bbrchTow1qn5Odnt2oECp35che64BVAuDqTkfC2%2FWhizFTTdV2X5tnumZCERbSPRzmMIKc7P4gZYdLddLeoYeQmDYDlWVCxnHa8NCkg0EpXbYOrmH51t9IuBQcGbJa4v6lv5DK1t8Vg8vvfDGw%2FqQWuddyR9%2FWA64qdupBmqpjj3cov6iYma88Az44aTkvCsDyTfFSx0KmivdNQLsytV5Zi8UFioj3QhFVBHJvhfuGVpOx7SBZRQ4bcaqq8y%2FpkmSFozjosxFUEk3hz%2BkrihUpattAYAHhVxOafS8UjOL0O%2B9wHONklKUB1UPXDrOwwi%2BvPyQY6pgFEDllLHKY3Rxttug%2BfVlocwg1RxQJ16kFLVLgb9vYug%2BA%2B6NWDeZh3nWTV%2Fw64y9PeWogSvncAw4pn%2FMweJ7%2Bbf2KxmWXysMLWbda7GyY8uP4jB5tnXlhTmfPKx%2FBJk%2BouJSXJokI1hYf6DG6EoyNnp8u%2FPMYsPEF4MsjlG9Uli5K5EFpacZyIni5n5UU2GgC70NTdEag5w%2BSFxuIp13c0BgkaEuG8&X-Amz-Signature=9c2dad1345c89a8686593a22f2753d465860718f7b75417060025063c6bd99d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FWWHJL7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHP2nM7uaPXYLjlmxGQwR7jLFGBAeBBL5HPh%2BbFrDU5lAiAMKA%2BQZfVbe%2FtALrHqmS3zMD%2B6XC5tuqZd7TeEYKKHyCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMpYcgPJumI%2BFap1UUKtwD4yxEOArLDRadOwGG6Ef6OawoDXyNajp0GrFxlHPlk89a2jTmu1V55z%2B6PVmNiFrmLVuy0po6EGlVLEUsgWWDApeMhiNv992alni2MfcZbQZiuJKOviUyg%2FbQHBF6pWjRhD85KKidlLykNXXAFRLVRV%2BazaI6I6fwF1xOUQOImJlQvLs8CNYc0bu6xvZjIcaJORbZnrkgW%2FdmAF5DyTLGJTMUZ4HHvXX9a1chpjdHLuipTAZIKZISxTg7wbmVHtXoCs%2Fj2rp%2B6pLaxXJxdLnGnC%2BlwflOH8iV2gPoWBIawuD9p3bXQs0mRDGJT4oc9bbrchTow1qn5Odnt2oECp35che64BVAuDqTkfC2%2FWhizFTTdV2X5tnumZCERbSPRzmMIKc7P4gZYdLddLeoYeQmDYDlWVCxnHa8NCkg0EpXbYOrmH51t9IuBQcGbJa4v6lv5DK1t8Vg8vvfDGw%2FqQWuddyR9%2FWA64qdupBmqpjj3cov6iYma88Az44aTkvCsDyTfFSx0KmivdNQLsytV5Zi8UFioj3QhFVBHJvhfuGVpOx7SBZRQ4bcaqq8y%2FpkmSFozjosxFUEk3hz%2BkrihUpattAYAHhVxOafS8UjOL0O%2B9wHONklKUB1UPXDrOwwi%2BvPyQY6pgFEDllLHKY3Rxttug%2BfVlocwg1RxQJ16kFLVLgb9vYug%2BA%2B6NWDeZh3nWTV%2Fw64y9PeWogSvncAw4pn%2FMweJ7%2Bbf2KxmWXysMLWbda7GyY8uP4jB5tnXlhTmfPKx%2FBJk%2BouJSXJokI1hYf6DG6EoyNnp8u%2FPMYsPEF4MsjlG9Uli5K5EFpacZyIni5n5UU2GgC70NTdEag5w%2BSFxuIp13c0BgkaEuG8&X-Amz-Signature=e07af60f77267133d32abf9931278f663db82a7852dce596133e90920f1aba4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

