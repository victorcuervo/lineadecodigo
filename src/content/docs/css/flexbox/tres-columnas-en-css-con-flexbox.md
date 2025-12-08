---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVED2XF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSLFvo9Ivj3ckoWVHhDYM%2FZdem5SUxL7r%2FMO1Hzu2t0AiARD3%2BqX%2B%2Bk0MgHP1nUcrreD9z5AQ6kBHGpqAbzh2a1iSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3NShZuERYDHp%2BXGJKtwDC0Np8DX0BW6YOBeeaH5b3r6Q3lLgITEckc3cScysZV8QFenlSkBUwyDohOEmU5R%2FosH3TzoRH2EiR4Hju%2F0QtwiBApYzTpItzUlm6behti37iYc6Rs%2BBj1chHLeOZ5SQjjuDZkgsNXevq%2F%2FZtvXMzmoaVWxp8tZAQkHA3S6JRvqP6esCCgTgozqeybDf9%2FE%2FG1bUPQdC1ijd7bAvuUC4mID0ObMI1lWybzrPR0XsO6vdva%2BUCWa%2BsF80BA2Jf5zQ0t7XOfvGeXrQb8ITXtfTniVJvKGk%2F3wusp9F8Pj5Q41KVPtbNsaCEYktmaf9CaYCnzLfUJRoWdzMF%2BvRSjgzNzH63%2B3q8qVTGppF9pkQ6ag5qjQyKBEaKmJUF0oIS8MHE8m7lkcpuIcbdNDRtAggsW%2FvCmLvBAnqVxz3F6cdiXZgINFvyiNdxV0OFjlgO91%2FXZi7ky3nLjlmX4GCXnAD7XmUyHWImEG98RxJ1n4Cn2cCBf67EXtC6d33rpMz1wrK6wLhNpunu3R8OgMyJLs%2BsqBL9FTahJQBclhUCI%2F%2FNE1k8OKHv5giHdaOlxMCnpxTXyPpnY2oFuQQO13tItjWOCKzuZEBlmENW9kOnqmE6wksqYYWp20n36HHoakwr5DbyQY6pgHdR0fbopcZfBwG0eg1L8rZO0%2FUGJVkw8IdmBev2Y6FGZJW71C0KpI8mbkdMj%2BrV%2B17IduQqeNMJDn5R9%2Bc8Ui6V8%2BVZ7GLWbDUoa4%2BtoRe7gy9Tm%2B47Wi%2F9HVUY%2BxiaoSBLbM%2FNMSuBRRtDiEHPaJAG8bJHQB7ZrDL1nISwyY4pg9Ntj4GqbIL5aT0CwEVCg0vJV%2B3jLzaDbNVlconzOspaOU1ldRF&X-Amz-Signature=c2af209fe87ad932d531a4f80cbfa3f4e3e2fb7798e6aac1d8d13b0cd7c277aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIVED2XF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBSLFvo9Ivj3ckoWVHhDYM%2FZdem5SUxL7r%2FMO1Hzu2t0AiARD3%2BqX%2B%2Bk0MgHP1nUcrreD9z5AQ6kBHGpqAbzh2a1iSqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3NShZuERYDHp%2BXGJKtwDC0Np8DX0BW6YOBeeaH5b3r6Q3lLgITEckc3cScysZV8QFenlSkBUwyDohOEmU5R%2FosH3TzoRH2EiR4Hju%2F0QtwiBApYzTpItzUlm6behti37iYc6Rs%2BBj1chHLeOZ5SQjjuDZkgsNXevq%2F%2FZtvXMzmoaVWxp8tZAQkHA3S6JRvqP6esCCgTgozqeybDf9%2FE%2FG1bUPQdC1ijd7bAvuUC4mID0ObMI1lWybzrPR0XsO6vdva%2BUCWa%2BsF80BA2Jf5zQ0t7XOfvGeXrQb8ITXtfTniVJvKGk%2F3wusp9F8Pj5Q41KVPtbNsaCEYktmaf9CaYCnzLfUJRoWdzMF%2BvRSjgzNzH63%2B3q8qVTGppF9pkQ6ag5qjQyKBEaKmJUF0oIS8MHE8m7lkcpuIcbdNDRtAggsW%2FvCmLvBAnqVxz3F6cdiXZgINFvyiNdxV0OFjlgO91%2FXZi7ky3nLjlmX4GCXnAD7XmUyHWImEG98RxJ1n4Cn2cCBf67EXtC6d33rpMz1wrK6wLhNpunu3R8OgMyJLs%2BsqBL9FTahJQBclhUCI%2F%2FNE1k8OKHv5giHdaOlxMCnpxTXyPpnY2oFuQQO13tItjWOCKzuZEBlmENW9kOnqmE6wksqYYWp20n36HHoakwr5DbyQY6pgHdR0fbopcZfBwG0eg1L8rZO0%2FUGJVkw8IdmBev2Y6FGZJW71C0KpI8mbkdMj%2BrV%2B17IduQqeNMJDn5R9%2Bc8Ui6V8%2BVZ7GLWbDUoa4%2BtoRe7gy9Tm%2B47Wi%2F9HVUY%2BxiaoSBLbM%2FNMSuBRRtDiEHPaJAG8bJHQB7ZrDL1nISwyY4pg9Ntj4GqbIL5aT0CwEVCg0vJV%2B3jLzaDbNVlconzOspaOU1ldRF&X-Amz-Signature=6bd7c84248a55541877bda37442c6b2699d3e0416befa199fe5bbe4dd922b50f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

