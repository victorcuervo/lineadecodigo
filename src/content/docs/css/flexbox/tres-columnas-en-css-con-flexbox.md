---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZLLW7A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbLDdF6zGhReHaPDMxmAnckiRaOYsiIRk9zThnKk6KiAIhAMKijBQYr9OquFRjwLFY%2Bnlbxkv%2BWmdsnLW8QCT1R0O1Kv8DCEkQABoMNjM3NDIzMTgzODA1IgwIlUcjLwKHMLWvq8Yq3AOCC331DaxNta9NuaULg94C58kIcjiRme9v%2FQFTpLvNGFYjzpW%2BiYKJsw2UZtmPOmOZxJae8TspnIG4plZCUltZPO56deshfOcEj5altJ8X%2F0htIRj3hXS6JzJvEpe%2F1Q3X9tKwr9voEXQrkGVij2r8q8CekRWJfg7oZI7ArX7IBwNTvkxDZhqn78jfBi%2B3ryRI84nSPZwIeDm8%2FT8olnDjqp%2FbXTq1leZKNba3mxMmFfZbHN4LxstJJlkEliuwqPWHVVIeL76zAMVf6rgdG%2FEKA6mBoyQ%2F%2FsFW9Wbr4U%2BG1iCeQUSpPuVxIcVaBM8xMew2WFsaw9EuJwcGkRgaCuL5tcJrbduWtPKSvPNvkw20Q8WrYWuPpQpSAXIt69MSrzHg%2BQTZeV%2FywFOf7CWxtOyCi4A8tm9ieSLWMdFEWUrNRyfHotOm9H8Nh48QbBbz0IESxJSgAjj%2Bi6xCJK2eeGPDRoVV%2BOejGt6gabPar4eG%2BrUs5f8vYiL2m3DKXa60gPq5Psm7DalQya6w5p3VIBsGhIoOB6ug%2Bp%2FvxO1QkVXq%2FcT1daAX7JKU167JnbmzvU%2B%2BYuMMuSclwWwsKHkkRLIkjwz1LhN%2BcroGfl0Lq%2Bh%2Fsw3N9ErlHHVOimptEDDU28bJBjqkAXtkYpw%2Bsqht56jQ5SnXcNxJeoOA9KJyC%2B33mk3YIP5qNkF7ZTNVsypY2Q9X5nL%2F5OMTqz2RowvUGFfKV82nMWXWyZMrO2l%2FmkVHF4vx56rLRYtcD9Xf3QIvRUi8ggUmhh1D6jKmpPktVsZ%2B3%2B8%2BFmPR67tbYJSseaVoQeVPdL05IV9p3tL%2BWf%2FHKcO6RWi%2BP%2FtnbVvqBDTOuX6lR%2FqVQIca8P8O&X-Amz-Signature=3204e9a97469520488527a0c9613e95fa2a934999cbb2977e401b5a5180ecacc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMZLLW7A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbLDdF6zGhReHaPDMxmAnckiRaOYsiIRk9zThnKk6KiAIhAMKijBQYr9OquFRjwLFY%2Bnlbxkv%2BWmdsnLW8QCT1R0O1Kv8DCEkQABoMNjM3NDIzMTgzODA1IgwIlUcjLwKHMLWvq8Yq3AOCC331DaxNta9NuaULg94C58kIcjiRme9v%2FQFTpLvNGFYjzpW%2BiYKJsw2UZtmPOmOZxJae8TspnIG4plZCUltZPO56deshfOcEj5altJ8X%2F0htIRj3hXS6JzJvEpe%2F1Q3X9tKwr9voEXQrkGVij2r8q8CekRWJfg7oZI7ArX7IBwNTvkxDZhqn78jfBi%2B3ryRI84nSPZwIeDm8%2FT8olnDjqp%2FbXTq1leZKNba3mxMmFfZbHN4LxstJJlkEliuwqPWHVVIeL76zAMVf6rgdG%2FEKA6mBoyQ%2F%2FsFW9Wbr4U%2BG1iCeQUSpPuVxIcVaBM8xMew2WFsaw9EuJwcGkRgaCuL5tcJrbduWtPKSvPNvkw20Q8WrYWuPpQpSAXIt69MSrzHg%2BQTZeV%2FywFOf7CWxtOyCi4A8tm9ieSLWMdFEWUrNRyfHotOm9H8Nh48QbBbz0IESxJSgAjj%2Bi6xCJK2eeGPDRoVV%2BOejGt6gabPar4eG%2BrUs5f8vYiL2m3DKXa60gPq5Psm7DalQya6w5p3VIBsGhIoOB6ug%2Bp%2FvxO1QkVXq%2FcT1daAX7JKU167JnbmzvU%2B%2BYuMMuSclwWwsKHkkRLIkjwz1LhN%2BcroGfl0Lq%2Bh%2Fsw3N9ErlHHVOimptEDDU28bJBjqkAXtkYpw%2Bsqht56jQ5SnXcNxJeoOA9KJyC%2B33mk3YIP5qNkF7ZTNVsypY2Q9X5nL%2F5OMTqz2RowvUGFfKV82nMWXWyZMrO2l%2FmkVHF4vx56rLRYtcD9Xf3QIvRUi8ggUmhh1D6jKmpPktVsZ%2B3%2B8%2BFmPR67tbYJSseaVoQeVPdL05IV9p3tL%2BWf%2FHKcO6RWi%2BP%2FtnbVvqBDTOuX6lR%2FqVQIca8P8O&X-Amz-Signature=0b62bb2367225870025063dcd67c925eb3a68aa03d3329cdeecead8213b87b99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

