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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZQ5LHS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD0%2FqdbXvivd4I6X8slK%2FpRNFyVi9LVX2Dyk%2BN1ZsWXZAIgT%2BytbhfgjVVBGZah8os56oMXm9Vc%2F%2FbCCOHUABzNRxkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDN1MrVGPal8UeIl5LCrcA15rUohnJA%2Bqm44SxyBhrKYPcydXDLDDFTlwUwrM30s12x9cbe8kcvAg0ORnkjfthn3ke5jzMVMhPOd6Ye702JwewgLjCvTnN5ODeXZCjHzXkHAsDnl3TTB5hOY9f4KQZg%2BYYlBXHMABvCWAV29B5m20EOuxZXZUxngJWb11ZCvU6AhlIRT4ede9uXE%2BFM24olMJjraLsHNAft1sP%2BwO4PuiIBHIzsXq9vdI8n%2FKA87Hnsacf1%2FCa%2F%2FkpXgMenoyRUB%2FReE6vNNSjYX9wgdKfh7OzWtuZDxVclMIL%2BAMiqHf8I%2BFoTDf1Mj5cOA9vIh3nel6sohId41okx%2B2mRLeRDYp%2BoKXY%2FsJTFbMLcfW9zHPyRUaO2BZGem2T2kxDA0t5wnjO7fm6DnrH8ecOAQ8TTtk93405PYiRqV1jg5TzkJob2BS05ZK%2BCQS0tEx5Cyt3iptOiE39h2RwvrLgKCmPr7ineysLEG8ILjclZruH1fTTB8JKfRclH4l3LXP0mDV9GNi6GnY4tG1AyJ3N7iE08MhcGtTtd8ndDqVjy%2B%2FmfW5VyQM8fcp3853zANraMXw6%2BfuAN8VCGOY8LqrDidbkLhdeCEvnoJbp9BZ2enqhcaMCAXfwkDtyZrtPEX8MP6SwMkGOqUB6JnkDHDk1UZa5C7rHkEe4VlIa3kYy4IovcHRYNw3j2wEVWob6FG52RxINEigTKQLSCV7YxELT%2Fl1JOLOGxJBWSxqrxKr63s%2BLjU2k0cadV5GaAbf1f9WyvzU4hKBpFBpMmU1iykifcB8B8t0X4QnH1fLxNmtdQKW%2BYcoNlJ8hQzXPzKJq%2FJ6lS4UFpv5hKoywLfoX03aGPyhc9GY2qwsWaaPRJKL&X-Amz-Signature=566ce11ba1c1fde5fa3d264c10a04cbba0a433c91e7b2bc69c1e2229f3727cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZQ5LHS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T104605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQD0%2FqdbXvivd4I6X8slK%2FpRNFyVi9LVX2Dyk%2BN1ZsWXZAIgT%2BytbhfgjVVBGZah8os56oMXm9Vc%2F%2FbCCOHUABzNRxkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDN1MrVGPal8UeIl5LCrcA15rUohnJA%2Bqm44SxyBhrKYPcydXDLDDFTlwUwrM30s12x9cbe8kcvAg0ORnkjfthn3ke5jzMVMhPOd6Ye702JwewgLjCvTnN5ODeXZCjHzXkHAsDnl3TTB5hOY9f4KQZg%2BYYlBXHMABvCWAV29B5m20EOuxZXZUxngJWb11ZCvU6AhlIRT4ede9uXE%2BFM24olMJjraLsHNAft1sP%2BwO4PuiIBHIzsXq9vdI8n%2FKA87Hnsacf1%2FCa%2F%2FkpXgMenoyRUB%2FReE6vNNSjYX9wgdKfh7OzWtuZDxVclMIL%2BAMiqHf8I%2BFoTDf1Mj5cOA9vIh3nel6sohId41okx%2B2mRLeRDYp%2BoKXY%2FsJTFbMLcfW9zHPyRUaO2BZGem2T2kxDA0t5wnjO7fm6DnrH8ecOAQ8TTtk93405PYiRqV1jg5TzkJob2BS05ZK%2BCQS0tEx5Cyt3iptOiE39h2RwvrLgKCmPr7ineysLEG8ILjclZruH1fTTB8JKfRclH4l3LXP0mDV9GNi6GnY4tG1AyJ3N7iE08MhcGtTtd8ndDqVjy%2B%2FmfW5VyQM8fcp3853zANraMXw6%2BfuAN8VCGOY8LqrDidbkLhdeCEvnoJbp9BZ2enqhcaMCAXfwkDtyZrtPEX8MP6SwMkGOqUB6JnkDHDk1UZa5C7rHkEe4VlIa3kYy4IovcHRYNw3j2wEVWob6FG52RxINEigTKQLSCV7YxELT%2Fl1JOLOGxJBWSxqrxKr63s%2BLjU2k0cadV5GaAbf1f9WyvzU4hKBpFBpMmU1iykifcB8B8t0X4QnH1fLxNmtdQKW%2BYcoNlJ8hQzXPzKJq%2FJ6lS4UFpv5hKoywLfoX03aGPyhc9GY2qwsWaaPRJKL&X-Amz-Signature=b0bc9d39021122d298cc6e13739dae35a15c3bab9a1e11a51ff6231ba3369883&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

