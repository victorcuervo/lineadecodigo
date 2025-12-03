---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastupdates: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAAQ46DQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCRlZ1nZP1Wql4ggYqdM%2FWH%2B62dGz%2F1%2BYopxIH2POt%2B6gIhAOWS2JQL3m9Grczlvyk3CNCAoN7gcfRgAjnryOZIbXWXKv8DCDYQABoMNjM3NDIzMTgzODA1Igx8axYVDex7psElg20q3AOisCciJCsYolO48cMG9etQP8o97P72XL904G49Xjgjd6yg6b6nZuU8lhIV9GQmjwzAgnf1C%2BVDQjJKcFmq0Fp2yaFxDiC3VOKOf2%2F%2FYLw4jM2mBVmm75kQZgFkoDUwMiw7VwB9ZZhGv6AkfdbVm6cbQyrwpRCc1K3iBH2xcFlt6lsDhhQqyzx276upnEFUqOyqfAkR1acK9WZI7T2xo%2Fjx6giXS3aty4luvjElewuQXmN63gdfx2AgVui2og%2FBDRSE8yKwvkYA%2Fw5jG%2BCdOpYeng22OV2018hxgCpdIhoXK26OnXDbtCS59vRG0X7MEmy6EW0Hf%2BSTbPUNNQAap97dDy2BkSZP%2BzibrbriYBhva9t9urtbWu9HGAZU9g0Oq95LxJN8HIhGKfZviFUqwLBplP0p2cv%2FqPixMi85%2BarIgHeF62hS5p5dFxh6dCFLmUnynso5sKDtO0xPRneeTr8bgmPOcCO9V6X0HJHkbQ0Raz0qwWo1Ig4Ifpr83Y8RZc9axCzOWhkh8LzeH%2F2NEGiMjA0Lu2bGuR2Nk8K3mQ3cVlJnie%2B6Yoy5fR4TER1ftOYJnVGec7r9acyXeO5oYHxj16ErBaZsTCEAPnpi98pxl3e0QBjfn9sMpxrMpjDDvcLJBjqkAcSanCbVuemgdg1Uri6v6W3qpxs7lP5EHAXoe5VVVPjraMmelNZ1%2BrN8HieEvai0OgZv7Ne7HEC3w4xRZWAC%2FRvfSAIOpm0BNl4ipLxts2Kjo1ePdyix9PB%2FfR02%2FgxiF5QX27roIeaClHnhW9xuPbdstbv6j94cnvuNIfkyM%2BEiiF0CqXy7H9cjlv0XQVxu%2FHAP36wVAn%2BPmnVhCnXp4mNTInRK&X-Amz-Signature=3f40308dedc528906ed8cd4d7063d0f9252a2b048ea66b5223260c73ed17a22f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAAQ46DQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQCRlZ1nZP1Wql4ggYqdM%2FWH%2B62dGz%2F1%2BYopxIH2POt%2B6gIhAOWS2JQL3m9Grczlvyk3CNCAoN7gcfRgAjnryOZIbXWXKv8DCDYQABoMNjM3NDIzMTgzODA1Igx8axYVDex7psElg20q3AOisCciJCsYolO48cMG9etQP8o97P72XL904G49Xjgjd6yg6b6nZuU8lhIV9GQmjwzAgnf1C%2BVDQjJKcFmq0Fp2yaFxDiC3VOKOf2%2F%2FYLw4jM2mBVmm75kQZgFkoDUwMiw7VwB9ZZhGv6AkfdbVm6cbQyrwpRCc1K3iBH2xcFlt6lsDhhQqyzx276upnEFUqOyqfAkR1acK9WZI7T2xo%2Fjx6giXS3aty4luvjElewuQXmN63gdfx2AgVui2og%2FBDRSE8yKwvkYA%2Fw5jG%2BCdOpYeng22OV2018hxgCpdIhoXK26OnXDbtCS59vRG0X7MEmy6EW0Hf%2BSTbPUNNQAap97dDy2BkSZP%2BzibrbriYBhva9t9urtbWu9HGAZU9g0Oq95LxJN8HIhGKfZviFUqwLBplP0p2cv%2FqPixMi85%2BarIgHeF62hS5p5dFxh6dCFLmUnynso5sKDtO0xPRneeTr8bgmPOcCO9V6X0HJHkbQ0Raz0qwWo1Ig4Ifpr83Y8RZc9axCzOWhkh8LzeH%2F2NEGiMjA0Lu2bGuR2Nk8K3mQ3cVlJnie%2B6Yoy5fR4TER1ftOYJnVGec7r9acyXeO5oYHxj16ErBaZsTCEAPnpi98pxl3e0QBjfn9sMpxrMpjDDvcLJBjqkAcSanCbVuemgdg1Uri6v6W3qpxs7lP5EHAXoe5VVVPjraMmelNZ1%2BrN8HieEvai0OgZv7Ne7HEC3w4xRZWAC%2FRvfSAIOpm0BNl4ipLxts2Kjo1ePdyix9PB%2FfR02%2FgxiF5QX27roIeaClHnhW9xuPbdstbv6j94cnvuNIfkyM%2BEiiF0CqXy7H9cjlv0XQVxu%2FHAP36wVAn%2BPmnVhCnXp4mNTInRK&X-Amz-Signature=a77a8531b12fc40cd39072c537ccb2d65284f17bb4da639b23b7de544994bf1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

