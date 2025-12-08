---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3AWATBG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGtwwIFDUHVA7lS8xS2u37B2jJGUeNsTLAkw8Jk0Wa2AIgeePozilFOdDqhynyNKOWM3LprBj8tF0zjXZuJiCEjZcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjPxDikvZZMPUOvDyrcAy4DlEadpdF5qI6zgD05%2BpBbaXzRi%2BnNcI245C%2BdZCC8l3wnz%2F6pDWUlrvrleoo%2BxJbxTGtZzJZDB6J7yOP36oOkw23JXvwSUd3w3f8k2dmGwEVz9lCZZprAGdPaXMB778MZoggMyV1WVPm4jNNIWGLbreyGzxG5DE6kcAdl%2BRjVrdSpxTXWLL7c%2B8tYFADiZkfzleKuRIhyEqdMGla0a1uvE%2FtJIik%2Ff8o3FRBJK1IeMNMsfVVTvTvm4vuhAj6hDlGdMHKSp4gq3fDUF1VhMVmbcBcZPoXZt2AID3sF5WlH%2FvRORkdqBxGmVhRlqKeXRw7Pxf8MG51PyJK%2BeruMapIoG2ZZTlrpTA%2Fx0wQyySZHA%2Fk5j8CIiLxVKFcj%2BbNRsvtT4H%2FZYi26S6HYtLXS%2Fsgk8m0jVXibAU40nK7IK1zidtvVSy8xFgAFiiCTY5v9QRoRsjfRd6xFkA6zFVaUqcipP44grITGu3H9R9WIXsWVudlmlXphin4iX1gaJJNaRqmi1zgL49ZlGhvMn27M1uay6l2fiQH3QzmvpN%2BrGKx8pGfIMEI40h5mwvvsnMjC6TLl7zIOQSJxT4jLElVMN1fnDnOApUXmr3q6TMhgR5CX3MfLeyB4pf%2BFIYPtMJqH3MkGOqUBWJyVMUQ6pTEcWoPuv4mYVPjGD2cspPuzTqBRRtxqmmItSP7FvAFh5O7rRu9LpMkXOZbgBXt3j43%2FKWDw6NtdOEFkq27iz%2FXogEQSNBMrI2npIL%2BFiH3A4sgAvlQZkJdw%2F5qYN4zky5eQo2QYN1fcKJLxe4t3I1TYG6jylSc3AgS4B2GXIkJQjiMPHwSdsFDE1OTtmiD%2FCiB6wIiDoHs1ElzFQk3D&X-Amz-Signature=4a4fa8b39e489f980c2c123d9b74cc1b8d9c444ce379dd0a4c84e667aebccb9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3AWATBG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGtwwIFDUHVA7lS8xS2u37B2jJGUeNsTLAkw8Jk0Wa2AIgeePozilFOdDqhynyNKOWM3LprBj8tF0zjXZuJiCEjZcqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMjPxDikvZZMPUOvDyrcAy4DlEadpdF5qI6zgD05%2BpBbaXzRi%2BnNcI245C%2BdZCC8l3wnz%2F6pDWUlrvrleoo%2BxJbxTGtZzJZDB6J7yOP36oOkw23JXvwSUd3w3f8k2dmGwEVz9lCZZprAGdPaXMB778MZoggMyV1WVPm4jNNIWGLbreyGzxG5DE6kcAdl%2BRjVrdSpxTXWLL7c%2B8tYFADiZkfzleKuRIhyEqdMGla0a1uvE%2FtJIik%2Ff8o3FRBJK1IeMNMsfVVTvTvm4vuhAj6hDlGdMHKSp4gq3fDUF1VhMVmbcBcZPoXZt2AID3sF5WlH%2FvRORkdqBxGmVhRlqKeXRw7Pxf8MG51PyJK%2BeruMapIoG2ZZTlrpTA%2Fx0wQyySZHA%2Fk5j8CIiLxVKFcj%2BbNRsvtT4H%2FZYi26S6HYtLXS%2Fsgk8m0jVXibAU40nK7IK1zidtvVSy8xFgAFiiCTY5v9QRoRsjfRd6xFkA6zFVaUqcipP44grITGu3H9R9WIXsWVudlmlXphin4iX1gaJJNaRqmi1zgL49ZlGhvMn27M1uay6l2fiQH3QzmvpN%2BrGKx8pGfIMEI40h5mwvvsnMjC6TLl7zIOQSJxT4jLElVMN1fnDnOApUXmr3q6TMhgR5CX3MfLeyB4pf%2BFIYPtMJqH3MkGOqUBWJyVMUQ6pTEcWoPuv4mYVPjGD2cspPuzTqBRRtxqmmItSP7FvAFh5O7rRu9LpMkXOZbgBXt3j43%2FKWDw6NtdOEFkq27iz%2FXogEQSNBMrI2npIL%2BFiH3A4sgAvlQZkJdw%2F5qYN4zky5eQo2QYN1fcKJLxe4t3I1TYG6jylSc3AgS4B2GXIkJQjiMPHwSdsFDE1OTtmiD%2FCiB6wIiDoHs1ElzFQk3D&X-Amz-Signature=f722d4c0cdb014689937f51a138d534b339af0448bf2cdf3a15b88c5b2bc9a73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

