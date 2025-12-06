---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC2ZKG5N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4NllUqi9eIlYPnmsV5ScGEuKj%2FN4J5RDjyN5w9YlJ9gIgdhOa1Fvgs8STZrWbovDbQrmvkTRF8VAEeDN8dEzBFRwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJOoa0OAtcfE8CLGNircA3vysuUei5X0BZNETkq%2B8wH%2FygDP3%2FQLZRgDNsS1tQJSj%2BraQobBmNqbAwxbtBVm3GJb%2BqMpv0hw7hm3OihzA63Bil4s7wNGQE2k2U8WUDHxy9cZLtgRsrhyO29NNFK3yiTs5phgE6wrVpHmPDQM0Dy0%2BnSHqrCYMBEITha%2Bx704JbbFTDDBltTJNYfUDHo0Bc7y1Xm0Mpn8Z9RZmYFCr3e%2BJ84k4fvOP1iEqs4S%2BT0I07366%2FGS0YxZ07fzHqpwFxYI9CSwmrqEvTazoYPSX8nUYVxf9aXkGFFHwNTSzMTllCtoFpfq1R%2BBevnM5Z0KgeSXkjoPg0Fs2SEhsNnM0ZlZ9uI74QjL1MYFkb4sxx%2FD%2BBn7RJnUPSt8p6ZPVZWv0Zl3TIUGCC71ulhVOiXxr%2FRBCytsc%2FZwVV9vlTat8HXC1gLy6Ix1rhHcJQVzix%2Bmnz4pyyh248R0b20es4aufArwkERMmbFA1rYaVb8WlqqUrf49KdMTGdyNaalcfb3L5fEVd417cgewV7wr2zz5MKtmwDfGiLK%2FlfxT8w0xLt%2BeB2bO3WK63S%2BITUFv6q775Rl5xEgFjTbHtq7lHFoWPXPX8x97rivG2MDw47OLiDjVrUfPktXgokBZXM%2FBMKam0MkGOqUBWTw13rjHFqDF6K5Dt%2FNyMIojf5poLd%2BPhXdJBzPHJ%2ByWd%2BeUHw%2FRuQwv0O6gDcO4NTkqe0mB1z4mx6q%2BKLFT4Phd%2BbtiP%2BO0cOJOx%2BQigbDGA4ruq5szjhtsW7flmL2t7LNemZr02EQdSLyxnu7s1uli503WIk2RP35yoRIIAY8kFXDrM5MKl5s506YpN1jBUWoEk06GIfIF4M2XcTbBO9HjPo8L&X-Amz-Signature=9b676f24c6ff40eb05dd2e523c78ef2299489967b818e4fddcd1a97bee081394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC2ZKG5N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T165441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4NllUqi9eIlYPnmsV5ScGEuKj%2FN4J5RDjyN5w9YlJ9gIgdhOa1Fvgs8STZrWbovDbQrmvkTRF8VAEeDN8dEzBFRwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDJOoa0OAtcfE8CLGNircA3vysuUei5X0BZNETkq%2B8wH%2FygDP3%2FQLZRgDNsS1tQJSj%2BraQobBmNqbAwxbtBVm3GJb%2BqMpv0hw7hm3OihzA63Bil4s7wNGQE2k2U8WUDHxy9cZLtgRsrhyO29NNFK3yiTs5phgE6wrVpHmPDQM0Dy0%2BnSHqrCYMBEITha%2Bx704JbbFTDDBltTJNYfUDHo0Bc7y1Xm0Mpn8Z9RZmYFCr3e%2BJ84k4fvOP1iEqs4S%2BT0I07366%2FGS0YxZ07fzHqpwFxYI9CSwmrqEvTazoYPSX8nUYVxf9aXkGFFHwNTSzMTllCtoFpfq1R%2BBevnM5Z0KgeSXkjoPg0Fs2SEhsNnM0ZlZ9uI74QjL1MYFkb4sxx%2FD%2BBn7RJnUPSt8p6ZPVZWv0Zl3TIUGCC71ulhVOiXxr%2FRBCytsc%2FZwVV9vlTat8HXC1gLy6Ix1rhHcJQVzix%2Bmnz4pyyh248R0b20es4aufArwkERMmbFA1rYaVb8WlqqUrf49KdMTGdyNaalcfb3L5fEVd417cgewV7wr2zz5MKtmwDfGiLK%2FlfxT8w0xLt%2BeB2bO3WK63S%2BITUFv6q775Rl5xEgFjTbHtq7lHFoWPXPX8x97rivG2MDw47OLiDjVrUfPktXgokBZXM%2FBMKam0MkGOqUBWTw13rjHFqDF6K5Dt%2FNyMIojf5poLd%2BPhXdJBzPHJ%2ByWd%2BeUHw%2FRuQwv0O6gDcO4NTkqe0mB1z4mx6q%2BKLFT4Phd%2BbtiP%2BO0cOJOx%2BQigbDGA4ruq5szjhtsW7flmL2t7LNemZr02EQdSLyxnu7s1uli503WIk2RP35yoRIIAY8kFXDrM5MKl5s506YpN1jBUWoEk06GIfIF4M2XcTbBO9HjPo8L&X-Amz-Signature=6acbd0886ddfc14132067d1d9cb76aabafceeffb5b34be070645be2157bb5550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

