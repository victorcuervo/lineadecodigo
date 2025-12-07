---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QANWCEGY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxBsLieautpLxLkqVECeRrljszMgfWygo96W4M517tdQIgC53stPQ0K%2FDrekHxERCiqnYntOxgDxS1426EnIaApE8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAu8vhrk40oJRe5DCrcA2agzNqunAuDA9mjVRJauJvbwDRbbD2Fom103rUCAAdcMmUn5iagoRkFltKFzYwW%2Fb1b79NgC9pRUJYWQyH2cBBVDvb0b1MrjIABqW69uArHWCJiYhzL72bErrH%2FC1aqbi%2FIzEHsqYgT6pisHxJNaeoSzUmlmY%2BmwfTXngJaLVRzpBFB%2BQKCXNROT47ETPXM210%2BKuFnJozdXEVw1a6Mu1pLfTo4ebEavggZseOkS1a1SL0CzEHKXavr9XVPpuQs0iBjwpnHofNnyqvzahOh%2BUSk4vhtmlcchCQ5oJ%2FD9h%2BuhUfTJAS7W3lOJmAe1sgV0ddtbuCiq%2BA2APurq6uSEF4wmbCqBIlPXDvaNz2dhA21V9YLI7foFjdSmtpOboJ9a2KWpDdTgqpZeCVXH13z77QyOlQEpdhgOD%2BSJNV0dPVerY6P1xIqfOkMC61Wo5BwsVpdiVUHbZRmGsuRpPzDNXraw%2FUuKfQLJole0qJ6PMbMalSsEJj3rDpu%2F0w4qsd9ME7iC9p6e5ft10VnyKF%2FHk%2FOTSGE8p%2BZTKFMja5mm8HYDayRkBT3I5xJZty28bgxF%2FycQ9ObfSpzy0u%2FH5S8jk7TgtfNXgs3iGx280kG1gHQnRZfS%2Brs7QmntqVHMNG81skGOqUBOKzUuFuG81LI3vJYQfL20QHppE9MvBv8uYbygTMy%2BZs5mDtoaWR29uCCExAooZyfrxpyoCR3267FQ%2FlNZDNY198QoXsgiGykAA2rwS%2F1ksGmd%2Foh5MY8hbnCxChXB65YXpteIGLMKISkBUKRlH%2Fg7EJP0tE8ZKTGEIke%2Fwo7e8T6peSrzznmK7Y%2FZUO5Reaf9C0l1V9fsCO47UeHnts45GMqY00O&X-Amz-Signature=bcbf2f3753c4c2d63d892af6eeaff066cfa858a6a7e4b3f7b6bbb2783054c89e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QANWCEGY%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T155023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxBsLieautpLxLkqVECeRrljszMgfWygo96W4M517tdQIgC53stPQ0K%2FDrekHxERCiqnYntOxgDxS1426EnIaApE8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAu8vhrk40oJRe5DCrcA2agzNqunAuDA9mjVRJauJvbwDRbbD2Fom103rUCAAdcMmUn5iagoRkFltKFzYwW%2Fb1b79NgC9pRUJYWQyH2cBBVDvb0b1MrjIABqW69uArHWCJiYhzL72bErrH%2FC1aqbi%2FIzEHsqYgT6pisHxJNaeoSzUmlmY%2BmwfTXngJaLVRzpBFB%2BQKCXNROT47ETPXM210%2BKuFnJozdXEVw1a6Mu1pLfTo4ebEavggZseOkS1a1SL0CzEHKXavr9XVPpuQs0iBjwpnHofNnyqvzahOh%2BUSk4vhtmlcchCQ5oJ%2FD9h%2BuhUfTJAS7W3lOJmAe1sgV0ddtbuCiq%2BA2APurq6uSEF4wmbCqBIlPXDvaNz2dhA21V9YLI7foFjdSmtpOboJ9a2KWpDdTgqpZeCVXH13z77QyOlQEpdhgOD%2BSJNV0dPVerY6P1xIqfOkMC61Wo5BwsVpdiVUHbZRmGsuRpPzDNXraw%2FUuKfQLJole0qJ6PMbMalSsEJj3rDpu%2F0w4qsd9ME7iC9p6e5ft10VnyKF%2FHk%2FOTSGE8p%2BZTKFMja5mm8HYDayRkBT3I5xJZty28bgxF%2FycQ9ObfSpzy0u%2FH5S8jk7TgtfNXgs3iGx280kG1gHQnRZfS%2Brs7QmntqVHMNG81skGOqUBOKzUuFuG81LI3vJYQfL20QHppE9MvBv8uYbygTMy%2BZs5mDtoaWR29uCCExAooZyfrxpyoCR3267FQ%2FlNZDNY198QoXsgiGykAA2rwS%2F1ksGmd%2Foh5MY8hbnCxChXB65YXpteIGLMKISkBUKRlH%2Fg7EJP0tE8ZKTGEIke%2Fwo7e8T6peSrzznmK7Y%2FZUO5Reaf9C0l1V9fsCO47UeHnts45GMqY00O&X-Amz-Signature=6c229071f19ebe06a53a5d428b98cbd273e95ad96ff0351661803bb068cc6b55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

