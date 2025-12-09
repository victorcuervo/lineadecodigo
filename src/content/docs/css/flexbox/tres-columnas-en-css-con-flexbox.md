---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7WNEIVI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZiwUrJJGM%2Fk615r1cfCHKQ6MryMjlqvnxYX0VRmgRRwIgTaD8Uctk5wFYhLoaDIw28ewoxlFLKYpvDhd0wCRYy8MqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyQjDKmprlJeIV%2BqSrcA5W6GObDFs5m58urraoyk3ukiVBrV%2BYHy0fOdVCK33bfi%2FZod7TpVlcEiqTfTCPJdmuOb%2BXvP27LV6Uu3BP55aRcrcbs3Fiok5E8ejL3c4%2FnL4KTPosfC2%2Bm2elURzeDIf%2F3vuUrBX2gzEgbKelcbGOm0B%2Fqfej%2F5M6PlmoiXjClWhpdRKW4wxYqskMGQGugECTVFBthAWiFJ0rD73FWQ4VOSP0y4CzlCuQdkSEmohDq0rXI7Osh6YOfBTZ7WS%2B47tcgj2FTcGdIQb5GxO%2F8Doplq%2BYjoW6nei%2BVPgkLXHPOXzPMOvlvKAV4elrzpyBSgQw75rNyq1mBKAQyBifE9WIfGQ41j8EYOD9lobL5MbIVHR9%2F6AU5D8NTR6oLmUS8r5m5Hkk1iyTmBFJsOe0nM6lZux8EXSGVq440CbrfbgYmfkvvtDZwZJbjWqZEyA1zypxoRM9U0TquGiVo0z8lVytIjlLeRiZjEMBo%2BUG7BdQaA8%2F0nODIic2vdXQj45BzV7qSwvbx0j8bwFiEfuGTqBlNcAcEZn0pDmxmhuuSomKHBKW7mq%2BEY1sJbLJ%2FaqeBaKEsdA4iOunJ5qHB3Jy%2FuhAtu6HJ5%2FhDEoMdIhYO8waZSQyM930EyVfSE8S9MIek38kGOqUBVX%2BUd3UBHGwUXluJEU3NLkQ8Bj2sGDnGAH8%2B%2FHSS5UogfIGbUSe6tefSQEmRG0LYaJDF%2Fx2%2B2snbJaHsmn5N8ShrFv6L%2BsroMIvd3hl8PyoWQwtnfaAZSbE9DcptTrWFsgIeTiS9Y8OpDd2Df8mNxr19nMjV%2F7c1Gi17T7dfqoq9cf7hlKlMuLl9scPUrHZ2c4ujbVDByQLsjlx6acI40j0hH38o&X-Amz-Signature=5db8aacc862d8434a6a345df65375f584c83332fc9dd12b9bace6176c2909d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7WNEIVI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZiwUrJJGM%2Fk615r1cfCHKQ6MryMjlqvnxYX0VRmgRRwIgTaD8Uctk5wFYhLoaDIw28ewoxlFLKYpvDhd0wCRYy8MqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFyQjDKmprlJeIV%2BqSrcA5W6GObDFs5m58urraoyk3ukiVBrV%2BYHy0fOdVCK33bfi%2FZod7TpVlcEiqTfTCPJdmuOb%2BXvP27LV6Uu3BP55aRcrcbs3Fiok5E8ejL3c4%2FnL4KTPosfC2%2Bm2elURzeDIf%2F3vuUrBX2gzEgbKelcbGOm0B%2Fqfej%2F5M6PlmoiXjClWhpdRKW4wxYqskMGQGugECTVFBthAWiFJ0rD73FWQ4VOSP0y4CzlCuQdkSEmohDq0rXI7Osh6YOfBTZ7WS%2B47tcgj2FTcGdIQb5GxO%2F8Doplq%2BYjoW6nei%2BVPgkLXHPOXzPMOvlvKAV4elrzpyBSgQw75rNyq1mBKAQyBifE9WIfGQ41j8EYOD9lobL5MbIVHR9%2F6AU5D8NTR6oLmUS8r5m5Hkk1iyTmBFJsOe0nM6lZux8EXSGVq440CbrfbgYmfkvvtDZwZJbjWqZEyA1zypxoRM9U0TquGiVo0z8lVytIjlLeRiZjEMBo%2BUG7BdQaA8%2F0nODIic2vdXQj45BzV7qSwvbx0j8bwFiEfuGTqBlNcAcEZn0pDmxmhuuSomKHBKW7mq%2BEY1sJbLJ%2FaqeBaKEsdA4iOunJ5qHB3Jy%2FuhAtu6HJ5%2FhDEoMdIhYO8waZSQyM930EyVfSE8S9MIek38kGOqUBVX%2BUd3UBHGwUXluJEU3NLkQ8Bj2sGDnGAH8%2B%2FHSS5UogfIGbUSe6tefSQEmRG0LYaJDF%2Fx2%2B2snbJaHsmn5N8ShrFv6L%2BsroMIvd3hl8PyoWQwtnfaAZSbE9DcptTrWFsgIeTiS9Y8OpDd2Df8mNxr19nMjV%2F7c1Gi17T7dfqoq9cf7hlKlMuLl9scPUrHZ2c4ujbVDByQLsjlx6acI40j0hH38o&X-Amz-Signature=b098f49d87e309dae119e23e35b0b40b5a79c6921ee3fd05442452ea3a858b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

