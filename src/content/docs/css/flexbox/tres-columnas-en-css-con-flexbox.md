---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIXNN5XF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfg%2Bwte18kUzIE2t8iF9Fyl%2FZzOGYq2Lvjla%2BK3RwsIAiEAsMEdbmtC%2B8sfxLU6vpgsCGsyim0dCNwsVcCLXkasYboq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHykJls5UWgUMnczSyrcA7ehEG3FcDcYyUKIPaDWikiN7LsXAoYPJ1sL7ECTncPhzJeJvv%2B46M9WeFJ6w4DsKGyaA7e1znN7GqEqGxPaT6oKI%2FbLFzaYmhsKqxj1bwK7v9zOZjqi07NqXzz4m6h3uwBzd3bJojPL8cNAwmaY%2FUnZqA0xdwI3RQg94ejtfdpDPM0CZvFq0gKhgqf6xfU%2F6Kbkal%2FfTrMMmiiPuIJp4hBn%2FjMiglZidp7w8VwEi%2BtHuJAZENQdcf9yb%2BQf7ukkYcn86qicf2cMAC5z858kgIB6n1xZ7NNWCPZKI9aGjnr0ofIocQ4y0dDrHeYuR3jvHN6qqTt64fO%2BcfnaJri9aV8dM7Vvoy84W0QavQ8IYQNuR5E6EqISZEeSSEoB0Fgcil3UPUCa30p4oeho5ceZ%2BrhXVyHuhCHi1J%2B%2FnWArGb8cHXOqbuqlxjk8tvomqwhGme6vzvIetpUKXgBLmPOm7vwhsdRdWvIB%2BooRO5arV7T6P6xlGxDfILdaZnRTDF1VqOSnRQPItcp0ZhLFLLLV7id%2B6losD%2ByDkbd5q8KHdm%2BP0u68MtYn%2Fcl%2FOzJaLjQM%2Bfqday7CruJCQLlYEjLGxbwq%2F7jEBnc20663IoA8VupznkUtKZO0r%2BFYcd8xMIjK0ckGOqUBdfrxiVUi%2BMUGFZEw35hKAvIleF7w%2FKYLxwLjjzSwpZJPPB3kqZNR7hfwlPtLc7D34ms35DhpkIv6W2a27w3A%2FnK0iwA58GyhNd99Auv4%2BdgkdYeJpzhZ7XLP0fQyV7eseMkwTv6hf9DMMxbN2Kf3EPj2E%2BfMMQ8seL8OGZQG6itljXl2XceIpbK%2FO4I1h7L1m51EEBP49nVaxaYHReKEMy8MO6Mo&X-Amz-Signature=880cef1f2bdae39cc74e1fccf48ad711d864472e0c5e8c9103a0f7810fe1dafc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIXNN5XF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T200829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfg%2Bwte18kUzIE2t8iF9Fyl%2FZzOGYq2Lvjla%2BK3RwsIAiEAsMEdbmtC%2B8sfxLU6vpgsCGsyim0dCNwsVcCLXkasYboq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDHykJls5UWgUMnczSyrcA7ehEG3FcDcYyUKIPaDWikiN7LsXAoYPJ1sL7ECTncPhzJeJvv%2B46M9WeFJ6w4DsKGyaA7e1znN7GqEqGxPaT6oKI%2FbLFzaYmhsKqxj1bwK7v9zOZjqi07NqXzz4m6h3uwBzd3bJojPL8cNAwmaY%2FUnZqA0xdwI3RQg94ejtfdpDPM0CZvFq0gKhgqf6xfU%2F6Kbkal%2FfTrMMmiiPuIJp4hBn%2FjMiglZidp7w8VwEi%2BtHuJAZENQdcf9yb%2BQf7ukkYcn86qicf2cMAC5z858kgIB6n1xZ7NNWCPZKI9aGjnr0ofIocQ4y0dDrHeYuR3jvHN6qqTt64fO%2BcfnaJri9aV8dM7Vvoy84W0QavQ8IYQNuR5E6EqISZEeSSEoB0Fgcil3UPUCa30p4oeho5ceZ%2BrhXVyHuhCHi1J%2B%2FnWArGb8cHXOqbuqlxjk8tvomqwhGme6vzvIetpUKXgBLmPOm7vwhsdRdWvIB%2BooRO5arV7T6P6xlGxDfILdaZnRTDF1VqOSnRQPItcp0ZhLFLLLV7id%2B6losD%2ByDkbd5q8KHdm%2BP0u68MtYn%2Fcl%2FOzJaLjQM%2Bfqday7CruJCQLlYEjLGxbwq%2F7jEBnc20663IoA8VupznkUtKZO0r%2BFYcd8xMIjK0ckGOqUBdfrxiVUi%2BMUGFZEw35hKAvIleF7w%2FKYLxwLjjzSwpZJPPB3kqZNR7hfwlPtLc7D34ms35DhpkIv6W2a27w3A%2FnK0iwA58GyhNd99Auv4%2BdgkdYeJpzhZ7XLP0fQyV7eseMkwTv6hf9DMMxbN2Kf3EPj2E%2BfMMQ8seL8OGZQG6itljXl2XceIpbK%2FO4I1h7L1m51EEBP49nVaxaYHReKEMy8MO6Mo&X-Amz-Signature=e635dbf90058d7d8e397e6e5a26a7ef16ce28b9955c4f128a535fc5d5687dd5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

