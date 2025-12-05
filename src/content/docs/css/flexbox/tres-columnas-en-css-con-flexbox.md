---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DFKGF5L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVsKpQhBhpC7EaxOktlP3Lk573MTTzD9G1gzuCR5Pp2AiAsKIseZG8l8Q7USaE6mDjQZsNDTk981LQ6X6F2N%2ByGiCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM7DwGH98gMra2tmAxKtwDtjCojBa8tQ73WKNLdoir0f7l8nE5sO%2BmLr%2FgALyt1Yo7e4%2Fr92J513S7I0oQr1YjLSISfsVQ3UsqyCe%2FEUo6%2BcA9PotH07NiAffM6ZbGAI36iD5xQp6qdzqZF7t5VfDhy67ay%2Fuaf2qkBYw%2FoEhOTzuqzkt%2ByQY%2FNwCBVAHwI2ggwCw2O1aSAFdn4EmzeIC336%2FtFx30C8t7VND09SE8LF%2F5S0HJ9wwRyGgNkWnldWbr8u%2BBTtTVd824PLVlUKX9qgj%2FNHyUF31hqHyrxDiwMPG2xbwo4znZHWH2HKs9oIUXp9xBYiXvpuCZKnoqNygqiD3grroM4Yj7o%2Bf6xK7knvRMibKMQePpSmViMkln7ub97u%2FQTsLf7%2FY7g9sW2hHKxmUaCd9A1wX%2F%2FqgIJzIcV8qfQ8iiLrQaNJ4HT1GYzAw73u0wemsUGoXB%2Fb6EsZ3MtfRWwOapPX6dMX80ud3weLuGIDhPO%2FxZPKsqjSVR0r1F7d7aIxQhxz84xwyTkF2ikrSgmO0WBjVkS%2BDs2C83rY7%2B6KBpD%2FVa%2BWrPLvmPMT5J3Pf7GpfG6T3v8kNyavTSdVx0R%2BtTdBsLVeMp1xMj9Vo4rUH3COiML1pY9o3OrQnHAgfA8IVLkSVz8bEw4vHLyQY6pgGpanKR3p5WzkI2mjhTrpNkv9O3w5WrXCPvb79Mhd13ixPYgLsKcykHwWFwjNA5rtV9o8QVAV9NLIu8XBHc3oc8zZ4lKPFGyb3h%2B4J9rUcOBK37DtizF0ixhFeZtZjdPihkbfq0y3Y0ZVIj%2FOjJUnPI7alz%2BwRYq4bRfiy4n%2FKbSwSewpQ1QrYoyT00f5a%2BCeD8RddIIW2FPohEVvIjMisDnb0S%2B1uA&X-Amz-Signature=020ce14c8b7852bf708a2f6cd070e342efa86c0e15ee338810e3d9b8f03ff2ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DFKGF5L%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFVsKpQhBhpC7EaxOktlP3Lk573MTTzD9G1gzuCR5Pp2AiAsKIseZG8l8Q7USaE6mDjQZsNDTk981LQ6X6F2N%2ByGiCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM7DwGH98gMra2tmAxKtwDtjCojBa8tQ73WKNLdoir0f7l8nE5sO%2BmLr%2FgALyt1Yo7e4%2Fr92J513S7I0oQr1YjLSISfsVQ3UsqyCe%2FEUo6%2BcA9PotH07NiAffM6ZbGAI36iD5xQp6qdzqZF7t5VfDhy67ay%2Fuaf2qkBYw%2FoEhOTzuqzkt%2ByQY%2FNwCBVAHwI2ggwCw2O1aSAFdn4EmzeIC336%2FtFx30C8t7VND09SE8LF%2F5S0HJ9wwRyGgNkWnldWbr8u%2BBTtTVd824PLVlUKX9qgj%2FNHyUF31hqHyrxDiwMPG2xbwo4znZHWH2HKs9oIUXp9xBYiXvpuCZKnoqNygqiD3grroM4Yj7o%2Bf6xK7knvRMibKMQePpSmViMkln7ub97u%2FQTsLf7%2FY7g9sW2hHKxmUaCd9A1wX%2F%2FqgIJzIcV8qfQ8iiLrQaNJ4HT1GYzAw73u0wemsUGoXB%2Fb6EsZ3MtfRWwOapPX6dMX80ud3weLuGIDhPO%2FxZPKsqjSVR0r1F7d7aIxQhxz84xwyTkF2ikrSgmO0WBjVkS%2BDs2C83rY7%2B6KBpD%2FVa%2BWrPLvmPMT5J3Pf7GpfG6T3v8kNyavTSdVx0R%2BtTdBsLVeMp1xMj9Vo4rUH3COiML1pY9o3OrQnHAgfA8IVLkSVz8bEw4vHLyQY6pgGpanKR3p5WzkI2mjhTrpNkv9O3w5WrXCPvb79Mhd13ixPYgLsKcykHwWFwjNA5rtV9o8QVAV9NLIu8XBHc3oc8zZ4lKPFGyb3h%2B4J9rUcOBK37DtizF0ixhFeZtZjdPihkbfq0y3Y0ZVIj%2FOjJUnPI7alz%2BwRYq4bRfiy4n%2FKbSwSewpQ1QrYoyT00f5a%2BCeD8RddIIW2FPohEVvIjMisDnb0S%2B1uA&X-Amz-Signature=ef0101d6c595071749fb152918ac801fb82b7613dbfd854f104fac1633aeff83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

