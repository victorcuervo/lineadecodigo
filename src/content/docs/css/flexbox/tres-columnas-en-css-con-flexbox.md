---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U2KLIER%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpYOdgfbFBUYrAJRaVjzme5SprejIUE8DSLpRKug%2BpPAIhAN0N0t3m10INXOYbNSqz4b1VypyGOehQwl%2FSfcKz3X7CKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzSVadc51YlX44BdUq3APU66xqkY3yqR31bBHzdeLnEmutKJrqMsinZz%2BEwVVMQ6vZDEP02oPAGRuFYgwajdZmkCyvgN10DwJSg42%2Fm3%2BRcI2sjYko%2BU7%2BP1PgCuXpimXWkUip3Y7C%2F3GXZ3icW%2BkF1YMJviP51whGmbtn9i504DUoQtGpeCVQG5MRx4YeALU6qvZgbCtm4fix5%2BC66gfvHQsepqobm6e2Zeo%2B3O6J0VBWuMi7UW2qEGTaJYcXj1UkAP%2F6aT9kr%2FBe5wUkqgM7NXOEn03WCNOLJlxJJB%2B3tDxOgJKNnQtaV3CgFftRBy7BscYQozsFSY1YW%2FSMXqt%2Btwjcw0WbLwmVDSd2HfkOI98GBSKoG%2Fr3x%2BcGn3Gzm1eF%2FSK18Lbn5dKLYSwHAqWIIhpTlN7GRwt%2F6v3wsOISlXZfqvzM4fXZ9UJCZdn8Oy%2Bfm7DpPMQQ%2BJWOEeqhx1%2BKWBJliVxdrs52BCagmfRLfTqS4MoCE%2BODe%2B9RQQF5Ya4lhTz1B0TxPWL2libStOlg0QnFpYe89zaLgRftNQeG7ImNS04qPotmiju2ySlUeNdA6%2FV9fIzbzG7p8a7dJU66khKHSq2kfDyifFquOxTrwEJJeaTpmFrIHQxgkfcD9A4q8UkKYxcltPjFzTD4%2FdLJBjqkAQM4tLUgfFrzEH3Y3JjQTrhjsiacwRl71K%2F9i3qcGEbT%2BgkTzLlpODyrAfCSAwvc65byukq4FBgDrD6dhbYWu3gR%2FXzXYsyHO4XC9ogXZwctvdbltXLXB4vgvB2FpUufQvn6moetK5L1AAzo6dN8dtzcXnn3wCSlsoeyuRt5odvGDkPi1WaQGqrjmb087aLwZJ0WqLTtArrmk8vj8LRlN8%2B6glbm&X-Amz-Signature=c43c5c7b9674053fa4474823ec0222ad097029998409f5f80757c4d0d6e63e52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663U2KLIER%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T033953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpYOdgfbFBUYrAJRaVjzme5SprejIUE8DSLpRKug%2BpPAIhAN0N0t3m10INXOYbNSqz4b1VypyGOehQwl%2FSfcKz3X7CKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzzSVadc51YlX44BdUq3APU66xqkY3yqR31bBHzdeLnEmutKJrqMsinZz%2BEwVVMQ6vZDEP02oPAGRuFYgwajdZmkCyvgN10DwJSg42%2Fm3%2BRcI2sjYko%2BU7%2BP1PgCuXpimXWkUip3Y7C%2F3GXZ3icW%2BkF1YMJviP51whGmbtn9i504DUoQtGpeCVQG5MRx4YeALU6qvZgbCtm4fix5%2BC66gfvHQsepqobm6e2Zeo%2B3O6J0VBWuMi7UW2qEGTaJYcXj1UkAP%2F6aT9kr%2FBe5wUkqgM7NXOEn03WCNOLJlxJJB%2B3tDxOgJKNnQtaV3CgFftRBy7BscYQozsFSY1YW%2FSMXqt%2Btwjcw0WbLwmVDSd2HfkOI98GBSKoG%2Fr3x%2BcGn3Gzm1eF%2FSK18Lbn5dKLYSwHAqWIIhpTlN7GRwt%2F6v3wsOISlXZfqvzM4fXZ9UJCZdn8Oy%2Bfm7DpPMQQ%2BJWOEeqhx1%2BKWBJliVxdrs52BCagmfRLfTqS4MoCE%2BODe%2B9RQQF5Ya4lhTz1B0TxPWL2libStOlg0QnFpYe89zaLgRftNQeG7ImNS04qPotmiju2ySlUeNdA6%2FV9fIzbzG7p8a7dJU66khKHSq2kfDyifFquOxTrwEJJeaTpmFrIHQxgkfcD9A4q8UkKYxcltPjFzTD4%2FdLJBjqkAQM4tLUgfFrzEH3Y3JjQTrhjsiacwRl71K%2F9i3qcGEbT%2BgkTzLlpODyrAfCSAwvc65byukq4FBgDrD6dhbYWu3gR%2FXzXYsyHO4XC9ogXZwctvdbltXLXB4vgvB2FpUufQvn6moetK5L1AAzo6dN8dtzcXnn3wCSlsoeyuRt5odvGDkPi1WaQGqrjmb087aLwZJ0WqLTtArrmk8vj8LRlN8%2B6glbm&X-Amz-Signature=c1d44c30c13ffda1178a752fc2a0fae2df19decb6144f83e1f05f76277a82365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

