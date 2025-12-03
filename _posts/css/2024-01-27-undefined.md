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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TBKYKE2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T180323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDYC6%2BA44t5mQbmYrArItzT6bzp%2B0HBRylrI9fq1MIwaAiBM65%2Flm9IZZtOYB%2FYM%2BHNl4q82Vz6iKxCqnCuG6nQSOSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMeoMVTziOaizIkV7FKtwDARYq3sRYpRHGGESU7ZWpCSGQOJ7o2wShgFgvNXfV0I88lLr6BIZVv2Q38%2FzlcCz18cTbT6bdktRHpSz0ZH72oz2dgD5OOAIqQI8K9tFtIg8XG5kPU53OuqOeZiK0vaRaa%2BIhs8t4wSzfoCJVfbXbCjdJym1YvTXZBZKlu2o1eMGorUGsJCZnLJzEO%2BjACVFvTBb8vDs%2FFsu6SLNAPm5INsPH9N%2FhAGEvK5bni2W7Y8p82mFtwbXICNuPAPLajz9Fm29XHTBwUPH7VrL4I%2FeTAKrLErGUwh1qe6it0bRAHnPcppAr5%2BmBoLRjhwFN3NaHP8WwKf%2FFvteCH2D36M0KeSSzNjU4zCZgJxal9%2BZXI62gbmUS%2Fz2Edt7AykS9TbjMZz3L5x0BQ0ztq9ZLWesu%2FKm59dxP9zJJDuWilP%2BoIP2lFTr0JSzK4EdP3XUjllSXf78Yeqj1V%2FsDVQtPO65%2FfEf9TiwC1FHNRZdPte2eaMBWjnJg3IneKBbtK2sEQrXJSVhBcO7BZAiEtg5fRFDS9gNW2Est9rMdNAzSFc5EEtKAPXQrMZPsalyMj%2BWqX%2Byzx7jbOvMUeybDIIGogrYtk2jImk5wI9F8LTd3Fy2wCTqrrLLpk6EiKUs9fRow1NvByQY6pgHjywaO3nqHCfUqxtEmHfV249DTTze64Pv0uzV%2FBAkhnIHOuuT7N4izVWGGoiU8ql%2BtF6FnugK4A2tyQI1m1flE%2ByacxkibQbu5OhO8tmP%2BtIcyBS1z2rutBZzzRh8yM0HQmv5w%2B1W%2BCD%2BerT7J6GqMiPo4r1vhrLEGsZzJQ09PlSbKOBTNv7YpP36HLkoaPm8RHBAmwsnGum6Fs7%2Bp7fkp1WWP601j&X-Amz-Signature=6cd3ef8d22d4a6d9479885afefe4b1fcf2d61e86b0f2d3b8fc332dfd24719e96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TBKYKE2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T180323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIDYC6%2BA44t5mQbmYrArItzT6bzp%2B0HBRylrI9fq1MIwaAiBM65%2Flm9IZZtOYB%2FYM%2BHNl4q82Vz6iKxCqnCuG6nQSOSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMeoMVTziOaizIkV7FKtwDARYq3sRYpRHGGESU7ZWpCSGQOJ7o2wShgFgvNXfV0I88lLr6BIZVv2Q38%2FzlcCz18cTbT6bdktRHpSz0ZH72oz2dgD5OOAIqQI8K9tFtIg8XG5kPU53OuqOeZiK0vaRaa%2BIhs8t4wSzfoCJVfbXbCjdJym1YvTXZBZKlu2o1eMGorUGsJCZnLJzEO%2BjACVFvTBb8vDs%2FFsu6SLNAPm5INsPH9N%2FhAGEvK5bni2W7Y8p82mFtwbXICNuPAPLajz9Fm29XHTBwUPH7VrL4I%2FeTAKrLErGUwh1qe6it0bRAHnPcppAr5%2BmBoLRjhwFN3NaHP8WwKf%2FFvteCH2D36M0KeSSzNjU4zCZgJxal9%2BZXI62gbmUS%2Fz2Edt7AykS9TbjMZz3L5x0BQ0ztq9ZLWesu%2FKm59dxP9zJJDuWilP%2BoIP2lFTr0JSzK4EdP3XUjllSXf78Yeqj1V%2FsDVQtPO65%2FfEf9TiwC1FHNRZdPte2eaMBWjnJg3IneKBbtK2sEQrXJSVhBcO7BZAiEtg5fRFDS9gNW2Est9rMdNAzSFc5EEtKAPXQrMZPsalyMj%2BWqX%2Byzx7jbOvMUeybDIIGogrYtk2jImk5wI9F8LTd3Fy2wCTqrrLLpk6EiKUs9fRow1NvByQY6pgHjywaO3nqHCfUqxtEmHfV249DTTze64Pv0uzV%2FBAkhnIHOuuT7N4izVWGGoiU8ql%2BtF6FnugK4A2tyQI1m1flE%2ByacxkibQbu5OhO8tmP%2BtIcyBS1z2rutBZzzRh8yM0HQmv5w%2B1W%2BCD%2BerT7J6GqMiPo4r1vhrLEGsZzJQ09PlSbKOBTNv7YpP36HLkoaPm8RHBAmwsnGum6Fs7%2Bp7fkp1WWP601j&X-Amz-Signature=1dd00e06d70f6830d58fd21a26d8b5494b41fae7c1befe451cd67c16782203c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

