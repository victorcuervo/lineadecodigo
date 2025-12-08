---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIYMEKBC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbJnaGp%2BKhPjy8oo4jr6VgyU%2FvLswHm%2B69Dn9VF9sljwIgcMiOINud8BFiS%2BtEnba09jvXz%2BfnUYuqOZlP7%2FeEXpQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJTJFQ%2BYRk8SaYE5yrcA2lLcUeyf40%2F0gvQdaCsbRHdFyqQiiFSLnVjIb2CaS5sIuqVM84TaLDmkxI2NrgfdsvuFoFA7ZeV3X4%2Fs8xcXeuIIxguws5Ae%2BTqys0b6apX2du%2F8oHnIL6hp2XNOIvp0Z3RZxxe5DcBmsligzi4k6P%2BAs2QjuM0X1rkAGKQx0vKn8jmRgL3s4kU3%2BiB9%2BTnbCif7wUcU4IlPesoLPdKCsT%2FzLoyQh9rFhfIOKCHwgHZCeJY87pSEpIWuaLFLpf%2Fi7TkAtSZtqCCG7SQKu4pOqPm82RPLbPt5n%2BEjZc8Qy2a4Pd4%2FNDguQI06AVhxue%2FHVcQaO0nWYLLus%2F4xlj2tpFa79Mj6Nr744EnxbFOBK1lM%2FevtHe6sQCHisyOBs%2BDfPLVlBY5P0dhynMiIpModWWcCLtApr2693IzXsbqYe1CKSjXN09OwAd0aP%2FTzUi94nOcQD%2F2fb306VQIKCzXyDaLexcdJQXgiL%2B5V5J6cmPGaF%2FKDldfOqMmpX%2F7iu9TD%2Bwr%2BQYx%2BLMnblQPQhMtY5r6Xzps%2FdLn6aNqoO2FCpqQyEDfl43en3mfUyW4v6fxrPtVbrEbO091i2x6GG20qdyCzXYk1MXXKg9cHBBse5JPLdlQO49rncRdThZgMK7t2ckGOqUBmzAlD8sY%2BPKj2S%2FPZ4GBEsLuWJFKZ5KutGbbSsjEUu82yegXULp4uFOOSk7w7Ey6UNRlmrS4lrNX0vfLH6OXov9rkFUcpgNxInrBis4042mnMVbNy9pY%2F7oNouTcOBXqQ4ALqF9GVKQYo%2BK1Inr75BLMOAWYRVq6AkvVSx69neMwWErsqYN5glKx2PPPl319il71YVkyIwudxmE9d9keWBajsBxs&X-Amz-Signature=732110e967e755bbac02d84d1a4547c796b13c7f5e7b5b74d4ab17148a586988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIYMEKBC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbJnaGp%2BKhPjy8oo4jr6VgyU%2FvLswHm%2B69Dn9VF9sljwIgcMiOINud8BFiS%2BtEnba09jvXz%2BfnUYuqOZlP7%2FeEXpQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJTJFQ%2BYRk8SaYE5yrcA2lLcUeyf40%2F0gvQdaCsbRHdFyqQiiFSLnVjIb2CaS5sIuqVM84TaLDmkxI2NrgfdsvuFoFA7ZeV3X4%2Fs8xcXeuIIxguws5Ae%2BTqys0b6apX2du%2F8oHnIL6hp2XNOIvp0Z3RZxxe5DcBmsligzi4k6P%2BAs2QjuM0X1rkAGKQx0vKn8jmRgL3s4kU3%2BiB9%2BTnbCif7wUcU4IlPesoLPdKCsT%2FzLoyQh9rFhfIOKCHwgHZCeJY87pSEpIWuaLFLpf%2Fi7TkAtSZtqCCG7SQKu4pOqPm82RPLbPt5n%2BEjZc8Qy2a4Pd4%2FNDguQI06AVhxue%2FHVcQaO0nWYLLus%2F4xlj2tpFa79Mj6Nr744EnxbFOBK1lM%2FevtHe6sQCHisyOBs%2BDfPLVlBY5P0dhynMiIpModWWcCLtApr2693IzXsbqYe1CKSjXN09OwAd0aP%2FTzUi94nOcQD%2F2fb306VQIKCzXyDaLexcdJQXgiL%2B5V5J6cmPGaF%2FKDldfOqMmpX%2F7iu9TD%2Bwr%2BQYx%2BLMnblQPQhMtY5r6Xzps%2FdLn6aNqoO2FCpqQyEDfl43en3mfUyW4v6fxrPtVbrEbO091i2x6GG20qdyCzXYk1MXXKg9cHBBse5JPLdlQO49rncRdThZgMK7t2ckGOqUBmzAlD8sY%2BPKj2S%2FPZ4GBEsLuWJFKZ5KutGbbSsjEUu82yegXULp4uFOOSk7w7Ey6UNRlmrS4lrNX0vfLH6OXov9rkFUcpgNxInrBis4042mnMVbNy9pY%2F7oNouTcOBXqQ4ALqF9GVKQYo%2BK1Inr75BLMOAWYRVq6AkvVSx69neMwWErsqYN5glKx2PPPl319il71YVkyIwudxmE9d9keWBajsBxs&X-Amz-Signature=2419696214e12702680887ec60c29fba72335ba41b3346bf31800427f7ec3dec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

