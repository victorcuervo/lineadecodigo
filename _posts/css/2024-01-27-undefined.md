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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622VJ7KCC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T120629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCS5IdbgcyZ7daLJdIjZnJvFkve3tell9UU2PeuIoeYoAIhAK4E8%2FrVQu4twHHEMeC4tG53koekwI2worVAe%2BE1T4aUKv8DCC0QABoMNjM3NDIzMTgzODA1IgwKeW8AFiaHs9%2Fa6gQq3AOHsXPX1tEce9bNva1r172k6FIXsWf0dWJ7X12lFOHn1QFBTaFVzd6MnsYk94%2F3neg9%2BcOpgbnhDSqno8iWwsalN9CtCwgLDSBjpidmovez%2FucoHyi9rgQlBDK8qdh98S%2FuoLTyYZh%2BS7BHP6CWQ7c1TTHTup32uOvL3mdvGsSJIiGuZpFdmDwTwQ5HaAr%2B49EX7BUSvCMlmXZJM5iGAHQDAYISC0bSByDWFOhNupHO4QKOw0bh%2BimvnKBbF%2Bu4kz8NFoPpsxZBcyW%2BxoB2vtVbLI%2B4X%2BQjgQ0ovMGq3rfvuIRbc%2BwVt9A9OS6u%2Fs1r%2BQS6L3gMFHRaZg31dZlg3hTzOUG7VQK%2BzjTJ%2BincEf3F11j7RLWhj5DAuQdkq5uDD1Nvg3mbIu92Lw7bHWmrfe%2B9nHvbycIs0m4PfFmtqyJjn1exXmH%2Bol0N0suhW5sOOjEkXSK6f7HmNVEPfu4z4kyiglCTFyUFChTuiP7mltQ4oDL5p4rIjtTBhcRSzgg86lBsRRh7Tfdz%2B%2BcYIqyHtXPHQ%2FjUJ7IuDM4MGwRUbglF1sRCks5CZsarTiBjJcWYE%2BVeURkE4%2B15l9GAr4AAaXJJCgDmVxIftFXLEbNhimUfXstK8HwKaCcjUc32wTDyzMDJBjqkAW3nEyADn0thPcgU2z8qPljMlvJgRr2q4EM7torEno9ouLz35tanvPSM90YGLsGwogSMWs3c70ZsArw8IHRuMFFfeky9ekEJojqEBqorujHqMb2zDcU6XxxVWZ8UrqLmv66UwZxRW7tw63vArBp%2F4cb5cbtmQ%2FR8H9x993LVkRL0%2FeNrSFzqTwrFaU3rN9cyBMVoF6Zps57wukLAzFLZh4HDpAHz&X-Amz-Signature=61c03e0051c5c8a5911c5ee6a6f9204c2b04883b479d5d9120a8668f0d738f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622VJ7KCC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T120629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCS5IdbgcyZ7daLJdIjZnJvFkve3tell9UU2PeuIoeYoAIhAK4E8%2FrVQu4twHHEMeC4tG53koekwI2worVAe%2BE1T4aUKv8DCC0QABoMNjM3NDIzMTgzODA1IgwKeW8AFiaHs9%2Fa6gQq3AOHsXPX1tEce9bNva1r172k6FIXsWf0dWJ7X12lFOHn1QFBTaFVzd6MnsYk94%2F3neg9%2BcOpgbnhDSqno8iWwsalN9CtCwgLDSBjpidmovez%2FucoHyi9rgQlBDK8qdh98S%2FuoLTyYZh%2BS7BHP6CWQ7c1TTHTup32uOvL3mdvGsSJIiGuZpFdmDwTwQ5HaAr%2B49EX7BUSvCMlmXZJM5iGAHQDAYISC0bSByDWFOhNupHO4QKOw0bh%2BimvnKBbF%2Bu4kz8NFoPpsxZBcyW%2BxoB2vtVbLI%2B4X%2BQjgQ0ovMGq3rfvuIRbc%2BwVt9A9OS6u%2Fs1r%2BQS6L3gMFHRaZg31dZlg3hTzOUG7VQK%2BzjTJ%2BincEf3F11j7RLWhj5DAuQdkq5uDD1Nvg3mbIu92Lw7bHWmrfe%2B9nHvbycIs0m4PfFmtqyJjn1exXmH%2Bol0N0suhW5sOOjEkXSK6f7HmNVEPfu4z4kyiglCTFyUFChTuiP7mltQ4oDL5p4rIjtTBhcRSzgg86lBsRRh7Tfdz%2B%2BcYIqyHtXPHQ%2FjUJ7IuDM4MGwRUbglF1sRCks5CZsarTiBjJcWYE%2BVeURkE4%2B15l9GAr4AAaXJJCgDmVxIftFXLEbNhimUfXstK8HwKaCcjUc32wTDyzMDJBjqkAW3nEyADn0thPcgU2z8qPljMlvJgRr2q4EM7torEno9ouLz35tanvPSM90YGLsGwogSMWs3c70ZsArw8IHRuMFFfeky9ekEJojqEBqorujHqMb2zDcU6XxxVWZ8UrqLmv66UwZxRW7tw63vArBp%2F4cb5cbtmQ%2FR8H9x993LVkRL0%2FeNrSFzqTwrFaU3rN9cyBMVoF6Zps57wukLAzFLZh4HDpAHz&X-Amz-Signature=c3351b62dc9fb862757a152b56359ac5e3cbe22106b5ae062fddbce134a39694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

