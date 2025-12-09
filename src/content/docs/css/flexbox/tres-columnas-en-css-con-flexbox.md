---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WER4QWMZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXBV8PFDavTt9bsWla06fdD8zsT9BFfSq8kqqo7ddDaAiBd3%2Bdj8G32inSFPuAnLl3dFVGlQqjwxcHtxN4rGPcdOSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBEYQIOcH%2FUTDrOUJKtwDnM6s2V8egbewl8583N6MRe9N39Gy6FKENX4790LK1lwhBlwiDIXhC6nEptjHY0qV49%2FDq8u0nihA93p5ak5XsgwndWkLOYrUa1pwzlAAnmhJdcEKWaprNm165xm7TGTQc5rdzB18%2BnSNuxdCw2m0XPbLmXMXStvpCYCPQpM%2BAzyt8Af7%2F2R79kw2kI3IcIAfoObKzAJ%2FbC2dUYR5ouBBRgt7xlMJ1uw3BIHvHpAZVaKJYJIP7hif4WRxAAjgRIxXA1XeoCGF6u7lxTogv%2FLFHAuBvtkS1ZV653F%2FQkoT3lPg%2F2B1Cl%2Fgh%2FO1%2B2c8TJ222ubeJslumKjnuw%2Fj0SZDwI9fnb%2FuEqo8tafZAbe8gjDgqB3kX1Coj0Kfo1NK6mF%2BcgCIUp%2BJWFYPE4U37oOWgGMiYepE1l6e3uZZmiRtX25IVPe5S17sFG8IG5VJhB2Y9PZV87ezvH7n6Uh2lOd3O7OJ7XUsJ446E24%2BaM5gN3YEY0p7%2BzzpOwFGwaB%2BjZX3NFHiPz5xQ8o726BcMTe8%2BFMY2IxBXkMmpJrqhSI0%2B6CuzYsUIXazPZ2HWk7ihgWeayPUQz7lUOAWbBtHQ2DIpdIok32CKumE4H5%2BNZq04pTIj%2BjJcN2RBYfoKMUw0OXeyQY6pgGKE08LzpPBksBuw7muhQAuzPOjqy%2BQ1h%2Fgz2ZR8ygGKdfUHH9eUvWnecgx%2Bi0Q4ZnyxglNe5mq1l3sMUj4zBNcQracyrfSlYEVL9Q42VbG6v9%2F6%2BNFzl%2FLLw068atRD7RRPeplH4UkO57VnuicMKwtzTMMYsiMoVm%2F%2FgjOVc%2Ba2yEfePfcBLeEHF0sKUob%2F6z9Kg8cYC1IUIBPzRMcbCwWzcbB5N9P&X-Amz-Signature=68d4d4ed12ab408e4e64111a16d50d2a0464640cbbb82864d94cf049fe1baa3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WER4QWMZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHXBV8PFDavTt9bsWla06fdD8zsT9BFfSq8kqqo7ddDaAiBd3%2Bdj8G32inSFPuAnLl3dFVGlQqjwxcHtxN4rGPcdOSqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBEYQIOcH%2FUTDrOUJKtwDnM6s2V8egbewl8583N6MRe9N39Gy6FKENX4790LK1lwhBlwiDIXhC6nEptjHY0qV49%2FDq8u0nihA93p5ak5XsgwndWkLOYrUa1pwzlAAnmhJdcEKWaprNm165xm7TGTQc5rdzB18%2BnSNuxdCw2m0XPbLmXMXStvpCYCPQpM%2BAzyt8Af7%2F2R79kw2kI3IcIAfoObKzAJ%2FbC2dUYR5ouBBRgt7xlMJ1uw3BIHvHpAZVaKJYJIP7hif4WRxAAjgRIxXA1XeoCGF6u7lxTogv%2FLFHAuBvtkS1ZV653F%2FQkoT3lPg%2F2B1Cl%2Fgh%2FO1%2B2c8TJ222ubeJslumKjnuw%2Fj0SZDwI9fnb%2FuEqo8tafZAbe8gjDgqB3kX1Coj0Kfo1NK6mF%2BcgCIUp%2BJWFYPE4U37oOWgGMiYepE1l6e3uZZmiRtX25IVPe5S17sFG8IG5VJhB2Y9PZV87ezvH7n6Uh2lOd3O7OJ7XUsJ446E24%2BaM5gN3YEY0p7%2BzzpOwFGwaB%2BjZX3NFHiPz5xQ8o726BcMTe8%2BFMY2IxBXkMmpJrqhSI0%2B6CuzYsUIXazPZ2HWk7ihgWeayPUQz7lUOAWbBtHQ2DIpdIok32CKumE4H5%2BNZq04pTIj%2BjJcN2RBYfoKMUw0OXeyQY6pgGKE08LzpPBksBuw7muhQAuzPOjqy%2BQ1h%2Fgz2ZR8ygGKdfUHH9eUvWnecgx%2Bi0Q4ZnyxglNe5mq1l3sMUj4zBNcQracyrfSlYEVL9Q42VbG6v9%2F6%2BNFzl%2FLLw068atRD7RRPeplH4UkO57VnuicMKwtzTMMYsiMoVm%2F%2FgjOVc%2Ba2yEfePfcBLeEHF0sKUob%2F6z9Kg8cYC1IUIBPzRMcbCwWzcbB5N9P&X-Amz-Signature=76a269ea4d644069bab897b82d9cc45b45cec97acf6db9d7ff66ff25b127dbe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

