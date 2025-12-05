---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665ZOYZ5S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS%2FqaPjihDgmlv2x%2BX5GPQSq4%2F2RXkYWcSFe3%2FhIasBAiEA7%2FEjsfzIJ2zinD%2Bz55jiCznLulNvkVFGew%2Bo2%2F0eCIUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIftWq3YhnX6sumcCCrcA2U6VVweAcqIdcfrfD1WMOHZD9yHKS%2BP1NZxHuCMNRTwq0LUYMjj1nIulXq70bijOnD6tJ8gWQdUQw4MlINqZ2l8z6ni1k3gZR2bPiwyiq0mx7jwLHTEB8V9SWeK6oXTqY4mA8CAZjbwfFR0jGEgmPMd2NZDJZo5jlvW%2B%2BdhHJtaTunMmQWqFmwcQpZ92Trm%2Fqjvi%2F62Pq9AAAI87hFyuOYCl569JsG8nCmnkXTfI1Tr0s51oX0IiFm6zTnMh5ftPYI7EbTQDmijMdGgV%2FDknKuMvxv8P9bSKYKp9Ss1CnuLzIUK01v4SuH%2FiLbxobA91WCAufcylcO%2FATKnJQiuN8NrmYDykTX56zgcEbTlypFDLCTA8K%2F3wSaR09F33wf2UwnC5tHbcgbf5KFJ0JLYHUd1iscpKVHJHjhhKE2e80RpBkRyf4Uz9pY0%2BrF0fTLRShJyZ6pDmBx1MAwrB5q%2FcS%2FzS7t3E35zdWcRTNrQh%2FEnf1eAGs8urAh6KNXG0%2BZxTKbH4xUp8vKnVwi%2Bu92wjceGhYZYIlKqVaazys77DNg0f8Khl0mX494kT3GmgGkm5TcffXv4M3Q6ottPXRiL4TGceTtYQlC9C%2FO4IROvT2Ns8Z1bfHU5rY9EhqDzMIuoyckGOqUBt1LDHAU3Twx1e9WGkscjoirS4qPIKF7dN9XOSreFB%2Bd1E0sW3wOCNkYflq%2F0aoDF4NJZXbBbUHGAHJphD8HF6AxXR86pJqwd2NTasikF81uCki%2F7exCRyXx8u5UCLmEUB%2Bq%2BnT04VXNchoOo9%2FVGazFdTjt2%2BOrS9pNO8652gT%2FG3ZNhieFBlwu9NiGwveFpZa8hvGkl%2FQikNoGV36nPyrcqr37R&X-Amz-Signature=ce6b1c9f462307c3ee92df369667bb9091dd07660f2bbf84bd81014b7d5fc345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665ZOYZ5S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040535Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFS%2FqaPjihDgmlv2x%2BX5GPQSq4%2F2RXkYWcSFe3%2FhIasBAiEA7%2FEjsfzIJ2zinD%2Bz55jiCznLulNvkVFGew%2Bo2%2F0eCIUq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDIftWq3YhnX6sumcCCrcA2U6VVweAcqIdcfrfD1WMOHZD9yHKS%2BP1NZxHuCMNRTwq0LUYMjj1nIulXq70bijOnD6tJ8gWQdUQw4MlINqZ2l8z6ni1k3gZR2bPiwyiq0mx7jwLHTEB8V9SWeK6oXTqY4mA8CAZjbwfFR0jGEgmPMd2NZDJZo5jlvW%2B%2BdhHJtaTunMmQWqFmwcQpZ92Trm%2Fqjvi%2F62Pq9AAAI87hFyuOYCl569JsG8nCmnkXTfI1Tr0s51oX0IiFm6zTnMh5ftPYI7EbTQDmijMdGgV%2FDknKuMvxv8P9bSKYKp9Ss1CnuLzIUK01v4SuH%2FiLbxobA91WCAufcylcO%2FATKnJQiuN8NrmYDykTX56zgcEbTlypFDLCTA8K%2F3wSaR09F33wf2UwnC5tHbcgbf5KFJ0JLYHUd1iscpKVHJHjhhKE2e80RpBkRyf4Uz9pY0%2BrF0fTLRShJyZ6pDmBx1MAwrB5q%2FcS%2FzS7t3E35zdWcRTNrQh%2FEnf1eAGs8urAh6KNXG0%2BZxTKbH4xUp8vKnVwi%2Bu92wjceGhYZYIlKqVaazys77DNg0f8Khl0mX494kT3GmgGkm5TcffXv4M3Q6ottPXRiL4TGceTtYQlC9C%2FO4IROvT2Ns8Z1bfHU5rY9EhqDzMIuoyckGOqUBt1LDHAU3Twx1e9WGkscjoirS4qPIKF7dN9XOSreFB%2Bd1E0sW3wOCNkYflq%2F0aoDF4NJZXbBbUHGAHJphD8HF6AxXR86pJqwd2NTasikF81uCki%2F7exCRyXx8u5UCLmEUB%2Bq%2BnT04VXNchoOo9%2FVGazFdTjt2%2BOrS9pNO8652gT%2FG3ZNhieFBlwu9NiGwveFpZa8hvGkl%2FQikNoGV36nPyrcqr37R&X-Amz-Signature=1aa65fe3ad18e8e297c2c1522ca7d62f2c353bd065cc21c3952facbee7f495d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

