---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4EAYUS6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDTSMAS3CMaTHKVRXzYPrds8dAG7IulgLnkgwt9o50ImAIhALMNXMmQgF8Z14oCtLkj%2FXq2IXebjyfmA1mmLYalIL%2BhKv8DCEUQABoMNjM3NDIzMTgzODA1Igxzfi0O9cQyImtd4Pkq3ANRRExxSe079eYoJKTJY0JYI3B9M1TkYhpwbiJKTvY5zJMoywdFhSw4f4DX%2FjgOCrXE3irmvRADMjWpW1zmZBUxA7jnWYf34GWUSJLp2bjM3qJciUQB9b0DIzRKfThJjk5waf0RRIMm2VuY9BVGRZB26HUWmZvRJ8ksinBVSd2sfu8jPaVMLSexF8Jygq65oPgGklz9n2TGA0B8nAfUqsbUCO7Ibm1hFYpQtRJiO4ts4VyvgcO43xRpYrQJZUpi6SdxEle%2FzF71qS2UdLJbl7Msv39Dm7%2BFW7LFmnK%2Fzw35BustKECFkSICm%2Fjb9BNke1rdTy4yZCbUnuYF8MgB%2BZ6XiWSwNpouY78TkyIFqq7eQRYd1UUOLSeFowxLH2OGFKLBYff74dc%2Fx91Q1o2HTKGgxufFYwNllwtM9Ao1pO8HE6F5D1%2Fn424WSSOcY7qGvW1T%2BOnN0%2BvjhvN%2BJ%2B1cpUpBhryTfYg94x7noSqEWEEW3E1RPIq916ULX%2Bu4DinKK3IXpqxTWZwo9KxUGJm0kBrI3CN0GHHyCh2vsSZq1G74AtDaSombgV6Hk8BbXZG%2F8BCHNebkQTqttpt%2B%2Bgdry2eAn7%2BY29c0SVOCFbuCmR2VKYGraN46QJb%2BcarVJDDD5sXJBjqkAYRKtDk0FTJi%2FOVj%2BTRWSwcbrQapfRB9cQ5ijchUE05J3hQxO9Qar3x9FaLCadUyA7MzkNnXOKc6tzd8eA1sVFC1JMajAuTKn9dozz4yO3egRXdoeaAlxl%2BcZOJwqTKYA18K8kyZBgiYysV6V44QUrsgbzTMny%2FhJ3gNKgL0JWAnyGfGSlPH1acnXIGZdQuO%2FKBz%2FOXrv1O8%2BNJkwQtFM9OJ8geV&X-Amz-Signature=c586963e4759e58131ef7d12a99492fadc3f1f24f341bbf8dd1958d91a7d349d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4EAYUS6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDTSMAS3CMaTHKVRXzYPrds8dAG7IulgLnkgwt9o50ImAIhALMNXMmQgF8Z14oCtLkj%2FXq2IXebjyfmA1mmLYalIL%2BhKv8DCEUQABoMNjM3NDIzMTgzODA1Igxzfi0O9cQyImtd4Pkq3ANRRExxSe079eYoJKTJY0JYI3B9M1TkYhpwbiJKTvY5zJMoywdFhSw4f4DX%2FjgOCrXE3irmvRADMjWpW1zmZBUxA7jnWYf34GWUSJLp2bjM3qJciUQB9b0DIzRKfThJjk5waf0RRIMm2VuY9BVGRZB26HUWmZvRJ8ksinBVSd2sfu8jPaVMLSexF8Jygq65oPgGklz9n2TGA0B8nAfUqsbUCO7Ibm1hFYpQtRJiO4ts4VyvgcO43xRpYrQJZUpi6SdxEle%2FzF71qS2UdLJbl7Msv39Dm7%2BFW7LFmnK%2Fzw35BustKECFkSICm%2Fjb9BNke1rdTy4yZCbUnuYF8MgB%2BZ6XiWSwNpouY78TkyIFqq7eQRYd1UUOLSeFowxLH2OGFKLBYff74dc%2Fx91Q1o2HTKGgxufFYwNllwtM9Ao1pO8HE6F5D1%2Fn424WSSOcY7qGvW1T%2BOnN0%2BvjhvN%2BJ%2B1cpUpBhryTfYg94x7noSqEWEEW3E1RPIq916ULX%2Bu4DinKK3IXpqxTWZwo9KxUGJm0kBrI3CN0GHHyCh2vsSZq1G74AtDaSombgV6Hk8BbXZG%2F8BCHNebkQTqttpt%2B%2Bgdry2eAn7%2BY29c0SVOCFbuCmR2VKYGraN46QJb%2BcarVJDDD5sXJBjqkAYRKtDk0FTJi%2FOVj%2BTRWSwcbrQapfRB9cQ5ijchUE05J3hQxO9Qar3x9FaLCadUyA7MzkNnXOKc6tzd8eA1sVFC1JMajAuTKn9dozz4yO3egRXdoeaAlxl%2BcZOJwqTKYA18K8kyZBgiYysV6V44QUrsgbzTMny%2FhJ3gNKgL0JWAnyGfGSlPH1acnXIGZdQuO%2FKBz%2FOXrv1O8%2BNJkwQtFM9OJ8geV&X-Amz-Signature=a8d9364b4cb9ee67d20d309ec1f4972b981ee06cf4f04652e88257959386fcb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

