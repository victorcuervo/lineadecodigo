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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG64HESR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIELBsJloG232picQo8bZAef5f%2BXQwqmRthhvxIwVS2BPAiBx5wbVY6T8n3w%2BmO4MLUDBb8ejNrVP5k82PzZ5b8TYjir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMMIflbQIWYUxl6vHUKtwDnGaLZTsgONF4gx1UFgKZ5BseBUdCOKufsII%2BcRLUwk1OYUAc%2FZI0oCXG5tH4oammwIdzf4NkusR55%2Fhd8m0aJ255YlPl7tb37Ag%2BAOaGF34TBZBw5LaWFjz7ZMX%2Fm%2B4pLdjR%2Bg%2BOuvf46dJD0tq2xSQ3zitemgeIlgREiP8RZlJfFsK3HnpdEYVP2DZ%2Ff6Kh5dR0fCmxU4xC2vS%2F2H7aaTQl4SFcFR3sYcJK4E7dB4lKGCOaVFbxF7RH9vtb19Ljgm3GrQUgLs3cJPK8HqNO%2FugHryq4vXIXD6b7KhTlqGbUgKMGr7MlbG6vnkyIXBE8BeA8UKZ%2BP2lKu1O5v9Md7GK4RJAa1GBgi9LUzbEtWLIlS45X24%2FpOO5onn0WJXjITN9kvdtOGBhWuEneLjwNhfNhPtqNeE9CMUoq304I5JEG%2BAwER%2BBfgedu9jhIeWIDbmbTlhSPhTezi0GI4B4T3JdHmOqNBxLaEaLlnHH8B%2Bm7LJx5rx4klLDxOmWNlS3k8HdxzjretJQUemhGlMqiMnvl785e%2BPFeBe%2FWJYKGrPkv%2Ff3SIrNlGXMqMj%2BWiRPu1GE0Rkq0CzJ4P%2FO1ZIUxxQdWZBE2iSgvqsQoT59qRGcL94lPCSpliNihSb4w39S%2FyQY6pgEGDkFq9CAUeuA8fwLwm4oyExmg9KEFzcEs3dzGC9D%2BZV358jnLrwfUhj%2Fq4S741L1n1ZhYlx9Lsc3gCLAvO26DH6YM3S5epS56nkPsCYBObG%2BryA4%2Bvy9rsEnBtr8rcIlGpnqfOf1rgnaFxvN8wzX3AI6OW9m8bvM2h4avTQ64kaYYYNLs924Rw33hbrGt8w2dmgbVWwSnis%2FCXc7L7JsXSjbQH8nw&X-Amz-Signature=6aa6fbb2ffe58d5a56b082c69f5c32f4c2a2951900424aa26900f75e287e4332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG64HESR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIELBsJloG232picQo8bZAef5f%2BXQwqmRthhvxIwVS2BPAiBx5wbVY6T8n3w%2BmO4MLUDBb8ejNrVP5k82PzZ5b8TYjir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMMIflbQIWYUxl6vHUKtwDnGaLZTsgONF4gx1UFgKZ5BseBUdCOKufsII%2BcRLUwk1OYUAc%2FZI0oCXG5tH4oammwIdzf4NkusR55%2Fhd8m0aJ255YlPl7tb37Ag%2BAOaGF34TBZBw5LaWFjz7ZMX%2Fm%2B4pLdjR%2Bg%2BOuvf46dJD0tq2xSQ3zitemgeIlgREiP8RZlJfFsK3HnpdEYVP2DZ%2Ff6Kh5dR0fCmxU4xC2vS%2F2H7aaTQl4SFcFR3sYcJK4E7dB4lKGCOaVFbxF7RH9vtb19Ljgm3GrQUgLs3cJPK8HqNO%2FugHryq4vXIXD6b7KhTlqGbUgKMGr7MlbG6vnkyIXBE8BeA8UKZ%2BP2lKu1O5v9Md7GK4RJAa1GBgi9LUzbEtWLIlS45X24%2FpOO5onn0WJXjITN9kvdtOGBhWuEneLjwNhfNhPtqNeE9CMUoq304I5JEG%2BAwER%2BBfgedu9jhIeWIDbmbTlhSPhTezi0GI4B4T3JdHmOqNBxLaEaLlnHH8B%2Bm7LJx5rx4klLDxOmWNlS3k8HdxzjretJQUemhGlMqiMnvl785e%2BPFeBe%2FWJYKGrPkv%2Ff3SIrNlGXMqMj%2BWiRPu1GE0Rkq0CzJ4P%2FO1ZIUxxQdWZBE2iSgvqsQoT59qRGcL94lPCSpliNihSb4w39S%2FyQY6pgEGDkFq9CAUeuA8fwLwm4oyExmg9KEFzcEs3dzGC9D%2BZV358jnLrwfUhj%2Fq4S741L1n1ZhYlx9Lsc3gCLAvO26DH6YM3S5epS56nkPsCYBObG%2BryA4%2Bvy9rsEnBtr8rcIlGpnqfOf1rgnaFxvN8wzX3AI6OW9m8bvM2h4avTQ64kaYYYNLs924Rw33hbrGt8w2dmgbVWwSnis%2FCXc7L7JsXSjbQH8nw&X-Amz-Signature=328f3e25bff5561f6c19e408b06b7f3a9fe29bb5b3eac609f7f87d457f8b5563&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

