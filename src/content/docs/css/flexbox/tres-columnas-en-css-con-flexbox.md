---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH57DSOS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BRh1RGoxM7s1B59b3fLve1Er%2FQ8N%2FVPsgeo%2BtQVyKLAIgflLrivn9PE8TfbTRLPdu8Lzb%2FiW3suaMWuMWc7HdqF0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIMpu6p0%2B3Ode64tJCrcA1F8qX6xsDfTWvWDr5STWWcIpF5pvt8nR4bLAPLvQo2sCtOJiyL67cw63giJs0Mj39i8H8eCeDXK5egLFekjfADR3lMR%2BayVMPJGs7vIu7oTmah6ZWjelmCgDO1VA1WWmWHmlqNKuADijYNRvH4%2BaOQu2ZCa%2Fm%2Bh6egR3D5xeYuGkl0VUBjLbBfdra4GXSf0EbuCj6tiEIJpNSAfYWLLQomSjta3z2S6lhF42WpAs5dbudRcZ7WnMqcN1GqYtT8LKnbuOADSCcTUQ%2BEOU%2BbJ60OLR12xxH42CtEmHnMiAtNLKnXaGEJILxvalscWsoylaAGPi6qmnqOLKdQJzgVMTx%2FdsmfFQPEXC%2B5wALw%2Bl%2BhTL4j75gdPEtn6qb45PwP007yT2WadwxVqJgzEu%2F0QvuzVpGGxkoBFX%2Fxuuktw%2FMPCAfBg%2FMK2mjUATvEWB%2BHL0loppuewKUlhj7e%2FFLA8J4gs3v%2B2CxLYSTHk%2BVqHsoP%2FQbHSKBvZfPjA5NmIp2xkvWshJ2l75rPNx6O5Wy4FpV1TOUE8OBJkuFuPNQAaeZVavYHL40MzEQQGLfzHZ9%2BbhFdDjJfapRrKmFaY9vhC%2BnRxNh1w%2B%2BhPwYbZS9SNRRkrBJGcN%2B5IBf5WD8LJMO%2BMyMkGOqUB0SLW8S1Ps9CWIH9iRs6nWvJiyLTBV7PN90kzhQZ3B3Fn5w0%2BXAawbRf5CNkFBTIEdsk9Y%2BNlhaRiJKlWEIzuc6s4GlYos%2BywXg85RnkDsAdocufgQIPeqQCeoTKG%2FWDEbtc5PLDTRwDPC%2BidkhS1lT4rvm7a%2BEp4gJX%2B1PW75LyMpsAcwMne%2BGrUQcf7iFMxmq68fMtEOYajHYMY0OHVjIVva66b&X-Amz-Signature=ef9b19a4fed7556b237f2f6e7ae7b6e7f2610c9accbb611f64e2309912c9a0ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VH57DSOS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T005034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BRh1RGoxM7s1B59b3fLve1Er%2FQ8N%2FVPsgeo%2BtQVyKLAIgflLrivn9PE8TfbTRLPdu8Lzb%2FiW3suaMWuMWc7HdqF0q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIMpu6p0%2B3Ode64tJCrcA1F8qX6xsDfTWvWDr5STWWcIpF5pvt8nR4bLAPLvQo2sCtOJiyL67cw63giJs0Mj39i8H8eCeDXK5egLFekjfADR3lMR%2BayVMPJGs7vIu7oTmah6ZWjelmCgDO1VA1WWmWHmlqNKuADijYNRvH4%2BaOQu2ZCa%2Fm%2Bh6egR3D5xeYuGkl0VUBjLbBfdra4GXSf0EbuCj6tiEIJpNSAfYWLLQomSjta3z2S6lhF42WpAs5dbudRcZ7WnMqcN1GqYtT8LKnbuOADSCcTUQ%2BEOU%2BbJ60OLR12xxH42CtEmHnMiAtNLKnXaGEJILxvalscWsoylaAGPi6qmnqOLKdQJzgVMTx%2FdsmfFQPEXC%2B5wALw%2Bl%2BhTL4j75gdPEtn6qb45PwP007yT2WadwxVqJgzEu%2F0QvuzVpGGxkoBFX%2Fxuuktw%2FMPCAfBg%2FMK2mjUATvEWB%2BHL0loppuewKUlhj7e%2FFLA8J4gs3v%2B2CxLYSTHk%2BVqHsoP%2FQbHSKBvZfPjA5NmIp2xkvWshJ2l75rPNx6O5Wy4FpV1TOUE8OBJkuFuPNQAaeZVavYHL40MzEQQGLfzHZ9%2BbhFdDjJfapRrKmFaY9vhC%2BnRxNh1w%2B%2BhPwYbZS9SNRRkrBJGcN%2B5IBf5WD8LJMO%2BMyMkGOqUB0SLW8S1Ps9CWIH9iRs6nWvJiyLTBV7PN90kzhQZ3B3Fn5w0%2BXAawbRf5CNkFBTIEdsk9Y%2BNlhaRiJKlWEIzuc6s4GlYos%2BywXg85RnkDsAdocufgQIPeqQCeoTKG%2FWDEbtc5PLDTRwDPC%2BidkhS1lT4rvm7a%2BEp4gJX%2B1PW75LyMpsAcwMne%2BGrUQcf7iFMxmq68fMtEOYajHYMY0OHVjIVva66b&X-Amz-Signature=98bc7202d0760d98d364558683bdd5272389b7ae0d7983a31f0c3ab4da080b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

