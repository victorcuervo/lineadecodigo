---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2GT5L7D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGgxGrAF82wH2pkHUclZ349D80Ns4atDuZ5vXBZPP%2BNPAiEA0qci3ydKl%2Fhq9%2FkuY99Pe3yvTsMiN4Xx6Nkd0J9eDOwq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDEeEGVGhgpakHdtayircA%2Bf%2FHbQalPEVWP0xv1KTyhDpEZZiuqUr7%2FuugrURUsQBX8GDZ%2BGgIpGucUqwhvxlWtLn9cLdL0dw1ylp1DqlwtbUJOVOFIEnSh9Q2FNhv3VABHCS%2FP63VhRKsbFXiWtYrdz%2B%2F2Htmo79U4iy3HU9B3a1Az2lTdn%2B74d7izuLNKVYnGE6Z1%2FzjEPIKXH2Ie8aXoVkaMLMWYPYy9Bv%2F%2Bpj%2BanjoWF0x0V7LIL210bQkH1KFtNDZCt6e4xFb5olyUzgz7iX0gky3eicJqaxfN7%2FO1MSJ4tL6BmeVzAyDq4xq%2Fc8zmckKUECtsLpVajUh0vKgReC2MOOI%2BRLTcTkdMwUC9tzgMApBfIFVMYPhIThs2Kjs7W98asWDGaALj5NsJrnzUBGeBb4Ock40r%2FR%2F3rtrCSf152kFXK%2FtxYrDKxPl%2BiinGL%2FI%2FzlwvC323tevXrQw3HkR5ULltmJtZWfDIN6MISF8L6qFKXpDu5WNM8pmwGVxLk7CraAmk7DNHCVhGlPBDm3qR1ME32EDUS%2FivZUNQ0ooqxMRULsrmmhx3wjTtsyxUfEBs%2FBMQDlekdQEb0BGJLoUf%2FMRflcvj4bNqKlkzzbdHcioHslsR2QcJCmzU4KmN4KnnQbRNnTS%2Fe5MKG1w8kGOqUBAz96S2gEbZFEIo7pPnFBAuUny%2FRChM7431z9jg7XlxYE%2FBsFQD6KcPFvSgfXkDf1RWQgDoGrj62aOj1YbdXktqTMnxtIrNKRfVsqDMm5GR%2BCDcIYcKWB2BGYk%2F1blvcT14mg%2FEdWqomQMQe5%2FQDVBqUpP5bOiLrZzxqHar59rUCIn2cfwqBLU8qcIChkIS9p84fcYQm6OTkrh0k8TkeBrTGMHa64&X-Amz-Signature=0342f71457082265fd65f9d5a041dbd857297a72589f12bd61a15e95733aede9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2GT5L7D%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIGgxGrAF82wH2pkHUclZ349D80Ns4atDuZ5vXBZPP%2BNPAiEA0qci3ydKl%2Fhq9%2FkuY99Pe3yvTsMiN4Xx6Nkd0J9eDOwq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDEeEGVGhgpakHdtayircA%2Bf%2FHbQalPEVWP0xv1KTyhDpEZZiuqUr7%2FuugrURUsQBX8GDZ%2BGgIpGucUqwhvxlWtLn9cLdL0dw1ylp1DqlwtbUJOVOFIEnSh9Q2FNhv3VABHCS%2FP63VhRKsbFXiWtYrdz%2B%2F2Htmo79U4iy3HU9B3a1Az2lTdn%2B74d7izuLNKVYnGE6Z1%2FzjEPIKXH2Ie8aXoVkaMLMWYPYy9Bv%2F%2Bpj%2BanjoWF0x0V7LIL210bQkH1KFtNDZCt6e4xFb5olyUzgz7iX0gky3eicJqaxfN7%2FO1MSJ4tL6BmeVzAyDq4xq%2Fc8zmckKUECtsLpVajUh0vKgReC2MOOI%2BRLTcTkdMwUC9tzgMApBfIFVMYPhIThs2Kjs7W98asWDGaALj5NsJrnzUBGeBb4Ock40r%2FR%2F3rtrCSf152kFXK%2FtxYrDKxPl%2BiinGL%2FI%2FzlwvC323tevXrQw3HkR5ULltmJtZWfDIN6MISF8L6qFKXpDu5WNM8pmwGVxLk7CraAmk7DNHCVhGlPBDm3qR1ME32EDUS%2FivZUNQ0ooqxMRULsrmmhx3wjTtsyxUfEBs%2FBMQDlekdQEb0BGJLoUf%2FMRflcvj4bNqKlkzzbdHcioHslsR2QcJCmzU4KmN4KnnQbRNnTS%2Fe5MKG1w8kGOqUBAz96S2gEbZFEIo7pPnFBAuUny%2FRChM7431z9jg7XlxYE%2FBsFQD6KcPFvSgfXkDf1RWQgDoGrj62aOj1YbdXktqTMnxtIrNKRfVsqDMm5GR%2BCDcIYcKWB2BGYk%2F1blvcT14mg%2FEdWqomQMQe5%2FQDVBqUpP5bOiLrZzxqHar59rUCIn2cfwqBLU8qcIChkIS9p84fcYQm6OTkrh0k8TkeBrTGMHa64&X-Amz-Signature=36a53f3ae96b71f1005a5867fee7ab1bcf8557a986f1034fda76ab36a1580d1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

