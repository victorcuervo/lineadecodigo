---
layout: post
title: Tres Columnas en CSS con Flexbox
excerpt: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
categories: CSS
tags: [css flexbox]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQNCLTB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDyb6MQcLspMp%2BMIXhi6uKw8KUyCjhvjvX1wVHFGua3RgIgcVT7gJHYMl1rLqmveQvQOxxI%2BrppCBjuArJvdotB40Aq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHHTwQQs1LcPJBPHxSrcAx1pjdolkZRweZ9%2FO986tjuXifgvAxIg8AmTprJuYDxAZtc%2BXjs6ZU94ul95MLhuKcXj8Z1A%2BO41fQyc2OLkg9RxfVWU0jqzUfiTCTeRGDCWDiDYcUvJ4Vf2JI64MvZX2mJCHmnBkb%2Bw6LNObtDA7CBs8oT82sl5UvxcExCuzmYilIdDbKxGf7lCY3yaAsmeKUd1f6y%2BTFnFm%2FI6hzAsglPFIsokQkcaVVDTV77RKArtbvuApSOA8sgs1YAFyA1AfLsDK0VUIQvDoHbsjbm9d0BXEO1szq0tOiUk84rGbVAWrYsgQ6I2Vr1cC7e4%2BFzKjXBb0vVTFbjjGIcLhEeVxh8tTKSrfRnh8%2Bc%2FTnGJNRW6bU2iE9ooRq07BuxrO7KaYm0VskWLfJUDGktOMVdLQ4%2FqJA%2BHkHNryW57hgtX%2BaWlp1eDGnJp1RcHYUoIS65hnWbtDucssq0WiyVjsjhK0U5zEohlbjkh7qhwQXjpXJGaYbcPfGpofyphg%2BTjQM6s%2FX8fGNzj%2FfBPuBEUi7lUxBHQLLtHKmlfmQ1tdoPMwHL6Fyku%2Bz%2FKIotT%2FPXs0B%2B2y8FTguxWCubHfhKI3bSMWYEWQ9to0FQ7biAAmDMOdXgxiJDwiv3L%2FovHuhvzMIfWv8kGOqUBAqO8YiOh2T1dHHIAd7MbzINgOM9P2kO9WxmvN%2FclG3OEWuUqdpKTqreid6SSbCZT%2B7XUf%2BlBWe%2BjmbzR8Gf7PCoabkelptvzQlton6mrvcTJE3pi6XXdA1eASHwaWZgNqXzfuHzKmKw%2Fk%2BoMW32Cz%2FWWa%2BymABKZ4WgyuzH%2FIqkuK7YLt8gv7YV9%2Fhn4681BHTVNo6MMPmCmq52VN9XP9AxpPcQI&X-Amz-Signature=44c587a6959c1babbb62088946b66fbf720f90e76bd3dd8290983f2914c14715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQNCLTB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDyb6MQcLspMp%2BMIXhi6uKw8KUyCjhvjvX1wVHFGua3RgIgcVT7gJHYMl1rLqmveQvQOxxI%2BrppCBjuArJvdotB40Aq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDHHTwQQs1LcPJBPHxSrcAx1pjdolkZRweZ9%2FO986tjuXifgvAxIg8AmTprJuYDxAZtc%2BXjs6ZU94ul95MLhuKcXj8Z1A%2BO41fQyc2OLkg9RxfVWU0jqzUfiTCTeRGDCWDiDYcUvJ4Vf2JI64MvZX2mJCHmnBkb%2Bw6LNObtDA7CBs8oT82sl5UvxcExCuzmYilIdDbKxGf7lCY3yaAsmeKUd1f6y%2BTFnFm%2FI6hzAsglPFIsokQkcaVVDTV77RKArtbvuApSOA8sgs1YAFyA1AfLsDK0VUIQvDoHbsjbm9d0BXEO1szq0tOiUk84rGbVAWrYsgQ6I2Vr1cC7e4%2BFzKjXBb0vVTFbjjGIcLhEeVxh8tTKSrfRnh8%2Bc%2FTnGJNRW6bU2iE9ooRq07BuxrO7KaYm0VskWLfJUDGktOMVdLQ4%2FqJA%2BHkHNryW57hgtX%2BaWlp1eDGnJp1RcHYUoIS65hnWbtDucssq0WiyVjsjhK0U5zEohlbjkh7qhwQXjpXJGaYbcPfGpofyphg%2BTjQM6s%2FX8fGNzj%2FfBPuBEUi7lUxBHQLLtHKmlfmQ1tdoPMwHL6Fyku%2Bz%2FKIotT%2FPXs0B%2B2y8FTguxWCubHfhKI3bSMWYEWQ9to0FQ7biAAmDMOdXgxiJDwiv3L%2FovHuhvzMIfWv8kGOqUBAqO8YiOh2T1dHHIAd7MbzINgOM9P2kO9WxmvN%2FclG3OEWuUqdpKTqreid6SSbCZT%2B7XUf%2BlBWe%2BjmbzR8Gf7PCoabkelptvzQlton6mrvcTJE3pi6XXdA1eASHwaWZgNqXzfuHzKmKw%2Fk%2BoMW32Cz%2FWWa%2BymABKZ4WgyuzH%2FIqkuK7YLt8gv7YV9%2Fhn4681BHTVNo6MMPmCmq52VN9XP9AxpPcQI&X-Amz-Signature=2369cc67f0dfe686e8417820c7f328a398f465c5576684b1537dcfbbff18a525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

