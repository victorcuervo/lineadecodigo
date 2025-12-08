---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IE3SZU2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHwlVVnC6reZWrvKJeIA80C1KatgydrQJmC5w9RPS4G4CIQDsFH%2FcGnXfPXoos1Q5o6bAZSwyxoGAAw%2FgSfFCcgg3jSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmtR5CVvZYAXcJa1cKtwDBQ0N7Um60N%2BqQsmsM%2F1My%2BOCL9z%2BROxR4NcU%2FVnmb5%2FxRbIevoc3RjhyCuvmdLuOSKRbDDNPteSYBZauPuWeagRMcR5Yp2wX0SgXomrR3jjqNIVBgyDZZQF0VAKXLiIajpfnhRGiVLJQmU785BwqloFfRy9rxvS8xX%2FKJN2QVLSVUNW1fT2FGIhz4vn0pnpknTVlKkrNNS8iInOsrZ9%2FMJ8dW6ZjC3uyNpNM0h8PS9TZtUqHiRUoef3VYYlPJgHlXLSoB6RFQczdvvWESJ7JOn9t2cSIA6nxFoJD%2Bg4Ampmd8x1Z2b0yMpP9MMykZ97bbB8GiS6LQBPKyXmUhwYZ0mBt0FOWPyd1Cap1%2Fj7VXwqclCCAH55BC%2B7pmpC0XoHQXIR967eiM1LVpuE6DV0%2F9YWIwAmj6kVAoWFLaccVA0Six041yvPthamNkk%2Fgf0B1HmvfvoX59QlAPSagWzHWNi%2FyZKHdT9OlRKDiBAoM5x%2Fe0NDeu%2BnC%2Fz%2BSCb%2F06rBl4NEeD9O2gYy5s25j4RbdIAAM%2Bi8SZfjJ6VloCL91cJOwv2r0noF1kh4prR9DXTmo69SOxoODLsZEft1B%2FFHr4AqFBuTWOcXv3CN6D5flllBpeA9jNABQnfUtNPUwhIfcyQY6pgHWs%2FRAb%2BKp0Hax2BFTLJpFkgvAm6bpkq5cNd36I%2B%2FFMy0FOqlQdvScDO9CmvmWjEBLjTpPdaZzxOMOriadZWGNDix5UFYpjpAdmaPrNlQ9UuNATMYo8SSmw8MhMwKDYXXyI7u747ca895hA2po5G5W9VpQKKq3NcT9jpC8D7mWk9Maz9rF2YrWEOF5INGzb%2B6YLQyR2Cc2aqZ1xQKmX8UATQsQXUiZ&X-Amz-Signature=21397f7cf951045fc73b823ece031fc1c10ca6f328aad808ae1c362c6b21648d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IE3SZU2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T171655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHwlVVnC6reZWrvKJeIA80C1KatgydrQJmC5w9RPS4G4CIQDsFH%2FcGnXfPXoos1Q5o6bAZSwyxoGAAw%2FgSfFCcgg3jSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmtR5CVvZYAXcJa1cKtwDBQ0N7Um60N%2BqQsmsM%2F1My%2BOCL9z%2BROxR4NcU%2FVnmb5%2FxRbIevoc3RjhyCuvmdLuOSKRbDDNPteSYBZauPuWeagRMcR5Yp2wX0SgXomrR3jjqNIVBgyDZZQF0VAKXLiIajpfnhRGiVLJQmU785BwqloFfRy9rxvS8xX%2FKJN2QVLSVUNW1fT2FGIhz4vn0pnpknTVlKkrNNS8iInOsrZ9%2FMJ8dW6ZjC3uyNpNM0h8PS9TZtUqHiRUoef3VYYlPJgHlXLSoB6RFQczdvvWESJ7JOn9t2cSIA6nxFoJD%2Bg4Ampmd8x1Z2b0yMpP9MMykZ97bbB8GiS6LQBPKyXmUhwYZ0mBt0FOWPyd1Cap1%2Fj7VXwqclCCAH55BC%2B7pmpC0XoHQXIR967eiM1LVpuE6DV0%2F9YWIwAmj6kVAoWFLaccVA0Six041yvPthamNkk%2Fgf0B1HmvfvoX59QlAPSagWzHWNi%2FyZKHdT9OlRKDiBAoM5x%2Fe0NDeu%2BnC%2Fz%2BSCb%2F06rBl4NEeD9O2gYy5s25j4RbdIAAM%2Bi8SZfjJ6VloCL91cJOwv2r0noF1kh4prR9DXTmo69SOxoODLsZEft1B%2FFHr4AqFBuTWOcXv3CN6D5flllBpeA9jNABQnfUtNPUwhIfcyQY6pgHWs%2FRAb%2BKp0Hax2BFTLJpFkgvAm6bpkq5cNd36I%2B%2FFMy0FOqlQdvScDO9CmvmWjEBLjTpPdaZzxOMOriadZWGNDix5UFYpjpAdmaPrNlQ9UuNATMYo8SSmw8MhMwKDYXXyI7u747ca895hA2po5G5W9VpQKKq3NcT9jpC8D7mWk9Maz9rF2YrWEOF5INGzb%2B6YLQyR2Cc2aqZ1xQKmX8UATQsQXUiZ&X-Amz-Signature=0a74c6f15950f13aebb88651488f335ce20c1d85289bacaa51532ac141968de3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

