---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SX76AZE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgwlUMJyI4kIMK6WxhXDHh00gQMMAjW2w1BeSXE%2BwAmAiBv%2FzwUxZqDv%2BkMN%2FGNjjZlgGA8EwaZc7bpA%2BjYIMTBRSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMWYTZsXnAr2n4k%2BEnKtwDCEH2Mc0rZqLc85k8t5jT62YUIharR974FdnRnOY2ynAZVcP%2BB87486P471Pe%2BAIHfJVRIOMEGCGNTKUK%2FleZXw5PjZM%2B2%2FeMRjRm0yMgzfNzxTzE31bR7%2BPqnpw4WGBg3gxtupm3WBzIfqUYtpBeBuVZPR6IKgW1nzuN0o04pbmyKnR0V%2BLpp4%2FopypIQgsGZzmlM0ZVGVJ6HVKIrToIctScGZZr3EXkO2z06lHMh7c4eYaUjH%2BOyfi3diLKuvoM5y2W%2FwROqNaoWTkDNctljPNtowCMOYKGq61uA1JyQOn9CcPUmTf9ZLka%2B0lWe2ja%2FzanOyGbLLSiMh8YD0zpHhZIWGWsPD81RDjkA%2BhdbXwqCXWvDZHVcSurXV3fFr4p77oQrAv1h2MgWV7ZsonxAd6tAODbY0g9RVwquh%2FwaFdA16Kdy%2BnNik8%2FL9M7yGmCZfpVhGoLap60F2PUh5CwC7YqwlrKRzzwRs8e0YfPTv%2FHhf2bEZ9ANDNgUecakjJnP7V49kc9q%2F%2F41ym07Ol96jTpsI6ayIwFQTIDTiQq2sH6K0eeTT1Rk5suWCkhFPysgF%2BYO1M%2BNt9%2FSiX45YbpfonQHZDRCJhMqc9tFsGHnpkhTCThZNz2LHEerYgwk8LRyQY6pgFjH6U0NqTtjunVL%2BuGLUU%2BUqBzIfCvBAkIx9lfNgwtIwfgVENyJrsl%2B4OMc7MGa2gBP20PldNXHLlQIfnLSJE3lbmItOqyWDuKrVtMtanuRMA59b6WineESOXTYDUXqEhNDc0q5vbm6y09U4TRqvys5G%2FdRoFOgfME7rZI2%2FqeCUg9kxu%2BLrGM92yyq0hrdqsaZX6rty5ipglPC20Eq9mKGACDxb7x&X-Amz-Signature=bacd0553fdd775efd473332783050e2fdfee8ce0421aee13be36d61d46f64d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SX76AZE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T175945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHgwlUMJyI4kIMK6WxhXDHh00gQMMAjW2w1BeSXE%2BwAmAiBv%2FzwUxZqDv%2BkMN%2FGNjjZlgGA8EwaZc7bpA%2BjYIMTBRSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMWYTZsXnAr2n4k%2BEnKtwDCEH2Mc0rZqLc85k8t5jT62YUIharR974FdnRnOY2ynAZVcP%2BB87486P471Pe%2BAIHfJVRIOMEGCGNTKUK%2FleZXw5PjZM%2B2%2FeMRjRm0yMgzfNzxTzE31bR7%2BPqnpw4WGBg3gxtupm3WBzIfqUYtpBeBuVZPR6IKgW1nzuN0o04pbmyKnR0V%2BLpp4%2FopypIQgsGZzmlM0ZVGVJ6HVKIrToIctScGZZr3EXkO2z06lHMh7c4eYaUjH%2BOyfi3diLKuvoM5y2W%2FwROqNaoWTkDNctljPNtowCMOYKGq61uA1JyQOn9CcPUmTf9ZLka%2B0lWe2ja%2FzanOyGbLLSiMh8YD0zpHhZIWGWsPD81RDjkA%2BhdbXwqCXWvDZHVcSurXV3fFr4p77oQrAv1h2MgWV7ZsonxAd6tAODbY0g9RVwquh%2FwaFdA16Kdy%2BnNik8%2FL9M7yGmCZfpVhGoLap60F2PUh5CwC7YqwlrKRzzwRs8e0YfPTv%2FHhf2bEZ9ANDNgUecakjJnP7V49kc9q%2F%2F41ym07Ol96jTpsI6ayIwFQTIDTiQq2sH6K0eeTT1Rk5suWCkhFPysgF%2BYO1M%2BNt9%2FSiX45YbpfonQHZDRCJhMqc9tFsGHnpkhTCThZNz2LHEerYgwk8LRyQY6pgFjH6U0NqTtjunVL%2BuGLUU%2BUqBzIfCvBAkIx9lfNgwtIwfgVENyJrsl%2B4OMc7MGa2gBP20PldNXHLlQIfnLSJE3lbmItOqyWDuKrVtMtanuRMA59b6WineESOXTYDUXqEhNDc0q5vbm6y09U4TRqvys5G%2FdRoFOgfME7rZI2%2FqeCUg9kxu%2BLrGM92yyq0hrdqsaZX6rty5ipglPC20Eq9mKGACDxb7x&X-Amz-Signature=1aee78758c80041562c55c84f531eea0fa18bd1e65fd8fc022eb4c60996926e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

