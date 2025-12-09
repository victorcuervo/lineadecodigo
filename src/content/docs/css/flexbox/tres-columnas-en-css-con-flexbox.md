---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YVZMSMZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEi1I9Url7TI33hqlcw09yyFvWSQ8tDuQJ36A%2FnK4JegAiAntCGRemXQp%2BOZ6yjeIbu9OJP7tYjNqeuxN4kGE%2Bbh4SqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT1xAqXDjGzlJJtiVKtwDFdvYdUL5FBSlrigBQVcl5Q8kbHNpoaUZ%2FOpvsOpfRZeNTlwlixRJ1OcS9cOaIephfu1Rwm%2BJtSIZlUVNoZZlqpIMzhwhPYVcl5pWdM1SWHgOeZOv8fgBYUsPxL86ZcNFrbY7IWYgpViSZVdyV9wSWDAA7GIZCtAA0%2BH995OfJESqdbwcqW8QIRlwMYNuEqyJn36DDFkQVhghSrDN8uzz6%2BykZLTCw%2Fi10aZUVtdokLFnMnFlGoxMToPCnEeFJiWfXNGekI9iXjTsqJB9OfVstNJAxJTRT%2Bh9Yl%2BLTlw%2FMozIbFfogc5wPBG%2FEnYZZJQgezDD5NOoBnXU0LUkT2tUD9tfi6N2djc4BYaNXa99AT0qaUNFlbZ62EvETKYzTTe0VV5F%2FX9b4y8PwbICVNEOatVkfAk%2FSkjDnAK1N1M9FfUDQgJMqtW5b1IJg5ZchqeC6Gv8besygukigKdp0pIdw%2FAe6FaOtTdzCMRdad%2FJoARdXuh2%2B6%2FIkOYwAmd0TL8jKk0juLwfDIoMH2n3OFdKPOMu%2BGadLuwTIz%2B6XGdwgVXChfqwgAl1nRT7PTAjjm7E%2F58gKb32Y2HvCbA4xIu8CY2KEKEUUy0PrvwIUMUHY7S9w%2FbXQuxsy60KidAw2eXeyQY6pgHLhBUhDSfo3ubxEq6QydG2o%2B%2FYywnyh1zMIi6KotbyUSuCnySa1IeL%2FU6szU%2F69NVGUj%2FkPqxOWJajQBDtuocr%2BrjLuaOyreP4c5P5Sjh2%2F5rdKCycSSef9XzCeu3wf%2Bh9IVNpVaF%2B53wh3EiBY2kMcJYi8mdCfDuydNonXHD%2Bm3HSMl1zNiQLnrlXSjM5wvp3hvqfK30Qya%2B8ATt55rnqQCPmeyRt&X-Amz-Signature=7ec3c19adf73f4b0f37ddbea14549ff4b9390b1c2adbe2e42989f5548df4d908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YVZMSMZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEi1I9Url7TI33hqlcw09yyFvWSQ8tDuQJ36A%2FnK4JegAiAntCGRemXQp%2BOZ6yjeIbu9OJP7tYjNqeuxN4kGE%2Bbh4SqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT1xAqXDjGzlJJtiVKtwDFdvYdUL5FBSlrigBQVcl5Q8kbHNpoaUZ%2FOpvsOpfRZeNTlwlixRJ1OcS9cOaIephfu1Rwm%2BJtSIZlUVNoZZlqpIMzhwhPYVcl5pWdM1SWHgOeZOv8fgBYUsPxL86ZcNFrbY7IWYgpViSZVdyV9wSWDAA7GIZCtAA0%2BH995OfJESqdbwcqW8QIRlwMYNuEqyJn36DDFkQVhghSrDN8uzz6%2BykZLTCw%2Fi10aZUVtdokLFnMnFlGoxMToPCnEeFJiWfXNGekI9iXjTsqJB9OfVstNJAxJTRT%2Bh9Yl%2BLTlw%2FMozIbFfogc5wPBG%2FEnYZZJQgezDD5NOoBnXU0LUkT2tUD9tfi6N2djc4BYaNXa99AT0qaUNFlbZ62EvETKYzTTe0VV5F%2FX9b4y8PwbICVNEOatVkfAk%2FSkjDnAK1N1M9FfUDQgJMqtW5b1IJg5ZchqeC6Gv8besygukigKdp0pIdw%2FAe6FaOtTdzCMRdad%2FJoARdXuh2%2B6%2FIkOYwAmd0TL8jKk0juLwfDIoMH2n3OFdKPOMu%2BGadLuwTIz%2B6XGdwgVXChfqwgAl1nRT7PTAjjm7E%2F58gKb32Y2HvCbA4xIu8CY2KEKEUUy0PrvwIUMUHY7S9w%2FbXQuxsy60KidAw2eXeyQY6pgHLhBUhDSfo3ubxEq6QydG2o%2B%2FYywnyh1zMIi6KotbyUSuCnySa1IeL%2FU6szU%2F69NVGUj%2FkPqxOWJajQBDtuocr%2BrjLuaOyreP4c5P5Sjh2%2F5rdKCycSSef9XzCeu3wf%2Bh9IVNpVaF%2B53wh3EiBY2kMcJYi8mdCfDuydNonXHD%2Bm3HSMl1zNiQLnrlXSjM5wvp3hvqfK30Qya%2B8ATt55rnqQCPmeyRt&X-Amz-Signature=118d5a05d7fdc9346590a227d5a0fbbfd5776aeed77c5609d7145a851e01a8e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

