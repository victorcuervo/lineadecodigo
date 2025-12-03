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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CIS2UL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDR7NF8NiS42EkFIntWsKeUgevojpSANApMoIkJN%2F3e1wIhAJkVCefJU4Cy2qxj2fcqnu1Gu5PZCO5O3D1OdvVkd6nuKv8DCCoQABoMNjM3NDIzMTgzODA1IgzfBWBoWW2SbMZInAoq3AP2ks6cZQiD3XDRCZpihhx0%2B60Yebi23GgyHV2BFp4JmUkw1VwDoY9iqOdrmniMQr7yJb1YMp%2F8UfVcz7fmGHBHzzJO1cPpoRTYZ4rz0A8qdiwzZkPWU2VSOsKNwkk9%2FzLKo607MrJAyzY8mXkkqLrl9SLYr4QfP1Xyl83r4Uf0XMzj2BdJtJ7zPgbCuzlJ%2FgXp11fl9OvwHlnBJsEEgmFpbzLVqcOUEKkhCvVhCB1vStgYT7oUoAhjkde%2BfTZjHzpcqluVwOqY4qxwHUXOOn8r9wA8%2BZ%2BvzDncOGvMwVSw%2BxcNb6WWvnqDUeH6syQ5UrHhJJdxMa7vFqIAm2OFBrgDs%2B6d4DEM6drleFKHe9Fw%2BhkocIdvzLWxwmTN6R1HuXNJJkuEwL0jC4g54mhUEBFl%2FAKBapXxE6Zb5TtScfLbllzYaqhps8PnfrLU0JgVNS6XeZs5I5E0c4VEVmjtWxFtdeiEpyjz6Khd63qwcPxz8Ucmyzd2p%2FHo1q8Jnq3N4y9gwcWrhmCE0Rl7v1hc0KndpA8giludUE3q6WcToqohhLs7wZfxtzRZ9Yi23HwNhCH4Y7jNFx16rnPi9qoBx8oZCZPzc%2FBjTN9QVEG78PcfAHno%2B3G%2BLap%2F1K99LDCa97%2FJBjqkAfsVsVNeHZ6045wZZil6Vfe4bND2X2Q%2B0bCPtjiPuvfv1uvKEsu9maGJL6lglC%2Bi0XDl5d0nQtKma3McsikBgKza0YX1qXNoQg%2BFLQTcIN2BjV%2Bj42AiEsYfr1Rd1YYgF6vpDha1wb8HL%2BbY2qAHxCy5XlORJIVzk7lyD6wM1hlLj80WG51eL94UpgDhCdR1ElnVzCCcvTD2yXQhzwD3lz1E6r7b&X-Amz-Signature=2edacb8d64927d050a658df6f27286aca9a2281acec1b719095658bb0e6c9b85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663CIS2UL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDR7NF8NiS42EkFIntWsKeUgevojpSANApMoIkJN%2F3e1wIhAJkVCefJU4Cy2qxj2fcqnu1Gu5PZCO5O3D1OdvVkd6nuKv8DCCoQABoMNjM3NDIzMTgzODA1IgzfBWBoWW2SbMZInAoq3AP2ks6cZQiD3XDRCZpihhx0%2B60Yebi23GgyHV2BFp4JmUkw1VwDoY9iqOdrmniMQr7yJb1YMp%2F8UfVcz7fmGHBHzzJO1cPpoRTYZ4rz0A8qdiwzZkPWU2VSOsKNwkk9%2FzLKo607MrJAyzY8mXkkqLrl9SLYr4QfP1Xyl83r4Uf0XMzj2BdJtJ7zPgbCuzlJ%2FgXp11fl9OvwHlnBJsEEgmFpbzLVqcOUEKkhCvVhCB1vStgYT7oUoAhjkde%2BfTZjHzpcqluVwOqY4qxwHUXOOn8r9wA8%2BZ%2BvzDncOGvMwVSw%2BxcNb6WWvnqDUeH6syQ5UrHhJJdxMa7vFqIAm2OFBrgDs%2B6d4DEM6drleFKHe9Fw%2BhkocIdvzLWxwmTN6R1HuXNJJkuEwL0jC4g54mhUEBFl%2FAKBapXxE6Zb5TtScfLbllzYaqhps8PnfrLU0JgVNS6XeZs5I5E0c4VEVmjtWxFtdeiEpyjz6Khd63qwcPxz8Ucmyzd2p%2FHo1q8Jnq3N4y9gwcWrhmCE0Rl7v1hc0KndpA8giludUE3q6WcToqohhLs7wZfxtzRZ9Yi23HwNhCH4Y7jNFx16rnPi9qoBx8oZCZPzc%2FBjTN9QVEG78PcfAHno%2B3G%2BLap%2F1K99LDCa97%2FJBjqkAfsVsVNeHZ6045wZZil6Vfe4bND2X2Q%2B0bCPtjiPuvfv1uvKEsu9maGJL6lglC%2Bi0XDl5d0nQtKma3McsikBgKza0YX1qXNoQg%2BFLQTcIN2BjV%2Bj42AiEsYfr1Rd1YYgF6vpDha1wb8HL%2BbY2qAHxCy5XlORJIVzk7lyD6wM1hlLj80WG51eL94UpgDhCdR1ElnVzCCcvTD2yXQhzwD3lz1E6r7b&X-Amz-Signature=b8712555e645ac4800150694bef2f2977b52fbde284a1f2c1afa05710ab3a789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

