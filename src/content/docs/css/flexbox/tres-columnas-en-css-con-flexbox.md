---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFJ55CXP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMCsg%2BEpZLrEnOZQrx42o7IdY%2F8%2F71%2FtAIijkbizYxGAiEAqyO%2B65cIYb7rDNn4%2Bpmyuis%2Bz3wbXv1h5%2BlkADGxgvMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKMiL24hTn8IJLRdDyrcAzXEeeRdokA1ij1Orrof0j3UI8xLjf%2FPcb61vFYYAqTecPrwtv4E5V6qGrHAZ6T9CtbacNLCC%2F7Uqc5zXmh%2BC%2Blvj1zaxssTexGFY5wZycFh2Zqew9zakQOmIRyU6p6vVQot41ijVYPoniCWGI8wSwP2orfQu26IkLdh35h2HjKE2xxZgO7Nga69QrMQGgMeWLe7ve3RjJwjDiZFcUrJkgGzdaQbhtgfSjhb2kem2SvUM%2BtatrCDI4lAOsX1%2BTYdEmiK8Ve430i8BajFRuwnQ8EYgP05Bm%2FmcbY5lbKc1auM4WQ8RAA7h3tqQcdu70hzb7SzfKbjTBe03%2BVrlX%2BuORStzHG%2BOjD7Y7MyIU3pUZ56rWEE58pm6QohBZPFTTr0kT22wOgQhdzsLg3JuaIQqgy6UUL1cLJ0Xt%2FZeDm9oEzoHn7qauzxDdCFZ970C5f47Ow0rgAiHFyvTchrZQaXkad2ur1Bb74jhZCH3NSUcv5aq9GtiSYOwInS%2BN78dnPAnnypsrsTS1roPsw3Gl974Bdw6MZUNWmPhyLWRk51MWWJaE1sZTX0iuLKdWB9ARCOgKn7ZxGqYb92hziIjJjPo2qLR0moQacoCjOgwU1H4rgLBcp%2FihnZMlUSlAu2MIjK0ckGOqUBT2Hnd1QJ2ZcFSQO2RPmrV6mwW%2Fly2eN2wuZ8dNhS%2F27k19l1zBSwIZuS7ATGsrd22X6CDxEdKmUnko3sfmTK1b7kKM71ekLFTHKuUfkBFiLa0VvLVmZIymMMUvJzs%2BaPkk%2FtYoqZuRXnObBfrF3HwMdC5Fy0mc%2FhFVmdcsZBxei%2BypbD%2FLC9YqLyZph53NJS7Qgix8bPlw3wvhLLwVzk2LwwwKmf&X-Amz-Signature=847d8d179ffa10db686410cb8ab708e665d5217d48aeb1b16425268bca6b8cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFJ55CXP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T203934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMCsg%2BEpZLrEnOZQrx42o7IdY%2F8%2F71%2FtAIijkbizYxGAiEAqyO%2B65cIYb7rDNn4%2Bpmyuis%2Bz3wbXv1h5%2BlkADGxgvMq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDKMiL24hTn8IJLRdDyrcAzXEeeRdokA1ij1Orrof0j3UI8xLjf%2FPcb61vFYYAqTecPrwtv4E5V6qGrHAZ6T9CtbacNLCC%2F7Uqc5zXmh%2BC%2Blvj1zaxssTexGFY5wZycFh2Zqew9zakQOmIRyU6p6vVQot41ijVYPoniCWGI8wSwP2orfQu26IkLdh35h2HjKE2xxZgO7Nga69QrMQGgMeWLe7ve3RjJwjDiZFcUrJkgGzdaQbhtgfSjhb2kem2SvUM%2BtatrCDI4lAOsX1%2BTYdEmiK8Ve430i8BajFRuwnQ8EYgP05Bm%2FmcbY5lbKc1auM4WQ8RAA7h3tqQcdu70hzb7SzfKbjTBe03%2BVrlX%2BuORStzHG%2BOjD7Y7MyIU3pUZ56rWEE58pm6QohBZPFTTr0kT22wOgQhdzsLg3JuaIQqgy6UUL1cLJ0Xt%2FZeDm9oEzoHn7qauzxDdCFZ970C5f47Ow0rgAiHFyvTchrZQaXkad2ur1Bb74jhZCH3NSUcv5aq9GtiSYOwInS%2BN78dnPAnnypsrsTS1roPsw3Gl974Bdw6MZUNWmPhyLWRk51MWWJaE1sZTX0iuLKdWB9ARCOgKn7ZxGqYb92hziIjJjPo2qLR0moQacoCjOgwU1H4rgLBcp%2FihnZMlUSlAu2MIjK0ckGOqUBT2Hnd1QJ2ZcFSQO2RPmrV6mwW%2Fly2eN2wuZ8dNhS%2F27k19l1zBSwIZuS7ATGsrd22X6CDxEdKmUnko3sfmTK1b7kKM71ekLFTHKuUfkBFiLa0VvLVmZIymMMUvJzs%2BaPkk%2FtYoqZuRXnObBfrF3HwMdC5Fy0mc%2FhFVmdcsZBxei%2BypbD%2FLC9YqLyZph53NJS7Qgix8bPlw3wvhLLwVzk2LwwwKmf&X-Amz-Signature=9e2efbd50179febfe80f064f9007401ca03abba8f45d00e0cd97978ae6071ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

