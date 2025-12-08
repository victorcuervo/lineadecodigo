---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOHZLKJV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5Tfz%2F9Ni6TLPKQOLLBqdkFAnW6jtp0m8NLOlyhDnomAiAmrey7Aa6DD8uGX7RvXFpO3OtPlKoC%2BwGDzI7NVCwHUiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHF0FFxyKit9toe9MKtwDRUkN0kugFHvACkIJQCyt%2FdD2Sp%2FR2QM1Njx%2F8G7EMqTj8YUBwBL3gO8RGMJYHaobER8vHublqsK67MUmWdOhPWNKPzwo6wlcKRviCZNQNLsZxOCeruOlrAGlXH1kkSS2zE7cp7VzZa6mxaIGT7UW4%2FGW6R2j6jQeKoCgov3uqnkgSHS7aULKuviP8UL4D14vbyCADNq8aPX6uEX5MYwxF9E9BZka%2FliKWUB9Jrs1fhSlD6JfqURpxuxP1HkyiHyuU7BqfXKJf40PFtW4bb9kswzmvEU7EMeKjGyONkJif14FitHEiyUl2OYtfEtyH4pOusc5IcBbQrinfqCL42cHNNLyGzocx%2FUIauflZZAZgLgnuEXSHqITPXqe%2F1P5dw%2Bdu2LZKlktcFMCXI4AHeBDKEc%2BGyeNYLblN7G%2FFcjcmjs8PxSCfOazGkOZLODHvOFhK62C5KjV1loyf63lxKjpxZGnezbgEQIwxq9hAj4Hh%2F69465kpbyCH%2FXbiRV2JxdNdyBcCKc%2BIJyF7JS4d%2FhEfEzjG6gNuxQt34%2F5B%2Fz1Hmo%2BxV%2FjziZtPrFE6YIlQxrezzaRaS%2BF6UYlR52HaLLAbtKKefgzpkCVqgjFWffjXhM4dsnsmpkRbc9cVkww0%2B3ZyQY6pgH6%2BwNO%2BWY59WspU8wJbYyfLbWqgDYWtb9PpRIiJwZsee%2FBoB%2BOlXRYQxlC9lTNrxv4U%2FiYQTxMJuzBZ%2F5s88cIU%2BxmBy0SMQc%2F6n6fbEWK3X68u0zD6g2FVBUU%2FK6Ip2%2BuDAYK1MnqRqOTP%2ByCOfWc%2FqIk5nFGOSL9XI9Ofuqd6SBCLo1YFxX1pbuWuw3Qyo83MiCBKWkzWb%2FpHY62%2B9Wc%2F1Zhmnwk&X-Amz-Signature=ee3e9a3371a7f87d6daa2d30021dffd97fd65c4179cf9ed420ed1c30d4559d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOHZLKJV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T072449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5Tfz%2F9Ni6TLPKQOLLBqdkFAnW6jtp0m8NLOlyhDnomAiAmrey7Aa6DD8uGX7RvXFpO3OtPlKoC%2BwGDzI7NVCwHUiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHF0FFxyKit9toe9MKtwDRUkN0kugFHvACkIJQCyt%2FdD2Sp%2FR2QM1Njx%2F8G7EMqTj8YUBwBL3gO8RGMJYHaobER8vHublqsK67MUmWdOhPWNKPzwo6wlcKRviCZNQNLsZxOCeruOlrAGlXH1kkSS2zE7cp7VzZa6mxaIGT7UW4%2FGW6R2j6jQeKoCgov3uqnkgSHS7aULKuviP8UL4D14vbyCADNq8aPX6uEX5MYwxF9E9BZka%2FliKWUB9Jrs1fhSlD6JfqURpxuxP1HkyiHyuU7BqfXKJf40PFtW4bb9kswzmvEU7EMeKjGyONkJif14FitHEiyUl2OYtfEtyH4pOusc5IcBbQrinfqCL42cHNNLyGzocx%2FUIauflZZAZgLgnuEXSHqITPXqe%2F1P5dw%2Bdu2LZKlktcFMCXI4AHeBDKEc%2BGyeNYLblN7G%2FFcjcmjs8PxSCfOazGkOZLODHvOFhK62C5KjV1loyf63lxKjpxZGnezbgEQIwxq9hAj4Hh%2F69465kpbyCH%2FXbiRV2JxdNdyBcCKc%2BIJyF7JS4d%2FhEfEzjG6gNuxQt34%2F5B%2Fz1Hmo%2BxV%2FjziZtPrFE6YIlQxrezzaRaS%2BF6UYlR52HaLLAbtKKefgzpkCVqgjFWffjXhM4dsnsmpkRbc9cVkww0%2B3ZyQY6pgH6%2BwNO%2BWY59WspU8wJbYyfLbWqgDYWtb9PpRIiJwZsee%2FBoB%2BOlXRYQxlC9lTNrxv4U%2FiYQTxMJuzBZ%2F5s88cIU%2BxmBy0SMQc%2F6n6fbEWK3X68u0zD6g2FVBUU%2FK6Ip2%2BuDAYK1MnqRqOTP%2ByCOfWc%2FqIk5nFGOSL9XI9Ofuqd6SBCLo1YFxX1pbuWuw3Qyo83MiCBKWkzWb%2FpHY62%2B9Wc%2F1Zhmnwk&X-Amz-Signature=8af6872bd03e72dd79b844af7fea1174e74a894e03ca7503aeefcff46638c3fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

