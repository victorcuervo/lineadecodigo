---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667SF7YBR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC4fv2E71HisdNhU0l6aY8YZIhoBXI1lvu6TQVxMtBzqwIgGBPakly59iaa3crWcZxqR7ZzrpUgAQbatO1zTD9S4KYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI2rcPvHF5%2BcXEbP%2BSrcA3DlPc6YMmrVXrJTfDOIjbnZkkPYaUKkmDXsjKuNAvcxOrf%2B2SCBN5jRjvHy%2F1ukm7a5lOKLjjH%2FYgqaCAAVdlfMKDfnJOOb3peZbil0YVVu%2B2dHLtmnchTv4EWvlOHfnXdw1%2FyAwTE3NLHWqluhS7AECrnJTgVhFfMvhKYJa1RGcfHfxCjNVi4%2BuBqMBdpdIIoibWhLOgsHXQCoOuzv5JPH46o0RsGYhZ%2BZCXvMKo7kAxHjN6wTFtwsjE%2F8wLISviCOPldvzB%2BXYBdc9wVaLR5EMCPEeGALwJFAhnoaAc5N1syb1snuZ7M852Yh6JXpCXcFsuhCStiZPzDdvlwE0TlmWfsuvQnPdwbDL50k%2BZFY7BmgNe2k2jFFRoCg658Fg1iVtAxLepwd4T7NgmJDBlXzR6%2F89kVHk%2BPdqzZPXLVpn1tWH9bwzViu4BmXHjhrjkTMzeFv%2FDYtraVZCn5Jeb49elBv7dZ4UUV%2FKlXd4%2F9ziJ1bZ1yTn6N6n59nuMxj4O4s8U7tCMi3dLZ99A6hHwJSN1oee%2Bojp6dv1dpmGeOIFMhIujJHiDrUUNThjg%2BbaoIKVF9fwBn0QXBV7NsQBOENvbtfzhxHuRuJCxCscTa0JHZdmTP%2Bucg9qhTqMK%2B9wskGOqUBqATZc8XiBOmfli%2BGvxfjI1oIAJyKTsi3c2rgwAKNztXFf5bT5DHiVBRfHIFVIsXhI%2BlmHmhcL6VqVewffI5xO3CMnGyw7uUSi%2Fq0nQ2vZEZSoVqmtzQMWtyZGRbi41Rc8wNn0GjnJYzxPJyccWJ%2FS8%2BW91eOcJk23DXuD%2F8D1%2B0MzZlWexVfGdtAVbMD2yx8p5GWYKhGt3hZtJFUjOA4cNoLva4Z&X-Amz-Signature=18bc0e4a3c5168bcab06be1fc54dad436bcdcbb3566345cf589c2be71de788af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667SF7YBR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC4fv2E71HisdNhU0l6aY8YZIhoBXI1lvu6TQVxMtBzqwIgGBPakly59iaa3crWcZxqR7ZzrpUgAQbatO1zTD9S4KYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDI2rcPvHF5%2BcXEbP%2BSrcA3DlPc6YMmrVXrJTfDOIjbnZkkPYaUKkmDXsjKuNAvcxOrf%2B2SCBN5jRjvHy%2F1ukm7a5lOKLjjH%2FYgqaCAAVdlfMKDfnJOOb3peZbil0YVVu%2B2dHLtmnchTv4EWvlOHfnXdw1%2FyAwTE3NLHWqluhS7AECrnJTgVhFfMvhKYJa1RGcfHfxCjNVi4%2BuBqMBdpdIIoibWhLOgsHXQCoOuzv5JPH46o0RsGYhZ%2BZCXvMKo7kAxHjN6wTFtwsjE%2F8wLISviCOPldvzB%2BXYBdc9wVaLR5EMCPEeGALwJFAhnoaAc5N1syb1snuZ7M852Yh6JXpCXcFsuhCStiZPzDdvlwE0TlmWfsuvQnPdwbDL50k%2BZFY7BmgNe2k2jFFRoCg658Fg1iVtAxLepwd4T7NgmJDBlXzR6%2F89kVHk%2BPdqzZPXLVpn1tWH9bwzViu4BmXHjhrjkTMzeFv%2FDYtraVZCn5Jeb49elBv7dZ4UUV%2FKlXd4%2F9ziJ1bZ1yTn6N6n59nuMxj4O4s8U7tCMi3dLZ99A6hHwJSN1oee%2Bojp6dv1dpmGeOIFMhIujJHiDrUUNThjg%2BbaoIKVF9fwBn0QXBV7NsQBOENvbtfzhxHuRuJCxCscTa0JHZdmTP%2Bucg9qhTqMK%2B9wskGOqUBqATZc8XiBOmfli%2BGvxfjI1oIAJyKTsi3c2rgwAKNztXFf5bT5DHiVBRfHIFVIsXhI%2BlmHmhcL6VqVewffI5xO3CMnGyw7uUSi%2Fq0nQ2vZEZSoVqmtzQMWtyZGRbi41Rc8wNn0GjnJYzxPJyccWJ%2FS8%2BW91eOcJk23DXuD%2F8D1%2B0MzZlWexVfGdtAVbMD2yx8p5GWYKhGt3hZtJFUjOA4cNoLva4Z&X-Amz-Signature=43db5bb787c6ff15becf27ebf8592172bcd40bc98c0ff7c9f3a9782cecf80c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

