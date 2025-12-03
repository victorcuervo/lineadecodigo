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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFQ346EK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T174919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFQhcPKQQXo%2FsckfDz71%2BPV7EH82BoCHOs0oOQ9FnveBAiEA%2BwEYrhrs8azjf8lIlbVJFsuChRho2ZDLPS%2BU6Sx%2FvKUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLygDuXg859p42vyOyrcA8AjlLLdHpmD9N8U4KG5aeAV5F4QGsiAXfmJ3R2D5SWLiZb8vs1oiNHg0Wyx%2BbVA18v8ajWQb%2BXooX6rEYlor3VE94e7hjMNekpj66Avvc1MMCaZQ5M4htZOJJ7FPVSFOcDkNCNOHkmgSOnTFa%2FMLnRrOUFBEn%2FZhVsRhzooYW0DQoClrMwtnsQ%2F4KJGkzP%2FzcCsErmniH5jZOc0oImLlCWfjlfFt9TChRA79WYuXEj%2B2dykpNJekCuixGmKSF8jn9suU76z2KbSXlxcB3wksQsStFEbYjjuM8dKP2ymsg5rcnM2AZqGj0jDRXpO1fdQnO00nmsiZ5Ss3nC0tyccVUU6NE8nkAsbJW80LRM2h6SkvUj13NFtBr6UhBoaNgjZ2RAGUWEkJndY0a0CixL4Hi0CEJPkpqCmuyTNGzB27jiKMCYGyRIq3KazubtxyhbgNXwPMejCmvqFKGo%2FQj8TU%2BRjmFTs%2B7y8S5%2BhovqTsng9EKdUG5fkjboJa53YUnB4%2BfoXAdfCDfPY07ojeSJPtbzoJAm6ZEEa%2FEeEyw2lRILmRV3ik4mRSoFOjXM9ngV%2BYyQyuucqdN2DcgtXPiub5Wef0wkwZPyj7Q9ON5obCPd7TlkIhyVBZgSKIyWnMJbbwckGOqUBbSjiMEiVgoRLiQe7z86wwfKPKVQrM0D1nzQySlv24wqVu15umeCMOTyuyQja1dkSzO81ri5Nfcuroshdy8HIQ4RbJg3XVQn7nBeV%2FnjFxQHxdU%2FdVzF%2Bmzdh%2B6D6%2FLr1ankBTIMPELMBtug5y7fHp4q7%2Boi47fBCKOJiQOlz1wSU1g2s2kIuwM5W%2BsE5r%2BBzJJlm3O%2BK3rUtDwxrhpDCQAiIw5Cl&X-Amz-Signature=5aeaa93f7cdad87374aa449e148e7604cdff8cbfff7110cb4e7636123fd0b9e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFQ346EK%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T174919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIFQhcPKQQXo%2FsckfDz71%2BPV7EH82BoCHOs0oOQ9FnveBAiEA%2BwEYrhrs8azjf8lIlbVJFsuChRho2ZDLPS%2BU6Sx%2FvKUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDLygDuXg859p42vyOyrcA8AjlLLdHpmD9N8U4KG5aeAV5F4QGsiAXfmJ3R2D5SWLiZb8vs1oiNHg0Wyx%2BbVA18v8ajWQb%2BXooX6rEYlor3VE94e7hjMNekpj66Avvc1MMCaZQ5M4htZOJJ7FPVSFOcDkNCNOHkmgSOnTFa%2FMLnRrOUFBEn%2FZhVsRhzooYW0DQoClrMwtnsQ%2F4KJGkzP%2FzcCsErmniH5jZOc0oImLlCWfjlfFt9TChRA79WYuXEj%2B2dykpNJekCuixGmKSF8jn9suU76z2KbSXlxcB3wksQsStFEbYjjuM8dKP2ymsg5rcnM2AZqGj0jDRXpO1fdQnO00nmsiZ5Ss3nC0tyccVUU6NE8nkAsbJW80LRM2h6SkvUj13NFtBr6UhBoaNgjZ2RAGUWEkJndY0a0CixL4Hi0CEJPkpqCmuyTNGzB27jiKMCYGyRIq3KazubtxyhbgNXwPMejCmvqFKGo%2FQj8TU%2BRjmFTs%2B7y8S5%2BhovqTsng9EKdUG5fkjboJa53YUnB4%2BfoXAdfCDfPY07ojeSJPtbzoJAm6ZEEa%2FEeEyw2lRILmRV3ik4mRSoFOjXM9ngV%2BYyQyuucqdN2DcgtXPiub5Wef0wkwZPyj7Q9ON5obCPd7TlkIhyVBZgSKIyWnMJbbwckGOqUBbSjiMEiVgoRLiQe7z86wwfKPKVQrM0D1nzQySlv24wqVu15umeCMOTyuyQja1dkSzO81ri5Nfcuroshdy8HIQ4RbJg3XVQn7nBeV%2FnjFxQHxdU%2FdVzF%2Bmzdh%2B6D6%2FLr1ankBTIMPELMBtug5y7fHp4q7%2Boi47fBCKOJiQOlz1wSU1g2s2kIuwM5W%2BsE5r%2BBzJJlm3O%2BK3rUtDwxrhpDCQAiIw5Cl&X-Amz-Signature=af6336ee758c6bb3835368b041c3fc51c357df001d0864141bc38bcd5be489d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

