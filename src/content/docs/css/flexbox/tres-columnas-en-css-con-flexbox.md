---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBNP6OJK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIApStgKHv2A4Rbr15PxGV1Cgxby83PP1HaEXuWzTGZPIAiACb86ewsQWINPZQU0bWapRzc06OX6wHuzzliy7qIe%2BjCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMnUnJIRpWYNpVQsrFKtwDMEWG1ITFH4HP0uoWTwszOtFbfQS5zsaN%2Fq1ShcXRpeVCy%2FjcqBP9017gd0wn6UE%2BCzE1DAR9eZr5FVTYGa%2FL%2BaaUqonkE5dd1kYTifiKzzArkGhr4kmljyfkZ%2ByH7v1qAgbq370jlMT6xydDbOaDp5cYeMy%2FhFVNni3MWCfT8T12ejCmM82sFPEmHBbcInUQvc%2Ft3FMCbYe7%2BvaBAcOE1GeEz%2FxXEJyjH18P2BwDW7%2F6llCb1HrP8LcsFfthUjJoEM4KrTWei%2BZW8eP%2FhvPA8M0RRbo4AEiYoWenBrjU5epYI5ZHBsH%2Blvk93gxbKl0vb%2FGDGT%2FoCKgWEdOtEEHYeqc%2BsrHBq5iREEB9q3F6%2BcPhnEmOt5LzT4mqWtLNETUIhJxKx6LslNcyD%2BdiUFZ7gAHVUSMLzTfkmI6I9bJVSEd1drAT3T7NzC6rwTYobfD5kc4DICDWlbRqubw5zsyJjGhd6BcND8LakJ7H944Vyj0Qmx47KLahV90n46ohHGIkxIR0w6AYu47CitMU%2Bmudm44ID3S4BrAdr21%2BRnPyZqsNGycqPWkf8Gefov79A%2FSEqe2%2FbzRPlXGXfYWTPJ2cgkGgyBs3r0Wv4ddZaAqcifJAdLF%2F7aWTMb5AK1Aw3czEyQY6pgESySh%2BGep47d4P6SiOLU%2FF2SOsOQQMbNtatRYvJ8dfj%2BkOnXIKBfo%2BcdPkHgM8zFsbLE%2FcV5ysUgbw6eqhGPcwGF9Gkqk5r68M5PVm4YWP1CMqu8N1Zlj4jisiEVri25PfBcKrM6xh7z5l%2BMGsLJBLlhWANxTrwhHt2C8Cjtkeidumz2k8nM%2BdCgGN94KemSw%2BB%2Bn5PlW4Yy%2B8bW060nLf%2FKfargHw&X-Amz-Signature=a05e4839eb14f8bf327a1c935cbb74922d72fcf039f46d559669ce07fba1e1c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBNP6OJK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T065517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIApStgKHv2A4Rbr15PxGV1Cgxby83PP1HaEXuWzTGZPIAiACb86ewsQWINPZQU0bWapRzc06OX6wHuzzliy7qIe%2BjCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMnUnJIRpWYNpVQsrFKtwDMEWG1ITFH4HP0uoWTwszOtFbfQS5zsaN%2Fq1ShcXRpeVCy%2FjcqBP9017gd0wn6UE%2BCzE1DAR9eZr5FVTYGa%2FL%2BaaUqonkE5dd1kYTifiKzzArkGhr4kmljyfkZ%2ByH7v1qAgbq370jlMT6xydDbOaDp5cYeMy%2FhFVNni3MWCfT8T12ejCmM82sFPEmHBbcInUQvc%2Ft3FMCbYe7%2BvaBAcOE1GeEz%2FxXEJyjH18P2BwDW7%2F6llCb1HrP8LcsFfthUjJoEM4KrTWei%2BZW8eP%2FhvPA8M0RRbo4AEiYoWenBrjU5epYI5ZHBsH%2Blvk93gxbKl0vb%2FGDGT%2FoCKgWEdOtEEHYeqc%2BsrHBq5iREEB9q3F6%2BcPhnEmOt5LzT4mqWtLNETUIhJxKx6LslNcyD%2BdiUFZ7gAHVUSMLzTfkmI6I9bJVSEd1drAT3T7NzC6rwTYobfD5kc4DICDWlbRqubw5zsyJjGhd6BcND8LakJ7H944Vyj0Qmx47KLahV90n46ohHGIkxIR0w6AYu47CitMU%2Bmudm44ID3S4BrAdr21%2BRnPyZqsNGycqPWkf8Gefov79A%2FSEqe2%2FbzRPlXGXfYWTPJ2cgkGgyBs3r0Wv4ddZaAqcifJAdLF%2F7aWTMb5AK1Aw3czEyQY6pgESySh%2BGep47d4P6SiOLU%2FF2SOsOQQMbNtatRYvJ8dfj%2BkOnXIKBfo%2BcdPkHgM8zFsbLE%2FcV5ysUgbw6eqhGPcwGF9Gkqk5r68M5PVm4YWP1CMqu8N1Zlj4jisiEVri25PfBcKrM6xh7z5l%2BMGsLJBLlhWANxTrwhHt2C8Cjtkeidumz2k8nM%2BdCgGN94KemSw%2BB%2Bn5PlW4Yy%2B8bW060nLf%2FKfargHw&X-Amz-Signature=ee1e9125a7b72b00598192f61c7247fe1377c31a97519cdde01ac3e98cd568bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

