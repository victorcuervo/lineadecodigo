---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRVTMTX2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzNSTc9umf2fY4NYaJjglEL%2Bat7LdwAbM1pnT6tq4%2FrgIhAK%2BN6%2FGFUebxjq4W9bN1SbG%2F6jgNeCNbcPhW42FeqSi5KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXJBCybZbypIiPL8kq3AMBRBm0lNFJrTMKggUWbbNpVqgd8OIWJQvgzls%2B%2BaKyJWCepbt6OhlAOF5MEyxG7T6Jt%2Fq5P41BU39GTw6a85kzs8fDYAJVnZg6Ta5LxZjzXzbnF2ioBVWe7SgwZNwRIvXpqJH1fL%2F0j9r%2BqDqA%2Fc54k4rIFpfopsWQU1Woyiwjka1iBHNfZSkCpQWw4VnboAHhDpwFkb8%2FtrjtrfMd7eAdTVPlWs78KvgOkk4loaxjv8IsBiKe6DzFW%2F8Ws76I2ZajROdpKcIfeTDYy52HsL8rUYQbP9fXTbP6fWjSr8FJoWKY8a1UeJHTKfnxLv7hVI4H2owjYOf4qCBY9DpWNJlGHyAn5veE70k%2BPeuPoYHhfMC3nBhKwjUWt1yBnd0xLkgKbBUTlNyLi85tTb6ExL5JvUNA0DjwMHsLfiGzaD%2BWFA8sLrhBAcicmqgSsatcw7TS28UizhK8rSxagAOf%2Fb%2FJOk%2FMKL5OaPcw77SDv6Q63E3bPx60dN6EJmXt8eUIjB9SMXzIXMN%2B8%2BW8%2FcT1D3rSrzt%2BxSqi5MCbLT9ugAx79Zx0BOZJOEqv84bMhaS2jYjC9FSN9cN44nsJaDa0rWpruZwdtlgZ93N6MXGpf5EFCYX1GluC4klGebj9NzCTgN3JBjqkAfLpLg%2FpDn1YmMdiHXnZCzt6cVjg4hvMKBXOKzcZdm0aliRqDx7QmDMYYA74XpzEoqfY3raasUtFBLrQqORKbxKO2Z9KaC3ci1SeDx4aLjhzD1NC8j8makiLsIfbiN73hY9A0a7PvS%2FHyy4ROvp4CLYwb01XCWtTKX36n0JOSKnSBrDGFXMUA3JS%2FrE3gFsW5VpMGLaf4MpTwscrvmtJZuf24Yb6&X-Amz-Signature=6404e431969bb5833b44aa4bb311ea673ed9c667480b7d1c4cdf9873723f168c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRVTMTX2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzNSTc9umf2fY4NYaJjglEL%2Bat7LdwAbM1pnT6tq4%2FrgIhAK%2BN6%2FGFUebxjq4W9bN1SbG%2F6jgNeCNbcPhW42FeqSi5KogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzXJBCybZbypIiPL8kq3AMBRBm0lNFJrTMKggUWbbNpVqgd8OIWJQvgzls%2B%2BaKyJWCepbt6OhlAOF5MEyxG7T6Jt%2Fq5P41BU39GTw6a85kzs8fDYAJVnZg6Ta5LxZjzXzbnF2ioBVWe7SgwZNwRIvXpqJH1fL%2F0j9r%2BqDqA%2Fc54k4rIFpfopsWQU1Woyiwjka1iBHNfZSkCpQWw4VnboAHhDpwFkb8%2FtrjtrfMd7eAdTVPlWs78KvgOkk4loaxjv8IsBiKe6DzFW%2F8Ws76I2ZajROdpKcIfeTDYy52HsL8rUYQbP9fXTbP6fWjSr8FJoWKY8a1UeJHTKfnxLv7hVI4H2owjYOf4qCBY9DpWNJlGHyAn5veE70k%2BPeuPoYHhfMC3nBhKwjUWt1yBnd0xLkgKbBUTlNyLi85tTb6ExL5JvUNA0DjwMHsLfiGzaD%2BWFA8sLrhBAcicmqgSsatcw7TS28UizhK8rSxagAOf%2Fb%2FJOk%2FMKL5OaPcw77SDv6Q63E3bPx60dN6EJmXt8eUIjB9SMXzIXMN%2B8%2BW8%2FcT1D3rSrzt%2BxSqi5MCbLT9ugAx79Zx0BOZJOEqv84bMhaS2jYjC9FSN9cN44nsJaDa0rWpruZwdtlgZ93N6MXGpf5EFCYX1GluC4klGebj9NzCTgN3JBjqkAfLpLg%2FpDn1YmMdiHXnZCzt6cVjg4hvMKBXOKzcZdm0aliRqDx7QmDMYYA74XpzEoqfY3raasUtFBLrQqORKbxKO2Z9KaC3ci1SeDx4aLjhzD1NC8j8makiLsIfbiN73hY9A0a7PvS%2FHyy4ROvp4CLYwb01XCWtTKX36n0JOSKnSBrDGFXMUA3JS%2FrE3gFsW5VpMGLaf4MpTwscrvmtJZuf24Yb6&X-Amz-Signature=6b986d4fd25db12ae3346808d650e42abd1a96f8c790936ad9c645e7e4390c5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

