---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYAFTPZE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAgU%2BbDgAAiJwE0XOTHgA68%2BBfLmtvisVXX1o0oC3rsAiEAmkpuwgQ%2BaaPOsl121TkcjbGO51re%2B0T5jKSWXlL1s9sqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJbL8blSNf8LKXHeCrcA1uehYeFRVawL7dya3pdtcrT78lnmwxvTME4c8ewPKEFx1GzlgejclKBSSw9Ux91g1SLUb28T%2F4k50BsYua%2B6vt5VWQVgE9mErZXrmgDXgkR4w0EDTifgK3qCCNh5Yvgbsv35nFnWAqqpO4sAqdkEoCDAUjOF9xrLcK2H0bw2kCUIBrxcHd2ndIf1Kt0R9PdLIl4mNAY04ewb58vXY97Qu7cd7aJJ6nLIZtiFNkL3sFLjLcxuE7t8HcuiF0TZc%2BrRBUNhWgiSGS50Ay1nBM8mSwp6vKqYecqrTZPVRgUeit353g5ADjPOXbuHf9XNhAHm3mnxgnijXjdpKSTyytllU7lmaaXFyS6XBxpxfy8XWS2xvAzDioLloihfvtXqbVvybyuk9N9JHUFHmcminkrHi7wreau0CvvZeMfB3Y%2B0jyZRxPZZWQAZh%2FE%2FYhTzJaM9F%2BjS%2FQz%2FQQM8y2bTqHj%2BnsUc0dMbGC1BV17NblD9HULr9afWopjsLtKHxlj4bBBWN6Q%2FKzJB8h%2F%2BzkUSBarjXNV9dKJz2hWavjUKkJb8ouwiry%2BiSRdmcL2ynj2U7CQwtGU1t%2BmaHjZUaqXjyEwYmIW6KwuQqcqrv2DwQqkgk8%2BcMWBeqUjc5SrxXQGMJvu2ckGOqUB25GuWjb6mSwQNP5wykzxcODAsjAG%2BBcaoXqvIZ7aptlCeyAxxDFhEJvD7JrvhpJsouPNX5JbbBbuQwYZ6jsuQRvc6BpiKAvFZmGVb%2Fwu2GP1kQ44Sd0%2B4Xsspv9BZ2RdBpzjiRwxP5ZttplY1F%2FUnUObavzEufBi3TUiQ0DyWeAjFjFsYwILulbb0%2BTUqSX2PmvNqqbJIDBCRVTOePMuCLkPs8CS&X-Amz-Signature=208c1804dc1b0b4b30ad83131a48ca08fabf22c08af0ce244246297248319047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYAFTPZE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAgU%2BbDgAAiJwE0XOTHgA68%2BBfLmtvisVXX1o0oC3rsAiEAmkpuwgQ%2BaaPOsl121TkcjbGO51re%2B0T5jKSWXlL1s9sqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJbL8blSNf8LKXHeCrcA1uehYeFRVawL7dya3pdtcrT78lnmwxvTME4c8ewPKEFx1GzlgejclKBSSw9Ux91g1SLUb28T%2F4k50BsYua%2B6vt5VWQVgE9mErZXrmgDXgkR4w0EDTifgK3qCCNh5Yvgbsv35nFnWAqqpO4sAqdkEoCDAUjOF9xrLcK2H0bw2kCUIBrxcHd2ndIf1Kt0R9PdLIl4mNAY04ewb58vXY97Qu7cd7aJJ6nLIZtiFNkL3sFLjLcxuE7t8HcuiF0TZc%2BrRBUNhWgiSGS50Ay1nBM8mSwp6vKqYecqrTZPVRgUeit353g5ADjPOXbuHf9XNhAHm3mnxgnijXjdpKSTyytllU7lmaaXFyS6XBxpxfy8XWS2xvAzDioLloihfvtXqbVvybyuk9N9JHUFHmcminkrHi7wreau0CvvZeMfB3Y%2B0jyZRxPZZWQAZh%2FE%2FYhTzJaM9F%2BjS%2FQz%2FQQM8y2bTqHj%2BnsUc0dMbGC1BV17NblD9HULr9afWopjsLtKHxlj4bBBWN6Q%2FKzJB8h%2F%2BzkUSBarjXNV9dKJz2hWavjUKkJb8ouwiry%2BiSRdmcL2ynj2U7CQwtGU1t%2BmaHjZUaqXjyEwYmIW6KwuQqcqrv2DwQqkgk8%2BcMWBeqUjc5SrxXQGMJvu2ckGOqUB25GuWjb6mSwQNP5wykzxcODAsjAG%2BBcaoXqvIZ7aptlCeyAxxDFhEJvD7JrvhpJsouPNX5JbbBbuQwYZ6jsuQRvc6BpiKAvFZmGVb%2Fwu2GP1kQ44Sd0%2B4Xsspv9BZ2RdBpzjiRwxP5ZttplY1F%2FUnUObavzEufBi3TUiQ0DyWeAjFjFsYwILulbb0%2BTUqSX2PmvNqqbJIDBCRVTOePMuCLkPs8CS&X-Amz-Signature=1c8b79bb56f96f64f9d990a54e1765eac86c29b4ee52c19704a40b0ce6ee50f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

