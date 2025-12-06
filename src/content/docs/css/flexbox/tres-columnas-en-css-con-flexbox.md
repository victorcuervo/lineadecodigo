---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJCULME%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsRk3r2%2F9B8roRgmlHfIx4z2kx9DudFq8LQyrtz6zSZQIhAPoqXyV9Y4UP72uCL9HLr5Tkuxx0GgekZSo9vGWaWxYZKv8DCGwQABoMNjM3NDIzMTgzODA1Igz2chf3FFdlO1WyJBMq3AOU79uRky4FjnzrQ%2BDEbKxBdHNEsMsxhuzicH%2Bt2hk1ChrJoNW20vjB2wPVF7o4UnPBWqhJ3clhxqGQHMcEPhW%2BinivigwZVcNdme%2FXLZo5HCBz%2BSLDkeptGAlKqYx98xhrsJI37iB5BURD3%2F0G8%2FmGdXN52FGuWcHiqzoBda39cVOWMSRgk2F4%2FafSI7QvAF5KYn9lzPCuo%2B%2BtSqMEcEe5E6KYMa2jTaG86z6dY8K3mbpHTLpwhf9wKppoRJA%2F8BJV7UmgNDdJxyj4brgN4ZZa7wQPuIKecRem0DW09zuhu3%2FH604osxd260dF7Dlljepsntk15fdZsSpnFj9R7Ns5xxt0bzfNDHhG%2FokA2r8h1mY3Kw0fOUo5FYTTNtzyF6UtoSTZGXd3VdTO1CqM2dyhzeIiPcL2nCTcznXCTZME10wN99NBmiPCJn9JHeiGuFLeTU3IJX%2BLa3WQi3bq6oMwq1LE%2FD5NVvozhmRZ4%2B821TI1PetE5jzflGXbbgqnFcSrQgkzAFTxaOlnvlZJqKoaBXgkJasX7Z8GPiMRweDtIJuarpLn4RzVVuMFWHjUTEyH7gUf4M5cRZ%2FYJ2oREQuB247%2FficKId5V7m7zn6IPiSZmOYqHrbEFqI6VDzC%2Bws7JBjqkAXi26QFT%2BawBNKSKfuysoGDZS1bYhz5ibT7D7nypUYq9ZgGmdou039Z3RSPPzsTS7BHEFbrx6bYI0aEy85VDTK1BpHKsXxW2g5cfUR%2BXFOW6nmVZDsSK3z9G4v3RBuNyteNrpZmuC47%2FdZqL7aDI1iBRBl7oWHGgSl%2BwvojIRK%2BuQ8X3cEzBao2yCovFPuD2zpvwyUQNZa45almCsU1EyMa09A8V&X-Amz-Signature=b15ff1a31dfd731df697ceec0f162ca932f90ddd081efc5b0e681ea724ff4f3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJCULME%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsRk3r2%2F9B8roRgmlHfIx4z2kx9DudFq8LQyrtz6zSZQIhAPoqXyV9Y4UP72uCL9HLr5Tkuxx0GgekZSo9vGWaWxYZKv8DCGwQABoMNjM3NDIzMTgzODA1Igz2chf3FFdlO1WyJBMq3AOU79uRky4FjnzrQ%2BDEbKxBdHNEsMsxhuzicH%2Bt2hk1ChrJoNW20vjB2wPVF7o4UnPBWqhJ3clhxqGQHMcEPhW%2BinivigwZVcNdme%2FXLZo5HCBz%2BSLDkeptGAlKqYx98xhrsJI37iB5BURD3%2F0G8%2FmGdXN52FGuWcHiqzoBda39cVOWMSRgk2F4%2FafSI7QvAF5KYn9lzPCuo%2B%2BtSqMEcEe5E6KYMa2jTaG86z6dY8K3mbpHTLpwhf9wKppoRJA%2F8BJV7UmgNDdJxyj4brgN4ZZa7wQPuIKecRem0DW09zuhu3%2FH604osxd260dF7Dlljepsntk15fdZsSpnFj9R7Ns5xxt0bzfNDHhG%2FokA2r8h1mY3Kw0fOUo5FYTTNtzyF6UtoSTZGXd3VdTO1CqM2dyhzeIiPcL2nCTcznXCTZME10wN99NBmiPCJn9JHeiGuFLeTU3IJX%2BLa3WQi3bq6oMwq1LE%2FD5NVvozhmRZ4%2B821TI1PetE5jzflGXbbgqnFcSrQgkzAFTxaOlnvlZJqKoaBXgkJasX7Z8GPiMRweDtIJuarpLn4RzVVuMFWHjUTEyH7gUf4M5cRZ%2FYJ2oREQuB247%2FficKId5V7m7zn6IPiSZmOYqHrbEFqI6VDzC%2Bws7JBjqkAXi26QFT%2BawBNKSKfuysoGDZS1bYhz5ibT7D7nypUYq9ZgGmdou039Z3RSPPzsTS7BHEFbrx6bYI0aEy85VDTK1BpHKsXxW2g5cfUR%2BXFOW6nmVZDsSK3z9G4v3RBuNyteNrpZmuC47%2FdZqL7aDI1iBRBl7oWHGgSl%2BwvojIRK%2BuQ8X3cEzBao2yCovFPuD2zpvwyUQNZa45almCsU1EyMa09A8V&X-Amz-Signature=d6f3ba67ab5e7c74a6b564ac6f03579dcaa9686068d9d4a0ed936f94e05fd4d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

