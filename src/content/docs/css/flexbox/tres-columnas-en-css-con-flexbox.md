---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSOXPZN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFTtHEUNt8goBwyusgc6k%2FKRHD2nifKzRUT22LHPFZNQIhAPRriqDqEH2l7Ly1rsy7ISUrqr1F%2FTeCGjLe1g4lYBzwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr76gO4zOnfrn%2B1M0q3APvERK3YXf6WNil2%2FVG1hQfuACPRC5gxh7mnkC6tTkRlPfXmOWD7sKKEZd5iJq%2BNECAs8g2awmsQI07zJF41I%2F205WvBc54xlG1AGaphMakEiVY3Ak5TFtuDQ784zmKGTyqBQbdCPJHuJRbqDtIKGRD6MAxTlRajaE691g1w0SKUgkVIpv3Um0I6NKDuRFEsWDGUH9HjqWsdOwgS93q3REkDzHCQ%2FNpFGJGU9wmgXIEaHWN7NRVMUctanHU5HtmgyVtjqYS286ZxcUdHPjEYh8gn1%2BJnqEKcElrGoYRhhZNlAoE1lAMd85Gh7ByaGWzDNCz7eRcI2KVagV8rbdNzMLSmAK5XokbFazC%2FDvIttvXgDHg6hNye6igWuGGYMA4FdlliBFglh790uJ0gqVNdqZfE2E8oxMPxIZe5Zk6e24MfHuiMjTdRKdz%2B5jbMOurAc5YZ%2B5SYheGwhXiOWHT0zGH%2BOHGUR5kBxZxkqiLnzGObD%2B%2FhQPxCsq2TW3na0O0LPwLvz9mYWkFqachn0OA1NtsGhXHr07UjKrJdgIAUjuuvqmF3Und3ykHsc5iR4KqnwWj3uibQiXDoMBzBLnn%2FSCjZvY7%2Fa3pPsWDZe2fMVbTKiq1CKERqWxOxh7%2FbDCk%2FdLJBjqkAfedeMTxUXZ3oU0XZeCDcMepHSAV%2Fd6xSJh2SIgogoQ8KdbjNQqg7nWT4r4bsfo90NfTWpWFYk5ESXzZpwVMNSOfhuq8QAnu59ljpRVfF6tyaPozBF8Th02m9pAbMeoiYSSBWd4yViYU8%2B%2BfCZ2Q1m2QohBtnZwv5XNzO%2FpttSmgnGsfqkJoomUE4Tk3PZOSk3uKvqwblvFAEIUStjFqlI37Z6dM&X-Amz-Signature=8ebf52d8cf2232535c12447a0a309afeb3910d2bbf77cab94a12f97d38f6210e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GSOXPZN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFTtHEUNt8goBwyusgc6k%2FKRHD2nifKzRUT22LHPFZNQIhAPRriqDqEH2l7Ly1rsy7ISUrqr1F%2FTeCGjLe1g4lYBzwKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwr76gO4zOnfrn%2B1M0q3APvERK3YXf6WNil2%2FVG1hQfuACPRC5gxh7mnkC6tTkRlPfXmOWD7sKKEZd5iJq%2BNECAs8g2awmsQI07zJF41I%2F205WvBc54xlG1AGaphMakEiVY3Ak5TFtuDQ784zmKGTyqBQbdCPJHuJRbqDtIKGRD6MAxTlRajaE691g1w0SKUgkVIpv3Um0I6NKDuRFEsWDGUH9HjqWsdOwgS93q3REkDzHCQ%2FNpFGJGU9wmgXIEaHWN7NRVMUctanHU5HtmgyVtjqYS286ZxcUdHPjEYh8gn1%2BJnqEKcElrGoYRhhZNlAoE1lAMd85Gh7ByaGWzDNCz7eRcI2KVagV8rbdNzMLSmAK5XokbFazC%2FDvIttvXgDHg6hNye6igWuGGYMA4FdlliBFglh790uJ0gqVNdqZfE2E8oxMPxIZe5Zk6e24MfHuiMjTdRKdz%2B5jbMOurAc5YZ%2B5SYheGwhXiOWHT0zGH%2BOHGUR5kBxZxkqiLnzGObD%2B%2FhQPxCsq2TW3na0O0LPwLvz9mYWkFqachn0OA1NtsGhXHr07UjKrJdgIAUjuuvqmF3Und3ykHsc5iR4KqnwWj3uibQiXDoMBzBLnn%2FSCjZvY7%2Fa3pPsWDZe2fMVbTKiq1CKERqWxOxh7%2FbDCk%2FdLJBjqkAfedeMTxUXZ3oU0XZeCDcMepHSAV%2Fd6xSJh2SIgogoQ8KdbjNQqg7nWT4r4bsfo90NfTWpWFYk5ESXzZpwVMNSOfhuq8QAnu59ljpRVfF6tyaPozBF8Th02m9pAbMeoiYSSBWd4yViYU8%2B%2BfCZ2Q1m2QohBtnZwv5XNzO%2FpttSmgnGsfqkJoomUE4Tk3PZOSk3uKvqwblvFAEIUStjFqlI37Z6dM&X-Amz-Signature=c8bac53757b0c5bf09549a5d22a55b7c6f6290e910cca8bf3441cd30a8557d44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

