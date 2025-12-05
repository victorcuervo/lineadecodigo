---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667332LEZY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoLJroBiALx21NOdZMvq0sncDKvV0nEgj%2BLQj1jybevAiAuLSNAlekWCkOacrHiVC0NpCe0zU2%2Bah30SsBRdh%2Fx6yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM1oPhf6sc81bKOwv9KtwDFJKPuG3HNp2ws8tIMy0QJVfJBiAtZKgOr4Dz8cDLHCRPjtXZjLpmhRqVJge5FM3%2B2tSh%2FDKyVp54hLZA6LdsRHtz7uuxmzkjXYKvqMKFwfdC08wEHBK6rRLjCoEg50Uzml2XKxfp5QsapuMTA4jqa%2BOv%2FAWjvT0TqbpphWS79kUf1Jk%2Bfhnd3lFLBRVdXVk%2Bz4ymhr4pb4k8ZyU69U1bdQzmZtbVaSSV0YCv8SiLlC9zqabQDPmlm%2F%2FyvOrp03pGGfPxjkLT8lxXZMo%2FcG9dmFOmY7LgMGaqbDPHT0r843cxqDhuO7KMxV9TVMcyOvt1wPmrC1LeKUQUy7M5w7yOT4l5JC1lFhjipJRIWAeLZlW6GYcWeGURInM6WuEZP3r8JHxMnpjdD5mN0GM3m66hdhX5CpzZIz4AhZiM2LjAtq6i9WpxAdMZtBQlmCG8WoVmnFks1s9YPwAS7Qxjmk5oMJAnAwjIkaaKCA1M2qfyZ6CwyoLDJBL15rQ4wE%2FB9LQdwEHlEPLnoV4KFqnTdnFOH4lHtlP%2FJIOqjrCSC77KfA%2BC6u1ghn5Vuk6rtvg3NlPMZ2KFTqPvoW%2FNy0Lwvm4vDK%2BFvPAHpm5QDMADzXZIWXyaReqnyG56umBD774wlarJyQY6pgFApcyBcUJZB8hN92d177oacNOUOyb1GS%2B5SXrt1NmA3xRfdiXw0uB5keAaQ%2BJ2Q7Scst6%2FnXa5GwPhOquVeHJE%2BAcILQj6ws7rDwJDJ4iObe%2Fy9LsdoJdJBbaydcee9AwhZPrdsvXosUJv%2FtgtG9aYZMQvnmz%2BFa4Nj3jix5lX7ndKdYLcAzf2rPUCJvMo0zEkZxxOaj0PCDfL1y13CCNs4fV%2BFWDA&X-Amz-Signature=a8e8934d932ef1d0eb51d5698ea29fc175f92637539d7263eafc4e0d8668e714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667332LEZY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T064820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoLJroBiALx21NOdZMvq0sncDKvV0nEgj%2BLQj1jybevAiAuLSNAlekWCkOacrHiVC0NpCe0zU2%2Bah30SsBRdh%2Fx6yr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM1oPhf6sc81bKOwv9KtwDFJKPuG3HNp2ws8tIMy0QJVfJBiAtZKgOr4Dz8cDLHCRPjtXZjLpmhRqVJge5FM3%2B2tSh%2FDKyVp54hLZA6LdsRHtz7uuxmzkjXYKvqMKFwfdC08wEHBK6rRLjCoEg50Uzml2XKxfp5QsapuMTA4jqa%2BOv%2FAWjvT0TqbpphWS79kUf1Jk%2Bfhnd3lFLBRVdXVk%2Bz4ymhr4pb4k8ZyU69U1bdQzmZtbVaSSV0YCv8SiLlC9zqabQDPmlm%2F%2FyvOrp03pGGfPxjkLT8lxXZMo%2FcG9dmFOmY7LgMGaqbDPHT0r843cxqDhuO7KMxV9TVMcyOvt1wPmrC1LeKUQUy7M5w7yOT4l5JC1lFhjipJRIWAeLZlW6GYcWeGURInM6WuEZP3r8JHxMnpjdD5mN0GM3m66hdhX5CpzZIz4AhZiM2LjAtq6i9WpxAdMZtBQlmCG8WoVmnFks1s9YPwAS7Qxjmk5oMJAnAwjIkaaKCA1M2qfyZ6CwyoLDJBL15rQ4wE%2FB9LQdwEHlEPLnoV4KFqnTdnFOH4lHtlP%2FJIOqjrCSC77KfA%2BC6u1ghn5Vuk6rtvg3NlPMZ2KFTqPvoW%2FNy0Lwvm4vDK%2BFvPAHpm5QDMADzXZIWXyaReqnyG56umBD774wlarJyQY6pgFApcyBcUJZB8hN92d177oacNOUOyb1GS%2B5SXrt1NmA3xRfdiXw0uB5keAaQ%2BJ2Q7Scst6%2FnXa5GwPhOquVeHJE%2BAcILQj6ws7rDwJDJ4iObe%2Fy9LsdoJdJBbaydcee9AwhZPrdsvXosUJv%2FtgtG9aYZMQvnmz%2BFa4Nj3jix5lX7ndKdYLcAzf2rPUCJvMo0zEkZxxOaj0PCDfL1y13CCNs4fV%2BFWDA&X-Amz-Signature=48589ed49749a4bb5a6b8dadf407ca387d0411012aa8241548cd17f7955bafab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

