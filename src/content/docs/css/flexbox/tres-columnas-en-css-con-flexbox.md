---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6R4ZBPN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSQHVfC7WaIHXIYQUg%2BUHnSJaaZRYRyqxa%2FPtld2vz%2FAIgBUeVXqoy1EqdGJ7RNkM%2FySkFJjdbgkUmlrUStXGIc6Eq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNCVm8Se5H2%2BuKOvPyrcA%2BFc4kfDMr0M7LkFjPwWAY9piTBVtmR0eTgZOOSiu8AW3deblnaOB28%2BmswPWdGQXN7PmRSAmVE4INqhPEzo%2BWo%2FWHyAYooRiZSuQJEWX7Py4TQDiANvS%2BRqqpf7teTCgPvqcYwPW%2Bv0A4jcdbzuQjY3Uh80UAcpEXMl2acvJBl%2BmyRFEZaRoAEXFHjUvmAFt4yofyhZPT4MHN9MdaKU0UcDsfGM430gblWzj%2FEy4UbpFVteloHtCEslLsSaHgUlG1JOEBvsYTKcnJnWvrqcGvarykQANXbqHiO7EyvD1mtZa8vqTpDITrlXvrd72CeD8dy9tLXMDwNdX5in1EwzNPshUNuy5%2B3xGql9hUBJnAMtO0XTaS6Smk7do6kQYwfk4e%2BXf0qJ5eTWNOo9IeymbQzF1IgA1CwW6sd7%2FaIdF2pfnXz1eMaptmwo0CA3DTUnnbhZ1YLHPy4d%2FjyhFaCnD8bFWiWIkA4udNEzE7gFGooIVhmDhXmzKIldvVZcHzdSDF55FMqzvEOA9fv2OAkiX823B0UNCVUFezj9TtoYskEMYORKg8hdnIZ6lNW2cyX0UiC00DyGh3AwmV79g1QhivJkEMt6BooStG1ONyFH2bnwFYcgD5x6a7BFAWZfMMKMyMkGOqUBlB0Tl0Ayf%2Bj1I4GOLghlG3SFS7YVUn6iasl%2FKWJB8QsrYHAD3ZyQixQk0w%2FxLWXykPHDYnFoOfiYgMY7ox5FNvLMPCVai1w6ETRQs9A%2FAOJ%2BposOyQqGmIkr18mpL%2Bfvy96hqQpISYCX10O57mMr3iSmpNkIIZXZFbI8%2FAZKJ851lOZrSfWRvFVWZ87Z%2FOHpLB6LU%2B5bVbMf2aOZSNxFN2TuTk30&X-Amz-Signature=24c5e8dceebf4e5aa7acc5d4a313b14259d402316a4dde1c74095400f27cdf5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6R4ZBPN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSQHVfC7WaIHXIYQUg%2BUHnSJaaZRYRyqxa%2FPtld2vz%2FAIgBUeVXqoy1EqdGJ7RNkM%2FySkFJjdbgkUmlrUStXGIc6Eq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDNCVm8Se5H2%2BuKOvPyrcA%2BFc4kfDMr0M7LkFjPwWAY9piTBVtmR0eTgZOOSiu8AW3deblnaOB28%2BmswPWdGQXN7PmRSAmVE4INqhPEzo%2BWo%2FWHyAYooRiZSuQJEWX7Py4TQDiANvS%2BRqqpf7teTCgPvqcYwPW%2Bv0A4jcdbzuQjY3Uh80UAcpEXMl2acvJBl%2BmyRFEZaRoAEXFHjUvmAFt4yofyhZPT4MHN9MdaKU0UcDsfGM430gblWzj%2FEy4UbpFVteloHtCEslLsSaHgUlG1JOEBvsYTKcnJnWvrqcGvarykQANXbqHiO7EyvD1mtZa8vqTpDITrlXvrd72CeD8dy9tLXMDwNdX5in1EwzNPshUNuy5%2B3xGql9hUBJnAMtO0XTaS6Smk7do6kQYwfk4e%2BXf0qJ5eTWNOo9IeymbQzF1IgA1CwW6sd7%2FaIdF2pfnXz1eMaptmwo0CA3DTUnnbhZ1YLHPy4d%2FjyhFaCnD8bFWiWIkA4udNEzE7gFGooIVhmDhXmzKIldvVZcHzdSDF55FMqzvEOA9fv2OAkiX823B0UNCVUFezj9TtoYskEMYORKg8hdnIZ6lNW2cyX0UiC00DyGh3AwmV79g1QhivJkEMt6BooStG1ONyFH2bnwFYcgD5x6a7BFAWZfMMKMyMkGOqUBlB0Tl0Ayf%2Bj1I4GOLghlG3SFS7YVUn6iasl%2FKWJB8QsrYHAD3ZyQixQk0w%2FxLWXykPHDYnFoOfiYgMY7ox5FNvLMPCVai1w6ETRQs9A%2FAOJ%2BposOyQqGmIkr18mpL%2Bfvy96hqQpISYCX10O57mMr3iSmpNkIIZXZFbI8%2FAZKJ851lOZrSfWRvFVWZ87Z%2FOHpLB6LU%2B5bVbMf2aOZSNxFN2TuTk30&X-Amz-Signature=390701686af808fbe22ff8085d8a938b3da7e9c4e5a4a41f542da9d00c959a73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

