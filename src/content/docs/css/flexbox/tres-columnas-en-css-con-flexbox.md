---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJL7WX2C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1kFwFNdbf1b7WsWfQ7ibXWnFWeMskoCQ3M87JeMQSAgIgJAcTf%2Buorl6WiH8OT3BYPYN9wVW4i67x7dGEvW4MgjkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgmMbWQo030R%2Bzt1ircA7qoQHy8rUMp76%2Frw8zJw0QCdhSdP4Ce%2FYgR65G1JzVi8Bw5kGDc7V33NeS2zPUaqewwDOH%2F0WbGgaanJfl9e2hnGJ1vE5W9MyJ0AOLsbwVQdU9FdByjr4Zl6uXEh%2FqHfDUoac5kzLWMAiyxYc8EHJszfP9ez%2FqpXpGdS%2BUZ3Ts%2B6AaN9t1n3ozQYeIRfRmKi1SxtDGr7cdc0BOvM8RZ4Z7Yj6ZMjPv4wLD9E6HwYt4Oi%2FlYYOe5%2B%2BGI6cwE744MfGCsEg19o%2FHrow7n%2FXI9UAArFK0u6934sYE%2BRRT%2BXj4u11g6FO3UNS98o%2B0GOpqTgdT%2FIexu1niN4HbRX6TwLqNwzKBZU51Crj87wp1hG3A3j3RuB5mkCTQHEegahDxiXI2ilKsqk74CxjvZyc9ho0s4pw2DRncF%2FDbDaHorJBhW1pm3lfRF4uDvtb559RM%2B6AEdgcShIoy3lHsmjmC3nBn9t7tktUSmrNtYQ7y5%2BgJIH0%2F%2FVtuUyKndNF6icaG%2BiadY3COtatlQfx%2Fbo%2BZJCSKbEVqDp7rMq2PbEH2hn8pfZp0EXxY5%2FeuY0BYDb8%2FEMPkjZwK1alEbWJeUIDNT0iGii2Nc1ZR8rYyTyA4ixsHp1M7PSbYyWQF5t1BcMKmX1MkGOqUBdw6q0xnTWLn2d6Iw9HxjfirWFaAOPYZb0G4Ti7FlKsGn05ZswdQZ7p7xNkkiZ0n8wLiLMKX4ryRMVyPE7YaOxNwNmNI9focuZbYRlgjT8Hc%2FG7xOaFxg8CH6ZX440S5p8J55Z7aiL%2B%2FV3%2FZ7cqIV9wOwPf5tKWp2nLF6DF6aVsaaOMRsmXWcWCGu8L8COPho%2ByPVmZmXhODQcaynwfZ2Cc%2FdLwcl&X-Amz-Signature=effc955208258742ecc2b09241c2bc320d91e8f05ae3c71d4a360b2cb8f2cf96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJL7WX2C%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1kFwFNdbf1b7WsWfQ7ibXWnFWeMskoCQ3M87JeMQSAgIgJAcTf%2Buorl6WiH8OT3BYPYN9wVW4i67x7dGEvW4MgjkqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOgmMbWQo030R%2Bzt1ircA7qoQHy8rUMp76%2Frw8zJw0QCdhSdP4Ce%2FYgR65G1JzVi8Bw5kGDc7V33NeS2zPUaqewwDOH%2F0WbGgaanJfl9e2hnGJ1vE5W9MyJ0AOLsbwVQdU9FdByjr4Zl6uXEh%2FqHfDUoac5kzLWMAiyxYc8EHJszfP9ez%2FqpXpGdS%2BUZ3Ts%2B6AaN9t1n3ozQYeIRfRmKi1SxtDGr7cdc0BOvM8RZ4Z7Yj6ZMjPv4wLD9E6HwYt4Oi%2FlYYOe5%2B%2BGI6cwE744MfGCsEg19o%2FHrow7n%2FXI9UAArFK0u6934sYE%2BRRT%2BXj4u11g6FO3UNS98o%2B0GOpqTgdT%2FIexu1niN4HbRX6TwLqNwzKBZU51Crj87wp1hG3A3j3RuB5mkCTQHEegahDxiXI2ilKsqk74CxjvZyc9ho0s4pw2DRncF%2FDbDaHorJBhW1pm3lfRF4uDvtb559RM%2B6AEdgcShIoy3lHsmjmC3nBn9t7tktUSmrNtYQ7y5%2BgJIH0%2F%2FVtuUyKndNF6icaG%2BiadY3COtatlQfx%2Fbo%2BZJCSKbEVqDp7rMq2PbEH2hn8pfZp0EXxY5%2FeuY0BYDb8%2FEMPkjZwK1alEbWJeUIDNT0iGii2Nc1ZR8rYyTyA4ixsHp1M7PSbYyWQF5t1BcMKmX1MkGOqUBdw6q0xnTWLn2d6Iw9HxjfirWFaAOPYZb0G4Ti7FlKsGn05ZswdQZ7p7xNkkiZ0n8wLiLMKX4ryRMVyPE7YaOxNwNmNI9focuZbYRlgjT8Hc%2FG7xOaFxg8CH6ZX440S5p8J55Z7aiL%2B%2FV3%2FZ7cqIV9wOwPf5tKWp2nLF6DF6aVsaaOMRsmXWcWCGu8L8COPho%2ByPVmZmXhODQcaynwfZ2Cc%2FdLwcl&X-Amz-Signature=e760f9ed90018e239b77b506006f0020259975171455973893ef272b9653dbaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

