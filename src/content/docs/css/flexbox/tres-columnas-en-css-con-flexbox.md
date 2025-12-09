---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QZTKDSI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T101341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRTdO3A3LLjKm1%2F8aNXEpANxXzKs9ppH1LIZJiu8BewAIgQFDzGOdDv2wewzR72YeCiyI6zmimcud%2BRx0bJPxTzLgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3v3dsgF4%2B57SrLWCrcA4UWMXvAA8v2beXrPUJO7%2BnPIC84rtmN5cBhaTYuFAbkQ2WQ2jFTpRZwYFK2MBTvgKRyT69BcHiJMjQePhXh0QQaZGxpkv0xmDSMIwI8wSOFeY01%2FVlmjPzn2PqSpq1ZPP3L1mdS%2FGTDWk70vQdTO4OmvTvLayn5JnhIXokbma%2BhIz%2BrtFkESvhuIgXNZM%2BgXH5%2Fyw64ouCwri8QOXZeFOG%2FuWdZFv8JxPbXbEe8nZaTanu7OvtHKpipiH%2BsLlXWMBU3JCRqH2ts8oGLCfqK2g1jh3oIiG%2FL7Oto2m6vhwX8%2BcRb%2B6A9VNoGeeN5INfz%2B1rA6zWtLthwelY%2FX0FiGrKHLdBU%2Fg3cYsEP1f9T3056OldtQgD80LU4Gzr7nvNidAxZJPVbMicCfJ6gkGRSVE8itnrG%2BmiEjmrwaHpWA6LkQpswdt%2FaGMMxxJxRBY8neqssr2km%2FRj5iY3ZAXdUqRwY7P5M0XnEuZBirzViOFI4LJO%2BVGHMfxTKs%2BPcDu6pLpcwjQPSziKI745mdQSvQCpjsPtg8PCXpaqkw9yLj1hLd6TWReARMBq%2B%2Frf2yROB0c0xn7U6BUIFyRoBdB8Bq1mxQt7JSXG66zTOQoEX9tp%2FUzGefD2CEXswRI5iMLLD38kGOqUBiNkBYl29UeTFq9jqrK5uuOCnj2eshflvr6Z%2FDZO17pefcxHBQNN%2Bsd9VvvUt1LNuKm2cNgjpBsTf63ONTN8uHg2BCBHF8AFP1cKUKoV%2BFesrOPnAFw%2F2XdqkF0PAxDVuIFclcJ%2BM8ax0p1BmmkGEMbnQSSC6L1W9ctgHExLRgo6TfUYV7g0f931ksZyiL7Eeazqn3L7FK7PQjHHHSzS61N8J1T57&X-Amz-Signature=566006650f9c17629d3e8a9ec467d663f8b907d6a01b9b23c83d09560c32fb6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QZTKDSI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T101341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRTdO3A3LLjKm1%2F8aNXEpANxXzKs9ppH1LIZJiu8BewAIgQFDzGOdDv2wewzR72YeCiyI6zmimcud%2BRx0bJPxTzLgqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3v3dsgF4%2B57SrLWCrcA4UWMXvAA8v2beXrPUJO7%2BnPIC84rtmN5cBhaTYuFAbkQ2WQ2jFTpRZwYFK2MBTvgKRyT69BcHiJMjQePhXh0QQaZGxpkv0xmDSMIwI8wSOFeY01%2FVlmjPzn2PqSpq1ZPP3L1mdS%2FGTDWk70vQdTO4OmvTvLayn5JnhIXokbma%2BhIz%2BrtFkESvhuIgXNZM%2BgXH5%2Fyw64ouCwri8QOXZeFOG%2FuWdZFv8JxPbXbEe8nZaTanu7OvtHKpipiH%2BsLlXWMBU3JCRqH2ts8oGLCfqK2g1jh3oIiG%2FL7Oto2m6vhwX8%2BcRb%2B6A9VNoGeeN5INfz%2B1rA6zWtLthwelY%2FX0FiGrKHLdBU%2Fg3cYsEP1f9T3056OldtQgD80LU4Gzr7nvNidAxZJPVbMicCfJ6gkGRSVE8itnrG%2BmiEjmrwaHpWA6LkQpswdt%2FaGMMxxJxRBY8neqssr2km%2FRj5iY3ZAXdUqRwY7P5M0XnEuZBirzViOFI4LJO%2BVGHMfxTKs%2BPcDu6pLpcwjQPSziKI745mdQSvQCpjsPtg8PCXpaqkw9yLj1hLd6TWReARMBq%2B%2Frf2yROB0c0xn7U6BUIFyRoBdB8Bq1mxQt7JSXG66zTOQoEX9tp%2FUzGefD2CEXswRI5iMLLD38kGOqUBiNkBYl29UeTFq9jqrK5uuOCnj2eshflvr6Z%2FDZO17pefcxHBQNN%2Bsd9VvvUt1LNuKm2cNgjpBsTf63ONTN8uHg2BCBHF8AFP1cKUKoV%2BFesrOPnAFw%2F2XdqkF0PAxDVuIFclcJ%2BM8ax0p1BmmkGEMbnQSSC6L1W9ctgHExLRgo6TfUYV7g0f931ksZyiL7Eeazqn3L7FK7PQjHHHSzS61N8J1T57&X-Amz-Signature=4ed7c44abdf6332dfc61ac2c29f56aad56fde0c470061e0c578ac7571c14bf44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

