---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IEDZFJB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkfaNhF85F4HbhxJbvZqfTdflc4mbklnTWL%2FrcOi2DlAiBkDmp6mc%2F8CJ4cdqV5tZNvF6hxOvG4gnrJPSsk%2BMhh7SqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD3MCsfVv0AAu1MXeKtwDOdsGzUWRcql75gNrzUqyvF0VEJZrQCfZFHTF6ZkEAF3HJS%2BkoDZIrfSwnYJ30kpNhJIsbAj1rjJPAsHDhXdNLvrnvhdPN%2B4%2BSkirdWOxYSuH5%2FQbjWIcJ9u1N4kHZRcnZP%2Bw7CuZhdQKLoUsXN4fpfWjIvdvFrdBREvAnTDyCl7jPebS8Ql2Rgs%2FlaYjLqu%2FEufLtZRYBNwlQELM1zrDG6OeDBmaDZsdXs8JFTWOqDpybrodu9VhcX3WPDuivzdxwAc7ldOL6vOXqy7%2FBXwOSZAvDjv6JbOgh08mydiE9PuQYuZnMVbMFMvOZT3SGvWhC81elHe1X1LFoImdcoBzm55aKo871Irt7T%2BwpPqHb55x%2Fl%2B%2BLdJvgcwj8ek4L%2Byk7eo%2FxjiotiurPT65cQYn8Zs3umaQryZ0m%2FMCH%2BAQ7OhqyS2Ea9e6AWKLCmNA7ZMpKC%2BR9QVA0NjyIVwF0nWuUU1L9H%2BcPdS4T5RKThVtb4mNT3bU2LXmPQCO97vbPYlQ%2Bf2kS89FouwAyqVX%2FFEn%2FSjeEngLyYUIzSGFXdETadlyCrkyLeUfNjM836cIAcP%2BDjXNWMqLH%2BViRc7LiUWBpNdaz1dL5kQzmO%2BvcEg9LYKEZ4Qn6jcfvsaD%2Fi4wzI7eyQY6pgGuKc4jmN%2FoY9O%2FNA%2FaLoEU0JVcJMzvdfQyTL24nfjzTobdaK5aCLzXQQFfVVFqeXMPhkBcRXj4x%2FC61nFP%2FEDnsYg%2Bl38i3iDgElqcalPv7K4rSMlgWpUVrV1lwVciXcbOV3GlCtOclLA8aKoPQhqSgWxsqM9fFdb9tFrQLWqnP1rcwKUBGzSAH6%2FW1AWoQrw%2BERIx%2FvN3jUpXPnCTNAGUrZbHocJn&X-Amz-Signature=8a6fa4193f2f045f7bed0f0d88fa69bf8a2db9f7887fc0db89fd369115f040c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IEDZFJB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T032107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkfaNhF85F4HbhxJbvZqfTdflc4mbklnTWL%2FrcOi2DlAiBkDmp6mc%2F8CJ4cdqV5tZNvF6hxOvG4gnrJPSsk%2BMhh7SqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD3MCsfVv0AAu1MXeKtwDOdsGzUWRcql75gNrzUqyvF0VEJZrQCfZFHTF6ZkEAF3HJS%2BkoDZIrfSwnYJ30kpNhJIsbAj1rjJPAsHDhXdNLvrnvhdPN%2B4%2BSkirdWOxYSuH5%2FQbjWIcJ9u1N4kHZRcnZP%2Bw7CuZhdQKLoUsXN4fpfWjIvdvFrdBREvAnTDyCl7jPebS8Ql2Rgs%2FlaYjLqu%2FEufLtZRYBNwlQELM1zrDG6OeDBmaDZsdXs8JFTWOqDpybrodu9VhcX3WPDuivzdxwAc7ldOL6vOXqy7%2FBXwOSZAvDjv6JbOgh08mydiE9PuQYuZnMVbMFMvOZT3SGvWhC81elHe1X1LFoImdcoBzm55aKo871Irt7T%2BwpPqHb55x%2Fl%2B%2BLdJvgcwj8ek4L%2Byk7eo%2FxjiotiurPT65cQYn8Zs3umaQryZ0m%2FMCH%2BAQ7OhqyS2Ea9e6AWKLCmNA7ZMpKC%2BR9QVA0NjyIVwF0nWuUU1L9H%2BcPdS4T5RKThVtb4mNT3bU2LXmPQCO97vbPYlQ%2Bf2kS89FouwAyqVX%2FFEn%2FSjeEngLyYUIzSGFXdETadlyCrkyLeUfNjM836cIAcP%2BDjXNWMqLH%2BViRc7LiUWBpNdaz1dL5kQzmO%2BvcEg9LYKEZ4Qn6jcfvsaD%2Fi4wzI7eyQY6pgGuKc4jmN%2FoY9O%2FNA%2FaLoEU0JVcJMzvdfQyTL24nfjzTobdaK5aCLzXQQFfVVFqeXMPhkBcRXj4x%2FC61nFP%2FEDnsYg%2Bl38i3iDgElqcalPv7K4rSMlgWpUVrV1lwVciXcbOV3GlCtOclLA8aKoPQhqSgWxsqM9fFdb9tFrQLWqnP1rcwKUBGzSAH6%2FW1AWoQrw%2BERIx%2FvN3jUpXPnCTNAGUrZbHocJn&X-Amz-Signature=ea90e0e62536303940a665c52495d2e18a85549213c18d97cb128d168a74a222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

