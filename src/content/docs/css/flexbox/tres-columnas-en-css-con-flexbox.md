---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXYQ6WA2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBmKPZzYt7VH1zXcyjA%2FXYzLj9VaL8z2TxV6T8U3LrDgIgUrRNmFbvTeetBjSLcB3ZQWiCRmpevnmhvN98Aj4%2Bw68q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGFtftzf1GOo4Rvm4ircA48wbUBSrafjh%2ByvSI9zUwIH7iBAXMSEIThUp4hVAUJ%2BJ06jKqEOqlj8sDLLbrtYEwIe7leA%2F95jtqNQmhAOkUFPyaGaBtHlaNFrjNw%2B8u9dGViWXj2mY2c18kR0KvGvZ76bH41WuRSwQ2hxQMm2Iju5gpRwiur3dfk0sVpAamYG2%2BqSqq%2FZgkclHaHzhP1ofd7L%2BRvdA7REZc9kIESHMOBhlzOtENdKgtTg27ZwyQuHyBC%2BGZFko%2B1PIQWNRMjClKMTzYizoGJGT0Ln1klGwyVFJwZtEUHCaqNdAcwEeOwi44%2F%2BueWSvydCxINO6dWU0WoFfaURnsgNeDKBcoVf9L7Fkbuk5TJHRmGRM%2FV4cCgWGPqZnNN9PNiJdEIjDeHkYgmksA7rwJNU2VdhraRCqsjo8RDPn10nUDO%2F3nT9WxZzkbjhg%2BnmzIjAfW8%2F0YyD7QohTpBsgQOdrLAlZCUMSFZnYyb5h0%2Bw4qjM6zJWhjkT%2F5BZ9%2FSQN4sulBOWq5UIPaxvHsOwdfwkXXAWAQAZNDyaJ7bZS%2FuJHh4YBthxjVlLm04Ku0cAd4jbecg6G0VznpfWGEmhUAzoiQhQddbc17OKw8cUFxdtVPOqpaM6caPp4p1PTWRC2G4T5EH8MO6J0MkGOqUB2k0Tm%2F9omOsnWMBsKqFgmBaq68qkT6iZnGDJDHu91j1Wy28ge1OQwQDOA7O1i6dB6Ury%2FpTa555Q2s8nSB%2F76KkMYCc9M7bz%2FOHEYFjDpVKuE%2B%2BbWNcIpfwJHbVSHzY9kwwHT2tAvUyJMVpaTBAUgiPuaA6o8Fizs6W%2F0LY0RxFHBs7z%2BAoj2sqRPuX8PrQK6FPwu%2BGjdOKBMrHRN6DI43CUge6Z&X-Amz-Signature=7f5f4166bf599058891f0152213d4efb844d106c56acead8e0282e342118db04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXYQ6WA2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBmKPZzYt7VH1zXcyjA%2FXYzLj9VaL8z2TxV6T8U3LrDgIgUrRNmFbvTeetBjSLcB3ZQWiCRmpevnmhvN98Aj4%2Bw68q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDGFtftzf1GOo4Rvm4ircA48wbUBSrafjh%2ByvSI9zUwIH7iBAXMSEIThUp4hVAUJ%2BJ06jKqEOqlj8sDLLbrtYEwIe7leA%2F95jtqNQmhAOkUFPyaGaBtHlaNFrjNw%2B8u9dGViWXj2mY2c18kR0KvGvZ76bH41WuRSwQ2hxQMm2Iju5gpRwiur3dfk0sVpAamYG2%2BqSqq%2FZgkclHaHzhP1ofd7L%2BRvdA7REZc9kIESHMOBhlzOtENdKgtTg27ZwyQuHyBC%2BGZFko%2B1PIQWNRMjClKMTzYizoGJGT0Ln1klGwyVFJwZtEUHCaqNdAcwEeOwi44%2F%2BueWSvydCxINO6dWU0WoFfaURnsgNeDKBcoVf9L7Fkbuk5TJHRmGRM%2FV4cCgWGPqZnNN9PNiJdEIjDeHkYgmksA7rwJNU2VdhraRCqsjo8RDPn10nUDO%2F3nT9WxZzkbjhg%2BnmzIjAfW8%2F0YyD7QohTpBsgQOdrLAlZCUMSFZnYyb5h0%2Bw4qjM6zJWhjkT%2F5BZ9%2FSQN4sulBOWq5UIPaxvHsOwdfwkXXAWAQAZNDyaJ7bZS%2FuJHh4YBthxjVlLm04Ku0cAd4jbecg6G0VznpfWGEmhUAzoiQhQddbc17OKw8cUFxdtVPOqpaM6caPp4p1PTWRC2G4T5EH8MO6J0MkGOqUB2k0Tm%2F9omOsnWMBsKqFgmBaq68qkT6iZnGDJDHu91j1Wy28ge1OQwQDOA7O1i6dB6Ury%2FpTa555Q2s8nSB%2F76KkMYCc9M7bz%2FOHEYFjDpVKuE%2B%2BbWNcIpfwJHbVSHzY9kwwHT2tAvUyJMVpaTBAUgiPuaA6o8Fizs6W%2F0LY0RxFHBs7z%2BAoj2sqRPuX8PrQK6FPwu%2BGjdOKBMrHRN6DI43CUge6Z&X-Amz-Signature=0a7017ab9cc1d8ca5bd624b6c0ac6b82de7b8cecaeb561cb129eed1a34aeb1c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

