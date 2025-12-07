---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCNWYNZ2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsAhq7lAeOab8CPfbsPDsDiper%2BIymnnkBWdErrOdWxAiEAjbX7kwlTgqPkaInQnMDVEHIDPrNTdzk735jmJZtl31cqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1ELGKcX3B9V%2FBBeCrcA74wmz93V5sC10THeQGanrqIRKgVxsk0N3O%2B8ODC1QSJ2YVG4smN8k9IY183mBRzoflngk7nKO2QZbArTkKzBmj7j2A69jMOWxPPLAWv%2FZf6q9hg8Rpf%2FBwQG1xpbyORBZrNREyJ6Xu1u7YbngfcNMNsbaYebkh1ZxzINyhliVucQMgobRVqZGwlLWhCF3UzWXcY0%2F3fs5urGYdNjG8rfesf%2Bks8kp9clwqUHIUGQrnjvaxXi6TXvNWa7KpZoEk3KA7LQ8PrsHHku9EPpTgldA5QmVKmQ4L0mgHqMXb%2B5VGiDZ5wkugRFiFG%2FSHuDk4Lx4ya1rs76eQE3cK3rxJ8nfZfMoxs1mPJ%2BjWTpam%2F9StFsuaNdo7m4QYWV0gP8ynjBlBAaLvT881SYvdJGHV%2FnA9oejUhRLpnoVlDLBvsgdiXfrBXNUNsgEL0qBDC5hYx6rEvUrOODubMNAKGsSdAR61r5JI%2ButYOHU99QtnhiMxo%2BvmreNzKo28X3Fq7m%2F27EEE6mKz32qqw6PWl%2BU063DhN6tvfd5KFz64%2Fcim5HqWkDkp8CV%2FG5nggRmXGBZFpnypG6OWPRXa0fzFoxwCi4LFQEzxH2rTYsXkXqbbUuiEzPmvHgnodtAPAWlBPMK6z1skGOqUBReNzYq7UpGPIR4qgaFVBctcYZsraWnQBdY7u0i4txHj2ZQcCWJ2t5rAfPQKzuJplnAyjWlNJPS7%2BDwwWU97e9s%2BV554lqoZckMALROzOTaoUkigBOBGu%2BZ4eIoPCicXhCwLhX%2FLM2p%2F0EYJ2LtQiRLULJZN1OQBVwcK05yUb%2FhPUiiOqiTLp7f%2B8XEAHOy4p1H2wAhucLpbAEBLPYeyq%2Fu9%2BK7Wz&X-Amz-Signature=5c7a8ec3f8e842c24e43e365eab8aa40fad807d240a352106a7a44ad710be504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCNWYNZ2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T182711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAsAhq7lAeOab8CPfbsPDsDiper%2BIymnnkBWdErrOdWxAiEAjbX7kwlTgqPkaInQnMDVEHIDPrNTdzk735jmJZtl31cqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI1ELGKcX3B9V%2FBBeCrcA74wmz93V5sC10THeQGanrqIRKgVxsk0N3O%2B8ODC1QSJ2YVG4smN8k9IY183mBRzoflngk7nKO2QZbArTkKzBmj7j2A69jMOWxPPLAWv%2FZf6q9hg8Rpf%2FBwQG1xpbyORBZrNREyJ6Xu1u7YbngfcNMNsbaYebkh1ZxzINyhliVucQMgobRVqZGwlLWhCF3UzWXcY0%2F3fs5urGYdNjG8rfesf%2Bks8kp9clwqUHIUGQrnjvaxXi6TXvNWa7KpZoEk3KA7LQ8PrsHHku9EPpTgldA5QmVKmQ4L0mgHqMXb%2B5VGiDZ5wkugRFiFG%2FSHuDk4Lx4ya1rs76eQE3cK3rxJ8nfZfMoxs1mPJ%2BjWTpam%2F9StFsuaNdo7m4QYWV0gP8ynjBlBAaLvT881SYvdJGHV%2FnA9oejUhRLpnoVlDLBvsgdiXfrBXNUNsgEL0qBDC5hYx6rEvUrOODubMNAKGsSdAR61r5JI%2ButYOHU99QtnhiMxo%2BvmreNzKo28X3Fq7m%2F27EEE6mKz32qqw6PWl%2BU063DhN6tvfd5KFz64%2Fcim5HqWkDkp8CV%2FG5nggRmXGBZFpnypG6OWPRXa0fzFoxwCi4LFQEzxH2rTYsXkXqbbUuiEzPmvHgnodtAPAWlBPMK6z1skGOqUBReNzYq7UpGPIR4qgaFVBctcYZsraWnQBdY7u0i4txHj2ZQcCWJ2t5rAfPQKzuJplnAyjWlNJPS7%2BDwwWU97e9s%2BV554lqoZckMALROzOTaoUkigBOBGu%2BZ4eIoPCicXhCwLhX%2FLM2p%2F0EYJ2LtQiRLULJZN1OQBVwcK05yUb%2FhPUiiOqiTLp7f%2B8XEAHOy4p1H2wAhucLpbAEBLPYeyq%2Fu9%2BK7Wz&X-Amz-Signature=d729529b69427f215cdba4a0434c064d44806d111cbd5cf11fbf5d8a2eb28431&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

