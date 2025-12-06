---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP33AVRR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB0bdhDiyyDtWHB%2F7psBDH6RDzZJXzsCXaqo%2Bl%2Biyx5MAiEAnW%2BSTqDbOHHjFctPNbHjk40RrJB2XmIW0R2CTDw78pUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLk%2B%2B6vjf1q2IAQgPyrcA%2BFw6kh9c9MWpy2FqSaADHBxXaQkNaq3T3bF8S%2FCONw2HzO9HJ2wYxF7VmdjTIEZGH0g9AGI5AkuPRyh2%2FnSdqaddxuFSV1D4R4h1FUn1mdEPis77VGJhd3cpEaxfdAxmLvhWslRkuT8Fk60lUK2MG%2FUqCKkSF7a8gMreHDRzriTLVoFvKydVGACsSFYOliKNL6vCmobEmTtKbQ003VzSm%2BQh%2BldvzZ5iDc6cKPJ%2Fv7QXNNjXsJJCgbAMu9xcRborNKkiCzp%2Bog%2FaX5Ws8%2B2x0yxvLOce2iJmTDqe7alj7iJZ6E5Dx6CgOImfz%2BUUeKqTmaeXjTEsMG%2BXeYlgtGb98XOz9dqJTX3lEykOHqAlIh0RgE4vvl5vEW2H3v86Aj6tXdvG%2FOBpaaAjJf1ST6CwRNbmQuohgFdnmfLIOpaQ0JyLyUfTGRIECU0E8xDWEJnA%2BCgdpJ%2FAhF2FhysN03r6RJ1aWgbifrpNeitx2UXPptxQ%2FHYH0da0hQZDQCnzPJ5sqeL3jajfF%2F1NGiWrx4utAcPR%2Fcga0CH3ke88AhuCNiIMUb0lqhWi3l1lXhQEtaJNQicBW71y%2F6ani10CPHW953rkttDtUNjPQfSxCNSB0At6XugC0OIqwIDJLzHMKLH0ckGOqUBY61SZRRyQqTHfCmlvRaZ2sHjgvrEW9ZmuvEqVSjDUGgLfG6%2FVlAy6ZGY8bDDRK58mXBOCF6QnfCVyADVhr41oTJNSFytFvLHIsuTVo%2F6a9mFK7mPHHX9ymvjL0CUkHuWpbr0BeMytpJ6rqbw0PYkTXZmxIONwwBRFk%2BGRPLO6BNXNm8oGbQFgT6041wy8VTItz9RcvITwg3fmiGtdUcsMhzPjnrg&X-Amz-Signature=ac68136f0bc11545bd69b74a459a3376e5065656a7344f312b1b1b746abde54d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP33AVRR%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB0bdhDiyyDtWHB%2F7psBDH6RDzZJXzsCXaqo%2Bl%2Biyx5MAiEAnW%2BSTqDbOHHjFctPNbHjk40RrJB2XmIW0R2CTDw78pUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLk%2B%2B6vjf1q2IAQgPyrcA%2BFw6kh9c9MWpy2FqSaADHBxXaQkNaq3T3bF8S%2FCONw2HzO9HJ2wYxF7VmdjTIEZGH0g9AGI5AkuPRyh2%2FnSdqaddxuFSV1D4R4h1FUn1mdEPis77VGJhd3cpEaxfdAxmLvhWslRkuT8Fk60lUK2MG%2FUqCKkSF7a8gMreHDRzriTLVoFvKydVGACsSFYOliKNL6vCmobEmTtKbQ003VzSm%2BQh%2BldvzZ5iDc6cKPJ%2Fv7QXNNjXsJJCgbAMu9xcRborNKkiCzp%2Bog%2FaX5Ws8%2B2x0yxvLOce2iJmTDqe7alj7iJZ6E5Dx6CgOImfz%2BUUeKqTmaeXjTEsMG%2BXeYlgtGb98XOz9dqJTX3lEykOHqAlIh0RgE4vvl5vEW2H3v86Aj6tXdvG%2FOBpaaAjJf1ST6CwRNbmQuohgFdnmfLIOpaQ0JyLyUfTGRIECU0E8xDWEJnA%2BCgdpJ%2FAhF2FhysN03r6RJ1aWgbifrpNeitx2UXPptxQ%2FHYH0da0hQZDQCnzPJ5sqeL3jajfF%2F1NGiWrx4utAcPR%2Fcga0CH3ke88AhuCNiIMUb0lqhWi3l1lXhQEtaJNQicBW71y%2F6ani10CPHW953rkttDtUNjPQfSxCNSB0At6XugC0OIqwIDJLzHMKLH0ckGOqUBY61SZRRyQqTHfCmlvRaZ2sHjgvrEW9ZmuvEqVSjDUGgLfG6%2FVlAy6ZGY8bDDRK58mXBOCF6QnfCVyADVhr41oTJNSFytFvLHIsuTVo%2F6a9mFK7mPHHX9ymvjL0CUkHuWpbr0BeMytpJ6rqbw0PYkTXZmxIONwwBRFk%2BGRPLO6BNXNm8oGbQFgT6041wy8VTItz9RcvITwg3fmiGtdUcsMhzPjnrg&X-Amz-Signature=d3f7064f53205f84eda05c4ebb816d383910354f60db92d736962fdeb5755ed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

