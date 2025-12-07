---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUZ4RBNX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfwJi8MiZ7OlHSPdGQnF3EwKFA9D2AKJ8lIfxYMZ5tWwIhANz1xG6c43jInJLT%2FMe1bUATt5cG0nZd%2B9iqoBONc999KogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1JlUXg9eF5qk3mPkq3ANDf8EN0wXheUaJxPJXgAtX4MPW4snpy4EU6enPfRZphSdUfFZC2ZVzw2ZVui1nmGriD%2B6EBIHwJsQks69J8oYhNT1hNzStDQ%2BlQaaDLIWrTIHlr1kVwcyMcHLnvKYV5yii3EJnTLtGKfxOogM%2BRDtreZ6BMvxxnz5s18knmDWy%2BU6xAHeNmd9eL4SOxuSIxaRrCR9IXigVKAOL727keyeszegrKq%2By%2F%2Bm702pGfOc9ZxJfGfd8y3BRIZDYs8IChX%2BdX%2FqjefkDkxiGBKOVxusOEJ%2FgbdpfetQyrbCkboZAUar1z0EXo4p9TkC9p8D%2B8GaLMfc33PNHTMC%2Ftkfcjvi4Y73xWyebFXmyeL5nn7mudabpHHTXfAOkAN0%2FsQf9JE4xost%2FEfcM%2BZtno4jpjBPrfNJxLa8AZ2yrasANMjbZD%2BYt3CGKKqVZpUzsC4kLmxKESRM1gtpa%2FKp5%2BXOVbcQpbWeA%2BidCyb0QTgrNlE3l7vZzPhX9ZEigHFsgHQ4GvcZtrxp9LLWYvOdLIvtgd0pkRZEEy1SSaPS4AsDy%2F8LWisSwh5WdOf2LtcaWlF3Ccv2U3y%2BeqnRi4EgH4TxoHAwR8ts9Asy%2B757Pmph2ygzglyOBmDEQ1FJPVcw%2BvTCJqNfJBjqkARmeERrt3Fz1M82QLDBpjM7lf4BN0Sp%2FmnZUWC0iVfwNK3A%2F2YQg0enW7JYDcfEV5N7i6jZBJzRB0EcO%2Bv7Yoe8Uqelctw7jcgnO7UPJe%2BGKAMG71PiSxeOGJzEcSD%2BDiUP1H9YO0RrUOuYDVcUG%2BTMHXpMuj6ZoXJVSt2ke3h0OiMyfiTwohvR6Vgw0MSsQioDkBWCbh5mlt%2B8tXnneTeF6oEzR&X-Amz-Signature=5a9bdf49b6a97311c4887d76cf624a0d609e61bf5e49ccc7e4aca658ff0c8191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUZ4RBNX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfwJi8MiZ7OlHSPdGQnF3EwKFA9D2AKJ8lIfxYMZ5tWwIhANz1xG6c43jInJLT%2FMe1bUATt5cG0nZd%2B9iqoBONc999KogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz1JlUXg9eF5qk3mPkq3ANDf8EN0wXheUaJxPJXgAtX4MPW4snpy4EU6enPfRZphSdUfFZC2ZVzw2ZVui1nmGriD%2B6EBIHwJsQks69J8oYhNT1hNzStDQ%2BlQaaDLIWrTIHlr1kVwcyMcHLnvKYV5yii3EJnTLtGKfxOogM%2BRDtreZ6BMvxxnz5s18knmDWy%2BU6xAHeNmd9eL4SOxuSIxaRrCR9IXigVKAOL727keyeszegrKq%2By%2F%2Bm702pGfOc9ZxJfGfd8y3BRIZDYs8IChX%2BdX%2FqjefkDkxiGBKOVxusOEJ%2FgbdpfetQyrbCkboZAUar1z0EXo4p9TkC9p8D%2B8GaLMfc33PNHTMC%2Ftkfcjvi4Y73xWyebFXmyeL5nn7mudabpHHTXfAOkAN0%2FsQf9JE4xost%2FEfcM%2BZtno4jpjBPrfNJxLa8AZ2yrasANMjbZD%2BYt3CGKKqVZpUzsC4kLmxKESRM1gtpa%2FKp5%2BXOVbcQpbWeA%2BidCyb0QTgrNlE3l7vZzPhX9ZEigHFsgHQ4GvcZtrxp9LLWYvOdLIvtgd0pkRZEEy1SSaPS4AsDy%2F8LWisSwh5WdOf2LtcaWlF3Ccv2U3y%2BeqnRi4EgH4TxoHAwR8ts9Asy%2B757Pmph2ygzglyOBmDEQ1FJPVcw%2BvTCJqNfJBjqkARmeERrt3Fz1M82QLDBpjM7lf4BN0Sp%2FmnZUWC0iVfwNK3A%2F2YQg0enW7JYDcfEV5N7i6jZBJzRB0EcO%2Bv7Yoe8Uqelctw7jcgnO7UPJe%2BGKAMG71PiSxeOGJzEcSD%2BDiUP1H9YO0RrUOuYDVcUG%2BTMHXpMuj6ZoXJVSt2ke3h0OiMyfiTwohvR6Vgw0MSsQioDkBWCbh5mlt%2B8tXnneTeF6oEzR&X-Amz-Signature=c2d1c22141b40116c0f6a8e81856aa829431a031ddf05d4af46bc63ac0c8d699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

