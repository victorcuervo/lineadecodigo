---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXZHZ3Q7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHic%2BHYWcoVIaIixdpSOnbDSK2EW5OdQ2P3qlKH%2BWUWLAiEA39NGwU05wNKUQ6FrGsvaTHsTsHRdh2ng6KK1GFWxjRsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNdnShaG4Y0RBE%2FLnircA6ERUcDgySN4somOf6t%2BChIktHhd6vrQsqP80MfElyc%2Bb7DrNXoN0LWP2Nuwm9ZNMJZmRG1t4DsyscJp2Tc9poczcUk1GOE0R1tUqqjGiPI1wMWmQON3kkMIEMQ7oFGKVWf3IuWdrCu1Qxn8Ea3fe34hHq39LX4ZdB4oikaE0INQfyFD68oCXxVANawnIoF66xOllCVsmivz7MvVMQx%2BW%2FHWqjrPp%2FyIYdG9tt2sJcfOMRbBB0VP29%2BDMPyCNqAGfpi0acTWvJjdGNIZEzJVZkr%2BHX9EMA10EA5shFwjJNw8pu3M6AOpD7XWne6jbLWce0xfWxFKVJcbp898kvM%2FosO5x5dDR3RnnGr16yoocK4DNtjLQoNkU%2FR0X119jbUIwsUQP4Lna2nh19a%2FNTA9yWz4HOPi7RZ5MfJ1Uw8i0gOrQM10WLlo2UM3m41zTDeKLhftTENTpASwtY84Wbd57ySsi88Dv97yRg88lxkYF%2BmN9dR4l3lSLZd%2BmLIMrf2Aun5asGvMPYiYcmFzHqnOeVLWDuGx7%2BfNWImG6OIa8IHufyqogTGKwPle2lZGCuBz1wh6pkccvJkO49zV11OkElMTbvE4GCGMUBY1JGuOXl4YRdSSTTBwWpyrB4zfMNCQxMkGOqUB0SulqQdm%2FPVyuAWOwnBkIThUdHmU%2BnaR9iJAkmnolNf8so7SipDkkhIuG5tCSSWBD0mbVSLZWauKNReUevxmk2JyNGo6%2B%2BUiztf%2Budx9FS5Z8BBjvSD0wpFaDL4AHyKBfuqyfLqs6ba5ZJ1w%2FXEpZcJ5vy9Mh18X97ZB3oSVt%2FgUnvQhe9c7d3FlPc5S5ZhP%2BH5sPkfirc0E06QdF3cyhiQnpPxc&X-Amz-Signature=07774f52fbd7db74601e1c26283e613d5bd0dd554f66c854d4f6bbb53402b63f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXZHZ3Q7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T044959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIHic%2BHYWcoVIaIixdpSOnbDSK2EW5OdQ2P3qlKH%2BWUWLAiEA39NGwU05wNKUQ6FrGsvaTHsTsHRdh2ng6KK1GFWxjRsq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNdnShaG4Y0RBE%2FLnircA6ERUcDgySN4somOf6t%2BChIktHhd6vrQsqP80MfElyc%2Bb7DrNXoN0LWP2Nuwm9ZNMJZmRG1t4DsyscJp2Tc9poczcUk1GOE0R1tUqqjGiPI1wMWmQON3kkMIEMQ7oFGKVWf3IuWdrCu1Qxn8Ea3fe34hHq39LX4ZdB4oikaE0INQfyFD68oCXxVANawnIoF66xOllCVsmivz7MvVMQx%2BW%2FHWqjrPp%2FyIYdG9tt2sJcfOMRbBB0VP29%2BDMPyCNqAGfpi0acTWvJjdGNIZEzJVZkr%2BHX9EMA10EA5shFwjJNw8pu3M6AOpD7XWne6jbLWce0xfWxFKVJcbp898kvM%2FosO5x5dDR3RnnGr16yoocK4DNtjLQoNkU%2FR0X119jbUIwsUQP4Lna2nh19a%2FNTA9yWz4HOPi7RZ5MfJ1Uw8i0gOrQM10WLlo2UM3m41zTDeKLhftTENTpASwtY84Wbd57ySsi88Dv97yRg88lxkYF%2BmN9dR4l3lSLZd%2BmLIMrf2Aun5asGvMPYiYcmFzHqnOeVLWDuGx7%2BfNWImG6OIa8IHufyqogTGKwPle2lZGCuBz1wh6pkccvJkO49zV11OkElMTbvE4GCGMUBY1JGuOXl4YRdSSTTBwWpyrB4zfMNCQxMkGOqUB0SulqQdm%2FPVyuAWOwnBkIThUdHmU%2BnaR9iJAkmnolNf8so7SipDkkhIuG5tCSSWBD0mbVSLZWauKNReUevxmk2JyNGo6%2B%2BUiztf%2Budx9FS5Z8BBjvSD0wpFaDL4AHyKBfuqyfLqs6ba5ZJ1w%2FXEpZcJ5vy9Mh18X97ZB3oSVt%2FgUnvQhe9c7d3FlPc5S5ZhP%2BH5sPkfirc0E06QdF3cyhiQnpPxc&X-Amz-Signature=10aa7531443fa8a6e26862cf1e172ce2d7aa5161629e98016b9ba7b5f26c4bab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

