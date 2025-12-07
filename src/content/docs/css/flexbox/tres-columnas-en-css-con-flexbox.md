---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSVJAMK2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1%2BsAw4CfMMRyx2RHt68X6UWmS4vweHqpfQA%2BZURsQIAIgfBcb8UiOeKZbusTtXxEby2aG2ESDFK0wip7zxVYqRJoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1%2FHAQid%2FzrNjT8bircA6uWYrfZ52sIUlgvSze%2B9tu8y%2FlZqkydFHe1CRBwfERMHTuZggmD7hLH3OBD517Tmgr7gSO9KD69FUovLV5jeWS5xX1ppS9Qs%2FSrXnd4kYo6kff6YeGoxraClfoxj%2FMNnAjaHyWemkek3poVo7rcq8%2Behn2JPGO%2B320jDUGtjKONic5vKT8q%2BB6dHABYVcLGqriub5xEic4NYmWCY7VGYsfcV1oxnTwbtQ63WWeKRmYr4c%2Fev6%2FcZSeajfMhkY6OgjNzsrh0H7S2wa6inM506K96oIcqVrvesWG%2BYXTazdbo%2FjJ631UrzcPkHswegJ9hBFUdzPwXIlmPfej4w9xVf2xNxKSgJPMmCr5crq4LmmEokEsCQkF%2FGoHhbuC9O2F4WzpbxiRSeU4Qcqq2DHM8o4MGtL4laFki6CjaeYOGqImr9oQ7f7%2FJyWiXbIX%2Bj57LAkO0cDLho3Q9AmzRV%2FisXPm%2FiFN15%2FtISXVefgUoi9Wf4y7%2FNKfVUf5Mg9i2%2FRuwGamzV2IbEJcQdgQlbPp4iDoQjjWJuZKiNa2FPO35VGDqup317Duwc9%2BxjyPsOGZBx0MKAnGdRVIboHMiNgzRdUnr1ctxlbj1qW2aNZaIibRmJbopMKRnL2SXZW3TMPa01skGOqUBtbN%2BUdkYiriaqHxpXLtBbgdF1N5gq9oga0HDY1ZERYFZlHarC32GuOJllJz1JLn0WOaGktpzwA3ITk4bbWC%2BwghpDqynUmitjBSdu5Pueq9OX%2Fk18J5Rb%2FERn6nPPL%2B03%2BfKqKLxd2vUbajeTQGatsX1MzePQTyWVLETO3tRqljM%2FHvfPom5Kv7OLoL91cioMhUSi%2F%2BABz4%2BvH5gMy7TtLxSH1jH&X-Amz-Signature=458dcaa77fef4bc19085b9eab8786b9bd6ef83767f02a8d026ac75c8e9b2b735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSVJAMK2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1%2BsAw4CfMMRyx2RHt68X6UWmS4vweHqpfQA%2BZURsQIAIgfBcb8UiOeKZbusTtXxEby2aG2ESDFK0wip7zxVYqRJoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN1%2FHAQid%2FzrNjT8bircA6uWYrfZ52sIUlgvSze%2B9tu8y%2FlZqkydFHe1CRBwfERMHTuZggmD7hLH3OBD517Tmgr7gSO9KD69FUovLV5jeWS5xX1ppS9Qs%2FSrXnd4kYo6kff6YeGoxraClfoxj%2FMNnAjaHyWemkek3poVo7rcq8%2Behn2JPGO%2B320jDUGtjKONic5vKT8q%2BB6dHABYVcLGqriub5xEic4NYmWCY7VGYsfcV1oxnTwbtQ63WWeKRmYr4c%2Fev6%2FcZSeajfMhkY6OgjNzsrh0H7S2wa6inM506K96oIcqVrvesWG%2BYXTazdbo%2FjJ631UrzcPkHswegJ9hBFUdzPwXIlmPfej4w9xVf2xNxKSgJPMmCr5crq4LmmEokEsCQkF%2FGoHhbuC9O2F4WzpbxiRSeU4Qcqq2DHM8o4MGtL4laFki6CjaeYOGqImr9oQ7f7%2FJyWiXbIX%2Bj57LAkO0cDLho3Q9AmzRV%2FisXPm%2FiFN15%2FtISXVefgUoi9Wf4y7%2FNKfVUf5Mg9i2%2FRuwGamzV2IbEJcQdgQlbPp4iDoQjjWJuZKiNa2FPO35VGDqup317Duwc9%2BxjyPsOGZBx0MKAnGdRVIboHMiNgzRdUnr1ctxlbj1qW2aNZaIibRmJbopMKRnL2SXZW3TMPa01skGOqUBtbN%2BUdkYiriaqHxpXLtBbgdF1N5gq9oga0HDY1ZERYFZlHarC32GuOJllJz1JLn0WOaGktpzwA3ITk4bbWC%2BwghpDqynUmitjBSdu5Pueq9OX%2Fk18J5Rb%2FERn6nPPL%2B03%2BfKqKLxd2vUbajeTQGatsX1MzePQTyWVLETO3tRqljM%2FHvfPom5Kv7OLoL91cioMhUSi%2F%2BABz4%2BvH5gMy7TtLxSH1jH&X-Amz-Signature=a1f7a749973404c772294dbfd7ab1cd9dada46f0f17cdae5bbe071e110301199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

