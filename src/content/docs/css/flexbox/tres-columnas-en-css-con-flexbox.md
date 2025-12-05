---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645RUQUDH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrLoO3%2BsOJIeMNsaIPEz3Rf%2Fgp3mnjS2sgOOze0qqJHQIgZC7YPH0hBT%2FQd3DBoJMJa5842E%2FEchcP%2FwZx5z%2B4UY4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGcUkYHn9K%2BkFIrORircA%2FpUbDTFVVWz7%2F6m7SXByz9XvYq2LBoXUQkRZCyzQt2Zm8lTojcYdcY%2F4obMlY78n5hM1XyYqZ%2Fidv2KKHrgkJ8JE1cxuJ4j6fOmb%2BrzxZ1GKJyTnxPsSN3koQL7zX9L2pBEjPTEEowvHZHPl4U%2FAZRyW1hbvA5rEvvYWvcjYPGaiH3bi512ZixsyazqN1wUa1Y6hNyydeoclODtbRFc%2BUwBAntCnRS5Q3Hg9m9XeR1rb9UcPy2gUilF6OAH5Ays82q7VzBhX%2FVmOPiO9yEaYu36oYJpuAfnpzAarZvvTEcvc9o%2F6fL3RyjwBLlMBtpD9rQTyRHyI67kpC2wf9vwhJ8lVQ%2FMsSLByWyA%2F%2FOYvKVekk91vXuMeyg5EGa7RQO7ORiDV0%2BOxPQmWDN%2FWWaArq3cRk5CQ1yIyMyNDm7Kv6fC3cfWZWA4iL8Pt0MTl48I4HoGGohFXugyafNFsk1difl4QM1UHpfe0C%2FxW1pmHLvpWIHTIXMG%2B3UjLMZ2h0g2oqjVkp242krdvVVJDPq5Fi02RFfBDx94BRtuoU1WsHrntkklegyKwmXgmOhV9V5sdyU7Iw58FbrdwRbUawbmhOA%2FZmKp3MWLppqYO9pbdYTVV5JceAO6kCX7Kb0fMJWryckGOqUBTS7zbzaJz1fD6ofjlIUJfK9tPJjeBTeq9zkYKdILPRxWq9%2FGv%2FGUth6maGfx5cN2P3yaQdLUXZB%2BAIZH99YlTGFLvavxRMlu9NnYfh%2BmctvVCNs7QLWsUK%2F2tFD0orU5C%2B5AZkhF%2FEvBZOJJI6ZTrfbPfv%2B9etqNqNNvU61JRzSIfP1y35E74leer3ug3yZ8yOeQB8BTKta3wR35G2GN18xGqirr&X-Amz-Signature=cd0e7ab335c23d680a21f912585603ac386294a0aee654f5b418e225f5fdae74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645RUQUDH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrLoO3%2BsOJIeMNsaIPEz3Rf%2Fgp3mnjS2sgOOze0qqJHQIgZC7YPH0hBT%2FQd3DBoJMJa5842E%2FEchcP%2FwZx5z%2B4UY4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDGcUkYHn9K%2BkFIrORircA%2FpUbDTFVVWz7%2F6m7SXByz9XvYq2LBoXUQkRZCyzQt2Zm8lTojcYdcY%2F4obMlY78n5hM1XyYqZ%2Fidv2KKHrgkJ8JE1cxuJ4j6fOmb%2BrzxZ1GKJyTnxPsSN3koQL7zX9L2pBEjPTEEowvHZHPl4U%2FAZRyW1hbvA5rEvvYWvcjYPGaiH3bi512ZixsyazqN1wUa1Y6hNyydeoclODtbRFc%2BUwBAntCnRS5Q3Hg9m9XeR1rb9UcPy2gUilF6OAH5Ays82q7VzBhX%2FVmOPiO9yEaYu36oYJpuAfnpzAarZvvTEcvc9o%2F6fL3RyjwBLlMBtpD9rQTyRHyI67kpC2wf9vwhJ8lVQ%2FMsSLByWyA%2F%2FOYvKVekk91vXuMeyg5EGa7RQO7ORiDV0%2BOxPQmWDN%2FWWaArq3cRk5CQ1yIyMyNDm7Kv6fC3cfWZWA4iL8Pt0MTl48I4HoGGohFXugyafNFsk1difl4QM1UHpfe0C%2FxW1pmHLvpWIHTIXMG%2B3UjLMZ2h0g2oqjVkp242krdvVVJDPq5Fi02RFfBDx94BRtuoU1WsHrntkklegyKwmXgmOhV9V5sdyU7Iw58FbrdwRbUawbmhOA%2FZmKp3MWLppqYO9pbdYTVV5JceAO6kCX7Kb0fMJWryckGOqUBTS7zbzaJz1fD6ofjlIUJfK9tPJjeBTeq9zkYKdILPRxWq9%2FGv%2FGUth6maGfx5cN2P3yaQdLUXZB%2BAIZH99YlTGFLvavxRMlu9NnYfh%2BmctvVCNs7QLWsUK%2F2tFD0orU5C%2B5AZkhF%2FEvBZOJJI6ZTrfbPfv%2B9etqNqNNvU61JRzSIfP1y35E74leer3ug3yZ8yOeQB8BTKta3wR35G2GN18xGqirr&X-Amz-Signature=d916aeb7c313c1048fd993d85c2e75882b0b4e4298f4a69e6b2851f93889bc78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

