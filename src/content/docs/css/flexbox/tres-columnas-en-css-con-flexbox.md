---
title: Tres Columnas en CSS con Flexbox
description: "Ejemplo para configurar nuestra página para que se puedan ver tres columnas en CSS con Flexbox mediante un contenedor y tres elementos."
lastUpdated: 2024-01-27
slug: /css/tres-columnas-en-css-con-flexbox/
author: victor_cuervo
---

Vamos a utilizar las capacidades del modelo de cajas flexibles o Flexbox de [CSS](https://www.manualweb.net/css/) para poder realizar un diseño que nos muestre tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox. Es decir, vamos a crear tres capas con contenido, las cuales mostraremos en forma de tres columnas.


Lo primero que tenemos que saber es que los modelos de cajas flexibles existen dos componentes principales. Por un lado **el contenedor que es quien agrupa los elementos** y **los elementos en sí que residen dentro del contenedor**.


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bd189e0d-e44d-4851-8aa0-f387883a8887/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWIOVJ6H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUpGIuOoljHvJ118Me0WgmADDsWb9oXEhf%2BL8v1VbA%2FgIhAKvaFbpjibFSE9wkqC4ijiJRDa70ZZl0P8saOdC13QSSKv8DCE8QABoMNjM3NDIzMTgzODA1IgwnusWdFCsKmUUF738q3AMpnVehYI8A6SC9NLMF8ahdZqcV22hISEQ66bszGRKgtSl2hA6PaPInyn%2BVf3%2F0qwoe6Oi%2F97Eh2gXBj%2FbHWdyrcq2%2Fo8A0W3zavoPqKkBQZkCIek6TWjkV2TcY2c3LYPsneUF%2FEWl26ixbxbR%2B7IacLqd7cWvIXyN7RVIPFvTldI7j0yN3S0ZJz%2B%2FS0NuHi3tVLg8bOey1S4W9QgSoyIuY8i9kxIwX%2BMQoA8xc8lzDtkwu99fsbxgzPLwArq21Cajm5omyhIZTWxt2IRHkQAqMLAa2bF%2F7aCRWESlkiqIReCIcf2eC0iqhAfSRehnh95BrxCv3ZZLY4Wzep2Xn%2B7IeWXPj9hs7pwJM93z89x22jxWqlq0opCJCSIajTsNryJ8aYQ%2BbfDh91V8YF3Rb7aRfrfLIZLFEA6xyfBARD0sU0fsj7fFjV0eDLe%2FTFBL%2Bs36HP5tO8ggVwBsMCvRkWEr1P9p%2Bl%2FjUJubCwV18mkwTGyQypfHQV76%2Fhe1wpPfAkzEJvYpFwDGGQTWgAIBbT7C2wJsWRFKkWaerkD8Tf9zoF2Ey2O5twQTbShoMmT711pn6tx9xsCsP4a48VKIbXZo3QBQUHwZBXHwPu%2F9XptsZosOBF71%2BpDsv3MlZ9zC9jMjJBjqkAdiCVbuC6F6qMues0Th4HhF1mfaDnyOIhMWyiV6BCE3Wx4w4FJ3%2FD6nNDoFlEPgu4RdRv2LB1kQ32hqNsO%2FkTbFABrhUn%2FGAs9BVSuKabHASTFudhi4AJfQVAHQRYYPDrON7BZLgj6ks%2BpftCLtbeqYDgr2BzOOXeytEUch%2BqawbKEEdrN2L4lmdSTtrA0npUwoRNihh6K0uXo%2F99e3EJFo9P71X&X-Amz-Signature=25dd9372b551b55e154f948a3630b7f1f75e9f1ced0c2a378dc770a46341d0a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Efecto de cómo quedan Tres Columnas en CSS con Flexbox](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/bebf9ac1-660e-4bb3-bf3e-d775186ec83e/tres-columnas.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWIOVJ6H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T025242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUpGIuOoljHvJ118Me0WgmADDsWb9oXEhf%2BL8v1VbA%2FgIhAKvaFbpjibFSE9wkqC4ijiJRDa70ZZl0P8saOdC13QSSKv8DCE8QABoMNjM3NDIzMTgzODA1IgwnusWdFCsKmUUF738q3AMpnVehYI8A6SC9NLMF8ahdZqcV22hISEQ66bszGRKgtSl2hA6PaPInyn%2BVf3%2F0qwoe6Oi%2F97Eh2gXBj%2FbHWdyrcq2%2Fo8A0W3zavoPqKkBQZkCIek6TWjkV2TcY2c3LYPsneUF%2FEWl26ixbxbR%2B7IacLqd7cWvIXyN7RVIPFvTldI7j0yN3S0ZJz%2B%2FS0NuHi3tVLg8bOey1S4W9QgSoyIuY8i9kxIwX%2BMQoA8xc8lzDtkwu99fsbxgzPLwArq21Cajm5omyhIZTWxt2IRHkQAqMLAa2bF%2F7aCRWESlkiqIReCIcf2eC0iqhAfSRehnh95BrxCv3ZZLY4Wzep2Xn%2B7IeWXPj9hs7pwJM93z89x22jxWqlq0opCJCSIajTsNryJ8aYQ%2BbfDh91V8YF3Rb7aRfrfLIZLFEA6xyfBARD0sU0fsj7fFjV0eDLe%2FTFBL%2Bs36HP5tO8ggVwBsMCvRkWEr1P9p%2Bl%2FjUJubCwV18mkwTGyQypfHQV76%2Fhe1wpPfAkzEJvYpFwDGGQTWgAIBbT7C2wJsWRFKkWaerkD8Tf9zoF2Ey2O5twQTbShoMmT711pn6tx9xsCsP4a48VKIbXZo3QBQUHwZBXHwPu%2F9XptsZosOBF71%2BpDsv3MlZ9zC9jMjJBjqkAdiCVbuC6F6qMues0Th4HhF1mfaDnyOIhMWyiV6BCE3Wx4w4FJ3%2FD6nNDoFlEPgu4RdRv2LB1kQ32hqNsO%2FkTbFABrhUn%2FGAs9BVSuKabHASTFudhi4AJfQVAHQRYYPDrON7BZLgj6ks%2BpftCLtbeqYDgr2BzOOXeytEUch%2BqawbKEEdrN2L4lmdSTtrA0npUwoRNihh6K0uXo%2F99e3EJFo9P71X&X-Amz-Signature=4191c195d563c3fc9c3910c013e22aba355487d3316c6b664ede99b407a80ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Con esto ya habremos aprendido un poco más a cómo crear dentro de nuestra página tres columnas en [CSS](https://www.manualweb.net/css/) con Flexbox.

