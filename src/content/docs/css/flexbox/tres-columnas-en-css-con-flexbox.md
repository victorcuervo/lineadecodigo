---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MOEEQNX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWtaxkYXYmDLIFmw%2FbzN3KfjexWI4HJ0ftKXrStW0URAiEA7KSYxM08E%2BHv21FFwJFSp%2F30Jt06xhdulBZgtct4sIYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGDY4y4jmsJ8sGbIjCrcA8ivxPI9O0K6aX4E5RuGB9l2btaD%2Fk0KOGqSw0Xl8zP9Cg%2B4HJljwjHuBSLWnAtllGvAuKRiUh9rduXk%2BX%2BFL7GQdL5oHTn%2F16awXynhpetpX1UMDvYU24qq2YOsaZEuI1NIpsZq%2BbYh%2FI36Nqwawmspcz2gn0IhbCp0MysbVwr5RUcOM4k%2FndRqPBGkcTJakbsrlWMzq36LqB8oJqQetPHscE0%2FNR1mJEyn40JJuGIaTYGhlIkvHVuZuNIdL2rNCQWKYpl8%2FT4gOw9x9ObCdJ6hIs1yT3lmp4PmdftD7smR7kiBQgbF7h61TZUYBfDpShCMmbdF9NfGd25Zij2v5C76Xdf0KU9QrdCyE6jZg6HeZS744Cqt7xnQQrAZF%2BFDrXU6iR8Y4JLUqHd2ZwquQ1s76KKp82R40OJIbvACfLvxrD%2BwxkbavYPLjIk%2Feub0G%2BW2FiMXTobEPLGBHZIEFMYrqdTLWAO9XcKg3UqNxcwhEsU59jU24MYaqmORS8ojAzGam9kJO8a0ZsVJ2rJeBC4ZMpelsc8RUI%2BvSesHSzTVmRGt%2FQEeR5XDP3XpNFUlvqtIpHzuXQFv0IPZZk9YphzmZhUJgkmWIfg49%2BjArspaiyXK6Rwj%2BeS9QZyGMNa8z8kGOqUBEnUMHxP6ITKIsjJISwS9AmBvdqvzVFih%2Ff9XOrlBuRe3lK8sJWFhoTUkaC1fzhAdFNk4K1XothtyBg0cXifw1Pvz7zMusviwIV08HkDr9dtFW1QRsu2pOvWtbFN8rGHp44DsVUQH5CbXuEp3l18Rv%2FgK4dU0TzTuB6lDCkomcZwApF3nw%2F1hQYDkSFsy6xEW3boIypzooR%2Br8Pv2g%2BOaXVla%2FA%2Fc&X-Amz-Signature=ce9003100ba436564d049af6b8b5f2f425af7bb13264f02a0bb15f0fa48b6842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MOEEQNX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T080603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDWtaxkYXYmDLIFmw%2FbzN3KfjexWI4HJ0ftKXrStW0URAiEA7KSYxM08E%2BHv21FFwJFSp%2F30Jt06xhdulBZgtct4sIYq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGDY4y4jmsJ8sGbIjCrcA8ivxPI9O0K6aX4E5RuGB9l2btaD%2Fk0KOGqSw0Xl8zP9Cg%2B4HJljwjHuBSLWnAtllGvAuKRiUh9rduXk%2BX%2BFL7GQdL5oHTn%2F16awXynhpetpX1UMDvYU24qq2YOsaZEuI1NIpsZq%2BbYh%2FI36Nqwawmspcz2gn0IhbCp0MysbVwr5RUcOM4k%2FndRqPBGkcTJakbsrlWMzq36LqB8oJqQetPHscE0%2FNR1mJEyn40JJuGIaTYGhlIkvHVuZuNIdL2rNCQWKYpl8%2FT4gOw9x9ObCdJ6hIs1yT3lmp4PmdftD7smR7kiBQgbF7h61TZUYBfDpShCMmbdF9NfGd25Zij2v5C76Xdf0KU9QrdCyE6jZg6HeZS744Cqt7xnQQrAZF%2BFDrXU6iR8Y4JLUqHd2ZwquQ1s76KKp82R40OJIbvACfLvxrD%2BwxkbavYPLjIk%2Feub0G%2BW2FiMXTobEPLGBHZIEFMYrqdTLWAO9XcKg3UqNxcwhEsU59jU24MYaqmORS8ojAzGam9kJO8a0ZsVJ2rJeBC4ZMpelsc8RUI%2BvSesHSzTVmRGt%2FQEeR5XDP3XpNFUlvqtIpHzuXQFv0IPZZk9YphzmZhUJgkmWIfg49%2BjArspaiyXK6Rwj%2BeS9QZyGMNa8z8kGOqUBEnUMHxP6ITKIsjJISwS9AmBvdqvzVFih%2Ff9XOrlBuRe3lK8sJWFhoTUkaC1fzhAdFNk4K1XothtyBg0cXifw1Pvz7zMusviwIV08HkDr9dtFW1QRsu2pOvWtbFN8rGHp44DsVUQH5CbXuEp3l18Rv%2FgK4dU0TzTuB6lDCkomcZwApF3nw%2F1hQYDkSFsy6xEW3boIypzooR%2Br8Pv2g%2BOaXVla%2FA%2Fc&X-Amz-Signature=525cdcf17e1db6a1be627f662fd8c698c66c299318eb7df7a3cfc5a1ac595759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

