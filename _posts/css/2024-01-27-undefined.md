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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNWRB4R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIES%2FuivdukR%2Bualg3KQdDZqx3LTWhW3cUzwVGYB2BHKnAiBjNrUAHS5GEqDpUqiYkhqXam8xWR%2BE3mXtAc3g%2BmNfAir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMXIx7ldfflPJSu%2FlSKtwDsRr5ZK8Mg6FmgR3Y7eV2LNOC9YNofJiUZSqlLotZNXffKp7L7EQuwwJM6YbEfwh36x5LALaWY2Y82lvx37BU3Ran8HieZ7FAyyMq8hG7%2FLin91hlIGcWeHvW0vWsE7CjoMVAp67IuotUcOYGXCjAKmwahV%2FsZaOPR1NJX5l0VTfX5yiyzG9GnB2V6V2t1s9Y%2B%2BFzdAg2R%2BKm%2BAV3%2FpkKHikDJGB%2FCVJGZUDdcpivMWRPU8brLZLuPeQ2WH74bXkkY2ntslOCeLidWzQNyMHagMhOqLLvO6SpgQ%2FDfODF4Fny3u4bbxP%2BYpkZhk7lG3Rf2HqO5IABPLmLoIp1oX0bsOvRQRn8OqYW%2BhnyG4iUmVwfQgtsCSGc%2FzE0H9wDP5neVgcLL75bRRGqX5lCa6Jpgu3WqGQZn78gouFakUQ%2BMUMqtP3LRy5ML3Vltldr4mfyydhdZ1Pk%2BAX5AWa%2Ba7C5PPgt8wy0Vwhco2E0LJTC2yORKTPIBbPu6XeFOialD8bZzfmIYV6yJmlPkNLzOf%2Bl3roogpkCaSLmxIgJq0XTGvAGDaDOefiheifr%2Fbfx6B20LC2hsBUtPKZWk7BenMD5hD4fauedGe8%2FeHGVeiChjIFu%2BEnks7HKlgeC5IIw5Jq%2FyQY6pgFmkI%2BsE1MvdZ7gDUYYHSb4rfhwgun1wZoecf%2BQU4zZ9A8Dc4eIcF%2FI2k3WeoFK6N73UoLVG2P%2ByQCgfDPeGhKb0h1ljVPwwbWl3OHzKEN2bBq%2FccKfzC5VxJg4RGRCkYLJ7Aqdd7mp3%2FHZzqfq2mvfORFXy0yifIbdFXUzCEnKbFjbBEjuAlMPDwDVDYL1bIUWsdwT5yoX0n1x9uYHjgvugM%2FwHPqS&X-Amz-Signature=0b2672002fccaac583378b09ef8bfc8b6801d1b984d2bdf5f1b6a253836cdef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLNWRB4R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIES%2FuivdukR%2Bualg3KQdDZqx3LTWhW3cUzwVGYB2BHKnAiBjNrUAHS5GEqDpUqiYkhqXam8xWR%2BE3mXtAc3g%2BmNfAir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMXIx7ldfflPJSu%2FlSKtwDsRr5ZK8Mg6FmgR3Y7eV2LNOC9YNofJiUZSqlLotZNXffKp7L7EQuwwJM6YbEfwh36x5LALaWY2Y82lvx37BU3Ran8HieZ7FAyyMq8hG7%2FLin91hlIGcWeHvW0vWsE7CjoMVAp67IuotUcOYGXCjAKmwahV%2FsZaOPR1NJX5l0VTfX5yiyzG9GnB2V6V2t1s9Y%2B%2BFzdAg2R%2BKm%2BAV3%2FpkKHikDJGB%2FCVJGZUDdcpivMWRPU8brLZLuPeQ2WH74bXkkY2ntslOCeLidWzQNyMHagMhOqLLvO6SpgQ%2FDfODF4Fny3u4bbxP%2BYpkZhk7lG3Rf2HqO5IABPLmLoIp1oX0bsOvRQRn8OqYW%2BhnyG4iUmVwfQgtsCSGc%2FzE0H9wDP5neVgcLL75bRRGqX5lCa6Jpgu3WqGQZn78gouFakUQ%2BMUMqtP3LRy5ML3Vltldr4mfyydhdZ1Pk%2BAX5AWa%2Ba7C5PPgt8wy0Vwhco2E0LJTC2yORKTPIBbPu6XeFOialD8bZzfmIYV6yJmlPkNLzOf%2Bl3roogpkCaSLmxIgJq0XTGvAGDaDOefiheifr%2Fbfx6B20LC2hsBUtPKZWk7BenMD5hD4fauedGe8%2FeHGVeiChjIFu%2BEnks7HKlgeC5IIw5Jq%2FyQY6pgFmkI%2BsE1MvdZ7gDUYYHSb4rfhwgun1wZoecf%2BQU4zZ9A8Dc4eIcF%2FI2k3WeoFK6N73UoLVG2P%2ByQCgfDPeGhKb0h1ljVPwwbWl3OHzKEN2bBq%2FccKfzC5VxJg4RGRCkYLJ7Aqdd7mp3%2FHZzqfq2mvfORFXy0yifIbdFXUzCEnKbFjbBEjuAlMPDwDVDYL1bIUWsdwT5yoX0n1x9uYHjgvugM%2FwHPqS&X-Amz-Signature=e8aa5da077172c2a824c13624fe2146df38be3bbe97d85491991bf456c68dee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

