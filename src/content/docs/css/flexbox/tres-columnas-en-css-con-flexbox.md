---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UHDWNKZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAngAAoxQieDigEfzULlSXa%2B0qIGFTgv4Hmc2LDRdrdpAiEAiSuguxRpFCX1wmZEvmNxa8SRsy1QCTxVsSqsk5D7bwIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFAKlJm%2FRpqEQ3za%2BSrcA6H2tvaAbt2bxCSElcH6BQx%2BMpZJJlButvcQhVjVxj%2Ba35foA4bxEmiGuO0ti%2B%2B0qLTOTMqhBu8Q%2Fw8U08chsCwQ1aXXa3odYJX43tGqGdJ9DLtx%2FwYf%2Fg2v%2Bw%2BKrSGE0WjXYkVF1srX28VDMt9ax2Ogtouk%2FM%2FOThqS2BYlkEUvFFaRP%2BgbxTFsGSU7VSDF0DagHTTUCzt8V4d1W6ztDEkkk2ExuSgOHvlILu1rE3npttl%2B%2BWXniN9IuO9b58zSaJYAtZ5eAw4m1%2BEhd7OjXKSphhe1bw9Y1ZrdGkfxFPg2NpxJhSiYDJFahkSsPxzS6H2mMydk0EC7o64etO89d38gXipKZ%2FsCYs6sKhoD6TEMgVtSfzqlhMW5TEB9UQZmsfkIYP5tFNYnMLElmADAlFBNM0jPh1xMCUsE0J4YCIPYu5PoEaeTVby47ExBfs7XFFP6136OjsFg5wXFATcCShPg2ZlEEZsogm%2F3zwj0FTkEuKU6Usp6K9HGV846MtJiNg8MZP29vA4b9epDG6abuV6dqzDZLwBUT9Q1cXXWesFSeuzcAeXu3MGXrvwGzwYQJMCoOqG%2BOrfNiUlIUJqAUMcR%2FTwbpjPFKHGW1wpTJkIsgT3LMtMVW5eYYxg1MJym0MkGOqUBUNPaAqVi1CV2C%2FHoMNlhwdKQBaQyhssW1eCIRt8c6WI3W1uQslbGGoA%2BFc9B2efsmzypiJ7SG6IEVZqLDnuMLQPAXHD%2F82urq3q7nKB2jgoxaXwdytnfaiesuoIGuniajlMMueS9bpuXSPdfJfhXuMrfmKZ001dIhtTAp8Et5LtsF9wwe5n5hefLR0GX1jP7se5PSpw2CJpzA6l32QNf1LlnoqUI&X-Amz-Signature=d6b1422fd8eafe92523e542a0d56ee5838265c2b66349d894bd0a5baefbe43b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UHDWNKZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAngAAoxQieDigEfzULlSXa%2B0qIGFTgv4Hmc2LDRdrdpAiEAiSuguxRpFCX1wmZEvmNxa8SRsy1QCTxVsSqsk5D7bwIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFAKlJm%2FRpqEQ3za%2BSrcA6H2tvaAbt2bxCSElcH6BQx%2BMpZJJlButvcQhVjVxj%2Ba35foA4bxEmiGuO0ti%2B%2B0qLTOTMqhBu8Q%2Fw8U08chsCwQ1aXXa3odYJX43tGqGdJ9DLtx%2FwYf%2Fg2v%2Bw%2BKrSGE0WjXYkVF1srX28VDMt9ax2Ogtouk%2FM%2FOThqS2BYlkEUvFFaRP%2BgbxTFsGSU7VSDF0DagHTTUCzt8V4d1W6ztDEkkk2ExuSgOHvlILu1rE3npttl%2B%2BWXniN9IuO9b58zSaJYAtZ5eAw4m1%2BEhd7OjXKSphhe1bw9Y1ZrdGkfxFPg2NpxJhSiYDJFahkSsPxzS6H2mMydk0EC7o64etO89d38gXipKZ%2FsCYs6sKhoD6TEMgVtSfzqlhMW5TEB9UQZmsfkIYP5tFNYnMLElmADAlFBNM0jPh1xMCUsE0J4YCIPYu5PoEaeTVby47ExBfs7XFFP6136OjsFg5wXFATcCShPg2ZlEEZsogm%2F3zwj0FTkEuKU6Usp6K9HGV846MtJiNg8MZP29vA4b9epDG6abuV6dqzDZLwBUT9Q1cXXWesFSeuzcAeXu3MGXrvwGzwYQJMCoOqG%2BOrfNiUlIUJqAUMcR%2FTwbpjPFKHGW1wpTJkIsgT3LMtMVW5eYYxg1MJym0MkGOqUBUNPaAqVi1CV2C%2FHoMNlhwdKQBaQyhssW1eCIRt8c6WI3W1uQslbGGoA%2BFc9B2efsmzypiJ7SG6IEVZqLDnuMLQPAXHD%2F82urq3q7nKB2jgoxaXwdytnfaiesuoIGuniajlMMueS9bpuXSPdfJfhXuMrfmKZ001dIhtTAp8Et5LtsF9wwe5n5hefLR0GX1jP7se5PSpw2CJpzA6l32QNf1LlnoqUI&X-Amz-Signature=bf393a18e0aa8116d79573e26971cebfdb03defa6d62223a07dba89cfa67578f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

