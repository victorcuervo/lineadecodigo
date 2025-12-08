---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S43UFR7Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjtpZSOPooPqSxQD1hhECg357duYlskDC4dqCzV%2BABSAIhAII2V2ubaYNUIod420WPnm29kqJbzd2Uahn4Guzn0s%2BdKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0VAJAXSnt%2FQOTbnIq3AMaJHABICZYrgt7r4ss82CVjs7EQwY2ulzgELTqnWGFHpFaxQS2JewKgVfXlDiNF7e1c1yK1Ak2qxRqvHguzOY%2F3vUuIEIcsM1Rl%2FyuskkFdR7i4j5a7CU80JYekiwFt4QE63LKQjRhJcX71pWXgxhUKKgNg0SlnkfYUR0gUEXMpBPtfOUVfjmnHFZF1vyb%2BTGwEWN6Q3vJEB9%2FS74Ld1j%2BUZ5opYEdhfOQP7%2BtiBnYqCSbozwJYrZzGiA%2FAo3S69c3TigLv1sP5Nt7C67GvnkAbmI1FsEhdHgE0X2DhE34Rm1KILQMf7goQ9asinyh6x8Ex4SWcbRXGtT8S7BxjebskYeTgzri3so5aEtH4f%2BHgpkxjGLFc6%2FVc1%2BavNGJu6klp8PcGS1r7gYeok265sBCRAJaKyXlNqCOY6bFyUf%2Fe86iuLzKaLvJb%2BWoOnbeSCOjTzJwiBWF9X8SA0HII45Uk%2FHHbH8N1fxS%2FoWNxWfmeqU9zdKrOi%2BrAmOABs0kxrPeZDtpWYvo%2BD1CljxO5KzEfGt5mZFTqRjxZKJSsxtG%2FePAzBboA49mssBD64YWH28VJlNNl0EBYwJCsQU2fm5tZrNw%2BcUYu7mJsufPB4SIREan8LB%2F8b9uS5ldkTD6wdvJBjqkAY48lZQB0bY6hwKf%2BmHGimiULk0%2BnMpcNRFTN9jWKuI5ycxgeG4yCRIee9qqBJykcG%2FVOb%2F92tveANSq%2F36fIoZQuk2LV4wqb3gt1kEarUXgPFSIHIpGo%2FDCcUuUj%2F6bHqiOsiRgbCvIBMf9jnJdD3dcLmLULS5pdVhiNnNVl6%2Bf18iiWVnKkz%2FMRWNIbvY8TL%2B5cy19msbGfhX2QTm7cvLsH06s&X-Amz-Signature=63f0362664e820028d97834286d3d5143bab4b6197331291e6cd3b12274706dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S43UFR7Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjtpZSOPooPqSxQD1hhECg357duYlskDC4dqCzV%2BABSAIhAII2V2ubaYNUIod420WPnm29kqJbzd2Uahn4Guzn0s%2BdKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0VAJAXSnt%2FQOTbnIq3AMaJHABICZYrgt7r4ss82CVjs7EQwY2ulzgELTqnWGFHpFaxQS2JewKgVfXlDiNF7e1c1yK1Ak2qxRqvHguzOY%2F3vUuIEIcsM1Rl%2FyuskkFdR7i4j5a7CU80JYekiwFt4QE63LKQjRhJcX71pWXgxhUKKgNg0SlnkfYUR0gUEXMpBPtfOUVfjmnHFZF1vyb%2BTGwEWN6Q3vJEB9%2FS74Ld1j%2BUZ5opYEdhfOQP7%2BtiBnYqCSbozwJYrZzGiA%2FAo3S69c3TigLv1sP5Nt7C67GvnkAbmI1FsEhdHgE0X2DhE34Rm1KILQMf7goQ9asinyh6x8Ex4SWcbRXGtT8S7BxjebskYeTgzri3so5aEtH4f%2BHgpkxjGLFc6%2FVc1%2BavNGJu6klp8PcGS1r7gYeok265sBCRAJaKyXlNqCOY6bFyUf%2Fe86iuLzKaLvJb%2BWoOnbeSCOjTzJwiBWF9X8SA0HII45Uk%2FHHbH8N1fxS%2FoWNxWfmeqU9zdKrOi%2BrAmOABs0kxrPeZDtpWYvo%2BD1CljxO5KzEfGt5mZFTqRjxZKJSsxtG%2FePAzBboA49mssBD64YWH28VJlNNl0EBYwJCsQU2fm5tZrNw%2BcUYu7mJsufPB4SIREan8LB%2F8b9uS5ldkTD6wdvJBjqkAY48lZQB0bY6hwKf%2BmHGimiULk0%2BnMpcNRFTN9jWKuI5ycxgeG4yCRIee9qqBJykcG%2FVOb%2F92tveANSq%2F36fIoZQuk2LV4wqb3gt1kEarUXgPFSIHIpGo%2FDCcUuUj%2F6bHqiOsiRgbCvIBMf9jnJdD3dcLmLULS5pdVhiNnNVl6%2Bf18iiWVnKkz%2FMRWNIbvY8TL%2B5cy19msbGfhX2QTm7cvLsH06s&X-Amz-Signature=e307752c59e901990c9bef6f8cf5e93714417901946ffbe542fe5f4f02fe55ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

