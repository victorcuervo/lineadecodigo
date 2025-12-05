---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MSL3GD6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T113946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClDP%2B1ICbpmd1L0GZOxu%2FUV8%2BAGw9YidvlVcu4vggqnAIgGzuCKcqBK42fSMYCY8xLHfl6ASYgnkLPulVhsET%2F9OEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGRQFKV%2FQo47Rxor1SrcA5pXfhkT07wroa%2F3%2FqnurfbiIEuZgKaxuZ0SwSvh82epejGgJYjFc1O%2FgngeYUzeNyQ9Eu5JKv6eolY6o5DibllecVC6Z0TB0AI3GtYkVbzSZY2D4ev%2FcUKC0x1chBI9d9kvIwn6wYJLwrxm4VoPAr9%2BDWsPVR6tIA3AkTQA1CxIxk2vghKWV2njywoieyQF%2BteVzfI%2F9hEXC4AYjcMmhNRsT4npJXWRP5F%2F3UguzmbYoMH5f9r%2B1LdMGwHGG18jABOvFCVKLfFmyzUSstO4JrYUoijGXSw9ehte0WsFI5CdQhLHUY1Utp4ycSLkxmmYEyjM%2B9ubQMRyHpauOslPtNeVv2WscCNmTnD3RcR0LN9Hfp1nlp3Q4lY7%2F41oOJ5BzkIPsHw85V8GuDPMhXO75HkHCsinfZgZi6fhzFmdGj%2FBYE%2FrHgLQZxV8mp%2FThwbVYaOmTVjNwVnpTI1oZbvIYwdDGmi1e3roXjydqRAe%2FZxpMu7luKbpiR3qGm%2BThf2eI%2F0aSMPg%2BoPul1OWDuhWffQpVntP3D7adOTMciAqAcdYBI8a7JORPrGoCRCgiN3nm44U4g79g1hYn0RI2pgzrSqp%2FZLfGirbxF0c49bYfcLSnJv9nDbMy9GGrrcyMKXRyskGOqUBr%2BIQlu8MFhmnli6VROO6pVqbSJ6eTOrqFkYzZ18tElnvZu88%2BM7koOvsQ4EpiR3E7nUNVOBXOHa8jbfBTgEPQEnvGsymtfQKr5dXAfYDuh%2BE9NIg2NmLrUNTtOjZwZPaMmkqaf%2FQ2nll9Tg85iAHXRNuaJLnuFcyJlXmB1abiHMq1ddt%2BCI3AtcvyWDKSo2KGdtnwoGTAtJZb2V2EzZWpF9MUp%2FI&X-Amz-Signature=2de3aa719c2bdca73b2e261989ab5a638a259250e82231c554b948ac66f0735a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MSL3GD6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T113946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClDP%2B1ICbpmd1L0GZOxu%2FUV8%2BAGw9YidvlVcu4vggqnAIgGzuCKcqBK42fSMYCY8xLHfl6ASYgnkLPulVhsET%2F9OEq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGRQFKV%2FQo47Rxor1SrcA5pXfhkT07wroa%2F3%2FqnurfbiIEuZgKaxuZ0SwSvh82epejGgJYjFc1O%2FgngeYUzeNyQ9Eu5JKv6eolY6o5DibllecVC6Z0TB0AI3GtYkVbzSZY2D4ev%2FcUKC0x1chBI9d9kvIwn6wYJLwrxm4VoPAr9%2BDWsPVR6tIA3AkTQA1CxIxk2vghKWV2njywoieyQF%2BteVzfI%2F9hEXC4AYjcMmhNRsT4npJXWRP5F%2F3UguzmbYoMH5f9r%2B1LdMGwHGG18jABOvFCVKLfFmyzUSstO4JrYUoijGXSw9ehte0WsFI5CdQhLHUY1Utp4ycSLkxmmYEyjM%2B9ubQMRyHpauOslPtNeVv2WscCNmTnD3RcR0LN9Hfp1nlp3Q4lY7%2F41oOJ5BzkIPsHw85V8GuDPMhXO75HkHCsinfZgZi6fhzFmdGj%2FBYE%2FrHgLQZxV8mp%2FThwbVYaOmTVjNwVnpTI1oZbvIYwdDGmi1e3roXjydqRAe%2FZxpMu7luKbpiR3qGm%2BThf2eI%2F0aSMPg%2BoPul1OWDuhWffQpVntP3D7adOTMciAqAcdYBI8a7JORPrGoCRCgiN3nm44U4g79g1hYn0RI2pgzrSqp%2FZLfGirbxF0c49bYfcLSnJv9nDbMy9GGrrcyMKXRyskGOqUBr%2BIQlu8MFhmnli6VROO6pVqbSJ6eTOrqFkYzZ18tElnvZu88%2BM7koOvsQ4EpiR3E7nUNVOBXOHa8jbfBTgEPQEnvGsymtfQKr5dXAfYDuh%2BE9NIg2NmLrUNTtOjZwZPaMmkqaf%2FQ2nll9Tg85iAHXRNuaJLnuFcyJlXmB1abiHMq1ddt%2BCI3AtcvyWDKSo2KGdtnwoGTAtJZb2V2EzZWpF9MUp%2FI&X-Amz-Signature=9e231d4077e04540d19fa7ee9dda85201113652c2a22f933dbca715e9a3c1a07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

