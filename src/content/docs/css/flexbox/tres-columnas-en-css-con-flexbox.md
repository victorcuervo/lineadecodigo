---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG4BK6F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChN2YAL%2B7pQRM4N3yiXFRu65Kv5Es2qaWtbmw3aWr23AiAH8GkaeXbjdEtKjYJoZawafeDMDjZ1hZtOOfEnPXfmJyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM65huV2a473KHVTjuKtwDngKUsYkqEB%2FMGypOfptsIJbt7uf9iXtQt61SwQYzTLFVde2Ndos3xrvX4mTjofTFJ70WzrV8Rhsrus9f7iYZnStpmgbMRlVx7Uj8AlMBI0t54lFIl7QDTbfVlIhVaBkAzVNGTpy469BLkQsx6XQBFY0NvQaHgG1X5C6cwv8RQ6%2BDlEi8oS57O0EHotEIgJr8rrU%2BzsAYfwTspPr18YIJPZjLPoy1mi0rgwKzKJrWohiGb4x7e8XyhuzdaLEOOtVc%2BInvFuoPMvfroDPjUV%2FKYcHCqUuw5ufGQwKm3iHfZaO7JPuPpyVdP2KgToadth18UEp7%2Bn5HG%2F1dk%2FV7iVKMklMjM5Dml5Wmxwt6I4Km4gS5ZRdT%2BN86J%2FbqwE2YO%2BOU33uW8lVpU6PQmDM6dZ1XHUAWT3CUW8KXJQp5IYDSMLRnCTvqzTsqXR87Hobi6e1x2gwy4FHmjeaiEYT4Ogoy%2FpTDzFQh9y2hBtTGMB4nGw%2F0JxTIcCViChu6YoSGRcJK0ojSaVt%2F90BHX5UR%2F8tigxnWYiypvxD4hkqI8IKKu3Iev4KzCeRg7Yko%2BNhKjBT5jxANL4mEAk8ssaefgg%2Bgxuvei%2Fb%2FqgBG2njk1CUXGXHPu3d9RXtj6LodkXQwidPSyQY6pgEoZgeVbAnHVmlOzbIBL2QtF42hZ8SoNhFnLBTEUf1D9yCSSw0VWSYX9OOk5uNA8ISEkKkPgSropb9OIXBh82kn%2B9u%2BqkB%2FG63DMyxEuW03xqMN5jOhkboKz5a3yzpxz7EtwDB7WbuMTUYi6RauLZN8B9F2i2Of6qCS59HH7UUiirSdEkQbpu1kMAOxfge%2FxoEeFgMiewbMjiRhdle0%2BAV1a113J0KQ&X-Amz-Signature=4c0eeabae0e6c7ed849204e49d8fb7f0489a449838a0412adeb2d366d193cfc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG4BK6F%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChN2YAL%2B7pQRM4N3yiXFRu65Kv5Es2qaWtbmw3aWr23AiAH8GkaeXbjdEtKjYJoZawafeDMDjZ1hZtOOfEnPXfmJyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM65huV2a473KHVTjuKtwDngKUsYkqEB%2FMGypOfptsIJbt7uf9iXtQt61SwQYzTLFVde2Ndos3xrvX4mTjofTFJ70WzrV8Rhsrus9f7iYZnStpmgbMRlVx7Uj8AlMBI0t54lFIl7QDTbfVlIhVaBkAzVNGTpy469BLkQsx6XQBFY0NvQaHgG1X5C6cwv8RQ6%2BDlEi8oS57O0EHotEIgJr8rrU%2BzsAYfwTspPr18YIJPZjLPoy1mi0rgwKzKJrWohiGb4x7e8XyhuzdaLEOOtVc%2BInvFuoPMvfroDPjUV%2FKYcHCqUuw5ufGQwKm3iHfZaO7JPuPpyVdP2KgToadth18UEp7%2Bn5HG%2F1dk%2FV7iVKMklMjM5Dml5Wmxwt6I4Km4gS5ZRdT%2BN86J%2FbqwE2YO%2BOU33uW8lVpU6PQmDM6dZ1XHUAWT3CUW8KXJQp5IYDSMLRnCTvqzTsqXR87Hobi6e1x2gwy4FHmjeaiEYT4Ogoy%2FpTDzFQh9y2hBtTGMB4nGw%2F0JxTIcCViChu6YoSGRcJK0ojSaVt%2F90BHX5UR%2F8tigxnWYiypvxD4hkqI8IKKu3Iev4KzCeRg7Yko%2BNhKjBT5jxANL4mEAk8ssaefgg%2Bgxuvei%2Fb%2FqgBG2njk1CUXGXHPu3d9RXtj6LodkXQwidPSyQY6pgEoZgeVbAnHVmlOzbIBL2QtF42hZ8SoNhFnLBTEUf1D9yCSSw0VWSYX9OOk5uNA8ISEkKkPgSropb9OIXBh82kn%2B9u%2BqkB%2FG63DMyxEuW03xqMN5jOhkboKz5a3yzpxz7EtwDB7WbuMTUYi6RauLZN8B9F2i2Of6qCS59HH7UUiirSdEkQbpu1kMAOxfge%2FxoEeFgMiewbMjiRhdle0%2BAV1a113J0KQ&X-Amz-Signature=c4244357ebeb898a50ee965c84f0d669ead0237690a12468901871be525958f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

