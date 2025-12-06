---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MDJUE72%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWLg19yTt7PypQGP%2F1rjdiUItRYaoKVxXFzcGVjzIehAiAmXMFlfxJWJBxgH1zsCZz0hiLMZU7WynVf7qKScYmGDSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMfoud0xT9Zsjd7bmqKtwDbACOfHadBKK2OvXCV3jv8SJq6Wr6cGksKhvIhhRQZzAYXTres7pOC4c5nWTj8loZRIdq1chYYsgPy6EP35gigiQX%2FN28hgbu7KMphkzW%2BsFbD36GYOE2wG8KeoHt0XoOo9PU4v96qf4H0M7JxCei9IBdNHvfuOlflJC9H2Coz5fTo5SFU1FYG9QMJQuH%2BHu00MVaBchp4R9%2Fxq7PoaYZw9xFpxMW%2BzbToTKFHmh%2Few67gj992s7QsrnWerk2N8Ovt9%2F0vN35I0HGaFADEKiXCm%2BHXXVDwCds9bXyZQgc8J9FxGRWXtrgPeWKZ9PHREqLzFvdbAJrghcCZ4hofmMCLz2zHmHTQGn05d2ffwcDCf9wnh%2FC4BMDQ2hJvAluQHfTkRKl1zSKjtEDcI6Q6nApdJFBZ57x4%2BRpFS38lWNYKQZN46zGlIdx34%2Fmz%2F9952P5lYVyunL9sDZc1JlmGN84mh8lg4VoSwI5EeD45EaC5MFB0UpzQRekkGiedzc3UqZWiHjFgTkqhSTAlb%2FW0Yk2KzdnJ54ezhxilwE5xxnfXk%2BSCLAv93FWK%2Fopn2LZ1pOyc1HJEjEgZHWVzhE3YtvX1syW0ax1yr1VM4sL5uMNsccG02hxPSKxkfbTekQw1v3OyQY6pgEm5Xe4piX7%2FJhVwKPHABlzBcGjIawwelNcsZj8WPpaORNWB3Ds%2B%2Bm5yXM4ZySwL33vOIQOkc38FFrXiSIAXud9sUsZS6BdU2HJrpgPxlPHLNDnHQfHP4kmxTbWidnWD5ktgmgoF6SrUSakrypH%2BjoOwxL%2FOJ%2FVJt4TPUHJJvdw4b%2FUsrvC%2FwTTAJS7RNUoL7TkqcbezcPihGy6DUQ4QV3Vb2t9Msn%2F&X-Amz-Signature=668d9be85c61f1db4bce2d9621ef1a2782b954e921eb1add975a5ec04021d334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MDJUE72%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T054558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWLg19yTt7PypQGP%2F1rjdiUItRYaoKVxXFzcGVjzIehAiAmXMFlfxJWJBxgH1zsCZz0hiLMZU7WynVf7qKScYmGDSr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIMfoud0xT9Zsjd7bmqKtwDbACOfHadBKK2OvXCV3jv8SJq6Wr6cGksKhvIhhRQZzAYXTres7pOC4c5nWTj8loZRIdq1chYYsgPy6EP35gigiQX%2FN28hgbu7KMphkzW%2BsFbD36GYOE2wG8KeoHt0XoOo9PU4v96qf4H0M7JxCei9IBdNHvfuOlflJC9H2Coz5fTo5SFU1FYG9QMJQuH%2BHu00MVaBchp4R9%2Fxq7PoaYZw9xFpxMW%2BzbToTKFHmh%2Few67gj992s7QsrnWerk2N8Ovt9%2F0vN35I0HGaFADEKiXCm%2BHXXVDwCds9bXyZQgc8J9FxGRWXtrgPeWKZ9PHREqLzFvdbAJrghcCZ4hofmMCLz2zHmHTQGn05d2ffwcDCf9wnh%2FC4BMDQ2hJvAluQHfTkRKl1zSKjtEDcI6Q6nApdJFBZ57x4%2BRpFS38lWNYKQZN46zGlIdx34%2Fmz%2F9952P5lYVyunL9sDZc1JlmGN84mh8lg4VoSwI5EeD45EaC5MFB0UpzQRekkGiedzc3UqZWiHjFgTkqhSTAlb%2FW0Yk2KzdnJ54ezhxilwE5xxnfXk%2BSCLAv93FWK%2Fopn2LZ1pOyc1HJEjEgZHWVzhE3YtvX1syW0ax1yr1VM4sL5uMNsccG02hxPSKxkfbTekQw1v3OyQY6pgEm5Xe4piX7%2FJhVwKPHABlzBcGjIawwelNcsZj8WPpaORNWB3Ds%2B%2Bm5yXM4ZySwL33vOIQOkc38FFrXiSIAXud9sUsZS6BdU2HJrpgPxlPHLNDnHQfHP4kmxTbWidnWD5ktgmgoF6SrUSakrypH%2BjoOwxL%2FOJ%2FVJt4TPUHJJvdw4b%2FUsrvC%2FwTTAJS7RNUoL7TkqcbezcPihGy6DUQ4QV3Vb2t9Msn%2F&X-Amz-Signature=b61f35d04d7482c79a8e86c167c5bc02f4dbd8ec7203bf1813b496de0dc5b6d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

