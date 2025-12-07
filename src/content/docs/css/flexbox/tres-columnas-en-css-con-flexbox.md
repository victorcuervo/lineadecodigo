---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H6CFMHH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPfYn9NvWYn7kye68mG52KDXXRfuYe3FbZIawggT83GAiEA2NPLspRAXz1K42mbojCQ34KDIFGvhwEu1HMUFkLQZBAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2sd7wdVRitaejT6SrcA7IJ8UcWBH0l%2FxVuwM9kDhtFbw6l7Z8yVeqW2aYebWZBZpHgRYEpbBqhAImmRxVBUfcqdOThJUePQcydGX7OMJ6kFRYevplZ02DNUdDngQl8BGeZMp5zhIyVXr3%2BC4sC2%2F0UGToVia7U9vpzxN%2FwOJNjBNlEP%2BwnRSSDCZkMB2DBQV%2F4BQOUvHdTzlQAIVxrucvGitMGvzpM1peRaJuPrxUY2PhzUIfWA82LdO0UTGmqPwd%2FjfnSheOSxpqkD6dmCFE8L%2FrXyHm%2F3Pf8pZg6Ivg%2BfjuIQ06q0fylC7iR%2FB6vNgRRBm4K%2BvJEOyqB3CMPRbOgM0Hn%2FI%2FgM9N%2BeBdgEmErKmAB5DYJD3RdSkfdbdNDkMl79Z3jF6szCJBEbq1Wi6zm1kWADlYUkHB%2BMh%2BWIYP0JhzPFDgj%2Bn3gigIEGu%2FG8drdD9MMweXkpJ7m8uzMinL7ru6ECDcNcpKyl9ogrtd%2BnqvQWiF2trKlVJWFBjmt3BMXb1P3LMzqvgwOmzvflwlsI2%2BT0ufq7BCUuXXWfIhHecqkEGGMYtOklAdDmxkHTBewxGABN0eE1E3iU3wGzKWpbre54GKquhlwq5PLNao3cc4ClOV0sHc%2FS4qWwkeX7nvlRO1xHO%2F%2BdmjoMNj90skGOqUB3eDokp6r1cyrc6bngeE3uI5WyWmbAPeqhMQrOfRCGfbIRnDEeEfFlIh467D7l6U64xJjHPltE%2FlJppwjY1jRnKgurCl%2FNi4Tpf4AC8fcEd2AdSe1uwC%2BLTww2T5JOfiFI0CmUJWeXsfYyjf1JH07os%2FUgUzGi5%2BIlcAGFL5PzPwLkctWz2I2fvejjkFecv43ZeZTN9INHHvtHmcDizRiSCwlNFqZ&X-Amz-Signature=885f44a499a3a3dc4d62d8d4d1b26e38d4da87ebf4bfbfbdc9a187bad0e5c9a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H6CFMHH%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T020901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPfYn9NvWYn7kye68mG52KDXXRfuYe3FbZIawggT83GAiEA2NPLspRAXz1K42mbojCQ34KDIFGvhwEu1HMUFkLQZBAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2sd7wdVRitaejT6SrcA7IJ8UcWBH0l%2FxVuwM9kDhtFbw6l7Z8yVeqW2aYebWZBZpHgRYEpbBqhAImmRxVBUfcqdOThJUePQcydGX7OMJ6kFRYevplZ02DNUdDngQl8BGeZMp5zhIyVXr3%2BC4sC2%2F0UGToVia7U9vpzxN%2FwOJNjBNlEP%2BwnRSSDCZkMB2DBQV%2F4BQOUvHdTzlQAIVxrucvGitMGvzpM1peRaJuPrxUY2PhzUIfWA82LdO0UTGmqPwd%2FjfnSheOSxpqkD6dmCFE8L%2FrXyHm%2F3Pf8pZg6Ivg%2BfjuIQ06q0fylC7iR%2FB6vNgRRBm4K%2BvJEOyqB3CMPRbOgM0Hn%2FI%2FgM9N%2BeBdgEmErKmAB5DYJD3RdSkfdbdNDkMl79Z3jF6szCJBEbq1Wi6zm1kWADlYUkHB%2BMh%2BWIYP0JhzPFDgj%2Bn3gigIEGu%2FG8drdD9MMweXkpJ7m8uzMinL7ru6ECDcNcpKyl9ogrtd%2BnqvQWiF2trKlVJWFBjmt3BMXb1P3LMzqvgwOmzvflwlsI2%2BT0ufq7BCUuXXWfIhHecqkEGGMYtOklAdDmxkHTBewxGABN0eE1E3iU3wGzKWpbre54GKquhlwq5PLNao3cc4ClOV0sHc%2FS4qWwkeX7nvlRO1xHO%2F%2BdmjoMNj90skGOqUB3eDokp6r1cyrc6bngeE3uI5WyWmbAPeqhMQrOfRCGfbIRnDEeEfFlIh467D7l6U64xJjHPltE%2FlJppwjY1jRnKgurCl%2FNi4Tpf4AC8fcEd2AdSe1uwC%2BLTww2T5JOfiFI0CmUJWeXsfYyjf1JH07os%2FUgUzGi5%2BIlcAGFL5PzPwLkctWz2I2fvejjkFecv43ZeZTN9INHHvtHmcDizRiSCwlNFqZ&X-Amz-Signature=c50ffc1855b5aed2e8854a920d8b84eea88cdd043277754bd59b3996a7fba5cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

