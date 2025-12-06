---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QGNDMC6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHETD4FRm46VRJMcHjAC9gL0YkXv6VBM0Lq7qlkVUTn0AiEAgSXNw8%2FgLeSGx3i9Fb1Ti2b%2FzMM6NYVgYkqrUq0yKowq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMQ6kHsap%2BljC%2F6BgSrcA4SsFLp3rvg8s36ZEulWtaa2dFyui1ZAIz6K6GF2p2acxgaQFLJFvzUgd8RhWa368FVvBNdRT43P9L2r2JesvUw5izogbc5Kt0QDBtqCk1aW3NdbAgG2a3D4HM3opC%2FUFNLpPdtLJWe4JoMD4JcgQCDqGbCNoTHlBIK3voyxBXiv7%2BxcaiR4kIb%2Fl7FQ%2FjVK%2Bi4wpuC537%2FUmXmUuzQniKPIPZKG4m52k%2BCn4RUCtNqmaCYy2Tg%2BBfSTELHgOsey6LMLEQVjKhESlram1K5Dgj9zBC8JIof8u%2FI0DJ7%2BtH2fXy8aMh1y3pAMZSKJt1%2BGFq1i08KGqUHBpQoM8jAmCu7wkcOsCr4CJWxQW1xviwHJXJVTlBojfCjtituX8vGgH3%2BdYemZz1l4z9TCvAIg6civL7w24k565hqU7wZzEFRL3fiPLAz6LjN7OHR5vwfvpgDr3uXx7uWmOryJLnRfzyTpTJhRz7r7JduH29qAhmXd64A4VDIadFbo2QsLbDoxpYxgwNYWGySRxZPldShwwnYsqQkEiU8XPUhMpNm1Eu9ZhUx%2BSWXdtZ16CjfgX11Fyfoo4vrisZW%2B%2FCf3kaQ1MhqrJpUm1t5rsOl8aopfoNBdODE9Zc4cAhGFuE2gMJan0MkGOqUBbK7H%2FmkMoaTr6RZvunzY3Zp1qJqb3ONu7GZXQn2MD6Zv18fwDApjDZDk8FYF4bSNk%2FfvwGQmgQKh%2BoSu8oc8Drhs4rI%2BGQ9UTd3mtz3BDo99tbW3BMOwmTn41W77omU6XzCvoKIU5vNmuzpJ4pm%2B8CFglMf7WociVPDDh4FTutPkWxzKMia4WMcgFjb2dQ8s%2Bd2nSoGt8rtKb1xZM9jR7ds11WVI&X-Amz-Signature=4591136f82c8452961348d9952f4d2df5a796de5fa539ba1d0a1f7133be9f356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QGNDMC6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T135531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHETD4FRm46VRJMcHjAC9gL0YkXv6VBM0Lq7qlkVUTn0AiEAgSXNw8%2FgLeSGx3i9Fb1Ti2b%2FzMM6NYVgYkqrUq0yKowq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDMQ6kHsap%2BljC%2F6BgSrcA4SsFLp3rvg8s36ZEulWtaa2dFyui1ZAIz6K6GF2p2acxgaQFLJFvzUgd8RhWa368FVvBNdRT43P9L2r2JesvUw5izogbc5Kt0QDBtqCk1aW3NdbAgG2a3D4HM3opC%2FUFNLpPdtLJWe4JoMD4JcgQCDqGbCNoTHlBIK3voyxBXiv7%2BxcaiR4kIb%2Fl7FQ%2FjVK%2Bi4wpuC537%2FUmXmUuzQniKPIPZKG4m52k%2BCn4RUCtNqmaCYy2Tg%2BBfSTELHgOsey6LMLEQVjKhESlram1K5Dgj9zBC8JIof8u%2FI0DJ7%2BtH2fXy8aMh1y3pAMZSKJt1%2BGFq1i08KGqUHBpQoM8jAmCu7wkcOsCr4CJWxQW1xviwHJXJVTlBojfCjtituX8vGgH3%2BdYemZz1l4z9TCvAIg6civL7w24k565hqU7wZzEFRL3fiPLAz6LjN7OHR5vwfvpgDr3uXx7uWmOryJLnRfzyTpTJhRz7r7JduH29qAhmXd64A4VDIadFbo2QsLbDoxpYxgwNYWGySRxZPldShwwnYsqQkEiU8XPUhMpNm1Eu9ZhUx%2BSWXdtZ16CjfgX11Fyfoo4vrisZW%2B%2FCf3kaQ1MhqrJpUm1t5rsOl8aopfoNBdODE9Zc4cAhGFuE2gMJan0MkGOqUBbK7H%2FmkMoaTr6RZvunzY3Zp1qJqb3ONu7GZXQn2MD6Zv18fwDApjDZDk8FYF4bSNk%2FfvwGQmgQKh%2BoSu8oc8Drhs4rI%2BGQ9UTd3mtz3BDo99tbW3BMOwmTn41W77omU6XzCvoKIU5vNmuzpJ4pm%2B8CFglMf7WociVPDDh4FTutPkWxzKMia4WMcgFjb2dQ8s%2Bd2nSoGt8rtKb1xZM9jR7ds11WVI&X-Amz-Signature=3cf0bffb0980e83a05a0eba9ea75a7a105db72d6ca94c66e3eb594583c8143b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

