---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVCWVBMM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9%2FeWVzBs20Y9al3LI8KWifPMDV3tAxT8An5qdcFPB%2FQIgehA39mYB744uQAAQYE8o%2FznD7eHGPkFW9%2BJEZC%2Bx%2FA4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGXQSUh3UcNXajiKpircA5n2nq%2Bj55P7d0haIp0S55VJppYzZZXJLkxNmULx2LZZWH7hSw4%2B4mx6qjM0LX9DNTualgoxl8OWKxu%2FdnFZNmdoFvJ0lwJ3He0pOk9tTO6RdNfzTWsONHqMeWJiqeS6qiYM2%2FP5%2F8ljxc0qXJbsjUpVK1qCzPRZPjTc8aGeehZF2zBuL8iTTwmmIVsMs7vZOPS1IP0ZAbeozrOoEi4bn1YILRdoXqYi2UlqrfDEx4uMhx4uLLJkX4ptGL9%2FGsQ%2BpPWcBkmIll2JaVDoznH2XA8pdRFsISuEtQ2508%2BmwW3XJHAu7CGIhWjm8gyCXmpCJiyRNQh7Eivqq04hla11VgEbMSMlXAhbe8nhSFZEswM5f9Lf0flBLG91A3tYnsAo4Qn7HuR58cqRXjeL1TX6OP%2B2vxUQLb6chveRMud%2Bqmps3d1anyja8%2B4XgivGIZkIq7ZM09w%2BdBjb4ZmolOeL335u48%2FOk0eSRsz0wb6qhqxnQkF5t2hcmJ57IXXqOU%2BL8cTnCenbTmlnMVOEuUhL34lqlrffG%2BgP%2BPX9ZvMCIML%2BnWeAD8%2BVYGFdccBf30tzcPq7TyRoD%2B%2FgRcCF%2FEv0IJjsFdMTLxx6fI4n4NLhHTij%2FRXESn76MDWmuyPMMKiryckGOqUBaBai2IlGgpcriNoAFnu%2BXi%2BGPxkx9%2B0zQNwX78KTljniUZf61jk91fujH2%2FP6C%2BfaxDnQVBd6WL1a65lZrYaj8NezeNexeVv8u60wHXk59PsY6cv%2FGUmqkDzMxKra%2BGRJBSCR12Nd5XbVDcrKXWB0%2Fot31f2U0gL0opPMYR9gkQgkncISuj7befpjgW9rQiG4W5eFQ%2Ba2EwKeczPSG3S7nfXFXmF&X-Amz-Signature=718579c2eec3da3e6d992a4c3cdf22d98e4c01fbe1bb9bb1f49d9933769333f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVCWVBMM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T050742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9%2FeWVzBs20Y9al3LI8KWifPMDV3tAxT8An5qdcFPB%2FQIgehA39mYB744uQAAQYE8o%2FznD7eHGPkFW9%2BJEZC%2Bx%2FA4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGXQSUh3UcNXajiKpircA5n2nq%2Bj55P7d0haIp0S55VJppYzZZXJLkxNmULx2LZZWH7hSw4%2B4mx6qjM0LX9DNTualgoxl8OWKxu%2FdnFZNmdoFvJ0lwJ3He0pOk9tTO6RdNfzTWsONHqMeWJiqeS6qiYM2%2FP5%2F8ljxc0qXJbsjUpVK1qCzPRZPjTc8aGeehZF2zBuL8iTTwmmIVsMs7vZOPS1IP0ZAbeozrOoEi4bn1YILRdoXqYi2UlqrfDEx4uMhx4uLLJkX4ptGL9%2FGsQ%2BpPWcBkmIll2JaVDoznH2XA8pdRFsISuEtQ2508%2BmwW3XJHAu7CGIhWjm8gyCXmpCJiyRNQh7Eivqq04hla11VgEbMSMlXAhbe8nhSFZEswM5f9Lf0flBLG91A3tYnsAo4Qn7HuR58cqRXjeL1TX6OP%2B2vxUQLb6chveRMud%2Bqmps3d1anyja8%2B4XgivGIZkIq7ZM09w%2BdBjb4ZmolOeL335u48%2FOk0eSRsz0wb6qhqxnQkF5t2hcmJ57IXXqOU%2BL8cTnCenbTmlnMVOEuUhL34lqlrffG%2BgP%2BPX9ZvMCIML%2BnWeAD8%2BVYGFdccBf30tzcPq7TyRoD%2B%2FgRcCF%2FEv0IJjsFdMTLxx6fI4n4NLhHTij%2FRXESn76MDWmuyPMMKiryckGOqUBaBai2IlGgpcriNoAFnu%2BXi%2BGPxkx9%2B0zQNwX78KTljniUZf61jk91fujH2%2FP6C%2BfaxDnQVBd6WL1a65lZrYaj8NezeNexeVv8u60wHXk59PsY6cv%2FGUmqkDzMxKra%2BGRJBSCR12Nd5XbVDcrKXWB0%2Fot31f2U0gL0opPMYR9gkQgkncISuj7befpjgW9rQiG4W5eFQ%2Ba2EwKeczPSG3S7nfXFXmF&X-Amz-Signature=c54a383c83a4dfe5d923c34fa9847702213bdb52f9b6be8d49da41415b9a31eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

